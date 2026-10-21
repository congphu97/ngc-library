import { ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DateTimeConfig } from '@core';
import { NgcCalendarViewBaseComponent } from '../common/ngc-calendar-view-base.component';
import { NgcICalendarWeekDay } from '../calendar-types';
import * as i0 from "@angular/core";
export declare class NgcCalendarMonthViewComponent extends NgcCalendarViewBaseComponent {
    private _dateTimeConfig;
    protected cdRef: ChangeDetectorRef;
    protected translateService: TranslateService;
    firstWeekDay: NgcICalendarWeekDay;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarMonthViewComponent, [{ optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCalendarMonthViewComponent, "ngc-calendar-month-view", never, { "firstWeekDay": "firstWeekDay"; }, {}, never, never, false>;
}
