import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "angular-resizable-element";
import * as i2 from "../../ngc-truncate/ngc-truncate.component";
export class NgcExcelHeaderCellComponent {
    get styleWidth() { return this.width; }
    get styleMinWidth() { return this.width; }
    get styleHeight() { return this.height; }
    get styleMinHeight() { return this.height; }
    get classRequired() { return this.required; }
    /**
     * @param {ResizeEvent} event
     * @return {void}
     */
    onResizing(event) {
        const width = event.rectangle.width;
        const height = event.rectangle.height;
        this.width = `${width > 200 ? width : 200}px`;
        this.height = `${height > 40 ? height : 40}px`;
    }
}
NgcExcelHeaderCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExcelHeaderCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcExcelHeaderCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcExcelHeaderCellComponent, selector: "th[ngcExcelHeaderCell], td[ngcExcelHeaderCell]", inputs: { required: "required" }, host: { properties: { "style.width": "this.styleWidth", "style.minWidth": "this.styleMinWidth", "style.height": "this.styleHeight", "style.minHeight": "this.styleMinHeight", "class.ngc-excel-header-cell--required": "this.classRequired" }, classAttribute: "ngc-excel-header-cell" }, ngImport: i0, template: "<div\n  mwlResizable\n  [resizeEdges]=\"{ bottom: true, right: true }\"\n  (resizing)=\"onResizing( $event )\">\n  <ngc-truncate [limitLine]=\"1\">\n    <ng-content></ng-content>\n  </ngc-truncate>\n</div>\n", styles: [".ngc-excel-header-cell{overflow:hidden;padding:0!important;position:relative;height:40px;min-height:40px}.ngc-excel-header-cell.ngc-excel-header-cell--required>div:after{display:flex;flex-direction:column;justify-content:center;padding:1px 4px;font-weight:var(--ngc-font-weight-semibold, 600);font-size:9px;border-radius:var(--ngc-radius-200, 4px);color:var(--ngc-color-neutral-white, #fff);background-color:var(--ngc-color-info-default, #0a84ff);position:relative;height:15px;margin-left:5px;white-space:nowrap;text-transform:uppercase;content:\"Required\"}.ngc-excel-header-cell>div{display:flex;align-items:center;padding:10px;position:absolute;inset:0}\n"], dependencies: [{ kind: "directive", type: i1.ResizableDirective, selector: "[mwlResizable]", inputs: ["resizeEdges", "enableGhostResize", "resizeSnapGrid", "resizeCursors", "resizeCursorPrecision", "ghostElementPositioning", "allowNegativeResizes", "mouseMoveThrottleMS", "validateResize"], outputs: ["resizeStart", "resizing", "resizeEnd"], exportAs: ["mwlResizable"] }, { kind: "component", type: i2.NgcTruncateComponent, selector: "ngc-truncate", inputs: ["limitLine", "disabled", "tooltip", "ngcTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExcelHeaderCellComponent.prototype, "required", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExcelHeaderCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'th[ngcExcelHeaderCell], td[ngcExcelHeaderCell]', host: { class: 'ngc-excel-header-cell' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  mwlResizable\n  [resizeEdges]=\"{ bottom: true, right: true }\"\n  (resizing)=\"onResizing( $event )\">\n  <ngc-truncate [limitLine]=\"1\">\n    <ng-content></ng-content>\n  </ngc-truncate>\n</div>\n", styles: [".ngc-excel-header-cell{overflow:hidden;padding:0!important;position:relative;height:40px;min-height:40px}.ngc-excel-header-cell.ngc-excel-header-cell--required>div:after{display:flex;flex-direction:column;justify-content:center;padding:1px 4px;font-weight:var(--ngc-font-weight-semibold, 600);font-size:9px;border-radius:var(--ngc-radius-200, 4px);color:var(--ngc-color-neutral-white, #fff);background-color:var(--ngc-color-info-default, #0a84ff);position:relative;height:15px;margin-left:5px;white-space:nowrap;text-transform:uppercase;content:\"Required\"}.ngc-excel-header-cell>div{display:flex;align-items:center;padding:10px;position:absolute;inset:0}\n"] }]
        }], propDecorators: { styleWidth: [{
                type: HostBinding,
                args: ['style.width']
            }], styleMinWidth: [{
                type: HostBinding,
                args: ['style.minWidth']
            }], styleHeight: [{
                type: HostBinding,
                args: ['style.height']
            }], styleMinHeight: [{
                type: HostBinding,
                args: ['style.minHeight']
            }], classRequired: [{
                type: HostBinding,
                args: ['class.ngc-excel-header-cell--required']
            }], required: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWV4Y2VsLWhlYWRlci1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRhYmxlL2V4Y2VsLXRhYmxlL25nYy1leGNlbC1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10YWJsZS9leGNlbC10YWJsZS9uZ2MtZXhjZWwtaGVhZGVyLWNlbGwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQ25DLHVCQUF1QixFQUFFLFdBQVcsRUFDcEMsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQzs7OztBQVV0QyxNQUFNLE9BQU8sMkJBQTJCO0lBRXZDLElBQ0ksVUFBVSxLQUFhLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFL0MsSUFDSSxhQUFhLEtBQWEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVsRCxJQUNJLFdBQVcsS0FBYSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRWpELElBQ0ksY0FBYyxLQUFhLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFcEQsSUFDSSxhQUFhLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQU90RDs7O09BR0c7SUFDSSxVQUFVLENBQUUsS0FBa0I7UUFDcEMsTUFBTSxLQUFLLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDNUMsTUFBTSxNQUFNLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFFOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDaEQsQ0FBQzs7d0hBaENXLDJCQUEyQjs0R0FBM0IsMkJBQTJCLGtaQ2hCeEMsaU5BUUE7QUR5QkM7SUFBVSxhQUFhLEVBQUU7OzZEQUEwQjsyRkFqQnZDLDJCQUEyQjtrQkFSdkMsU0FBUzsrQkFDRyxnREFBZ0QsUUFHbkQsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsaUJBQzNCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07OEJBSzVDLFVBQVU7c0JBRGIsV0FBVzt1QkFBRSxhQUFhO2dCQUl2QixhQUFhO3NCQURoQixXQUFXO3VCQUFFLGdCQUFnQjtnQkFJMUIsV0FBVztzQkFEZCxXQUFXO3VCQUFFLGNBQWM7Z0JBSXhCLGNBQWM7c0JBRGpCLFdBQVc7dUJBQUUsaUJBQWlCO2dCQUkzQixhQUFhO3NCQURoQixXQUFXO3VCQUFFLHVDQUF1QztnQkFHcEIsUUFBUTtzQkFBeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNpemVFdmVudCB9IGZyb20gJ2FuZ3VsYXItcmVzaXphYmxlLWVsZW1lbnQnO1xuXG5pbXBvcnQgeyBDb2VyY2VCb29sZWFuIH0gZnJvbSAnQGNvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAndGhbbmdjRXhjZWxIZWFkZXJDZWxsXSwgdGRbbmdjRXhjZWxIZWFkZXJDZWxsXScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLWV4Y2VsLWhlYWRlci1jZWxsLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1leGNlbC1oZWFkZXItY2VsbC5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWV4Y2VsLWhlYWRlci1jZWxsJyB9LFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0V4Y2VsSGVhZGVyQ2VsbENvbXBvbmVudCB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUud2lkdGgnIClcblx0Z2V0IHN0eWxlV2lkdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMud2lkdGg7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS5taW5XaWR0aCcgKVxuXHRnZXQgc3R5bGVNaW5XaWR0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy53aWR0aDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLmhlaWdodCcgKVxuXHRnZXQgc3R5bGVIZWlnaHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaGVpZ2h0OyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUubWluSGVpZ2h0JyApXG5cdGdldCBzdHlsZU1pbkhlaWdodCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5oZWlnaHQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZXhjZWwtaGVhZGVyLWNlbGwtLXJlcXVpcmVkJyApXG5cdGdldCBjbGFzc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5yZXF1aXJlZDsgfVxuXG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuO1xuXG5cdHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuXHRwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UmVzaXplRXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25SZXNpemluZyggZXZlbnQ6IFJlc2l6ZUV2ZW50ICkge1xuXHRcdGNvbnN0IHdpZHRoOiBudW1iZXIgPSBldmVudC5yZWN0YW5nbGUud2lkdGg7XG5cdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgPSBldmVudC5yZWN0YW5nbGUuaGVpZ2h0O1xuXG5cdFx0dGhpcy53aWR0aCA9IGAke3dpZHRoID4gMjAwID8gd2lkdGggOiAyMDB9cHhgO1xuXHRcdHRoaXMuaGVpZ2h0ID0gYCR7aGVpZ2h0ID4gNDAgPyBoZWlnaHQgOiA0MH1weGA7XG5cdH1cblxufVxuIiwiPGRpdlxuICBtd2xSZXNpemFibGVcbiAgW3Jlc2l6ZUVkZ2VzXT1cInsgYm90dG9tOiB0cnVlLCByaWdodDogdHJ1ZSB9XCJcbiAgKHJlc2l6aW5nKT1cIm9uUmVzaXppbmcoICRldmVudCApXCI+XG4gIDxuZ2MtdHJ1bmNhdGUgW2xpbWl0TGluZV09XCIxXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L25nYy10cnVuY2F0ZT5cbjwvZGl2PlxuIl19