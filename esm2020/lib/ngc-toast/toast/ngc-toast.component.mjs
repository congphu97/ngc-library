import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CoerceBoolean, ContrastPipe } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@core";
import * as i2 from "@angular/common";
import * as i3 from "../../ngc-alert/ngc-alert.component";
import * as i4 from "angular-core";
export class NgcToastComponent {
    /**
     * @constructor
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_contrastPipe) {
        this._contrastPipe = _contrastPipe;
        this.closed = new EventEmitter();
        this._icons = { info: 'info', success: 'checkbox', warning: 'warning', danger: 'warning' };
    }
    get styleColor() { return this.color; }
    get styleTextColor() { return this.textColor; }
    get classInfo() { return this.type === 'info'; }
    get classSuccess() { return this.type === 'success'; }
    get classWarning() { return this.type === 'warning'; }
    get classDanger() { return this.type === 'danger'; }
    get classHasDescription() { return !!this.description?.length; }
    get iconName() { return this.icon || this._icons[this.type]; }
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
NgcToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcToastComponent, deps: [{ token: i1.ContrastPipe }], target: i0.ɵɵFactoryTarget.Component });
NgcToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcToastComponent, selector: "ngc-toast", inputs: { title: "title", description: "description", icon: "icon", color: "color", textColor: "textColor", buttons: "buttons", canClose: "canClose", translate: "translate", translateParams: "translateParams", type: "type" }, outputs: { closed: "closed" }, host: { properties: { "style.--toast-color": "this.styleColor", "style.--toast-text-color": "this.styleTextColor", "class.ngc-toast-info": "this.classInfo", "class.ngc-toast-success": "this.classSuccess", "class.ngc-toast-warning": "this.classWarning", "class.ngc-toast-danger": "this.classDanger", "class.ngc-toast--has-description": "this.classHasDescription" }, classAttribute: "ngc-toast" }, providers: [ContrastPipe], usesOnChanges: true, ngImport: i0, template: "<ngc-alert\n    [color]=\"color || type\"\n    [textColor]=\"textColor\"\n    [icon]=\"iconName\"\n    [closeable]=\"canClose\"\n    (closed)=\"closed.emit($event)\">\n    <div class=\"ngc-toast-container\">\n        <div class=\"ngc-toast-header\" *ngIf=\"title\">\n            {{ title }}\n        </div>\n        <div class=\"ngc-toast-description\" *ngIf=\"description\" [innerHtml]=\"description | safeHtml\"></div>\n        <div class=\"ngc-toast-button\" *ngIf=\"buttons?.length\">\n            <ng-container *ngFor=\"let button of buttons\">\n                <button (click)=\"button?.onClicked(); closed?.emit( $event )\">{{ button?.label || button?.title }}</button>\n            </ng-container>\n        </div>\n    </div>\n</ngc-alert>", styles: [".ngc-toast{display:block;width:500px;max-width:100%;margin:12px 24px;animation:30ms ease-in forwards popupAnimation;box-sizing:border-box}.ngc-toast .ngc-alert{margin-bottom:0;box-shadow:0 4px 16px #0000001f;border-radius:8px;width:100%;align-items:flex-start}.ngc-toast .ngc-alert .ngc-alert-icon{margin-top:-1px}.ngc-toast .ngc-alert .ngc-alert-close-btn{margin-top:-6px}.ngc-toast .ngc-toast-container{display:flex;flex-direction:column;gap:2px;width:100%;min-width:0;cursor:pointer}.ngc-toast .ngc-toast-container .ngc-toast-header{font-size:var(--ngc-font-size-base, 14px);font-weight:var(--ngc-font-weight-bold, 700);line-height:1.4}.ngc-toast .ngc-toast-container .ngc-toast-description{font-size:var(--ngc-font-size-small, 12px);font-weight:var(--ngc-font-weight-normal, 400);line-height:1.4;opacity:.9}.ngc-toast .ngc-toast-container .ngc-toast-button{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.ngc-toast .ngc-toast-container .ngc-toast-button button{background:transparent;border:1px solid currentColor;color:inherit;font-size:var(--ngc-font-size-small, 12px);font-weight:var(--ngc-font-weight-semibold, 600);padding:4px 12px;border-radius:4px;cursor:pointer;opacity:.85;transition:all .2s ease}.ngc-toast .ngc-toast-container .ngc-toast-button button:hover{opacity:1;background:rgba(0,0,0,.05)}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NgcAlertComponent, selector: "ngc-alert, [ngcAlert]", inputs: ["color", "textColor", "background", "borderColor", "icon", "closeable"], outputs: ["closed"] }, { kind: "pipe", type: i4.SafeHtmlPipe, name: "safeHtml" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcToastComponent.prototype, "canClose", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcToastComponent.prototype, "translate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-toast', host: { class: 'ngc-toast' }, providers: [ContrastPipe], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ngc-alert\n    [color]=\"color || type\"\n    [textColor]=\"textColor\"\n    [icon]=\"iconName\"\n    [closeable]=\"canClose\"\n    (closed)=\"closed.emit($event)\">\n    <div class=\"ngc-toast-container\">\n        <div class=\"ngc-toast-header\" *ngIf=\"title\">\n            {{ title }}\n        </div>\n        <div class=\"ngc-toast-description\" *ngIf=\"description\" [innerHtml]=\"description | safeHtml\"></div>\n        <div class=\"ngc-toast-button\" *ngIf=\"buttons?.length\">\n            <ng-container *ngFor=\"let button of buttons\">\n                <button (click)=\"button?.onClicked(); closed?.emit( $event )\">{{ button?.label || button?.title }}</button>\n            </ng-container>\n        </div>\n    </div>\n</ngc-alert>", styles: [".ngc-toast{display:block;width:500px;max-width:100%;margin:12px 24px;animation:30ms ease-in forwards popupAnimation;box-sizing:border-box}.ngc-toast .ngc-alert{margin-bottom:0;box-shadow:0 4px 16px #0000001f;border-radius:8px;width:100%;align-items:flex-start}.ngc-toast .ngc-alert .ngc-alert-icon{margin-top:-1px}.ngc-toast .ngc-alert .ngc-alert-close-btn{margin-top:-6px}.ngc-toast .ngc-toast-container{display:flex;flex-direction:column;gap:2px;width:100%;min-width:0;cursor:pointer}.ngc-toast .ngc-toast-container .ngc-toast-header{font-size:var(--ngc-font-size-base, 14px);font-weight:var(--ngc-font-weight-bold, 700);line-height:1.4}.ngc-toast .ngc-toast-container .ngc-toast-description{font-size:var(--ngc-font-size-small, 12px);font-weight:var(--ngc-font-weight-normal, 400);line-height:1.4;opacity:.9}.ngc-toast .ngc-toast-container .ngc-toast-button{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.ngc-toast .ngc-toast-container .ngc-toast-button button{background:transparent;border:1px solid currentColor;color:inherit;font-size:var(--ngc-font-size-small, 12px);font-weight:var(--ngc-font-weight-semibold, 600);padding:4px 12px;border-radius:4px;cursor:pointer;opacity:.85;transition:all .2s ease}.ngc-toast .ngc-toast-container .ngc-toast-button button:hover{opacity:1;background:rgba(0,0,0,.05)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ContrastPipe }]; }, propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--toast-color']
            }], styleTextColor: [{
                type: HostBinding,
                args: ['style.--toast-text-color']
            }], classInfo: [{
                type: HostBinding,
                args: ['class.ngc-toast-info']
            }], classSuccess: [{
                type: HostBinding,
                args: ['class.ngc-toast-success']
            }], classWarning: [{
                type: HostBinding,
                args: ['class.ngc-toast-warning']
            }], classDanger: [{
                type: HostBinding,
                args: ['class.ngc-toast-danger']
            }], classHasDescription: [{
                type: HostBinding,
                args: ['class.ngc-toast--has-description']
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], icon: [{
                type: Input
            }], color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], buttons: [{
                type: Input
            }], canClose: [{
                type: Input
            }], translate: [{
                type: Input
            }], translateParams: [{
                type: Input
            }], type: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRvYXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRvYXN0L3RvYXN0L25nYy10b2FzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10b2FzdC90b2FzdC9uZ2MtdG9hc3QuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQ25DLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQ25CLFdBQVcsRUFDckMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQVksTUFBTSxPQUFPLENBQUM7Ozs7OztBQWlDOUQsTUFBTSxPQUFPLGlCQUFpQjtJQXlDN0I7OztPQUdHO0lBQ0gsWUFBcUIsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFYL0IsV0FBTSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBRTNFLFdBQU0sR0FBb0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFTM0QsQ0FBQztJQTNDckQsSUFDSSxVQUFVLEtBQWEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUvQyxJQUNJLGNBQWMsS0FBYSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXZELElBQ0ksU0FBUyxLQUFjLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXpELElBQ0ksWUFBWSxLQUFjLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRS9ELElBQ0ksWUFBWSxLQUFjLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRS9ELElBQ0ksV0FBVyxLQUFjLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTdELElBQ0ksbUJBQW1CLEtBQWMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBa0J6RSxJQUFJLFFBQVEsS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO0lBUXhFOzs7T0FHRztJQUNILFdBQVcsQ0FBRSxPQUFzQjtRQUNsQyxJQUFLLE9BQU8sQ0FBQyxTQUFTO1lBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVELElBQUssT0FBTyxDQUFDLEtBQUs7WUFBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQ3ZHLENBQUM7OzhHQXREVyxpQkFBaUI7a0dBQWpCLGlCQUFpQixpckJBSmhCLENBQUUsWUFBWSxDQUFFLCtDQ25DOUIsNnVCQWlCWTtBRG1EWDtJQUFVLGFBQWEsRUFBRTs7bURBQTBCO0FBQ25EO0lBQVUsYUFBYSxFQUFFOztvREFBMkI7MkZBOUJ4QyxpQkFBaUI7a0JBVDdCLFNBQVM7K0JBQ0csV0FBVyxRQUdkLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxhQUNsQixDQUFFLFlBQVksQ0FBRSxpQkFDYixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO21HQUs1QyxVQUFVO3NCQURiLFdBQVc7dUJBQUUscUJBQXFCO2dCQUkvQixjQUFjO3NCQURqQixXQUFXO3VCQUFFLDBCQUEwQjtnQkFJcEMsU0FBUztzQkFEWixXQUFXO3VCQUFFLHNCQUFzQjtnQkFJaEMsWUFBWTtzQkFEZixXQUFXO3VCQUFFLHlCQUF5QjtnQkFJbkMsWUFBWTtzQkFEZixXQUFXO3VCQUFFLHlCQUF5QjtnQkFJbkMsV0FBVztzQkFEZCxXQUFXO3VCQUFFLHdCQUF3QjtnQkFJbEMsbUJBQW1CO3NCQUR0QixXQUFXO3VCQUFFLGtDQUFrQztnQkFHaEMsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxTQUFTO3NCQUF4QixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFNBQVM7c0JBQXpDLEtBQUs7Z0JBQ1UsZUFBZTtzQkFBOUIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLO2dCQUVXLE1BQU07c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbixcblx0T3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2VyY2VCb29sZWFuLCBDb250cmFzdFBpcGUgLCBJT2JqZWN0IH0gZnJvbSAnQGNvcmUnO1xuXG5leHBvcnQgdHlwZSBOZ2NJVG9hc3RUeXBlID0gJ2RlZmF1bHQnIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Rhbmdlcic7XG5leHBvcnQgdHlwZSBOZ2NJVG9hc3RQb3NpdGlvbiA9ICdib3R0b20nIHwgJ3RvcCcgfCAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCd8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcblxuXG5leHBvcnQgaW50ZXJmYWNlIE5nY0lUb2FzdENvbmZpZyB7XG5cdGljb24/OiBzdHJpbmc7XG5cdGNvbG9yPzogc3RyaW5nO1xuXHR0ZXh0Q29sb3I/OiBzdHJpbmc7XG5cdGR1cmF0aW9uPzogbnVtYmVyO1xuXHRjYW5DbG9zZT86IGJvb2xlYW47XG5cdHRyYW5zbGF0ZT86IGJvb2xlYW47XG5cdHR5cGU/OiBOZ2NJVG9hc3RUeXBlO1xuXHRwb3NpdGlvbj86IE5nY0lUb2FzdFBvc2l0aW9uO1xuXHR0cmFuc2xhdGVQYXJhbXM/OiBJT2JqZWN0O1xuXHRidXR0b25zPzogTmdjSVRvYXN0QnV0dG9uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdjSVRvYXN0QnV0dG9uIHtcblx0bGFiZWw6IHN0cmluZztcblx0b25DbGlja2VkOiAoKSA9PiB2b2lkO1xufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLXRvYXN0Jyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtdG9hc3QuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLXRvYXN0LnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtdG9hc3QnIH0sXG5cdHByb3ZpZGVyc1x0XHQ6IFsgQ29udHJhc3RQaXBlIF0sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tdG9hc3QtY29sb3InIClcblx0Z2V0IHN0eWxlQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLXRvYXN0LXRleHQtY29sb3InIClcblx0Z2V0IHN0eWxlVGV4dENvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRleHRDb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy10b2FzdC1pbmZvJyApXG5cdGdldCBjbGFzc0luZm8oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnR5cGUgPT09ICdpbmZvJzsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy10b2FzdC1zdWNjZXNzJyApXG5cdGdldCBjbGFzc1N1Y2Nlc3MoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnR5cGUgPT09ICdzdWNjZXNzJzsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy10b2FzdC13YXJuaW5nJyApXG5cdGdldCBjbGFzc1dhcm5pbmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnR5cGUgPT09ICd3YXJuaW5nJzsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy10b2FzdC1kYW5nZXInIClcblx0Z2V0IGNsYXNzRGFuZ2VyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy50eXBlID09PSAnZGFuZ2VyJzsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy10b2FzdC0taGFzLWRlc2NyaXB0aW9uJyApXG5cdGdldCBjbGFzc0hhc0Rlc2NyaXB0aW9uKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLmRlc2NyaXB0aW9uPy5sZW5ndGg7IH1cblxuXHRASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBpY29uOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgdGV4dENvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBidXR0b25zOiBOZ2NJVG9hc3RCdXR0b25bXTtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2FuQ2xvc2U6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHRyYW5zbGF0ZTogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIHRyYW5zbGF0ZVBhcmFtczogSU9iamVjdDtcblx0QElucHV0KCkgcHVibGljIHR5cGU6IE5nY0lUb2FzdFR5cGU7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuXHRwcml2YXRlIF9pY29uczogSU9iamVjdDxzdHJpbmc+ID0geyBpbmZvOiAnaW5mbycsIHN1Y2Nlc3M6ICdjaGVja2JveCcsIHdhcm5pbmc6ICd3YXJuaW5nJywgZGFuZ2VyOiAnd2FybmluZycgfTtcblx0cHJpdmF0ZSBfYmtUZXh0Q29sb3I6IHN0cmluZztcblxuXHRnZXQgaWNvbk5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaWNvbiB8fCB0aGlzLl9pY29uc1sgdGhpcy50eXBlIF07IH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7Q29udHJhc3RQaXBlfSBfY29udHJhc3RQaXBlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBfY29udHJhc3RQaXBlOiBDb250cmFzdFBpcGUgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIGNoYW5nZXMudGV4dENvbG9yICkgdGhpcy5fYmtUZXh0Q29sb3IgPSB0aGlzLnRleHRDb2xvcjtcblx0XHRpZiAoIGNoYW5nZXMuY29sb3IgKSB0aGlzLnRleHRDb2xvciA9IHRoaXMuX2JrVGV4dENvbG9yIHx8IHRoaXMuX2NvbnRyYXN0UGlwZS50cmFuc2Zvcm0oIHRoaXMuY29sb3IgKTtcblx0fVxuXG59XG4iLCI8bmdjLWFsZXJ0XG4gICAgW2NvbG9yXT1cImNvbG9yIHx8IHR5cGVcIlxuICAgIFt0ZXh0Q29sb3JdPVwidGV4dENvbG9yXCJcbiAgICBbaWNvbl09XCJpY29uTmFtZVwiXG4gICAgW2Nsb3NlYWJsZV09XCJjYW5DbG9zZVwiXG4gICAgKGNsb3NlZCk9XCJjbG9zZWQuZW1pdCgkZXZlbnQpXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5nYy10b2FzdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5nYy10b2FzdC1oZWFkZXJcIiAqbmdJZj1cInRpdGxlXCI+XG4gICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5nYy10b2FzdC1kZXNjcmlwdGlvblwiICpuZ0lmPVwiZGVzY3JpcHRpb25cIiBbaW5uZXJIdG1sXT1cImRlc2NyaXB0aW9uIHwgc2FmZUh0bWxcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5nYy10b2FzdC1idXR0b25cIiAqbmdJZj1cImJ1dHRvbnM/Lmxlbmd0aFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJidXR0b24/Lm9uQ2xpY2tlZCgpOyBjbG9zZWQ/LmVtaXQoICRldmVudCApXCI+e3sgYnV0dG9uPy5sYWJlbCB8fCBidXR0b24/LnRpdGxlIH19PC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L25nYy1hbGVydD4iXX0=