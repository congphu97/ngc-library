import { __decorate, __metadata } from "tslib";
import { ElementRef, HostListener, Input, Directive, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';
import { Unsubscriber, DefaultValue, CoerceBoolean, CoerceNumber, CoerceCssPixel, Memoize, untilCmpDestroyed } from '@core';
import { NgcMenuComponent } from '../menu/ngc-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
let NgcMenuTriggerForDirective = class NgcMenuTriggerForDirective {
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {ElementRef} _elementRef
     * @param {ViewContainerRef} _vcRef
     */
    constructor(_overlay, _elementRef, _vcRef) {
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._vcRef = _vcRef;
        this.backdropClass = 'cdk-overlay-transparent-backdrop';
        this.hasBackdrop = true;
        this.closeOnClickOutside = true;
        this.layoutDir = 'ltr';
        this.position = 'below';
        this.menuInit = new EventEmitter();
        this.menuOpened = new EventEmitter();
        this.menuClosed = new EventEmitter();
        this.menuBackdropPress = new EventEmitter();
    }
    get menu() { return this._menu; }
    set menu(menu) {
        if (menu === this._menu)
            return;
        this._menu = menu;
        this.menuInit.emit(this);
    }
    get isMenuOpened() { return this._isMenuOpened; }
    set isMenuOpened(value) {
        if (!this.menu || this.menu.isOpened === value)
            return;
        this._isMenuOpened = this.menu.isOpened = value;
    }
    triggerClick(event) {
        if (this.programmatically)
            return;
        event.stopPropagation();
        event.preventDefault();
        this.open(event);
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
    open(event, data) {
        if (!this.menu || this.menu.isOpened)
            return;
        // Bind functions to menu
        this.menu.close = this.close.bind(this);
        this.menu.reopen = this.reopen.bind(this);
        // Auto fit menu position
        this.autoFit && this._autoFitMenuPosition();
        // Create overlay ref
        this._overlayRef = this._overlayRef || this._createOverlayRef();
        if (this._isPositionStrategyUpdated) {
            this._isPositionStrategyUpdated = false;
            this.updatePosition();
        }
        if (this.programmatically && this._overlayRef.hasAttached())
            return;
        this.isMenuOpened = true;
        // Create menu portal
        this._portal = this._createTemplatePortal();
        // Attach menu to overlay
        this.menu.onOpened({ ...data, ...this.menuData });
        this._overlayRef.attach(this._portal);
        // Emit on opened event
        this.menuOpened.emit(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    close(event) {
        if (!this.isMenuOpened)
            return;
        this.isMenuOpened = false;
        this._overlayRef?.detach();
        this.menu?.onClosed();
        this.menuClosed.emit(event);
    }
    /**
     * @return {void}
     */
    reopen() {
        if (!this.isMenuOpened)
            return;
        this._overlayRef.detach();
        this._overlayRef.attach(this._portal);
    }
    /**
     * @param {PositionStrategy=} positionStrategy
     * @return {void}
     */
    updatePosition(positionStrategy = this._createPositionStrategy()) {
        this._overlayRef?.updatePositionStrategy(positionStrategy);
    }
    /**
     * @return {TemplatePortal}
     */
    _createTemplatePortal() {
        if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new TemplatePortal(this.menu?.templateRef, this._vcRef);
        }
        return this._portal;
    }
    /**
     * @return {OverlayRef}
     */
    _createOverlayRef() {
        const config = new OverlayConfig({
            panelClass: this.panelClass ?? this.menu.panelClass,
            backdropClass: this.backdropClass ?? this.menu.backdropClass,
            hasBackdrop: this.hasBackdrop ?? this.menu.hasBackdrop,
            scrollStrategy: this._overlay.scrollStrategies.reposition({ autoClose: true, scrollThrottle: 1000 }),
            positionStrategy: this._createPositionStrategy(),
        });
        const overlayRef = this._overlay.create(config);
        // Set layout direction
        overlayRef.setDirection(this.layoutDir);
        // Catch keyboard events on overlay
        overlayRef.keydownEvents()
            .pipe(untilCmpDestroyed(this))
            .subscribe((event) => {
            switch (event.key) {
                case 'ArrowDown':
                    if (!this.menu.menuItems.length)
                        return;
                    event.stopPropagation();
                    event.preventDefault();
                    this.menu.focusNextItem(event);
                    break;
                case 'ArrowUp':
                    if (!this.menu.menuItems.length)
                        return;
                    event.stopPropagation();
                    event.preventDefault();
                    this.menu.focusPreviousItem(event);
                    break;
                case 'Enter':
                    if (!this.menu.menuItems.length)
                        return;
                    event.stopPropagation();
                    event.preventDefault();
                    this.menu.chooseItem(event);
                    break;
                case 'Escape':
                    event.stopPropagation();
                    event.preventDefault();
                    this.close(event);
                    break;
            }
        });
        // On backdrop click
        overlayRef.backdropClick()
            .pipe(untilCmpDestroyed(this))
            .subscribe((event) => {
            (this.closeOnClickOutside || this.menu.closeOnClickOutside) && this.close(event);
            this.menuBackdropPress.emit(event);
            this.menu.backdropPress.emit(event);
        });
        // Update menu position classes
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
                this.menu.setPositionClasses(position, direction);
            });
        }
        // Bind sizes to menu
        const minWidth = this.minWidth ?? this.menu.minWidth;
        const minHeight = this.minHeight ?? this.menu.minHeight;
        this.menu.width = this.width ?? this.menu.width;
        this.menu.minWidth = parseFloat(minWidth) < window.innerWidth ? minWidth : undefined;
        this.menu.maxWidth = this.maxWidth ?? this.menu.maxWidth;
        this.menu.height = this.height ?? this.menu.height;
        this.menu.minHeight = parseFloat(minHeight) < window.innerHeight ? minHeight : undefined;
        this.menu.maxHeight = this.maxHeight ?? this.menu.maxHeight;
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
                    this.isMenuOpened && overlayRef.updatePosition();
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
    _autoFitMenuPosition() {
        switch (this.position) {
            case 'above':
            case 'below':
                this.originX || (this.originX = 'start');
                this.originY || (this.originY = this.position === 'above' ? 'top' : 'bottom');
                this.overlayX || (this.overlayX = 'start');
                this.overlayY || (this.overlayY = this.position === 'above' ? 'bottom' : 'top');
                this.offsetX || (this.offsetX = 0);
                this.offsetY || (this.offsetY = 0);
                this.width = this._elementRef.nativeElement.clientWidth;
                break;
            case 'before':
            case 'after':
                this.originX || (this.originX = this.position === 'before' ? 'start' : 'end');
                this.originY || (this.originY = 'top');
                this.overlayX || (this.overlayX = this.position === 'before' ? 'end' : 'start');
                this.overlayY || (this.overlayY = 'top');
                this.offsetX || (this.offsetX = 0);
                this.offsetY || (this.offsetY = 0);
                this.height = this._elementRef.nativeElement.clientHeight;
                break;
        }
    }
};
NgcMenuTriggerForDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuTriggerForDirective, deps: [{ token: i1.Overlay }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcMenuTriggerForDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcMenuTriggerForDirective, selector: "[ngcMenuTriggerFor]", inputs: { panelClass: "panelClass", backdropClass: "backdropClass", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", height: "height", minHeight: "minHeight", maxHeight: "maxHeight", programmatically: "programmatically", autoFit: "autoFit", disabled: "disabled", hasBackdrop: "hasBackdrop", closeOnClickOutside: "closeOnClickOutside", offsetX: "offsetX", offsetY: "offsetY", originX: "originX", originY: "originY", overlayX: "overlayX", overlayY: "overlayY", layoutDir: "layoutDir", position: "position", menuData: "menuData", menu: ["ngcMenuTriggerFor", "menu"] }, outputs: { menuInit: "menuInit", menuOpened: "menuOpened", menuClosed: "menuClosed", menuBackdropPress: "menuBackdropPress" }, host: { listeners: { "click": "triggerClick($event)", "contextmenu": "triggerClick($event)", "keydown.space": "triggerClick($event)" } }, exportAs: ["ngcMenuTriggerFor"], ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcMenuTriggerForDirective.prototype, "backdropClass", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuTriggerForDirective.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuTriggerForDirective.prototype, "minWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuTriggerForDirective.prototype, "maxWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuTriggerForDirective.prototype, "height", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuTriggerForDirective.prototype, "minHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuTriggerForDirective.prototype, "maxHeight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuTriggerForDirective.prototype, "programmatically", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuTriggerForDirective.prototype, "autoFit", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuTriggerForDirective.prototype, "disabled", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuTriggerForDirective.prototype, "hasBackdrop", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuTriggerForDirective.prototype, "closeOnClickOutside", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcMenuTriggerForDirective.prototype, "offsetX", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcMenuTriggerForDirective.prototype, "offsetY", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcMenuTriggerForDirective.prototype, "layoutDir", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcMenuTriggerForDirective.prototype, "position", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcMenuTriggerForDirective.prototype, "_fallbackX", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcMenuTriggerForDirective.prototype, "_fallbackY", null);
NgcMenuTriggerForDirective = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [Overlay, ElementRef, ViewContainerRef])
], NgcMenuTriggerForDirective);
export { NgcMenuTriggerForDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuTriggerForDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcMenuTriggerFor]', exportAs: 'ngcMenuTriggerFor' }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { panelClass: [{
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
            }], programmatically: [{
                type: Input
            }], autoFit: [{
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
            }], layoutDir: [{
                type: Input
            }], position: [{
                type: Input
            }], menuData: [{
                type: Input
            }], menuInit: [{
                type: Output
            }], menuOpened: [{
                type: Output
            }], menuClosed: [{
                type: Output
            }], menuBackdropPress: [{
                type: Output
            }], menu: [{
                type: Input,
                args: ['ngcMenuTriggerFor']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUtdHJpZ2dlci1mb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtbWVudS9tZW51LXRyaWdnZXItZm9yL25nYy1tZW51LXRyaWdnZXItZm9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUMvQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDL0IsZ0JBQWdCLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTixPQUFPLEVBQ2dCLGFBQWEsRUFFcEMsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxjQUFjLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFDTixZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFDekMsWUFBWSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQ3JDLGlCQUFpQixFQUNQLE1BQU0sT0FBTyxDQUFDO0FBRXpCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBdUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBSTVGLElBQU0sMEJBQTBCLEdBQWhDLE1BQU0sMEJBQTBCO0lBc0R0Qzs7Ozs7T0FLRztJQUNILFlBQXFCLFFBQWlCLEVBQVUsV0FBdUIsRUFBVSxNQUF3QjtRQUFwRixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXpEekUsa0JBQWEsR0FBc0Isa0NBQWtDLENBQUM7UUFVckQsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsd0JBQW1CLEdBQVksSUFBSSxDQUFDO1FBT3JELGNB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QUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCxcblx0RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCxcblx0Vmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0T3ZlcmxheSwgT3ZlcmxheVJlZiwgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXG5cdFZlcnRpY2FsQ29ubmVjdGlvblBvcywgT3ZlcmxheUNvbmZpZywgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuXHRDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIFBvc2l0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcblx0VW5zdWJzY3JpYmVyLCBEZWZhdWx0VmFsdWUsIENvZXJjZUJvb2xlYW4sXG5cdENvZXJjZU51bWJlciwgQ29lcmNlQ3NzUGl4ZWwsIE1lbW9pemUsXG5cdHVudGlsQ21wRGVzdHJveWVkXG4sIElPYmplY3QgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY01lbnVDb21wb25lbnQsIE5nY0lNZW51UG9zaXRpb24sIE5nY0lNZW51RGlyZWN0aW9uIH0gZnJvbSAnLi4vbWVudS9uZ2MtbWVudS5jb21wb25lbnQnO1xuXG5AVW5zdWJzY3JpYmVyKClcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ2NNZW51VHJpZ2dlckZvcl0nLCBleHBvcnRBczogJ25nY01lbnVUcmlnZ2VyRm9yJyB9KVxuZXhwb3J0IGNsYXNzIE5nY01lbnVUcmlnZ2VyRm9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBwdWJsaWMgcGFuZWxDbGFzczogc3RyaW5nIHwgc3RyaW5nW107XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gPSAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgd2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1pbldpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBtYXhXaWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1heEhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBwcm9ncmFtbWF0aWNhbGx5OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhdXRvRml0OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGhhc0JhY2tkcm9wOiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGNsb3NlT25DbGlja091dHNpZGU6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIG9mZnNldFg6IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBvZmZzZXRZOiBudW1iZXI7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcmlnaW5YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG9yaWdpblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG92ZXJsYXlYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcztcblx0QElucHV0KCkgcHVibGljIG92ZXJsYXlZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3M7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgbGF5b3V0RGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBwb3NpdGlvbjogTmdjSU1lbnVQb3NpdGlvbiA9ICdiZWxvdyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBtZW51RGF0YTogSU9iamVjdDtcblxuXHRAT3V0cHV0KCkgcHVibGljIG1lbnVJbml0OiBFdmVudEVtaXR0ZXI8TmdjTWVudVRyaWdnZXJGb3JEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2NNZW51VHJpZ2dlckZvckRpcmVjdGl2ZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBtZW51T3BlbmVkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBtZW51Q2xvc2VkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBtZW51QmFja2Ryb3BQcmVzczogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cblx0cHJpdmF0ZSBfcG9ydGFsOiBhbnk7XG5cdHByaXZhdGUgX2lzUG9zaXRpb25TdHJhdGVneVVwZGF0ZWQ6IGJvb2xlYW47XG5cdHByaXZhdGUgX2lzTWVudU9wZW5lZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblx0cHJpdmF0ZSBfbWVudTogTmdjTWVudUNvbXBvbmVudDtcblx0cHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyO1xuXG5cdEBJbnB1dCggJ25nY01lbnVUcmlnZ2VyRm9yJyApXG5cdGdldCBtZW51KCk6IE5nY01lbnVDb21wb25lbnQgeyByZXR1cm4gdGhpcy5fbWVudTsgfVxuXHRzZXQgbWVudSggbWVudTogTmdjTWVudUNvbXBvbmVudCApIHtcblx0XHRpZiAoIG1lbnUgPT09IHRoaXMuX21lbnUgKSByZXR1cm47XG5cblx0XHR0aGlzLl9tZW51ID0gbWVudTtcblxuXHRcdHRoaXMubWVudUluaXQuZW1pdCggdGhpcyApO1xuXHR9XG5cblx0Z2V0IGlzTWVudU9wZW5lZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2lzTWVudU9wZW5lZDsgfVxuXHRzZXQgaXNNZW51T3BlbmVkKCB2YWx1ZTogYm9vbGVhbiApIHtcblx0XHRpZiAoICF0aGlzLm1lbnUgfHwgdGhpcy5tZW51LmlzT3BlbmVkID09PSB2YWx1ZSApIHJldHVybjtcblxuXHRcdHRoaXMuX2lzTWVudU9wZW5lZCA9IHRoaXMubWVudS5pc09wZW5lZCA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge092ZXJsYXl9IF9vdmVybGF5XG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtWaWV3Q29udGFpbmVyUmVmfSBfdmNSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZiApIHt9XG5cblx0QEhvc3RMaXN0ZW5lciggJ2NsaWNrJywgWyAnJGV2ZW50JyBdIClcblx0QEhvc3RMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgWyAnJGV2ZW50JyBdIClcblx0QEhvc3RMaXN0ZW5lciggJ2tleWRvd24uc3BhY2UnLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlckNsaWNrKCBldmVudDogRXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLnByb2dyYW1tYXRpY2FsbHkgKSByZXR1cm47XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMub3BlbiggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuaXNNZW51T3BlbmVkID0gZmFsc2U7XG5cblx0XHR0aGlzLl9vdmVybGF5UmVmPy5kZXRhY2goKTtcblx0XHR0aGlzLl9vdmVybGF5UmVmPy5kaXNwb3NlKCk7XG5cdFx0dGhpcy5fcmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcGFyYW0ge0lPYmplY3R9IGRhdGFcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvcGVuKCBldmVudD86IEV2ZW50LCBkYXRhPzogSU9iamVjdCApIHtcblx0XHRpZiAoICF0aGlzLm1lbnUgfHwgdGhpcy5tZW51LmlzT3BlbmVkICkgcmV0dXJuO1xuXG5cdFx0Ly8gQmluZCBmdW5jdGlvbnMgdG8gbWVudVxuXHRcdHRoaXMubWVudS5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCggdGhpcyApO1xuXHRcdHRoaXMubWVudS5yZW9wZW4gPSB0aGlzLnJlb3Blbi5iaW5kKCB0aGlzICk7XG5cblx0XHQvLyBBdXRvIGZpdCBtZW51IHBvc2l0aW9uXG5cdFx0dGhpcy5hdXRvRml0ICYmIHRoaXMuX2F1dG9GaXRNZW51UG9zaXRpb24oKTtcblxuXHRcdC8vIENyZWF0ZSBvdmVybGF5IHJlZlxuXHRcdHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5UmVmIHx8IHRoaXMuX2NyZWF0ZU92ZXJsYXlSZWYoKTtcblxuXHRcdGlmICggdGhpcy5faXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlZCApIHtcblx0XHRcdHRoaXMuX2lzUG9zaXRpb25TdHJhdGVneVVwZGF0ZWQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy51cGRhdGVQb3NpdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5wcm9ncmFtbWF0aWNhbGx5ICYmIHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSApIHJldHVybjtcblxuXHRcdHRoaXMuaXNNZW51T3BlbmVkID0gdHJ1ZTtcblxuXHRcdC8vIENyZWF0ZSBtZW51IHBvcnRhbFxuXHRcdHRoaXMuX3BvcnRhbCA9IHRoaXMuX2NyZWF0ZVRlbXBsYXRlUG9ydGFsKCk7XG5cblx0XHQvLyBBdHRhY2ggbWVudSB0byBvdmVybGF5XG5cdFx0dGhpcy5tZW51Lm9uT3BlbmVkKHsgLi4uZGF0YSwgLi4udGhpcy5tZW51RGF0YSB9KTtcblx0XHR0aGlzLl9vdmVybGF5UmVmLmF0dGFjaCggdGhpcy5fcG9ydGFsICk7XG5cblx0XHQvLyBFbWl0IG9uIG9wZW5lZCBldmVudFxuXHRcdHRoaXMubWVudU9wZW5lZC5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xvc2UoIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0aWYgKCAhdGhpcy5pc01lbnVPcGVuZWQgKSByZXR1cm47XG5cblx0XHR0aGlzLmlzTWVudU9wZW5lZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8uZGV0YWNoKCk7XG5cdFx0dGhpcy5tZW51Py5vbkNsb3NlZCgpO1xuXHRcdHRoaXMubWVudUNsb3NlZC5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgcmVvcGVuKCkge1xuXHRcdGlmICggIXRoaXMuaXNNZW51T3BlbmVkICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcblx0XHR0aGlzLl9vdmVybGF5UmVmLmF0dGFjaCggdGhpcy5fcG9ydGFsICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtQb3NpdGlvblN0cmF0ZWd5PX0gcG9zaXRpb25TdHJhdGVneVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHVwZGF0ZVBvc2l0aW9uKCBwb3NpdGlvblN0cmF0ZWd5OiBQb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpICkge1xuXHRcdHRoaXMuX292ZXJsYXlSZWY/LnVwZGF0ZVBvc2l0aW9uU3RyYXRlZ3koIHBvc2l0aW9uU3RyYXRlZ3kgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtUZW1wbGF0ZVBvcnRhbH1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZVRlbXBsYXRlUG9ydGFsKCk6IFRlbXBsYXRlUG9ydGFsIHtcblx0XHRpZiAoICF0aGlzLl9wb3J0YWwgfHwgdGhpcy5fcG9ydGFsLnRlbXBsYXRlUmVmICE9PSB0aGlzLm1lbnUudGVtcGxhdGVSZWYgKSB7XG5cdFx0XHR0aGlzLl9wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwoIHRoaXMubWVudT8udGVtcGxhdGVSZWYsIHRoaXMuX3ZjUmVmICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX3BvcnRhbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtPdmVybGF5UmVmfVxuXHQgKi9cblx0cHJpdmF0ZSBfY3JlYXRlT3ZlcmxheVJlZigpOiBPdmVybGF5UmVmIHtcblx0XHRjb25zdCBjb25maWc6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG5cdFx0XHRwYW5lbENsYXNzXHRcdDogdGhpcy5wYW5lbENsYXNzID8/IHRoaXMubWVudS5wYW5lbENsYXNzLFxuXHRcdFx0YmFja2Ryb3BDbGFzc1x0OiB0aGlzLmJhY2tkcm9wQ2xhc3MgPz8gdGhpcy5tZW51LmJhY2tkcm9wQ2xhc3MsXG5cdFx0XHRoYXNCYWNrZHJvcFx0XHQ6IHRoaXMuaGFzQmFja2Ryb3AgPz8gdGhpcy5tZW51Lmhhc0JhY2tkcm9wLFxuXHRcdFx0c2Nyb2xsU3RyYXRlZ3lcdDogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oeyBhdXRvQ2xvc2U6IHRydWUsIHNjcm9sbFRocm90dGxlOiAxMDAwIH0pLFxuXHRcdFx0cG9zaXRpb25TdHJhdGVneTogdGhpcy5fY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpLFxuXHRcdH0pO1xuXHRcdGNvbnN0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSggY29uZmlnICk7XG5cblx0XHQvLyBTZXQgbGF5b3V0IGRpcmVjdGlvblxuXHRcdG92ZXJsYXlSZWYuc2V0RGlyZWN0aW9uKCB0aGlzLmxheW91dERpciApO1xuXG5cdFx0Ly8gQ2F0Y2gga2V5Ym9hcmQgZXZlbnRzIG9uIG92ZXJsYXlcblx0XHRvdmVybGF5UmVmLmtleWRvd25FdmVudHMoKVxuXHRcdC5waXBlKCB1bnRpbENtcERlc3Ryb3llZCggdGhpcyApIClcblx0XHQuc3Vic2NyaWJlKCAoIGV2ZW50OiBLZXlib2FyZEV2ZW50ICkgPT4ge1xuXHRcdFx0c3dpdGNoICggZXZlbnQua2V5ICkge1xuXHRcdFx0XHRjYXNlICdBcnJvd0Rvd24nOlxuXHRcdFx0XHRcdGlmICggIXRoaXMubWVudS5tZW51SXRlbXMubGVuZ3RoICkgcmV0dXJuO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5tZW51LmZvY3VzTmV4dEl0ZW0oIGV2ZW50ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ0Fycm93VXAnOlxuXHRcdFx0XHRcdGlmICggIXRoaXMubWVudS5tZW51SXRlbXMubGVuZ3RoICkgcmV0dXJuO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5tZW51LmZvY3VzUHJldmlvdXNJdGVtKCBldmVudCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdFbnRlcic6XG5cdFx0XHRcdFx0aWYgKCAhdGhpcy5tZW51Lm1lbnVJdGVtcy5sZW5ndGggKSByZXR1cm47XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLm1lbnUuY2hvb3NlSXRlbSggZXZlbnQgKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnRXNjYXBlJzpcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoIGV2ZW50ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gT24gYmFja2Ryb3AgY2xpY2tcblx0XHRvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKVxuXHRcdC5waXBlKCB1bnRpbENtcERlc3Ryb3llZCggdGhpcyApIClcblx0XHQuc3Vic2NyaWJlKCAoIGV2ZW50OiBNb3VzZUV2ZW50ICkgPT4ge1xuXHRcdFx0KCB0aGlzLmNsb3NlT25DbGlja091dHNpZGUgfHwgdGhpcy5tZW51LmNsb3NlT25DbGlja091dHNpZGUgKSAmJiB0aGlzLmNsb3NlKCBldmVudCApO1xuXHRcdFx0dGhpcy5tZW51QmFja2Ryb3BQcmVzcy5lbWl0KCBldmVudCApO1xuXHRcdFx0dGhpcy5tZW51LmJhY2tkcm9wUHJlc3MuZW1pdCggZXZlbnQgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBVcGRhdGUgbWVudSBwb3NpdGlvbiBjbGFzc2VzXG5cdFx0aWYgKCB0aGlzLnBvc2l0aW9uICkge1xuXHRcdFx0KCBvdmVybGF5UmVmLmdldENvbmZpZygpLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IClcblx0XHRcdC5wb3NpdGlvbkNoYW5nZXNcblx0XHRcdC5waXBlKCB1bnRpbENtcERlc3Ryb3llZCggdGhpcyApIClcblx0XHRcdC5zdWJzY3JpYmUoICggY2hhbmdlOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IF9vcmlnaW5YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9IGNoYW5nZS5jb25uZWN0aW9uUGFpci5vcmlnaW5YO1xuXHRcdFx0XHRjb25zdCBfb3JpZ2luWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG5cdFx0XHRcdGNvbnN0IF9vdmVybGF5WDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3ZlcmxheVg7XG5cdFx0XHRcdGNvbnN0IF9vdmVybGF5WTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZO1xuXHRcdFx0XHRsZXQgcG9zaXRpb246IE5nY0lNZW51UG9zaXRpb247XG5cdFx0XHRcdGxldCBkaXJlY3Rpb246IE5nY0lNZW51RGlyZWN0aW9uO1xuXG5cdFx0XHRcdGlmICggX29yaWdpblggPT09ICdjZW50ZXInICkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gX29yaWdpblkgPT09ICd0b3AnID8gJ2Fib3ZlJyA6ICdiZWxvdyc7XG5cblx0XHRcdFx0XHRpZiAoIF9vdmVybGF5WCAhPT0gJ2NlbnRlcicgKSBkaXJlY3Rpb24gPSBfb3ZlcmxheVggPT09ICdzdGFydCcgPyAnc3RhcnQnIDogJ2VuZCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIF9vcmlnaW5ZID09PSAnY2VudGVyJyApIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IF9vcmlnaW5YID09PSAnc3RhcnQnID8gJ2JlZm9yZScgOiAnYWZ0ZXInO1xuXG5cdFx0XHRcdFx0aWYgKCBfb3ZlcmxheVkgIT09ICdjZW50ZXInICkgZGlyZWN0aW9uID0gX292ZXJsYXlZID09PSAndG9wJyA/ICdzdGFydCcgOiAnZW5kJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubWVudS5zZXRQb3NpdGlvbkNsYXNzZXMoIHBvc2l0aW9uLCBkaXJlY3Rpb24gKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHQvLyBCaW5kIHNpemVzIHRvIG1lbnVcblx0XHRjb25zdCBtaW5XaWR0aDogc3RyaW5nID0gdGhpcy5taW5XaWR0aCA/PyB0aGlzLm1lbnUubWluV2lkdGg7XG5cdFx0Y29uc3QgbWluSGVpZ2h0OiBzdHJpbmcgPSB0aGlzLm1pbkhlaWdodCA/PyB0aGlzLm1lbnUubWluSGVpZ2h0O1xuXG5cdFx0dGhpcy5tZW51LndpZHRoID0gdGhpcy53aWR0aCA/PyB0aGlzLm1lbnUud2lkdGg7XG5cdFx0dGhpcy5tZW51Lm1pbldpZHRoID0gcGFyc2VGbG9hdCggbWluV2lkdGggKSA8IHdpbmRvdy5pbm5lcldpZHRoID8gbWluV2lkdGggOiB1bmRlZmluZWQ7XG5cdFx0dGhpcy5tZW51Lm1heFdpZHRoID0gdGhpcy5tYXhXaWR0aCA/PyB0aGlzLm1lbnUubWF4V2lkdGg7XG5cdFx0dGhpcy5tZW51LmhlaWdodCA9IHRoaXMuaGVpZ2h0ID8/IHRoaXMubWVudS5oZWlnaHQ7XG5cdFx0dGhpcy5tZW51Lm1pbkhlaWdodCA9IHBhcnNlRmxvYXQoIG1pbkhlaWdodCApIDwgd2luZG93LmlubmVySGVpZ2h0ID8gbWluSGVpZ2h0IDogdW5kZWZpbmVkO1xuXHRcdHRoaXMubWVudS5tYXhIZWlnaHQgPSB0aGlzLm1heEhlaWdodCA/PyB0aGlzLm1lbnUubWF4SGVpZ2h0O1xuXG5cdFx0Lypcblx0XHRSZWFkIG1vcmUgYWJvdXQgdGhlIHJlc2l6ZSBvYnNlcnZlciBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdXBkYXRlcy8yMDE2LzEwL3Jlc2l6ZW9ic2VydmVyXG5cdFx0QmFzaWNhbHksIHdoYXQgd2UgZG8gaXMgdGhhdCB3ZSBzdWJzY3JpYmUgdG8gc2l6ZSBldmVudHMgb24gdGhlIG92ZXJsYXkuXG5cdFx0Q3VycmVudGx5IHdlIG9ubHkgZ2V0IG9uZSBldmVudCwgKHRoZW4gd2UgZGlzY29ubmV0IHRoZSByZXNpemUgb2JzZXJ2ZXIpLlxuXHRcdEJ1dCB0aGVuIHdlIHNpbXBseSBjYWxjdWxhdGUgaWYgd2UgbmVlZCB0byBpbXByb3ZlIHRoZSBsYXlvdXQuXG5cdFx0ICovXG5cdFx0dGhpcy5fcmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlciggKCBlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10gKSA9PiB7XG5cdFx0XHRjb25zdCB2aWV3UG9ydFdpZHRoOiBudW1iZXIgPSBNYXRoLm1heCggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwICk7XG5cdFx0XHRjb25zdCB2aWV3UG9ydEhlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwICk7XG5cblx0XHRcdGZvciAoIGNvbnN0IGVudHJ5IG9mIGVudHJpZXMgKSB7XG5cdFx0XHRcdC8vIFdlIGdldCB0aGUgd2lkdGggJiBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgZnJvbSB0aGUgdGhlIGNvbnRlbnRSZWN0LCBwcm92aWRlZCBieSB0aGUgcmVzaXplIG9ic2VydmVyXG5cdFx0XHRcdGNvbnN0IHdpZHRoOiBudW1iZXIgPSBlbnRyeS5jb250ZW50UmVjdC53aWR0aDtcblx0XHRcdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgPSBlbnRyeS5jb250ZW50UmVjdC5oZWlnaHQ7XG5cdFx0XHRcdGNvbnN0IGRvbVJlYWN0OiBET01SZWN0ID0gZW50cnkudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRjb25zdCB4OiBudW1iZXIgPSBkb21SZWFjdC5sZWZ0O1xuXHRcdFx0XHRjb25zdCB5OiBudW1iZXIgPSBkb21SZWFjdC50b3A7XG5cdFx0XHRcdGNvbnN0IG9mZnNldFBsdXNXaWR0aDogbnVtYmVyID0geCArIHdpZHRoO1xuXHRcdFx0XHRjb25zdCBvZmZzZXRQbHVzSGVpZ2h0OiBudW1iZXIgPSB5ICsgaGVpZ2h0O1xuXHRcdFx0XHRjb25zdCBwaXhlbHNPdmVyZmxvd1g6IG51bWJlciA9IG9mZnNldFBsdXNXaWR0aCAtIHZpZXdQb3J0V2lkdGg7XG5cdFx0XHRcdGNvbnN0IHBpeGVsc092ZXJmbG93WTogbnVtYmVyID0gb2Zmc2V0UGx1c0hlaWdodCAtIHZpZXdQb3J0SGVpZ2h0O1xuXG5cdFx0XHRcdC8vIElmIHggaXMgbmVnYXRpdmUsIHdlIGFyZSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0LlxuXHRcdFx0XHQvLyBJZiB5IGlzIG5lZ2F0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiB0byB0aGUgdG9wLlxuXHRcdFx0XHQvLyBJZiBwaXhlbHNPdmVyZmxvd1ggaXMgcG9zaXRpdmUsIHdlIGFyZSBvZmYtc2NyZWVuIG9uIHRoZSByaWdodFxuXHRcdFx0XHQvLyBJZiBwaXhlbHNPdmVyZmxvd1kgaXMgcG9zaXRpdmUsIHdlIGFyZSBvZmYtc2NyZWVuIG9uIHRoZSBib3R0b21cblx0XHRcdFx0Ly8gSW4gZWl0aGVyIGNhc2UsIHdlIGFkb3B0IGEgbmV3IHN0cmF0ZWd5LlxuXHRcdFx0XHRpZiAoIHggPCAwIHx8IHkgPCAwIHx8IHBpeGVsc092ZXJmbG93WCA+IDEgfHwgcGl4ZWxzT3ZlcmZsb3dZID4gMSApIHtcblx0XHRcdFx0XHR0aGlzLmlzTWVudU9wZW5lZCAmJiBvdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG5cblx0XHRcdFx0XHR0aGlzLl9pc1Bvc2l0aW9uU3RyYXRlZ3lVcGRhdGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIEVsZW1lbnQgZm9yIHdoaWNoIHRvIG9ic2VydmUgaGVpZ2h0IGFuZCB3aWR0aFxuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUoIG92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQgKTtcblxuXHRcdHJldHVybiBvdmVybGF5UmVmO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0ZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneX1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcblx0XHRsZXQgb3JpZ2luWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSB0aGlzLm9yaWdpblggfHwgJ2NlbnRlcic7XG5cdFx0bGV0IG9yaWdpblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IHRoaXMub3JpZ2luWSB8fCAnY2VudGVyJztcblx0XHRsZXQgb3JpZ2luRmFsbGJhY2tYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9IG9yaWdpblg7XG5cdFx0bGV0IG9yaWdpbkZhbGxiYWNrWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gb3JpZ2luWTtcblx0XHRsZXQgb3ZlcmxheVg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gdGhpcy5vdmVybGF5WCB8fCAnY2VudGVyJztcblx0XHRsZXQgb3ZlcmxheVk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IHRoaXMub3ZlcmxheVkgfHwgJ2NlbnRlcic7XG5cdFx0bGV0IG92ZXJsYXlGYWxsYmFja1g6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gb3ZlcmxheVg7XG5cdFx0bGV0IG92ZXJsYXlGYWxsYmFja1k6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IG92ZXJsYXlZO1xuXHRcdGxldCBvZmZzZXRYOiBudW1iZXIgPSArKCB0aGlzLm9mZnNldFggfHwgMCApO1xuXHRcdGxldCBvZmZzZXRZOiBudW1iZXIgPSArKCB0aGlzLm9mZnNldFkgfHwgMCApO1xuXHRcdGxldCBvZmZzZXRGYWxsYmFja1g6IG51bWJlciA9IG9mZnNldFg7XG5cdFx0bGV0IG9mZnNldEZhbGxiYWNrWTogbnVtYmVyID0gb2Zmc2V0WTtcblxuXHRcdHN3aXRjaCAoIHRoaXMucG9zaXRpb24gKSB7XG5cdFx0XHRjYXNlICdhYm92ZSc6XG5cdFx0XHRjYXNlICdiZWxvdyc6XG5cdFx0XHRcdGlmICggIXRoaXMub3JpZ2luWSApIG9yaWdpblkgPSB0aGlzLnBvc2l0aW9uID09PSAnYWJvdmUnID8gJ3RvcCcgOiAnYm90dG9tJztcblx0XHRcdFx0aWYgKCAhdGhpcy5vdmVybGF5WSApIG92ZXJsYXlZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/ICdib3R0b20nIDogJ3RvcCc7XG5cdFx0XHRcdGlmICggXy5pc05pbCggdGhpcy5vZmZzZXRZICkgKSBvZmZzZXRZID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/IC03IDogNztcblxuXHRcdFx0XHRvZmZzZXRGYWxsYmFja1ggPSAtb2Zmc2V0WDtcblx0XHRcdFx0b2Zmc2V0RmFsbGJhY2tZID0gLW9mZnNldFk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYmVmb3JlJzpcblx0XHRcdGNhc2UgJ2FmdGVyJzpcblx0XHRcdFx0aWYgKCAhdGhpcy5vcmlnaW5YICkgb3JpZ2luWCA9IHRoaXMucG9zaXRpb24gPT09ICdiZWZvcmUnID8gJ3N0YXJ0JyA6ICdlbmQnO1xuXHRcdFx0XHRpZiAoICF0aGlzLm92ZXJsYXlYICkgb3ZlcmxheVggPSB0aGlzLnBvc2l0aW9uID09PSAnYmVmb3JlJyA/ICdlbmQnIDogJ3N0YXJ0Jztcblx0XHRcdFx0aWYgKCBfLmlzTmlsKCB0aGlzLm9mZnNldFggKSApIG9mZnNldFggPSB0aGlzLnBvc2l0aW9uID09PSAnYmVmb3JlJyA/IC03IDogNztcblxuXHRcdFx0XHRvZmZzZXRGYWxsYmFja1ggPSAtb2Zmc2V0WDtcblx0XHRcdFx0b2Zmc2V0RmFsbGJhY2tZID0gLW9mZnNldFk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdG9yaWdpbkZhbGxiYWNrWCA9IHRoaXMuX2ZhbGxiYWNrWCggb3JpZ2luWCApO1xuXHRcdG9yaWdpbkZhbGxiYWNrWSA9IHRoaXMuX2ZhbGxiYWNrWSggb3JpZ2luWSApO1xuXHRcdG92ZXJsYXlGYWxsYmFja1ggPSB0aGlzLl9mYWxsYmFja1goIG92ZXJsYXlYICk7XG5cdFx0b3ZlcmxheUZhbGxiYWNrWSA9IHRoaXMuX2ZhbGxiYWNrWSggb3ZlcmxheVkgKTtcblxuXHRcdHJldHVybiB0aGlzLl9vdmVybGF5XG5cdFx0LnBvc2l0aW9uKClcblx0XHQuZmxleGlibGVDb25uZWN0ZWRUbyggdGhpcy5fZWxlbWVudFJlZiApXG5cdFx0LndpdGhGbGV4aWJsZURpbWVuc2lvbnMoIGZhbHNlIClcblx0XHQud2l0aExvY2tlZFBvc2l0aW9uKClcblx0XHQud2l0aFB1c2goIHRydWUgKVxuXHRcdC53aXRoUG9zaXRpb25zKFtcblx0XHRcdHtcblx0XHRcdFx0b3JpZ2luWCwgb3JpZ2luWSxcblx0XHRcdFx0b3ZlcmxheVgsIG92ZXJsYXlZLFxuXHRcdFx0XHRvZmZzZXRYLCBvZmZzZXRZLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0b3JpZ2luWDogb3JpZ2luRmFsbGJhY2tYLCBvcmlnaW5ZLFxuXHRcdFx0XHRvdmVybGF5WDogb3ZlcmxheUZhbGxiYWNrWCwgb3ZlcmxheVksXG5cdFx0XHRcdG9mZnNldFg6IG9mZnNldEZhbGxiYWNrWCwgb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblgsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVgsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZLFxuXHRcdFx0XHRvZmZzZXRYLCBvZmZzZXRZOiBvZmZzZXRGYWxsYmFja1ksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZLFxuXHRcdFx0XHRvZmZzZXRYOiBvZmZzZXRGYWxsYmFja1gsIG9mZnNldFk6IG9mZnNldEZhbGxiYWNrWSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSxcblx0XHRcdFx0b3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZLFxuXHRcdFx0XHRvZmZzZXRYOiAtNywgb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSxcblx0XHRcdFx0b3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WSxcblx0XHRcdFx0b2Zmc2V0WDogNywgb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblgsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVgsIG92ZXJsYXlZOiAndG9wJyxcblx0XHRcdFx0b2Zmc2V0WCwgb2Zmc2V0WTogLTcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcmlnaW5YLCBvcmlnaW5ZOiBvcmlnaW5GYWxsYmFja1ksXG5cdFx0XHRcdG92ZXJsYXlYLCBvdmVybGF5WTogJ2JvdHRvbScsXG5cdFx0XHRcdG9mZnNldFgsIG9mZnNldFk6IDcsXG5cdFx0XHR9LFxuXHRcdF0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SG9yaXpvbnRhbENvbm5lY3Rpb25Qb3N9IG9yaWdpblxuXHQgKiBAcmV0dXJuIHtIb3Jpem9udGFsQ29ubmVjdGlvblBvc31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHJpdmF0ZSBfZmFsbGJhY2tYKCBvcmlnaW46IEhvcml6b250YWxDb25uZWN0aW9uUG9zICk6IEhvcml6b250YWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICdzdGFydCc6XG5cdFx0XHRcdHJldHVybiAnZW5kJztcblx0XHRcdGNhc2UgJ2VuZCc6XG5cdFx0XHRcdHJldHVybiAnc3RhcnQnO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG9yaWdpbjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtWZXJ0aWNhbENvbm5lY3Rpb25Qb3N9IG9yaWdpblxuXHQgKiBAcmV0dXJuIHtWZXJ0aWNhbENvbm5lY3Rpb25Qb3N9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHByaXZhdGUgX2ZhbGxiYWNrWSggb3JpZ2luOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgKTogVmVydGljYWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICd0b3AnOlxuXHRcdFx0XHRyZXR1cm4gJ2JvdHRvbSc7XG5cdFx0XHRjYXNlICdib3R0b20nOlxuXHRcdFx0XHRyZXR1cm4gJ3RvcCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfYXV0b0ZpdE1lbnVQb3NpdGlvbigpIHtcblx0XHRzd2l0Y2ggKCB0aGlzLnBvc2l0aW9uICkge1xuXHRcdFx0Y2FzZSAnYWJvdmUnOlxuXHRcdFx0Y2FzZSAnYmVsb3cnOlxuXHRcdFx0XHR0aGlzLm9yaWdpblggfHw9ICdzdGFydCc7XG5cdFx0XHRcdHRoaXMub3JpZ2luWSB8fD0gdGhpcy5wb3NpdGlvbiA9PT0gJ2Fib3ZlJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG5cdFx0XHRcdHRoaXMub3ZlcmxheVggfHw9ICdzdGFydCc7XG5cdFx0XHRcdHRoaXMub3ZlcmxheVkgfHw9IHRoaXMucG9zaXRpb24gPT09ICdhYm92ZScgPyAnYm90dG9tJyA6ICd0b3AnO1xuXHRcdFx0XHR0aGlzLm9mZnNldFggfHw9IDA7XG5cdFx0XHRcdHRoaXMub2Zmc2V0WSB8fD0gMDtcblx0XHRcdFx0dGhpcy53aWR0aCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdiZWZvcmUnOlxuXHRcdFx0Y2FzZSAnYWZ0ZXInOlxuXHRcdFx0XHR0aGlzLm9yaWdpblggfHw9IHRoaXMucG9zaXRpb24gPT09ICdiZWZvcmUnID8gJ3N0YXJ0JyA6ICdlbmQnO1xuXHRcdFx0XHR0aGlzLm9yaWdpblkgfHw9ICd0b3AnO1xuXHRcdFx0XHR0aGlzLm92ZXJsYXlYIHx8PSB0aGlzLnBvc2l0aW9uID09PSAnYmVmb3JlJyA/ICdlbmQnIDogJ3N0YXJ0Jztcblx0XHRcdFx0dGhpcy5vdmVybGF5WSB8fD0gJ3RvcCc7XG5cdFx0XHRcdHRoaXMub2Zmc2V0WCB8fD0gMDtcblx0XHRcdFx0dGhpcy5vZmZzZXRZIHx8PSAwO1xuXHRcdFx0XHR0aGlzLmhlaWdodCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=