import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { CoerceCssPixel } from '@core';
import * as i0 from "@angular/core";
export class NgcPageContentDirective {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
NgcPageContentDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageContentDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcPageContentDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcPageContentDirective, selector: "[ngcPageContent]", inputs: { paddingVertical: "paddingVertical", paddingHorizontal: "paddingHorizontal", paddingTop: "paddingTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight" }, exportAs: ["ngcPageContent"], ngImport: i0 });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageContentDirective.prototype, "paddingVertical", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageContentDirective.prototype, "paddingHorizontal", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageContentDirective.prototype, "paddingTop", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageContentDirective.prototype, "paddingBottom", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageContentDirective.prototype, "paddingLeft", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcPageContentDirective.prototype, "paddingRight", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageContentDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcPageContent]', exportAs: 'ngcPageContent' }]
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXBhZ2UtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1wYWdlL3BhZ2UtY29udGVudC9uZ2MtcGFnZS1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBR3ZDLE1BQU0sT0FBTyx1QkFBdUI7SUFTbkM7OztPQUdHO0lBQ0gsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7O29IQWJuQyx1QkFBdUI7d0dBQXZCLHVCQUF1QjtBQUVuQztJQUFVLGNBQWMsRUFBRTs7Z0VBQWdDO0FBQzFEO0lBQVUsY0FBYyxFQUFFOztrRUFBa0M7QUFDNUQ7SUFBVSxjQUFjLEVBQUU7OzJEQUEyQjtBQUNyRDtJQUFVLGNBQWMsRUFBRTs7OERBQThCO0FBQ3hEO0lBQVUsY0FBYyxFQUFFOzs0REFBNEI7QUFDdEQ7SUFBVSxjQUFjLEVBQUU7OzZEQUE2QjsyRkFQM0MsdUJBQXVCO2tCQURuQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtpR0FHcEMsZUFBZTtzQkFBaEQsS0FBSztnQkFDNEIsaUJBQWlCO3NCQUFsRCxLQUFLO2dCQUM0QixVQUFVO3NCQUEzQyxLQUFLO2dCQUM0QixhQUFhO3NCQUE5QyxLQUFLO2dCQUM0QixXQUFXO3NCQUE1QyxLQUFLO2dCQUM0QixZQUFZO3NCQUE3QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2VyY2VDc3NQaXhlbCB9IGZyb20gJ0Bjb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nY1BhZ2VDb250ZW50XScsIGV4cG9ydEFzOiAnbmdjUGFnZUNvbnRlbnQnIH0pXG5leHBvcnQgY2xhc3MgTmdjUGFnZUNvbnRlbnREaXJlY3RpdmUge1xuXG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nVmVydGljYWw6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHBhZGRpbmdIb3Jpem9udGFsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nVG9wOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nQm90dG9tOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nTGVmdDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgcGFkZGluZ1JpZ2h0OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiApIHt9XG5cbn1cbiJdfQ==