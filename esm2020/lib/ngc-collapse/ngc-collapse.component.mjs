import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding, } from '@angular/core';
import { CoerceBoolean, CoerceCssPixel } from '@core';
import { trigger, transition, style, animate } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/directives/highlight-state.directive";
import * as i3 from "../ngc-icon/ngc-icon.component";
export class NgcCollapseComponent {
    constructor() {
        this.highlightChange = new EventEmitter();
    }
    get styleColor() { return this.color; }
    get styleBorderWidth() { return this.borderWidth; }
    get styleBorderColor() { return this.borderColor; }
    get styleBorderStyle() { return this.borderStyle; }
    get styleBorderRadius() { return this.borderRadius; }
    get styleActiveColor() { return this.activeColor || this.color; }
    get styleActiveBorderWidth() { return this.activeBorderWidth || this.borderWidth; }
    get styleActiveBorderColor() { return this.activeBorderColor || this.borderColor; }
    get styleActiveBorderStyle() { return this.activeBorderStyle || this.borderStyle; }
    get styleActiveBorderRadius() { return this.activeBorderRadius || this.borderRadius; }
    get stylePaddingTop() { return this.contentPaddingTop || this.contentPaddingVertical; }
    get stylePaddingBottom() { return this.contentPaddingBottom || this.contentPaddingVertical; }
    get stylePaddingLeft() { return this.contentPaddingLeft || this.contentPaddingHorizontal; }
    get stylePaddingRight() { return this.contentPaddingRight || this.contentPaddingHorizontal; }
    get classActive() { return this.active; }
}
NgcCollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCollapseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcCollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcCollapseComponent, selector: "ngc-collapse", inputs: { color: "color", iconCollapse: "iconCollapse", borderWidth: "borderWidth", borderColor: "borderColor", borderStyle: "borderStyle", activeColor: "activeColor", activeBorderWidth: "activeBorderWidth", activeBorderColor: "activeBorderColor", activeBorderStyle: "activeBorderStyle", activeBorderRadius: "activeBorderRadius", borderRadius: "borderRadius", contentPaddingVertical: "contentPaddingVertical", contentPaddingHorizontal: "contentPaddingHorizontal", contentPaddingTop: "contentPaddingTop", contentPaddingBottom: "contentPaddingBottom", contentPaddingLeft: "contentPaddingLeft", contentPaddingRight: "contentPaddingRight", active: "active", highlight: "highlight", autoUnhighlight: "autoUnhighlight" }, outputs: { highlightChange: "highlightChange" }, host: { properties: { "style.--collapse-color": "this.styleColor", "style.--collapse-border-width": "this.styleBorderWidth", "style.--collapse-border-color": "this.styleBorderColor", "style.--collapse-border-style": "this.styleBorderStyle", "style.--collapse-border-radius": "this.styleBorderRadius", "style.--collapse-active-color": "this.styleActiveColor", "style.--collapse-active-border-width": "this.styleActiveBorderWidth", "style.--collapse-active-border-color": "this.styleActiveBorderColor", "style.--collapse-active-border-style": "this.styleActiveBorderStyle", "style.--collapse-active-border-radius": "this.styleActiveBorderRadius", "style.--collapse-padding-top": "this.stylePaddingTop", "style.--collapse-padding-bottom": "this.stylePaddingBottom", "style.--collapse-padding-left": "this.stylePaddingLeft", "style.--collapse-padding-right": "this.stylePaddingRight", "class.ngc-collapse--active": "this.classActive" }, classAttribute: "ngc-collapse" }, ngImport: i0, template: "<div class=\"ngc-collapse-wrapper\"\n  [autoUnhighlight]=\"autoUnhighlight\"\n  [(highlightState)]=\"highlight\"\n  (highlightStateChange)=\"highlightChange?.emit($event)\">\n  \n  <div class=\"ngc-collapse__header\" (click)=\"active = !active\">\n    <ng-content select=\"[ngcCollapseHeader]\"></ng-content>\n    <ng-container>\n      <ngc-icon \n        class=\"ngc-collapse__header__icon\" \n        [name]=\"active ? 'chevron-up-outline' : 'chevron-down-outline'\" \n        size=\"20px\">\n      </ngc-icon>\n    </ng-container>\n  </div>\n\n  <div class=\"ngc-collapse__content\" *ngIf=\"active\" [@toggleHeight]>\n    <ng-content select=\"[ngcCollapseContent]\"></ng-content>\n  </div>\n\n  <div class=\"ngc-collapse__footer\">\n    <ng-content select=\"[ngcCollapseFooter]\"></ng-content>\n  </div>\n\n</div>\n", styles: [".ngc-collapse{display:flex;flex-direction:column;cursor:pointer}.ngc-collapse.ngc-collapse--active>.ngc-collapse-wrapper{background-color:var(--collapse-active-color, var(--ngc-color-neutral-white, #fff));border-width:var(--collapse-active-border-width, 1px);border-style:var(--collapse-active-border-style, solid);border-color:var(--collapse-active-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));border-radius:var(--collapse-active-border-radius, 10px)}.ngc-collapse>.ngc-collapse-wrapper{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0;background-color:var(--collapse-color, var(--ngc-color-neutral-background-canvas, #fafafa));border-width:var(--collapse-border-width, 1px);border-style:var(--collapse-border-style, solid);border-color:var(--collapse-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));border-radius:var(--collapse-border-radius, 10px)}.ngc-collapse__header:not(:empty){padding-top:var(--collapse-padding-top, 15px);padding-bottom:var(--collapse-padding-bottom, 15px);padding-left:var(--collapse-padding-left, 15px);padding-right:var(--collapse-padding-right, 15px);background:var(--ngc-color-neutral-background-disabled, #f5f5f5);font-weight:700;border-bottom:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-top-left-radius:8px;border-top-right-radius:8px;display:flex;align-items:center;justify-content:space-between}.ngc-collapse__content{flex:1;padding-top:var(--collapse-padding-top, 15px);padding-bottom:var(--collapse-padding-bottom, 15px);padding-left:var(--collapse-padding-left, 15px);padding-right:var(--collapse-padding-right, 15px)}.ngc-collapse__footer:not(:empty){padding-top:var(--collapse-padding-top, 15px);padding-bottom:var(--collapse-padding-bottom, 15px);padding-left:var(--collapse-padding-left, 15px);padding-right:var(--collapse-padding-right, 15px);background:var(--ngc-color-neutral-background-disabled, #f5f5f5);font-weight:700;border-top:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-bottom-left-radius:8px;border-bottom-right-radius:8px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.HighlightStateDirective, selector: "[highlightState]", inputs: ["highlightType", "highlightColor", "highlightState", "highlightDisabled", "autoUnhighlight", "autoUnhighlightDelay"], outputs: ["highlightStateChange"] }, { kind: "component", type: i3.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }], animations: [
        trigger('toggleHeight', [
            transition(':enter', [
                style({ height: '0', opacity: 0 }),
                animate('300ms ease-out', style({ height: '*', opacity: 1 })),
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ height: '0', opacity: 0 })),
            ]),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "borderWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "activeBorderWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "borderRadius", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "contentPaddingVertical", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "contentPaddingHorizontal", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "contentPaddingTop", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "contentPaddingBottom", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "contentPaddingLeft", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCollapseComponent.prototype, "contentPaddingRight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCollapseComponent.prototype, "active", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCollapseComponent.prototype, "highlight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCollapseComponent.prototype, "autoUnhighlight", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCollapseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-collapse', host: { class: 'ngc-collapse' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                        trigger('toggleHeight', [
                            transition(':enter', [
                                style({ height: '0', opacity: 0 }),
                                animate('300ms ease-out', style({ height: '*', opacity: 1 })),
                            ]),
                            transition(':leave', [
                                animate('300ms ease-in', style({ height: '0', opacity: 0 })),
                            ]),
                        ]),
                    ], template: "<div class=\"ngc-collapse-wrapper\"\n  [autoUnhighlight]=\"autoUnhighlight\"\n  [(highlightState)]=\"highlight\"\n  (highlightStateChange)=\"highlightChange?.emit($event)\">\n  \n  <div class=\"ngc-collapse__header\" (click)=\"active = !active\">\n    <ng-content select=\"[ngcCollapseHeader]\"></ng-content>\n    <ng-container>\n      <ngc-icon \n        class=\"ngc-collapse__header__icon\" \n        [name]=\"active ? 'chevron-up-outline' : 'chevron-down-outline'\" \n        size=\"20px\">\n      </ngc-icon>\n    </ng-container>\n  </div>\n\n  <div class=\"ngc-collapse__content\" *ngIf=\"active\" [@toggleHeight]>\n    <ng-content select=\"[ngcCollapseContent]\"></ng-content>\n  </div>\n\n  <div class=\"ngc-collapse__footer\">\n    <ng-content select=\"[ngcCollapseFooter]\"></ng-content>\n  </div>\n\n</div>\n", styles: [".ngc-collapse{display:flex;flex-direction:column;cursor:pointer}.ngc-collapse.ngc-collapse--active>.ngc-collapse-wrapper{background-color:var(--collapse-active-color, var(--ngc-color-neutral-white, #fff));border-width:var(--collapse-active-border-width, 1px);border-style:var(--collapse-active-border-style, solid);border-color:var(--collapse-active-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));border-radius:var(--collapse-active-border-radius, 10px)}.ngc-collapse>.ngc-collapse-wrapper{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0;background-color:var(--collapse-color, var(--ngc-color-neutral-background-canvas, #fafafa));border-width:var(--collapse-border-width, 1px);border-style:var(--collapse-border-style, solid);border-color:var(--collapse-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));border-radius:var(--collapse-border-radius, 10px)}.ngc-collapse__header:not(:empty){padding-top:var(--collapse-padding-top, 15px);padding-bottom:var(--collapse-padding-bottom, 15px);padding-left:var(--collapse-padding-left, 15px);padding-right:var(--collapse-padding-right, 15px);background:var(--ngc-color-neutral-background-disabled, #f5f5f5);font-weight:700;border-bottom:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-top-left-radius:8px;border-top-right-radius:8px;display:flex;align-items:center;justify-content:space-between}.ngc-collapse__content{flex:1;padding-top:var(--collapse-padding-top, 15px);padding-bottom:var(--collapse-padding-bottom, 15px);padding-left:var(--collapse-padding-left, 15px);padding-right:var(--collapse-padding-right, 15px)}.ngc-collapse__footer:not(:empty){padding-top:var(--collapse-padding-top, 15px);padding-bottom:var(--collapse-padding-bottom, 15px);padding-left:var(--collapse-padding-left, 15px);padding-right:var(--collapse-padding-right, 15px);background:var(--ngc-color-neutral-background-disabled, #f5f5f5);font-weight:700;border-top:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-bottom-left-radius:8px;border-bottom-right-radius:8px}\n"] }]
        }], propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--collapse-color']
            }], styleBorderWidth: [{
                type: HostBinding,
                args: ['style.--collapse-border-width']
            }], styleBorderColor: [{
                type: HostBinding,
                args: ['style.--collapse-border-color']
            }], styleBorderStyle: [{
                type: HostBinding,
                args: ['style.--collapse-border-style']
            }], styleBorderRadius: [{
                type: HostBinding,
                args: ['style.--collapse-border-radius']
            }], styleActiveColor: [{
                type: HostBinding,
                args: ['style.--collapse-active-color']
            }], styleActiveBorderWidth: [{
                type: HostBinding,
                args: ['style.--collapse-active-border-width']
            }], styleActiveBorderColor: [{
                type: HostBinding,
                args: ['style.--collapse-active-border-color']
            }], styleActiveBorderStyle: [{
                type: HostBinding,
                args: ['style.--collapse-active-border-style']
            }], styleActiveBorderRadius: [{
                type: HostBinding,
                args: ['style.--collapse-active-border-radius']
            }], stylePaddingTop: [{
                type: HostBinding,
                args: ['style.--collapse-padding-top']
            }], stylePaddingBottom: [{
                type: HostBinding,
                args: ['style.--collapse-padding-bottom']
            }], stylePaddingLeft: [{
                type: HostBinding,
                args: ['style.--collapse-padding-left']
            }], stylePaddingRight: [{
                type: HostBinding,
                args: ['style.--collapse-padding-right']
            }], classActive: [{
                type: HostBinding,
                args: ['class.ngc-collapse--active']
            }], color: [{
                type: Input
            }], iconCollapse: [{
                type: Input
            }], borderWidth: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], borderStyle: [{
                type: Input
            }], activeColor: [{
                type: Input
            }], activeBorderWidth: [{
                type: Input
            }], activeBorderColor: [{
                type: Input
            }], activeBorderStyle: [{
                type: Input
            }], activeBorderRadius: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], contentPaddingVertical: [{
                type: Input
            }], contentPaddingHorizontal: [{
                type: Input
            }], contentPaddingTop: [{
                type: Input
            }], contentPaddingBottom: [{
                type: Input
            }], contentPaddingLeft: [{
                type: Input
            }], contentPaddingRight: [{
                type: Input
            }], active: [{
                type: Input
            }], highlight: [{
                type: Input
            }], autoUnhighlight: [{
                type: Input
            }], highlightChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWNvbGxhcHNlL25nYy1jb2xsYXBzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jb2xsYXBzZS9uZ2MtY29sbGFwc2UuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ25DLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQzdDLFdBQVcsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBcUIxRSxNQUFNLE9BQU8sb0JBQW9CO0lBbkJqQztRQXVGa0Isb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQUV0RjtJQXBFQSxJQUNJLFVBQVUsS0FBYSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRS9DLElBQ0ksZ0JBQWdCLEtBQWEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUzRCxJQUNJLGdCQUFnQixLQUFhLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFM0QsSUFDSSxnQkFBZ0IsS0FBYSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRTNELElBQ0ksaUJBQWlCLEtBQWEsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUU3RCxJQUNJLGdCQUFnQixLQUFhLE9BQU8sSUFBSSxDQUFDLFdB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QUNVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQzRCLGlCQUFpQjtzQkFBbEQsS0FBSztnQkFDVSxpQkFBaUI7c0JBQWhDLEtBQUs7Z0JBQ1UsaUJBQWlCO3NCQUFoQyxLQUFLO2dCQUNVLGtCQUFrQjtzQkFBakMsS0FBSztnQkFDNEIsWUFBWTtzQkFBN0MsS0FBSztnQkFDNEIsc0JBQXNCO3NCQUF2RCxLQUFLO2dCQUM0Qix3QkFBd0I7c0JBQXpELEtBQUs7Z0JBQzRCLGlCQUFpQjtzQkFBbEQsS0FBSztnQkFDNEIsb0JBQW9CO3NCQUFyRCxLQUFLO2dCQUM0QixrQkFBa0I7c0JBQW5ELEtBQUs7Z0JBQzRCLG1CQUFtQjtzQkFBcEQsS0FBSztnQkFDMkIsTUFBTTtzQkFBdEMsS0FBSztnQkFDMkIsU0FBUztzQkFBekMsS0FBSztnQkFDMkIsZUFBZTtzQkFBL0MsS0FBSztnQkFFVyxlQUFlO3NCQUEvQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsXG5cdE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0SG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCB9IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25nYy1jb2xsYXBzZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ2MtY29sbGFwc2UuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25nYy1jb2xsYXBzZS5zY3NzJ10sXG5cdGhvc3Q6IHsgY2xhc3M6ICduZ2MtY29sbGFwc2UnIH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcigndG9nZ2xlSGVpZ2h0JywgW1xuXHRcdFx0dHJhbnNpdGlvbignOmVudGVyJywgW1xuXHRcdFx0XHRzdHlsZSh7IGhlaWdodDogJzAnLCBvcGFjaXR5OiAwIH0pLFxuXHRcdFx0XHRhbmltYXRlKCczMDBtcyBlYXNlLW91dCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEgfSkpLFxuXHRcdFx0XSksXG5cdFx0XHR0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG5cdFx0XHRcdGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzAnLCBvcGFjaXR5OiAwIH0pKSxcblx0XHRcdF0pLFxuXHRcdF0pLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NDb2xsYXBzZUNvbXBvbmVudCB7XG5cblx0QEhvc3RCaW5kaW5nKCdzdHlsZS4tLWNvbGxhcHNlLWNvbG9yJylcblx0Z2V0IHN0eWxlQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY29sbGFwc2UtYm9yZGVyLXdpZHRoJylcblx0Z2V0IHN0eWxlQm9yZGVyV2lkdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYm9yZGVyV2lkdGg7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY29sbGFwc2UtYm9yZGVyLWNvbG9yJylcblx0Z2V0IHN0eWxlQm9yZGVyQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYm9yZGVyQ29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY29sbGFwc2UtYm9yZGVyLXN0eWxlJylcblx0Z2V0IHN0eWxlQm9yZGVyU3R5bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYm9yZGVyU3R5bGU7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY29sbGFwc2UtYm9yZGVyLXJhZGl1cycpXG5cdGdldCBzdHlsZUJvcmRlclJhZGl1cygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5ib3JkZXJSYWRpdXM7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY29sbGFwc2UtYWN0aXZlLWNvbG9yJylcblx0Z2V0IHN0eWxlQWN0aXZlQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYWN0aXZlQ29sb3IgfHwgdGhpcy5jb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jb2xsYXBzZS1hY3RpdmUtYm9yZGVyLXdpZHRoJylcblx0Z2V0IHN0eWxlQWN0aXZlQm9yZGVyV2lkdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYWN0aXZlQm9yZGVyV2lkdGggfHwgdGhpcy5ib3JkZXJXaWR0aDsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jb2xsYXBzZS1hY3RpdmUtYm9yZGVyLWNvbG9yJylcblx0Z2V0IHN0eWxlQWN0aXZlQm9yZGVyQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYWN0aXZlQm9yZGVyQ29sb3IgfHwgdGhpcy5ib3JkZXJDb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jb2xsYXBzZS1hY3RpdmUtYm9yZGVyLXN0eWxlJylcblx0Z2V0IHN0eWxlQWN0aXZlQm9yZGVyU3R5bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYWN0aXZlQm9yZGVyU3R5bGUgfHwgdGhpcy5ib3JkZXJTdHlsZTsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jb2xsYXBzZS1hY3RpdmUtYm9yZGVyLXJhZGl1cycpXG5cdGdldCBzdHlsZUFjdGl2ZUJvcmRlclJhZGl1cygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5hY3RpdmVCb3JkZXJSYWRpdXMgfHwgdGhpcy5ib3JkZXJSYWRpdXM7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY29sbGFwc2UtcGFkZGluZy10b3AnKVxuXHRnZXQgc3R5bGVQYWRkaW5nVG9wKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nVG9wIHx8IHRoaXMuY29udGVudFBhZGRpbmdWZXJ0aWNhbDsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jb2xsYXBzZS1wYWRkaW5nLWJvdHRvbScpXG5cdGdldCBzdHlsZVBhZGRpbmdCb3R0b20oKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29udGVudFBhZGRpbmdCb3R0b20gfHwgdGhpcy5jb250ZW50UGFkZGluZ1ZlcnRpY2FsOyB9XG5cblx0QEhvc3RCaW5kaW5nKCdzdHlsZS4tLWNvbGxhcHNlLXBhZGRpbmctbGVmdCcpXG5cdGdldCBzdHlsZVBhZGRpbmdMZWZ0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nTGVmdCB8fCB0aGlzLmNvbnRlbnRQYWRkaW5nSG9yaXpvbnRhbDsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jb2xsYXBzZS1wYWRkaW5nLXJpZ2h0Jylcblx0Z2V0IHN0eWxlUGFkZGluZ1JpZ2h0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nUmlnaHQgfHwgdGhpcy5jb250ZW50UGFkZGluZ0hvcml6b250YWw7IH1cblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm5nYy1jb2xsYXBzZS0tYWN0aXZlJylcblx0Z2V0IGNsYXNzQWN0aXZlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hY3RpdmU7IH1cblxuXHRASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGljb25Db2xsYXBzZTogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgYm9yZGVyV2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGJvcmRlckNvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBib3JkZXJTdHlsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYWN0aXZlQ29sb3I6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGFjdGl2ZUJvcmRlcldpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVCb3JkZXJDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYWN0aXZlQm9yZGVyU3R5bGU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGFjdGl2ZUJvcmRlclJhZGl1czogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBjb250ZW50UGFkZGluZ1ZlcnRpY2FsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBjb250ZW50UGFkZGluZ0hvcml6b250YWw6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGNvbnRlbnRQYWRkaW5nVG9wOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBjb250ZW50UGFkZGluZ0JvdHRvbTogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdMZWZ0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBjb250ZW50UGFkZGluZ1JpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGlnaGxpZ2h0OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhdXRvVW5oaWdobGlnaHQ6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpIHB1YmxpYyBoaWdobGlnaHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxufVxuIiwiPGRpdiBjbGFzcz1cIm5nYy1jb2xsYXBzZS13cmFwcGVyXCJcbiAgW2F1dG9VbmhpZ2hsaWdodF09XCJhdXRvVW5oaWdobGlnaHRcIlxuICBbKGhpZ2hsaWdodFN0YXRlKV09XCJoaWdobGlnaHRcIlxuICAoaGlnaGxpZ2h0U3RhdGVDaGFuZ2UpPVwiaGlnaGxpZ2h0Q2hhbmdlPy5lbWl0KCRldmVudClcIj5cbiAgXG4gIDxkaXYgY2xhc3M9XCJuZ2MtY29sbGFwc2VfX2hlYWRlclwiIChjbGljayk9XCJhY3RpdmUgPSAhYWN0aXZlXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25nY0NvbGxhcHNlSGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGFpbmVyPlxuICAgICAgPG5nYy1pY29uIFxuICAgICAgICBjbGFzcz1cIm5nYy1jb2xsYXBzZV9faGVhZGVyX19pY29uXCIgXG4gICAgICAgIFtuYW1lXT1cImFjdGl2ZSA/ICdjaGV2cm9uLXVwLW91dGxpbmUnIDogJ2NoZXZyb24tZG93bi1vdXRsaW5lJ1wiIFxuICAgICAgICBzaXplPVwiMjBweFwiPlxuICAgICAgPC9uZ2MtaWNvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cIm5nYy1jb2xsYXBzZV9fY29udGVudFwiICpuZ0lmPVwiYWN0aXZlXCIgW0B0b2dnbGVIZWlnaHRdPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltuZ2NDb2xsYXBzZUNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibmdjLWNvbGxhcHNlX19mb290ZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbmdjQ29sbGFwc2VGb290ZXJdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cblxuPC9kaXY+XG4iXX0=