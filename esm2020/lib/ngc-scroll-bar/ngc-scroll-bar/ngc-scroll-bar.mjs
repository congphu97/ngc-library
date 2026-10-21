import { __decorate, __metadata } from "tslib";
import { Input, Output, EventEmitter, ContentChild, ContentChildren, QueryList, HostListener, Directive } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import { startWith } from 'rxjs/operators';
import _ from 'lodash';
import { CoerceBoolean, DefaultValue, untilCmpDestroyed } from '@core';
import { NgcScrollBarViewPortDirective } from '../ngc-scroll-bar-view-port/ngc-scroll-bar-view-port.directive';
import { NgcScrollBarViewPortItemDirective } from '../ngc-scroll-bar-view-port/ngc-scroll-bar-view-port-item.directive';
import * as i0 from "@angular/core";
export class NgcScrollBar {
    constructor() {
        this.mode = 'overlay';
        this.suppressMode = 'visible';
        this.viewPortChanged = new EventEmitter();
        this._resizeObserver = new ResizeObserver(() => {
            this._loadItemsThrottle.cancel();
            this._loadItemsThrottle();
            this.viewPortChanged.emit(this.container);
        });
        this._loadItemsThrottle = _.throttle((isReverse) => {
            this.ngZone.runOutsideAngular(() => {
                const items = this.items.toArray();
                (isReverse ? _.reduceRight : _.reduce)(items, (p, item) => {
                    return p.then(() => {
                        item.checkInViewPort();
                        return Promise.resolve();
                    });
                }, Promise.resolve());
            });
        }, 200);
    }
    get nativeElement() { return this.elementRef.nativeElement; }
    get clientHeight() { return this.nativeElement.clientHeight; }
    get clientWidth() { return this.nativeElement.clientWidth; }
    get scrollHeight() { return this.nativeElement.scrollHeight; }
    get scrollWidth() { return this.nativeElement.scrollWidth; }
    get scrollTop() { return this.nativeElement.scrollTop; }
    get scrollLeft() { return this.nativeElement.scrollLeft; }
    triggerScroll() {
        const scrollTop = Math.abs(this.elementRef.nativeElement.scrollTop);
        const scrollLeft = Math.abs(this.elementRef.nativeElement.scrollLeft);
        this._loadItemsThrottle.cancel();
        this._loadItemsThrottle(scrollTop < this._lastScrollTop || scrollLeft < this._lastScrollLeft);
        this._lastScrollTop = scrollTop;
        this._lastScrollLeft = scrollLeft;
    }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        // Element for which to observe height and width
        this._resizeObserver.observe((this.container || this).elementRef.nativeElement);
        // Load items
        this.items
            .changes
            .pipe(startWith(this.items), untilCmpDestroyed(this))
            .subscribe(() => {
            this._loadItemsThrottle.cancel();
            this._loadItemsThrottle();
        });
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
    reset() {
        setTimeout(() => this.nativeElement.scrollTo(0, 0));
    }
    /**
     * @param {number} scrollLeft
     * @param {number} scrollTop
     * @param {number} duration
     * @return {void}
     */
    scrollTo(scrollLeft, scrollTop, duration = 0) {
        duration
            ? this._animateScrollTo(scrollLeft, scrollTop, duration, this.nativeElement)
            : this.nativeElement.scrollTo(scrollLeft, scrollTop);
    }
    /**
     * @param {number} duration
     * @return {void}
     */
    scrollToLeft(duration = 0) {
        this.scrollTo(0, undefined, duration);
    }
    /**
     * @param {number} duration
     * @return {void}
     */
    scrollToRight(duration = 0) {
        this.scrollTo(this.scrollWidth + this.clientWidth, undefined, duration);
    }
    /**
     * @param {number} duration
     * @return {void}
     */
    scrollToTop(duration = 0) {
        this.scrollTo(undefined, 0, duration);
    }
    /**
     * @param {number} duration
     * @return {void}
     */
    scrollToBottom(duration = 0) {
        this.scrollTo(undefined, this.scrollHeight + this.clientHeight, duration);
    }
    /**
     * @param {number} scrollLeft
     * @param {number} scrollTop
     * @param {number} duration
     * @param {Element} element
     * @return {void}
     */
    _animateScrollTo(scrollLeft, scrollTop, duration = 0, element = document.scrollingElement) {
        if (element.scrollLeft !== scrollLeft) {
            const cosXParameter = (element.scrollLeft - scrollLeft) / 2;
            let scrollXCount = 0;
            let oldTimestampX;
            // @ts-ignore
            function stepX(newTimestamp) {
                if (oldTimestampX !== undefined) {
                    // If duration is 0 scrollCount will be Infinity
                    scrollXCount += Math.PI * (newTimestamp - oldTimestampX) / duration;
                    if (scrollXCount >= Math.PI)
                        return element.scrollLeft = scrollLeft;
                    element.scrollLeft = cosXParameter + scrollLeft + cosXParameter * Math.cos(scrollXCount);
                }
                oldTimestampX = newTimestamp;
                window.requestAnimationFrame(stepX);
            }
            window.requestAnimationFrame(stepX);
        }
        if (element.scrollTop !== scrollTop) {
            const cosYParameter = (element.scrollTop - scrollTop) / 2;
            let scrollYCount = 0;
            let oldTimestampY;
            // @ts-ignore
            function stepY(newTimestamp) {
                if (oldTimestampY !== undefined) {
                    // If duration is 0 scrollCount will be Infinity
                    scrollYCount += Math.PI * (newTimestamp - oldTimestampY) / duration;
                    if (scrollYCount >= Math.PI)
                        return element.scrollTop = scrollTop;
                    element.scrollTop = cosYParameter + scrollTop + cosYParameter * Math.cos(scrollYCount);
                }
                oldTimestampY = newTimestamp;
                window.requestAnimationFrame(stepY);
            }
            window.requestAnimationFrame(stepY);
        }
    }
}
NgcScrollBar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcScrollBar, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NgcScrollBar.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcScrollBar, inputs: { suppress: "suppress", suppressScrollX: "suppressScrollX", suppressScrollY: "suppressScrollY", mode: "mode", suppressMode: "suppressMode" }, outputs: { viewPortChanged: "viewPortChanged" }, host: { listeners: { "scroll": "triggerScroll()" } }, queries: [{ propertyName: "container", first: true, predicate: NgcScrollBarViewPortDirective, descendants: true }, { propertyName: "items", predicate: NgcScrollBarViewPortItemDirective, descendants: true }], ngImport: i0 });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcScrollBar.prototype, "suppress", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcScrollBar.prototype, "suppressScrollX", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcScrollBar.prototype, "suppressScrollY", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcScrollBar.prototype, "mode", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcScrollBar.prototype, "suppressMode", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcScrollBar, decorators: [{
            type: Directive
        }], propDecorators: { container: [{
                type: ContentChild,
                args: [NgcScrollBarViewPortDirective]
            }], items: [{
                type: ContentChildren,
                args: [NgcScrollBarViewPortItemDirective, { descendants: true }]
            }], suppress: [{
                type: Input
            }], suppressScrollX: [{
                type: Input
            }], suppressScrollY: [{
                type: Input
            }], mode: [{
                type: Input
            }], suppressMode: [{
                type: Input
            }], viewPortChanged: [{
                type: Output
            }], triggerScroll: [{
                type: HostListener,
                args: ['scroll']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXNjcm9sbC1iYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1zY3JvbGwtYmFyL25nYy1zY3JvbGwtYmFyL25nYy1zY3JvbGwtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ0csWUFBWSxFQUMvQixlQUFlLEVBQUUsU0FBUyxFQUNyQyxZQUFZLEVBQVUsU0FBUyxFQUMvQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLGNBQWMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDOztBQU14SCxNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQVVpQyxTQUFJLEdBQXNCLFNBQVMsQ0FBQztRQUNwQyxpQkFBWSxHQUE4QixTQUFTLENBQUM7UUFFbkUsb0JBQWUsR0FDN0IsSUFBSSxZQUFZLEVBQWlDLENBQUM7UUFRN0Msb0JBQWUsR0FBbUIsSUFBSSxjQUFjLENBQUUsR0FBRyxFQUFFO1lBQ2xFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUM7UUFDN0MsQ0FBQyxDQUFFLENBQUM7UUFDSSx1QkFBa0IsR0FB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QUEvQyxLQUFLO2dCQUMwQixJQUFJO3NCQUFuQyxLQUFLO2dCQUMwQixZQUFZO3NCQUEzQyxLQUFLO2dCQUVXLGVBQWU7c0JBQS9CLE1BQU07Z0JBd0NBLGFBQWE7c0JBRG5CLFlBQVk7dUJBQUUsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcblx0RWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLFxuXHRPbkRlc3Ryb3ksIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LFxuXHRIb3N0TGlzdGVuZXIsIE5nWm9uZSwgRGlyZWN0aXZlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBDb2VyY2VCb29sZWFuLCBEZWZhdWx0VmFsdWUsIHVudGlsQ21wRGVzdHJveWVkIH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgTmdjU2Nyb2xsQmFyVmlld1BvcnREaXJlY3RpdmUgfSBmcm9tICcuLi9uZ2Mtc2Nyb2xsLWJhci12aWV3LXBvcnQvbmdjLXNjcm9sbC1iYXItdmlldy1wb3J0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXJWaWV3UG9ydEl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuLi9uZ2Mtc2Nyb2xsLWJhci12aWV3LXBvcnQvbmdjLXNjcm9sbC1iYXItdmlldy1wb3J0LWl0ZW0uZGlyZWN0aXZlJztcblxuZXhwb3J0IHR5cGUgSU5nY1Njcm9sbEJhck1vZGUgPSAnYXV0bycgfCAnb3ZlcmxheSc7XG5leHBvcnQgdHlwZSBJTmdjU2Nyb2xsQmFyU3VwcHJlc3NNb2RlID0gJ3Zpc2libGUnIHwgJ2hpZGRlbic7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIE5nY1Njcm9sbEJhciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cblx0QENvbnRlbnRDaGlsZCggTmdjU2Nyb2xsQmFyVmlld1BvcnREaXJlY3RpdmUgKSBwdWJsaWMgY29udGFpbmVyOiBOZ2NTY3JvbGxCYXJWaWV3UG9ydERpcmVjdGl2ZTtcblx0QENvbnRlbnRDaGlsZHJlbiggTmdjU2Nyb2xsQmFyVmlld1BvcnRJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0gKVxuXHRwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxOZ2NTY3JvbGxCYXJWaWV3UG9ydEl0ZW1EaXJlY3RpdmU+O1xuXG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHN1cHByZXNzOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBzdXBwcmVzc1Njcm9sbFg6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHN1cHByZXNzU2Nyb2xsWTogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBtb2RlOiBJTmdjU2Nyb2xsQmFyTW9kZSA9ICdvdmVybGF5Jztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBzdXBwcmVzc01vZGU6IElOZ2NTY3JvbGxCYXJTdXBwcmVzc01vZGUgPSAndmlzaWJsZSc7XG5cblx0QE91dHB1dCgpIHB1YmxpYyB2aWV3UG9ydENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxOZ2NTY3JvbGxCYXJWaWV3UG9ydERpcmVjdGl2ZT5cblx0XHQ9IG5ldyBFdmVudEVtaXR0ZXI8TmdjU2Nyb2xsQmFyVmlld1BvcnREaXJlY3RpdmU+KCk7XG5cblx0cHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cblx0cHJvdGVjdGVkIG5nWm9uZTogTmdab25lO1xuXG5cdHByaXZhdGUgX2xhc3RTY3JvbGxUb3A6IG51bWJlcjtcblx0cHJpdmF0ZSBfbGFzdFNjcm9sbExlZnQ6IG51bWJlcjtcblx0cHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCAoKSA9PiB7XG5cdFx0dGhpcy5fbG9hZEl0ZW1zVGhyb3R0bGUuY2FuY2VsKCk7XG5cdFx0dGhpcy5fbG9hZEl0ZW1zVGhyb3R0bGUoKTtcblx0XHR0aGlzLnZpZXdQb3J0Q2hhbmdlZC5lbWl0KCB0aGlzLmNvbnRhaW5lciApO1xuXHR9ICk7XG5cdHByaXZhdGUgX2xvYWRJdGVtc1Rocm90dGxlOiBSZXR1cm5UeXBlPHR5cGVvZiBfLnRocm90dGxlPiA9IF8udGhyb3R0bGUoICggaXNSZXZlcnNlPzogYm9vbGVhbiApID0+IHtcblx0XHR0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhciggKCkgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbXM6IE5nY1Njcm9sbEJhclZpZXdQb3J0SXRlbURpcmVjdGl2ZVtdID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XG5cblx0XHRcdCggaXNSZXZlcnNlID8gXy5yZWR1Y2VSaWdodCA6IF8ucmVkdWNlICkoXG5cdFx0XHRcdGl0ZW1zLFxuXHRcdFx0XHQoIHA6IFByb21pc2U8dm9pZD4sIGl0ZW06IE5nY1Njcm9sbEJhclZpZXdQb3J0SXRlbURpcmVjdGl2ZSApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcC50aGVuKCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpdGVtLmNoZWNrSW5WaWV3UG9ydCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9LCAyMDAgKTtcblxuXHRnZXQgbmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7IHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDsgfVxuXHRnZXQgY2xpZW50SGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cdGdldCBjbGllbnRXaWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cdGdldCBzY3JvbGxIZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7IH1cblx0Z2V0IHNjcm9sbFdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGg7IH1cblx0Z2V0IHNjcm9sbFRvcCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcDsgfVxuXHRnZXQgc2Nyb2xsTGVmdCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuXHRASG9zdExpc3RlbmVyKCAnc2Nyb2xsJyApXG5cdHB1YmxpYyB0cmlnZ2VyU2Nyb2xsKCkge1xuXHRcdGNvbnN0IHNjcm9sbFRvcDogbnVtYmVyID0gTWF0aC5hYnMoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCApO1xuXHRcdGNvbnN0IHNjcm9sbExlZnQ6IG51bWJlciA9IE1hdGguYWJzKCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICk7XG5cblx0XHR0aGlzLl9sb2FkSXRlbXNUaHJvdHRsZS5jYW5jZWwoKTtcblx0XHR0aGlzLl9sb2FkSXRlbXNUaHJvdHRsZSggc2Nyb2xsVG9wIDwgdGhpcy5fbGFzdFNjcm9sbFRvcCB8fCBzY3JvbGxMZWZ0IDwgdGhpcy5fbGFzdFNjcm9sbExlZnQgKTtcblxuXHRcdHRoaXMuX2xhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdFx0dGhpcy5fbGFzdFNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdC8vIEVsZW1lbnQgZm9yIHdoaWNoIHRvIG9ic2VydmUgaGVpZ2h0IGFuZCB3aWR0aFxuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUoICggdGhpcy5jb250YWluZXIgfHwgdGhpcyApLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXG5cdFx0Ly8gTG9hZCBpdGVtc1xuXHRcdHRoaXMuaXRlbXNcblx0XHQuY2hhbmdlc1xuXHRcdC5waXBlKFxuXHRcdFx0c3RhcnRXaXRoKCB0aGlzLml0ZW1zICksXG5cdFx0XHR1bnRpbENtcERlc3Ryb3llZCh0aGlzKSBhcyBhbnlcblx0XHQpXG5cdFx0LnN1YnNjcmliZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5fbG9hZEl0ZW1zVGhyb3R0bGUuY2FuY2VsKCk7XG5cdFx0XHR0aGlzLl9sb2FkSXRlbXNUaHJvdHRsZSgpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLl9sb2FkSXRlbXNUaHJvdHRsZS5jYW5jZWwoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHJlc2V0KCkge1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHRoaXMubmF0aXZlRWxlbWVudC5zY3JvbGxUbyggMCwgMCApICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbExlZnRcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFRvcFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzY3JvbGxUbyggc2Nyb2xsTGVmdDogbnVtYmVyLCBzY3JvbGxUb3A6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDAgKSB7XG5cdFx0ZHVyYXRpb25cblx0XHRcdD8gdGhpcy5fYW5pbWF0ZVNjcm9sbFRvKCBzY3JvbGxMZWZ0LCBzY3JvbGxUb3AsIGR1cmF0aW9uLCB0aGlzLm5hdGl2ZUVsZW1lbnQgKVxuXHRcdFx0OiB0aGlzLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oIHNjcm9sbExlZnQsIHNjcm9sbFRvcCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNjcm9sbFRvTGVmdCggZHVyYXRpb246IG51bWJlciA9IDAgKSB7XG5cdFx0dGhpcy5zY3JvbGxUbyggMCwgdW5kZWZpbmVkLCBkdXJhdGlvbiApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNjcm9sbFRvUmlnaHQoIGR1cmF0aW9uOiBudW1iZXIgPSAwICkge1xuXHRcdHRoaXMuc2Nyb2xsVG8oIHRoaXMuc2Nyb2xsV2lkdGggKyB0aGlzLmNsaWVudFdpZHRoLCB1bmRlZmluZWQsIGR1cmF0aW9uICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2Nyb2xsVG9Ub3AoIGR1cmF0aW9uOiBudW1iZXIgPSAwICkge1xuXHRcdHRoaXMuc2Nyb2xsVG8oIHVuZGVmaW5lZCwgMCwgZHVyYXRpb24gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzY3JvbGxUb0JvdHRvbSggZHVyYXRpb246IG51bWJlciA9IDAgKSB7XG5cdFx0dGhpcy5zY3JvbGxUbyggdW5kZWZpbmVkLCB0aGlzLnNjcm9sbEhlaWdodCArIHRoaXMuY2xpZW50SGVpZ2h0LCBkdXJhdGlvbiApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxMZWZ0XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxUb3Bcblx0ICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfYW5pbWF0ZVNjcm9sbFRvKFxuXHRcdHNjcm9sbExlZnQ6IG51bWJlciwgc2Nyb2xsVG9wOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAwLFxuXHRcdGVsZW1lbnQ6IEVsZW1lbnQgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50XG5cdCkge1xuXHRcdGlmICggZWxlbWVudC5zY3JvbGxMZWZ0ICE9PSBzY3JvbGxMZWZ0ICkge1xuXHRcdFx0Y29uc3QgY29zWFBhcmFtZXRlcjogbnVtYmVyID0gKCBlbGVtZW50LnNjcm9sbExlZnQgLSBzY3JvbGxMZWZ0ICkgLyAyO1xuXHRcdFx0bGV0IHNjcm9sbFhDb3VudDogbnVtYmVyID0gMDtcblx0XHRcdGxldCBvbGRUaW1lc3RhbXBYOiBudW1iZXI7XG5cblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdGZ1bmN0aW9uIHN0ZXBYKCBuZXdUaW1lc3RhbXA6IG51bWJlciApIHtcblx0XHRcdFx0aWYgKCBvbGRUaW1lc3RhbXBYICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0Ly8gSWYgZHVyYXRpb24gaXMgMCBzY3JvbGxDb3VudCB3aWxsIGJlIEluZmluaXR5XG5cdFx0XHRcdFx0c2Nyb2xsWENvdW50ICs9IE1hdGguUEkgKiAoIG5ld1RpbWVzdGFtcCAtIG9sZFRpbWVzdGFtcFggKSAvIGR1cmF0aW9uO1xuXG5cdFx0XHRcdFx0aWYgKCBzY3JvbGxYQ291bnQgPj0gTWF0aC5QSSApIHJldHVybiBlbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuXG5cdFx0XHRcdFx0ZWxlbWVudC5zY3JvbGxMZWZ0ID0gY29zWFBhcmFtZXRlciArIHNjcm9sbExlZnQgKyBjb3NYUGFyYW1ldGVyICogTWF0aC5jb3MoIHNjcm9sbFhDb3VudCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0b2xkVGltZXN0YW1wWCA9IG5ld1RpbWVzdGFtcDtcblxuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzdGVwWCApO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzdGVwWCApO1xuXHRcdH1cblxuXHRcdGlmICggZWxlbWVudC5zY3JvbGxUb3AgIT09IHNjcm9sbFRvcCApIHtcblx0XHRcdGNvbnN0IGNvc1lQYXJhbWV0ZXI6IG51bWJlciA9ICggZWxlbWVudC5zY3JvbGxUb3AgLSBzY3JvbGxUb3AgKSAvIDI7XG5cdFx0XHRsZXQgc2Nyb2xsWUNvdW50OiBudW1iZXIgPSAwO1xuXHRcdFx0bGV0IG9sZFRpbWVzdGFtcFk6IG51bWJlcjtcblxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0ZnVuY3Rpb24gc3RlcFkoIG5ld1RpbWVzdGFtcDogbnVtYmVyICkge1xuXHRcdFx0XHRpZiAoIG9sZFRpbWVzdGFtcFkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHQvLyBJZiBkdXJhdGlvbiBpcyAwIHNjcm9sbENvdW50IHdpbGwgYmUgSW5maW5pdHlcblx0XHRcdFx0XHRzY3JvbGxZQ291bnQgKz0gTWF0aC5QSSAqICggbmV3VGltZXN0YW1wIC0gb2xkVGltZXN0YW1wWSApIC8gZHVyYXRpb247XG5cblx0XHRcdFx0XHRpZiAoIHNjcm9sbFlDb3VudCA+PSBNYXRoLlBJICkgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSBjb3NZUGFyYW1ldGVyICsgc2Nyb2xsVG9wICsgY29zWVBhcmFtZXRlciAqIE1hdGguY29zKCBzY3JvbGxZQ291bnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG9sZFRpbWVzdGFtcFkgPSBuZXdUaW1lc3RhbXA7XG5cblx0XHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggc3RlcFkgKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggc3RlcFkgKTtcblx0XHR9XG5cdH1cblxufVxuIl19