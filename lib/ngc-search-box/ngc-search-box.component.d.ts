import { EventEmitter, OnChanges, SimpleChanges, ElementRef, OnDestroy, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { INotFoundData } from '@core';
import { NgcIFormFieldAppearance, NgcIFormFieldErrorDisplayMode } from '../ngc-form-field';
import { NgcMenuTriggerForDirective } from '../ngc-menu';
import * as i0 from "@angular/core";
export declare class NgcSearchBoxComponent implements OnChanges, OnDestroy {
    elementRef: ElementRef;
    private _cdRef;
    menuTrigger: NgcMenuTriggerForDirective;
    notFoundTemplate: TemplateRef<any>;
    data: any[];
    suggestion: any;
    ngModel: string;
    name: string;
    label: string;
    placeholder: string;
    prefixIcon: string;
    suffixIcon: string;
    searchKey: string;
    fieldName: string;
    fieldDescription: string;
    fieldImage: string;
    fieldAvatar: string;
    itemSize: number;
    debounceTime: number;
    trim: boolean;
    displayNotFound: boolean;
    disableControl: boolean;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    autoFocusOn: boolean;
    autoReset: boolean;
    notFoundData: INotFoundData;
    formControl: FormControl;
    appearance: NgcIFormFieldAppearance;
    errorDisplayMode: NgcIFormFieldErrorDisplayMode;
    filterPredicate: (data: any, searchQuery: string, searchKey?: string) => boolean;
    ngModelChange: EventEmitter<string>;
    searching: EventEmitter<string>;
    cleared: EventEmitter<Event>;
    filtered: EventEmitter<any[]>;
    suggested: EventEmitter<any>;
    prefixIconClicked: EventEmitter<void>;
    suffixIconClicked: EventEmitter<void>;
    input: EventEmitter<Event>;
    focus: EventEmitter<Event>;
    blur: EventEmitter<Event>;
    searchQuery: string;
    focusing: boolean;
    focusIndex: number;
    filteredData: any[];
    suggestionData: any[];
    private _searchUpdated$;
    get useVirtualScroll(): boolean;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef);
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {string} searchQuery
     * @return {void}
     */
    onSearch(searchQuery: string): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onClear(event: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onInput(event: Event): void;
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
     * @param {Event} event
     * @return {void}
     */
    clear(event?: Event): void;
    /**
     * @param {Event} event
     * @param {number} index
     * @return {void}
     */
    chooseSuggestItem(event: Event, index: number): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    focusPreviousSuggestItem(event: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    focusNextSuggestItem(event: Event): void;
    /**
     * @return {void}
     */
    private _toggleMenu;
    /**
     * @return {void}
     */
    private _filter;
    /**
     * @return {void}
     */
    private _suggest;
    /**
     * @param {any} item
     * @return {boolean}
     */
    private _filterPredicate;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcSearchBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcSearchBoxComponent, "ngc-search-box", never, { "data": "data"; "suggestion": "suggestion"; "ngModel": "ngModel"; "name": "name"; "label": "label"; "placeholder": "placeholder"; "prefixIcon": "prefixIcon"; "suffixIcon": "suffixIcon"; "searchKey": "searchKey"; "fieldName": "fieldName"; "fieldDescription": "fieldDescription"; "fieldImage": "fieldImage"; "fieldAvatar": "fieldAvatar"; "itemSize": "itemSize"; "debounceTime": "debounceTime"; "trim": "trim"; "displayNotFound": "displayNotFound"; "disableControl": "disableControl"; "disabled": "disabled"; "readonly": "readonly"; "required": "required"; "autoFocusOn": "autoFocusOn"; "autoReset": "autoReset"; "notFoundData": "notFoundData"; "formControl": "formControl"; "appearance": "appearance"; "errorDisplayMode": "errorDisplayMode"; "filterPredicate": "filterPredicate"; }, { "ngModelChange": "ngModelChange"; "searching": "searching"; "cleared": "cleared"; "filtered": "filtered"; "suggested": "suggested"; "prefixIconClicked": "prefixIconClicked"; "suffixIconClicked": "suffixIconClicked"; "input": "input"; "focus": "focus"; "blur": "blur"; }, never, never, false>;
}
