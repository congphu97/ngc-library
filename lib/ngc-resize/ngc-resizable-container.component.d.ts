import { QueryList, AfterContentInit, ElementRef } from '@angular/core';
import { NgcResizablePanelComponent } from './ngc-resizable-panel.component';
import { NgcResizableHandleComponent } from './ngc-resizable-handle.component';
import * as i0 from "@angular/core";
export declare class NgcResizableContainerComponent implements AfterContentInit {
    private el;
    direction: 'horizontal' | 'vertical';
    panels: QueryList<NgcResizablePanelComponent>;
    handles: QueryList<NgcResizableHandleComponent>;
    private activeDragIndex;
    private startPosition;
    private startSizes;
    constructor(el: ElementRef);
    ngAfterContentInit(): void;
    private initializeSizes;
    private onDragStart;
    private onDragMove;
    private getPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcResizableContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcResizableContainerComponent, "ngc-resizable-container", never, { "direction": "direction"; }, {}, ["panels", "handles"], ["*"], false>;
}
