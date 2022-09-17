import { Component, Input, ChangeDetectorRef, NgZone, ElementRef } from '@angular/core';

export type NGCITooltipPosition = 'above' | 'below' | 'before' | 'after';
export type NGCITooltipDirection = 'start' | 'end' | 'center';
@Component({
	selector: 'ngc-tooltip',
	templateUrl: './ngc-tooltip.component.html',
	styleUrls: ['./ngc-tooltip.component.scss']
})
export class NgcTooltipComponent {

  	@Input() public color: string;
	@Input() public width: string;
	@Input() public minWidth: string;
	@Input() public maxWidth: string;
	@Input() public height: string;
	@Input() public minHeight: string;
	@Input() public maxHeight: string;
	@Input() public messageOnly: boolean;

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

	public message: string;
	public classList: any = {};

	private _previousPanelClass: string;

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
			// this.classList[ 'ngc-tooltip--light-theme' ] = this.theme === 'light';

			this._cdRef.markForCheck();
		} );
	}

}
