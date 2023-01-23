import {
	ElementRef, HostListener, Input,
	Directive, EventEmitter, Output,
	ViewContainerRef, AfterViewInit, OnDestroy,
	OnChanges, SimpleChanges, ChangeDetectorRef
} from '@angular/core';
import {
	Overlay, OverlayRef, HorizontalConnectionPos,
	VerticalConnectionPos, OverlayConfig, FlexibleConnectedPositionStrategy,
	ConnectedOverlayPositionChange, PositionStrategy
} from '@angular/cdk/overlay';
import { Direction } from '@angular/cdk/bidi';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { FocusMonitor } from '@angular/cdk/a11y';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';

import {
	Unsubscriber, DefaultValue, CoerceBoolean,
	CoerceNumber, CoerceCssPixel, Memoize,
	untilCmpDestroyed
} from '@core';
import { NgcTooltipComponent, NGCITooltipDirection, NGCITooltipPosition } from './ngc-tooltip/ngc-tooltip.component';

export type NGCITooltipTriggerType = 'hover' | 'press';

const overlayRefs: OverlayRef[] = [];

@Unsubscriber()
@Directive({ selector: '[ngcTooltip]', exportAs: 'ngcTooltip' })
export class NgcTooltipDirective implements OnChanges, AfterViewInit, OnDestroy {

	@Input() @DefaultValue() public panelClass: string | string[] = 'cdk-overlay-highest-pane';
	@Input() @DefaultValue() public backdropClass: string | string[] = [
		'cdk-overlay-transparent-backdrop',
		'cdk-overlay-highest-backdrop',
	];
	@Input() public tooltipColor: string;
	@Input() @CoerceCssPixel() public width: string;
	@Input() @CoerceCssPixel() public minWidth: string;
	@Input() @CoerceCssPixel() public maxWidth: string;
	@Input() @CoerceCssPixel() public height: string;
	@Input() @CoerceCssPixel() public minHeight: string;
	@Input() @CoerceCssPixel() public maxHeight: string;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public once: boolean;
	@Input() @CoerceBoolean() public programmatically: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public autoClose: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public hasBackdrop: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public closeOnClickOutside: boolean = true;
	@Input() public openDelay: number = 300;
	@Input() public closeDelay: number;
	@Input() @CoerceNumber() public offsetX: number;
	@Input() @CoerceNumber() public offsetY: number;
	@Input() public originX: HorizontalConnectionPos;
	@Input() public originY: VerticalConnectionPos;
	@Input() public overlayX: HorizontalConnectionPos;
	@Input() public overlayY: VerticalConnectionPos;
	@Input() @DefaultValue() public layoutDir: Direction = 'ltr';
	@Input() @DefaultValue() public position: NGCITooltipPosition = 'above';
	@Input() @DefaultValue() public triggerType: NGCITooltipTriggerType = 'hover';

	@Output() public opened: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
	@Output() public closed: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

	public isOpened: boolean;

	private _openTimeout: any;
	private _closeTimeout: any;
	private _closeAllTimeout: any;
	private _portal: any;
	private _tooltip: any;
	private _isPositionStrategyUpdated: boolean;
	private _visibleOnce: boolean;
	private _overlayElementHover: boolean;
	private _overlayRef: OverlayRef;
	private _instance: NgcTooltipComponent;
	private _resizeObserver: ResizeObserver;
	private _resizeObserver2: ResizeObserver;
	private _closeDebounce: ReturnType<typeof _.debounce>
		= _.debounce( ( event: MouseEvent ) => !this._overlayElementHover && this.close( event ), 100 );

	@Input( 'ngcTooltip' )
	get tooltip(): any { return this._tooltip; }
	set tooltip( tooltip: any ) {
		if ( tooltip === this._tooltip ) return;

		this._tooltip = tooltip;
	}

	get canAttach(): boolean {
		return !!this._elementRef.nativeElement.clientWidth
				|| !!this._elementRef.nativeElement.clientHeight;
	}

	/**
	 * @constructor
	 * @param {Overlay} _overlay
	 * @param {ElementRef} _elementRef
	 * @param {ChangeDetectorRef} _cdRef
	 * @param {ViewContainerRef} _vcRef
	 * @param {FocusMonitor} _focusMonitor
	 */
	constructor(
		private _overlay: Overlay,
		private _elementRef: ElementRef,
		private _cdRef: ChangeDetectorRef,
		private _vcRef: ViewContainerRef,
		private _focusMonitor: FocusMonitor
	) {}

	@HostListener( 'click', [ '$event' ] )
	public triggerMouseClick( event: MouseEvent ) {
		if ( this.triggerType === 'hover' || ( this.once && this._visibleOnce ) ) return;

		event.stopPropagation();
		clearTimeout( this._openTimeout );
		clearTimeout( this._closeTimeout );
		clearTimeout( this._closeAllTimeout );
		!this.programmatically && this.open( event );
	}

	@HostListener( 'mousemove', [ '$event' ] )
	public triggerMouseEnter( event: MouseEvent ) {
		console.log({event})
		if ( this.triggerType === 'press' || ( this.once && this._visibleOnce ) ) return;

		clearTimeout( this._openTimeout );
		clearTimeout( this._closeTimeout );
		clearTimeout( this._closeAllTimeout );
		!this.programmatically && this.open( event );
	}

	@HostListener( 'mouseleave', [ '$event' ] )
	public triggerMouseLeave( event: MouseEvent ) {
		if ( !this.autoClose || this.triggerType === 'press' ) return;
		console.log({event})

		clearTimeout( this._openTimeout );
		clearTimeout( this._closeTimeout );
		clearTimeout( this._closeAllTimeout );
		!this.programmatically && this.close( event );
		// !this.programmatically && this._closeDebounce( event );
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		changes.tooltip && this._setTooltipMessage();
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this._focusMonitor.monitor( this._elementRef )
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( this.close.bind( this ) );

		/*
		Read more about the resize observer here: https://developers.google.com/web/updates/2016/10/resizeobserver
		Basicaly, what we do is that we subscribe to size events on the overlay.
		Currently we only get one event, (then we disconnet the resize observer).
		But then we simply calculate if we need to improve the layout.
		 */
		this._resizeObserver2?.disconnect();
		this._resizeObserver2 = new ResizeObserver( () => { !this.canAttach && this._close(); } );

		this._resizeObserver2.observe( this._elementRef.nativeElement );
	}

	/**
	 * @constructor
	 */
	ngOnDestroy() {
		clearTimeout( this._openTimeout );
		clearTimeout( this._closeTimeout );
		clearTimeout( this._closeAllTimeout );
		this._closeDebounce.cancel();
		this._overlayRef?.detach();
		this._overlayRef?.dispose();
		this._resizeObserver?.disconnect();
		this._resizeObserver2?.disconnect();
	}

	/**
	 * @param {MouseEvent} event
	 * @return {void}
	 */
	public open( event?: MouseEvent ) {
		if ( this.disabled ) return;

		clearTimeout( this._openTimeout );
		clearTimeout( this._closeTimeout );
		clearTimeout( this._closeAllTimeout );

		this._openTimeout = setTimeout(
			this._open.bind( this, event ),
			!this.programmatically ? this.openDelay : 0
		);
	}

	/**
	 * @param {MouseEvent} event
	 * @return {void}
	 */
	public close( event?: MouseEvent ) {
		clearTimeout( this._openTimeout );
		clearTimeout( this._closeTimeout );
		clearTimeout( this._closeAllTimeout );

		if ( !this._instance ) return;

		this._closeTimeout = setTimeout(
			this._close.bind( this, event ),
			!this.programmatically ? this.closeDelay : 0
		);
	}

	/**
	 * @return {void}
	 */
	public closeAll() {
		clearTimeout( this._openTimeout );
		clearTimeout( this._closeTimeout );
		clearTimeout( this._closeAllTimeout );

		this._closeAllTimeout = setTimeout(
			this._closeAll.bind( this ),
			!this.programmatically ? this.closeDelay : 0
		);
	}

	/**
	 * @param {PositionStrategy=} positionStrategy
	 * @return {void}
	 */
	public updatePosition( positionStrategy: PositionStrategy = this._createPositionStrategy() ) {
		this._overlayRef?.updatePositionStrategy( positionStrategy );
	}

	/**
	 * @param {MouseEvent} event
	 * @return {void}
	 */
	private _open( event?: MouseEvent ) {
		if ( !this.canAttach ) return;

		// Create overlay ref
		this._overlayRef = this._overlayRef || this._createOverlayRef();

		if ( this._isPositionStrategyUpdated ) {
			this._isPositionStrategyUpdated = false;

			this.updatePosition();
		}

		// Push overlay ref to global
		overlayRefs.push( this._overlayRef );

		if ( this._overlayRef.hasAttached() ) return;

		this.isOpened = this._visibleOnce = true;

		if ( _.isString( this.tooltip ) ) {
			this._portal = this._portal || new ComponentPortal( NgcTooltipComponent, this._vcRef );
			this._instance = this._overlayRef.attach( this._portal ).instance;

			this._setTooltipMessage();
		} else if ( this.tooltip instanceof NgcTooltipComponent ) {
			this._portal = this._portal || this._createTemplatePortal();
			this._instance = this.tooltip;

			this._overlayRef.attach( this._portal );
		}

		if ( this._instance ) {
			// Assign tooltip instance properties
			const minWidth: string = this.minWidth ?? this.tooltip?.minWidth;
			const minHeight: string = this.minHeight ?? this.tooltip?.minHeight;

			this._instance.color = this.tooltipColor || this.tooltip?.color;
			this._instance.width = this.width ?? this.tooltip?.width;
			this._instance.minWidth = parseFloat( minWidth ) < window.innerWidth ? minWidth : undefined;
			this._instance.maxWidth = this.maxWidth ?? this.tooltip?.maxWidth;
			this._instance.height = this.height ?? this.tooltip?.height;
			this._instance.minHeight = parseFloat( minHeight ) < window.innerHeight ? minHeight : undefined;
			this._instance.maxHeight = this.maxHeight ?? this.tooltip?.maxHeight;
			this._instance.close = this.close.bind( this );

			// Detach tooltip out of dom tree changes detection
			this._instance.detectChanges();
			this._instance.detach();
		}

		// Add overlay element events
		this._overlayRef.overlayElement.removeEventListener( 'mousemove', undefined );
		this._overlayRef.overlayElement.removeEventListener( 'mouseleave', undefined );
		this._overlayRef.overlayElement.addEventListener( 'mousemove', () => this._overlayElementHover = true );
		this._overlayRef.overlayElement.addEventListener( 'mouseleave', ( overlayMouseEvent: MouseEvent ) => {
			this._overlayElementHover = false;

			this.autoClose && this.close( overlayMouseEvent );
		} );

		// Emit on opened event
		this._cdRef.markForCheck();
		this.opened.emit( event );
	}

	/**
	 * @param {MouseEvent} event
	 * @return {void}
	 */
	private _close( event?: MouseEvent ) {
		this.isOpened = false;

		this._overlayRef?.detach();
		this._cdRef.markForCheck();
		this.closed.emit( event );
	}

	/**
	 * @return {void}
	 */
	private _closeAll() {
		_.forEach( overlayRefs, ( overlayRef: OverlayRef ) => { overlayRef.detach(); } );
	}

	/**
	 * @return {TemplatePortal}
	 */
	private _createTemplatePortal(): TemplatePortal {
		if ( !this._portal || this._portal.templateRef !== this.tooltip?.templateRef ) {
			this._portal = new TemplatePortal( this.tooltip?.templateRef, this._vcRef );
		}

		return this._portal;
	}

	/**
	 * @return {OverlayRef}
	 */
	private _createOverlayRef(): OverlayRef {
		const config: OverlayConfig = new OverlayConfig({
			panelClass		: this.panelClass ?? this.tooltip?.panelClass,
			backdropClass	: this.backdropClass ?? this.tooltip?.backdropClass,
			hasBackdrop		: this.triggerType === 'press',
			scrollStrategy	: this._overlay.scrollStrategies.close(),
			positionStrategy: this._createPositionStrategy(),
		});
		const overlayRef: OverlayRef = this._overlay.create( config );

		// Set layout dir
		overlayRef.setDirection( this.layoutDir );

		// On backdrop click
		overlayRef.backdropClick()
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( event: MouseEvent ) => this.autoClose && this.close( event ) );

		// Update tooltip position classes
		if ( this.position ) {
			( overlayRef.getConfig().positionStrategy as FlexibleConnectedPositionStrategy )
			.positionChanges
			.pipe( untilCmpDestroyed( this ) )
			.subscribe( ( change: ConnectedOverlayPositionChange ) => {
				const _originX: HorizontalConnectionPos = change.connectionPair.originX;
				const _originY: VerticalConnectionPos = change.connectionPair.originY;
				const _overlayX: HorizontalConnectionPos = change.connectionPair.overlayX;
				const _overlayY: VerticalConnectionPos = change.connectionPair.overlayY;
				let position: NGCITooltipPosition;
				let direction: NGCITooltipDirection;

				if ( _originX === 'center' ) {
					position = _originY === 'top' ? 'above' : 'below';

					if ( _overlayX !== 'center' ) direction = _overlayX === 'start' ? 'start' : 'end';
				}

				if ( _originY === 'center' ) {
					position = _originX === 'start' ? 'before' : 'after';

					if ( _overlayY !== 'center' ) direction = _overlayY === 'top' ? 'start' : 'end';
				}

				this._instance.setPositionClasses( position, direction );
				this._instance.detectChanges();
			} );
		}

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
		// .withFlexibleDimensions( false )
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
	private _setTooltipMessage() {
		if ( !this._instance ) return;

		this._instance.messageOnly = false;

		if ( _.isString( this.tooltip ) ) {
			this._instance.message = this.tooltip.toString();
			this._instance.messageOnly = true;
		}

		this._instance.detectChanges();
	}

}
