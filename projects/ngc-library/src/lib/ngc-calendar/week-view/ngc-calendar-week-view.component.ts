import {
	Component, ViewEncapsulation, Input,
	Optional, Inject, ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import moment, { Moment } from 'moment-timezone';
import _ from 'lodash';

import { DATE_TIME_CONFIG, DateTimeConfig, DefaultValue, Unsubscriber } from '@core';

import { CONSTANT as APP_CONSTANT } from '@resources';

import { NgcCalendarViewBaseComponent, NgcICalendarEventBlock } from '../common/ngc-calendar-view-base.component';

import { NgcICalendarWeekDay } from '../calendar-types';

@Unsubscriber()
@Component({
	selector		: 'ngc-calendar-week-view',
	templateUrl		: './ngc-calendar-week-view.html',
	styleUrls		: [ './ngc-calendar-week-view.scss' ],
	host			: { class: 'ngc-calendar-week-view' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcCalendarWeekViewComponent extends NgcCalendarViewBaseComponent {

	@Input() @DefaultValue() public firstWeekDay: NgcICalendarWeekDay = !_.isNil( this._dateTimeConfig.weekStart )
		? this._dateTimeConfig.weekStart
		: APP_CONSTANT.WEEK_START;

	public hourBlocks: { showCurrentTime: boolean; moment: Moment }[] = _.map( _.range( 24 ), ( hour: number ) => ({
		moment: moment().hour( hour ).minute( 0 ), showCurrentTime: false,
	}) );

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
		super( cdRef, translateService, 'DDHH' );
	}

	/**
	 * @return {void}
	 */
	protected generatePeriod() {
		if ( !this.viewDate ) return;

		this.startDate = this.viewDate.clone().day( this.firstWeekDay ).startOf( 'd' );

		if ( this.startDate.isAfter( this.viewDate ) ) this.startDate = this.startDate.subtract( 1, 'w' );

		this.endDate = this.startDate.clone().add( 6, 'd' ).endOf( 'd' );

		this.periodChange.emit({ startDate: this.startDate, endDate: this.endDate });

		const numberOfBlock: number = this.endDate.diff( this.startDate, 'h' ) + 1;

		this.eventBlocks = _.map( _.range( numberOfBlock ), ( hour: number ): NgcICalendarEventBlock => {
			const dayInWeek: number = hour % 7;
			const hourInDay: number = Math.floor( hour / 7 );
			const momentDate: Moment = this.startDate.clone().add( dayInWeek, 'd' ).add( hourInDay, 'h' );

			return {
				moment			: momentDate,
				index			: momentDate.format( this.indexBy ),
				events			: [],
				showCurrentTime	: this.currentTime.isSame( momentDate, 'd' ),
				seeMore			: false,
				isAdding		: false,
			};
		} );

		_.forEach( this.hourBlocks, ( hourBlock: { showCurrentTime: boolean; moment: Moment } ) => {
			hourBlock.showCurrentTime = this.currentTime.isSame( hourBlock.moment, 'h' )
				&& this.currentTime.isBetween( this.startDate, this.endDate );
		} );
	}

}
