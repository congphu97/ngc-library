import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CoerceBoolean, AliasOf } from '@core';
import * as i0 from "@angular/core";
export class NgcGridItemComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.highlightChange = new EventEmitter();
        this.clickEventEmitter = new EventEmitter();
        this.focusEventEmitter = new EventEmitter();
        this.blurEventEmitter = new EventEmitter();
    }
    /**
     * @param {boolean=} isForceAutoUnhighlight
     * @return {void}
     */
    setHighlight(isForceAutoUnhighlight = false) {
        this.isForceAutoUnhighlight = isForceAutoUnhighlight;
        this.highlight = true;
        this.highlightChange.emit(this.highlight);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    click(event) {
        this.clickEventEmitter.emit(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    focus(event) {
        this.focusing = true;
        this.focusEventEmitter.emit(event);
    }
    /**
     * @param {Event} event
     * @return {void}
     */
    blur(event) {
        this.focusing = false;
        this.blurEventEmitter.emit(event);
    }
}
NgcGridItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcGridItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcGridItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcGridItemComponent, selector: "ngc-grid-item", inputs: { id: "id", classes: ["class", "classes"], ngClass: "ngClass", active: "active", disabled: "disabled", focusing: "focusing", hovering: "hovering", dragging: "dragging", draggable: "draggable", highlight: "highlight", autoUnhighlight: "autoUnhighlight" }, outputs: { highlightChange: "highlightChange", clickEventEmitter: "click", focusEventEmitter: "focus", blurEventEmitter: "blur" }, viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    AliasOf('classes'),
    __metadata("design:type", String)
], NgcGridItemComponent.prototype, "ngClass", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGridItemComponent.prototype, "active", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGridItemComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGridItemComponent.prototype, "focusing", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGridItemComponent.prototype, "hovering", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGridItemComponent.prototype, "dragging", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGridItemComponent.prototype, "draggable", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGridItemComponent.prototype, "highlight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGridItemComponent.prototype, "autoUnhighlight", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcGridItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-grid-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], id: [{
                type: Input
            }], classes: [{
                type: Input,
                args: ['class']
            }], ngClass: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], focusing: [{
                type: Input
            }], hovering: [{
                type: Input
            }], dragging: [{
                type: Input
            }], draggable: [{
                type: Input
            }], highlight: [{
                type: Input
            }], autoUnhighlight: [{
                type: Input
            }], highlightChange: [{
                type: Output
            }], clickEventEmitter: [{
                type: Output,
                args: ['click']
            }], focusEventEmitter: [{
                type: Output,
                args: ['focus']
            }], blurEventEmitter: [{
                type: Output,
                args: ['blur']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWdyaWQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1ncmlkL2dyaWQtaXRlbS9uZ2MtZ3JpZC1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWdyaWQvZ3JpZC1pdGVtL25nYy1ncmlkLWl0ZW0uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUNsQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDeEIsWUFBWSxFQUFFLHVCQUF1QixFQUNyQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQzs7QUFPL0MsTUFBTSxPQUFPLG9CQUFvQjtJQXVCaEM7OztPQUdHO0lBQ0gsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVh6QixvQkFBZSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzVELHNCQUFpQixHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ25FLHNCQUFpQixHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3BFLHFCQUFnQixHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO0lBUTdDLENBQUM7SUFFL0M7OztPQUdHO0lBQ0ksWUFBWSxDQUFFLHlCQUFrQyxLQUFLO1FBQzNELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBRSxLQUFhO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBRSxLQUFhO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLElBQUksQ0FBRSxLQUFhO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDckMsQ0FBQzs7aUhBbEVXLG9CQUFvQjtxR0FBcEIsb0JBQW9CLDRlQUVwQixXQUFXLDhEQ2Z4Qiw0REFFYztBRGlCYjtJQUFVLE9BQU8sQ0FBRSxTQUFTLENBQUU7O3FEQUF3QjtBQUN0RDtJQUFVLGFBQWEsRUFBRTs7b0RBQXdCO0FBQ2pEO0lBQVUsYUFBYSxFQUFFOztzREFBMEI7QUFDbkQ7SUFBVSxhQUFhLEVBQUU7O3NEQUEwQjtBQUNuRDtJQUFVLGFBQWEsRUFBRTs7c0RBQTBCO0FBQ25EO0lBQVUsYUFBYSxFQUFFOztzREFBMEI7QUFDbkQ7SUFBVSxhQUFhLEVBQUU7O3VEQUEyQjtBQUNwRDtJQUFVLGFBQWEsRUFBRTs7dURBQTJCO0FBQ3BEO0lBQVUsYUFBYSxFQUFFOzs2REFBaUM7MkZBZDlDLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRyxlQUFlLG1CQUVULHVCQUF1QixDQUFDLE1BQU07aUdBSUcsV0FBVztzQkFBN0QsU0FBUzt1QkFBRSxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUV6QixFQUFFO3NCQUFqQixLQUFLO2dCQUNtQixPQUFPO3NCQUEvQixLQUFLO3VCQUFFLE9BQU87Z0JBQ3VCLE9BQU87c0JBQTVDLEtBQUs7Z0JBQzJCLE1BQU07c0JBQXRDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFNBQVM7c0JBQXpDLEtBQUs7Z0JBQzJCLFNBQVM7c0JBQXpDLEtBQUs7Z0JBQzJCLGVBQWU7c0JBQS9DLEtBQUs7Z0JBRVcsZUFBZTtzQkFBL0IsTUFBTTtnQkFDbUIsaUJBQWlCO3NCQUExQyxNQUFNO3VCQUFFLE9BQU87Z0JBQ1UsaUJBQWlCO3NCQUExQyxNQUFNO3VCQUFFLE9BQU87Z0JBQ1MsZ0JBQWdCO3NCQUF4QyxNQUFNO3VCQUFFLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvZXJjZUJvb2xlYW4sIEFsaWFzT2YgfSBmcm9tICdAY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtZ3JpZC1pdGVtJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtZ3JpZC1pdGVtLmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NHcmlkSXRlbUNvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZCggVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0gKSBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QElucHV0KCkgcHVibGljIGlkOiBudW1iZXI7XG5cdEBJbnB1dCggJ2NsYXNzJyApIHB1YmxpYyBjbGFzc2VzOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBBbGlhc09mKCAnY2xhc3NlcycgKSBwdWJsaWMgbmdDbGFzczogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBmb2N1c2luZzogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaG92ZXJpbmc6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRyYWdnaW5nOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkcmFnZ2FibGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGhpZ2hsaWdodDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgYXV0b1VuaGlnaGxpZ2h0OiBib29sZWFuO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgaGlnaGxpZ2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cdEBPdXRwdXQoICdjbGljaycgKSBwdWJsaWMgY2xpY2tFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXHRAT3V0cHV0KCAnZm9jdXMnICkgcHVibGljIGZvY3VzRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCggJ2JsdXInICkgcHVibGljIGJsdXJFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG5cdHB1YmxpYyBpc0ZvcmNlQXV0b1VuaGlnaGxpZ2h0OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBpc0ZvcmNlQXV0b1VuaGlnaGxpZ2h0XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2V0SGlnaGxpZ2h0KCBpc0ZvcmNlQXV0b1VuaGlnaGxpZ2h0OiBib29sZWFuID0gZmFsc2UgKSB7XG5cdFx0dGhpcy5pc0ZvcmNlQXV0b1VuaGlnaGxpZ2h0ID0gaXNGb3JjZUF1dG9VbmhpZ2hsaWdodDtcblx0XHR0aGlzLmhpZ2hsaWdodCA9IHRydWU7XG5cblx0XHR0aGlzLmhpZ2hsaWdodENoYW5nZS5lbWl0KCB0aGlzLmhpZ2hsaWdodCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xpY2soIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0dGhpcy5jbGlja0V2ZW50RW1pdHRlci5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZm9jdXMoIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0dGhpcy5mb2N1c2luZyA9IHRydWU7XG5cblx0XHR0aGlzLmZvY3VzRXZlbnRFbWl0dGVyLmVtaXQoIGV2ZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBibHVyKCBldmVudD86IEV2ZW50ICkge1xuXHRcdHRoaXMuZm9jdXNpbmcgPSBmYWxzZTtcblxuXHRcdHRoaXMuYmx1ckV2ZW50RW1pdHRlci5lbWl0KCBldmVudCApO1xuXHR9XG5cbn1cbiIsIjxuZy10ZW1wbGF0ZT5cblx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT4iXX0=