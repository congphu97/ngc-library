import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngcTabHeader]', exportAs: 'ngcTabHeader' })
export class NgcTabHeaderDirective {
	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}
}