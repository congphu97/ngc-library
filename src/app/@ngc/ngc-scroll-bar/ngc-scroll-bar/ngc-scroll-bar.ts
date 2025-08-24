import {
	Input, Output, EventEmitter,
	ElementRef, AfterContentInit, ContentChild,
	OnDestroy, ContentChildren, QueryList,
	HostListener, NgZone, Directive
} from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import { startWith } from 'rxjs/operators';
import _ from 'lodash';

import { CoerceBoolean, DefaultValue, untilCmpDestroyed } from '@core';
import { NgcScrollBarViewPortDirective } from '../ngc-scroll-bar-view-port/ngc-scroll-bar-view-port.directive';
import { NgcScrollBarViewPortItemDirective } from '../ngc-scroll-bar-view-port/ngc-scroll-bar-view-port-item.directive';

export type INgcScrollBarMode = 'auto' | 'overlay';
export type INgcScrollBarSuppressMode = 'visible' | 'hidden';

@Directive()
export class NgcScrollBar implements AfterContentInit, OnDestroy {

	@ContentChild( NgcScrollBarViewPortDirective ) public container: NgcScrollBarViewPortDirective;
	@ContentChildren( NgcScrollBarViewPortItemDirective, { descendants: true } )
	public items: QueryList<NgcScrollBarViewPortItemDirective>;

	@Input() @CoerceBoolean() public suppress: boolean;
	@Input() @CoerceBoolean() public suppressScrollX: boolean;
	@Input() @CoerceBoolean() public suppressScrollY: boolean;
	@Input() @DefaultValue() public mode: INgcScrollBarMode = 'overlay';
	@Input() @DefaultValue() public suppressMode: INgcScrollBarSuppressMode = 'visible';

	@Output() public viewPortChanged: EventEmitter<NgcScrollBarViewPortDirective>
		= new EventEmitter<NgcScrollBarViewPortDirective>();

	public elementRef: ElementRef;

	protected ngZone: NgZone;

	private _lastScrollTop: number;
	private _lastScrollLeft: number;
	private _resizeObserver: ResizeObserver = new ResizeObserver( () => {
		this._loadItemsThrottle.cancel();
		this._loadItemsThrottle();
		this.viewPortChanged.emit( this.container );
	} );
	private _loadItemsThrottle: ReturnType<typeof _.throttle> = _.throttle( ( isReverse?: boolean ) => {
		this.ngZone.runOutsideAngular( () => {
			const items: NgcScrollBarViewPortItemDirective[] = this.items.toArray();

			( isReverse ? _.reduceRight : _.reduce )(
				items,
				( p: Promise<void>, item: NgcScrollBarViewPortItemDirective ) => {
					return p.then( () => {
						item.checkInViewPort();
						return Promise.resolve();
					} );
				},
				Promise.resolve()
			);
		} );
	}, 200 );

	get nativeElement(): HTMLElement { return this.elementRef.nativeElement; }
	get clientHeight(): number { return this.nativeElement.clientHeight; }
	get clientWidth(): number { return this.nativeElement.clientWidth; }
	get scrollHeight(): number { return this.nativeElement.scrollHeight; }
	get scrollWidth(): number { return this.nativeElement.scrollWidth; }
	get scrollTop(): number { return this.nativeElement.scrollTop; }
	get scrollLeft(): number { return this.nativeElement.scrollLeft; }

	@HostListener( 'scroll' )
	public triggerScroll() {
		const scrollTop: number = Math.abs( this.elementRef.nativeElement.scrollTop );
		const scrollLeft: number = Math.abs( this.elementRef.nativeElement.scrollLeft );

		this._loadItemsThrottle.cancel();
		this._loadItemsThrottle( scrollTop < this._lastScrollTop || scrollLeft < this._lastScrollLeft );

		this._lastScrollTop = scrollTop;
		this._lastScrollLeft = scrollLeft;
	}

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		// Element for which to observe height and width
		this._resizeObserver.observe( ( this.container || this ).elementRef.nativeElement );

		// Load items
		this.items
		.changes
		.pipe(
			startWith( this.items ),
			untilCmpDestroyed(this) as any
		)
		.subscribe( () => {
			this._loadItemsThrottle.cancel();
			this._loadItemsThrottle();
		} );
	}

	/**
	 * @constructor
	 */
	ngOnDestroy() {
		this._resizeObserver.disconnect();
		this._loadItemsThrottle.cancel();
	}

	/**
	 * @return {void}
	 */
	public reset() {
		setTimeout( () => this.nativeElement.scrollTo( 0, 0 ) );
	}

	/**
	 * @param {number} scrollLeft
	 * @param {number} scrollTop
	 * @param {number} duration
	 * @return {void}
	 */
	public scrollTo( scrollLeft: number, scrollTop: number, duration: number = 0 ) {
		duration
			? this._animateScrollTo( scrollLeft, scrollTop, duration, this.nativeElement )
			: this.nativeElement.scrollTo( scrollLeft, scrollTop );
	}

	/**
	 * @param {number} duration
	 * @return {void}
	 */
	public scrollToLeft( duration: number = 0 ) {
		this.scrollTo( 0, undefined, duration );
	}

	/**
	 * @param {number} duration
	 * @return {void}
	 */
	public scrollToRight( duration: number = 0 ) {
		this.scrollTo( this.scrollWidth + this.clientWidth, undefined, duration );
	}

	/**
	 * @param {number} duration
	 * @return {void}
	 */
	public scrollToTop( duration: number = 0 ) {
		this.scrollTo( undefined, 0, duration );
	}

	/**
	 * @param {number} duration
	 * @return {void}
	 */
	public scrollToBottom( duration: number = 0 ) {
		this.scrollTo( undefined, this.scrollHeight + this.clientHeight, duration );
	}

	/**
	 * @param {number} scrollLeft
	 * @param {number} scrollTop
	 * @param {number} duration
	 * @param {Element} element
	 * @return {void}
	 */
	private _animateScrollTo(
		scrollLeft: number, scrollTop: number, duration: number = 0,
		element: Element = document.scrollingElement
	) {
		if ( element.scrollLeft !== scrollLeft ) {
			const cosXParameter: number = ( element.scrollLeft - scrollLeft ) / 2;
			let scrollXCount: number = 0;
			let oldTimestampX: number;

			// @ts-ignore
			function stepX( newTimestamp: number ) {
				if ( oldTimestampX !== undefined ) {
					// If duration is 0 scrollCount will be Infinity
					scrollXCount += Math.PI * ( newTimestamp - oldTimestampX ) / duration;

					if ( scrollXCount >= Math.PI ) return element.scrollLeft = scrollLeft;

					element.scrollLeft = cosXParameter + scrollLeft + cosXParameter * Math.cos( scrollXCount );
				}

				oldTimestampX = newTimestamp;

				window.requestAnimationFrame( stepX );
			}

			window.requestAnimationFrame( stepX );
		}

		if ( element.scrollTop !== scrollTop ) {
			const cosYParameter: number = ( element.scrollTop - scrollTop ) / 2;
			let scrollYCount: number = 0;
			let oldTimestampY: number;

			// @ts-ignore
			function stepY( newTimestamp: number ) {
				if ( oldTimestampY !== undefined ) {
					// If duration is 0 scrollCount will be Infinity
					scrollYCount += Math.PI * ( newTimestamp - oldTimestampY ) / duration;

					if ( scrollYCount >= Math.PI ) return element.scrollTop = scrollTop;

					element.scrollTop = cosYParameter + scrollTop + cosYParameter * Math.cos( scrollYCount );
				}

				oldTimestampY = newTimestamp;

				window.requestAnimationFrame( stepY );
			}

			window.requestAnimationFrame( stepY );
		}
	}

}
