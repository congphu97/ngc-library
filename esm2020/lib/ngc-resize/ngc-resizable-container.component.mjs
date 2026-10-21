import { Component, Input, ContentChildren, QueryList, ElementRef, ViewEncapsulation } from '@angular/core';
import { NgcResizablePanelComponent } from './ngc-resizable-panel.component';
import { NgcResizableHandleComponent } from './ngc-resizable-handle.component';
import * as i0 from "@angular/core";
export class NgcResizableContainerComponent {
    constructor(el) {
        this.el = el;
        this.direction = 'horizontal';
        this.activeDragIndex = -1;
        this.startPosition = 0;
        this.startSizes = [];
    }
    ngAfterContentInit() {
        // Initialize panel sizes
        setTimeout(() => {
            this.initializeSizes();
        });
        // Listen to handle drag events
        this.handles.forEach((handle, index) => {
            handle.dragStart.subscribe((event) => {
                this.onDragStart(index, event);
            });
        });
    }
    initializeSizes() {
        const panelsArray = this.panels.toArray();
        if (panelsArray.length === 0)
            return;
        let totalExplicitSize = 0;
        let unconfiguredCount = 0;
        panelsArray.forEach(panel => {
            if (panel.defaultSize !== undefined) {
                totalExplicitSize += panel.defaultSize;
            }
            else {
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
    onDragStart(handleIndex, event) {
        const panelsArray = this.panels.toArray();
        if (panelsArray.length < 2 || handleIndex >= panelsArray.length - 1)
            return;
        this.activeDragIndex = handleIndex;
        this.startPosition = this.getPosition(event);
        this.startSizes = panelsArray.map(p => p.size || 0);
        // Register global drag move/end listeners
        const onMove = (e) => this.onDragMove(e);
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
    onDragMove(event) {
        if (this.activeDragIndex === -1)
            return;
        event.preventDefault();
        const panelsArray = this.panels.toArray();
        const prevPanel = panelsArray[this.activeDragIndex];
        const nextPanel = panelsArray[this.activeDragIndex + 1];
        if (!prevPanel || !nextPanel)
            return;
        const currentPosition = this.getPosition(event);
        const deltaPx = currentPosition - this.startPosition;
        // Calculate total container size in pixels
        const rect = this.el.nativeElement.getBoundingClientRect();
        const containerSizePx = this.direction === 'horizontal' ? rect.width : rect.height;
        if (containerSizePx === 0)
            return;
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
        }
        else if (newPrevSize > prevMax) {
            newPrevSize = prevMax;
            newNextSize = totalSize - prevMax;
        }
        if (newNextSize < nextMin) {
            newNextSize = nextMin;
            newPrevSize = totalSize - nextMin;
        }
        else if (newNextSize > nextMax) {
            newNextSize = nextMax;
            newPrevSize = totalSize - nextMax;
        }
        prevPanel.size = newPrevSize;
        nextPanel.size = newNextSize;
        prevPanel.updateSize(this.direction);
        nextPanel.updateSize(this.direction);
    }
    getPosition(event) {
        if ('touches' in event) {
            return this.direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
        }
        return this.direction === 'horizontal' ? event.clientX : event.clientY;
    }
}
NgcResizableContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizableContainerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcResizableContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcResizableContainerComponent, selector: "ngc-resizable-container", inputs: { direction: "direction" }, host: { properties: { "class.ngc-resizable-container--horizontal": "direction === \"horizontal\"", "class.ngc-resizable-container--vertical": "direction === \"vertical\"" }, classAttribute: "ngc-resizable-container" }, queries: [{ propertyName: "panels", predicate: NgcResizablePanelComponent }, { propertyName: "handles", predicate: NgcResizableHandleComponent }], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [".ngc-resizable-container{display:flex;width:100%;height:100%;overflow:hidden}.ngc-resizable-container--horizontal{flex-direction:row}.ngc-resizable-container--horizontal>.ngc-resizable-handle{width:8px;cursor:col-resize;margin:0 -4px;z-index:10;position:relative;height:100%}.ngc-resizable-container--horizontal>.ngc-resizable-handle .ngc-resizable-handle__line{width:2px;height:100%;margin:0 auto;background-color:var(--ngc-color-neutral-border-default, #e4e4e7);transition:background-color .2s ease}.ngc-resizable-container--horizontal>.ngc-resizable-handle:hover .ngc-resizable-handle__line,.ngc-resizable-container--horizontal>.ngc-resizable-handle.ngc-resizable-handle--dragging .ngc-resizable-handle__line{background-color:var(--ngc-color-primary-default, #111)}.ngc-resizable-container--vertical{flex-direction:column}.ngc-resizable-container--vertical>.ngc-resizable-handle{height:8px;cursor:row-resize;margin:-4px 0;z-index:10;position:relative;width:100%}.ngc-resizable-container--vertical>.ngc-resizable-handle .ngc-resizable-handle__line{height:2px;width:100%;margin:auto 0;background-color:var(--ngc-color-neutral-border-default, #e4e4e7);transition:background-color .2s ease}.ngc-resizable-container--vertical>.ngc-resizable-handle:hover .ngc-resizable-handle__line,.ngc-resizable-container--vertical>.ngc-resizable-handle.ngc-resizable-handle--dragging .ngc-resizable-handle__line{background-color:var(--ngc-color-primary-default, #111)}.ngc-resizable-panel{display:block;overflow:auto;box-sizing:border-box}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizableContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-resizable-container', template: `<ng-content></ng-content>`, encapsulation: ViewEncapsulation.None, host: {
                        class: 'ngc-resizable-container',
                        '[class.ngc-resizable-container--horizontal]': 'direction === "horizontal"',
                        '[class.ngc-resizable-container--vertical]': 'direction === "vertical"',
                    }, styles: [".ngc-resizable-container{display:flex;width:100%;height:100%;overflow:hidden}.ngc-resizable-container--horizontal{flex-direction:row}.ngc-resizable-container--horizontal>.ngc-resizable-handle{width:8px;cursor:col-resize;margin:0 -4px;z-index:10;position:relative;height:100%}.ngc-resizable-container--horizontal>.ngc-resizable-handle .ngc-resizable-handle__line{width:2px;height:100%;margin:0 auto;background-color:var(--ngc-color-neutral-border-default, #e4e4e7);transition:background-color .2s ease}.ngc-resizable-container--horizontal>.ngc-resizable-handle:hover .ngc-resizable-handle__line,.ngc-resizable-container--horizontal>.ngc-resizable-handle.ngc-resizable-handle--dragging .ngc-resizable-handle__line{background-color:var(--ngc-color-primary-default, #111)}.ngc-resizable-container--vertical{flex-direction:column}.ngc-resizable-container--vertical>.ngc-resizable-handle{height:8px;cursor:row-resize;margin:-4px 0;z-index:10;position:relative;width:100%}.ngc-resizable-container--vertical>.ngc-resizable-handle .ngc-resizable-handle__line{height:2px;width:100%;margin:auto 0;background-color:var(--ngc-color-neutral-border-default, #e4e4e7);transition:background-color .2s ease}.ngc-resizable-container--vertical>.ngc-resizable-handle:hover .ngc-resizable-handle__line,.ngc-resizable-container--vertical>.ngc-resizable-handle.ngc-resizable-handle--dragging .ngc-resizable-handle__line{background-color:var(--ngc-color-primary-default, #111)}.ngc-resizable-panel{display:block;overflow:auto;box-sizing:border-box}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { direction: [{
                type: Input
            }], panels: [{
                type: ContentChildren,
                args: [NgcResizablePanelComponent]
            }], handles: [{
                type: ContentChildren,
                args: [NgcResizableHandleComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXJlc2l6YWJsZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtcmVzaXplL25nYy1yZXNpemFibGUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFvQixVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBYS9FLE1BQU0sT0FBTyw4QkFBOEI7SUFXMUMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFUbEIsY0FBUyxHQUE4QixZQUFZLENBQUM7UUFLNUQsb0JBQWUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM3QixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixlQUFVLEdBQWEsRUFBRSxDQUFDO0lBRUcsQ0FBQztJQUUvQixrQkFBa0I7UUFDeEIseUJBQXlCO1FBQ3pCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFD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O3FCQUN2RTtpR0FJZSxTQUFTO3NCQUF4QixLQUFLO2dCQUU4QyxNQUFNO3NCQUF6RCxlQUFlO3VCQUFDLDBCQUEwQjtnQkFDVSxPQUFPO3NCQUEzRCxlQUFlO3VCQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdjUmVzaXphYmxlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL25nYy1yZXNpemFibGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY1Jlc2l6YWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vbmdjLXJlc2l6YWJsZS1oYW5kbGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1yZXNpemFibGUtY29udGFpbmVyJyxcblx0dGVtcGxhdGVcdFx0OiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLXJlc2l6ZS5zY3NzJyBdLFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3RcdFx0XHQ6IHtcblx0XHRjbGFzczogJ25nYy1yZXNpemFibGUtY29udGFpbmVyJyxcblx0XHQnW2NsYXNzLm5nYy1yZXNpemFibGUtY29udGFpbmVyLS1ob3Jpem9udGFsXSc6ICdkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJyxcblx0XHQnW2NsYXNzLm5nYy1yZXNpemFibGUtY29udGFpbmVyLS12ZXJ0aWNhbF0nOiAnZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCInLFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIE5nY1Jlc2l6YWJsZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG5cblx0QENvbnRlbnRDaGlsZHJlbihOZ2NSZXNpemFibGVQYW5lbENvbXBvbmVudCkgcHVibGljIHBhbmVsczogUXVlcnlMaXN0PE5nY1Jlc2l6YWJsZVBhbmVsQ29tcG9uZW50Pjtcblx0QENvbnRlbnRDaGlsZHJlbihOZ2NSZXNpemFibGVIYW5kbGVDb21wb25lbnQpIHB1YmxpYyBoYW5kbGVzOiBRdWVyeUxpc3Q8TmdjUmVzaXphYmxlSGFuZGxlQ29tcG9uZW50PjtcblxuXHRwcml2YXRlIGFjdGl2ZURyYWdJbmRleDogbnVtYmVyID0gLTE7XG5cdHByaXZhdGUgc3RhcnRQb3NpdGlvbjogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBzdGFydFNpemVzOiBudW1iZXJbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cblx0cHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHQvLyBJbml0aWFsaXplIHBhbmVsIHNpemVzXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmluaXRpYWxpemVTaXplcygpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gTGlzdGVuIHRvIGhhbmRsZSBkcmFnIGV2ZW50c1xuXHRcdHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XG5cdFx0XHRoYW5kbGUuZHJhZ1N0YXJ0LnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMub25EcmFnU3RhcnQoaW5kZXgsIGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0aWFsaXplU2l6ZXMoKSB7XG5cdFx0Y29uc3QgcGFuZWxzQXJyYXkgPSB0aGlzLnBhbmVscy50b0FycmF5KCk7XG5cdFx0aWYgKHBhbmVsc0FycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG5cdFx0bGV0IHRvdGFsRXhwbGljaXRTaXplID0gMDtcblx0XHRsZXQgdW5jb25maWd1cmVkQ291bnQgPSAwO1xuXG5cdFx0cGFuZWxzQXJyYXkuZm9yRWFjaChwYW5lbCA9PiB7XG5cdFx0XHRpZiAocGFuZWwuZGVmYXVsdFNpemUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0b3RhbEV4cGxpY2l0U2l6ZSArPSBwYW5lbC5kZWZhdWx0U2l6ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVuY29uZmlndXJlZENvdW50Kys7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb25zdCByZW1haW5pbmdTaXplID0gTWF0aC5tYXgoMCwgMTAwIC0gdG90YWxFeHBsaWNpdFNpemUpO1xuXHRcdGNvbnN0IGRlZmF1bHREaXN0cmlidXRlZFNpemUgPSB1bmNvbmZpZ3VyZWRDb3VudCA+IDAgPyByZW1haW5pbmdTaXplIC8gdW5jb25maWd1cmVkQ291bnQgOiAwO1xuXG5cdFx0cGFuZWxzQXJyYXkuZm9yRWFjaChwYW5lbCA9PiB7XG5cdFx0XHRpZiAocGFuZWwuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHBhbmVsLnNpemUgPSBwYW5lbC5kZWZhdWx0U2l6ZSAhPT0gdW5kZWZpbmVkID8gcGFuZWwuZGVmYXVsdFNpemUgOiBkZWZhdWx0RGlzdHJpYnV0ZWRTaXplO1xuXHRcdFx0fVxuXHRcdFx0cGFuZWwudXBkYXRlU2l6ZSh0aGlzLmRpcmVjdGlvbik7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9uRHJhZ1N0YXJ0KGhhbmRsZUluZGV4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xuXHRcdGNvbnN0IHBhbmVsc0FycmF5ID0gdGhpcy5wYW5lbHMudG9BcnJheSgpO1xuXHRcdGlmIChwYW5lbHNBcnJheS5sZW5ndGggPCAyIHx8IGhhbmRsZUluZGV4ID49IHBhbmVsc0FycmF5Lmxlbmd0aCAtIDEpIHJldHVybjtcblxuXHRcdHRoaXMuYWN0aXZlRHJhZ0luZGV4ID0gaGFuZGxlSW5kZXg7XG5cdFx0dGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cdFx0dGhpcy5zdGFydFNpemVzID0gcGFuZWxzQXJyYXkubWFwKHAgPT4gcC5zaXplIHx8IDApO1xuXG5cdFx0Ly8gUmVnaXN0ZXIgZ2xvYmFsIGRyYWcgbW92ZS9lbmQgbGlzdGVuZXJzXG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB0aGlzLm9uRHJhZ01vdmUoZSk7XG5cdFx0Y29uc3Qgb25FbmQgPSAoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdmUpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRW5kKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uTW92ZSk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRW5kKTtcblx0XHRcdHRoaXMuaGFuZGxlcy50b0FycmF5KClbaGFuZGxlSW5kZXhdLmlzRHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3ZlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25FbmQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRW5kKTtcblx0XHR0aGlzLmhhbmRsZXMudG9BcnJheSgpW2hhbmRsZUluZGV4XS5pc0RyYWdnaW5nID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgb25EcmFnTW92ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHtcblx0XHRpZiAodGhpcy5hY3RpdmVEcmFnSW5kZXggPT09IC0xKSByZXR1cm47XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IHBhbmVsc0FycmF5ID0gdGhpcy5wYW5lbHMudG9BcnJheSgpO1xuXHRcdGNvbnN0IHByZXZQYW5lbCA9IHBhbmVsc0FycmF5W3RoaXMuYWN0aXZlRHJhZ0luZGV4XTtcblx0XHRjb25zdCBuZXh0UGFuZWwgPSBwYW5lbHNBcnJheVt0aGlzLmFjdGl2ZURyYWdJbmRleCArIDFdO1xuXHRcdGlmICghcHJldlBhbmVsIHx8ICFuZXh0UGFuZWwpIHJldHVybjtcblxuXHRcdGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuXHRcdGNvbnN0IGRlbHRhUHggPSBjdXJyZW50UG9zaXRpb24gLSB0aGlzLnN0YXJ0UG9zaXRpb247XG5cblx0XHQvLyBDYWxjdWxhdGUgdG90YWwgY29udGFpbmVyIHNpemUgaW4gcGl4ZWxzXG5cdFx0Y29uc3QgcmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCBjb250YWluZXJTaXplUHggPSB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0O1xuXHRcdGlmIChjb250YWluZXJTaXplUHggPT09IDApIHJldHVybjtcblxuXHRcdC8vIENvbnZlcnQgZGVsdGEgcHggdG8gcGVyY2VudGFnZVxuXHRcdGNvbnN0IGRlbHRhUGN0ID0gKGRlbHRhUHggLyBjb250YWluZXJTaXplUHgpICogMTAwO1xuXG5cdFx0Y29uc3QgcHJldlN0YXJ0U2l6ZSA9IHRoaXMuc3RhcnRTaXplc1t0aGlzLmFjdGl2ZURyYWdJbmRleF07XG5cdFx0Y29uc3QgbmV4dFN0YXJ0U2l6ZSA9IHRoaXMuc3RhcnRTaXplc1t0aGlzLmFjdGl2ZURyYWdJbmRleCArIDFdO1xuXHRcdGNvbnN0IHRvdGFsU2l6ZSA9IHByZXZTdGFydFNpemUgKyBuZXh0U3RhcnRTaXplO1xuXG5cdFx0bGV0IG5ld1ByZXZTaXplID0gcHJldlN0YXJ0U2l6ZSArIGRlbHRhUGN0O1xuXHRcdGxldCBuZXdOZXh0U2l6ZSA9IG5leHRTdGFydFNpemUgLSBkZWx0YVBjdDtcblxuXHRcdC8vIEVuZm9yY2UgbWluL21heCBsaW1pdHNcblx0XHRjb25zdCBwcmV2TWluID0gcHJldlBhbmVsLm1pblNpemUgIT09IHVuZGVmaW5lZCA/IHByZXZQYW5lbC5taW5TaXplIDogMDtcblx0XHRjb25zdCBwcmV2TWF4ID0gcHJldlBhbmVsLm1heFNpemUgIT09IHVuZGVmaW5lZCA/IHByZXZQYW5lbC5tYXhTaXplIDogMTAwO1xuXHRcdGNvbnN0IG5leHRNaW4gPSBuZXh0UGFuZWwubWluU2l6ZSAhPT0gdW5kZWZpbmVkID8gbmV4dFBhbmVsLm1pblNpemUgOiAwO1xuXHRcdGNvbnN0IG5leHRNYXggPSBuZXh0UGFuZWwubWF4U2l6ZSAhPT0gdW5kZWZpbmVkID8gbmV4dFBhbmVsLm1heFNpemUgOiAxMDA7XG5cblx0XHRpZiAobmV3UHJldlNpemUgPCBwcmV2TWluKSB7XG5cdFx0XHRuZXdQcmV2U2l6ZSA9IHByZXZNaW47XG5cdFx0XHRuZXdOZXh0U2l6ZSA9IHRvdGFsU2l6ZSAtIHByZXZNaW47XG5cdFx0fSBlbHNlIGlmIChuZXdQcmV2U2l6ZSA+IHByZXZNYXgpIHtcblx0XHRcdG5ld1ByZXZTaXplID0gcHJldk1heDtcblx0XHRcdG5ld05leHRTaXplID0gdG90YWxTaXplIC0gcHJldk1heDtcblx0XHR9XG5cblx0XHRpZiAobmV3TmV4dFNpemUgPCBuZXh0TWluKSB7XG5cdFx0XHRuZXdOZXh0U2l6ZSA9IG5leHRNaW47XG5cdFx0XHRuZXdQcmV2U2l6ZSA9IHRvdGFsU2l6ZSAtIG5leHRNaW47XG5cdFx0fSBlbHNlIGlmIChuZXdOZXh0U2l6ZSA+IG5leHRNYXgpIHtcblx0XHRcdG5ld05leHRTaXplID0gbmV4dE1heDtcblx0XHRcdG5ld1ByZXZTaXplID0gdG90YWxTaXplIC0gbmV4dE1heDtcblx0XHR9XG5cblx0XHRwcmV2UGFuZWwuc2l6ZSA9IG5ld1ByZXZTaXplO1xuXHRcdG5leHRQYW5lbC5zaXplID0gbmV3TmV4dFNpemU7XG5cblx0XHRwcmV2UGFuZWwudXBkYXRlU2l6ZSh0aGlzLmRpcmVjdGlvbik7XG5cdFx0bmV4dFBhbmVsLnVwZGF0ZVNpemUodGhpcy5kaXJlY3Rpb24pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRQb3NpdGlvbihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBudW1iZXIge1xuXHRcdGlmICgndG91Y2hlcycgaW4gZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/IGV2ZW50LmNsaWVudFggOiBldmVudC5jbGllbnRZO1xuXHR9XG5cbn1cbiJdfQ==