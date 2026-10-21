import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, ElementRef, HostListener, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { ContrastPipe, DefaultValue, CoerceBoolean, CoerceCssPixel } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@core";
import * as i2 from "@angular/common";
import * as i3 from "../../ngc-icon/ngc-icon.component";
export class NgcIconButtonComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_elementRef, _contrastPipe) {
        this._elementRef = _elementRef;
        this._contrastPipe = _contrastPipe;
        this.type = 'button';
    }
    get attrType() { return this.type; }
    get attrDisabled() { return this.disabled || undefined; }
    get styleColor() { return this.color; }
    get styleSize() { return this.size; }
    get styleIconColor() { return this.iconColor; }
    get styleIconSize() { return this.iconSize; }
    get styleBorderColor() { return this.borderColor; }
    get styleBorderStyle() { return this.borderStyle; }
    get styleBorderWidth() { return this.borderWidth; }
    get classDisabled() { return this.disabled; }
    get classSquare() { return this.square; }
    triggerKeyDownEnterAndSpace(event) {
        this._elementRef.nativeElement === document.activeElement && event.preventDefault();
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (changes.iconColor)
            this._bkIconColor = this.iconColor;
        if (changes.color)
            this.iconColor = this._bkIconColor || this._contrastPipe.transform(this.color);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.color && this._elementRef.nativeElement.classList.add('ngc-' + this.color);
    }
}
NgcIconButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcIconButtonComponent, deps: [{ token: i0.ElementRef }, { token: i1.ContrastPipe }], target: i0.ɵɵFactoryTarget.Component });
NgcIconButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcIconButtonComponent, selector: "button[ngcIconButton]", inputs: { type: "type", color: "color", size: "size", icon: "icon", iconColor: "iconColor", iconSize: "iconSize", borderColor: "borderColor", borderStyle: "borderStyle", borderWidth: "borderWidth", disabled: "disabled", square: "square" }, host: { listeners: { "keydown.enter": "triggerKeyDownEnterAndSpace($event)", "keydown.space": "triggerKeyDownEnterAndSpace($event)" }, properties: { "attr.type": "this.attrType", "attr.disabled": "this.attrDisabled", "style.--icon-button-color": "this.styleColor", "style.--icon-button-size": "this.styleSize", "style.--icon-button-icon-color": "this.styleIconColor", "style.--icon-button-icon-size": "this.styleIconSize", "style.--icon-button-border-color": "this.styleBorderColor", "style.--icon-button-border-style": "this.styleBorderStyle", "style.--icon-button-border-width": "this.styleBorderWidth", "class.ngc-icon-button--disabled": "this.classDisabled", "class.ngc-icon-button--square": "this.classSquare" }, classAttribute: "ngc-icon-button" }, providers: [ContrastPipe], usesOnChanges: true, ngImport: i0, template: "<div class=\"ngc-icon-button-wrapper\">\n  <ngc-icon *ngIf=\"icon; else elseBlock\" [name]=\"icon\"></ngc-icon>\n  <ng-template #elseBlock>\n    <ng-content></ng-content>\n  </ng-template>\n</div>\n", styles: [".ngc-icon-button{display:flex;cursor:pointer;width:var(--icon-button-size, 32px);min-width:var(--icon-button-size, 32px);max-width:var(--icon-button-size, 32px);height:var(--icon-button-size, 32px);min-height:var(--icon-button-size, 32px);max-height:var(--icon-button-size, 32px);font-size:var(--icon-button-icon-size, calc(var(--icon-button-size, 32px) * .55));color:var(--icon-button-icon-color, var(--ngc-color-neutral-text-tertiary, #8e8e93));background-color:var(--icon-button-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));border-width:var(--icon-button-border-width, 1px);border-style:var(--icon-button-border-style, solid);border-color:var(--icon-button-border-color, transparent);border-radius:50%;padding:2px}.ngc-icon-button.ngc-primary{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));color:var(--ngc-color-neutral-white, #fff)}.ngc-icon-button.ngc-white{background-color:var(--ngc-color-neutral-white, #fff);border-color:var(--icon-button-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));color:var(--icon-button-icon-color, var(--ngc-color-neutral-text-primary, #242426))}.ngc-icon-button:not(.ngc-icon-button--disabled):hover{opacity:.8}.ngc-icon-button:not(.ngc-icon-button--disabled):focus-visible{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4))}.ngc-icon-button.ngc-icon-button--disabled{cursor:not-allowed;background-color:var(--ngc-color-neutral-text-disabled, #c4c4c6);border-color:var(--ngc-color-neutral-text-disabled, #c4c4c6);color:var(--ngc-color-neutral-white, #fff)}.ngc-icon-button.ngc-icon-button--disabled:active{pointer-events:none}.ngc-icon-button.ngc-icon-button--square{border-radius:8px}.ngc-icon-button .ngc-icon-button-wrapper{display:flex;align-items:center;justify-content:center;height:100%;width:100%}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcIconButtonComponent.prototype, "type", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcIconButtonComponent.prototype, "size", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcIconButtonComponent.prototype, "iconSize", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcIconButtonComponent.prototype, "borderWidth", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcIconButtonComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcIconButtonComponent.prototype, "square", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcIconButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[ngcIconButton]', host: { class: 'ngc-icon-button' }, providers: [ContrastPipe], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-icon-button-wrapper\">\n  <ngc-icon *ngIf=\"icon; else elseBlock\" [name]=\"icon\"></ngc-icon>\n  <ng-template #elseBlock>\n    <ng-content></ng-content>\n  </ng-template>\n</div>\n", styles: [".ngc-icon-button{display:flex;cursor:pointer;width:var(--icon-button-size, 32px);min-width:var(--icon-button-size, 32px);max-width:var(--icon-button-size, 32px);height:var(--icon-button-size, 32px);min-height:var(--icon-button-size, 32px);max-height:var(--icon-button-size, 32px);font-size:var(--icon-button-icon-size, calc(var(--icon-button-size, 32px) * .55));color:var(--icon-button-icon-color, var(--ngc-color-neutral-text-tertiary, #8e8e93));background-color:var(--icon-button-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));border-width:var(--icon-button-border-width, 1px);border-style:var(--icon-button-border-style, solid);border-color:var(--icon-button-border-color, transparent);border-radius:50%;padding:2px}.ngc-icon-button.ngc-primary{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));color:var(--ngc-color-neutral-white, #fff)}.ngc-icon-button.ngc-white{background-color:var(--ngc-color-neutral-white, #fff);border-color:var(--icon-button-border-color, var(--ngc-color-neutral-border-default, #e4e4e6));color:var(--icon-button-icon-color, var(--ngc-color-neutral-text-primary, #242426))}.ngc-icon-button:not(.ngc-icon-button--disabled):hover{opacity:.8}.ngc-icon-button:not(.ngc-icon-button--disabled):focus-visible{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4))}.ngc-icon-button.ngc-icon-button--disabled{cursor:not-allowed;background-color:var(--ngc-color-neutral-text-disabled, #c4c4c6);border-color:var(--ngc-color-neutral-text-disabled, #c4c4c6);color:var(--ngc-color-neutral-white, #fff)}.ngc-icon-button.ngc-icon-button--disabled:active{pointer-events:none}.ngc-icon-button.ngc-icon-button--square{border-radius:8px}.ngc-icon-button .ngc-icon-button-wrapper{display:flex;align-items:center;justify-content:center;height:100%;width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.ContrastPipe }]; }, propDecorators: { attrType: [{
                type: HostBinding,
                args: ['attr.type']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], styleColor: [{
                type: HostBinding,
                args: ['style.--icon-button-color']
            }], styleSize: [{
                type: HostBinding,
                args: ['style.--icon-button-size']
            }], styleIconColor: [{
                type: HostBinding,
                args: ['style.--icon-button-icon-color']
            }], styleIconSize: [{
                type: HostBinding,
                args: ['style.--icon-button-icon-size']
            }], styleBorderColor: [{
                type: HostBinding,
                args: ['style.--icon-button-border-color']
            }], styleBorderStyle: [{
                type: HostBinding,
                args: ['style.--icon-button-border-style']
            }], styleBorderWidth: [{
                type: HostBinding,
                args: ['style.--icon-button-border-width']
            }], classDisabled: [{
                type: HostBinding,
                args: ['class.ngc-icon-button--disabled']
            }], classSquare: [{
                type: HostBinding,
                args: ['class.ngc-icon-button--square']
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconColor: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], borderStyle: [{
                type: Input
            }], borderWidth: [{
                type: Input
            }], disabled: [{
                type: Input
            }], square: [{
                type: Input
            }], triggerKeyDownEnterAndSpace: [{
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWljb24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWJ1dHRvbi9pY29uLWJ1dHRvbi9uZ2MtaWNvbi1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtYnV0dG9uL2ljb24tYnV0dG9uL25nYy1pY29uLWJ1dHRvbi5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFDbkMsVUFBVSxFQUNDLFlBQVksRUFBRSx1QkFBdUIsRUFDaEQsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxPQUFPLENBQUM7Ozs7O0FBV2xGLE1BQU0sT0FBTyxzQkFBc0I7SUFpRGxDOzs7O09BSUc7SUFDSCxZQUFxQixXQUF1QixFQUFVLGFBQTJCO1FBQTVELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFuQmpELFNBQUksR0FBVyxRQUFRLENBQUM7SUFtQjZCLENBQUM7SUFwRHRGLElBQ0ksUUFBUSxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUMsSUFDSSxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFbEUsSUFDSSxVQUFVLEtBQWEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUvQyxJQUNJLFNBQVMsS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTdDLElBQ0ksY0FBYyxLQUFhLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFdkQsSUFDSSxhQUFhLEtBQWEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVyRCxJQUNJLGdCQUFnQixLQUFhLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFM0QsSUFDSSxnQkFBZ0IsS0FBYSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRTNELElBQ0ksZ0JBQWdCLEtBQWEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUUzRCxJQUNJLGFBQWEsS0FBYyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXRELElBQ0ksV0FBVyxLQUFjLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUF5QjNDLDJCQUEyQixDQUFFLEtBQW9CO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxLQUFLLFFBQVEsQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUUsT0FBc0I7UUFDbEMsSUFBSyxPQUFPLENBQUMsU0FBUztZQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFLLE9BQU8sQ0FBQyxLQUFLO1lBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUN2RyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ2QsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDbkYsQ0FBQzs7bUhBNUVXLHNCQUFzQjt1R0FBdEIsc0JBQXNCLG1oQ0FKckIsQ0FBRSxZQUFZLENBQUUsK0NDZDlCLHdNQU1BO0FEK0NDO0lBQVUsWUFBWSxFQUFFOztvREFBZ0M7QUFFeEQ7SUFBVSxjQUFjLEVBQUU7O29EQUFxQjtBQUcvQztJQUFVLGNBQWMsRUFBRTs7d0RBQXlCO0FBR25EO0lBQVUsY0FBYyxFQUFFOzsyREFBNEI7QUFDdEQ7SUFBVSxhQUFhLEVBQUU7O3dEQUEwQjtBQUNuRDtJQUFVLGFBQWEsRUFBRTs7c0RBQXdCOzJGQTdDckMsc0JBQXNCO2tCQVRsQyxTQUFTOytCQUNHLHVCQUF1QixRQUcxQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxhQUN4QixDQUFFLFlBQVksQ0FBRSxpQkFDYixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzRIQUs1QyxRQUFRO3NCQURYLFdBQVc7dUJBQUUsV0FBVztnQkFJckIsWUFBWTtzQkFEZixXQUFXO3VCQUFFLGVBQWU7Z0JBSXpCLFVBQVU7c0JBRGIsV0FBVzt1QkFBRSwyQkFBMkI7Z0JBSXJDLFNBQVM7c0JBRFosV0FBVzt1QkFBRSwwQkFBMEI7Z0JBSXBDLGNBQWM7c0JBRGpCLFdBQVc7dUJBQUUsZ0NBQWdDO2dCQUkxQyxhQUFhO3NCQURoQixXQUFXO3VCQUFFLCtCQUErQjtnQkFJekMsZ0JBQWdCO3NCQURuQixXQUFXO3VCQUFFLGtDQUFrQztnQkFJNUMsZ0JBQWdCO3NCQURuQixXQUFXO3VCQUFFLGtDQUFrQztnQkFJNUMsZ0JBQWdCO3NCQURuQixXQUFXO3VCQUFFLGtDQUFrQztnQkFJNUMsYUFBYTtzQkFEaEIsV0FBVzt1QkFBRSxpQ0FBaUM7Z0JBSTNDLFdBQVc7c0JBRGQsV0FBVzt1QkFBRSwrQkFBK0I7Z0JBR2IsSUFBSTtzQkFBbkMsS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO2dCQUM0QixJQUFJO3NCQUFyQyxLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsU0FBUztzQkFBeEIsS0FBSztnQkFDNEIsUUFBUTtzQkFBekMsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQzRCLFdBQVc7c0JBQTVDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLE1BQU07c0JBQXRDLEtBQUs7Z0JBYUMsMkJBQTJCO3NCQUZqQyxZQUFZO3VCQUFFLGVBQWUsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7c0JBQzNDLFlBQVk7dUJBQUUsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sXG5cdEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIFNpbXBsZUNoYW5nZXMsXG5cdE9uQ2hhbmdlcywgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0SG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyYXN0UGlwZSwgRGVmYXVsdFZhbHVlLCBDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCB9IGZyb20gJ0Bjb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ2J1dHRvbltuZ2NJY29uQnV0dG9uXScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLWljb24tYnV0dG9uLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1pY29uLWJ1dHRvbi5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWljb24tYnV0dG9uJyB9LFxuXHRwcm92aWRlcnNcdFx0OiBbIENvbnRyYXN0UGlwZSBdLFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0ljb25CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG5cdEBIb3N0QmluZGluZyggJ2F0dHIudHlwZScgKVxuXHRnZXQgYXR0clR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudHlwZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2F0dHIuZGlzYWJsZWQnIClcblx0Z2V0IGF0dHJEaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgdW5kZWZpbmVkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1pY29uLWJ1dHRvbi1jb2xvcicgKVxuXHRnZXQgc3R5bGVDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0taWNvbi1idXR0b24tc2l6ZScgKVxuXHRnZXQgc3R5bGVTaXplKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnNpemU7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWljb24tYnV0dG9uLWljb24tY29sb3InIClcblx0Z2V0IHN0eWxlSWNvbkNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmljb25Db2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0taWNvbi1idXR0b24taWNvbi1zaXplJyApXG5cdGdldCBzdHlsZUljb25TaXplKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmljb25TaXplOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1pY29uLWJ1dHRvbi1ib3JkZXItY29sb3InIClcblx0Z2V0IHN0eWxlQm9yZGVyQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYm9yZGVyQ29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWljb24tYnV0dG9uLWJvcmRlci1zdHlsZScgKVxuXHRnZXQgc3R5bGVCb3JkZXJTdHlsZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5ib3JkZXJTdHlsZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0taWNvbi1idXR0b24tYm9yZGVyLXdpZHRoJyApXG5cdGdldCBzdHlsZUJvcmRlcldpZHRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmJvcmRlcldpZHRoOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWljb24tYnV0dG9uLS1kaXNhYmxlZCcgKVxuXHRnZXQgY2xhc3NEaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtaWNvbi1idXR0b24tLXNxdWFyZScgKVxuXHRnZXQgY2xhc3NTcXVhcmUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnNxdWFyZTsgfVxuXG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgdHlwZTogc3RyaW5nID0gJ2J1dHRvbic7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgaWNvbkNvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBpY29uU2l6ZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYm9yZGVyQ29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGJvcmRlclN0eWxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBib3JkZXJXaWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgc3F1YXJlOiBib29sZWFuO1xuXG5cdHByaXZhdGUgX2JrSWNvbkNvbG9yOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IF9lbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7Q29udHJhc3RQaXBlfSBfY29udHJhc3RQaXBlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY29udHJhc3RQaXBlOiBDb250cmFzdFBpcGUgKSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLmVudGVyJywgWyAnJGV2ZW50JyBdIClcblx0QEhvc3RMaXN0ZW5lciggJ2tleWRvd24uc3BhY2UnLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlcktleURvd25FbnRlckFuZFNwYWNlKCBldmVudDogS2V5Ym9hcmRFdmVudCApIHtcblx0XHR0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIGNoYW5nZXMuaWNvbkNvbG9yICkgdGhpcy5fYmtJY29uQ29sb3IgPSB0aGlzLmljb25Db2xvcjtcblx0XHRpZiAoIGNoYW5nZXMuY29sb3IgKSB0aGlzLmljb25Db2xvciA9IHRoaXMuX2JrSWNvbkNvbG9yIHx8IHRoaXMuX2NvbnRyYXN0UGlwZS50cmFuc2Zvcm0oIHRoaXMuY29sb3IgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNvbG9yICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnbmdjLScgKyB0aGlzLmNvbG9yICk7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm5nYy1pY29uLWJ1dHRvbi13cmFwcGVyXCI+XG4gIDxuZ2MtaWNvbiAqbmdJZj1cImljb247IGVsc2UgZWxzZUJsb2NrXCIgW25hbWVdPVwiaWNvblwiPjwvbmdjLWljb24+XG4gIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuIl19