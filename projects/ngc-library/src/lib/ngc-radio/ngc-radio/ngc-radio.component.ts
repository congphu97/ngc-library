import {
	Component, Input, Output,
	EventEmitter, ViewEncapsulation, ElementRef,
	AfterViewInit, HostListener, ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';

import { DefaultValue, CoerceBoolean, CoerceCssPixel, CoerceNumber } from '@core';

@Component({
	selector		: 'ngc-radio',
	templateUrl		: './ngc-radio.html',
	styleUrls		: [ './ngc-radio.scss' ],
	host			: { class: 'ngc-radio' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcRadioComponent implements AfterViewInit {

	@HostBinding( 'style.--radio-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--radio-bg-color' )
	get styleBgColor(): string { return this.bgColor; }

	@HostBinding( 'style.--radio-label-color' )
	get styleLabelColor(): string { return this.labelColor; }

	@HostBinding( 'style.--radio-size' )
	get styleSize(): string { return this.size; }

	@HostBinding( 'class.ngc-radio--checked' )
	get classChecked(): boolean { return this.checked; }

	@HostBinding( 'class.ngc-radio--disabled' )
	get classDisabled(): boolean { return this.disabled; }

	@HostBinding( 'class.ngc-radio--readonly' )
	get classReadonly(): boolean { return this.readonly; }

	@HostBinding( 'attr.tabindex' )
	get attrTabindex(): number { return this.tabindex; }

	@Input() public value: any;
	@Input() public label: string;
	@Input() public color: string;
	@Input() public bgColor: string;
	@Input() public labelColor: string;
	@Input() @CoerceCssPixel() public size: string;
	@Input() @DefaultValue() @CoerceNumber() public tabindex: number = 0;
	@Input() @CoerceBoolean() public checked: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public readonly: boolean;

	@Output() public checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

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

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this.color && this._elementRef.nativeElement.classList.add( 'ngc-' + this.color );
	}

	/**
	 * @return {void}
	 */
	public toggle() {
		this.checked = !this.checked;

		this.checkedChange.emit( this.checked );
	}

}
