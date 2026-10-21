import { Component, TemplateRef, ViewChild, ContentChild, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgcMenuHeaderTitleComponent } from '../menu-header-title/ngc-menu-header-title.component';
import { NgcMenuHeaderDirective } from './ngc-menu-header.directive';
import * as i0 from "@angular/core";
export class NgcMenuHeaderComponent {
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.templateRef = null;
        this._classList = null;
    }
    get classList() { return this._classList; }
    set classList(classes) { this._classList = classes; }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.templateRef || (this.templateRef = this._templateRef);
            this._cdRef.markForCheck();
        });
    }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        setTimeout(() => {
            this.templateRef || (this.templateRef = this._menuHeader?.templateRef);
            this._cdRef.markForCheck();
        });
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        this.templateRef = null;
    }
}
NgcMenuHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuHeaderComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcMenuHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcMenuHeaderComponent, selector: "ngc-menu-header", inputs: { classList: ["class", "classList"] }, queries: [{ propertyName: "_menuHeader", first: true, predicate: NgcMenuHeaderDirective, descendants: true }, { propertyName: "menuHeaderTitle", first: true, predicate: NgcMenuHeaderTitleComponent, descendants: true }], viewQueries: [{ propertyName: "_templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-menu-header', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { _templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], _menuHeader: [{
                type: ContentChild,
                args: [NgcMenuHeaderDirective]
            }], menuHeaderTitle: [{
                type: ContentChild,
                args: [NgcMenuHeaderTitleComponent]
            }], classList: [{
                type: Input,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1oZWFkZXIvbmdjLW1lbnUtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1oZWFkZXIvbmdjLW1lbnUtaGVhZGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUNqQyxZQUFZLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUNYLGlCQUFpQixFQUVsRCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUVuRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFPckUsTUFBTSxPQUFPLHNCQUFzQjtJQWVsQzs7O09BR0c7SUFDSCxZQUFxQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVp2QyxnQkFBVyxHQUFxQixJQUFJLENBQUM7UUFFcEMsZUFBVSxHQUFXLElBQUksQ0FBQztJQVVnQixDQUFDO0lBUm5ELElBQ0ksU0FBUyxLQUFhLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxTQUFTLENBQUUsT0FBZSxJQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztJQVEvRDs7T0FFRztJQUNILGVBQWU7UUFDZCxVQUFVLENBQUUsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEtBQWhCLElBQUksQ0FBQyxXQUFXLEdBQUssSUFBSSxDQUFDLFlBQVksRUFBQztZQUV2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2pCLFVBQVUsQ0FBRSxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsS0FBaEIsSUFBSSxDQUFDLFdBQVcsR0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBQztZQUVuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O21IQWhEVyxzQkFBc0I7dUdBQXRCLHNCQUFzQiwrSUFJbkIsc0JBQXNCLGtGQUN0QiwyQkFBMkIsOEZBSDlCLFdBQVcsOERDbEJ4Qiw0REFFYzsyRkRjRCxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0csaUJBQWlCLG1CQUVYLHVCQUF1QixDQUFDLE1BQU07d0dBSUksWUFBWTtzQkFBL0QsU0FBUzt1QkFBRSxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVPLFdBQVc7c0JBQTFELFlBQVk7dUJBQUUsc0JBQXNCO2dCQUNlLGVBQWU7c0JBQWxFLFlBQVk7dUJBQUUsMkJBQTJCO2dCQU90QyxTQUFTO3NCQURaLEtBQUs7dUJBQUUsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcblx0Q29udGVudENoaWxkLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdG9yUmVmLFxuXHRPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nY01lbnVIZWFkZXJUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4uL21lbnUtaGVhZGVyLXRpdGxlL25nYy1tZW51LWhlYWRlci10aXRsZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOZ2NNZW51SGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ2MtbWVudS1oZWFkZXIuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1tZW51LWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLW1lbnUtaGVhZGVyLmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NNZW51SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCBUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSApIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBDb250ZW50Q2hpbGQoIE5nY01lbnVIZWFkZXJEaXJlY3RpdmUgKSBwcml2YXRlIF9tZW51SGVhZGVyOiBOZ2NNZW51SGVhZGVyRGlyZWN0aXZlO1xuXHRAQ29udGVudENoaWxkKCBOZ2NNZW51SGVhZGVyVGl0bGVDb21wb25lbnQgKSBwdWJsaWMgbWVudUhlYWRlclRpdGxlOiBOZ2NNZW51SGVhZGVyVGl0bGVDb21wb25lbnQ7XG5cblx0cHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuXHRwcml2YXRlIF9jbGFzc0xpc3Q6IHN0cmluZyA9IG51bGw7XG5cblx0QElucHV0KCAnY2xhc3MnIClcblx0Z2V0IGNsYXNzTGlzdCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fY2xhc3NMaXN0OyB9XG5cdHNldCBjbGFzc0xpc3QoIGNsYXNzZXM6IHN0cmluZyApIHsgdGhpcy5fY2xhc3NMaXN0ID0gY2xhc3NlczsgfVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gX2NkUmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmICkge31cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dGhpcy50ZW1wbGF0ZVJlZiB8fD0gdGhpcy5fdGVtcGxhdGVSZWY7XG5cblx0XHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLnRlbXBsYXRlUmVmIHx8PSB0aGlzLl9tZW51SGVhZGVyPy50ZW1wbGF0ZVJlZjtcblxuXHRcdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy50ZW1wbGF0ZVJlZiA9IG51bGw7XG5cdH1cblxufVxuIiwiPG5nLXRlbXBsYXRlPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPiJdfQ==