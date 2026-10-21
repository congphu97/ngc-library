import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, NgZone, HostBinding } from '@angular/core';
import { Unsubscriber } from '@core';
import { NgcScrollBar } from './ngc-scroll-bar';
import * as i0 from "@angular/core";
let NgcScrollBarDirective = class NgcScrollBarDirective extends NgcScrollBar {
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
    get attrScrollBar() { return !this.suppress || undefined; }
    get attrScrollBarSuppressX() { return this.suppressScrollX || undefined; }
    get attrScrollBarSuppressY() { return this.suppressScrollY || undefined; }
};
NgcScrollBarDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcScrollBarDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
NgcScrollBarDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcScrollBarDirective, selector: "[ngcScrollBar]", host: { properties: { "style.--scroll-bar-mode": "this.styleMode", "attr.scrollBar": "this.attrScrollBar", "attr.scrollBarSuppressX": "this.attrScrollBarSuppressX", "attr.scrollBarSuppressY": "this.attrScrollBarSuppressY" } }, exportAs: ["ngcScrollBar"], usesInheritance: true, ngImport: i0 });
NgcScrollBarDirective = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ElementRef, NgZone])
], NgcScrollBarDirective);
export { NgcScrollBarDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcScrollBarDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcScrollBar]', exportAs: 'ngcScrollBar' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { styleMode: [{
                type: HostBinding,
                args: ['style.--scroll-bar-mode']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXNjcm9sbC1iYXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2Mtc2Nyb2xsLWJhci9uZ2Mtc2Nyb2xsLWJhci9uZ2Mtc2Nyb2xsLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBSXpDLElBQU0scUJBQXFCLEdBQTNCLE1BQU0scUJBQXNCLFNBQVEsWUFBWTtJQWN0RDs7OztPQUlHO0lBQ0gsWUFBb0IsVUFBc0IsRUFBWSxNQUFjO1FBQ25FLEtBQUssRUFBRSxDQUFDO1FBRFcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFZLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFcEUsQ0FBQztJQW5CRCxJQUNJLFNBQVMsS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTdDLElBQ0ksYUFBYSxLQUFjLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFcEUsSUFDSSxzQkFBc0IsS0FBYyxPQUFPLElBQUksQ0FBQyxlQUFlLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztJQUVuRixJQUNJLHNCQUFzQixLQUFjLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDOztrSEFadkUscUJBQXFCO3NHQUFyQixxQkFBcUI7QUFBckIscUJBQXFCO0lBRmpDLFlBQVksRUFBRTtxQ0FxQmtCLFVBQVUsRUFBb0IsTUFBTTtHQW5CeEQscUJBQXFCLENBdUJqQztTQXZCWSxxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO3NIQUk5RCxTQUFTO3NCQURaLFdBQVc7dUJBQUUseUJBQXlCO2dCQUluQyxhQUFhO3NCQURoQixXQUFXO3VCQUFFLGdCQUFnQjtnQkFJMUIsc0JBQXNCO3NCQUR6QixXQUFXO3VCQUFFLHlCQUF5QjtnQkFJbkMsc0JBQXNCO3NCQUR6QixXQUFXO3VCQUFFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgTmdab25lLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVbnN1YnNjcmliZXIgfSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXIgfSBmcm9tICcuL25nYy1zY3JvbGwtYmFyJztcblxuQFVuc3Vic2NyaWJlcigpXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmdjU2Nyb2xsQmFyXScsIGV4cG9ydEFzOiAnbmdjU2Nyb2xsQmFyJyB9KVxuZXhwb3J0IGNsYXNzIE5nY1Njcm9sbEJhckRpcmVjdGl2ZSBleHRlbmRzIE5nY1Njcm9sbEJhciB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1zY3JvbGwtYmFyLW1vZGUnIClcblx0Z2V0IHN0eWxlTW9kZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tb2RlOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnYXR0ci5zY3JvbGxCYXInIClcblx0Z2V0IGF0dHJTY3JvbGxCYXIoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5zdXBwcmVzcyB8fCB1bmRlZmluZWQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdhdHRyLnNjcm9sbEJhclN1cHByZXNzWCcgKVxuXHRnZXQgYXR0clNjcm9sbEJhclN1cHByZXNzWCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuc3VwcHJlc3NTY3JvbGxYIHx8IHVuZGVmaW5lZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2F0dHIuc2Nyb2xsQmFyU3VwcHJlc3NZJyApXG5cdGdldCBhdHRyU2Nyb2xsQmFyU3VwcHJlc3NZKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5zdXBwcmVzc1Njcm9sbFkgfHwgdW5kZWZpbmVkOyB9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtOZ1pvbmV9IG5nWm9uZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUgKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG59XG4iXX0=