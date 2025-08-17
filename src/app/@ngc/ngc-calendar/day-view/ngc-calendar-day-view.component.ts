import {
	Component, ViewEncapsulation, Input,
	ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Moment } from 'moment-timezone';
import _ from 'lodash';

import { CoerceNumber, DefaultValue, Unsubscriber } from '@core';

import { NgcCalendarViewBaseComponent, NgcICalendarEventBlock } from '../common/ngc-calendar-view-base.component';

@Unsubscriber()
@Component({
	selector		: 'ngc-calendar-day-view',
	templateUrl		: './ngc-calendar-day-view.html',
	styleUrls		: [ './ngc-calendar-day-view.scss' ],
	host			: { class: 'ngc-calendar-day-view' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcCalendarDayViewComponent extends NgcCalendarViewBaseComponent {

	@Input() @DefaultValue() @CoerceNumber() public maxEventPerHour: number = 1;

	/**
	 * @constructor
	 * @param {ChangeDetectorRef} cdRef
	 * @param {TranslateService} translateService
	 */
	constructor( protected cdRef: ChangeDetectorRef, protected translateService: TranslateService ) {
		super( cdRef, translateService, 'H' );
	}

	/**
	 * @return {void}
	 */
	protected generatePeriod() {
		if ( !this.viewDate ) return;

		this.startDate = this.viewDate.clone().startOf( 'd' );
		this.endDate = this.viewDate.clone().endOf( 'd' );

		this.periodChange.emit({ startDate: this.startDate, endDate: this.endDate });

		const numberOfBlock: number = this.endDate.diff( this.startDate, 'h' ) + 1;

		this.eventBlocks = _.map( _.range( numberOfBlock ), ( hour: number ): NgcICalendarEventBlock => {
			const moment: Moment = this.startDate.clone().add( hour, 'h' );

			return {
				moment,
				index			: moment.format( this.indexBy ),
				events			: [],
				showCurrentTime	: this.currentTime.isSame( moment, 'h' ),
				seeMore			: false,
				isAdding		: false,
			};
		} );
	}

}
