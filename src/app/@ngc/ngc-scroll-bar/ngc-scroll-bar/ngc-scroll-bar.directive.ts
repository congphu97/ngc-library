import { Directive, ElementRef, NgZone, HostBinding } from '@angular/core';

import { Unsubscriber } from '@core';
import { NgcScrollBar } from './ngc-scroll-bar';

@Unsubscriber()
@Directive({ selector: '[ngcScrollBar]', exportAs: 'ngcScrollBar' })
export class NgcScrollBarDirective extends NgcScrollBar {

	@HostBinding( 'style.--scroll-bar-mode' )
	get styleMode(): string { return this.mode; }

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
