import { QueryList, AfterContentInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgcButtonToggleItemComponent } from '../ngc-button-toggle-item/ngc-button-toggle-item.component';
import * as i0 from "@angular/core";
export declare type NgcIButtonToggleTheme = 'default' | 'background';
export declare class NgcButtonToggleComponent implements AfterContentInit, OnChanges {
    get classStretch(): boolean;
    get classReverse(): boolean;
    get classHasBorder(): boolean;
    get classHasShadow(): boolean;
    get classThemeBackground(): boolean;
    buttonToggleItems: QueryList<NgcButtonToggleItemComponent>;
    selectedIndex: number;
    stretch: boolean;
    reverse: boolean;
    hasBorder: boolean;
    hasShadow: boolean;
    theme: NgcIButtonToggleTheme;
    selectedIndexChange: EventEmitter<number>;
    changed: EventEmitter<NgcButtonToggleItemComponent>;
    items: NgcButtonToggleItemComponent[];
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {number} index
     * @param {boolean} markAsDirty
     * @return {void}
     */
    select(index: number, markAsDirty?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcButtonToggleComponent, "ngc-button-toggle", never, { "selectedIndex": "selectedIndex"; "stretch": "stretch"; "reverse": "reverse"; "hasBorder": "hasBorder"; "hasShadow": "hasShadow"; "theme": "theme"; }, { "selectedIndexChange": "selectedIndexChange"; "changed": "changed"; }, ["buttonToggleItems"], ["*"], false>;
}
