import { Component, Input, Output, EventEmitter, HostListener, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class NgcSwitchComponent {
    constructor() {
        this.ngModelChange = new EventEmitter();
    }
    triggerClick(event) {
        // if ( this.disabled || this.disableControl || this.readonly ) return; // mot improve
        if (this.disabled || this.readonly)
            return;
        event.stopPropagation();
        this.toggle();
    }
    triggerKeyDownSpace(event) {
        // if ( this.disabled || this.disableControl || this.readonly ) return; // need improve
        if (this.disabled || this.readonly)
            return;
        event.stopPropagation();
        this.toggle();
    }
    ngOnInit() {
    }
    toggle() {
        this.ngModel = !this.ngModel;
        this.ngModelChange.emit(this.ngModel);
    }
}
NgcSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcSwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcSwitchComponent, selector: "ngc-switch", inputs: { label: "label", color: "color", labelColor: "labelColor", ngModel: "ngModel", disabled: "disabled", readonly: "readonly" }, outputs: { ngModelChange: "ngModelChange" }, host: { listeners: { "click": "triggerClick($event)", "keydown.space": "triggerKeyDownSpace($event)" }, properties: { "style.--switch-color": "color", "style.--switch-label-color": "labelColor", "class.ngc-switch--disabled": "disabled || disableControl", "class.ngc-switch--active": "ngModel === true" }, classAttribute: "ngc-switch" }, ngImport: i0, template: "<div class=\"ngc-switch\">\n    <div class=\"ngc-switch__box\">\n        <input\n            type=\"checkbox\"\n            [disabled]=\"disabled\"\n            [(ngModel)]=\"ngModel\"\n            (ngModelChange)=\"ngModelChange?.emit( $event )\"/>\n    </div>\n    <div class=\"ngc-switch__label\">\n        {{ label }}\n        <ng-container *ngIf=\"!label\">\n            <ng-content></ng-content>\n        </ng-container>\n    </div>\n</div>\n", styles: [".ngc-switch{cursor:pointer;display:flex;width:fit-content}.ngc-switch .ngc-switch__box{position:relative;width:38px;min-width:38px;max-width:38px;height:22px;min-height:22px;max-height:22px;background-color:var(--ngc-color-neutral-text-placeholder, #c4c4c6);border-radius:11px}.ngc-switch .ngc-switch__box:after{content:\"\";width:16px;height:16px;position:absolute;left:5px;top:50%;transform:translateY(-50%);border-radius:50%;background-color:var(--ngc-color-neutral-white, #fff);transition:.3s cubic-bezier(.35,0,.25,1)}.ngc-switch .ngc-switch__box input{display:none}.ngc-switch.ngc-switch--active:not(.ngc-switch--disabled) .ngc-switch__box{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-switch.ngc-switch--active .ngc-switch__box{background-color:var(--switch-color, var(--ngc-color-primary-default, #444446))}.ngc-switch.ngc-switch--active .ngc-switch__box:after{left:calc(100% - 21px)}.ngc-switch:not(.ngc-switch--disabled):focus-visible .ngc-switch__box{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4))}.ngc-switch .ngc-switch__label{display:flex;align-items:center;margin-left:10px;color:var(--switch-label-color, inherit)}.ngc-switch .ngc-switch__label:empty{display:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-switch', encapsulation: ViewEncapsulation.None, host: {
                        '[style.--switch-color]': 'color',
                        '[style.--switch-label-color]': 'labelColor',
                        '[class.ngc-switch--disabled]': 'disabled || disableControl',
                        '[class.ngc-switch--active]': 'ngModel === true',
                        class: 'ngc-switch',
                    }, template: "<div class=\"ngc-switch\">\n    <div class=\"ngc-switch__box\">\n        <input\n            type=\"checkbox\"\n            [disabled]=\"disabled\"\n            [(ngModel)]=\"ngModel\"\n            (ngModelChange)=\"ngModelChange?.emit( $event )\"/>\n    </div>\n    <div class=\"ngc-switch__label\">\n        {{ label }}\n        <ng-container *ngIf=\"!label\">\n            <ng-content></ng-content>\n        </ng-container>\n    </div>\n</div>\n", styles: [".ngc-switch{cursor:pointer;display:flex;width:fit-content}.ngc-switch .ngc-switch__box{position:relative;width:38px;min-width:38px;max-width:38px;height:22px;min-height:22px;max-height:22px;background-color:var(--ngc-color-neutral-text-placeholder, #c4c4c6);border-radius:11px}.ngc-switch .ngc-switch__box:after{content:\"\";width:16px;height:16px;position:absolute;left:5px;top:50%;transform:translateY(-50%);border-radius:50%;background-color:var(--ngc-color-neutral-white, #fff);transition:.3s cubic-bezier(.35,0,.25,1)}.ngc-switch .ngc-switch__box input{display:none}.ngc-switch.ngc-switch--active:not(.ngc-switch--disabled) .ngc-switch__box{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-switch.ngc-switch--active .ngc-switch__box{background-color:var(--switch-color, var(--ngc-color-primary-default, #444446))}.ngc-switch.ngc-switch--active .ngc-switch__box:after{left:calc(100% - 21px)}.ngc-switch:not(.ngc-switch--disabled):focus-visible .ngc-switch__box{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4))}.ngc-switch .ngc-switch__label{display:flex;align-items:center;margin-left:10px;color:var(--switch-label-color, inherit)}.ngc-switch .ngc-switch__label:empty{display:none}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], color: [{
                type: Input
            }], labelColor: [{
                type: Input
            }], ngModel: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], ngModelChange: [{
                type: Output
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], triggerKeyDownSpace: [{
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1zd2l0Y2gvbmdjLXN3aXRjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1zd2l0Y2gvbmdjLXN3aXRjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQWVoSCxNQUFNLE9BQU8sa0JBQWtCO0lBVzlCO1FBRmlCLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFFcEUsQ0FBQztJQUdWLFlBQVksQ0FBRSxLQUFpQjtRQUNyQyxzRkFBc0Y7UUFFdEYsSUFBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUcsT0FBTztRQUU3QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUdNLG1CQUFtQixDQUFFLEtBQW9CO1FBQy9DLHVGQUF1RjtRQUV2RixJQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRyxPQUFPO1FBRTdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFTSxNQUFNO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0lBQ3pDLENBQUM7OytHQXhDVyxrQkFBa0I7bUdBQWxCLGtCQUFrQixzakJDZi9CLGtjQWVBOzJGREFhLGtCQUFrQjtrQkFiOUIsU0FBUzsrQkFDQyxZQUFZLGlCQUdOLGlCQUFpQixDQUFDLElBQUksUUFDaEM7d0JBQ0wsd0JBQXdCLEVBQUksT0FBTzt3QkFDbkMsOEJBQThCLEVBQUcsWUFBWTt3QkFDN0MsOEJBQThCLEVBQUcsNEJBQTRCO3dCQUM3RCw0QkFBNEIsRUFBRyxrQkFBa0I7d0JBQ2pELEtBQUssRUFBRSxZQUFZO3FCQUNuQjswRUFJZSxLQUFLO3NCQUFwQixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFFVyxhQUFhO3NCQUE3QixNQUFNO2dCQUtBLFlBQVk7c0JBRGxCLFlBQVk7dUJBQUUsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFO2dCQVc3QixtQkFBbUI7c0JBRHpCLFlBQVk7dUJBQUUsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ2Mtc3dpdGNoJyxcblx0dGVtcGxhdGVVcmw6ICcuL25nYy1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ2Mtc3dpdGNoLmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbc3R5bGUuLS1zd2l0Y2gtY29sb3JdJ1x0XHQ6ICdjb2xvcicsXG5cdFx0J1tzdHlsZS4tLXN3aXRjaC1sYWJlbC1jb2xvcl0nXHQ6ICdsYWJlbENvbG9yJyxcblx0XHQnW2NsYXNzLm5nYy1zd2l0Y2gtLWRpc2FibGVkXSdcdDogJ2Rpc2FibGVkIHx8IGRpc2FibGVDb250cm9sJyxcblx0XHQnW2NsYXNzLm5nYy1zd2l0Y2gtLWFjdGl2ZV0nXHQ6ICduZ01vZGVsID09PSB0cnVlJyxcblx0XHRjbGFzczogJ25nYy1zd2l0Y2gnLFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIE5nY1N3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbmdNb2RlbDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpIHB1YmxpYyBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRASG9zdExpc3RlbmVyKCAnY2xpY2snLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlckNsaWNrKCBldmVudDogTW91c2VFdmVudCApIHtcblx0XHQvLyBpZiAoIHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlQ29udHJvbCB8fCB0aGlzLnJlYWRvbmx5ICkgcmV0dXJuOyAvLyBtb3QgaW1wcm92ZVxuXG5cdFx0aWYgKCB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZG9ubHkgKSByZXR1cm47XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnRvZ2dsZSgpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lciggJ2tleWRvd24uc3BhY2UnLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlcktleURvd25TcGFjZSggZXZlbnQ6IEtleWJvYXJkRXZlbnQgKSB7XG5cdFx0Ly8gaWYgKCB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZUNvbnRyb2wgfHwgdGhpcy5yZWFkb25seSApIHJldHVybjsgLy8gbmVlZCBpbXByb3ZlXG5cblx0XHRpZiAoIHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSApIHJldHVybjtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMudG9nZ2xlKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0dGhpcy5uZ01vZGVsID0gIXRoaXMubmdNb2RlbDtcblxuXHRcdHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KCB0aGlzLm5nTW9kZWwgKTtcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cIm5nYy1zd2l0Y2hcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmdjLXN3aXRjaF9fYm94XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5nTW9kZWxcIlxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibmdNb2RlbENoYW5nZT8uZW1pdCggJGV2ZW50IClcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5nYy1zd2l0Y2hfX2xhYmVsXCI+XG4gICAgICAgIHt7IGxhYmVsIH19XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbGFiZWxcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==