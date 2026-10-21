import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ElementRef, HostListener, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';
import { CoerceBoolean, CoerceCssPixel, DefaultValue } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../ngc-icon/ngc-icon.component";
export class NgcButtonToggleItemComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.iconSize = '20px';
        this.activeState = true;
        this.clicked$ = new Subject();
    }
    get classActive() { return this.isActive; }
    get classDisabled() { return this.disabled; }
    get classOnlyIcon() { return this.onlyIcon; }
    triggerClick(event) {
        if (this.disabled)
            return;
        this.clicked$.next(event);
    }
}
NgcButtonToggleItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonToggleItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcButtonToggleItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcButtonToggleItemComponent, selector: "ngc-button-toggle-item", inputs: { icon: "icon", iconSize: "iconSize", label: "label", activeState: "activeState", disabled: "disabled", onlyIcon: "onlyIcon" }, host: { listeners: { "click": "triggerClick($event)" }, properties: { "class.ngc-button-toggle-item--active": "this.classActive", "class.ngc-button-toggle-item--disabled": "this.classDisabled", "class.ngc-button-toggle-item--only-icon": "this.classOnlyIcon" }, classAttribute: "ngc-button-toggle-item" }, ngImport: i0, template: "<ngc-icon\n  class=\"ngc-button-toggle-item__icon\"\n  *ngIf=\"icon\"\n  [name]=\"icon\"\n  [size]=\"iconSize\">\n</ngc-icon>\n\n{{ label }}\n\n<ng-container *ngIf=\"!label\">\n  <ng-content></ng-content>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcButtonToggleItemComponent.prototype, "iconSize", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonToggleItemComponent.prototype, "activeState", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonToggleItemComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonToggleItemComponent.prototype, "onlyIcon", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonToggleItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-button-toggle-item', host: { class: 'ngc-button-toggle-item' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ngc-icon\n  class=\"ngc-button-toggle-item__icon\"\n  *ngIf=\"icon\"\n  [name]=\"icon\"\n  [size]=\"iconSize\">\n</ngc-icon>\n\n{{ label }}\n\n<ng-container *ngIf=\"!label\">\n  <ng-content></ng-content>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { classActive: [{
                type: HostBinding,
                args: ['class.ngc-button-toggle-item--active']
            }], classDisabled: [{
                type: HostBinding,
                args: ['class.ngc-button-toggle-item--disabled']
            }], classOnlyIcon: [{
                type: HostBinding,
                args: ['class.ngc-button-toggle-item--only-icon']
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], label: [{
                type: Input
            }], activeState: [{
                type: Input
            }], disabled: [{
                type: Input
            }], onlyIcon: [{
                type: Input
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJ1dHRvbi10b2dnbGUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1idXR0b24tdG9nZ2xlL25nYy1idXR0b24tdG9nZ2xlLWl0ZW0vbmdjLWJ1dHRvbi10b2dnbGUtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1idXR0b24tdG9nZ2xlL25nYy1idXR0b24tdG9nZ2xlLWl0ZW0vbmdjLWJ1dHRvbi10b2dnbGUtaXRlbS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFDbkMsVUFBVSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFDakQsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE1BQU0sT0FBTyxDQUFDOzs7O0FBU3BFLE1BQU0sT0FBTyw0QkFBNEI7SUFxQnhDOzs7T0FHRztJQUNILFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFiUSxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBRTNCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBSXRFLGFBQVEsR0FBbUIsSUFBSSxPQUFPLEVBQVMsQ0FBQztJQU9ULENBQUM7SUF2Qi9DLElBQ0ksV0FBVyxLQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFcEQsSUFDSSxhQUFhLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUV0RCxJQUNJLGFBQWEsS0FBYyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBbUIvQyxZQUFZLENBQUUsS0FBWTtRQUNoQyxJQUFLLElBQUksQ0FBQyxRQUFRO1lBQUcsT0FBTztRQUU1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUM3QixDQUFDOzt5SEFoQ1csNEJBQTRCOzZHQUE1Qiw0QkFBNEIsdWZDaEJ6QyxpT0FZQTtBRGdCQztJQUFVLFlBQVksRUFBRTtJQUFFLGNBQWMsRUFBRTs7OERBQWtDO0FBRTVFO0lBQVUsWUFBWSxFQUFFO0lBQUUsYUFBYSxFQUFFOztpRUFBb0M7QUFDN0U7SUFBVSxhQUFhLEVBQUU7OzhEQUEwQjtBQUNuRDtJQUFVLGFBQWEsRUFBRTs7OERBQTBCOzJGQWhCdkMsNEJBQTRCO2tCQVB4QyxTQUFTOytCQUNHLHdCQUF3QixRQUUzQixFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxpQkFDNUIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTtpR0FLNUMsV0FBVztzQkFEZCxXQUFXO3VCQUFFLHNDQUFzQztnQkFJaEQsYUFBYTtzQkFEaEIsV0FBVzt1QkFBRSx3Q0FBd0M7Z0JBSWxELGFBQWE7c0JBRGhCLFdBQVc7dUJBQUUseUNBQXlDO2dCQUd2QyxJQUFJO3NCQUFuQixLQUFLO2dCQUM0QyxRQUFRO3NCQUF6RCxLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQzJDLFdBQVc7c0JBQTNELEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBWUMsWUFBWTtzQkFEbEIsWUFBWTt1QkFBRSxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCxcblx0RWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0SG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvZXJjZUJvb2xlYW4sIENvZXJjZUNzc1BpeGVsLCBEZWZhdWx0VmFsdWUgfSBmcm9tICdAY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtYnV0dG9uLXRvZ2dsZS1pdGVtJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtYnV0dG9uLXRvZ2dsZS1pdGVtLmh0bWwnLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWJ1dHRvbi10b2dnbGUtaXRlbScgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50IHtcblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtYnV0dG9uLXRvZ2dsZS1pdGVtLS1hY3RpdmUnIClcblx0Z2V0IGNsYXNzQWN0aXZlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc0FjdGl2ZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1idXR0b24tdG9nZ2xlLWl0ZW0tLWRpc2FibGVkJyApXG5cdGdldCBjbGFzc0Rpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5kaXNhYmxlZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1idXR0b24tdG9nZ2xlLWl0ZW0tLW9ubHktaWNvbicgKVxuXHRnZXQgY2xhc3NPbmx5SWNvbigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub25seUljb247IH1cblxuXHRASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGljb25TaXplOiBzdHJpbmcgPSAnMjBweCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgYWN0aXZlU3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgb25seUljb246IGJvb2xlYW47XG5cblx0cHVibGljIGNsaWNrZWQkOiBTdWJqZWN0PEV2ZW50PiA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuXHRwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHt9XG5cblx0QEhvc3RMaXN0ZW5lciggJ2NsaWNrJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJDbGljayggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCApIHJldHVybjtcblxuXHRcdHRoaXMuY2xpY2tlZCQubmV4dCggZXZlbnQgKTtcblx0fVxuXG59XG4iLCI8bmdjLWljb25cbiAgY2xhc3M9XCJuZ2MtYnV0dG9uLXRvZ2dsZS1pdGVtX19pY29uXCJcbiAgKm5nSWY9XCJpY29uXCJcbiAgW25hbWVdPVwiaWNvblwiXG4gIFtzaXplXT1cImljb25TaXplXCI+XG48L25nYy1pY29uPlxuXG57eyBsYWJlbCB9fVxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiIWxhYmVsXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuIl19