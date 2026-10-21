import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Moment } from 'moment-timezone';
import { NgcCalendarViewBaseComponent } from './common/ngc-calendar-view-base.component';
import { NgcICalendarView, NgcICalendarPeriod, NgcICalendarEvent, NgcICalendarEventChange, NgcICalendarEventCreate, NgcICalendarWeekDay } from './calendar-types';
import * as i0 from "@angular/core";
export * from './calendar-types';
export declare class NgcCalendarComponent implements OnChanges {
    get classStretch(): boolean;
    calendarView: NgcCalendarViewBaseComponent;
    stretch: boolean;
    activeState: boolean;
    creatable: boolean;
    displayHighlight: boolean;
    maxEventPerHour: number;
    selectedEventID: number;
    events: NgcICalendarEvent[];
    firstWeekDay: NgcICalendarWeekDay;
    name: string;
    placeholder: string;
    view: NgcICalendarView;
    eventTemplate: TemplateRef<any>;
    actionMenu: TemplateRef<any>;
    nameFormControl: UntypedFormControl;
    selectedEventIDChange: EventEmitter<number>;
    periodChange: EventEmitter<NgcICalendarPeriod>;
    eventChange: EventEmitter<NgcICalendarEventChange>;
    eventCreate: EventEmitter<NgcICalendarEventCreate>;
    selectedIndex: number;
    viewDate: Moment;
    startDate: Moment;
    endDate: Moment;
    /**
     * @contructor
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {Moment} viewDate
     * @param {number} add
     * @return {void}
     */
    changeViewDate(viewDate?: Moment, add?: number): void;
    /**
     * @param {string} view
     * @return {void}
     */
    changeView(view: NgcICalendarView): void;
    /**
     * @param {NgcICalendarPeriod} event
     * @return {void}
     */
    changePeriod(event: NgcICalendarPeriod): void;
    /**
     * @param {NgcICalendarEvent} event
     * @param {Moment} newMoment
     * @return {void}
     */
    updateEventMoment(event: NgcICalendarEvent, newMoment: Moment): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCalendarComponent, "ngc-calendar", never, { "stretch": "stretch"; "activeState": "activeState"; "creatable": "creatable"; "displayHighlight": "displayHighlight"; "maxEventPerHour": "maxEventPerHour"; "selectedEventID": "selectedEventID"; "events": "events"; "firstWeekDay": "firstWeekDay"; "name": "name"; "placeholder": "placeholder"; "view": "view"; "eventTemplate": "eventTemplate"; "actionMenu": "actionMenu"; "nameFormControl": "nameFormControl"; }, { "selectedEventIDChange": "selectedEventIDChange"; "periodChange": "periodChange"; "eventChange": "eventChange"; "eventCreate": "eventCreate"; }, never, never, false>;
}
