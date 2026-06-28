import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

export interface NgcCollapseMenuItem {
	label: string;
	link?: string;
	icon?: string;
}

@Component({
	selector: 'ngc-collapse-menu',
	templateUrl: './ngc-collapse-menu.component.html',
	styleUrls: ['./ngc-collapse-menu.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgcCollapseMenuComponent {
	@Input() groupTitle: string = 'Platform';
	@Input() title: string = 'Playground';
	@Input() icon: string = 'code-block'; // default icon name
	@Input() expanded: boolean = true;
	@Input() activeItemLabel: string = '';
	@Input() items: NgcCollapseMenuItem[] = [
		{ label: 'History' },
		{ label: 'Starred' },
		{ label: 'Settings' }
	];

	@Output() selectItem = new EventEmitter<NgcCollapseMenuItem>();

	constructor(private _cdr: ChangeDetectorRef) {}

	public toggleExpanded() {
		this.expanded = !this.expanded;
		this._cdr.markForCheck();
	}

	public selectItemAction(item: NgcCollapseMenuItem) {
		this.selectItem.emit(item);
		this._cdr.markForCheck();
	}
}
