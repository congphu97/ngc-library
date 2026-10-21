import { __decorate, __metadata } from "tslib";
import { Component, Input, TemplateRef, ViewChild, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { CoerceBoolean, AliasOf } from '@core';
import { NgcTabHeaderDirective } from '../tab-header/ngc-tab-header.directive';
import { NgcTabContentDirective } from '../tab-content/ngc-tab-content.directive';
import * as i0 from "@angular/core";
export class NgcTabComponent {
    constructor() {
        this.changes$ = new Subject();
    }
    get header() { return this.tabHeader?.templateRef; }
    get content() { return this.tabContent?.templateRef || this.templateRef; }
    /**
     * @constructor
     */
    ngOnChanges() {
        this.changes$.next();
    }
}
NgcTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTabComponent, selector: "ngc-tab", inputs: { label: "label", icon: "icon", classes: ["class", "classes"], ngClass: "ngClass", disabled: "disabled" }, queries: [{ propertyName: "tabHeader", first: true, predicate: NgcTabHeaderDirective, descendants: true }, { propertyName: "tabContent", first: true, predicate: NgcTabContentDirective, descendants: true }], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    AliasOf('classes'),
    __metadata("design:type", String)
], NgcTabComponent.prototype, "ngClass", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTabComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-tab', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>" }]
        }], propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], tabHeader: [{
                type: ContentChild,
                args: [NgcTabHeaderDirective]
            }], tabContent: [{
                type: ContentChild,
                args: [NgcTabContentDirective]
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], classes: [{
                type: Input,
                args: ['class']
            }], ngClass: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10YWJzL3RhYi9uZ2MtdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRhYnMvdGFiL25nYy10YWIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUM3QixTQUFTLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUVoRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztBQU9sRixNQUFNLE9BQU8sZUFBZTtJQUw1QjtRQWtCUSxhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7S0FZckQ7SUFWQSxJQUFJLE1BQU0sS0FBdUIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdEUsSUFBSSxPQUFPLEtBQXVCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFNUY7O09BRUc7SUFDSCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs0R0F2QlcsZUFBZTtnR0FBZixlQUFlLHlNQUlaLHFCQUFxQiw2RUFDckIsc0JBQXNCLDZGQUh6QixXQUFXLG1GQ25CeEIsNERBRWM7QUR5QmI7SUFBVSxPQUFPLENBQUUsU0FBUyxDQUFFOztnREFBd0I7QUFDdEQ7SUFBVSxhQUFhLEVBQUU7O2lEQUEwQjsyRkFYdkMsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRyxTQUFTLG1CQUVILHVCQUF1QixDQUFDLE1BQU07OEJBSUcsV0FBVztzQkFBN0QsU0FBUzt1QkFBRSxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVLLFNBQVM7c0JBQXRELFlBQVk7dUJBQUUscUJBQXFCO2dCQUNXLFVBQVU7c0JBQXhELFlBQVk7dUJBQUUsc0JBQXNCO2dCQUVyQixLQUFLO3NCQUFwQixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7dUJBQUUsT0FBTztnQkFDdUIsT0FBTztzQkFBNUMsS0FBSztnQkFDMkIsUUFBUTtzQkFBeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29lcmNlQm9vbGVhbiwgQWxpYXNPZiB9IGZyb20gJ0Bjb3JlJztcblxuaW1wb3J0IHsgTmdjVGFiSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vdGFiLWhlYWRlci9uZ2MtdGFiLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjVGFiQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL3RhYi1jb250ZW50L25nYy10YWItY29udGVudC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLXRhYicsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLXRhYi5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCBUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSApIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAQ29udGVudENoaWxkKCBOZ2NUYWJIZWFkZXJEaXJlY3RpdmUgKSBwdWJsaWMgdGFiSGVhZGVyOiBOZ2NUYWJDb250ZW50RGlyZWN0aXZlO1xuXHRAQ29udGVudENoaWxkKCBOZ2NUYWJDb250ZW50RGlyZWN0aXZlICkgcHVibGljIHRhYkNvbnRlbnQ6IE5nY1RhYkNvbnRlbnREaXJlY3RpdmU7XG5cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCggJ2NsYXNzJyApIHB1YmxpYyBjbGFzc2VzOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBBbGlhc09mKCAnY2xhc3NlcycgKSBwdWJsaWMgbmdDbGFzczogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuXHRwdWJsaWMgY2hhbmdlcyQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdGdldCBoZWFkZXIoKTogVGVtcGxhdGVSZWY8YW55PiB7IHJldHVybiB0aGlzLnRhYkhlYWRlcj8udGVtcGxhdGVSZWY7IH1cblx0Z2V0IGNvbnRlbnQoKTogVGVtcGxhdGVSZWY8YW55PiB7IHJldHVybiB0aGlzLnRhYkNvbnRlbnQ/LnRlbXBsYXRlUmVmIHx8IHRoaXMudGVtcGxhdGVSZWY7IH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmNoYW5nZXMkLm5leHQoKTtcblx0fVxuXG59XG4iLCI8bmctdGVtcGxhdGU+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+Il19