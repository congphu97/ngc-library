import { Directive, ElementRef, HostListener, Input, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import {
	Overlay, OverlayRef, HorizontalConnectionPos,
	VerticalConnectionPos, OverlayConfig, FlexibleConnectedPositionStrategy,
	ConnectedOverlayPositionChange, GlobalPositionStrategy, PositionStrategy
} from '@angular/cdk/overlay';
import { NGCITooltipDirection, NGCITooltipPosition, NgcTooltipComponent } from './ngc-tooltip/ngc-tooltip.component';
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
	@Input() public position: NGCITooltipPosition = 'above';

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
		console.log(1, {event})
		if( this.isOpened ) return;

		this._open();
	}

	@HostListener( 'mouseleave', [ '$event' ] )
		public triggerMouseOut( event: MouseEvent ) {
			console.log(2 ,{event})
			this._close();
	}

	private _open() {
		setTimeout( () => {
		}, 300 )
		this._overlayRef = this._overlayRef || this._createOverlayRef();

		// Push overlay ref to global
		overlayRefs.push( this._overlayRef );

		if ( this._overlayRef?.hasAttached() ) return;

		this.isOpened = true;

		console.log( this.tooltip )

		if (  this.tooltip ) {
			this._portal = this._portal || new ComponentPortal( NgcTooltipComponent, this._vcRef );
			this._instance = this._overlayRef.attach( this._portal ).instance;

			this._instance.messageOnly = true;
			this._instance.message = this.tooltip;
		}
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
			// positionStrategy: this._createPositionStrategy(),
			height: '400px',
			width: '600px',
			scrollStrategy	: this._overlay.scrollStrategies.reposition({ autoClose: true, scrollThrottle: 1000 }),
		});

		const overlayRef: OverlayRef = this._overlay.create( config );

		overlayRef.setDirection( 'ltr' );
		console.log( overlayRef)
		if ( this.position ) {
			( overlayRef.getConfig().positionStrategy as FlexibleConnectedPositionStrategy )
			.positionChanges
			// .pipe( untilCmpDestroyed( this ) )
			.subscribe( ( change: ConnectedOverlayPositionChange ) => {
				const _originX: HorizontalConnectionPos = change.connectionPair.originX;
				const _originY: VerticalConnectionPos = change.connectionPair.originY;
				const _overlayX: HorizontalConnectionPos = change.connectionPair.overlayX;
				const _overlayY: VerticalConnectionPos = change.connectionPair.overlayY;
				let position!: NGCITooltipPosition;
				let direction!: NGCITooltipDirection;

				if ( _originX === 'center' ) {
					position = _originY === 'top' ? 'above' : 'below';

					if ( _overlayX !== 'center' ) direction = _overlayX === 'start' ? 'start' : 'end';
				}

				if ( _originY === 'center' ) {
					position = _originX === 'start' ? 'before' : 'after';

					if ( _overlayY !== 'center' ) direction = _overlayY === 'top' ? 'start' : 'end';
				}

				this._instance.setPositionClasses( position, direction );
				// this._instance.detectChanges();
			} );

		}
		return overlayRef;

	}

	// /**
	//  * @return {FlexibleConnectedPositionStrategy}
	//  */
	//  private _createPositionStrategy(): FlexibleConnectedPositionStrategy {
	// 	let originX: HorizontalConnectionPos = this.originX || 'center';
	// 	let originY: VerticalConnectionPos = this.originY || 'center';
	// 	let originFallbackX: HorizontalConnectionPos = originX;
	// 	let originFallbackY: VerticalConnectionPos = originY;
	// 	let overlayX: HorizontalConnectionPos = this.overlayX || 'center';
	// 	let overlayY: VerticalConnectionPos = this.overlayY || 'center';
	// 	let overlayFallbackX: HorizontalConnectionPos = overlayX;
	// 	let overlayFallbackY: VerticalConnectionPos = overlayY;
	// 	let offsetX: number = +( this.offsetX || 0 );
	// 	let offsetY: number = +( this.offsetY || 0 );
	// 	let offsetFallbackX: number = offsetX;
	// 	let offsetFallbackY: number = offsetY;

	// 	switch ( this.position ) {
	// 		case 'above':
	// 		case 'below':
	// 			if ( !this.originY ) originY = this.position === 'above' ? 'top' : 'bottom';
	// 			if ( !this.overlayY ) overlayY = this.position === 'above' ? 'bottom' : 'top';
	// 			if ( !this.offsetY ) offsetY = this.position === 'above' ? -7 : 7;

	// 			offsetFallbackX = -offsetX;
	// 			offsetFallbackY = -offsetY;
	// 			break;
	// 		case 'before':
	// 		case 'after':
	// 			if ( !this.originX ) originX = this.position === 'before' ? 'start' : 'end';
	// 			if ( !this.overlayX ) overlayX = this.position === 'before' ? 'end' : 'start';
	// 			if ( !this.offsetX ) offsetX = this.position === 'before' ? -7 : 7;

	// 			offsetFallbackX = -offsetX;
	// 			offsetFallbackY = -offsetY;
	// 			break;
	// 	}

	// 	originFallbackX = this._fallbackX( originX );
	// 	originFallbackY = this._fallbackY( originY );
	// 	overlayFallbackX = this._fallbackX( overlayX );
	// 	overlayFallbackY = this._fallbackY( overlayY );

	// 	return this._overlay.position()
	// 	.flexibleConnectedTo( this._elementRef )
	// 	// .withLockedPosition()
	// 	.withPush( true )
	// 	.withPositions([
	// 		{
	// 			originX, originY,
	// 			overlayX, overlayY,
	// 			offsetX, offsetY,
	// 		},
	// 		{
	// 			originX: originFallbackX, originY,
	// 			overlayX: overlayFallbackX, overlayY,
	// 			offsetX: offsetFallbackX, offsetY,
	// 		},
	// 		{
	// 			originX, originY: originFallbackY,
	// 			overlayX, overlayY: overlayFallbackY,
	// 			offsetX, offsetY: offsetFallbackY,
	// 		},
	// 		{
	// 			originX: originFallbackX, originY: originFallbackY,
	// 			overlayX: overlayFallbackX, overlayY: overlayFallbackY,
	// 			offsetX: offsetFallbackX, offsetY: offsetFallbackY,
	// 		},
	// 		{
	// 			originX: originFallbackX, originY,
	// 			overlayX: 'start', overlayY,
	// 			offsetX: -7, offsetY,
	// 		},
	// 		{
	// 			originX: originFallbackX, originY,
	// 			overlayX: 'end', overlayY,
	// 			offsetX: 7, offsetY,
	// 		},
	// 		{
	// 			originX, originY: originFallbackY,
	// 			overlayX, overlayY: 'top',
	// 			offsetX, offsetY: -7,
	// 		},
	// 		{
	// 			originX, originY: originFallbackY,
	// 			overlayX, overlayY: 'bottom',
	// 			offsetX, offsetY: 7,
	// 		},
	// 	]);
	// }
}
