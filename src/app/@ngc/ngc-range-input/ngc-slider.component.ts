import {
	Component, ViewEncapsulation, Input,
	ElementRef, AfterViewInit, forwardRef,
	Output, EventEmitter, OnChanges,
	SimpleChanges, HostListener, ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import _ from 'lodash';

import { DefaultValue, CoerceBoolean, CoerceNumber } from '@core';

@Component({
	selector		: 'ngc-slider',
	templateUrl		: './ngc-slider.html',
	styleUrls		: [ './ngc-slider.scss' ],
	host			: { class: 'ngc-slider' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide		: NG_VALUE_ACCESSOR,
		useExisting	: forwardRef( () => NgcSliderComponent ),
		multi		: true,
	}],
})
export class NgcSliderComponent implements OnChanges, AfterViewInit, ControlValueAccessor {
	
	@HostBinding( 'style.--slider-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--slider-bar-color' )
	get styleBarColor(): string { return this.barColor; }

	@HostBinding( 'style.--slider-value' )
	get styleValue(): string { return this.percent + '%'; }

	@HostBinding( 'class.ngc-slider--disabled' )
	get classDisabled(): boolean { return this.disabled || this.disableControl; }

	@HostBinding( 'class.ngc-slider--readonly' )
	get classReadonly(): boolean { return this.readonly; }

	@Input() public color: string;
	@Input() public barColor: string;
	@Input() @DefaultValue() @CoerceNumber() public ngModel: number = 0;
	@Input() @DefaultValue() @CoerceNumber() public min: number = 0;
	@Input() @DefaultValue() @CoerceNumber() public max: number = 100;
	@Input() @DefaultValue() @CoerceNumber() public step: number = 1;
	@Input() @DefaultValue() @CoerceNumber() public tabindex: number = 0;
	@Input() public disableControl: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public readonly: boolean;

	@Output() public ngModelChange: EventEmitter<number> = new EventEmitter<number>();
	@Output() public changed: EventEmitter<number> = new EventEmitter<number>();
	@Output() public focus: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public blur: EventEmitter<Event> = new EventEmitter<Event>();

	private _innerValue: number;

	get range(): number { return this.max - this.min; }

	get percent(): number { return Math.ceil( ( ( this.ngModel || 0 ) - this.min ) * 100 ) / this.range; }

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	@HostListener( 'mouseup', [ '$event' ] )
	public triggerMouseUp( event: MouseEvent ) {
		if ( this.readonly || this.disabled || this.disableControl ) return;

		let newValue: number = this.min
			+ Math.round( _.toPercent( event.offsetX / this._elementRef.nativeElement.clientWidth, this.range ) );

		if ( newValue < this.min ) newValue = this.min;
		if ( newValue > this.max ) newValue = this.max;

		this.onChanged( newValue );
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( ( changes.min || changes.ngModel )
			&& ( _.isNil( this.ngModel ) || _.isNaN( this.ngModel ) || this.ngModel < this.min ) ) {
			this.ngModel = this.min || 0;
		}

		if ( ( changes.max || changes.ngModel ) && this.ngModel > this.max ) {
			this.ngModel = this.max || 0;
		}
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this.color && this._elementRef.nativeElement.classList.add( 'ngc-' + this.color );
	}

	/**
	 * @constructor
	 * @param {number} value
	 */
	public writeValue( value: number ) {
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
	 * @param {Event} event
	 * @return {void}
	 */
	public onFocus( event: Event ) {
		this._onTouchedCallback();
		this.focus.emit( event );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public onBlur( event: Event ) {
		this.blur.emit( event );
	}

	/**
	 * @param {number} value
	 * @return {void}
	 */
	public onChanged( value: number ) {
		if ( this._innerValue === value ) return;

		this._innerValue = value;

		this._onChangeCallback( this._innerValue );
		this.changed.emit( this._innerValue );
	}

	private _onTouchedCallback: Function = () => {};
	private _onChangeCallback: Function = ( _v: number ) => {};

}
