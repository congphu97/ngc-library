import { __decorate, __metadata } from "tslib";
import { Component, TemplateRef, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { ContrastPipe, CoerceBoolean, CoerceCssPixel, DefaultValue } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@core";
export class NgcExpansionPanelHeaderComponent {
    /**
     * @constructor
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_contrastPipe) {
        this._contrastPipe = _contrastPipe;
        this.textFontSize = '16px';
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
NgcExpansionPanelHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExpansionPanelHeaderComponent, deps: [{ token: i1.ContrastPipe }], target: i0.ɵɵFactoryTarget.Component });
NgcExpansionPanelHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcExpansionPanelHeaderComponent, selector: "ngc-expansion-panel-header", inputs: { color: "color", textColor: "textColor", textFontSize: "textFontSize", width: "width", sticky: "sticky", stretch: "stretch" }, host: { classAttribute: "ngc-expansion-panel-header" }, providers: [ContrastPipe], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    DefaultValue(),
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcExpansionPanelHeaderComponent.prototype, "textFontSize", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcExpansionPanelHeaderComponent.prototype, "width", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExpansionPanelHeaderComponent.prototype, "sticky", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExpansionPanelHeaderComponent.prototype, "stretch", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExpansionPanelHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-expansion-panel-header', host: { class: 'ngc-expansion-panel-header' }, providers: [ContrastPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n\t<ng-content></ng-content>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i1.ContrastPipe }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], textFontSize: [{
                type: Input
            }], width: [{
                type: Input
            }], sticky: [{
                type: Input
            }], stretch: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIvbmdjLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIvbmdjLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUNqQyxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7OztBQVNsRixNQUFNLE9BQU8sZ0NBQWdDO0lBYTVDOzs7T0FHRztJQUNILFlBQXFCLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBWEUsaUJBQVksR0FBVyxNQUFNLENBQUM7SUFXNUIsQ0FBQztJQUVyRDs7O09BR0c7SUFDSCxXQUFXLENBQUUsT0FBc0I7UUFDbEMsSUFBSyxPQUFPLENBQUMsU0FBUztZQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1RCxJQUFLLE9BQU8sQ0FBQyxLQUFLO1lBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUN2RyxDQUFDOzs2SEExQlcsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0MscVBBSC9CLENBQUUsWUFBWSxDQUFFLHVFQUtqQixXQUFXLG1GQ2pCeEIsNERBRWM7QURtQmI7SUFBVSxZQUFZLEVBQUU7SUFBRSxjQUFjLEVBQUU7O3NFQUFzQztBQUNoRjtJQUFVLGNBQWMsRUFBRTs7K0RBQXNCO0FBQ2hEO0lBQVUsYUFBYSxFQUFFOztnRUFBd0I7QUFDakQ7SUFBVSxhQUFhLEVBQUU7O2lFQUF5QjsyRkFUdEMsZ0NBQWdDO2tCQVA1QyxTQUFTOytCQUNHLDRCQUE0QixRQUUvQixFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRSxhQUNuQyxDQUFFLFlBQVksQ0FBRSxtQkFDWCx1QkFBdUIsQ0FBQyxNQUFNO21HQUlHLFdBQVc7c0JBQTdELFNBQVM7dUJBQUUsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFFekIsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxTQUFTO3NCQUF4QixLQUFLO2dCQUM0QyxZQUFZO3NCQUE3RCxLQUFLO2dCQUM0QixLQUFLO3NCQUF0QyxLQUFLO2dCQUMyQixNQUFNO3NCQUF0QyxLQUFLO2dCQUMyQixPQUFPO3NCQUF2QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxuXHRJbnB1dCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJhc3RQaXBlLCBDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCwgRGVmYXVsdFZhbHVlIH0gZnJvbSAnQGNvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmh0bWwnLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInIH0sXG5cdHByb3ZpZGVyc1x0XHQ6IFsgQ29udHJhc3RQaXBlIF0sXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0V4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRAVmlld0NoaWxkKCBUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSApIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHRleHRDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHRleHRGb250U2l6ZTogc3RyaW5nID0gJzE2cHgnO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgd2lkdGg6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgc3RpY2t5OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBzdHJldGNoOiBib29sZWFuO1xuXG5cdHByaXZhdGUgX2JrVGV4dENvbG9yOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0NvbnRyYXN0UGlwZX0gX2NvbnRyYXN0UGlwZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX2NvbnRyYXN0UGlwZTogQ29udHJhc3RQaXBlICkge31cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0aWYgKCBjaGFuZ2VzLnRleHRDb2xvciApIHRoaXMuX2JrVGV4dENvbG9yID0gdGhpcy50ZXh0Q29sb3I7XG5cdFx0aWYgKCBjaGFuZ2VzLmNvbG9yICkgdGhpcy50ZXh0Q29sb3IgPSB0aGlzLl9ia1RleHRDb2xvciB8fCB0aGlzLl9jb250cmFzdFBpcGUudHJhbnNmb3JtKCB0aGlzLmNvbG9yICk7XG5cdH1cblxufVxuIiwiPG5nLXRlbXBsYXRlPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPiJdfQ==