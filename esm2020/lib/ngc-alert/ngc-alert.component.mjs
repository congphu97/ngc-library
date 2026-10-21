import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../ngc-icon/ngc-icon.component";
import * as i3 from "../ngc-button/icon-button/ngc-icon-button.component";
export class NgcAlertComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.closed = new EventEmitter();
        this.isClosed = false;
    }
    get styleBorderColor() {
        return this.borderColor || (this.isCustomColor ? this.color : undefined);
    }
    get styleBgColor() {
        return this.background || (this.isCustomColor ? this._hexToRgba(this.color, 0.1) : undefined);
    }
    get styleTextColor() {
        return this.textColor || (this.isCustomColor ? this.color : undefined);
    }
    get classHidden() {
        return this.isClosed;
    }
    get isCustomColor() {
        const presets = ['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'default'];
        return !!this.color && !presets.includes(this.color);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this._applyColorClass();
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (changes.color && !changes.color.firstChange) {
            this._applyColorClass();
        }
    }
    close(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.isClosed = true;
        this.closed.emit();
    }
    _applyColorClass() {
        const nativeEl = this._elementRef.nativeElement;
        // Remove existing preset classes
        const presets = ['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'default'];
        presets.forEach(p => nativeEl.classList.remove('ngc-' + p));
        if (this.color && presets.includes(this.color)) {
            nativeEl.classList.add('ngc-' + this.color);
        }
    }
    _hexToRgba(hex, opacity) {
        if (!hex)
            return '';
        if (hex.startsWith('#')) {
            let c = hex.substring(1);
            if (c.length === 3) {
                c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
            }
            const num = parseInt(c, 16);
            return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${opacity})`;
        }
        return hex;
    }
}
NgcAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAlertComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcAlertComponent, selector: "ngc-alert, [ngcAlert]", inputs: { color: "color", textColor: "textColor", background: "background", borderColor: "borderColor", icon: "icon", closeable: "closeable" }, outputs: { closed: "closed" }, host: { properties: { "style.--alert-border-color": "this.styleBorderColor", "style.--alert-bg-color": "this.styleBgColor", "style.--alert-text-color": "this.styleTextColor", "class.ngc-alert-hidden": "this.classHidden" }, classAttribute: "ngc-alert" }, usesOnChanges: true, ngImport: i0, template: "<ngc-icon *ngIf=\"icon\" class=\"ngc-alert-icon\" [name]=\"icon\"></ngc-icon>\n<div class=\"ngc-alert-content\">\n\t<ng-content></ng-content>\n</div>\n<button *ngIf=\"closeable\" class=\"ngc-alert-close-btn\" ngcIconButton icon=\"close\" (click)=\"close($event)\"></button>\n", styles: [".ngc-alert{display:flex;align-items:center;padding:12px 16px;border-radius:6px;border:1px solid var(--alert-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));background-color:var(--alert-bg-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));color:var(--alert-text-color, var(--ngc-color-neutral-text-primary, #242426));font-family:var(--ngc-font-body, AvertaStdCY, Helvetica, sans-serif);font-size:var(--ngc-font-size-base, 14px);margin-bottom:16px;width:100%;box-sizing:border-box}.ngc-alert.ngc-alert-hidden{display:none!important}.ngc-alert.ngc-primary{--alert-border-color: color-mix(in srgb, var(--ngc-color-primary-default, #444446) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-primary-default, #444446) 10%, #fff);--alert-text-color: var(--ngc-color-primary-default, #444446)}.ngc-alert.ngc-info{--alert-border-color: color-mix(in srgb, var(--ngc-color-info-default, #0a84ff) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-info-default, #0a84ff) 10%, #fff);--alert-text-color: var(--ngc-color-info-default, #0a84ff)}.ngc-alert.ngc-success{--alert-border-color: color-mix(in srgb, var(--ngc-color-success-default, #34c759) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-success-default, #34c759) 10%, #fff);--alert-text-color: var(--ngc-color-success-default, #34c759)}.ngc-alert.ngc-warning{--alert-border-color: color-mix(in srgb, var(--ngc-color-warning-default, #dfbf00) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-warning-default, #dfbf00) 10%, #fff);--alert-text-color: var(--ngc-color-warning-default, #dfbf00)}.ngc-alert.ngc-danger{--alert-border-color: color-mix(in srgb, var(--ngc-color-danger-default, #ff3130) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-danger-default, #ff3130) 10%, #fff);--alert-text-color: var(--ngc-color-danger-default, #ff3130)}.ngc-alert .ngc-alert-icon{margin-right:12px;display:flex;align-items:center;--icon-color: var(--alert-text-color, var(--ngc-color-neutral-text-primary, #242426)) !important}.ngc-alert .ngc-alert-content{flex:1;min-width:0}.ngc-alert .ngc-alert-close-btn{margin-left:12px;--icon-button-icon-color: var(--alert-text-color, var(--ngc-color-neutral-text-primary, #242426)) !important;--icon-button-color: transparent !important}.ngc-alert .ngc-alert-close-btn:hover{--icon-button-color: rgba(120, 120, 120, .15) !important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }, { kind: "component", type: i3.NgcIconButtonComponent, selector: "button[ngcIconButton]", inputs: ["type", "color", "size", "icon", "iconColor", "iconSize", "borderColor", "borderStyle", "borderWidth", "disabled", "square"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcAlertComponent.prototype, "closeable", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-alert, [ngcAlert]', host: { class: 'ngc-alert' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ngc-icon *ngIf=\"icon\" class=\"ngc-alert-icon\" [name]=\"icon\"></ngc-icon>\n<div class=\"ngc-alert-content\">\n\t<ng-content></ng-content>\n</div>\n<button *ngIf=\"closeable\" class=\"ngc-alert-close-btn\" ngcIconButton icon=\"close\" (click)=\"close($event)\"></button>\n", styles: [".ngc-alert{display:flex;align-items:center;padding:12px 16px;border-radius:6px;border:1px solid var(--alert-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));background-color:var(--alert-bg-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));color:var(--alert-text-color, var(--ngc-color-neutral-text-primary, #242426));font-family:var(--ngc-font-body, AvertaStdCY, Helvetica, sans-serif);font-size:var(--ngc-font-size-base, 14px);margin-bottom:16px;width:100%;box-sizing:border-box}.ngc-alert.ngc-alert-hidden{display:none!important}.ngc-alert.ngc-primary{--alert-border-color: color-mix(in srgb, var(--ngc-color-primary-default, #444446) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-primary-default, #444446) 10%, #fff);--alert-text-color: var(--ngc-color-primary-default, #444446)}.ngc-alert.ngc-info{--alert-border-color: color-mix(in srgb, var(--ngc-color-info-default, #0a84ff) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-info-default, #0a84ff) 10%, #fff);--alert-text-color: var(--ngc-color-info-default, #0a84ff)}.ngc-alert.ngc-success{--alert-border-color: color-mix(in srgb, var(--ngc-color-success-default, #34c759) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-success-default, #34c759) 10%, #fff);--alert-text-color: var(--ngc-color-success-default, #34c759)}.ngc-alert.ngc-warning{--alert-border-color: color-mix(in srgb, var(--ngc-color-warning-default, #dfbf00) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-warning-default, #dfbf00) 10%, #fff);--alert-text-color: var(--ngc-color-warning-default, #dfbf00)}.ngc-alert.ngc-danger{--alert-border-color: color-mix(in srgb, var(--ngc-color-danger-default, #ff3130) 30%, #fff);--alert-bg-color: color-mix(in srgb, var(--ngc-color-danger-default, #ff3130) 10%, #fff);--alert-text-color: var(--ngc-color-danger-default, #ff3130)}.ngc-alert .ngc-alert-icon{margin-right:12px;display:flex;align-items:center;--icon-color: var(--alert-text-color, var(--ngc-color-neutral-text-primary, #242426)) !important}.ngc-alert .ngc-alert-content{flex:1;min-width:0}.ngc-alert .ngc-alert-close-btn{margin-left:12px;--icon-button-icon-color: var(--alert-text-color, var(--ngc-color-neutral-text-primary, #242426)) !important;--icon-button-color: transparent !important}.ngc-alert .ngc-alert-close-btn:hover{--icon-button-color: rgba(120, 120, 120, .15) !important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { styleBorderColor: [{
                type: HostBinding,
                args: ['style.--alert-border-color']
            }], styleBgColor: [{
                type: HostBinding,
                args: ['style.--alert-bg-color']
            }], styleTextColor: [{
                type: HostBinding,
                args: ['style.--alert-text-color']
            }], color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], background: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], icon: [{
                type: Input
            }], closeable: [{
                type: Input
            }], closed: [{
                type: Output
            }], classHidden: [{
                type: HostBinding,
                args: ['class.ngc-alert-hidden']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWFsZXJ0L25nYy1hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1hbGVydC9uZ2MtYWxlcnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDekQsVUFBVSxFQUEyQyxXQUFXLEVBQ2hFLHVCQUF1QixFQUN2QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFDOzs7OztBQVV0QyxNQUFNLE9BQU8saUJBQWlCO0lBc0M3Qjs7O09BR0c7SUFDSCxZQUFxQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWxCM0IsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWhFLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFnQmUsQ0FBQztJQXhDakQsSUFDSSxnQkFBZ0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELElBQ0ksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELElBQ0ksY0FBYztRQUNqQixP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T0FBTyxHQUFHLENBQUM7U0FDbkY7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7OzhHQTVGVyxpQkFBaUI7a0dBQWpCLGlCQUFpQiwrZkNoQjlCLHFSQUtBO0FEaUNDO0lBQVUsYUFBYSxFQUFFOztvREFBMkI7MkZBdEJ4QyxpQkFBaUI7a0JBUjdCLFNBQVM7K0JBQ0csdUJBQXVCLFFBRzFCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFDZixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO2lHQUs1QyxnQkFBZ0I7c0JBRG5CLFdBQVc7dUJBQUUsNEJBQTRCO2dCQU10QyxZQUFZO3NCQURmLFdBQVc7dUJBQUUsd0JBQXdCO2dCQU1sQyxjQUFjO3NCQURqQixXQUFXO3VCQUFFLDBCQUEwQjtnQkFLeEIsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxTQUFTO3NCQUF4QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLO2dCQUMyQixTQUFTO3NCQUF6QyxLQUFLO2dCQUVXLE1BQU07c0JBQXRCLE1BQU07Z0JBS0gsV0FBVztzQkFEZCxXQUFXO3VCQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcblx0RWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBIb3N0QmluZGluZyxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvZXJjZUJvb2xlYW4gfSBmcm9tICdAY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtYWxlcnQsIFtuZ2NBbGVydF0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1hbGVydC5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtYWxlcnQuc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy1hbGVydCcgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1hbGVydC1ib3JkZXItY29sb3InIClcblx0Z2V0IHN0eWxlQm9yZGVyQ29sb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5ib3JkZXJDb2xvciB8fCAodGhpcy5pc0N1c3RvbUNvbG9yID8gdGhpcy5jb2xvciA6IHVuZGVmaW5lZCk7XG5cdH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWFsZXJ0LWJnLWNvbG9yJyApXG5cdGdldCBzdHlsZUJnQ29sb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kIHx8ICh0aGlzLmlzQ3VzdG9tQ29sb3IgPyB0aGlzLl9oZXhUb1JnYmEodGhpcy5jb2xvciwgMC4xKSA6IHVuZGVmaW5lZCk7XG5cdH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWFsZXJ0LXRleHQtY29sb3InIClcblx0Z2V0IHN0eWxlVGV4dENvbG9yKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudGV4dENvbG9yIHx8ICh0aGlzLmlzQ3VzdG9tQ29sb3IgPyB0aGlzLmNvbG9yIDogdW5kZWZpbmVkKTtcblx0fVxuXG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgdGV4dENvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBiYWNrZ3JvdW5kOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBib3JkZXJDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBjbG9zZWFibGU6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpIHB1YmxpYyBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRwdWJsaWMgaXNDbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm5nYy1hbGVydC1oaWRkZW4nKVxuXHRnZXQgY2xhc3NIaWRkZW4oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaXNDbG9zZWQ7XG5cdH1cblxuXHRnZXQgaXNDdXN0b21Db2xvcigpOiBib29sZWFuIHtcblx0XHRjb25zdCBwcmVzZXRzID0gWydwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbycsICdzZWNvbmRhcnknLCAnZGVmYXVsdCddO1xuXHRcdHJldHVybiAhIXRoaXMuY29sb3IgJiYgIXByZXNldHMuaW5jbHVkZXModGhpcy5jb2xvcik7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5fYXBwbHlDb2xvckNsYXNzKCk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLmNvbG9yICYmICFjaGFuZ2VzLmNvbG9yLmZpcnN0Q2hhbmdlKSB7XG5cdFx0XHR0aGlzLl9hcHBseUNvbG9yQ2xhc3MoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgY2xvc2UoZXZlbnQ/OiBFdmVudCkge1xuXHRcdGlmIChldmVudCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0XHR0aGlzLmlzQ2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLmNsb3NlZC5lbWl0KCk7XG5cdH1cblxuXHRwcml2YXRlIF9hcHBseUNvbG9yQ2xhc3MoKSB7XG5cdFx0Y29uc3QgbmF0aXZlRWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0Ly8gUmVtb3ZlIGV4aXN0aW5nIHByZXNldCBjbGFzc2VzXG5cdFx0Y29uc3QgcHJlc2V0cyA9IFsncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2luZm8nLCAnc2Vjb25kYXJ5JywgJ2RlZmF1bHQnXTtcblx0XHRwcmVzZXRzLmZvckVhY2gocCA9PiBuYXRpdmVFbC5jbGFzc0xpc3QucmVtb3ZlKCduZ2MtJyArIHApKTtcblxuXHRcdGlmICh0aGlzLmNvbG9yICYmIHByZXNldHMuaW5jbHVkZXModGhpcy5jb2xvcikpIHtcblx0XHRcdG5hdGl2ZUVsLmNsYXNzTGlzdC5hZGQoJ25nYy0nICsgdGhpcy5jb2xvcik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfaGV4VG9SZ2JhKGhleDogc3RyaW5nLCBvcGFjaXR5OiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdGlmICghaGV4KSByZXR1cm4gJyc7XG5cdFx0aWYgKGhleC5zdGFydHNXaXRoKCcjJykpIHtcblx0XHRcdGxldCBjID0gaGV4LnN1YnN0cmluZygxKTtcblx0XHRcdGlmIChjLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0XHRjID0gY1swXSArIGNbMF0gKyBjWzFdICsgY1sxXSArIGNbMl0gKyBjWzJdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbnVtID0gcGFyc2VJbnQoYywgMTYpO1xuXHRcdFx0cmV0dXJuIGByZ2JhKCR7KG51bSA+PiAxNikgJiAyNTV9LCAkeyhudW0gPj4gOCkgJiAyNTV9LCAke251bSAmIDI1NX0sICR7b3BhY2l0eX0pYDtcblx0XHR9XG5cdFx0cmV0dXJuIGhleDtcblx0fVxuXG59XG4iLCI8bmdjLWljb24gKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJuZ2MtYWxlcnQtaWNvblwiIFtuYW1lXT1cImljb25cIj48L25nYy1pY29uPlxuPGRpdiBjbGFzcz1cIm5nYy1hbGVydC1jb250ZW50XCI+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPGJ1dHRvbiAqbmdJZj1cImNsb3NlYWJsZVwiIGNsYXNzPVwibmdjLWFsZXJ0LWNsb3NlLWJ0blwiIG5nY0ljb25CdXR0b24gaWNvbj1cImNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48L2J1dHRvbj5cbiJdfQ==