import { OnChanges, SimpleChanges, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import { ScrollEvent } from '@core';
import * as i0 from "@angular/core";
export declare class NgcTableComponent implements OnChanges {
    private _elementRef;
    private _cdRef;
    get classScrolling(): boolean;
    scrolling$: Observable<ScrollEvent>;
    isScrollingX: boolean;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_elementRef: ElementRef, _cdRef: ChangeDetectorRef);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {XLSX.Table2SheetOpts} options
     * @return {XLSX.WorkSheet}
     */
    export(options?: XLSX.Table2SheetOpts): XLSX.WorkSheet;
    /**
     * @param {string} filename
     * @param {boolean} isOnlyHeader
     * @return {void}
     */
    download(filename: string, isOnlyHeader?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTableComponent, "table[ngcTable]", never, { "scrolling$": "scrolling$"; }, {}, never, ["*"], false>;
}
