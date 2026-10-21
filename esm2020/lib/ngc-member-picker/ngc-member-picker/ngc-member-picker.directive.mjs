import { __decorate, __metadata } from "tslib";
import { Input, Output, Directive, HostListener, EventEmitter, ElementRef, ViewContainerRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';
import { CoerceBoolean, CoerceCssPixel, CoerceNumber, DefaultValue, Memoize, Unsubscriber, untilCmpDestroyed } from '@core';
import { NgcMemberPickerComponent } from './ngc-member-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
let NgcMemberPickerDirective = class NgcMemberPickerDirective {
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
        this.backdropClass = [
            'cdk-overlay-transparent-backdrop',
            // 'cdk-overlay-highest-backdrop',
        ];
        this.hasBackdrop = true;
        this.closeOnClickOutside = true;
        this.strictDisplay = true;
        this.itemSize = 44;
        this.position = 'below';
        this.direction = 'ltr';
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.added = new EventEmitter();
        this.removed = new EventEmitter();
        this.viewDetail = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this.selectedMembersChange = new EventEmitter();
        this.backdropPress = new EventEmitter();
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes) {
        changes.isAutoOpen && this.isAutoOpen && this.open();
        if (!this._instance)
            return;
        if (changes.selected) {
            this._instance.selected = this.selected;
            this._instance.markAsSelectedChanges();
        }
        if (changes.selectedMembers) {
            this._instance.selectedMembers = this.selectedMembers;
            this._instance.markAsSelectedMembersChanges();
        }
        if (changes.includesStatus) {
            this._instance.includesStatus = this.includesStatus;
            this._instance.markAsIncludesStatusChanges();
        }
        if (changes.members) {
            this._instance.members = this.members;
            this._instance.markAsMembersChanges();
        }
        if (changes.canViewProfile)
            this._instance.canViewProfile = this.canViewProfile;
        if (changes.required)
            this._instance.required = this.required;
    }
    // tslint:disable-next-line:jsdoc-require
    triggerClick(event) {
        if (this.disabled)
            return;
        event.stopPropagation();
        event.preventDefault();
        this.open(event);
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
     * @param {NgcIMember[]} members
     * @return {void}
     */
    onMembersAdded(members) {
        this.added.emit(members);
    }
    /**
     * @param {NgcIMember[]} members
     * @return {void}
     */
    onMembersRemoved(members) {
        this.removed.emit(members);
    }
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    onViewProfile(member) {
        this.viewDetail.emit(member);
    }
    /**
     * @param {NgcIMember[]} selectedMembers
     * @param {number[]} selected
     * @return {void}
     */
    onDone(selectedMembers, selected) {
        if (this.required && !selected?.length)
            return;
        this.selectedMembersChange.emit(selectedMembers);
        this.selectedChange.emit(selected);
    }
    /**
     * @param {Event=} event
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
        // Create member picker portal
        this._portal = this._portal || new ComponentPortal(NgcMemberPickerComponent, this._vcRef);
        // Attach member picker to overlay
        const instance = this._overlayRef.attach(this._portal).instance;
        instance.close = this.close.bind(this);
        instance.onMembersAdded = this.onMembersAdded.bind(this);
        instance.onMembersRemoved = this.onMembersRemoved.bind(this);
        instance.onViewProfile = this.onViewProfile.bind(this);
        instance.onDone = this.onDone.bind(this);
        instance.itemSize = this.itemSize;
        instance.strictDisplay = this.strictDisplay;
        instance.canViewProfile = this.canViewProfile;
        instance.required = this.required;
        instance.name = this.name;
        instance.label = this.label;
        instance.scrolling$ = this.scrolling$;
        instance.context = this.context;
        instance.selected = this.selected;
        instance.selectedMembers = this.selectedMembers;
        instance.includesStatus = this.includesStatus;
        instance.members = this.members;
        instance.markAsIncludesStatusChanges();
        instance.markAsMembersChanges();
        instance.markAsSelectedChanges();
        instance.markAsSelectedMembersChanges();
        this._instance = instance;
        // Emit on opened event
        this.opened.emit(event);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    close(event) {
        this.isOpened = false;
        this._instance.markAsDone();
        this._overlayRef?.detach();
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
            maxWidth: this.maxHeight,
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
NgcMemberPickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMemberPickerDirective, deps: [{ token: i1.Overlay }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcMemberPickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcMemberPickerDirective, selector: "[ngcMemberPicker]", inputs: { panelClass: "panelClass", backdropClass: "backdropClass", hasBackdrop: "hasBackdrop", closeOnClickOutside: "closeOnClickOutside", strictDisplay: "strictDisplay", offsetX: "offsetX", offsetY: "offsetY", itemSize: "itemSize", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", height: "height", minHeight: "minHeight", maxHeight: "maxHeight", position: "position", direction: "direction", isAutoOpen: "isAutoOpen", canViewProfile: "canViewProfile", required: "required", disabled: "disabled", name: "name", label: "label", scrolling$: "scrolling$", context: "context", selected: "selected", selectedMembers: "selectedMembers", includesStatus: "includesStatus", members: "members", originX: "originX", originY: "originY", overlayX: "overlayX", overlayY: "overlayY" }, outputs: { opened: "opened", closed: "closed", added: "added", removed: "removed", viewDetail: "viewDetail", selectedChange: "selectedChange", selectedMembersChange: "selectedMembersChange", backdropPress: "backdropPress" }, host: { listeners: { "click": "triggerClick($event)", "contextmenu": "triggerClick($event)", "keydown.space": "triggerClick($event)" } }, exportAs: ["ngcMemberPicker"], usesOnChanges: true, ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcMemberPickerDirective.prototype, "backdropClass", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberPickerDirective.prototype, "hasBackdrop", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberPickerDirective.prototype, "closeOnClickOutside", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberPickerDirective.prototype, "strictDisplay", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcMemberPickerDirective.prototype, "offsetX", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcMemberPickerDirective.prototype, "offsetY", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcMemberPickerDirective.prototype, "itemSize", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMemberPickerDirective.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMemberPickerDirective.prototype, "minWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMemberPickerDirective.prototype, "maxWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMemberPickerDirective.prototype, "height", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMemberPickerDirective.prototype, "minHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMemberPickerDirective.prototype, "maxHeight", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcMemberPickerDirective.prototype, "position", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcMemberPickerDirective.prototype, "direction", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberPickerDirective.prototype, "isAutoOpen", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberPickerDirective.prototype, "canViewProfile", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberPickerDirective.prototype, "required", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberPickerDirective.prototype, "disabled", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcMemberPickerDirective.prototype, "_fallbackX", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcMemberPickerDirective.prototype, "_fallbackY", null);
NgcMemberPickerDirective = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [Overlay,
        ElementRef,
        ViewContainerRef])
], NgcMemberPickerDirective);
export { NgcMemberPickerDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMemberPickerDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcMemberPicker]', exportAs: 'ngcMemberPicker' }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { panelClass: [{
                type: Input
            }], backdropClass: [{
                type: Input
            }], hasBackdrop: [{
                type: Input
            }], closeOnClickOutside: [{
                type: Input
            }], strictDisplay: [{
                type: Input
            }], offsetX: [{
                type: Input
            }], offsetY: [{
                type: Input
            }], itemSize: [{
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
            }], position: [{
                type: Input
            }], direction: [{
                type: Input
            }], isAutoOpen: [{
                type: Input
            }], canViewProfile: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], scrolling$: [{
                type: Input
            }], context: [{
                type: Input
            }], selected: [{
                type: Input
            }], selectedMembers: [{
                type: Input
            }], includesStatus: [{
                type: Input
            }], members: [{
                type: Input
            }], originX: [{
                type: Input
            }], originY: [{
                type: Input
            }], overlayX: [{
                type: Input
            }], overlayY: [{
                type: Input
            }], opened: [{
                type: Output
            }], closed: [{
                type: Output
            }], added: [{
                type: Output
            }], removed: [{
                type: Output
            }], viewDetail: [{
                type: Output
            }], selectedChange: [{
                type: Output
            }], selectedMembersChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbWJlci1waWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtbWVtYmVyLXBpY2tlci9uZ2MtbWVtYmVyLXBpY2tlci9uZ2MtbWVtYmVyLXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixLQUFLLEVBQUUsTUFBTSxFQUNGLFNBQVMsRUFBRSxZQUFZLEVBQ2xDLFlBQVksRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBRTFDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ04sT0FBTyxFQUFjLGFBQWEsRUFHbEMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sY0FBYyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQ04sYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQzNDLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUNuQyxpQkFBaUIsRUFDUCxNQUFNLE9BQU8sQ0FBQztBQUl6QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBTWxFLElBQU0sd0JBQXdCLEdBQTlCLE1BQU0sd0JBQXdCO0lBd0RwQzs7Ozs7T0FLRztJQUNILFlBQ1MsUUFBaUIsRUFDakIsV0FBdUIsRUFDdkIsTUFBd0I7UUFGeEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQTdERCxrQkFBYSxHQUFzQjtZQUNsRSxrQ0FBa0M7WUFDbEMsa0NBQWtDO1NBQ2xD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RUFBRSxDQUFFLFFBQVEsQ0FBRTtnQkFtUnBDLFVBQVUsTUFnQlYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdElucHV0LCBPdXRwdXQsIE9uRGVzdHJveSxcblx0T25DaGFuZ2VzLCBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lcixcblx0RXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLFxuXHRTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuXHRPdmVybGF5LCBPdmVybGF5UmVmLCBPdmVybGF5Q29uZmlnLFxuXHRGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksIEhvcml6b250YWxDb25uZWN0aW9uUG9zLCBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MsXG5cdFBvc2l0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuXHRDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCwgQ29lcmNlTnVtYmVyLFxuXHREZWZhdWx0VmFsdWUsIE1lbW9pemUsIFVuc3Vic2NyaWJlcixcblx0dW50aWxDbXBEZXN0cm95ZWRcbiwgSU9iamVjdCB9IGZyb20gJ0Bjb3JlJztcblxuaW1wb3J0IHsgTmdjSU1lbWJlciwgTmdjSU1lbWJlclN0YXR1cyB9IGZyb20gJy4uL25nYy1tZW1iZXIvbmdjLW1lbWJlcic7XG5cbmltcG9ydCB7IE5nY01lbWJlclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbmdjLW1lbWJlci1waWNrZXIuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTmdjSU1lbWJlclBpY2tlclBvc2l0aW9uID0gJ2Fib3ZlJyB8ICdiZWxvdyc7XG5cbkBVbnN1YnNjcmliZXIoKVxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nY01lbWJlclBpY2tlcl0nLCBleHBvcnRBczogJ25nY01lbWJlclBpY2tlcicgfSlcbmV4cG9ydCBjbGFzcyBOZ2NNZW1iZXJQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cblx0Ly8gQElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBwYW5lbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXSA9ICdjZGstb3ZlcmxheS1oaWdoZXN0LXBhbmUnO1xuXHRASW5wdXQoKSBwdWJsaWMgcGFuZWxDbGFzczogc3RyaW5nIHwgc3RyaW5nW107XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYmFja2Ryb3BDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXG5cdFx0J2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcblx0XHQvLyAnY2RrLW92ZXJsYXktaGlnaGVzdC1iYWNrZHJvcCcsXG5cdF07XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBoYXNCYWNrZHJvcDogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBjbG9zZU9uQ2xpY2tPdXRzaWRlOiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHN0cmljdERpc3BsYXk6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIG9mZnNldFg6IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBvZmZzZXRZOiBudW1iZXI7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIGl0ZW1TaXplOiBudW1iZXIgPSA0NDtcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHdpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBtaW5XaWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWF4V2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWluSGVpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBtYXhIZWlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBwb3NpdGlvbjogTmdjSU1lbWJlclBpY2tlclBvc2l0aW9uID0gJ2JlbG93Jztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBkaXJlY3Rpb246IERpcmVjdGlvbiA9ICdsdHInO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBpc0F1dG9PcGVuOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBjYW5WaWV3UHJvZmlsZTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHNjcm9sbGluZyQ6IFN1YmplY3Q8YW55Pjtcblx0QElucHV0KCkgcHVibGljIGNvbnRleHQ6IElPYmplY3Q7XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZDogbnVtYmVyW107XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZE1lbWJlcnM6IE5nY0lNZW1iZXJbXTtcblx0QElucHV0KCkgcHVibGljIGluY2x1ZGVzU3RhdHVzOiBOZ2NJTWVtYmVyU3RhdHVzW107XG5cdEBJbnB1dCgpIHB1YmxpYyBtZW1iZXJzOiBOZ2NJTWVtYmVyW10gfCBPYnNlcnZhYmxlPE5nY0lNZW1iZXJbXT4gfCBGdW5jdGlvbjtcblx0QElucHV0KCkgcHVibGljIG9yaWdpblg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zO1xuXHRASW5wdXQoKSBwdWJsaWMgb3JpZ2luWTogVmVydGljYWxDb25uZWN0aW9uUG9zO1xuXHRASW5wdXQoKSBwdWJsaWMgb3ZlcmxheVg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zO1xuXHRASW5wdXQoKSBwdWJsaWMgb3ZlcmxheVk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcztcblxuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBhZGRlZDogRXZlbnRFbWl0dGVyPE5nY0lNZW1iZXJbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY0lNZW1iZXJbXT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyByZW1vdmVkOiBFdmVudEVtaXR0ZXI8TmdjSU1lbWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjSU1lbWJlcltdPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHZpZXdEZXRhaWw6IEV2ZW50RW1pdHRlcjxOZ2NJTWVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjSU1lbWJlcj4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRNZW1iZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdjSU1lbWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjSU1lbWJlcltdPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGJhY2tkcm9wUHJlc3M6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuXHRwdWJsaWMgaXNPcGVuZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBfaXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBfcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8TmdjTWVtYmVyUGlja2VyQ29tcG9uZW50Pjtcblx0cHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblx0cHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyO1xuXHRwcml2YXRlIF9pbnN0YW5jZTogTmdjTWVtYmVyUGlja2VyQ29tcG9uZW50O1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtPdmVybGF5fSBfb3ZlcmxheVxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IF9lbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7Vmlld0NvbnRhaW5lclJlZn0gX3ZjUmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuXHRcdHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWZcblx0KSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRjaGFuZ2VzLmlzQXV0b09wZW4gJiYgdGhpcy5pc0F1dG9PcGVuICYmIHRoaXMub3BlbigpO1xuXG5cdFx0aWYgKCAhdGhpcy5faW5zdGFuY2UgKSByZXR1cm47XG5cblx0XHRpZiAoIGNoYW5nZXMuc2VsZWN0ZWQgKSB7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG5cblx0XHRcdHRoaXMuX2luc3RhbmNlLm1hcmtBc1NlbGVjdGVkQ2hhbmdlcygpO1xuXHRcdH1cblxuXHRcdGlmICggY2hhbmdlcy5zZWxlY3RlZE1lbWJlcnMgKSB7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5zZWxlY3RlZE1lbWJlcnMgPSB0aGlzLnNlbGVjdGVkTWVtYmVycztcblxuXHRcdFx0dGhpcy5faW5zdGFuY2UubWFya0FzU2VsZWN0ZWRNZW1iZXJzQ2hhbmdlcygpO1xuXHRcdH1cblxuXHRcdGlmICggY2hhbmdlcy5pbmNsdWRlc1N0YXR1cyApIHtcblx0XHRcdHRoaXMuX2luc3RhbmNlLmluY2x1ZGVzU3RhdHVzID0gdGhpcy5pbmNsdWRlc1N0YXR1cztcblxuXHRcdFx0dGhpcy5faW5zdGFuY2UubWFya0FzSW5jbHVkZXNTdGF0dXNDaGFuZ2VzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjaGFuZ2VzLm1lbWJlcnMgKSB7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5tZW1iZXJzID0gdGhpcy5tZW1iZXJzO1xuXG5cdFx0XHR0aGlzLl9pbnN0YW5jZS5tYXJrQXNNZW1iZXJzQ2hhbmdlcygpO1xuXHRcdH1cblxuXHRcdGlmICggY2hhbmdlcy5jYW5WaWV3UHJvZmlsZSApIHRoaXMuX2luc3RhbmNlLmNhblZpZXdQcm9maWxlID0gdGhpcy5jYW5WaWV3UHJvZmlsZTtcblx0XHRpZiAoIGNoYW5nZXMucmVxdWlyZWQgKSB0aGlzLl9pbnN0YW5jZS5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG5cdH1cblxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anNkb2MtcmVxdWlyZVxuXHRASG9zdExpc3RlbmVyKCAnY2xpY2snLCBbICckZXZlbnQnIF0gKVxuXHRASG9zdExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBbICckZXZlbnQnIF0gKVxuXHRASG9zdExpc3RlbmVyKCAna2V5ZG93bi5zcGFjZScsIFsgJyRldmVudCcgXSApXG5cdHB1YmxpYyB0cmlnZ2VyQ2xpY2soIGV2ZW50OiBFdmVudCApIHtcblx0XHRpZiAoIHRoaXMuZGlzYWJsZWQgKSByZXR1cm47XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMub3BlbiggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuX292ZXJsYXlSZWY/LmRldGFjaCgpO1xuXHRcdHRoaXMuX292ZXJsYXlSZWY/LmRpc3Bvc2UoKTtcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSU1lbWJlcltdfSBtZW1iZXJzXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25NZW1iZXJzQWRkZWQoIG1lbWJlcnM6IE5nY0lNZW1iZXJbXSApIHtcblx0XHR0aGlzLmFkZGVkLmVtaXQoIG1lbWJlcnMgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY0lNZW1iZXJbXX0gbWVtYmVyc1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uTWVtYmVyc1JlbW92ZWQoIG1lbWJlcnM6IE5nY0lNZW1iZXJbXSApIHtcblx0XHR0aGlzLnJlbW92ZWQuZW1pdCggbWVtYmVycyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSU1lbWJlcn0gbWVtYmVyXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25WaWV3UHJvZmlsZSggbWVtYmVyOiBOZ2NJTWVtYmVyICkge1xuXHRcdHRoaXMudmlld0RldGFpbC5lbWl0KCBtZW1iZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY0lNZW1iZXJbXX0gc2VsZWN0ZWRNZW1iZXJzXG5cdCAqIEBwYXJhbSB7bnVtYmVyW119IHNlbGVjdGVkXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25Eb25lKCBzZWxlY3RlZE1lbWJlcnM6IE5nY0lNZW1iZXJbXSwgc2VsZWN0ZWQ6IG51bWJlcltdICkge1xuXHRcdGlmICggdGhpcy5yZXF1aXJlZCAmJiAhc2VsZWN0ZWQ/Lmxlbmd0aCApIHJldHVybjtcblxuXHRcdHRoaXMuc2VsZWN0ZWRNZW1iZXJzQ2hhbmdlLmVtaXQoIHNlbGVjdGVkTWVtYmVycyApO1xuXHRcdHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCggc2VsZWN0ZWQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvcGVuKCBldmVudD86IEV2ZW50ICkge1xuXHRcdC8vIENyZWF0ZSBvdmVybGF5IHJlZlxuXHRcdHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5UmVmIHx8IHRoaXMuX2NyZWF0ZU92ZXJsYXlSZWYoKTtcblxuXHRcdGlmICggdGhpcy5faXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlZCApIHtcblx0XHRcdHRoaXMuX2lzUG9zaXRpb25TdHJhdGVneVVwZGF0ZWQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy51cGRhdGVQb3NpdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5pc09wZW5lZCA9IHRydWU7XG5cblx0XHQvLyBDcmVhdGUgbWVtYmVyIHBpY2tlciBwb3J0YWxcblx0XHR0aGlzLl9wb3J0YWwgPSB0aGlzLl9wb3J0YWwgfHwgbmV3IENvbXBvbmVudFBvcnRhbCggTmdjTWVtYmVyUGlja2VyQ29tcG9uZW50LCB0aGlzLl92Y1JlZiApO1xuXG5cdFx0Ly8gQXR0YWNoIG1lbWJlciBwaWNrZXIgdG8gb3ZlcmxheVxuXHRcdGNvbnN0IGluc3RhbmNlOiBOZ2NNZW1iZXJQaWNrZXJDb21wb25lbnQgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaCggdGhpcy5fcG9ydGFsICkuaW5zdGFuY2U7XG5cblx0XHRpbnN0YW5jZS5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCggdGhpcyApO1xuXHRcdGluc3RhbmNlLm9uTWVtYmVyc0FkZGVkID0gdGhpcy5vbk1lbWJlcnNBZGRlZC5iaW5kKCB0aGlzICk7XG5cdFx0aW5zdGFuY2Uub25NZW1iZXJzUmVtb3ZlZCA9IHRoaXMub25NZW1iZXJzUmVtb3ZlZC5iaW5kKCB0aGlzICk7XG5cdFx0aW5zdGFuY2Uub25WaWV3UHJvZmlsZSA9IHRoaXMub25WaWV3UHJvZmlsZS5iaW5kKCB0aGlzICk7XG5cdFx0aW5zdGFuY2Uub25Eb25lID0gdGhpcy5vbkRvbmUuYmluZCggdGhpcyApO1xuXHRcdGluc3RhbmNlLml0ZW1TaXplID0gdGhpcy5pdGVtU2l6ZTtcblx0XHRpbnN0YW5jZS5zdHJpY3REaXNwbGF5ID0gdGhpcy5zdHJpY3REaXNwbGF5O1xuXHRcdGluc3RhbmNlLmNhblZpZXdQcm9maWxlID0gdGhpcy5jYW5WaWV3UHJvZmlsZTtcblx0XHRpbnN0YW5jZS5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG5cdFx0aW5zdGFuY2UubmFtZSA9IHRoaXMubmFtZTtcblx0XHRpbnN0YW5jZS5sYWJlbCA9IHRoaXMubGFiZWw7XG5cdFx0aW5zdGFuY2Uuc2Nyb2xsaW5nJCA9IHRoaXMuc2Nyb2xsaW5nJDtcblx0XHRpbnN0YW5jZS5jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXHRcdGluc3RhbmNlLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcblx0XHRpbnN0YW5jZS5zZWxlY3RlZE1lbWJlcnMgPSB0aGlzLnNlbGVjdGVkTWVtYmVycztcblx0XHRpbnN0YW5jZS5pbmNsdWRlc1N0YXR1cyA9IHRoaXMuaW5jbHVkZXNTdGF0dXM7XG5cdFx0aW5zdGFuY2UubWVtYmVycyA9IHRoaXMubWVtYmVycztcblxuXHRcdGluc3RhbmNlLm1hcmtBc0luY2x1ZGVzU3RhdHVzQ2hhbmdlcygpO1xuXHRcdGluc3RhbmNlLm1hcmtBc01lbWJlcnNDaGFuZ2VzKCk7XG5cdFx0aW5zdGFuY2UubWFya0FzU2VsZWN0ZWRDaGFuZ2VzKCk7XG5cdFx0aW5zdGFuY2UubWFya0FzU2VsZWN0ZWRNZW1iZXJzQ2hhbmdlcygpO1xuXG5cdFx0dGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuXHRcdC8vIEVtaXQgb24gb3BlbmVkIGV2ZW50XG5cdFx0dGhpcy5vcGVuZWQuZW1pdCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjbG9zZSggZXZlbnQ/OiBFdmVudCApIHtcblx0XHR0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG5cblx0XHR0aGlzLl9pbnN0YW5jZS5tYXJrQXNEb25lKCk7XG5cdFx0dGhpcy5fb3ZlcmxheVJlZj8uZGV0YWNoKCk7XG5cblx0XHR0aGlzLmNsb3NlZC5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UG9zaXRpb25TdHJhdGVneT19IHBvc2l0aW9uU3RyYXRlZ3lcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyB1cGRhdGVQb3NpdGlvbiggcG9zaXRpb25TdHJhdGVneTogUG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKSApIHtcblx0XHR0aGlzLl9vdmVybGF5UmVmPy51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KCBwb3NpdGlvblN0cmF0ZWd5ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7T3ZlcmxheVJlZn1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYoKTogT3ZlcmxheVJlZiB7XG5cdFx0Y29uc3QgY29uZmlnOiBPdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuXHRcdFx0cGFuZWxDbGFzc1x0XHQ6IHRoaXMucGFuZWxDbGFzcyxcblx0XHRcdGJhY2tkcm9wQ2xhc3NcdDogdGhpcy5iYWNrZHJvcENsYXNzLFxuXHRcdFx0aGFzQmFja2Ryb3BcdFx0OiB0aGlzLmhhc0JhY2tkcm9wLFxuXHRcdFx0d2lkdGhcdFx0XHQ6IHRoaXMud2lkdGgsXG5cdFx0XHRtaW5XaWR0aFx0XHQ6IHBhcnNlRmxvYXQoIHRoaXMubWluV2lkdGggKSA8IHdpbmRvdy5pbm5lcldpZHRoID8gdGhpcy5taW5XaWR0aCA6IHVuZGVmaW5lZCxcblx0XHRcdG1heFdpZHRoXHRcdDogdGhpcy5tYXhIZWlnaHQsXG5cdFx0XHRoZWlnaHRcdFx0XHQ6IHRoaXMuaGVpZ2h0LFxuXHRcdFx0bWluSGVpZ2h0XHRcdDogcGFyc2VGbG9hdCggdGhpcy5taW5IZWlnaHQgKSA8IHdpbmRvdy5pbm5lckhlaWdodCA/IHRoaXMubWluSGVpZ2h0IDogdW5kZWZpbmVkLFxuXHRcdFx0bWF4SGVpZ2h0XHRcdDogdGhpcy5tYXhIZWlnaHQsXG5cdFx0XHRzY3JvbGxTdHJhdGVneVx0OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbih7IGF1dG9DbG9zZTogdHJ1ZSwgc2Nyb2xsVGhyb3R0bGU6IDEwMDAgfSksXG5cdFx0XHRwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCksXG5cdFx0fSk7XG5cdFx0Y29uc3Qgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKCBjb25maWcgKTtcblxuXHRcdC8vIFNldCBvdmVybGF5IGRpcmVjdGlvblxuXHRcdG92ZXJsYXlSZWYuc2V0RGlyZWN0aW9uKCB0aGlzLmRpcmVjdGlvbiApO1xuXG5cdFx0Ly8gQ2F0Y2gga2V5Ym9hcmQgZXZlbnRzIG9uIG92ZXJsYXlcblx0XHRvdmVybGF5UmVmLmtleWRvd25FdmVudHMoKVxuXHRcdC5waXBlKCB1bnRpbENtcERlc3Ryb3llZCggdGhpcyApIClcblx0XHQuc3Vic2NyaWJlKCAoIGV2ZW50OiBLZXlib2FyZEV2ZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBldmVudC5rZXkgIT09ICdFc2NhcGUnICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLmNsb3NlKCBldmVudCApO1xuXHRcdH0gKTtcblxuXHRcdC8vIE9uIGJhY2tkcm9wIGNsaWNrXG5cdFx0b3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKClcblx0XHQucGlwZSggdW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKSApXG5cdFx0LnN1YnNjcmliZSggKCBldmVudDogTW91c2VFdmVudCApID0+IHtcblx0XHRcdHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSAmJiB0aGlzLmNsb3NlKCBldmVudCApO1xuXHRcdFx0dGhpcy5iYWNrZHJvcFByZXNzLmVtaXQoIGV2ZW50ICk7XG5cdFx0fSApO1xuXG5cdFx0Lypcblx0XHRSZWFkIG1vcmUgYWJvdXQgdGhlIHJlc2l6ZSBvYnNlcnZlciBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdXBkYXRlcy8yMDE2LzEwL3Jlc2l6ZW9ic2VydmVyXG5cdFx0QmFzaWNhbHksIHdoYXQgd2UgZG8gaXMgdGhhdCB3ZSBzdWJzY3JpYmUgdG8gc2l6ZSBldmVudHMgb24gdGhlIG92ZXJsYXkuXG5cdFx0Q3VycmVudGx5IHdlIG9ubHkgZ2V0IG9uZSBldmVudCwgKHRoZW4gd2UgZGlzY29ubmV0IHRoZSByZXNpemUgb2JzZXJ2ZXIpLlxuXHRcdEJ1dCB0aGVuIHdlIHNpbXBseSBjYWxjdWxhdGUgaWYgd2UgbmVlZCB0byBpbXByb3ZlIHRoZSBsYXlvdXQuXG5cdFx0ICovXG5cdFx0dGhpcy5fcmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlciggKCBlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10gKSA9PiB7XG5cdFx0XHRjb25zdCB2aWV3UG9ydFdpZHRoOiBudW1iZXIgPSBNYXRoLm1heCggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwICk7XG5cdFx0XHRjb25zdCB2aWV3UG9ydEhlaWdodDogbnVtYmVyID0gTWF0aC5tYXgoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwICk7XG5cblx0XHRcdGZvciAoIGNvbnN0IGVudHJ5IG9mIGVudHJpZXMgKSB7XG5cdFx0XHRcdC8vIFdlIGdldCB0aGUgd2lkdGggJiBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgZnJvbSB0aGUgdGhlIGNvbnRlbnRSZWN0LCBwcm92aWRlZCBieSB0aGUgcmVzaXplIG9ic2VydmVyXG5cdFx0XHRcdGNvbnN0IHdpZHRoOiBudW1iZXIgPSBlbnRyeS5jb250ZW50UmVjdC53aWR0aDtcblx0XHRcdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgPSBlbnRyeS5jb250ZW50UmVjdC5oZWlnaHQ7XG5cdFx0XHRcdGNvbnN0IGRvbVJlYWN0OiBET01SZWN0ID0gZW50cnkudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRjb25zdCB4OiBudW1iZXIgPSBkb21SZWFjdC5sZWZ0O1xuXHRcdFx0XHRjb25zdCB5OiBudW1iZXIgPSBkb21SZWFjdC50b3A7XG5cdFx0XHRcdGNvbnN0IG9mZnNldFBsdXNXaWR0aDogbnVtYmVyID0geCArIHdpZHRoO1xuXHRcdFx0XHRjb25zdCBvZmZzZXRQbHVzSGVpZ2h0OiBudW1iZXIgPSB5ICsgaGVpZ2h0O1xuXHRcdFx0XHRjb25zdCBwaXhlbHNPdmVyZmxvd1g6IG51bWJlciA9IG9mZnNldFBsdXNXaWR0aCAtIHZpZXdQb3J0V2lkdGg7XG5cdFx0XHRcdGNvbnN0IHBpeGVsc092ZXJmbG93WTogbnVtYmVyID0gb2Zmc2V0UGx1c0hlaWdodCAtIHZpZXdQb3J0SGVpZ2h0O1xuXG5cdFx0XHRcdC8vIElmIHggaXMgbmVnYXRpdmUsIHdlIGFyZSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0LlxuXHRcdFx0XHQvLyBJZiB5IGlzIG5lZ2F0aXZlLCB3ZSBhcmUgb2ZmLXNjcmVlbiB0byB0aGUgdG9wLlxuXHRcdFx0XHQvLyBJZiBwaXhlbHNPdmVyZmxvd1ggaXMgcG9zaXRpdmUsIHdlIGFyZSBvZmYtc2NyZWVuIG9uIHRoZSByaWdodFxuXHRcdFx0XHQvLyBJZiBwaXhlbHNPdmVyZmxvd1kgaXMgcG9zaXRpdmUsIHdlIGFyZSBvZmYtc2NyZWVuIG9uIHRoZSBib3R0b21cblx0XHRcdFx0Ly8gSW4gZWl0aGVyIGNhc2UsIHdlIGFkb3B0IGEgbmV3IHN0cmF0ZWd5LlxuXHRcdFx0XHRpZiAoIHggPCAwIHx8IHkgPCAwIHx8IHBpeGVsc092ZXJmbG93WCA+IDEgfHwgcGl4ZWxzT3ZlcmZsb3dZID4gMSApIHtcblx0XHRcdFx0XHR0aGlzLmlzT3BlbmVkICYmIG92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcblxuXHRcdFx0XHRcdHRoaXMuX2lzUG9zaXRpb25TdHJhdGVneVVwZGF0ZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gRWxlbWVudCBmb3Igd2hpY2ggdG8gb2JzZXJ2ZSBoZWlnaHQgYW5kIHdpZHRoXG5cdFx0dGhpcy5fcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSggb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCApO1xuXG5cdFx0cmV0dXJuIG92ZXJsYXlSZWY7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7RmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5fVxuXHQgKi9cblx0cHJpdmF0ZSBfY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuXHRcdGNvbnN0IG9yaWdpblg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zID0gdGhpcy5vcmlnaW5YIHx8ICdzdGFydCc7XG5cdFx0bGV0IG9yaWdpblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9IHRoaXMub3JpZ2luWTtcblx0XHRsZXQgb3JpZ2luRmFsbGJhY2tYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9IG9yaWdpblg7XG5cdFx0bGV0IG9yaWdpbkZhbGxiYWNrWTogVmVydGljYWxDb25uZWN0aW9uUG9zID0gb3JpZ2luWTtcblx0XHRjb25zdCBvdmVybGF5WDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSB0aGlzLm92ZXJsYXlYIHx8ICdzdGFydCc7XG5cdFx0bGV0IG92ZXJsYXlZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgPSB0aGlzLm92ZXJsYXlZO1xuXHRcdGxldCBvdmVybGF5RmFsbGJhY2tYOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9IG92ZXJsYXlYO1xuXHRcdGxldCBvdmVybGF5RmFsbGJhY2tZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgPSBvdmVybGF5WTtcblx0XHRjb25zdCBvZmZzZXRYOiBudW1iZXIgPSArKCB0aGlzLm9mZnNldFggfHwgMCApO1xuXHRcdGxldCBvZmZzZXRZOiBudW1iZXIgPSArKCB0aGlzLm9mZnNldFkgfHwgMCApO1xuXG5cdFx0c3dpdGNoICggdGhpcy5wb3NpdGlvbiApIHtcblx0XHRcdGNhc2UgJ2Fib3ZlJzpcblx0XHRcdGNhc2UgJ2JlbG93Jzpcblx0XHRcdFx0aWYgKCAhdGhpcy5vcmlnaW5ZICkgb3JpZ2luWSA9IHRoaXMucG9zaXRpb24gPT09ICdhYm92ZScgPyAndG9wJyA6ICdib3R0b20nO1xuXHRcdFx0XHRpZiAoICF0aGlzLm92ZXJsYXlZICkgb3ZlcmxheVkgPSB0aGlzLnBvc2l0aW9uID09PSAnYWJvdmUnID8gJ2JvdHRvbScgOiAndG9wJztcblx0XHRcdFx0aWYgKCBfLmlzTmlsKCB0aGlzLm9mZnNldFkgKSApIG9mZnNldFkgPSB0aGlzLnBvc2l0aW9uID09PSAnYWJvdmUnID8gLTUgOiA1O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRvcmlnaW5GYWxsYmFja1ggPSB0aGlzLl9mYWxsYmFja1goIG9yaWdpblggKTtcblx0XHRvcmlnaW5GYWxsYmFja1kgPSB0aGlzLl9mYWxsYmFja1koIG9yaWdpblkgKTtcblx0XHRvdmVybGF5RmFsbGJhY2tYID0gdGhpcy5fZmFsbGJhY2tYKCBvdmVybGF5WCApO1xuXHRcdG92ZXJsYXlGYWxsYmFja1kgPSB0aGlzLl9mYWxsYmFja1koIG92ZXJsYXlZICk7XG5cblx0XHRyZXR1cm4gdGhpcy5fb3ZlcmxheVxuXHRcdC5wb3NpdGlvbigpXG5cdFx0LmZsZXhpYmxlQ29ubmVjdGVkVG8oIHRoaXMuX2VsZW1lbnRSZWYgKVxuXHRcdC53aXRoRmxleGlibGVEaW1lbnNpb25zKCBmYWxzZSApXG5cdFx0LndpdGhMb2NrZWRQb3NpdGlvbigpXG5cdFx0LndpdGhQdXNoKCB0cnVlIClcblx0XHQud2l0aFBvc2l0aW9ucyhbXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblgsIG9yaWdpblksXG5cdFx0XHRcdG92ZXJsYXlYLCBvdmVybGF5WSxcblx0XHRcdFx0b2Zmc2V0WCwgb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSxcblx0XHRcdFx0b3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZLFxuXHRcdFx0XHRvZmZzZXRYOiAtb2Zmc2V0WCwgb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblgsIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcblx0XHRcdFx0b3ZlcmxheVgsIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZLFxuXHRcdFx0XHRvZmZzZXRYLCBvZmZzZXRZOiAtb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWTogb3JpZ2luRmFsbGJhY2tZLFxuXHRcdFx0XHRvdmVybGF5WDogb3ZlcmxheUZhbGxiYWNrWCwgb3ZlcmxheVk6IG92ZXJsYXlGYWxsYmFja1ksXG5cdFx0XHRcdG9mZnNldFg6IC1vZmZzZXRYLCBvZmZzZXRZOiAtb2Zmc2V0WSxcblx0XHRcdH0sXG5cdFx0XSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtIb3Jpem9udGFsQ29ubmVjdGlvblBvc30gb3JpZ2luXG5cdCAqIEByZXR1cm4ge0hvcml6b250YWxDb25uZWN0aW9uUG9zfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwcml2YXRlIF9mYWxsYmFja1goIG9yaWdpbjogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgKTogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3Mge1xuXHRcdHN3aXRjaCAoIG9yaWdpbiApIHtcblx0XHRcdGNhc2UgJ3N0YXJ0Jzpcblx0XHRcdFx0cmV0dXJuICdlbmQnO1xuXHRcdFx0Y2FzZSAnZW5kJzpcblx0XHRcdFx0cmV0dXJuICdzdGFydCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1ZlcnRpY2FsQ29ubmVjdGlvblBvc30gb3JpZ2luXG5cdCAqIEByZXR1cm4ge1ZlcnRpY2FsQ29ubmVjdGlvblBvc31cblx0ICovXG5cdCBATWVtb2l6ZSgpXG5cdHByaXZhdGUgX2ZhbGxiYWNrWSggb3JpZ2luOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgKTogVmVydGljYWxDb25uZWN0aW9uUG9zIHtcblx0XHRzd2l0Y2ggKCBvcmlnaW4gKSB7XG5cdFx0XHRjYXNlICd0b3AnOlxuXHRcdFx0XHRyZXR1cm4gJ2JvdHRvbSc7XG5cdFx0XHRjYXNlICdib3R0b20nOlxuXHRcdFx0XHRyZXR1cm4gJ3RvcCc7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=