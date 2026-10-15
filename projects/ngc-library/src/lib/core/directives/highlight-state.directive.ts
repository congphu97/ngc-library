import {
	Directive, ElementRef, Input,
	Output, EventEmitter, OnChanges,
	SimpleChanges
} from '@angular/core';
import _ from 'lodash';

import { DefaultValue, CoerceBoolean } from 'angular-core';

import { COLOR } from '@resources';

@Directive({ selector: '[highlightState]' })
export class HighlightStateDirective implements OnChanges {

	@Input() @DefaultValue() public highlightType: 'background' | 'border' = 'background';
	@Input() @DefaultValue() public highlightColor: string = COLOR.HIGHLIGHT;
	@Input() @CoerceBoolean() public highlightState: boolean;
	@Input() @CoerceBoolean() public highlightDisabled: boolean;
	@Input() @CoerceBoolean() public autoUnhighlight: boolean;
	@Input() @DefaultValue() public autoUnhighlightDelay: number = 3000;

	@Output() public highlightStateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	private _unsetHighlightDebounce: ReturnType<typeof _.debounce>
		= _.debounce( this.unsetHighlight.bind( this ), this.autoUnhighlightDelay );

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.highlightState ) return;

		this.highlightState ? this.setHighlight() : this.unsetHighlight();
	}

	/**
	 * @param {boolean=} isForceAutoUnhighlight
	 * @return {void}
	 */
	public setHighlight( isForceAutoUnhighlight: boolean = false ) {
		if ( !this.highlightState ) {
			this.highlightState = true;

			this.highlightStateChange.emit( this.highlightState );
		}

		if ( !this.highlightDisabled ) {
			// Add style
			this._addStyle();

			// Schedule to auto unhighlight
			( isForceAutoUnhighlight || this.autoUnhighlight ) && this._unsetHighlightDebounce();
		}
	}

	/**
	 * @return {void}
	 */
	public unsetHighlight() {
		if ( this.highlightState ) {
			this.highlightState = false;

			this.highlightStateChange.emit( this.highlightState );
		}

		if ( !this.highlightDisabled ) {
			// Remove style
			this._removeStyle();
		}
	}

	/**
	 * @return {void}
	 */
	private _addStyle() {
		switch ( this.highlightType ) {
			case 'background':
				this._elementRef.nativeElement.style.backgroundColor = this.highlightColor;
				break;
			case 'border':
				this._elementRef.nativeElement.style.border = `1px solid ${ this.highlightColor }`;
				break;
		}
	}

	/**
	 * @return {void}
	 */
	private _removeStyle() {
		switch ( this.highlightType ) {
			case 'background':
				this._elementRef.nativeElement.style.backgroundColor = null;
				break;
			case 'border':
				this._elementRef.nativeElement.style.border = null;
				break;
		}
	}

}
