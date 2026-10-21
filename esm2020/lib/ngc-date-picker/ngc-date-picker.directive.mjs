import { __decorate, __metadata } from "tslib";
import { ElementRef, HostListener, Input, Directive, EventEmitter, Output, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';
import { Unsubscriber, DefaultValue, CoerceBoolean, CoerceNumber, CoerceCssPixel, Memoize, untilCmpDestroyed } from '@core';
import { NgcDatePickerComponent } from './ngc-date-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
let NgcDatePickerDirective = class NgcDatePickerDirective {
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {ViewContainerRef} _vcRef
     */
    constructor(_overlay, _elementRef, _cdRef, _vcRef) {
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._cdRef = _cdRef;
        this._vcRef = _vcRef;
        this.panelClass = 'cdk-overlay-highest-pane';
        this.backdropClass = [
            'cdk-overlay-transparent-backdrop',
            'cdk-overlay-highest-backdrop',
        ];
        this.clearable = true;
        this.hasBackdrop = true;
        this.closeOnClickOutside = true;
        this.direction = 'ltr';
        this.position = 'below';
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.picked = new EventEmitter();
        this.backdropPress = new EventEmitter();
    }
    triggerClick(event) {
        if (this.disabled)
            return;
        event.stopPropagation();
        event.preventDefault();
        this.open(event);
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!this._instance)
            return;
        if (changes.pickedDate) {
            this._instance.pickedDate = this.pickedDate;
            this._instance.markAsPickedDateChanges();
        }
        if (changes.dateRange)
            this._instance.dateRange = this.dateRange;
        if (changes.dateOnly)
            this._instance.dateOnly = this.dateOnly;
        if (changes.showTime)
            this._instance.showTime = this.showTime;
        if (changes.clearable)
            this._instance.clearable = this.clearable;
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
     * @param {NgcIDatePickerPickedEvent} event
     * @return {void}
     */
    onDatePicked(event) {
        this.pickedDate = this.dateRange ? event.range : event.date;
        this.picked.emit(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    open(event) {
        // Create overlay ref
        this._overlayRef = this._overlayRef || this._createOverlayRef();
        if (this._isPositionStrategyUpdated) {
            this._isPositionStrategyUpdated = false;
            this.updatePosition();
        }
        if (this._overlayRef.hasAttached())
            return;
        this.isOpened = true;
        // Create date picker portal
        this._portal = this._portal || new ComponentPortal(NgcDatePickerComponent, this._vcRef);
        // Attach date picker to overlay
        const instance = this._overlayRef.attach(this._portal).instance;
        instance.close = this.close.bind(this);
        instance.onPicked = this.onDatePicked.bind(this);
        instance.pickedDate = this.pickedDate;
        instance.minDate = this.minDate;
        instance.maxDate = this.maxDate;
        instance.maxDateRange = this.maxDateRange;
        instance.dateRange = this.dateRange;
        instance.dateOnly = this.dateOnly;
        instance.showTime = this.showTime;
        instance.clearable = this.clearable;
        // Mark as picked date changes
        instance.markAsPickedDateChanges();
        this._instance = instance;
        // Emit on opened event
        this._cdRef.markForCheck();
        this.opened.emit(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    close(event) {
        this.isOpened = false;
        this._overlayRef?.detach();
        this._cdRef.markForCheck();
        this.closed.emit(event);
    }
    /**
     * @param {PositionStrategy=} positionStrategy
     * @return {void}
     */
    updatePosition(positionStrategy = this._createPositionStrategy()) {
        this._overlayRef?.updatePositionStrategy(positionStrategy);
    }
    /**
     * @return {OverlayRef}
     */
    _createOverlayRef() {
        const config = new OverlayConfig({
            panelClass: this.panelClass,
            backdropClass: this.backdropClass,
            hasBackdrop: this.hasBackdrop,
            width: this.width,
            minWidth: parseFloat(this.minWidth) < window.innerWidth ? this.minWidth : undefined,
            maxWidth: this.maxWidth,
            height: this.height,
            minHeight: parseFloat(this.minHeight) < window.innerHeight ? this.minHeight : undefined,
            maxHeight: this.maxHeight,
            scrollStrategy: this._overlay.scrollStrategies.reposition({ autoClose: true, scrollThrottle: 1000 }),
            positionStrategy: this._createPositionStrategy(),
        });
        const overlayRef = this._overlay.create(config);
        // Set overlay direction
        overlayRef.setDirection(this.direction);
        // Catch keyboard events on overlay
        overlayRef.keydownEvents()
            .pipe(untilCmpDestroyed(this))
            .subscribe((event) => {
            if (event.key !== 'Escape')
                return;
            event.stopPropagation();
            event.preventDefault();
            this.close(event);
        });
        // On backdrop click
        overlayRef.backdropClick()
            .pipe(untilCmpDestroyed(this))
            .subscribe((event) => {
            this.closeOnClickOutside && this.close(event);
            this.backdropPress.emit(event);
        });
        /*
        Read more about the resize observer here: https://developers.google.com/web/updates/2016/10/resizeobserver
        Basicaly, what we do is that we subscribe to size events on the overlay.
        Currently we only get one event, (then we disconnet the resize observer).
        But then we simply calculate if we need to improve the layout.
         */
        this._resizeObserver?.disconnect();
        this._resizeObserver = new ResizeObserver((entries) => {
            const viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            for (const entry of entries) {
                // We get the width & height of the element from the the contentRect, provided by the resize observer
                const width = entry.contentRect.width;
                const height = entry.contentRect.height;
                const domReact = entry.target.getBoundingClientRect();
                const x = domReact.left;
                const y = domReact.top;
                const offsetPlusWidth = x + width;
                const offsetPlusHeight = y + height;
                const pixelsOverflowX = offsetPlusWidth - viewPortWidth;
                const pixelsOverflowY = offsetPlusHeight - viewPortHeight;
                // If x is negative, we are off-screen to the left.
                // If y is negative, we are off-screen to the top.
                // If pixelsOverflowX is positive, we are off-screen on the right
                // If pixelsOverflowY is positive, we are off-screen on the bottom
                // In either case, we adopt a new strategy.
                if (x < 0 || y < 0 || pixelsOverflowX > 1 || pixelsOverflowY > 1) {
                    this.isOpened && overlayRef.updatePosition();
                    this._isPositionStrategyUpdated = true;
                }
            }
        });
        // Element for which to observe height and width
        this._resizeObserver.observe(overlayRef.overlayElement);
        return overlayRef;
    }
    /**
     * @return {FlexibleConnectedPositionStrategy}
     */
    _createPositionStrategy() {
        const originX = this.originX || 'start';
        let originY = this.originY;
        let originFallbackX = originX;
        let originFallbackY = originY;
        const overlayX = this.overlayX || 'start';
        let overlayY = this.overlayY;
        let overlayFallbackX = overlayX;
        let overlayFallbackY = overlayY;
        const offsetX = +(this.offsetX || 0);
        let offsetY = +(this.offsetY || 0);
        switch (this.position) {
            case 'above':
            case 'below':
                if (!this.originY)
                    originY = this.position === 'above' ? 'top' : 'bottom';
                if (!this.overlayY)
                    overlayY = this.position === 'above' ? 'bottom' : 'top';
                if (_.isNil(this.offsetY))
                    offsetY = this.position === 'above' ? -5 : 5;
                break;
        }
        originFallbackX = this._fallbackX(originX);
        originFallbackY = this._fallbackY(originY);
        overlayFallbackX = this._fallbackX(overlayX);
        overlayFallbackY = this._fallbackY(overlayY);
        return this._overlay
            .position()
            .flexibleConnectedTo(this._elementRef)
            .withFlexibleDimensions(false)
            .withLockedPosition()
            .withPush(true)
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
    _fallbackX(origin) {
        switch (origin) {
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
    _fallbackY(origin) {
        switch (origin) {
            case 'top':
                return 'bottom';
            case 'bottom':
                return 'top';
            default:
                return origin;
        }
    }
};
NgcDatePickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDatePickerDirective, deps: [{ token: i1.Overlay }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcDatePickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcDatePickerDirective, selector: "[ngcDatePicker]", inputs: { panelClass: "panelClass", backdropClass: "backdropClass", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", height: "height", minHeight: "minHeight", maxHeight: "maxHeight", maxDateRange: "maxDateRange", dateRange: "dateRange", dateOnly: "dateOnly", showTime: "showTime", disabled: "disabled", clearable: "clearable", hasBackdrop: "hasBackdrop", closeOnClickOutside: "closeOnClickOutside", offsetX: "offsetX", offsetY: "offsetY", originX: "originX", originY: "originY", overlayX: "overlayX", overlayY: "overlayY", direction: "direction", position: "position", pickedDate: "pickedDate", minDate: "minDate", maxDate: "maxDate" }, outputs: { opened: "opened", closed: "closed", picked: "picked", backdropPress: "backdropPress" }, host: { listeners: { "click": "triggerClick($event)", "contextmenu": "triggerClick($event)", "keydown.space": "triggerClick($event)" } }, exportAs: ["ngcDatePicker"], usesOnChanges: true, ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcDatePickerDirective.prototype, "panelClass", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcDatePickerDirective.prototype, "backdropClass", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDatePickerDirective.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDatePickerDirective.prototype, "minWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDatePickerDirective.prototype, "maxWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDatePickerDirective.prototype, "height", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDatePickerDirective.prototype, "minHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDatePickerDirective.prototype, "maxHeight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDatePickerDirective.prototype, "dateRange", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDatePickerDirective.prototype, "dateOnly", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDatePickerDirective.prototype, "showTime", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDatePickerDirective.prototype, "disabled", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDatePickerDirective.prototype, "clearable", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDatePickerDirective.prototype, "hasBackdrop", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDatePickerDirective.prototype, "closeOnClickOutside", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcDatePickerDirective.prototype, "offsetX", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcDatePickerDirective.prototype, "offsetY", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcDatePickerDirective.prototype, "direction", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcDatePickerDirective.prototype, "position", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcDatePickerDirective.prototype, "_fallbackX", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcDatePickerDirective.prototype, "_fallbackY", null);
NgcDatePickerDirective = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [Overlay,
        ElementRef,
        ChangeDetectorRef,
        ViewContainerRef])
], NgcDatePickerDirective);
export { NgcDatePickerDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDatePickerDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcDatePicker]', exportAs: 'ngcDatePicker' }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { panelClass: [{
                type: Input
            }], backdropClass: [{
                type: Input
            }], width: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], height: [{
                type: Input
            }], minHeight: [{
                type: Input
            }], maxHeight: [{
                type: Input
            }], maxDateRange: [{
                type: Input
            }], dateRange: [{
                type: Input
            }], dateOnly: [{
                type: Input
            }], showTime: [{
                type: Input
            }], disabled: [{
                type: Input
            }], clearable: [{
                type: Input
            }], hasBackdrop: [{
                type: Input
            }], closeOnClickOutside: [{
                type: Input
            }], offsetX: [{
                type: Input
            }], offsetY: [{
                type: Input
            }], originX: [{
                type: Input
            }], originY: [{
                type: Input
            }], overlayX: [{
                type: Input
            }], overlayY: [{
                type: Input
            }], direction: [{
                type: Input
            }], position: [{
                type: Input
            }], pickedDate: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], opened: [{
                type: Output
            }], closed: [{
                type: Output
            }], picked: [{
                type: Output
            }], backdropPress: [{
                type: Output
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }, {
                type: HostListener,
                args: ['contextmenu', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }], _fallbackX: [], _fallbackY: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRhdGUtcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWRhdGUtcGlja2VyL25nYy1kYXRlLXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDL0IsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQy9CLGdCQUFnQixFQUFhLGlCQUFpQixFQUU5QyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ04sT0FBTyxFQUN5QyxhQUFhLEVBRTdELE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sY0FBYyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQ04sWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQ3pDLFlBQVksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUNyQyxpQkFBaUIsRUFDakIsTUFBTSxPQUFPLENBQUM7QUFFZixPQUFPLEVBQUUsc0JBQXNCLEVBQXFELE1BQU0sNkJBQTZCLENBQUM7OztBQUlqSCxJQUFNLHNCQUFzQixHQUE1QixNQUFNLHNCQUFzQjtJQThDbEM7Ozs7OztPQU1HO0lBQ0gsWUFDUyxRQUFpQixFQUNqQixXQUF1QixFQUN2QixNQUF5QixFQUN6QixNQUF3QjtRQUh4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBdkRELGVBQVUsR0FBc0IsMEJBQTBCLENBQUM7UUFDM0Qsa0JBQWEsR0FBc0I7WUFDbEUsa0NBQWtDO1lB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dkIsS0FBSztnQkFDMEIsU0FBUztzQkFBeEMsS0FBSztnQkFDMEIsUUFBUTtzQkFBdkMsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFFVyxNQUFNO3NCQUF0QixNQUFNO2dCQUNVLE1BQU07c0JBQXRCLE1BQU07Z0JBQ1UsTUFBTTtzQkFBdEIsTUFBTTtnQkFDVSxhQUFhO3NCQUE3QixNQUFNO2dCQTJCQSxZQUFZO3NCQUhsQixZQUFZO3VCQUFFLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTs7c0JBQ25DLFlBQVk7dUJBQUUsYUFBYSxFQUFFLENBQUUsUUFBUSxDQUFFOztzQkFDekMsWUFBWTt1QkFBRSxlQUFlLEVBQUUsQ0FBRSxRQUFRLENBQUU7Z0JBbVFwQyxVQUFVLE1BZ0JWLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LFxuXHREaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0LFxuXHRWaWV3Q29udGFpbmVyUmVmLCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmLFxuXHRPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRPdmVybGF5LCBPdmVybGF5UmVmLCBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG5cdEhvcml6b250YWxDb25uZWN0aW9uUG9zLCBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MsIE92ZXJsYXlDb25maWcsXG5cdFBvc2l0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuXHRVbnN1YnNjcmliZXIsIERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbixcblx0Q29lcmNlTnVtYmVyLCBDb2VyY2VDc3NQaXhlbCwgTWVtb2l6ZSxcblx0dW50aWxDbXBEZXN0cm95ZWRcbn0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NEYXRlUGlja2VyQ29tcG9uZW50LCBOZ2NJRGF0ZVBpY2tlclBvc2l0aW9uLCBOZ2NJRGF0ZVBpY2tlclBpY2tlZEV2ZW50IH0gZnJvbSAnLi9uZ2MtZGF0ZS1waWNrZXIuY29tcG9uZW50JztcblxuQFVuc3Vic2NyaWJlcigpXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmdjRGF0ZVBpY2tlcl0nLCBleHBvcnRBczogJ25nY0RhdGVQaWNrZXInIH0pXG5leHBvcnQgY2xhc3MgTmdjRGF0ZVBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdID0gJ2Nkay1vdmVybGF5LWhpZ2hlc3QtcGFuZSc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXG5cdFx0J2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcblx0XHQnY2RrLW92ZXJsYXktaGlnaGVzdC1iYWNrZHJvcCcsXG5cdF07XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWluV2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1heFdpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWF4SGVpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBtYXhEYXRlUmFuZ2U6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGF0ZVJhbmdlOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkYXRlT25seTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgc2hvd1RpbWU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2xlYXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGhhc0JhY2tkcm9wOiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGNsb3NlT25DbGlja091dHNpZGU6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIG9mZnNldFg6IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBvZmZzZXRZOiBudW1iZXI7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcmlnaW5YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG9yaWdpblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG92ZXJsYXlYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG92ZXJsYXlZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3M7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSAnbHRyJztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBwb3NpdGlvbjogTmdjSURhdGVQaWNrZXJQb3NpdGlvbiA9ICdiZWxvdyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBwaWNrZWREYXRlOiBNb21lbnQgfCBNb21lbnRbXTtcblx0QElucHV0KCkgcHVibGljIG1pbkRhdGU6IE1vbWVudDtcblx0QElucHV0KCkgcHVibGljIG1heERhdGU6IE1vbWVudDtcblxuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBwaWNrZWQ6IEV2ZW50RW1pdHRlcjxOZ2NJRGF0ZVBpY2tlclBpY2tlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjSURhdGVQaWNrZXJQaWNrZWRFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBiYWNrZHJvcFByZXNzOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cblx0cHVibGljIGlzT3BlbmVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgX2lzUG9zaXRpb25TdHJhdGVneVVwZGF0ZWQ6IGJvb2xlYW47XG5cdHByaXZhdGUgX2luc3RhbmNlOiBOZ2NEYXRlUGlja2VyQ29tcG9uZW50O1xuXHRwcml2YXRlIF9wb3J0YWw6IENvbXBvbmVudFBvcnRhbDxOZ2NEYXRlUGlja2VyQ29tcG9uZW50Pjtcblx0cHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblx0cHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtPdmVybGF5fSBfb3ZlcmxheVxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IF9lbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IF9jZFJlZlxuXHQgKiBAcGFyYW0ge1ZpZXdDb250YWluZXJSZWZ9IF92Y1JlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcblx0XHRwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuXHQpIHt9XG5cblx0QEhvc3RMaXN0ZW5lciggJ2NsaWNrJywgWyAnJGV2ZW50JyBdIClcblx0QEhvc3RMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgWyAnJGV2ZW50JyBdIClcblx0QEhvc3RMaXN0ZW5lciggJ2tleWRvd24uc3BhY2UnLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlckNsaWNrKCBldmVudDogRXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmRpc2FibGVkICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLm9wZW4oIGV2ZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0aWYgKCAhdGhpcy5faW5zdGFuY2UgKSByZXR1cm47XG5cblx0XHRpZiAoIGNoYW5nZXMucGlja2VkRGF0ZSApIHtcblx0XHRcdHRoaXMuX2luc3RhbmNlLnBpY2tlZERhdGUgPSB0aGlzLnBpY2tlZERhdGU7XG5cblx0XHRcdHRoaXMuX2luc3RhbmNlLm1hcmtBc1BpY2tlZERhdGVDaGFuZ2VzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjaGFuZ2VzLmRhdGVSYW5nZSApIHRoaXMuX2luc3RhbmNlLmRhdGVSYW5nZSA9IHRoaXMuZGF0ZVJhbmdlO1xuXHRcdGlmICggY2hhbmdlcy5kYXRlT25seSApIHRoaXMuX2luc3RhbmNlLmRhdGVPbmx5ID0gdGhpcy5kYXRlT25seTtcblx0XHRpZiAoIGNoYW5nZXMuc2hvd1RpbWUgKSB0aGlzLl9pbnN0YW5jZS5zaG93VGltZSA9IHRoaXMuc2hvd1RpbWU7XG5cdFx0aWYgKCBjaGFuZ2VzLmNsZWFyYWJsZSApIHRoaXMuX2luc3RhbmNlLmNsZWFyYWJsZSA9IHRoaXMuY2xlYXJhYmxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8uZGV0YWNoKCk7XG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJRGF0ZVBpY2tlclBpY2tlZEV2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uRGF0ZVBpY2tlZCggZXZlbnQ6IE5nY0lEYXRlUGlja2VyUGlja2VkRXZlbnQgKSB7XG5cdFx0dGhpcy5waWNrZWREYXRlID0gdGhpcy5kYXRlUmFuZ2UgPyBldmVudC5yYW5nZSA6IGV2ZW50LmRhdGU7XG5cblx0XHR0aGlzLnBpY2tlZC5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb3BlbiggZXZlbnQ/OiBFdmVudCApIHtcblx0XHQvLyBDcmVhdGUgb3ZlcmxheSByZWZcblx0XHR0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheVJlZiB8fCB0aGlzLl9jcmVhdGVPdmVybGF5UmVmKCk7XG5cblx0XHRpZiAoIHRoaXMuX2lzUG9zaXRpb25TdHJhdGVneVVwZGF0ZWQgKSB7XG5cdFx0XHR0aGlzLl9pc1Bvc2l0aW9uU3RyYXRlZ3lVcGRhdGVkID0gZmFsc2U7XG5cblx0XHRcdHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSApIHJldHVybjtcblxuXHRcdHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuXG5cdFx0Ly8gQ3JlYXRlIGRhdGUgcGlja2VyIHBvcnRhbFxuXHRcdHRoaXMuX3BvcnRhbCA9IHRoaXMuX3BvcnRhbCB8fCBuZXcgQ29tcG9uZW50UG9ydGFsKCBOZ2NEYXRlUGlja2VyQ29tcG9uZW50LCB0aGlzLl92Y1JlZiApO1xuXG5cdFx0Ly8gQXR0YWNoIGRhdGUgcGlja2VyIHRvIG92ZXJsYXlcblx0XHRjb25zdCBpbnN0YW5jZTogTmdjRGF0ZVBpY2tlckNvbXBvbmVudCA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKCB0aGlzLl9wb3J0YWwgKS5pbnN0YW5jZTtcblxuXHRcdGluc3RhbmNlLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKCB0aGlzICk7XG5cdFx0aW5zdGFuY2Uub25QaWNrZWQgPSB0aGlzLm9uRGF0ZVBpY2tlZC5iaW5kKCB0aGlzICk7XG5cdFx0aW5zdGFuY2UucGlja2VkRGF0ZSA9IHRoaXMucGlja2VkRGF0ZTtcblx0XHRpbnN0YW5jZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuXHRcdGluc3RhbmNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XG5cdFx0aW5zdGFuY2UubWF4RGF0ZVJhbmdlID0gdGhpcy5tYXhEYXRlUmFuZ2U7XG5cdFx0aW5zdGFuY2UuZGF0ZVJhbmdlID0gdGhpcy5kYXRlUmFuZ2U7XG5cdFx0aW5zdGFuY2UuZGF0ZU9ubHkgPSB0aGlzLmRhdGVPbmx5O1xuXHRcdGluc3RhbmNlLnNob3dUaW1lID0gdGhpcy5zaG93VGltZTtcblx0XHRpbnN0YW5jZS5jbGVhcmFibGUgPSB0aGlzLmNsZWFyYWJsZTtcblxuXHRcdC8vIE1hcmsgYXMgcGlja2VkIGRhdGUgY2hhbmdlc1xuXHRcdGluc3RhbmNlLm1hcmtBc1BpY2tlZERhdGVDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG5cdFx0Ly8gRW1pdCBvbiBvcGVuZWQgZXZlbnRcblx0XHR0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR0aGlzLm9wZW5lZC5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xvc2UoIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0dGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8uZGV0YWNoKCk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0dGhpcy5jbG9zZWQuZW1pdCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1Bvc2l0aW9uU3RyYXRlZ3k9fSBwb3NpdGlvblN0cmF0ZWd5XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgdXBkYXRlUG9zaXRpb24oIHBvc2l0aW9uU3RyYXRlZ3k6IFBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCkgKSB7XG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8udXBkYXRlUG9zaXRpb25TdHJhdGVneSggcG9zaXRpb25TdHJhdGVneSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge092ZXJsYXlSZWZ9XG5cdCAqL1xuXHRwcml2YXRlIF9jcmVhdGVPdmVybGF5UmVmKCk6IE92ZXJsYXlSZWYge1xuXHRcdGNvbnN0IGNvbmZpZzogT3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcblx0XHRcdHBhbmVsQ2xhc3NcdFx0OiB0aGlzLnBhbmVsQ2xhc3MsXG5cdFx0XHRiYWNrZHJvcENsYXNzXHQ6IHRoaXMuYmFja2Ryb3BDbGFzcyxcblx0XHRcdGhhc0JhY2tkcm9wXHRcdDogdGhpcy5oYXNCYWNrZHJvcCxcblx0XHRcdHdpZHRoXHRcdFx0OiB0aGlzLndpZHRoLFxuXHRcdFx0bWluV2lkdGhcdFx0OiBwYXJzZUZsb2F0KCB0aGlzLm1pbldpZHRoICkgPCB3aW5kb3cuaW5uZXJXaWR0aCA/IHRoaXMubWluV2lkdGggOiB1bmRlZmluZWQsXG5cdFx0XHRtYXhXaWR0aFx0XHQ6IHRoaXMubWF4V2lkdGgsXG5cdFx0XHRoZWlnaHRcdFx0XHQ6IHRoaXMuaGVpZ2h0LFxuXHRcdFx0bWluSGVpZ2h0XHRcdDogcGFyc2VGbG9hdCggdGhpcy5taW5IZWlnaHQgKSA8IHdpbmRvdy5pbm5lckhlaWdodCA/IHRoaXMubWluSGVpZ2h0IDogdW5kZWZpbmVkLFxuXHRcdFx0bWF4SGVpZ2h0XHRcdDogdGhpcy5tYXhIZWlnaHQsXG5cdFx0XHRzY3JvbGxTdHJhdGVneVx0OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbih7IGF1dG9DbG9zZTogdHJ1ZSwgc2Nyb2xsVGhyb3R0bGU6IDEwMDAgfSksXG5cdFx0XHRwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCksXG5cdFx0fSk7XG5cdFx0Y29uc3Qgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKCBjb25maWcgKTtcblxuXHRcdC8vIFNldCBvdmVybGF5IGRpcmVjdGlvblxuXHRcdG92ZXJsYXlSZWYuc2V0RGlyZWN0aW9uKCB0aGlzLmRpcmVjdGlvbiApO1xuXG5cdFx0Ly8gQ2F0Y2gga2V5Ym9hcmQgZXZlbnRzIG9uIG92ZXJsYXlcblx0XHRvdmVybGF5UmVmLmtleWRvd25FdmVudHMoKVxuXHRcdC5waXBlKCB1bnRpbENtcERlc3Ryb3llZCh0aGlzKSBhcyBhbnkgKVxuXHRcdC5zdWJzY3JpYmUoICggZXZlbnQ6IEtleWJvYXJkRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGV2ZW50LmtleSAhPT0gJ0VzY2FwZScgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuY2xvc2UoIGV2ZW50ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gT24gYmFja2Ryb3AgY2xpY2tcblx0XHRvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKVxuXHRcdC5waXBlKCB1bnRpbENtcERlc3Ryb3llZCh0aGlzKSBhcyBhbnkgKVxuXHRcdC5zdWJzY3JpYmUoICggZXZlbnQ6IE1vdXNlRXZlbnQgKSA9PiB7XG5cdFx0XHR0aGlzLmNsb3NlT25DbGlja091dHNpZGUgJiYgdGhpcy5jbG9zZSggZXZlbnQgKTtcblx0XHRcdHRoaXMuYmFja2Ryb3BQcmVzcy5lbWl0KCBldmVudCApO1xuXHRcdH0gKTtcblxuXHRcdC8qXG5cdFx0UmVhZCBtb3JlIGFib3V0IHRoZSByZXNpemUgb2JzZXJ2ZXIgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNi8xMC9yZXNpemVvYnNlcnZlclxuXHRcdEJhc2ljYWx5LCB3aGF0IHdlIGRvIGlzIHRoYXQgd2Ugc3Vic2NyaWJlIHRvIHNpemUgZXZlbnRzIG9uIHRoZSBvdmVybGF5LlxuXHRcdEN1cnJlbnRseSB3ZSBvbmx5IGdldCBvbmUgZXZlbnQsICh0aGVuIHdlIGRpc2Nvbm5ldCB0aGUgcmVzaXplIG9ic2VydmVyKS5cblx0XHRCdXQgdGhlbiB3ZSBzaW1wbHkgY2FsY3VsYXRlIGlmIHdlIG5lZWQgdG8gaW1wcm92ZSB0aGUgbGF5b3V0LlxuXHRcdCAqL1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG5cdFx0dGhpcy5fcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICggZW50cmllczogUmVzaXplT2JzZXJ2ZXJFbnRyeVtdICkgPT4ge1xuXHRcdFx0Y29uc3Qgdmlld1BvcnRXaWR0aDogbnVtYmVyID0gTWF0aC5tYXgoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCApO1xuXHRcdFx0Y29uc3Qgdmlld1BvcnRIZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCApO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBlbnRyeSBvZiBlbnRyaWVzICkge1xuXHRcdFx0XHQvLyBXZSBnZXQgdGhlIHdpZHRoICYgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGZyb20gdGhlIHRoZSBjb250ZW50UmVjdCwgcHJvdmlkZWQgYnkgdGhlIHJlc2l6ZSBvYnNlcnZlclxuXHRcdFx0XHRjb25zdCB3aWR0aDogbnVtYmVyID0gZW50cnkuY29udGVudFJlY3Qud2lkdGg7XG5cdFx0XHRcdGNvbnN0IGhlaWdodDogbnVtYmVyID0gZW50cnkuY29udGVudFJlY3QuaGVpZ2h0O1xuXHRcdFx0XHRjb25zdCBkb21SZWFjdDogRE9NUmVjdCA9IGVudHJ5LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0Y29uc3QgeDogbnVtYmVyID0gZG9tUmVhY3QubGVmdDtcblx0XHRcdFx0Y29uc3QgeTogbnVtYmVyID0gZG9tUmVhY3QudG9wO1xuXHRcdFx0XHRjb25zdCBvZmZzZXRQbHVzV2lkdGg6IG51bWJlciA9IHggKyB3aWR0aDtcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0UGx1c0hlaWdodDogbnVtYmVyID0geSArIGhlaWdodDtcblx0XHRcdFx0Y29uc3QgcGl4ZWxzT3ZlcmZsb3dYOiBudW1iZXIgPSBvZmZzZXRQbHVzV2lkdGggLSB2aWV3UG9ydFdpZHRoO1xuXHRcdFx0XHRjb25zdCBwaXhlbHNPdmVyZmxvd1k6IG51bWJlciA9IG9mZnNldFBsdXNIZWlnaHQgLSB2aWV3UG9ydEhlaWdodDtcblxuXHRcdFx0XHQvLyBJZiB4IGlzIG5lZ2F0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiB0byB0aGUgbGVmdC5cblx0XHRcdFx0Ly8gSWYgeSBpcyBuZWdhdGl2ZSwgd2UgYXJlIG9mZi1zY3JlZW4gdG8gdGhlIHRvcC5cblx0XHRcdFx0Ly8gSWYgcGl4ZWxzT3ZlcmZsb3dYIGlzIHBvc2l0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiBvbiB0aGUgcmlnaHRcblx0XHRcdFx0Ly8gSWYgcGl4ZWxzT3ZlcmZsb3dZIGlzIHBvc2l0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiBvbiB0aGUgYm90dG9tXG5cdFx0XHRcdC8vIEluIGVpdGhlciBjYXNlLCB3ZSBhZG9wdCBhIG5ldyBzdHJhdGVneS5cblx0XHRcdFx0aWYgKCB4IDwgMCB8fCB5IDwgMCB8fCBwaXhlbHNPdmVyZmxvd1ggPiAxIHx8IHBpeGVsc092ZXJmbG93WSA+IDEgKSB7XG5cdFx0XHRcdFx0dGhpcy5pc09wZW5lZCAmJiBvdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG5cblx0XHRcdFx0XHR0aGlzLl9pc1Bvc2l0aW9uU3RyYXRlZ3lVcGRhdGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIEVsZW1lbnQgZm9yIHdoaWNoIHRvIG9ic2VydmUgaGVpZ2h0IGFuZCB3aWR0aFxuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUoIG92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQgKTtcblxuXHRcdHJldHVybiBvdmVybGF5UmVmO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0ZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneX1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcblx0XHRjb25zdCBvcmlnaW5YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9IHRoaXMub3JpZ2luWCB8fCAnc3RhcnQnO1xuXHRcdGxldCBvcmlnaW5ZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgPSB0aGlzLm9yaWdpblk7XG5cdFx0bGV0IG9yaWdpbkZhbGxiYWNrWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSBvcmlnaW5YO1xuXHRcdGxldCBvcmlnaW5GYWxsYmFja1k6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IG9yaWdpblk7XG5cdFx0Y29uc3Qgb3ZlcmxheVg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gdGhpcy5vdmVybGF5WCB8fCAnc3RhcnQnO1xuXHRcdGxldCBvdmVybGF5WTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gdGhpcy5vdmVybGF5WTtcblx0XHRsZXQgb3ZlcmxheUZhbGxiYWNrWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSBvdmVybGF5WDtcblx0XHRsZXQgb3ZlcmxheUZhbGxiYWNrWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gb3ZlcmxheVk7XG5cdFx0Y29uc3Qgb2Zmc2V0WDogbnVtYmVyID0gKyggdGhpcy5vZmZzZXRYIHx8IDAgKTtcblx0XHRsZXQgb2Zmc2V0WTogbnVtYmVyID0gKyggdGhpcy5vZmZzZXRZIHx8IDAgKTtcblxuXHRcdHN3aXRjaCAoIHRoaXMucG9zaXRpb24gKSB7XG5cdFx0XHRjYXNlICdhYm92ZSc6XG5cdFx0XHRjYXNlICdiZWxvdyc6XG5cdFx0XHRcdGlmICggIXRoaXMub3JpZ2luWSApIG9yaWdpblkgPSB0aGlzLnBvc2l0aW9uID09PSAnYWJvdmUnID8gJ3RvcCcgOiAnYm90dG9tJztcblx0XHRcdFx0aWYgKCAhdGhpcy5vdmVybGF5WSApIG92ZXJsYXlZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/ICdib3R0b20nIDogJ3RvcCc7XG5cdFx0XHRcdGlmICggXy5pc05pbCggdGhpcy5vZmZzZXRZICkgKSBvZmZzZXRZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/IC01IDogNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0b3JpZ2luRmFsbGJhY2tYID0gdGhpcy5fZmFsbGJhY2tYKCBvcmlnaW5YICk7XG5cdFx0b3JpZ2luRmFsbGJhY2tZID0gdGhpcy5fZmFsbGJhY2tZKCBvcmlnaW5ZICk7XG5cdFx0b3ZlcmxheUZhbGxiYWNrWCA9IHRoaXMuX2ZhbGxiYWNrWCggb3ZlcmxheVggKTtcblx0XHRvdmVybGF5RmFsbGJhY2tZID0gdGhpcy5fZmFsbGJhY2tZKCBvdmVybGF5WSApO1xuXG5cdFx0cmV0dXJuIHRoaXMuX292ZXJsYXlcblx0XHQucG9zaXRpb24oKVxuXHRcdC5mbGV4aWJsZUNvbm5lY3RlZFRvKCB0aGlzLl9lbGVtZW50UmVmIClcblx0XHQud2l0aEZsZXhpYmxlRGltZW5zaW9ucyggZmFsc2UgKVxuXHRcdC53aXRoTG9ja2VkUG9zaXRpb24oKVxuXHRcdC53aXRoUHVzaCggdHJ1ZSApXG5cdFx0LndpdGhQb3NpdGlvbnMoW1xuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YLCBvcmlnaW5ZLFxuXHRcdFx0XHRvdmVybGF5WCwgb3ZlcmxheVksXG5cdFx0XHRcdG9mZnNldFgsIG9mZnNldFksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblksXG5cdFx0XHRcdG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WSxcblx0XHRcdFx0b2Zmc2V0WDogLW9mZnNldFgsIG9mZnNldFksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1ksXG5cdFx0XHRcdG92ZXJsYXlYLCBvdmVybGF5WTogb3ZlcmxheUZhbGxiYWNrWSxcblx0XHRcdFx0b2Zmc2V0WCwgb2Zmc2V0WTogLW9mZnNldFksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZLFxuXHRcdFx0XHRvZmZzZXRYOiAtb2Zmc2V0WCwgb2Zmc2V0WTogLW9mZnNldFksXG5cdFx0XHR9LFxuXHRcdF0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SG9yaXpvbnRhbENvbm5lY3Rpb25Qb3N9IG9yaWdpblxuXHQgKiBAcmV0dXJuIHtIb3Jpem9udGFsQ29ubmVjdGlvblBvc31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHJpdmF0ZSBfZmFsbGJhY2tYKCBvcmlnaW46IEhvcml6b250YWxDb25uZWN0aW9uUG9zICk6IEhvcml6b250YWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICdzdGFydCc6XG5cdFx0XHRcdHJldHVybiAnZW5kJztcblx0XHRcdGNhc2UgJ2VuZCc6XG5cdFx0XHRcdHJldHVybiAnc3RhcnQnO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG9yaWdpbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtWZXJ0aWNhbENvbm5lY3Rpb25Qb3N9IG9yaWdpblxuXHQgKiBAcmV0dXJuIHtWZXJ0aWNhbENvbm5lY3Rpb25Qb3N9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHByaXZhdGUgX2ZhbGxiYWNrWSggb3JpZ2luOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgKTogVmVydGljYWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICd0b3AnOlxuXHRcdFx0XHRyZXR1cm4gJ2JvdHRvbSc7XG5cdFx0XHRjYXNlICdib3R0b20nOlxuXHRcdFx0XHRyZXR1cm4gJ3RvcCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=