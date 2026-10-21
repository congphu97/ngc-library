import { OnChanges, SimpleChanges } from '@angular/core';
import { CdkTable } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import { ScrollEvent } from '@core';
import * as i0 from "@angular/core";
export declare class NgcCdkTableComponent<T> extends CdkTable<T> implements OnChanges {
    get classScrolling(): boolean;
    scrolling$: Observable<ScrollEvent>;
    isScrollingX: boolean;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCdkTableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCdkTableComponent<any>, "table[ngcCdkTable]", never, { "scrolling$": "scrolling$"; }, {}, never, ["caption", "colgroup, col"], false>;
}
