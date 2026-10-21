import { __decorate, __metadata } from "tslib";
import { Directive, QueryList, ElementRef, Input, ChangeDetectorRef, ContentChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, switchMap, skipWhile, startWith, map } from 'rxjs/operators';
import _ from 'lodash';
import { DefaultValue, CoerceNumber, Unsubscriber, untilCmpDestroyed } from '@core';
import * as i0 from "@angular/core";
const UNAVAILABLE_SIZE = 70;
let NgcBlockTruncateDirective = class NgcBlockTruncateDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_elementRef, _cdRef) {
        this._elementRef = _elementRef;
        this._cdRef = _cdRef;
        this.limit = 1;
        this.maximum = 10;
        this.maxDisplay = 0;
        this._markAsDoneDebounce = _.debounce(this.markAsDone.bind(this));
    }
    get moreDisplay() {
        return this.length - this.maxDisplay;
    }
    get isFixedLimit() {
        return this.limit >= 1;
    }
    get isTruncated() {
        return this.maxDisplay > 0 && this.moreDisplay > 0;
    }
    get ele() {
        return this._elementRef.nativeElement;
    }
    get parentEle() {
        return this.parent || this.ele.parentElement;
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.length)
            return;
        changes.length.firstChange
            ? this.setMaxDisplay(this.limit || 1)
            : this._render$?.next(this.parentEle?.clientWidth);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        if (this.isFixedLimit)
            return;
        this._render$ = new Subject();
        this._render$
            .pipe(tap(() => this._isRendering = true), tap(() => this.ele.style.opacity = '0'), tap(() => this.setMaxDisplay(this.length)), switchMap((parentWidth) => this.blocks.changes.pipe(startWith(this.blocks), skipWhile((blocks) => blocks.length !== this.maxDisplay), map(() => parentWidth))), untilCmpDestroyed(this))
            .subscribe((parentWidth) => {
            let maxDisplay = 1;
            if (parentWidth && this.length > 1) {
                let offsetWidth = 0;
                let i = 1;
                for (const block of this.blocks) {
                    const element = block.nativeElement;
                    const { width } = element.getBoundingClientRect();
                    const { marginLeft, marginRight } = getComputedStyle(element);
                    offsetWidth += width + parseFloat(marginLeft) + parseFloat(marginRight);
                    if (Math.round(offsetWidth) > parentWidth - UNAVAILABLE_SIZE)
                        break;
                    maxDisplay = i++;
                }
            }
            this.setMaxDisplay(maxDisplay);
            this._markAsDoneDebounce(parentWidth);
        });
        /*
        Read more about the resize observer here: https://developers.google.com/web/updates/2016/10/resizeobserver
        Basicaly, what we do is that we subscribe to size events on the overlay.
        Currently we only get one event, (then we disconnet the resize observer).
        But then we simply calculate if we need to improve the layout.
         */
        this._resizeObserver = new ResizeObserver(_.throttle(() => {
            if (this._isRendering)
                return;
            const parentWidth = this.parentEle.clientWidth;
            if (!parentWidth
                || (parentWidth === this._currentParentWidth
                    && parentWidth >= this.ele.clientWidth)) {
                return;
            }
            this._render$.next(parentWidth);
        }, 200));
        // Element for which to observe height and width
        this._resizeObserver.observe(this.parentEle);
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        this._render$?.complete();
        this._resizeObserver?.disconnect();
    }
    /**
     * @param {number} maxDisplay
     * @return {void}
     */
    setMaxDisplay(maxDisplay) {
        this.maxDisplay = (maxDisplay < this.maximum ? maxDisplay : this.maximum) || this.length;
        this._cdRef.markForCheck();
    }
    /**
     * @param {number} parentWidth
     * @return {void}
     */
    markAsDone(parentWidth) {
        this._isRendering = false;
        this._currentParentWidth = parentWidth;
        this.ele.style.opacity = null;
        this._cdRef.markForCheck();
    }
};
NgcBlockTruncateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBlockTruncateDirective, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcBlockTruncateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcBlockTruncateDirective, selector: "[ngcBlockTruncate]", inputs: { limit: "limit", maximum: "maximum", length: "length", parent: "parent" }, queries: [{ propertyName: "blocks", predicate: ["block"] }], exportAs: ["ngcBlockTruncate"], usesOnChanges: true, ngImport: i0 });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcBlockTruncateDirective.prototype, "limit", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcBlockTruncateDirective.prototype, "maximum", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcBlockTruncateDirective.prototype, "length", void 0);
NgcBlockTruncateDirective = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], NgcBlockTruncateDirective);
export { NgcBlockTruncateDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBlockTruncateDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcBlockTruncate]', exportAs: 'ngcBlockTruncate' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { blocks: [{
                type: ContentChildren,
                args: ['block']
            }], limit: [{
                type: Input
            }], maximum: [{
                type: Input
            }], length: [{
                type: Input
            }], parent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJsb2NrLXRydW5jYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRydW5jYXRlL2Jsb2NrLXRydW5jYXRlL25nYy1ibG9jay10cnVuY2F0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFDaEMsS0FBSyxFQUFpQixpQkFBaUIsRUFFdkMsZUFBZSxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNOLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUN6QixTQUFTLEVBQUUsR0FBRyxFQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLE9BQU8sQ0FBQzs7QUFFcEYsTUFBTSxnQkFBZ0IsR0FBVyxFQUFFLENBQUM7QUFJN0IsSUFBTSx5QkFBeUIsR0FBL0IsTUFBTSx5QkFBeUI7SUFxQ3JDOzs7O09BSUc7SUFDSCxZQUFvQixXQUF1QixFQUFVLE1BQXlCO1FBQTFELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUF0QzlCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUk5RCxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBTXRCLHdCQUFtQixHQUFrQyxDQUFDLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFFLENBQUM7SUEyQnRCLENBQUM7SUF6Qm5GLElBQUksV0FB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QUksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUzRixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDTyxVQUFVLENBQUUsV0FBbUI7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7c0hBeEpXLHlCQUF5QjswR0FBekIseUJBQXlCO0FBSXJDO0lBQVUsWUFBWSxFQUFFO0lBQUUsWUFBWSxFQUFFOzt3REFBMEI7QUFDbEU7SUFBVSxZQUFZLEVBQUU7SUFBRSxZQUFZLEVBQUU7OzBEQUE2QjtBQUNyRTtJQUFVLFlBQVksRUFBRTs7eURBQXVCO0FBTm5DLHlCQUF5QjtJQUZyQyxZQUFZLEVBQUU7cUNBNENtQixVQUFVLEVBQWtCLGlCQUFpQjtHQTFDbEUseUJBQXlCLENBMEpyQztTQTFKWSx5QkFBeUI7MkZBQXpCLHlCQUF5QjtrQkFEckMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7aUlBR3ZDLE1BQU07c0JBQXhDLGVBQWU7dUJBQUUsT0FBTztnQkFFdUIsS0FBSztzQkFBcEQsS0FBSztnQkFDMEMsT0FBTztzQkFBdEQsS0FBSztnQkFDMEIsTUFBTTtzQkFBckMsS0FBSztnQkFDVSxNQUFNO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBRdWVyeUxpc3QsIEVsZW1lbnRSZWYsXG5cdElucHV0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZixcblx0U2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksXG5cdENvbnRlbnRDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG5cdHRhcCwgc3dpdGNoTWFwLCBza2lwV2hpbGUsXG5cdHN0YXJ0V2l0aCwgbWFwXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlTnVtYmVyLCBVbnN1YnNjcmliZXIsIHVudGlsQ21wRGVzdHJveWVkIH0gZnJvbSAnQGNvcmUnO1xuXG5jb25zdCBVTkFWQUlMQUJMRV9TSVpFOiBudW1iZXIgPSA3MDtcblxuQFVuc3Vic2NyaWJlcigpXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmdjQmxvY2tUcnVuY2F0ZV0nLCBleHBvcnRBczogJ25nY0Jsb2NrVHJ1bmNhdGUnIH0pXG5leHBvcnQgY2xhc3MgTmdjQmxvY2tUcnVuY2F0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuXHRAQ29udGVudENoaWxkcmVuKCAnYmxvY2snICkgcHVibGljIGJsb2NrczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIGxpbWl0OiBudW1iZXIgPSAxO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBtYXhpbXVtOiBudW1iZXIgPSAxMDtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBsZW5ndGg6IG51bWJlcjtcblx0QElucHV0KCkgcHVibGljIHBhcmVudDogSFRNTEVsZW1lbnQ7XG5cblx0cHVibGljIG1heERpc3BsYXk6IG51bWJlciA9IDA7XG5cblx0cHJpdmF0ZSBfY3VycmVudFBhcmVudFdpZHRoOiBudW1iZXI7XG5cdHByaXZhdGUgX2lzUmVuZGVyaW5nOiBib29sZWFuO1xuXHRwcml2YXRlIF9yZW5kZXIkOiBTdWJqZWN0PG51bWJlcj47XG5cdHByaXZhdGUgX3Jlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlcjtcblx0cHJpdmF0ZSBfbWFya0FzRG9uZURlYm91bmNlOiBSZXR1cm5UeXBlPHR5cGVvZiBfLmRlYm91bmNlPiA9IF8uZGVib3VuY2UoIHRoaXMubWFya0FzRG9uZS5iaW5kKCB0aGlzICkgKTtcblxuXHRnZXQgbW9yZURpc3BsYXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5sZW5ndGggLSB0aGlzLm1heERpc3BsYXk7XG5cdH1cblxuXHRnZXQgaXNGaXhlZExpbWl0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxpbWl0ID49IDE7XG5cdH1cblxuXHRnZXQgaXNUcnVuY2F0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubWF4RGlzcGxheSA+IDAgJiYgdGhpcy5tb3JlRGlzcGxheSA+IDA7XG5cdH1cblxuXHRnZXQgZWxlKCk6IEhUTUxFbGVtZW50IHtcblx0XHRyZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXHR9XG5cblx0Z2V0IHBhcmVudEVsZSgpOiBIVE1MRWxlbWVudCB7XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50IHx8IHRoaXMuZWxlLnBhcmVudEVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gX2NkUmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoICFjaGFuZ2VzLmxlbmd0aCApIHJldHVybjtcblxuXHRcdGNoYW5nZXMubGVuZ3RoLmZpcnN0Q2hhbmdlXG5cdFx0XHQ/IHRoaXMuc2V0TWF4RGlzcGxheSggdGhpcy5saW1pdCB8fCAxIClcblx0XHRcdDogdGhpcy5fcmVuZGVyJD8ubmV4dCggdGhpcy5wYXJlbnRFbGU/LmNsaWVudFdpZHRoICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKCB0aGlzLmlzRml4ZWRMaW1pdCApIHJldHVybjtcblxuXHRcdHRoaXMuX3JlbmRlciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cblx0XHR0aGlzLl9yZW5kZXIkXG5cdFx0LnBpcGUoXG5cdFx0XHR0YXAoICgpID0+IHRoaXMuX2lzUmVuZGVyaW5nID0gdHJ1ZSApLFxuXHRcdFx0dGFwKCAoKSA9PiB0aGlzLmVsZS5zdHlsZS5vcGFjaXR5ID0gJzAnICksXG5cdFx0XHR0YXAoICgpID0+IHRoaXMuc2V0TWF4RGlzcGxheSggdGhpcy5sZW5ndGggKSApLFxuXHRcdFx0c3dpdGNoTWFwKCAoIHBhcmVudFdpZHRoOiBudW1iZXIgKSA9PiB0aGlzLmJsb2Nrcy5jaGFuZ2VzLnBpcGUoXG5cdFx0XHRcdHN0YXJ0V2l0aCggdGhpcy5ibG9ja3MgKSxcblx0XHRcdFx0c2tpcFdoaWxlKCAoIGJsb2NrczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+ICkgPT4gYmxvY2tzLmxlbmd0aCAhPT0gdGhpcy5tYXhEaXNwbGF5ICksXG5cdFx0XHRcdG1hcCggKCkgPT4gcGFyZW50V2lkdGggKVxuXHRcdFx0KSApLFxuXHRcdFx0dW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKVxuXHRcdClcblx0XHQuc3Vic2NyaWJlKCAoIHBhcmVudFdpZHRoOiBudW1iZXIgKSA9PiB7XG5cdFx0XHRsZXQgbWF4RGlzcGxheTogbnVtYmVyID0gMTtcblxuXHRcdFx0aWYgKCBwYXJlbnRXaWR0aCAmJiB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHRcdGxldCBvZmZzZXRXaWR0aDogbnVtYmVyID0gMDtcblx0XHRcdFx0bGV0IGk6IG51bWJlciA9IDE7XG5cblx0XHRcdFx0Zm9yICggY29uc3QgYmxvY2sgb2YgdGhpcy5ibG9ja3MgKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBibG9jay5uYXRpdmVFbGVtZW50O1xuXHRcdFx0XHRcdGNvbnN0IHsgd2lkdGggfTogRE9NUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0Y29uc3QgeyBtYXJnaW5MZWZ0LCBtYXJnaW5SaWdodCB9OiBDU1NTdHlsZURlY2xhcmF0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbWVudCApO1xuXG5cdFx0XHRcdFx0b2Zmc2V0V2lkdGggKz0gd2lkdGggKyBwYXJzZUZsb2F0KCBtYXJnaW5MZWZ0ICkgKyBwYXJzZUZsb2F0KCBtYXJnaW5SaWdodCApO1xuXG5cdFx0XHRcdFx0aWYgKCBNYXRoLnJvdW5kKCBvZmZzZXRXaWR0aCApID4gcGFyZW50V2lkdGggLSBVTkFWQUlMQUJMRV9TSVpFICkgYnJlYWs7XG5cblx0XHRcdFx0XHRtYXhEaXNwbGF5ID0gaSsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0TWF4RGlzcGxheSggbWF4RGlzcGxheSApO1xuXHRcdFx0dGhpcy5fbWFya0FzRG9uZURlYm91bmNlKCBwYXJlbnRXaWR0aCApO1xuXHRcdH0gKTtcblxuXHRcdC8qXG5cdFx0UmVhZCBtb3JlIGFib3V0IHRoZSByZXNpemUgb2JzZXJ2ZXIgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNi8xMC9yZXNpemVvYnNlcnZlclxuXHRcdEJhc2ljYWx5LCB3aGF0IHdlIGRvIGlzIHRoYXQgd2Ugc3Vic2NyaWJlIHRvIHNpemUgZXZlbnRzIG9uIHRoZSBvdmVybGF5LlxuXHRcdEN1cnJlbnRseSB3ZSBvbmx5IGdldCBvbmUgZXZlbnQsICh0aGVuIHdlIGRpc2Nvbm5ldCB0aGUgcmVzaXplIG9ic2VydmVyKS5cblx0XHRCdXQgdGhlbiB3ZSBzaW1wbHkgY2FsY3VsYXRlIGlmIHdlIG5lZWQgdG8gaW1wcm92ZSB0aGUgbGF5b3V0LlxuXHRcdCAqL1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCBfLnRocm90dGxlKCAoKSA9PiB7XG5cdFx0XHRpZiAoIHRoaXMuX2lzUmVuZGVyaW5nICkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBwYXJlbnRXaWR0aDogbnVtYmVyID0gdGhpcy5wYXJlbnRFbGUuY2xpZW50V2lkdGg7XG5cblx0XHRcdGlmICggIXBhcmVudFdpZHRoXG5cdFx0XHRcdHx8ICggcGFyZW50V2lkdGggPT09IHRoaXMuX2N1cnJlbnRQYXJlbnRXaWR0aFxuXHRcdFx0XHRcdCYmIHBhcmVudFdpZHRoID49IHRoaXMuZWxlLmNsaWVudFdpZHRoICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fcmVuZGVyJC5uZXh0KCBwYXJlbnRXaWR0aCApO1xuXHRcdH0sIDIwMCApICk7XG5cblx0XHQvLyBFbGVtZW50IGZvciB3aGljaCB0byBvYnNlcnZlIGhlaWdodCBhbmQgd2lkdGhcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlci5vYnNlcnZlKCB0aGlzLnBhcmVudEVsZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5fcmVuZGVyJD8uY29tcGxldGUoKTtcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhEaXNwbGF5XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwcm90ZWN0ZWQgc2V0TWF4RGlzcGxheSggbWF4RGlzcGxheTogbnVtYmVyICkge1xuXHRcdHRoaXMubWF4RGlzcGxheSA9ICggbWF4RGlzcGxheSA8IHRoaXMubWF4aW11bSA/IG1heERpc3BsYXkgOiB0aGlzLm1heGltdW0gKSB8fCB0aGlzLmxlbmd0aDtcblxuXHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJlbnRXaWR0aFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJvdGVjdGVkIG1hcmtBc0RvbmUoIHBhcmVudFdpZHRoOiBudW1iZXIgKSB7XG5cdFx0dGhpcy5faXNSZW5kZXJpbmcgPSBmYWxzZTtcblx0XHR0aGlzLl9jdXJyZW50UGFyZW50V2lkdGggPSBwYXJlbnRXaWR0aDtcblx0XHR0aGlzLmVsZS5zdHlsZS5vcGFjaXR5ID0gbnVsbDtcblxuXHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHR9XG5cbn1cbiJdfQ==