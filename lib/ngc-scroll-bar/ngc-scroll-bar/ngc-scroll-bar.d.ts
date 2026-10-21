import { EventEmitter, ElementRef, AfterContentInit, OnDestroy, QueryList, NgZone } from '@angular/core';
import { NgcScrollBarViewPortDirective } from '../ngc-scroll-bar-view-port/ngc-scroll-bar-view-port.directive';
import { NgcScrollBarViewPortItemDirective } from '../ngc-scroll-bar-view-port/ngc-scroll-bar-view-port-item.directive';
import * as i0 from "@angular/core";
export declare type INgcScrollBarMode = 'auto' | 'overlay';
export declare type INgcScrollBarSuppressMode = 'visible' | 'hidden';
export declare class NgcScrollBar implements AfterContentInit, OnDestroy {
    container: NgcScrollBarViewPortDirective;
    items: QueryList<NgcScrollBarViewPortItemDirective>;
    suppress: boolean;
    suppressScrollX: boolean;
    suppressScrollY: boolean;
    mode: INgcScrollBarMode;
    suppressMode: INgcScrollBarSuppressMode;
    viewPortChanged: EventEmitter<NgcScrollBarViewPortDirective>;
    elementRef: ElementRef;
    protected ngZone: NgZone;
    private _lastScrollTop;
    private _lastScrollLeft;
    private _resizeObserver;
    private _loadItemsThrottle;
    get nativeElement(): HTMLElement;
    get clientHeight(): number;
    get clientWidth(): number;
    get scrollHeight(): number;
    get scrollWidth(): number;
    get scrollTop(): number;
    get scrollLeft(): number;
    triggerScroll(): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @return {void}
     */
    reset(): void;
    /**
     * @param {number} scrollLeft
     * @param {number} scrollTop
     * @param {number} duration
     * @return {void}
     */
    scrollTo(scrollLeft: number, scrollTop: number, duration?: number): void;
    /**
     * @param {number} duration
     * @return {void}
     */
    scrollToLeft(duration?: number): void;
    /**
     * @param {number} duration
     * @return {void}
     */
    scrollToRight(duration?: number): void;
    /**
     * @param {number} duration
     * @return {void}
     */
    scrollToTop(duration?: number): void;
    /**
     * @param {number} duration
     * @return {void}
     */
    scrollToBottom(duration?: number): void;
    /**
     * @param {number} scrollLeft
     * @param {number} scrollTop
     * @param {number} duration
     * @param {Element} element
     * @return {void}
     */
    private _animateScrollTo;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBar, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcScrollBar, never, never, { "suppress": "suppress"; "suppressScrollX": "suppressScrollX"; "suppressScrollY": "suppressScrollY"; "mode": "mode"; "suppressMode": "suppressMode"; }, { "viewPortChanged": "viewPortChanged"; }, ["container", "items"], never, false>;
}
