import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding, } from '@angular/core';
import { CoerceBoolean, CoerceCssPixel } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "../core/directives/highlight-state.directive";
export class NgcCardComponent {
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
NgcCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcCardComponent, selector: "ngc-card", inputs: { color: "color", borderWidth: "borderWidth", borderColor: "borderColor", borderStyle: "borderStyle", activeColor: "activeColor", activeBorderWidth: "activeBorderWidth", activeBorderColor: "activeBorderColor", activeBorderStyle: "activeBorderStyle", activeBorderRadius: "activeBorderRadius", borderRadius: "borderRadius", contentPaddingVertical: "contentPaddingVertical", contentPaddingHorizontal: "contentPaddingHorizontal", contentPaddingTop: "contentPaddingTop", contentPaddingBottom: "contentPaddingBottom", contentPaddingLeft: "contentPaddingLeft", contentPaddingRight: "contentPaddingRight", active: "active", highlight: "highlight", autoUnhighlight: "autoUnhighlight" }, outputs: { highlightChange: "highlightChange" }, host: { properties: { "style.--card-color": "this.styleColor", "style.--card-border-width": "this.styleBorderWidth", "style.--card-border-color": "this.styleBorderColor", "style.--card-border-style": "this.styleBorderStyle", "style.--card-border-radius": "this.styleBorderRadius", "style.--card-active-color": "this.styleActiveColor", "style.--card-active-border-width": "this.styleActiveBorderWidth", "style.--card-active-border-color": "this.styleActiveBorderColor", "style.--card-active-border-style": "this.styleActiveBorderStyle", "style.--card-active-border-radius": "this.styleActiveBorderRadius", "style.--card-padding-top": "this.stylePaddingTop", "style.--card-padding-bottom": "this.stylePaddingBottom", "style.--card-padding-left": "this.stylePaddingLeft", "style.--card-padding-right": "this.stylePaddingRight", "class.ngc-card--active": "this.classActive" }, classAttribute: "ngc-card" }, ngImport: i0, template: "<div class=\"ngc-card-wrapper\"\n  [autoUnhighlight]=\"autoUnhighlight\"\n  [(highlightState)]=\"highlight\"\n  (highlightStateChange)=\"highlightChange?.emit($event)\">\n  \n  <div class=\"ngc-card__header\">\n    <ng-content select=\"[ngcCardHeader]\"></ng-content>\n  </div>\n\n  <div class=\"ngc-card__content\">\n    <ng-content select=\"[ngcCardContent]\"></ng-content>\n  </div>\n\n  <div class=\"ngc-card__footer\">\n    <ng-content select=\"[ngcCardFooter]\"></ng-content>\n  </div>\n\n</div>\n", styles: [".ngc-card{display:flex;flex-direction:column;transition:transform .25s cubic-bezier(.4,0,.2,1)}.ngc-card:hover{transform:translateY(-2px)}.ngc-card:hover>.ngc-card-wrapper{box-shadow:var(--card-hover-box-shadow, 0 12px 28px rgba(0, 0, 0, .08));border-color:var(--card-hover-border-color, #409cff)}.ngc-card.ngc-card--active>.ngc-card-wrapper{background-color:var(--card-active-color, var(--ngc-color-neutral-white, #fff));border-width:var(--card-active-border-width, 1px);border-style:var(--card-active-border-style, solid);border-color:var(--card-active-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));border-radius:var(--card-active-border-radius, 10px);box-shadow:var(--card-active-box-shadow, 0 8px 24px rgba(0, 0, 0, .08))}.ngc-card>.ngc-card-wrapper{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0;overflow:hidden;background-color:var(--card-color, var(--ngc-component-card-bg, var(--ngc-color-neutral-white, #fff)));border-width:var(--card-border-width, 1px);border-style:var(--card-border-style, solid);border-color:var(--card-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));border-radius:var(--card-border-radius, 10px);box-shadow:var(--card-box-shadow, 0 4px 16px rgba(0, 0, 0, .04));transition:box-shadow .25s cubic-bezier(.4,0,.2,1),border-color .25s ease,background-color .25s ease}.ngc-card__header:not(:empty){padding-top:var(--card-padding-top, 15px);padding-bottom:var(--card-padding-bottom, 15px);padding-left:var(--card-padding-left, 15px);padding-right:var(--card-padding-right, 15px);background:var(--card-header-bg, rgba(0, 0, 0, .025));font-weight:var(--ngc-font-weight-semibold, 600);border-bottom:1px solid var(--card-header-border-color, var(--ngc-color-neutral-border-default, #e4e4e6))}.ngc-card__content{flex:1;padding-top:var(--card-padding-top, 15px);padding-bottom:var(--card-padding-bottom, 15px);padding-left:var(--card-padding-left, 15px);padding-right:var(--card-padding-right, 15px)}.ngc-card__footer:not(:empty){padding-top:var(--card-padding-top, 15px);padding-bottom:var(--card-padding-bottom, 15px);padding-left:var(--card-padding-left, 15px);padding-right:var(--card-padding-right, 15px);background:var(--card-footer-bg, rgba(0, 0, 0, .025));font-weight:var(--ngc-font-weight-semibold, 600);border-top:1px solid var(--card-footer-border-color, var(--ngc-color-neutral-border-default, #e4e4e6))}\n"], dependencies: [{ kind: "directive", type: i1.HighlightStateDirective, selector: "[highlightState]", inputs: ["highlightType", "highlightColor", "highlightState", "highlightDisabled", "autoUnhighlight", "autoUnhighlightDelay"], outputs: ["highlightStateChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "borderWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "activeBorderWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "borderRadius", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "contentPaddingVertical", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "contentPaddingHorizontal", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "contentPaddingTop", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "contentPaddingBottom", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "contentPaddingLeft", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCardComponent.prototype, "contentPaddingRight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCardComponent.prototype, "active", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCardComponent.prototype, "highlight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCardComponent.prototype, "autoUnhighlight", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-card', host: { class: 'ngc-card' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-card-wrapper\"\n  [autoUnhighlight]=\"autoUnhighlight\"\n  [(highlightState)]=\"highlight\"\n  (highlightStateChange)=\"highlightChange?.emit($event)\">\n  \n  <div class=\"ngc-card__header\">\n    <ng-content select=\"[ngcCardHeader]\"></ng-content>\n  </div>\n\n  <div class=\"ngc-card__content\">\n    <ng-content select=\"[ngcCardContent]\"></ng-content>\n  </div>\n\n  <div class=\"ngc-card__footer\">\n    <ng-content select=\"[ngcCardFooter]\"></ng-content>\n  </div>\n\n</div>\n", styles: [".ngc-card{display:flex;flex-direction:column;transition:transform .25s cubic-bezier(.4,0,.2,1)}.ngc-card:hover{transform:translateY(-2px)}.ngc-card:hover>.ngc-card-wrapper{box-shadow:var(--card-hover-box-shadow, 0 12px 28px rgba(0, 0, 0, .08));border-color:var(--card-hover-border-color, #409cff)}.ngc-card.ngc-card--active>.ngc-card-wrapper{background-color:var(--card-active-color, var(--ngc-color-neutral-white, #fff));border-width:var(--card-active-border-width, 1px);border-style:var(--card-active-border-style, solid);border-color:var(--card-active-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));border-radius:var(--card-active-border-radius, 10px);box-shadow:var(--card-active-box-shadow, 0 8px 24px rgba(0, 0, 0, .08))}.ngc-card>.ngc-card-wrapper{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0;overflow:hidden;background-color:var(--card-color, var(--ngc-component-card-bg, var(--ngc-color-neutral-white, #fff)));border-width:var(--card-border-width, 1px);border-style:var(--card-border-style, solid);border-color:var(--card-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));border-radius:var(--card-border-radius, 10px);box-shadow:var(--card-box-shadow, 0 4px 16px rgba(0, 0, 0, .04));transition:box-shadow .25s cubic-bezier(.4,0,.2,1),border-color .25s ease,background-color .25s ease}.ngc-card__header:not(:empty){padding-top:var(--card-padding-top, 15px);padding-bottom:var(--card-padding-bottom, 15px);padding-left:var(--card-padding-left, 15px);padding-right:var(--card-padding-right, 15px);background:var(--card-header-bg, rgba(0, 0, 0, .025));font-weight:var(--ngc-font-weight-semibold, 600);border-bottom:1px solid var(--card-header-border-color, var(--ngc-color-neutral-border-default, #e4e4e6))}.ngc-card__content{flex:1;padding-top:var(--card-padding-top, 15px);padding-bottom:var(--card-padding-bottom, 15px);padding-left:var(--card-padding-left, 15px);padding-right:var(--card-padding-right, 15px)}.ngc-card__footer:not(:empty){padding-top:var(--card-padding-top, 15px);padding-bottom:var(--card-padding-bottom, 15px);padding-left:var(--card-padding-left, 15px);padding-right:var(--card-padding-right, 15px);background:var(--card-footer-bg, rgba(0, 0, 0, .025));font-weight:var(--ngc-font-weight-semibold, 600);border-top:1px solid var(--card-footer-border-color, var(--ngc-color-neutral-border-default, #e4e4e6))}\n"] }]
        }], propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--card-color']
            }], styleBorderWidth: [{
                type: HostBinding,
                args: ['style.--card-border-width']
            }], styleBorderColor: [{
                type: HostBinding,
                args: ['style.--card-border-color']
            }], styleBorderStyle: [{
                type: HostBinding,
                args: ['style.--card-border-style']
            }], styleBorderRadius: [{
                type: HostBinding,
                args: ['style.--card-border-radius']
            }], styleActiveColor: [{
                type: HostBinding,
                args: ['style.--card-active-color']
            }], styleActiveBorderWidth: [{
                type: HostBinding,
                args: ['style.--card-active-border-width']
            }], styleActiveBorderColor: [{
                type: HostBinding,
                args: ['style.--card-active-border-color']
            }], styleActiveBorderStyle: [{
                type: HostBinding,
                args: ['style.--card-active-border-style']
            }], styleActiveBorderRadius: [{
                type: HostBinding,
                args: ['style.--card-active-border-radius']
            }], stylePaddingTop: [{
                type: HostBinding,
                args: ['style.--card-padding-top']
            }], stylePaddingBottom: [{
                type: HostBinding,
                args: ['style.--card-padding-bottom']
            }], stylePaddingLeft: [{
                type: HostBinding,
                args: ['style.--card-padding-left']
            }], stylePaddingRight: [{
                type: HostBinding,
                args: ['style.--card-padding-right']
            }], classActive: [{
                type: HostBinding,
                args: ['class.ngc-card--active']
            }], color: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtY2FyZC9uZ2MtY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jYXJkL25nYy1jYXJkLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUNuQyxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUM3QyxXQUFXLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxPQUFPLENBQUM7OztBQVV0RCxNQUFNLE9BQU8sZ0JBQWdCO0lBUjdCO1FBMkVrQixvQkFBZSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0tBRXRGO0lBbkVBLElBQ0ksVUFBVSxLQUFhLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFL0MsSUFDSSxnQkFBZ0IsS0FBYSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRTNELElBQ0ksZ0JBQWdCLEtBQWEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUzRCxJQUNJLGdCQUFnQixLQUFhLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFM0QsSUFDSSxpQkFBaUIsS0FBYSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRTdELElBQ0ksZ0JBQWdCLEtBQWEsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXpFLElBQ0ksc0JBQXNCLEtBQWEsT0FBTyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFD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Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUM0QixpQkFBaUI7c0JBQWxELEtBQUs7Z0JBQ1UsaUJBQWlCO3NCQUFoQyxLQUFLO2dCQUNVLGlCQUFpQjtzQkFBaEMsS0FBSztnQkFDVSxrQkFBa0I7c0JBQWpDLEtBQUs7Z0JBQzRCLFlBQVk7c0JBQTdDLEtBQUs7Z0JBQzRCLHNCQUFzQjtzQkFBdkQsS0FBSztnQkFDNEIsd0JBQXdCO3NCQUF6RCxLQUFLO2dCQUM0QixpQkFBaUI7c0JBQWxELEtBQUs7Z0JBQzRCLG9CQUFvQjtzQkFBckQsS0FBSztnQkFDNEIsa0JBQWtCO3NCQUFuRCxLQUFLO2dCQUM0QixtQkFBbUI7c0JBQXBELEtBQUs7Z0JBQzJCLE1BQU07c0JBQXRDLEtBQUs7Z0JBQzJCLFNBQVM7c0JBQXpDLEtBQUs7Z0JBQzJCLGVBQWU7c0JBQS9DLEtBQUs7Z0JBRVcsZUFBZTtzQkFBL0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LFxuXHRPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29lcmNlQm9vbGVhbiwgQ29lcmNlQ3NzUGl4ZWwgfSBmcm9tICdAY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25nYy1jYXJkJyxcblx0dGVtcGxhdGVVcmw6ICcuL25nYy1jYXJkLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ2MtY2FyZC5zY3NzJ10sXG5cdGhvc3Q6IHsgY2xhc3M6ICduZ2MtY2FyZCcgfSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0NhcmRDb21wb25lbnQge1xuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jYXJkLWNvbG9yJylcblx0Z2V0IHN0eWxlQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY2FyZC1ib3JkZXItd2lkdGgnKVxuXHRnZXQgc3R5bGVCb3JkZXJXaWR0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5ib3JkZXJXaWR0aDsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jYXJkLWJvcmRlci1jb2xvcicpXG5cdGdldCBzdHlsZUJvcmRlckNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmJvcmRlckNvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCdzdHlsZS4tLWNhcmQtYm9yZGVyLXN0eWxlJylcblx0Z2V0IHN0eWxlQm9yZGVyU3R5bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYm9yZGVyU3R5bGU7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY2FyZC1ib3JkZXItcmFkaXVzJylcblx0Z2V0IHN0eWxlQm9yZGVyUmFkaXVzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmJvcmRlclJhZGl1czsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jYXJkLWFjdGl2ZS1jb2xvcicpXG5cdGdldCBzdHlsZUFjdGl2ZUNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmFjdGl2ZUNvbG9yIHx8IHRoaXMuY29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY2FyZC1hY3RpdmUtYm9yZGVyLXdpZHRoJylcblx0Z2V0IHN0eWxlQWN0aXZlQm9yZGVyV2lkdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYWN0aXZlQm9yZGVyV2lkdGggfHwgdGhpcy5ib3JkZXJXaWR0aDsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jYXJkLWFjdGl2ZS1ib3JkZXItY29sb3InKVxuXHRnZXQgc3R5bGVBY3RpdmVCb3JkZXJDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5hY3RpdmVCb3JkZXJDb2xvciB8fCB0aGlzLmJvcmRlckNvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCdzdHlsZS4tLWNhcmQtYWN0aXZlLWJvcmRlci1zdHlsZScpXG5cdGdldCBzdHlsZUFjdGl2ZUJvcmRlclN0eWxlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmFjdGl2ZUJvcmRlclN0eWxlIHx8IHRoaXMuYm9yZGVyU3R5bGU7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY2FyZC1hY3RpdmUtYm9yZGVyLXJhZGl1cycpXG5cdGdldCBzdHlsZUFjdGl2ZUJvcmRlclJhZGl1cygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5hY3RpdmVCb3JkZXJSYWRpdXMgfHwgdGhpcy5ib3JkZXJSYWRpdXM7IH1cblxuXHRASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY2FyZC1wYWRkaW5nLXRvcCcpXG5cdGdldCBzdHlsZVBhZGRpbmdUb3AoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29udGVudFBhZGRpbmdUb3AgfHwgdGhpcy5jb250ZW50UGFkZGluZ1ZlcnRpY2FsOyB9XG5cblx0QEhvc3RCaW5kaW5nKCdzdHlsZS4tLWNhcmQtcGFkZGluZy1ib3R0b20nKVxuXHRnZXQgc3R5bGVQYWRkaW5nQm90dG9tKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nQm90dG9tIHx8IHRoaXMuY29udGVudFBhZGRpbmdWZXJ0aWNhbDsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jYXJkLXBhZGRpbmctbGVmdCcpXG5cdGdldCBzdHlsZVBhZGRpbmdMZWZ0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nTGVmdCB8fCB0aGlzLmNvbnRlbnRQYWRkaW5nSG9yaXpvbnRhbDsgfVxuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuLS1jYXJkLXBhZGRpbmctcmlnaHQnKVxuXHRnZXQgc3R5bGVQYWRkaW5nUmlnaHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29udGVudFBhZGRpbmdSaWdodCB8fCB0aGlzLmNvbnRlbnRQYWRkaW5nSG9yaXpvbnRhbDsgfVxuXG5cdEBIb3N0QmluZGluZygnY2xhc3MubmdjLWNhcmQtLWFjdGl2ZScpXG5cdGdldCBjbGFzc0FjdGl2ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYWN0aXZlOyB9XG5cblx0QElucHV0KCkgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBib3JkZXJXaWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYm9yZGVyQ29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGJvcmRlclN0eWxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgYWN0aXZlQm9yZGVyV2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGFjdGl2ZUJvcmRlckNvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVCb3JkZXJTdHlsZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYWN0aXZlQm9yZGVyUmFkaXVzOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBib3JkZXJSYWRpdXM6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGNvbnRlbnRQYWRkaW5nVmVydGljYWw6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGNvbnRlbnRQYWRkaW5nSG9yaXpvbnRhbDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdUb3A6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGNvbnRlbnRQYWRkaW5nQm90dG9tOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBjb250ZW50UGFkZGluZ0xlZnQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGNvbnRlbnRQYWRkaW5nUmlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBoaWdobGlnaHQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGF1dG9VbmhpZ2hsaWdodDogYm9vbGVhbjtcblxuXHRAT3V0cHV0KCkgcHVibGljIGhpZ2hsaWdodENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXHRcbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ2MtY2FyZC13cmFwcGVyXCJcbiAgW2F1dG9VbmhpZ2hsaWdodF09XCJhdXRvVW5oaWdobGlnaHRcIlxuICBbKGhpZ2hsaWdodFN0YXRlKV09XCJoaWdobGlnaHRcIlxuICAoaGlnaGxpZ2h0U3RhdGVDaGFuZ2UpPVwiaGlnaGxpZ2h0Q2hhbmdlPy5lbWl0KCRldmVudClcIj5cbiAgXG4gIDxkaXYgY2xhc3M9XCJuZ2MtY2FyZF9faGVhZGVyXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25nY0NhcmRIZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibmdjLWNhcmRfX2NvbnRlbnRcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbmdjQ2FyZENvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibmdjLWNhcmRfX2Zvb3RlclwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltuZ2NDYXJkRm9vdGVyXVwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuIl19