import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngcMenuContent]', exportAs: 'ngcMenuContent' })
export class NgcMenuContentDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
