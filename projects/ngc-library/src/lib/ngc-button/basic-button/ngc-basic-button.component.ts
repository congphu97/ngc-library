import {
	Component, Input, ElementRef,
	AfterViewInit, ViewEncapsulation, ContentChild,
	HostListener, ChangeDetectionStrategy, HostBinding
} from '@angular/core';

import { DefaultValue, CoerceBoolean, CoerceCssPixel } from '@core';
import { NgcButtonIconDirective } from '../button-icon/ngc-button-icon.directive';

export type NgcIBasicButtonAlignment = 'left' | 'right' | 'center';

@Component({
	selector		: 'button[ngcBasicButton]',
	templateUrl		: './ngc-basic-button.html',
	styleUrls		: [ './ngc-basic-button.scss' ],
	host			: { class: 'ngc-basic-button' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcBasicButtonComponent implements AfterViewInit {

	@HostBinding( 'attr.type' )
	get attrType(): string { return this.type; }

	@HostBinding( 'attr.disabled' )
	get attrDisabled(): boolean { return this.disabled || undefined; }

	@HostBinding( 'style.--basic-button-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--basic-button-icon-size' )
	get styleIconSize(): string { return this.iconSize; }

	@HostBinding( 'class.ngc-basic-button--has-icon' )
	get classHasIcon(): boolean { return !!this.buttonIcon || !!this.icon; }

	@HostBinding( 'class.ngc-basic-button--disabled' )
	get classDisabled(): boolean { return this.disabled; }

	@HostBinding( 'class.ngc-basic-button--left' )
	get classLeft(): boolean { return this.alignment === 'left'; }

	@HostBinding( 'class.ngc-basic-button--right' )
	get classRight(): boolean { return this.alignment === 'right'; }

	@HostBinding( 'class.ngc-basic-button--center' )
	get classCenter(): boolean { return this.alignment === 'center'; }

	@ContentChild( NgcButtonIconDirective ) public buttonIcon: NgcButtonIconDirective;

	@Input() @DefaultValue() public type: string = 'button';
@Input() public color: string;
	@Input() public icon: string;
	@Input() @DefaultValue() @CoerceCssPixel() public iconSize: string = '20px';
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @DefaultValue() public alignment: NgcIBasicButtonAlignment = 'left';

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	@HostListener( 'keydown.enter', [ '$event' ] )
	@HostListener( 'keydown.space', [ '$event' ] )
	public triggerKeyDownEnterAndSpace( event: KeyboardEvent ) {
		this._elementRef.nativeElement === document.activeElement && event.preventDefault();
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this.color && this._elementRef.nativeElement.classList.add( 'ngc-' + this.color );
	}

}
