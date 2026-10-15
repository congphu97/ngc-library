import {
	Component, ViewEncapsulation, Input,
	ChangeDetectionStrategy, forwardRef, OnChanges,
	SimpleChanges, Output, EventEmitter,
	ViewChild, HostBinding
} from '@angular/core';
import {
	FormControl, Validators, ValidatorFn,
	ControlValueAccessor, NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
	isSupportedCountry, PhoneNumber, CountryCode,
	parsePhoneNumberFromString, CountryCallingCode
} from 'libphonenumber-js';
import _ from 'lodash';

import { DefaultValue, CoerceBoolean, Memoize } from '@core';

import { PHONE_COUNTRIES, REGEX } from '@resources';

import { NgcIFormFieldAppearance, NgcIFormFieldErrorDisplayMode } from '../ngc-form-field';
import { NgcSearchBoxComponent } from '../ngc-search-box';

interface IPhoneCountry {
	name: string;
	code: CountryCode;
	dialCode: CountryCallingCode;
}

function filterPhoneCountry( { name, code, dialCode }: IPhoneCountry, searchQuery: string ): boolean {
	return _.search( name, searchQuery )
		|| _.search( code, searchQuery )
		|| _.search( dialCode, searchQuery );
}

export interface NgcIPhoneValue {
	phone: string;
	countryCode: CountryCode;
}

export const Ngc_PHONE_FIELD_VALIDATION: ValidatorFn = Validators.compose([
	Validators.maxLength( 255 ),
	Validators.pattern( REGEX.PHONE ),
]);

@Component({
	selector		: 'ngc-phone-field',
	templateUrl		: './ngc-phone-field.html',
	styleUrls		: [ './ngc-phone-field.scss' ],
	host			: { class: 'ngc-phone-field' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide		: NG_VALUE_ACCESSOR,
		useExisting	: forwardRef( () => NgcPhoneFieldComponent ),
		multi		: true,
	}],
})
export class NgcPhoneFieldComponent implements ControlValueAccessor, OnChanges {

	@HostBinding( 'class.ngc-phone-field--disabled' )
	get classDisabled(): boolean { return this.disabled; }

	@ViewChild( NgcSearchBoxComponent ) public searchBox: NgcSearchBoxComponent;

	@Input() public name: string;
	@Input() public label: string;
	@Input() public placeholder: string;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public readonly: boolean;
	@Input() @CoerceBoolean() public required: boolean;
	@Input() @CoerceBoolean() public autoFocusOn: boolean;
	@Input() @CoerceBoolean() public autoReset: boolean;
	@Input() @CoerceBoolean() public autoFormatNational: boolean;
	@Input() @DefaultValue() public appearance: NgcIFormFieldAppearance = 'default';
	@Input() @DefaultValue() public errorDisplayMode: NgcIFormFieldErrorDisplayMode = 'default';
	@Input() @DefaultValue() public phoneFormControl: FormControl = new FormControl( undefined, Ngc_PHONE_FIELD_VALIDATION );

	@Output() public ngModelChange: EventEmitter<NgcIPhoneValue> = new EventEmitter<NgcIPhoneValue>();
	@Output() public countryCodeChanged: EventEmitter<CountryCode> = new EventEmitter<CountryCode>();
	@Output() public cleared: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public input: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public focus: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public blur: EventEmitter<Event> = new EventEmitter<Event>();

	public phone: string;
	public countryCode: CountryCode = 'VN';
	public countryDialCode: any = '+84';
	public PHONE_COUNTRIES: typeof PHONE_COUNTRIES = PHONE_COUNTRIES;
	public filteredPhoneCountries: typeof PHONE_COUNTRIES;
	public filterPredicate: ( data: IPhoneCountry, searchQuery: string ) => boolean = filterPhoneCountry;

	private _innerValue: NgcIPhoneValue;

	@Input()
	set ngModel( value: NgcIPhoneValue ) {
		this.phone = value?.phone;
		this.countryCode = value?.countryCode || this.countryCode;
		this.countryDialCode = this._getDialCode( this.countryCode );
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.required || !this.required ) return;

		this.phoneFormControl.setValidators([
			this.required ? Validators.required : undefined,
			Ngc_PHONE_FIELD_VALIDATION,
		]);
	}

	/**
	 * @constructor
	 * @param {NgcIPhoneValue} value
	 */
	public writeValue( value: NgcIPhoneValue ) {
		if ( value === this._innerValue ) return;

		this._innerValue = value;
	}

	/**
	 * @constructor
	 * @param {Function} fn
	 */
	public registerOnChange( fn: Function ) {
		this._onChangeCallback = fn;
	}

	/**
	 * @constructor
	 * @param {Function} fn
	 */
	public registerOnTouched( fn: Function ) {
		this._onTouchedCallback = fn;
	}

	/**
	 * @return {void}
	 */
	public onChanged() {
		if ( this.phone ) {
			this.phone = this.autoFormatNational
				? this._getNationalPhoneNumber( this.phone, this.countryCode )
				: this.phone;

			const value: NgcIPhoneValue = { phone: this.phone, countryCode: this.countryCode };

			if ( _.isEqual( this._innerValue, value ) ) return;

			this._innerValue = value;
		} else {
			this._innerValue = null;
		}

		this._onChangeCallback( this._innerValue );
	}

	/**
	 * @return {void}
	 */
	public onTouched() {
		this._onTouchedCallback();
	}

	/**
	 * @param {CountryCode} code
	 * @param {string} dialCode
	 * @return {void}
	 */
	public changeCountryCode( code: CountryCode, dialCode: string ) {
		this.countryCode = code;
		this.countryDialCode = dialCode;

		this.onChanged();
		this.countryCodeChanged.emit( this.countryCode );
	}

	/**
	 * @param {string} phone
	 * @param {CountryCode} countryCode
	 * @return {string}
	 */
	@Memoize()
	private _getNationalPhoneNumber( phone: string, countryCode: CountryCode ): string {
		if ( !phone || !isSupportedCountry( countryCode ) ) return phone;

		const phoneNumber: PhoneNumber = parsePhoneNumberFromString( phone, countryCode );

		return phoneNumber?.formatNational() || phone;
	}

	/**
	 * @param {CountryCode} countryCode
	 * @return {CountryCallingCode}
	 */
	@Memoize()
	private _getDialCode( countryCode: CountryCode ): CountryCallingCode {
		return _.find( PHONE_COUNTRIES, { code: countryCode } )?.dialCode;
	}

	private _onTouchedCallback: Function = () => {};
	private _onChangeCallback: Function = ( _v: NgcIPhoneValue ) => {};

}
