import {
	Component, ElementRef, NgZone,
	ChangeDetectionStrategy, HostBinding
} from '@angular/core';

import { Unsubscriber } from '@core';
import { NgcScrollBar } from './ngc-scroll-bar';

@Unsubscriber()
@Component({
	selector		: 'ngc-scroll-bar',
	templateUrl		: './ngc-scroll-bar.html',
	host			: { class: 'ngc-scroll-bar' },
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcScrollBarComponent extends NgcScrollBar {

	@HostBinding( 'style.--scroll-bar-mode' )
	get styleMode(): string { return this.mode; }

	@HostBinding( 'style.--scroll-bar-suppress-mode' )
	get styleSuppressMode(): string { return this.suppressMode; }

	@HostBinding( 'attr.scrollBar' )
	get attrScrollBar(): boolean { return !this.suppress || undefined; }

	@HostBinding( 'attr.scrollBarSuppressX' )
	get attrScrollBarSuppressX(): boolean { return this.suppressScrollX || undefined; }

	@HostBinding( 'attr.scrollBarSuppressY' )
	get attrScrollBarSuppressY(): boolean { return this.suppressScrollY || undefined; }

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 * @param {NgZone} ngZone
	 */
	constructor( public elementRef: ElementRef, protected ngZone: NgZone ) {
		super();
	}

}
