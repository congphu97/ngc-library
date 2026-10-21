import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ElementRef, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { AliasOf, DefaultValue, ContrastPipe } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@core";
export class NgcBadgeComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_elementRef, _contrastPipe) {
        this._elementRef = _elementRef;
        this._contrastPipe = _contrastPipe;
        this.positionMode = 'default';
    }
    get styleColor() { return this.color; }
    get styleTextColor() { return this.textColor; }
    get classPosInline() { return this.positionMode === 'inline'; }
    get classPosAbsolute() { return this.positionMode === 'absolute'; }
    get styleBorderColor() { return this.background; }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.color && this._elementRef.nativeElement.classList.add('ngc-' + this.color);
        this.background && this._elementRef.nativeElement.classList.add('ngc-background-' + this.background);
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (changes.textColor)
            this._bkTextColor = this.textColor;
        if (changes.color)
            this.textColor = this._bkTextColor || this._contrastPipe.transform(this.color);
    }
}
NgcBadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBadgeComponent, deps: [{ token: i0.ElementRef }, { token: i1.ContrastPipe }], target: i0.ɵɵFactoryTarget.Component });
NgcBadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcBadgeComponent, selector: "ngc-badge, [ngcBadge]", inputs: { count: "count", color: "color", background: "background", textColor: "textColor", positionMode: "positionMode", wgcBadge: "wgcBadge" }, host: { properties: { "style.--badge-color": "this.styleColor", "style.--badge-text-color": "this.styleTextColor", "class.ngc-badge--pos-inline": "this.classPosInline", "class.ngc-badge--pos-absolute": "this.classPosAbsolute", "style.--button-border-color": "this.styleBorderColor" }, classAttribute: "ngc-badge" }, providers: [ContrastPipe], usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>\n<div class=\"ngc-badge-count\">{{ count }}</div>", styles: [".ngc-badge{display:inline-flex;align-items:center;justify-content:center;position:relative;width:fit-content;vertical-align:middle}.ngc-badge.ngc-badge--pos-inline>.ngc-badge-count{top:0;transform:none}.ngc-badge.ngc-badge--pos-absolute>.ngc-badge-count{position:absolute;right:-10px;top:-10px;left:auto;transform:none}.ngc-badge.ngc-primary>.ngc-badge-count{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));color:var(--ngc-color-neutral-white, #fff)}.ngc-badge.ngc-background-default{background-color:var(--primary-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));padding:8px;border:2px solid var(--ngc-color-neutral-border-strong, #babcc0);border-radius:10px}.ngc-badge.ngc-background-default>.ngc-badge-count{background-color:var(--primary-color, var(--ngc-color-neutral-text-tertiary, #8e8e93));color:var(--ngc-color-neutral-white, #fff)}.ngc-badge.ngc-background-primary{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));padding:8px;border:2px solid var(--primary-color, var(--ngc-color-primary-default, #444446));border-radius:10px}.ngc-badge.ngc-background-primary>.ngc-badge-count,.ngc-badge.ngc-background-primary ngc-icon{color:var(--ngc-color-neutral-white, #fff)}.ngc-badge.ngc-background-secondary{background-color:var(--primary-color, var(--ngc-color-neutral-background-canvas, #fafafa));padding:8px;border:2px solid var(--ngc-color-neutral-border-strong, #babcc0);border-radius:10px}.ngc-badge.ngc-background-secondary>.ngc-badge-count{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));color:var(--ngc-color-neutral-white, #fff)}.ngc-badge ngc-icon{font-size:24px!important;height:24px;width:24px;display:inline-flex;align-items:center;justify-content:center}.ngc-badge>.ngc-badge-count{padding:1px 5px;background-color:var(--badge-color, var(--ngc-color-neutral-text-tertiary, #8e8e93));border-radius:6px;font-size:10px;font-weight:600;color:var(--badge-text-color, var(--ngc-color-neutral-white, #fff));position:relative;left:0;top:-7px;transform:translate(-40%);width:fit-content;min-width:14px;height:fit-content;min-height:14px;line-height:1.2;text-align:center;white-space:nowrap}.ngc-badge>.ngc-badge-count:empty{display:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcBadgeComponent.prototype, "positionMode", void 0);
__decorate([
    AliasOf('count'),
    __metadata("design:type", String)
], NgcBadgeComponent.prototype, "wgcBadge", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-badge, [ngcBadge]', host: { class: 'ngc-badge' }, providers: [ContrastPipe], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n<div class=\"ngc-badge-count\">{{ count }}</div>", styles: [".ngc-badge{display:inline-flex;align-items:center;justify-content:center;position:relative;width:fit-content;vertical-align:middle}.ngc-badge.ngc-badge--pos-inline>.ngc-badge-count{top:0;transform:none}.ngc-badge.ngc-badge--pos-absolute>.ngc-badge-count{position:absolute;right:-10px;top:-10px;left:auto;transform:none}.ngc-badge.ngc-primary>.ngc-badge-count{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));color:var(--ngc-color-neutral-white, #fff)}.ngc-badge.ngc-background-default{background-color:var(--primary-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));padding:8px;border:2px solid var(--ngc-color-neutral-border-strong, #babcc0);border-radius:10px}.ngc-badge.ngc-background-default>.ngc-badge-count{background-color:var(--primary-color, var(--ngc-color-neutral-text-tertiary, #8e8e93));color:var(--ngc-color-neutral-white, #fff)}.ngc-badge.ngc-background-primary{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));padding:8px;border:2px solid var(--primary-color, var(--ngc-color-primary-default, #444446));border-radius:10px}.ngc-badge.ngc-background-primary>.ngc-badge-count,.ngc-badge.ngc-background-primary ngc-icon{color:var(--ngc-color-neutral-white, #fff)}.ngc-badge.ngc-background-secondary{background-color:var(--primary-color, var(--ngc-color-neutral-background-canvas, #fafafa));padding:8px;border:2px solid var(--ngc-color-neutral-border-strong, #babcc0);border-radius:10px}.ngc-badge.ngc-background-secondary>.ngc-badge-count{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446));color:var(--ngc-color-neutral-white, #fff)}.ngc-badge ngc-icon{font-size:24px!important;height:24px;width:24px;display:inline-flex;align-items:center;justify-content:center}.ngc-badge>.ngc-badge-count{padding:1px 5px;background-color:var(--badge-color, var(--ngc-color-neutral-text-tertiary, #8e8e93));border-radius:6px;font-size:10px;font-weight:600;color:var(--badge-text-color, var(--ngc-color-neutral-white, #fff));position:relative;left:0;top:-7px;transform:translate(-40%);width:fit-content;min-width:14px;height:fit-content;min-height:14px;line-height:1.2;text-align:center;white-space:nowrap}.ngc-badge>.ngc-badge-count:empty{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.ContrastPipe }]; }, propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--badge-color']
            }], styleTextColor: [{
                type: HostBinding,
                args: ['style.--badge-text-color']
            }], classPosInline: [{
                type: HostBinding,
                args: ['class.ngc-badge--pos-inline']
            }], classPosAbsolute: [{
                type: HostBinding,
                args: ['class.ngc-badge--pos-absolute']
            }], styleBorderColor: [{
                type: HostBinding,
                args: ['style.--button-border-color']
            }], count: [{
                type: Input
            }], color: [{
                type: Input
            }], background: [{
                type: Input
            }], textColor: [{
                type: Input
            }], positionMode: [{
                type: Input
            }], wgcBadge: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWJhZGdlL25nYy1iYWRnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1iYWRnZS9uZ2MtYmFkZ2UuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ25DLFVBQVUsRUFDQyxXQUFXLEVBQUUsdUJBQXVCLEVBQy9DLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLE9BQU8sQ0FBQzs7O0FBYTVELE1BQU0sT0FBTyxpQkFBaUI7SUE0QjdCOzs7O09BSUc7SUFDSCxZQUFxQixXQUF1QixFQUFVLGFBQTJCO1FBQTVELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFYakQsaUJBQVksR0FBMEIsU0FBUyxDQUFDO0lBV0ssQ0FBQztJQS9CdEYsSUFDSSxVQUFVLEtBQWEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUvQyxJQUNJLGNBQWMsS0FBYSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXZELElBQ0ksY0FBYyxLQUFjLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXhFLElBQ0ksZ0JBQWdCLEtBQWMsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFHNUUsSUFDSSxnQkFBZ0IsS0FBYSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBbUIxRDs7T0FFRztJQUNILGVBQWU7UUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0lBQ3hHLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUUsT0FBc0I7UUFDbEMsSUFBSyxPQUFPLENBQUMsU0FBUztZQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFLLE9BQU8sQ0FBQyxLQUFLO1lBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUN2RyxDQUFDOzs4R0FsRFcsaUJBQWlCO2tHQUFqQixpQkFBaUIsOGZBSmhCLENBQUUsWUFBWSxDQUFFLCtDQ2Y5Qiw2RUFDOEM7QUR3QzdDO0lBQVUsWUFBWSxFQUFFOzt1REFBd0Q7QUFFaEY7SUFBVSxPQUFPLENBQUUsT0FBTyxDQUFFOzttREFBeUI7MkZBeEJ6QyxpQkFBaUI7a0JBVDdCLFNBQVM7K0JBQ0csdUJBQXVCLFFBRzFCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxhQUNsQixDQUFFLFlBQVksQ0FBRSxpQkFDYixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzRIQUs1QyxVQUFVO3NCQURiLFdBQVc7dUJBQUUscUJBQXFCO2dCQUkvQixjQUFjO3NCQURqQixXQUFXO3VCQUFFLDBCQUEwQjtnQkFJcEMsY0FBYztzQkFEakIsV0FBVzt1QkFBRSw2QkFBNkI7Z0JBSXZDLGdCQUFnQjtzQkFEbkIsV0FBVzt1QkFBRSwrQkFBK0I7Z0JBS3pDLGdCQUFnQjtzQkFEbkIsV0FBVzt1QkFBRSw2QkFBNkI7Z0JBRzNCLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLFNBQVM7c0JBQXhCLEtBQUs7Z0JBQzBCLFlBQVk7c0JBQTNDLEtBQUs7Z0JBRThCLFFBQVE7c0JBQTNDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCxcblx0RWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgU2ltcGxlQ2hhbmdlcyxcblx0T25DaGFuZ2VzLCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsaWFzT2YsIERlZmF1bHRWYWx1ZSwgQ29udHJhc3RQaXBlIH0gZnJvbSAnQGNvcmUnO1xuXG5leHBvcnQgdHlwZSBXR0NJQmFkZ2VQb3NpdGlvbk1vZGUgPSAnZGVmYXVsdCcgfCAnaW5saW5lJyB8ICdhYnNvbHV0ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtYmFkZ2UsIFtuZ2NCYWRnZV0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1iYWRnZS5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtYmFkZ2Uuc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy1iYWRnZScgfSxcblx0cHJvdmlkZXJzXHRcdDogWyBDb250cmFzdFBpcGUgXSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1iYWRnZS1jb2xvcicgKVxuXHRnZXQgc3R5bGVDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tYmFkZ2UtdGV4dC1jb2xvcicgKVxuXHRnZXQgc3R5bGVUZXh0Q29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudGV4dENvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWJhZGdlLS1wb3MtaW5saW5lJyApXG5cdGdldCBjbGFzc1Bvc0lubGluZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucG9zaXRpb25Nb2RlID09PSAnaW5saW5lJzsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1iYWRnZS0tcG9zLWFic29sdXRlJyApXG5cdGdldCBjbGFzc1Bvc0Fic29sdXRlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wb3NpdGlvbk1vZGUgPT09ICdhYnNvbHV0ZSc7IH1cblxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tYnV0dG9uLWJvcmRlci1jb2xvcicgKVxuXHRnZXQgc3R5bGVCb3JkZXJDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kOyB9XG5cblx0QElucHV0KCkgcHVibGljIGNvdW50OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYmFja2dyb3VuZDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgdGV4dENvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgcG9zaXRpb25Nb2RlOiBXR0NJQmFkZ2VQb3NpdGlvbk1vZGUgPSAnZGVmYXVsdCc7XG5cblx0QElucHV0KCkgQEFsaWFzT2YoICdjb3VudCcgKSBwdWJsaWMgd2djQmFkZ2U6IHN0cmluZztcblxuXHRwcml2YXRlIF9ia1RleHRDb2xvcjogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKiBAcGFyYW0ge0NvbnRyYXN0UGlwZX0gX2NvbnRyYXN0UGlwZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NvbnRyYXN0UGlwZTogQ29udHJhc3RQaXBlICkge31cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5jb2xvciAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ25nYy0nICsgdGhpcy5jb2xvciApO1xuXHRcdHRoaXMuYmFja2dyb3VuZCAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ25nYy1iYWNrZ3JvdW5kLScgKyB0aGlzLmJhY2tncm91bmQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIGNoYW5nZXMudGV4dENvbG9yICkgdGhpcy5fYmtUZXh0Q29sb3IgPSB0aGlzLnRleHRDb2xvcjtcblx0XHRpZiAoIGNoYW5nZXMuY29sb3IgKSB0aGlzLnRleHRDb2xvciA9IHRoaXMuX2JrVGV4dENvbG9yIHx8IHRoaXMuX2NvbnRyYXN0UGlwZS50cmFuc2Zvcm0oIHRoaXMuY29sb3IgKTtcblx0fVxuXG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48ZGl2IGNsYXNzPVwibmdjLWJhZGdlLWNvdW50XCI+e3sgY291bnQgfX08L2Rpdj4iXX0=