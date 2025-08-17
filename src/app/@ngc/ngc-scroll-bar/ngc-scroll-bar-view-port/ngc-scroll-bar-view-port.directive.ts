import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[ngcScrollBarViewPort]', exportAs: 'ngcScrollBarViewPort' })
export class NgcScrollBarViewPortDirective {

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 */
	constructor( public elementRef: ElementRef ) {}

}
