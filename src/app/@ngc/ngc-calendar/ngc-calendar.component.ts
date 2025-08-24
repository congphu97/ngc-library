import {
	Component, EventEmitter, Input,
	OnChanges, Output, SimpleChanges,
	TemplateRef, ViewChild, ViewEncapsulation,
	HostBinding, ChangeDetectionStrategy
} from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import moment, { Moment } from 'moment-timezone';

import { CoerceArray, CoerceBoolean, CoerceNumber } from '@core';

// import { NgcSearchBoxComponent } from '../ngc-search-box';
import { NgcCalendarViewBaseComponent } from '../ngc-calendar';

export type NgcICalendarView = 'day' | 'week' | 'month';
export type NgcICalendarWeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface NgcICalendarPeriod {
	startDate: Moment;
	endDate: Moment;
}

export interface NgcICalendarEvent {
	id: number;
	name: string;
	moment: Moment;
	isEditing?: boolean;
	actionable?: boolean;
	inactive?: boolean;
	deletable?: boolean;
	color?: string;
	data?: any;
}

export interface NgcICalendarEventChange {
	id: number;
	name: string;
}

export interface NgcICalendarEventCreate {
	name: string;
	moment: Moment;
	color?: string;
}

@Component({
	selector		: 'ngc-calendar',
	templateUrl		: './ngc-calendar.html',
	styleUrls		: [ './ngc-calendar.scss' ],
	host			: { class: 'ngc-calendar' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcCalendarComponent implements OnChanges {

	@HostBinding( 'class.ngc-calendar--stretch' ) get classStretch(): boolean { return this.stretch; }

	@ViewChild( 'calendarView' ) public calendarView: NgcCalendarViewBaseComponent;

	@Input() @CoerceBoolean() public stretch: boolean;
	@Input() @CoerceBoolean() public activeState: boolean;
	@Input() @CoerceBoolean() public creatable: boolean;
	@Input() @CoerceBoolean() public displayHighlight: boolean;
	@Input() @CoerceNumber() public maxEventPerHour: number;
	@Input() @CoerceNumber() public selectedEventID: number;
	@Input() @CoerceArray() public events: NgcICalendarEvent[];
	@Input() public firstWeekDay: NgcICalendarWeekDay;
	@Input() public name: string;
	@Input() public placeholder: string;
	@Input() public view: NgcICalendarView;
	@Input() public eventTemplate: TemplateRef<any>;
	@Input() public actionMenu: TemplateRef<any>;
	// @Input() public searchBox: NgcSearchBoxComponent;
	@Input() public nameFormControl: UntypedFormControl = new UntypedFormControl(
		{ value: null, disabled: false },
		[ Validators.required, Validators.maxLength( 255 ) ]
	);

	@Output() public selectedEventIDChange: EventEmitter<number> = new EventEmitter<number>();
	@Output() public periodChange: EventEmitter<NgcICalendarPeriod> = new EventEmitter<NgcICalendarPeriod>();
	@Output() public eventChange: EventEmitter<NgcICalendarEventChange> = new EventEmitter<NgcICalendarEventChange>();
	@Output() public eventCreate: EventEmitter<NgcICalendarEventCreate> = new EventEmitter<NgcICalendarEventCreate>();

	public selectedIndex: number;
	public viewDate: Moment = moment();
	public startDate: Moment;
	public endDate: Moment;

	/**
	 * @contructor
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.view?.currentValue && !this.view || this.view === 'day' ) {
			this.selectedIndex = 0;
			this.view = 'day';
		} else if ( this.view === 'week' ) this.selectedIndex = 1;
		else if ( this.view === 'month' ) this.selectedIndex = 2;
	}

	/**
	 * @param {Moment} viewDate
	 * @param {number} add
	 * @return {void}
	 */
	public changeViewDate( viewDate: Moment = moment(), add?: number ) {
		if ( viewDate.isSame( this.viewDate, 'd' ) && !add ) return;
		if ( add ) viewDate.add( add, this.view );

		this.viewDate = viewDate.clone();
	}

	/**
	 * @param {string} view
	 * @return {void}
	 */
	public changeView( view: NgcICalendarView ) {
		if ( this.view === view ) return;

		this.view = view;
		this.events = [];

		this.changeViewDate( this.viewDate );
	}

	/**
	 * @param {NgcICalendarPeriod} event
	 * @return {void}
	 */
	public changePeriod( event: NgcICalendarPeriod ) {
		this.startDate = event.startDate;
		this.endDate = event.endDate;

		this.periodChange.emit( event );
	}

	/**
	 * @param {NgcICalendarEvent} event
	 * @param {Moment} newMoment
	 * @return {void}
	 */
	public updateEventMoment( event: NgcICalendarEvent, newMoment: Moment ) {
		this.calendarView?.updateEventMoment( event, newMoment );
	}

}
