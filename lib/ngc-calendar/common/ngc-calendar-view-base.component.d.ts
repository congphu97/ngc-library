import { OnChanges, TemplateRef, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Moment } from 'moment-timezone';
import { NgcICalendarEvent, NgcICalendarPeriod, NgcICalendarEventChange, NgcICalendarEventCreate } from '../calendar-types';
import * as i0 from "@angular/core";
export interface NgcICalendarEventBlock {
    showCurrentTime: boolean;
    seeMore: boolean;
    isAdding: boolean;
    index: string;
    moment: Moment;
    events: NgcICalendarEvent[];
}
export declare abstract class NgcCalendarViewBaseComponent implements OnChanges {
    protected cdRef: ChangeDetectorRef;
    protected translateService: TranslateService;
    protected indexBy: 'H' | 'DDHH' | 'DDD';
    activeState: boolean;
    creatable: boolean;
    displayHighlight: boolean;
    name: string;
    placeholder: string;
    events: NgcICalendarEvent[];
    selectedEventID: number;
    viewDate: Moment;
    eventTemplate: TemplateRef<any>;
    actionMenu: TemplateRef<any>;
    nameFormControl: UntypedFormControl;
    selectedEventIDChange: EventEmitter<number>;
    periodChange: EventEmitter<NgcICalendarPeriod>;
    eventChange: EventEmitter<NgcICalendarEventChange>;
    eventCreate: EventEmitter<NgcICalendarEventCreate>;
    currentTime: Moment;
    eventBlocks: NgcICalendarEventBlock[];
    newEvent: NgcICalendarEventCreate;
    protected startDate: Moment;
    protected endDate: Moment;
    /**
     * @constructor
     * @param {ChangeDetectorRef} cdRef
     * @param {TranslateService} translateService
     * @param {string} indexBy
     */
    constructor(cdRef: ChangeDetectorRef, translateService: TranslateService, indexBy: 'H' | 'DDHH' | 'DDD');
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {NgcICalendarEvent} event
     * @return {void}
     */
    selectEvent(event: NgcICalendarEvent): void;
    /**
     * @param {NgcICalendarEvent} event
     * @param {string} name
     * @return {void}
     */
    updateEvent(event: NgcICalendarEvent, name: string): void;
    /**
     * @param {NgcICalendarEventBlock} eventBlock
     * @return {void}
     */
    createEvent(eventBlock: NgcICalendarEventBlock): void;
    /**
     * @param {NgcICalendarEventBlock} eventBlock
     * @return {void}
     */
    addingNewEvent(eventBlock: NgcICalendarEventBlock): void;
    /**
     * @param {NgcICalendarEventBlock} eventBlock
     * @return {void}
     */
    cancelAddNewEvent(eventBlock: NgcICalendarEventBlock): void;
    /**
     * @param {NgcICalendarEvent} event
     * @param {Moment} newMoment
     * @return {void}
     */
    updateEventMoment(event: NgcICalendarEvent, newMoment: Moment): void;
    /**
     * @return {void}
     */
    markForCheck(): void;
    /**
     * @return {void}
     */
    private _refreshNewEventInput;
    /**
     * @return {void}
     */
    protected abstract generatePeriod(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarViewBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcCalendarViewBaseComponent, never, never, { "activeState": "activeState"; "creatable": "creatable"; "displayHighlight": "displayHighlight"; "name": "name"; "placeholder": "placeholder"; "events": "events"; "selectedEventID": "selectedEventID"; "viewDate": "viewDate"; "eventTemplate": "eventTemplate"; "actionMenu": "actionMenu"; "nameFormControl": "nameFormControl"; }, { "selectedEventIDChange": "selectedEventIDChange"; "periodChange": "periodChange"; "eventChange": "eventChange"; "eventCreate": "eventCreate"; }, never, never, false>;
}
