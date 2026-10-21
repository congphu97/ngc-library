import { EventEmitter, AfterContentInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IObject } from '@core';
import { NgcFormFieldInputDirective } from '../form-field-input/ngc-form-field-input.directive';
import { NgcFormFieldErrorDirective } from '../form-field-error/ngc-form-field-error.directive';
import * as i0 from "@angular/core";
export declare type NgcIFormFieldAppearance = 'default' | 'standard' | 'legacy';
export declare type NgcIFormFieldErrorDisplayMode = 'default' | 'inline';
export declare class NgcFormFieldComponent implements AfterContentInit, OnChanges {
    private _cdRef;
    private _translateService;
    get styleInputTextAlign(): string;
    get styleInputTextSize(): string;
    get classCustomError(): boolean;
    get classValid(): boolean;
    get classInvalid(): boolean;
    get classDirty(): boolean;
    get classPristine(): boolean;
    get classTouched(): boolean;
    get classUntouched(): boolean;
    get classEnabled(): boolean;
    get classDisabled(): boolean;
    get classReadonly(): boolean;
    get classFocusing(): boolean;
    get classTextarea(): boolean;
    get classEmpty(): boolean;
    get classStandard(): boolean;
    get classLegacy(): boolean;
    control: FormControlDirective;
    formFieldInput: NgcFormFieldInputDirective;
    formFieldError: NgcFormFieldErrorDirective;
    label: string;
    dotColor: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    focusing: boolean;
    fakeInput: boolean;
    multiErrors: boolean;
    displayColorDot: boolean;
    togglePasswordVisibility: boolean;
    checkWeekPassword: boolean;
    appearance: NgcIFormFieldAppearance;
    errorDisplayMode: NgcIFormFieldErrorDisplayMode;
    dotColorChange: EventEmitter<string>;
    unhidePassword: boolean;
    passwordHighlight: IObject<{
        color: string;
        message: string;
    }>;
    passwordRule: {
        minlength: boolean;
        numberOrSymbol: boolean;
        uppercase: boolean;
        lowercase: boolean;
        percent: number;
    };
    get canAction(): boolean;
    get canClear(): boolean;
    get canSave(): boolean;
    get canCancel(): boolean;
    get canCheckWeekPassword(): boolean;
    get fieldName(): string;
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     * @param {TranslateService} _translateService
     */
    constructor(_cdRef: ChangeDetectorRef, _translateService: TranslateService);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @return {void}
     */
    togglePassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcFormFieldComponent, "ngc-form-field", never, { "label": "label"; "dotColor": "dotColor"; "required": "required"; "disabled": "disabled"; "readonly": "readonly"; "focusing": "focusing"; "fakeInput": "fakeInput"; "multiErrors": "multiErrors"; "displayColorDot": "displayColorDot"; "togglePasswordVisibility": "togglePasswordVisibility"; "checkWeekPassword": "checkWeekPassword"; "appearance": "appearance"; "errorDisplayMode": "errorDisplayMode"; }, { "dotColorChange": "dotColorChange"; }, ["control", "formFieldInput", "formFieldError"], ["*", "[ngcFormFieldLabel]", "[ngcFormFieldPrefix]", "[ngcFormFieldSuffix]", "[ngcFormFieldDescription]", "[ngcFormFieldHint]", "[ngcFormFieldError]"], false>;
}
