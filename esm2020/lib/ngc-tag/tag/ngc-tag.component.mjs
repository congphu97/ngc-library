import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, ElementRef, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { ContrastPipe, DefaultValue, CoerceBoolean, CoerceNumber } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@core";
import * as i2 from "@angular/common";
import * as i3 from "../../ngc-truncate/ngc-truncate.component";
import * as i4 from "../../ngc-tooltip.directive";
export class NgcTagComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_elementRef, _contrastPipe) {
        this._elementRef = _elementRef;
        this._contrastPipe = _contrastPipe;
        this.truncate = true;
        this.truncateLimitLine = 1;
    }
    get styleColor() { return this.color; }
    get styleLabelColor() { return this.labelColor; }
    get classMinimize() { return this.minimize; }
    get nativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (changes.labelColor)
            this._bkLabelColor = this.labelColor;
        if (changes.color)
            this.labelColor = this._bkLabelColor || this._contrastPipe.transform(this.color);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.color && this.nativeElement.classList.add('ngc-' + this.color);
    }
}
NgcTagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTagComponent, deps: [{ token: i0.ElementRef }, { token: i1.ContrastPipe }], target: i0.ɵɵFactoryTarget.Component });
NgcTagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTagComponent, selector: "ngc-tag", inputs: { label: "label", labelColor: "labelColor", color: "color", minimize: "minimize", truncate: "truncate", truncateLimitLine: "truncateLimitLine" }, host: { properties: { "style.--tag-color": "this.styleColor", "style.--tag-label-color": "this.styleLabelColor", "class.ngc-tag--minimize": "this.classMinimize" }, classAttribute: "ngc-tag" }, providers: [ContrastPipe], usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"minimize; else elseBlock\">\n  <div class=\"ngc-tag__content\"></div>\n</ng-container>\n<ng-template #elseBlock>\n  <div class=\"ngc-tag__content\" [ngcTooltip]=\"label\">\n    <ng-template #labelTemp>\n      {{ label }}\n      <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n      </ng-container>\n    </ng-template>\n    <ng-container *ngIf=\"truncate; else elseBlockTruncate\">\n      <ngc-truncate [limitLine]=\"truncateLimitLine\">\n        <ng-container *ngTemplateOutlet=\"labelTemp\"></ng-container>\n      </ngc-truncate>\n    </ng-container>\n    <ng-template #elseBlockTruncate>\n      <ng-container *ngTemplateOutlet=\"labelTemp\"></ng-container>\n    </ng-template>\n  </div>\n</ng-template>\n", styles: [".ngc-tag{display:flex;flex-direction:column;justify-content:center;padding:5px 10px;font-weight:var(--ngc-font-weight-semibold, 600);font-size:14px;border-radius:8px;border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);color:var(--tag-label-color, var(--ngc-color-neutral-text-primary, #242426));background-color:var(--tag-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));position:relative;z-index:1;min-height:30px}.ngc-tag.ngc-tag--minimize{width:12px;min-width:12px;max-width:12px;height:12px;min-height:12px;max-height:12px;border-radius:3px;font-size:0;padding:0}.ngc-tag.ngc-primary{color:var(--ngc-color-neutral-white, #fff);background-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-tag.ngc-white{color:var(--ngc-color-neutral-text-primary, #242426);background-color:var(--ngc-color-neutral-white, #fff)}.ngc-tag .ngc-tag__content{display:flex;align-items:center;justify-content:center}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.NgcTruncateComponent, selector: "ngc-truncate", inputs: ["limitLine", "disabled", "tooltip", "ngcTooltip"] }, { kind: "directive", type: i4.NgcTooltipDirective, selector: "[ngcTooltip]", inputs: ["panelClass", "backdropClass", "tooltipColor", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "once", "programmatically", "autoClose", "hasBackdrop", "closeOnClickOutside", "openDelay", "closeDelay", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "triggerType", "ngcTooltip"], outputs: ["opened", "closed"], exportAs: ["ngcTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTagComponent.prototype, "minimize", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTagComponent.prototype, "truncate", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcTagComponent.prototype, "truncateLimitLine", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-tag', host: { class: 'ngc-tag' }, providers: [ContrastPipe], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"minimize; else elseBlock\">\n  <div class=\"ngc-tag__content\"></div>\n</ng-container>\n<ng-template #elseBlock>\n  <div class=\"ngc-tag__content\" [ngcTooltip]=\"label\">\n    <ng-template #labelTemp>\n      {{ label }}\n      <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n      </ng-container>\n    </ng-template>\n    <ng-container *ngIf=\"truncate; else elseBlockTruncate\">\n      <ngc-truncate [limitLine]=\"truncateLimitLine\">\n        <ng-container *ngTemplateOutlet=\"labelTemp\"></ng-container>\n      </ngc-truncate>\n    </ng-container>\n    <ng-template #elseBlockTruncate>\n      <ng-container *ngTemplateOutlet=\"labelTemp\"></ng-container>\n    </ng-template>\n  </div>\n</ng-template>\n", styles: [".ngc-tag{display:flex;flex-direction:column;justify-content:center;padding:5px 10px;font-weight:var(--ngc-font-weight-semibold, 600);font-size:14px;border-radius:8px;border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);color:var(--tag-label-color, var(--ngc-color-neutral-text-primary, #242426));background-color:var(--tag-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));position:relative;z-index:1;min-height:30px}.ngc-tag.ngc-tag--minimize{width:12px;min-width:12px;max-width:12px;height:12px;min-height:12px;max-height:12px;border-radius:3px;font-size:0;padding:0}.ngc-tag.ngc-primary{color:var(--ngc-color-neutral-white, #fff);background-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-tag.ngc-white{color:var(--ngc-color-neutral-text-primary, #242426);background-color:var(--ngc-color-neutral-white, #fff)}.ngc-tag .ngc-tag__content{display:flex;align-items:center;justify-content:center}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.ContrastPipe }]; }, propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--tag-color']
            }], styleLabelColor: [{
                type: HostBinding,
                args: ['style.--tag-label-color']
            }], classMinimize: [{
                type: HostBinding,
                args: ['class.ngc-tag--minimize']
            }], label: [{
                type: Input
            }], labelColor: [{
                type: Input
            }], color: [{
                type: Input
            }], minimize: [{
                type: Input
            }], truncate: [{
                type: Input
            }], truncateLimitLine: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRhZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10YWcvdGFnL25nYy10YWcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdGFnL3RhZy9uZ2MtdGFnLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUN4QyxLQUFLLEVBQ00sV0FBVyxFQUFFLHVCQUF1QixFQUMvQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sT0FBTyxDQUFDOzs7Ozs7QUFXaEYsTUFBTSxPQUFPLGVBQWU7SUF3QjNCOzs7O09BSUc7SUFDSCxZQUFxQixXQUF1QixFQUFVLGFBQTJCO1FBQTVELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFkaEMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUMxQixzQkFBaUIsR0FBVyxDQUFDLENBQUM7SUFhTyxDQUFDO0lBM0J0RixJQUNJLFVBQVUsS0FBYSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRS9DLElBQ0ksZUFBZSxLQUFhLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFekQsSUFDSSxhQUFhLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQVd0RCxJQUFJLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBU0Q7OztPQUdHO0lBQ0gsV0FBVyxDQUFFLE9BQXNCO1FBQ2xDLElBQUssT0FBTyxDQUFDLFVBQVU7WUFBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDL0QsSUFBSyxPQUFPLENBQUMsS0FBSztZQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDekcsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNkLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDdkUsQ0FBQzs7NEdBN0NXLGVBQWU7Z0dBQWYsZUFBZSw2WEFKZCxDQUFFLFlBQVksQ0FBRSwrQ0NiOUIsOHVCQXFCQTtBRFVDO0lBQVUsYUFBYSxFQUFFOztpREFBMEI7QUFDbkQ7SUFBVSxZQUFZLEVBQUU7SUFBRSxhQUFhLEVBQUU7O2lEQUFpQztBQUMxRTtJQUFVLFlBQVksRUFBRTtJQUFFLFlBQVksRUFBRTs7MERBQXNDOzJGQWhCbEUsZUFBZTtrQkFUM0IsU0FBUzsrQkFDRyxTQUFTLFFBR1osRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQ2hCLENBQUUsWUFBWSxDQUFFLGlCQUNiLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07NEhBSzVDLFVBQVU7c0JBRGIsV0FBVzt1QkFBRSxtQkFBbUI7Z0JBSTdCLGVBQWU7c0JBRGxCLFdBQVc7dUJBQUUseUJBQXlCO2dCQUluQyxhQUFhO3NCQURoQixXQUFXO3VCQUFFLHlCQUF5QjtnQkFHdkIsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJDLFFBQVE7c0JBQXhELEtBQUs7Z0JBQzBDLGlCQUFpQjtzQkFBaEUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsXG5cdElucHV0LCBBZnRlclZpZXdJbml0LCBTaW1wbGVDaGFuZ2VzLFxuXHRPbkNoYW5nZXMsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJhc3RQaXBlLCBEZWZhdWx0VmFsdWUsIENvZXJjZUJvb2xlYW4sIENvZXJjZU51bWJlciB9IGZyb20gJ0Bjb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy10YWcnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy10YWcuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLXRhZy5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLXRhZycgfSxcblx0cHJvdmlkZXJzXHRcdDogWyBDb250cmFzdFBpcGUgXSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tdGFnLWNvbG9yJyApXG5cdGdldCBzdHlsZUNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS10YWctbGFiZWwtY29sb3InIClcblx0Z2V0IHN0eWxlTGFiZWxDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5sYWJlbENvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLXRhZy0tbWluaW1pemUnIClcblx0Z2V0IGNsYXNzTWluaW1pemUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1pbmltaXplOyB9XG5cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBsYWJlbENvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBtaW5pbWl6ZTogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHRydW5jYXRlOiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgdHJ1bmNhdGVMaW1pdExpbmU6IG51bWJlciA9IDE7XG5cblx0cHJpdmF0ZSBfYmtMYWJlbENvbG9yOiBzdHJpbmc7XG5cblx0Z2V0IG5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuXHRcdHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gX2VsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtDb250cmFzdFBpcGV9IF9jb250cmFzdFBpcGVcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jb250cmFzdFBpcGU6IENvbnRyYXN0UGlwZSApIHt9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggY2hhbmdlcy5sYWJlbENvbG9yICkgdGhpcy5fYmtMYWJlbENvbG9yID0gdGhpcy5sYWJlbENvbG9yO1xuXHRcdGlmICggY2hhbmdlcy5jb2xvciApIHRoaXMubGFiZWxDb2xvciA9IHRoaXMuX2JrTGFiZWxDb2xvciB8fCB0aGlzLl9jb250cmFzdFBpcGUudHJhbnNmb3JtKCB0aGlzLmNvbG9yICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jb2xvciAmJiB0aGlzLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ25nYy0nICsgdGhpcy5jb2xvciApO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJtaW5pbWl6ZTsgZWxzZSBlbHNlQmxvY2tcIj5cbiAgPGRpdiBjbGFzcz1cIm5nYy10YWdfX2NvbnRlbnRcIj48L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gIDxkaXYgY2xhc3M9XCJuZ2MtdGFnX19jb250ZW50XCIgW25nY1Rvb2x0aXBdPVwibGFiZWxcIj5cbiAgICA8bmctdGVtcGxhdGUgI2xhYmVsVGVtcD5cbiAgICAgIHt7IGxhYmVsIH19XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRydW5jYXRlOyBlbHNlIGVsc2VCbG9ja1RydW5jYXRlXCI+XG4gICAgICA8bmdjLXRydW5jYXRlIFtsaW1pdExpbmVdPVwidHJ1bmNhdGVMaW1pdExpbmVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxhYmVsVGVtcFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZ2MtdHJ1bmNhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNlbHNlQmxvY2tUcnVuY2F0ZT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsYWJlbFRlbXBcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=