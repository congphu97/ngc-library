import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef, ViewEncapsulation, ContentChild, HostListener, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { ContrastPipe, DefaultValue, CoerceBoolean, CoerceCssPixel } from '@core';
import { NgcButtonIconDirective } from '../button-icon/ngc-button-icon.directive';
import * as i0 from "@angular/core";
import * as i1 from "@core";
import * as i2 from "@angular/common";
import * as i3 from "../../ngc-loading/ngc-loading.component";
import * as i4 from "../../ngc-icon/ngc-icon.component";
export class NgcButtonComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_elementRef, _contrastPipe) {
        this._elementRef = _elementRef;
        this._contrastPipe = _contrastPipe;
        this.type = 'button';
        this.iconSize = '20px';
        this.alignment = 'center';
    }
    get attrType() { return this.type; }
    get attrDisabled() { return this.disabled || undefined; }
    get styleColor() { return this.color; }
    get styleTextColor() { return this.textColor; }
    get styleSize() { return this.size; }
    get styleIconSize() { return this.iconSize; }
    get styleBorderColor() { return this.borderColor; }
    get styleBorderStyle() { return this.borderStyle; }
    get styleWidth() { return this.borderWidth; }
    get classHasIcon() { return !!this.buttonIcon || !!this.icon; }
    get classDisabled() { return this.disabled; }
    get classLoading() { return this.loading; }
    get classLeft() { return this.alignment === 'left'; }
    get classRight() { return this.alignment === 'right'; }
    get classCenter() { return this.alignment === 'center'; }
    triggerKeyDownEnterAndSpace(event) {
        this._elementRef.nativeElement === document.activeElement && event.preventDefault();
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (changes.textColor)
            this._bkTextColor = this.textColor;
        if (changes.color)
            this.textColor = this._bkTextColor || this._contrastPipe.transform(this.color);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.color && this._elementRef.nativeElement.classList.add('ngc-' + this.color);
    }
}
NgcButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonComponent, deps: [{ token: i0.ElementRef }, { token: i1.ContrastPipe }], target: i0.ɵɵFactoryTarget.Component });
NgcButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcButtonComponent, selector: "button[ngcButton]", inputs: { type: "type", color: "color", textColor: "textColor", size: "size", icon: "icon", iconSize: "iconSize", borderColor: "borderColor", borderStyle: "borderStyle", borderWidth: "borderWidth", disabled: "disabled", loading: "loading", alignment: "alignment" }, host: { listeners: { "keydown.enter": "triggerKeyDownEnterAndSpace($event)", "keydown.space": "triggerKeyDownEnterAndSpace($event)" }, properties: { "attr.type": "this.attrType", "attr.disabled": "this.attrDisabled", "style.--button-color": "this.styleColor", "style.--button-text-color": "this.styleTextColor", "style.--button-size": "this.styleSize", "style.--button-icon-size": "this.styleIconSize", "style.--button-border-color": "this.styleBorderColor", "style.--button-border-style": "this.styleBorderStyle", "style.--button-border-width": "this.styleWidth", "class.ngc-button--has-icon": "this.classHasIcon", "class.ngc-button--disabled": "this.classDisabled", "class.ngc-button--loading": "this.classLoading", "class.ngc-button--left": "this.classLeft", "class.ngc-button--right": "this.classRight", "class.ngc-button--center": "this.classCenter" }, classAttribute: "ngc-button" }, providers: [ContrastPipe], queries: [{ propertyName: "buttonIcon", first: true, predicate: NgcButtonIconDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"ngc-button-wrapper\">\n  <div class=\"ngc-button__icon\" *ngIf=\"buttonIcon || icon\">\n    <ng-content select=\"[ngcButtonIcon]\"></ng-content>\n    <ngc-icon [name]=\"icon\"></ngc-icon>\n  </div>\n  <div class=\"ngc-button__content\">\n    <ng-content></ng-content>\n  </div>\n  <ngc-loading class=\"ngc-button__loading\" *ngIf=\"loading\"></ngc-loading>\n</div>\n", styles: [".ngc-button{display:flex;cursor:pointer;min-width:fit-content;height:var(--button-size, 40px);min-height:var(--button-size, 40px);max-height:var(--button-size, 40px);font-weight:var(--ngc-font-weight-semibold, 600);color:var(--button-text-color, var(--ngc-color-neutral-text-primary, #242426));background-color:var(--button-color, var(--ngc-color-neutral-white, #fff));border-width:var(--button-border-width, 1px);border-style:var(--button-border-style, solid);border-color:var(--button-border-color, var(--ngc-color-neutral-border-strong, #babcc0));border-radius:8px}.ngc-button.ngc-primary{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));border-color:var(--primary-color, var(--ngc-color-primary-default, #444446));color:var(--ngc-color-neutral-white, #fff)}.ngc-button.ngc-primary.ngc-button--loading .ngc-loading--dots .ngc-loading-dot{background-color:var(--ngc-color-neutral-white, #fff)}.ngc-button.ngc-white{background-color:var(--ngc-color-neutral-white, #fff);border-color:var(--button-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));color:var(--button-text-color, var(--ngc-color-neutral-text-primary, #242426))}.ngc-button:not(.ngc-button--has-icon) .ngc-button-wrapper{min-width:calc(var(--button-size, 40px) * 2)}.ngc-button.ngc-button--has-icon .ngc-button__content{padding-left:5px;padding-right:5px}.ngc-button:not(.ngc-button--disabled):hover{opacity:.8}.ngc-button:not(.ngc-button--disabled):focus-visible{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4))}.ngc-button.ngc-button--disabled{cursor:not-allowed;background-color:var(--ngc-color-neutral-text-disabled, #c4c4c6);border-color:var(--ngc-color-neutral-text-disabled, #c4c4c6);color:var(--ngc-color-neutral-white, #fff)}.ngc-button.ngc-button--disabled:active{pointer-events:none}.ngc-button.ngc-button--loading .ngc-loading--dots .ngc-loading-dot{background-color:var(--ngc-color-neutral-black, #0a0a0a)}.ngc-button.ngc-button--loading .ngc-button__icon,.ngc-button.ngc-button--loading .ngc-button__content{display:none}.ngc-button.ngc-button--left .ngc-button-wrapper{justify-content:flex-start}.ngc-button.ngc-button--center .ngc-button-wrapper{justify-content:center}.ngc-button.ngc-button--right .ngc-button-wrapper{justify-content:flex-end}.ngc-button .ngc-button-wrapper{display:flex;align-items:center;padding-left:10px;padding-right:10px;width:100%;height:100%}.ngc-button .ngc-button__icon{font-size:var(--button-icon-size, inherit);line-height:var(--button-icon-size, inherit)}.ngc-button .ngc-button__content{display:flex;align-items:center}.ngc-button .ngc-button__content:empty{display:none}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NgcLoadingComponent, selector: "ngc-loading", inputs: ["color", "backgroundColor", "size", "fullPage"] }, { kind: "component", type: i4.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcButtonComponent.prototype, "type", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcButtonComponent.prototype, "size", void 0);
__decorate([
    DefaultValue(),
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcButtonComponent.prototype, "iconSize", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcButtonComponent.prototype, "borderWidth", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonComponent.prototype, "loading", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcButtonComponent.prototype, "alignment", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[ngcButton]', providers: [ContrastPipe], host: { class: 'ngc-button' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-button-wrapper\">\n  <div class=\"ngc-button__icon\" *ngIf=\"buttonIcon || icon\">\n    <ng-content select=\"[ngcButtonIcon]\"></ng-content>\n    <ngc-icon [name]=\"icon\"></ngc-icon>\n  </div>\n  <div class=\"ngc-button__content\">\n    <ng-content></ng-content>\n  </div>\n  <ngc-loading class=\"ngc-button__loading\" *ngIf=\"loading\"></ngc-loading>\n</div>\n", styles: [".ngc-button{display:flex;cursor:pointer;min-width:fit-content;height:var(--button-size, 40px);min-height:var(--button-size, 40px);max-height:var(--button-size, 40px);font-weight:var(--ngc-font-weight-semibold, 600);color:var(--button-text-color, var(--ngc-color-neutral-text-primary, #242426));background-color:var(--button-color, var(--ngc-color-neutral-white, #fff));border-width:var(--button-border-width, 1px);border-style:var(--button-border-style, solid);border-color:var(--button-border-color, var(--ngc-color-neutral-border-strong, #babcc0));border-radius:8px}.ngc-button.ngc-primary{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));border-color:var(--primary-color, var(--ngc-color-primary-default, #444446));color:var(--ngc-color-neutral-white, #fff)}.ngc-button.ngc-primary.ngc-button--loading .ngc-loading--dots .ngc-loading-dot{background-color:var(--ngc-color-neutral-white, #fff)}.ngc-button.ngc-white{background-color:var(--ngc-color-neutral-white, #fff);border-color:var(--button-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));color:var(--button-text-color, var(--ngc-color-neutral-text-primary, #242426))}.ngc-button:not(.ngc-button--has-icon) .ngc-button-wrapper{min-width:calc(var(--button-size, 40px) * 2)}.ngc-button.ngc-button--has-icon .ngc-button__content{padding-left:5px;padding-right:5px}.ngc-button:not(.ngc-button--disabled):hover{opacity:.8}.ngc-button:not(.ngc-button--disabled):focus-visible{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4))}.ngc-button.ngc-button--disabled{cursor:not-allowed;background-color:var(--ngc-color-neutral-text-disabled, #c4c4c6);border-color:var(--ngc-color-neutral-text-disabled, #c4c4c6);color:var(--ngc-color-neutral-white, #fff)}.ngc-button.ngc-button--disabled:active{pointer-events:none}.ngc-button.ngc-button--loading .ngc-loading--dots .ngc-loading-dot{background-color:var(--ngc-color-neutral-black, #0a0a0a)}.ngc-button.ngc-button--loading .ngc-button__icon,.ngc-button.ngc-button--loading .ngc-button__content{display:none}.ngc-button.ngc-button--left .ngc-button-wrapper{justify-content:flex-start}.ngc-button.ngc-button--center .ngc-button-wrapper{justify-content:center}.ngc-button.ngc-button--right .ngc-button-wrapper{justify-content:flex-end}.ngc-button .ngc-button-wrapper{display:flex;align-items:center;padding-left:10px;padding-right:10px;width:100%;height:100%}.ngc-button .ngc-button__icon{font-size:var(--button-icon-size, inherit);line-height:var(--button-icon-size, inherit)}.ngc-button .ngc-button__content{display:flex;align-items:center}.ngc-button .ngc-button__content:empty{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.ContrastPipe }]; }, propDecorators: { attrType: [{
                type: HostBinding,
                args: ['attr.type']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], styleColor: [{
                type: HostBinding,
                args: ['style.--button-color']
            }], styleTextColor: [{
                type: HostBinding,
                args: ['style.--button-text-color']
            }], styleSize: [{
                type: HostBinding,
                args: ['style.--button-size']
            }], styleIconSize: [{
                type: HostBinding,
                args: ['style.--button-icon-size']
            }], styleBorderColor: [{
                type: HostBinding,
                args: ['style.--button-border-color']
            }], styleBorderStyle: [{
                type: HostBinding,
                args: ['style.--button-border-style']
            }], styleWidth: [{
                type: HostBinding,
                args: ['style.--button-border-width']
            }], classHasIcon: [{
                type: HostBinding,
                args: ['class.ngc-button--has-icon']
            }], classDisabled: [{
                type: HostBinding,
                args: ['class.ngc-button--disabled']
            }], classLoading: [{
                type: HostBinding,
                args: ['class.ngc-button--loading']
            }], classLeft: [{
                type: HostBinding,
                args: ['class.ngc-button--left']
            }], classRight: [{
                type: HostBinding,
                args: ['class.ngc-button--right']
            }], classCenter: [{
                type: HostBinding,
                args: ['class.ngc-button--center']
            }], buttonIcon: [{
                type: ContentChild,
                args: [NgcButtonIconDirective]
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], borderStyle: [{
                type: Input
            }], borderWidth: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], alignment: [{
                type: Input
            }], triggerKeyDownEnterAndSpace: [{
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1idXR0b24vYnV0dG9uL25nYy1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtYnV0dG9uL2J1dHRvbi9uZ2MtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQ2IsaUJBQWlCLEVBQUUsWUFBWSxFQUNwQixZQUFZLEVBQ3RDLHVCQUF1QixFQUFFLFdBQVcsRUFDcEMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7O0FBY2xGLE1BQU0sT0FBTyxrQkFBa0I7SUFnRTlCOzs7O09BSUc7SUFDSCxZQUFxQixXQUF1QixFQUFVLGFBQTJCO1FBQTVELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFwQmpELFNBQUksR0FBVyxRQUFRLENBQUM7UUFLTixhQUFRLEdBQVcsTUFBTSxDQUFDO1FBTTVDLGNBQVMsR0FBd0IsUUFBUSxDQUFDO0lBU1csQ0FBQztJQW5FdEYsSUFDSSxRQUFRLEtBQWEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1QyxJQUNJLFlBQVksS0FBYyxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztJQUVsRSxJQUNJLFVBQVUsS0FBYSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FB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dXQsIEVsZW1lbnRSZWYsXG5cdEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDb250ZW50Q2hpbGQsXG5cdFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgSG9zdExpc3RlbmVyLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyYXN0UGlwZSwgRGVmYXVsdFZhbHVlLCBDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCB9IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IE5nY0J1dHRvbkljb25EaXJlY3RpdmUgfSBmcm9tICcuLi9idXR0b24taWNvbi9uZ2MtYnV0dG9uLWljb24uZGlyZWN0aXZlJztcblxuXG5leHBvcnQgdHlwZSBuZ2NJQnV0dG9uQWxpZ25tZW50ID0gJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdidXR0b25bbmdjQnV0dG9uXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ2MtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbmdjLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuXHRwcm92aWRlcnNcdFx0OiBbIENvbnRyYXN0UGlwZSBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWJ1dHRvbicgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG5cdEBIb3N0QmluZGluZyggJ2F0dHIudHlwZScgKVxuXHRnZXQgYXR0clR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudHlwZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2F0dHIuZGlzYWJsZWQnIClcblx0Z2V0IGF0dHJEaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgdW5kZWZpbmVkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1idXR0b24tY29sb3InIClcblx0Z2V0IHN0eWxlQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWJ1dHRvbi10ZXh0LWNvbG9yJyApXG5cdGdldCBzdHlsZVRleHRDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50ZXh0Q29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWJ1dHRvbi1zaXplJyApXG5cdGdldCBzdHlsZVNpemUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc2l6ZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tYnV0dG9uLWljb24tc2l6ZScgKVxuXHRnZXQgc3R5bGVJY29uU2l6ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5pY29uU2l6ZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tYnV0dG9uLWJvcmRlci1jb2xvcicgKVxuXHRnZXQgc3R5bGVCb3JkZXJDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5ib3JkZXJDb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tYnV0dG9uLWJvcmRlci1zdHlsZScgKVxuXHRnZXQgc3R5bGVCb3JkZXJTdHlsZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5ib3JkZXJTdHlsZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tYnV0dG9uLWJvcmRlci13aWR0aCcgKVxuXHRnZXQgc3R5bGVXaWR0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5ib3JkZXJXaWR0aDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1idXR0b24tLWhhcy1pY29uJyApXG5cdGdldCBjbGFzc0hhc0ljb24oKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuYnV0dG9uSWNvbiB8fCAhIXRoaXMuaWNvbjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1idXR0b24tLWRpc2FibGVkJyApXG5cdGdldCBjbGFzc0Rpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5kaXNhYmxlZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1idXR0b24tLWxvYWRpbmcnIClcblx0Z2V0IGNsYXNzTG9hZGluZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubG9hZGluZzsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1idXR0b24tLWxlZnQnIClcblx0Z2V0IGNsYXNzTGVmdCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYWxpZ25tZW50ID09PSAnbGVmdCc7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtYnV0dG9uLS1yaWdodCcgKVxuXHRnZXQgY2xhc3NSaWdodCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYWxpZ25tZW50ID09PSAncmlnaHQnOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWJ1dHRvbi0tY2VudGVyJyApXG5cdGdldCBjbGFzc0NlbnRlcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYWxpZ25tZW50ID09PSAnY2VudGVyJzsgfVxuXG5cdEBDb250ZW50Q2hpbGQoIE5nY0J1dHRvbkljb25EaXJlY3RpdmUgKSBwdWJsaWMgYnV0dG9uSWNvbjogTmdjQnV0dG9uSWNvbkRpcmVjdGl2ZTtcblxuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHR5cGU6IHN0cmluZyA9ICdidXR0b24nO1xuXHRASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHRleHRDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGljb25TaXplOiBzdHJpbmcgPSAnMjBweCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBib3JkZXJDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYm9yZGVyU3R5bGU6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGJvcmRlcldpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIGFsaWdubWVudDogbmdjSUJ1dHRvbkFsaWdubWVudCA9ICdjZW50ZXInO1xuXG5cdHByaXZhdGUgX2JrVGV4dENvbG9yOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IF9lbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7Q29udHJhc3RQaXBlfSBfY29udHJhc3RQaXBlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY29udHJhc3RQaXBlOiBDb250cmFzdFBpcGUgKSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLmVudGVyJywgWyAnJGV2ZW50JyBdIClcblx0QEhvc3RMaXN0ZW5lciggJ2tleWRvd24uc3BhY2UnLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlcktleURvd25FbnRlckFuZFNwYWNlKCBldmVudDogS2V5Ym9hcmRFdmVudCApIHtcblx0XHR0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIGNoYW5nZXMudGV4dENvbG9yICkgdGhpcy5fYmtUZXh0Q29sb3IgPSB0aGlzLnRleHRDb2xvcjtcblx0XHRpZiAoIGNoYW5nZXMuY29sb3IgKSB0aGlzLnRleHRDb2xvciA9IHRoaXMuX2JrVGV4dENvbG9yIHx8IHRoaXMuX2NvbnRyYXN0UGlwZS50cmFuc2Zvcm0oIHRoaXMuY29sb3IgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNvbG9yICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnbmdjLScgKyB0aGlzLmNvbG9yICk7XG5cdH1cblxufSIsIjxkaXYgY2xhc3M9XCJuZ2MtYnV0dG9uLXdyYXBwZXJcIj5cbiAgPGRpdiBjbGFzcz1cIm5nYy1idXR0b25fX2ljb25cIiAqbmdJZj1cImJ1dHRvbkljb24gfHwgaWNvblwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltuZ2NCdXR0b25JY29uXVwiPjwvbmctY29udGVudD5cbiAgICA8bmdjLWljb24gW25hbWVdPVwiaWNvblwiPjwvbmdjLWljb24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibmdjLWJ1dHRvbl9fY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxuZ2MtbG9hZGluZyBjbGFzcz1cIm5nYy1idXR0b25fX2xvYWRpbmdcIiAqbmdJZj1cImxvYWRpbmdcIj48L25nYy1sb2FkaW5nPlxuPC9kaXY+XG4iXX0=