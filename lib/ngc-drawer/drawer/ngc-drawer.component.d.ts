import { ElementRef, EventEmitter, SimpleChanges, OnChanges, ChangeDetectorRef } from '@angular/core';
import { NgcDrawerLazyDirective } from './ngc-drawer-lazy.directive';
import * as i0 from "@angular/core";
export declare type NgcDrawerPosition = 'left' | 'right';
export declare class NgcDrawerComponent implements OnChanges {
    elementRef: ElementRef;
    private _cdRef;
    get styleBgColor(): string;
    get styleWidth(): string;
    get stylePaddingTop(): string;
    get stylePaddingBottom(): string;
    get stylePaddingLeft(): string;
    get stylePaddingRight(): string;
    get classLeft(): boolean;
    get classRight(): boolean;
    get classOpened(): boolean;
    get classSliding(): boolean;
    lazyContent: NgcDrawerLazyDirective;
    label: string;
    bgColor: string;
    renderDelay: number;
    opened: boolean;
    width: string;
    paddingVertical: string;
    paddingHorizontal: string;
    paddingTop: string;
    paddingBottom: string;
    paddingLeft: string;
    paddingRight: string;
    position: NgcDrawerPosition;
    openedChange: EventEmitter<boolean>;
    isSliding: boolean;
    isRendered: boolean;
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
    toggle(): void;
    /**
     * @return {void}
     */
    private _render;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcDrawerComponent, "ngc-drawer, [ngcDrawer]", never, { "label": "label"; "bgColor": "bgColor"; "renderDelay": "renderDelay"; "opened": "opened"; "width": "width"; "paddingVertical": "paddingVertical"; "paddingHorizontal": "paddingHorizontal"; "paddingTop": "paddingTop"; "paddingBottom": "paddingBottom"; "paddingLeft": "paddingLeft"; "paddingRight": "paddingRight"; "position": "position"; }, { "openedChange": "openedChange"; }, ["lazyContent"], ["*"], false>;
}
