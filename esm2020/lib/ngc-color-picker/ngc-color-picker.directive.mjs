import { __decorate, __metadata } from "tslib";
import { ElementRef, HostListener, Input, Directive, EventEmitter, Output, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';
import { Unsubscriber, DefaultValue, CoerceBoolean, CoerceNumber, CoerceCssPixel, Memoize, untilCmpDestroyed } from '@core';
import { NgcColorPickerComponent } from './ngc-color-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
let NgcColorPickerDirective = class NgcColorPickerDirective {
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
        this.hasBackdrop = true;
        this.closeOnClickOutside = true;
        this.direction = 'ltr';
        this.position = 'below';
        this.emptyMode = 'color';
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.picked = new EventEmitter();
        this.backdropPress = new EventEmitter();
        this.pickedColorChange = new EventEmitter();
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
        if (changes.pickedColor)
            this._instance.pickedColor = this.pickedColor;
        if (changes.emptyMode)
            this._instance.emptyMode = this.emptyMode;
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
    onColorPicked(color) {
        this.pickedColor = color;
        this.picked.emit(this.pickedColor);
        this.close();
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
        // Create color picker portal
        this._portal = this._portal || new ComponentPortal(NgcColorPickerComponent, this._vcRef);
        // Attach color picker to overlay
        const instance = this._overlayRef.attach(this._portal).instance;
        instance.pickedColor = this.pickedColor;
        instance.pickedColorChange = this.pickedColorChange;
        instance.emptyMode = this.emptyMode;
        instance.close = this.close.bind(this);
        instance.onPicked = this.onColorPicked.bind(this);
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
NgcColorPickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorPickerDirective, deps: [{ token: i1.Overlay }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcColorPickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcColorPickerDirective, selector: "[ngcColorPicker]", inputs: { pickedColor: "pickedColor", panelClass: "panelClass", backdropClass: "backdropClass", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", height: "height", minHeight: "minHeight", maxHeight: "maxHeight", disabled: "disabled", hasBackdrop: "hasBackdrop", closeOnClickOutside: "closeOnClickOutside", offsetX: "offsetX", offsetY: "offsetY", originX: "originX", originY: "originY", overlayX: "overlayX", overlayY: "overlayY", direction: "direction", position: "position", emptyMode: "emptyMode" }, outputs: { opened: "opened", closed: "closed", picked: "picked", backdropPress: "backdropPress", pickedColorChange: "pickedColorChange" }, host: { listeners: { "click": "triggerClick($event)", "contextmenu": "triggerClick($event)", "keydown.space": "triggerClick($event)" } }, exportAs: ["ngcColorPicker"], usesOnChanges: true, ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcColorPickerDirective.prototype, "panelClass", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcColorPickerDirective.prototype, "backdropClass", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "minWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "maxWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "height", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "minHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "maxHeight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcColorPickerDirective.prototype, "disabled", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcColorPickerDirective.prototype, "hasBackdrop", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcColorPickerDirective.prototype, "closeOnClickOutside", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcColorPickerDirective.prototype, "offsetX", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcColorPickerDirective.prototype, "offsetY", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "direction", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "position", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcColorPickerDirective.prototype, "emptyMode", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcColorPickerDirective.prototype, "_fallbackX", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcColorPickerDirective.prototype, "_fallbackY", null);
NgcColorPickerDirective = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [Overlay,
        ElementRef,
        ChangeDetectorRef,
        ViewContainerRef])
], NgcColorPickerDirective);
export { NgcColorPickerDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorPickerDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcColorPicker]', exportAs: 'ngcColorPicker' }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { pickedColor: [{
                type: Input
            }], panelClass: [{
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
            }], disabled: [{
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
            }], emptyMode: [{
                type: Input
            }], opened: [{
                type: Output
            }], closed: [{
                type: Output
            }], picked: [{
                type: Output
            }], backdropPress: [{
                type: Output
            }], pickedColorChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvbG9yLXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jb2xvci1waWNrZXIvbmdjLWNvbG9yLXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDL0IsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQy9CLGdCQUFnQixFQUFhLGlCQUFpQixFQUU5QyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ04sT0FBTyxFQUN5QyxhQUFhLEVBRTdELE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sY0FBYyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQ04sWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQ3pDLFlBQVksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUNyQyxpQkFBaUIsRUFDakIsTUFBTSxPQUFPLENBQUM7QUFFZixPQUFPLEVBQUUsdUJBQXVCLEVBQXFELE1BQU0sOEJBQThCLENBQUM7OztBQUluSCxJQUFNLHVCQUF1QixHQUE3QixNQUFNLHVCQUF1QjtJQXlDbkM7Ozs7OztPQU1HO0lBQ0gsWUFDUyxRQUFpQixFQUNqQixXQUF1QixFQUN2QixNQUF5QixFQUN6QixNQUF3QjtRQUh4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBakRELGVBQVUsR0FBc0IsMEJBQTBCLENBQUM7UUFDM0Qsa0JBQWEsR0FBc0I7WUFDbEUsa0NBQWtD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bUI7c0JBQW5FLEtBQUs7Z0JBQzBCLE9BQU87c0JBQXRDLEtBQUs7Z0JBQzBCLE9BQU87c0JBQXRDLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFDMEIsU0FBUztzQkFBeEMsS0FBSztnQkFDMEIsUUFBUTtzQkFBdkMsS0FBSztnQkFDMEIsU0FBUztzQkFBeEMsS0FBSztnQkFFVyxNQUFNO3NCQUF0QixNQUFNO2dCQUNVLE1BQU07c0JBQXRCLE1BQU07Z0JBQ1UsTUFBTTtzQkFBdEIsTUFBTTtnQkFDVSxhQUFhO3NCQUE3QixNQUFNO2dCQUNVLGlCQUFpQjtzQkFBakMsTUFBTTtnQkEyQkEsWUFBWTtzQkFIbEIsWUFBWTt1QkFBRSxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUU7O3NCQUNuQyxZQUFZO3VCQUFFLGFBQWEsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7c0JBQ3pDLFlBQVk7dUJBQUUsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFO2dCQW1QcEMsVUFBVSxNQWdCVixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCxcblx0RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCxcblx0Vmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZixcblx0T25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0T3ZlcmxheSwgT3ZlcmxheVJlZiwgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuXHRIb3Jpem9udGFsQ29ubmVjdGlvblBvcywgVmVydGljYWxDb25uZWN0aW9uUG9zLCBPdmVybGF5Q29uZmlnLFxuXHRQb3NpdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuXHRVbnN1YnNjcmliZXIsIERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbixcblx0Q29lcmNlTnVtYmVyLCBDb2VyY2VDc3NQaXhlbCwgTWVtb2l6ZSxcblx0dW50aWxDbXBEZXN0cm95ZWRcbn0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NDb2xvclBpY2tlckNvbXBvbmVudCwgTmdjSUNvbG9yUGlja2VyUG9zaXRpb24sIE5nY0lDb2xvclBpY2tlckVtcHR5TW9kZSB9IGZyb20gJy4vbmdjLWNvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuXG5AVW5zdWJzY3JpYmVyKClcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ2NDb2xvclBpY2tlcl0nLCBleHBvcnRBczogJ25nY0NvbG9yUGlja2VyJyB9KVxuZXhwb3J0IGNsYXNzIE5nY0NvbG9yUGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBwaWNrZWRDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdID0gJ2Nkay1vdmVybGF5LWhpZ2hlc3QtcGFuZSc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXG5cdFx0J2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcblx0XHQnY2RrLW92ZXJsYXktaGlnaGVzdC1iYWNrZHJvcCcsXG5cdF07XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWluV2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1heFdpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWF4SGVpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGFzQmFja2Ryb3A6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2xvc2VPbkNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgb2Zmc2V0WDogbnVtYmVyO1xuXHRASW5wdXQoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIG9mZnNldFk6IG51bWJlcjtcblx0QElucHV0KCkgcHVibGljIG9yaWdpblg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zO1xuXHRASW5wdXQoKSBwdWJsaWMgb3JpZ2luWTogVmVydGljYWxDb25uZWN0aW9uUG9zO1xuXHRASW5wdXQoKSBwdWJsaWMgb3ZlcmxheVg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zO1xuXHRASW5wdXQoKSBwdWJsaWMgb3ZlcmxheVk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBkaXJlY3Rpb246IERpcmVjdGlvbiA9ICdsdHInO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHBvc2l0aW9uOiBOZ2NJQ29sb3JQaWNrZXJQb3NpdGlvbiA9ICdiZWxvdyc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgZW1wdHlNb2RlOiBOZ2NJQ29sb3JQaWNrZXJFbXB0eU1vZGUgPSAnY29sb3InO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHBpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBiYWNrZHJvcFByZXNzOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgcGlja2VkQ29sb3JDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0cHVibGljIGlzT3BlbmVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgX2lzUG9zaXRpb25TdHJhdGVneVVwZGF0ZWQ6IGJvb2xlYW47XG5cdHByaXZhdGUgX2luc3RhbmNlOiBOZ2NDb2xvclBpY2tlckNvbXBvbmVudDtcblx0cHJpdmF0ZSBfcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8TmdjQ29sb3JQaWNrZXJDb21wb25lbnQ+O1xuXHRwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuXHRwcml2YXRlIF9yZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXI7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge092ZXJsYXl9IF9vdmVybGF5XG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gX2NkUmVmXG5cdCAqIEBwYXJhbSB7Vmlld0NvbnRhaW5lclJlZn0gX3ZjUmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuXHRcdHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXG5cdCkge31cblxuXHRASG9zdExpc3RlbmVyKCAnY2xpY2snLCBbICckZXZlbnQnIF0gKVxuXHRASG9zdExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBbICckZXZlbnQnIF0gKVxuXHRASG9zdExpc3RlbmVyKCAna2V5ZG93bi5zcGFjZScsIFsgJyRldmVudCcgXSApXG5cdHB1YmxpYyB0cmlnZ2VyQ2xpY2soIGV2ZW50OiBFdmVudCApIHtcblx0XHRpZiAoIHRoaXMuZGlzYWJsZWQgKSByZXR1cm47XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMub3BlbiggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoICF0aGlzLl9pbnN0YW5jZSApIHJldHVybjtcblx0XHRpZiAoIGNoYW5nZXMucGlja2VkQ29sb3IgKSB0aGlzLl9pbnN0YW5jZS5waWNrZWRDb2xvciA9IHRoaXMucGlja2VkQ29sb3I7XG5cdFx0aWYgKCBjaGFuZ2VzLmVtcHR5TW9kZSApIHRoaXMuX2luc3RhbmNlLmVtcHR5TW9kZSA9IHRoaXMuZW1wdHlNb2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8uZGV0YWNoKCk7XG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25Db2xvclBpY2tlZCggY29sb3I6IHN0cmluZyApIHtcblx0XHR0aGlzLnBpY2tlZENvbG9yID0gY29sb3I7XG5cblx0XHR0aGlzLnBpY2tlZC5lbWl0KCB0aGlzLnBpY2tlZENvbG9yICk7XG5cdFx0dGhpcy5jbG9zZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb3BlbiggZXZlbnQ/OiBFdmVudCApIHtcblx0XHQvLyBDcmVhdGUgb3ZlcmxheSByZWZcblx0XHR0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheVJlZiB8fCB0aGlzLl9jcmVhdGVPdmVybGF5UmVmKCk7XG5cblx0XHRpZiAoIHRoaXMuX2lzUG9zaXRpb25TdHJhdGVneVVwZGF0ZWQgKSB7XG5cdFx0XHR0aGlzLl9pc1Bvc2l0aW9uU3RyYXRlZ3lVcGRhdGVkID0gZmFsc2U7XG5cblx0XHRcdHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSApIHJldHVybjtcblxuXHRcdHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuXG5cdFx0Ly8gQ3JlYXRlIGNvbG9yIHBpY2tlciBwb3J0YWxcblx0XHR0aGlzLl9wb3J0YWwgPSB0aGlzLl9wb3J0YWwgfHwgbmV3IENvbXBvbmVudFBvcnRhbCggTmdjQ29sb3JQaWNrZXJDb21wb25lbnQsIHRoaXMuX3ZjUmVmICk7XG5cblx0XHQvLyBBdHRhY2ggY29sb3IgcGlja2VyIHRvIG92ZXJsYXlcblx0XHRjb25zdCBpbnN0YW5jZTogTmdjQ29sb3JQaWNrZXJDb21wb25lbnQgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaCggdGhpcy5fcG9ydGFsICkuaW5zdGFuY2U7XG5cblx0XHRpbnN0YW5jZS5waWNrZWRDb2xvciA9IHRoaXMucGlja2VkQ29sb3I7XG5cdFx0aW5zdGFuY2UucGlja2VkQ29sb3JDaGFuZ2UgPSB0aGlzLnBpY2tlZENvbG9yQ2hhbmdlO1xuXHRcdGluc3RhbmNlLmVtcHR5TW9kZSA9IHRoaXMuZW1wdHlNb2RlO1xuXHRcdGluc3RhbmNlLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKCB0aGlzICk7XG5cdFx0aW5zdGFuY2Uub25QaWNrZWQgPSB0aGlzLm9uQ29sb3JQaWNrZWQuYmluZCggdGhpcyApO1xuXG5cdFx0dGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuXHRcdC8vIEVtaXQgb24gb3BlbmVkIGV2ZW50XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0dGhpcy5vcGVuZWQuZW1pdCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNsb3NlKCBldmVudD86IEV2ZW50ICkge1xuXHRcdHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuX292ZXJsYXlSZWY/LmRldGFjaCgpO1xuXHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdHRoaXMuY2xvc2VkLmVtaXQoIGV2ZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtQb3NpdGlvblN0cmF0ZWd5PX0gcG9zaXRpb25TdHJhdGVneVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHVwZGF0ZVBvc2l0aW9uKCBwb3NpdGlvblN0cmF0ZWd5OiBQb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpICkge1xuXHRcdHRoaXMuX292ZXJsYXlSZWY/LnVwZGF0ZVBvc2l0aW9uU3RyYXRlZ3koIHBvc2l0aW9uU3RyYXRlZ3kgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtPdmVybGF5UmVmfVxuXHQgKi9cblx0cHJpdmF0ZSBfY3JlYXRlT3ZlcmxheVJlZigpOiBPdmVybGF5UmVmIHtcblx0XHRjb25zdCBjb25maWc6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG5cdFx0XHRwYW5lbENsYXNzXHRcdDogdGhpcy5wYW5lbENsYXNzLFxuXHRcdFx0YmFja2Ryb3BDbGFzc1x0OiB0aGlzLmJhY2tkcm9wQ2xhc3MsXG5cdFx0XHRoYXNCYWNrZHJvcFx0XHQ6IHRoaXMuaGFzQmFja2Ryb3AsXG5cdFx0XHR3aWR0aFx0XHRcdDogdGhpcy53aWR0aCxcblx0XHRcdG1pbldpZHRoXHRcdDogcGFyc2VGbG9hdCggdGhpcy5taW5XaWR0aCApIDwgd2luZG93LmlubmVyV2lkdGggPyB0aGlzLm1pbldpZHRoIDogdW5kZWZpbmVkLFxuXHRcdFx0bWF4V2lkdGhcdFx0OiB0aGlzLm1heFdpZHRoLFxuXHRcdFx0aGVpZ2h0XHRcdFx0OiB0aGlzLmhlaWdodCxcblx0XHRcdG1pbkhlaWdodFx0XHQ6IHBhcnNlRmxvYXQoIHRoaXMubWluSGVpZ2h0ICkgPCB3aW5kb3cuaW5uZXJIZWlnaHQgPyB0aGlzLm1pbkhlaWdodCA6IHVuZGVmaW5lZCxcblx0XHRcdG1heEhlaWdodFx0XHQ6IHRoaXMubWF4SGVpZ2h0LFxuXHRcdFx0c2Nyb2xsU3RyYXRlZ3lcdDogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oeyBhdXRvQ2xvc2U6IHRydWUsIHNjcm9sbFRocm90dGxlOiAxMDAwIH0pLFxuXHRcdFx0cG9zaXRpb25TdHJhdGVneTogdGhpcy5fY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpLFxuXHRcdH0pO1xuXHRcdGNvbnN0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSggY29uZmlnICk7XG5cblx0XHQvLyBTZXQgb3ZlcmxheSBkaXJlY3Rpb25cblx0XHRvdmVybGF5UmVmLnNldERpcmVjdGlvbiggdGhpcy5kaXJlY3Rpb24gKTtcblxuXHRcdC8vIENhdGNoIGtleWJvYXJkIGV2ZW50cyBvbiBvdmVybGF5XG5cdFx0b3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKClcblx0XHQucGlwZSggdW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKSApXG5cdFx0LnN1YnNjcmliZSggKCBldmVudDogS2V5Ym9hcmRFdmVudCApID0+IHtcblx0XHRcdGlmICggZXZlbnQua2V5ICE9PSAnRXNjYXBlJyApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5jbG9zZSggZXZlbnQgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBPbiBiYWNrZHJvcCBjbGlja1xuXHRcdG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpXG5cdFx0LnBpcGUoIHVudGlsQ21wRGVzdHJveWVkKCB0aGlzICkgKVxuXHRcdC5zdWJzY3JpYmUoICggZXZlbnQ6IE1vdXNlRXZlbnQgKSA9PiB7XG5cdFx0XHR0aGlzLmNsb3NlT25DbGlja091dHNpZGUgJiYgdGhpcy5jbG9zZSggZXZlbnQgKTtcblx0XHRcdHRoaXMuYmFja2Ryb3BQcmVzcy5lbWl0KCBldmVudCApO1xuXHRcdH0gKTtcblxuXHRcdC8qXG5cdFx0UmVhZCBtb3JlIGFib3V0IHRoZSByZXNpemUgb2JzZXJ2ZXIgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNi8xMC9yZXNpemVvYnNlcnZlclxuXHRcdEJhc2ljYWx5LCB3aGF0IHdlIGRvIGlzIHRoYXQgd2Ugc3Vic2NyaWJlIHRvIHNpemUgZXZlbnRzIG9uIHRoZSBvdmVybGF5LlxuXHRcdEN1cnJlbnRseSB3ZSBvbmx5IGdldCBvbmUgZXZlbnQsICh0aGVuIHdlIGRpc2Nvbm5ldCB0aGUgcmVzaXplIG9ic2VydmVyKS5cblx0XHRCdXQgdGhlbiB3ZSBzaW1wbHkgY2FsY3VsYXRlIGlmIHdlIG5lZWQgdG8gaW1wcm92ZSB0aGUgbGF5b3V0LlxuXHRcdCAqL1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG5cdFx0dGhpcy5fcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICggZW50cmllczogUmVzaXplT2JzZXJ2ZXJFbnRyeVtdICkgPT4ge1xuXHRcdFx0Y29uc3Qgdmlld1BvcnRXaWR0aDogbnVtYmVyID0gTWF0aC5tYXgoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCApO1xuXHRcdFx0Y29uc3Qgdmlld1BvcnRIZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCApO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBlbnRyeSBvZiBlbnRyaWVzICkge1xuXHRcdFx0XHQvLyBXZSBnZXQgdGhlIHdpZHRoICYgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGZyb20gdGhlIHRoZSBjb250ZW50UmVjdCwgcHJvdmlkZWQgYnkgdGhlIHJlc2l6ZSBvYnNlcnZlclxuXHRcdFx0XHRjb25zdCB3aWR0aDogbnVtYmVyID0gZW50cnkuY29udGVudFJlY3Qud2lkdGg7XG5cdFx0XHRcdGNvbnN0IGhlaWdodDogbnVtYmVyID0gZW50cnkuY29udGVudFJlY3QuaGVpZ2h0O1xuXHRcdFx0XHRjb25zdCBkb21SZWFjdDogRE9NUmVjdCA9IGVudHJ5LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0Y29uc3QgeDogbnVtYmVyID0gZG9tUmVhY3QubGVmdDtcblx0XHRcdFx0Y29uc3QgeTogbnVtYmVyID0gZG9tUmVhY3QudG9wO1xuXHRcdFx0XHRjb25zdCBvZmZzZXRQbHVzV2lkdGg6IG51bWJlciA9IHggKyB3aWR0aDtcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0UGx1c0hlaWdodDogbnVtYmVyID0geSArIGhlaWdodDtcblx0XHRcdFx0Y29uc3QgcGl4ZWxzT3ZlcmZsb3dYOiBudW1iZXIgPSBvZmZzZXRQbHVzV2lkdGggLSB2aWV3UG9ydFdpZHRoO1xuXHRcdFx0XHRjb25zdCBwaXhlbHNPdmVyZmxvd1k6IG51bWJlciA9IG9mZnNldFBsdXNIZWlnaHQgLSB2aWV3UG9ydEhlaWdodDtcblxuXHRcdFx0XHQvLyBJZiB4IGlzIG5lZ2F0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiB0byB0aGUgbGVmdC5cblx0XHRcdFx0Ly8gSWYgeSBpcyBuZWdhdGl2ZSwgd2UgYXJlIG9mZi1zY3JlZW4gdG8gdGhlIHRvcC5cblx0XHRcdFx0Ly8gSWYgcGl4ZWxzT3ZlcmZsb3dYIGlzIHBvc2l0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiBvbiB0aGUgcmlnaHRcblx0XHRcdFx0Ly8gSWYgcGl4ZWxzT3ZlcmZsb3dZIGlzIHBvc2l0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiBvbiB0aGUgYm90dG9tXG5cdFx0XHRcdC8vIEluIGVpdGhlciBjYXNlLCB3ZSBhZG9wdCBhIG5ldyBzdHJhdGVneS5cblx0XHRcdFx0aWYgKCB4IDwgMCB8fCB5IDwgMCB8fCBwaXhlbHNPdmVyZmxvd1ggPiAxIHx8IHBpeGVsc092ZXJmbG93WSA+IDEgKSB7XG5cdFx0XHRcdFx0dGhpcy5pc09wZW5lZCAmJiBvdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG5cblx0XHRcdFx0XHR0aGlzLl9pc1Bvc2l0aW9uU3RyYXRlZ3lVcGRhdGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIEVsZW1lbnQgZm9yIHdoaWNoIHRvIG9ic2VydmUgaGVpZ2h0IGFuZCB3aWR0aFxuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUoIG92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQgKTtcblxuXHRcdHJldHVybiBvdmVybGF5UmVmO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0ZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneX1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcblx0XHRjb25zdCBvcmlnaW5YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9IHRoaXMub3JpZ2luWCB8fCAnc3RhcnQnO1xuXHRcdGxldCBvcmlnaW5ZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgPSB0aGlzLm9yaWdpblk7XG5cdFx0bGV0IG9yaWdpbkZhbGxiYWNrWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSBvcmlnaW5YO1xuXHRcdGxldCBvcmlnaW5GYWxsYmFja1k6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IG9yaWdpblk7XG5cdFx0Y29uc3Qgb3ZlcmxheVg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gdGhpcy5vdmVybGF5WCB8fCAnc3RhcnQnO1xuXHRcdGxldCBvdmVybGF5WTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gdGhpcy5vdmVybGF5WTtcblx0XHRsZXQgb3ZlcmxheUZhbGxiYWNrWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSBvdmVybGF5WDtcblx0XHRsZXQgb3ZlcmxheUZhbGxiYWNrWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gb3ZlcmxheVk7XG5cdFx0Y29uc3Qgb2Zmc2V0WDogbnVtYmVyID0gKyggdGhpcy5vZmZzZXRYIHx8IDAgKTtcblx0XHRsZXQgb2Zmc2V0WTogbnVtYmVyID0gKyggdGhpcy5vZmZzZXRZIHx8IDAgKTtcblxuXHRcdHN3aXRjaCAoIHRoaXMucG9zaXRpb24gKSB7XG5cdFx0XHRjYXNlICdhYm92ZSc6XG5cdFx0XHRjYXNlICdiZWxvdyc6XG5cdFx0XHRcdGlmICggIXRoaXMub3JpZ2luWSApIG9yaWdpblkgPSB0aGlzLnBvc2l0aW9uID09PSAnYWJvdmUnID8gJ3RvcCcgOiAnYm90dG9tJztcblx0XHRcdFx0aWYgKCAhdGhpcy5vdmVybGF5WSApIG92ZXJsYXlZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/ICdib3R0b20nIDogJ3RvcCc7XG5cdFx0XHRcdGlmICggXy5pc05pbCggdGhpcy5vZmZzZXRZICkgKSBvZmZzZXRZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/IC01IDogNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0b3JpZ2luRmFsbGJhY2tYID0gdGhpcy5fZmFsbGJhY2tYKCBvcmlnaW5YICk7XG5cdFx0b3JpZ2luRmFsbGJhY2tZID0gdGhpcy5fZmFsbGJhY2tZKCBvcmlnaW5ZICk7XG5cdFx0b3ZlcmxheUZhbGxiYWNrWCA9IHRoaXMuX2ZhbGxiYWNrWCggb3ZlcmxheVggKTtcblx0XHRvdmVybGF5RmFsbGJhY2tZID0gdGhpcy5fZmFsbGJhY2tZKCBvdmVybGF5WSApO1xuXG5cdFx0cmV0dXJuIHRoaXMuX292ZXJsYXlcblx0XHQucG9zaXRpb24oKVxuXHRcdC5mbGV4aWJsZUNvbm5lY3RlZFRvKCB0aGlzLl9lbGVtZW50UmVmIClcblx0XHQud2l0aEZsZXhpYmxlRGltZW5zaW9ucyggZmFsc2UgKVxuXHRcdC53aXRoTG9ja2VkUG9zaXRpb24oKVxuXHRcdC53aXRoUHVzaCggdHJ1ZSApXG5cdFx0LndpdGhQb3NpdGlvbnMoW1xuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YLCBvcmlnaW5ZLFxuXHRcdFx0XHRvdmVybGF5WCwgb3ZlcmxheVksXG5cdFx0XHRcdG9mZnNldFgsIG9mZnNldFksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblksXG5cdFx0XHRcdG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WSxcblx0XHRcdFx0b2Zmc2V0WDogLW9mZnNldFgsIG9mZnNldFksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1ksXG5cdFx0XHRcdG92ZXJsYXlYLCBvdmVybGF5WTogb3ZlcmxheUZhbGxiYWNrWSxcblx0XHRcdFx0b2Zmc2V0WCwgb2Zmc2V0WTogLW9mZnNldFksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZLFxuXHRcdFx0XHRvZmZzZXRYOiAtb2Zmc2V0WCwgb2Zmc2V0WTogLW9mZnNldFksXG5cdFx0XHR9LFxuXHRcdF0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SG9yaXpvbnRhbENvbm5lY3Rpb25Qb3N9IG9yaWdpblxuXHQgKiBAcmV0dXJuIHtIb3Jpem9udGFsQ29ubmVjdGlvblBvc31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHJpdmF0ZSBfZmFsbGJhY2tYKCBvcmlnaW46IEhvcml6b250YWxDb25uZWN0aW9uUG9zICk6IEhvcml6b250YWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICdzdGFydCc6XG5cdFx0XHRcdHJldHVybiAnZW5kJztcblx0XHRcdGNhc2UgJ2VuZCc6XG5cdFx0XHRcdHJldHVybiAnc3RhcnQnO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG9yaWdpbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtWZXJ0aWNhbENvbm5lY3Rpb25Qb3N9IG9yaWdpblxuXHQgKiBAcmV0dXJuIHtWZXJ0aWNhbENvbm5lY3Rpb25Qb3N9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHByaXZhdGUgX2ZhbGxiYWNrWSggb3JpZ2luOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgKTogVmVydGljYWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICd0b3AnOlxuXHRcdFx0XHRyZXR1cm4gJ2JvdHRvbSc7XG5cdFx0XHRjYXNlICdib3R0b20nOlxuXHRcdFx0XHRyZXR1cm4gJ3RvcCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=