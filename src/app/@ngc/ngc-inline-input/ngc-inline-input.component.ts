import {
	Component, Input, Output,
	EventEmitter, OnChanges, SimpleChanges,
	HostListener, ViewEncapsulation, ChangeDetectorRef,
	ChangeDetectionStrategy
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import _ from 'lodash';

import { DefaultValue, CoerceBoolean } from '@core';

@Component({
	selector		: 'ngc-inline-input, [ngcInlineInput]',
	templateUrl		: './ngc-inline-input.html',
	styleUrls		: [ './ngc-inline-input.scss' ],
	host			: { class: 'ngc-inline-input' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcInlineInputComponent implements OnChanges {

	@Input() public name: string;
	@Input() public placeholder: string;
	@Input() public ngModel: string;
	@Input() public editing: boolean;
	@Input() @CoerceBoolean() public validate: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public trim: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public autoSave: boolean = true;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @DefaultValue() public formControl: FormControl = new FormControl(
		undefined,
		[ Validators.required, Validators.maxLength( 255 ) ]
	);

	@Output() public ngModelChange: EventEmitter<string> = new EventEmitter<string>();
	@Output() public editingChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() public saved: EventEmitter<string> = new EventEmitter<string>();
	@Output() public cancelled: EventEmitter<string> = new EventEmitter<string>();

	public value: string;

	private _bkValue: string;

	@Input( 'ngcInlineInput' )
	set ngcInlineInput( value: boolean ) {
		value && this.edit();
	}

	/**
	 * @constructor
	 * @param {ChangeDetectorRef} _cdRef
	 */
	constructor( private _cdRef: ChangeDetectorRef ) {}

	@HostListener( 'click', [ '$event' ] )
	public triggerClick( event: MouseEvent ) {
		if ( !this.editing ) return;

		event.stopPropagation();
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.editing ) return;

		this.value = this._bkValue = this.trim ? _.trim( this.ngModel ) : this.ngModel;
	}

	/**
	 * @return {void}
	 */
	public onAutoSave() {
		this.autoSave && this.onSave();
	}

	/**
	 * @return {void}
	 */
	public onSave() {
		this.value = this.trim ? _.trim( this.value ) : this.value;

		this.formControl.updateValueAndValidity();
		setTimeout( () => this.formControl.valid ? this._save() : this._cancel() );
	}

	/**
	 * @return {void}
	 */
	public onCancel() {
		this._cancel();
	}

	/**
	 * @return {void}
	 */
	public edit() {
		this.editing = true;
		this.value = this._bkValue = this.trim ? _.trim( this.ngModel ) : this.ngModel;

		this.editingChange.emit( this.editing );
		this._cdRef.markForCheck();
	}

	/**
	 * @return {void}
	 */
	private _save() {
		if ( !this.editing ) return;

		const value: string = this.trim ? _.trim( this.value ) : this.value;
		const bkValue: string = this.trim ? _.trim( this._bkValue ) : this._bkValue;

		this.editing = !!this.validate;

		if ( value !== bkValue ) {
			this.ngModel = this._bkValue = value;

			this.ngModelChange.emit( value );
			this.saved.emit( value );
		}

		this.editingChange.emit( this.editing );
		this._cdRef.markForCheck();
	}

	/**
	 * @return {void}
	 */
	private _cancel() {
		if ( !this.editing ) return;

		const value: string = this.trim ? _.trim( this.value ) : this.value;
		const bkValue: string = this.trim ? _.trim( this._bkValue ) : this._bkValue;

		this.editing = false;

		if ( value !== bkValue ) {
			this.value = this._bkValue = bkValue;

			this.ngModelChange.emit( bkValue );
		}

		this.cancelled.emit( bkValue );
		this.editingChange.emit( this.editing );
		this._cdRef.markForCheck();
	}

}
