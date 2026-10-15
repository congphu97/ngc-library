import {
	Component, Input, ViewChild,
	TemplateRef, ContentChildren, QueryList,
	AfterContentInit, ChangeDetectionStrategy
} from '@angular/core';
import { startWith } from 'rxjs/operators';
import _ from 'lodash';

import {
	Unsubscriber, DefaultValue, CoerceBoolean,
	CoerceNumber, untilCmpDestroyed
, IObject } from '@core';
import { NgcDropdownItemComponent } from '../dropdown-item/ngc-dropdown-item.component';

@Unsubscriber()
@Component({
	selector		: 'ngc-dropdown-group-item',
	templateUrl		: './ngc-dropdown-group-item.html',
	host			: { class: 'ngc-dropdown-group-item' },
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcDropdownGroupItemComponent implements AfterContentInit {

	@ViewChild( TemplateRef, { static: true } ) public templateRef: TemplateRef<any>;

	@ContentChildren( NgcDropdownItemComponent ) public dropdownItems: QueryList<NgcDropdownItemComponent>;

	@Input() public title: string;
	@Input() public label: string;
	@Input() public color: string;
	@Input() public icon: string;
	@Input() public dotColor: string;
	@Input( 'class' ) public classes: string;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public truncate: boolean = true;
	@Input() @DefaultValue() @CoerceNumber() public truncateLimitLine: number = 2;

	get children(): NgcDropdownItemComponent[] { return ( this.dropdownItems as IObject )._results; }

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		this.dropdownItems
		.changes
		.pipe(
			startWith( this.dropdownItems ),
			untilCmpDestroyed( this )
		)
		.subscribe( ( items: QueryList<NgcDropdownItemComponent> ) => {
			_.forEach(
				( items as IObject )._results,
				( item: NgcDropdownItemComponent ) => item.parent = this
			);
		} );
	}

}
