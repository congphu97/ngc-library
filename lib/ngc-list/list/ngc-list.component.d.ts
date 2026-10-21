import { QueryList, EventEmitter, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DetectScrollDirective } from '@core';
import { NgcScrollBarDirective, INgcScrollBarMode } from '../../ngc-scroll-bar';
import { NgcListItemComponent } from '../list-item/ngc-list-item.component';
import * as i0 from "@angular/core";
export interface NgcIListItemMoved {
    item: NgcListItemComponent;
    container: NgcListItemComponent[];
    previousIndex: number;
    currentIndex: number;
    previousOrder: number;
    currentOrder: number;
}
export declare class NgcListComponent implements AfterContentInit {
    private _cdRef;
    private _translateService;
    get styleItemActiveColor(): string;
    get classStretch(): boolean;
    scroller: DetectScrollDirective;
    scrollBar: NgcScrollBarDirective;
    listItems: QueryList<NgcListItemComponent>;
    name: string;
    placeholder: string;
    itemSize: number;
    loadMoreBuffer: number;
    activeColor: string;
    stretch: boolean;
    displayColorDot: boolean;
    hasScrollBar: boolean;
    scrollBarMode: INgcScrollBarMode;
    formControl: FormControl;
    itemsMoved: EventEmitter<NgcIListItemMoved[]>;
    loadMore: EventEmitter<boolean>;
    items: NgcListItemComponent[];
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     * @param {TranslateService} _translateService
     */
    constructor(_cdRef: ChangeDetectorRef, _translateService: TranslateService);
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @param {CdkDragDrop} event
     * @return {void}
     */
    onDropped(event: CdkDragDrop<NgcListItemComponent[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcListComponent, "ngc-list", never, { "name": "name"; "placeholder": "placeholder"; "itemSize": "itemSize"; "loadMoreBuffer": "loadMoreBuffer"; "activeColor": "activeColor"; "stretch": "stretch"; "displayColorDot": "displayColorDot"; "hasScrollBar": "hasScrollBar"; "scrollBarMode": "scrollBarMode"; "formControl": "formControl"; }, { "itemsMoved": "itemsMoved"; "loadMore": "loadMore"; }, ["listItems"], never, false>;
}
