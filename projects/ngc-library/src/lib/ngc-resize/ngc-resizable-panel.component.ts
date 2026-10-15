import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
	selector		: 'ngc-resizable-panel',
	template		: `<ng-content></ng-content>`,
	encapsulation	: ViewEncapsulation.None,
	host			: {
		class: 'ngc-resizable-panel',
	}
})
export class NgcResizablePanelComponent {

	@Input() public defaultSize: number;
	@Input() public minSize: number = 0;
	@Input() public maxSize: number = 100;

	@HostBinding('style.flex-basis.%')
	public size: number;

	public updateSize(_direction: 'horizontal' | 'vertical') {
		// Flex basis handles size dynamically in both horizontal (row) and vertical (column) layouts.
	}

}
