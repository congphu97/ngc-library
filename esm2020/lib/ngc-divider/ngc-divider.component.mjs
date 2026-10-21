import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
export class NgcDividerComponent {
    get classVertical() { return this.vertical; }
}
NgcDividerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcDividerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcDividerComponent, selector: "ngc-divider", inputs: { vertical: "vertical" }, host: { properties: { "class.ngc-divider--vertical": "this.classVertical" }, classAttribute: "ngc-divider" }, ngImport: i0, template: '', isInline: true, styles: [".ngc-divider{display:flex;background-color:var(--ngc-color-neutral-border-default, #e4e4e6)}.ngc-divider:not(.ngc-divider--vertical){height:1px;width:100%}.ngc-divider.ngc-divider--vertical{width:1px;height:16px;background-color:#babcc0;align-self:center;margin:0 12px;display:inline-block;flex-shrink:0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDividerComponent.prototype, "vertical", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-divider', template: '', host: { class: 'ngc-divider' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".ngc-divider{display:flex;background-color:var(--ngc-color-neutral-border-default, #e4e4e6)}.ngc-divider:not(.ngc-divider--vertical){height:1px;width:100%}.ngc-divider.ngc-divider--vertical{width:1px;height:16px;background-color:#babcc0;align-self:center;margin:0 12px;display:inline-block;flex-shrink:0}\n"] }]
        }], propDecorators: { classVertical: [{
                type: HostBinding,
                args: ['class.ngc-divider--vertical']
            }], vertical: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRpdmlkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZGl2aWRlci9uZ2MtZGl2aWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUNuQyx1QkFBdUIsRUFBRSxXQUFXLEVBQ3BDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBVXRDLE1BQU0sT0FBTyxtQkFBbUI7SUFFL0IsSUFDSSxhQUFhLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Z0hBSDFDLG1CQUFtQjtvR0FBbkIsbUJBQW1CLG1NQU5uQixFQUFFO0FBV2Q7SUFBVSxhQUFhLEVBQUU7O3FEQUEwQjsyRkFMdkMsbUJBQW1CO2tCQVIvQixTQUFTOytCQUNHLGFBQWEsWUFDYixFQUFFLFFBRUwsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGlCQUNqQixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUs1QyxhQUFhO3NCQURoQixXQUFXO3VCQUFFLDZCQUE2QjtnQkFHVixRQUFRO3NCQUF4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29lcmNlQm9vbGVhbiB9IGZyb20gJ0Bjb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1kaXZpZGVyJyxcblx0dGVtcGxhdGVcdFx0OiAnJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtZGl2aWRlci5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWRpdmlkZXInIH0sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjRGl2aWRlckNvbXBvbmVudCB7XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWRpdmlkZXItLXZlcnRpY2FsJyApXG5cdGdldCBjbGFzc1ZlcnRpY2FsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy52ZXJ0aWNhbDsgfVxuXG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHZlcnRpY2FsOiBib29sZWFuO1xuXG59XG4iXX0=