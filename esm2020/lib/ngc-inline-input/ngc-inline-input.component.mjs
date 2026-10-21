import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, HostListener, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import _ from 'lodash';
import { DefaultValue, CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "angular-core";
import * as i3 from "@angular/forms";
import * as i4 from "../ngc-form-field/form-field-input/ngc-form-field-input.directive";
export class NgcInlineInputComponent {
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.trim = true;
        this.autoSave = true;
        this.formControl = new FormControl(undefined, [Validators.required, Validators.maxLength(255)]);
        this.ngModelChange = new EventEmitter();
        this.editingChange = new EventEmitter();
        this.saved = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    set ngcInlineInput(value) {
        value && this.edit();
    }
    triggerClick(event) {
        if (!this.editing)
            return;
        event.stopPropagation();
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.editing)
            return;
        this.value = this._bkValue = this.trim ? _.trim(this.ngModel) : this.ngModel;
    }
    /**
     * @return {void}
     */
    onAutoSave() {
        this.autoSave && this.onSave();
    }
    /**
     * @return {void}
     */
    onSave() {
        this.value = this.trim ? _.trim(this.value) : this.value;
        this.formControl.updateValueAndValidity();
        setTimeout(() => this.formControl.valid ? this._save() : this._cancel());
    }
    /**
     * @return {void}
     */
    onCancel() {
        this._cancel();
    }
    /**
     * @return {void}
     */
    edit() {
        this.editing = true;
        this.value = this._bkValue = this.trim ? _.trim(this.ngModel) : this.ngModel;
        this.editingChange.emit(this.editing);
        this._cdRef.markForCheck();
    }
    /**
     * @return {void}
     */
    _save() {
        if (!this.editing)
            return;
        const value = this.trim ? _.trim(this.value) : this.value;
        const bkValue = this.trim ? _.trim(this._bkValue) : this._bkValue;
        this.editing = !!this.validate;
        if (value !== bkValue) {
            this.ngModel = this._bkValue = value;
            this.ngModelChange.emit(value);
            this.saved.emit(value);
        }
        this.editingChange.emit(this.editing);
        this._cdRef.markForCheck();
    }
    /**
     * @return {void}
     */
    _cancel() {
        if (!this.editing)
            return;
        const value = this.trim ? _.trim(this.value) : this.value;
        const bkValue = this.trim ? _.trim(this._bkValue) : this._bkValue;
        this.editing = false;
        if (value !== bkValue) {
            this.value = this._bkValue = bkValue;
            this.ngModelChange.emit(bkValue);
        }
        this.cancelled.emit(bkValue);
        this.editingChange.emit(this.editing);
        this._cdRef.markForCheck();
    }
}
NgcInlineInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcInlineInputComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcInlineInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcInlineInputComponent, selector: "ngc-inline-input, [ngcInlineInput]", inputs: { name: "name", placeholder: "placeholder", ngModel: "ngModel", editing: "editing", validate: "validate", trim: "trim", autoSave: "autoSave", disabled: "disabled", formControl: "formControl", ngcInlineInput: "ngcInlineInput" }, outputs: { ngModelChange: "ngModelChange", editingChange: "editingChange", saved: "saved", cancelled: "cancelled" }, host: { listeners: { "click": "triggerClick($event)" }, classAttribute: "ngc-inline-input" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"editing && !disabled; else elseBlock\">\n\t<input autoFocusOn autoReset ngcFormFieldInput [style.width.ch]=\"value?.length || placeholder?.length || undefined\"\n\t\t[trim]=\"trim\" [name]=\"name\" [placeholder]=\"placeholder\" [formControl]=\"formControl\" [(ngModel)]=\"value\"\n\t\t(keydown)=\"$event?.stopPropagation()\" (keyup)=\"$event?.stopPropagation()\" (keyup.enter)=\"onSave()\"\n\t\t(keyup.esc)=\"onCancel()\" (blur)=\"onAutoSave()\" />\n</ng-container>\n\n<ng-template #elseBlock>\n\t<ng-content></ng-content>\n</ng-template>", styles: [".ngc-inline-input{max-width:100%}.ngc-inline-input input,.ngc-inline-input input::placeholder{font-size:inherit;font-family:inherit;font-weight:inherit;font-kerning:inherit;font-stretch:inherit;font-variant:inherit;text-align:inherit;text-decoration:inherit;text-transform:inherit;text-orientation:inherit;text-indent:inherit;text-shadow:inherit;text-overflow:inherit;text-justify:inherit;line-height:inherit;letter-spacing:inherit;color:inherit}.ngc-inline-input input{border:none;background:none;padding:0;margin:0;width:100%;min-width:0;max-width:100%}.ngc-inline-input input::placeholder{color:var(--ngc-color-neutral-text-placeholder, #c4c4c6)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.AutoFocusDirective, selector: "[autoFocusOn]", inputs: ["delay", "disableControl", "disabled", "autoFocusOn"], exportAs: ["autoFocusOn"] }, { kind: "directive", type: i2.AutoResetDirective, selector: "[autoReset]", inputs: ["formControl", "delay", "autoReset"], exportAs: ["autoReset"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.NgcFormFieldInputDirective, selector: "[ngcFormFieldInput]", inputs: ["ngModel", "name", "type", "textSize", "min", "max", "trim", "disableControl", "disabled", "required", "focusing", "readonly", "clearable", "saveable", "cancelable", "formControl", "alignment", "convertType", "timeFormat"], outputs: ["ngModelChange", "changed", "saved", "cancelled", "cleared", "pasted", "converted"], exportAs: ["ngcFormFieldInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcInlineInputComponent.prototype, "validate", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcInlineInputComponent.prototype, "trim", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcInlineInputComponent.prototype, "autoSave", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcInlineInputComponent.prototype, "disabled", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", FormControl)
], NgcInlineInputComponent.prototype, "formControl", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcInlineInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-inline-input, [ngcInlineInput]', host: { class: 'ngc-inline-input' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"editing && !disabled; else elseBlock\">\n\t<input autoFocusOn autoReset ngcFormFieldInput [style.width.ch]=\"value?.length || placeholder?.length || undefined\"\n\t\t[trim]=\"trim\" [name]=\"name\" [placeholder]=\"placeholder\" [formControl]=\"formControl\" [(ngModel)]=\"value\"\n\t\t(keydown)=\"$event?.stopPropagation()\" (keyup)=\"$event?.stopPropagation()\" (keyup.enter)=\"onSave()\"\n\t\t(keyup.esc)=\"onCancel()\" (blur)=\"onAutoSave()\" />\n</ng-container>\n\n<ng-template #elseBlock>\n\t<ng-content></ng-content>\n</ng-template>", styles: [".ngc-inline-input{max-width:100%}.ngc-inline-input input,.ngc-inline-input input::placeholder{font-size:inherit;font-family:inherit;font-weight:inherit;font-kerning:inherit;font-stretch:inherit;font-variant:inherit;text-align:inherit;text-decoration:inherit;text-transform:inherit;text-orientation:inherit;text-indent:inherit;text-shadow:inherit;text-overflow:inherit;text-justify:inherit;line-height:inherit;letter-spacing:inherit;color:inherit}.ngc-inline-input input{border:none;background:none;padding:0;margin:0;width:100%;min-width:0;max-width:100%}.ngc-inline-input input::placeholder{color:var(--ngc-color-neutral-text-placeholder, #c4c4c6)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { name: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], ngModel: [{
                type: Input
            }], editing: [{
                type: Input
            }], validate: [{
                type: Input
            }], trim: [{
                type: Input
            }], autoSave: [{
                type: Input
            }], disabled: [{
                type: Input
            }], formControl: [{
                type: Input
            }], ngModelChange: [{
                type: Output
            }], editingChange: [{
                type: Output
            }], saved: [{
                type: Output
            }], cancelled: [{
                type: Output
            }], ngcInlineInput: [{
                type: Input,
                args: ['ngcInlineInput']
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWlubGluZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1pbmxpbmUtaW5wdXQvbmdjLWlubGluZS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1pbmxpbmUtaW5wdXQvbmdjLWlubGluZS1pbnB1dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3hCLFlBQVksRUFDWixZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQ2xELHVCQUF1QixFQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7O0FBVXBELE1BQU0sT0FBTyx1QkFBdUI7SUE2Qm5DOzs7T0FHRztJQUNILFlBQXFCLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBMUJHLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUUxQyxnQkFBVyxHQUFnQixJQUFJLFdBQVcsQ0FDekUsU0FBUyxFQUNULENBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFFLEdBQUcsQ0FBRSxDQUFFLENBQ3BELENBQUM7UUFFZSxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2pFLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbkUsVUFBSyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFD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SUFBRSxhQUFhLEVBQUU7O3FEQUE2QjtBQUN0RTtJQUFVLFlBQVksRUFBRTtJQUFFLGFBQWEsRUFBRTs7eURBQWlDO0FBQzFFO0lBQVUsYUFBYSxFQUFFOzt5REFBMEI7QUFDbkQ7SUFBVSxZQUFZLEVBQUU7OEJBQXFCLFdBQVc7NERBR3REOzJGQWJVLHVCQUF1QjtrQkFSbkMsU0FBUzsrQkFDRyxvQ0FBb0MsUUFHdkMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsaUJBQ3RCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07d0dBSWhDLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJDLElBQUk7c0JBQXBELEtBQUs7Z0JBQzJDLFFBQVE7c0JBQXhELEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzBCLFdBQVc7c0JBQTFDLEtBQUs7Z0JBS1csYUFBYTtzQkFBN0IsTUFBTTtnQkFDVSxhQUFhO3NCQUE3QixNQUFNO2dCQUNVLEtBQUs7c0JBQXJCLE1BQU07Z0JBQ1UsU0FBUztzQkFBekIsTUFBTTtnQkFPSCxjQUFjO3NCQURqQixLQUFLO3VCQUFFLGdCQUFnQjtnQkFZakIsWUFBWTtzQkFEbEIsWUFBWTt1QkFBRSxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIElucHV0LCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLFxuXHRIb3N0TGlzdGVuZXIsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbiB9IGZyb20gJ0Bjb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1pbmxpbmUtaW5wdXQsIFtuZ2NJbmxpbmVJbnB1dF0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1pbmxpbmUtaW5wdXQuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLWlubGluZS1pbnB1dC5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWlubGluZS1pbnB1dCcgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NJbmxpbmVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBuZ01vZGVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBlZGl0aW5nOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyB2YWxpZGF0ZTogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHRyaW06IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgYXV0b1NhdmU6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXG5cdFx0dW5kZWZpbmVkLFxuXHRcdFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoIDI1NSApIF1cblx0KTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgZWRpdGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHNhdmVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNhbmNlbGxlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuXHRwcml2YXRlIF9ia1ZhbHVlOiBzdHJpbmc7XG5cblx0QElucHV0KCAnbmdjSW5saW5lSW5wdXQnIClcblx0c2V0IG5nY0lubGluZUlucHV0KCB2YWx1ZTogYm9vbGVhbiApIHtcblx0XHR2YWx1ZSAmJiB0aGlzLmVkaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gX2NkUmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmICkge31cblxuXHRASG9zdExpc3RlbmVyKCAnY2xpY2snLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlckNsaWNrKCBldmVudDogTW91c2VFdmVudCApIHtcblx0XHRpZiAoICF0aGlzLmVkaXRpbmcgKSByZXR1cm47XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoICFjaGFuZ2VzLmVkaXRpbmcgKSByZXR1cm47XG5cblx0XHR0aGlzLnZhbHVlID0gdGhpcy5fYmtWYWx1ZSA9IHRoaXMudHJpbSA/IF8udHJpbSggdGhpcy5uZ01vZGVsICkgOiB0aGlzLm5nTW9kZWw7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvbkF1dG9TYXZlKCkge1xuXHRcdHRoaXMuYXV0b1NhdmUgJiYgdGhpcy5vblNhdmUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG9uU2F2ZSgpIHtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy50cmltID8gXy50cmltKCB0aGlzLnZhbHVlICkgOiB0aGlzLnZhbHVlO1xuXG5cdFx0dGhpcy5mb3JtQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG5cdFx0c2V0VGltZW91dCggKCkgPT4gdGhpcy5mb3JtQ29udHJvbC52YWxpZCA/IHRoaXMuX3NhdmUoKSA6IHRoaXMuX2NhbmNlbCgpICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBvbkNhbmNlbCgpIHtcblx0XHR0aGlzLl9jYW5jZWwoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGVkaXQoKSB7XG5cdFx0dGhpcy5lZGl0aW5nID0gdHJ1ZTtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5fYmtWYWx1ZSA9IHRoaXMudHJpbSA/IF8udHJpbSggdGhpcy5uZ01vZGVsICkgOiB0aGlzLm5nTW9kZWw7XG5cblx0XHR0aGlzLmVkaXRpbmdDaGFuZ2UuZW1pdCggdGhpcy5lZGl0aW5nICk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX3NhdmUoKSB7XG5cdFx0aWYgKCAhdGhpcy5lZGl0aW5nICkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMudHJpbSA/IF8udHJpbSggdGhpcy52YWx1ZSApIDogdGhpcy52YWx1ZTtcblx0XHRjb25zdCBia1ZhbHVlOiBzdHJpbmcgPSB0aGlzLnRyaW0gPyBfLnRyaW0oIHRoaXMuX2JrVmFsdWUgKSA6IHRoaXMuX2JrVmFsdWU7XG5cblx0XHR0aGlzLmVkaXRpbmcgPSAhIXRoaXMudmFsaWRhdGU7XG5cblx0XHRpZiAoIHZhbHVlICE9PSBia1ZhbHVlICkge1xuXHRcdFx0dGhpcy5uZ01vZGVsID0gdGhpcy5fYmtWYWx1ZSA9IHZhbHVlO1xuXG5cdFx0XHR0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdCggdmFsdWUgKTtcblx0XHRcdHRoaXMuc2F2ZWQuZW1pdCggdmFsdWUgKTtcblx0XHR9XG5cblx0XHR0aGlzLmVkaXRpbmdDaGFuZ2UuZW1pdCggdGhpcy5lZGl0aW5nICk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2NhbmNlbCgpIHtcblx0XHRpZiAoICF0aGlzLmVkaXRpbmcgKSByZXR1cm47XG5cblx0XHRjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy50cmltID8gXy50cmltKCB0aGlzLnZhbHVlICkgOiB0aGlzLnZhbHVlO1xuXHRcdGNvbnN0IGJrVmFsdWU6IHN0cmluZyA9IHRoaXMudHJpbSA/IF8udHJpbSggdGhpcy5fYmtWYWx1ZSApIDogdGhpcy5fYmtWYWx1ZTtcblxuXHRcdHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gYmtWYWx1ZSApIHtcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLl9ia1ZhbHVlID0gYmtWYWx1ZTtcblxuXHRcdFx0dGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoIGJrVmFsdWUgKTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbmNlbGxlZC5lbWl0KCBia1ZhbHVlICk7XG5cdFx0dGhpcy5lZGl0aW5nQ2hhbmdlLmVtaXQoIHRoaXMuZWRpdGluZyApO1xuXHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0aW5nICYmICFkaXNhYmxlZDsgZWxzZSBlbHNlQmxvY2tcIj5cblx0PGlucHV0IGF1dG9Gb2N1c09uIGF1dG9SZXNldCBuZ2NGb3JtRmllbGRJbnB1dCBbc3R5bGUud2lkdGguY2hdPVwidmFsdWU/Lmxlbmd0aCB8fCBwbGFjZWhvbGRlcj8ubGVuZ3RoIHx8IHVuZGVmaW5lZFwiXG5cdFx0W3RyaW1dPVwidHJpbVwiIFtuYW1lXT1cIm5hbWVcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCJcblx0XHQoa2V5ZG93bik9XCIkZXZlbnQ/LnN0b3BQcm9wYWdhdGlvbigpXCIgKGtleXVwKT1cIiRldmVudD8uc3RvcFByb3BhZ2F0aW9uKClcIiAoa2V5dXAuZW50ZXIpPVwib25TYXZlKClcIlxuXHRcdChrZXl1cC5lc2MpPVwib25DYW5jZWwoKVwiIChibHVyKT1cIm9uQXV0b1NhdmUoKVwiIC8+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+Il19