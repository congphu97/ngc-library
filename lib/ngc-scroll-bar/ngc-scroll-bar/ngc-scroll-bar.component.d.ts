import { ElementRef, NgZone } from '@angular/core';
import { NgcScrollBar } from './ngc-scroll-bar';
import * as i0 from "@angular/core";
export declare class NgcScrollBarComponent extends NgcScrollBar {
    elementRef: ElementRef;
    protected ngZone: NgZone;
    get styleMode(): string;
    get styleSuppressMode(): string;
    get attrScrollBar(): boolean;
    get attrScrollBarSuppressX(): boolean;
    get attrScrollBarSuppressY(): boolean;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {NgZone} ngZone
     */
    constructor(elementRef: ElementRef, ngZone: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcScrollBarComponent, "ngc-scroll-bar", never, {}, {}, never, ["*"], false>;
}
