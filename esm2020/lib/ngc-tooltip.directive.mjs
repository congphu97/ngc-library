import { __decorate, __metadata } from "tslib";
import { ElementRef, HostListener, Input, Directive, EventEmitter, Output, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, DomPortal } from '@angular/cdk/portal';
import { FocusMonitor } from '@angular/cdk/a11y';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';
import { Unsubscriber, DefaultValue, CoerceBoolean, CoerceNumber, CoerceCssPixel, Memoize, untilCmpDestroyed } from '@core';
import { NgcTooltipComponent } from './ngc-tooltip/ngc-tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/a11y";
const overlayRefs = [];
let NgcTooltipDirective = class NgcTooltipDirective {
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {ViewContainerRef} _vcRef
     * @param {FocusMonitor} _focusMonitor
     */
    constructor(_overlay, _elementRef, _cdRef, _vcRef, _focusMonitor) {
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._cdRef = _cdRef;
        this._vcRef = _vcRef;
        this._focusMonitor = _focusMonitor;
        this.panelClass = 'cdk-overlay-highest-pane';
        this.backdropClass = [
            'cdk-overlay-transparent-backdrop',
            'cdk-overlay-highest-backdrop',
        ];
        this.autoClose = true;
        this.hasBackdrop = true;
        this.closeOnClickOutside = true;
        this.openDelay = 300;
        this.closeDelay = 150;
        this.layoutDir = 'ltr';
        this.position = 'above';
        this.triggerType = 'hover';
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this._closeDebounce = _.debounce((event) => !this._overlayElementHover && this.close(event), 100);
    }
    get tooltip() { return this._tooltip; }
    set tooltip(tooltip) {
        if (tooltip === this._tooltip)
            return;
        this._tooltip = tooltip;
    }
    get canAttach() {
        return !!this._elementRef.nativeElement.clientWidth
            || !!this._elementRef.nativeElement.clientHeight;
    }
    triggerMouseClick(event) {
        if (this.triggerType === 'hover' || (this.once && this._visibleOnce))
            return;
        event.stopPropagation();
        clearTimeout(this._openTimeout);
        clearTimeout(this._closeTimeout);
        clearTimeout(this._closeAllTimeout);
        !this.programmatically && this.open(event);
    }
    triggerMouseEnter(event) {
        if (this.triggerType === 'press' || (this.once && this._visibleOnce))
            return;
        clearTimeout(this._openTimeout);
        clearTimeout(this._closeTimeout);
        clearTimeout(this._closeAllTimeout);
        !this.programmatically && this.open(event);
    }
    triggerMouseLeave(event) {
        if (!this.autoClose || this.triggerType === 'press')
            return;
        clearTimeout(this._openTimeout);
        clearTimeout(this._closeTimeout);
        clearTimeout(this._closeAllTimeout);
        !this.programmatically && this.close(event);
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        changes.tooltip && this._setTooltipMessage();
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef)
            .pipe(untilCmpDestroyed(this))
            .subscribe(this.close.bind(this));
        /*
        Read more about the resize observer here: https://developers.google.com/web/updates/2016/10/resizeobserver
        Basicaly, what we do is that we subscribe to size events on the overlay.
        Currently we only get one event, (then we disconnet the resize observer).
        But then we simply calculate if we need to improve the layout.
         */
        this._resizeObserver2?.disconnect();
        this._resizeObserver2 = new ResizeObserver(() => { !this.canAttach && this._close(); });
        this._resizeObserver2.observe(this._elementRef.nativeElement);
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        clearTimeout(this._openTimeout);
        clearTimeout(this._closeTimeout);
        clearTimeout(this._closeAllTimeout);
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
    open(event) {
        if (this.disabled)
            return;
        clearTimeout(this._openTimeout);
        clearTimeout(this._closeTimeout);
        clearTimeout(this._closeAllTimeout);
        this._openTimeout = setTimeout(this._open.bind(this, event), !this.programmatically ? this.openDelay : 0);
    }
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    close(event) {
        clearTimeout(this._openTimeout);
        clearTimeout(this._closeTimeout);
        clearTimeout(this._closeAllTimeout);
        if (!this._instance)
            return;
        this._closeTimeout = setTimeout(() => {
            if (this._overlayElementHover)
                return; // Cancel closing if hover is active on tooltip popup
            this._close(event);
        }, !this.programmatically ? this.closeDelay : 0);
    }
    /**
     * @return {void}
     */
    closeAll() {
        clearTimeout(this._openTimeout);
        clearTimeout(this._closeTimeout);
        clearTimeout(this._closeAllTimeout);
        this._closeAllTimeout = setTimeout(this._closeAll.bind(this), !this.programmatically ? this.closeDelay : 0);
    }
    /**
     * @param {PositionStrategy=} positionStrategy
     * @return {void}
     */
    updatePosition(positionStrategy = this._createPositionStrategy()) {
        this._overlayRef?.updatePositionStrategy(positionStrategy);
    }
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    _open(event) {
        if (!this.canAttach)
            return;
        // Create overlay ref
        this._overlayRef = this._overlayRef || this._createOverlayRef();
        if (this._isPositionStrategyUpdated) {
            this._isPositionStrategyUpdated = false;
            this.updatePosition();
        }
        // Push overlay ref to global
        overlayRefs.push(this._overlayRef);
        if (this._overlayRef.hasAttached())
            return;
        this.isOpened = this._visibleOnce = true;
        if (_.isString(this.tooltip)) {
            this._portal = this._portal || new ComponentPortal(NgcTooltipComponent, this._vcRef);
            this._instance = this._overlayRef.attach(this._portal).instance;
            this._setTooltipMessage();
        }
        else if (this.tooltip instanceof NgcTooltipComponent) {
            this._portal = this._portal || new DomPortal(this.tooltip.nativeElement);
            this._instance = this.tooltip;
            this._overlayRef.attach(this._portal);
        }
        if (this._instance) {
            // Assign tooltip instance properties
            const minWidth = this.minWidth ?? this.tooltip?.minWidth;
            const minHeight = this.minHeight ?? this.tooltip?.minHeight;
            this._instance.color = this.tooltipColor || this.tooltip?.color;
            this._instance.width = this.width ?? this.tooltip?.width;
            this._instance.minWidth = parseFloat(minWidth) < window.innerWidth ? minWidth : undefined;
            this._instance.maxWidth = this.maxWidth ?? this.tooltip?.maxWidth;
            this._instance.height = this.height ?? this.tooltip?.height;
            this._instance.minHeight = parseFloat(minHeight) < window.innerHeight ? minHeight : undefined;
            this._instance.maxHeight = this.maxHeight ?? this.tooltip?.maxHeight;
            this._instance.close = this.close.bind(this);
            // Detach tooltip out of dom tree changes detection
            this._instance.detectChanges();
            this._instance.detach();
        }
        // Add overlay element events
        this._overlayRef.overlayElement.removeEventListener('mousemove', undefined);
        this._overlayRef.overlayElement.removeEventListener('mouseleave', undefined);
        this._overlayRef.overlayElement.addEventListener('mousemove', () => this._overlayElementHover = true);
        this._overlayRef.overlayElement.addEventListener('mouseleave', (overlayMouseEvent) => {
            this._overlayElementHover = false;
            this.autoClose && this.close(overlayMouseEvent);
        });
        // Emit on opened event
        this._cdRef.markForCheck();
        this.opened.emit(event);
    }
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    _close(event) {
        this.isOpened = false;
        this._overlayRef?.detach();
        this._cdRef.markForCheck();
        this.closed.emit(event);
    }
    /**
     * @return {void}
     */
    _closeAll() {
        _.forEach(overlayRefs, (overlayRef) => { overlayRef.detach(); });
    }
    /**
     * @return {OverlayRef}
     */
    _createOverlayRef() {
        const config = new OverlayConfig({
            panelClass: this.panelClass ?? this.tooltip?.panelClass,
            backdropClass: this.backdropClass ?? this.tooltip?.backdropClass,
            hasBackdrop: this.triggerType === 'press',
            scrollStrategy: this._overlay.scrollStrategies.close(),
            positionStrategy: this._createPositionStrategy(),
        });
        const overlayRef = this._overlay.create(config);
        // Set layout dir
        overlayRef.setDirection(this.layoutDir);
        // On backdrop click
        overlayRef.backdropClick()
            .pipe(untilCmpDestroyed(this))
            .subscribe((event) => this.autoClose && this.close(event));
        // Update tooltip position classes
        if (this.position) {
            overlayRef.getConfig().positionStrategy
                .positionChanges
                .pipe(untilCmpDestroyed(this))
                .subscribe((change) => {
                const _originX = change.connectionPair.originX;
                const _originY = change.connectionPair.originY;
                const _overlayX = change.connectionPair.overlayX;
                const _overlayY = change.connectionPair.overlayY;
                let position;
                let direction;
                if (_originX === 'center') {
                    position = _originY === 'top' ? 'above' : 'below';
                    if (_overlayX !== 'center')
                        direction = _overlayX === 'start' ? 'start' : 'end';
                }
                if (_originY === 'center') {
                    position = _originX === 'start' ? 'before' : 'after';
                    if (_overlayY !== 'center')
                        direction = _overlayY === 'top' ? 'start' : 'end';
                }
                this._instance.setPositionClasses(position, direction);
                this._instance.detectChanges();
            });
        }
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
        let originX = this.originX || 'center';
        let originY = this.originY || 'center';
        let originFallbackX = originX;
        let originFallbackY = originY;
        let overlayX = this.overlayX || 'center';
        let overlayY = this.overlayY || 'center';
        let overlayFallbackX = overlayX;
        let overlayFallbackY = overlayY;
        let offsetX = +(this.offsetX || 0);
        let offsetY = +(this.offsetY || 0);
        let offsetFallbackX = offsetX;
        let offsetFallbackY = offsetY;
        switch (this.position) {
            case 'above':
            case 'below':
                if (!this.originY)
                    originY = this.position === 'above' ? 'top' : 'bottom';
                if (!this.overlayY)
                    overlayY = this.position === 'above' ? 'bottom' : 'top';
                if (_.isNil(this.offsetY))
                    offsetY = this.position === 'above' ? -7 : 7;
                offsetFallbackX = -offsetX;
                offsetFallbackY = -offsetY;
                break;
            case 'before':
            case 'after':
                if (!this.originX)
                    originX = this.position === 'before' ? 'start' : 'end';
                if (!this.overlayX)
                    overlayX = this.position === 'before' ? 'end' : 'start';
                if (_.isNil(this.offsetX))
                    offsetX = this.position === 'before' ? -7 : 7;
                offsetFallbackX = -offsetX;
                offsetFallbackY = -offsetY;
                break;
        }
        originFallbackX = this._fallbackX(originX);
        originFallbackY = this._fallbackY(originY);
        overlayFallbackX = this._fallbackX(overlayX);
        overlayFallbackY = this._fallbackY(overlayY);
        return this._overlay
            .position()
            .flexibleConnectedTo(this._elementRef)
            // .withFlexibleDimensions( false )
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
    /**
     * @return {void}
     */
    _setTooltipMessage() {
        if (!this._instance)
            return;
        this._instance.messageOnly = false;
        if (_.isString(this.tooltip)) {
            this._instance.message = this.tooltip.toString();
            this._instance.messageOnly = true;
        }
        this._instance.detectChanges();
    }
};
NgcTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTooltipDirective, deps: [{ token: i1.Overlay }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.ViewContainerRef }, { token: i2.FocusMonitor }], target: i0.ɵɵFactoryTarget.Directive });
NgcTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcTooltipDirective, selector: "[ngcTooltip]", inputs: { panelClass: "panelClass", backdropClass: "backdropClass", tooltipColor: "tooltipColor", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", height: "height", minHeight: "minHeight", maxHeight: "maxHeight", disabled: "disabled", once: "once", programmatically: "programmatically", autoClose: "autoClose", hasBackdrop: "hasBackdrop", closeOnClickOutside: "closeOnClickOutside", openDelay: "openDelay", closeDelay: "closeDelay", offsetX: "offsetX", offsetY: "offsetY", originX: "originX", originY: "originY", overlayX: "overlayX", overlayY: "overlayY", layoutDir: "layoutDir", position: "position", triggerType: "triggerType", tooltip: ["ngcTooltip", "tooltip"] }, outputs: { opened: "opened", closed: "closed" }, host: { listeners: { "click": "triggerMouseClick($event)", "mousemove": "triggerMouseEnter($event)", "mouseleave": "triggerMouseLeave($event)" } }, exportAs: ["ngcTooltip"], usesOnChanges: true, ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcTooltipDirective.prototype, "panelClass", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcTooltipDirective.prototype, "backdropClass", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "minWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "maxWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "height", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "minHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "maxHeight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTooltipDirective.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTooltipDirective.prototype, "once", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTooltipDirective.prototype, "programmatically", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTooltipDirective.prototype, "autoClose", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTooltipDirective.prototype, "hasBackdrop", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTooltipDirective.prototype, "closeOnClickOutside", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcTooltipDirective.prototype, "closeDelay", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcTooltipDirective.prototype, "offsetX", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcTooltipDirective.prototype, "offsetY", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "layoutDir", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "position", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcTooltipDirective.prototype, "triggerType", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcTooltipDirective.prototype, "_fallbackX", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcTooltipDirective.prototype, "_fallbackY", null);
NgcTooltipDirective = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [Overlay,
        ElementRef,
        ChangeDetectorRef,
        ViewContainerRef,
        FocusMonitor])
], NgcTooltipDirective);
export { NgcTooltipDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTooltipDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcTooltip]', exportAs: 'ngcTooltip' }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }, { type: i2.FocusMonitor }]; }, propDecorators: { panelClass: [{
                type: Input
            }], backdropClass: [{
                type: Input
            }], tooltipColor: [{
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
            }], once: [{
                type: Input
            }], programmatically: [{
                type: Input
            }], autoClose: [{
                type: Input
            }], hasBackdrop: [{
                type: Input
            }], closeOnClickOutside: [{
                type: Input
            }], openDelay: [{
                type: Input
            }], closeDelay: [{
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
            }], layoutDir: [{
                type: Input
            }], position: [{
                type: Input
            }], triggerType: [{
                type: Input
            }], opened: [{
                type: Output
            }], closed: [{
                type: Output
            }], tooltip: [{
                type: Input,
                args: ['ngcTooltip']
            }], triggerMouseClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], triggerMouseEnter: [{
                type: HostListener,
                args: ['mousemove', ['$event']]
            }], triggerMouseLeave: [{
                type: HostListener,
                args: ['mouseleave', ['$event']]
            }], _fallbackX: [], _fallbackY: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDL0IsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQy9CLGdCQUFnQixFQUNVLGlCQUFpQixFQUMzQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ04sT0FBTyxFQUNnQixhQUFhLEVBRXBDLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxjQUFjLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFDTixZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFDekMsWUFBWSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQ3JDLGlCQUFpQixFQUNqQixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxtQkFBbUIsRUFBNkMsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUlySCxNQUFNLFdBQVcsR0FBaUIsRUFBRSxDQUFDO0FBSTlCLElBQU0sbUJBQW1CLEdBQXpCLE1BQU0sbUJBQW1CO0lBaUUvQjs7Ozs7OztPQU9HO0lBQ0gsWUFDUyxRQUFpQixFQUNqQixXQUF1QixFQUN2QixNQUF5QixFQUN6QixNQUF3QixFQUN4QixhQUEyQjtRQUozQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLFdBQU0sR0FBTixN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LE1BQU07c0JBQXZDLEtBQUs7Z0JBQzRCLFNBQVM7c0JBQTFDLEtBQUs7Z0JBQzRCLFNBQVM7c0JBQTFDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLElBQUk7c0JBQXBDLEtBQUs7Z0JBQzJCLGdCQUFnQjtzQkFBaEQsS0FBSztnQkFDMkMsU0FBUztzQkFBekQsS0FBSztnQkFDMkMsV0FBVztzQkFBM0QsS0FBSztnQkFDMkMsbUJBQW1CO3NCQUFuRSxLQUFLO2dCQUNVLFNBQVM7c0JBQXhCLEtBQUs7Z0JBQzBDLFVBQVU7c0JBQXpELEtBQUs7Z0JBQzBCLE9BQU87c0JBQXRDLEtBQUs7Z0JBQzBCLE9BQU87c0JBQXRDLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFDMEIsU0FBUztzQkFBeEMsS0FBSztnQkFDMEIsUUFBUTtzQkFBdkMsS0FBSztnQkFDMEIsV0FBVztzQkFBMUMsS0FBSztnQkFFVyxNQUFNO3NCQUF0QixNQUFNO2dCQUNVLE1BQU07c0JBQXRCLE1BQU07Z0JBb0JILE9BQU87c0JBRFYsS0FBSzt1QkFBRSxZQUFZO2dCQThCYixpQkFBaUI7c0JBRHZCLFlBQVk7dUJBQUUsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFO2dCQVk3QixpQkFBaUI7c0JBRHZCLFlBQVk7dUJBQUUsV0FBVyxFQUFFLENBQUUsUUFBUSxDQUFFO2dCQVdqQyxpQkFBaUI7c0JBRHZCLFlBQVk7dUJBQUUsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFO2dCQXdZakMsVUFBVSxNQWdCVixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCxcblx0RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCxcblx0Vmlld0NvbnRhaW5lclJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LFxuXHRPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0T3ZlcmxheSwgT3ZlcmxheVJlZiwgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXG5cdFZlcnRpY2FsQ29ubmVjdGlvblBvcywgT3ZlcmxheUNvbmZpZywgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuXHRDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIFBvc2l0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBEb21Qb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcblx0VW5zdWJzY3JpYmVyLCBEZWZhdWx0VmFsdWUsIENvZXJjZUJvb2xlYW4sXG5cdENvZXJjZU51bWJlciwgQ29lcmNlQ3NzUGl4ZWwsIE1lbW9pemUsXG5cdHVudGlsQ21wRGVzdHJveWVkXG59IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBDb21wb25lbnQsIE5HQ0lUb29sdGlwRGlyZWN0aW9uLCBOR0NJVG9vbHRpcFBvc2l0aW9uIH0gZnJvbSAnLi9uZ2MtdG9vbHRpcC9uZ2MtdG9vbHRpcC5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOR0NJVG9vbHRpcFRyaWdnZXJUeXBlID0gJ2hvdmVyJyB8ICdwcmVzcyc7XG5cbmNvbnN0IG92ZXJsYXlSZWZzOiBPdmVybGF5UmVmW10gPSBbXTtcblxuQFVuc3Vic2NyaWJlcigpXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmdjVG9vbHRpcF0nLCBleHBvcnRBczogJ25nY1Rvb2x0aXAnIH0pXG5leHBvcnQgY2xhc3MgTmdjVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdID0gJ2Nkay1vdmVybGF5LWhpZ2hlc3QtcGFuZSc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXG5cdFx0J2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcblx0XHQnY2RrLW92ZXJsYXktaGlnaGVzdC1iYWNrZHJvcCcsXG5cdF07XG5cdEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwQ29sb3I6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHdpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBtaW5XaWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWF4V2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWluSGVpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBtYXhIZWlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIG9uY2U6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHByb2dyYW1tYXRpY2FsbHk6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhdXRvQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGFzQmFja2Ryb3A6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2xvc2VPbkNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcGVuRGVsYXk6IG51bWJlciA9IDMwMDtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgY2xvc2VEZWxheTogbnVtYmVyID0gMTUwO1xuXHRASW5wdXQoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIG9mZnNldFg6IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBvZmZzZXRZOiBudW1iZXI7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcmlnaW5YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG9yaWdpblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG92ZXJsYXlYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG92ZXJsYXlZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3M7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgbGF5b3V0RGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBwb3NpdGlvbjogTkdDSVRvb2x0aXBQb3NpdGlvbiA9ICdhYm92ZSc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgdHJpZ2dlclR5cGU6IE5HQ0lUb29sdGlwVHJpZ2dlclR5cGUgPSAnaG92ZXInO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cblx0cHVibGljIGlzT3BlbmVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgX29wZW5UaW1lb3V0OiBhbnk7XG5cdHByaXZhdGUgX2Nsb3NlVGltZW91dDogYW55O1xuXHRwcml2YXRlIF9jbG9zZUFsbFRpbWVvdXQ6IGFueTtcblx0cHJpdmF0ZSBfcG9ydGFsOiBhbnk7XG5cdHByaXZhdGUgX3Rvb2x0aXA6IGFueTtcblx0cHJpdmF0ZSBfaXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBfdmlzaWJsZU9uY2U6IGJvb2xlYW47XG5cdHByaXZhdGUgX292ZXJsYXlFbGVtZW50SG92ZXI6IGJvb2xlYW47XG5cdHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cdHByaXZhdGUgX2luc3RhbmNlOiBOZ2NUb29sdGlwQ29tcG9uZW50O1xuXHRwcml2YXRlIF9yZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXI7XG5cdHByaXZhdGUgX3Jlc2l6ZU9ic2VydmVyMjogUmVzaXplT2JzZXJ2ZXI7XG5cdHByaXZhdGUgX2Nsb3NlRGVib3VuY2U6IFJldHVyblR5cGU8dHlwZW9mIF8uZGVib3VuY2U+XG5cdFx0PSBfLmRlYm91bmNlKCAoIGV2ZW50OiBNb3VzZUV2ZW50ICkgPT4gIXRoaXMuX292ZXJsYXlFbGVtZW50SG92ZXIgJiYgdGhpcy5jbG9zZSggZXZlbnQgKSwgMTAwICk7XG5cblx0QElucHV0KCAnbmdjVG9vbHRpcCcgKVxuXHRnZXQgdG9vbHRpcCgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdG9vbHRpcDsgfVxuXHRzZXQgdG9vbHRpcCggdG9vbHRpcDogYW55ICkge1xuXHRcdGlmICggdG9vbHRpcCA9PT0gdGhpcy5fdG9vbHRpcCApIHJldHVybjtcblxuXHRcdHRoaXMuX3Rvb2x0aXAgPSB0b29sdGlwO1xuXHR9XG5cblx0Z2V0IGNhbkF0dGFjaCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcblx0XHRcdFx0fHwgISF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge092ZXJsYXl9IF9vdmVybGF5XG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gX2NkUmVmXG5cdCAqIEBwYXJhbSB7Vmlld0NvbnRhaW5lclJlZn0gX3ZjUmVmXG5cdCAqIEBwYXJhbSB7Rm9jdXNNb25pdG9yfSBfZm9jdXNNb25pdG9yXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuXHRcdHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yXG5cdCkge31cblxuXHRASG9zdExpc3RlbmVyKCAnY2xpY2snLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlck1vdXNlQ2xpY2soIGV2ZW50OiBNb3VzZUV2ZW50ICkge1xuXHRcdGlmICggdGhpcy50cmlnZ2VyVHlwZSA9PT0gJ2hvdmVyJyB8fCAoIHRoaXMub25jZSAmJiB0aGlzLl92aXNpYmxlT25jZSApICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9vcGVuVGltZW91dCApO1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fY2xvc2VUaW1lb3V0ICk7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9jbG9zZUFsbFRpbWVvdXQgKTtcblx0XHQhdGhpcy5wcm9ncmFtbWF0aWNhbGx5ICYmIHRoaXMub3BlbiggZXZlbnQgKTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlck1vdXNlRW50ZXIoIGV2ZW50OiBNb3VzZUV2ZW50ICkge1xuXHRcdGlmICggdGhpcy50cmlnZ2VyVHlwZSA9PT0gJ3ByZXNzJyB8fCAoIHRoaXMub25jZSAmJiB0aGlzLl92aXNpYmxlT25jZSApICkgcmV0dXJuO1xuXG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9vcGVuVGltZW91dCApO1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fY2xvc2VUaW1lb3V0ICk7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9jbG9zZUFsbFRpbWVvdXQgKTtcblx0XHQhdGhpcy5wcm9ncmFtbWF0aWNhbGx5ICYmIHRoaXMub3BlbiggZXZlbnQgKTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJNb3VzZUxlYXZlKCBldmVudDogTW91c2VFdmVudCApIHtcblx0XHRpZiAoICF0aGlzLmF1dG9DbG9zZSB8fCB0aGlzLnRyaWdnZXJUeXBlID09PSAncHJlc3MnICkgcmV0dXJuO1xuXG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9vcGVuVGltZW91dCApO1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fY2xvc2VUaW1lb3V0ICk7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9jbG9zZUFsbFRpbWVvdXQgKTtcblx0XHQhdGhpcy5wcm9ncmFtbWF0aWNhbGx5ICYmIHRoaXMuY2xvc2UoIGV2ZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0Y2hhbmdlcy50b29sdGlwICYmIHRoaXMuX3NldFRvb2x0aXBNZXNzYWdlKCk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5fZm9jdXNNb25pdG9yLm1vbml0b3IoIHRoaXMuX2VsZW1lbnRSZWYgKVxuXHRcdC5waXBlKCB1bnRpbENtcERlc3Ryb3llZCh0aGlzKSBhcyBhbnkgKVxuXHRcdC5zdWJzY3JpYmUoIHRoaXMuY2xvc2UuYmluZCggdGhpcyApICk7XG5cblx0XHQvKlxuXHRcdFJlYWQgbW9yZSBhYm91dCB0aGUgcmVzaXplIG9ic2VydmVyIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTYvMTAvcmVzaXplb2JzZXJ2ZXJcblx0XHRCYXNpY2FseSwgd2hhdCB3ZSBkbyBpcyB0aGF0IHdlIHN1YnNjcmliZSB0byBzaXplIGV2ZW50cyBvbiB0aGUgb3ZlcmxheS5cblx0XHRDdXJyZW50bHkgd2Ugb25seSBnZXQgb25lIGV2ZW50LCAodGhlbiB3ZSBkaXNjb25uZXQgdGhlIHJlc2l6ZSBvYnNlcnZlcikuXG5cdFx0QnV0IHRoZW4gd2Ugc2ltcGx5IGNhbGN1bGF0ZSBpZiB3ZSBuZWVkIHRvIGltcHJvdmUgdGhlIGxheW91dC5cblx0XHQgKi9cblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlcjI/LmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlcjIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICgpID0+IHsgIXRoaXMuY2FuQXR0YWNoICYmIHRoaXMuX2Nsb3NlKCk7IH0gKTtcblxuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyMi5vYnNlcnZlKCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fb3BlblRpbWVvdXQgKTtcblx0XHRjbGVhclRpbWVvdXQoIHRoaXMuX2Nsb3NlVGltZW91dCApO1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fY2xvc2VBbGxUaW1lb3V0ICk7XG5cdFx0dGhpcy5fY2xvc2VEZWJvdW5jZS5jYW5jZWwoKTtcblx0XHR0aGlzLl9vdmVybGF5UmVmPy5kZXRhY2goKTtcblx0XHR0aGlzLl9vdmVybGF5UmVmPy5kaXNwb3NlKCk7XG5cdFx0dGhpcy5fcmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlcjI/LmRpc2Nvbm5lY3QoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb3BlbiggZXZlbnQ/OiBNb3VzZUV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCApIHJldHVybjtcblxuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fb3BlblRpbWVvdXQgKTtcblx0XHRjbGVhclRpbWVvdXQoIHRoaXMuX2Nsb3NlVGltZW91dCApO1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fY2xvc2VBbGxUaW1lb3V0ICk7XG5cblx0XHR0aGlzLl9vcGVuVGltZW91dCA9IHNldFRpbWVvdXQoXG5cdFx0XHR0aGlzLl9vcGVuLmJpbmQoIHRoaXMsIGV2ZW50ICksXG5cdFx0XHQhdGhpcy5wcm9ncmFtbWF0aWNhbGx5ID8gdGhpcy5vcGVuRGVsYXkgOiAwXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xvc2UoIGV2ZW50PzogTW91c2VFdmVudCApIHtcblx0XHRjbGVhclRpbWVvdXQoIHRoaXMuX29wZW5UaW1lb3V0ICk7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9jbG9zZVRpbWVvdXQgKTtcblx0XHRjbGVhclRpbWVvdXQoIHRoaXMuX2Nsb3NlQWxsVGltZW91dCApO1xuXG5cdFx0aWYgKCAhdGhpcy5faW5zdGFuY2UgKSByZXR1cm47XG5cblx0XHR0aGlzLl9jbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRpZiAoIHRoaXMuX292ZXJsYXlFbGVtZW50SG92ZXIgKSByZXR1cm47IC8vIENhbmNlbCBjbG9zaW5nIGlmIGhvdmVyIGlzIGFjdGl2ZSBvbiB0b29sdGlwIHBvcHVwXG5cdFx0XHRcdHRoaXMuX2Nsb3NlKCBldmVudCApO1xuXHRcdFx0fSxcblx0XHRcdCF0aGlzLnByb2dyYW1tYXRpY2FsbHkgPyB0aGlzLmNsb3NlRGVsYXkgOiAwXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNsb3NlQWxsKCkge1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fb3BlblRpbWVvdXQgKTtcblx0XHRjbGVhclRpbWVvdXQoIHRoaXMuX2Nsb3NlVGltZW91dCApO1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy5fY2xvc2VBbGxUaW1lb3V0ICk7XG5cblx0XHR0aGlzLl9jbG9zZUFsbFRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuXHRcdFx0dGhpcy5fY2xvc2VBbGwuYmluZCggdGhpcyApLFxuXHRcdFx0IXRoaXMucHJvZ3JhbW1hdGljYWxseSA/IHRoaXMuY2xvc2VEZWxheSA6IDBcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UG9zaXRpb25TdHJhdGVneT19IHBvc2l0aW9uU3RyYXRlZ3lcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyB1cGRhdGVQb3NpdGlvbiggcG9zaXRpb25TdHJhdGVneTogUG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKSApIHtcblx0XHR0aGlzLl9vdmVybGF5UmVmPy51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KCBwb3NpdGlvblN0cmF0ZWd5ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfb3BlbiggZXZlbnQ/OiBNb3VzZUV2ZW50ICkge1xuXHRcdGlmICggIXRoaXMuY2FuQXR0YWNoICkgcmV0dXJuO1xuXG5cdFx0Ly8gQ3JlYXRlIG92ZXJsYXkgcmVmXG5cdFx0dGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXlSZWYgfHwgdGhpcy5fY3JlYXRlT3ZlcmxheVJlZigpO1xuXG5cdFx0aWYgKCB0aGlzLl9pc1Bvc2l0aW9uU3RyYXRlZ3lVcGRhdGVkICkge1xuXHRcdFx0dGhpcy5faXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlZCA9IGZhbHNlO1xuXG5cdFx0XHR0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG5cdFx0fVxuXG5cdFx0Ly8gUHVzaCBvdmVybGF5IHJlZiB0byBnbG9iYWxcblx0XHRvdmVybGF5UmVmcy5wdXNoKCB0aGlzLl9vdmVybGF5UmVmICk7XG5cblx0XHRpZiAoIHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSApIHJldHVybjtcblxuXHRcdHRoaXMuaXNPcGVuZWQgPSB0aGlzLl92aXNpYmxlT25jZSA9IHRydWU7XG5cblx0XHRpZiAoIF8uaXNTdHJpbmcoIHRoaXMudG9vbHRpcCApICkge1xuXHRcdFx0dGhpcy5fcG9ydGFsID0gdGhpcy5fcG9ydGFsIHx8IG5ldyBDb21wb25lbnRQb3J0YWwoIE5nY1Rvb2x0aXBDb21wb25lbnQsIHRoaXMuX3ZjUmVmICk7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZSA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKCB0aGlzLl9wb3J0YWwgKS5pbnN0YW5jZTtcblxuXHRcdFx0dGhpcy5fc2V0VG9vbHRpcE1lc3NhZ2UoKTtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLnRvb2x0aXAgaW5zdGFuY2VvZiBOZ2NUb29sdGlwQ29tcG9uZW50ICkge1xuXHRcdFx0dGhpcy5fcG9ydGFsID0gdGhpcy5fcG9ydGFsIHx8IG5ldyBEb21Qb3J0YWwoIHRoaXMudG9vbHRpcC5uYXRpdmVFbGVtZW50ICk7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZSA9IHRoaXMudG9vbHRpcDtcblxuXHRcdFx0dGhpcy5fb3ZlcmxheVJlZi5hdHRhY2goIHRoaXMuX3BvcnRhbCApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5faW5zdGFuY2UgKSB7XG5cdFx0XHQvLyBBc3NpZ24gdG9vbHRpcCBpbnN0YW5jZSBwcm9wZXJ0aWVzXG5cdFx0XHRjb25zdCBtaW5XaWR0aDogc3RyaW5nID0gdGhpcy5taW5XaWR0aCA/PyB0aGlzLnRvb2x0aXA/Lm1pbldpZHRoO1xuXHRcdFx0Y29uc3QgbWluSGVpZ2h0OiBzdHJpbmcgPSB0aGlzLm1pbkhlaWdodCA/PyB0aGlzLnRvb2x0aXA/Lm1pbkhlaWdodDtcblxuXHRcdFx0dGhpcy5faW5zdGFuY2UuY29sb3IgPSB0aGlzLnRvb2x0aXBDb2xvciB8fCB0aGlzLnRvb2x0aXA/LmNvbG9yO1xuXHRcdFx0dGhpcy5faW5zdGFuY2Uud2lkdGggPSB0aGlzLndpZHRoID8/IHRoaXMudG9vbHRpcD8ud2lkdGg7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5taW5XaWR0aCA9IHBhcnNlRmxvYXQoIG1pbldpZHRoICkgPCB3aW5kb3cuaW5uZXJXaWR0aCA/IG1pbldpZHRoIDogdW5kZWZpbmVkO1xuXHRcdFx0dGhpcy5faW5zdGFuY2UubWF4V2lkdGggPSB0aGlzLm1heFdpZHRoID8/IHRoaXMudG9vbHRpcD8ubWF4V2lkdGg7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5oZWlnaHQgPSB0aGlzLmhlaWdodCA/PyB0aGlzLnRvb2x0aXA/LmhlaWdodDtcblx0XHRcdHRoaXMuX2luc3RhbmNlLm1pbkhlaWdodCA9IHBhcnNlRmxvYXQoIG1pbkhlaWdodCApIDwgd2luZG93LmlubmVySGVpZ2h0ID8gbWluSGVpZ2h0IDogdW5kZWZpbmVkO1xuXHRcdFx0dGhpcy5faW5zdGFuY2UubWF4SGVpZ2h0ID0gdGhpcy5tYXhIZWlnaHQgPz8gdGhpcy50b29sdGlwPy5tYXhIZWlnaHQ7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCggdGhpcyApO1xuXG5cdFx0XHQvLyBEZXRhY2ggdG9vbHRpcCBvdXQgb2YgZG9tIHRyZWUgY2hhbmdlcyBkZXRlY3Rpb25cblx0XHRcdHRoaXMuX2luc3RhbmNlLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdHRoaXMuX2luc3RhbmNlLmRldGFjaCgpO1xuXHRcdH1cblxuXHRcdC8vIEFkZCBvdmVybGF5IGVsZW1lbnQgZXZlbnRzXG5cdFx0dGhpcy5fb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdW5kZWZpbmVkICk7XG5cdFx0dGhpcy5fb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsIHVuZGVmaW5lZCApO1xuXHRcdHRoaXMuX292ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsICgpID0+IHRoaXMuX292ZXJsYXlFbGVtZW50SG92ZXIgPSB0cnVlICk7XG5cdFx0dGhpcy5fb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsICggb3ZlcmxheU1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQgKSA9PiB7XG5cdFx0XHR0aGlzLl9vdmVybGF5RWxlbWVudEhvdmVyID0gZmFsc2U7XG5cblx0XHRcdHRoaXMuYXV0b0Nsb3NlICYmIHRoaXMuY2xvc2UoIG92ZXJsYXlNb3VzZUV2ZW50ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gRW1pdCBvbiBvcGVuZWQgZXZlbnRcblx0XHR0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR0aGlzLm9wZW5lZC5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2Nsb3NlKCBldmVudD86IE1vdXNlRXZlbnQgKSB7XG5cdFx0dGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8uZGV0YWNoKCk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0dGhpcy5jbG9zZWQuZW1pdCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfY2xvc2VBbGwoKSB7XG5cdFx0Xy5mb3JFYWNoKCBvdmVybGF5UmVmcywgKCBvdmVybGF5UmVmOiBPdmVybGF5UmVmICkgPT4geyBvdmVybGF5UmVmLmRldGFjaCgpOyB9ICk7XG5cdH1cblxuXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge092ZXJsYXlSZWZ9XG5cdCAqL1xuXHRwcml2YXRlIF9jcmVhdGVPdmVybGF5UmVmKCk6IE92ZXJsYXlSZWYge1xuXHRcdGNvbnN0IGNvbmZpZzogT3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcblx0XHRcdHBhbmVsQ2xhc3NcdFx0OiB0aGlzLnBhbmVsQ2xhc3MgPz8gdGhpcy50b29sdGlwPy5wYW5lbENsYXNzLFxuXHRcdFx0YmFja2Ryb3BDbGFzc1x0OiB0aGlzLmJhY2tkcm9wQ2xhc3MgPz8gdGhpcy50b29sdGlwPy5iYWNrZHJvcENsYXNzLFxuXHRcdFx0aGFzQmFja2Ryb3BcdFx0OiB0aGlzLnRyaWdnZXJUeXBlID09PSAncHJlc3MnLFxuXHRcdFx0c2Nyb2xsU3RyYXRlZ3lcdDogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG5cdFx0XHRwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCksXG5cdFx0fSk7XG5cdFx0Y29uc3Qgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKCBjb25maWcgKTtcblxuXHRcdC8vIFNldCBsYXlvdXQgZGlyXG5cdFx0b3ZlcmxheVJlZi5zZXREaXJlY3Rpb24oIHRoaXMubGF5b3V0RGlyICk7XG5cblx0XHQvLyBPbiBiYWNrZHJvcCBjbGlja1xuXHRcdG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpXG5cdFx0LnBpcGUoIHVudGlsQ21wRGVzdHJveWVkKHRoaXMpIGFzIGFueSApXG5cdFx0LnN1YnNjcmliZSggKCBldmVudDogTW91c2VFdmVudCApID0+IHRoaXMuYXV0b0Nsb3NlICYmIHRoaXMuY2xvc2UoIGV2ZW50ICkgKTtcblxuXHRcdC8vIFVwZGF0ZSB0b29sdGlwIHBvc2l0aW9uIGNsYXNzZXNcblx0XHRpZiAoIHRoaXMucG9zaXRpb24gKSB7XG5cdFx0XHQoIG92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kgKVxuXHRcdFx0LnBvc2l0aW9uQ2hhbmdlc1xuXHRcdFx0LnBpcGUoIHVudGlsQ21wRGVzdHJveWVkKHRoaXMpIGFzIGFueSApXG5cdFx0XHQuc3Vic2NyaWJlKCAoIGNoYW5nZTogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlICkgPT4ge1xuXHRcdFx0XHRjb25zdCBfb3JpZ2luWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3JpZ2luWDtcblx0XHRcdFx0Y29uc3QgX29yaWdpblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IGNoYW5nZS5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xuXHRcdFx0XHRjb25zdCBfb3ZlcmxheVg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYO1xuXHRcdFx0XHRjb25zdCBfb3ZlcmxheVk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IGNoYW5nZS5jb25uZWN0aW9uUGFpci5vdmVybGF5WTtcblx0XHRcdFx0bGV0IHBvc2l0aW9uOiBOR0NJVG9vbHRpcFBvc2l0aW9uO1xuXHRcdFx0XHRsZXQgZGlyZWN0aW9uOiBOR0NJVG9vbHRpcERpcmVjdGlvbjtcblxuXHRcdFx0XHRpZiAoIF9vcmlnaW5YID09PSAnY2VudGVyJyApIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IF9vcmlnaW5ZID09PSAndG9wJyA/ICdhYm92ZScgOiAnYmVsb3cnO1xuXG5cdFx0XHRcdFx0aWYgKCBfb3ZlcmxheVggIT09ICdjZW50ZXInICkgZGlyZWN0aW9uID0gX292ZXJsYXlYID09PSAnc3RhcnQnID8gJ3N0YXJ0JyA6ICdlbmQnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBfb3JpZ2luWSA9PT0gJ2NlbnRlcicgKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBfb3JpZ2luWCA9PT0gJ3N0YXJ0JyA/ICdiZWZvcmUnIDogJ2FmdGVyJztcblxuXHRcdFx0XHRcdGlmICggX292ZXJsYXlZICE9PSAnY2VudGVyJyApIGRpcmVjdGlvbiA9IF9vdmVybGF5WSA9PT0gJ3RvcCcgPyAnc3RhcnQnIDogJ2VuZCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9pbnN0YW5jZS5zZXRQb3NpdGlvbkNsYXNzZXMoIHBvc2l0aW9uLCBkaXJlY3Rpb24gKTtcblx0XHRcdFx0dGhpcy5faW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0UmVhZCBtb3JlIGFib3V0IHRoZSByZXNpemUgb2JzZXJ2ZXIgaGVyZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNi8xMC9yZXNpemVvYnNlcnZlclxuXHRcdEJhc2ljYWx5LCB3aGF0IHdlIGRvIGlzIHRoYXQgd2Ugc3Vic2NyaWJlIHRvIHNpemUgZXZlbnRzIG9uIHRoZSBvdmVybGF5LlxuXHRcdEN1cnJlbnRseSB3ZSBvbmx5IGdldCBvbmUgZXZlbnQsICh0aGVuIHdlIGRpc2Nvbm5ldCB0aGUgcmVzaXplIG9ic2VydmVyKS5cblx0XHRCdXQgdGhlbiB3ZSBzaW1wbHkgY2FsY3VsYXRlIGlmIHdlIG5lZWQgdG8gaW1wcm92ZSB0aGUgbGF5b3V0LlxuXHRcdCAqL1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG5cdFx0dGhpcy5fcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoICggZW50cmllczogUmVzaXplT2JzZXJ2ZXJFbnRyeVtdICkgPT4ge1xuXHRcdFx0Y29uc3Qgdmlld1BvcnRXaWR0aDogbnVtYmVyID0gTWF0aC5tYXgoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCApO1xuXHRcdFx0Y29uc3Qgdmlld1BvcnRIZWlnaHQ6IG51bWJlciA9IE1hdGgubWF4KCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCApO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBlbnRyeSBvZiBlbnRyaWVzICkge1xuXHRcdFx0XHQvLyBXZSBnZXQgdGhlIHdpZHRoICYgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGZyb20gdGhlIHRoZSBjb250ZW50UmVjdCwgcHJvdmlkZWQgYnkgdGhlIHJlc2l6ZSBvYnNlcnZlclxuXHRcdFx0XHRjb25zdCB3aWR0aDogbnVtYmVyID0gZW50cnkuY29udGVudFJlY3Qud2lkdGg7XG5cdFx0XHRcdGNvbnN0IGhlaWdodDogbnVtYmVyID0gZW50cnkuY29udGVudFJlY3QuaGVpZ2h0O1xuXHRcdFx0XHRjb25zdCBkb21SZWFjdDogRE9NUmVjdCA9IGVudHJ5LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0Y29uc3QgeDogbnVtYmVyID0gZG9tUmVhY3QubGVmdDtcblx0XHRcdFx0Y29uc3QgeTogbnVtYmVyID0gZG9tUmVhY3QudG9wO1xuXHRcdFx0XHRjb25zdCBvZmZzZXRQbHVzV2lkdGg6IG51bWJlciA9IHggKyB3aWR0aDtcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0UGx1c0hlaWdodDogbnVtYmVyID0geSArIGhlaWdodDtcblx0XHRcdFx0Y29uc3QgcGl4ZWxzT3ZlcmZsb3dYOiBudW1iZXIgPSBvZmZzZXRQbHVzV2lkdGggLSB2aWV3UG9ydFdpZHRoO1xuXHRcdFx0XHRjb25zdCBwaXhlbHNPdmVyZmxvd1k6IG51bWJlciA9IG9mZnNldFBsdXNIZWlnaHQgLSB2aWV3UG9ydEhlaWdodDtcblxuXHRcdFx0XHQvLyBJZiB4IGlzIG5lZ2F0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiB0byB0aGUgbGVmdC5cblx0XHRcdFx0Ly8gSWYgeSBpcyBuZWdhdGl2ZSwgd2UgYXJlIG9mZi1zY3JlZW4gdG8gdGhlIHRvcC5cblx0XHRcdFx0Ly8gSWYgcGl4ZWxzT3ZlcmZsb3dYIGlzIHBvc2l0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiBvbiB0aGUgcmlnaHRcblx0XHRcdFx0Ly8gSWYgcGl4ZWxzT3ZlcmZsb3dZIGlzIHBvc2l0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiBvbiB0aGUgYm90dG9tXG5cdFx0XHRcdC8vIEluIGVpdGhlciBjYXNlLCB3ZSBhZG9wdCBhIG5ldyBzdHJhdGVneS5cblx0XHRcdFx0aWYgKCB4IDwgMCB8fCB5IDwgMCB8fCBwaXhlbHNPdmVyZmxvd1ggPiAxIHx8IHBpeGVsc092ZXJmbG93WSA+IDEgKSB7XG5cdFx0XHRcdFx0dGhpcy5pc09wZW5lZCAmJiBvdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG5cblx0XHRcdFx0XHR0aGlzLl9pc1Bvc2l0aW9uU3RyYXRlZ3lVcGRhdGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIEVsZW1lbnQgZm9yIHdoaWNoIHRvIG9ic2VydmUgaGVpZ2h0IGFuZCB3aWR0aFxuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUoIG92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQgKTtcblxuXHRcdHJldHVybiBvdmVybGF5UmVmO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0ZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneX1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcblx0XHRsZXQgb3JpZ2luWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSB0aGlzLm9yaWdpblggfHwgJ2NlbnRlcic7XG5cdFx0bGV0IG9yaWdpblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IHRoaXMub3JpZ2luWSB8fCAnY2VudGVyJztcblx0XHRsZXQgb3JpZ2luRmFsbGJhY2tYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9IG9yaWdpblg7XG5cdFx0bGV0IG9yaWdpbkZhbGxiYWNrWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gb3JpZ2luWTtcblx0XHRsZXQgb3ZlcmxheVg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gdGhpcy5vdmVybGF5WCB8fCAnY2VudGVyJztcblx0XHRsZXQgb3ZlcmxheVk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IHRoaXMub3ZlcmxheVkgfHwgJ2NlbnRlcic7XG5cdFx0bGV0IG92ZXJsYXlGYWxsYmFja1g6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gb3ZlcmxheVg7XG5cdFx0bGV0IG92ZXJsYXlGYWxsYmFja1k6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IG92ZXJsYXlZO1xuXHRcdGxldCBvZmZzZXRYOiBudW1iZXIgPSArKCB0aGlzLm9mZnNldFggfHwgMCApO1xuXHRcdGxldCBvZmZzZXRZOiBudW1iZXIgPSArKCB0aGlzLm9mZnNldFkgfHwgMCApO1xuXHRcdGxldCBvZmZzZXRGYWxsYmFja1g6IG51bWJlciA9IG9mZnNldFg7XG5cdFx0bGV0IG9mZnNldEZhbGxiYWNrWTogbnVtYmVyID0gb2Zmc2V0WTtcblxuXHRcdHN3aXRjaCAoIHRoaXMucG9zaXRpb24gKSB7XG5cdFx0XHRjYXNlICdhYm92ZSc6XG5cdFx0XHRjYXNlICdiZWxvdyc6XG5cdFx0XHRcdGlmICggIXRoaXMub3JpZ2luWSApIG9yaWdpblkgPSB0aGlzLnBvc2l0aW9uID09PSAnYWJvdmUnID8gJ3RvcCcgOiAnYm90dG9tJztcblx0XHRcdFx0aWYgKCAhdGhpcy5vdmVybGF5WSApIG92ZXJsYXlZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/ICdib3R0b20nIDogJ3RvcCc7XG5cdFx0XHRcdGlmICggXy5pc05pbCggdGhpcy5vZmZzZXRZICkgKSBvZmZzZXRZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/IC03IDogNztcblxuXHRcdFx0XHRvZmZzZXRGYWxsYmFja1ggPSAtb2Zmc2V0WDtcblx0XHRcdFx0b2Zmc2V0RmFsbGJhY2tZID0gLW9mZnNldFk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYmVmb3JlJzpcblx0XHRcdGNhc2UgJ2FmdGVyJzpcblx0XHRcdFx0aWYgKCAhdGhpcy5vcmlnaW5YICkgb3JpZ2luWCA9IHRoaXMucG9zaXRpb24gPT09ICdiZWZvcmUnID8gJ3N0YXJ0JyA6ICdlbmQnO1xuXHRcdFx0XHRpZiAoICF0aGlzLm92ZXJsYXlYICkgb3ZlcmxheVggPSB0aGlzLnBvc2l0aW9uID09PSAnYmVmb3JlJyA/ICdlbmQnIDogJ3N0YXJ0Jztcblx0XHRcdFx0aWYgKCBfLmlzTmlsKCB0aGlzLm9mZnNldFggKSApIG9mZnNldFggPSB0aGlzLnBvc2l0aW9uID09PSAnYmVmb3JlJyA/IC03IDogNztcblxuXHRcdFx0XHRvZmZzZXRGYWxsYmFja1ggPSAtb2Zmc2V0WDtcblx0XHRcdFx0b2Zmc2V0RmFsbGJhY2tZID0gLW9mZnNldFk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdG9yaWdpbkZhbGxiYWNrWCA9IHRoaXMuX2ZhbGxiYWNrWCggb3JpZ2luWCApO1xuXHRcdG9yaWdpbkZhbGxiYWNrWSA9IHRoaXMuX2ZhbGxiYWNrWSggb3JpZ2luWSApO1xuXHRcdG92ZXJsYXlGYWxsYmFja1ggPSB0aGlzLl9mYWxsYmFja1goIG92ZXJsYXlYICk7XG5cdFx0b3ZlcmxheUZhbGxiYWNrWSA9IHRoaXMuX2ZhbGxiYWNrWSggb3ZlcmxheVkgKTtcblxuXHRcdHJldHVybiB0aGlzLl9vdmVybGF5XG5cdFx0LnBvc2l0aW9uKClcblx0XHQuZmxleGlibGVDb25uZWN0ZWRUbyggdGhpcy5fZWxlbWVudFJlZiApXG5cdFx0Ly8gLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoIGZhbHNlIClcblx0XHQud2l0aExvY2tlZFBvc2l0aW9uKClcblx0XHQud2l0aFB1c2goIHRydWUgKVxuXHRcdC53aXRoUG9zaXRpb25zKFtcblx0XHRcdHtcblx0XHRcdFx0b3JpZ2luWCwgb3JpZ2luWSxcblx0XHRcdFx0b3ZlcmxheVgsIG92ZXJsYXlZLFxuXHRcdFx0XHRvZmZzZXRYLCBvZmZzZXRZLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0b3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZLFxuXHRcdFx0XHRvdmVybGF5WDogb3ZlcmxheUZhbGxiYWNrWCwgb3ZlcmxheVksXG5cdFx0XHRcdG9mZnNldFg6IG9mZnNldEZhbGxiYWNrWCwgb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblgsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVgsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZLFxuXHRcdFx0XHRvZmZzZXRYLCBvZmZzZXRZOiBvZmZzZXRGYWxsYmFja1ksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZLFxuXHRcdFx0XHRvZmZzZXRYOiBvZmZzZXRGYWxsYmFja1gsIG9mZnNldFk6IG9mZnNldEZhbGxiYWNrWSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSxcblx0XHRcdFx0b3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZLFxuXHRcdFx0XHRvZmZzZXRYOiAtNywgb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSxcblx0XHRcdFx0b3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WSxcblx0XHRcdFx0b2Zmc2V0WDogNywgb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblgsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVgsIG92ZXJsYXlZOiAndG9wJyxcblx0XHRcdFx0b2Zmc2V0WCwgb2Zmc2V0WTogLTcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1ksXG5cdFx0XHRcdG92ZXJsYXlYLCBvdmVybGF5WTogJ2JvdHRvbScsXG5cdFx0XHRcdG9mZnNldFgsIG9mZnNldFk6IDcsXG5cdFx0XHR9LFxuXHRcdF0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SG9yaXpvbnRhbENvbm5lY3Rpb25Qb3N9IG9yaWdpblxuXHQgKiBAcmV0dXJuIHtIb3Jpem9udGFsQ29ubmVjdGlvblBvc31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHJpdmF0ZSBfZmFsbGJhY2tYKCBvcmlnaW46IEhvcml6b250YWxDb25uZWN0aW9uUG9zICk6IEhvcml6b250YWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICdzdGFydCc6XG5cdFx0XHRcdHJldHVybiAnZW5kJztcblx0XHRcdGNhc2UgJ2VuZCc6XG5cdFx0XHRcdHJldHVybiAnc3RhcnQnO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG9yaWdpbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtWZXJ0aWNhbENvbm5lY3Rpb25Qb3N9IG9yaWdpblxuXHQgKiBAcmV0dXJuIHtWZXJ0aWNhbENvbm5lY3Rpb25Qb3N9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHByaXZhdGUgX2ZhbGxiYWNrWSggb3JpZ2luOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgKTogVmVydGljYWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICd0b3AnOlxuXHRcdFx0XHRyZXR1cm4gJ2JvdHRvbSc7XG5cdFx0XHRjYXNlICdib3R0b20nOlxuXHRcdFx0XHRyZXR1cm4gJ3RvcCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfc2V0VG9vbHRpcE1lc3NhZ2UoKSB7XG5cdFx0aWYgKCAhdGhpcy5faW5zdGFuY2UgKSByZXR1cm47XG5cblx0XHR0aGlzLl9pbnN0YW5jZS5tZXNzYWdlT25seSA9IGZhbHNlO1xuXG5cdFx0aWYgKCBfLmlzU3RyaW5nKCB0aGlzLnRvb2x0aXAgKSApIHtcblx0XHRcdHRoaXMuX2luc3RhbmNlLm1lc3NhZ2UgPSB0aGlzLnRvb2x0aXAudG9TdHJpbmcoKTtcblx0XHRcdHRoaXMuX2luc3RhbmNlLm1lc3NhZ2VPbmx5ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLl9pbnN0YW5jZS5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxufVxuIl19