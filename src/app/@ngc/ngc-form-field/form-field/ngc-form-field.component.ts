import {
	Component, ContentChild, Input,
	ViewEncapsulation, Output, EventEmitter,
	AfterContentInit, OnChanges, SimpleChanges,
	ChangeDetectionStrategy, HostBinding, ChangeDetectorRef
} from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { merge, Observable } from 'rxjs';
import { takeWhile, distinctUntilChanged } from 'rxjs/operators';
import _ from 'lodash';

import { DefaultValue, CoerceBoolean, Unsubscriber, untilCmpDestroyed } from '@core';
import { COLOR } from '@resources';
import { NgcFormFieldInputDirective } from '../form-field-input/ngc-form-field-input.directive';
import { NgcFormFieldErrorDirective } from '../form-field-error/ngc-form-field-error.directive';

export type NgcIFormFieldAppearance = 'default' | 'standard' | 'legacy';
export type NgcIFormFieldErrorDisplayMode = 'default' | 'inline';

@Unsubscriber()
@Component({
	selector		: 'ngc-form-field',
	templateUrl		: './ngc-form-field.html',
	styleUrls		: [ './ngc-form-field.scss' ],
	host			: { class: 'ngc-form-field' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcFormFieldComponent implements AfterContentInit, OnChanges {

	@HostBinding( 'style.--input-text-alignment' )
	get styleInputTextAlign(): string { return this.formFieldInput?.alignment; }

	@HostBinding( 'style.--input-text-size' )
	get styleInputTextSize(): string { return this.formFieldInput?.textSize; }

	@HostBinding( 'class.ngc-form-field--custom-error' )
	get classCustomError(): boolean { return !!this.formFieldError; }

	@HostBinding( 'class.ngc-form-field--valid' )
	get classValid(): boolean { return this.control?.valid && !this.formFieldError; }

	@HostBinding( 'class.ngc-form-field--invalid' )
	get classInvalid(): boolean { return this.control?.invalid || !!this.formFieldError; }

	@HostBinding( 'class.ngc-form-field--dirty' )
	get classDirty(): boolean { return this.control?.dirty; }

	@HostBinding( 'class.ngc-form-field--pristine' )
	get classPristine(): boolean { return this.control?.pristine; }

	@HostBinding( 'class.ngc-form-field--touched' )
	get classTouched(): boolean { return this.control?.touched; }

	@HostBinding( 'class.ngc-form-field--untouched' )
	get classUntouched(): boolean { return this.control?.untouched; }

	@HostBinding( 'class.ngc-form-field--enabled' )
	get classEnabled(): boolean { return this.control?.enabled; }

	@HostBinding( 'class.ngc-form-field--disabled' )
	get classDisabled(): boolean { return this.disabled || this.control?.disabled || this.formFieldInput?.disabled; }

	@HostBinding( 'class.ngc-form-field--readonly' )
	get classReadonly(): boolean { return this.readonly || this.formFieldInput?.readonly; }

	@HostBinding( 'class.ngc-form-field--focusing' )
	get classFocusing(): boolean { return this.focusing || this.formFieldInput?.focusing; }

	@HostBinding( 'class.ngc-form-field--textarea' )
	get classTextarea(): boolean { return this.formFieldInput?.isTextarea; }

	@HostBinding( 'class.ngc-form-field--empty' )
	get classEmpty(): boolean { return !this.formFieldInput?.hasValue; }

	@HostBinding( 'class.ngc-form-field--standard' )
	get classStandard(): boolean { return this.appearance === 'standard'; }

	@HostBinding( 'class.ngc-form-field--legacy' )
	get classLegacy(): boolean { return this.appearance === 'legacy'; }

	@ContentChild( FormControlDirective ) public control: FormControlDirective;
	@ContentChild( NgcFormFieldInputDirective ) public formFieldInput: NgcFormFieldInputDirective;
	@ContentChild( NgcFormFieldErrorDirective ) public formFieldError: NgcFormFieldErrorDirective;

	@Input() public label: string;
	@Input() public dotColor: string;
	@Input() @CoerceBoolean() public required: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public readonly: boolean;
	@Input() @CoerceBoolean() public focusing: boolean;
	@Input() @CoerceBoolean() public fakeInput: boolean;
	@Input() @CoerceBoolean() public multiErrors: boolean;
	@Input() @CoerceBoolean() public displayColorDot: boolean;
	@Input() @CoerceBoolean() public togglePasswordVisibility: boolean;
	@Input() @CoerceBoolean() public checkWeekPassword: boolean;
	@Input() @DefaultValue() public appearance: NgcIFormFieldAppearance = 'default';
	@Input() @DefaultValue() public errorDisplayMode: NgcIFormFieldErrorDisplayMode = 'default';

	@Output() public dotColorChange: EventEmitter<string> = new EventEmitter<string>();

	public unhidePassword: boolean;
	public passwordHighlight: IObject<{ color: string; message: string }> = {
		25: {
			color	: COLOR.DANGER,
			message	: this._translateService.instant( 'NGC.MESSAGE.PASSWORD_WEEK' ),
		},
		50: {
			color	: COLOR.WARNING,
			message	: this._translateService.instant( 'NGC.MESSAGE.PASSWORD_MEDIUM' ),
		},
		75: {
			color	: COLOR.WARNING,
			message	: this._translateService.instant( 'NGC.MESSAGE.PASSWORD_MEDIUM' ),
		},
		100: {
			color	: COLOR.SUCCESS,
			message	: this._translateService.instant( 'NGC.MESSAGE.PASSWORD_STRONG' ),
		},
	};
	public passwordRule: {
		minlength: boolean;
		numberOrSymbol: boolean;
		uppercase: boolean;
		lowercase: boolean;
		percent: number;
	} = {
			minlength		: false,
			numberOrSymbol	: false,
			uppercase		: false,
			lowercase		: false,
			percent			: 0,
		};

	get canAction(): boolean {
		return this.formFieldInput?.type !== 'range'
			&& !this.formFieldInput?.isTextarea
			&& !this.formFieldInput?.readonly
			&& !this.formFieldInput?.disabled
			&& !this.formFieldInput?.disableControl;
	}

	get canClear(): boolean {
		return this.formFieldInput?.clearable && this.canAction && this.formFieldInput?.hasValue;
	}

	get canSave(): boolean {
		return this.formFieldInput?.saveable && this.canAction && this.formFieldInput?.hasValue;
	}

	get canCancel(): boolean {
		return this.formFieldInput?.cancelable && this.canAction;
	}

	get canCheckWeekPassword(): boolean {
		return this.checkWeekPassword && this.formFieldInput?.hasValue;
	}

	get fieldName(): string {
		return this.formFieldInput?.name || this.label;
	}

	/**
	 * @constructor
	 * @param {ChangeDetectorRef} _cdRef
	 * @param {TranslateService} _translateService
	 */
	constructor( private _cdRef: ChangeDetectorRef, private _translateService: TranslateService ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.disabled || !this.formFieldInput ) return;

		this.formFieldInput.isDisabledFromFormField = this.disabled;
	}

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		const obs: Observable<any>[] = [];

		if ( this.formFieldInput ) {
			obs.push( this.formFieldInput.changes$, this.formFieldInput.focus$ );

			this.formFieldInput.isDisabledFromFormField = this.disabled;

			this.formFieldInput
			.changes$
			.pipe(
				takeWhile( () => this.checkWeekPassword ),
				distinctUntilChanged(),
				untilCmpDestroyed( this )
			)
			.subscribe( ( password: string ) => {
				const minlength: boolean = password?.length >= 8;
				const numberOrSymbol: boolean = /[0-9$-/:-?{-~!"^_`\[\]]/g.test( password );
				const uppercase: boolean = /[A-Z]+/g.test( password );
				const lowercase: boolean = /[a-z]+/g.test( password );
				const percent: number = _.chain([ minlength, numberOrSymbol, uppercase, lowercase ])
				.groupBy()
				.get( 'true' )
				.value()
				?.length * 25;

				this.passwordRule = {
					minlength, numberOrSymbol, uppercase,
					lowercase, percent,
				};

				this._cdRef.markForCheck();
			} );
		}

		if ( this.control ) obs.push( this.control.statusChanges, this.control.valueChanges );

		merge( ...obs )
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( () => this._cdRef.markForCheck() );
	}

	/**
	 * @return {void}
	 */
	public togglePassword() {
		this.unhidePassword = !this.unhidePassword;

		this.formFieldInput.type = this.unhidePassword ? 'text' : 'password';
	}

}
