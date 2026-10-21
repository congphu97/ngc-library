import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, NgZone, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Unsubscriber } from '@core';
import { NgcScrollBar } from './ngc-scroll-bar';
import * as i0 from "@angular/core";
let NgcScrollBarComponent = class NgcScrollBarComponent extends NgcScrollBar {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {NgZone} ngZone
     */
    constructor(elementRef, ngZone) {
        super();
        this.elementRef = elementRef;
        this.ngZone = ngZone;
    }
    get styleMode() { return this.mode; }
    get styleSuppressMode() { return this.suppressMode; }
    get attrScrollBar() { return !this.suppress || undefined; }
    get attrScrollBarSuppressX() { return this.suppressScrollX || undefined; }
    get attrScrollBarSuppressY() { return this.suppressScrollY || undefined; }
};
NgcScrollBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcScrollBarComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
NgcScrollBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcScrollBarComponent, selector: "ngc-scroll-bar", host: { properties: { "style.--scroll-bar-mode": "this.styleMode", "style.--scroll-bar-suppress-mode": "this.styleSuppressMode", "attr.scrollBar": "this.attrScrollBar", "attr.scrollBarSuppressX": "this.attrScrollBarSuppressX", "attr.scrollBarSuppressY": "this.attrScrollBarSuppressY" }, classAttribute: "ngc-scroll-bar" }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
NgcScrollBarComponent = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ElementRef, NgZone])
], NgcScrollBarComponent);
export { NgcScrollBarComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcScrollBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-scroll-bar', host: { class: 'ngc-scroll-bar' }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { styleMode: [{
                type: HostBinding,
                args: ['style.--scroll-bar-mode']
            }], styleSuppressMode: [{
                type: HostBinding,
                args: ['style.--scroll-bar-suppress-mode']
            }], attrScrollBar: [{
                type: HostBinding,
                args: ['attr.scrollBar']
            }], attrScrollBarSuppressX: [{
                type: HostBinding,
                args: ['attr.scrollBarSuppressX']
            }], attrScrollBarSuppressY: [{
                type: HostBinding,
                args: ['attr.scrollBarSuppressY']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXNjcm9sbC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2Mtc2Nyb2xsLWJhci9uZ2Mtc2Nyb2xsLWJhci9uZ2Mtc2Nyb2xsLWJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1zY3JvbGwtYmFyL25nYy1zY3JvbGwtYmFyL25nYy1zY3JvbGwtYmFyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFDN0IsdUJBQXVCLEVBQUUsV0FBVyxFQUNwQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFTekMsSUFBTSxxQkFBcUIsR0FBM0IsTUFBTSxxQkFBc0IsU0FBUSxZQUFZO0lBaUJ0RDs7OztPQUlHO0lBQ0gsWUFBb0IsVUFBc0IsRUFBWSxNQUFjO1FBQ25FLEtBQUssRUFBRSxDQUFDO1FBRFcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFZLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFcEUsQ0FBQztJQXRCRCxJQUNJLFNBQVMsS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTdDLElBQ0ksaUJBQWlCLEtBQWEsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUU3RCxJQUNJLGFBQWEsS0FBYyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXBFLElBQ0ksc0JBQXNCLEtBQWMsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFbkYsSUFDSSxzQkFBc0IsS0FBYyxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzs7a0hBZnZFLHFCQUFxQjtzR0FBckIscUJBQXFCLGdaQ2ZsQywyQkFBeUI7QURlWixxQkFBcUI7SUFQakMsWUFBWSxFQUFFO3FDQTZCa0IsVUFBVSxFQUFvQixNQUFNO0dBdEJ4RCxxQkFBcUIsQ0EwQmpDO1NBMUJZLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNHLGdCQUFnQixRQUVuQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxtQkFDbEIsdUJBQXVCLENBQUMsTUFBTTtzSEFLNUMsU0FBUztzQkFEWixXQUFXO3VCQUFFLHlCQUF5QjtnQkFJbkMsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFFLGtDQUFrQztnQkFJNUMsYUFBYTtzQkFEaEIsV0FBVzt1QkFBRSxnQkFBZ0I7Z0JBSTFCLHNCQUFzQjtzQkFEekIsV0FBVzt1QkFBRSx5QkFBeUI7Z0JBSW5DLHNCQUFzQjtzQkFEekIsV0FBVzt1QkFBRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIEVsZW1lbnRSZWYsIE5nWm9uZSxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVbnN1YnNjcmliZXIgfSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXIgfSBmcm9tICcuL25nYy1zY3JvbGwtYmFyJztcblxuQFVuc3Vic2NyaWJlcigpXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLXNjcm9sbC1iYXInLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1zY3JvbGwtYmFyLmh0bWwnLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLXNjcm9sbC1iYXInIH0sXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY1Njcm9sbEJhckNvbXBvbmVudCBleHRlbmRzIE5nY1Njcm9sbEJhciB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1zY3JvbGwtYmFyLW1vZGUnIClcblx0Z2V0IHN0eWxlTW9kZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tb2RlOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1zY3JvbGwtYmFyLXN1cHByZXNzLW1vZGUnIClcblx0Z2V0IHN0eWxlU3VwcHJlc3NNb2RlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnN1cHByZXNzTW9kZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2F0dHIuc2Nyb2xsQmFyJyApXG5cdGdldCBhdHRyU2Nyb2xsQmFyKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuc3VwcHJlc3MgfHwgdW5kZWZpbmVkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnYXR0ci5zY3JvbGxCYXJTdXBwcmVzc1gnIClcblx0Z2V0IGF0dHJTY3JvbGxCYXJTdXBwcmVzc1goKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnN1cHByZXNzU2Nyb2xsWCB8fCB1bmRlZmluZWQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdhdHRyLnNjcm9sbEJhclN1cHByZXNzWScgKVxuXHRnZXQgYXR0clNjcm9sbEJhclN1cHByZXNzWSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuc3VwcHJlc3NTY3JvbGxZIHx8IHVuZGVmaW5lZDsgfVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7Tmdab25lfSBuZ1pvbmVcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lICkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==