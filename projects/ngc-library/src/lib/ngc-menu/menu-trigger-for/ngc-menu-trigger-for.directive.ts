import {
	ElementRef, HostListener, Input,
	Directive, EventEmitter, Output,
	ViewContainerRef, OnDestroy
} from '@angular/core';
import {
	Overlay, OverlayRef, HorizontalConnectionPos,
	VerticalConnectionPos, OverlayConfig, FlexibleConnectedPositionStrategy,
	ConnectedOverlayPositionChange, PositionStrategy
} from '@angular/cdk/overlay';
import { Direction } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';

import {
	Unsubscriber, DefaultValue, CoerceBoolean,
	CoerceNumber, CoerceCssPixel, Memoize,
	untilCmpDestroyed
, IObject } from '@core';

import { NgcMenuComponent, NgcIMenuPosition, NgcIMenuDirection } from '../menu/ngc-menu.component';

@Unsubscriber()
@Directive({ selector: '[ngcMenuTriggerFor]', exportAs: 'ngcMenuTriggerFor' })
export class NgcMenuTriggerForDirective implements OnDestroy {

	@Input() public panelClass: string | string[];
	@Input() @DefaultValue() public backdropClass: string | string[] = 'cdk-overlay-transparent-backdrop';
	@Input() @CoerceCssPixel() public width: string;
	@Input() @CoerceCssPixel() public minWidth: string;
	@Input() @CoerceCssPixel() public maxWidth: string;
	@Input() @CoerceCssPixel() public height: string;
	@Input() @CoerceCssPixel() public minHeight: string;
	@Input() @CoerceCssPixel() public maxHeight: string;
	@Input() @CoerceBoolean() public programmatically: boolean;
	@Input() @CoerceBoolean() public autoFit: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public hasBackdrop: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public closeOnClickOutside: boolean = true;
	@Input() @CoerceNumber() public offsetX: number;
	@Input() @CoerceNumber() public offsetY: number;
	@Input() public originX: HorizontalConnectionPos;
	@Input() public originY: VerticalConnectionPos;
	@Input() public overlayX: HorizontalConnectionPos;
	@Input() public overlayY: VerticalConnectionPos;
	@Input() @DefaultValue() public layoutDir: Direction = 'ltr';
	@Input() @DefaultValue() public position: NgcIMenuPosition = 'below';
	@Input() public menuData: IObject;

	@Output() public menuInit: EventEmitter<NgcMenuTriggerForDirective> = new EventEmitter<NgcMenuTriggerForDirective>();
	@Output() public menuOpened: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public menuClosed: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public menuBackdropPress: EventEmitter<Event> = new EventEmitter<Event>();

	private _portal: any;
	private _isPositionStrategyUpdated: boolean;
	private _isMenuOpened: boolean;
	private _overlayRef: OverlayRef;
	private _menu: NgcMenuComponent;
	private _resizeObserver: ResizeObserver;

	@Input( 'ngcMenuTriggerFor' )
	get menu(): NgcMenuComponent { return this._menu; }
	set menu( menu: NgcMenuComponent ) {
		if ( menu === this._menu ) return;

		this._menu = menu;

		this.menuInit.emit( this );
	}

	get isMenuOpened(): boolean { return this._isMenuOpened; }
	set isMenuOpened( value: boolean ) {
		if ( !this.menu || this.menu.isOpened === value ) return;

		this._isMenuOpened = this.menu.isOpened = value;
	}

	/**
	 * @constructor
	 * @param {Overlay} _overlay
	 * @param {ElementRef} _elementRef
	 * @param {ViewContainerRef} _vcRef
	 */
	constructor( private _overlay: Overlay, private _elementRef: ElementRef, private _vcRef: ViewContainerRef ) {}

	@HostListener( 'click', [ '$event' ] )
	@HostListener( 'contextmenu', [ '$event' ] )
	@HostListener( 'keydown.space', [ '$event' ] )
	public triggerClick( event: Event ) {
		if ( this.programmatically ) return;

		event.stopPropagation();
		event.preventDefault();
		this.open( event );
	}

	/**
	 * @constructor
	 */
	ngOnDestroy() {
		this.isMenuOpened = false;

		this._overlayRef?.detach();
		this._overlayRef?.dispose();
		this._resizeObserver?.disconnect();
	}

	/**
	 * @param {Event} event
	 * @param {IObject} data
	 * @return {void}
	 */
	public open( event?: Event, data?: IObject ) {
		if ( !this.menu || this.menu.isOpened ) return;

		// Bind functions to menu
		this.menu.close = this.close.bind( this );
		this.menu.reopen = this.reopen.bind( this );

		// Auto fit menu position
		this.autoFit && this._autoFitMenuPosition();

		// Create overlay ref
		this._overlayRef = this._overlayRef || this._createOverlayRef();

		if ( this._isPositionStrategyUpdated ) {
			this._isPositionStrategyUpdated = false;

			this.updatePosition();
		}

		if ( this.programmatically && this._overlayRef.hasAttached() ) return;

		this.isMenuOpened = true;

		// Create menu portal
		this._portal = this._createTemplatePortal();

		// Attach menu to overlay
		this.menu.onOpened({ ...data, ...this.menuData });
		this._overlayRef.attach( this._portal );

		// Emit on opened event
		this.menuOpened.emit( event );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public close( event?: Event ) {
		if ( !this.isMenuOpened ) return;

		this.isMenuOpened = false;

		this._overlayRef?.detach();
		this.menu?.onClosed();
		this.menuClosed.emit( event );
	}

	/**
	 * @return {void}
	 */
	public reopen() {
		if ( !this.isMenuOpened ) return;

		this._overlayRef.detach();
		this._overlayRef.attach( this._portal );
	}

	/**
	 * @param {PositionStrategy=} positionStrategy
	 * @return {void}
	 */
	public updatePosition( positionStrategy: PositionStrategy = this._createPositionStrategy() ) {
		this._overlayRef?.updatePositionStrategy( positionStrategy );
	}

	/**
	 * @return {TemplatePortal}
	 */
	private _createTemplatePortal(): TemplatePortal {
		if ( !this._portal || this._portal.templateRef !== this.menu.templateRef ) {
			this._portal = new TemplatePortal( this.menu?.templateRef, this._vcRef );
		}

		return this._portal;
	}

	/**
	 * @return {OverlayRef}
	 */
	private _createOverlayRef(): OverlayRef {
		const config: OverlayConfig = new OverlayConfig({
			panelClass		: this.panelClass ?? this.menu.panelClass,
			backdropClass	: this.backdropClass ?? this.menu.backdropClass,
			hasBackdrop		: this.hasBackdrop ?? this.menu.hasBackdrop,
			scrollStrategy	: this._overlay.scrollStrategies.reposition({ autoClose: true, scrollThrottle: 1000 }),
			positionStrategy: this._createPositionStrategy(),
		});
		const overlayRef: OverlayRef = this._overlay.create( config );

		// Set layout direction
		overlayRef.setDirection( this.layoutDir );

		// Catch keyboard events on overlay
		overlayRef.keydownEvents()
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( event: KeyboardEvent ) => {
			switch ( event.key ) {
				case 'ArrowDown':
					if ( !this.menu.menuItems.length ) return;
					event.stopPropagation();
					event.preventDefault();
					this.menu.focusNextItem( event );
					break;
				case 'ArrowUp':
					if ( !this.menu.menuItems.length ) return;
					event.stopPropagation();
					event.preventDefault();
					this.menu.focusPreviousItem( event );
					break;
				case 'Enter':
					if ( !this.menu.menuItems.length ) return;
					event.stopPropagation();
					event.preventDefault();
					this.menu.chooseItem( event );
					break;
				case 'Escape':
					event.stopPropagation();
					event.preventDefault();
					this.close( event );
					break;
			}
		} );

		// On backdrop click
		overlayRef.backdropClick()
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( event: MouseEvent ) => {
			( this.closeOnClickOutside || this.menu.closeOnClickOutside ) && this.close( event );
			this.menuBackdropPress.emit( event );
			this.menu.backdropPress.emit( event );
		} );

		// Update menu position classes
		if ( this.position ) {
			( overlayRef.getConfig().positionStrategy as FlexibleConnectedPositionStrategy )
			.positionChanges
			.pipe( untilCmpDestroyed( this ) )
			.subscribe( ( change: ConnectedOverlayPositionChange ) => {
				const _originX: HorizontalConnectionPos = change.connectionPair.originX;
				const _originY: VerticalConnectionPos = change.connectionPair.originY;
				const _overlayX: HorizontalConnectionPos = change.connectionPair.overlayX;
				const _overlayY: VerticalConnectionPos = change.connectionPair.overlayY;
				let position: NgcIMenuPosition;
				let direction: NgcIMenuDirection;

				if ( _originX === 'center' ) {
					position = _originY === 'top' ? 'above' : 'below';

					if ( _overlayX !== 'center' ) direction = _overlayX === 'start' ? 'start' : 'end';
				}

				if ( _originY === 'center' ) {
					position = _originX === 'start' ? 'before' : 'after';

					if ( _overlayY !== 'center' ) direction = _overlayY === 'top' ? 'start' : 'end';
				}

				this.menu.setPositionClasses( position, direction );
			} );
		}

		// Bind sizes to menu
		const minWidth: string = this.minWidth ?? this.menu.minWidth;
		const minHeight: string = this.minHeight ?? this.menu.minHeight;

		this.menu.width = this.width ?? this.menu.width;
		this.menu.minWidth = parseFloat( minWidth ) < window.innerWidth ? minWidth : undefined;
		this.menu.maxWidth = this.maxWidth ?? this.menu.maxWidth;
		this.menu.height = this.height ?? this.menu.height;
		this.menu.minHeight = parseFloat( minHeight ) < window.innerHeight ? minHeight : undefined;
		this.menu.maxHeight = this.maxHeight ?? this.menu.maxHeight;

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
					this.isMenuOpened && overlayRef.updatePosition();

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
		let originX: HorizontalConnectionPos = this.originX || 'center';
		let originY: VerticalConnectionPos = this.originY || 'center';
		let originFallbackX: HorizontalConnectionPos = originX;
		let originFallbackY: VerticalConnectionPos = originY;
		let overlayX: HorizontalConnectionPos = this.overlayX || 'center';
		let overlayY: VerticalConnectionPos = this.overlayY || 'center';
		let overlayFallbackX: HorizontalConnectionPos = overlayX;
		let overlayFallbackY: VerticalConnectionPos = overlayY;
		let offsetX: number = +( this.offsetX || 0 );
		let offsetY: number = +( this.offsetY || 0 );
		let offsetFallbackX: number = offsetX;
		let offsetFallbackY: number = offsetY;

		switch ( this.position ) {
			case 'above':
			case 'below':
				if ( !this.originY ) originY = this.position === 'above' ? 'top' : 'bottom';
				if ( !this.overlayY ) overlayY = this.position === 'above' ? 'bottom' : 'top';
				if ( _.isNil( this.offsetY ) ) offsetY = this.position === 'above' ? -7 : 7;

				offsetFallbackX = -offsetX;
				offsetFallbackY = -offsetY;
				break;
			case 'before':
			case 'after':
				if ( !this.originX ) originX = this.position === 'before' ? 'start' : 'end';
				if ( !this.overlayX ) overlayX = this.position === 'before' ? 'end' : 'start';
				if ( _.isNil( this.offsetX ) ) offsetX = this.position === 'before' ? -7 : 7;

				offsetFallbackX = -offsetX;
				offsetFallbackY = -offsetY;
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
				offsetX: offsetFallbackX, offsetY,
			},
			{
				originX, originY: originFallbackY,
				overlayX, overlayY: overlayFallbackY,
				offsetX, offsetY: offsetFallbackY,
			},
			{
				originX: originFallbackX, originY: originFallbackY,
				overlayX: overlayFallbackX, overlayY: overlayFallbackY,
				offsetX: offsetFallbackX, offsetY: offsetFallbackY,
			},
			{
				originX: originFallbackX, originY,
				overlayX: 'start', overlayY,
				offsetX: -7, offsetY,
			},
			{
				originX: originFallbackX, originY,
				overlayX: 'end', overlayY,
				offsetX: 7, offsetY,
			},
			{
				originX, originY: originFallbackY,
				overlayX, overlayY: 'top',
				offsetX, offsetY: -7,
			},
			{
				originX, originY: originFallbackY,
				overlayX, overlayY: 'bottom',
				offsetX, offsetY: 7,
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

	/**
	 * @return {void}
	 */
	private _autoFitMenuPosition() {
		switch ( this.position ) {
			case 'above':
			case 'below':
				this.originX ||= 'start';
				this.originY ||= this.position === 'above' ? 'top' : 'bottom';
				this.overlayX ||= 'start';
				this.overlayY ||= this.position === 'above' ? 'bottom' : 'top';
				this.offsetX ||= 0;
				this.offsetY ||= 0;
				this.width = this._elementRef.nativeElement.clientWidth;
				break;
			case 'before':
			case 'after':
				this.originX ||= this.position === 'before' ? 'start' : 'end';
				this.originY ||= 'top';
				this.overlayX ||= this.position === 'before' ? 'end' : 'start';
				this.overlayY ||= 'top';
				this.offsetX ||= 0;
				this.offsetY ||= 0;
				this.height = this._elementRef.nativeElement.clientHeight;
				break;
		}
	}

}
