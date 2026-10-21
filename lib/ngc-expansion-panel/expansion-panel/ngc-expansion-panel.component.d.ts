import { EventEmitter, ElementRef, SimpleChanges, OnChanges, ChangeDetectorRef, QueryList } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgcExpansionPanelHeaderComponent } from '../expansion-panel-header/ngc-expansion-panel-header.component';
import { NgcExpansionPanelContentComponent } from '../expansion-panel-content/ngc-expansion-panel-content.component';
import * as i0 from "@angular/core";
export declare type NgcIExpansionPanelTheme = 'default' | 'background';
export declare class NgcExpansionPanelComponent implements OnChanges {
    elementRef: ElementRef;
    private _cdRef;
    get styleHeaderColor(): string;
    get styleHeaderTextColor(): string;
    get styleHeaderFontSize(): string;
    get styleHeaderWidth(): string;
    get styleContentPaddingTop(): string;
    get styleContentPaddingBottom(): string;
    get styleContentPaddingLeft(): string;
    get styleContentPaddingRight(): string;
    get classExpanded(): boolean;
    get classDraggable(): boolean;
    get classHasScrollBar(): boolean;
    get classThemeBackground(): boolean;
    expansionPanelHeaderList: QueryList<NgcExpansionPanelHeaderComponent>;
    expansionPanelContentList: QueryList<NgcExpansionPanelContentComponent>;
    cdkDrag: CdkDrag;
    cdkDragDisabled: boolean;
    renderDelay: number;
    expanded: boolean;
    draggable: boolean;
    hasScrollBar: boolean;
    contentPaddingVertical: string;
    contentPaddingHorizontal: string;
    contentPaddingTop: string;
    contentPaddingBottom: string;
    contentPaddingLeft: string;
    contentPaddingRight: string;
    theme: NgcIExpansionPanelTheme;
    expandedChange: EventEmitter<boolean>;
    isRendered: boolean;
    get expansionPanelHeader(): NgcExpansionPanelHeaderComponent;
    get expansionPanelContent(): NgcExpansionPanelContentComponent;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @return {void}
     */
    expand(): void;
    /**
     * @return {void}
     */
    collapse(): void;
    /**
     * @return {void}
     */
    private _render;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcExpansionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcExpansionPanelComponent, "ngc-expansion-panel", never, { "cdkDrag": "cdkDrag"; "cdkDragDisabled": "cdkDragDisabled"; "renderDelay": "renderDelay"; "expanded": "expanded"; "draggable": "draggable"; "hasScrollBar": "hasScrollBar"; "contentPaddingVertical": "contentPaddingVertical"; "contentPaddingHorizontal": "contentPaddingHorizontal"; "contentPaddingTop": "contentPaddingTop"; "contentPaddingBottom": "contentPaddingBottom"; "contentPaddingLeft": "contentPaddingLeft"; "contentPaddingRight": "contentPaddingRight"; "theme": "theme"; }, { "expandedChange": "expandedChange"; }, ["expansionPanelHeaderList", "expansionPanelContentList"], ["*"], false>;
}
