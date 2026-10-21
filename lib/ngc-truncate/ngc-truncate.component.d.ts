import { ElementRef, AfterViewInit, AfterContentInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgcTooltipDirective } from '../ngc-tooltip.directive';
import * as i0 from "@angular/core";
export declare class NgcTruncateComponent implements AfterViewInit, AfterContentInit, OnDestroy {
    private _cdRef;
    get styleLine(): number;
    get classSingleLine(): boolean;
    get classDisabled(): boolean;
    get classEmpty(): boolean;
    wrapperEle: ElementRef<HTMLSpanElement>;
    limitLine: number;
    disabled: boolean;
    tooltip: any;
    ngcTooltip: NgcTooltipDirective;
    wgcTruncate: any;
    internalTooltip: any;
    internalLimitLine: number;
    isEmpty: boolean;
    private _checkTextOverDebounce;
    private _resizeObserver;
    private _mutationObserver;
    get textEle(): HTMLElement;
    get content(): string;
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_cdRef: ChangeDetectorRef);
    triggerMouseMove(): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @return {boolean}
     */
    private _checkTextOver;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTruncateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTruncateComponent, "ngc-truncate", never, { "limitLine": "limitLine"; "disabled": "disabled"; "tooltip": "tooltip"; "ngcTooltip": "ngcTooltip"; }, {}, never, ["*"], false>;
}
