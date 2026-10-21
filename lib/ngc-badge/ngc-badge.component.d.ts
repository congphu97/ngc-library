import { ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { ContrastPipe } from '@core';
import * as i0 from "@angular/core";
export declare type WGCIBadgePositionMode = 'default' | 'inline' | 'absolute';
export declare class NgcBadgeComponent implements AfterViewInit, OnChanges {
    private _elementRef;
    private _contrastPipe;
    get styleColor(): string;
    get styleTextColor(): string;
    get classPosInline(): boolean;
    get classPosAbsolute(): boolean;
    get styleBorderColor(): string;
    count: string;
    color: string;
    background: string;
    textColor: string;
    positionMode: WGCIBadgePositionMode;
    wgcBadge: string;
    private _bkTextColor;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_elementRef: ElementRef, _contrastPipe: ContrastPipe);
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcBadgeComponent, "ngc-badge, [ngcBadge]", never, { "count": "count"; "color": "color"; "background": "background"; "textColor": "textColor"; "positionMode": "positionMode"; "wgcBadge": "wgcBadge"; }, {}, never, ["*"], false>;
}
