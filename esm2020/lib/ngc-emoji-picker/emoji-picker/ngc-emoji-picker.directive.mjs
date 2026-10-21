import { __decorate, __metadata } from "tslib";
import { ElementRef, HostListener, Input, Directive, EventEmitter, Output, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';
import { Unsubscriber, DefaultValue, CoerceBoolean, CoerceNumber, CoerceCssPixel, Memoize, untilCmpDestroyed } from '@core';
import { NgcEmojiPickerComponent } from './ngc-emoji-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
let NgcEmojiPickerDirective = class NgcEmojiPickerDirective {
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
        this.perLine = 12;
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
        if (changes.perLine)
            this._instance.perLine = this.perLine;
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
     * @param {NgcIEmojiData} event
     * @return {void}
     */
    onEmojiPicked(event) {
        this.picked.emit(event);
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
        // Create emoji picker portal
        this._portal = this._portal || new ComponentPortal(NgcEmojiPickerComponent, this._vcRef);
        // Attach emoji picker to overlay
        const instance = this._overlayRef.attach(this._portal).instance;
        instance.perLine = this.perLine;
        instance.close = this.close.bind(this);
        instance.onPicked = this.onEmojiPicked.bind(this);
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
NgcEmojiPickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcEmojiPickerDirective, deps: [{ token: i1.Overlay }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcEmojiPickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcEmojiPickerDirective, selector: "[ngcEmojiPicker]", inputs: { panelClass: "panelClass", backdropClass: "backdropClass", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", height: "height", minHeight: "minHeight", maxHeight: "maxHeight", disabled: "disabled", hasBackdrop: "hasBackdrop", closeOnClickOutside: "closeOnClickOutside", perLine: "perLine", offsetX: "offsetX", offsetY: "offsetY", originX: "originX", originY: "originY", overlayX: "overlayX", overlayY: "overlayY", direction: "direction", position: "position" }, outputs: { opened: "opened", closed: "closed", picked: "picked", backdropPress: "backdropPress" }, host: { listeners: { "click": "triggerClick($event)", "contextmenu": "triggerClick($event)", "keydown.space": "triggerClick($event)" } }, exportAs: ["ngcEmojiPicker"], usesOnChanges: true, ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcEmojiPickerDirective.prototype, "panelClass", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcEmojiPickerDirective.prototype, "backdropClass", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcEmojiPickerDirective.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcEmojiPickerDirective.prototype, "minWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcEmojiPickerDirective.prototype, "maxWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcEmojiPickerDirective.prototype, "height", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcEmojiPickerDirective.prototype, "minHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcEmojiPickerDirective.prototype, "maxHeight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcEmojiPickerDirective.prototype, "disabled", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcEmojiPickerDirective.prototype, "hasBackdrop", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcEmojiPickerDirective.prototype, "closeOnClickOutside", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcEmojiPickerDirective.prototype, "perLine", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcEmojiPickerDirective.prototype, "offsetX", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcEmojiPickerDirective.prototype, "offsetY", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcEmojiPickerDirective.prototype, "direction", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcEmojiPickerDirective.prototype, "position", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcEmojiPickerDirective.prototype, "_fallbackX", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcEmojiPickerDirective.prototype, "_fallbackY", null);
NgcEmojiPickerDirective = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [Overlay,
        ElementRef,
        ChangeDetectorRef,
        ViewContainerRef])
], NgcEmojiPickerDirective);
export { NgcEmojiPickerDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcEmojiPickerDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcEmojiPicker]', exportAs: 'ngcEmojiPicker' }]
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
            }], disabled: [{
                type: Input
            }], hasBackdrop: [{
                type: Input
            }], closeOnClickOutside: [{
                type: Input
            }], perLine: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWVtb2ppLXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1lbW9qaS1waWNrZXIvZW1vamktcGlja2VyL25nYy1lbW9qaS1waWNrZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQy9CLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUMvQixnQkFBZ0IsRUFBYSxpQkFBaUIsRUFFOUMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNOLE9BQU8sRUFDeUMsYUFBYSxFQUU3RCxNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLGNBQWMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUNOLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUN6QyxZQUFZLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFDckMsaUJBQWlCLEVBQ2pCLE1BQU0sT0FBTyxDQUFDO0FBRWYsT0FBTyxFQUFFLHVCQUF1QixFQUEwQyxNQUFNLDhCQUE4QixDQUFDOzs7QUFJeEcsSUFBTSx1QkFBdUIsR0FBN0IsTUFBTSx1QkFBdUI7SUF1Q25DOzs7Ozs7T0FNRztJQUNILFlBQ1MsUUFBaUIsRUFDakIsV0FBdUIsRUFDdkIsTUFBeUIsRUFDekIsTUFBd0I7UUFIeEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQWhERCxlQUFVLEdBQXNCLDBCQUEwQixDQUFDO1FBQzNELGtCQUFhLEdB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VSxNQUFNO3NCQUF0QixNQUFNO2dCQUNVLE1BQU07c0JBQXRCLE1BQU07Z0JBQ1UsYUFBYTtzQkFBN0IsTUFBTTtnQkEyQkEsWUFBWTtzQkFIbEIsWUFBWTt1QkFBRSxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUU7O3NCQUNuQyxZQUFZO3VCQUFFLGFBQWEsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7c0JBQ3pDLFlBQVk7dUJBQUUsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFO2dCQThPcEMsVUFBVSxNQWdCVixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCxcblx0RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCxcblx0Vmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZixcblx0T25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0T3ZlcmxheSwgT3ZlcmxheVJlZiwgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuXHRIb3Jpem9udGFsQ29ubmVjdGlvblBvcywgVmVydGljYWxDb25uZWN0aW9uUG9zLCBPdmVybGF5Q29uZmlnLFxuXHRQb3NpdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuXHRVbnN1YnNjcmliZXIsIERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbixcblx0Q29lcmNlTnVtYmVyLCBDb2VyY2VDc3NQaXhlbCwgTWVtb2l6ZSxcblx0dW50aWxDbXBEZXN0cm95ZWRcbn0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NFbW9qaVBpY2tlckNvbXBvbmVudCwgTmdjSUVtb2ppUGlja2VyUG9zaXRpb24sIE5nY0lFbW9qaURhdGEgfSBmcm9tICcuL25nYy1lbW9qaS1waWNrZXIuY29tcG9uZW50JztcblxuQFVuc3Vic2NyaWJlcigpXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmdjRW1vamlQaWNrZXJdJywgZXhwb3J0QXM6ICduZ2NFbW9qaVBpY2tlcicgfSlcbmV4cG9ydCBjbGFzcyBOZ2NFbW9qaVBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdID0gJ2Nkay1vdmVybGF5LWhpZ2hlc3QtcGFuZSc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXG5cdFx0J2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcblx0XHQnY2RrLW92ZXJsYXktaGlnaGVzdC1iYWNrZHJvcCcsXG5cdF07XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWluV2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1heFdpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWF4SGVpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGFzQmFja2Ryb3A6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2xvc2VPbkNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIHBlckxpbmU6IG51bWJlciA9IDEyO1xuXHRASW5wdXQoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIG9mZnNldFg6IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBvZmZzZXRZOiBudW1iZXI7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcmlnaW5YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG9yaWdpblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG92ZXJsYXlYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG92ZXJsYXlZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3M7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSAnbHRyJztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBwb3NpdGlvbjogTmdjSUVtb2ppUGlja2VyUG9zaXRpb24gPSAnYmVsb3cnO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHBpY2tlZDogRXZlbnRFbWl0dGVyPE5nY0lFbW9qaURhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2NJRW1vamlEYXRhPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGJhY2tkcm9wUHJlc3M6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuXHRwdWJsaWMgaXNPcGVuZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBfaXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBfaW5zdGFuY2U6IE5nY0Vtb2ppUGlja2VyQ29tcG9uZW50O1xuXHRwcml2YXRlIF9wb3J0YWw6IENvbXBvbmVudFBvcnRhbDxOZ2NFbW9qaVBpY2tlckNvbXBvbmVudD47XG5cdHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cdHByaXZhdGUgX3Jlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlcjtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7T3ZlcmxheX0gX292ZXJsYXlcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKiBAcGFyYW0ge0NoYW5nZURldGVjdG9yUmVmfSBfY2RSZWZcblx0ICogQHBhcmFtIHtWaWV3Q29udGFpbmVyUmVmfSBfdmNSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG5cdFx0cHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWZcblx0KSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdjbGljaycsIFsgJyRldmVudCcgXSApXG5cdEBIb3N0TGlzdGVuZXIoICdjb250ZXh0bWVudScsIFsgJyRldmVudCcgXSApXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLnNwYWNlJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJDbGljayggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCApIHJldHVybjtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5vcGVuKCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggIXRoaXMuX2luc3RhbmNlICkgcmV0dXJuO1xuXHRcdGlmICggY2hhbmdlcy5wZXJMaW5lICkgdGhpcy5faW5zdGFuY2UucGVyTGluZSA9IHRoaXMucGVyTGluZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuX292ZXJsYXlSZWY/LmRldGFjaCgpO1xuXHRcdHRoaXMuX292ZXJsYXlSZWY/LmRpc3Bvc2UoKTtcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSUVtb2ppRGF0YX0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvbkVtb2ppUGlja2VkKCBldmVudDogTmdjSUVtb2ppRGF0YSApIHtcblx0XHR0aGlzLnBpY2tlZC5lbWl0KCBldmVudCApO1xuXHRcdHRoaXMuY2xvc2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9wZW4oIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0Ly8gQ3JlYXRlIG92ZXJsYXkgcmVmXG5cdFx0dGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXlSZWYgfHwgdGhpcy5fY3JlYXRlT3ZlcmxheVJlZigpO1xuXG5cdFx0aWYgKCB0aGlzLl9pc1Bvc2l0aW9uU3RyYXRlZ3lVcGRhdGVkICkge1xuXHRcdFx0dGhpcy5faXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlZCA9IGZhbHNlO1xuXG5cdFx0XHR0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkgKSByZXR1cm47XG5cblx0XHR0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcblxuXHRcdC8vIENyZWF0ZSBlbW9qaSBwaWNrZXIgcG9ydGFsXG5cdFx0dGhpcy5fcG9ydGFsID0gdGhpcy5fcG9ydGFsIHx8IG5ldyBDb21wb25lbnRQb3J0YWwoIE5nY0Vtb2ppUGlja2VyQ29tcG9uZW50LCB0aGlzLl92Y1JlZiApO1xuXG5cdFx0Ly8gQXR0YWNoIGVtb2ppIHBpY2tlciB0byBvdmVybGF5XG5cdFx0Y29uc3QgaW5zdGFuY2U6IE5nY0Vtb2ppUGlja2VyQ29tcG9uZW50ID0gdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2goIHRoaXMuX3BvcnRhbCApLmluc3RhbmNlO1xuXG5cdFx0aW5zdGFuY2UucGVyTGluZSA9IHRoaXMucGVyTGluZTtcblx0XHRpbnN0YW5jZS5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCggdGhpcyApO1xuXHRcdGluc3RhbmNlLm9uUGlja2VkID0gdGhpcy5vbkVtb2ppUGlja2VkLmJpbmQoIHRoaXMgKTtcblxuXHRcdHRoaXMuX2luc3RhbmNlID0gaW5zdGFuY2U7XG5cblx0XHQvLyBFbWl0IG9uIG9wZW5lZCBldmVudFxuXHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdHRoaXMub3BlbmVkLmVtaXQoIGV2ZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjbG9zZSggZXZlbnQ/OiBFdmVudCApIHtcblx0XHR0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG5cblx0XHR0aGlzLl9vdmVybGF5UmVmPy5kZXRhY2goKTtcblx0XHR0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR0aGlzLmNsb3NlZC5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UG9zaXRpb25TdHJhdGVneT19IHBvc2l0aW9uU3RyYXRlZ3lcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyB1cGRhdGVQb3NpdGlvbiggcG9zaXRpb25TdHJhdGVneTogUG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKSApIHtcblx0XHR0aGlzLl9vdmVybGF5UmVmPy51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KCBwb3NpdGlvblN0cmF0ZWd5ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7T3ZlcmxheVJlZn1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYoKTogT3ZlcmxheVJlZiB7XG5cdFx0Y29uc3QgY29uZmlnOiBPdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuXHRcdFx0cGFuZWxDbGFzc1x0XHQ6IHRoaXMucGFuZWxDbGFzcyxcblx0XHRcdGJhY2tkcm9wQ2xhc3NcdDogdGhpcy5iYWNrZHJvcENsYXNzLFxuXHRcdFx0aGFzQmFja2Ryb3BcdFx0OiB0aGlzLmhhc0JhY2tkcm9wLFxuXHRcdFx0d2lkdGhcdFx0XHQ6IHRoaXMud2lkdGgsXG5cdFx0XHRtaW5XaWR0aFx0XHQ6IHBhcnNlRmxvYXQoIHRoaXMubWluV2lkdGggKSA8IHdpbmRvdy5pbm5lcldpZHRoID8gdGhpcy5taW5XaWR0aCA6IHVuZGVmaW5lZCxcblx0XHRcdG1heFdpZHRoXHRcdDogdGhpcy5tYXhXaWR0aCxcblx0XHRcdGhlaWdodFx0XHRcdDogdGhpcy5oZWlnaHQsXG5cdFx0XHRtaW5IZWlnaHRcdFx0OiBwYXJzZUZsb2F0KCB0aGlzLm1pbkhlaWdodCApIDwgd2luZG93LmlubmVySGVpZ2h0ID8gdGhpcy5taW5IZWlnaHQgOiB1bmRlZmluZWQsXG5cdFx0XHRtYXhIZWlnaHRcdFx0OiB0aGlzLm1heEhlaWdodCxcblx0XHRcdHNjcm9sbFN0cmF0ZWd5XHQ6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKHsgYXV0b0Nsb3NlOiB0cnVlLCBzY3JvbGxUaHJvdHRsZTogMTAwMCB9KSxcblx0XHRcdHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKSxcblx0XHR9KTtcblx0XHRjb25zdCBvdmVybGF5UmVmOiBPdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoIGNvbmZpZyApO1xuXG5cdFx0Ly8gU2V0IG92ZXJsYXkgZGlyZWN0aW9uXG5cdFx0b3ZlcmxheVJlZi5zZXREaXJlY3Rpb24oIHRoaXMuZGlyZWN0aW9uICk7XG5cblx0XHQvLyBDYXRjaCBrZXlib2FyZCBldmVudHMgb24gb3ZlcmxheVxuXHRcdG92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpXG5cdFx0LnBpcGUoIHVudGlsQ21wRGVzdHJveWVkKCB0aGlzICkgKVxuXHRcdC5zdWJzY3JpYmUoICggZXZlbnQ6IEtleWJvYXJkRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGV2ZW50LmtleSAhPT0gJ0VzY2FwZScgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuY2xvc2UoIGV2ZW50ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gT24gYmFja2Ryb3AgY2xpY2tcblx0XHRvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKVxuXHRcdC5waXBlKCB1bnRpbENtcERlc3Ryb3llZCggdGhpcyApIClcblx0XHQuc3Vic2NyaWJlKCAoIGV2ZW50OiBNb3VzZUV2ZW50ICkgPT4ge1xuXHRcdFx0dGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlICYmIHRoaXMuY2xvc2UoIGV2ZW50ICk7XG5cdFx0XHR0aGlzLmJhY2tkcm9wUHJlc3MuZW1pdCggZXZlbnQgKTtcblx0XHR9ICk7XG5cblx0XHQvKlxuXHRcdFJlYWQgbW9yZSBhYm91dCB0aGUgcmVzaXplIG9ic2VydmVyIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTYvMTAvcmVzaXplb2JzZXJ2ZXJcblx0XHRCYXNpY2FseSwgd2hhdCB3ZSBkbyBpcyB0aGF0IHdlIHN1YnNjcmliZSB0byBzaXplIGV2ZW50cyBvbiB0aGUgb3ZlcmxheS5cblx0XHRDdXJyZW50bHkgd2Ugb25seSBnZXQgb25lIGV2ZW50LCAodGhlbiB3ZSBkaXNjb25uZXQgdGhlIHJlc2l6ZSBvYnNlcnZlcikuXG5cdFx0QnV0IHRoZW4gd2Ugc2ltcGx5IGNhbGN1bGF0ZSBpZiB3ZSBuZWVkIHRvIGltcHJvdmUgdGhlIGxheW91dC5cblx0XHQgKi9cblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCAoIGVudHJpZXM6IFJlc2l6ZU9ic2VydmVyRW50cnlbXSApID0+IHtcblx0XHRcdGNvbnN0IHZpZXdQb3J0V2lkdGg6IG51bWJlciA9IE1hdGgubWF4KCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDAgKTtcblx0XHRcdGNvbnN0IHZpZXdQb3J0SGVpZ2h0OiBudW1iZXIgPSBNYXRoLm1heCggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDAgKTtcblxuXHRcdFx0Zm9yICggY29uc3QgZW50cnkgb2YgZW50cmllcyApIHtcblx0XHRcdFx0Ly8gV2UgZ2V0IHRoZSB3aWR0aCAmIGhlaWdodCBvZiB0aGUgZWxlbWVudCBmcm9tIHRoZSB0aGUgY29udGVudFJlY3QsIHByb3ZpZGVkIGJ5IHRoZSByZXNpemUgb2JzZXJ2ZXJcblx0XHRcdFx0Y29uc3Qgd2lkdGg6IG51bWJlciA9IGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoO1xuXHRcdFx0XHRjb25zdCBoZWlnaHQ6IG51bWJlciA9IGVudHJ5LmNvbnRlbnRSZWN0LmhlaWdodDtcblx0XHRcdFx0Y29uc3QgZG9tUmVhY3Q6IERPTVJlY3QgPSBlbnRyeS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdGNvbnN0IHg6IG51bWJlciA9IGRvbVJlYWN0LmxlZnQ7XG5cdFx0XHRcdGNvbnN0IHk6IG51bWJlciA9IGRvbVJlYWN0LnRvcDtcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0UGx1c1dpZHRoOiBudW1iZXIgPSB4ICsgd2lkdGg7XG5cdFx0XHRcdGNvbnN0IG9mZnNldFBsdXNIZWlnaHQ6IG51bWJlciA9IHkgKyBoZWlnaHQ7XG5cdFx0XHRcdGNvbnN0IHBpeGVsc092ZXJmbG93WDogbnVtYmVyID0gb2Zmc2V0UGx1c1dpZHRoIC0gdmlld1BvcnRXaWR0aDtcblx0XHRcdFx0Y29uc3QgcGl4ZWxzT3ZlcmZsb3dZOiBudW1iZXIgPSBvZmZzZXRQbHVzSGVpZ2h0IC0gdmlld1BvcnRIZWlnaHQ7XG5cblx0XHRcdFx0Ly8gSWYgeCBpcyBuZWdhdGl2ZSwgd2UgYXJlIG9mZi1zY3JlZW4gdG8gdGhlIGxlZnQuXG5cdFx0XHRcdC8vIElmIHkgaXMgbmVnYXRpdmUsIHdlIGFyZSBvZmYtc2NyZWVuIHRvIHRoZSB0b3AuXG5cdFx0XHRcdC8vIElmIHBpeGVsc092ZXJmbG93WCBpcyBwb3NpdGl2ZSwgd2UgYXJlIG9mZi1zY3JlZW4gb24gdGhlIHJpZ2h0XG5cdFx0XHRcdC8vIElmIHBpeGVsc092ZXJmbG93WSBpcyBwb3NpdGl2ZSwgd2UgYXJlIG9mZi1zY3JlZW4gb24gdGhlIGJvdHRvbVxuXHRcdFx0XHQvLyBJbiBlaXRoZXIgY2FzZSwgd2UgYWRvcHQgYSBuZXcgc3RyYXRlZ3kuXG5cdFx0XHRcdGlmICggeCA8IDAgfHwgeSA8IDAgfHwgcGl4ZWxzT3ZlcmZsb3dYID4gMSB8fCBwaXhlbHNPdmVyZmxvd1kgPiAxICkge1xuXHRcdFx0XHRcdHRoaXMuaXNPcGVuZWQgJiYgb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuXG5cdFx0XHRcdFx0dGhpcy5faXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBFbGVtZW50IGZvciB3aGljaCB0byBvYnNlcnZlIGhlaWdodCBhbmQgd2lkdGhcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlci5vYnNlcnZlKCBvdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50ICk7XG5cblx0XHRyZXR1cm4gb3ZlcmxheVJlZjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3l9XG5cdCAqL1xuXHRwcml2YXRlIF9jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCk6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XG5cdFx0Y29uc3Qgb3JpZ2luWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSB0aGlzLm9yaWdpblggfHwgJ3N0YXJ0Jztcblx0XHRsZXQgb3JpZ2luWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gdGhpcy5vcmlnaW5ZO1xuXHRcdGxldCBvcmlnaW5GYWxsYmFja1g6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gb3JpZ2luWDtcblx0XHRsZXQgb3JpZ2luRmFsbGJhY2tZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgPSBvcmlnaW5ZO1xuXHRcdGNvbnN0IG92ZXJsYXlYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9IHRoaXMub3ZlcmxheVggfHwgJ3N0YXJ0Jztcblx0XHRsZXQgb3ZlcmxheVk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IHRoaXMub3ZlcmxheVk7XG5cdFx0bGV0IG92ZXJsYXlGYWxsYmFja1g6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gb3ZlcmxheVg7XG5cdFx0bGV0IG92ZXJsYXlGYWxsYmFja1k6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IG92ZXJsYXlZO1xuXHRcdGNvbnN0IG9mZnNldFg6IG51bWJlciA9ICsoIHRoaXMub2Zmc2V0WCB8fCAwICk7XG5cdFx0bGV0IG9mZnNldFk6IG51bWJlciA9ICsoIHRoaXMub2Zmc2V0WSB8fCAwICk7XG5cblx0XHRzd2l0Y2ggKCB0aGlzLnBvc2l0aW9uICkge1xuXHRcdFx0Y2FzZSAnYWJvdmUnOlxuXHRcdFx0Y2FzZSAnYmVsb3cnOlxuXHRcdFx0XHRpZiAoICF0aGlzLm9yaWdpblkgKSBvcmlnaW5ZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG5cdFx0XHRcdGlmICggIXRoaXMub3ZlcmxheVkgKSBvdmVybGF5WSA9IHRoaXMucG9zaXRpb24gPT09ICdhYm92ZScgPyAnYm90dG9tJyA6ICd0b3AnO1xuXHRcdFx0XHRpZiAoIF8uaXNOaWwoIHRoaXMub2Zmc2V0WSApICkgb2Zmc2V0WSA9IHRoaXMucG9zaXRpb24gPT09ICdhYm92ZScgPyAtNSA6IDU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdG9yaWdpbkZhbGxiYWNrWCA9IHRoaXMuX2ZhbGxiYWNrWCggb3JpZ2luWCApO1xuXHRcdG9yaWdpbkZhbGxiYWNrWSA9IHRoaXMuX2ZhbGxiYWNrWSggb3JpZ2luWSApO1xuXHRcdG92ZXJsYXlGYWxsYmFja1ggPSB0aGlzLl9mYWxsYmFja1goIG92ZXJsYXlYICk7XG5cdFx0b3ZlcmxheUZhbGxiYWNrWSA9IHRoaXMuX2ZhbGxiYWNrWSggb3ZlcmxheVkgKTtcblxuXHRcdHJldHVybiB0aGlzLl9vdmVybGF5XG5cdFx0LnBvc2l0aW9uKClcblx0XHQuZmxleGlibGVDb25uZWN0ZWRUbyggdGhpcy5fZWxlbWVudFJlZiApXG5cdFx0LndpdGhGbGV4aWJsZURpbWVuc2lvbnMoIGZhbHNlIClcblx0XHQud2l0aExvY2tlZFBvc2l0aW9uKClcblx0XHQud2l0aFB1c2goIHRydWUgKVxuXHRcdC53aXRoUG9zaXRpb25zKFtcblx0XHRcdHtcblx0XHRcdFx0b3JpZ2luWCwgb3JpZ2luWSxcblx0XHRcdFx0b3ZlcmxheVgsIG92ZXJsYXlZLFxuXHRcdFx0XHRvZmZzZXRYLCBvZmZzZXRZLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0b3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZLFxuXHRcdFx0XHRvdmVybGF5WDogb3ZlcmxheUZhbGxiYWNrWCwgb3ZlcmxheVksXG5cdFx0XHRcdG9mZnNldFg6IC1vZmZzZXRYLCBvZmZzZXRZLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0b3JpZ2luWCwgb3JpZ2luWTogb3JpZ2luRmFsbGJhY2tZLFxuXHRcdFx0XHRvdmVybGF5WCwgb3ZlcmxheVk6IG92ZXJsYXlGYWxsYmFja1ksXG5cdFx0XHRcdG9mZnNldFgsIG9mZnNldFk6IC1vZmZzZXRZLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0b3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1ksXG5cdFx0XHRcdG92ZXJsYXlYOiBvdmVybGF5RmFsbGJhY2tYLCBvdmVybGF5WTogb3ZlcmxheUZhbGxiYWNrWSxcblx0XHRcdFx0b2Zmc2V0WDogLW9mZnNldFgsIG9mZnNldFk6IC1vZmZzZXRZLFxuXHRcdFx0fSxcblx0XHRdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0hvcml6b250YWxDb25uZWN0aW9uUG9zfSBvcmlnaW5cblx0ICogQHJldHVybiB7SG9yaXpvbnRhbENvbm5lY3Rpb25Qb3N9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHByaXZhdGUgX2ZhbGxiYWNrWCggb3JpZ2luOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyApOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyB7XG5cdFx0c3dpdGNoICggb3JpZ2luICkge1xuXHRcdFx0Y2FzZSAnc3RhcnQnOlxuXHRcdFx0XHRyZXR1cm4gJ2VuZCc7XG5cdFx0XHRjYXNlICdlbmQnOlxuXHRcdFx0XHRyZXR1cm4gJ3N0YXJ0Jztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBvcmlnaW47XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7VmVydGljYWxDb25uZWN0aW9uUG9zfSBvcmlnaW5cblx0ICogQHJldHVybiB7VmVydGljYWxDb25uZWN0aW9uUG9zfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwcml2YXRlIF9mYWxsYmFja1koIG9yaWdpbjogVmVydGljYWxDb25uZWN0aW9uUG9zICk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyB7XG5cdFx0c3dpdGNoICggb3JpZ2luICkge1xuXHRcdFx0Y2FzZSAndG9wJzpcblx0XHRcdFx0cmV0dXJuICdib3R0b20nO1xuXHRcdFx0Y2FzZSAnYm90dG9tJzpcblx0XHRcdFx0cmV0dXJuICd0b3AnO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG9yaWdpbjtcblx0XHR9XG5cdH1cblxufVxuIl19