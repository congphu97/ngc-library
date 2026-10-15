import {
	Component, ViewEncapsulation, Input,
	Optional, Inject, ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Moment } from 'moment-timezone';
import _ from 'lodash';

import { DATE_TIME_CONFIG, DateTimeConfig, DefaultValue, Unsubscriber } from '@core';

import { CONSTANT as APP_CONSTANT } from '@resources';

import { NgcCalendarViewBaseComponent, NgcICalendarEventBlock } from '../common/ngc-calendar-view-base.component';
import { NgcICalendarWeekDay } from '../calendar-types';

interface NgcICalendarEventBlockExtra extends NgcICalendarEventBlock {
	notInThisMonth: boolean;
}

@Unsubscriber()
@Component({
	selector		: 'ngc-calendar-month-view',
	templateUrl		: './ngc-calendar-month-view.html',
	styleUrls		: [ './ngc-calendar-month-view.scss' ],
	host			: { class: 'ngc-calendar-month-view' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcCalendarMonthViewComponent extends NgcCalendarViewBaseComponent {

	@Input() @DefaultValue() public firstWeekDay: NgcICalendarWeekDay = !_.isNil( this._dateTimeConfig.weekStart )
		? this._dateTimeConfig.weekStart
		: APP_CONSTANT.WEEK_START;

	/**
	 * @constructor
	 * @param {DateTimeConfig} _dateTimeConfig
	 * @param {ChangeDetectorRef} cdRef
	 * @param {TranslateService} translateService
	 */
	constructor(
		@Optional() @Inject( DATE_TIME_CONFIG ) private _dateTimeConfig: DateTimeConfig,
		protected cdRef: ChangeDetectorRef,
		protected translateService: TranslateService
	) {
		super( cdRef, translateService, 'DDD' );
	}

	/**
	 * @return {void}
	 */
	protected generatePeriod() {
		if ( !this.viewDate ) return;

		const startOfMonth: Moment = this.viewDate.clone().startOf( 'M' );
		const endOfMonth: Moment = this.viewDate.clone().endOf( 'M' );

		this.startDate = startOfMonth.clone().day( this.firstWeekDay );

		if ( this.startDate.isAfter( startOfMonth ) ) this.startDate = this.startDate.subtract( 1, 'w' );

		const numberOfBlock: number = Math.ceil( ( endOfMonth.diff( this.startDate, 'd' ) + 1 ) / 7 ) * 7;

		this.endDate = this.startDate.clone().add( numberOfBlock - 1, 'd' ).endOf( 'd' );

		this.periodChange.emit({ startDate: this.startDate, endDate: this.endDate });

		this.eventBlocks = _.map( _.range( numberOfBlock ), ( day: number ): NgcICalendarEventBlockExtra => {
			const moment: Moment = this.startDate.clone().add( day, 'd' );

			return {
				moment,
				index			: moment.format( this.indexBy ),
				events			: [],
				showCurrentTime	: this.currentTime.isSame( moment, 'd' ),
				seeMore			: false,
				isAdding		: false,
				notInThisMonth	: !moment.isSame( this.viewDate, 'M' ),
			};
		} );
	}

}
