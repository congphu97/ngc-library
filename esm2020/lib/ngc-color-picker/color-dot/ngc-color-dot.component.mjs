import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { DefaultValue, CoerceBoolean, CoerceCssPixel, AliasOf } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../ngc-tooltip.directive";
import * as i3 from "../../ngc-button/basic-button/ngc-basic-button.component";
import * as i4 from "../ngc-color-picker.directive";
import * as i5 from "@ngx-translate/core";
export class NgcColorDotComponent {
    constructor() {
        this.visible = true;
        this.colorChange = new EventEmitter();
    }
    get styleColor() { return this.color; }
    get styleSize() { return this.size; }
    get classHidden() { return !this.visible; }
    get classCircle() { return this.circle; }
    /**
     * @param {string} color
     * @return {void}
     */
    onColorPicked(color) {
        this.color = color;
        this.colorChange.emit(this.color);
    }
}
NgcColorDotComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorDotComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcColorDotComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcColorDotComponent, selector: "ngc-color-dot, [ngcColorDot]", inputs: { color: "color", size: "size", circle: "circle", viewOnly: "viewOnly", visible: "visible", ngcColorDot: "ngcColorDot" }, outputs: { colorChange: "colorChange" }, host: { properties: { "style.--color-dot-color": "this.styleColor", "style.--color-dot-size": "this.styleSize", "class.ngc-color-dot--hidden": "this.classHidden", "class.ngc-color-dot--circle": "this.classCircle" }, classAttribute: "ngc-color-dot" }, ngImport: i0, template: "<!-- Define reusable content block -->\n<ng-template #temp>\n  <div class=\"ngc-color-dot-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n\n<!-- View-Only Mode -->\n<ng-container *ngIf=\"viewOnly; else elseBlock\">\n  <ng-container *ngTemplateOutlet=\"temp\"></ng-container>\n</ng-container>\n\n<!-- Editable Mode -->\n<ng-template #elseBlock>\n  <button\n    ngcBasicButton\n    ngcColorPicker\n    [ngcTooltip]=\"'NGC.LABEL.PICK_COLOR' | translate\"\n    [pickedColor]=\"color\"\n    (picked)=\"onColorPicked($event)\"\n    (click)=\"!viewOnly && $event?.stopPropagation()\">\n    \n    <!-- Embed the same content -->\n    <ng-container *ngTemplateOutlet=\"temp\"></ng-container>\n  </button>\n</ng-template>\n", styles: [".ngc-color-dot{display:flex}.ngc-color-dot.ngc-color-dot--hidden .ngc-color-dot-wrapper:before{display:none}.ngc-color-dot.ngc-color-dot--circle .ngc-color-dot-wrapper:before{border-radius:50%}.ngc-color-dot .ngc-color-dot-wrapper{display:flex;align-items:center}.ngc-color-dot .ngc-color-dot-wrapper:before{content:\"\";display:block;min-height:var(--color-dot-size, 10px);max-height:var(--color-dot-size, 10px);height:var(--color-dot-size, 10px);min-width:var(--color-dot-size, 10px);max-width:var(--color-dot-size, 10px);width:var(--color-dot-size, 10px);background-color:var(--color-dot-color, var(--ngc-color-neutral-white, #fff));border:1px dashed var(--color-dot-color, var(--ngc-color-neutral-border-strong, #babcc0));border-radius:3px}.ngc-color-dot .ngc-color-dot-wrapper:not(:empty):before{margin-right:5px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgcTooltipDirective, selector: "[ngcTooltip]", inputs: ["panelClass", "backdropClass", "tooltipColor", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "once", "programmatically", "autoClose", "hasBackdrop", "closeOnClickOutside", "openDelay", "closeDelay", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "triggerType", "ngcTooltip"], outputs: ["opened", "closed"], exportAs: ["ngcTooltip"] }, { kind: "component", type: i3.NgcBasicButtonComponent, selector: "button[ngcBasicButton]", inputs: ["type", "color", "icon", "iconSize", "disabled", "alignment"] }, { kind: "directive", type: i4.NgcColorPickerDirective, selector: "[ngcColorPicker]", inputs: ["pickedColor", "panelClass", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "hasBackdrop", "closeOnClickOutside", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "direction", "position", "emptyMode"], outputs: ["opened", "closed", "picked", "backdropPress", "pickedColorChange"], exportAs: ["ngcColorPicker"] }, { kind: "pipe", type: i5.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcColorDotComponent.prototype, "size", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcColorDotComponent.prototype, "circle", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcColorDotComponent.prototype, "viewOnly", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcColorDotComponent.prototype, "visible", void 0);
__decorate([
    AliasOf('color'),
    __metadata("design:type", String)
], NgcColorDotComponent.prototype, "ngcColorDot", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorDotComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-color-dot, [ngcColorDot]', host: { class: 'ngc-color-dot' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Define reusable content block -->\n<ng-template #temp>\n  <div class=\"ngc-color-dot-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n\n<!-- View-Only Mode -->\n<ng-container *ngIf=\"viewOnly; else elseBlock\">\n  <ng-container *ngTemplateOutlet=\"temp\"></ng-container>\n</ng-container>\n\n<!-- Editable Mode -->\n<ng-template #elseBlock>\n  <button\n    ngcBasicButton\n    ngcColorPicker\n    [ngcTooltip]=\"'NGC.LABEL.PICK_COLOR' | translate\"\n    [pickedColor]=\"color\"\n    (picked)=\"onColorPicked($event)\"\n    (click)=\"!viewOnly && $event?.stopPropagation()\">\n    \n    <!-- Embed the same content -->\n    <ng-container *ngTemplateOutlet=\"temp\"></ng-container>\n  </button>\n</ng-template>\n", styles: [".ngc-color-dot{display:flex}.ngc-color-dot.ngc-color-dot--hidden .ngc-color-dot-wrapper:before{display:none}.ngc-color-dot.ngc-color-dot--circle .ngc-color-dot-wrapper:before{border-radius:50%}.ngc-color-dot .ngc-color-dot-wrapper{display:flex;align-items:center}.ngc-color-dot .ngc-color-dot-wrapper:before{content:\"\";display:block;min-height:var(--color-dot-size, 10px);max-height:var(--color-dot-size, 10px);height:var(--color-dot-size, 10px);min-width:var(--color-dot-size, 10px);max-width:var(--color-dot-size, 10px);width:var(--color-dot-size, 10px);background-color:var(--color-dot-color, var(--ngc-color-neutral-white, #fff));border:1px dashed var(--color-dot-color, var(--ngc-color-neutral-border-strong, #babcc0));border-radius:3px}.ngc-color-dot .ngc-color-dot-wrapper:not(:empty):before{margin-right:5px}\n"] }]
        }], propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--color-dot-color']
            }], styleSize: [{
                type: HostBinding,
                args: ['style.--color-dot-size']
            }], classHidden: [{
                type: HostBinding,
                args: ['class.ngc-color-dot--hidden']
            }], classCircle: [{
                type: HostBinding,
                args: ['class.ngc-color-dot--circle']
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], circle: [{
                type: Input
            }], viewOnly: [{
                type: Input
            }], visible: [{
                type: Input
            }], ngcColorDot: [{
                type: Input
            }], colorChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvbG9yLWRvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jb2xvci1waWNrZXIvY29sb3ItZG90L25nYy1jb2xvci1kb3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtY29sb3ItcGlja2VyL2NvbG9yLWRvdC9uZ2MtY29sb3ItZG90Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUNuQyxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUM3QyxXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7OztBQVU3RSxNQUFNLE9BQU8sb0JBQW9CO0lBUmpDO1FBMEJrRCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hELGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7S0FZaEY7SUEvQkEsSUFDSSxVQUFVLEtBQVksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUU5QyxJQUNJLFNBQVMsS0FBWSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTVDLElBQ0ksV0FBVyxLQUFjLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVwRCxJQUNJLFdBQVcsS0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBV2xEOzs7T0FHRztJQUNJLGFBQWEsQ0FBRSxLQUFhO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUNyQyxDQUFDOztpSEEvQlcsb0JBQW9CO3FHQUFwQixvQkFBb0IsMGVDaEJqQyxndUJBMEJBO0FES0M7SUFBVSxjQUFjLEVBQUU7O2tEQUFxQjtBQUMvQztJQUFVLGFBQWEsRUFBRTs7b0RBQXdCO0FBQ2pEO0lBQVUsYUFBYSxFQUFFOztzREFBMEI7QUFDbkQ7SUFBVSxZQUFZLEVBQUU7SUFBRSxhQUFhLEVBQUU7O3FEQUFnQztBQUN6RTtJQUFVLE9BQU8sQ0FBRSxPQUFPLENBQUU7O3lEQUE0QjsyRkFuQjVDLG9CQUFvQjtrQkFSaEMsU0FBUzsrQkFDRyw4QkFBOEIsUUFHakMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGlCQUNuQixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUs1QyxVQUFVO3NCQURiLFdBQVc7dUJBQUUseUJBQXlCO2dCQUluQyxTQUFTO3NCQURaLFdBQVc7dUJBQUUsd0JBQXdCO2dCQUlsQyxXQUFXO3NCQURkLFdBQVc7dUJBQUUsNkJBQTZCO2dCQUl2QyxXQUFXO3NCQURkLFdBQVc7dUJBQUUsNkJBQTZCO2dCQUczQixLQUFLO3NCQUFwQixLQUFLO2dCQUM0QixJQUFJO3NCQUFyQyxLQUFLO2dCQUMyQixNQUFNO3NCQUF0QyxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLO2dCQUMyQyxPQUFPO3NCQUF2RCxLQUFLO2dCQUM4QixXQUFXO3NCQUE5QyxLQUFLO2dCQUVXLFdBQVc7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCxcblx0T3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVmYXVsdFZhbHVlLCBDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCwgQWxpYXNPZiB9IGZyb20gJ0Bjb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1jb2xvci1kb3QsIFtuZ2NDb2xvckRvdF0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1jb2xvci1kb3QuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLWNvbG9yLWRvdC5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWNvbG9yLWRvdCcgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NDb2xvckRvdENvbXBvbmVudCB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1jb2xvci1kb3QtY29sb3InIClcblx0Z2V0IHN0eWxlQ29sb3IoKTogc3RyaW5neyByZXR1cm4gdGhpcy5jb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tY29sb3ItZG90LXNpemUnIClcblx0Z2V0IHN0eWxlU2l6ZSgpOiBzdHJpbmd7IHJldHVybiB0aGlzLnNpemU7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtY29sb3ItZG90LS1oaWRkZW4nIClcblx0Z2V0IGNsYXNzSGlkZGVuKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMudmlzaWJsZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1jb2xvci1kb3QtLWNpcmNsZScgKVxuXHRnZXQgY2xhc3NDaXJjbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNpcmNsZTsgfVxuXG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBjaXJjbGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHZpZXdPbmx5OiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIEBBbGlhc09mKCAnY29sb3InICkgcHVibGljIG5nY0NvbG9yRG90OiBzdHJpbmc7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBjb2xvckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb25Db2xvclBpY2tlZCggY29sb3I6IHN0cmluZyApIHtcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XG5cblx0XHR0aGlzLmNvbG9yQ2hhbmdlLmVtaXQoIHRoaXMuY29sb3IgKTtcblx0fVxuXG59XG4iLCI8IS0tIERlZmluZSByZXVzYWJsZSBjb250ZW50IGJsb2NrIC0tPlxuPG5nLXRlbXBsYXRlICN0ZW1wPlxuICA8ZGl2IGNsYXNzPVwibmdjLWNvbG9yLWRvdC13cmFwcGVyXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjwhLS0gVmlldy1Pbmx5IE1vZGUgLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwidmlld09ubHk7IGVsc2UgZWxzZUJsb2NrXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cblxuPCEtLSBFZGl0YWJsZSBNb2RlIC0tPlxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gIDxidXR0b25cbiAgICBuZ2NCYXNpY0J1dHRvblxuICAgIG5nY0NvbG9yUGlja2VyXG4gICAgW25nY1Rvb2x0aXBdPVwiJ05HQy5MQUJFTC5QSUNLX0NPTE9SJyB8IHRyYW5zbGF0ZVwiXG4gICAgW3BpY2tlZENvbG9yXT1cImNvbG9yXCJcbiAgICAocGlja2VkKT1cIm9uQ29sb3JQaWNrZWQoJGV2ZW50KVwiXG4gICAgKGNsaWNrKT1cIiF2aWV3T25seSAmJiAkZXZlbnQ/LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgXG4gICAgPCEtLSBFbWJlZCB0aGUgc2FtZSBjb250ZW50IC0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wXCI+PC9uZy1jb250YWluZXI+XG4gIDwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==