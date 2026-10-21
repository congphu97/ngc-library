import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import _ from 'lodash';
import { COLOR } from '@resources';
import { DefaultValue } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-color/photoshop";
export class NgcColorPickerComponent {
    constructor() {
        this.mode = 'default';
        this.emptyMode = 'color';
        this.picked = new EventEmitter();
        this.pickedColorChange = new EventEmitter();
        this.selectedTabIndex = 0;
        this.pickedColorObj = {
            hex: '#000000',
            rgb: { r: 0, g: 0, b: 0, a: 1 },
            hsl: { h: 0, s: 0, l: 0, a: 1 },
        };
        this.colors = [null, ...COLOR.OTHERS];
    }
    get classInline() { return this.mode === 'inline'; }
    get colorCode() {
        switch (this.selectedTabIndex) {
            case 0:
                return this.pickedColorObj?.hex;
            case 1:
                return _.join([
                    this.pickedColorObj?.rgb?.r,
                    this.pickedColorObj?.rgb?.g,
                    this.pickedColorObj?.rgb?.b,
                ], ', ');
            case 2:
                return _.join([
                    Math.ceil(this.pickedColorObj?.hsl?.h),
                    Math.ceil(this.pickedColorObj?.hsl?.s * 100) + '%',
                    Math.ceil(this.pickedColorObj?.hsl?.l * 100) + '%',
                ], ', ');
        }
    }
    /**
     * @param {string} color
     * @return {void}
     */
    pick(color) {
        this.isPickOther = false;
        this.pickedColor = this.pickedColorObj.hex = color;
        this.picked.emit(this.pickedColor);
        this.pickedColorChange.emit(this.pickedColor);
        _.isFunction(this.onPicked) && this.onPicked(this.pickedColor);
    }
}
NgcColorPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorPickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcColorPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcColorPickerComponent, selector: "ngc-color-picker", inputs: { pickedColor: "pickedColor", mode: "mode", emptyMode: "emptyMode" }, outputs: { picked: "picked", pickedColorChange: "pickedColorChange" }, host: { properties: { "class.ngc-color-picker--inline": "this.classInline" }, classAttribute: "ngc-color-picker" }, ngImport: i0, template: "<ng-container *ngIf=\"mode === 'default'\">\n    <color-photoshop color=\"#fff\" (onChangeComplete)=\"handleChange($event)\"></color-photoshop>\n</ng-container>\n\n<ng-container *ngIf=\"mode === 'inline'\">\n    <div class=\"ngc-color-picker-list\">\n        <div *ngFor=\"let color of colors\">\n            <button class=\"ngc-color-picker-item\" [style.--color-picker-item-color]=\"color\"\n                [style.--color-picker-item-bg-color]=\"color\" (click)=\"pickColor( color )\">\n            </button>\n        </div>\n    </div>\n</ng-container>", styles: [".ngc-color-picker-list{display:flex;flex-direction:row;flex-wrap:wrap;width:300px}.ngc-color-picker-list .ngc-color-picker-item{cursor:pointer;width:32px;height:32px;border-radius:50%;margin:5px;color:var(--color-picker-item-color, var(--ngc-color-neutral-white, #fff));background-color:var(--color-picker-item-bg-color, var(--ngc-color-neutral-white, #fff));border:1px solid var(--color-picker-item-bg-color, var(--ngc-color-neutral-border-default, #e4e4e6))}.ngc-color-picker-list .ngc-color-picker-item:hover{transform:scale(1.15)}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.PhotoshopComponent, selector: "color-photoshop", inputs: ["header"], outputs: ["onAccept", "onCancel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcColorPickerComponent.prototype, "mode", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcColorPickerComponent.prototype, "emptyMode", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-color-picker', host: { class: 'ngc-color-picker' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"mode === 'default'\">\n    <color-photoshop color=\"#fff\" (onChangeComplete)=\"handleChange($event)\"></color-photoshop>\n</ng-container>\n\n<ng-container *ngIf=\"mode === 'inline'\">\n    <div class=\"ngc-color-picker-list\">\n        <div *ngFor=\"let color of colors\">\n            <button class=\"ngc-color-picker-item\" [style.--color-picker-item-color]=\"color\"\n                [style.--color-picker-item-bg-color]=\"color\" (click)=\"pickColor( color )\">\n            </button>\n        </div>\n    </div>\n</ng-container>", styles: [".ngc-color-picker-list{display:flex;flex-direction:row;flex-wrap:wrap;width:300px}.ngc-color-picker-list .ngc-color-picker-item{cursor:pointer;width:32px;height:32px;border-radius:50%;margin:5px;color:var(--color-picker-item-color, var(--ngc-color-neutral-white, #fff));background-color:var(--color-picker-item-bg-color, var(--ngc-color-neutral-white, #fff));border:1px solid var(--color-picker-item-bg-color, var(--ngc-color-neutral-border-default, #e4e4e6))}.ngc-color-picker-list .ngc-color-picker-item:hover{transform:scale(1.15)}\n"] }]
        }], propDecorators: { classInline: [{
                type: HostBinding,
                args: ['class.ngc-color-picker--inline']
            }], pickedColor: [{
                type: Input
            }], mode: [{
                type: Input
            }], emptyMode: [{
                type: Input
            }], picked: [{
                type: Output
            }], pickedColorChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvbG9yLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jb2xvci1waWNrZXIvbmdjLWNvbG9yLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jb2xvci1waWNrZXIvbmdjLWNvbG9yLXBpY2tlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFDbkMsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFDN0MsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSxPQUFPLENBQUM7Ozs7QUFjL0MsTUFBTSxPQUFPLHVCQUF1QjtJQVJwQztRQWNpQyxTQUFJLEdBQXdCLFNBQVMsQ0FBQztRQUN0QyxjQUFTLEdBQTZCLE9BQU8sQ0FBQztRQUU3RCxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUQsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFJL0UscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBRTdCLG1CQUFjLEdBQVk7WUFDaEMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQy9CLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7U0FDL0IsQ0FBQztRQUNLLFdBQU0sR0FBYSxDQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztLQWtDcEQ7SUFyREEsSUFDSSxXQUFXLEtBQWMsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFvQjdELElBQUksU0FBUztRQUNaLFFBQVMsSUFBSSxDQUFDLGdCQUFnQixFQUFHO1lBQ2hDLEtBQUssQ0FBQztnQkFDTCxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDO1lBQ2pDLEtBQUssQ0FBQztnQkFDTCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQztpQkFDM0IsRUFBRSxJQUFJLENBQUUsQ0FBQztZQUNYLEtBQUssQ0FBQztnQkFDTCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUU7b0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBRSxHQUFHLEdBQUc7b0JBQ3BELElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBRSxHQUFHLEdBQUc7aUJBQ3BELEVBQUUsSUFBSSxDQUFFLENBQUM7U0FDWDtJQUNGLENBQUM7SUFFRDs7O09BR0c7SUFDSSxJQUFJLENBQUUsS0FBYTtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUVuRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDaEQsQ0FBQyxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7SUFDcEUsQ0FBQzs7b0hBckRXLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLGlVQ3RCcEMsOGlCQVllO0FEZ0JkO0lBQVUsWUFBWSxFQUFFOztxREFBOEM7QUFDdEU7SUFBVSxZQUFZLEVBQUU7OzBEQUFzRDsyRkFQbEUsdUJBQXVCO2tCQVJuQyxTQUFTOytCQUNHLGtCQUFrQixRQUdyQixFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxpQkFDdEIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs4QkFLNUMsV0FBVztzQkFEZCxXQUFXO3VCQUFFLGdDQUFnQztnQkFHOUIsV0FBVztzQkFBMUIsS0FBSztnQkFDMEIsSUFBSTtzQkFBbkMsS0FBSztnQkFDMEIsU0FBUztzQkFBeEMsS0FBSztnQkFFVyxNQUFNO3NCQUF0QixNQUFNO2dCQUNVLGlCQUFpQjtzQkFBakMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLFxuXHRPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQ09MT1IgfSBmcm9tICdAcmVzb3VyY2VzJztcbmltcG9ydCB7IERlZmF1bHRWYWx1ZSAsIElPYmplY3QgfSBmcm9tICdAY29yZSc7XG5cbmV4cG9ydCB0eXBlIE5nY0lDb2xvclBpY2tlck1vZGUgPSAnZGVmYXVsdCcgfCAnaW5saW5lJztcbmV4cG9ydCB0eXBlIE5nY0lDb2xvclBpY2tlclBvc2l0aW9uID0gJ2Fib3ZlJyB8ICdiZWxvdyc7XG5leHBvcnQgdHlwZSBOZ2NJQ29sb3JQaWNrZXJFbXB0eU1vZGUgPSAnY29sb3InIHwgJ2JhY2tncm91bmQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLWNvbG9yLXBpY2tlcicsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLWNvbG9yLXBpY2tlci5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtY29sb3ItcGlja2VyLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtY29sb3ItcGlja2VyJyB9LFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0NvbG9yUGlja2VyQ29tcG9uZW50IHtcblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtY29sb3ItcGlja2VyLS1pbmxpbmUnIClcblx0Z2V0IGNsYXNzSW5saW5lKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5tb2RlID09PSAnaW5saW5lJzsgfVxuXG5cdEBJbnB1dCgpIHB1YmxpYyBwaWNrZWRDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIG1vZGU6IE5nY0lDb2xvclBpY2tlck1vZGUgPSAnZGVmYXVsdCc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgZW1wdHlNb2RlOiBOZ2NJQ29sb3JQaWNrZXJFbXB0eU1vZGUgPSAnY29sb3InO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgcGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHBpY2tlZENvbG9yQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdHB1YmxpYyBjbG9zZTogKCBldmVudD86IEV2ZW50ICkgPT4gdm9pZDtcblx0cHVibGljIG9uUGlja2VkOiAoIGNvbG9yOiBzdHJpbmcgKSA9PiB2b2lkO1xuXHRwdWJsaWMgc2VsZWN0ZWRUYWJJbmRleDogbnVtYmVyID0gMDtcblx0cHVibGljIGlzUGlja090aGVyOiBib29sZWFuO1xuXHRwdWJsaWMgcGlja2VkQ29sb3JPYmo6IElPYmplY3QgPSB7XG5cdFx0aGV4OiAnIzAwMDAwMCcsXG5cdFx0cmdiOiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDEgfSxcblx0XHRoc2w6IHsgaDogMCwgczogMCwgbDogMCwgYTogMSB9LFxuXHR9O1xuXHRwdWJsaWMgY29sb3JzOiBzdHJpbmdbXSA9IFsgbnVsbCwgLi4uQ09MT1IuT1RIRVJTIF07XG5cblx0Z2V0IGNvbG9yQ29kZSgpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAoIHRoaXMuc2VsZWN0ZWRUYWJJbmRleCApIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmV0dXJuIHRoaXMucGlja2VkQ29sb3JPYmo/LmhleDtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuIF8uam9pbihbXG5cdFx0XHRcdFx0dGhpcy5waWNrZWRDb2xvck9iaj8ucmdiPy5yLFxuXHRcdFx0XHRcdHRoaXMucGlja2VkQ29sb3JPYmo/LnJnYj8uZyxcblx0XHRcdFx0XHR0aGlzLnBpY2tlZENvbG9yT2JqPy5yZ2I/LmIsXG5cdFx0XHRcdF0sICcsICcgKTtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cmV0dXJuIF8uam9pbihbXG5cdFx0XHRcdFx0TWF0aC5jZWlsKCB0aGlzLnBpY2tlZENvbG9yT2JqPy5oc2w/LmggKSxcblx0XHRcdFx0XHRNYXRoLmNlaWwoIHRoaXMucGlja2VkQ29sb3JPYmo/LmhzbD8ucyAqIDEwMCApICsgJyUnLFxuXHRcdFx0XHRcdE1hdGguY2VpbCggdGhpcy5waWNrZWRDb2xvck9iaj8uaHNsPy5sICogMTAwICkgKyAnJScsXG5cdFx0XHRcdF0sICcsICcgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgcGljayggY29sb3I6IHN0cmluZyApIHtcblx0XHR0aGlzLmlzUGlja090aGVyID0gZmFsc2U7XG5cdFx0dGhpcy5waWNrZWRDb2xvciA9IHRoaXMucGlja2VkQ29sb3JPYmouaGV4ID0gY29sb3I7XG5cblx0XHR0aGlzLnBpY2tlZC5lbWl0KCB0aGlzLnBpY2tlZENvbG9yICk7XG5cdFx0dGhpcy5waWNrZWRDb2xvckNoYW5nZS5lbWl0KCB0aGlzLnBpY2tlZENvbG9yICk7XG5cdFx0Xy5pc0Z1bmN0aW9uKCB0aGlzLm9uUGlja2VkICkgJiYgdGhpcy5vblBpY2tlZCggdGhpcy5waWNrZWRDb2xvciApO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJtb2RlID09PSAnZGVmYXVsdCdcIj5cbiAgICA8Y29sb3ItcGhvdG9zaG9wIGNvbG9yPVwiI2ZmZlwiIChvbkNoYW5nZUNvbXBsZXRlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCI+PC9jb2xvci1waG90b3Nob3A+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1vZGUgPT09ICdpbmxpbmUnXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5nYy1jb2xvci1waWNrZXItbGlzdFwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjb2xvcnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuZ2MtY29sb3ItcGlja2VyLWl0ZW1cIiBbc3R5bGUuLS1jb2xvci1waWNrZXItaXRlbS1jb2xvcl09XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLi0tY29sb3ItcGlja2VyLWl0ZW0tYmctY29sb3JdPVwiY29sb3JcIiAoY2xpY2spPVwicGlja0NvbG9yKCBjb2xvciApXCI+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj4iXX0=