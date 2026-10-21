import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
export class NgcDrawerContainerComponent {
    get classStretch() { return this.stretch; }
}
NgcDrawerContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcDrawerContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcDrawerContainerComponent, selector: "ngc-drawer-container, [ngcDrawerContainer]", inputs: { stretch: "stretch" }, host: { properties: { "class.ngc-drawer-container--stretch": "this.classStretch" }, classAttribute: "ngc-drawer-container" }, ngImport: i0, template: "<ng-content></ng-content>", styles: [".ngc-drawer-container{display:flex}.ngc-drawer-container.ngc-drawer-container--stretch{width:100%;min-width:0;max-width:100vw;height:100%;min-height:0;max-height:100vh}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDrawerContainerComponent.prototype, "stretch", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-drawer-container, [ngcDrawerContainer]', host: { class: 'ngc-drawer-container' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", styles: [".ngc-drawer-container{display:flex}.ngc-drawer-container.ngc-drawer-container--stretch{width:100%;min-width:0;max-width:100vw;height:100%;min-height:0;max-height:100vh}\n"] }]
        }], propDecorators: { classStretch: [{
                type: HostBinding,
                args: ['class.ngc-drawer-container--stretch']
            }], stretch: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRyYXdlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZHJhd2VyL2RyYXdlci1jb250YWluZXIvbmdjLWRyYXdlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZHJhd2VyL2RyYXdlci1jb250YWluZXIvbmdjLWRyYXdlci1jb250YWluZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ25DLHVCQUF1QixFQUFFLFdBQVcsRUFDcEMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQzs7QUFVdEMsTUFBTSxPQUFPLDJCQUEyQjtJQUV2QyxJQUNJLFlBQVksS0FBYyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzt3SEFIeEMsMkJBQTJCOzRHQUEzQiwyQkFBMkIsZ1BDZnhDLDJCQUF5QjtBRG9CeEI7SUFBVSxhQUFhLEVBQUU7OzREQUF5QjsyRkFMdEMsMkJBQTJCO2tCQVJ2QyxTQUFTOytCQUNHLDRDQUE0QyxRQUcvQyxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxpQkFDMUIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs4QkFLNUMsWUFBWTtzQkFEZixXQUFXO3VCQUFFLHFDQUFxQztnQkFHbEIsT0FBTztzQkFBdkMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvZXJjZUJvb2xlYW4gfSBmcm9tICdAY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtZHJhd2VyLWNvbnRhaW5lciwgW25nY0RyYXdlckNvbnRhaW5lcl0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1kcmF3ZXItY29udGFpbmVyLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1kcmF3ZXItY29udGFpbmVyLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtZHJhd2VyLWNvbnRhaW5lcicgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NEcmF3ZXJDb250YWluZXJDb21wb25lbnQge1xuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1kcmF3ZXItY29udGFpbmVyLS1zdHJldGNoJyApXG5cdGdldCBjbGFzc1N0cmV0Y2goKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnN0cmV0Y2g7IH1cblxuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBzdHJldGNoOiBib29sZWFuO1xuXG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19