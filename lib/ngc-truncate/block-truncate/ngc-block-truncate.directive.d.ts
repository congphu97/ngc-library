import { QueryList, ElementRef, AfterViewInit, ChangeDetectorRef, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcBlockTruncateDirective implements OnChanges, OnDestroy, AfterViewInit {
    _elementRef: ElementRef;
    private _cdRef;
    blocks: QueryList<ElementRef>;
    limit: number;
    maximum: number;
    length: number;
    parent: HTMLElement;
    maxDisplay: number;
    private _currentParentWidth;
    private _isRendering;
    private _render$;
    private _resizeObserver;
    private _markAsDoneDebounce;
    get moreDisplay(): number;
    get isFixedLimit(): boolean;
    get isTruncated(): boolean;
    get ele(): HTMLElement;
    get parentEle(): HTMLElement;
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
    ngAfterViewInit(): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @param {number} maxDisplay
     * @return {void}
     */
    protected setMaxDisplay(maxDisplay: number): void;
    /**
     * @param {number} parentWidth
     * @return {void}
     */
    protected markAsDone(parentWidth: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcBlockTruncateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcBlockTruncateDirective, "[ngcBlockTruncate]", ["ngcBlockTruncate"], { "limit": "limit"; "maximum": "maximum"; "length": "length"; "parent": "parent"; }, {}, ["blocks"], never, false>;
}
