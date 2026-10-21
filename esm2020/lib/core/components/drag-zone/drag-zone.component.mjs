import { __decorate, __metadata } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DefaultValue } from 'angular-core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class DragZoneComponent {
    /**
     * @constructor
     * @param {TranslateService} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
        this.name = this._translateService.instant('CORE.LABEL.ITEMS');
    }
}
DragZoneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DragZoneComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
DragZoneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: DragZoneComponent, selector: "drag-zone", inputs: { name: "name" }, host: { classAttribute: "drag-zone" }, ngImport: i0, template: "", styles: [":host{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10px' ry='10px' stroke='%23babcc0' stroke-width='3' stroke-dasharray='6%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\");display:flex;flex-direction:column;text-align:center;justify-content:center;background-color:var(--ngc-color-neutral-white, #fff);border-radius:10px;padding:45px 10px}:host .icon{font-size:24px;margin-bottom:10px}:host .title{font-size:16px;font-weight:var(--ngc-font-weight-semibold, 600)}:host .description{font-size:14px;color:var(--ngc-color-neutral-text-tertiary, #8e8e93)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], DragZoneComponent.prototype, "name", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DragZoneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'drag-zone', host: { class: 'drag-zone' }, changeDetection: ChangeDetectionStrategy.OnPush, template: "", styles: [":host{background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10px' ry='10px' stroke='%23babcc0' stroke-width='3' stroke-dasharray='6%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\");display:flex;flex-direction:column;text-align:center;justify-content:center;background-color:var(--ngc-color-neutral-white, #fff);border-radius:10px;padding:45px 10px}:host .icon{font-size:24px;margin-bottom:10px}:host .title{font-size:16px;font-weight:var(--ngc-font-weight-semibold, 600)}:host .description{font-size:14px;color:var(--ngc-color-neutral-text-tertiary, #8e8e93)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; }, propDecorators: { name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy16b25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9jb21wb25lbnRzL2RyYWctem9uZS9kcmFnLXpvbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9jb3JlL2NvbXBvbmVudHMvZHJhZy16b25lL2RyYWctem9uZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFTNUMsTUFBTSxPQUFPLGlCQUFpQjtJQUk3Qjs7O09BR0c7SUFDSCxZQUFxQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQU54QixTQUFJLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDO0lBTXhDLENBQUM7OzhHQVJqRCxpQkFBaUI7a0dBQWpCLGlCQUFpQixrSENaOUIsRUFBQTtBRGNDO0lBQVUsWUFBWSxFQUFFOzsrQ0FBNEU7MkZBRnhGLGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRyxXQUFXLFFBR2QsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLG1CQUNiLHVCQUF1QixDQUFDLE1BQU07dUdBSWhCLElBQUk7c0JBQW5DLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0VmFsdWUgfSBmcm9tICdhbmd1bGFyLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnZHJhZy16b25lJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9kcmFnLXpvbmUuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vZHJhZy16b25lLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICdkcmFnLXpvbmUnIH0sXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdab25lQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIG5hbWU6IHN0cmluZyA9IHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ0NPUkUuTEFCRUwuSVRFTVMnICk7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IF90cmFuc2xhdGVTZXJ2aWNlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSApIHt9XG5cbn1cbiIsIiJdfQ==