import { Component, TemplateRef, ViewChild, ContentChild, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgcMenuContentDirective } from './ngc-menu-content.directive';
import * as i0 from "@angular/core";
export class NgcMenuContentComponent {
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
            this.templateRef || (this.templateRef = this._menuContent?.templateRef);
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
NgcMenuContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuContentComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcMenuContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcMenuContentComponent, selector: "ngc-menu-content", inputs: { classList: ["class", "classList"] }, queries: [{ propertyName: "_menuContent", first: true, predicate: NgcMenuContentDirective, descendants: true }], viewQueries: [{ propertyName: "_templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-menu-content', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { _templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], _menuContent: [{
                type: ContentChild,
                args: [NgcMenuContentDirective]
            }], classList: [{
                type: Input,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1tZW51L21lbnUtY29udGVudC9uZ2MtbWVudS1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1jb250ZW50L25nYy1tZW51LWNvbnRlbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQ2pDLFlBQVksRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQ1gsaUJBQWlCLEVBRWxELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQU92RSxNQUFNLE9BQU8sdUJBQXVCO0lBY25DOzs7T0FHRztJQUNILFlBQXFCLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBWnZDLGdCQUFXLEdBQXFCLElBQUksQ0FBQztRQUVwQyxlQUFVLEdBQVcsSUFBSSxDQUFDO0lBVWdCLENBQUM7SUFSbkQsSUFDSSxTQUFTLEtBQWEsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRCxJQUFJLFNBQVMsQ0FBRSxPQUFlLElBQUssSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBUS9EOztPQUVHO0lBQ0gsZUFBZTtRQUNkLFVBQVUsQ0FBRSxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsS0FBaEIsSUFBSSxDQUFDLFdBQVcsR0FBSyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBRXZDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQkFBa0I7UUFDakIsVUFBVSxDQUFFLEdBQUcsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxLQUFoQixJQUFJLENBQUMsV0FBVyxHQUFLLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFDO1lBRXBELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7b0hBL0NXLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLGlKQUlwQix1QkFBdUIsOEZBRjFCLFdBQVcsOERDaEJ4Qiw0REFFYzsyRkRZRCx1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0csa0JBQWtCLG1CQUVaLHVCQUF1QixDQUFDLE1BQU07d0dBSUksWUFBWTtzQkFBL0QsU0FBUzt1QkFBRSxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVRLFlBQVk7c0JBQTVELFlBQVk7dUJBQUUsdUJBQXVCO2dCQU9sQyxTQUFTO3NCQURaLEtBQUs7dUJBQUUsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcblx0Q29udGVudENoaWxkLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdG9yUmVmLFxuXHRPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nY01lbnVDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uZ2MtbWVudS1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtbWVudS1jb250ZW50Jyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtbWVudS1jb250ZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NNZW51Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCggVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0gKSBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAQ29udGVudENoaWxkKCBOZ2NNZW51Q29udGVudERpcmVjdGl2ZSApIHByaXZhdGUgX21lbnVDb250ZW50OiBOZ2NNZW51Q29udGVudERpcmVjdGl2ZTtcblxuXHRwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG5cdHByaXZhdGUgX2NsYXNzTGlzdDogc3RyaW5nID0gbnVsbDtcblxuXHRASW5wdXQoICdjbGFzcycgKVxuXHRnZXQgY2xhc3NMaXN0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9jbGFzc0xpc3Q7IH1cblx0c2V0IGNsYXNzTGlzdCggY2xhc3Nlczogc3RyaW5nICkgeyB0aGlzLl9jbGFzc0xpc3QgPSBjbGFzc2VzOyB9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0NoYW5nZURldGVjdG9yUmVmfSBfY2RSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLnRlbXBsYXRlUmVmIHx8PSB0aGlzLl90ZW1wbGF0ZVJlZjtcblxuXHRcdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMudGVtcGxhdGVSZWYgfHw9IHRoaXMuX21lbnVDb250ZW50Py50ZW1wbGF0ZVJlZjtcblxuXHRcdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy50ZW1wbGF0ZVJlZiA9IG51bGw7XG5cdH1cblxufVxuIiwiPG5nLXRlbXBsYXRlPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPiJdfQ==