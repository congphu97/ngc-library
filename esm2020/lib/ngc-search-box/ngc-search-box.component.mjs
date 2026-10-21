import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { Subject, isObservable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import _ from 'lodash';
import { Unsubscriber, DefaultValue, CoerceBoolean, CoerceNumber, untilCmpDestroyed } from '@core';
import { CONSTANT as APP_CONSTANT } from '@resources';
import { NgcMenuTriggerForDirective } from '../ngc-menu';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
import * as i2 from "@angular/common";
import * as i3 from "angular-core";
import * as i4 from "ng-lazyload-image";
import * as i5 from "../core/components/not-found/not-found.component";
import * as i6 from "@angular/forms";
import * as i7 from "../ngc-form-field/form-field/ngc-form-field.component";
import * as i8 from "../ngc-form-field/form-field-input/ngc-form-field-input.directive";
import * as i9 from "../ngc-menu/menu/ngc-menu.component";
import * as i10 from "../ngc-menu/menu-item/ngc-menu-item.component";
import * as i11 from "../ngc-menu/menu-content/ngc-menu-content.component";
import * as i12 from "../ngc-menu/menu-content/ngc-menu-content.directive";
import * as i13 from "../ngc-menu/menu-trigger-for/ngc-menu-trigger-for.directive";
import * as i14 from "../ngc-avatar/ngc-avatar.component";
import * as i15 from "../ngc-truncate/ngc-truncate.component";
import * as i16 from "../ngc-button/basic-button/ngc-basic-button.component";
import * as i17 from "@ngx-translate/core";
let NgcSearchBoxComponent = class NgcSearchBoxComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(elementRef, _cdRef) {
        this.elementRef = elementRef;
        this._cdRef = _cdRef;
        this.prefixIcon = 'search';
        this.searchKey = 'name';
        this.fieldName = 'name';
        this.fieldDescription = 'description';
        this.fieldImage = 'image';
        this.fieldAvatar = 'avatar';
        this.itemSize = 54;
        this.debounceTime = 400;
        this.trim = true;
        this.appearance = 'default';
        this.errorDisplayMode = 'default';
        this.ngModelChange = new EventEmitter();
        this.searching = new EventEmitter();
        this.cleared = new EventEmitter();
        this.filtered = new EventEmitter();
        this.suggested = new EventEmitter();
        this.prefixIconClicked = new EventEmitter();
        this.suffixIconClicked = new EventEmitter();
        this.input = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.focusIndex = 0;
        this._searchUpdated$ = new Subject();
        this._searchUpdated$
            .pipe(debounceTime(this.debounceTime), distinctUntilChanged(), untilCmpDestroyed(this))
            .subscribe((value) => {
            this.searching.emit(value);
            // Start filter
            this._filter();
            // Start suggest
            this.focusing && this._suggest();
        });
    }
    get useVirtualScroll() {
        return this.suggestionData?.length >= APP_CONSTANT.USE_VIRTUAL_SCROLL_WITH;
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        this._searchUpdated$.complete();
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        changes.data && this._filter();
        changes.ngModel && this.ngModel !== undefined && this.onSearch(this.ngModel);
    }
    /**
     * @param {string} searchQuery
     * @return {void}
     */
    onSearch(searchQuery) {
        this.searchQuery = searchQuery || '';
        this._searchUpdated$.next(this.searchQuery);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    onClear(event) {
        this.clear(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    onInput(event) {
        this.input.emit(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    onFocus(event) {
        this.focusing = true;
        this.focus.emit(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    onBlur(event) {
        this.focusing = false;
        this.blur.emit(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    clear(event) {
        this.ngModel = this.searchQuery = '';
        this._searchUpdated$.next(this.searchQuery);
        this.ngModelChange.emit(this.ngModel);
        this.filtered.emit(this.data);
        this.cleared.emit(event);
        this._cdRef.markForCheck();
    }
    /**
     * @param {Event} event
     * @param {number} index
     * @return {void}
     */
    chooseSuggestItem(event, index) {
        if (!this.suggestionData)
            return;
        const item = this.suggestionData[index];
        if (!item)
            return;
        event.stopPropagation();
        event.preventDefault();
        this.ngModel = _.get(item, this.searchKey || this.fieldName);
        this._searchUpdated$.next(this.searchQuery);
        this.ngModelChange.emit(this.ngModel);
        this.suggested.emit(item);
        this.menuTrigger.close();
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    focusPreviousSuggestItem(event) {
        if (!this.suggestionData)
            return;
        event.stopPropagation();
        event.preventDefault();
        this.focusIndex = this.focusIndex > 0 ? this.focusIndex - 1 : 0;
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    focusNextSuggestItem(event) {
        if (!this.suggestionData)
            return;
        event.stopPropagation();
        event.preventDefault();
        const length = this.suggestionData?.length - 1;
        this.focusIndex = this.focusIndex < length ? this.focusIndex + 1 : length;
    }
    /**
     * @return {void}
     */
    _toggleMenu() {
        this.searchQuery && this.suggestionData?.length
            ? this.menuTrigger.open()
            : this.menuTrigger.close();
    }
    /**
     * @return {void}
     */
    _filter() {
        if (this.searchQuery) {
            this.filteredData = _.filter(this.data, this._filterPredicate.bind(this));
        }
        else {
            this.filteredData = _.clone(this.data);
        }
        this.filtered.emit(this.filteredData);
        this._cdRef.markForCheck();
    }
    /**
     * @return {void}
     */
    _suggest() {
        if (!this.suggestion)
            return;
        const suggestion = this.suggestion(this.searchQuery);
        console.log({ suggestion }, 'searchQuery:', this.searchQuery, 'menuTrigger:', this.menuTrigger);
        if (isObservable(suggestion)) {
            suggestion
                .pipe(untilCmpDestroyed(this))
                .subscribe((data) => {
                this.suggestionData = data;
                console.log('async suggestionData updated:', this.suggestionData);
                this._toggleMenu();
                this._cdRef.markForCheck();
            });
            return;
        }
        this.suggestionData = suggestion;
        console.log('sync suggestionData updated:', this.suggestionData);
        this._toggleMenu();
        this._cdRef.markForCheck();
    }
    /**
     * @param {any} item
     * @return {boolean}
     */
    _filterPredicate(item) {
        return _.isFunction(this.filterPredicate)
            ? this.filterPredicate(item, this.searchQuery, this.searchKey)
            : _.search(this.searchKey ? _.get(item, this.searchKey) : item, this.searchQuery);
    }
    ;
};
NgcSearchBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcSearchBoxComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcSearchBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcSearchBoxComponent, selector: "ngc-search-box", inputs: { data: "data", suggestion: "suggestion", ngModel: "ngModel", name: "name", label: "label", placeholder: "placeholder", prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", searchKey: "searchKey", fieldName: "fieldName", fieldDescription: "fieldDescription", fieldImage: "fieldImage", fieldAvatar: "fieldAvatar", itemSize: "itemSize", debounceTime: "debounceTime", trim: "trim", displayNotFound: "displayNotFound", disableControl: "disableControl", disabled: "disabled", readonly: "readonly", required: "required", autoFocusOn: "autoFocusOn", autoReset: "autoReset", notFoundData: "notFoundData", formControl: "formControl", appearance: "appearance", errorDisplayMode: "errorDisplayMode", filterPredicate: "filterPredicate" }, outputs: { ngModelChange: "ngModelChange", searching: "searching", cleared: "cleared", filtered: "filtered", suggested: "suggested", prefixIconClicked: "prefixIconClicked", suffixIconClicked: "suffixIconClicked", input: "input", focus: "focus", blur: "blur" }, host: { classAttribute: "ngc-search-box" }, viewQueries: [{ propertyName: "menuTrigger", first: true, predicate: NgcMenuTriggerForDirective, descendants: true, static: true }, { propertyName: "notFoundTemplate", first: true, predicate: ["notFoundTemplate"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<!-- Search Box Menu -->\n<ngc-menu #searchBoxMenu class=\"ngc-search-box\" maxHeight=\"400px\" [hasScrollBar]=\"!useVirtualScroll\"\n\t[width]=\"elementRef?.nativeElement?.offsetWidth | unit\">\n\t1\n\t<ngc-menu-content>\n\t\t<ng-template ngcMenuContent>\n\t\t\t<ng-container *ngIf=\"suggestionData?.length; else noSuggestionBlock\">\n\t\t\t\t<ng-container *ngIf=\"useVirtualScroll; else normalSuggestionBlock\">\n\t\t\t\t\t<cdk-virtual-scroll-viewport [itemSize]=\"itemSize\" [minBufferPx]=\"itemSize * 5\"\n\t\t\t\t\t\t[maxBufferPx]=\"itemSize * 10\" [style.height.px]=\"400\">\n\t\t\t\t\t\n\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t*cdkVirtualFor=\"let item of suggestionData; let index = index; trackBy: searchKey | trackByFn\">\n\t\t\t\t\t\t\t<button class=\"ngc-search-box-item\" ngcMenuItem [focusing]=\"focusIndex === index\"\n\t\t\t\t\t\t\t\t(click)=\"chooseSuggestItem($event, index)\">\n\n\t\t\t\t\t\t\t\t<img *ngIf=\"item[fieldImage]\" class=\"ngc-search-box__avatar\"\n\t\t\t\t\t\t\t\t\t[lazyLoad]=\"item[fieldImage]\" />\n\n\t\t\t\t\t\t\t\t<ngc-avatar *ngIf=\"item[fieldAvatar]\" class=\"ngc-search-box__avatar\" size=\"medium\"\n\t\t\t\t\t\t\t\t\tcolor=\"auto\" [label]=\"item[fieldName]\" [avatar]=\"item[fieldAvatar]\">\n\t\t\t\t\t\t\t\t</ngc-avatar>\n\n\t\t\t\t\t\t\t\t<div class=\"ngc-search-box__content\">\n\t\t\t\t\t\t\t\t\t<ngc-truncate class=\"ngc-search-box__title\">\n\t\t\t\t\t\t\t\t\t\t{{ item[fieldName] | empty }}\n\t\t\t\t\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t\t\t\t\t<ngc-truncate class=\"ngc-search-box__description\">\n\t\t\t\t\t\t\t\t\t\t{{ item[fieldDescription] | empty }}\n\t\t\t\t\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</cdk-virtual-scroll-viewport>\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\n\t\t\t<ng-template #normalSuggestionBlock>\n\t\t\t\t<ng-container *ngFor=\"let item of suggestionData; let index = index; trackBy: searchKey | trackByFn\">\n\t\t\t\t\t<button class=\"ngc-search-box-item\" ngcMenuItem [focusing]=\"focusIndex === index\"\n\t\t\t\t\t\t(click)=\"chooseSuggestItem($event, index)\">\n\t\t\t\t\t\t<img *ngIf=\"item[fieldImage]\" class=\"ngc-search-box__avatar\" [lazyLoad]=\"item[fieldImage]\" />\n\n\t\t\t\t\t\t<ngc-avatar *ngIf=\"item[fieldAvatar]\" class=\"ngc-search-box__avatar\" size=\"medium\" color=\"auto\"\n\t\t\t\t\t\t\t[label]=\"item[fieldName]\" [avatar]=\"item[fieldAvatar]\">\n\t\t\t\t\t\t</ngc-avatar>\n\n\t\t\t\t\t\t<div class=\"ngc-search-box__content\">\n\t\t\t\t\t\t\t<ngc-truncate class=\"ngc-search-box__title\">\n\t\t\t\t\t\t\t\t{{ item[fieldName] | empty }}\n\t\t\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t\t\t<ngc-truncate class=\"ngc-search-box__description\">\n\t\t\t\t\t\t\t\t{{ item[fieldDescription] | empty }}\n\t\t\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t</ng-template>\n\n\t\t\t<ng-template #noSuggestionBlock>\n\t\t\t\t<not-found [mode]=\"searchQuery ? 'search' : 'empty'\"></not-found>\n\t\t\t</ng-template>\n\t\t</ng-template>\n\t</ngc-menu-content>\n</ngc-menu>\n\n<!-- Search Box Input Field -->\n<ngc-form-field class=\"ngc-search-box__form-field\" programmatically originX=\"start\" originY=\"bottom\" overlayX=\"start\"\n\toverlayY=\"top\" position=\"undefined\" [offsetY]=\"formControl ? -20 : 0\" [label]=\"label\" [appearance]=\"appearance\"\n\t[errorDisplayMode]=\"errorDisplayMode\" [ngcMenuTriggerFor]=\"searchBoxMenu\">\n\n\t<ng-container *ngIf=\"formControl; else elseBlock\">\n\t\t<input ngcFormFieldInput clearable [name]=\"name\" [autoFocusOn]=\"autoFocusOn\" [autoReset]=\"autoReset\"\n\t\t\t[trim]=\"trim\" [placeholder]=\"placeholder || ('NGC.PLACEHOLDER.SEARCH' | translate)\"\n\t\t\t[formControl]=\"formControl\" [disableControl]=\"disableControl\" [readonly]=\"readonly\" [required]=\"required\"\n\t\t\t[(ngModel)]=\"ngModel\" (ngModelChange)=\"ngModelChange?.emit($event)\"\n\t\t\t(keydown.arrowup)=\"focusPreviousSuggestItem($event)\" (keydown.arrowdown)=\"focusNextSuggestItem($event)\"\n\t\t\t(keydown.enter)=\"chooseSuggestItem($event, focusIndex)\"\n\t\t\t(input)=\"onInput($event); onSearch($any($event?.target)?.value)\" (focus)=\"onFocus($event)\"\n\t\t\t(blur)=\"onBlur($event)\" (cleared)=\"onClear($event)\" />\n\t</ng-container>\n\n\t<ng-template #elseBlock>\n\t\t<input ngcFormFieldInput clearable [name]=\"name\" [autoFocusOn]=\"autoFocusOn\" [autoReset]=\"autoReset\"\n\t\t\t[trim]=\"trim\" [placeholder]=\"placeholder || ('NGC.PLACEHOLDER.SEARCH' | translate)\" [disabled]=\"disabled\"\n\t\t\t[readonly]=\"readonly\" [required]=\"required\" [(ngModel)]=\"ngModel\"\n\t\t\t(ngModelChange)=\"ngModelChange?.emit($event)\" (keydown.arrowup)=\"focusPreviousSuggestItem($event)\"\n\t\t\t(keydown.arrowdown)=\"focusNextSuggestItem($event)\" (keydown.enter)=\"chooseSuggestItem($event, focusIndex)\"\n\t\t\t(input)=\"onInput($event); onSearch($any($event?.target)?.value)\" (focus)=\"onFocus($event)\"\n\t\t\t(blur)=\"onBlur($event)\" (cleared)=\"onClear($event)\" />\n\t</ng-template>\n\n\t<div *ngIf=\"prefixIcon\" ngcFormFieldPrefix>\n\t\t<button ngcBasicButton tabindex=\"-1\" [icon]=\"prefixIcon\" (click)=\"prefixIconClicked?.emit()\">\n\t\t</button>\n\t</div>\n\n\t<div *ngIf=\"suffixIcon\" ngcFormFieldSuffix>\n\t\t<button ngcBasicButton tabindex=\"-1\" [icon]=\"suffixIcon\" (click)=\"suffixIconClicked?.emit()\">\n\t\t</button>\n\t</div>\n</ngc-form-field>\n\n<!-- Not Found Template -->\n<ng-template #notFoundTemplate let-name=\"name\" let-size=\"size\" let-debounceTime=\"debounceTime\"\n\tlet-emptyImage=\"emptyImage\" let-emptyImageSize=\"emptyImageSize\" let-emptyTitle=\"emptyTitle\"\n\tlet-emptyDescription=\"emptyDescription\">\n\n\t<not-found *ngIf=\"displayNotFound && !filteredData?.length\" [mode]=\"searchQuery?.length ? 'search' : 'empty'\"\n\t\t[name]=\"name || notFoundData?.name\" [size]=\"size || notFoundData?.size\"\n\t\t[debounceTime]=\"debounceTime || notFoundData?.debounceTime || undefined\"\n\t\t[emptyImage]=\"emptyImage || notFoundData?.emptyImage\"\n\t\t[emptyImageSize]=\"emptyImageSize || notFoundData?.emptyImageSize\"\n\t\t[emptyTitle]=\"emptyTitle || notFoundData?.emptyTitle\"\n\t\t[emptyDescription]=\"emptyDescription || notFoundData?.emptyDescription\">\n\t</not-found>\n</ng-template>", styles: [".ngc-search-box{display:flex;flex-direction:column}.ngc-search-box .ngc-search-box__form-field{width:100%}.ngc-search-box .ngc-search-box__form-field.ngc-form-field--legacy:not(.ngc-form-field--disabled).ngc-form-field--focusing .ngc-form-field__input-container .ngc-form-field__prefix,.ngc-search-box .ngc-search-box__form-field.ngc-form-field--legacy:not(.ngc-form-field--disabled):not(.ngc-form-field--empty) .ngc-form-field__input-container .ngc-form-field__prefix{margin-left:10px}.ngc-search-box .ngc-search-box__form-field.ngc-form-field--legacy:not(.ngc-form-field--disabled) .ngc-form-field__input-container .ngc-form-field__prefix{transition:margin-left .1s ease-in-out;padding-left:0}.ngc-search-box .ngc-search-box__avatar{margin-right:10px;width:45px;min-width:45px;max-width:45px}.ngc-search-box .ngc-search-box__content{display:flex;flex-direction:column;text-align:left;width:100%;min-width:0}.ngc-search-box .ngc-search-box__title{font-size:16px}.ngc-search-box .ngc-search-box__description{color:var(--ngc-color-neutral-text-tertiary, #8e8e93);font-weight:400}.ngc-search-box .ngc-search-box-item{display:flex;align-items:center}\n"], dependencies: [{ kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.AutoFocusDirective, selector: "[autoFocusOn]", inputs: ["delay", "disableControl", "disabled", "autoFocusOn"], exportAs: ["autoFocusOn"] }, { kind: "directive", type: i3.AutoResetDirective, selector: "[autoReset]", inputs: ["formControl", "delay", "autoReset"], exportAs: ["autoReset"] }, { kind: "directive", type: i3.DisableControlDirective, selector: "[disableControl]", inputs: ["disableControl"], exportAs: ["disableControl"] }, { kind: "directive", type: i4.LazyLoadImageDirective, selector: "[lazyLoad]", inputs: ["lazyLoad", "defaultImage", "errorImage", "scrollTarget", "customObservable", "offset", "useSrcset", "decode", "debug"], outputs: ["onStateChange"] }, { kind: "component", type: i5.NotFoundComponent, selector: "not-found", inputs: ["name", "size", "mode", "debounceTime", "emptyImage", "emptyImageSize", "emptyTitle", "emptyDescription", "errorImage", "errorImageSize", "errorTitle", "errorDescription", "customImage", "customImageSize", "customTitle", "customDescription"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i7.NgcFormFieldComponent, selector: "ngc-form-field", inputs: ["label", "dotColor", "required", "disabled", "readonly", "focusing", "fakeInput", "multiErrors", "displayColorDot", "togglePasswordVisibility", "checkWeekPassword", "appearance", "errorDisplayMode"], outputs: ["dotColorChange"] }, { kind: "directive", type: i8.NgcFormFieldInputDirective, selector: "[ngcFormFieldInput]", inputs: ["ngModel", "name", "type", "textSize", "min", "max", "trim", "disableControl", "disabled", "required", "focusing", "readonly", "clearable", "saveable", "cancelable", "formControl", "alignment", "convertType", "timeFormat"], outputs: ["ngModelChange", "changed", "saved", "cancelled", "cleared", "pasted", "converted"], exportAs: ["ngcFormFieldInput"] }, { kind: "component", type: i9.NgcMenuComponent, selector: "ngc-menu", inputs: ["title", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "hasScrollBar", "hasBackdrop", "hasArrow", "hasButtonClose", "closeOnClickOutside", "scrollBarMode", "class"], outputs: ["opened", "closed", "backdropPress", "loadMore"] }, { kind: "component", type: i10.NgcMenuItemComponent, selector: "button[ngcMenuItem]", inputs: ["icon", "color", "iconColor", "dotColor", "autoClose", "active", "disabled", "focusing"], outputs: ["activeChange", "click", "focus", "blur"] }, { kind: "component", type: i11.NgcMenuContentComponent, selector: "ngc-menu-content", inputs: ["class"] }, { kind: "directive", type: i12.NgcMenuContentDirective, selector: "[ngcMenuContent]", exportAs: ["ngcMenuContent"] }, { kind: "directive", type: i13.NgcMenuTriggerForDirective, selector: "[ngcMenuTriggerFor]", inputs: ["panelClass", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "programmatically", "autoFit", "disabled", "hasBackdrop", "closeOnClickOutside", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "menuData", "ngcMenuTriggerFor"], outputs: ["menuInit", "menuOpened", "menuClosed", "menuBackdropPress"], exportAs: ["ngcMenuTriggerFor"] }, { kind: "component", type: i14.NgcAvatarComponent, selector: "ngc-avatar", inputs: ["label", "labelColor", "size", "defaultPhoto", "errorPhoto", "characters", "lazy", "avatar", "scrolling$"] }, { kind: "component", type: i15.NgcTruncateComponent, selector: "ngc-truncate", inputs: ["limitLine", "disabled", "tooltip", "ngcTooltip"] }, { kind: "component", type: i16.NgcBasicButtonComponent, selector: "button[ngcBasicButton]", inputs: ["type", "color", "icon", "iconSize", "disabled", "alignment"] }, { kind: "pipe", type: i17.TranslatePipe, name: "translate" }, { kind: "pipe", type: i3.EmptyPipe, name: "empty" }, { kind: "pipe", type: i3.TrackByFnPipe, name: "trackByFn" }, { kind: "pipe", type: i3.UnitPipe, name: "unit" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcSearchBoxComponent.prototype, "prefixIcon", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcSearchBoxComponent.prototype, "searchKey", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcSearchBoxComponent.prototype, "fieldName", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcSearchBoxComponent.prototype, "fieldDescription", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcSearchBoxComponent.prototype, "fieldImage", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcSearchBoxComponent.prototype, "fieldAvatar", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcSearchBoxComponent.prototype, "itemSize", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcSearchBoxComponent.prototype, "debounceTime", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcSearchBoxComponent.prototype, "trim", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcSearchBoxComponent.prototype, "displayNotFound", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcSearchBoxComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcSearchBoxComponent.prototype, "readonly", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcSearchBoxComponent.prototype, "required", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcSearchBoxComponent.prototype, "autoFocusOn", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcSearchBoxComponent.prototype, "autoReset", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcSearchBoxComponent.prototype, "appearance", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcSearchBoxComponent.prototype, "errorDisplayMode", void 0);
NgcSearchBoxComponent = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], NgcSearchBoxComponent);
export { NgcSearchBoxComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcSearchBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-search-box', host: { class: 'ngc-search-box' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Search Box Menu -->\n<ngc-menu #searchBoxMenu class=\"ngc-search-box\" maxHeight=\"400px\" [hasScrollBar]=\"!useVirtualScroll\"\n\t[width]=\"elementRef?.nativeElement?.offsetWidth | unit\">\n\t1\n\t<ngc-menu-content>\n\t\t<ng-template ngcMenuContent>\n\t\t\t<ng-container *ngIf=\"suggestionData?.length; else noSuggestionBlock\">\n\t\t\t\t<ng-container *ngIf=\"useVirtualScroll; else normalSuggestionBlock\">\n\t\t\t\t\t<cdk-virtual-scroll-viewport [itemSize]=\"itemSize\" [minBufferPx]=\"itemSize * 5\"\n\t\t\t\t\t\t[maxBufferPx]=\"itemSize * 10\" [style.height.px]=\"400\">\n\t\t\t\t\t\n\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t*cdkVirtualFor=\"let item of suggestionData; let index = index; trackBy: searchKey | trackByFn\">\n\t\t\t\t\t\t\t<button class=\"ngc-search-box-item\" ngcMenuItem [focusing]=\"focusIndex === index\"\n\t\t\t\t\t\t\t\t(click)=\"chooseSuggestItem($event, index)\">\n\n\t\t\t\t\t\t\t\t<img *ngIf=\"item[fieldImage]\" class=\"ngc-search-box__avatar\"\n\t\t\t\t\t\t\t\t\t[lazyLoad]=\"item[fieldImage]\" />\n\n\t\t\t\t\t\t\t\t<ngc-avatar *ngIf=\"item[fieldAvatar]\" class=\"ngc-search-box__avatar\" size=\"medium\"\n\t\t\t\t\t\t\t\t\tcolor=\"auto\" [label]=\"item[fieldName]\" [avatar]=\"item[fieldAvatar]\">\n\t\t\t\t\t\t\t\t</ngc-avatar>\n\n\t\t\t\t\t\t\t\t<div class=\"ngc-search-box__content\">\n\t\t\t\t\t\t\t\t\t<ngc-truncate class=\"ngc-search-box__title\">\n\t\t\t\t\t\t\t\t\t\t{{ item[fieldName] | empty }}\n\t\t\t\t\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t\t\t\t\t<ngc-truncate class=\"ngc-search-box__description\">\n\t\t\t\t\t\t\t\t\t\t{{ item[fieldDescription] | empty }}\n\t\t\t\t\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</cdk-virtual-scroll-viewport>\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\n\t\t\t<ng-template #normalSuggestionBlock>\n\t\t\t\t<ng-container *ngFor=\"let item of suggestionData; let index = index; trackBy: searchKey | trackByFn\">\n\t\t\t\t\t<button class=\"ngc-search-box-item\" ngcMenuItem [focusing]=\"focusIndex === index\"\n\t\t\t\t\t\t(click)=\"chooseSuggestItem($event, index)\">\n\t\t\t\t\t\t<img *ngIf=\"item[fieldImage]\" class=\"ngc-search-box__avatar\" [lazyLoad]=\"item[fieldImage]\" />\n\n\t\t\t\t\t\t<ngc-avatar *ngIf=\"item[fieldAvatar]\" class=\"ngc-search-box__avatar\" size=\"medium\" color=\"auto\"\n\t\t\t\t\t\t\t[label]=\"item[fieldName]\" [avatar]=\"item[fieldAvatar]\">\n\t\t\t\t\t\t</ngc-avatar>\n\n\t\t\t\t\t\t<div class=\"ngc-search-box__content\">\n\t\t\t\t\t\t\t<ngc-truncate class=\"ngc-search-box__title\">\n\t\t\t\t\t\t\t\t{{ item[fieldName] | empty }}\n\t\t\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t\t\t<ngc-truncate class=\"ngc-search-box__description\">\n\t\t\t\t\t\t\t\t{{ item[fieldDescription] | empty }}\n\t\t\t\t\t\t\t</ngc-truncate>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t</ng-template>\n\n\t\t\t<ng-template #noSuggestionBlock>\n\t\t\t\t<not-found [mode]=\"searchQuery ? 'search' : 'empty'\"></not-found>\n\t\t\t</ng-template>\n\t\t</ng-template>\n\t</ngc-menu-content>\n</ngc-menu>\n\n<!-- Search Box Input Field -->\n<ngc-form-field class=\"ngc-search-box__form-field\" programmatically originX=\"start\" originY=\"bottom\" overlayX=\"start\"\n\toverlayY=\"top\" position=\"undefined\" [offsetY]=\"formControl ? -20 : 0\" [label]=\"label\" [appearance]=\"appearance\"\n\t[errorDisplayMode]=\"errorDisplayMode\" [ngcMenuTriggerFor]=\"searchBoxMenu\">\n\n\t<ng-container *ngIf=\"formControl; else elseBlock\">\n\t\t<input ngcFormFieldInput clearable [name]=\"name\" [autoFocusOn]=\"autoFocusOn\" [autoReset]=\"autoReset\"\n\t\t\t[trim]=\"trim\" [placeholder]=\"placeholder || ('NGC.PLACEHOLDER.SEARCH' | translate)\"\n\t\t\t[formControl]=\"formControl\" [disableControl]=\"disableControl\" [readonly]=\"readonly\" [required]=\"required\"\n\t\t\t[(ngModel)]=\"ngModel\" (ngModelChange)=\"ngModelChange?.emit($event)\"\n\t\t\t(keydown.arrowup)=\"focusPreviousSuggestItem($event)\" (keydown.arrowdown)=\"focusNextSuggestItem($event)\"\n\t\t\t(keydown.enter)=\"chooseSuggestItem($event, focusIndex)\"\n\t\t\t(input)=\"onInput($event); onSearch($any($event?.target)?.value)\" (focus)=\"onFocus($event)\"\n\t\t\t(blur)=\"onBlur($event)\" (cleared)=\"onClear($event)\" />\n\t</ng-container>\n\n\t<ng-template #elseBlock>\n\t\t<input ngcFormFieldInput clearable [name]=\"name\" [autoFocusOn]=\"autoFocusOn\" [autoReset]=\"autoReset\"\n\t\t\t[trim]=\"trim\" [placeholder]=\"placeholder || ('NGC.PLACEHOLDER.SEARCH' | translate)\" [disabled]=\"disabled\"\n\t\t\t[readonly]=\"readonly\" [required]=\"required\" [(ngModel)]=\"ngModel\"\n\t\t\t(ngModelChange)=\"ngModelChange?.emit($event)\" (keydown.arrowup)=\"focusPreviousSuggestItem($event)\"\n\t\t\t(keydown.arrowdown)=\"focusNextSuggestItem($event)\" (keydown.enter)=\"chooseSuggestItem($event, focusIndex)\"\n\t\t\t(input)=\"onInput($event); onSearch($any($event?.target)?.value)\" (focus)=\"onFocus($event)\"\n\t\t\t(blur)=\"onBlur($event)\" (cleared)=\"onClear($event)\" />\n\t</ng-template>\n\n\t<div *ngIf=\"prefixIcon\" ngcFormFieldPrefix>\n\t\t<button ngcBasicButton tabindex=\"-1\" [icon]=\"prefixIcon\" (click)=\"prefixIconClicked?.emit()\">\n\t\t</button>\n\t</div>\n\n\t<div *ngIf=\"suffixIcon\" ngcFormFieldSuffix>\n\t\t<button ngcBasicButton tabindex=\"-1\" [icon]=\"suffixIcon\" (click)=\"suffixIconClicked?.emit()\">\n\t\t</button>\n\t</div>\n</ngc-form-field>\n\n<!-- Not Found Template -->\n<ng-template #notFoundTemplate let-name=\"name\" let-size=\"size\" let-debounceTime=\"debounceTime\"\n\tlet-emptyImage=\"emptyImage\" let-emptyImageSize=\"emptyImageSize\" let-emptyTitle=\"emptyTitle\"\n\tlet-emptyDescription=\"emptyDescription\">\n\n\t<not-found *ngIf=\"displayNotFound && !filteredData?.length\" [mode]=\"searchQuery?.length ? 'search' : 'empty'\"\n\t\t[name]=\"name || notFoundData?.name\" [size]=\"size || notFoundData?.size\"\n\t\t[debounceTime]=\"debounceTime || notFoundData?.debounceTime || undefined\"\n\t\t[emptyImage]=\"emptyImage || notFoundData?.emptyImage\"\n\t\t[emptyImageSize]=\"emptyImageSize || notFoundData?.emptyImageSize\"\n\t\t[emptyTitle]=\"emptyTitle || notFoundData?.emptyTitle\"\n\t\t[emptyDescription]=\"emptyDescription || notFoundData?.emptyDescription\">\n\t</not-found>\n</ng-template>", styles: [".ngc-search-box{display:flex;flex-direction:column}.ngc-search-box .ngc-search-box__form-field{width:100%}.ngc-search-box .ngc-search-box__form-field.ngc-form-field--legacy:not(.ngc-form-field--disabled).ngc-form-field--focusing .ngc-form-field__input-container .ngc-form-field__prefix,.ngc-search-box .ngc-search-box__form-field.ngc-form-field--legacy:not(.ngc-form-field--disabled):not(.ngc-form-field--empty) .ngc-form-field__input-container .ngc-form-field__prefix{margin-left:10px}.ngc-search-box .ngc-search-box__form-field.ngc-form-field--legacy:not(.ngc-form-field--disabled) .ngc-form-field__input-container .ngc-form-field__prefix{transition:margin-left .1s ease-in-out;padding-left:0}.ngc-search-box .ngc-search-box__avatar{margin-right:10px;width:45px;min-width:45px;max-width:45px}.ngc-search-box .ngc-search-box__content{display:flex;flex-direction:column;text-align:left;width:100%;min-width:0}.ngc-search-box .ngc-search-box__title{font-size:16px}.ngc-search-box .ngc-search-box__description{color:var(--ngc-color-neutral-text-tertiary, #8e8e93);font-weight:400}.ngc-search-box .ngc-search-box-item{display:flex;align-items:center}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { menuTrigger: [{
                type: ViewChild,
                args: [NgcMenuTriggerForDirective, { static: true }]
            }], notFoundTemplate: [{
                type: ViewChild,
                args: ['notFoundTemplate', { static: true }]
            }], data: [{
                type: Input
            }], suggestion: [{
                type: Input
            }], ngModel: [{
                type: Input
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], prefixIcon: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], searchKey: [{
                type: Input
            }], fieldName: [{
                type: Input
            }], fieldDescription: [{
                type: Input
            }], fieldImage: [{
                type: Input
            }], fieldAvatar: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], debounceTime: [{
                type: Input
            }], trim: [{
                type: Input
            }], displayNotFound: [{
                type: Input
            }], disableControl: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], autoFocusOn: [{
                type: Input
            }], autoReset: [{
                type: Input
            }], notFoundData: [{
                type: Input
            }], formControl: [{
                type: Input
            }], appearance: [{
                type: Input
            }], errorDisplayMode: [{
                type: Input
            }], filterPredicate: [{
                type: Input
            }], ngModelChange: [{
                type: Output
            }], searching: [{
                type: Output
            }], cleared: [{
                type: Output
            }], filtered: [{
                type: Output
            }], suggested: [{
                type: Output
            }], prefixIconClicked: [{
                type: Output
            }], suffixIconClicked: [{
                type: Output
            }], input: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXNlYXJjaC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2Mtc2VhcmNoLWJveC9uZ2Mtc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1zZWFyY2gtYm94L25nYy1zZWFyY2gtYm94Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUNuQyxNQUFNLEVBQUUsWUFBWSxFQUNMLHVCQUF1QixFQUFFLFVBQVUsRUFDbEQsU0FBUyxFQUFhLGlCQUFpQixFQUN2QyxXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUNOLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUN6QyxZQUFZLEVBQUUsaUJBQWlCLEVBQy9CLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFFLFFBQVEsSUFBSSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFHdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2xELElBQU0scUJBQXFCLEdBQTNCLE1BQU0scUJBQXFCO0lBeURqQzs7OztPQUlHO0lBQ0gsWUFBb0IsVUFBc0IsRUFBVSxNQUF5QjtRQUF6RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFuRDdDLGVBQVUsR0FBVyxRQUFRLENBQUM7UUFFOUIsY0FBUyxHQUFXLE1BQU0sQ0FBQztRQUMzQixjQUFTLEdBQVcsTUFBTSxDQUFDO1FBQzNCLHFCQUFnQixHQUFXLGFBQWEsQ0FBQztRQUN6QyxlQUFVLEdBQVcsT0FBTyxDQUFDO1FBQzdCLGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBQ2YsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUMxQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBVXRDLGVBQVUsR0FBNEIsU0FBUyxDQUFDO1FBQ2hELHFCQUFnQixHQUFrQyxTQUFTLENBQUM7UUFHM0Usa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNqRSxjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsWUFBTyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3pELGFBQVEsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUMxRCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkQsc0JBQWlCLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakUsc0JBQWlCLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakUsVUFBSyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3ZELFVBQUssR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUN2RCxTQUFJLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFJaEUsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUl0QixvQkFBZSxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBWWhFLElBQUksQ0FBQyxlQUFlO2FBQ25CLElBQUksQ0FDSixZQUFZLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBRSxFQUNqQyxvQkFBb0IsRUFBRSxFQUN0QixpQkFBaUIsQ0FBRSxJQUFJLENBQUUsQ0FDekI7YUFDQSxTQUFTLENBQUUsQ0FBRSxLQUFhLEVBQUcsRUFBRTtZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUU3QixlQUFlO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWYsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQXpCRCxJQUFJLGdCQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxJQUFJLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQztJQUM1RSxDQUFDO0lBeUJEOztPQUVHO0lBQ0gsV0FBVztRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBRSxPQUFzQjtRQUNsQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0lBQ2hGLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRLENBQUUsV0FBbUI7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksT0FBTyxDQUFFLEtBQVk7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksT0FBTyxDQUFFLEtBQVk7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU8sQ0FBRSxLQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUUsS0FBWTtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFFLEtBQWE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUVyQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksaUJBQWlCLENBQUUsS0FBWSxFQUFFLEtBQWE7UUFDcEQsSUFBSyxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQUcsT0FBTztRQUVuQyxNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsY0FBYyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRS9DLElBQUssQ0FBQyxJQUFJO1lBQUcsT0FBTztRQUVwQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUM7UUFFL0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSSx3QkFBd0IsQ0FBRSxLQUFZO1FBQzVDLElBQUssQ0FBQyxJQUFJLENBQUMsY0FBYztZQUFHLE9BQU87UUFFbkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQkFBb0IsQ0FBRSxLQUFZO1FBQ3hDLElBQUssQ0FBQyxJQUFJLENBQUMsY0FBYztZQUFHLE9BQU87UUFFbkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMzRSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxXQUFXO1FBQ2xCLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNO1lBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxPQUFPO1FBQ2QsSUFBSyxJQUFJLENBQUMsV0FBVyxFQUFHO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUUsQ0FBQztTQUM5RTthQUFNO1lBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNLLFFBQVE7UUFDZixJQUFLLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFBRyxPQUFPO1FBRS9CLE1BQU0sVUFBVSxHQUFRLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxVQUFVLEVBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlGLElBQUssWUFBWSxDQUFFLFVBQVUsQ0FBRSxFQUFHO1lBQ2pDLFVBQVU7aUJBQ1QsSUFBSSxDQUFFLGlCQUFpQixDQUFFLElBQUksQ0FBRSxDQUFFO2lCQUNqQyxTQUFTLENBQUUsQ0FBRSxJQUFXLEVBQUcsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFFLENBQUM7WUFDSixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZ0JBQWdCLENBQUUsSUFBUztRQUNsQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBRTtZQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFO1lBQ2hFLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUNyRCxJQUFJLENBQUMsV0FBVyxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUFBLENBQUM7O2tIQTNRVSxxQkFBcUI7c0dBQXJCLHFCQUFxQixrbkNBRXJCLDBCQUEwQix3TUNoQ3ZDLDBwTUFvSGM7QUQzRWI7SUFBVSxZQUFZLEVBQUU7O3lEQUFzQztBQUU5RDtJQUFVLFlBQVksRUFBRTs7d0RBQW1DO0FBQzNEO0lBQVUsWUFBWSxFQUFFOzt3REFBbUM7QUFDM0Q7SUFBVSxZQUFZLEVBQUU7OytEQUFpRDtBQUN6RTtJQUFVLFlBQVksRUFBRTs7eURBQXFDO0FBQzdEO0lBQVUsWUFBWSxFQUFFOzswREFBdUM7QUFDL0Q7SUFBVSxZQUFZLEVBQUU7SUFBRSxZQUFZLEVBQUU7O3VEQUE4QjtBQUN0RTtJQUFVLFlBQVksRUFBRTtJQUFFLFlBQVksRUFBRTs7MkRBQW1DO0FBQzNFO0lBQVUsWUFBWSxFQUFFO0lBQUUsYUFBYSxFQUFFOzttREFBNkI7QUFDdEU7SUFBVSxhQUFhLEVBQUU7OzhEQUFpQztBQUUxRDtJQUFVLGFBQWEsRUFBRTs7dURBQTBCO0FBQ25EO0lBQVUsYUFBYSxFQUFFOzt1REFBMEI7QUFDbkQ7SUFBVSxhQUFhLEVBQUU7O3VEQUEwQjtBQUNuRDtJQUFVLGFBQWEsRUFBRTs7MERBQTZCO0FBQ3REO0lBQVUsYUFBYSxFQUFFOzt3REFBMkI7QUFHcEQ7SUFBVSxZQUFZLEVBQUU7O3lEQUF3RDtBQUNoRjtJQUFVLFlBQVksRUFBRTs7K0RBQW9FO0FBL0JoRixxQkFBcUI7SUFUakMsWUFBWSxFQUFFO3FDQXVFa0IsVUFBVSxFQUFrQixpQkFBaUI7R0E5RGpFLHFCQUFxQixDQTZRakM7U0E3UVkscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBUmpDLFNBQVM7K0JBQ0csZ0JBQWdCLFFBR25CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLGlCQUNwQixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO2lJQUlrQixXQUFXO3NCQUE1RSxTQUFTO3VCQUFFLDBCQUEwQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDRSxnQkFBZ0I7c0JBQXpFLFNBQVM7dUJBQUUsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVoQyxJQUFJO3NCQUFuQixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDMEIsVUFBVTtzQkFBekMsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUMwQixTQUFTO3NCQUF4QyxLQUFLO2dCQUMwQixTQUFTO3NCQUF4QyxLQUFLO2dCQUMwQixnQkFBZ0I7c0JBQS9DLEtBQUs7Z0JBQzBCLFVBQVU7c0JBQXpDLEtBQUs7Z0JBQzBCLFdBQVc7c0JBQTFDLEtBQUs7Z0JBQzBDLFFBQVE7c0JBQXZELEtBQUs7Z0JBQzBDLFlBQVk7c0JBQTNELEtBQUs7Z0JBQzJDLElBQUk7c0JBQXBELEtBQUs7Z0JBQzJCLGVBQWU7c0JBQS9DLEtBQUs7Z0JBQ1UsY0FBYztzQkFBN0IsS0FBSztnQkFDMkIsUUFBUTtzQkFBeEMsS0FBSztnQkFDMkIsUUFBUTtzQkFBeEMsS0FBSztnQkFDMkIsUUFBUTtzQkFBeEMsS0FBSztnQkFDMkIsV0FBVztzQkFBM0MsS0FBSztnQkFDMkIsU0FBUztzQkFBekMsS0FBSztnQkFDVSxZQUFZO3NCQUEzQixLQUFLO2dCQUNVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQzBCLFVBQVU7c0JBQXpDLEtBQUs7Z0JBQzBCLGdCQUFnQjtzQkFBL0MsS0FBSztnQkFDVSxlQUFlO3NCQUE5QixLQUFLO2dCQUVXLGFBQWE7c0JBQTdCLE1BQU07Z0JBQ1UsU0FBUztzQkFBekIsTUFBTTtnQkFDVSxPQUFPO3NCQUF2QixNQUFNO2dCQUNVLFFBQVE7c0JBQXhCLE1BQU07Z0JBQ1UsU0FBUztzQkFBekIsTUFBTTtnQkFDVSxpQkFBaUI7c0JBQWpDLE1BQU07Z0JBQ1UsaUJBQWlCO3NCQUFqQyxNQUFNO2dCQUNVLEtBQUs7c0JBQXJCLE1BQU07Z0JBQ1UsS0FBSztzQkFBckIsTUFBTTtnQkFDVSxJQUFJO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsXG5cdE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLFxuXHRWaWV3Q2hpbGQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgaXNPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuXHRVbnN1YnNjcmliZXIsIERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbixcblx0Q29lcmNlTnVtYmVyLCB1bnRpbENtcERlc3Ryb3llZCwgSU5vdEZvdW5kRGF0YVxufSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBDT05TVEFOVCBhcyBBUFBfQ09OU1RBTlQgfSBmcm9tICdAcmVzb3VyY2VzJztcblxuaW1wb3J0IHsgTmdjSUZvcm1GaWVsZEFwcGVhcmFuY2UsIE5nY0lGb3JtRmllbGRFcnJvckRpc3BsYXlNb2RlIH0gZnJvbSAnLi4vbmdjLWZvcm0tZmllbGQnO1xuaW1wb3J0IHsgTmdjTWVudVRyaWdnZXJGb3JEaXJlY3RpdmUgfSBmcm9tICcuLi9uZ2MtbWVudSc7XG5cbkBVbnN1YnNjcmliZXIoKVxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1zZWFyY2gtYm94Jyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2Mtc2VhcmNoLWJveC5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2Mtc2VhcmNoLWJveC5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLXNlYXJjaC1ib3gnIH0sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjU2VhcmNoQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoIE5nY01lbnVUcmlnZ2VyRm9yRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9ICkgcHVibGljIG1lbnVUcmlnZ2VyOiBOZ2NNZW51VHJpZ2dlckZvckRpcmVjdGl2ZTtcblx0QFZpZXdDaGlsZCggJ25vdEZvdW5kVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9ICkgcHVibGljIG5vdEZvdW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QElucHV0KCkgcHVibGljIGRhdGE6IGFueVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgc3VnZ2VzdGlvbjogYW55O1xuXHRASW5wdXQoKSBwdWJsaWMgbmdNb2RlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgcHJlZml4SWNvbjogc3RyaW5nID0gJ3NlYXJjaCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBzdWZmaXhJY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgc2VhcmNoS2V5OiBzdHJpbmcgPSAnbmFtZSc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgZmllbGROYW1lOiBzdHJpbmcgPSAnbmFtZSc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgZmllbGREZXNjcmlwdGlvbjogc3RyaW5nID0gJ2Rlc2NyaXB0aW9uJztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBmaWVsZEltYWdlOiBzdHJpbmcgPSAnaW1hZ2UnO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIGZpZWxkQXZhdGFyOiBzdHJpbmcgPSAnYXZhdGFyJztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgaXRlbVNpemU6IG51bWJlciA9IDU0O1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBkZWJvdW5jZVRpbWU6IG51bWJlciA9IDQwMDtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHRyaW06IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNwbGF5Tm90Rm91bmQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlQ29udHJvbDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgYXV0b0ZvY3VzT246IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGF1dG9SZXNldDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIG5vdEZvdW5kRGF0YTogSU5vdEZvdW5kRGF0YTtcblx0QElucHV0KCkgcHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBhcHBlYXJhbmNlOiBOZ2NJRm9ybUZpZWxkQXBwZWFyYW5jZSA9ICdkZWZhdWx0Jztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBlcnJvckRpc3BsYXlNb2RlOiBOZ2NJRm9ybUZpZWxkRXJyb3JEaXNwbGF5TW9kZSA9ICdkZWZhdWx0Jztcblx0QElucHV0KCkgcHVibGljIGZpbHRlclByZWRpY2F0ZTogKCBkYXRhOiBhbnksIHNlYXJjaFF1ZXJ5OiBzdHJpbmcsIHNlYXJjaEtleT86IHN0cmluZyApID0+IGJvb2xlYW47XG5cblx0QE91dHB1dCgpIHB1YmxpYyBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNlYXJjaGluZzogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbGVhcmVkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBmaWx0ZXJlZDogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc3VnZ2VzdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHByZWZpeEljb25DbGlja2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc3VmZml4SWNvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBpbnB1dDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgZm9jdXM6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGJsdXI6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG5cdHB1YmxpYyBzZWFyY2hRdWVyeTogc3RyaW5nO1xuXHRwdWJsaWMgZm9jdXNpbmc6IGJvb2xlYW47XG5cdHB1YmxpYyBmb2N1c0luZGV4OiBudW1iZXIgPSAwO1xuXHRwdWJsaWMgZmlsdGVyZWREYXRhOiBhbnlbXTtcblx0cHVibGljIHN1Z2dlc3Rpb25EYXRhOiBhbnlbXTtcblxuXHRwcml2YXRlIF9zZWFyY2hVcGRhdGVkJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG5cdGdldCB1c2VWaXJ0dWFsU2Nyb2xsKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN1Z2dlc3Rpb25EYXRhPy5sZW5ndGggPj0gQVBQX0NPTlNUQU5ULlVTRV9WSVJUVUFMX1NDUk9MTF9XSVRIO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gX2NkUmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiApIHtcblx0XHR0aGlzLl9zZWFyY2hVcGRhdGVkJFxuXHRcdC5waXBlKFxuXHRcdFx0ZGVib3VuY2VUaW1lKCB0aGlzLmRlYm91bmNlVGltZSApLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdHVudGlsQ21wRGVzdHJveWVkKCB0aGlzIClcblx0XHQpXG5cdFx0LnN1YnNjcmliZSggKCB2YWx1ZTogc3RyaW5nICkgPT4ge1xuXHRcdFx0dGhpcy5zZWFyY2hpbmcuZW1pdCggdmFsdWUgKTtcblxuXHRcdFx0Ly8gU3RhcnQgZmlsdGVyXG5cdFx0XHR0aGlzLl9maWx0ZXIoKTtcblxuXHRcdFx0Ly8gU3RhcnQgc3VnZ2VzdFxuXHRcdFx0dGhpcy5mb2N1c2luZyAmJiB0aGlzLl9zdWdnZXN0KCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5fc2VhcmNoVXBkYXRlZCQuY29tcGxldGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRjaGFuZ2VzLmRhdGEgJiYgdGhpcy5fZmlsdGVyKCk7XG5cdFx0Y2hhbmdlcy5uZ01vZGVsICYmIHRoaXMubmdNb2RlbCAhPT0gdW5kZWZpbmVkICYmIHRoaXMub25TZWFyY2goIHRoaXMubmdNb2RlbCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hRdWVyeVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uU2VhcmNoKCBzZWFyY2hRdWVyeTogc3RyaW5nICkge1xuXHRcdHRoaXMuc2VhcmNoUXVlcnkgPSBzZWFyY2hRdWVyeSB8fCAnJztcblxuXHRcdHRoaXMuX3NlYXJjaFVwZGF0ZWQkLm5leHQoIHRoaXMuc2VhcmNoUXVlcnkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uQ2xlYXIoIGV2ZW50OiBFdmVudCApIHtcblx0XHR0aGlzLmNsZWFyKCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25JbnB1dCggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdHRoaXMuaW5wdXQuZW1pdCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uRm9jdXMoIGV2ZW50OiBFdmVudCApIHtcblx0XHR0aGlzLmZvY3VzaW5nID0gdHJ1ZTtcblxuXHRcdHRoaXMuZm9jdXMuZW1pdCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uQmx1ciggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdHRoaXMuZm9jdXNpbmcgPSBmYWxzZTtcblxuXHRcdHRoaXMuYmx1ci5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xlYXIoIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0dGhpcy5uZ01vZGVsID0gdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xuXG5cdFx0dGhpcy5fc2VhcmNoVXBkYXRlZCQubmV4dCggdGhpcy5zZWFyY2hRdWVyeSApO1xuXHRcdHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KCB0aGlzLm5nTW9kZWwgKTtcblx0XHR0aGlzLmZpbHRlcmVkLmVtaXQoIHRoaXMuZGF0YSApO1xuXHRcdHRoaXMuY2xlYXJlZC5lbWl0KCBldmVudCApO1xuXHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNob29zZVN1Z2dlc3RJdGVtKCBldmVudDogRXZlbnQsIGluZGV4OiBudW1iZXIgKSB7XG5cdFx0aWYgKCAhdGhpcy5zdWdnZXN0aW9uRGF0YSApIHJldHVybjtcblxuXHRcdGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuc3VnZ2VzdGlvbkRhdGFbIGluZGV4IF07XG5cblx0XHRpZiAoICFpdGVtICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHRoaXMubmdNb2RlbCA9IF8uZ2V0KCBpdGVtLCB0aGlzLnNlYXJjaEtleSB8fCB0aGlzLmZpZWxkTmFtZSApO1xuXG5cdFx0dGhpcy5fc2VhcmNoVXBkYXRlZCQubmV4dCggdGhpcy5zZWFyY2hRdWVyeSApO1xuXHRcdHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KCB0aGlzLm5nTW9kZWwgKTtcblx0XHR0aGlzLnN1Z2dlc3RlZC5lbWl0KCBpdGVtICk7XG5cdFx0dGhpcy5tZW51VHJpZ2dlci5jbG9zZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZm9jdXNQcmV2aW91c1N1Z2dlc3RJdGVtKCBldmVudDogRXZlbnQgKSB7XG5cdFx0aWYgKCAhdGhpcy5zdWdnZXN0aW9uRGF0YSApIHJldHVybjtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR0aGlzLmZvY3VzSW5kZXggPSB0aGlzLmZvY3VzSW5kZXggPiAwID8gdGhpcy5mb2N1c0luZGV4IC0gMSA6IDA7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBmb2N1c05leHRTdWdnZXN0SXRlbSggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdGlmICggIXRoaXMuc3VnZ2VzdGlvbkRhdGEgKSByZXR1cm47XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLnN1Z2dlc3Rpb25EYXRhPy5sZW5ndGggLSAxO1xuXG5cdFx0dGhpcy5mb2N1c0luZGV4ID0gdGhpcy5mb2N1c0luZGV4IDwgbGVuZ3RoID8gdGhpcy5mb2N1c0luZGV4ICsgMSA6IGxlbmd0aDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfdG9nZ2xlTWVudSgpIHtcblx0XHR0aGlzLnNlYXJjaFF1ZXJ5ICYmIHRoaXMuc3VnZ2VzdGlvbkRhdGE/Lmxlbmd0aFxuXHRcdFx0PyB0aGlzLm1lbnVUcmlnZ2VyLm9wZW4oKVxuXHRcdFx0OiB0aGlzLm1lbnVUcmlnZ2VyLmNsb3NlKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2ZpbHRlcigpIHtcblx0XHRpZiAoIHRoaXMuc2VhcmNoUXVlcnkgKSB7XG5cdFx0XHR0aGlzLmZpbHRlcmVkRGF0YSA9IF8uZmlsdGVyKCB0aGlzLmRhdGEsIHRoaXMuX2ZpbHRlclByZWRpY2F0ZS5iaW5kKCB0aGlzICkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJlZERhdGEgPSBfLmNsb25lKCB0aGlzLmRhdGEgKTtcblx0XHR9XG5cblx0XHR0aGlzLmZpbHRlcmVkLmVtaXQoIHRoaXMuZmlsdGVyZWREYXRhICk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX3N1Z2dlc3QoKSB7XG5cdFx0aWYgKCAhdGhpcy5zdWdnZXN0aW9uICkgcmV0dXJuO1xuXG5cdFx0Y29uc3Qgc3VnZ2VzdGlvbjogYW55ID0gdGhpcy5zdWdnZXN0aW9uKCB0aGlzLnNlYXJjaFF1ZXJ5ICk7XG5cdFx0Y29uc29sZS5sb2coe3N1Z2dlc3Rpb259LCAnc2VhcmNoUXVlcnk6JywgdGhpcy5zZWFyY2hRdWVyeSwgJ21lbnVUcmlnZ2VyOicsIHRoaXMubWVudVRyaWdnZXIpO1xuXHRcdGlmICggaXNPYnNlcnZhYmxlKCBzdWdnZXN0aW9uICkgKSB7XG5cdFx0XHRzdWdnZXN0aW9uXG5cdFx0XHQucGlwZSggdW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKSApXG5cdFx0XHQuc3Vic2NyaWJlKCAoIGRhdGE6IGFueVtdICkgPT4ge1xuXHRcdFx0XHR0aGlzLnN1Z2dlc3Rpb25EYXRhID0gZGF0YTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2FzeW5jIHN1Z2dlc3Rpb25EYXRhIHVwZGF0ZWQ6JywgdGhpcy5zdWdnZXN0aW9uRGF0YSk7XG5cdFx0XHRcdHRoaXMuX3RvZ2dsZU1lbnUoKTtcblx0XHRcdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0XHR9ICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zdWdnZXN0aW9uRGF0YSA9IHN1Z2dlc3Rpb247XG5cdFx0Y29uc29sZS5sb2coJ3N5bmMgc3VnZ2VzdGlvbkRhdGEgdXBkYXRlZDonLCB0aGlzLnN1Z2dlc3Rpb25EYXRhKTtcblx0XHR0aGlzLl90b2dnbGVNZW51KCk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHthbnl9IGl0ZW1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHByaXZhdGUgX2ZpbHRlclByZWRpY2F0ZSggaXRlbTogYW55ICk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBfLmlzRnVuY3Rpb24oIHRoaXMuZmlsdGVyUHJlZGljYXRlIClcblx0XHRcdD8gdGhpcy5maWx0ZXJQcmVkaWNhdGUoIGl0ZW0sIHRoaXMuc2VhcmNoUXVlcnksIHRoaXMuc2VhcmNoS2V5IClcblx0XHRcdDpfLnNlYXJjaChcblx0XHRcdFx0dGhpcy5zZWFyY2hLZXkgPyBfLmdldCggaXRlbSwgdGhpcy5zZWFyY2hLZXkgKSA6IGl0ZW0sXG5cdFx0XHRcdHRoaXMuc2VhcmNoUXVlcnlcblx0XHRcdCk7XG5cdH07XG5cbn1cbiIsIjwhLS0gU2VhcmNoIEJveCBNZW51IC0tPlxuPG5nYy1tZW51ICNzZWFyY2hCb3hNZW51IGNsYXNzPVwibmdjLXNlYXJjaC1ib3hcIiBtYXhIZWlnaHQ9XCI0MDBweFwiIFtoYXNTY3JvbGxCYXJdPVwiIXVzZVZpcnR1YWxTY3JvbGxcIlxuXHRbd2lkdGhdPVwiZWxlbWVudFJlZj8ubmF0aXZlRWxlbWVudD8ub2Zmc2V0V2lkdGggfCB1bml0XCI+XG5cdDFcblx0PG5nYy1tZW51LWNvbnRlbnQ+XG5cdFx0PG5nLXRlbXBsYXRlIG5nY01lbnVDb250ZW50PlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Z2dlc3Rpb25EYXRhPy5sZW5ndGg7IGVsc2Ugbm9TdWdnZXN0aW9uQmxvY2tcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInVzZVZpcnR1YWxTY3JvbGw7IGVsc2Ugbm9ybWFsU3VnZ2VzdGlvbkJsb2NrXCI+XG5cdFx0XHRcdFx0PGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBbaXRlbVNpemVdPVwiaXRlbVNpemVcIiBbbWluQnVmZmVyUHhdPVwiaXRlbVNpemUgKiA1XCJcblx0XHRcdFx0XHRcdFttYXhCdWZmZXJQeF09XCJpdGVtU2l6ZSAqIDEwXCIgW3N0eWxlLmhlaWdodC5weF09XCI0MDBcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXJcblx0XHRcdFx0XHRcdFx0KmNka1ZpcnR1YWxGb3I9XCJsZXQgaXRlbSBvZiBzdWdnZXN0aW9uRGF0YTsgbGV0IGluZGV4ID0gaW5kZXg7IHRyYWNrQnk6IHNlYXJjaEtleSB8IHRyYWNrQnlGblwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwibmdjLXNlYXJjaC1ib3gtaXRlbVwiIG5nY01lbnVJdGVtIFtmb2N1c2luZ109XCJmb2N1c0luZGV4ID09PSBpbmRleFwiXG5cdFx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cImNob29zZVN1Z2dlc3RJdGVtKCRldmVudCwgaW5kZXgpXCI+XG5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nICpuZ0lmPVwiaXRlbVtmaWVsZEltYWdlXVwiIGNsYXNzPVwibmdjLXNlYXJjaC1ib3hfX2F2YXRhclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRbbGF6eUxvYWRdPVwiaXRlbVtmaWVsZEltYWdlXVwiIC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8bmdjLWF2YXRhciAqbmdJZj1cIml0ZW1bZmllbGRBdmF0YXJdXCIgY2xhc3M9XCJuZ2Mtc2VhcmNoLWJveF9fYXZhdGFyXCIgc2l6ZT1cIm1lZGl1bVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj1cImF1dG9cIiBbbGFiZWxdPVwiaXRlbVtmaWVsZE5hbWVdXCIgW2F2YXRhcl09XCJpdGVtW2ZpZWxkQXZhdGFyXVwiPlxuXHRcdFx0XHRcdFx0XHRcdDwvbmdjLWF2YXRhcj5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuZ2Mtc2VhcmNoLWJveF9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG5nYy10cnVuY2F0ZSBjbGFzcz1cIm5nYy1zZWFyY2gtYm94X190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtW2ZpZWxkTmFtZV0gfCBlbXB0eSB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uZ2MtdHJ1bmNhdGU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bmdjLXRydW5jYXRlIGNsYXNzPVwibmdjLXNlYXJjaC1ib3hfX2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7IGl0ZW1bZmllbGREZXNjcmlwdGlvbl0gfCBlbXB0eSB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uZ2MtdHJ1bmNhdGU+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjbm9ybWFsU3VnZ2VzdGlvbkJsb2NrPlxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN1Z2dlc3Rpb25EYXRhOyBsZXQgaW5kZXggPSBpbmRleDsgdHJhY2tCeTogc2VhcmNoS2V5IHwgdHJhY2tCeUZuXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIm5nYy1zZWFyY2gtYm94LWl0ZW1cIiBuZ2NNZW51SXRlbSBbZm9jdXNpbmddPVwiZm9jdXNJbmRleCA9PT0gaW5kZXhcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cImNob29zZVN1Z2dlc3RJdGVtKCRldmVudCwgaW5kZXgpXCI+XG5cdFx0XHRcdFx0XHQ8aW1nICpuZ0lmPVwiaXRlbVtmaWVsZEltYWdlXVwiIGNsYXNzPVwibmdjLXNlYXJjaC1ib3hfX2F2YXRhclwiIFtsYXp5TG9hZF09XCJpdGVtW2ZpZWxkSW1hZ2VdXCIgLz5cblxuXHRcdFx0XHRcdFx0PG5nYy1hdmF0YXIgKm5nSWY9XCJpdGVtW2ZpZWxkQXZhdGFyXVwiIGNsYXNzPVwibmdjLXNlYXJjaC1ib3hfX2F2YXRhclwiIHNpemU9XCJtZWRpdW1cIiBjb2xvcj1cImF1dG9cIlxuXHRcdFx0XHRcdFx0XHRbbGFiZWxdPVwiaXRlbVtmaWVsZE5hbWVdXCIgW2F2YXRhcl09XCJpdGVtW2ZpZWxkQXZhdGFyXVwiPlxuXHRcdFx0XHRcdFx0PC9uZ2MtYXZhdGFyPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmdjLXNlYXJjaC1ib3hfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PG5nYy10cnVuY2F0ZSBjbGFzcz1cIm5nYy1zZWFyY2gtYm94X190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt7IGl0ZW1bZmllbGROYW1lXSB8IGVtcHR5IH19XG5cdFx0XHRcdFx0XHRcdDwvbmdjLXRydW5jYXRlPlxuXHRcdFx0XHRcdFx0XHQ8bmdjLXRydW5jYXRlIGNsYXNzPVwibmdjLXNlYXJjaC1ib3hfX2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgaXRlbVtmaWVsZERlc2NyaXB0aW9uXSB8IGVtcHR5IH19XG5cdFx0XHRcdFx0XHRcdDwvbmdjLXRydW5jYXRlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblxuXHRcdFx0PG5nLXRlbXBsYXRlICNub1N1Z2dlc3Rpb25CbG9jaz5cblx0XHRcdFx0PG5vdC1mb3VuZCBbbW9kZV09XCJzZWFyY2hRdWVyeSA/ICdzZWFyY2gnIDogJ2VtcHR5J1wiPjwvbm90LWZvdW5kPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHQ8L25nYy1tZW51LWNvbnRlbnQ+XG48L25nYy1tZW51PlxuXG48IS0tIFNlYXJjaCBCb3ggSW5wdXQgRmllbGQgLS0+XG48bmdjLWZvcm0tZmllbGQgY2xhc3M9XCJuZ2Mtc2VhcmNoLWJveF9fZm9ybS1maWVsZFwiIHByb2dyYW1tYXRpY2FsbHkgb3JpZ2luWD1cInN0YXJ0XCIgb3JpZ2luWT1cImJvdHRvbVwiIG92ZXJsYXlYPVwic3RhcnRcIlxuXHRvdmVybGF5WT1cInRvcFwiIHBvc2l0aW9uPVwidW5kZWZpbmVkXCIgW29mZnNldFldPVwiZm9ybUNvbnRyb2wgPyAtMjAgOiAwXCIgW2xhYmVsXT1cImxhYmVsXCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiXG5cdFtlcnJvckRpc3BsYXlNb2RlXT1cImVycm9yRGlzcGxheU1vZGVcIiBbbmdjTWVudVRyaWdnZXJGb3JdPVwic2VhcmNoQm94TWVudVwiPlxuXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtQ29udHJvbDsgZWxzZSBlbHNlQmxvY2tcIj5cblx0XHQ8aW5wdXQgbmdjRm9ybUZpZWxkSW5wdXQgY2xlYXJhYmxlIFtuYW1lXT1cIm5hbWVcIiBbYXV0b0ZvY3VzT25dPVwiYXV0b0ZvY3VzT25cIiBbYXV0b1Jlc2V0XT1cImF1dG9SZXNldFwiXG5cdFx0XHRbdHJpbV09XCJ0cmltXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyIHx8ICgnTkdDLlBMQUNFSE9MREVSLlNFQVJDSCcgfCB0cmFuc2xhdGUpXCJcblx0XHRcdFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIFtkaXNhYmxlQ29udHJvbF09XCJkaXNhYmxlQ29udHJvbFwiIFtyZWFkb25seV09XCJyZWFkb25seVwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG5cdFx0XHRbKG5nTW9kZWwpXT1cIm5nTW9kZWxcIiAobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlPy5lbWl0KCRldmVudClcIlxuXHRcdFx0KGtleWRvd24uYXJyb3d1cCk9XCJmb2N1c1ByZXZpb3VzU3VnZ2VzdEl0ZW0oJGV2ZW50KVwiIChrZXlkb3duLmFycm93ZG93bik9XCJmb2N1c05leHRTdWdnZXN0SXRlbSgkZXZlbnQpXCJcblx0XHRcdChrZXlkb3duLmVudGVyKT1cImNob29zZVN1Z2dlc3RJdGVtKCRldmVudCwgZm9jdXNJbmRleClcIlxuXHRcdFx0KGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50KTsgb25TZWFyY2goJGFueSgkZXZlbnQ/LnRhcmdldCk/LnZhbHVlKVwiIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuXHRcdFx0KGJsdXIpPVwib25CbHVyKCRldmVudClcIiAoY2xlYXJlZCk9XCJvbkNsZWFyKCRldmVudClcIiAvPlxuXHQ8L25nLWNvbnRhaW5lcj5cblxuXHQ8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cblx0XHQ8aW5wdXQgbmdjRm9ybUZpZWxkSW5wdXQgY2xlYXJhYmxlIFtuYW1lXT1cIm5hbWVcIiBbYXV0b0ZvY3VzT25dPVwiYXV0b0ZvY3VzT25cIiBbYXV0b1Jlc2V0XT1cImF1dG9SZXNldFwiXG5cdFx0XHRbdHJpbV09XCJ0cmltXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyIHx8ICgnTkdDLlBMQUNFSE9MREVSLlNFQVJDSCcgfCB0cmFuc2xhdGUpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFtyZWFkb25seV09XCJyZWFkb25seVwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFsobmdNb2RlbCldPVwibmdNb2RlbFwiXG5cdFx0XHQobmdNb2RlbENoYW5nZSk9XCJuZ01vZGVsQ2hhbmdlPy5lbWl0KCRldmVudClcIiAoa2V5ZG93bi5hcnJvd3VwKT1cImZvY3VzUHJldmlvdXNTdWdnZXN0SXRlbSgkZXZlbnQpXCJcblx0XHRcdChrZXlkb3duLmFycm93ZG93bik9XCJmb2N1c05leHRTdWdnZXN0SXRlbSgkZXZlbnQpXCIgKGtleWRvd24uZW50ZXIpPVwiY2hvb3NlU3VnZ2VzdEl0ZW0oJGV2ZW50LCBmb2N1c0luZGV4KVwiXG5cdFx0XHQoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpOyBvblNlYXJjaCgkYW55KCRldmVudD8udGFyZ2V0KT8udmFsdWUpXCIgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG5cdFx0XHQoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiIChjbGVhcmVkKT1cIm9uQ2xlYXIoJGV2ZW50KVwiIC8+XG5cdDwvbmctdGVtcGxhdGU+XG5cblx0PGRpdiAqbmdJZj1cInByZWZpeEljb25cIiBuZ2NGb3JtRmllbGRQcmVmaXg+XG5cdFx0PGJ1dHRvbiBuZ2NCYXNpY0J1dHRvbiB0YWJpbmRleD1cIi0xXCIgW2ljb25dPVwicHJlZml4SWNvblwiIChjbGljayk9XCJwcmVmaXhJY29uQ2xpY2tlZD8uZW1pdCgpXCI+XG5cdFx0PC9idXR0b24+XG5cdDwvZGl2PlxuXG5cdDxkaXYgKm5nSWY9XCJzdWZmaXhJY29uXCIgbmdjRm9ybUZpZWxkU3VmZml4PlxuXHRcdDxidXR0b24gbmdjQmFzaWNCdXR0b24gdGFiaW5kZXg9XCItMVwiIFtpY29uXT1cInN1ZmZpeEljb25cIiAoY2xpY2spPVwic3VmZml4SWNvbkNsaWNrZWQ/LmVtaXQoKVwiPlxuXHRcdDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvbmdjLWZvcm0tZmllbGQ+XG5cbjwhLS0gTm90IEZvdW5kIFRlbXBsYXRlIC0tPlxuPG5nLXRlbXBsYXRlICNub3RGb3VuZFRlbXBsYXRlIGxldC1uYW1lPVwibmFtZVwiIGxldC1zaXplPVwic2l6ZVwiIGxldC1kZWJvdW5jZVRpbWU9XCJkZWJvdW5jZVRpbWVcIlxuXHRsZXQtZW1wdHlJbWFnZT1cImVtcHR5SW1hZ2VcIiBsZXQtZW1wdHlJbWFnZVNpemU9XCJlbXB0eUltYWdlU2l6ZVwiIGxldC1lbXB0eVRpdGxlPVwiZW1wdHlUaXRsZVwiXG5cdGxldC1lbXB0eURlc2NyaXB0aW9uPVwiZW1wdHlEZXNjcmlwdGlvblwiPlxuXG5cdDxub3QtZm91bmQgKm5nSWY9XCJkaXNwbGF5Tm90Rm91bmQgJiYgIWZpbHRlcmVkRGF0YT8ubGVuZ3RoXCIgW21vZGVdPVwic2VhcmNoUXVlcnk/Lmxlbmd0aCA/ICdzZWFyY2gnIDogJ2VtcHR5J1wiXG5cdFx0W25hbWVdPVwibmFtZSB8fCBub3RGb3VuZERhdGE/Lm5hbWVcIiBbc2l6ZV09XCJzaXplIHx8IG5vdEZvdW5kRGF0YT8uc2l6ZVwiXG5cdFx0W2RlYm91bmNlVGltZV09XCJkZWJvdW5jZVRpbWUgfHwgbm90Rm91bmREYXRhPy5kZWJvdW5jZVRpbWUgfHwgdW5kZWZpbmVkXCJcblx0XHRbZW1wdHlJbWFnZV09XCJlbXB0eUltYWdlIHx8IG5vdEZvdW5kRGF0YT8uZW1wdHlJbWFnZVwiXG5cdFx0W2VtcHR5SW1hZ2VTaXplXT1cImVtcHR5SW1hZ2VTaXplIHx8IG5vdEZvdW5kRGF0YT8uZW1wdHlJbWFnZVNpemVcIlxuXHRcdFtlbXB0eVRpdGxlXT1cImVtcHR5VGl0bGUgfHwgbm90Rm91bmREYXRhPy5lbXB0eVRpdGxlXCJcblx0XHRbZW1wdHlEZXNjcmlwdGlvbl09XCJlbXB0eURlc2NyaXB0aW9uIHx8IG5vdEZvdW5kRGF0YT8uZW1wdHlEZXNjcmlwdGlvblwiPlxuXHQ8L25vdC1mb3VuZD5cbjwvbmctdGVtcGxhdGU+Il19