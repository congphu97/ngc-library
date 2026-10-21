import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef, ViewEncapsulation, ContentChild, HostListener, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { DefaultValue, CoerceBoolean, CoerceCssPixel } from '@core';
import { NgcButtonIconDirective } from '../button-icon/ngc-button-icon.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../ngc-icon/ngc-icon.component";
export class NgcBasicButtonComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.type = 'button';
        this.iconSize = '20px';
        this.alignment = 'left';
    }
    get attrType() { return this.type; }
    get attrDisabled() { return this.disabled || undefined; }
    get styleColor() { return this.color; }
    get styleIconSize() { return this.iconSize; }
    get classHasIcon() { return !!this.buttonIcon || !!this.icon; }
    get classDisabled() { return this.disabled; }
    get classLeft() { return this.alignment === 'left'; }
    get classRight() { return this.alignment === 'right'; }
    get classCenter() { return this.alignment === 'center'; }
    triggerKeyDownEnterAndSpace(event) {
        this._elementRef.nativeElement === document.activeElement && event.preventDefault();
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.color && this._elementRef.nativeElement.classList.add('ngc-' + this.color);
    }
}
NgcBasicButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBasicButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcBasicButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcBasicButtonComponent, selector: "button[ngcBasicButton]", inputs: { type: "type", color: "color", icon: "icon", iconSize: "iconSize", disabled: "disabled", alignment: "alignment" }, host: { listeners: { "keydown.enter": "triggerKeyDownEnterAndSpace($event)", "keydown.space": "triggerKeyDownEnterAndSpace($event)" }, properties: { "attr.type": "this.attrType", "attr.disabled": "this.attrDisabled", "style.--basic-button-color": "this.styleColor", "style.--basic-button-icon-size": "this.styleIconSize", "class.ngc-basic-button--has-icon": "this.classHasIcon", "class.ngc-basic-button--disabled": "this.classDisabled", "class.ngc-basic-button--left": "this.classLeft", "class.ngc-basic-button--right": "this.classRight", "class.ngc-basic-button--center": "this.classCenter" }, classAttribute: "ngc-basic-button" }, queries: [{ propertyName: "buttonIcon", first: true, predicate: NgcButtonIconDirective, descendants: true }], ngImport: i0, template: "<div class=\"ngc-basic-button-wrapper\">\n  <div class=\"ngc-basic-button__icon\" *ngIf=\"buttonIcon || icon\">\n    <ng-content select=\"[ngcButtonIcon]\" *ngIf=\"buttonIcon\"></ng-content>\n    <ngc-icon *ngIf=\"icon\" [name]=\"icon\"></ngc-icon>\n  </div>\n  <div class=\"ngc-basic-button__content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [".ngc-basic-button{display:flex;cursor:pointer;width:fit-content;text-align:left;font-weight:var(--ngc-font-weight-semibold, 600);color:var(--basic-button-color, inherit);background-color:transparent;border:none}.ngc-basic-button.ngc-primary{color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-basic-button.ngc-basic-button--has-icon .ngc-basic-button__content{padding-left:5px;padding-right:5px}.ngc-basic-button:not(.ngc-basic-button--disabled):hover{opacity:.8}.ngc-basic-button:not(.ngc-basic-button--disabled):focus-visible{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4))}.ngc-basic-button.ngc-basic-button--disabled{cursor:not-allowed;color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-basic-button.ngc-basic-button--disabled:active{pointer-events:none}.ngc-basic-button.ngc-basic-button--left .ngc-basic-button-wrapper{justify-content:flex-start}.ngc-basic-button.ngc-basic-button--center .ngc-basic-button-wrapper{justify-content:center}.ngc-basic-button.ngc-basic-button--right .ngc-basic-button-wrapper{justify-content:flex-end}.ngc-basic-button .ngc-basic-button-wrapper{display:flex;align-items:center;height:100%;width:100%}.ngc-basic-button .ngc-basic-button__icon{font-size:var(--basic-button-icon-size, inherit);line-height:var(--basic-button-icon-size, inherit)}.ngc-basic-button .ngc-basic-button__content{display:flex;align-items:center}.ngc-basic-button .ngc-basic-button__content:empty{display:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcBasicButtonComponent.prototype, "type", void 0);
__decorate([
    DefaultValue(),
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcBasicButtonComponent.prototype, "iconSize", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcBasicButtonComponent.prototype, "disabled", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcBasicButtonComponent.prototype, "alignment", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBasicButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[ngcBasicButton]', host: { class: 'ngc-basic-button' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-basic-button-wrapper\">\n  <div class=\"ngc-basic-button__icon\" *ngIf=\"buttonIcon || icon\">\n    <ng-content select=\"[ngcButtonIcon]\" *ngIf=\"buttonIcon\"></ng-content>\n    <ngc-icon *ngIf=\"icon\" [name]=\"icon\"></ngc-icon>\n  </div>\n  <div class=\"ngc-basic-button__content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: [".ngc-basic-button{display:flex;cursor:pointer;width:fit-content;text-align:left;font-weight:var(--ngc-font-weight-semibold, 600);color:var(--basic-button-color, inherit);background-color:transparent;border:none}.ngc-basic-button.ngc-primary{color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-basic-button.ngc-basic-button--has-icon .ngc-basic-button__content{padding-left:5px;padding-right:5px}.ngc-basic-button:not(.ngc-basic-button--disabled):hover{opacity:.8}.ngc-basic-button:not(.ngc-basic-button--disabled):focus-visible{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4))}.ngc-basic-button.ngc-basic-button--disabled{cursor:not-allowed;color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-basic-button.ngc-basic-button--disabled:active{pointer-events:none}.ngc-basic-button.ngc-basic-button--left .ngc-basic-button-wrapper{justify-content:flex-start}.ngc-basic-button.ngc-basic-button--center .ngc-basic-button-wrapper{justify-content:center}.ngc-basic-button.ngc-basic-button--right .ngc-basic-button-wrapper{justify-content:flex-end}.ngc-basic-button .ngc-basic-button-wrapper{display:flex;align-items:center;height:100%;width:100%}.ngc-basic-button .ngc-basic-button__icon{font-size:var(--basic-button-icon-size, inherit);line-height:var(--basic-button-icon-size, inherit)}.ngc-basic-button .ngc-basic-button__content{display:flex;align-items:center}.ngc-basic-button .ngc-basic-button__content:empty{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrType: [{
                type: HostBinding,
                args: ['attr.type']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], styleColor: [{
                type: HostBinding,
                args: ['style.--basic-button-color']
            }], styleIconSize: [{
                type: HostBinding,
                args: ['style.--basic-button-icon-size']
            }], classHasIcon: [{
                type: HostBinding,
                args: ['class.ngc-basic-button--has-icon']
            }], classDisabled: [{
                type: HostBinding,
                args: ['class.ngc-basic-button--disabled']
            }], classLeft: [{
                type: HostBinding,
                args: ['class.ngc-basic-button--left']
            }], classRight: [{
                type: HostBinding,
                args: ['class.ngc-basic-button--right']
            }], classCenter: [{
                type: HostBinding,
                args: ['class.ngc-basic-button--center']
            }], buttonIcon: [{
                type: ContentChild,
                args: [NgcButtonIconDirective]
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], disabled: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJhc2ljLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1idXR0b24vYmFzaWMtYnV0dG9uL25nYy1iYXNpYy1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtYnV0dG9uL2Jhc2ljLWJ1dHRvbi9uZ2MtYmFzaWMtYnV0dG9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFDYixpQkFBaUIsRUFBRSxZQUFZLEVBQzlDLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQ2xELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQVlsRixNQUFNLE9BQU8sdUJBQXVCO0lBc0NuQzs7O09BR0c7SUFDSCxZQUFxQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVhaLFNBQUksR0FBVyxRQUFRLENBQUM7UUFHTixhQUFRLEdBQVcsTUFBTSxDQUFDO1FBRTVDLGNBQVMsR0FBNkIsTUFBTSxDQUFDO0lBTTdCLENBQUM7SUF4Q2pELElBQ0ksUUFBUSxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUMsSUFDSSxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFbEUsSUFDSSxVQUFVLEtBQWEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUvQyxJQUNJLGFBQWEsS0FBYSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXJELElBQ0ksWUFBWSxLQUFjLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXhFLElBQ0ksYUFBYSxLQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFdEQsSUFDSSxTQUFTLEtBQWMsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFOUQsSUFDSSxVQUFVLEtBQWMsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFaEUsSUFDSSxXQUFXLEtBQWMsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFtQjNELDJCQUEyQixDQUFFLEtBQW9CO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxLQUFLLFFBQVEsQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JGLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUNuRixDQUFDOztvSEF2RFcsdUJBQXVCO3dHQUF2Qix1QkFBdUIsMjFCQTZCcEIsc0JBQXNCLGdEQ2hEdEMsb1dBU0E7QUR5Q0M7SUFBVSxZQUFZLEVBQUU7O3FEQUFnQztBQUd4RDtJQUFVLFlBQVksRUFBRTtJQUFFLGNBQWMsRUFBRTs7eURBQWtDO0FBQzVFO0lBQVUsYUFBYSxFQUFFOzt5REFBMEI7QUFDbkQ7SUFBVSxZQUFZLEVBQUU7OzBEQUFxRDsyRkFwQ2pFLHVCQUF1QjtrQkFSbkMsU0FBUzsrQkFDRyx3QkFBd0IsUUFHM0IsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsaUJBQ3RCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07aUdBSzVDLFFBQVE7c0JBRFgsV0FBVzt1QkFBRSxXQUFXO2dCQUlyQixZQUFZO3NCQURmLFdBQVc7dUJBQUUsZUFBZTtnQkFJekIsVUFBVTtzQkFEYixXQUFXO3VCQUFFLDRCQUE0QjtnQkFJdEMsYUFBYTtzQkFEaEIsV0FBVzt1QkFBRSxnQ0FBZ0M7Z0JBSTFDLFlBQVk7c0JBRGYsV0FBVzt1QkFBRSxrQ0FBa0M7Z0JBSTVDLGFBQWE7c0JBRGhCLFdBQVc7dUJBQUUsa0NBQWtDO2dCQUk1QyxTQUFTO3NCQURaLFdBQVc7dUJBQUUsOEJBQThCO2dCQUl4QyxVQUFVO3NCQURiLFdBQVc7dUJBQUUsK0JBQStCO2dCQUl6QyxXQUFXO3NCQURkLFdBQVc7dUJBQUUsZ0NBQWdDO2dCQUdDLFVBQVU7c0JBQXhELFlBQVk7dUJBQUUsc0JBQXNCO2dCQUVMLElBQUk7c0JBQW5DLEtBQUs7Z0JBQ1MsS0FBSztzQkFBcEIsS0FBSztnQkFDVyxJQUFJO3NCQUFuQixLQUFLO2dCQUM0QyxRQUFRO3NCQUF6RCxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMwQixTQUFTO3NCQUF4QyxLQUFLO2dCQVVDLDJCQUEyQjtzQkFGakMsWUFBWTt1QkFBRSxlQUFlLEVBQUUsQ0FBRSxRQUFRLENBQUU7O3NCQUMzQyxZQUFZO3VCQUFFLGVBQWUsRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsXG5cdEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDb250ZW50Q2hpbGQsXG5cdEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0VmFsdWUsIENvZXJjZUJvb2xlYW4sIENvZXJjZUNzc1BpeGVsIH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgTmdjQnV0dG9uSWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2J1dHRvbi1pY29uL25nYy1idXR0b24taWNvbi5kaXJlY3RpdmUnO1xuXG5leHBvcnQgdHlwZSBOZ2NJQmFzaWNCdXR0b25BbGlnbm1lbnQgPSAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICdidXR0b25bbmdjQmFzaWNCdXR0b25dJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtYmFzaWMtYnV0dG9uLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1iYXNpYy1idXR0b24uc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy1iYXNpYy1idXR0b24nIH0sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjQmFzaWNCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASG9zdEJpbmRpbmcoICdhdHRyLnR5cGUnIClcblx0Z2V0IGF0dHJUeXBlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnR5cGU7IH1cblxuXHRASG9zdEJpbmRpbmcoICdhdHRyLmRpc2FibGVkJyApXG5cdGdldCBhdHRyRGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRpc2FibGVkIHx8IHVuZGVmaW5lZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tYmFzaWMtYnV0dG9uLWNvbG9yJyApXG5cdGdldCBzdHlsZUNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1iYXNpYy1idXR0b24taWNvbi1zaXplJyApXG5cdGdldCBzdHlsZUljb25TaXplKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmljb25TaXplOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWJhc2ljLWJ1dHRvbi0taGFzLWljb24nIClcblx0Z2V0IGNsYXNzSGFzSWNvbigpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5idXR0b25JY29uIHx8ICEhdGhpcy5pY29uOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWJhc2ljLWJ1dHRvbi0tZGlzYWJsZWQnIClcblx0Z2V0IGNsYXNzRGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRpc2FibGVkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWJhc2ljLWJ1dHRvbi0tbGVmdCcgKVxuXHRnZXQgY2xhc3NMZWZ0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hbGlnbm1lbnQgPT09ICdsZWZ0JzsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1iYXNpYy1idXR0b24tLXJpZ2h0JyApXG5cdGdldCBjbGFzc1JpZ2h0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hbGlnbm1lbnQgPT09ICdyaWdodCc7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtYmFzaWMtYnV0dG9uLS1jZW50ZXInIClcblx0Z2V0IGNsYXNzQ2VudGVyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hbGlnbm1lbnQgPT09ICdjZW50ZXInOyB9XG5cblx0QENvbnRlbnRDaGlsZCggTmdjQnV0dG9uSWNvbkRpcmVjdGl2ZSApIHB1YmxpYyBidXR0b25JY29uOiBOZ2NCdXR0b25JY29uRGlyZWN0aXZlO1xuXG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgdHlwZTogc3RyaW5nID0gJ2J1dHRvbic7XG5ASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGljb246IHN0cmluZztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBpY29uU2l6ZTogc3RyaW5nID0gJzIwcHgnO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBhbGlnbm1lbnQ6IE5nY0lCYXNpY0J1dHRvbkFsaWdubWVudCA9ICdsZWZ0JztcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHRASG9zdExpc3RlbmVyKCAna2V5ZG93bi5lbnRlcicsIFsgJyRldmVudCcgXSApXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLnNwYWNlJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJLZXlEb3duRW50ZXJBbmRTcGFjZSggZXZlbnQ6IEtleWJvYXJkRXZlbnQgKSB7XG5cdFx0dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jb2xvciAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ25nYy0nICsgdGhpcy5jb2xvciApO1xuXHR9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ2MtYmFzaWMtYnV0dG9uLXdyYXBwZXJcIj5cbiAgPGRpdiBjbGFzcz1cIm5nYy1iYXNpYy1idXR0b25fX2ljb25cIiAqbmdJZj1cImJ1dHRvbkljb24gfHwgaWNvblwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltuZ2NCdXR0b25JY29uXVwiICpuZ0lmPVwiYnV0dG9uSWNvblwiPjwvbmctY29udGVudD5cbiAgICA8bmdjLWljb24gKm5nSWY9XCJpY29uXCIgW25hbWVdPVwiaWNvblwiPjwvbmdjLWljb24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibmdjLWJhc2ljLWJ1dHRvbl9fY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==