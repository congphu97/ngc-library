import { __decorate, __metadata } from "tslib";
import { Component, TemplateRef, ElementRef, ViewChild, Input, ContentChildren, QueryList, ViewEncapsulation, ChangeDetectorRef, ContentChild, ChangeDetectionStrategy, Output, EventEmitter, NgZone } from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import _ from 'lodash';
import { DetectScrollDirective, Unsubscriber, DefaultValue, CoerceBoolean, CoerceCssPixel, Debounce, untilCmpDestroyed } from '@core';
import { NgcScrollBarDirective } from '../../ngc-scroll-bar';
import { NgcMenuButtonCloseDirective } from '../menu-button-close/ngc-menu-button-close.directive';
import { NgcMenuItemComponent } from '../menu-item/ngc-menu-item.component';
import { NgcMenuHeaderComponent } from '../menu-header/ngc-menu-header.component';
import { NgcMenuContentComponent } from '../menu-content/ngc-menu-content.component';
import { NgcMenuFooterComponent } from '../menu-footer/ngc-menu-footer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "angular-core";
import * as i3 from "../../ngc-scroll-bar/ngc-scroll-bar/ngc-scroll-bar.directive";
import * as i4 from "../../ngc-truncate/ngc-truncate.component";
import * as i5 from "../../ngc-button/basic-button/ngc-basic-button.component";
import * as i6 from "../../ngc-tooltip.directive";
import * as i7 from "@ngx-translate/core";
let NgcMenuComponent = class NgcMenuComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {NgZone} _ngZone
     */
    constructor(elementRef, _cdRef, _ngZone) {
        this.elementRef = elementRef;
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        this.hasScrollBar = true;
        this.hasBackdrop = true;
        this.hasArrow = true;
        this.hasButtonClose = true;
        this.closeOnClickOutside = true;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.backdropPress = new EventEmitter();
        this.loadMore = new EventEmitter();
        this.classList = {};
    }
    set _scroller(scroller) { this.scroller = scroller; }
    set _scrollBar(scrollBar) { this.scrollBar = scrollBar; }
    set panelClass(classes) {
        const previousPanelClass = this._previousPanelClass;
        previousPanelClass?.split(' ').forEach((className) => {
            this.classList[className] = false;
        });
        this._previousPanelClass = classes;
        classes?.split(' ').forEach((className) => {
            this.classList[className] = true;
        });
        this.elementRef.nativeElement.className = '';
    }
    /**
     * @param {IObject} data
     * @return {void}
     */
    onOpened(data) {
        this.menuButtonCloseList
            .changes
            .pipe(startWith(this.menuButtonCloseList), untilCmpDestroyed(this))
            .subscribe((items) => {
            this.scrollBar?.reset();
            _.forEach(items.toArray(), (item) => {
                item.clicked$
                    .pipe(takeUntil(this.menuButtonCloseList.changes), untilCmpDestroyed(this))
                    .subscribe((ev) => ev.detail && this.close(ev));
            });
        });
        this.menuItems
            .changes
            .pipe(startWith(this.menuItems), untilCmpDestroyed(this))
            .subscribe((items) => {
            this.scrollBar?.reset();
            let isScrolled;
            _.forEach(items.toArray(), (item) => {
                item
                    .clicked$
                    .pipe(takeUntil(this.menuItems.changes), untilCmpDestroyed(this))
                    .subscribe((ev) => ev.detail && this.close(ev));
                item
                    .activeChange
                    .pipe(takeUntil(this.menuItems.changes), untilCmpDestroyed(this))
                    .subscribe(this._checkAllItemsSelected.bind(this));
                if (isScrolled)
                    return;
                isScrolled = item.active;
                isScrolled && setTimeout(() => this.scrollToElement(item));
            });
            this._checkAllItemsSelected();
        });
        this.isOpened = true;
        this.data = data;
        this.opened.emit();
        this.markForCheck();
        // this.detach();
        setTimeout(() => {
            this.detectChanges();
        });
    }
    /**
     * @return {void}
     */
    onClosed() {
        this.isOpened = false;
        this.closed.emit();
        this.markForCheck();
    }
    /**
     * @param {NgcIMenuPosition} position
     * @param {NgcIMenuDirection} direction
     * @return {void}
     */
    setPositionClasses(position, direction) {
        this._ngZone.runGuarded(() => {
            this.classList['ngc-menu--above'] = position === 'above';
            this.classList['ngc-menu--below'] = position === 'below';
            this.classList['ngc-menu--before'] = position === 'before';
            this.classList['ngc-menu--after'] = position === 'after';
            this.classList['ngc-menu--dir-start'] = direction === 'start';
            this.classList['ngc-menu--dir-end'] = direction === 'end';
            this.classList['ngc-menu--no-arrow'] = !this.hasArrow;
        });
    }
    /**
     * @return {void}
     */
    reattach() {
        this._cdRef.reattach();
    }
    /**
     * @return {void}
     */
    detach() {
        this._cdRef.detach();
    }
    /**
     * @return {void}
     */
    markForCheck() {
        this._cdRef.markForCheck();
    }
    /**
     * @return {void}
     */
    detectChanges() {
        this._cdRef.detectChanges();
    }
    /**
     * @param {NgcMenuItemComponent} item
     * @return {void}
     */
    scrollToElement(item) {
        this.hasScrollBar
            && !this.scrollBar?.scrollTop
            && item.elementRef.nativeElement.scrollIntoView({ block: 'center', inline: 'nearest' });
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    chooseItem(event) {
        const focusingItem = _.find(this.menuItems?.toArray(), { focusing: true });
        if (!focusingItem)
            return;
        focusingItem.click(event);
        focusingItem.autoClose && !focusingItem.disabled && this.close();
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    focusNextItem(event) {
        const list = this.menuItems?.toArray();
        const focusingIndex = _.findLastIndex(list, (item) => item.focusing);
        const focusIndex = focusingIndex + 1;
        focusIndex < list.length && this._focusItem(focusingIndex, focusingIndex + 1, event);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    focusPreviousItem(event) {
        const list = this.menuItems?.toArray();
        const focusingIndex = _.findLastIndex(list, (item) => item.focusing);
        const focusIndex = focusingIndex - 1;
        focusIndex >= 0 && this._focusItem(focusingIndex, focusIndex, event);
    }
    /**
     * @param {number} focusingIndex
     * @param {number} focusIndex
     * @param {Event=} event
     * @return {void}
     */
    _focusItem(focusingIndex, focusIndex, event) {
        const items = this.menuItems?._results;
        const currentFocusedItem = items[focusingIndex];
        const focusItem = items[focusIndex];
        if (currentFocusedItem)
            currentFocusedItem.focusing = false;
        focusItem.focusing = true;
        focusItem.elementRef.nativeElement.scrollIntoView(false);
        focusItem.focus(event);
        this.markForCheck();
    }
    /**
     * @return {void}
     */
    _checkAllItemsSelected() {
        const menuItems = this.menuItems?.toArray();
        let i = 0;
        let isAllItemsActivated = true;
        while (i < menuItems?.length) {
            isAllItemsActivated = menuItems[i++].active;
            if (!isAllItemsActivated)
                break;
        }
        this.isAllItemsActivated = isAllItemsActivated;
        this.markForCheck();
    }
};
NgcMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
NgcMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcMenuComponent, selector: "ngc-menu", inputs: { title: "title", backdropClass: "backdropClass", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", height: "height", minHeight: "minHeight", maxHeight: "maxHeight", hasScrollBar: "hasScrollBar", hasBackdrop: "hasBackdrop", hasArrow: "hasArrow", hasButtonClose: "hasButtonClose", closeOnClickOutside: "closeOnClickOutside", scrollBarMode: "scrollBarMode", panelClass: ["class", "panelClass"] }, outputs: { opened: "opened", closed: "closed", backdropPress: "backdropPress", loadMore: "loadMore" }, queries: [{ propertyName: "menuHeader", first: true, predicate: NgcMenuHeaderComponent, descendants: true }, { propertyName: "menuContent", first: true, predicate: NgcMenuContentComponent, descendants: true }, { propertyName: "menuFooter", first: true, predicate: NgcMenuFooterComponent, descendants: true }, { propertyName: "menuButtonCloseList", predicate: NgcMenuButtonCloseDirective, descendants: true }, { propertyName: "menuItems", predicate: NgcMenuItemComponent, descendants: true }], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }, { propertyName: "_scroller", first: true, predicate: DetectScrollDirective, descendants: true }, { propertyName: "_scrollBar", first: true, predicate: NgcScrollBarDirective, descendants: true }], ngImport: i0, template: "<ng-template>\n\t<div class=\"ngc-menu\" [ngClass]=\"classList\" [style.width]=\"width\" [style.minWidth]=\"minWidth\"\n\t\t[style.maxWidth]=\"maxWidth\" [style.height]=\"height\" [style.minHeight]=\"minHeight\" [style.maxHeight]=\"maxHeight\">\n\t\t<div *ngIf=\"title || !!menuHeader?.templateRef\" class=\"ngc-menu__header\" [ngClass]=\"menuHeader?.classList\">\n\t\t\t<div *ngIf=\"title || !!menuHeader?.menuHeaderTitle?.templateRef\" class=\"ngc-menu__header__title\">\n\t\t\t\t<div class=\"ngc-menu__header__title-wrapper\" [ngClass]=\"menuHeader?.menuHeaderTitle?.classList\">\n\t\t\t\t\t<ngc-truncate limitLine=\"1\" *ngIf=\"title\">\n\t\t\t\t\t\t{{ title }}\n\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t<ng-container *ngIf=\"!!menuHeader?.menuHeaderTitle?.templateRef\">\n\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t*ngTemplateOutlet=\"menuHeader?.menuHeaderTitle?.templateRef; context: data;\"></ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t\t<button ngcBasicButton icon=\"close\" *ngIf=\"hasButtonClose\" [ngcTooltip]=\"'NGC.LABEL.CLOSE' | translate\"\n\t\t\t\t\t(click)=\"close()\">\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"ngc-menu__header__content\" *ngIf=\"!!menuHeader?.templateRef\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"menuHeader?.templateRef; context: data;\"></ng-container>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"ngc-menu__content\" ngcScrollBar detectScroll suppressScrollX *ngIf=\"!!menuContent?.templateRef\"\n\t\t\t[ngClass]=\"menuContent?.classList\" [suppress]=\"!hasScrollBar\" [mode]=\"scrollBarMode\"\n\t\t\t(scrollReachBottom)=\"loadMore?.emit(!!$event)\">\n\t\t\t<ng-container *ngTemplateOutlet=\"menuContent?.templateRef; context: data;\"></ng-container>\n\t\t</div>\n\t\t<div class=\"ngc-menu__footer\" *ngIf=\"!!menuFooter?.templateRef\" [ngClass]=\"menuFooter?.classList\">\n\t\t\t<ng-container *ngTemplateOutlet=\"menuFooter?.templateRef; context: data;\"></ng-container>\n\t\t</div>\n\t</div>\n</ng-template>", styles: ["ngc-menu{display:none}.ngc-menu{display:flex;flex-direction:column;position:relative;width:100%;padding:15px;border-radius:8px;border:solid 1px var(--ngc-color-neutral-border-default, #e4e4e6);box-shadow:var(--ngc-box-shadow, 0 8px 10px -2px rgba(0, 0, 0, .15));animation:30ms ease-in forwards popupAnimation;background-color:var(--ngc-color-neutral-white, #fff)}.ngc-menu:after{content:\"\";position:absolute;background-image:url(/assets/images/arrow.png);background-repeat:no-repeat}.ngc-menu.ngc-menu--above:after,.ngc-menu.ngc-menu--below:after{height:8px;width:10px}.ngc-menu.ngc-menu--above:not(.ngc-menu--dir-start):after,.ngc-menu.ngc-menu--above:not(.ngc-menu--dir-end):after,.ngc-menu.ngc-menu--below:not(.ngc-menu--dir-start):after,.ngc-menu.ngc-menu--below:not(.ngc-menu--dir-end):after{left:50%;transform:translate(-50%)}.ngc-menu.ngc-menu--above.ngc-menu--dir-start,.ngc-menu.ngc-menu--below.ngc-menu--dir-start{right:30px}.ngc-menu.ngc-menu--above.ngc-menu--dir-start:after,.ngc-menu.ngc-menu--below.ngc-menu--dir-start:after{left:30px;right:unset;transform:translate(-50%)}.ngc-menu.ngc-menu--above.ngc-menu--dir-end,.ngc-menu.ngc-menu--below.ngc-menu--dir-end{left:30px}.ngc-menu.ngc-menu--above.ngc-menu--dir-end:after,.ngc-menu.ngc-menu--below.ngc-menu--dir-end:after{left:unset;right:30px;transform:translate(50%)}.ngc-menu.ngc-menu--before:after,.ngc-menu.ngc-menu--after:after{height:10px;width:8px}.ngc-menu.ngc-menu--before:not(.ngc-menu--dir-start):after,.ngc-menu.ngc-menu--before:not(.ngc-menu--dir-end):after,.ngc-menu.ngc-menu--after:not(.ngc-menu--dir-start):after,.ngc-menu.ngc-menu--after:not(.ngc-menu--dir-end):after{top:50%;transform:translateY(-50%)}.ngc-menu.ngc-menu--before.ngc-menu--dir-start,.ngc-menu.ngc-menu--after.ngc-menu--dir-start{bottom:30px}.ngc-menu.ngc-menu--before.ngc-menu--dir-start:after,.ngc-menu.ngc-menu--after.ngc-menu--dir-start:after{top:30px;bottom:unset;transform:translateY(-50%)}.ngc-menu.ngc-menu--before.ngc-menu--dir-end,.ngc-menu.ngc-menu--after.ngc-menu--dir-end{top:30px}.ngc-menu.ngc-menu--before.ngc-menu--dir-end:after,.ngc-menu.ngc-menu--after.ngc-menu--dir-end:after{top:unset;bottom:30px;transform:translateY(50%)}.ngc-menu.ngc-menu--above:after{background-position:-11px 0;bottom:-6px}.ngc-menu.ngc-menu--below:after{background-position:0 0;top:-8px}.ngc-menu.ngc-menu--before:after{background-position:-22px 0;right:-6px}.ngc-menu.ngc-menu--after:after{background-position:-33px 0;left:-7px}.ngc-menu.ngc-menu--no-arrow:after{display:none}.ngc-menu .ngc-menu__header,.ngc-menu .ngc-menu__content,.ngc-menu .ngc-menu__footer{display:flex;flex-direction:column}.ngc-menu .ngc-menu__header:empty,.ngc-menu .ngc-menu__content:empty,.ngc-menu .ngc-menu__footer:empty{display:none}.ngc-menu .ngc-menu__header{min-height:min-content}.ngc-menu .ngc-menu__header .ngc-menu__header__title{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}.ngc-menu .ngc-menu__header .ngc-menu__header__title .ngc-menu__header__title-wrapper{display:flex;align-items:center;font-size:16px;font-weight:var(--ngc-font-weight-semibold, 600);min-width:0;width:100%;margin-right:10px}.ngc-menu .ngc-menu__header .ngc-menu__header__content{margin-top:5px;margin-bottom:5px}.ngc-menu .ngc-menu__content{position:relative;overflow:hidden;min-height:0;height:100%}.ngc-menu .ngc-menu__footer{margin-top:15px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DetectScrollDirective, selector: "[detectScroll]", inputs: ["delay", "offset"], outputs: ["scrolling", "scrollingX", "scrollingY", "scrollingUp", "scrollingDown", "scrollingLeft", "scrollingRight", "scrollReachTop", "scrollReachBottom", "scrollReachLeft", "scrollReachRight"], exportAs: ["detectScroll"] }, { kind: "directive", type: i3.NgcScrollBarDirective, selector: "[ngcScrollBar]", exportAs: ["ngcScrollBar"] }, { kind: "component", type: i4.NgcTruncateComponent, selector: "ngc-truncate", inputs: ["limitLine", "disabled", "tooltip", "ngcTooltip"] }, { kind: "component", type: i5.NgcBasicButtonComponent, selector: "button[ngcBasicButton]", inputs: ["type", "color", "icon", "iconSize", "disabled", "alignment"] }, { kind: "directive", type: i6.NgcTooltipDirective, selector: "[ngcTooltip]", inputs: ["panelClass", "backdropClass", "tooltipColor", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "once", "programmatically", "autoClose", "hasBackdrop", "closeOnClickOutside", "openDelay", "closeDelay", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "triggerType", "ngcTooltip"], outputs: ["opened", "closed"], exportAs: ["ngcTooltip"] }, { kind: "pipe", type: i7.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuComponent.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuComponent.prototype, "minWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuComponent.prototype, "maxWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuComponent.prototype, "height", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuComponent.prototype, "minHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcMenuComponent.prototype, "maxHeight", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuComponent.prototype, "hasScrollBar", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuComponent.prototype, "hasBackdrop", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuComponent.prototype, "hasArrow", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuComponent.prototype, "hasButtonClose", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuComponent.prototype, "closeOnClickOutside", void 0);
__decorate([
    Debounce(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NgcMenuComponent.prototype, "_checkAllItemsSelected", null);
NgcMenuComponent = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef, NgZone])
], NgcMenuComponent);
export { NgcMenuComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-menu', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<div class=\"ngc-menu\" [ngClass]=\"classList\" [style.width]=\"width\" [style.minWidth]=\"minWidth\"\n\t\t[style.maxWidth]=\"maxWidth\" [style.height]=\"height\" [style.minHeight]=\"minHeight\" [style.maxHeight]=\"maxHeight\">\n\t\t<div *ngIf=\"title || !!menuHeader?.templateRef\" class=\"ngc-menu__header\" [ngClass]=\"menuHeader?.classList\">\n\t\t\t<div *ngIf=\"title || !!menuHeader?.menuHeaderTitle?.templateRef\" class=\"ngc-menu__header__title\">\n\t\t\t\t<div class=\"ngc-menu__header__title-wrapper\" [ngClass]=\"menuHeader?.menuHeaderTitle?.classList\">\n\t\t\t\t\t<ngc-truncate limitLine=\"1\" *ngIf=\"title\">\n\t\t\t\t\t\t{{ title }}\n\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t<ng-container *ngIf=\"!!menuHeader?.menuHeaderTitle?.templateRef\">\n\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t*ngTemplateOutlet=\"menuHeader?.menuHeaderTitle?.templateRef; context: data;\"></ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t\t<button ngcBasicButton icon=\"close\" *ngIf=\"hasButtonClose\" [ngcTooltip]=\"'NGC.LABEL.CLOSE' | translate\"\n\t\t\t\t\t(click)=\"close()\">\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"ngc-menu__header__content\" *ngIf=\"!!menuHeader?.templateRef\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"menuHeader?.templateRef; context: data;\"></ng-container>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"ngc-menu__content\" ngcScrollBar detectScroll suppressScrollX *ngIf=\"!!menuContent?.templateRef\"\n\t\t\t[ngClass]=\"menuContent?.classList\" [suppress]=\"!hasScrollBar\" [mode]=\"scrollBarMode\"\n\t\t\t(scrollReachBottom)=\"loadMore?.emit(!!$event)\">\n\t\t\t<ng-container *ngTemplateOutlet=\"menuContent?.templateRef; context: data;\"></ng-container>\n\t\t</div>\n\t\t<div class=\"ngc-menu__footer\" *ngIf=\"!!menuFooter?.templateRef\" [ngClass]=\"menuFooter?.classList\">\n\t\t\t<ng-container *ngTemplateOutlet=\"menuFooter?.templateRef; context: data;\"></ng-container>\n\t\t</div>\n\t</div>\n</ng-template>", styles: ["ngc-menu{display:none}.ngc-menu{display:flex;flex-direction:column;position:relative;width:100%;padding:15px;border-radius:8px;border:solid 1px var(--ngc-color-neutral-border-default, #e4e4e6);box-shadow:var(--ngc-box-shadow, 0 8px 10px -2px rgba(0, 0, 0, .15));animation:30ms ease-in forwards popupAnimation;background-color:var(--ngc-color-neutral-white, #fff)}.ngc-menu:after{content:\"\";position:absolute;background-image:url(/assets/images/arrow.png);background-repeat:no-repeat}.ngc-menu.ngc-menu--above:after,.ngc-menu.ngc-menu--below:after{height:8px;width:10px}.ngc-menu.ngc-menu--above:not(.ngc-menu--dir-start):after,.ngc-menu.ngc-menu--above:not(.ngc-menu--dir-end):after,.ngc-menu.ngc-menu--below:not(.ngc-menu--dir-start):after,.ngc-menu.ngc-menu--below:not(.ngc-menu--dir-end):after{left:50%;transform:translate(-50%)}.ngc-menu.ngc-menu--above.ngc-menu--dir-start,.ngc-menu.ngc-menu--below.ngc-menu--dir-start{right:30px}.ngc-menu.ngc-menu--above.ngc-menu--dir-start:after,.ngc-menu.ngc-menu--below.ngc-menu--dir-start:after{left:30px;right:unset;transform:translate(-50%)}.ngc-menu.ngc-menu--above.ngc-menu--dir-end,.ngc-menu.ngc-menu--below.ngc-menu--dir-end{left:30px}.ngc-menu.ngc-menu--above.ngc-menu--dir-end:after,.ngc-menu.ngc-menu--below.ngc-menu--dir-end:after{left:unset;right:30px;transform:translate(50%)}.ngc-menu.ngc-menu--before:after,.ngc-menu.ngc-menu--after:after{height:10px;width:8px}.ngc-menu.ngc-menu--before:not(.ngc-menu--dir-start):after,.ngc-menu.ngc-menu--before:not(.ngc-menu--dir-end):after,.ngc-menu.ngc-menu--after:not(.ngc-menu--dir-start):after,.ngc-menu.ngc-menu--after:not(.ngc-menu--dir-end):after{top:50%;transform:translateY(-50%)}.ngc-menu.ngc-menu--before.ngc-menu--dir-start,.ngc-menu.ngc-menu--after.ngc-menu--dir-start{bottom:30px}.ngc-menu.ngc-menu--before.ngc-menu--dir-start:after,.ngc-menu.ngc-menu--after.ngc-menu--dir-start:after{top:30px;bottom:unset;transform:translateY(-50%)}.ngc-menu.ngc-menu--before.ngc-menu--dir-end,.ngc-menu.ngc-menu--after.ngc-menu--dir-end{top:30px}.ngc-menu.ngc-menu--before.ngc-menu--dir-end:after,.ngc-menu.ngc-menu--after.ngc-menu--dir-end:after{top:unset;bottom:30px;transform:translateY(50%)}.ngc-menu.ngc-menu--above:after{background-position:-11px 0;bottom:-6px}.ngc-menu.ngc-menu--below:after{background-position:0 0;top:-8px}.ngc-menu.ngc-menu--before:after{background-position:-22px 0;right:-6px}.ngc-menu.ngc-menu--after:after{background-position:-33px 0;left:-7px}.ngc-menu.ngc-menu--no-arrow:after{display:none}.ngc-menu .ngc-menu__header,.ngc-menu .ngc-menu__content,.ngc-menu .ngc-menu__footer{display:flex;flex-direction:column}.ngc-menu .ngc-menu__header:empty,.ngc-menu .ngc-menu__content:empty,.ngc-menu .ngc-menu__footer:empty{display:none}.ngc-menu .ngc-menu__header{min-height:min-content}.ngc-menu .ngc-menu__header .ngc-menu__header__title{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}.ngc-menu .ngc-menu__header .ngc-menu__header__title .ngc-menu__header__title-wrapper{display:flex;align-items:center;font-size:16px;font-weight:var(--ngc-font-weight-semibold, 600);min-width:0;width:100%;margin-right:10px}.ngc-menu .ngc-menu__header .ngc-menu__header__content{margin-top:5px;margin-bottom:5px}.ngc-menu .ngc-menu__content{position:relative;overflow:hidden;min-height:0;height:100%}.ngc-menu .ngc-menu__footer{margin-top:15px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], _scroller: [{
                type: ViewChild,
                args: [DetectScrollDirective]
            }], _scrollBar: [{
                type: ViewChild,
                args: [NgcScrollBarDirective]
            }], menuButtonCloseList: [{
                type: ContentChildren,
                args: [NgcMenuButtonCloseDirective, { descendants: true }]
            }], menuItems: [{
                type: ContentChildren,
                args: [NgcMenuItemComponent, { descendants: true }]
            }], menuHeader: [{
                type: ContentChild,
                args: [NgcMenuHeaderComponent]
            }], menuContent: [{
                type: ContentChild,
                args: [NgcMenuContentComponent]
            }], menuFooter: [{
                type: ContentChild,
                args: [NgcMenuFooterComponent]
            }], title: [{
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
            }], hasScrollBar: [{
                type: Input
            }], hasBackdrop: [{
                type: Input
            }], hasArrow: [{
                type: Input
            }], hasButtonClose: [{
                type: Input
            }], closeOnClickOutside: [{
                type: Input
            }], scrollBarMode: [{
                type: Input
            }], opened: [{
                type: Output
            }], closed: [{
                type: Output
            }], backdropPress: [{
                type: Output
            }], loadMore: [{
                type: Output
            }], panelClass: [{
                type: Input,
                args: ['class']
            }], _checkAllItemsSelected: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtbWVudS9tZW51L25nYy1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS9uZ2MtbWVudS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQ2xDLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUNqQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQy9DLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQzdDLFlBQVksRUFBRSxNQUFNLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFDTixxQkFBcUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUNqRCxhQUFhLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFDdkMsaUJBQWlCLEVBQ1AsTUFBTSxPQUFPLENBQUM7QUFDekIsT0FBTyxFQUFFLHFCQUFxQixFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFD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OUQsS0FBSztnQkFDMkMsbUJBQW1CO3NCQUFuRSxLQUFLO2dCQUNVLGFBQWE7c0JBQTVCLEtBQUs7Z0JBRVcsTUFBTTtzQkFBdEIsTUFBTTtnQkFDVSxNQUFNO3NCQUF0QixNQUFNO2dCQUNVLGFBQWE7c0JBQTdCLE1BQU07Z0JBQ1UsUUFBUTtzQkFBeEIsTUFBTTtnQkFlSCxVQUFVO3NCQURiLEtBQUs7dUJBQUUsT0FBTztnQkFpT1Asc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZixcblx0Vmlld0NoaWxkLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLFxuXHRRdWVyeUxpc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcblx0RGV0ZWN0U2Nyb2xsRGlyZWN0aXZlLCBVbnN1YnNjcmliZXIsIERlZmF1bHRWYWx1ZSxcblx0Q29lcmNlQm9vbGVhbiwgQ29lcmNlQ3NzUGl4ZWwsIERlYm91bmNlLFxuXHR1bnRpbENtcERlc3Ryb3llZFxuLCBJT2JqZWN0IH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgTmdjU2Nyb2xsQmFyRGlyZWN0aXZlLCBJTmdjU2Nyb2xsQmFyTW9kZSB9IGZyb20gJy4uLy4uL25nYy1zY3JvbGwtYmFyJztcbmltcG9ydCB7IE5nY01lbnVCdXR0b25DbG9zZURpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUtYnV0dG9uLWNsb3NlL25nYy1tZW51LWJ1dHRvbi1jbG9zZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9tZW51LWl0ZW0vbmdjLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjTWVudUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL21lbnUtaGVhZGVyL25nYy1tZW51LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjTWVudUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9tZW51LWNvbnRlbnQvbmdjLW1lbnUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjTWVudUZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4uL21lbnUtZm9vdGVyL25nYy1tZW51LWZvb3Rlci5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOZ2NJTWVudVBvc2l0aW9uID0gJ2Fib3ZlJyB8ICdiZWxvdycgfCAnYmVmb3JlJyB8ICdhZnRlcic7XG5leHBvcnQgdHlwZSBOZ2NJTWVudURpcmVjdGlvbiA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInO1xuXG5AVW5zdWJzY3JpYmVyKClcbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtbWVudScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLW1lbnUuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLW1lbnUuc2NzcycgXSwgXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjTWVudUNvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCggVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0gKSBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QFZpZXdDaGlsZCggRGV0ZWN0U2Nyb2xsRGlyZWN0aXZlIClcblx0c2V0IF9zY3JvbGxlciggc2Nyb2xsZXI6IERldGVjdFNjcm9sbERpcmVjdGl2ZSApIHsgdGhpcy5zY3JvbGxlciA9IHNjcm9sbGVyOyB9XG5cdEBWaWV3Q2hpbGQoIE5nY1Njcm9sbEJhckRpcmVjdGl2ZSApXG5cdHNldCBfc2Nyb2xsQmFyKCBzY3JvbGxCYXI6IE5nY1Njcm9sbEJhckRpcmVjdGl2ZSApIHsgdGhpcy5zY3JvbGxCYXIgPSBzY3JvbGxCYXI7IH1cblxuXHRAQ29udGVudENoaWxkcmVuKCBOZ2NNZW51QnV0dG9uQ2xvc2VEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSApXG5cdHB1YmxpYyBtZW51QnV0dG9uQ2xvc2VMaXN0OiBRdWVyeUxpc3Q8TmdjTWVudUJ1dHRvbkNsb3NlRGlyZWN0aXZlPjtcblx0QENvbnRlbnRDaGlsZHJlbiggTmdjTWVudUl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSApIHB1YmxpYyBtZW51SXRlbXM6IFF1ZXJ5TGlzdDxOZ2NNZW51SXRlbUNvbXBvbmVudD47XG5cdEBDb250ZW50Q2hpbGQoIE5nY01lbnVIZWFkZXJDb21wb25lbnQgKSBwdWJsaWMgbWVudUhlYWRlcjogTmdjTWVudUhlYWRlckNvbXBvbmVudDtcblx0QENvbnRlbnRDaGlsZCggTmdjTWVudUNvbnRlbnRDb21wb25lbnQgKSBwdWJsaWMgbWVudUNvbnRlbnQ6IE5nY01lbnVDb250ZW50Q29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKCBOZ2NNZW51Rm9vdGVyQ29tcG9uZW50ICkgcHVibGljIG1lbnVGb290ZXI6IE5nY01lbnVGb290ZXJDb21wb25lbnQ7XG5cblx0QElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBiYWNrZHJvcENsYXNzOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWluV2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1heFdpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgbWF4SGVpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBoYXNTY3JvbGxCYXI6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGFzQmFja2Ryb3A6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGFzQXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGFzQnV0dG9uQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2xvc2VPbkNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyBzY3JvbGxCYXJNb2RlOiBJTmdjU2Nyb2xsQmFyTW9kZTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBiYWNrZHJvcFByZXNzOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgbG9hZE1vcmU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRwdWJsaWMgc2Nyb2xsZXI6IERldGVjdFNjcm9sbERpcmVjdGl2ZTtcblx0cHVibGljIHNjcm9sbEJhcjogTmdjU2Nyb2xsQmFyRGlyZWN0aXZlO1xuXHRwdWJsaWMgaXNSZWZyZXNoaW5nOiBib29sZWFuO1xuXHRwdWJsaWMgaXNPcGVuZWQ6IGJvb2xlYW47XG5cdHB1YmxpYyBpc0FsbEl0ZW1zQWN0aXZhdGVkOiBib29sZWFuO1xuXHRwdWJsaWMgZGF0YTogSU9iamVjdDtcblx0cHVibGljIGNsYXNzTGlzdDogSU9iamVjdDxib29sZWFuPiA9IHt9O1xuXHRwdWJsaWMgY2xvc2U6ICggZXZlbnQ/OiBFdmVudCApID0+IHZvaWQ7XG5cdHB1YmxpYyByZW9wZW46ICgpID0+IHZvaWQ7XG5cblx0cHJpdmF0ZSBfcHJldmlvdXNQYW5lbENsYXNzOiBzdHJpbmc7XG5cblx0QElucHV0KCAnY2xhc3MnIClcblx0c2V0IHBhbmVsQ2xhc3MoIGNsYXNzZXM6IHN0cmluZyApIHtcblx0XHRjb25zdCBwcmV2aW91c1BhbmVsQ2xhc3M6IHN0cmluZyA9IHRoaXMuX3ByZXZpb3VzUGFuZWxDbGFzcztcblxuXHRcdHByZXZpb3VzUGFuZWxDbGFzcz8uc3BsaXQoICcgJyApLmZvckVhY2goICggY2xhc3NOYW1lOiBzdHJpbmcgKSA9PiB7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdFsgY2xhc3NOYW1lIF0gPSBmYWxzZTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLl9wcmV2aW91c1BhbmVsQ2xhc3MgPSBjbGFzc2VzO1xuXG5cdFx0Y2xhc3Nlcz8uc3BsaXQoICcgJyApLmZvckVhY2goICggY2xhc3NOYW1lOiBzdHJpbmcgKSA9PiB7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdFsgY2xhc3NOYW1lIF0gPSB0cnVlO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gX2NkUmVmXG5cdCAqIEBwYXJhbSB7Tmdab25lfSBfbmdab25lXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUgKSB7fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0lPYmplY3R9IGRhdGFcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvbk9wZW5lZCggZGF0YTogYW55ICkge1xuXHRcdHRoaXMubWVudUJ1dHRvbkNsb3NlTGlzdFxuXHRcdC5jaGFuZ2VzXG5cdFx0LnBpcGUoXG5cdFx0XHRzdGFydFdpdGgoIHRoaXMubWVudUJ1dHRvbkNsb3NlTGlzdCApLFxuXHRcdFx0dW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKVxuXHRcdClcblx0XHQuc3Vic2NyaWJlKCAoIGl0ZW1zOiBRdWVyeUxpc3Q8TmdjTWVudUl0ZW1Db21wb25lbnQ+ICkgPT4ge1xuXHRcdFx0dGhpcy5zY3JvbGxCYXI/LnJlc2V0KCk7XG5cblx0XHRcdF8uZm9yRWFjaCggaXRlbXMudG9BcnJheSgpLCAoIGl0ZW06IE5nY01lbnVCdXR0b25DbG9zZURpcmVjdGl2ZSApID0+IHtcblx0XHRcdFx0aXRlbS5jbGlja2VkJFxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHR0YWtlVW50aWwoIHRoaXMubWVudUJ1dHRvbkNsb3NlTGlzdC5jaGFuZ2VzICksXG5cdFx0XHRcdFx0dW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoICggZXY6IE1vdXNlRXZlbnQgKSA9PiBldi5kZXRhaWwgJiYgdGhpcy5jbG9zZSggZXYgKSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMubWVudUl0ZW1zXG5cdFx0LmNoYW5nZXNcblx0XHQucGlwZShcblx0XHRcdHN0YXJ0V2l0aCggdGhpcy5tZW51SXRlbXMgKSxcblx0XHRcdHVudGlsQ21wRGVzdHJveWVkKCB0aGlzIClcblx0XHQpXG5cdFx0LnN1YnNjcmliZSggKCBpdGVtczogUXVlcnlMaXN0PE5nY01lbnVJdGVtQ29tcG9uZW50PiApID0+IHtcblx0XHRcdHRoaXMuc2Nyb2xsQmFyPy5yZXNldCgpO1xuXG5cdFx0XHRsZXQgaXNTY3JvbGxlZDogYm9vbGVhbjtcblxuXHRcdFx0Xy5mb3JFYWNoKCBpdGVtcy50b0FycmF5KCksICggaXRlbTogTmdjTWVudUl0ZW1Db21wb25lbnQgKSA9PiB7XG5cdFx0XHRcdGl0ZW1cblx0XHRcdFx0LmNsaWNrZWQkXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdHRha2VVbnRpbCggdGhpcy5tZW51SXRlbXMuY2hhbmdlcyApLFxuXHRcdFx0XHRcdHVudGlsQ21wRGVzdHJveWVkKCB0aGlzIClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKCAoIGV2OiBNb3VzZUV2ZW50ICkgPT4gZXYuZGV0YWlsICYmIHRoaXMuY2xvc2UoIGV2ICkgKTtcblxuXHRcdFx0XHRpdGVtXG5cdFx0XHRcdC5hY3RpdmVDaGFuZ2Vcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0dGFrZVVudGlsKCB0aGlzLm1lbnVJdGVtcy5jaGFuZ2VzICksXG5cdFx0XHRcdFx0dW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoIHRoaXMuX2NoZWNrQWxsSXRlbXNTZWxlY3RlZC5iaW5kKCB0aGlzICkgKTtcblxuXHRcdFx0XHRpZiAoIGlzU2Nyb2xsZWQgKSByZXR1cm47XG5cblx0XHRcdFx0aXNTY3JvbGxlZCA9IGl0ZW0uYWN0aXZlO1xuXG5cdFx0XHRcdGlzU2Nyb2xsZWQgJiYgc2V0VGltZW91dCggKCkgPT4gdGhpcy5zY3JvbGxUb0VsZW1lbnQoIGl0ZW0gKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHR0aGlzLl9jaGVja0FsbEl0ZW1zU2VsZWN0ZWQoKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXG5cdFx0dGhpcy5vcGVuZWQuZW1pdCgpO1xuXHRcdHRoaXMubWFya0ZvckNoZWNrKCk7XG5cdFx0Ly8gdGhpcy5kZXRhY2goKTtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uQ2xvc2VkKCkge1xuXHRcdHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuY2xvc2VkLmVtaXQoKTtcblx0XHR0aGlzLm1hcmtGb3JDaGVjaygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSU1lbnVQb3NpdGlvbn0gcG9zaXRpb25cblx0ICogQHBhcmFtIHtOZ2NJTWVudURpcmVjdGlvbn0gZGlyZWN0aW9uXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2V0UG9zaXRpb25DbGFzc2VzKCBwb3NpdGlvbjogTmdjSU1lbnVQb3NpdGlvbiwgZGlyZWN0aW9uOiBOZ2NJTWVudURpcmVjdGlvbiApIHtcblx0XHR0aGlzLl9uZ1pvbmUucnVuR3VhcmRlZCggKCkgPT4ge1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbICduZ2MtbWVudS0tYWJvdmUnIF0gPSBwb3NpdGlvbiA9PT0gJ2Fib3ZlJztcblx0XHRcdHRoaXMuY2xhc3NMaXN0WyAnbmdjLW1lbnUtLWJlbG93JyBdID0gcG9zaXRpb24gPT09ICdiZWxvdyc7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdFsgJ25nYy1tZW51LS1iZWZvcmUnIF0gPSBwb3NpdGlvbiA9PT0gJ2JlZm9yZSc7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdFsgJ25nYy1tZW51LS1hZnRlcicgXSA9IHBvc2l0aW9uID09PSAnYWZ0ZXInO1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbICduZ2MtbWVudS0tZGlyLXN0YXJ0JyBdID0gZGlyZWN0aW9uID09PSAnc3RhcnQnO1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbICduZ2MtbWVudS0tZGlyLWVuZCcgXSA9IGRpcmVjdGlvbiA9PT0gJ2VuZCc7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdFsgJ25nYy1tZW51LS1uby1hcnJvdycgXSA9ICF0aGlzLmhhc0Fycm93O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHJlYXR0YWNoKCkge1xuXHRcdHRoaXMuX2NkUmVmLnJlYXR0YWNoKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBkZXRhY2goKSB7XG5cdFx0dGhpcy5fY2RSZWYuZGV0YWNoKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBtYXJrRm9yQ2hlY2soKSB7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBkZXRlY3RDaGFuZ2VzKCkge1xuXHRcdHRoaXMuX2NkUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY01lbnVJdGVtQ29tcG9uZW50fSBpdGVtXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2Nyb2xsVG9FbGVtZW50KCBpdGVtOiBOZ2NNZW51SXRlbUNvbXBvbmVudCApIHtcblx0XHR0aGlzLmhhc1Njcm9sbEJhclxuXHRcdFx0JiYgIXRoaXMuc2Nyb2xsQmFyPy5zY3JvbGxUb3Bcblx0XHRcdCYmIGl0ZW0uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdjZW50ZXInLCBpbmxpbmU6ICduZWFyZXN0JyB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjaG9vc2VJdGVtKCBldmVudD86IEV2ZW50ICkge1xuXHRcdGNvbnN0IGZvY3VzaW5nSXRlbTogTmdjTWVudUl0ZW1Db21wb25lbnQgPSBfLmZpbmQoIHRoaXMubWVudUl0ZW1zPy50b0FycmF5KCksIHsgZm9jdXNpbmc6IHRydWUgfSApO1xuXG5cdFx0aWYgKCAhZm9jdXNpbmdJdGVtICkgcmV0dXJuO1xuXG5cdFx0Zm9jdXNpbmdJdGVtLmNsaWNrKCBldmVudCApO1xuXHRcdGZvY3VzaW5nSXRlbS5hdXRvQ2xvc2UgJiYgIWZvY3VzaW5nSXRlbS5kaXNhYmxlZCAmJiB0aGlzLmNsb3NlKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudD19IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZm9jdXNOZXh0SXRlbSggZXZlbnQ/OiBFdmVudCApIHtcblx0XHRjb25zdCBsaXN0OiBOZ2NNZW51SXRlbUNvbXBvbmVudFtdID0gdGhpcy5tZW51SXRlbXM/LnRvQXJyYXkoKTtcblx0XHRjb25zdCBmb2N1c2luZ0luZGV4OiBudW1iZXIgPSBfLmZpbmRMYXN0SW5kZXgoIGxpc3QsICggaXRlbTogTmdjTWVudUl0ZW1Db21wb25lbnQgKSA9PiBpdGVtLmZvY3VzaW5nICk7XG5cdFx0Y29uc3QgZm9jdXNJbmRleDogbnVtYmVyID0gZm9jdXNpbmdJbmRleCArIDE7XG5cblx0XHRmb2N1c0luZGV4IDwgbGlzdC5sZW5ndGggJiYgdGhpcy5fZm9jdXNJdGVtKCBmb2N1c2luZ0luZGV4LCBmb2N1c2luZ0luZGV4ICsgMSwgZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBmb2N1c1ByZXZpb3VzSXRlbSggZXZlbnQ/OiBFdmVudCApIHtcblx0XHRjb25zdCBsaXN0OiBOZ2NNZW51SXRlbUNvbXBvbmVudFtdID0gdGhpcy5tZW51SXRlbXM/LnRvQXJyYXkoKTtcblx0XHRjb25zdCBmb2N1c2luZ0luZGV4OiBudW1iZXIgPSBfLmZpbmRMYXN0SW5kZXgoIGxpc3QsICggaXRlbTogTmdjTWVudUl0ZW1Db21wb25lbnQgKSA9PiBpdGVtLmZvY3VzaW5nICk7XG5cdFx0Y29uc3QgZm9jdXNJbmRleDogbnVtYmVyID0gZm9jdXNpbmdJbmRleCAtIDE7XG5cblx0XHRmb2N1c0luZGV4ID49IDAgJiYgdGhpcy5fZm9jdXNJdGVtKCBmb2N1c2luZ0luZGV4LCBmb2N1c0luZGV4LCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmb2N1c2luZ0luZGV4XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmb2N1c0luZGV4XG5cdCAqIEBwYXJhbSB7RXZlbnQ9fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfZm9jdXNJdGVtKCBmb2N1c2luZ0luZGV4OiBudW1iZXIsIGZvY3VzSW5kZXg6IG51bWJlciwgZXZlbnQ/OiBFdmVudCApIHtcblx0XHRjb25zdCBpdGVtczogTmdjTWVudUl0ZW1Db21wb25lbnRbXSA9ICggdGhpcy5tZW51SXRlbXMgYXMgSU9iamVjdCApPy5fcmVzdWx0cztcblx0XHRjb25zdCBjdXJyZW50Rm9jdXNlZEl0ZW06IE5nY01lbnVJdGVtQ29tcG9uZW50ID0gaXRlbXNbIGZvY3VzaW5nSW5kZXggXTtcblx0XHRjb25zdCBmb2N1c0l0ZW06IE5nY01lbnVJdGVtQ29tcG9uZW50ID0gaXRlbXNbIGZvY3VzSW5kZXggXTtcblxuXHRcdGlmICggY3VycmVudEZvY3VzZWRJdGVtICkgY3VycmVudEZvY3VzZWRJdGVtLmZvY3VzaW5nID0gZmFsc2U7XG5cblx0XHRmb2N1c0l0ZW0uZm9jdXNpbmcgPSB0cnVlO1xuXG5cdFx0Zm9jdXNJdGVtLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlldyggZmFsc2UgKTtcblx0XHRmb2N1c0l0ZW0uZm9jdXMoIGV2ZW50ICk7XG5cdFx0dGhpcy5tYXJrRm9yQ2hlY2soKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0QERlYm91bmNlKClcblx0cHJpdmF0ZSBfY2hlY2tBbGxJdGVtc1NlbGVjdGVkKCkge1xuXHRcdGNvbnN0IG1lbnVJdGVtczogTmdjTWVudUl0ZW1Db21wb25lbnRbXSA9IHRoaXMubWVudUl0ZW1zPy50b0FycmF5KCk7XG5cdFx0bGV0IGk6IG51bWJlciA9IDA7XG5cdFx0bGV0IGlzQWxsSXRlbXNBY3RpdmF0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdFx0d2hpbGUgKCBpIDwgbWVudUl0ZW1zPy5sZW5ndGggKSB7XG5cdFx0XHRpc0FsbEl0ZW1zQWN0aXZhdGVkID0gbWVudUl0ZW1zWyBpKysgXS5hY3RpdmU7XG5cblx0XHRcdGlmICggIWlzQWxsSXRlbXNBY3RpdmF0ZWQgKSBicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmlzQWxsSXRlbXNBY3RpdmF0ZWQgPSBpc0FsbEl0ZW1zQWN0aXZhdGVkO1xuXG5cdFx0dGhpcy5tYXJrRm9yQ2hlY2soKTtcblx0fVxuXG59XG4iLCI8bmctdGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJuZ2MtbWVudVwiIFtuZ0NsYXNzXT1cImNsYXNzTGlzdFwiIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5taW5XaWR0aF09XCJtaW5XaWR0aFwiXG5cdFx0W3N0eWxlLm1heFdpZHRoXT1cIm1heFdpZHRoXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIiBbc3R5bGUubWluSGVpZ2h0XT1cIm1pbkhlaWdodFwiIFtzdHlsZS5tYXhIZWlnaHRdPVwibWF4SGVpZ2h0XCI+XG5cdFx0PGRpdiAqbmdJZj1cInRpdGxlIHx8ICEhbWVudUhlYWRlcj8udGVtcGxhdGVSZWZcIiBjbGFzcz1cIm5nYy1tZW51X19oZWFkZXJcIiBbbmdDbGFzc109XCJtZW51SGVhZGVyPy5jbGFzc0xpc3RcIj5cblx0XHRcdDxkaXYgKm5nSWY9XCJ0aXRsZSB8fCAhIW1lbnVIZWFkZXI/Lm1lbnVIZWFkZXJUaXRsZT8udGVtcGxhdGVSZWZcIiBjbGFzcz1cIm5nYy1tZW51X19oZWFkZXJfX3RpdGxlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuZ2MtbWVudV9faGVhZGVyX190aXRsZS13cmFwcGVyXCIgW25nQ2xhc3NdPVwibWVudUhlYWRlcj8ubWVudUhlYWRlclRpdGxlPy5jbGFzc0xpc3RcIj5cblx0XHRcdFx0XHQ8bmdjLXRydW5jYXRlIGxpbWl0TGluZT1cIjFcIiAqbmdJZj1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7eyB0aXRsZSB9fVxuXHRcdFx0XHRcdDwvbmdjLXRydW5jYXRlPlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhIW1lbnVIZWFkZXI/Lm1lbnVIZWFkZXJUaXRsZT8udGVtcGxhdGVSZWZcIj5cblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SGVhZGVyPy5tZW51SGVhZGVyVGl0bGU/LnRlbXBsYXRlUmVmOyBjb250ZXh0OiBkYXRhO1wiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBuZ2NCYXNpY0J1dHRvbiBpY29uPVwiY2xvc2VcIiAqbmdJZj1cImhhc0J1dHRvbkNsb3NlXCIgW25nY1Rvb2x0aXBdPVwiJ05HQy5MQUJFTC5DTE9TRScgfCB0cmFuc2xhdGVcIlxuXHRcdFx0XHRcdChjbGljayk9XCJjbG9zZSgpXCI+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibmdjLW1lbnVfX2hlYWRlcl9fY29udGVudFwiICpuZ0lmPVwiISFtZW51SGVhZGVyPy50ZW1wbGF0ZVJlZlwiPlxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUhlYWRlcj8udGVtcGxhdGVSZWY7IGNvbnRleHQ6IGRhdGE7XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibmdjLW1lbnVfX2NvbnRlbnRcIiBuZ2NTY3JvbGxCYXIgZGV0ZWN0U2Nyb2xsIHN1cHByZXNzU2Nyb2xsWCAqbmdJZj1cIiEhbWVudUNvbnRlbnQ/LnRlbXBsYXRlUmVmXCJcblx0XHRcdFtuZ0NsYXNzXT1cIm1lbnVDb250ZW50Py5jbGFzc0xpc3RcIiBbc3VwcHJlc3NdPVwiIWhhc1Njcm9sbEJhclwiIFttb2RlXT1cInNjcm9sbEJhck1vZGVcIlxuXHRcdFx0KHNjcm9sbFJlYWNoQm90dG9tKT1cImxvYWRNb3JlPy5lbWl0KCEhJGV2ZW50KVwiPlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1lbnVDb250ZW50Py50ZW1wbGF0ZVJlZjsgY29udGV4dDogZGF0YTtcIj48L25nLWNvbnRhaW5lcj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibmdjLW1lbnVfX2Zvb3RlclwiICpuZ0lmPVwiISFtZW51Rm9vdGVyPy50ZW1wbGF0ZVJlZlwiIFtuZ0NsYXNzXT1cIm1lbnVGb290ZXI/LmNsYXNzTGlzdFwiPlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1lbnVGb290ZXI/LnRlbXBsYXRlUmVmOyBjb250ZXh0OiBkYXRhO1wiPjwvbmctY29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvbmctdGVtcGxhdGU+Il19