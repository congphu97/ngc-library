import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngcMenuHeader]', exportAs: 'ngcMenuHeader' })
export class NgcMenuHeaderDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
