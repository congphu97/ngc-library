import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngcDrawerLazy]', exportAs: 'ngcDrawerLazy' })
export class NgcDrawerLazyDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
