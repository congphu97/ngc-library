import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { CoerceCssPixel, CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
export class NgcPageHeaderDirective {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
NgcPageHeaderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageHeaderDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcPageHeaderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcPageHeaderDirective, selector: "[ngcPageHeader]", inputs: { paddingVertical: "paddingVertical", paddingHorizontal: "paddingHorizontal", paddingTop: "paddingTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", divider: "divider" }, exportAs: ["ngcPageHeader"], ngImport: i0 });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageHeaderDirective.prototype, "paddingVertical", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageHeaderDirective.prototype, "paddingHorizontal", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageHeaderDirective.prototype, "paddingTop", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageHeaderDirective.prototype, "paddingBottom", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageHeaderDirective.prototype, "paddingLeft", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageHeaderDirective.prototype, "paddingRight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPageHeaderDirective.prototype, "divider", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageHeaderDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcPageHeader]', exportAs: 'ngcPageHeader' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { paddingVertical: [{
                type: Input
            }], paddingHorizontal: [{
                type: Input
            }], paddingTop: [{
                type: Input
            }], paddingBottom: [{
                type: Input
            }], paddingLeft: [{
                type: Input
            }], paddingRight: [{
                type: Input
            }], divider: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXBhZ2UtaGVhZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXBhZ2UvcGFnZS1oZWFkZXIvbmdjLXBhZ2UtaGVhZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFDOztBQUd0RCxNQUFNLE9BQU8sc0JBQXNCO0lBVWxDOzs7T0FHRztJQUNILFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOzttSEFkbkMsc0JBQXNCO3VHQUF0QixzQkFBc0I7QUFFbEM7SUFBVSxjQUFjLEVBQUU7OytEQUFnQztBQUMxRDtJQUFVLGNBQWMsRUFBRTs7aUVBQWtDO0FBQzVEO0lBQVUsY0FBYyxFQUFFOzswREFBMkI7QUFDckQ7SUFBVSxjQUFjLEVBQUU7OzZEQUE4QjtBQUN4RDtJQUFVLGNBQWMsRUFBRTs7MkRBQTRCO0FBQ3REO0lBQVUsY0FBYyxFQUFFOzs0REFBNkI7QUFDdkQ7SUFBVSxhQUFhLEVBQUU7O3VEQUF5QjsyRkFSdEMsc0JBQXNCO2tCQURsQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7aUdBR2xDLGVBQWU7c0JBQWhELEtBQUs7Z0JBQzRCLGlCQUFpQjtzQkFBbEQsS0FBSztnQkFDNEIsVUFBVTtzQkFBM0MsS0FBSztnQkFDNEIsYUFBYTtzQkFBOUMsS0FBSztnQkFDNEIsV0FBVztzQkFBNUMsS0FBSztnQkFDNEIsWUFBWTtzQkFBN0MsS0FBSztnQkFDMkIsT0FBTztzQkFBdkMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29lcmNlQ3NzUGl4ZWwsIENvZXJjZUJvb2xlYW4gfSBmcm9tICdAY29yZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ2NQYWdlSGVhZGVyXScsIGV4cG9ydEFzOiAnbmdjUGFnZUhlYWRlcicgfSlcbmV4cG9ydCBjbGFzcyBOZ2NQYWdlSGVhZGVyRGlyZWN0aXZlIHtcblxuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgcGFkZGluZ1ZlcnRpY2FsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nSG9yaXpvbnRhbDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgcGFkZGluZ1RvcDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgcGFkZGluZ0JvdHRvbTogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgcGFkZGluZ0xlZnQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHBhZGRpbmdSaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXZpZGVyOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG59XG4iXX0=