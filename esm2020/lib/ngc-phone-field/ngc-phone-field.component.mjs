import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, forwardRef, Output, EventEmitter, ViewChild, HostBinding } from '@angular/core';
import { FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isSupportedCountry, parsePhoneNumberFromString } from 'libphonenumber-js';
import _ from 'lodash';
import { DefaultValue, CoerceBoolean, Memoize } from '@core';
import { PHONE_COUNTRIES, REGEX } from '@resources';
import { NgcSearchBoxComponent } from '../ngc-search-box';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "angular-core";
import * as i3 from "ng-lazyload-image";
import * as i4 from "@angular/forms";
import * as i5 from "../ngc-menu/menu/ngc-menu.component";
import * as i6 from "../ngc-menu/menu-item/ngc-menu-item.component";
import * as i7 from "../ngc-menu/menu-header/ngc-menu-header.component";
import * as i8 from "../ngc-menu/menu-header/ngc-menu-header.directive";
import * as i9 from "../ngc-menu/menu-content/ngc-menu-content.component";
import * as i10 from "../ngc-menu/menu-content/ngc-menu-content.directive";
import * as i11 from "../ngc-menu/menu-trigger-for/ngc-menu-trigger-for.directive";
import * as i12 from "../ngc-menu/menu-item-prefix/ngc-menu-item-prefix.directive";
import * as i13 from "../ngc-form-field/form-field/ngc-form-field.component";
import * as i14 from "../ngc-form-field/form-field-input/ngc-form-field-input.directive";
import * as i15 from "../ngc-icon/ngc-icon.component";
import * as i16 from "../ngc-truncate/ngc-truncate.component";
import * as i17 from "../ngc-search-box/ngc-search-box.component";
import * as i18 from "../ngc-button/basic-button/ngc-basic-button.component";
import * as i19 from "../ngc-divider/ngc-divider.component";
import * as i20 from "@ngx-translate/core";
import * as i21 from "../core/pipes/example-phone-number.pipe";
import * as i22 from "../core/pipes/flag-image.pipe";
function filterPhoneCountry({ name, code, dialCode }, searchQuery) {
    return _.search(name, searchQuery)
        || _.search(code, searchQuery)
        || _.search(dialCode, searchQuery);
}
export const Ngc_PHONE_FIELD_VALIDATION = Validators.compose([
    Validators.maxLength(255),
    Validators.pattern(REGEX.PHONE),
]);
export class NgcPhoneFieldComponent {
    constructor() {
        this.appearance = 'default';
        this.errorDisplayMode = 'default';
        this.phoneFormControl = new FormControl(undefined, Ngc_PHONE_FIELD_VALIDATION);
        this.ngModelChange = new EventEmitter();
        this.countryCodeChanged = new EventEmitter();
        this.cleared = new EventEmitter();
        this.input = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.countryCode = 'VN';
        this.countryDialCode = '+84';
        this.PHONE_COUNTRIES = PHONE_COUNTRIES;
        this.filterPredicate = filterPhoneCountry;
        this._onTouchedCallback = () => { };
        this._onChangeCallback = (_v) => { };
    }
    get classDisabled() { return this.disabled; }
    set ngModel(value) {
        this.phone = value?.phone;
        this.countryCode = value?.countryCode || this.countryCode;
        this.countryDialCode = this._getDialCode(this.countryCode);
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.required || !this.required)
            return;
        this.phoneFormControl.setValidators([
            this.required ? Validators.required : undefined,
            Ngc_PHONE_FIELD_VALIDATION,
        ]);
    }
    /**
     * @constructor
     * @param {NgcIPhoneValue} value
     */
    writeValue(value) {
        if (value === this._innerValue)
            return;
        this._innerValue = value;
    }
    /**
     * @constructor
     * @param {Function} fn
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @constructor
     * @param {Function} fn
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @return {void}
     */
    onChanged() {
        if (this.phone) {
            this.phone = this.autoFormatNational
                ? this._getNationalPhoneNumber(this.phone, this.countryCode)
                : this.phone;
            const value = { phone: this.phone, countryCode: this.countryCode };
            if (_.isEqual(this._innerValue, value))
                return;
            this._innerValue = value;
        }
        else {
            this._innerValue = null;
        }
        this._onChangeCallback(this._innerValue);
    }
    /**
     * @return {void}
     */
    onTouched() {
        this._onTouchedCallback();
    }
    /**
     * @param {CountryCode} code
     * @param {string} dialCode
     * @return {void}
     */
    changeCountryCode(code, dialCode) {
        this.countryCode = code;
        this.countryDialCode = dialCode;
        this.onChanged();
        this.countryCodeChanged.emit(this.countryCode);
    }
    /**
     * @param {string} phone
     * @param {CountryCode} countryCode
     * @return {string}
     */
    _getNationalPhoneNumber(phone, countryCode) {
        if (!phone || !isSupportedCountry(countryCode))
            return phone;
        const phoneNumber = parsePhoneNumberFromString(phone, countryCode);
        return phoneNumber?.formatNational() || phone;
    }
    /**
     * @param {CountryCode} countryCode
     * @return {CountryCallingCode}
     */
    _getDialCode(countryCode) {
        return _.find(PHONE_COUNTRIES, { code: countryCode })?.dialCode;
    }
}
NgcPhoneFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPhoneFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcPhoneFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcPhoneFieldComponent, selector: "ngc-phone-field", inputs: { name: "name", label: "label", placeholder: "placeholder", disabled: "disabled", readonly: "readonly", required: "required", autoFocusOn: "autoFocusOn", autoReset: "autoReset", autoFormatNational: "autoFormatNational", appearance: "appearance", errorDisplayMode: "errorDisplayMode", phoneFormControl: "phoneFormControl", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange", countryCodeChanged: "countryCodeChanged", cleared: "cleared", input: "input", focus: "focus", blur: "blur" }, host: { properties: { "class.ngc-phone-field--disabled": "this.classDisabled" }, classAttribute: "ngc-phone-field" }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgcPhoneFieldComponent),
            multi: true,
        }], viewQueries: [{ propertyName: "searchBox", first: true, predicate: NgcSearchBoxComponent, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<!-- Preview Mixin -->\n<ng-template #preview>\n  <img class=\"ngc-phone-field__country-picker__preview-image\"\n       [style.width.px]=\"26\"\n       [style.minWidth.px]=\"26\"\n       [style.maxWidth.px]=\"26\"\n       [lazyLoad]=\"countryCode | flagImage\" />\n</ng-template>\n\n<!-- Country Menu -->\n<ngc-menu #countryMenu\n          width=\"200px\"\n          maxHeight=\"300px\"\n          [title]=\"'NGC.PLACEHOLDER.SELECT_COUNTRY' | translate\">\n\n  <ngc-menu-header>\n    <ng-template ngcMenuHeader>\n      <ngc-search-box [data]=\"PHONE_COUNTRIES\"\n                      [filterPredicate]=\"filterPredicate\"\n                      (filtered)=\"filteredPhoneCountries = $any($event)\">\n      </ngc-search-box>\n    </ng-template>\n  </ngc-menu-header>\n\n  <ngc-menu-content>\n    <ng-template ngcMenuContent>\n      <button ngcMenuItem\n              *ngFor=\"let phoneCountry of filteredPhoneCountries; trackBy: 'code' | trackByFn\"\n              [active]=\"countryCode === phoneCountry?.code\"\n              (click)=\"changeCountryCode(phoneCountry?.code, phoneCountry?.dialCode)\">\n        <div ngcMenuItemPrefix>\n          <img [style.width.px]=\"26\"\n               [style.minWidth.px]=\"26\"\n               [style.maxWidth.px]=\"26\"\n               [lazyLoad]=\"phoneCountry?.code | flagImage\" />\n        </div>\n        <ngc-truncate>\n          {{ phoneCountry?.dialCode | empty }} {{ phoneCountry?.name | empty }}\n        </ngc-truncate>\n      </button>\n    </ng-template>\n  </ngc-menu-content>\n</ngc-menu>\n\n<!-- Phone Field Label -->\n<label class=\"ngc-phone-field__label\" ngcTruncate [attr.required]=\"required || undefined\">\n  {{ label }}\n</label>\n\n<!-- Phone Field Input Wrapper -->\n<div class=\"ngc-phone-field-wrapper\">\n  <ngc-form-field class=\"ngc-phone-field__input\"\n                  [appearance]=\"appearance\"\n                  [errorDisplayMode]=\"errorDisplayMode\">\n\n    <div ngcFormFieldPrefix>\n      <div class=\"ngc-phone-field__country-picker\">\n        <ng-container *ngIf=\"readonly; else elseBlock\">\n          <ng-container *ngTemplateOutlet=\"preview\"></ng-container>\n        </ng-container>\n        <ng-template #elseBlock>\n          <button ngcBasicButton\n                  tabindex=\"-1\"\n                  [disabled]=\"disabled\"\n                  [ngcMenuTriggerFor]=\"countryMenu\">\n            <ng-container *ngTemplateOutlet=\"preview\"></ng-container>\n            <ngc-icon size=\"16px\"\n                      [name]=\"countryMenu?.isOpened ? 'chevron-up' : 'chevron-down'\">\n            </ngc-icon>\n          </button>\n        </ng-template>\n        <ngc-divider class=\"ngc-phone-field__country-picker__divider\" vertical></ngc-divider>\n        <div class=\"ngc-phone-field__country-picker__preview-text\">\n          {{ countryDialCode }}\n        </div>\n      </div>\n    </div>\n\n    <input ngcFormFieldInput\n           clearable\n           [name]=\"name || ('NGC.LABEL.PHONE_NUMBER' | translate)\"\n           [autoFocusOn]=\"autoFocusOn\"\n           [autoReset]=\"autoReset\"\n           [disableControl]=\"disabled\"\n           [readonly]=\"readonly\"\n           [required]=\"required\"\n           [formControl]=\"phoneFormControl\"\n           [placeholder]=\"placeholder || (countryCode | examplePhoneNumber) || ('NGC.PLACEHOLDER.TYPE_PHONE' | translate)\"\n           [(ngModel)]=\"phone\"\n           (ngModelChange)=\"onChanged()\"\n           (cleared)=\"cleared?.emit($event)\"\n           (input)=\"input?.emit($event); onTouched();\"\n           (focus)=\"focus?.emit($event)\"\n           (blur)=\"blur?.emit($event); onTouched();\" />\n\n  </ngc-form-field>\n</div>\n", styles: [".ngc-phone-field{display:flex;flex-direction:column}.ngc-phone-field .ngc-phone-field-wrapper{display:flex}.ngc-phone-field .ngc-phone-field__label{margin-bottom:5px}.ngc-phone-field .ngc-phone-field__country-picker{display:flex;align-items:center}.ngc-phone-field .ngc-phone-field__country-picker .ngc-phone-field__country-picker__preview-image{margin-right:5px}.ngc-phone-field .ngc-phone-field__country-picker .ngc-phone-field__country-picker__preview-text{white-space:nowrap;font-weight:var(--ngc-font-weight-semibold, 600)}.ngc-phone-field .ngc-phone-field__country-picker .ngc-phone-field__country-picker__divider{margin-left:10px;margin-right:10px;height:18px}.ngc-phone-field .ngc-phone-field__input{width:100%;min-width:0}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.AutoFocusDirective, selector: "[autoFocusOn]", inputs: ["delay", "disableControl", "disabled", "autoFocusOn"], exportAs: ["autoFocusOn"] }, { kind: "directive", type: i2.AutoResetDirective, selector: "[autoReset]", inputs: ["formControl", "delay", "autoReset"], exportAs: ["autoReset"] }, { kind: "directive", type: i2.DisableControlDirective, selector: "[disableControl]", inputs: ["disableControl"], exportAs: ["disableControl"] }, { kind: "directive", type: i3.LazyLoadImageDirective, selector: "[lazyLoad]", inputs: ["lazyLoad", "defaultImage", "errorImage", "scrollTarget", "customObservable", "offset", "useSrcset", "decode", "debug"], outputs: ["onStateChange"] }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i5.NgcMenuComponent, selector: "ngc-menu", inputs: ["title", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "hasScrollBar", "hasBackdrop", "hasArrow", "hasButtonClose", "closeOnClickOutside", "scrollBarMode", "class"], outputs: ["opened", "closed", "backdropPress", "loadMore"] }, { kind: "component", type: i6.NgcMenuItemComponent, selector: "button[ngcMenuItem]", inputs: ["icon", "color", "iconColor", "dotColor", "autoClose", "active", "disabled", "focusing"], outputs: ["activeChange", "click", "focus", "blur"] }, { kind: "component", type: i7.NgcMenuHeaderComponent, selector: "ngc-menu-header", inputs: ["class"] }, { kind: "directive", type: i8.NgcMenuHeaderDirective, selector: "[ngcMenuHeader]", exportAs: ["ngcMenuHeader"] }, { kind: "component", type: i9.NgcMenuContentComponent, selector: "ngc-menu-content", inputs: ["class"] }, { kind: "directive", type: i10.NgcMenuContentDirective, selector: "[ngcMenuContent]", exportAs: ["ngcMenuContent"] }, { kind: "directive", type: i11.NgcMenuTriggerForDirective, selector: "[ngcMenuTriggerFor]", inputs: ["panelClass", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "programmatically", "autoFit", "disabled", "hasBackdrop", "closeOnClickOutside", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "menuData", "ngcMenuTriggerFor"], outputs: ["menuInit", "menuOpened", "menuClosed", "menuBackdropPress"], exportAs: ["ngcMenuTriggerFor"] }, { kind: "directive", type: i12.NgcMenuItemPrefixDirective, selector: "[ngcMenuItemPrefix]", exportAs: ["ngcMenuItemPrefix"] }, { kind: "component", type: i13.NgcFormFieldComponent, selector: "ngc-form-field", inputs: ["label", "dotColor", "required", "disabled", "readonly", "focusing", "fakeInput", "multiErrors", "displayColorDot", "togglePasswordVisibility", "checkWeekPassword", "appearance", "errorDisplayMode"], outputs: ["dotColorChange"] }, { kind: "directive", type: i14.NgcFormFieldInputDirective, selector: "[ngcFormFieldInput]", inputs: ["ngModel", "name", "type", "textSize", "min", "max", "trim", "disableControl", "disabled", "required", "focusing", "readonly", "clearable", "saveable", "cancelable", "formControl", "alignment", "convertType", "timeFormat"], outputs: ["ngModelChange", "changed", "saved", "cancelled", "cleared", "pasted", "converted"], exportAs: ["ngcFormFieldInput"] }, { kind: "component", type: i15.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }, { kind: "component", type: i16.NgcTruncateComponent, selector: "ngc-truncate", inputs: ["limitLine", "disabled", "tooltip", "ngcTooltip"] }, { kind: "component", type: i17.NgcSearchBoxComponent, selector: "ngc-search-box", inputs: ["data", "suggestion", "ngModel", "name", "label", "placeholder", "prefixIcon", "suffixIcon", "searchKey", "fieldName", "fieldDescription", "fieldImage", "fieldAvatar", "itemSize", "debounceTime", "trim", "displayNotFound", "disableControl", "disabled", "readonly", "required", "autoFocusOn", "autoReset", "notFoundData", "formControl", "appearance", "errorDisplayMode", "filterPredicate"], outputs: ["ngModelChange", "searching", "cleared", "filtered", "suggested", "prefixIconClicked", "suffixIconClicked", "input", "focus", "blur"] }, { kind: "component", type: i18.NgcBasicButtonComponent, selector: "button[ngcBasicButton]", inputs: ["type", "color", "icon", "iconSize", "disabled", "alignment"] }, { kind: "component", type: i19.NgcDividerComponent, selector: "ngc-divider", inputs: ["vertical"] }, { kind: "pipe", type: i20.TranslatePipe, name: "translate" }, { kind: "pipe", type: i2.EmptyPipe, name: "empty" }, { kind: "pipe", type: i2.TrackByFnPipe, name: "trackByFn" }, { kind: "pipe", type: i21.ExamplePhoneNumberPipe, name: "examplePhoneNumber" }, { kind: "pipe", type: i22.FlagImagePipe, name: "flagImage" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPhoneFieldComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPhoneFieldComponent.prototype, "readonly", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPhoneFieldComponent.prototype, "required", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPhoneFieldComponent.prototype, "autoFocusOn", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPhoneFieldComponent.prototype, "autoReset", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPhoneFieldComponent.prototype, "autoFormatNational", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcPhoneFieldComponent.prototype, "appearance", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcPhoneFieldComponent.prototype, "errorDisplayMode", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", FormControl)
], NgcPhoneFieldComponent.prototype, "phoneFormControl", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], NgcPhoneFieldComponent.prototype, "_getNationalPhoneNumber", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcPhoneFieldComponent.prototype, "_getDialCode", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPhoneFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-phone-field', host: { class: 'ngc-phone-field' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NgcPhoneFieldComponent),
                            multi: true,
                        }], template: "<!-- Preview Mixin -->\n<ng-template #preview>\n  <img class=\"ngc-phone-field__country-picker__preview-image\"\n       [style.width.px]=\"26\"\n       [style.minWidth.px]=\"26\"\n       [style.maxWidth.px]=\"26\"\n       [lazyLoad]=\"countryCode | flagImage\" />\n</ng-template>\n\n<!-- Country Menu -->\n<ngc-menu #countryMenu\n          width=\"200px\"\n          maxHeight=\"300px\"\n          [title]=\"'NGC.PLACEHOLDER.SELECT_COUNTRY' | translate\">\n\n  <ngc-menu-header>\n    <ng-template ngcMenuHeader>\n      <ngc-search-box [data]=\"PHONE_COUNTRIES\"\n                      [filterPredicate]=\"filterPredicate\"\n                      (filtered)=\"filteredPhoneCountries = $any($event)\">\n      </ngc-search-box>\n    </ng-template>\n  </ngc-menu-header>\n\n  <ngc-menu-content>\n    <ng-template ngcMenuContent>\n      <button ngcMenuItem\n              *ngFor=\"let phoneCountry of filteredPhoneCountries; trackBy: 'code' | trackByFn\"\n              [active]=\"countryCode === phoneCountry?.code\"\n              (click)=\"changeCountryCode(phoneCountry?.code, phoneCountry?.dialCode)\">\n        <div ngcMenuItemPrefix>\n          <img [style.width.px]=\"26\"\n               [style.minWidth.px]=\"26\"\n               [style.maxWidth.px]=\"26\"\n               [lazyLoad]=\"phoneCountry?.code | flagImage\" />\n        </div>\n        <ngc-truncate>\n          {{ phoneCountry?.dialCode | empty }} {{ phoneCountry?.name | empty }}\n        </ngc-truncate>\n      </button>\n    </ng-template>\n  </ngc-menu-content>\n</ngc-menu>\n\n<!-- Phone Field Label -->\n<label class=\"ngc-phone-field__label\" ngcTruncate [attr.required]=\"required || undefined\">\n  {{ label }}\n</label>\n\n<!-- Phone Field Input Wrapper -->\n<div class=\"ngc-phone-field-wrapper\">\n  <ngc-form-field class=\"ngc-phone-field__input\"\n                  [appearance]=\"appearance\"\n                  [errorDisplayMode]=\"errorDisplayMode\">\n\n    <div ngcFormFieldPrefix>\n      <div class=\"ngc-phone-field__country-picker\">\n        <ng-container *ngIf=\"readonly; else elseBlock\">\n          <ng-container *ngTemplateOutlet=\"preview\"></ng-container>\n        </ng-container>\n        <ng-template #elseBlock>\n          <button ngcBasicButton\n                  tabindex=\"-1\"\n                  [disabled]=\"disabled\"\n                  [ngcMenuTriggerFor]=\"countryMenu\">\n            <ng-container *ngTemplateOutlet=\"preview\"></ng-container>\n            <ngc-icon size=\"16px\"\n                      [name]=\"countryMenu?.isOpened ? 'chevron-up' : 'chevron-down'\">\n            </ngc-icon>\n          </button>\n        </ng-template>\n        <ngc-divider class=\"ngc-phone-field__country-picker__divider\" vertical></ngc-divider>\n        <div class=\"ngc-phone-field__country-picker__preview-text\">\n          {{ countryDialCode }}\n        </div>\n      </div>\n    </div>\n\n    <input ngcFormFieldInput\n           clearable\n           [name]=\"name || ('NGC.LABEL.PHONE_NUMBER' | translate)\"\n           [autoFocusOn]=\"autoFocusOn\"\n           [autoReset]=\"autoReset\"\n           [disableControl]=\"disabled\"\n           [readonly]=\"readonly\"\n           [required]=\"required\"\n           [formControl]=\"phoneFormControl\"\n           [placeholder]=\"placeholder || (countryCode | examplePhoneNumber) || ('NGC.PLACEHOLDER.TYPE_PHONE' | translate)\"\n           [(ngModel)]=\"phone\"\n           (ngModelChange)=\"onChanged()\"\n           (cleared)=\"cleared?.emit($event)\"\n           (input)=\"input?.emit($event); onTouched();\"\n           (focus)=\"focus?.emit($event)\"\n           (blur)=\"blur?.emit($event); onTouched();\" />\n\n  </ngc-form-field>\n</div>\n", styles: [".ngc-phone-field{display:flex;flex-direction:column}.ngc-phone-field .ngc-phone-field-wrapper{display:flex}.ngc-phone-field .ngc-phone-field__label{margin-bottom:5px}.ngc-phone-field .ngc-phone-field__country-picker{display:flex;align-items:center}.ngc-phone-field .ngc-phone-field__country-picker .ngc-phone-field__country-picker__preview-image{margin-right:5px}.ngc-phone-field .ngc-phone-field__country-picker .ngc-phone-field__country-picker__preview-text{white-space:nowrap;font-weight:var(--ngc-font-weight-semibold, 600)}.ngc-phone-field .ngc-phone-field__country-picker .ngc-phone-field__country-picker__divider{margin-left:10px;margin-right:10px;height:18px}.ngc-phone-field .ngc-phone-field__input{width:100%;min-width:0}\n"] }]
        }], propDecorators: { classDisabled: [{
                type: HostBinding,
                args: ['class.ngc-phone-field--disabled']
            }], searchBox: [{
                type: ViewChild,
                args: [NgcSearchBoxComponent]
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
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
            }], autoFormatNational: [{
                type: Input
            }], appearance: [{
                type: Input
            }], errorDisplayMode: [{
                type: Input
            }], phoneFormControl: [{
                type: Input
            }], ngModelChange: [{
                type: Output
            }], countryCodeChanged: [{
                type: Output
            }], cleared: [{
                type: Output
            }], input: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], ngModel: [{
                type: Input
            }], _getNationalPhoneNumber: [], _getDialCode: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXBob25lLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXBob25lLWZpZWxkL25nYy1waG9uZS1maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1waG9uZS1maWVsZC9uZ2MtcGhvbmUtZmllbGQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ25DLHVCQUF1QixFQUFFLFVBQVUsRUFDcEIsTUFBTSxFQUFFLFlBQVksRUFDbkMsU0FBUyxFQUFFLFdBQVcsRUFDdEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNOLFdBQVcsRUFBRSxVQUFVLEVBQ0QsaUJBQWlCLEVBQ3ZDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUNOLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUQsU0FBUyxrQkFBa0IsQ0FBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFpQixFQUFFLFdBQW1CO0lBQ3hGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBRSxJQUFJLEVBQUUsV0FBVyxDQUFFO1dBQ2hDLENBQUMsQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFFLFdB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bkQsU0FBUzt1QkFBRSxxQkFBcUI7Z0JBRWpCLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixXQUFXO3NCQUEzQyxLQUFLO2dCQUMyQixTQUFTO3NCQUF6QyxLQUFLO2dCQUMyQixrQkFBa0I7c0JBQWxELEtBQUs7Z0JBQzBCLFVBQVU7c0JBQXpDLEtBQUs7Z0JBQzBCLGdCQUFnQjtzQkFBL0MsS0FBSztnQkFDMEIsZ0JBQWdCO3NCQUEvQyxLQUFLO2dCQUVXLGFBQWE7c0JBQTdCLE1BQU07Z0JBQ1Usa0JBQWtCO3NCQUFsQyxNQUFNO2dCQUNVLE9BQU87c0JBQXZCLE1BQU07Z0JBQ1UsS0FBSztzQkFBckIsTUFBTTtnQkFDVSxLQUFLO3NCQUFyQixNQUFNO2dCQUNVLElBQUk7c0JBQXBCLE1BQU07Z0JBWUgsT0FBTztzQkFEVixLQUFLO2dCQTZGRSx1QkFBdUIsTUFhdkIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcblx0Vmlld0NoaWxkLCBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBWYWxpZGF0b3JGbixcblx0Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG5cdGlzU3VwcG9ydGVkQ291bnRyeSwgUGhvbmVOdW1iZXIsIENvdW50cnlDb2RlLFxuXHRwYXJzZVBob25lTnVtYmVyRnJvbVN0cmluZywgQ291bnRyeUNhbGxpbmdDb2RlXG59IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbiwgTWVtb2l6ZSB9IGZyb20gJ0Bjb3JlJztcblxuaW1wb3J0IHsgUEhPTkVfQ09VTlRSSUVTLCBSRUdFWCB9IGZyb20gJ0ByZXNvdXJjZXMnO1xuXG5pbXBvcnQgeyBOZ2NJRm9ybUZpZWxkQXBwZWFyYW5jZSwgTmdjSUZvcm1GaWVsZEVycm9yRGlzcGxheU1vZGUgfSBmcm9tICcuLi9uZ2MtZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBOZ2NTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICcuLi9uZ2Mtc2VhcmNoLWJveCc7XG5cbmludGVyZmFjZSBJUGhvbmVDb3VudHJ5IHtcblx0bmFtZTogc3RyaW5nO1xuXHRjb2RlOiBDb3VudHJ5Q29kZTtcblx0ZGlhbENvZGU6IENvdW50cnlDYWxsaW5nQ29kZTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUGhvbmVDb3VudHJ5KCB7IG5hbWUsIGNvZGUsIGRpYWxDb2RlIH06IElQaG9uZUNvdW50cnksIHNlYXJjaFF1ZXJ5OiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdHJldHVybiBfLnNlYXJjaCggbmFtZSwgc2VhcmNoUXVlcnkgKVxuXHRcdHx8IF8uc2VhcmNoKCBjb2RlLCBzZWFyY2hRdWVyeSApXG5cdFx0fHwgXy5zZWFyY2goIGRpYWxDb2RlLCBzZWFyY2hRdWVyeSApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nY0lQaG9uZVZhbHVlIHtcblx0cGhvbmU6IHN0cmluZztcblx0Y291bnRyeUNvZGU6IENvdW50cnlDb2RlO1xufVxuXG5leHBvcnQgY29uc3QgTmdjX1BIT05FX0ZJRUxEX1ZBTElEQVRJT046IFZhbGlkYXRvckZuID0gVmFsaWRhdG9ycy5jb21wb3NlKFtcblx0VmFsaWRhdG9ycy5tYXhMZW5ndGgoIDI1NSApLFxuXHRWYWxpZGF0b3JzLnBhdHRlcm4oIFJFR0VYLlBIT05FICksXG5dKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1waG9uZS1maWVsZCcsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLXBob25lLWZpZWxkLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1waG9uZS1maWVsZC5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLXBob25lLWZpZWxkJyB9LFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlXHRcdDogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0dXNlRXhpc3RpbmdcdDogZm9yd2FyZFJlZiggKCkgPT4gTmdjUGhvbmVGaWVsZENvbXBvbmVudCApLFxuXHRcdG11bHRpXHRcdDogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nY1Bob25lRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtcGhvbmUtZmllbGQtLWRpc2FibGVkJyApXG5cdGdldCBjbGFzc0Rpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5kaXNhYmxlZDsgfVxuXG5cdEBWaWV3Q2hpbGQoIE5nY1NlYXJjaEJveENvbXBvbmVudCApIHB1YmxpYyBzZWFyY2hCb3g6IE5nY1NlYXJjaEJveENvbXBvbmVudDtcblxuXHRASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGF1dG9Gb2N1c09uOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhdXRvUmVzZXQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGF1dG9Gb3JtYXROYXRpb25hbDogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBhcHBlYXJhbmNlOiBOZ2NJRm9ybUZpZWxkQXBwZWFyYW5jZSA9ICdkZWZhdWx0Jztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBlcnJvckRpc3BsYXlNb2RlOiBOZ2NJRm9ybUZpZWxkRXJyb3JEaXNwbGF5TW9kZSA9ICdkZWZhdWx0Jztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBwaG9uZUZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCggdW5kZWZpbmVkLCBOZ2NfUEhPTkVfRklFTERfVkFMSURBVElPTiApO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPE5nY0lQaG9uZVZhbHVlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjSVBob25lVmFsdWU+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY291bnRyeUNvZGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q291bnRyeUNvZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudHJ5Q29kZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjbGVhcmVkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBpbnB1dDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgZm9jdXM6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGJsdXI6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG5cdHB1YmxpYyBwaG9uZTogc3RyaW5nO1xuXHRwdWJsaWMgY291bnRyeUNvZGU6IENvdW50cnlDb2RlID0gJ1ZOJztcblx0cHVibGljIGNvdW50cnlEaWFsQ29kZTogYW55ID0gJys4NCc7XG5cdHB1YmxpYyBQSE9ORV9DT1VOVFJJRVM6IHR5cGVvZiBQSE9ORV9DT1VOVFJJRVMgPSBQSE9ORV9DT1VOVFJJRVM7XG5cdHB1YmxpYyBmaWx0ZXJlZFBob25lQ291bnRyaWVzOiB0eXBlb2YgUEhPTkVfQ09VTlRSSUVTO1xuXHRwdWJsaWMgZmlsdGVyUHJlZGljYXRlOiAoIGRhdGE6IElQaG9uZUNvdW50cnksIHNlYXJjaFF1ZXJ5OiBzdHJpbmcgKSA9PiBib29sZWFuID0gZmlsdGVyUGhvbmVDb3VudHJ5O1xuXG5cdHByaXZhdGUgX2lubmVyVmFsdWU6IE5nY0lQaG9uZVZhbHVlO1xuXG5cdEBJbnB1dCgpXG5cdHNldCBuZ01vZGVsKCB2YWx1ZTogTmdjSVBob25lVmFsdWUgKSB7XG5cdFx0dGhpcy5waG9uZSA9IHZhbHVlPy5waG9uZTtcblx0XHR0aGlzLmNvdW50cnlDb2RlID0gdmFsdWU/LmNvdW50cnlDb2RlIHx8IHRoaXMuY291bnRyeUNvZGU7XG5cdFx0dGhpcy5jb3VudHJ5RGlhbENvZGUgPSB0aGlzLl9nZXREaWFsQ29kZSggdGhpcy5jb3VudHJ5Q29kZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggIWNoYW5nZXMucmVxdWlyZWQgfHwgIXRoaXMucmVxdWlyZWQgKSByZXR1cm47XG5cblx0XHR0aGlzLnBob25lRm9ybUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhbXG5cdFx0XHR0aGlzLnJlcXVpcmVkID8gVmFsaWRhdG9ycy5yZXF1aXJlZCA6IHVuZGVmaW5lZCxcblx0XHRcdE5nY19QSE9ORV9GSUVMRF9WQUxJREFUSU9OLFxuXHRcdF0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge05nY0lQaG9uZVZhbHVlfSB2YWx1ZVxuXHQgKi9cblx0cHVibGljIHdyaXRlVmFsdWUoIHZhbHVlOiBOZ2NJUGhvbmVWYWx1ZSApIHtcblx0XHRpZiAoIHZhbHVlID09PSB0aGlzLl9pbm5lclZhbHVlICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5faW5uZXJWYWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuXHQgKi9cblx0cHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoIGZuOiBGdW5jdGlvbiApIHtcblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG5cdCAqL1xuXHRwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoIGZuOiBGdW5jdGlvbiApIHtcblx0XHR0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25DaGFuZ2VkKCkge1xuXHRcdGlmICggdGhpcy5waG9uZSApIHtcblx0XHRcdHRoaXMucGhvbmUgPSB0aGlzLmF1dG9Gb3JtYXROYXRpb25hbFxuXHRcdFx0XHQ/IHRoaXMuX2dldE5hdGlvbmFsUGhvbmVOdW1iZXIoIHRoaXMucGhvbmUsIHRoaXMuY291bnRyeUNvZGUgKVxuXHRcdFx0XHQ6IHRoaXMucGhvbmU7XG5cblx0XHRcdGNvbnN0IHZhbHVlOiBOZ2NJUGhvbmVWYWx1ZSA9IHsgcGhvbmU6IHRoaXMucGhvbmUsIGNvdW50cnlDb2RlOiB0aGlzLmNvdW50cnlDb2RlIH07XG5cblx0XHRcdGlmICggXy5pc0VxdWFsKCB0aGlzLl9pbm5lclZhbHVlLCB2YWx1ZSApICkgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLl9pbm5lclZhbHVlID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2lubmVyVmFsdWUgPSBudWxsO1xuXHRcdH1cblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soIHRoaXMuX2lubmVyVmFsdWUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uVG91Y2hlZCgpIHtcblx0XHR0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Q291bnRyeUNvZGV9IGNvZGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRpYWxDb2RlXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2hhbmdlQ291bnRyeUNvZGUoIGNvZGU6IENvdW50cnlDb2RlLCBkaWFsQ29kZTogc3RyaW5nICkge1xuXHRcdHRoaXMuY291bnRyeUNvZGUgPSBjb2RlO1xuXHRcdHRoaXMuY291bnRyeURpYWxDb2RlID0gZGlhbENvZGU7XG5cblx0XHR0aGlzLm9uQ2hhbmdlZCgpO1xuXHRcdHRoaXMuY291bnRyeUNvZGVDaGFuZ2VkLmVtaXQoIHRoaXMuY291bnRyeUNvZGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGhvbmVcblx0ICogQHBhcmFtIHtDb3VudHJ5Q29kZX0gY291bnRyeUNvZGVcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwcml2YXRlIF9nZXROYXRpb25hbFBob25lTnVtYmVyKCBwaG9uZTogc3RyaW5nLCBjb3VudHJ5Q29kZTogQ291bnRyeUNvZGUgKTogc3RyaW5nIHtcblx0XHRpZiAoICFwaG9uZSB8fCAhaXNTdXBwb3J0ZWRDb3VudHJ5KCBjb3VudHJ5Q29kZSApICkgcmV0dXJuIHBob25lO1xuXG5cdFx0Y29uc3QgcGhvbmVOdW1iZXI6IFBob25lTnVtYmVyID0gcGFyc2VQaG9uZU51bWJlckZyb21TdHJpbmcoIHBob25lLCBjb3VudHJ5Q29kZSApO1xuXG5cdFx0cmV0dXJuIHBob25lTnVtYmVyPy5mb3JtYXROYXRpb25hbCgpIHx8IHBob25lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Q291bnRyeUNvZGV9IGNvdW50cnlDb2RlXG5cdCAqIEByZXR1cm4ge0NvdW50cnlDYWxsaW5nQ29kZX1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHJpdmF0ZSBfZ2V0RGlhbENvZGUoIGNvdW50cnlDb2RlOiBDb3VudHJ5Q29kZSApOiBDb3VudHJ5Q2FsbGluZ0NvZGUge1xuXHRcdHJldHVybiBfLmZpbmQoIFBIT05FX0NPVU5UUklFUywgeyBjb2RlOiBjb3VudHJ5Q29kZSB9ICk/LmRpYWxDb2RlO1xuXHR9XG5cblx0cHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cdHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IEZ1bmN0aW9uID0gKCBfdjogTmdjSVBob25lVmFsdWUgKSA9PiB7fTtcblxufVxuIiwiPCEtLSBQcmV2aWV3IE1peGluIC0tPlxuPG5nLXRlbXBsYXRlICNwcmV2aWV3PlxuICA8aW1nIGNsYXNzPVwibmdjLXBob25lLWZpZWxkX19jb3VudHJ5LXBpY2tlcl9fcHJldmlldy1pbWFnZVwiXG4gICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIjI2XCJcbiAgICAgICBbc3R5bGUubWluV2lkdGgucHhdPVwiMjZcIlxuICAgICAgIFtzdHlsZS5tYXhXaWR0aC5weF09XCIyNlwiXG4gICAgICAgW2xhenlMb2FkXT1cImNvdW50cnlDb2RlIHwgZmxhZ0ltYWdlXCIgLz5cbjwvbmctdGVtcGxhdGU+XG5cbjwhLS0gQ291bnRyeSBNZW51IC0tPlxuPG5nYy1tZW51ICNjb3VudHJ5TWVudVxuICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgIG1heEhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICBbdGl0bGVdPVwiJ05HQy5QTEFDRUhPTERFUi5TRUxFQ1RfQ09VTlRSWScgfCB0cmFuc2xhdGVcIj5cblxuICA8bmdjLW1lbnUtaGVhZGVyPlxuICAgIDxuZy10ZW1wbGF0ZSBuZ2NNZW51SGVhZGVyPlxuICAgICAgPG5nYy1zZWFyY2gtYm94IFtkYXRhXT1cIlBIT05FX0NPVU5UUklFU1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2ZpbHRlclByZWRpY2F0ZV09XCJmaWx0ZXJQcmVkaWNhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXJlZCk9XCJmaWx0ZXJlZFBob25lQ291bnRyaWVzID0gJGFueSgkZXZlbnQpXCI+XG4gICAgICA8L25nYy1zZWFyY2gtYm94PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbmdjLW1lbnUtaGVhZGVyPlxuXG4gIDxuZ2MtbWVudS1jb250ZW50PlxuICAgIDxuZy10ZW1wbGF0ZSBuZ2NNZW51Q29udGVudD5cbiAgICAgIDxidXR0b24gbmdjTWVudUl0ZW1cbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHBob25lQ291bnRyeSBvZiBmaWx0ZXJlZFBob25lQ291bnRyaWVzOyB0cmFja0J5OiAnY29kZScgfCB0cmFja0J5Rm5cIlxuICAgICAgICAgICAgICBbYWN0aXZlXT1cImNvdW50cnlDb2RlID09PSBwaG9uZUNvdW50cnk/LmNvZGVcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlQ291bnRyeUNvZGUocGhvbmVDb3VudHJ5Py5jb2RlLCBwaG9uZUNvdW50cnk/LmRpYWxDb2RlKVwiPlxuICAgICAgICA8ZGl2IG5nY01lbnVJdGVtUHJlZml4PlxuICAgICAgICAgIDxpbWcgW3N0eWxlLndpZHRoLnB4XT1cIjI2XCJcbiAgICAgICAgICAgICAgIFtzdHlsZS5taW5XaWR0aC5weF09XCIyNlwiXG4gICAgICAgICAgICAgICBbc3R5bGUubWF4V2lkdGgucHhdPVwiMjZcIlxuICAgICAgICAgICAgICAgW2xhenlMb2FkXT1cInBob25lQ291bnRyeT8uY29kZSB8IGZsYWdJbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmdjLXRydW5jYXRlPlxuICAgICAgICAgIHt7IHBob25lQ291bnRyeT8uZGlhbENvZGUgfCBlbXB0eSB9fSB7eyBwaG9uZUNvdW50cnk/Lm5hbWUgfCBlbXB0eSB9fVxuICAgICAgICA8L25nYy10cnVuY2F0ZT5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbmdjLW1lbnUtY29udGVudD5cbjwvbmdjLW1lbnU+XG5cbjwhLS0gUGhvbmUgRmllbGQgTGFiZWwgLS0+XG48bGFiZWwgY2xhc3M9XCJuZ2MtcGhvbmUtZmllbGRfX2xhYmVsXCIgbmdjVHJ1bmNhdGUgW2F0dHIucmVxdWlyZWRdPVwicmVxdWlyZWQgfHwgdW5kZWZpbmVkXCI+XG4gIHt7IGxhYmVsIH19XG48L2xhYmVsPlxuXG48IS0tIFBob25lIEZpZWxkIElucHV0IFdyYXBwZXIgLS0+XG48ZGl2IGNsYXNzPVwibmdjLXBob25lLWZpZWxkLXdyYXBwZXJcIj5cbiAgPG5nYy1mb3JtLWZpZWxkIGNsYXNzPVwibmdjLXBob25lLWZpZWxkX19pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCJcbiAgICAgICAgICAgICAgICAgIFtlcnJvckRpc3BsYXlNb2RlXT1cImVycm9yRGlzcGxheU1vZGVcIj5cblxuICAgIDxkaXYgbmdjRm9ybUZpZWxkUHJlZml4PlxuICAgICAgPGRpdiBjbGFzcz1cIm5nYy1waG9uZS1maWVsZF9fY291bnRyeS1waWNrZXJcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlYWRvbmx5OyBlbHNlIGVsc2VCbG9ja1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwcmV2aWV3XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgICA8YnV0dG9uIG5nY0Jhc2ljQnV0dG9uXG4gICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICBbbmdjTWVudVRyaWdnZXJGb3JdPVwiY291bnRyeU1lbnVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwcmV2aWV3XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmdjLWljb24gc2l6ZT1cIjE2cHhcIlxuICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImNvdW50cnlNZW51Py5pc09wZW5lZCA/ICdjaGV2cm9uLXVwJyA6ICdjaGV2cm9uLWRvd24nXCI+XG4gICAgICAgICAgICA8L25nYy1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmdjLWRpdmlkZXIgY2xhc3M9XCJuZ2MtcGhvbmUtZmllbGRfX2NvdW50cnktcGlja2VyX19kaXZpZGVyXCIgdmVydGljYWw+PC9uZ2MtZGl2aWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5nYy1waG9uZS1maWVsZF9fY291bnRyeS1waWNrZXJfX3ByZXZpZXctdGV4dFwiPlxuICAgICAgICAgIHt7IGNvdW50cnlEaWFsQ29kZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGlucHV0IG5nY0Zvcm1GaWVsZElucHV0XG4gICAgICAgICAgIGNsZWFyYWJsZVxuICAgICAgICAgICBbbmFtZV09XCJuYW1lIHx8ICgnTkdDLkxBQkVMLlBIT05FX05VTUJFUicgfCB0cmFuc2xhdGUpXCJcbiAgICAgICAgICAgW2F1dG9Gb2N1c09uXT1cImF1dG9Gb2N1c09uXCJcbiAgICAgICAgICAgW2F1dG9SZXNldF09XCJhdXRvUmVzZXRcIlxuICAgICAgICAgICBbZGlzYWJsZUNvbnRyb2xdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwicGhvbmVGb3JtQ29udHJvbFwiXG4gICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciB8fCAoY291bnRyeUNvZGUgfCBleGFtcGxlUGhvbmVOdW1iZXIpIHx8ICgnTkdDLlBMQUNFSE9MREVSLlRZUEVfUEhPTkUnIHwgdHJhbnNsYXRlKVwiXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwicGhvbmVcIlxuICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZWQoKVwiXG4gICAgICAgICAgIChjbGVhcmVkKT1cImNsZWFyZWQ/LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgIChpbnB1dCk9XCJpbnB1dD8uZW1pdCgkZXZlbnQpOyBvblRvdWNoZWQoKTtcIlxuICAgICAgICAgICAoZm9jdXMpPVwiZm9jdXM/LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgIChibHVyKT1cImJsdXI/LmVtaXQoJGV2ZW50KTsgb25Ub3VjaGVkKCk7XCIgLz5cblxuICA8L25nYy1mb3JtLWZpZWxkPlxuPC9kaXY+XG4iXX0=