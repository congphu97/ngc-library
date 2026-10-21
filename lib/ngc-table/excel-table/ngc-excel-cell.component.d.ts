import { EventEmitter, ElementRef, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ResizeEvent } from 'angular-resizable-element';
import { DateTimeConfig } from '@core';
import { NgcSearchBoxComponent } from '../../ngc-search-box';
import { NgcIDatePickerPickedEvent } from '../../ngc-date-picker';
import * as i0 from "@angular/core";
export declare type NgcIExcelCellType = 'website' | 'email' | 'number' | 'phone' | 'date' | 'list' | 'strict-list' | 'multi-list';
export declare class NgcExcelCellComponent implements OnInit, AfterViewInit {
    private _cdRef;
    private _elementRef;
    private _translateService;
    private _dateTimeConfig;
    get styleWidth(): string;
    get styleMinWidth(): string;
    get styleHeight(): string;
    get styleMinHeight(): string;
    get classFocusing(): boolean;
    get classValid(): boolean;
    get classInvalid(): boolean;
    get classDirty(): boolean;
    get classPristine(): boolean;
    get classTouched(): boolean;
    get classUntouched(): boolean;
    get classEnable(): boolean;
    get classDisabled(): boolean;
    get classHasList(): boolean;
    get attrDataError(): string;
    excellCellContent: ElementRef<any>;
    searchBox: NgcSearchBoxComponent;
    list: any[];
    textContent: string;
    itemSize: number;
    required: boolean;
    readonly: boolean;
    focusing: boolean;
    type: NgcIExcelCellType;
    textContentChange: EventEmitter<string>;
    focus: EventEmitter<Event>;
    blur: EventEmitter<Event>;
    width: string;
    height: string;
    error: string;
    isInvalid: boolean;
    formControl: FormControl;
    private _translateMessages;
    get rowIndex(): number;
    get columnIndex(): number;
    get filteredList(): any[];
    get useVirtualScroll(): boolean;
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     * @param {ElementRef} _elementRef
     * @param {TranslateService} _translateService
     * @param {DateTimeConfig} _dateTimeConfig
     */
    constructor(_cdRef: ChangeDetectorRef, _elementRef: ElementRef, _translateService: TranslateService, _dateTimeConfig: DateTimeConfig);
    /**
     * @constructor
     */
    ngOnInit(): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @param {ResizeEvent} event
     * @return {void}
     */
    onResizing(event: ResizeEvent): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onInput(event: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onKeydown(event: KeyboardEvent): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onFocus(event: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onBlur(event: Event): void;
    /**
     * @param {WGCIDatePickerPickedEvent} event
     * @return {void}
     */
    onDatePicked(event: NgcIDatePickerPickedEvent): void;
    /**
     * @param {string} textContent
     * @return {void}
     */
    setTextContent(textContent: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcExcelCellComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcExcelCellComponent, "td[ngcExcelCell]", never, { "list": "list"; "textContent": "textContent"; "itemSize": "itemSize"; "required": "required"; "readonly": "readonly"; "focusing": "focusing"; "type": "type"; }, { "textContentChange": "textContentChange"; "focus": "focus"; "blur": "blur"; }, never, ["*"], false>;
}
