import {
	Component, Input, ViewEncapsulation,
	Output, EventEmitter, OnChanges,
	SimpleChanges, AfterViewInit, Optional,
	Inject, ChangeDetectionStrategy, HostBinding
} from '@angular/core';
import moment, { Moment } from 'moment-timezone';
import _ from 'lodash';

import {
	DATE_TIME_CONFIG, DateTimeConfig, WeekStart,
	TimeFormat, Memoize, DefaultValue,
	CoerceBoolean
} from '@core';
import { CONSTANT as APP_CONSTANT } from '@resources';

interface NgcIDateInMonth {
	year: number;
	month: number;
	date: number;
	picked?: boolean;
	disabled?: boolean;
	today?: boolean;
	inRange?: boolean;
}

type NgcIDateInMonthState = Pick<NgcIDateInMonth, 'disabled' | 'today' | 'picked' | 'inRange'>;

export type NgcIDatePickerMode = 'default' | 'inline';
export type NgcIDatePickerPosition = 'above' | 'below';
export interface NgcIDatePickerPickedEvent {
	range?: Moment[];
	date?: Moment;
	showTime?: boolean;
}

@Component({
	selector		: 'ngc-date-picker',
	templateUrl		: './ngc-date-picker.html',
	styleUrls		: [ './ngc-date-picker.scss' ],
	host			: { class: 'ngc-date-picker' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcDatePickerComponent implements AfterViewInit, OnChanges {

	@HostBinding( 'class.ngc-date-picker--inline' )
	get classInline(): boolean { return this.mode === 'inline'; }

	@Input() public pickedDate: Moment | Moment[];
	@Input() public maxDateRange: string;
	@Input() @CoerceBoolean() public dateRange: boolean;
	@Input() @CoerceBoolean() public dateOnly: boolean;
	@Input() @CoerceBoolean() public showTime: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public clearable: boolean = true;
	@Input() @DefaultValue() public mode: NgcIDatePickerMode = 'default';

	@Output() public picked: EventEmitter<NgcIDatePickerPickedEvent> = new EventEmitter<NgcIDatePickerPickedEvent>();

	public close: ( event?: Event ) => void;
	public onPicked: ( event: NgcIDatePickerPickedEvent ) => void;
	public tempMinDate: Moment;
	public tempMaxDate: Moment;
	public currentMoment: Moment = moment();
	public currentMonth: number = this.currentMoment.month();
	public currentYear: number = this.currentMoment.year();
	public displayingMoment: Moment = this.currentMoment.clone();
	public displayingYear: number = this.displayingMoment.year();
	public displayingMonth: number = this.displayingMoment.month();
	public dateInMonth: NgcIDateInMonth[] = [];
	public yearRange: number[] = _.range( -100, 100 );
	public months: string[] = moment.months();
	public times: Moment[] = _.map( _.range( 0, 48 ), ( i: number ) => {
		const hour: number = i / 2;
		const minute: number = i % 2 === 0 ? 0 : 30;

		return this.currentMoment.clone().hour( hour ).minute( minute );
	} );

	private _minDate: Moment;
	private _maxDate: Moment;
	private _timeFormat: TimeFormat;
	private _weekStart: WeekStart;

	@Input()
	get minDate(): Moment { return this._minDate; }
	set minDate( value: Moment ) { this._minDate = value?.startOf( 'd' ); this._initCalendar(); }

	@Input()
	get maxDate(): Moment { return this._maxDate; }
	set maxDate( value: Moment ) { this._maxDate = value?.startOf( 'd' ); this._initCalendar(); }

	@Input()
	get timeFormat(): TimeFormat { return this._timeFormat || this._dateTimeConfig.timeFormat || APP_CONSTANT.TIME_FORMAT; }
	set timeFormat( value: TimeFormat ) { this._timeFormat = value; }

	@Input()
	get weekStart(): WeekStart {
		return !_.isNil( this._weekStart )
			? this._weekStart
			: ( !_.isNil( this._dateTimeConfig.weekStart ) ? this._dateTimeConfig.weekStart : APP_CONSTANT.WEEK_START );
	}
	set weekStart( value: WeekStart ) { this._weekStart = value; }

	/**
	 * @constructor
	 * @param {DateTimeConfig} _dateTimeConfig
	 */
	constructor( @Optional() @Inject( DATE_TIME_CONFIG ) private _dateTimeConfig: DateTimeConfig ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		changes.pickedDate && this.markAsPickedDateChanges();
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this._initCalendar();
	}

	/**
	 * @return {void}
	 */
	public markAsPickedDateChanges() {
		if ( !this.pickedDate ) return;

		let year: number;
		let month: number;

		if ( this.dateRange ) {
			if ( _.nth( this.pickedDate, 0 ) ) this.pickedDate[ 0 ] = moment( this.pickedDate[ 0 ] ).startOf( 'd' );
			if ( _.nth( this.pickedDate, 1 ) ) this.pickedDate[ 1 ] = moment( this.pickedDate[ 1 ] ).endOf( 'd' );

			year = _.nth( this.pickedDate, 0 )?.year();
			month = _.nth( this.pickedDate, 0 )?.month();
		} else if ( !_.isArray( this.pickedDate ) ) {
			this.pickedDate = moment( this.pickedDate as Moment );

			year = this.pickedDate.year();
			month = this.pickedDate.month();
		}

		this.displayMonth( year, month );
	}

	/**
	 * @param {WeekStart} weekStart
	 * @return {string[]}
	 */
	@Memoize()
	public getWeekdays( weekStart: WeekStart ): string[] {
		const weekdays: string[] = moment.weekdaysShort();

		return weekStart === 1 ? _.union( weekdays, [ weekdays.shift() ] ) : weekdays;
	}

	/**
	 * @return {void}
	 */
	public displayPreviousMonth() {
		this.displayingMoment.subtract( 1, 'M' );
		this.displayMonth();
	}

	/**
	 * @return {void}
	 */
	public displayNextMonth() {
		this.displayingMoment.add( 1, 'M' );
		this.displayMonth();
	}

	/**
	 * @param {number} year
	 * @param {number} month
	 * @return {void}
	 */
	public displayMonth( year?: number, month?: number ) {
		year >= 0 && this.displayingMoment.year( year );
		month >= 0 && this.displayingMoment.month( month );

		this.displayingYear = this.displayingMoment.year();
		this.displayingMonth = this.displayingMoment.month();

		this._initCalendar();
	}

	/**
	 * @param {number} year
	 * @param {number} month
	 * @param {number} date
	 * @return {void}
	 */
	public pickDate( year: number, month: number, date: number ) {
		const pickedDate: Moment = this.currentMoment.clone().year( year ).month( month ).date( date );

		if ( this.dateRange ) {
			const startDate: Moment = _.nth( this.pickedDate, 0 );
			const endDate: Moment = _.nth( this.pickedDate, 1 );

			if ( !startDate || ( startDate && endDate ) ) {
				this.pickedDate = [ pickedDate.startOf( 'd' ) ];
			} else if ( pickedDate.isSameOrBefore( startDate ) ) {
				this.pickedDate = [ pickedDate.startOf( 'd' ), startDate.endOf( 'd' ) ];
			} else {
				this.pickedDate = [ startDate, pickedDate.endOf( 'd' ) ];
			}

			if ( this.maxDateRange ) {
				const matched: any = this.maxDateRange.match( /(\d+)(\S+)/i );

				this.tempMinDate = _.nth( this.pickedDate, 0 ).clone().subtract( matched[ 1 ], matched[ 2 ] );
				this.tempMaxDate = _.nth( this.pickedDate, 0 ).clone().add( matched[ 1 ], matched[ 2 ] );
				this.tempMinDate = !this.minDate || this.tempMinDate.isAfter( this.minDate )
					? this.tempMinDate.startOf( 'd' )
					: this.minDate?.clone();
				this.tempMaxDate = !this.maxDate || this.tempMaxDate.isBefore( this.maxDate )
					? this.tempMaxDate.startOf( 'd' )
					: this.maxDate?.clone();
			}

			this._updateCalendar();
			this.pickedDate.length === 2 && this._done();
			return;
		}

		this.pickedDate = pickedDate;

		this.displayMonth( year, month );
		this._done();
	}

	/**
	 * @param {number} hour
	 * @param {number} minute
	 * @return {void}
	 */
	public setTime( hour?: number, minute?: number ) {
		if ( this.dateRange ) return;

		this.pickedDate = moment( this.pickedDate as Moment || undefined );
		this.pickedDate = this.minDate && this.pickedDate.isBefore( this.minDate ) ? this.minDate.clone() : this.pickedDate;
		this.pickedDate = this.maxDate && this.pickedDate.isAfter( this.maxDate ) ? this.maxDate.clone() : this.pickedDate;

		this.pickedDate.hour( _.isFinite( hour ) ? hour : this.currentMoment.hour() );
		this.pickedDate.minute( _.isFinite( minute ) ? minute : this.currentMoment.minute() );

		this._updateCalendar();
		this._done();
	}

	/**
	 * @return {void}
	 */
	public clear() {
		this.pickedDate = null;
		this.showTime = false;

		this._updateCalendar();
		this._done();
	}

	/**
	 * @return {void}
	 */
	private _done() {
		let pickedEvent: NgcIDatePickerPickedEvent;

		if ( this.dateRange ) {
			pickedEvent = { range: this.pickedDate as Moment[] };
		} else if ( !_.isArray( this.pickedDate ) ) {
			const pickedDate: Moment = ( this.pickedDate as Moment );

			pickedDate && !this.showTime && pickedDate.startOf( 'd' );

			pickedEvent = { date: pickedDate, showTime: this.showTime };
		}

		this.picked.emit( pickedEvent );
		_.isFunction( this.onPicked ) && this.onPicked( pickedEvent );
	}

	/**
	 * @return {void}
	 */
	private _initCalendar() {
		const endDateOfPrevMonth: number = +this.displayingMoment.clone().subtract( 1, 'M' ).endOf( 'M' ).date();
		const startOfMonth: Moment = this.displayingMoment.clone().startOf( 'M' );
		const endOfMonth: Moment = this.displayingMoment.clone().endOf( 'M' );
		const dateInMonth: NgcIDateInMonth[] = _.map(
			_.range( startOfMonth.date(), endOfMonth.date() + 1 ),
			( date: number ) => ({ year: this.displayingYear, month: this.displayingMonth, date })
		);
		let dayStartOfMonth: number = startOfMonth.day();
		let dayEndOfMonth: number = endOfMonth.day();

		if ( this.weekStart === 1 ) {
			dayStartOfMonth--;
			dayEndOfMonth--;

			if ( dayStartOfMonth === -1 ) dayStartOfMonth = 6;
			if ( dayEndOfMonth === -1 ) dayEndOfMonth = 6;
		}

		for ( let i: number = 0; i < dayStartOfMonth; i++ ) {
			const year: number = this.displayingMonth > 0 ? this.displayingYear : this.displayingYear - 1;
			const month: number = this.displayingMonth > 0 ? this.displayingMonth - 1 : 11;
			const date: number = endDateOfPrevMonth - i;

			dateInMonth.unshift({ year, month, date });
		}

		for ( let i: number = 1; i < 7 - dayEndOfMonth; i++ ) {
			const year: number = this.displayingMonth < 12 ? this.displayingYear : this.displayingYear + 1;
			const month: number = this.displayingMonth < 12 ? this.displayingMonth + 1 : 0;
			const date: number = i;

			dateInMonth.push({ year, month, date });
		}

		this.dateInMonth = dateInMonth;

		this._updateCalendar();
	}

	/**
	 * @return {void}
	 */
	private _updateCalendar() {
		this.dateInMonth = _.map(
			this.dateInMonth,
			( item: NgcIDateInMonth ): NgcIDateInMonth => ({ ...item, ...this._getDateStates( item ) })
		);
	}

	/**
	 * @param {NgcIDateInMonth} dateInMonth
	 * @return {NgcIDateInMonthState}
	 */
	private _getDateStates( dateInMonth: NgcIDateInMonth ): NgcIDateInMonthState {
		const year: number = dateInMonth.year;
		const month: number = dateInMonth.month;
		const date: number = dateInMonth.date;
		const dateMoment: Moment = this.currentMoment
		.clone()
		.year( year )
		.month( month )
		.date( date )
		.startOf( 'd' );
		const today: boolean = year === this.currentMoment.year()
			&& month === this.currentMoment.month()
			&& date === this.currentMoment.date();
		const minDate: Moment = this.tempMinDate || this.minDate;
		const maxDate: Moment = this.tempMaxDate || this.maxDate;
		const disabled: boolean = ( minDate && dateMoment.isBefore( minDate ) )
			|| ( maxDate && dateMoment.isAfter( maxDate ) );
		let picked: boolean = false;
		let inRange: boolean = false;

		if ( this.pickedDate ) {
			if ( this.dateRange ) {
				const startDate: Moment = _.nth( this.pickedDate, 0 );
				const endDate: Moment = _.nth( this.pickedDate, 1 );

				picked = ( year === startDate?.year() && month === startDate?.month() && date === startDate?.date() )
					|| ( year === endDate?.year() && month === endDate?.month() && date === endDate?.date() );
				inRange = startDate
					&& endDate
					&& dateMoment.isSameOrAfter( startDate )
					&& dateMoment.isSameOrBefore( endDate );
			} else if ( !_.isArray( this.pickedDate ) ) {
				picked = year === ( this.pickedDate as Moment ).year()
					&& month === ( this.pickedDate as Moment ).month()
					&& date === ( this.pickedDate as Moment ).date();
			}
		}

		return { today, disabled, picked, inRange };
	}

}
