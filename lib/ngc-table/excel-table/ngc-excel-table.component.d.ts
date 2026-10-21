import { ElementRef, QueryList, AfterContentInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { NgcExcelCellComponent } from './ngc-excel-cell.component';
import * as i0 from "@angular/core";
export declare class NgcExcelTableComponent implements AfterContentInit {
    private _elementRef;
    excelCellList: QueryList<NgcExcelCellComponent>;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcExcelTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcExcelTableComponent, "table[ngcExcelTable]", never, {}, {}, ["excelCellList"], ["*"], false>;
}
