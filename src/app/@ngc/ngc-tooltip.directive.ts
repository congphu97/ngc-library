import { Directive, ElementRef, HostListener, Input, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import {
	Overlay, OverlayRef, HorizontalConnectionPos,
	VerticalConnectionPos, OverlayConfig, FlexibleConnectedPositionStrategy,
	ConnectedOverlayPositionChange, GlobalPositionStrategy
} from '@angular/cdk/overlay';
import { NgcTooltipComponent } from './ngc-tooltip/ngc-tooltip.component';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

const overlayRefs: OverlayRef[] = [];

@Directive({
  selector: '[ngcTooltip]', exportAs: '[ngcTooltip]'
})
export class NgcTooltipDirective {

	private _tooltip: any;
	private _overlayRef: OverlayRef;
 	private _portal: any;
	private _instance: NgcTooltipComponent;

	private isOpened: boolean;

  constructor( private elementRef: ElementRef, private _overlay: Overlay,  private _vcRef: ViewContainerRef, private _cdRef: ChangeDetectorRef ) {}

	@Input( 'ngcTooltip' )
	public get tooltip(): any { return this._tooltip; }
	public set tooltip( tooltip: any ) {
    console.log({tooltip})
		if ( tooltip === this._tooltip ) return;

		this._tooltip = tooltip;
	}

  	// tslint:disable-next-line:jsdoc-require
	@HostListener( 'click', [ '$event' ] )
	public triggerMouseClick( event: MouseEvent ) {
		if( this.isOpened ) return;

  		this._open();
  	}

	@HostListener( 'mouseover', [ '$event' ] )
	public triggerMouseEnter( event: MouseEvent ) {
		console.log({event})
		if( this.isOpened ) return;

		this._open();
	}

	@HostListener( 'mouseleave', [ '$event' ] )
		public triggerMouseOut( event: MouseEvent ) {
			console.log({event})
			this._close();
	}

	private _open() {
		setTimeout( () => {
			this._overlayRef = this._overlayRef || this._createOverlayRef();

			// Push overlay ref to global
			overlayRefs.push( this._overlayRef );

			if ( this._overlayRef?.hasAttached() ) return;

			this.isOpened = true;

			if (  this.tooltip ) {
			this._portal = this._portal || new ComponentPortal( NgcTooltipComponent, this._vcRef );
			this._instance = this._overlayRef.attach( this._portal ).instance;

			this._setTooltipMessage();
			}
		}, 300 )
	}

	private _close() {
		setTimeout( () => {
			this.isOpened = false;
			this._overlayRef?.detach();
			this._cdRef.markForCheck();
		}, 300 );
	}

	private _createOverlayRef() {
		const config: OverlayConfig = new OverlayConfig({
			height: '400px',
			width: '600px',
			scrollStrategy	: this._overlay.scrollStrategies.reposition({ autoClose: true, scrollThrottle: 1000 }),
		});

		const overlayRef: OverlayRef = this._overlay.create( config );

		overlayRef.setDirection( 'ltr' );

		return overlayRef;

	}

	/**
	 * @return {void}
	 */
	private _setTooltipMessage() {
		if ( !this._instance ) return;

		this._instance.messageOnly = false;

		if ( this.tooltip) {
			this._instance.message = this.tooltip.toString();
			this._instance.messageOnly = true;
		}
	}
}
