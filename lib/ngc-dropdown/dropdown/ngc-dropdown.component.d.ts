import { QueryList, EventEmitter, AfterContentInit, OnChanges, SimpleChanges, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { TranslateService } from '@ngx-translate/core';
import { NgcIFormFieldAppearance, NgcIFormFieldErrorDisplayMode, NgcFormFieldErrorDirective } from '../../ngc-form-field';
import { NgcMenuTriggerForDirective } from '../../ngc-menu';
import { NgcDropdownGroupItemComponent } from '../dropdown-group-item/ngc-dropdown-group-item.component';
import { NgcDropdownItemComponent } from '../dropdown-item/ngc-dropdown-item.component';
import { NgcSearchBoxComponent } from '@app/@ngc/ngc-search-box';
import * as i0 from "@angular/core";
declare type NgcDropdownInternalItem = NgcDropdownGroupItemComponent | NgcDropdownItemComponent;
export declare class NgcDropdownComponent implements AfterContentInit, OnChanges {
    private _cdRef;
    private _translateService;
    dropdownMenuTrigger: NgcMenuTriggerForDirective;
    private _searchBox;
    set searchBox(value: NgcSearchBoxComponent);
    get searchBox(): NgcSearchBoxComponent;
    viewPort: CdkVirtualScrollViewport;
    displayTemp: TemplateRef<any>;
    formFieldError: NgcFormFieldErrorDirective;
    dropdownGroupItems: QueryList<NgcDropdownGroupItemComponent>;
    dropdownItems: QueryList<NgcDropdownItemComponent>;
    ngModel: any;
    label: string;
    searchPlaceholder: string;
    placeholder: string;
    itemSize: number;
    tabindex: number;
    disableControl: boolean;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    multiple: boolean;
    canSetNone: boolean;
    autoFit: boolean;
    strictDisplay: boolean;
    formControl: FormControl;
    appearance: NgcIFormFieldAppearance;
    errorDisplayMode: NgcIFormFieldErrorDisplayMode;
    ngModelChange: EventEmitter<any>;
    changed: EventEmitter<any>;
    opened: EventEmitter<Event>;
    closed: EventEmitter<Event>;
    loadMore: EventEmitter<boolean>;
    displayValue: string;
    selected: any;
    isOpened: boolean;
    isDirty: boolean;
    items: NgcDropdownInternalItem[];
    selectedGroup: NgcDropdownGroupItemComponent;
    private _bkItems;
    get isSelected(): boolean;
    get visibleNoneOption(): boolean;
    get useVirtualScroll(): boolean;
    get filteredItems(): NgcDropdownInternalItem[];
    get availableItems(): NgcDropdownItemComponent[];
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     * @param {TranslateService} _translateService
     */
    constructor(_cdRef: ChangeDetectorRef, _translateService: TranslateService);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onOpened(event: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onClosed(event: Event): void;
    /**
     * @param {NgcDropdownInternalItem[]} items
     * @param {any} value
     * @return {NgcDropdownItemComponent}
     */
    findItem(items: NgcDropdownInternalItem[], value: any): NgcDropdownItemComponent;
    /**
     * @param {NgcDropdownInternalItem} item
     * @param {boolean} markAsDirty
     * @return {void}
     */
    selectItem(item: NgcDropdownInternalItem, markAsDirty?: boolean): void;
    /**
     * @param {NgcDropdownGroupItemComponent} group
     * @return {void}
     */
    selectGroup(group: NgcDropdownGroupItemComponent): void;
    /**
     * @return {void}
     */
    unselectGroup(): void;
    /**
     * @return {void}
     */
    addAllItems(): void;
    /**
     * @return {void}
     */
    removeAllItems(): void;
    /**
     * @return {void}
     */
    clear(): void;
    /**
     * @param {any} value
     * @return {void}
     */
    scrollToItem(value: any): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    open(event?: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    close(event?: Event): void;
    /**
     * @return {void}
     */
    reopen(): void;
    /**
     * @return {void}
     */
    markForCheck(): void;
    /**
     * @param {boolean} markAsDirty
     * @return {void}
     */
    private _done;
    /**
     * @return {void}
     */
    private _initSelected;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcDropdownComponent, "ngc-dropdown", never, { "ngModel": "ngModel"; "label": "label"; "searchPlaceholder": "searchPlaceholder"; "placeholder": "placeholder"; "itemSize": "itemSize"; "tabindex": "tabindex"; "disableControl": "disableControl"; "disabled": "disabled"; "readonly": "readonly"; "required": "required"; "multiple": "multiple"; "canSetNone": "canSetNone"; "autoFit": "autoFit"; "strictDisplay": "strictDisplay"; "formControl": "formControl"; "appearance": "appearance"; "errorDisplayMode": "errorDisplayMode"; }, { "ngModelChange": "ngModelChange"; "changed": "changed"; "opened": "opened"; "closed": "closed"; "loadMore": "loadMore"; }, ["displayTemp", "formFieldError", "dropdownGroupItems", "dropdownItems"], ["[ngcFormFieldError]"], false>;
}
export {};
