import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, forwardRef, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import _ from 'lodash';
import { REGEX } from '@resources';
import { CoerceBoolean, DefaultValue, CoerceNumber } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "angular-core";
import * as i3 from "@angular/forms";
import * as i4 from "../ngc-form-field/form-field/ngc-form-field.component";
import * as i5 from "../ngc-form-field/form-field-input/ngc-form-field-input.directive";
export const Ngc_RANGE_INPUT_VALIDATION = Validators.compose([
    Validators.maxLength(255),
    Validators.pattern(REGEX.NUMBER),
]);
export class NgcRangeInputComponent {
    /**
     * @constructor
     * @param {TranslateService} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
        this.placeholder = '0';
        this.startRangeName = this._translateService.instant('Ngc.LABEL.START_RANGE');
        this.endRangeName = this._translateService.instant('Ngc.LABEL.END_RANGE');
        this.step = 1;
        this.appearance = 'default';
        this.errorDisplayMode = 'inline';
        this.startRangeFormControl = new FormControl(undefined, Ngc_RANGE_INPUT_VALIDATION);
        this.endRangeFormControl = new FormControl(undefined, Ngc_RANGE_INPUT_VALIDATION);
        this.ngModelChange = new EventEmitter();
        this._onTouchedCallback = () => { };
        this._onChangeCallback = (_v) => { };
    }
    set ngModel(value) {
        this.startRange = value && value[0];
        this.endRange = value && value[1];
    }
    get maxStartRange() {
        return !_.isNil(this.endRange) ? this.endRange - 1 : undefined;
    }
    get minEndRange() {
        return !_.isNil(this.startRange) ? this.startRange + 1 : undefined;
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.required || !this.required)
            return;
        this.startRangeFormControl.setValidators([
            this.required ? Validators.required : undefined,
            Ngc_RANGE_INPUT_VALIDATION,
        ]);
        this.endRangeFormControl.setValidators([
            this.required ? Validators.required : undefined,
            Ngc_RANGE_INPUT_VALIDATION,
        ]);
    }
    /**
     * @constructor
     * @param {number[]} value
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
    onStartRangeChanged() {
        if (!_.isFinite(this.startRange))
            return;
        if (_.isFinite(this.maxStartRange) && this.startRange >= this.endRange)
            this.startRange = this.maxStartRange;
        if (_.isFinite(this.min) && this.startRange < this.min)
            this.startRange = this.min;
        if (_.isFinite(this.max) && this.startRange > this.max)
            this.startRange = this.max;
        if (this.startRange === this.endRange)
            this.startRange = this.endRange - 1;
        this._innerValue = [this.startRange, this.endRange];
        this._onChangeCallback(this._innerValue);
    }
    /**
     * @return {void}
     */
    onEndRangeChanged() {
        if (!_.isFinite(this.endRange))
            return;
        if (_.isFinite(this.minEndRange) && this.startRange >= this.endRange)
            this.endRange = this.minEndRange;
        if (_.isFinite(this.min) && this.endRange < this.min)
            this.endRange = this.min;
        if (_.isFinite(this.max) && this.endRange > this.max)
            this.endRange = this.max;
        if (this.startRange === this.endRange)
            this.startRange = this.endRange - 1;
        this._innerValue = [this.startRange, this.endRange];
        this._onChangeCallback(this._innerValue);
    }
    /**
     * @return {void}
     */
    onTouched() {
        this._onTouchedCallback();
    }
}
NgcRangeInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRangeInputComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
NgcRangeInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcRangeInputComponent, selector: "ngc-range-input", inputs: { label: "label", placeholder: "placeholder", startRangeName: "startRangeName", endRangeName: "endRangeName", min: "min", max: "max", step: "step", disabled: "disabled", readonly: "readonly", required: "required", autoFocusOn: "autoFocusOn", appearance: "appearance", errorDisplayMode: "errorDisplayMode", startRangeFormControl: "startRangeFormControl", endRangeFormControl: "endRangeFormControl", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, host: { classAttribute: "ngc-range-input" }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgcRangeInputComponent),
            multi: true,
        }], usesOnChanges: true, ngImport: i0, template: "<!-- Range Input Label -->\n<label class=\"ngc-range-input__label\" ngcTruncate [attr.required]=\"required || undefined\">\n  {{ label }}\n</label>\n\n<!-- Range Input Wrapper -->\n<div class=\"ngc-range-input-wrapper\">\n\n  <!-- Start Range Field -->\n  <ngc-form-field class=\"ngc-range-input__form-field\" [errorDisplayMode]=\"errorDisplayMode\" [appearance]=\"appearance\">\n    <input ngcFormFieldInput type=\"number\" [step]=\"step\" [max]=\"maxStartRange\" [name]=\"startRangeName\"\n      [placeholder]=\"placeholder\" [required]=\"required\" [autoFocusOn]=\"autoFocusOn\" [readonly]=\"readonly\"\n      [formControl]=\"startRangeFormControl\" [disableControl]=\"disabled\" [(ngModel)]=\"startRange\"\n      (ngModelChange)=\"onStartRangeChanged()\" (input)=\"onTouched()\" (blur)=\"onTouched()\" />\n  </ngc-form-field>\n\n  <span class=\"ngc-range-input__divider\">-</span>\n\n  <!-- End Range Field -->\n  <ngc-form-field class=\"ngc-range-input__form-field\" [errorDisplayMode]=\"errorDisplayMode\" [appearance]=\"appearance\">\n    <input ngcFormFieldInput type=\"number\" [step]=\"step\" [min]=\"minEndRange\" [name]=\"endRangeName\"\n      [placeholder]=\"placeholder\" [required]=\"required\" [readonly]=\"readonly\" [formControl]=\"endRangeFormControl\"\n      [disableControl]=\"disabled\" [(ngModel)]=\"endRange\" (ngModelChange)=\"onEndRangeChanged()\" (input)=\"onTouched()\"\n      (blur)=\"onTouched()\" />\n  </ngc-form-field>\n\n</div>", styles: [".ngc-range-input{display:flex;flex-direction:column}.ngc-range-input .ngc-range-input-wrapper{display:flex;align-items:center;position:relative}.ngc-range-input .ngc-range-input__form-field{width:calc(50% - 12.5px);position:relative}.ngc-range-input .ngc-range-input__divider{width:25px;text-align:center}.ngc-range-input .ngc-range-input__label{margin-bottom:5px}\n"], dependencies: [{ kind: "directive", type: i2.AutoFocusDirective, selector: "[autoFocusOn]", inputs: ["delay", "disableControl", "disabled", "autoFocusOn"], exportAs: ["autoFocusOn"] }, { kind: "directive", type: i2.DisableControlDirective, selector: "[disableControl]", inputs: ["disableControl"], exportAs: ["disableControl"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i3.MaxValidator, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: ["max"] }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i4.NgcFormFieldComponent, selector: "ngc-form-field", inputs: ["label", "dotColor", "required", "disabled", "readonly", "focusing", "fakeInput", "multiErrors", "displayColorDot", "togglePasswordVisibility", "checkWeekPassword", "appearance", "errorDisplayMode"], outputs: ["dotColorChange"] }, { kind: "directive", type: i5.NgcFormFieldInputDirective, selector: "[ngcFormFieldInput]", inputs: ["ngModel", "name", "type", "textSize", "min", "max", "trim", "disableControl", "disabled", "required", "focusing", "readonly", "clearable", "saveable", "cancelable", "formControl", "alignment", "convertType", "timeFormat"], outputs: ["ngModelChange", "changed", "saved", "cancelled", "cleared", "pasted", "converted"], exportAs: ["ngcFormFieldInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcRangeInputComponent.prototype, "placeholder", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcRangeInputComponent.prototype, "startRangeName", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcRangeInputComponent.prototype, "endRangeName", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcRangeInputComponent.prototype, "min", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcRangeInputComponent.prototype, "max", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcRangeInputComponent.prototype, "step", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRangeInputComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRangeInputComponent.prototype, "readonly", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRangeInputComponent.prototype, "required", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRangeInputComponent.prototype, "autoFocusOn", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcRangeInputComponent.prototype, "appearance", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcRangeInputComponent.prototype, "errorDisplayMode", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", FormControl)
], NgcRangeInputComponent.prototype, "startRangeFormControl", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", FormControl)
], NgcRangeInputComponent.prototype, "endRangeFormControl", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRangeInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-range-input', host: { class: 'ngc-range-input' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NgcRangeInputComponent),
                            multi: true,
                        }], template: "<!-- Range Input Label -->\n<label class=\"ngc-range-input__label\" ngcTruncate [attr.required]=\"required || undefined\">\n  {{ label }}\n</label>\n\n<!-- Range Input Wrapper -->\n<div class=\"ngc-range-input-wrapper\">\n\n  <!-- Start Range Field -->\n  <ngc-form-field class=\"ngc-range-input__form-field\" [errorDisplayMode]=\"errorDisplayMode\" [appearance]=\"appearance\">\n    <input ngcFormFieldInput type=\"number\" [step]=\"step\" [max]=\"maxStartRange\" [name]=\"startRangeName\"\n      [placeholder]=\"placeholder\" [required]=\"required\" [autoFocusOn]=\"autoFocusOn\" [readonly]=\"readonly\"\n      [formControl]=\"startRangeFormControl\" [disableControl]=\"disabled\" [(ngModel)]=\"startRange\"\n      (ngModelChange)=\"onStartRangeChanged()\" (input)=\"onTouched()\" (blur)=\"onTouched()\" />\n  </ngc-form-field>\n\n  <span class=\"ngc-range-input__divider\">-</span>\n\n  <!-- End Range Field -->\n  <ngc-form-field class=\"ngc-range-input__form-field\" [errorDisplayMode]=\"errorDisplayMode\" [appearance]=\"appearance\">\n    <input ngcFormFieldInput type=\"number\" [step]=\"step\" [min]=\"minEndRange\" [name]=\"endRangeName\"\n      [placeholder]=\"placeholder\" [required]=\"required\" [readonly]=\"readonly\" [formControl]=\"endRangeFormControl\"\n      [disableControl]=\"disabled\" [(ngModel)]=\"endRange\" (ngModelChange)=\"onEndRangeChanged()\" (input)=\"onTouched()\"\n      (blur)=\"onTouched()\" />\n  </ngc-form-field>\n\n</div>", styles: [".ngc-range-input{display:flex;flex-direction:column}.ngc-range-input .ngc-range-input-wrapper{display:flex;align-items:center;position:relative}.ngc-range-input .ngc-range-input__form-field{width:calc(50% - 12.5px);position:relative}.ngc-range-input .ngc-range-input__divider{width:25px;text-align:center}.ngc-range-input .ngc-range-input__label{margin-bottom:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], startRangeName: [{
                type: Input
            }], endRangeName: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], autoFocusOn: [{
                type: Input
            }], appearance: [{
                type: Input
            }], errorDisplayMode: [{
                type: Input
            }], startRangeFormControl: [{
                type: Input
            }], endRangeFormControl: [{
                type: Input
            }], ngModelChange: [{
                type: Output
            }], ngModel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXJhbmdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXJhbmdlLWlucHV0L25nYy1yYW5nZS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1yYW5nZS1pbnB1dC9uZ2MtcmFuZ2UtaW5wdXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ25DLHVCQUF1QixFQUFFLFVBQVUsRUFDcEIsTUFBTSxFQUFFLFlBQVksRUFDbkMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNOLFdBQVcsRUFBRSxVQUFVLEVBQ0QsaUJBQWlCLEVBQ3ZDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sT0FBTyxDQUFDOzs7Ozs7O0FBR2xFLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFnQixVQUFVLENBQUMsT0FBTyxDQUFDO0lBQ3pFLFVBQVUsQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFFO0lBQzNCLFVBQVUsQ0FBQyxPQUFPLENBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBRTtDQUNsQyxDQUFDLENBQUM7QUFlSCxNQUFNLE9BQU8sc0JBQXNCO0lBdUNsQzs7O09BR0c7SUFDSCxZQUFxQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQXhDeEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7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QUFhLEVBQUU7OzJEQUE2QjtBQUN0RDtJQUFVLFlBQVksRUFBRTs7MERBQXdEO0FBQ2hGO0lBQVUsWUFBWSxFQUFFOztnRUFBbUU7QUFDM0Y7SUFBVSxZQUFZLEVBQUU7OEJBQStCLFdBQVc7cUVBQTREO0FBQzlIO0lBQVUsWUFBWSxFQUFFOzhCQUE2QixXQUFXO21FQUE0RDsyRkFoQmhILHNCQUFzQjtrQkFibEMsU0FBUzsrQkFDRyxpQkFBaUIsUUFHcEIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsaUJBQ3JCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sYUFDckMsQ0FBQzs0QkFDWCxPQUFPLEVBQUksaUJBQWlCOzRCQUM1QixXQUFXLEVBQUcsVUFBVSxDQUFFLEdBQUcsRUFBRSx1QkFBdUIsQ0FBRTs0QkFDeEQsS0FBSyxFQUFJLElBQUk7eUJBQ2IsQ0FBQzt1R0FJYyxLQUFLO3NCQUFwQixLQUFLO2dCQUMwQixXQUFXO3NCQUExQyxLQUFLO2dCQUMwQixjQUFjO3NCQUE3QyxLQUFLO2dCQUMwQixZQUFZO3NCQUEzQyxLQUFLO2dCQUMwQixHQUFHO3NCQUFsQyxLQUFLO2dCQUMwQixHQUFHO3NCQUFsQyxLQUFLO2dCQUMwQyxJQUFJO3NCQUFuRCxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixXQUFXO3NCQUEzQyxLQUFLO2dCQUMwQixVQUFVO3NCQUF6QyxLQUFLO2dCQUMwQixnQkFBZ0I7c0JBQS9DLEtBQUs7Z0JBQzBCLHFCQUFxQjtzQkFBcEQsS0FBSztnQkFDMEIsbUJBQW1CO3NCQUFsRCxLQUFLO2dCQUVXLGFBQWE7c0JBQTdCLE1BQU07Z0JBUUgsT0FBTztzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmLCBPbkNoYW5nZXMsXG5cdFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIFZhbGlkYXRvckZuLFxuXHRDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgUkVHRVggfSBmcm9tICdAcmVzb3VyY2VzJztcbmltcG9ydCB7IENvZXJjZUJvb2xlYW4sIERlZmF1bHRWYWx1ZSwgQ29lcmNlTnVtYmVyIH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgTmdjSUZvcm1GaWVsZEFwcGVhcmFuY2UsIE5nY0lGb3JtRmllbGRFcnJvckRpc3BsYXlNb2RlIH0gZnJvbSAnLi4vbmdjLWZvcm0tZmllbGQnO1xuXG5leHBvcnQgY29uc3QgTmdjX1JBTkdFX0lOUFVUX1ZBTElEQVRJT046IFZhbGlkYXRvckZuID0gVmFsaWRhdG9ycy5jb21wb3NlKFtcblx0VmFsaWRhdG9ycy5tYXhMZW5ndGgoIDI1NSApLFxuXHRWYWxpZGF0b3JzLnBhdHRlcm4oIFJFR0VYLk5VTUJFUiApLFxuXSk7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtcmFuZ2UtaW5wdXQnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1yYW5nZS1pbnB1dC5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtcmFuZ2UtaW5wdXQuc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy1yYW5nZS1pbnB1dCcgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZVx0XHQ6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nXHQ6IGZvcndhcmRSZWYoICgpID0+IE5nY1JhbmdlSW5wdXRDb21wb25lbnQgKSxcblx0XHRtdWx0aVx0XHQ6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NSYW5nZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcwJztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBzdGFydFJhbmdlTmFtZTogc3RyaW5nID0gdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnTmdjLkxBQkVMLlNUQVJUX1JBTkdFJyApO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIGVuZFJhbmdlTmFtZTogc3RyaW5nID0gdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnTmdjLkxBQkVMLkVORF9SQU5HRScgKTtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBtaW46IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBtYXg6IG51bWJlcjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgc3RlcDogbnVtYmVyID0gMTtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgYXV0b0ZvY3VzT246IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYXBwZWFyYW5jZTogTmdjSUZvcm1GaWVsZEFwcGVhcmFuY2UgPSAnZGVmYXVsdCc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgZXJyb3JEaXNwbGF5TW9kZTogTmdjSUZvcm1GaWVsZEVycm9yRGlzcGxheU1vZGUgPSAnaW5saW5lJztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBzdGFydFJhbmdlRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCB1bmRlZmluZWQsIE5nY19SQU5HRV9JTlBVVF9WQUxJREFUSU9OICk7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgZW5kUmFuZ2VGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woIHVuZGVmaW5lZCwgTmdjX1JBTkdFX0lOUFVUX1ZBTElEQVRJT04gKTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcltdPigpO1xuXG5cdHB1YmxpYyBzdGFydFJhbmdlOiBudW1iZXI7XG5cdHB1YmxpYyBlbmRSYW5nZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgX2lubmVyVmFsdWU6IG51bWJlcltdO1xuXG5cdEBJbnB1dCgpXG5cdHNldCBuZ01vZGVsKCB2YWx1ZTogbnVtYmVyW10gKSB7XG5cdFx0dGhpcy5zdGFydFJhbmdlID0gdmFsdWUgJiYgdmFsdWVbIDAgXTtcblx0XHR0aGlzLmVuZFJhbmdlID0gdmFsdWUgJiYgdmFsdWVbIDEgXTtcblx0fVxuXG5cdGdldCBtYXhTdGFydFJhbmdlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuICFfLmlzTmlsKCB0aGlzLmVuZFJhbmdlICkgPyB0aGlzLmVuZFJhbmdlIC0gMSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdGdldCBtaW5FbmRSYW5nZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiAhXy5pc05pbCggdGhpcy5zdGFydFJhbmdlICkgPyB0aGlzLnN0YXJ0UmFuZ2UgKyAxIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IF90cmFuc2xhdGVTZXJ2aWNlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSApIHt9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggIWNoYW5nZXMucmVxdWlyZWQgfHwgIXRoaXMucmVxdWlyZWQgKSByZXR1cm47XG5cblx0XHR0aGlzLnN0YXJ0UmFuZ2VGb3JtQ29udHJvbC5zZXRWYWxpZGF0b3JzKFtcblx0XHRcdHRoaXMucmVxdWlyZWQgPyBWYWxpZGF0b3JzLnJlcXVpcmVkIDogdW5kZWZpbmVkLFxuXHRcdFx0TmdjX1JBTkdFX0lOUFVUX1ZBTElEQVRJT04sXG5cdFx0XSk7XG5cdFx0dGhpcy5lbmRSYW5nZUZvcm1Db250cm9sLnNldFZhbGlkYXRvcnMoW1xuXHRcdFx0dGhpcy5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQgOiB1bmRlZmluZWQsXG5cdFx0XHROZ2NfUkFOR0VfSU5QVVRfVkFMSURBVElPTixcblx0XHRdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtudW1iZXJbXX0gdmFsdWVcblx0ICovXG5cdHB1YmxpYyB3cml0ZVZhbHVlKCB2YWx1ZTogbnVtYmVyW10gKSB7XG5cdFx0aWYgKCB2YWx1ZSA9PT0gdGhpcy5faW5uZXJWYWx1ZSApIHJldHVybjtcblxuXHRcdHRoaXMuX2lubmVyVmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cblx0ICovXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKCBmbjogRnVuY3Rpb24gKSB7XG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuXHQgKi9cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCBmbjogRnVuY3Rpb24gKSB7XG5cdFx0dGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uU3RhcnRSYW5nZUNoYW5nZWQoKSB7XG5cdFx0aWYgKCAhXy5pc0Zpbml0ZSggdGhpcy5zdGFydFJhbmdlICkgKSByZXR1cm47XG5cdFx0aWYgKCBfLmlzRmluaXRlKCB0aGlzLm1heFN0YXJ0UmFuZ2UgKSAmJiB0aGlzLnN0YXJ0UmFuZ2UgPj0gdGhpcy5lbmRSYW5nZSApIHRoaXMuc3RhcnRSYW5nZSA9IHRoaXMubWF4U3RhcnRSYW5nZTtcblx0XHRpZiAoIF8uaXNGaW5pdGUoIHRoaXMubWluICkgJiYgdGhpcy5zdGFydFJhbmdlIDwgdGhpcy5taW4gKSB0aGlzLnN0YXJ0UmFuZ2UgPSB0aGlzLm1pbjtcblx0XHRpZiAoIF8uaXNGaW5pdGUoIHRoaXMubWF4ICkgJiYgdGhpcy5zdGFydFJhbmdlID4gdGhpcy5tYXggKSB0aGlzLnN0YXJ0UmFuZ2UgPSB0aGlzLm1heDtcblx0XHRpZiAoIHRoaXMuc3RhcnRSYW5nZSA9PT0gdGhpcy5lbmRSYW5nZSApIHRoaXMuc3RhcnRSYW5nZSA9IHRoaXMuZW5kUmFuZ2UgLSAxO1xuXG5cdFx0dGhpcy5faW5uZXJWYWx1ZSA9IFsgdGhpcy5zdGFydFJhbmdlLCB0aGlzLmVuZFJhbmdlIF07XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCB0aGlzLl9pbm5lclZhbHVlICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvbkVuZFJhbmdlQ2hhbmdlZCgpIHtcblx0XHRpZiAoICFfLmlzRmluaXRlKCB0aGlzLmVuZFJhbmdlICkgKSByZXR1cm47XG5cdFx0aWYgKCBfLmlzRmluaXRlKCB0aGlzLm1pbkVuZFJhbmdlICkgJiYgdGhpcy5zdGFydFJhbmdlID49IHRoaXMuZW5kUmFuZ2UgKSB0aGlzLmVuZFJhbmdlID0gdGhpcy5taW5FbmRSYW5nZTtcblx0XHRpZiAoIF8uaXNGaW5pdGUoIHRoaXMubWluICkgJiYgdGhpcy5lbmRSYW5nZSA8IHRoaXMubWluICkgdGhpcy5lbmRSYW5nZSA9IHRoaXMubWluO1xuXHRcdGlmICggXy5pc0Zpbml0ZSggdGhpcy5tYXggKSAmJiB0aGlzLmVuZFJhbmdlID4gdGhpcy5tYXggKSB0aGlzLmVuZFJhbmdlID0gdGhpcy5tYXg7XG5cdFx0aWYgKCB0aGlzLnN0YXJ0UmFuZ2UgPT09IHRoaXMuZW5kUmFuZ2UgKSB0aGlzLnN0YXJ0UmFuZ2UgPSB0aGlzLmVuZFJhbmdlIC0gMTtcblxuXHRcdHRoaXMuX2lubmVyVmFsdWUgPSBbIHRoaXMuc3RhcnRSYW5nZSwgdGhpcy5lbmRSYW5nZSBdO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjayggdGhpcy5faW5uZXJWYWx1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25Ub3VjaGVkKCkge1xuXHRcdHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG5cdH1cblxuXHRwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblx0cHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogRnVuY3Rpb24gPSAoIF92OiBudW1iZXIgKSA9PiB7fTtcblxufVxuIiwiPCEtLSBSYW5nZSBJbnB1dCBMYWJlbCAtLT5cbjxsYWJlbCBjbGFzcz1cIm5nYy1yYW5nZS1pbnB1dF9fbGFiZWxcIiBuZ2NUcnVuY2F0ZSBbYXR0ci5yZXF1aXJlZF09XCJyZXF1aXJlZCB8fCB1bmRlZmluZWRcIj5cbiAge3sgbGFiZWwgfX1cbjwvbGFiZWw+XG5cbjwhLS0gUmFuZ2UgSW5wdXQgV3JhcHBlciAtLT5cbjxkaXYgY2xhc3M9XCJuZ2MtcmFuZ2UtaW5wdXQtd3JhcHBlclwiPlxuXG4gIDwhLS0gU3RhcnQgUmFuZ2UgRmllbGQgLS0+XG4gIDxuZ2MtZm9ybS1maWVsZCBjbGFzcz1cIm5nYy1yYW5nZS1pbnB1dF9fZm9ybS1maWVsZFwiIFtlcnJvckRpc3BsYXlNb2RlXT1cImVycm9yRGlzcGxheU1vZGVcIiBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCI+XG4gICAgPGlucHV0IG5nY0Zvcm1GaWVsZElucHV0IHR5cGU9XCJudW1iZXJcIiBbc3RlcF09XCJzdGVwXCIgW21heF09XCJtYXhTdGFydFJhbmdlXCIgW25hbWVdPVwic3RhcnRSYW5nZU5hbWVcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2F1dG9Gb2N1c09uXT1cImF1dG9Gb2N1c09uXCIgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJzdGFydFJhbmdlRm9ybUNvbnRyb2xcIiBbZGlzYWJsZUNvbnRyb2xdPVwiZGlzYWJsZWRcIiBbKG5nTW9kZWwpXT1cInN0YXJ0UmFuZ2VcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25TdGFydFJhbmdlQ2hhbmdlZCgpXCIgKGlucHV0KT1cIm9uVG91Y2hlZCgpXCIgKGJsdXIpPVwib25Ub3VjaGVkKClcIiAvPlxuICA8L25nYy1mb3JtLWZpZWxkPlxuXG4gIDxzcGFuIGNsYXNzPVwibmdjLXJhbmdlLWlucHV0X19kaXZpZGVyXCI+LTwvc3Bhbj5cblxuICA8IS0tIEVuZCBSYW5nZSBGaWVsZCAtLT5cbiAgPG5nYy1mb3JtLWZpZWxkIGNsYXNzPVwibmdjLXJhbmdlLWlucHV0X19mb3JtLWZpZWxkXCIgW2Vycm9yRGlzcGxheU1vZGVdPVwiZXJyb3JEaXNwbGF5TW9kZVwiIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIj5cbiAgICA8aW5wdXQgbmdjRm9ybUZpZWxkSW5wdXQgdHlwZT1cIm51bWJlclwiIFtzdGVwXT1cInN0ZXBcIiBbbWluXT1cIm1pbkVuZFJhbmdlXCIgW25hbWVdPVwiZW5kUmFuZ2VOYW1lXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFtyZWFkb25seV09XCJyZWFkb25seVwiIFtmb3JtQ29udHJvbF09XCJlbmRSYW5nZUZvcm1Db250cm9sXCJcbiAgICAgIFtkaXNhYmxlQ29udHJvbF09XCJkaXNhYmxlZFwiIFsobmdNb2RlbCldPVwiZW5kUmFuZ2VcIiAobmdNb2RlbENoYW5nZSk9XCJvbkVuZFJhbmdlQ2hhbmdlZCgpXCIgKGlucHV0KT1cIm9uVG91Y2hlZCgpXCJcbiAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgpXCIgLz5cbiAgPC9uZ2MtZm9ybS1maWVsZD5cblxuPC9kaXY+Il19