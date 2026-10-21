import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewEncapsulation, ViewChild, TemplateRef, ChangeDetectorRef, Input, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { DefaultValue, CoerceCssPixel, CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "angular-core";
import * as i3 from "../core/pipes/contrast.pipe";
export class NgcTooltipComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {NgZone} _ngZone
     */
    constructor(_elementRef, _cdRef, _ngZone) {
        this._elementRef = _elementRef;
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        this.theme = 'default';
        this.classList = {};
    }
    set panelClass(classes) {
        const previousPanelClass = this._previousPanelClass;
        previousPanelClass?.split(' ').forEach((className) => {
            this.classList[className] = false;
        });
        this._previousPanelClass = classes;
        classes?.split(' ').forEach((className) => {
            this.classList[className] = true;
        });
        this._elementRef.nativeElement.className = '';
    }
    get nativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @param {NGCITooltipPosition} position
     * @param {NGCITooltipDirection} direction
     * @return {void}
     */
    setPositionClasses(position, direction) {
        this._ngZone.runGuarded(() => {
            this.classList['ngc-tooltip--above'] = position === 'above';
            this.classList['ngc-tooltip--below'] = position === 'below';
            this.classList['ngc-tooltip--before'] = position === 'before';
            this.classList['ngc-tooltip--after'] = position === 'after';
            this.classList['ngc-tooltip--dir-start'] = direction === 'start';
            this.classList['ngc-tooltip--dir-end'] = direction === 'end';
            this.classList['ngc-tooltip--message-only'] = this.messageOnly;
            this.classList['ngc-tooltip--light-theme'] = this.theme === 'light';
            this.markForCheck();
        });
    }
    /**
     * @return {void}
     */
    reattach() {
        this._cdRef.reattach();
    }
    /**
     * @return {void}
     */
    detach() {
        this._cdRef.detach();
    }
    /**
     * @return {void}
     */
    markForCheck() {
        this._cdRef.markForCheck();
    }
    /**
     * @return {void}
     */
    detectChanges() {
        this._cdRef.detectChanges();
    }
}
NgcTooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTooltipComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
NgcTooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTooltipComponent, selector: "ngc-tooltip", inputs: { color: "color", backdropClass: "backdropClass", width: "width", minWidth: "minWidth", maxWidth: "maxWidth", height: "height", minHeight: "minHeight", maxHeight: "maxHeight", messageOnly: "messageOnly", theme: "theme", panelClass: ["class", "panelClass"] }, viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<div class=\"ngc-tooltip\"\n     [style.--tooltip-color]=\"color\"\n     [style.--tooltip-text-color]=\"color | contrast\"\n     [style.width]=\"width\"\n     [style.minWidth]=\"minWidth\"\n     [style.maxWidth]=\"maxWidth\"\n     [style.height]=\"height\"\n     [style.minHeight]=\"minHeight\"\n     [style.maxHeight]=\"maxHeight\"\n     [ngClass]=\"classList\">\n  <ng-content></ng-content>\n  <pre [innerHtml]=\"message | safeHtml\" *ngIf=\"message\"></pre>\n</div>\n", styles: ["ngc-tooltip{display:none}.cdk-overlay-pane ngc-tooltip{display:flex}.ngc-tooltip{display:flex;flex-direction:column;padding:15px;position:relative;width:100%;word-break:break-word;border-radius:8px;border:none;box-shadow:var(--ngc-box-shadow, 0 8px 10px -2px rgba(0, 0, 0, .15));animation:30ms ease-in forwards popupAnimation;background-color:var(--tooltip-color, black);color:var(--tooltip-text-color, white)}.ngc-tooltip.ngc-tooltip--above:after,.ngc-tooltip.ngc-tooltip--below:after,.ngc-tooltip.ngc-tooltip--before:after,.ngc-tooltip.ngc-tooltip--after:after{content:\"\";position:absolute;width:0;height:0;border-style:solid}.ngc-tooltip.ngc-tooltip--above:not(.ngc-tooltip--dir-start):after,.ngc-tooltip.ngc-tooltip--above:not(.ngc-tooltip--dir-end):after,.ngc-tooltip.ngc-tooltip--below:not(.ngc-tooltip--dir-start):after,.ngc-tooltip.ngc-tooltip--below:not(.ngc-tooltip--dir-end):after{left:50%;transform:translate(-50%)}.ngc-tooltip.ngc-tooltip--above.ngc-tooltip--dir-start,.ngc-tooltip.ngc-tooltip--below.ngc-tooltip--dir-start{right:15px}.ngc-tooltip.ngc-tooltip--above.ngc-tooltip--dir-start:after,.ngc-tooltip.ngc-tooltip--below.ngc-tooltip--dir-start:after{left:15px;right:unset;transform:translate(-50%)}.ngc-tooltip.ngc-tooltip--above.ngc-tooltip--dir-end,.ngc-tooltip.ngc-tooltip--below.ngc-tooltip--dir-end{left:15px}.ngc-tooltip.ngc-tooltip--above.ngc-tooltip--dir-end:after,.ngc-tooltip.ngc-tooltip--below.ngc-tooltip--dir-end:after{left:unset;right:15px;transform:translate(50%)}.ngc-tooltip.ngc-tooltip--before:not(.ngc-tooltip--dir-start):after,.ngc-tooltip.ngc-tooltip--before:not(.ngc-tooltip--dir-end):after,.ngc-tooltip.ngc-tooltip--after:not(.ngc-tooltip--dir-start):after,.ngc-tooltip.ngc-tooltip--after:not(.ngc-tooltip--dir-end):after{top:50%;transform:translateY(-50%)}.ngc-tooltip.ngc-tooltip--before.ngc-tooltip--dir-start,.ngc-tooltip.ngc-tooltip--after.ngc-tooltip--dir-start{bottom:15px}.ngc-tooltip.ngc-tooltip--before.ngc-tooltip--dir-start:after,.ngc-tooltip.ngc-tooltip--after.ngc-tooltip--dir-start:after{top:15px;bottom:unset;transform:translateY(-50%)}.ngc-tooltip.ngc-tooltip--before.ngc-tooltip--dir-end,.ngc-tooltip.ngc-tooltip--after.ngc-tooltip--dir-end{top:15px}.ngc-tooltip.ngc-tooltip--before.ngc-tooltip--dir-end:after,.ngc-tooltip.ngc-tooltip--after.ngc-tooltip--dir-end:after{top:unset;bottom:15px;transform:translateY(50%)}.ngc-tooltip.ngc-tooltip--above:after{bottom:-7px;border-width:7px 4px 0;border-style:solid;border-color:var(--tooltip-color, var(--ngc-color-neutral-black, #0a0a0a)) transparent transparent}.ngc-tooltip.ngc-tooltip--below:after{top:-7px;border-width:0 4px 7px;border-style:solid;border-color:transparent transparent var(--tooltip-color, var(--ngc-color-neutral-black, #0a0a0a))}.ngc-tooltip.ngc-tooltip--before:after{right:-7px;border-width:4px 0 4px 7px;border-style:solid;border-color:transparent transparent transparent var(--tooltip-color, var(--ngc-color-neutral-black, #0a0a0a))}.ngc-tooltip.ngc-tooltip--after:after{left:-7px;border-width:4px 7px 4px 0;border-style:solid;border-color:transparent var(--tooltip-color, var(--ngc-color-neutral-black, #0a0a0a)) transparent transparent}.ngc-tooltip.ngc-tooltip--message-only{padding:5px 10px;white-space:pre-line}.ngc-tooltip.ngc-tooltip--light-theme{background-color:var(--ngc-color-neutral-white, #fff);color:var(--ngc-color-neutral-text-primary, #242426)}.ngc-tooltip.ngc-tooltip--light-theme.ngc-tooltip--above:after{border-color:var(--ngc-color-neutral-white, #fff) transparent transparent}.ngc-tooltip.ngc-tooltip--light-theme.ngc-tooltip--below:after{border-color:transparent transparent var(--ngc-color-neutral-white, #fff)}.ngc-tooltip.ngc-tooltip--light-theme.ngc-tooltip--before:after{border-color:transparent transparent transparent var(--ngc-color-neutral-white, #fff)}.ngc-tooltip.ngc-tooltip--light-theme.ngc-tooltip--after:after{border-color:transparent var(--ngc-color-neutral-white, #fff) transparent transparent}.ngc-tooltip pre{margin:0;padding:0;border:none;background:transparent;font-family:inherit}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.SafeHtmlPipe, name: "safeHtml" }, { kind: "pipe", type: i3.ContrastPipe, name: "contrast" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipComponent.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipComponent.prototype, "minWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipComponent.prototype, "maxWidth", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipComponent.prototype, "height", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipComponent.prototype, "minHeight", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcTooltipComponent.prototype, "maxHeight", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTooltipComponent.prototype, "messageOnly", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcTooltipComponent.prototype, "theme", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-tooltip', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-tooltip\"\n     [style.--tooltip-color]=\"color\"\n     [style.--tooltip-text-color]=\"color | contrast\"\n     [style.width]=\"width\"\n     [style.minWidth]=\"minWidth\"\n     [style.maxWidth]=\"maxWidth\"\n     [style.height]=\"height\"\n     [style.minHeight]=\"minHeight\"\n     [style.maxHeight]=\"maxHeight\"\n     [ngClass]=\"classList\">\n  <ng-content></ng-content>\n  <pre [innerHtml]=\"message | safeHtml\" *ngIf=\"message\"></pre>\n</div>\n", styles: ["ngc-tooltip{display:none}.cdk-overlay-pane ngc-tooltip{display:flex}.ngc-tooltip{display:flex;flex-direction:column;padding:15px;position:relative;width:100%;word-break:break-word;border-radius:8px;border:none;box-shadow:var(--ngc-box-shadow, 0 8px 10px -2px rgba(0, 0, 0, .15));animation:30ms ease-in forwards popupAnimation;background-color:var(--tooltip-color, black);color:var(--tooltip-text-color, white)}.ngc-tooltip.ngc-tooltip--above:after,.ngc-tooltip.ngc-tooltip--below:after,.ngc-tooltip.ngc-tooltip--before:after,.ngc-tooltip.ngc-tooltip--after:after{content:\"\";position:absolute;width:0;height:0;border-style:solid}.ngc-tooltip.ngc-tooltip--above:not(.ngc-tooltip--dir-start):after,.ngc-tooltip.ngc-tooltip--above:not(.ngc-tooltip--dir-end):after,.ngc-tooltip.ngc-tooltip--below:not(.ngc-tooltip--dir-start):after,.ngc-tooltip.ngc-tooltip--below:not(.ngc-tooltip--dir-end):after{left:50%;transform:translate(-50%)}.ngc-tooltip.ngc-tooltip--above.ngc-tooltip--dir-start,.ngc-tooltip.ngc-tooltip--below.ngc-tooltip--dir-start{right:15px}.ngc-tooltip.ngc-tooltip--above.ngc-tooltip--dir-start:after,.ngc-tooltip.ngc-tooltip--below.ngc-tooltip--dir-start:after{left:15px;right:unset;transform:translate(-50%)}.ngc-tooltip.ngc-tooltip--above.ngc-tooltip--dir-end,.ngc-tooltip.ngc-tooltip--below.ngc-tooltip--dir-end{left:15px}.ngc-tooltip.ngc-tooltip--above.ngc-tooltip--dir-end:after,.ngc-tooltip.ngc-tooltip--below.ngc-tooltip--dir-end:after{left:unset;right:15px;transform:translate(50%)}.ngc-tooltip.ngc-tooltip--before:not(.ngc-tooltip--dir-start):after,.ngc-tooltip.ngc-tooltip--before:not(.ngc-tooltip--dir-end):after,.ngc-tooltip.ngc-tooltip--after:not(.ngc-tooltip--dir-start):after,.ngc-tooltip.ngc-tooltip--after:not(.ngc-tooltip--dir-end):after{top:50%;transform:translateY(-50%)}.ngc-tooltip.ngc-tooltip--before.ngc-tooltip--dir-start,.ngc-tooltip.ngc-tooltip--after.ngc-tooltip--dir-start{bottom:15px}.ngc-tooltip.ngc-tooltip--before.ngc-tooltip--dir-start:after,.ngc-tooltip.ngc-tooltip--after.ngc-tooltip--dir-start:after{top:15px;bottom:unset;transform:translateY(-50%)}.ngc-tooltip.ngc-tooltip--before.ngc-tooltip--dir-end,.ngc-tooltip.ngc-tooltip--after.ngc-tooltip--dir-end{top:15px}.ngc-tooltip.ngc-tooltip--before.ngc-tooltip--dir-end:after,.ngc-tooltip.ngc-tooltip--after.ngc-tooltip--dir-end:after{top:unset;bottom:15px;transform:translateY(50%)}.ngc-tooltip.ngc-tooltip--above:after{bottom:-7px;border-width:7px 4px 0;border-style:solid;border-color:var(--tooltip-color, var(--ngc-color-neutral-black, #0a0a0a)) transparent transparent}.ngc-tooltip.ngc-tooltip--below:after{top:-7px;border-width:0 4px 7px;border-style:solid;border-color:transparent transparent var(--tooltip-color, var(--ngc-color-neutral-black, #0a0a0a))}.ngc-tooltip.ngc-tooltip--before:after{right:-7px;border-width:4px 0 4px 7px;border-style:solid;border-color:transparent transparent transparent var(--tooltip-color, var(--ngc-color-neutral-black, #0a0a0a))}.ngc-tooltip.ngc-tooltip--after:after{left:-7px;border-width:4px 7px 4px 0;border-style:solid;border-color:transparent var(--tooltip-color, var(--ngc-color-neutral-black, #0a0a0a)) transparent transparent}.ngc-tooltip.ngc-tooltip--message-only{padding:5px 10px;white-space:pre-line}.ngc-tooltip.ngc-tooltip--light-theme{background-color:var(--ngc-color-neutral-white, #fff);color:var(--ngc-color-neutral-text-primary, #242426)}.ngc-tooltip.ngc-tooltip--light-theme.ngc-tooltip--above:after{border-color:var(--ngc-color-neutral-white, #fff) transparent transparent}.ngc-tooltip.ngc-tooltip--light-theme.ngc-tooltip--below:after{border-color:transparent transparent var(--ngc-color-neutral-white, #fff)}.ngc-tooltip.ngc-tooltip--light-theme.ngc-tooltip--before:after{border-color:transparent transparent transparent var(--ngc-color-neutral-white, #fff)}.ngc-tooltip.ngc-tooltip--light-theme.ngc-tooltip--after:after{border-color:transparent var(--ngc-color-neutral-white, #fff) transparent transparent}.ngc-tooltip pre{margin:0;padding:0;border:none;background:transparent;font-family:inherit}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], color: [{
                type: Input
            }], backdropClass: [{
                type: Input
            }], width: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], height: [{
                type: Input
            }], minHeight: [{
                type: Input
            }], maxHeight: [{
                type: Input
            }], messageOnly: [{
                type: Input
            }], theme: [{
                type: Input
            }], panelClass: [{
                type: Input,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdG9vbHRpcC9uZ2MtdG9vbHRpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10b29sdGlwL25nYy10b29sdGlwLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUN4QyxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUN6QyxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUN0QyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQVksTUFBTSxPQUFPLENBQUM7Ozs7O0FBYTlFLE1BQU0sT0FBTyxtQkFBbUI7SUEwQy9COzs7OztPQUtHO0lBQ0gsWUFBcUIsV0FBdUIsRUFBVSxNQUF5QixFQUFVLE9BQWU7UUFBbkYsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFuQ3hFLFVBQUssR0FBcUIsU0FBUyxDQUFDO1FBSTdELGNBQVMsR0FBcUIsRUFBRSxDQUFDO0lBK0JvRSxDQUFDO0lBM0I3RyxJQUNJLFVBQVUsQ0FBRSxPQUFlO1FBQzlCLE1BQU0sa0JBQWtCLEdBQVcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBRTVELGtCQUFrQixFQUFFLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBRSxTQUFpQixFQUFHLEVBQUU7WUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxTQUFTLENBQUUsR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQyxDQUFFLENBQUM7UUFFSixJQUFJ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UUFBUTtzQkFBekMsS0FBSztnQkFDNEIsTUFBTTtzQkFBdkMsS0FBSztnQkFDNEIsU0FBUztzQkFBMUMsS0FBSztnQkFDNEIsU0FBUztzQkFBMUMsS0FBSztnQkFDMkIsV0FBVztzQkFBM0MsS0FBSztnQkFDMEIsS0FBSztzQkFBcEMsS0FBSztnQkFTRixVQUFVO3NCQURiLEtBQUs7dUJBQUUsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sXG5cdFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdG9yUmVmLFxuXHRJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVmYXVsdFZhbHVlLCBDb2VyY2VDc3NQaXhlbCwgQ29lcmNlQm9vbGVhbiAsIElPYmplY3QgfSBmcm9tICdAY29yZSc7XG5cbmV4cG9ydCB0eXBlIE5HQ0lUb29sdGlwVGhlbWUgPSAnZGVmYXVsdCcgfCAnbGlnaHQnO1xuZXhwb3J0IHR5cGUgTkdDSVRvb2x0aXBQb3NpdGlvbiA9ICdhYm92ZScgfCAnYmVsb3cnIHwgJ2JlZm9yZScgfCAnYWZ0ZXInO1xuZXhwb3J0IHR5cGUgTkdDSVRvb2x0aXBEaXJlY3Rpb24gPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy10b29sdGlwJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtdG9vbHRpcC5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtdG9vbHRpcC5zY3NzJyBdLFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY1Rvb2x0aXBDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoIFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9ICkgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYmFja2Ryb3BDbGFzczogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgd2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1pbldpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBtYXhXaWR0aDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIG1heEhlaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBtZXNzYWdlT25seTogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyB0aGVtZTogTkdDSVRvb2x0aXBUaGVtZSA9ICdkZWZhdWx0JztcblxuXHRwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXHRwdWJsaWMgY2xvc2U6ICggZXZlbnQ/OiBNb3VzZUV2ZW50ICkgPT4gdm9pZDtcblx0cHVibGljIGNsYXNzTGlzdDogSU9iamVjdDxib29sZWFuPiA9IHt9O1xuXG5cdHByaXZhdGUgX3ByZXZpb3VzUGFuZWxDbGFzczogc3RyaW5nO1xuXG5cdEBJbnB1dCggJ2NsYXNzJyApXG5cdHNldCBwYW5lbENsYXNzKCBjbGFzc2VzOiBzdHJpbmcgKSB7XG5cdFx0Y29uc3QgcHJldmlvdXNQYW5lbENsYXNzOiBzdHJpbmcgPSB0aGlzLl9wcmV2aW91c1BhbmVsQ2xhc3M7XG5cblx0XHRwcmV2aW91c1BhbmVsQ2xhc3M/LnNwbGl0KCAnICcgKS5mb3JFYWNoKCAoIGNsYXNzTmFtZTogc3RyaW5nICkgPT4ge1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbIGNsYXNzTmFtZSBdID0gZmFsc2U7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5fcHJldmlvdXNQYW5lbENsYXNzID0gY2xhc3NlcztcblxuXHRcdGNsYXNzZXM/LnNwbGl0KCAnICcgKS5mb3JFYWNoKCAoIGNsYXNzTmFtZTogc3RyaW5nICkgPT4ge1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbIGNsYXNzTmFtZSBdID0gdHJ1ZTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7XG5cdH1cblxuXHRnZXQgbmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG5cdFx0cmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKiBAcGFyYW0ge0NoYW5nZURldGVjdG9yUmVmfSBfY2RSZWZcblx0ICogQHBhcmFtIHtOZ1pvbmV9IF9uZ1pvbmVcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX25nWm9uZTogTmdab25lICkge31cblxuXHQvKipcblx0ICogQHBhcmFtIHtOR0NJVG9vbHRpcFBvc2l0aW9ufSBwb3NpdGlvblxuXHQgKiBAcGFyYW0ge05HQ0lUb29sdGlwRGlyZWN0aW9ufSBkaXJlY3Rpb25cblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzZXRQb3NpdGlvbkNsYXNzZXMoIHBvc2l0aW9uOiBOR0NJVG9vbHRpcFBvc2l0aW9uLCBkaXJlY3Rpb24/OiBOR0NJVG9vbHRpcERpcmVjdGlvbiApIHtcblx0XHR0aGlzLl9uZ1pvbmUucnVuR3VhcmRlZCggKCkgPT4ge1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbICduZ2MtdG9vbHRpcC0tYWJvdmUnIF0gPSBwb3NpdGlvbiA9PT0gJ2Fib3ZlJztcblx0XHRcdHRoaXMuY2xhc3NMaXN0WyAnbmdjLXRvb2x0aXAtLWJlbG93JyBdID0gcG9zaXRpb24gPT09ICdiZWxvdyc7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdFsgJ25nYy10b29sdGlwLS1iZWZvcmUnIF0gPSBwb3NpdGlvbiA9PT0gJ2JlZm9yZSc7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdFsgJ25nYy10b29sdGlwLS1hZnRlcicgXSA9IHBvc2l0aW9uID09PSAnYWZ0ZXInO1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbICduZ2MtdG9vbHRpcC0tZGlyLXN0YXJ0JyBdID0gZGlyZWN0aW9uID09PSAnc3RhcnQnO1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbICduZ2MtdG9vbHRpcC0tZGlyLWVuZCcgXSA9IGRpcmVjdGlvbiA9PT0gJ2VuZCc7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdFsgJ25nYy10b29sdGlwLS1tZXNzYWdlLW9ubHknIF0gPSB0aGlzLm1lc3NhZ2VPbmx5O1xuXHRcdFx0dGhpcy5jbGFzc0xpc3RbICduZ2MtdG9vbHRpcC0tbGlnaHQtdGhlbWUnIF0gPSB0aGlzLnRoZW1lID09PSAnbGlnaHQnO1xuXG5cdFx0XHR0aGlzLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHJlYXR0YWNoKCkge1xuXHRcdHRoaXMuX2NkUmVmLnJlYXR0YWNoKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBkZXRhY2goKSB7XG5cdFx0dGhpcy5fY2RSZWYuZGV0YWNoKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBtYXJrRm9yQ2hlY2soKSB7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBkZXRlY3RDaGFuZ2VzKCkge1xuXHRcdHRoaXMuX2NkUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibmdjLXRvb2x0aXBcIlxuICAgICBbc3R5bGUuLS10b29sdGlwLWNvbG9yXT1cImNvbG9yXCJcbiAgICAgW3N0eWxlLi0tdG9vbHRpcC10ZXh0LWNvbG9yXT1cImNvbG9yIHwgY29udHJhc3RcIlxuICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGhcIlxuICAgICBbc3R5bGUubWluV2lkdGhdPVwibWluV2lkdGhcIlxuICAgICBbc3R5bGUubWF4V2lkdGhdPVwibWF4V2lkdGhcIlxuICAgICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiXG4gICAgIFtzdHlsZS5taW5IZWlnaHRdPVwibWluSGVpZ2h0XCJcbiAgICAgW3N0eWxlLm1heEhlaWdodF09XCJtYXhIZWlnaHRcIlxuICAgICBbbmdDbGFzc109XCJjbGFzc0xpc3RcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8cHJlIFtpbm5lckh0bWxdPVwibWVzc2FnZSB8IHNhZmVIdG1sXCIgKm5nSWY9XCJtZXNzYWdlXCI+PC9wcmU+XG48L2Rpdj5cbiJdfQ==