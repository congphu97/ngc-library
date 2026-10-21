import { ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { ContrastPipe } from '@core';
import * as i0 from "@angular/core";
export declare class NgcTagComponent implements OnChanges, AfterViewInit {
    private _elementRef;
    private _contrastPipe;
    get styleColor(): string;
    get styleLabelColor(): string;
    get classMinimize(): boolean;
    label: string;
    labelColor: string;
    color: string;
    minimize: boolean;
    truncate: boolean;
    truncateLimitLine: number;
    private _bkLabelColor;
    get nativeElement(): HTMLElement;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_elementRef: ElementRef, _contrastPipe: ContrastPipe);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTagComponent, "ngc-tag", never, { "label": "label"; "labelColor": "labelColor"; "color": "color"; "minimize": "minimize"; "truncate": "truncate"; "truncateLimitLine": "truncateLimitLine"; }, {}, never, ["*"], false>;
}
