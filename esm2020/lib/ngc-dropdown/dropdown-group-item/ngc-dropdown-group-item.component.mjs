import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, TemplateRef, ContentChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { startWith } from 'rxjs/operators';
import _ from 'lodash';
import { Unsubscriber, DefaultValue, CoerceBoolean, CoerceNumber, untilCmpDestroyed } from '@core';
import { NgcDropdownItemComponent } from '../dropdown-item/ngc-dropdown-item.component';
import * as i0 from "@angular/core";
let NgcDropdownGroupItemComponent = class NgcDropdownGroupItemComponent {
    constructor() {
        this.truncate = true;
        this.truncateLimitLine = 2;
    }
    get children() { return this.dropdownItems._results; }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        this.dropdownItems
            .changes
            .pipe(startWith(this.dropdownItems), untilCmpDestroyed(this))
            .subscribe((items) => {
            _.forEach(items._results, (item) => item.parent = this);
        });
    }
};
NgcDropdownGroupItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropdownGroupItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcDropdownGroupItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcDropdownGroupItemComponent, selector: "ngc-dropdown-group-item", inputs: { title: "title", label: "label", color: "color", icon: "icon", dotColor: "dotColor", classes: ["class", "classes"], disabled: "disabled", truncate: "truncate", truncateLimitLine: "truncateLimitLine" }, host: { classAttribute: "ngc-dropdown-group-item" }, queries: [{ propertyName: "dropdownItems", predicate: NgcDropdownItemComponent }], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\n\t{{ label }}\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDropdownGroupItemComponent.prototype, "disabled", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDropdownGroupItemComponent.prototype, "truncate", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcDropdownGroupItemComponent.prototype, "truncateLimitLine", void 0);
NgcDropdownGroupItemComponent = __decorate([
    Unsubscriber()
], NgcDropdownGroupItemComponent);
export { NgcDropdownGroupItemComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropdownGroupItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-dropdown-group-item', host: { class: 'ngc-dropdown-group-item' }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t{{ label }}\n</ng-template>" }]
        }], propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], dropdownItems: [{
                type: ContentChildren,
                args: [NgcDropdownItemComponent]
            }], title: [{
                type: Input
            }], label: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRyb3Bkb3duLWdyb3VwLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZHJvcGRvd24vZHJvcGRvd24tZ3JvdXAtaXRlbS9uZ2MtZHJvcGRvd24tZ3JvdXAtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1kcm9wZG93bi9kcm9wZG93bi1ncm91cC1pdGVtL25nYy1kcm9wZG93bi1ncm91cC1pdGVtLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFDM0IsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQ3JCLHVCQUF1QixFQUN6QyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFDTixZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFDekMsWUFBWSxFQUFFLGlCQUFpQixFQUNyQixNQUFNLE9BQU8sQ0FBQztBQUN6QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFTakYsSUFBTSw2QkFBNkIsR0FBbkMsTUFBTSw2QkFBNkI7SUFBbkM7UUFhMkMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUMxQixzQkFBaUIsR0FBVyxDQUFDLENBQUM7S0FzQjlFO0lBcEJBLElBQUksUUFBUSxLQUFpQyxPQUFTLElBQUksQ0FBQyxhQUEwQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFakc7O09BRUc7SUFDSCxrQkFBa0I7UUFDakIsSUFBSSxDQUFDLGFBQWE7YUFDakIsT0FBTzthQUNQLElBQUksQ0FDSixTQUFTLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxFQUMvQixpQkFBaUIsQ0FBRSxJQUFJLENBQUUsQ0FDekI7YUFDQSxTQUFTLENBQUUsQ0FBRSxLQUEwQyxFQUFHLEVBQUU7WUFDNUQsQ0FBQyxDQUFDLE9BQU8sQ0FDTixLQUFrQixDQUFDLFFBQVEsRUFDN0IsQ0FBRSxJQUE4QixFQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FDeEQsQ0FBQztRQUNILENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQzs7MEhBbENXLDZCQUE2Qjs4R0FBN0IsNkJBQTZCLHFXQUl2Qix3QkFBd0IsMEVBRjlCLFdBQVcsOERDdkJ4Qiw4Q0FFYztBRCtCYjtJQUFVLGFBQWEsRUFBRTs7K0RBQTBCO0FBQ25EO0lBQVUsWUFBWSxFQUFFO0lBQUUsYUFBYSxFQUFFOzsrREFBaUM7QUFDMUU7SUFBVSxZQUFZLEVBQUU7SUFBRSxZQUFZLEVBQUU7O3dFQUFzQztBQWRsRSw2QkFBNkI7SUFQekMsWUFBWSxFQUFFO0dBT0YsNkJBQTZCLENBb0N6QztTQXBDWSw2QkFBNkI7MkZBQTdCLDZCQUE2QjtrQkFOekMsU0FBUzsrQkFDRyx5QkFBeUIsUUFFNUIsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsbUJBQzNCLHVCQUF1QixDQUFDLE1BQU07OEJBSUcsV0FBVztzQkFBN0QsU0FBUzt1QkFBRSxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVXLGFBQWE7c0JBQWhFLGVBQWU7dUJBQUUsd0JBQXdCO2dCQUUxQixLQUFLO3NCQUFwQixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7dUJBQUUsT0FBTztnQkFDa0IsUUFBUTtzQkFBeEMsS0FBSztnQkFDMkMsUUFBUTtzQkFBeEQsS0FBSztnQkFDMEMsaUJBQWlCO3NCQUFoRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLFxuXHRUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsXG5cdEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcblx0VW5zdWJzY3JpYmVyLCBEZWZhdWx0VmFsdWUsIENvZXJjZUJvb2xlYW4sXG5cdENvZXJjZU51bWJlciwgdW50aWxDbXBEZXN0cm95ZWRcbiwgSU9iamVjdCB9IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IE5nY0Ryb3Bkb3duSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3Bkb3duLWl0ZW0vbmdjLWRyb3Bkb3duLWl0ZW0uY29tcG9uZW50JztcblxuQFVuc3Vic2NyaWJlcigpXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLWRyb3Bkb3duLWdyb3VwLWl0ZW0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1kcm9wZG93bi1ncm91cC1pdGVtLmh0bWwnLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWRyb3Bkb3duLWdyb3VwLWl0ZW0nIH0sXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0Ryb3Bkb3duR3JvdXBJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cblx0QFZpZXdDaGlsZCggVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0gKSBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QENvbnRlbnRDaGlsZHJlbiggTmdjRHJvcGRvd25JdGVtQ29tcG9uZW50ICkgcHVibGljIGRyb3Bkb3duSXRlbXM6IFF1ZXJ5TGlzdDxOZ2NEcm9wZG93bkl0ZW1Db21wb25lbnQ+O1xuXG5cdEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkb3RDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoICdjbGFzcycgKSBwdWJsaWMgY2xhc3Nlczogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHRydW5jYXRlOiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgdHJ1bmNhdGVMaW1pdExpbmU6IG51bWJlciA9IDI7XG5cblx0Z2V0IGNoaWxkcmVuKCk6IE5nY0Ryb3Bkb3duSXRlbUNvbXBvbmVudFtdIHsgcmV0dXJuICggdGhpcy5kcm9wZG93bkl0ZW1zIGFzIElPYmplY3QgKS5fcmVzdWx0czsgfVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLmRyb3Bkb3duSXRlbXNcblx0XHQuY2hhbmdlc1xuXHRcdC5waXBlKFxuXHRcdFx0c3RhcnRXaXRoKCB0aGlzLmRyb3Bkb3duSXRlbXMgKSxcblx0XHRcdHVudGlsQ21wRGVzdHJveWVkKCB0aGlzIClcblx0XHQpXG5cdFx0LnN1YnNjcmliZSggKCBpdGVtczogUXVlcnlMaXN0PE5nY0Ryb3Bkb3duSXRlbUNvbXBvbmVudD4gKSA9PiB7XG5cdFx0XHRfLmZvckVhY2goXG5cdFx0XHRcdCggaXRlbXMgYXMgSU9iamVjdCApLl9yZXN1bHRzLFxuXHRcdFx0XHQoIGl0ZW06IE5nY0Ryb3Bkb3duSXRlbUNvbXBvbmVudCApID0+IGl0ZW0ucGFyZW50ID0gdGhpc1xuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH1cblxufVxuIiwiPG5nLXRlbXBsYXRlPlxuXHR7eyBsYWJlbCB9fVxuPC9uZy10ZW1wbGF0ZT4iXX0=