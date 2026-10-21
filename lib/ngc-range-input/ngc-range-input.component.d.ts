import { OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl, ValidatorFn, ControlValueAccessor } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgcIFormFieldAppearance, NgcIFormFieldErrorDisplayMode } from '../ngc-form-field';
import * as i0 from "@angular/core";
export declare const Ngc_RANGE_INPUT_VALIDATION: ValidatorFn;
export declare class NgcRangeInputComponent implements ControlValueAccessor, OnChanges {
    private _translateService;
    label: string;
    placeholder: string;
    startRangeName: string;
    endRangeName: string;
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    autoFocusOn: boolean;
    appearance: NgcIFormFieldAppearance;
    errorDisplayMode: NgcIFormFieldErrorDisplayMode;
    startRangeFormControl: FormControl;
    endRangeFormControl: FormControl;
    ngModelChange: EventEmitter<number[]>;
    startRange: number;
    endRange: number;
    private _innerValue;
    set ngModel(value: number[]);
    get maxStartRange(): number;
    get minEndRange(): number;
    /**
     * @constructor
     * @param {TranslateService} _translateService
     */
    constructor(_translateService: TranslateService);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     * @param {number[]} value
     */
    writeValue(value: number[]): void;
    /**
     * @constructor
     * @param {Function} fn
     */
    registerOnChange(fn: Function): void;
    /**
     * @constructor
     * @param {Function} fn
     */
    registerOnTouched(fn: Function): void;
    /**
     * @return {void}
     */
    onStartRangeChanged(): void;
    /**
     * @return {void}
     */
    onEndRangeChanged(): void;
    /**
     * @return {void}
     */
    onTouched(): void;
    private _onTouchedCallback;
    private _onChangeCallback;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcRangeInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcRangeInputComponent, "ngc-range-input", never, { "label": "label"; "placeholder": "placeholder"; "startRangeName": "startRangeName"; "endRangeName": "endRangeName"; "min": "min"; "max": "max"; "step": "step"; "disabled": "disabled"; "readonly": "readonly"; "required": "required"; "autoFocusOn": "autoFocusOn"; "appearance": "appearance"; "errorDisplayMode": "errorDisplayMode"; "startRangeFormControl": "startRangeFormControl"; "endRangeFormControl": "endRangeFormControl"; "ngModel": "ngModel"; }, { "ngModelChange": "ngModelChange"; }, never, never, false>;
}
