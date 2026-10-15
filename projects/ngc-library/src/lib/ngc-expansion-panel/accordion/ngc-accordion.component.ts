import {
	Component, ContentChildren, QueryList,
	AfterContentInit, ViewEncapsulation, ChangeDetectionStrategy
} from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import _ from 'lodash';

import { Unsubscriber, untilCmpDestroyed , IObject } from '@core';
import { NgcExpansionPanelComponent } from '../expansion-panel/ngc-expansion-panel.component';

@Unsubscriber()
@Component({
	selector		: 'ngc-accordion',
	templateUrl		: './ngc-accordion.html',
	host			: { class: 'ngc-accordion' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcAccordionComponent implements AfterContentInit {

	@ContentChildren( NgcExpansionPanelComponent ) public expansionPanels: QueryList<NgcExpansionPanelComponent>;

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		this.expansionPanels
		.changes
		.pipe(
			startWith( this.expansionPanels ),
			untilCmpDestroyed( this )
		)
		.subscribe( ( items: QueryList<NgcExpansionPanelComponent> ) => {
			const itemArr: NgcExpansionPanelComponent[] = ( items as IObject )?._results;

			_.forEach( itemArr, ( item: NgcExpansionPanelComponent ) => {
				item
				.expandedChange
				.pipe(
					takeUntil( this.expansionPanels.changes ),
					untilCmpDestroyed( this )
				)
				.subscribe( ( expanded: boolean ) => {
					expanded && _.forEach( itemArr, ( _item: NgcExpansionPanelComponent ) => {
						_item !== item && _item.collapse();
					} );
				} );
			} );
		} );
	}

}
