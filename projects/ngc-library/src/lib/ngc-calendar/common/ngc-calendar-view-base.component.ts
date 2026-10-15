import {
	OnChanges, Input, TemplateRef,
	Output, EventEmitter, SimpleChanges,
	Directive, ChangeDetectorRef
} from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import moment, { Moment } from 'moment-timezone';
import _ from 'lodash';

import { CoerceArray, CoerceBoolean, DefaultValue , IObject } from '@core';

// import { NgcSearchBoxComponent } from '../../ngc-search-box';

import {
	NgcICalendarEvent, NgcICalendarPeriod,
	NgcICalendarEventChange, NgcICalendarEventCreate
} from '../calendar-types';

export interface NgcICalendarEventBlock {
	showCurrentTime: boolean;
	seeMore: boolean;
	isAdding: boolean;
	index: string;
	moment: Moment;
	events: NgcICalendarEvent[];
}

@Directive()
export abstract class NgcCalendarViewBaseComponent implements OnChanges {

	@Input() @CoerceBoolean() public activeState: boolean;
	@Input() @CoerceBoolean() public creatable: boolean;
	@Input() @CoerceBoolean() public displayHighlight: boolean;
	@Input() @DefaultValue() public name: string = this.translateService.instant( 'NGC.NAME' );
	@Input() @DefaultValue() public placeholder: string = this.translateService.instant( 'NGC.PLACEHOLDER.TYPE_NAME' );
	@Input() @CoerceArray() public events: NgcICalendarEvent[];
	@Input() public selectedEventID: number;
	@Input() public viewDate: Moment;
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

	public currentTime: Moment = moment();
	public eventBlocks: NgcICalendarEventBlock[];
	public newEvent: NgcICalendarEventCreate = {} as NgcICalendarEventCreate;

	protected startDate: Moment;
	protected endDate: Moment;

	/**
	 * @constructor
	 * @param {ChangeDetectorRef} cdRef
	 * @param {TranslateService} translateService
	 * @param {string} indexBy
	 */
	constructor( protected cdRef: ChangeDetectorRef, protected translateService: TranslateService, protected indexBy: 'H' | 'DDHH' | 'DDD' ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.viewDate ) {
			setTimeout( () => this.generatePeriod() );
			this._refreshNewEventInput();
		}

		if ( changes.events ) {
			const eventsMap: IObject<NgcICalendarEvent[]> = _.groupBy( this.events, ( event: NgcICalendarEvent ): string =>
				event?.moment?.format( this.indexBy )
			);

			_.forEach( this.eventBlocks, ( eventBlock: NgcICalendarEventBlock ) => {
				eventBlock.seeMore = false;
				eventBlock.events = [];

				eventBlock.events.unshift( ...( eventsMap[ eventBlock.index ] || [] ) );
			} );
		}
	}

	/**
	 * @param {NgcICalendarEvent} event
	 * @return {void}
	 */
	public selectEvent( event: NgcICalendarEvent ) {
		if ( event.inactive ) return;

		if ( !this.activeState ) {
			this.selectedEventIDChange.emit( event?.id );
			return;
		}

		if ( this.selectedEventID === event?.id ) return;

		this.selectedEventID = event?.id;

		this.selectedEventIDChange.emit( this.selectedEventID );
	}

	/**
	 * @param {NgcICalendarEvent} event
	 * @param {string} name
	 * @return {void}
	 */
	public updateEvent( event: NgcICalendarEvent, name: string ) {
		if ( event?.name === name ) return;

		event.name = name;

		this.eventChange.emit({ id: event.id, name: event.name });
	}

	/**
	 * @param {NgcICalendarEventBlock} eventBlock
	 * @return {void}
	 */
	public createEvent( eventBlock: NgcICalendarEventBlock ) {
		const newEvent: NgcICalendarEvent = {
			...this.newEvent,
			id			: null,
			actionable	: true,
			deletable	: true,
			moment		: eventBlock.moment.clone(),
		};

		eventBlock.isAdding = false;

		eventBlock.events.push( newEvent );
		this.events.push( newEvent );

		this.eventCreate.emit( newEvent );
		this._refreshNewEventInput();
	}

	/**
	 * @param {NgcICalendarEventBlock} eventBlock
	 * @return {void}
	 */
	public addingNewEvent( eventBlock: NgcICalendarEventBlock ) {
		_.forEach( this.eventBlocks, ( _eventBlock: NgcICalendarEventBlock ) => { _eventBlock.isAdding = false; } );

		eventBlock.isAdding = true;
	}

	/**
	 * @param {NgcICalendarEventBlock} eventBlock
	 * @return {void}
	 */
	public cancelAddNewEvent( eventBlock: NgcICalendarEventBlock ) {
		eventBlock.isAdding = false;

		this._refreshNewEventInput();
	}

	/**
	 * @param {NgcICalendarEvent} event
	 * @param {Moment} newMoment
	 * @return {void}
	 */
	public updateEventMoment( event: NgcICalendarEvent, newMoment: Moment ) {
		const oldEventBlock: NgcICalendarEventBlock = event.moment === newMoment
			? undefined
			: _.find( this.eventBlocks, { index: event?.moment?.format( this.indexBy ) } );

		const newEventBlock: NgcICalendarEventBlock = _.find( this.eventBlocks, { index: newMoment?.format( this.indexBy ) } );

		event.moment = newMoment;

		if ( oldEventBlock === newEventBlock ) return;

		oldEventBlock && _.remove( oldEventBlock.events, event );
		newEventBlock && newEventBlock.events.push( event );
	}

	/**
	 * @return {void}
	 */
	public markForCheck() {
		this.cdRef.markForCheck();
	}

	/**
	 * @return {void}
	 */
	private _refreshNewEventInput() {
		this.newEvent = {} as NgcICalendarEventCreate;

		this.nameFormControl.markAsPristine();
		this.nameFormControl.markAsUntouched();
	}

	/**
	 * @return {void}
	 */
	protected abstract generatePeriod();

}
