import {
	Component, ViewEncapsulation, Input,
	ChangeDetectionStrategy, forwardRef, OnChanges,
	SimpleChanges, Output, EventEmitter
} from '@angular/core';
import {
	FormControl, Validators, ValidatorFn,
	ControlValueAccessor, NG_VALUE_ACCESSOR
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import _ from 'lodash';

import { REGEX } from '@resources';
import { CoerceBoolean, DefaultValue, CoerceNumber } from '@core';
import { NgcIFormFieldAppearance, NgcIFormFieldErrorDisplayMode } from '../ngc-form-field';

export const Ngc_RANGE_INPUT_VALIDATION: ValidatorFn = Validators.compose([
	Validators.maxLength( 255 ),
	Validators.pattern( REGEX.NUMBER ),
]);

@Component({
	selector		: 'ngc-range-input',
	templateUrl		: './ngc-range-input.html',
	styleUrls		: [ './ngc-range-input.scss' ],
	host			: { class: 'ngc-range-input' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide		: NG_VALUE_ACCESSOR,
		useExisting	: forwardRef( () => NgcRangeInputComponent ),
		multi		: true,
	}],
})
export class NgcRangeInputComponent implements ControlValueAccessor, OnChanges {

	@Input() public label: string;
	@Input() @DefaultValue() public placeholder: string = '0';
	@Input() @DefaultValue() public startRangeName: string = this._translateService.instant( 'Ngc.LABEL.START_RANGE' );
	@Input() @DefaultValue() public endRangeName: string = this._translateService.instant( 'Ngc.LABEL.END_RANGE' );
	@Input() @CoerceNumber() public min: number;
	@Input() @CoerceNumber() public max: number;
	@Input() @DefaultValue() @CoerceNumber() public step: number = 1;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public readonly: boolean;
	@Input() @CoerceBoolean() public required: boolean;
	@Input() @CoerceBoolean() public autoFocusOn: boolean;
	@Input() @DefaultValue() public appearance: NgcIFormFieldAppearance = 'default';
	@Input() @DefaultValue() public errorDisplayMode: NgcIFormFieldErrorDisplayMode = 'inline';
	@Input() @DefaultValue() public startRangeFormControl: FormControl = new FormControl( undefined, Ngc_RANGE_INPUT_VALIDATION );
	@Input() @DefaultValue() public endRangeFormControl: FormControl = new FormControl( undefined, Ngc_RANGE_INPUT_VALIDATION );

	@Output() public ngModelChange: EventEmitter<number[]> = new EventEmitter<number[]>();

	public startRange: number;
	public endRange: number;

	private _innerValue: number[];

	@Input()
	set ngModel( value: number[] ) {
		this.startRange = value && value[ 0 ];
		this.endRange = value && value[ 1 ];
	}

	get maxStartRange(): number {
		return !_.isNil( this.endRange ) ? this.endRange - 1 : undefined;
	}

	get minEndRange(): number {
		return !_.isNil( this.startRange ) ? this.startRange + 1 : undefined;
	}

	/**
	 * @constructor
	 * @param {TranslateService} _translateService
	 */
	constructor( private _translateService: TranslateService ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.required || !this.required ) return;

		this.startRangeFormControl.setValidators([
			this.required ? Validators.required : undefined,
			Ngc_RANGE_INPUT_VALIDATION,
		]);
		this.endRangeFormControl.setValidators([
			this.required ? Validators.required : undefined,
			Ngc_RANGE_INPUT_VALIDATION,
		]);
	}

	/**
	 * @constructor
	 * @param {number[]} value
	 */
	public writeValue( value: number[] ) {
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
	public onStartRangeChanged() {
		if ( !_.isFinite( this.startRange ) ) return;
		if ( _.isFinite( this.maxStartRange ) && this.startRange >= this.endRange ) this.startRange = this.maxStartRange;
		if ( _.isFinite( this.min ) && this.startRange < this.min ) this.startRange = this.min;
		if ( _.isFinite( this.max ) && this.startRange > this.max ) this.startRange = this.max;
		if ( this.startRange === this.endRange ) this.startRange = this.endRange - 1;

		this._innerValue = [ this.startRange, this.endRange ];

		this._onChangeCallback( this._innerValue );
	}

	/**
	 * @return {void}
	 */
	public onEndRangeChanged() {
		if ( !_.isFinite( this.endRange ) ) return;
		if ( _.isFinite( this.minEndRange ) && this.startRange >= this.endRange ) this.endRange = this.minEndRange;
		if ( _.isFinite( this.min ) && this.endRange < this.min ) this.endRange = this.min;
		if ( _.isFinite( this.max ) && this.endRange > this.max ) this.endRange = this.max;
		if ( this.startRange === this.endRange ) this.startRange = this.endRange - 1;

		this._innerValue = [ this.startRange, this.endRange ];

		this._onChangeCallback( this._innerValue );
	}

	/**
	 * @return {void}
	 */
	public onTouched() {
		this._onTouchedCallback();
	}

	private _onTouchedCallback: Function = () => {};
	private _onChangeCallback: Function = ( _v: number ) => {};

}
