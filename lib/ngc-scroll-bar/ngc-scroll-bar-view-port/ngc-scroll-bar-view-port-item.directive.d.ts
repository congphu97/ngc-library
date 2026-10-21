import { ElementRef, NgZone, ChangeDetectorRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcScrollBarViewPortItemDirective {
    elementRef: ElementRef;
    private _cdRef;
    private _ngZone;
    viewPortOffset: number[];
    inViewPort: EventEmitter<boolean>;
    isInViewPort: boolean;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {NgZone} _ngZone
     */
    constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef, _ngZone: NgZone);
    /**
     * @param {ElementRef} parent
     * @return {void}
     */
    checkInViewPort(parent?: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBarViewPortItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcScrollBarViewPortItemDirective, "[ngcScrollBarViewPortItem]", ["ngcScrollBarViewPortItem"], { "viewPortOffset": "viewPortOffset"; }, { "inViewPort": "inViewPort"; }, never, never, false>;
}
