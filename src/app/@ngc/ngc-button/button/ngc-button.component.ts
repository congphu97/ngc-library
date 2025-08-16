import {
	Component, Input, ElementRef,
	AfterViewInit, ViewEncapsulation, ContentChild,
	SimpleChanges, OnChanges, HostListener,
	ChangeDetectionStrategy, HostBinding
} from '@angular/core';

import { ContrastPipe, DefaultValue, CoerceBoolean, CoerceCssPixel } from '@core';
import { NgcButtonIconDirective } from '../button-icon/ngc-button-icon.directive';


export type ngcIButtonAlignment = 'left' | 'right' | 'center';

@Component({
	selector: 'button[ngcButton]',
	templateUrl: './ngc-button.component.html',
	styleUrls: ['./ngc-button.component.scss'],
	providers		: [ ContrastPipe ],
	host			: { class: 'ngc-button' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcButtonComponent implements AfterViewInit, OnChanges {

	@HostBinding( 'attr.type' )
	get attrType(): string { return this.type; }

	@HostBinding( 'attr.disabled' )
	get attrDisabled(): boolean { return this.disabled || undefined; }

	@HostBinding( 'style.--button-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--button-text-color' )
	get styleTextColor(): string { return this.textColor; }

	@HostBinding( 'style.--button-size' )
	get styleSize(): string { return this.size; }

	@HostBinding( 'style.--button-icon-size' )
	get styleIconSize(): string { return this.iconSize; }

	@HostBinding( 'style.--button-border-color' )
	get styleBorderColor(): string { return this.borderColor; }

	@HostBinding( 'style.--button-border-style' )
	get styleBorderStyle(): string { return this.borderStyle; }

	@HostBinding( 'style.--button-border-width' )
	get styleWidth(): string { return this.borderWidth; }

	@HostBinding( 'class.ngc-button--has-icon' )
	get classHasIcon(): boolean { return !!this.buttonIcon || !!this.icon; }

	@HostBinding( 'class.ngc-button--disabled' )
	get classDisabled(): boolean { return this.disabled; }

	@HostBinding( 'class.ngc-button--loading' )
	get classLoading(): boolean { return this.loading; }

	@HostBinding( 'class.ngc-button--left' )
	get classLeft(): boolean { return this.alignment === 'left'; }

	@HostBinding( 'class.ngc-button--right' )
	get classRight(): boolean { return this.alignment === 'right'; }

	@HostBinding( 'class.ngc-button--center' )
	get classCenter(): boolean { return this.alignment === 'center'; }

	@ContentChild( NgcButtonIconDirective ) public buttonIcon: NgcButtonIconDirective;

	@Input() @DefaultValue() public type: string = 'button';
	@Input() public color: string;
	@Input() public textColor: string;
	@Input() @CoerceCssPixel() public size: string;
	@Input() public icon: string;
	@Input() @DefaultValue() @CoerceCssPixel() public iconSize: string = '20px';
	@Input() public borderColor: string;
	@Input() public borderStyle: string;
	@Input() @CoerceCssPixel() public borderWidth: string;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public loading: boolean;
	@Input() @DefaultValue() public alignment: ngcIButtonAlignment = 'center';

	private _bkTextColor: string;

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
		if ( changes.textColor ) this._bkTextColor = this.textColor;
		if ( changes.color ) this.textColor = this._bkTextColor || this._contrastPipe.transform( this.color );
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this.color && this._elementRef.nativeElement.classList.add( 'ngc-' + this.color );
	}

}