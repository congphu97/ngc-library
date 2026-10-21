import { OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl, ValidatorFn, ControlValueAccessor } from '@angular/forms';
import { CountryCode, CountryCallingCode } from 'libphonenumber-js';
import { PHONE_COUNTRIES } from '@resources';
import { NgcIFormFieldAppearance, NgcIFormFieldErrorDisplayMode } from '../ngc-form-field';
import { NgcSearchBoxComponent } from '../ngc-search-box';
import * as i0 from "@angular/core";
interface IPhoneCountry {
    name: string;
    code: CountryCode;
    dialCode: CountryCallingCode;
}
export interface NgcIPhoneValue {
    phone: string;
    countryCode: CountryCode;
}
export declare const Ngc_PHONE_FIELD_VALIDATION: ValidatorFn;
export declare class NgcPhoneFieldComponent implements ControlValueAccessor, OnChanges {
    get classDisabled(): boolean;
    searchBox: NgcSearchBoxComponent;
    name: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    autoFocusOn: boolean;
    autoReset: boolean;
    autoFormatNational: boolean;
    appearance: NgcIFormFieldAppearance;
    errorDisplayMode: NgcIFormFieldErrorDisplayMode;
    phoneFormControl: FormControl;
    ngModelChange: EventEmitter<NgcIPhoneValue>;
    countryCodeChanged: EventEmitter<CountryCode>;
    cleared: EventEmitter<Event>;
    input: EventEmitter<Event>;
    focus: EventEmitter<Event>;
    blur: EventEmitter<Event>;
    phone: string;
    countryCode: CountryCode;
    countryDialCode: any;
    PHONE_COUNTRIES: typeof PHONE_COUNTRIES;
    filteredPhoneCountries: typeof PHONE_COUNTRIES;
    filterPredicate: (data: IPhoneCountry, searchQuery: string) => boolean;
    private _innerValue;
    set ngModel(value: NgcIPhoneValue);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     * @param {NgcIPhoneValue} value
     */
    writeValue(value: NgcIPhoneValue): void;
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
    onChanged(): void;
    /**
     * @return {void}
     */
    onTouched(): void;
    /**
     * @param {CountryCode} code
     * @param {string} dialCode
     * @return {void}
     */
    changeCountryCode(code: CountryCode, dialCode: string): void;
    /**
     * @param {string} phone
     * @param {CountryCode} countryCode
     * @return {string}
     */
    private _getNationalPhoneNumber;
    /**
     * @param {CountryCode} countryCode
     * @return {CountryCallingCode}
     */
    private _getDialCode;
    private _onTouchedCallback;
    private _onChangeCallback;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcPhoneFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcPhoneFieldComponent, "ngc-phone-field", never, { "name": "name"; "label": "label"; "placeholder": "placeholder"; "disabled": "disabled"; "readonly": "readonly"; "required": "required"; "autoFocusOn": "autoFocusOn"; "autoReset": "autoReset"; "autoFormatNational": "autoFormatNational"; "appearance": "appearance"; "errorDisplayMode": "errorDisplayMode"; "phoneFormControl": "phoneFormControl"; "ngModel": "ngModel"; }, { "ngModelChange": "ngModelChange"; "countryCodeChanged": "countryCodeChanged"; "cleared": "cleared"; "input": "input"; "focus": "focus"; "blur": "blur"; }, never, never, false>;
}
export {};
