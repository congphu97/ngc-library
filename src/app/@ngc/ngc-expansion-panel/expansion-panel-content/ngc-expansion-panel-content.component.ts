import {
	Component, TemplateRef, ViewChild,
	ContentChildren, QueryList, ChangeDetectionStrategy
} from '@angular/core';

import { NgcExpansionPanelContentDirective } from './ngc-expansion-panel-content.directive';

@Component({
	selector		: 'ngc-expansion-panel-content',
	templateUrl		: './ngc-expansion-panel-content.html',
	host			: { class: 'ngc-expansion-panel-content' },
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcExpansionPanelContentComponent {

	@ViewChild( TemplateRef, { static: true } ) public templateRef: TemplateRef<any>;

	@ContentChildren( NgcExpansionPanelContentDirective, { descendants: false } )
	private _panelContentList: QueryList<NgcExpansionPanelContentDirective>;

	get template(): TemplateRef<any> { return this._panelContentList.first?.templateRef || this.templateRef; }

}
