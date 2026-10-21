import { ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Moment } from 'moment-timezone';
import { DateTimeConfig } from '@core';
import { NgcCalendarViewBaseComponent } from '../common/ngc-calendar-view-base.component';
import { NgcICalendarWeekDay } from '../calendar-types';
import * as i0 from "@angular/core";
export declare class NgcCalendarWeekViewComponent extends NgcCalendarViewBaseComponent {
    private _dateTimeConfig;
    protected cdRef: ChangeDetectorRef;
    protected translateService: TranslateService;
    firstWeekDay: NgcICalendarWeekDay;
    hourBlocks: {
        showCurrentTime: boolean;
        moment: Moment;
    }[];
    /**
     * @constructor
     * @param {DateTimeConfig} _dateTimeConfig
     * @param {ChangeDetectorRef} cdRef
     * @param {TranslateService} translateService
     */
    constructor(_dateTimeConfig: DateTimeConfig, cdRef: ChangeDetectorRef, translateService: TranslateService);
    /**
     * @return {void}
     */
    protected generatePeriod(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarWeekViewComponent, [{ optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCalendarWeekViewComponent, "ngc-calendar-week-view", never, { "firstWeekDay": "firstWeekDay"; }, {}, never, never, false>;
}
