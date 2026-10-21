import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, TemplateRef, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { DefaultValue, CoerceBoolean, CoerceNumber } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "angular-core";
export class NgcDropdownItemComponent {
    constructor() {
        this.truncate = true;
        this.truncateLimitLine = 2;
    }
}
NgcDropdownItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropdownItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcDropdownItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcDropdownItemComponent, selector: "ngc-dropdown-item", inputs: { value: "value", context: "context", label: "label", display: "display", color: "color", icon: "icon", dotColor: "dotColor", classes: ["class", "classes"], disabled: "disabled", truncate: "truncate", truncateLimitLine: "truncateLimitLine" }, host: { classAttribute: "ngc-dropdown-item" }, queries: [{ propertyName: "prefixTemp", first: true, predicate: ["ngcDropdownItemPrefix"], descendants: true }, { propertyName: "suffixTemp", first: true, predicate: ["ngcDropdownItemSuffix"], descendants: true }], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template let-searchQuery=\"searchQuery\">\n\t<div #ref [ngClass]=\"classes\" style=\"width: 100%; min-width: 0;\"><ng-content></ng-content></div>\n\n\t<ng-container *ngIf=\"!ref?.childNodes?.length\">\n\t\t<!--\n    <span\n      [innerHTML]=\"(label || value) | markText : searchQuery : true\"\n    ></span>\n    -->\n\t\t{{ (label || value) | empty }}\n\t</ng-container>\n</ng-template>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.EmptyPipe, name: "empty" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDropdownItemComponent.prototype, "disabled", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDropdownItemComponent.prototype, "truncate", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcDropdownItemComponent.prototype, "truncateLimitLine", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropdownItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-dropdown-item', host: { class: 'ngc-dropdown-item' }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template let-searchQuery=\"searchQuery\">\n\t<div #ref [ngClass]=\"classes\" style=\"width: 100%; min-width: 0;\"><ng-content></ng-content></div>\n\n\t<ng-container *ngIf=\"!ref?.childNodes?.length\">\n\t\t<!--\n    <span\n      [innerHTML]=\"(label || value) | markText : searchQuery : true\"\n    ></span>\n    -->\n\t\t{{ (label || value) | empty }}\n\t</ng-container>\n</ng-template>" }]
        }], propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], prefixTemp: [{
                type: ContentChild,
                args: ['ngcDropdownItemPrefix']
            }], suffixTemp: [{
                type: ContentChild,
                args: ['ngcDropdownItemSuffix']
            }], value: [{
                type: Input
            }], context: [{
                type: Input
            }], label: [{
                type: Input
            }], display: [{
                type: Input
            }], color: [{
                type: Input
            }], icon: [{
                type: Input
            }], dotColor: [{
                type: Input
            }], classes: [{
                type: Input,
                args: ['class']
            }], disabled: [{
                type: Input
            }], truncate: [{
                type: Input
            }], truncateLimitLine: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRyb3Bkb3duLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZHJvcGRvd24vZHJvcGRvd24taXRlbS9uZ2MtZHJvcGRvd24taXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1kcm9wZG93bi9kcm9wZG93bi1pdGVtL25nYy1kcm9wZG93bi1pdGVtLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFDM0IsV0FBVyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFDbEQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sT0FBTyxDQUFDOzs7O0FBUWxFLE1BQU0sT0FBTyx3QkFBd0I7SUFOckM7UUFzQmtELGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDMUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO0tBSTlFOztxSEFyQlksd0JBQXdCO3lHQUF4Qix3QkFBd0IsdW1CQUV4QixXQUFXLDhEQ2Z4Qix5WUFXYztBRGlCYjtJQUFVLGFBQWEsRUFBRTs7MERBQTBCO0FBQ25EO0lBQVUsWUFBWSxFQUFFO0lBQUUsYUFBYSxFQUFFOzswREFBaUM7QUFDMUU7SUFBVSxZQUFZLEVBQUU7SUFBRSxZQUFZLEVBQUU7O21FQUFzQzsyRkFqQmxFLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRyxtQkFBbUIsUUFFdEIsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsbUJBQ3JCLHVCQUF1QixDQUFDLE1BQU07OEJBSUcsV0FBVztzQkFBN0QsU0FBUzt1QkFBRSxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVPLFVBQVU7c0JBQXpELFlBQVk7dUJBQUUsdUJBQXVCO2dCQUNVLFVBQVU7c0JBQXpELFlBQVk7dUJBQUUsdUJBQXVCO2dCQUV0QixLQUFLO3NCQUFwQixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsSUFBSTtzQkFBbkIsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLO2dCQUNtQixPQUFPO3NCQUEvQixLQUFLO3VCQUFFLE9BQU87Z0JBQ2tCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJDLFFBQVE7c0JBQXhELEtBQUs7Z0JBQzBDLGlCQUFpQjtzQkFBaEUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCxcblx0VGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbiwgQ29lcmNlTnVtYmVyIH0gZnJvbSAnQGNvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLWRyb3Bkb3duLWl0ZW0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1kcm9wZG93bi1pdGVtLmh0bWwnLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWRyb3Bkb3duLWl0ZW0nIH0sXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0Ryb3Bkb3duSXRlbUNvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCggVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0gKSBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QENvbnRlbnRDaGlsZCggJ25nY0Ryb3Bkb3duSXRlbVByZWZpeCcgKSBwdWJsaWMgcHJlZml4VGVtcDogVGVtcGxhdGVSZWY8YW55Pjtcblx0QENvbnRlbnRDaGlsZCggJ25nY0Ryb3Bkb3duSXRlbVN1ZmZpeCcgKSBwdWJsaWMgc3VmZml4VGVtcDogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcblx0QElucHV0KCkgcHVibGljIGNvbnRleHQ6IGFueTtcblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZG90Q29sb3I6IHN0cmluZztcblx0QElucHV0KCAnY2xhc3MnICkgcHVibGljIGNsYXNzZXM6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyB0cnVuY2F0ZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIHRydW5jYXRlTGltaXRMaW5lOiBudW1iZXIgPSAyO1xuXG5cdHB1YmxpYyBwYXJlbnQ6IHVua25vd247XG5cbn1cbiIsIjxuZy10ZW1wbGF0ZSBsZXQtc2VhcmNoUXVlcnk9XCJzZWFyY2hRdWVyeVwiPlxuXHQ8ZGl2ICNyZWYgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IG1pbi13aWR0aDogMDtcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG5cblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZWY/LmNoaWxkTm9kZXM/Lmxlbmd0aFwiPlxuXHRcdDwhLS1cbiAgICA8c3BhblxuICAgICAgW2lubmVySFRNTF09XCIobGFiZWwgfHwgdmFsdWUpIHwgbWFya1RleHQgOiBzZWFyY2hRdWVyeSA6IHRydWVcIlxuICAgID48L3NwYW4+XG4gICAgLS0+XG5cdFx0e3sgKGxhYmVsIHx8IHZhbHVlKSB8IGVtcHR5IH19XG5cdDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT4iXX0=