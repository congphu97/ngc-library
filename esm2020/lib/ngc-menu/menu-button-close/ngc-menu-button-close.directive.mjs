import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
export class NgcMenuButtonCloseDirective {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clicked$ = new Subject();
    }
    triggerClick(event) {
        if (this.disabled)
            return;
        event.stopPropagation();
        this.clicked$.next(event);
    }
}
NgcMenuButtonCloseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuButtonCloseDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcMenuButtonCloseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcMenuButtonCloseDirective, selector: "[ngcMenuButtonClose]", inputs: { disabled: "disabled" }, host: { listeners: { "click": "triggerClick($event)" } }, exportAs: ["ngcMenuButtonClose"], ngImport: i0 });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuButtonCloseDirective.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuButtonCloseDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcMenuButtonClose]', exportAs: 'ngcMenuButtonClose' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { disabled: [{
                type: Input
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUtYnV0dG9uLWNsb3NlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1idXR0b24tY2xvc2UvbmdjLW1lbnUtYnV0dG9uLWNsb3NlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBR3RDLE1BQU0sT0FBTywyQkFBMkI7SUFNdkM7OztPQUdHO0lBQ0gsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU5uQyxhQUFRLEdBQW1CLElBQUksT0FBTyxFQUFTLENBQUM7SUFNVCxDQUFDO0lBR3hDLFlBQVksQ0FBRSxLQUFZO1FBQ2hDLElBQUssSUFBSSxDQUFDLFFBQVE7WUFBRyxPQUFPO1FBRTVCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUM3QixDQUFDOzt3SEFsQlcsMkJBQTJCOzRHQUEzQiwyQkFBMkI7QUFFdkM7SUFBVSxhQUFhLEVBQUU7OzZEQUEwQjsyRkFGdkMsMkJBQTJCO2tCQUR2QyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtpR0FHN0MsUUFBUTtzQkFBeEMsS0FBSztnQkFXQyxZQUFZO3NCQURsQixZQUFZO3VCQUFFLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb2VyY2VCb29sZWFuIH0gZnJvbSAnQGNvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmdjTWVudUJ1dHRvbkNsb3NlXScsIGV4cG9ydEFzOiAnbmdjTWVudUJ1dHRvbkNsb3NlJyB9KVxuZXhwb3J0IGNsYXNzIE5nY01lbnVCdXR0b25DbG9zZURpcmVjdGl2ZSB7XG5cblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cblx0cHVibGljIGNsaWNrZWQkOiBTdWJqZWN0PEV2ZW50PiA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdjbGljaycsIFsgJyRldmVudCcgXSApXG5cdHB1YmxpYyB0cmlnZ2VyQ2xpY2soIGV2ZW50OiBFdmVudCApIHtcblx0XHRpZiAoIHRoaXMuZGlzYWJsZWQgKSByZXR1cm47XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmNsaWNrZWQkLm5leHQoIGV2ZW50ICk7XG5cdH1cblxufVxuIl19