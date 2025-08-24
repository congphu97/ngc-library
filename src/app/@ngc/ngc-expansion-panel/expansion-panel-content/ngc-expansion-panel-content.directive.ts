import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngcExpansionPanelContent]', exportAs: 'ngcExpansionPanelContent' })
export class NgcExpansionPanelContentDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
