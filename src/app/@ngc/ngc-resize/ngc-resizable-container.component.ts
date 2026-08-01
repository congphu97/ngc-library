import { Component, Input, ContentChildren, QueryList, AfterContentInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { NgcResizablePanelComponent } from './ngc-resizable-panel.component';
import { NgcResizableHandleComponent } from './ngc-resizable-handle.component';

@Component({
	selector		: 'ngc-resizable-container',
	template		: `<ng-content></ng-content>`,
	styleUrls		: [ './ngc-resize.scss' ],
	encapsulation	: ViewEncapsulation.None,
	host			: {
		class: 'ngc-resizable-container',
		'[class.ngc-resizable-container--horizontal]': 'direction === "horizontal"',
		'[class.ngc-resizable-container--vertical]': 'direction === "vertical"',
	}
})
export class NgcResizableContainerComponent implements AfterContentInit {

	@Input() public direction: 'horizontal' | 'vertical' = 'horizontal';

	@ContentChildren(NgcResizablePanelComponent) public panels: QueryList<NgcResizablePanelComponent>;
	@ContentChildren(NgcResizableHandleComponent) public handles: QueryList<NgcResizableHandleComponent>;

	private activeDragIndex: number = -1;
	private startPosition: number = 0;
	private startSizes: number[] = [];

	constructor(private el: ElementRef) {}

	public ngAfterContentInit() {
		// Initialize panel sizes
		setTimeout(() => {
			this.initializeSizes();
		});

		// Listen to handle drag events
		this.handles.forEach((handle, index) => {
			handle.dragStart.subscribe((event: MouseEvent | TouchEvent) => {
				this.onDragStart(index, event);
			});
		});
	}

	private initializeSizes() {
		const panelsArray = this.panels.toArray();
		if (panelsArray.length === 0) return;

		let totalExplicitSize = 0;
		let unconfiguredCount = 0;

		panelsArray.forEach(panel => {
			if (panel.defaultSize !== undefined) {
				totalExplicitSize += panel.defaultSize;
			} else {
				unconfiguredCount++;
			}
		});

		const remainingSize = Math.max(0, 100 - totalExplicitSize);
		const defaultDistributedSize = unconfiguredCount > 0 ? remainingSize / unconfiguredCount : 0;

		panelsArray.forEach(panel => {
			if (panel.size === undefined) {
				panel.size = panel.defaultSize !== undefined ? panel.defaultSize : defaultDistributedSize;
			}
			panel.updateSize(this.direction);
		});
	}

	private onDragStart(handleIndex: number, event: MouseEvent | TouchEvent) {
		const panelsArray = this.panels.toArray();
		if (panelsArray.length < 2 || handleIndex >= panelsArray.length - 1) return;

		this.activeDragIndex = handleIndex;
		this.startPosition = this.getPosition(event);
		this.startSizes = panelsArray.map(p => p.size || 0);

		// Register global drag move/end listeners
		const onMove = (e: MouseEvent | TouchEvent) => this.onDragMove(e);
		const onEnd = () => {
			document.removeEventListener('mousemove', onMove);
			document.removeEventListener('mouseup', onEnd);
			document.removeEventListener('touchmove', onMove);
			document.removeEventListener('touchend', onEnd);
			this.handles.toArray()[handleIndex].isDragging = false;
		};

		document.addEventListener('mousemove', onMove);
		document.addEventListener('mouseup', onEnd);
		document.addEventListener('touchmove', onMove, { passive: false });
		document.addEventListener('touchend', onEnd);
		this.handles.toArray()[handleIndex].isDragging = true;
	}

	private onDragMove(event: MouseEvent | TouchEvent) {
		if (this.activeDragIndex === -1) return;
		event.preventDefault();

		const panelsArray = this.panels.toArray();
		const prevPanel = panelsArray[this.activeDragIndex];
		const nextPanel = panelsArray[this.activeDragIndex + 1];
		if (!prevPanel || !nextPanel) return;

		const currentPosition = this.getPosition(event);
		const deltaPx = currentPosition - this.startPosition;

		// Calculate total container size in pixels
		const rect = this.el.nativeElement.getBoundingClientRect();
		const containerSizePx = this.direction === 'horizontal' ? rect.width : rect.height;
		if (containerSizePx === 0) return;

		// Convert delta px to percentage
		const deltaPct = (deltaPx / containerSizePx) * 100;

		const prevStartSize = this.startSizes[this.activeDragIndex];
		const nextStartSize = this.startSizes[this.activeDragIndex + 1];
		const totalSize = prevStartSize + nextStartSize;

		let newPrevSize = prevStartSize + deltaPct;
		let newNextSize = nextStartSize - deltaPct;

		// Enforce min/max limits
		const prevMin = prevPanel.minSize !== undefined ? prevPanel.minSize : 0;
		const prevMax = prevPanel.maxSize !== undefined ? prevPanel.maxSize : 100;
		const nextMin = nextPanel.minSize !== undefined ? nextPanel.minSize : 0;
		const nextMax = nextPanel.maxSize !== undefined ? nextPanel.maxSize : 100;

		if (newPrevSize < prevMin) {
			newPrevSize = prevMin;
			newNextSize = totalSize - prevMin;
		} else if (newPrevSize > prevMax) {
			newPrevSize = prevMax;
			newNextSize = totalSize - prevMax;
		}

		if (newNextSize < nextMin) {
			newNextSize = nextMin;
			newPrevSize = totalSize - nextMin;
		} else if (newNextSize > nextMax) {
			newNextSize = nextMax;
			newPrevSize = totalSize - nextMax;
		}

		prevPanel.size = newPrevSize;
		nextPanel.size = newNextSize;

		prevPanel.updateSize(this.direction);
		nextPanel.updateSize(this.direction);
	}

	private getPosition(event: MouseEvent | TouchEvent): number {
		if ('touches' in event) {
			return this.direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
		}
		return this.direction === 'horizontal' ? event.clientX : event.clientY;
	}

}
