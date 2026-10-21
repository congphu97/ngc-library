import { Component, TemplateRef, ViewChild, ContentChild, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgcMenuFooterDirective } from './ngc-menu-footer.directive';
import * as i0 from "@angular/core";
export class NgcMenuFooterComponent {
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
            this.templateRef || (this.templateRef = this._menuFooter?.templateRef);
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
NgcMenuFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuFooterComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcMenuFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcMenuFooterComponent, selector: "ngc-menu-footer", inputs: { classList: ["class", "classList"] }, queries: [{ propertyName: "_menuFooter", first: true, predicate: NgcMenuFooterDirective, descendants: true }], viewQueries: [{ propertyName: "_templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-menu-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { _templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], _menuFooter: [{
                type: ContentChild,
                args: [NgcMenuFooterDirective]
            }], classList: [{
                type: Input,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1mb290ZXIvbmdjLW1lbnUtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1mb290ZXIvbmdjLW1lbnUtZm9vdGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUNqQyxZQUFZLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUNYLGlCQUFpQixFQUVsRCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFPckUsTUFBTSxPQUFPLHNCQUFzQjtJQWNsQzs7O09BR0c7SUFDSCxZQUFxQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVp2QyxnQkFBVyxHQUFxQixJQUFJLENBQUM7UUFFcEMsZUFBVSxHQUFXLElBQUksQ0FBQztJQVVnQixDQUFDO0lBUm5ELElBQ0ksU0FBUyxLQUFhLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxTQUFTLENBQUUsT0FBZSxJQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztJQVEvRDs7T0FFRztJQUNILGVBQWU7UUFDZCxVQUFVLENBQUUsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEtBQWhCLElBQUksQ0FBQyxXQUFXLEdBQUssSUFBSSxDQUFDLFlBQVksRUFBQztZQUV2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2pCLFVBQVUsQ0FBRSxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsS0FBaEIsSUFBSSxDQUFDLFdBQVcsR0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBQztZQUVuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O21IQS9DVyxzQkFBc0I7dUdBQXRCLHNCQUFzQiwrSUFJbkIsc0JBQXNCLDhGQUZ6QixXQUFXLDhEQ2hCeEIsNERBRWM7MkZEWUQsc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNHLGlCQUFpQixtQkFFWCx1QkFBdUIsQ0FBQyxNQUFNO3dHQUlJLFlBQVk7c0JBQS9ELFNBQVM7dUJBQUUsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFFTyxXQUFXO3NCQUExRCxZQUFZO3VCQUFFLHNCQUFzQjtnQkFPakMsU0FBUztzQkFEWixLQUFLO3VCQUFFLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsXG5cdENvbnRlbnRDaGlsZCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZixcblx0T25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ2NNZW51Rm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ2MtbWVudS1mb290ZXIuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1tZW51LWZvb3RlcicsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLW1lbnUtZm9vdGVyLmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NNZW51Rm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCBUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSApIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBDb250ZW50Q2hpbGQoIE5nY01lbnVGb290ZXJEaXJlY3RpdmUgKSBwcml2YXRlIF9tZW51Rm9vdGVyOiBOZ2NNZW51Rm9vdGVyRGlyZWN0aXZlO1xuXG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cblx0cHJpdmF0ZSBfY2xhc3NMaXN0OiBzdHJpbmcgPSBudWxsO1xuXG5cdEBJbnB1dCggJ2NsYXNzJyApXG5cdGdldCBjbGFzc0xpc3QoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2NsYXNzTGlzdDsgfVxuXHRzZXQgY2xhc3NMaXN0KCBjbGFzc2VzOiBzdHJpbmcgKSB7IHRoaXMuX2NsYXNzTGlzdCA9IGNsYXNzZXM7IH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IF9jZFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiApIHt9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMudGVtcGxhdGVSZWYgfHw9IHRoaXMuX3RlbXBsYXRlUmVmO1xuXG5cdFx0XHR0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dGhpcy50ZW1wbGF0ZVJlZiB8fD0gdGhpcy5fbWVudUZvb3Rlcj8udGVtcGxhdGVSZWY7XG5cblx0XHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudGVtcGxhdGVSZWYgPSBudWxsO1xuXHR9XG5cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cblx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT4iXX0=