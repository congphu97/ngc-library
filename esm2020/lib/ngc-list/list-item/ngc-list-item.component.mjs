import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { DefaultValue, AliasOf, CoerceBoolean, CoerceNumber } from '@core';
import * as i0 from "@angular/core";
export class NgcListItemComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.truncate = true;
        this.truncateLimitLine = 2;
        this.saved = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.editing = new EventEmitter();
        this.labelChange = new EventEmitter();
        this.dotColorChange = new EventEmitter();
        this.highlightChange = new EventEmitter();
        this.clickEventEmitter = new EventEmitter();
        this.focusEventEmitter = new EventEmitter();
        this.blurEventEmitter = new EventEmitter();
        this.changes$ = new Subject();
        this.editingSubject$ = new Subject();
    }
    /**
     * @constructor
     */
    ngOnChanges() {
        this.changes$.next();
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
     * @return {void}
     */
    edit() {
        this.editingSubject$.next();
    }
    /**
     * @param {string} label
     * @return {void}
     */
    save(label) {
        this.isEditing = false;
        if (this.label === label)
            return;
        this.label = label;
        this.saved.emit(this.label);
    }
    /**
     * @param {string} label
     * @return {void}
     */
    cancel(label) {
        this.isEditing = false;
        this.cancelled.emit(label);
    }
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    click(event) {
        this.clickEventEmitter.emit(event);
    }
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    focus(event) {
        this.focusing = true;
        this.focusEventEmitter.emit(event);
    }
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    blur(event) {
        this.focusing = false;
        this.blurEventEmitter.emit(event);
    }
}
NgcListItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcListItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcListItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcListItemComponent, selector: "ngc-list-item", inputs: { id: "id", order: "order", label: "label", description: "description", icon: "icon", dotColor: "dotColor", classes: ["class", "classes"], ngClass: "ngClass", active: "active", disabled: "disabled", readonly: "readonly", focusing: "focusing", hovering: "hovering", dragging: "dragging", draggable: "draggable", highlight: "highlight", autoUnhighlight: "autoUnhighlight", truncate: "truncate", truncateLimitLine: "truncateLimitLine" }, outputs: { saved: "saved", cancelled: "cancelled", editing: "editing", labelChange: "labelChange", dotColorChange: "dotColorChange", highlightChange: "highlightChange", clickEventEmitter: "click", focusEventEmitter: "focus", blurEventEmitter: "blur" }, viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcListItemComponent.prototype, "id", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcListItemComponent.prototype, "order", void 0);
__decorate([
    AliasOf('classes'),
    __metadata("design:type", String)
], NgcListItemComponent.prototype, "ngClass", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "active", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "readonly", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "focusing", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "hovering", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "dragging", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "draggable", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "highlight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "autoUnhighlight", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcListItemComponent.prototype, "truncate", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcListItemComponent.prototype, "truncateLimitLine", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcListItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-list-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], id: [{
                type: Input
            }], order: [{
                type: Input
            }], label: [{
                type: Input
            }], description: [{
                type: Input
            }], icon: [{
                type: Input
            }], dotColor: [{
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
            }], readonly: [{
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
            }], truncate: [{
                type: Input
            }], truncateLimitLine: [{
                type: Input
            }], saved: [{
                type: Output
            }], cancelled: [{
                type: Output
            }], editing: [{
                type: Output
            }], labelChange: [{
                type: Output
            }], dotColorChange: [{
                type: Output
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1saXN0L2xpc3QtaXRlbS9uZ2MtbGlzdC1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWxpc3QvbGlzdC1pdGVtL25nYy1saXN0LWl0ZW0uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUNsQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDeEIsWUFBWSxFQUFFLHVCQUF1QixFQUNyQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBTzNFLE1BQU0sT0FBTyxvQkFBb0I7SUF1Q2hDOzs7T0FHRztJQUNILFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF0Qk8sYUFBUSxHQUFZLElBQUksQ0FBQztRQUMxQixzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFFN0QsVUFBSyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pELGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM3RCxZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDN0QsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvRCxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2xFLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDNUQsc0JBQWlCLEdBQTZCLElBQUksWUFBWSxF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U0FBUzt1QkFBRSxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVULEVBQUU7c0JBQWpDLEtBQUs7Z0JBQzBCLEtBQUs7c0JBQXBDLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFDbUIsT0FBTztzQkFBL0IsS0FBSzt1QkFBRSxPQUFPO2dCQUN1QixPQUFPO3NCQUE1QyxLQUFLO2dCQUMyQixNQUFNO3NCQUF0QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQixTQUFTO3NCQUF6QyxLQUFLO2dCQUMyQixTQUFTO3NCQUF6QyxLQUFLO2dCQUMyQixlQUFlO3NCQUEvQyxLQUFLO2dCQUMyQyxRQUFRO3NCQUF4RCxLQUFLO2dCQUMwQyxpQkFBaUI7c0JBQWhFLEtBQUs7Z0JBRVcsS0FBSztzQkFBckIsTUFBTTtnQkFDVSxTQUFTO3NCQUF6QixNQUFNO2dCQUNVLE9BQU87c0JBQXZCLE1BQU07Z0JBQ1UsV0FBVztzQkFBM0IsTUFBTTtnQkFDVSxjQUFjO3NCQUE5QixNQUFNO2dCQUNVLGVBQWU7c0JBQS9CLE1BQU07Z0JBQ21CLGlCQUFpQjtzQkFBMUMsTUFBTTt1QkFBRSxPQUFPO2dCQUNVLGlCQUFpQjtzQkFBMUMsTUFBTTt1QkFBRSxPQUFPO2dCQUNTLGdCQUFnQjtzQkFBeEMsTUFBTTt1QkFBRSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQWxpYXNPZiwgQ29lcmNlQm9vbGVhbiwgQ29lcmNlTnVtYmVyIH0gZnJvbSAnQGNvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLWxpc3QtaXRlbScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLWxpc3QtaXRlbS5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjTGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBWaWV3Q2hpbGQoIFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9ICkgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBJbnB1dCgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgaWQ6IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBvcmRlcjogbnVtYmVyO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkb3RDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoICdjbGFzcycgKSBwdWJsaWMgY2xhc3Nlczogc3RyaW5nO1xuXHRASW5wdXQoKSBAQWxpYXNPZiggJ2NsYXNzZXMnICkgcHVibGljIG5nQ2xhc3M6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGZvY3VzaW5nOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBob3ZlcmluZzogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZHJhZ2dpbmc6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRyYWdnYWJsZTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGlnaGxpZ2h0OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhdXRvVW5oaWdobGlnaHQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyB0cnVuY2F0ZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIHRydW5jYXRlTGltaXRMaW5lOiBudW1iZXIgPSAyO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgc2F2ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsbGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGVkaXRpbmc6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBsYWJlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBkb3RDb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBoaWdobGlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblx0QE91dHB1dCggJ2NsaWNrJyApIHB1YmxpYyBjbGlja0V2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXHRAT3V0cHV0KCAnZm9jdXMnICkgcHVibGljIGZvY3VzRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cdEBPdXRwdXQoICdibHVyJyApIHB1YmxpYyBibHVyRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cblx0cHVibGljIGlzRWRpdGluZzogYm9vbGVhbjtcblx0cHVibGljIGlzRm9yY2VBdXRvVW5oaWdobGlnaHQ6IGJvb2xlYW47XG5cdHB1YmxpYyBjaGFuZ2VzJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cdHB1YmxpYyBlZGl0aW5nU3ViamVjdCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuY2hhbmdlcyQubmV4dCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzRm9yY2VBdXRvVW5oaWdobGlnaHRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzZXRIaWdobGlnaHQoIGlzRm9yY2VBdXRvVW5oaWdobGlnaHQ6IGJvb2xlYW4gPSBmYWxzZSApIHtcblx0XHR0aGlzLmlzRm9yY2VBdXRvVW5oaWdobGlnaHQgPSBpc0ZvcmNlQXV0b1VuaGlnaGxpZ2h0O1xuXHRcdHRoaXMuaGlnaGxpZ2h0ID0gdHJ1ZTtcblxuXHRcdHRoaXMuaGlnaGxpZ2h0Q2hhbmdlLmVtaXQoIHRoaXMuaGlnaGxpZ2h0ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBlZGl0KCkge1xuXHRcdHRoaXMuZWRpdGluZ1N1YmplY3QkLm5leHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzYXZlKCBsYWJlbDogc3RyaW5nICkge1xuXHRcdHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG5cblx0XHRpZiAoIHRoaXMubGFiZWwgPT09IGxhYmVsICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5sYWJlbCA9IGxhYmVsO1xuXHRcdHRoaXMuc2F2ZWQuZW1pdCggdGhpcy5sYWJlbCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNhbmNlbCggbGFiZWw/OiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcblxuXHRcdHRoaXMuY2FuY2VsbGVkLmVtaXQoIGxhYmVsICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNsaWNrKCBldmVudD86IE1vdXNlRXZlbnQgKSB7XG5cdFx0dGhpcy5jbGlja0V2ZW50RW1pdHRlci5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBmb2N1cyggZXZlbnQ/OiBNb3VzZUV2ZW50ICkge1xuXHRcdHRoaXMuZm9jdXNpbmcgPSB0cnVlO1xuXG5cdFx0dGhpcy5mb2N1c0V2ZW50RW1pdHRlci5lbWl0KCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBibHVyKCBldmVudD86IE1vdXNlRXZlbnQgKSB7XG5cdFx0dGhpcy5mb2N1c2luZyA9IGZhbHNlO1xuXG5cdFx0dGhpcy5ibHVyRXZlbnRFbWl0dGVyLmVtaXQoIGV2ZW50ICk7XG5cdH1cblxufVxuIiwiPG5nLXRlbXBsYXRlPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPiJdfQ==