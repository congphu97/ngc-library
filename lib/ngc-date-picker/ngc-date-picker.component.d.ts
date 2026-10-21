import { EventEmitter, OnChanges, SimpleChanges, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Moment } from 'moment-timezone';
import { DateTimeConfig, WeekStart, TimeFormat } from '@core';
import * as i0 from "@angular/core";
interface NgcIDateInMonth {
    year: number;
    month: number;
    date: number;
    picked?: boolean;
    disabled?: boolean;
    today?: boolean;
    inRange?: boolean;
}
export declare type NgcIDatePickerMode = 'default' | 'inline';
export declare type NgcIDatePickerPosition = 'above' | 'below';
export interface NgcIDatePickerPickedEvent {
    range?: Moment[];
    date?: Moment;
    showTime?: boolean;
}
export declare class NgcDatePickerComponent implements AfterViewInit, OnChanges {
    private _cdRef;
    private _dateTimeConfig;
    get classInline(): boolean;
    pickedDate: Moment | Moment[];
    maxDateRange: string;
    dateRange: boolean;
    dateOnly: boolean;
    showTime: boolean;
    clearable: boolean;
    mode: NgcIDatePickerMode;
    picked: EventEmitter<NgcIDatePickerPickedEvent>;
    close: (event?: Event) => void;
    onPicked: (event: NgcIDatePickerPickedEvent) => void;
    tempMinDate: Moment;
    tempMaxDate: Moment;
    currentMoment: Moment;
    currentMonth: number;
    currentYear: number;
    displayingMoment: Moment;
    displayingYear: number;
    displayingMonth: number;
    dateInMonth: NgcIDateInMonth[];
    yearRange: number[];
    months: string[];
    times: Moment[];
    private _minDate;
    private _maxDate;
    private _timeFormat;
    private _weekStart;
    get minDate(): Moment;
    set minDate(value: Moment);
    get maxDate(): Moment;
    set maxDate(value: Moment);
    get timeFormat(): TimeFormat;
    set timeFormat(value: TimeFormat);
    get weekStart(): WeekStart;
    set weekStart(value: WeekStart);
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     * @param {DateTimeConfig} _dateTimeConfig
     */
    constructor(_cdRef: ChangeDetectorRef, _dateTimeConfig: DateTimeConfig);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @return {void}
     */
    markAsPickedDateChanges(): void;
    /**
     * @param {WeekStart} weekStart
     * @return {string[]}
     */
    getWeekdays(weekStart: WeekStart): string[];
    /**
     * @return {void}
     */
    displayPreviousMonth(): void;
    /**
     * @return {void}
     */
    displayNextMonth(): void;
    /**
     * @param {number} year
     * @param {number} month
     * @return {void}
     */
    displayMonth(year?: number, month?: number): void;
    /**
     * @param {number} year
     * @param {number} month
     * @param {number} date
     * @return {void}
     */
    pickDate(year: number, month: number, date: number): void;
    /**
     * @param {number} hour
     * @param {number} minute
     * @return {void}
     */
    setTime(hour?: number, minute?: number): void;
    /**
     * @return {void}
     */
    clear(): void;
    /**
     * @return {void}
     */
    private _done;
    /**
     * @return {void}
     */
    private _initCalendar;
    /**
     * @return {void}
     */
    private _updateCalendar;
    /**
     * @param {NgcIDateInMonth} dateInMonth
     * @return {NgcIDateInMonthState}
     */
    private _getDateStates;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDatePickerComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcDatePickerComponent, "ngc-date-picker", never, { "pickedDate": "pickedDate"; "maxDateRange": "maxDateRange"; "dateRange": "dateRange"; "dateOnly": "dateOnly"; "showTime": "showTime"; "clearable": "clearable"; "mode": "mode"; "minDate": "minDate"; "maxDate": "maxDate"; "timeFormat": "timeFormat"; "weekStart": "weekStart"; }, { "picked": "picked"; }, never, never, false>;
}
export {};
