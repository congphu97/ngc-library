import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum progressBarMode {
    INLINE = 0,
    STATUS = 1,
    PERCENT_INLINE = 2,
    SAVINGS = 3
}
export declare type IProgressBarMode = keyof typeof progressBarMode | progressBarMode | 'percent-inline' | 'savings';
export declare class NgcProgressBarComponent implements OnInit, OnChanges {
    get classVertical(): number;
    min: number;
    max: number;
    value: number;
    mode: IProgressBarMode;
    statusText: string;
    labelText: string;
    targetText: string;
    currentValueText: string;
    percent: number;
    progressBarMode: typeof progressBarMode;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private calculatePercent;
    changeRange(event: any): void;
    get isInlineMode(): boolean;
    get isStatusMode(): boolean;
    get isPercentInlineMode(): boolean;
    get isSavingsMode(): boolean;
    getModeName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcProgressBarComponent, "ngc-progress-bar", never, { "min": "min"; "max": "max"; "value": "value"; "mode": "mode"; "statusText": "statusText"; "labelText": "labelText"; "targetText": "targetText"; "currentValueText": "currentValueText"; }, {}, never, never, false>;
}
