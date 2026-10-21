import { QueryList, ElementRef, EventEmitter, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DetectScrollDirective } from '@core';
import { NgcScrollBarDirective, INgcScrollBarMode } from '../../ngc-scroll-bar';
import { NgcTabComponent } from '../tab/ngc-tab.component';
import * as i0 from "@angular/core";
export interface NgcIBeforeTabChangeEvent {
    tabGroup: NgcTabGroupComponent;
    tabIndex: number;
}
export declare type NgcITabAlignment = 'left' | 'right' | 'center';
export declare class NgcTabGroupComponent implements OnChanges, OnDestroy, AfterContentInit, AfterViewInit {
    private _elementRef;
    private _cdRef;
    get styleHeaderHeight(): string;
    get styleContentPaddingTop(): string;
    get styleContentPaddingBottom(): string;
    get styleContentPaddingLeft(): string;
    get styleContentPaddingRight(): string;
    get classStretch(): boolean;
    get classLeft(): boolean;
    get classRight(): boolean;
    get classCenter(): boolean;
    scroller: DetectScrollDirective;
    scrollBar: NgcScrollBarDirective;
    tabGroupHeader: ElementRef;
    tabInkBar: ElementRef;
    tabHeaderList: QueryList<ElementRef>;
    tabItems: QueryList<NgcTabComponent>;
    headerHeight: string;
    contentPaddingVertical: string;
    contentPaddingHorizontal: string;
    contentPaddingTop: string;
    contentPaddingBottom: string;
    contentPaddingLeft: string;
    contentPaddingRight: string;
    selectedIndex: number;
    hasScrollBar: boolean;
    stretch: boolean;
    stretchTab: boolean;
    headerVerticalDivider: boolean;
    headerHorizontalDivider: boolean;
    alwaysOnDisplay: boolean;
    noTabContent: boolean;
    alignment: NgcITabAlignment;
    scrollBarMode: INgcScrollBarMode;
    selectedIndexChange: EventEmitter<number>;
    tabChanged: EventEmitter<NgcTabComponent>;
    items: NgcTabComponent[];
    private _tabHeaderItems;
    private _resizeObserver;
    private _initInkBarThrottle;
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
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @param {number} index
     * @return {void}
     */
    select(index: number): void;
    /**
     * @param {number} index
     * @return {void}
     */
    private _initInkBar;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTabGroupComponent, "ngc-tab-group", never, { "headerHeight": "headerHeight"; "contentPaddingVertical": "contentPaddingVertical"; "contentPaddingHorizontal": "contentPaddingHorizontal"; "contentPaddingTop": "contentPaddingTop"; "contentPaddingBottom": "contentPaddingBottom"; "contentPaddingLeft": "contentPaddingLeft"; "contentPaddingRight": "contentPaddingRight"; "selectedIndex": "selectedIndex"; "hasScrollBar": "hasScrollBar"; "stretch": "stretch"; "stretchTab": "stretchTab"; "headerVerticalDivider": "headerVerticalDivider"; "headerHorizontalDivider": "headerHorizontalDivider"; "alwaysOnDisplay": "alwaysOnDisplay"; "noTabContent": "noTabContent"; "alignment": "alignment"; "scrollBarMode": "scrollBarMode"; }, { "selectedIndexChange": "selectedIndexChange"; "tabChanged": "tabChanged"; }, ["tabItems"], never, false>;
}
