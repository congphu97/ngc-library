import { ElementRef, NgZone } from '@angular/core';
import { NgcScrollBar } from './ngc-scroll-bar';
import * as i0 from "@angular/core";
export declare class NgcScrollBarDirective extends NgcScrollBar {
    elementRef: ElementRef;
    protected ngZone: NgZone;
    get styleMode(): string;
    get attrScrollBar(): boolean;
    get attrScrollBarSuppressX(): boolean;
    get attrScrollBarSuppressY(): boolean;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {NgZone} ngZone
     */
    constructor(elementRef: ElementRef, ngZone: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcScrollBarDirective, "[ngcScrollBar]", ["ngcScrollBar"], {}, {}, never, never, false>;
}
