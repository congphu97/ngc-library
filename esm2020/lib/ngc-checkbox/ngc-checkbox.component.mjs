import { Component, Input, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class NgcCheckboxComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.ngModelChange = new EventEmitter();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    get isChecked() { return !!this.ngModel; }
    get isIndeterminate() { return !!this.indeterminate; }
    get isDisabled() { return !!this.disabled; }
    get isReadonly() { return !!this.readonly; }
    triggerClick(event) {
        if (this.disabled || this.readonly)
            return;
        event.stopPropagation();
        this.toggle();
    }
    triggerKeyDownSpace(event) {
        if (this.disabled || this.readonly)
            return;
        event.stopPropagation();
        this.toggle();
    }
    ngOnInit() { }
    writeValue(value) {
        this.ngModel = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
    toggle() {
        this.ngModel = !this.ngModel;
        this.ngModelChange.emit(this.ngModel);
        this.onChange(this.ngModel);
        this.onTouched();
        this.cdr.markForCheck();
    }
}
NgcCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCheckboxComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcCheckboxComponent, selector: "ngc-checkbox", inputs: { label: "label", color: "color", labelColor: "labelColor", ngModel: "ngModel", disabled: "disabled", readonly: "readonly", indeterminate: "indeterminate" }, outputs: { ngModelChange: "ngModelChange" }, host: { listeners: { "click": "triggerClick($event)", "keydown.space": "triggerKeyDownSpace($event)" }, properties: { "style.--checkbox-color": "color", "style.--checkbox-label-color": "labelColor", "class.ngc-checkbox--checked": "this.isChecked", "class.ngc-checkbox--indeterminate": "this.isIndeterminate", "class.ngc-checkbox--disabled": "this.isDisabled", "class.ngc-checkbox--readonly": "this.isReadonly" }, classAttribute: "ngc-checkbox" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgcCheckboxComponent),
            multi: true
        }
    ], ngImport: i0, template: "<div class=\"ngc-checkbox__box\">\n    <input\n        type=\"checkbox\"\n        [disabled]=\"disabled\"\n        [(ngModel)]=\"ngModel\"\n        (ngModelChange)=\"ngModelChange?.emit( $event )\"/>\n    <i *ngIf=\"ngModel && !indeterminate\" class=\"ngc-checkbox__icon icon-check\"></i>\n    <i *ngIf=\"indeterminate\" class=\"ngc-checkbox__icon icon-minus\"></i>\n</div>\n<div class=\"ngc-checkbox__label\">\n    {{ label }}\n    <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n    </ng-container>\n</div>\n", styles: ["@charset \"UTF-8\";.ngc-checkbox{display:flex;cursor:pointer;width:fit-content}.ngc-checkbox.ngc-primary.ngc-checkbox--checked:not(.ngc-checkbox--disabled) .ngc-checkbox__box,.ngc-checkbox.ngc-primary.ngc-checkbox--indeterminate:not(.ngc-checkbox--disabled) .ngc-checkbox__box{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));border-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-checkbox.ngc-primary.ngc-checkbox--checked:not(.ngc-checkbox--disabled) .ngc-checkbox__icon,.ngc-checkbox.ngc-primary.ngc-checkbox--indeterminate:not(.ngc-checkbox--disabled) .ngc-checkbox__icon{color:var(--ngc-color-neutral-white, #fff)}.ngc-checkbox.ngc-checkbox--checked .ngc-checkbox__box,.ngc-checkbox.ngc-checkbox--indeterminate .ngc-checkbox__box{background-color:var(--ngc-color-neutral-background-disabled, #f5f5f5);border-color:var(--ngc-color-neutral-background-disabled, #f5f5f5)}.ngc-checkbox.ngc-checkbox--readonly{cursor:default}.ngc-checkbox:not(.ngc-checkbox--disabled):hover .ngc-checkbox__box{border-color:var(--ngc-color-neutral-border-strong, #babcc0)}.ngc-checkbox:not(.ngc-checkbox--disabled):focus-visible .ngc-checkbox__box{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4));border-color:var(--ngc-color-neutral-border-strong, #8e8e93)}.ngc-checkbox.ngc-checkbox--disabled .ngc-checkbox__box{background-color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-checkbox.ngc-checkbox--disabled .ngc-checkbox__icon{color:var(--ngc-color-neutral-white, #fff)}.ngc-checkbox.ngc-checkbox--disabled .ngc-checkbox__label{color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-checkbox .ngc-checkbox__box{display:flex;flex-direction:column;align-items:center;justify-content:center;border:1.5px solid var(--ngc-color-neutral-border-default, #e4e4e6);height:var(--checkbox-size, 20px);min-height:var(--checkbox-size, 20px);max-height:var(--checkbox-size, 20px);width:var(--checkbox-size, 20px);min-width:var(--checkbox-size, 20px);max-width:var(--checkbox-size, 20px);border-radius:4px;background-color:var(--ngc-color-neutral-white, #fff);transition:background-color .15s ease,border-color .15s ease}.ngc-checkbox .ngc-checkbox__box input[type=checkbox]{display:none}.ngc-checkbox .ngc-checkbox__icon{color:var(--checkbox-icon-color, var(--ngc-color-neutral-text-primary, #242426));animation:30ms ease-in forwards popupAnimation;font-size:calc(var(--checkbox-size, 24px) * .8);line-height:calc(var(--checkbox-size, 24px) * .2)}.ngc-checkbox .ngc-checkbox__label{display:flex;align-items:center;margin-left:10px;color:var(--checkbox-label-color, inherit)}.ngc-checkbox .ngc-checkbox__label:empty{display:none}\n"], dependencies: [{ kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-checkbox', encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NgcCheckboxComponent),
                            multi: true
                        }
                    ], host: {
                        '[style.--checkbox-color]': 'color',
                        '[style.--checkbox-label-color]': 'labelColor',
                        class: 'ngc-checkbox',
                    }, template: "<div class=\"ngc-checkbox__box\">\n    <input\n        type=\"checkbox\"\n        [disabled]=\"disabled\"\n        [(ngModel)]=\"ngModel\"\n        (ngModelChange)=\"ngModelChange?.emit( $event )\"/>\n    <i *ngIf=\"ngModel && !indeterminate\" class=\"ngc-checkbox__icon icon-check\"></i>\n    <i *ngIf=\"indeterminate\" class=\"ngc-checkbox__icon icon-minus\"></i>\n</div>\n<div class=\"ngc-checkbox__label\">\n    {{ label }}\n    <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n    </ng-container>\n</div>\n", styles: ["@charset \"UTF-8\";.ngc-checkbox{display:flex;cursor:pointer;width:fit-content}.ngc-checkbox.ngc-primary.ngc-checkbox--checked:not(.ngc-checkbox--disabled) .ngc-checkbox__box,.ngc-checkbox.ngc-primary.ngc-checkbox--indeterminate:not(.ngc-checkbox--disabled) .ngc-checkbox__box{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));border-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-checkbox.ngc-primary.ngc-checkbox--checked:not(.ngc-checkbox--disabled) .ngc-checkbox__icon,.ngc-checkbox.ngc-primary.ngc-checkbox--indeterminate:not(.ngc-checkbox--disabled) .ngc-checkbox__icon{color:var(--ngc-color-neutral-white, #fff)}.ngc-checkbox.ngc-checkbox--checked .ngc-checkbox__box,.ngc-checkbox.ngc-checkbox--indeterminate .ngc-checkbox__box{background-color:var(--ngc-color-neutral-background-disabled, #f5f5f5);border-color:var(--ngc-color-neutral-background-disabled, #f5f5f5)}.ngc-checkbox.ngc-checkbox--readonly{cursor:default}.ngc-checkbox:not(.ngc-checkbox--disabled):hover .ngc-checkbox__box{border-color:var(--ngc-color-neutral-border-strong, #babcc0)}.ngc-checkbox:not(.ngc-checkbox--disabled):focus-visible .ngc-checkbox__box{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4));border-color:var(--ngc-color-neutral-border-strong, #8e8e93)}.ngc-checkbox.ngc-checkbox--disabled .ngc-checkbox__box{background-color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-checkbox.ngc-checkbox--disabled .ngc-checkbox__icon{color:var(--ngc-color-neutral-white, #fff)}.ngc-checkbox.ngc-checkbox--disabled .ngc-checkbox__label{color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-checkbox .ngc-checkbox__box{display:flex;flex-direction:column;align-items:center;justify-content:center;border:1.5px solid var(--ngc-color-neutral-border-default, #e4e4e6);height:var(--checkbox-size, 20px);min-height:var(--checkbox-size, 20px);max-height:var(--checkbox-size, 20px);width:var(--checkbox-size, 20px);min-width:var(--checkbox-size, 20px);max-width:var(--checkbox-size, 20px);border-radius:4px;background-color:var(--ngc-color-neutral-white, #fff);transition:background-color .15s ease,border-color .15s ease}.ngc-checkbox .ngc-checkbox__box input[type=checkbox]{display:none}.ngc-checkbox .ngc-checkbox__icon{color:var(--checkbox-icon-color, var(--ngc-color-neutral-text-primary, #242426));animation:30ms ease-in forwards popupAnimation;font-size:calc(var(--checkbox-size, 24px) * .8);line-height:calc(var(--checkbox-size, 24px) * .2)}.ngc-checkbox .ngc-checkbox__label{display:flex;align-items:center;margin-left:10px;color:var(--checkbox-label-color, inherit)}.ngc-checkbox .ngc-checkbox__label:empty{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { label: [{
                type: Input
            }], color: [{
                type: Input
            }], labelColor: [{
                type: Input
            }], ngModel: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], isChecked: [{
                type: HostBinding,
                args: ['class.ngc-checkbox--checked']
            }], isIndeterminate: [{
                type: HostBinding,
                args: ['class.ngc-checkbox--indeterminate']
            }], isDisabled: [{
                type: HostBinding,
                args: ['class.ngc-checkbox--disabled']
            }], isReadonly: [{
                type: HostBinding,
                args: ['class.ngc-checkbox--readonly']
            }], ngModelChange: [{
                type: Output
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], triggerKeyDownSpace: [{
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWNoZWNrYm94L25nYy1jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jaGVja2JveC9uZ2MtY2hlY2tib3guaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVKLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQW9CekUsTUFBTSxPQUFPLG9CQUFvQjtJQXdCaEMsWUFBbUIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFGeEIsa0JBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQW9CNUUsYUFBUSxHQUE2QixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDOUMsY0FBUyxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQW5CSSxDQUFDO0lBZDlDLElBQ0ksU0FBUyxLQUFjLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRW5ELElBQ0ksZUFBZSxLQUFjLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBRS9ELElBQ0ksVUFBVSxLQUFjLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXJELElBQ0ksVUFBVSxLQUFjLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBTzlDLFlBQVksQ0FBRSxLQUFpQjtRQUNyQyxJQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRyxPQUFPO1FBQzdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDO0lBR00sbUJBQW1CLENBQUUsS0FBb0I7UUFDL0MsSUFBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUcsT0FBTztRQUM3QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVEsS0FBVSxDQUFDO0lBS1osVUFBVSxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsRUFBNEI7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEVBQWM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLGdCQUFnQixDQUFDLFVBQW1CO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLE1BQU07UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7aUhBckVXLG9CQUFvQjtxR0FBcEIsb0JBQW9CLHlyQkFickI7UUFDVjtZQUNDLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNuRCxLQUFLLEVBQUUsSUFBSTtTQUNYO0tBQ0QsMEJDZEYsb2hCQWVBOzJGRE1hLG9CQUFvQjtrQkFsQmhDLFNBQVM7K0JBQ0MsY0FBYyxpQkFHVCxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWOzRCQUNDLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWDtxQkFDRCxRQUNLO3dCQUNMLDBCQUEwQixFQUFTLE9BQU87d0JBQzFDLGdDQUFnQyxFQUFHLFlBQVk7d0JBQy9DLEtBQUssRUFBRSxjQUFjO3FCQUNyQjt3R0FJZSxLQUFLO3NCQUFwQixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLO2dCQUdGLFNBQVM7c0JBRFosV0FBVzt1QkFBRSw2QkFBNkI7Z0JBSXZDLGVBQWU7c0JBRGxCLFdBQVc7dUJBQUUsbUNBQW1DO2dCQUk3QyxVQUFVO3NCQURiLFdBQVc7dUJBQUUsOEJBQThCO2dCQUl4QyxVQUFVO3NCQURiLFdBQVc7dUJBQUUsOEJBQThCO2dCQUczQixhQUFhO3NCQUE3QixNQUFNO2dCQUtBLFlBQVk7c0JBRGxCLFlBQVk7dUJBQUUsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFO2dCQVE3QixtQkFBbUI7c0JBRHpCLFlBQVk7dUJBQUUsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIGZvcndhcmRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25nYy1jaGVja2JveCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ2MtY2hlY2tib3guaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25nYy1jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nY0NoZWNrYm94Q29tcG9uZW50KSxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tzdHlsZS4tLWNoZWNrYm94LWNvbG9yXScgICAgICAgOiAnY29sb3InLFxuXHRcdCdbc3R5bGUuLS1jaGVja2JveC1sYWJlbC1jb2xvcl0nIDogJ2xhYmVsQ29sb3InLFxuXHRcdGNsYXNzOiAnbmdjLWNoZWNrYm94Jyxcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBOZ2NDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGxhYmVsQ29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIG5nTW9kZWw6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtY2hlY2tib3gtLWNoZWNrZWQnIClcblx0Z2V0IGlzQ2hlY2tlZCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5uZ01vZGVsOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWNoZWNrYm94LS1pbmRldGVybWluYXRlJyApXG5cdGdldCBpc0luZGV0ZXJtaW5hdGUoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuaW5kZXRlcm1pbmF0ZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1jaGVja2JveC0tZGlzYWJsZWQnIClcblx0Z2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuZGlzYWJsZWQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtY2hlY2tib3gtLXJlYWRvbmx5JyApXG5cdGdldCBpc1JlYWRvbmx5KCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLnJlYWRvbmx5OyB9XG5cblx0QE91dHB1dCgpIHB1YmxpYyBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG5cdEBIb3N0TGlzdGVuZXIoICdjbGljaycsIFsgJyRldmVudCcgXSApXG5cdHB1YmxpYyB0cmlnZ2VyQ2xpY2soIGV2ZW50OiBNb3VzZUV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5ICkgcmV0dXJuO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMudG9nZ2xlKCk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCAna2V5ZG93bi5zcGFjZScsIFsgJyRldmVudCcgXSApXG5cdHB1YmxpYyB0cmlnZ2VyS2V5RG93blNwYWNlKCBldmVudDogS2V5Ym9hcmRFdmVudCApIHtcblx0XHRpZiAoIHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSApIHJldHVybjtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnRvZ2dsZSgpO1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7fVxuXG5cdHByaXZhdGUgb25DaGFuZ2U6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZCA9ICgpID0+IHt9O1xuXHRwcml2YXRlIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5uZ01vZGVsID0gdmFsdWU7XG5cdFx0dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcblx0XHR0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0dGhpcy5uZ01vZGVsID0gIXRoaXMubmdNb2RlbDtcblx0XHR0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdCggdGhpcy5uZ01vZGVsICk7XG5cdFx0dGhpcy5vbkNoYW5nZSggdGhpcy5uZ01vZGVsICk7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHR0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cIm5nYy1jaGVja2JveF9fYm94XCI+XG4gICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibmdNb2RlbFwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm5nTW9kZWxDaGFuZ2U/LmVtaXQoICRldmVudCApXCIvPlxuICAgIDxpICpuZ0lmPVwibmdNb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZVwiIGNsYXNzPVwibmdjLWNoZWNrYm94X19pY29uIGljb24tY2hlY2tcIj48L2k+XG4gICAgPGkgKm5nSWY9XCJpbmRldGVybWluYXRlXCIgY2xhc3M9XCJuZ2MtY2hlY2tib3hfX2ljb24gaWNvbi1taW51c1wiPjwvaT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm5nYy1jaGVja2JveF9fbGFiZWxcIj5cbiAgICB7eyBsYWJlbCB9fVxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbGFiZWxcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=