import { QueryList, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import { CdkDropList, CdkDrag, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { DetectScrollDirective } from '@core';
import { NgcScrollBarDirective, INgcScrollBarMode } from '../../ngc-scroll-bar';
import { NgcGridItemComponent } from '../grid-item/ngc-grid-item.component';
import * as i0 from "@angular/core";
export interface NgcIGridItemMoved {
    previousIndex: number;
    currentIndex: number;
    item: NgcGridItemComponent;
}
export declare class NgcGridComponent implements AfterViewInit, AfterContentInit {
    get styleItemWidth(): string;
    get styleItemActiveColor(): string;
    get classStretch(): boolean;
    listGroup: CdkDropListGroup<CdkDropList>;
    placeholder: CdkDropList;
    scroller: DetectScrollDirective;
    scrollBar: NgcScrollBarDirective;
    gridItems: QueryList<NgcGridItemComponent>;
    itemsPerRow: number;
    activeColor: string;
    stretch: boolean;
    scrollBarMode: INgcScrollBarMode;
    itemsSelected: EventEmitter<NgcGridItemComponent[]>;
    itemMoved: EventEmitter<NgcIGridItemMoved>;
    loadMore: EventEmitter<boolean>;
    items: NgcGridItemComponent[];
    private _sourceIndex;
    private _targetIndex;
    private _source;
    private _target;
    get width(): string;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @return {void}
     */
    onItemsSelected(): void;
    /**
     * @return {void}
     */
    deselectItems(): void;
    /**
     * @return {void}
     */
    onDropped(): void;
    enter: (drag: CdkDrag, drop: CdkDropList) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcGridComponent, "ngc-grid", never, { "itemsPerRow": "itemsPerRow"; "activeColor": "activeColor"; "stretch": "stretch"; "scrollBarMode": "scrollBarMode"; }, { "itemsSelected": "itemsSelected"; "itemMoved": "itemMoved"; "loadMore": "loadMore"; }, ["gridItems"], never, false>;
}
