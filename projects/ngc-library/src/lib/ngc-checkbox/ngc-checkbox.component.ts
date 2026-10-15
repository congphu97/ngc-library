import { Component, Input, OnInit, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'ngc-checkbox',
	templateUrl: './ngc-checkbox.html',
	styleUrls: ['./ngc-checkbox.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => NgcCheckboxComponent),
			multi: true
		}
	],
	host: {
		'[style.--checkbox-color]'       : 'color',
		'[style.--checkbox-label-color]' : 'labelColor',
		class: 'ngc-checkbox',
	}
})
export class NgcCheckboxComponent implements OnInit, ControlValueAccessor {

	@Input() public label: string;
	@Input() public color: string;
	@Input() public labelColor: string;
	@Input() public ngModel: boolean;
	@Input() public disabled: boolean;
	@Input() public readonly: boolean;
	@Input() public indeterminate: boolean;

	@HostBinding( 'class.ngc-checkbox--checked' )
	get isChecked(): boolean { return !!this.ngModel; }

	@HostBinding( 'class.ngc-checkbox--indeterminate' )
	get isIndeterminate(): boolean { return !!this.indeterminate; }

	@HostBinding( 'class.ngc-checkbox--disabled' )
	get isDisabled(): boolean { return !!this.disabled; }

	@HostBinding( 'class.ngc-checkbox--readonly' )
	get isReadonly(): boolean { return !!this.readonly; }

	@Output() public ngModelChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(public cdr: ChangeDetectorRef) { }

	@HostListener( 'click', [ '$event' ] )
	public triggerClick( event: MouseEvent ) {
		if ( this.disabled || this.readonly ) return;
		event.stopPropagation();
		this.toggle();
	}

	@HostListener( 'keydown.space', [ '$event' ] )
	public triggerKeyDownSpace( event: KeyboardEvent ) {
		if ( this.disabled || this.readonly ) return;
		event.stopPropagation();
		this.toggle();
	}

	ngOnInit(): void {}

	private onChange: (value: boolean) => void = () => {};
	private onTouched: () => void = () => {};

	public writeValue(value: boolean): void {
		this.ngModel = value;
		this.cdr.markForCheck();
	}

	public registerOnChange(fn: (value: boolean) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
		this.cdr.markForCheck();
	}

	public toggle() {
		this.ngModel = !this.ngModel;
		this.ngModelChange.emit( this.ngModel );
		this.onChange( this.ngModel );
		this.onTouched();
		this.cdr.markForCheck();
	}
}
