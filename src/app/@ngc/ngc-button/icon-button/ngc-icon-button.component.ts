import {
	Component, Input, ViewEncapsulation,
	ElementRef, AfterViewInit, SimpleChanges,
	OnChanges, HostListener, ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';

import { ContrastPipe, DefaultValue, CoerceBoolean, CoerceCssPixel } from '@core';

@Component({
	selector		: 'button[ngcIconButton]',
	templateUrl		: './ngc-icon-button.html',
	styleUrls		: [ './ngc-icon-button.scss' ],
	host			: { class: 'ngc-icon-button' },
	providers		: [ ContrastPipe ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcIconButtonComponent implements AfterViewInit, OnChanges {

	@HostBinding( 'attr.type' )
	get attrType(): string { return this.type; }

	@HostBinding( 'attr.disabled' )
	get attrDisabled(): boolean { return this.disabled || undefined; }

	@HostBinding( 'style.--icon-button-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--icon-button-size' )
	get styleSize(): string { return this.size; }

	@HostBinding( 'style.--icon-button-icon-color' )
	get styleIconColor(): string { return this.iconColor; }

	@HostBinding( 'style.--icon-button-icon-size' )
	get styleIconSize(): string { return this.iconSize; }

	@HostBinding( 'style.--icon-button-border-color' )
	get styleBorderColor(): string { return this.borderColor; }

	@HostBinding( 'style.--icon-button-border-style' )
	get styleBorderStyle(): string { return this.borderStyle; }

	@HostBinding( 'style.--icon-button-border-width' )
	get styleBorderWidth(): string { return this.borderWidth; }

	@HostBinding( 'class.ngc-icon-button--disabled' )
	get classDisabled(): boolean { return this.disabled; }

	@HostBinding( 'class.ngc-icon-button--square' )
	get classSquare(): boolean { return this.square; }

	@Input() @DefaultValue() public type: string = 'button';
	@Input() public color: string;
	@Input() @CoerceCssPixel() public size: string;
	@Input() public icon: string;
	@Input() public iconColor: string;
	@Input() @CoerceCssPixel() public iconSize: string;
	@Input() public borderColor: string;
	@Input() public borderStyle: string;
	@Input() @CoerceCssPixel() public borderWidth: string;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public square: boolean;

	private _bkIconColor: string;

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 * @param {ContrastPipe} _contrastPipe
	 */
	constructor( private _elementRef: ElementRef, private _contrastPipe: ContrastPipe ) {}

	@HostListener( 'keydown.enter', [ '$event' ] )
	@HostListener( 'keydown.space', [ '$event' ] )
	public triggerKeyDownEnterAndSpace( event: KeyboardEvent ) {
		this._elementRef.nativeElement === document.activeElement && event.preventDefault();
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.iconColor ) this._bkIconColor = this.iconColor;
		if ( changes.color ) this.iconColor = this._bkIconColor || this._contrastPipe.transform( this.color );
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this.color && this._elementRef.nativeElement.classList.add( 'ngc-' + this.color );
	}

}
