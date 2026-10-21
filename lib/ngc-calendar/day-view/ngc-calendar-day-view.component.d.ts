import { ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgcCalendarViewBaseComponent } from '../common/ngc-calendar-view-base.component';
import * as i0 from "@angular/core";
export declare class NgcCalendarDayViewComponent extends NgcCalendarViewBaseComponent {
    protected cdRef: ChangeDetectorRef;
    protected translateService: TranslateService;
    maxEventPerHour: number;
    /**
     * @constructor
     * @param {ChangeDetectorRef} cdRef
     * @param {TranslateService} translateService
     */
    constructor(cdRef: ChangeDetectorRef, translateService: TranslateService);
    /**
     * @return {void}
     */
    protected generatePeriod(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarDayViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCalendarDayViewComponent, "ngc-calendar-day-view", never, { "maxEventPerHour": "maxEventPerHour"; }, {}, never, never, false>;
}
