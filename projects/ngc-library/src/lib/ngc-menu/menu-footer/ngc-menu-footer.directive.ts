import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngcMenuFooter]', exportAs: 'ngcMenuFooter' })
export class NgcMenuFooterDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
