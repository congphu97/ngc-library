import {
	Component, ElementRef, ViewEncapsulation,
	ViewChild, TemplateRef, ChangeDetectorRef,
	Input, ChangeDetectionStrategy, NgZone
} from '@angular/core';

import { DefaultValue, CoerceCssPixel, CoerceBoolean } from '@core';

export type NGCITooltipTheme = 'default' | 'light';
export type NGCITooltipPosition = 'above' | 'below' | 'before' | 'after';
export type NGCITooltipDirection = 'start' | 'end' | 'center';

@Component({
	selector		: 'ngc-tooltip',
	templateUrl		: './ngc-tooltip.html',
	styleUrls		: [ './ngc-tooltip.scss' ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcTooltipComponent {

	@ViewChild( TemplateRef, { static: true } ) public templateRef: TemplateRef<any>;

	@Input() public color: string;
	@Input() public backdropClass: string;
	@Input() @CoerceCssPixel() public width: string;
	@Input() @CoerceCssPixel() public minWidth: string;
	@Input() @CoerceCssPixel() public maxWidth: string;
	@Input() @CoerceCssPixel() public height: string;
	@Input() @CoerceCssPixel() public minHeight: string;
	@Input() @CoerceCssPixel() public maxHeight: string;
	@Input() @CoerceBoolean() public messageOnly: boolean;
	@Input() @DefaultValue() public theme: NGCITooltipTheme = 'default';

	public message: string;
	public close: ( event?: MouseEvent ) => void;
	public classList: IObject<boolean> = {};

	private _previousPanelClass: string;

	@Input( 'class' )
	set panelClass( classes: string ) {
		const previousPanelClass: string = this._previousPanelClass;

		previousPanelClass?.split( ' ' ).forEach( ( className: string ) => {
			this.classList[ className ] = false;
		} );

		this._previousPanelClass = classes;

		classes?.split( ' ' ).forEach( ( className: string ) => {
			this.classList[ className ] = true;
		} );

		this._elementRef.nativeElement.className = '';
	}

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 * @param {ChangeDetectorRef} _cdRef
	 * @param {NgZone} _ngZone
	 */
	constructor( private _elementRef: ElementRef, private _cdRef: ChangeDetectorRef, private _ngZone: NgZone ) {}

	/**
	 * @param {NGCITooltipPosition} position
	 * @param {NGCITooltipDirection} direction
	 * @return {void}
	 */
	public setPositionClasses( position: NGCITooltipPosition, direction?: NGCITooltipDirection ) {
		this._ngZone.runGuarded( () => {
			this.classList[ 'ngc-tooltip--above' ] = position === 'above';
			this.classList[ 'ngc-tooltip--below' ] = position === 'below';
			this.classList[ 'ngc-tooltip--before' ] = position === 'before';
			this.classList[ 'ngc-tooltip--after' ] = position === 'after';
			this.classList[ 'ngc-tooltip--dir-start' ] = direction === 'start';
			this.classList[ 'ngc-tooltip--dir-end' ] = direction === 'end';
			this.classList[ 'ngc-tooltip--message-only' ] = this.messageOnly;
			this.classList[ 'ngc-tooltip--light-theme' ] = this.theme === 'light';

			this.markForCheck();
		} );
	}

	/**
	 * @return {void}
	 */
	public reattach() {
		this._cdRef.reattach();
	}

	/**
	 * @return {void}
	 */
	public detach() {
		this._cdRef.detach();
	}

	/**
	 * @return {void}
	 */
	public markForCheck() {
		this._cdRef.markForCheck();
	}

	/**
	 * @return {void}
	 */
	public detectChanges() {
		this._cdRef.detectChanges();
	}

}
