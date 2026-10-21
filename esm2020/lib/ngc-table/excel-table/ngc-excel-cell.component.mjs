import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation, Optional, Inject, HostBinding } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import _ from 'lodash';
import { DefaultValue, CoerceBoolean, CoerceNumber, DateTimeConfig, DATE_TIME_CONFIG, untilCmpDestroyed, Unsubscriber } from '@core';
import { REGEX, CONSTANT as APP_CONSTANT } from '@resources';
import { NgcSearchBoxComponent } from '../../ngc-search-box';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "angular-resizable-element";
import * as i3 from "@angular/cdk/scrolling";
import * as i4 from "@angular/common";
import * as i5 from "angular-core";
import * as i6 from "@angular/forms";
import * as i7 from "../../ngc-menu/menu/ngc-menu.component";
import * as i8 from "../../ngc-menu/menu-item/ngc-menu-item.component";
import * as i9 from "../../ngc-menu/menu-header/ngc-menu-header.component";
import * as i10 from "../../ngc-menu/menu-header/ngc-menu-header.directive";
import * as i11 from "../../ngc-menu/menu-content/ngc-menu-content.component";
import * as i12 from "../../ngc-menu/menu-content/ngc-menu-content.directive";
import * as i13 from "../../ngc-menu/menu-trigger-for/ngc-menu-trigger-for.directive";
import * as i14 from "../../ngc-button/basic-button/ngc-basic-button.component";
import * as i15 from "../../ngc-search-box/ngc-search-box.component";
import * as i16 from "../../ngc-date-picker/ngc-date-picker.directive";
import * as i17 from "../../ngc-truncate/ngc-truncate.component";
import * as i18 from "../../ngc-tooltip.directive";
import * as i19 from "@core";
let NgcExcelCellComponent = class NgcExcelCellComponent {
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     * @param {ElementRef} _elementRef
     * @param {TranslateService} _translateService
     * @param {DateTimeConfig} _dateTimeConfig
     */
    constructor(_cdRef, _elementRef, _translateService, _dateTimeConfig) {
        this._cdRef = _cdRef;
        this._elementRef = _elementRef;
        this._translateService = _translateService;
        this._dateTimeConfig = _dateTimeConfig;
        this.itemSize = 40;
        this.textContentChange = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.formControl = new FormControl();
        this._translateMessages = {
            required: this._translateService.instant('NGC.MESSAGE.VALUE_REQUIRED'),
            website: this._translateService.instant('NGC.MESSAGE.WEBSITE_VALUE_INVALID'),
            email: this._translateService.instant('NGC.MESSAGE.EMAIL_VALUE_INVALID'),
            number: this._translateService.instant('NGC.MESSAGE.NUMBER_VALUE_INVALID'),
            phone: this._translateService.instant('NGC.MESSAGE.PHONE_VALUE_INVALID'),
            'strict-list': this._translateService.instant('NGC.MESSAGE.VALUE_NOT_IN_LIST'),
            default: this._translateService.instant('NGC.MESSAGE.VALUE_NOT_IN_LIST'),
        };
    }
    get styleWidth() { return this.width; }
    get styleMinWidth() { return this.width; }
    get styleHeight() { return this.height; }
    get styleMinHeight() { return this.height; }
    get classFocusing() { return this.focusing; }
    get classValid() { return !this.isInvalid; }
    get classInvalid() { return this.isInvalid; }
    get classDirty() { return this.formControl.dirty; }
    get classPristine() { return this.formControl.pristine; }
    get classTouched() { return this.formControl.touched; }
    get classUntouched() { return this.formControl.untouched; }
    get classEnable() { return this.formControl.enabled; }
    get classDisabled() { return this.formControl.disabled; }
    get classHasList() { return !!this.list?.length; }
    get attrDataError() { return this.error; }
    get rowIndex() {
        const el = this._elementRef.nativeElement;
        return _.indexOf(el.parentNode.parentNode.children, el.parentNode);
    }
    get columnIndex() {
        const el = this._elementRef.nativeElement;
        return _.indexOf(el.parentNode, el);
    }
    get filteredList() {
        return this.searchBox?.filteredData;
    }
    get useVirtualScroll() {
        return this.filteredList?.length >= APP_CONSTANT.USE_VIRTUAL_SCROLL_WITH;
    }
    /**
     * @constructor
     */
    ngOnInit() {
        this.formControl.statusChanges
            .pipe(untilCmpDestroyed(this))
            .subscribe((status) => {
            setTimeout(() => {
                let error;
                if (this.formControl?.errors) {
                    let type = this.type;
                    if (this.formControl.errors.required)
                        type = 'required';
                    error = this._translateMessages[type] || this._translateMessages.default;
                }
                this.error = error;
                this.isInvalid = status === 'INVALID';
                this._cdRef.markForCheck();
            });
        });
        const validatorFns = [];
        this.required && validatorFns.push(Validators.required);
        switch (this.type) {
            case 'website':
                validatorFns.push(Validators.pattern(REGEX.WEBSITE));
                break;
            case 'email':
                validatorFns.push(Validators.pattern(REGEX.EMAIL));
                break;
            case 'number':
                validatorFns.push(Validators.pattern(REGEX.NUMBER));
                break;
            case 'phone':
                validatorFns.push(Validators.pattern(REGEX.PHONE));
                break;
            case 'strict-list':
                this.list && validatorFns.push(Validators.pattern(new RegExp(`^(${_.join(this.list, '|')})$`)));
                break;
        }
        this.formControl.setValidators(validatorFns);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        if (this.textContent) {
            this.excellCellContent.nativeElement.innerText = this.textContent;
        }
        else {
            this.textContent = this.excellCellContent.nativeElement.innerText;
        }
        this.textContent && setTimeout(() => this.formControl.markAsDirty());
    }
    /**
     * @param {ResizeEvent} event
     * @return {void}
     */
    onResizing(event) {
        const width = event.rectangle.width;
        const height = event.rectangle.height;
        this.width = `${width > 200 ? width : 200}px`;
        this.height = `${height > 40 ? height : 40}px`;
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    onInput(event) {
        this.textContent = event.target.textContent;
        this.textContentChange.emit(this.textContent);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    onKeydown(event) {
        if (event.key !== 'Enter')
            return;
        event.preventDefault();
        this.excellCellContent.nativeElement.blur();
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
     * @param {WGCIDatePickerPickedEvent} event
     * @return {void}
     */
    onDatePicked(event) {
        this.setTextContent(event.date.format(this._dateTimeConfig.dateFormat || APP_CONSTANT.DATE_FORMAT));
    }
    /**
     * @param {string} textContent
     * @return {void}
     */
    setTextContent(textContent) {
        if (this.type === 'multi-list' && this.textContent?.length) {
            let valueArr = _.chain(this.textContent)
                .replace(/, /g, ',')
                .split(',')
                .uniq()
                .value();
            valueArr = _.union(valueArr, [textContent]);
            textContent = valueArr?.length ? _.arrayJoin(valueArr, ', ') : textContent;
        }
        this.textContent = textContent;
        this.excellCellContent.nativeElement.focus();
        setTimeout(() => {
            this.excellCellContent.nativeElement.innerHTML = '';
            // eslint-disable-next-line deprecation/deprecation
            document.execCommand('insertHTML', false, textContent || '');
        });
    }
};
NgcExcelCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExcelCellComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.TranslateService }, { token: DATE_TIME_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Component });
NgcExcelCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcExcelCellComponent, selector: "td[ngcExcelCell]", inputs: { list: "list", textContent: "textContent", itemSize: "itemSize", required: "required", readonly: "readonly", focusing: "focusing", type: "type" }, outputs: { textContentChange: "textContentChange", focus: "focus", blur: "blur" }, host: { properties: { "style.width": "this.styleWidth", "style.minWidth": "this.styleMinWidth", "style.height": "this.styleHeight", "style.minHeight": "this.styleMinHeight", "class.ngc-excel-cell--focusing": "this.classFocusing", "class.ngc-excel-cell--valid": "this.classValid", "class.ngc-excel-cell--invalid": "this.classInvalid", "class.ngc-excel-cell--dirty": "this.classDirty", "class.ngc-excel-cell--pristine": "this.classPristine", "class.ngc-excel-cell--touched": "this.classTouched", "class.ngc-excel-cell--untouched": "this.classUntouched", "class.ngc-excel-cell--enabled": "this.classEnable", "class.ngc-excel-cell--disabled": "this.classDisabled", "class.ngc-excel-cell--has-list": "this.classHasList", "attr.data-error": "this.attrDataError" }, classAttribute: "ngc-excel-cell" }, viewQueries: [{ propertyName: "excellCellContent", first: true, predicate: ["excellCellContent"], descendants: true }, { propertyName: "searchBox", first: true, predicate: NgcSearchBoxComponent, descendants: true }], ngImport: i0, template: "<ngc-menu\n  #excellCellList\n  class=\"ngc-excel-cell\"\n  width=\"280px\"\n  maxHeight=\"400px\"\n  [hasScrollBar]=\"!useVirtualScroll\">\n  <ngc-menu-header>\n    <ng-template ngcMenuHeader>\n      <ngc-search-box autoFocusOn [searchKey]=\"null\" [data]=\"list\"></ngc-search-box>\n    </ng-template>\n  </ngc-menu-header>\n  <ngc-menu-content>\n    <ng-template ngcMenuContent>\n      <ng-container *ngTemplateOutlet=\"searchBox?.notFoundTemplate\"></ng-container>\n      <ng-container *ngIf=\"filteredList?.length\">\n        <ng-container *ngIf=\"useVirtualScroll; else elseBlock\">\n          <cdk-virtual-scroll-viewport\n            [itemSize]=\"itemSize\"\n            [minBufferPx]=\"itemSize * 5\"\n            [maxBufferPx]=\"itemSize * 10\"\n            [style.height.px]=\"400\">\n            <ng-container *cdkVirtualFor=\"let item of filteredList\">\n              <button ngcMenuItem [autoClose]=\"type !== 'multi-list'\" (click)=\"setTextContent( item )\">\n                <ngc-truncate>{{ item | empty }}</ngc-truncate>\n              </button>\n            </ng-container>\n          </cdk-virtual-scroll-viewport>\n        </ng-container>\n        <ng-template #elseBlock>\n          <ng-container *ngFor=\"let item of filteredList\">\n            <button ngcMenuItem [autoClose]=\"type !== 'multi-list'\" (click)=\"setTextContent( item )\">\n              <ngc-truncate>{{ item | empty }}</ngc-truncate>\n            </button>\n          </ng-container>\n        </ng-template>\n      </ng-container>\n    </ng-template>\n  </ngc-menu-content>\n</ngc-menu>\n\n<div\n  mwlResizable\n  #excellCellContent\n  [attr.contenteditable]=\"!readonly || undefined\"\n  [resizeEdges]=\"{ bottom: true, right: true }\"\n  (resizing)=\"onResizing( $event )\"\n  (input)=\"onInput( $event )\"\n  (keydown)=\"onKeydown( $event )\"\n  (focus)=\"onFocus( $event )\"\n  (blur)=\"onBlur( $event ); formControl?.markAsTouched();\">\n  <ng-content></ng-content>\n</div>\n\n<button\n  ngcBasicButton\n  ngcDatePicker\n  dateOnly\n  icon=\"calendar\"\n  *ngIf=\"!readonly && type === 'date'\"\n  [ngcTooltip]=\"'NGC.LABEL.PICK' | translate\"\n  (picked)=\"onDatePicked( $event )\">\n</button>\n\n<button\n  ngcBasicButton\n  *ngIf=\"!readonly && list?.length\"\n  [icon]=\"excellCellList?.isOpened ? 'chevron-up' : 'chevron-down'\"\n  [ngcTooltip]=\"'NGC.LABEL.PICK' | translate\"\n  [ngcMenuTriggerFor]=\"excellCellList\">\n</button>\n\n<input style=\"display: none\" tabindex=\"-1\" [formControl]=\"formControl\" [ngModel]=\"textContent\" />\n", styles: [".ngc-excel-cell:not(.ngc-menu){padding:0!important;position:relative}.ngc-excel-cell:not(.ngc-menu):after{content:attr(data-error);background-color:var(--ngc-color-danger-default, #ff3130);color:var(--ngc-color-neutral-white, #fff);font-size:11px;bottom:0;right:0;position:absolute;padding:2px 5px;font-weight:400;opacity:0;visibility:hidden;transition:opacity .1s ease-in-out}.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--focusing{border-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--invalid.ngc-excel-cell--touched,.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--invalid.ngc-excel-cell--dirty{border-color:var(--ngc-color-danger-default, #ff3130)}.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--invalid.ngc-excel-cell--touched:not(.ngc-excel-cell--focusing):after,.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--invalid.ngc-excel-cell--dirty:not(.ngc-excel-cell--focusing):after{visibility:visible;opacity:1}.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--has-list>div{margin-right:40px}.ngc-excel-cell:not(.ngc-menu)>div{position:absolute;inset:10px;white-space:nowrap;overflow:hidden}.ngc-excel-cell:not(.ngc-menu)>button{position:absolute;right:10px;top:50%;transform:translateY(-50%)}\n"], dependencies: [{ kind: "directive", type: i2.ResizableDirective, selector: "[mwlResizable]", inputs: ["resizeEdges", "enableGhostResize", "resizeSnapGrid", "resizeCursors", "resizeCursorPrecision", "ghostElementPositioning", "allowNegativeResizes", "mouseMoveThrottleMS", "validateResize"], outputs: ["resizeStart", "resizing", "resizeEnd"], exportAs: ["mwlResizable"] }, { kind: "directive", type: i3.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i3.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i3.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i5.AutoFocusDirective, selector: "[autoFocusOn]", inputs: ["delay", "disableControl", "disabled", "autoFocusOn"], exportAs: ["autoFocusOn"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i7.NgcMenuComponent, selector: "ngc-menu", inputs: ["title", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "hasScrollBar", "hasBackdrop", "hasArrow", "hasButtonClose", "closeOnClickOutside", "scrollBarMode", "class"], outputs: ["opened", "closed", "backdropPress", "loadMore"] }, { kind: "component", type: i8.NgcMenuItemComponent, selector: "button[ngcMenuItem]", inputs: ["icon", "color", "iconColor", "dotColor", "autoClose", "active", "disabled", "focusing"], outputs: ["activeChange", "click", "focus", "blur"] }, { kind: "component", type: i9.NgcMenuHeaderComponent, selector: "ngc-menu-header", inputs: ["class"] }, { kind: "directive", type: i10.NgcMenuHeaderDirective, selector: "[ngcMenuHeader]", exportAs: ["ngcMenuHeader"] }, { kind: "component", type: i11.NgcMenuContentComponent, selector: "ngc-menu-content", inputs: ["class"] }, { kind: "directive", type: i12.NgcMenuContentDirective, selector: "[ngcMenuContent]", exportAs: ["ngcMenuContent"] }, { kind: "directive", type: i13.NgcMenuTriggerForDirective, selector: "[ngcMenuTriggerFor]", inputs: ["panelClass", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "programmatically", "autoFit", "disabled", "hasBackdrop", "closeOnClickOutside", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "menuData", "ngcMenuTriggerFor"], outputs: ["menuInit", "menuOpened", "menuClosed", "menuBackdropPress"], exportAs: ["ngcMenuTriggerFor"] }, { kind: "component", type: i14.NgcBasicButtonComponent, selector: "button[ngcBasicButton]", inputs: ["type", "color", "icon", "iconSize", "disabled", "alignment"] }, { kind: "component", type: i15.NgcSearchBoxComponent, selector: "ngc-search-box", inputs: ["data", "suggestion", "ngModel", "name", "label", "placeholder", "prefixIcon", "suffixIcon", "searchKey", "fieldName", "fieldDescription", "fieldImage", "fieldAvatar", "itemSize", "debounceTime", "trim", "displayNotFound", "disableControl", "disabled", "readonly", "required", "autoFocusOn", "autoReset", "notFoundData", "formControl", "appearance", "errorDisplayMode", "filterPredicate"], outputs: ["ngModelChange", "searching", "cleared", "filtered", "suggested", "prefixIconClicked", "suffixIconClicked", "input", "focus", "blur"] }, { kind: "directive", type: i16.NgcDatePickerDirective, selector: "[ngcDatePicker]", inputs: ["panelClass", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "maxDateRange", "dateRange", "dateOnly", "showTime", "disabled", "clearable", "hasBackdrop", "closeOnClickOutside", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "direction", "position", "pickedDate", "minDate", "maxDate"], outputs: ["opened", "closed", "picked", "backdropPress"], exportAs: ["ngcDatePicker"] }, { kind: "component", type: i17.NgcTruncateComponent, selector: "ngc-truncate", inputs: ["limitLine", "disabled", "tooltip", "ngcTooltip"] }, { kind: "directive", type: i18.NgcTooltipDirective, selector: "[ngcTooltip]", inputs: ["panelClass", "backdropClass", "tooltipColor", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "once", "programmatically", "autoClose", "hasBackdrop", "closeOnClickOutside", "openDelay", "closeDelay", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "triggerType", "ngcTooltip"], outputs: ["opened", "closed"], exportAs: ["ngcTooltip"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: i5.EmptyPipe, name: "empty" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcExcelCellComponent.prototype, "itemSize", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExcelCellComponent.prototype, "required", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExcelCellComponent.prototype, "readonly", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExcelCellComponent.prototype, "focusing", void 0);
NgcExcelCellComponent = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        ElementRef,
        TranslateService,
        DateTimeConfig])
], NgcExcelCellComponent);
export { NgcExcelCellComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExcelCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'td[ngcExcelCell]', host: { class: 'ngc-excel-cell' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ngc-menu\n  #excellCellList\n  class=\"ngc-excel-cell\"\n  width=\"280px\"\n  maxHeight=\"400px\"\n  [hasScrollBar]=\"!useVirtualScroll\">\n  <ngc-menu-header>\n    <ng-template ngcMenuHeader>\n      <ngc-search-box autoFocusOn [searchKey]=\"null\" [data]=\"list\"></ngc-search-box>\n    </ng-template>\n  </ngc-menu-header>\n  <ngc-menu-content>\n    <ng-template ngcMenuContent>\n      <ng-container *ngTemplateOutlet=\"searchBox?.notFoundTemplate\"></ng-container>\n      <ng-container *ngIf=\"filteredList?.length\">\n        <ng-container *ngIf=\"useVirtualScroll; else elseBlock\">\n          <cdk-virtual-scroll-viewport\n            [itemSize]=\"itemSize\"\n            [minBufferPx]=\"itemSize * 5\"\n            [maxBufferPx]=\"itemSize * 10\"\n            [style.height.px]=\"400\">\n            <ng-container *cdkVirtualFor=\"let item of filteredList\">\n              <button ngcMenuItem [autoClose]=\"type !== 'multi-list'\" (click)=\"setTextContent( item )\">\n                <ngc-truncate>{{ item | empty }}</ngc-truncate>\n              </button>\n            </ng-container>\n          </cdk-virtual-scroll-viewport>\n        </ng-container>\n        <ng-template #elseBlock>\n          <ng-container *ngFor=\"let item of filteredList\">\n            <button ngcMenuItem [autoClose]=\"type !== 'multi-list'\" (click)=\"setTextContent( item )\">\n              <ngc-truncate>{{ item | empty }}</ngc-truncate>\n            </button>\n          </ng-container>\n        </ng-template>\n      </ng-container>\n    </ng-template>\n  </ngc-menu-content>\n</ngc-menu>\n\n<div\n  mwlResizable\n  #excellCellContent\n  [attr.contenteditable]=\"!readonly || undefined\"\n  [resizeEdges]=\"{ bottom: true, right: true }\"\n  (resizing)=\"onResizing( $event )\"\n  (input)=\"onInput( $event )\"\n  (keydown)=\"onKeydown( $event )\"\n  (focus)=\"onFocus( $event )\"\n  (blur)=\"onBlur( $event ); formControl?.markAsTouched();\">\n  <ng-content></ng-content>\n</div>\n\n<button\n  ngcBasicButton\n  ngcDatePicker\n  dateOnly\n  icon=\"calendar\"\n  *ngIf=\"!readonly && type === 'date'\"\n  [ngcTooltip]=\"'NGC.LABEL.PICK' | translate\"\n  (picked)=\"onDatePicked( $event )\">\n</button>\n\n<button\n  ngcBasicButton\n  *ngIf=\"!readonly && list?.length\"\n  [icon]=\"excellCellList?.isOpened ? 'chevron-up' : 'chevron-down'\"\n  [ngcTooltip]=\"'NGC.LABEL.PICK' | translate\"\n  [ngcMenuTriggerFor]=\"excellCellList\">\n</button>\n\n<input style=\"display: none\" tabindex=\"-1\" [formControl]=\"formControl\" [ngModel]=\"textContent\" />\n", styles: [".ngc-excel-cell:not(.ngc-menu){padding:0!important;position:relative}.ngc-excel-cell:not(.ngc-menu):after{content:attr(data-error);background-color:var(--ngc-color-danger-default, #ff3130);color:var(--ngc-color-neutral-white, #fff);font-size:11px;bottom:0;right:0;position:absolute;padding:2px 5px;font-weight:400;opacity:0;visibility:hidden;transition:opacity .1s ease-in-out}.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--focusing{border-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--invalid.ngc-excel-cell--touched,.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--invalid.ngc-excel-cell--dirty{border-color:var(--ngc-color-danger-default, #ff3130)}.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--invalid.ngc-excel-cell--touched:not(.ngc-excel-cell--focusing):after,.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--invalid.ngc-excel-cell--dirty:not(.ngc-excel-cell--focusing):after{visibility:visible;opacity:1}.ngc-excel-cell:not(.ngc-menu).ngc-excel-cell--has-list>div{margin-right:40px}.ngc-excel-cell:not(.ngc-menu)>div{position:absolute;inset:10px;white-space:nowrap;overflow:hidden}.ngc-excel-cell:not(.ngc-menu)>button{position:absolute;right:10px;top:50%;transform:translateY(-50%)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.TranslateService }, { type: i19.DateTimeConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DATE_TIME_CONFIG]
                }] }]; }, propDecorators: { styleWidth: [{
                type: HostBinding,
                args: ['style.width']
            }], styleMinWidth: [{
                type: HostBinding,
                args: ['style.minWidth']
            }], styleHeight: [{
                type: HostBinding,
                args: ['style.height']
            }], styleMinHeight: [{
                type: HostBinding,
                args: ['style.minHeight']
            }], classFocusing: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--focusing']
            }], classValid: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--valid']
            }], classInvalid: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--invalid']
            }], classDirty: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--dirty']
            }], classPristine: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--pristine']
            }], classTouched: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--touched']
            }], classUntouched: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--untouched']
            }], classEnable: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--enabled']
            }], classDisabled: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--disabled']
            }], classHasList: [{
                type: HostBinding,
                args: ['class.ngc-excel-cell--has-list']
            }], attrDataError: [{
                type: HostBinding,
                args: ['attr.data-error']
            }], excellCellContent: [{
                type: ViewChild,
                args: ['excellCellContent']
            }], searchBox: [{
                type: ViewChild,
                args: [NgcSearchBoxComponent]
            }], list: [{
                type: Input
            }], textContent: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], focusing: [{
                type: Input
            }], type: [{
                type: Input
            }], textContentChange: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWV4Y2VsLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdGFibGUvZXhjZWwtdGFibGUvbmdjLWV4Y2VsLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdGFibGUvZXhjZWwtdGFibGUvbmdjLWV4Y2VsLWNlbGwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUN4QixZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFDM0IsdUJBQXVCLEVBQy9CLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFDOUMsTUFBTSxFQUFFLFdBQVcsRUFDbkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQWtDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFDTixZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFDekMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUNuRCxZQUFZLEVBQ0YsTUFBTSxPQUFPLENBQUM7QUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLElBQUksWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjdEQsSUFBTSxxQkFBcUIsR0FBM0IsTUFBTSxxQkFBcUI7SUFrR2pDOzs7Ozs7T0FNRztJQUNILFlBQ1MsTUFBeUIsRUFDekIsV0FBdUIsRUFD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QWM7c0JBRGpCLFdBQVc7dUJBQUUsaUJBQWlCO2dCQUkzQixhQUFhO3NCQURoQixXQUFXO3VCQUFFLGdDQUFnQztnQkFJMUMsVUFBVTtzQkFEYixXQUFXO3VCQUFFLDZCQUE2QjtnQkFJdkMsWUFBWTtzQkFEZixXQUFXO3VCQUFFLCtCQUErQjtnQkFJekMsVUFBVTtzQkFEYixXQUFXO3VCQUFFLDZCQUE2QjtnQkFJdkMsYUFBYTtzQkFEaEIsV0FBVzt1QkFBRSxnQ0FBZ0M7Z0JBSTFDLFlBQVk7c0JBRGYsV0FBVzt1QkFBRSwrQkFBK0I7Z0JBSXpDLGNBQWM7c0JBRGpCLFdBQVc7dUJBQUUsaUNBQWlDO2dCQUkzQyxXQUFXO3NCQURkLFdBQVc7dUJBQUUsK0JBQStCO2dCQUl6QyxhQUFhO3NCQURoQixXQUFXO3VCQUFFLGdDQUFnQztnQkFJMUMsWUFBWTtzQkFEZixXQUFXO3VCQUFFLGdDQUFnQztnQkFJMUMsYUFBYTtzQkFEaEIsV0FBVzt1QkFBRSxpQkFBaUI7Z0JBR1UsaUJBQWlCO3NCQUF6RCxTQUFTO3VCQUFFLG1CQUFtQjtnQkFDWSxTQUFTO3NCQUFuRCxTQUFTO3VCQUFFLHFCQUFxQjtnQkFFakIsSUFBSTtzQkFBbkIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUMwQyxRQUFRO3NCQUF2RCxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBRVcsaUJBQWlCO3NCQUFqQyxNQUFNO2dCQUNVLEtBQUs7c0JBQXJCLE1BQU07Z0JBQ1UsSUFBSTtzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsXG5cdE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdG9yUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgT3B0aW9uYWwsXG5cdEluamVjdCwgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sU3RhdHVzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgUmVzaXplRXZlbnQgfSBmcm9tICdhbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7XG5cdERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbiwgQ29lcmNlTnVtYmVyLFxuXHREYXRlVGltZUNvbmZpZywgREFURV9USU1FX0NPTkZJRywgdW50aWxDbXBEZXN0cm95ZWQsXG5cdFVuc3Vic2NyaWJlclxuLCBJT2JqZWN0IH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgUkVHRVgsIENPTlNUQU5UIGFzIEFQUF9DT05TVEFOVCB9IGZyb20gJ0ByZXNvdXJjZXMnO1xuXG5pbXBvcnQgeyBOZ2NTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICcuLi8uLi9uZ2Mtc2VhcmNoLWJveCc7XG5pbXBvcnQgeyBOZ2NJRGF0ZVBpY2tlclBpY2tlZEV2ZW50IH0gZnJvbSAnLi4vLi4vbmdjLWRhdGUtcGlja2VyJztcblxuZXhwb3J0IHR5cGUgTmdjSUV4Y2VsQ2VsbFR5cGUgPSAnd2Vic2l0ZScgfCAnZW1haWwnIHwgJ251bWJlcicgfCAncGhvbmUnIHwgJ2RhdGUnIHwgJ2xpc3QnIHwgJ3N0cmljdC1saXN0JyB8ICdtdWx0aS1saXN0JztcblxuQFVuc3Vic2NyaWJlcigpXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAndGRbbmdjRXhjZWxDZWxsXScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLWV4Y2VsLWNlbGwuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLWV4Y2VsLWNlbGwuc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy1leGNlbC1jZWxsJyB9LFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0V4Y2VsQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUud2lkdGgnIClcblx0Z2V0IHN0eWxlV2lkdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMud2lkdGg7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS5taW5XaWR0aCcgKVxuXHRnZXQgc3R5bGVNaW5XaWR0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy53aWR0aDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLmhlaWdodCcgKVxuXHRnZXQgc3R5bGVIZWlnaHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaGVpZ2h0OyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUubWluSGVpZ2h0JyApXG5cdGdldCBzdHlsZU1pbkhlaWdodCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5oZWlnaHQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZXhjZWwtY2VsbC0tZm9jdXNpbmcnIClcblx0Z2V0IGNsYXNzRm9jdXNpbmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmZvY3VzaW5nOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWV4Y2VsLWNlbGwtLXZhbGlkJyApXG5cdGdldCBjbGFzc1ZhbGlkKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuaXNJbnZhbGlkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWV4Y2VsLWNlbGwtLWludmFsaWQnIClcblx0Z2V0IGNsYXNzSW52YWxpZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXNJbnZhbGlkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWV4Y2VsLWNlbGwtLWRpcnR5JyApXG5cdGdldCBjbGFzc0RpcnR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5mb3JtQ29udHJvbC5kaXJ0eTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1leGNlbC1jZWxsLS1wcmlzdGluZScgKVxuXHRnZXQgY2xhc3NQcmlzdGluZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2wucHJpc3RpbmU7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZXhjZWwtY2VsbC0tdG91Y2hlZCcgKVxuXHRnZXQgY2xhc3NUb3VjaGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5mb3JtQ29udHJvbC50b3VjaGVkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWV4Y2VsLWNlbGwtLXVudG91Y2hlZCcgKVxuXHRnZXQgY2xhc3NVbnRvdWNoZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmZvcm1Db250cm9sLnVudG91Y2hlZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1leGNlbC1jZWxsLS1lbmFibGVkJyApXG5cdGdldCBjbGFzc0VuYWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2wuZW5hYmxlZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1leGNlbC1jZWxsLS1kaXNhYmxlZCcgKVxuXHRnZXQgY2xhc3NEaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZXhjZWwtY2VsbC0taGFzLWxpc3QnIClcblx0Z2V0IGNsYXNzSGFzTGlzdCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5saXN0Py5sZW5ndGg7IH1cblxuXHRASG9zdEJpbmRpbmcoICdhdHRyLmRhdGEtZXJyb3InIClcblx0Z2V0IGF0dHJEYXRhRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZXJyb3I7IH1cblxuXHRAVmlld0NoaWxkKCAnZXhjZWxsQ2VsbENvbnRlbnQnICkgcHVibGljIGV4Y2VsbENlbGxDb250ZW50OiBFbGVtZW50UmVmPGFueT47XG5cdEBWaWV3Q2hpbGQoIE5nY1NlYXJjaEJveENvbXBvbmVudCApIHB1YmxpYyBzZWFyY2hCb3g6IE5nY1NlYXJjaEJveENvbXBvbmVudDtcblxuXHRASW5wdXQoKSBwdWJsaWMgbGlzdDogYW55W107XG5cdEBJbnB1dCgpIHB1YmxpYyB0ZXh0Q29udGVudDogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBpdGVtU2l6ZTogbnVtYmVyID0gNDA7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZm9jdXNpbmc6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyB0eXBlOiBOZ2NJRXhjZWxDZWxsVHlwZTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHRleHRDb250ZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGZvY3VzOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBibHVyOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuXHRwdWJsaWMgd2lkdGg6IHN0cmluZztcblx0cHVibGljIGhlaWdodDogc3RyaW5nO1xuXHRwdWJsaWMgZXJyb3I6IHN0cmluZztcblx0cHVibGljIGlzSW52YWxpZDogYm9vbGVhbjtcblx0cHVibGljIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cdHByaXZhdGUgX3RyYW5zbGF0ZU1lc3NhZ2VzOiBJT2JqZWN0PHN0cmluZz4gPSB7XG5cdFx0cmVxdWlyZWRcdFx0OiB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdOR0MuTUVTU0FHRS5WQUxVRV9SRVFVSVJFRCcgKSxcblx0XHR3ZWJzaXRlXHRcdFx0OiB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdOR0MuTUVTU0FHRS5XRUJTSVRFX1ZBTFVFX0lOVkFMSUQnICksXG5cdFx0ZW1haWxcdFx0XHQ6IHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ05HQy5NRVNTQUdFLkVNQUlMX1ZBTFVFX0lOVkFMSUQnICksXG5cdFx0bnVtYmVyXHRcdFx0OiB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdOR0MuTUVTU0FHRS5OVU1CRVJfVkFMVUVfSU5WQUxJRCcgKSxcblx0XHRwaG9uZVx0XHRcdDogdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnTkdDLk1FU1NBR0UuUEhPTkVfVkFMVUVfSU5WQUxJRCcgKSxcblx0XHQnc3RyaWN0LWxpc3QnXHQ6IHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ05HQy5NRVNTQUdFLlZBTFVFX05PVF9JTl9MSVNUJyApLFxuXHRcdGRlZmF1bHRcdFx0XHQ6IHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ05HQy5NRVNTQUdFLlZBTFVFX05PVF9JTl9MSVNUJyApLFxuXHR9O1xuXG5cdGdldCByb3dJbmRleCgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdHJldHVybiBfLmluZGV4T2YoIGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbiwgZWwucGFyZW50Tm9kZSApO1xuXHR9XG5cblx0Z2V0IGNvbHVtbkluZGV4KCk6IG51bWJlciB7XG5cdFx0Y29uc3QgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0cmV0dXJuIF8uaW5kZXhPZiggZWwucGFyZW50Tm9kZSwgZWwgKTtcblx0fVxuXG5cdGdldCBmaWx0ZXJlZExpc3QoKTogYW55W10ge1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaEJveD8uZmlsdGVyZWREYXRhO1xuXHR9XG5cblx0Z2V0IHVzZVZpcnR1YWxTY3JvbGwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyZWRMaXN0Py5sZW5ndGggPj0gQVBQX0NPTlNUQU5ULlVTRV9WSVJUVUFMX1NDUk9MTF9XSVRIO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0NoYW5nZURldGVjdG9yUmVmfSBfY2RSZWZcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IF90cmFuc2xhdGVTZXJ2aWNlXG5cdCAqIEBwYXJhbSB7RGF0ZVRpbWVDb25maWd9IF9kYXRlVGltZUNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBfdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBEQVRFX1RJTUVfQ09ORklHICkgcHJpdmF0ZSBfZGF0ZVRpbWVDb25maWc6IERhdGVUaW1lQ29uZmlnXG5cdCkge31cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZvcm1Db250cm9sLnN0YXR1c0NoYW5nZXNcblx0XHQucGlwZSggdW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKSApXG5cdFx0LnN1YnNjcmliZSggKCBzdGF0dXM6IEZvcm1Db250cm9sU3RhdHVzICkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHRsZXQgZXJyb3I6IHN0cmluZztcblxuXHRcdFx0XHRpZiAoIHRoaXMuZm9ybUNvbnRyb2w/LmVycm9ycyApIHtcblx0XHRcdFx0XHRsZXQgdHlwZTogc3RyaW5nID0gdGhpcy50eXBlO1xuXG5cdFx0XHRcdFx0aWYgKCB0aGlzLmZvcm1Db250cm9sLmVycm9ycy5yZXF1aXJlZCApIHR5cGUgPSAncmVxdWlyZWQnO1xuXG5cdFx0XHRcdFx0ZXJyb3IgPSB0aGlzLl90cmFuc2xhdGVNZXNzYWdlc1sgdHlwZSBdIHx8IHRoaXMuX3RyYW5zbGF0ZU1lc3NhZ2VzLmRlZmF1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmVycm9yID0gZXJyb3I7XG5cdFx0XHRcdHRoaXMuaXNJbnZhbGlkID0gc3RhdHVzID09PSAnSU5WQUxJRCc7XG5cblx0XHRcdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgdmFsaWRhdG9yRm5zOiBWYWxpZGF0b3JGbltdID0gW107XG5cblx0XHR0aGlzLnJlcXVpcmVkICYmIHZhbGlkYXRvckZucy5wdXNoKCBWYWxpZGF0b3JzLnJlcXVpcmVkICk7XG5cblx0XHRzd2l0Y2ggKCB0aGlzLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd3ZWJzaXRlJzpcblx0XHRcdFx0dmFsaWRhdG9yRm5zLnB1c2goIFZhbGlkYXRvcnMucGF0dGVybiggUkVHRVguV0VCU0lURSApICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHR2YWxpZGF0b3JGbnMucHVzaCggVmFsaWRhdG9ycy5wYXR0ZXJuKCBSRUdFWC5FTUFJTCApICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0dmFsaWRhdG9yRm5zLnB1c2goIFZhbGlkYXRvcnMucGF0dGVybiggUkVHRVguTlVNQkVSICkgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwaG9uZSc6XG5cdFx0XHRcdHZhbGlkYXRvckZucy5wdXNoKCBWYWxpZGF0b3JzLnBhdHRlcm4oIFJFR0VYLlBIT05FICkgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdHJpY3QtbGlzdCc6XG5cdFx0XHRcdHRoaXMubGlzdCAmJiB2YWxpZGF0b3JGbnMucHVzaCggVmFsaWRhdG9ycy5wYXR0ZXJuKCBuZXcgUmVnRXhwKCBgXigke18uam9pbiggdGhpcy5saXN0LCAnfCcgKX0pJGAgKSApICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsaWRhdG9ycyggdmFsaWRhdG9yRm5zICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKCB0aGlzLnRleHRDb250ZW50ICkge1xuXHRcdFx0dGhpcy5leGNlbGxDZWxsQ29udGVudC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMudGV4dENvbnRlbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudGV4dENvbnRlbnQgPSB0aGlzLmV4Y2VsbENlbGxDb250ZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xuXHRcdH1cblxuXHRcdHRoaXMudGV4dENvbnRlbnQgJiYgc2V0VGltZW91dCggKCkgPT4gdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtSZXNpemVFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvblJlc2l6aW5nKCBldmVudDogUmVzaXplRXZlbnQgKSB7XG5cdFx0Y29uc3Qgd2lkdGg6IG51bWJlciA9IGV2ZW50LnJlY3RhbmdsZS53aWR0aDtcblx0XHRjb25zdCBoZWlnaHQ6IG51bWJlciA9IGV2ZW50LnJlY3RhbmdsZS5oZWlnaHQ7XG5cblx0XHR0aGlzLndpZHRoID0gYCR7d2lkdGggPiAyMDAgPyB3aWR0aCA6IDIwMH1weGA7XG5cdFx0dGhpcy5oZWlnaHQgPSBgJHtoZWlnaHQgPiA0MCA/IGhlaWdodCA6IDQwfXB4YDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uSW5wdXQoIGV2ZW50OiBFdmVudCApIHtcblx0XHR0aGlzLnRleHRDb250ZW50ID0gKCBldmVudC50YXJnZXQgYXMgTm9kZSApLnRleHRDb250ZW50O1xuXG5cdFx0dGhpcy50ZXh0Q29udGVudENoYW5nZS5lbWl0KCB0aGlzLnRleHRDb250ZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvbktleWRvd24oIGV2ZW50OiBLZXlib2FyZEV2ZW50ICkge1xuXHRcdGlmICggZXZlbnQua2V5ICE9PSAnRW50ZXInICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLmV4Y2VsbENlbGxDb250ZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25Gb2N1cyggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdHRoaXMuZm9jdXNpbmcgPSB0cnVlO1xuXG5cdFx0dGhpcy5mb2N1cy5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25CbHVyKCBldmVudDogRXZlbnQgKSB7XG5cdFx0dGhpcy5mb2N1c2luZyA9IGZhbHNlO1xuXG5cdFx0dGhpcy5ibHVyLmVtaXQoIGV2ZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtXR0NJRGF0ZVBpY2tlclBpY2tlZEV2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uRGF0ZVBpY2tlZCggZXZlbnQ6IE5nY0lEYXRlUGlja2VyUGlja2VkRXZlbnQgKSB7XG5cdFx0dGhpcy5zZXRUZXh0Q29udGVudCggZXZlbnQuZGF0ZS5mb3JtYXQoIHRoaXMuX2RhdGVUaW1lQ29uZmlnLmRhdGVGb3JtYXQgfHwgQVBQX0NPTlNUQU5ULkRBVEVfRk9STUFUICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dENvbnRlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzZXRUZXh0Q29udGVudCggdGV4dENvbnRlbnQ6IHN0cmluZyApIHtcblx0XHRpZiAoIHRoaXMudHlwZSA9PT0gJ211bHRpLWxpc3QnICYmIHRoaXMudGV4dENvbnRlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdGxldCB2YWx1ZUFycjogc3RyaW5nW10gPSBfLmNoYWluKCB0aGlzLnRleHRDb250ZW50IClcblx0XHRcdC5yZXBsYWNlKCAvLCAvZywgJywnIClcblx0XHRcdC5zcGxpdCggJywnIClcblx0XHRcdC51bmlxKClcblx0XHRcdC52YWx1ZSgpO1xuXG5cdFx0XHR2YWx1ZUFyciA9IF8udW5pb24oIHZhbHVlQXJyLCBbIHRleHRDb250ZW50IF0gKTtcblx0XHRcdHRleHRDb250ZW50ID0gdmFsdWVBcnI/Lmxlbmd0aCA/IF8uYXJyYXlKb2luKCB2YWx1ZUFyciwgJywgJyApIDogdGV4dENvbnRlbnQ7XG5cdFx0fVxuXG5cdFx0dGhpcy50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuXG5cdFx0dGhpcy5leGNlbGxDZWxsQ29udGVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLmV4Y2VsbENlbGxDb250ZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvblxuXHRcdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoICdpbnNlcnRIVE1MJywgZmFsc2UsIHRleHRDb250ZW50IHx8ICcnICk7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiIsIjxuZ2MtbWVudVxuICAjZXhjZWxsQ2VsbExpc3RcbiAgY2xhc3M9XCJuZ2MtZXhjZWwtY2VsbFwiXG4gIHdpZHRoPVwiMjgwcHhcIlxuICBtYXhIZWlnaHQ9XCI0MDBweFwiXG4gIFtoYXNTY3JvbGxCYXJdPVwiIXVzZVZpcnR1YWxTY3JvbGxcIj5cbiAgPG5nYy1tZW51LWhlYWRlcj5cbiAgICA8bmctdGVtcGxhdGUgbmdjTWVudUhlYWRlcj5cbiAgICAgIDxuZ2Mtc2VhcmNoLWJveCBhdXRvRm9jdXNPbiBbc2VhcmNoS2V5XT1cIm51bGxcIiBbZGF0YV09XCJsaXN0XCI+PC9uZ2Mtc2VhcmNoLWJveD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L25nYy1tZW51LWhlYWRlcj5cbiAgPG5nYy1tZW51LWNvbnRlbnQ+XG4gICAgPG5nLXRlbXBsYXRlIG5nY01lbnVDb250ZW50PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNlYXJjaEJveD8ubm90Rm91bmRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbHRlcmVkTGlzdD8ubGVuZ3RoXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1c2VWaXJ0dWFsU2Nyb2xsOyBlbHNlIGVsc2VCbG9ja1wiPlxuICAgICAgICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnRcbiAgICAgICAgICAgIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiXG4gICAgICAgICAgICBbbWluQnVmZmVyUHhdPVwiaXRlbVNpemUgKiA1XCJcbiAgICAgICAgICAgIFttYXhCdWZmZXJQeF09XCJpdGVtU2l6ZSAqIDEwXCJcbiAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiNDAwXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVyZWRMaXN0XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbmdjTWVudUl0ZW0gW2F1dG9DbG9zZV09XCJ0eXBlICE9PSAnbXVsdGktbGlzdCdcIiAoY2xpY2spPVwic2V0VGV4dENvbnRlbnQoIGl0ZW0gKVwiPlxuICAgICAgICAgICAgICAgIDxuZ2MtdHJ1bmNhdGU+e3sgaXRlbSB8IGVtcHR5IH19PC9uZ2MtdHJ1bmNhdGU+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlcmVkTGlzdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuZ2NNZW51SXRlbSBbYXV0b0Nsb3NlXT1cInR5cGUgIT09ICdtdWx0aS1saXN0J1wiIChjbGljayk9XCJzZXRUZXh0Q29udGVudCggaXRlbSApXCI+XG4gICAgICAgICAgICAgIDxuZ2MtdHJ1bmNhdGU+e3sgaXRlbSB8IGVtcHR5IH19PC9uZ2MtdHJ1bmNhdGU+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbmdjLW1lbnUtY29udGVudD5cbjwvbmdjLW1lbnU+XG5cbjxkaXZcbiAgbXdsUmVzaXphYmxlXG4gICNleGNlbGxDZWxsQ29udGVudFxuICBbYXR0ci5jb250ZW50ZWRpdGFibGVdPVwiIXJlYWRvbmx5IHx8IHVuZGVmaW5lZFwiXG4gIFtyZXNpemVFZGdlc109XCJ7IGJvdHRvbTogdHJ1ZSwgcmlnaHQ6IHRydWUgfVwiXG4gIChyZXNpemluZyk9XCJvblJlc2l6aW5nKCAkZXZlbnQgKVwiXG4gIChpbnB1dCk9XCJvbklucHV0KCAkZXZlbnQgKVwiXG4gIChrZXlkb3duKT1cIm9uS2V5ZG93biggJGV2ZW50IClcIlxuICAoZm9jdXMpPVwib25Gb2N1cyggJGV2ZW50IClcIlxuICAoYmx1cik9XCJvbkJsdXIoICRldmVudCApOyBmb3JtQ29udHJvbD8ubWFya0FzVG91Y2hlZCgpO1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuPGJ1dHRvblxuICBuZ2NCYXNpY0J1dHRvblxuICBuZ2NEYXRlUGlja2VyXG4gIGRhdGVPbmx5XG4gIGljb249XCJjYWxlbmRhclwiXG4gICpuZ0lmPVwiIXJlYWRvbmx5ICYmIHR5cGUgPT09ICdkYXRlJ1wiXG4gIFtuZ2NUb29sdGlwXT1cIidOR0MuTEFCRUwuUElDSycgfCB0cmFuc2xhdGVcIlxuICAocGlja2VkKT1cIm9uRGF0ZVBpY2tlZCggJGV2ZW50IClcIj5cbjwvYnV0dG9uPlxuXG48YnV0dG9uXG4gIG5nY0Jhc2ljQnV0dG9uXG4gICpuZ0lmPVwiIXJlYWRvbmx5ICYmIGxpc3Q/Lmxlbmd0aFwiXG4gIFtpY29uXT1cImV4Y2VsbENlbGxMaXN0Py5pc09wZW5lZCA/ICdjaGV2cm9uLXVwJyA6ICdjaGV2cm9uLWRvd24nXCJcbiAgW25nY1Rvb2x0aXBdPVwiJ05HQy5MQUJFTC5QSUNLJyB8IHRyYW5zbGF0ZVwiXG4gIFtuZ2NNZW51VHJpZ2dlckZvcl09XCJleGNlbGxDZWxsTGlzdFwiPlxuPC9idXR0b24+XG5cbjxpbnB1dCBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiB0YWJpbmRleD1cIi0xXCIgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCIgW25nTW9kZWxdPVwidGV4dENvbnRlbnRcIiAvPlxuIl19