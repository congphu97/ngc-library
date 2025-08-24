import {
	ElementRef, HostListener, Input,
	Directive, EventEmitter, Output,
	ViewContainerRef, OnDestroy, ChangeDetectorRef,
	OnChanges, SimpleChanges
} from '@angular/core';
import {
	Overlay, OverlayRef, FlexibleConnectedPositionStrategy,
	HorizontalConnectionPos, VerticalConnectionPos, OverlayConfig,
	PositionStrategy
} from '@angular/cdk/overlay';
import { Direction } from '@angular/cdk/bidi';
import { ComponentPortal } from '@angular/cdk/portal';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';

import {
	Unsubscriber, DefaultValue, CoerceBoolean,
	CoerceNumber, CoerceCssPixel, Memoize,
	untilCmpDestroyed
} from '@core';

import { NgcColorPickerComponent, NgcIColorPickerPosition, NgcIColorPickerEmptyMode } from './ngc-color-picker.component';

@Unsubscriber()
@Directive({ selector: '[ngcColorPicker]', exportAs: 'ngcColorPicker' })
export class NgcColorPickerDirective implements OnDestroy, OnChanges {

	@Input() public pickedColor: string;
	@Input() @DefaultValue() public panelClass: string | string[] = 'cdk-overlay-highest-pane';
	@Input() @DefaultValue() public backdropClass: string | string[] = [
		'cdk-overlay-transparent-backdrop',
		'cdk-overlay-highest-backdrop',
	];
	@Input() @CoerceCssPixel() public width: string;
	@Input() @CoerceCssPixel() public minWidth: string;
	@Input() @CoerceCssPixel() public maxWidth: string;
	@Input() @CoerceCssPixel() public height: string;
	@Input() @CoerceCssPixel() public minHeight: string;
	@Input() @CoerceCssPixel() public maxHeight: string;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public hasBackdrop: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public closeOnClickOutside: boolean = true;
	@Input() @CoerceNumber() public offsetX: number;
	@Input() @CoerceNumber() public offsetY: number;
	@Input() public originX: HorizontalConnectionPos;
	@Input() public originY: VerticalConnectionPos;
	@Input() public overlayX: HorizontalConnectionPos;
	@Input() public overlayY: VerticalConnectionPos;
	@Input() @DefaultValue() public direction: Direction = 'ltr';
	@Input() @DefaultValue() public position: NgcIColorPickerPosition = 'below';
	@Input() @DefaultValue() public emptyMode: NgcIColorPickerEmptyMode = 'color';

	@Output() public opened: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public closed: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public picked: EventEmitter<string> = new EventEmitter<string>();
	@Output() public backdropPress: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
	@Output() public pickedColorChange: EventEmitter<string> = new EventEmitter<string>();

	public isOpened: boolean;

	private _isPositionStrategyUpdated: boolean;
	private _instance: NgcColorPickerComponent;
	private _portal: ComponentPortal<NgcColorPickerComponent>;
	private _overlayRef: OverlayRef;
	private _resizeObserver: ResizeObserver;

	/**
	 * @constructor
	 * @param {Overlay} _overlay
	 * @param {ElementRef} _elementRef
	 * @param {ChangeDetectorRef} _cdRef
	 * @param {ViewContainerRef} _vcRef
	 */
	constructor(
		private _overlay: Overlay,
		private _elementRef: ElementRef,
		private _cdRef: ChangeDetectorRef,
		private _vcRef: ViewContainerRef
	) {}

	@HostListener( 'click', [ '$event' ] )
	@HostListener( 'contextmenu', [ '$event' ] )
	@HostListener( 'keydown.space', [ '$event' ] )
	public triggerClick( event: Event ) {
		if ( this.disabled ) return;

		event.stopPropagation();
		event.preventDefault();
		this.open( event );
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !this._instance ) return;
		if ( changes.pickedColor ) this._instance.pickedColor = this.pickedColor;
		if ( changes.emptyMode ) this._instance.emptyMode = this.emptyMode;
	}

	/**
	 * @constructor
	 */
	ngOnDestroy() {
		this._overlayRef?.detach();
		this._overlayRef?.dispose();
		this._resizeObserver?.disconnect();
	}

	/**
	 * @param {string} color
	 * @return {void}
	 */
	public onColorPicked( color: string ) {
		this.pickedColor = color;

		this.picked.emit( this.pickedColor );
		this.close();
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public open( event?: Event ) {
		// Create overlay ref
		this._overlayRef = this._overlayRef || this._createOverlayRef();

		if ( this._isPositionStrategyUpdated ) {
			this._isPositionStrategyUpdated = false;

			this.updatePosition();
		}

		if ( this._overlayRef.hasAttached() ) return;

		this.isOpened = true;

		// Create color picker portal
		this._portal = this._portal || new ComponentPortal( NgcColorPickerComponent, this._vcRef );

		// Attach color picker to overlay
		const instance: NgcColorPickerComponent = this._overlayRef.attach( this._portal ).instance;

		instance.pickedColor = this.pickedColor;
		instance.pickedColorChange = this.pickedColorChange;
		instance.emptyMode = this.emptyMode;
		instance.close = this.close.bind( this );
		instance.onPicked = this.onColorPicked.bind( this );

		this._instance = instance;

		// Emit on opened event
		this._cdRef.markForCheck();
		this.opened.emit( event );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public close( event?: Event ) {
		this.isOpened = false;

		this._overlayRef?.detach();
		this._cdRef.markForCheck();
		this.closed.emit( event );
	}

	/**
	 * @param {PositionStrategy=} positionStrategy
	 * @return {void}
	 */
	public updatePosition( positionStrategy: PositionStrategy = this._createPositionStrategy() ) {
		this._overlayRef?.updatePositionStrategy( positionStrategy );
	}

	/**
	 * @return {OverlayRef}
	 */
	private _createOverlayRef(): OverlayRef {
		const config: OverlayConfig = new OverlayConfig({
			panelClass		: this.panelClass,
			backdropClass	: this.backdropClass,
			hasBackdrop		: this.hasBackdrop,
			width			: this.width,
			minWidth		: parseFloat( this.minWidth ) < window.innerWidth ? this.minWidth : undefined,
			maxWidth		: this.maxWidth,
			height			: this.height,
			minHeight		: parseFloat( this.minHeight ) < window.innerHeight ? this.minHeight : undefined,
			maxHeight		: this.maxHeight,
			scrollStrategy	: this._overlay.scrollStrategies.reposition({ autoClose: true, scrollThrottle: 1000 }),
			positionStrategy: this._createPositionStrategy(),
		});
		const overlayRef: OverlayRef = this._overlay.create( config );

		// Set overlay direction
		overlayRef.setDirection( this.direction );

		// Catch keyboard events on overlay
		overlayRef.keydownEvents()
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( event: KeyboardEvent ) => {
			if ( event.key !== 'Escape' ) return;

			event.stopPropagation();
			event.preventDefault();
			this.close( event );
		} );

		// On backdrop click
		overlayRef.backdropClick()
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( event: MouseEvent ) => {
			this.closeOnClickOutside && this.close( event );
			this.backdropPress.emit( event );
		} );

		/*
		Read more about the resize observer here: https://developers.google.com/web/updates/2016/10/resizeobserver
		Basicaly, what we do is that we subscribe to size events on the overlay.
		Currently we only get one event, (then we disconnet the resize observer).
		But then we simply calculate if we need to improve the layout.
		 */
		this._resizeObserver?.disconnect();
		this._resizeObserver = new ResizeObserver( ( entries: ResizeObserverEntry[] ) => {
			const viewPortWidth: number = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 );
			const viewPortHeight: number = Math.max( document.documentElement.clientHeight, window.innerHeight || 0 );

			for ( const entry of entries ) {
				// We get the width & height of the element from the the contentRect, provided by the resize observer
				const width: number = entry.contentRect.width;
				const height: number = entry.contentRect.height;
				const domReact: DOMRect = entry.target.getBoundingClientRect();
				const x: number = domReact.left;
				const y: number = domReact.top;
				const offsetPlusWidth: number = x + width;
				const offsetPlusHeight: number = y + height;
				const pixelsOverflowX: number = offsetPlusWidth - viewPortWidth;
				const pixelsOverflowY: number = offsetPlusHeight - viewPortHeight;

				// If x is negative, we are off-screen to the left.
				// If y is negative, we are off-screen to the top.
				// If pixelsOverflowX is positive, we are off-screen on the right
				// If pixelsOverflowY is positive, we are off-screen on the bottom
				// In either case, we adopt a new strategy.
				if ( x < 0 || y < 0 || pixelsOverflowX > 1 || pixelsOverflowY > 1 ) {
					this.isOpened && overlayRef.updatePosition();

					this._isPositionStrategyUpdated = true;
				}
			}
		} );

		// Element for which to observe height and width
		this._resizeObserver.observe( overlayRef.overlayElement );

		return overlayRef;
	}

	/**
	 * @return {FlexibleConnectedPositionStrategy}
	 */
	private _createPositionStrategy(): FlexibleConnectedPositionStrategy {
		const originX: HorizontalConnectionPos = this.originX || 'start';
		let originY: VerticalConnectionPos = this.originY;
		let originFallbackX: HorizontalConnectionPos = originX;
		let originFallbackY: VerticalConnectionPos = originY;
		const overlayX: HorizontalConnectionPos = this.overlayX || 'start';
		let overlayY: VerticalConnectionPos = this.overlayY;
		let overlayFallbackX: HorizontalConnectionPos = overlayX;
		let overlayFallbackY: VerticalConnectionPos = overlayY;
		const offsetX: number = +( this.offsetX || 0 );
		let offsetY: number = +( this.offsetY || 0 );

		switch ( this.position ) {
			case 'above':
			case 'below':
				if ( !this.originY ) originY = this.position === 'above' ? 'top' : 'bottom';
				if ( !this.overlayY ) overlayY = this.position === 'above' ? 'bottom' : 'top';
				if ( _.isNil( this.offsetY ) ) offsetY = this.position === 'above' ? -5 : 5;
				break;
		}

		originFallbackX = this._fallbackX( originX );
		originFallbackY = this._fallbackY( originY );
		overlayFallbackX = this._fallbackX( overlayX );
		overlayFallbackY = this._fallbackY( overlayY );

		return this._overlay
		.position()
		.flexibleConnectedTo( this._elementRef )
		.withFlexibleDimensions( false )
		.withLockedPosition()
		.withPush( true )
		.withPositions([
			{
				originX, originY,
				overlayX, overlayY,
				offsetX, offsetY,
			},
			{
				originX: originFallbackX, originY,
				overlayX: overlayFallbackX, overlayY,
				offsetX: -offsetX, offsetY,
			},
			{
				originX, originY: originFallbackY,
				overlayX, overlayY: overlayFallbackY,
				offsetX, offsetY: -offsetY,
			},
			{
				originX: originFallbackX, originY: originFallbackY,
				overlayX: overlayFallbackX, overlayY: overlayFallbackY,
				offsetX: -offsetX, offsetY: -offsetY,
			},
		]);
	}

	/**
	 * @param {HorizontalConnectionPos} origin
	 * @return {HorizontalConnectionPos}
	 */
	@Memoize()
	private _fallbackX( origin: HorizontalConnectionPos ): HorizontalConnectionPos {
		switch ( origin ) {
			case 'start':
				return 'end';
			case 'end':
				return 'start';
			default:
				return origin;
		}
	}

	/**
	 * @param {VerticalConnectionPos} origin
	 * @return {VerticalConnectionPos}
	 */
	@Memoize()
	private _fallbackY( origin: VerticalConnectionPos ): VerticalConnectionPos {
		switch ( origin ) {
			case 'top':
				return 'bottom';
			case 'bottom':
				return 'top';
			default:
				return origin;
		}
	}

}
