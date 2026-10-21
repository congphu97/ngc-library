import { Component, TemplateRef, ViewChild, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NgcMenuHeaderTitleComponent {
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
    ngOnDestroy() {
        this.templateRef = null;
    }
}
NgcMenuHeaderTitleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuHeaderTitleComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcMenuHeaderTitleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcMenuHeaderTitleComponent, selector: "ngc-menu-header-title", inputs: { classList: ["class", "classList"] }, viewQueries: [{ propertyName: "_templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuHeaderTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-menu-header-title', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { _templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], classList: [{
                type: Input,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUtaGVhZGVyLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1oZWFkZXItdGl0bGUvbmdjLW1lbnUtaGVhZGVyLXRpdGxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1oZWFkZXItdGl0bGUvbmdjLW1lbnUtaGVhZGVyLXRpdGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUNqQyxLQUFLLEVBQUUsdUJBQXVCLEVBQzlCLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQzs7QUFPdkIsTUFBTSxPQUFPLDJCQUEyQjtJQVl2Qzs7O09BR0c7SUFDSCxZQUFxQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVp2QyxnQkFBVyxHQUFxQixJQUFJLENBQUM7UUFFcEMsZUFBVSxHQUFXLElBQUksQ0FBQztJQVVnQixDQUFDO0lBUm5ELElBQ0ksU0FBUyxLQUFhLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxTQUFTLENBQUUsT0FBZSxJQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztJQVEvRDs7T0FFRztJQUNILGVBQWU7UUFDZCxVQUFVLENBQUUsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEtBQWhCLElBQUksQ0FBQyxXQUFXLEdBQUssSUFBSSxDQUFDLFlBQVksRUFBQztZQUV2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O3dIQWxDVywyQkFBMkI7NEdBQTNCLDJCQUEyQiwwSkFFM0IsV0FBVyw4RENieEIsNERBRWM7MkZEU0QsMkJBQTJCO2tCQUx2QyxTQUFTOytCQUNHLHVCQUF1QixtQkFFakIsdUJBQXVCLENBQUMsTUFBTTt3R0FJSSxZQUFZO3NCQUEvRCxTQUFTO3VCQUFFLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBT3JDLFNBQVM7c0JBRFosS0FBSzt1QkFBRSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxuXHRJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtbWVudS1oZWFkZXItdGl0bGUnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1tZW51LWhlYWRlci10aXRsZS5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjTWVudUhlYWRlclRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCBUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSApIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cblx0cHJpdmF0ZSBfY2xhc3NMaXN0OiBzdHJpbmcgPSBudWxsO1xuXG5cdEBJbnB1dCggJ2NsYXNzJyApXG5cdGdldCBjbGFzc0xpc3QoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2NsYXNzTGlzdDsgfVxuXHRzZXQgY2xhc3NMaXN0KCBjbGFzc2VzOiBzdHJpbmcgKSB7IHRoaXMuX2NsYXNzTGlzdCA9IGNsYXNzZXM7IH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IF9jZFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiApIHt9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMudGVtcGxhdGVSZWYgfHw9IHRoaXMuX3RlbXBsYXRlUmVmO1xuXG5cdFx0XHR0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnRlbXBsYXRlUmVmID0gbnVsbDtcblx0fVxuXG59XG4iLCI8bmctdGVtcGxhdGU+XG5cdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+Il19