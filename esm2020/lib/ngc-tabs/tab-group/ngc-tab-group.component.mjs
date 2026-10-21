import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, ContentChildren, QueryList, Input, ElementRef, ViewChild, Output, EventEmitter, ViewChildren, ChangeDetectionStrategy, HostBinding, ChangeDetectorRef } from '@angular/core';
import { merge } from 'rxjs';
import { startWith, takeUntil, switchMap } from 'rxjs/operators';
import ResizeObserver from 'resize-observer-polyfill';
import _ from 'lodash';
import { DetectScrollDirective, Unsubscriber, CoerceBoolean, CoerceNumber, DefaultValue, CoerceCssPixel, untilCmpDestroyed } from '@core';
import { NgcScrollBarDirective } from '../../ngc-scroll-bar';
import { NgcTabComponent } from '../tab/ngc-tab.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "angular-core";
import * as i3 from "../../ngc-icon/ngc-icon.component";
import * as i4 from "../../ngc-scroll-bar/ngc-scroll-bar/ngc-scroll-bar.directive";
import * as i5 from "../../ngc-divider/ngc-divider.component";
let NgcTabGroupComponent = class NgcTabGroupComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_elementRef, _cdRef) {
        this._elementRef = _elementRef;
        this._cdRef = _cdRef;
        this.selectedIndex = 0;
        this.hasScrollBar = true;
        this.headerHorizontalDivider = true;
        this.alignment = 'left';
        this.selectedIndexChange = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this._resizeObserver = new ResizeObserver(() => this._initInkBarThrottle(this.selectedIndex));
        this._initInkBarThrottle = _.throttle(this._initInkBar.bind(this), 200, { leading: false });
    }
    get styleHeaderHeight() { return this.headerHeight; }
    get styleContentPaddingTop() { return this.contentPaddingTop || this.contentPaddingVertical; }
    get styleContentPaddingBottom() { return this.contentPaddingBottom || this.contentPaddingVertical; }
    get styleContentPaddingLeft() { return this.contentPaddingLeft || this.contentPaddingHorizontal; }
    get styleContentPaddingRight() { return this.contentPaddingRight || this.contentPaddingHorizontal; }
    get classStretch() { return this.stretch; }
    get classLeft() { return this.alignment === 'left'; }
    get classRight() { return this.alignment === 'right'; }
    get classCenter() { return this.alignment === 'center'; }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.selectedIndex)
            return;
        this.select(this.selectedIndex);
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        this._resizeObserver.disconnect();
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.tabHeaderList.changes
            .pipe(startWith(this.tabHeaderList), untilCmpDestroyed(this))
            .subscribe((items) => {
            this._tabHeaderItems = items?._results;
            this._initInkBarThrottle(this.selectedIndex);
        });
        this.select(this.selectedIndex);
    }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        this.tabItems.changes
            .pipe(startWith(this.tabItems), switchMap((items) => {
            const obs = [];
            this.items = _.map(items?._results, (item) => {
                obs.push(item.changes$
                    .pipe(takeUntil(this.tabItems.changes)));
                return item;
            });
            this._cdRef.markForCheck();
            return merge(...obs);
        }), untilCmpDestroyed(this))
            .subscribe(() => {
            this._initInkBarThrottle(this.selectedIndex);
            this._cdRef.markForCheck();
        });
        // Element for which to observe height and width
        this._resizeObserver.observe(this._elementRef.nativeElement);
    }
    /**
     * @param {number} index
     * @return {void}
     */
    select(index) {
        if (!_.isFinite(index) || !this.items?.length)
            return;
        if (this.selectedIndex !== index) {
            this.selectedIndex = index;
            this.tabChanged.emit(this.items[this.selectedIndex]);
            this.selectedIndexChange.emit(this.selectedIndex);
        }
        this.scrollBar?.reset();
        this._initInkBarThrottle(index);
    }
    /**
     * @param {number} index
     * @return {void}
     */
    _initInkBar(index) {
        if (!this.tabInkBar)
            return;
        const tabHeaderItems = this._tabHeaderItems;
        let width = 0;
        let left = 0;
        if (tabHeaderItems?.length) {
            if (index < 0)
                index = 0;
            else if (index > tabHeaderItems.length - 1)
                index = tabHeaderItems.length - 1;
            const selectedTab = tabHeaderItems[index];
            width = selectedTab?.nativeElement.clientWidth || 0;
            if (width) {
                left = tabHeaderItems[0].nativeElement.offsetLeft || 0;
                for (let i = 0; i < index; i++) {
                    left += tabHeaderItems[i].nativeElement.clientWidth || 0;
                }
                selectedTab?.nativeElement.scrollIntoView({ block: 'center', inline: 'nearest' });
            }
        }
        this.tabInkBar.nativeElement.style.width = `${width}px`;
        this.tabInkBar.nativeElement.style.left = `${left}px`;
    }
};
NgcTabGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTabGroupComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcTabGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTabGroupComponent, selector: "ngc-tab-group", inputs: { headerHeight: "headerHeight", contentPaddingVertical: "contentPaddingVertical", contentPaddingHorizontal: "contentPaddingHorizontal", contentPaddingTop: "contentPaddingTop", contentPaddingBottom: "contentPaddingBottom", contentPaddingLeft: "contentPaddingLeft", contentPaddingRight: "contentPaddingRight", selectedIndex: "selectedIndex", hasScrollBar: "hasScrollBar", stretch: "stretch", stretchTab: "stretchTab", headerVerticalDivider: "headerVerticalDivider", headerHorizontalDivider: "headerHorizontalDivider", alwaysOnDisplay: "alwaysOnDisplay", noTabContent: "noTabContent", alignment: "alignment", scrollBarMode: "scrollBarMode" }, outputs: { selectedIndexChange: "selectedIndexChange", tabChanged: "tabChanged" }, host: { properties: { "style.--tab-group-header-height": "this.styleHeaderHeight", "style.--tab-group-content-padding-top": "this.styleContentPaddingTop", "style.--tab-group-content-padding-bottom": "this.styleContentPaddingBottom", "style.--tab-group-content-padding-left": "this.styleContentPaddingLeft", "style.--tab-group-content-padding-right": "this.styleContentPaddingRight", "class.ngc-tab-group--stretch": "this.classStretch", "class.ngc-tab-group--left": "this.classLeft", "class.ngc-tab-group--right": "this.classRight", "class.ngc-tab-group--center": "this.classCenter" }, classAttribute: "ngc-tab-group" }, queries: [{ propertyName: "tabItems", predicate: NgcTabComponent, descendants: true }], viewQueries: [{ propertyName: "scroller", first: true, predicate: DetectScrollDirective, descendants: true }, { propertyName: "scrollBar", first: true, predicate: NgcScrollBarDirective, descendants: true }, { propertyName: "tabGroupHeader", first: true, predicate: ["tabGroupHeader"], descendants: true }, { propertyName: "tabInkBar", first: true, predicate: ["tabInkBar"], descendants: true }, { propertyName: "tabHeaderList", predicate: ["tabHeader"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"ngc-tab-group__header\" #tabGroupHeader *ngIf=\"alwaysOnDisplay || items?.length > 1\"\n\t[class.ngc-tab-group__header--stretch]=\"stretchTab\">\n\t<div class=\"ngc-tab-group__header-list\">\n\t\t<ng-container *ngFor=\"let item of items; let index = index; let last = last\">\n\t\t\t<div class=\"ngc-tab-group__header-item\" #tabHeader [ngClass]=\"item?.classes\"\n\t\t\t\t[class.ngc-tab-group__header-item--active]=\"selectedIndex === index\"\n\t\t\t\t[class.ngc-tab-group__header-item--disabled]=\"item?.disabled\"\n\t\t\t\t(click)=\"!item?.disabled && select(index)\">\n\t\t\t\t<ngc-icon class=\"ngc-tab-group__header-item-icon\" size=\"20px\" *ngIf=\"item?.icon\"\n\t\t\t\t\t[name]=\"item?.icon\"></ngc-icon>\n\n\t\t\t\t{{ item?.label }}\n\n\t\t\t\t<ng-container *ngTemplateOutlet=\"item?.header\"></ng-container>\n\t\t\t</div>\n\n\t\t\t<ngc-divider class=\"ngc-tab-group__header-vertical-divider\" vertical\n\t\t\t\t*ngIf=\"headerVerticalDivider && !last\"></ngc-divider>\n\t\t</ng-container>\n\t</div>\n\n\t<ngc-divider class=\"ngc-tab-group__header-horizontal-divider\" *ngIf=\"headerHorizontalDivider\"></ngc-divider>\n\n\t<div class=\"ngc-tab-group__header-ink-bar\" #tabInkBar></div>\n</div>\n\n<div class=\"ngc-tab-group__content\" ngcScrollBar detectScroll suppressScrollX *ngIf=\"!noTabContent\"\n\t[suppress]=\"!hasScrollBar\" [mode]=\"scrollBarMode\">\n\t<ng-container *ngFor=\"let item of items; let index = index\">\n\t\t<ng-container *ngIf=\"selectedIndex === index\">\n\t\t\t<ng-container *ngTemplateOutlet=\"item?.content\"></ng-container>\n\t\t</ng-container>\n\t</ng-container>\n</div>", styles: [".ngc-tab-group{display:flex;flex-direction:column;border:1px solid rgba(0,0,0,.08);border-radius:12px;overflow:hidden;background-color:#fff;--tab-header-padding-y: 6px;--tab-header-padding-x: 12px;--tab-track-padding: 4px;--tab-track-border-radius: 20px;--tab-pill-border-radius: 16px}.ngc-tab-group.ngc-tab-group--stretch{width:100%;min-width:0;max-width:100vw;height:100%;min-height:0;max-height:100vh;border:none;border-radius:0}.ngc-tab-group.ngc-tab-group--left>.ngc-tab-group__header>.ngc-tab-group__header-list{justify-content:flex-start}.ngc-tab-group.ngc-tab-group--right>.ngc-tab-group__header>.ngc-tab-group__header-list{justify-content:flex-end}.ngc-tab-group.ngc-tab-group--center>.ngc-tab-group__header>.ngc-tab-group__header-list{justify-content:center}.ngc-tab-group>.ngc-tab-group__header{overflow-x:overlay;overflow-y:hidden;position:relative;display:flex;align-items:center;height:var(--tab-group-header-height, 48px);min-height:var(--tab-group-header-height, 48px);max-height:var(--tab-group-header-height, 48px);padding:0 var(--tab-header-padding-x);-ms-overflow-style:none;scrollbar-width:none;box-sizing:border-box}@supports (-moz-appearance: none){.ngc-tab-group>.ngc-tab-group__header{overflow-x:auto!important}}.ngc-tab-group>.ngc-tab-group__header::-webkit-scrollbar{display:none}.ngc-tab-group>.ngc-tab-group__header.ngc-tab-group__header--stretch{width:100%;padding:0 var(--tab-header-padding-x)}.ngc-tab-group>.ngc-tab-group__header.ngc-tab-group__header--stretch>.ngc-tab-group__header-list{width:100%}.ngc-tab-group>.ngc-tab-group__header.ngc-tab-group__header--stretch>.ngc-tab-group__header-list>.ngc-tab-group__header-item{flex:1;width:100%;min-width:0}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list{display:flex;align-items:center;height:calc(100% - var(--tab-header-padding-y) * 2);min-height:0;background-color:#78788014;border-radius:var(--tab-track-border-radius);padding:var(--tab-track-padding);box-sizing:border-box}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item{height:100%;padding:0 16px;text-align:center;cursor:pointer;white-space:nowrap;display:flex;align-items:center;justify-content:center;color:#0000008c;font-weight:500;font-size:13px;border-radius:var(--tab-pill-border-radius);position:relative;z-index:2;transition:color .25s cubic-bezier(.4,0,.2,1);box-sizing:border-box}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item.ngc-tab-group__header-item--active{color:#000000e6;font-weight:600}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item:hover:not(.ngc-tab-group__header-item--active):not(.ngc-tab-group__header-item--disabled){color:#000000d9}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item.ngc-tab-group__header-item--disabled{cursor:not-allowed;color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item.ngc-tab-group__header-item--disabled:active{pointer-events:none}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item>.ngc-tab-group__header-item-icon{margin-right:6px}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-vertical-divider{height:50%;min-height:50%;max-height:50%;align-self:center;opacity:.5}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-horizontal-divider{display:none}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-ink-bar{position:absolute;z-index:1;top:calc(var(--tab-header-padding-y) + var(--tab-track-padding));height:calc(100% - (var(--tab-header-padding-y) + var(--tab-track-padding)) * 2);background-color:#fff;border-radius:var(--tab-pill-border-radius);box-shadow:0 2px 6px #00000014,0 1px 2px #0000000a;transition:left .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1)}.ngc-tab-group>.ngc-tab-group__content{display:flex;flex-direction:column;padding-top:var(--tab-group-content-padding-top, 15px);padding-bottom:var(--tab-group-content-padding-bottom, 15px);padding-left:var(--tab-group-content-padding-left, 15px);padding-right:var(--tab-group-content-padding-right, 15px);width:100%;min-width:0;height:100%;min-height:0}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DetectScrollDirective, selector: "[detectScroll]", inputs: ["delay", "offset"], outputs: ["scrolling", "scrollingX", "scrollingY", "scrollingUp", "scrollingDown", "scrollingLeft", "scrollingRight", "scrollReachTop", "scrollReachBottom", "scrollReachLeft", "scrollReachRight"], exportAs: ["detectScroll"] }, { kind: "component", type: i3.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }, { kind: "directive", type: i4.NgcScrollBarDirective, selector: "[ngcScrollBar]", exportAs: ["ngcScrollBar"] }, { kind: "component", type: i5.NgcDividerComponent, selector: "ngc-divider", inputs: ["vertical"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTabGroupComponent.prototype, "headerHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTabGroupComponent.prototype, "contentPaddingVertical", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTabGroupComponent.prototype, "contentPaddingHorizontal", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTabGroupComponent.prototype, "contentPaddingTop", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTabGroupComponent.prototype, "contentPaddingBottom", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTabGroupComponent.prototype, "contentPaddingLeft", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTabGroupComponent.prototype, "contentPaddingRight", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcTabGroupComponent.prototype, "selectedIndex", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTabGroupComponent.prototype, "hasScrollBar", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTabGroupComponent.prototype, "stretch", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTabGroupComponent.prototype, "stretchTab", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTabGroupComponent.prototype, "headerVerticalDivider", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTabGroupComponent.prototype, "headerHorizontalDivider", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTabGroupComponent.prototype, "alwaysOnDisplay", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTabGroupComponent.prototype, "noTabContent", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcTabGroupComponent.prototype, "alignment", void 0);
NgcTabGroupComponent = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], NgcTabGroupComponent);
export { NgcTabGroupComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTabGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-tab-group', host: { class: 'ngc-tab-group' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-tab-group__header\" #tabGroupHeader *ngIf=\"alwaysOnDisplay || items?.length > 1\"\n\t[class.ngc-tab-group__header--stretch]=\"stretchTab\">\n\t<div class=\"ngc-tab-group__header-list\">\n\t\t<ng-container *ngFor=\"let item of items; let index = index; let last = last\">\n\t\t\t<div class=\"ngc-tab-group__header-item\" #tabHeader [ngClass]=\"item?.classes\"\n\t\t\t\t[class.ngc-tab-group__header-item--active]=\"selectedIndex === index\"\n\t\t\t\t[class.ngc-tab-group__header-item--disabled]=\"item?.disabled\"\n\t\t\t\t(click)=\"!item?.disabled && select(index)\">\n\t\t\t\t<ngc-icon class=\"ngc-tab-group__header-item-icon\" size=\"20px\" *ngIf=\"item?.icon\"\n\t\t\t\t\t[name]=\"item?.icon\"></ngc-icon>\n\n\t\t\t\t{{ item?.label }}\n\n\t\t\t\t<ng-container *ngTemplateOutlet=\"item?.header\"></ng-container>\n\t\t\t</div>\n\n\t\t\t<ngc-divider class=\"ngc-tab-group__header-vertical-divider\" vertical\n\t\t\t\t*ngIf=\"headerVerticalDivider && !last\"></ngc-divider>\n\t\t</ng-container>\n\t</div>\n\n\t<ngc-divider class=\"ngc-tab-group__header-horizontal-divider\" *ngIf=\"headerHorizontalDivider\"></ngc-divider>\n\n\t<div class=\"ngc-tab-group__header-ink-bar\" #tabInkBar></div>\n</div>\n\n<div class=\"ngc-tab-group__content\" ngcScrollBar detectScroll suppressScrollX *ngIf=\"!noTabContent\"\n\t[suppress]=\"!hasScrollBar\" [mode]=\"scrollBarMode\">\n\t<ng-container *ngFor=\"let item of items; let index = index\">\n\t\t<ng-container *ngIf=\"selectedIndex === index\">\n\t\t\t<ng-container *ngTemplateOutlet=\"item?.content\"></ng-container>\n\t\t</ng-container>\n\t</ng-container>\n</div>", styles: [".ngc-tab-group{display:flex;flex-direction:column;border:1px solid rgba(0,0,0,.08);border-radius:12px;overflow:hidden;background-color:#fff;--tab-header-padding-y: 6px;--tab-header-padding-x: 12px;--tab-track-padding: 4px;--tab-track-border-radius: 20px;--tab-pill-border-radius: 16px}.ngc-tab-group.ngc-tab-group--stretch{width:100%;min-width:0;max-width:100vw;height:100%;min-height:0;max-height:100vh;border:none;border-radius:0}.ngc-tab-group.ngc-tab-group--left>.ngc-tab-group__header>.ngc-tab-group__header-list{justify-content:flex-start}.ngc-tab-group.ngc-tab-group--right>.ngc-tab-group__header>.ngc-tab-group__header-list{justify-content:flex-end}.ngc-tab-group.ngc-tab-group--center>.ngc-tab-group__header>.ngc-tab-group__header-list{justify-content:center}.ngc-tab-group>.ngc-tab-group__header{overflow-x:overlay;overflow-y:hidden;position:relative;display:flex;align-items:center;height:var(--tab-group-header-height, 48px);min-height:var(--tab-group-header-height, 48px);max-height:var(--tab-group-header-height, 48px);padding:0 var(--tab-header-padding-x);-ms-overflow-style:none;scrollbar-width:none;box-sizing:border-box}@supports (-moz-appearance: none){.ngc-tab-group>.ngc-tab-group__header{overflow-x:auto!important}}.ngc-tab-group>.ngc-tab-group__header::-webkit-scrollbar{display:none}.ngc-tab-group>.ngc-tab-group__header.ngc-tab-group__header--stretch{width:100%;padding:0 var(--tab-header-padding-x)}.ngc-tab-group>.ngc-tab-group__header.ngc-tab-group__header--stretch>.ngc-tab-group__header-list{width:100%}.ngc-tab-group>.ngc-tab-group__header.ngc-tab-group__header--stretch>.ngc-tab-group__header-list>.ngc-tab-group__header-item{flex:1;width:100%;min-width:0}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list{display:flex;align-items:center;height:calc(100% - var(--tab-header-padding-y) * 2);min-height:0;background-color:#78788014;border-radius:var(--tab-track-border-radius);padding:var(--tab-track-padding);box-sizing:border-box}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item{height:100%;padding:0 16px;text-align:center;cursor:pointer;white-space:nowrap;display:flex;align-items:center;justify-content:center;color:#0000008c;font-weight:500;font-size:13px;border-radius:var(--tab-pill-border-radius);position:relative;z-index:2;transition:color .25s cubic-bezier(.4,0,.2,1);box-sizing:border-box}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item.ngc-tab-group__header-item--active{color:#000000e6;font-weight:600}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item:hover:not(.ngc-tab-group__header-item--active):not(.ngc-tab-group__header-item--disabled){color:#000000d9}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item.ngc-tab-group__header-item--disabled{cursor:not-allowed;color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item.ngc-tab-group__header-item--disabled:active{pointer-events:none}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-item>.ngc-tab-group__header-item-icon{margin-right:6px}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-list>.ngc-tab-group__header-vertical-divider{height:50%;min-height:50%;max-height:50%;align-self:center;opacity:.5}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-horizontal-divider{display:none}.ngc-tab-group>.ngc-tab-group__header>.ngc-tab-group__header-ink-bar{position:absolute;z-index:1;top:calc(var(--tab-header-padding-y) + var(--tab-track-padding));height:calc(100% - (var(--tab-header-padding-y) + var(--tab-track-padding)) * 2);background-color:#fff;border-radius:var(--tab-pill-border-radius);box-shadow:0 2px 6px #00000014,0 1px 2px #0000000a;transition:left .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1)}.ngc-tab-group>.ngc-tab-group__content{display:flex;flex-direction:column;padding-top:var(--tab-group-content-padding-top, 15px);padding-bottom:var(--tab-group-content-padding-bottom, 15px);padding-left:var(--tab-group-content-padding-left, 15px);padding-right:var(--tab-group-content-padding-right, 15px);width:100%;min-width:0;height:100%;min-height:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { styleHeaderHeight: [{
                type: HostBinding,
                args: ['style.--tab-group-header-height']
            }], styleContentPaddingTop: [{
                type: HostBinding,
                args: ['style.--tab-group-content-padding-top']
            }], styleContentPaddingBottom: [{
                type: HostBinding,
                args: ['style.--tab-group-content-padding-bottom']
            }], styleContentPaddingLeft: [{
                type: HostBinding,
                args: ['style.--tab-group-content-padding-left']
            }], styleContentPaddingRight: [{
                type: HostBinding,
                args: ['style.--tab-group-content-padding-right']
            }], classStretch: [{
                type: HostBinding,
                args: ['class.ngc-tab-group--stretch']
            }], classLeft: [{
                type: HostBinding,
                args: ['class.ngc-tab-group--left']
            }], classRight: [{
                type: HostBinding,
                args: ['class.ngc-tab-group--right']
            }], classCenter: [{
                type: HostBinding,
                args: ['class.ngc-tab-group--center']
            }], scroller: [{
                type: ViewChild,
                args: [DetectScrollDirective]
            }], scrollBar: [{
                type: ViewChild,
                args: [NgcScrollBarDirective]
            }], tabGroupHeader: [{
                type: ViewChild,
                args: ['tabGroupHeader']
            }], tabInkBar: [{
                type: ViewChild,
                args: ['tabInkBar']
            }], tabHeaderList: [{
                type: ViewChildren,
                args: ['tabHeader']
            }], tabItems: [{
                type: ContentChildren,
                args: [NgcTabComponent, { descendants: true }]
            }], headerHeight: [{
                type: Input
            }], contentPaddingVertical: [{
                type: Input
            }], contentPaddingHorizontal: [{
                type: Input
            }], contentPaddingTop: [{
                type: Input
            }], contentPaddingBottom: [{
                type: Input
            }], contentPaddingLeft: [{
                type: Input
            }], contentPaddingRight: [{
                type: Input
            }], selectedIndex: [{
                type: Input
            }], hasScrollBar: [{
                type: Input
            }], stretch: [{
                type: Input
            }], stretchTab: [{
                type: Input
            }], headerVerticalDivider: [{
                type: Input
            }], headerHorizontalDivider: [{
                type: Input
            }], alwaysOnDisplay: [{
                type: Input
            }], noTabContent: [{
                type: Input
            }], alignment: [{
                type: Input
            }], scrollBarMode: [{
                type: Input
            }], selectedIndexChange: [{
                type: Output
            }], tabChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRhYi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10YWJzL3RhYi1ncm91cC9uZ2MtdGFiLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRhYnMvdGFiLWdyb3VwL25nYy10YWItZ3JvdXAuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQzdDLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUM1QixTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDL0IsWUFBWSxFQUVaLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFDdkQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLGNBQWMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUNOLHFCQUFxQixFQUFFLFlBQVksRUFBRSxhQUFhLEVBQ2xELFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUMxQyxpQkFBaUIsRUFDUCxNQUFNLE9BQU8sQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBa0JwRCxJQUFNLG9CQUFvQixHQUExQixNQUFNLG9CQUFvQjtJQWlFaEM7Ozs7T0FJRztJQUNILFlBQXFCLFdBQXVCLEVBQVUsTUFB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S0FBSztnQkFDNEIsbUJBQW1CO3NCQUFwRCxLQUFLO2dCQUMwQyxhQUFhO3NCQUE1RCxLQUFLO2dCQUMyQyxZQUFZO3NCQUE1RCxLQUFLO2dCQUMyQixPQUFPO3NCQUF2QyxLQUFLO2dCQUMyQixVQUFVO3NCQUExQyxLQUFLO2dCQUMyQixxQkFBcUI7c0JBQXJELEtBQUs7Z0JBQzJDLHVCQUF1QjtzQkFBdkUsS0FBSztnQkFDMkIsZUFBZTtzQkFBL0MsS0FBSztnQkFDMkIsWUFBWTtzQkFBNUMsS0FBSztnQkFDMEIsU0FBUztzQkFBeEMsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLO2dCQUVXLG1CQUFtQjtzQkFBbkMsTUFBTTtnQkFDVSxVQUFVO3NCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ29udGVudENoaWxkcmVuLFxuXHRRdWVyeUxpc3QsIElucHV0LCBFbGVtZW50UmVmLFxuXHRWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuXHRWaWV3Q2hpbGRyZW4sIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyxcblx0QWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7XG5cdERldGVjdFNjcm9sbERpcmVjdGl2ZSwgVW5zdWJzY3JpYmVyLCBDb2VyY2VCb29sZWFuLFxuXHRDb2VyY2VOdW1iZXIsIERlZmF1bHRWYWx1ZSwgQ29lcmNlQ3NzUGl4ZWwsXG5cdHVudGlsQ21wRGVzdHJveWVkXG4sIElPYmplY3QgfSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXJEaXJlY3RpdmUsIElOZ2NTY3JvbGxCYXJNb2RlIH0gZnJvbSAnLi4vLi4vbmdjLXNjcm9sbC1iYXInO1xuaW1wb3J0IHsgTmdjVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiL25nYy10YWIuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBOZ2NJQmVmb3JlVGFiQ2hhbmdlRXZlbnQge1xuXHR0YWJHcm91cDogTmdjVGFiR3JvdXBDb21wb25lbnQ7XG5cdHRhYkluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIE5nY0lUYWJBbGlnbm1lbnQgPSAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcic7XG5cbkBVbnN1YnNjcmliZXIoKVxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy10YWItZ3JvdXAnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy10YWItZ3JvdXAuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLXRhYi1ncm91cC5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLXRhYi1ncm91cCcgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NUYWJHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLXRhYi1ncm91cC1oZWFkZXItaGVpZ2h0JyApXG5cdGdldCBzdHlsZUhlYWRlckhlaWdodCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5oZWFkZXJIZWlnaHQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLXRhYi1ncm91cC1jb250ZW50LXBhZGRpbmctdG9wJyApXG5cdGdldCBzdHlsZUNvbnRlbnRQYWRkaW5nVG9wKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nVG9wIHx8IHRoaXMuY29udGVudFBhZGRpbmdWZXJ0aWNhbDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tdGFiLWdyb3VwLWNvbnRlbnQtcGFkZGluZy1ib3R0b20nIClcblx0Z2V0IHN0eWxlQ29udGVudFBhZGRpbmdCb3R0b20oKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29udGVudFBhZGRpbmdCb3R0b20gfHwgdGhpcy5jb250ZW50UGFkZGluZ1ZlcnRpY2FsOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS10YWItZ3JvdXAtY29udGVudC1wYWRkaW5nLWxlZnQnIClcblx0Z2V0IHN0eWxlQ29udGVudFBhZGRpbmdMZWZ0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nTGVmdCB8fCB0aGlzLmNvbnRlbnRQYWRkaW5nSG9yaXpvbnRhbDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tdGFiLWdyb3VwLWNvbnRlbnQtcGFkZGluZy1yaWdodCcgKVxuXHRnZXQgc3R5bGVDb250ZW50UGFkZGluZ1JpZ2h0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nUmlnaHQgfHwgdGhpcy5jb250ZW50UGFkZGluZ0hvcml6b250YWw7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtdGFiLWdyb3VwLS1zdHJldGNoJyApXG5cdGdldCBjbGFzc1N0cmV0Y2goKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnN0cmV0Y2g7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtdGFiLWdyb3VwLS1sZWZ0JyApXG5cdGdldCBjbGFzc0xlZnQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmFsaWdubWVudCA9PT0gJ2xlZnQnOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLXRhYi1ncm91cC0tcmlnaHQnIClcblx0Z2V0IGNsYXNzUmlnaHQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmFsaWdubWVudCA9PT0gJ3JpZ2h0JzsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy10YWItZ3JvdXAtLWNlbnRlcicgKVxuXHRnZXQgY2xhc3NDZW50ZXIoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmFsaWdubWVudCA9PT0gJ2NlbnRlcic7IH1cblxuXHRAVmlld0NoaWxkKCBEZXRlY3RTY3JvbGxEaXJlY3RpdmUgKSBwdWJsaWMgc2Nyb2xsZXI6IERldGVjdFNjcm9sbERpcmVjdGl2ZTtcblx0QFZpZXdDaGlsZCggTmdjU2Nyb2xsQmFyRGlyZWN0aXZlICkgcHVibGljIHNjcm9sbEJhcjogTmdjU2Nyb2xsQmFyRGlyZWN0aXZlO1xuXHRAVmlld0NoaWxkKCAndGFiR3JvdXBIZWFkZXInICkgcHVibGljIHRhYkdyb3VwSGVhZGVyOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKCAndGFiSW5rQmFyJyApIHB1YmxpYyB0YWJJbmtCYXI6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGRyZW4oICd0YWJIZWFkZXInICkgcHVibGljIHRhYkhlYWRlckxpc3Q6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuXHRAQ29udGVudENoaWxkcmVuKCBOZ2NUYWJDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSApIHB1YmxpYyB0YWJJdGVtczogUXVlcnlMaXN0PE5nY1RhYkNvbXBvbmVudD47XG5cblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGhlYWRlckhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdWZXJ0aWNhbDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdIb3Jpem9udGFsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBjb250ZW50UGFkZGluZ1RvcDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdCb3R0b206IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGNvbnRlbnRQYWRkaW5nTGVmdDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdSaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGFzU2Nyb2xsQmFyOiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgc3RyZXRjaDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgc3RyZXRjaFRhYjogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGVhZGVyVmVydGljYWxEaXZpZGVyOiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGVhZGVySG9yaXpvbnRhbERpdmlkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhbHdheXNPbkRpc3BsYXk6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIG5vVGFiQ29udGVudDogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBhbGlnbm1lbnQ6IE5nY0lUYWJBbGlnbm1lbnQgPSAnbGVmdCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBzY3JvbGxCYXJNb2RlOiBJTmdjU2Nyb2xsQmFyTW9kZTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgdGFiQ2hhbmdlZDogRXZlbnRFbWl0dGVyPE5nY1RhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY1RhYkNvbXBvbmVudD4oKTtcblxuXHRwdWJsaWMgaXRlbXM6IE5nY1RhYkNvbXBvbmVudFtdO1xuXG5cdHByaXZhdGUgX3RhYkhlYWRlckl0ZW1zOiBFbGVtZW50UmVmPGFueT5bXTtcblx0cHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCAoKSA9PiB0aGlzLl9pbml0SW5rQmFyVGhyb3R0bGUoIHRoaXMuc2VsZWN0ZWRJbmRleCApICk7XG5cdHByaXZhdGUgX2luaXRJbmtCYXJUaHJvdHRsZTogUmV0dXJuVHlwZTx0eXBlb2YgXy50aHJvdHRsZT5cblx0XHQ9IF8udGhyb3R0bGUoIHRoaXMuX2luaXRJbmtCYXIuYmluZCggdGhpcyApLCAyMDAsIHsgbGVhZGluZzogZmFsc2UgfSApO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKiBAcGFyYW0ge0NoYW5nZURldGVjdG9yUmVmfSBfY2RSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoICFjaGFuZ2VzLnNlbGVjdGVkSW5kZXggKSByZXR1cm47XG5cblx0XHR0aGlzLnNlbGVjdCggdGhpcy5zZWxlY3RlZEluZGV4ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLl9yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy50YWJIZWFkZXJMaXN0LmNoYW5nZXNcblx0XHQucGlwZShcblx0XHRcdHN0YXJ0V2l0aCggdGhpcy50YWJIZWFkZXJMaXN0ICksXG5cdFx0XHR1bnRpbENtcERlc3Ryb3llZCggdGhpcyApXG5cdFx0KVxuXHRcdC5zdWJzY3JpYmUoICggaXRlbXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPGFueT5bXT4gKSA9PiB7XG5cdFx0XHR0aGlzLl90YWJIZWFkZXJJdGVtcyA9ICggaXRlbXMgYXMgSU9iamVjdCApPy5fcmVzdWx0cztcblxuXHRcdFx0dGhpcy5faW5pdElua0JhclRocm90dGxlKCB0aGlzLnNlbGVjdGVkSW5kZXggKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLnNlbGVjdCggdGhpcy5zZWxlY3RlZEluZGV4ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0dGhpcy50YWJJdGVtcy5jaGFuZ2VzXG5cdFx0LnBpcGUoXG5cdFx0XHRzdGFydFdpdGgoIHRoaXMudGFiSXRlbXMgKSxcblx0XHRcdHN3aXRjaE1hcCggKCBpdGVtczogUXVlcnlMaXN0PE5nY1RhYkNvbXBvbmVudD4gKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9iczogT2JzZXJ2YWJsZTxhbnk+W10gPSBbXTtcblxuXHRcdFx0XHR0aGlzLml0ZW1zID0gXy5tYXAoICggaXRlbXMgYXMgSU9iamVjdCApPy5fcmVzdWx0cywgKCBpdGVtOiBOZ2NUYWJDb21wb25lbnQgKSA9PiB7XG5cdFx0XHRcdFx0b2JzLnB1c2goXG5cdFx0XHRcdFx0XHRpdGVtLmNoYW5nZXMkXG5cdFx0XHRcdFx0XHQucGlwZSggdGFrZVVudGlsKCB0aGlzLnRhYkl0ZW1zLmNoYW5nZXMgKSApXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cblx0XHRcdFx0cmV0dXJuIG1lcmdlKCAuLi5vYnMgKTtcblx0XHRcdH0gKSxcblx0XHRcdHVudGlsQ21wRGVzdHJveWVkKCB0aGlzIClcblx0XHQpXG5cdFx0LnN1YnNjcmliZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5faW5pdElua0JhclRocm90dGxlKCB0aGlzLnNlbGVjdGVkSW5kZXggKTtcblx0XHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0gKTtcblxuXHRcdC8vIEVsZW1lbnQgZm9yIHdoaWNoIHRvIG9ic2VydmUgaGVpZ2h0IGFuZCB3aWR0aFxuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUoIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNlbGVjdCggaW5kZXg6IG51bWJlciApIHtcblx0XHRpZiAoICFfLmlzRmluaXRlKCBpbmRleCApIHx8ICF0aGlzLml0ZW1zPy5sZW5ndGggKSByZXR1cm47XG5cblx0XHRpZiAoIHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXggKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcblxuXHRcdFx0dGhpcy50YWJDaGFuZ2VkLmVtaXQoIHRoaXMuaXRlbXNbIHRoaXMuc2VsZWN0ZWRJbmRleCBdICk7XG5cdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCggdGhpcy5zZWxlY3RlZEluZGV4ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxCYXI/LnJlc2V0KCk7XG5cdFx0dGhpcy5faW5pdElua0JhclRocm90dGxlKCBpbmRleCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfaW5pdElua0JhciggaW5kZXg6IG51bWJlciApIHtcblx0XHRpZiAoICF0aGlzLnRhYklua0JhciApIHJldHVybjtcblxuXHRcdGNvbnN0IHRhYkhlYWRlckl0ZW1zOiBFbGVtZW50UmVmW10gPSB0aGlzLl90YWJIZWFkZXJJdGVtcztcblx0XHRsZXQgd2lkdGg6IG51bWJlciA9IDA7XG5cdFx0bGV0IGxlZnQ6IG51bWJlciA9IDA7XG5cblx0XHRpZiAoIHRhYkhlYWRlckl0ZW1zPy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoIGluZGV4IDwgMCApIGluZGV4ID0gMDtcblx0XHRcdGVsc2UgaWYgKCBpbmRleCA+IHRhYkhlYWRlckl0ZW1zLmxlbmd0aCAtIDEgKSBpbmRleCA9IHRhYkhlYWRlckl0ZW1zLmxlbmd0aCAtIDE7XG5cblx0XHRcdGNvbnN0IHNlbGVjdGVkVGFiOiBFbGVtZW50UmVmPGFueT4gPSB0YWJIZWFkZXJJdGVtc1sgaW5kZXggXTtcblxuXHRcdFx0d2lkdGggPSBzZWxlY3RlZFRhYj8ubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCB8fCAwO1xuXG5cdFx0XHRpZiAoIHdpZHRoICkge1xuXHRcdFx0XHRsZWZ0ID0gdGFiSGVhZGVySXRlbXNbIDAgXS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgfHwgMDtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IGluZGV4OyBpKysgKSB7XG5cdFx0XHRcdFx0bGVmdCArPSB0YWJIZWFkZXJJdGVtc1sgaSBdLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggfHwgMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlbGVjdGVkVGFiPy5uYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdjZW50ZXInLCBpbmxpbmU6ICduZWFyZXN0JyB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRhYklua0Jhci5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuXHRcdHRoaXMudGFiSW5rQmFyLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuXHR9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ2MtdGFiLWdyb3VwX19oZWFkZXJcIiAjdGFiR3JvdXBIZWFkZXIgKm5nSWY9XCJhbHdheXNPbkRpc3BsYXkgfHwgaXRlbXM/Lmxlbmd0aCA+IDFcIlxuXHRbY2xhc3MubmdjLXRhYi1ncm91cF9faGVhZGVyLS1zdHJldGNoXT1cInN0cmV0Y2hUYWJcIj5cblx0PGRpdiBjbGFzcz1cIm5nYy10YWItZ3JvdXBfX2hlYWRlci1saXN0XCI+XG5cdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4ID0gaW5kZXg7IGxldCBsYXN0ID0gbGFzdFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm5nYy10YWItZ3JvdXBfX2hlYWRlci1pdGVtXCIgI3RhYkhlYWRlciBbbmdDbGFzc109XCJpdGVtPy5jbGFzc2VzXCJcblx0XHRcdFx0W2NsYXNzLm5nYy10YWItZ3JvdXBfX2hlYWRlci1pdGVtLS1hY3RpdmVdPVwic2VsZWN0ZWRJbmRleCA9PT0gaW5kZXhcIlxuXHRcdFx0XHRbY2xhc3MubmdjLXRhYi1ncm91cF9faGVhZGVyLWl0ZW0tLWRpc2FibGVkXT1cIml0ZW0/LmRpc2FibGVkXCJcblx0XHRcdFx0KGNsaWNrKT1cIiFpdGVtPy5kaXNhYmxlZCAmJiBzZWxlY3QoaW5kZXgpXCI+XG5cdFx0XHRcdDxuZ2MtaWNvbiBjbGFzcz1cIm5nYy10YWItZ3JvdXBfX2hlYWRlci1pdGVtLWljb25cIiBzaXplPVwiMjBweFwiICpuZ0lmPVwiaXRlbT8uaWNvblwiXG5cdFx0XHRcdFx0W25hbWVdPVwiaXRlbT8uaWNvblwiPjwvbmdjLWljb24+XG5cblx0XHRcdFx0e3sgaXRlbT8ubGFiZWwgfX1cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbT8uaGVhZGVyXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PG5nYy1kaXZpZGVyIGNsYXNzPVwibmdjLXRhYi1ncm91cF9faGVhZGVyLXZlcnRpY2FsLWRpdmlkZXJcIiB2ZXJ0aWNhbFxuXHRcdFx0XHQqbmdJZj1cImhlYWRlclZlcnRpY2FsRGl2aWRlciAmJiAhbGFzdFwiPjwvbmdjLWRpdmlkZXI+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdDwvZGl2PlxuXG5cdDxuZ2MtZGl2aWRlciBjbGFzcz1cIm5nYy10YWItZ3JvdXBfX2hlYWRlci1ob3Jpem9udGFsLWRpdmlkZXJcIiAqbmdJZj1cImhlYWRlckhvcml6b250YWxEaXZpZGVyXCI+PC9uZ2MtZGl2aWRlcj5cblxuXHQ8ZGl2IGNsYXNzPVwibmdjLXRhYi1ncm91cF9faGVhZGVyLWluay1iYXJcIiAjdGFiSW5rQmFyPjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJuZ2MtdGFiLWdyb3VwX19jb250ZW50XCIgbmdjU2Nyb2xsQmFyIGRldGVjdFNjcm9sbCBzdXBwcmVzc1Njcm9sbFggKm5nSWY9XCIhbm9UYWJDb250ZW50XCJcblx0W3N1cHByZXNzXT1cIiFoYXNTY3JvbGxCYXJcIiBbbW9kZV09XCJzY3JvbGxCYXJNb2RlXCI+XG5cdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpbmRleCA9IGluZGV4XCI+XG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkSW5kZXggPT09IGluZGV4XCI+XG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbT8uY29udGVudFwiPjwvbmctY29udGFpbmVyPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PiJdfQ==