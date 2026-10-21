import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CoerceCssPixel } from '@core';
import * as i0 from "@angular/core";
export class NgcDrawerContentComponent {
    get stylePaddingTop() { return this.paddingTop || this.paddingVertical; }
    get stylePaddingBottom() { return this.paddingBottom || this.paddingVertical; }
    get stylePaddingLeft() { return this.paddingLeft || this.paddingHorizontal; }
    get stylePaddingRight() { return this.paddingRight || this.paddingHorizontal; }
}
NgcDrawerContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcDrawerContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcDrawerContentComponent, selector: "ngc-drawer-content, [ngcDrawerContent]", inputs: { paddingVertical: "paddingVertical", paddingHorizontal: "paddingHorizontal", paddingTop: "paddingTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight" }, host: { properties: { "style.--drawer-content-padding-top": "this.stylePaddingTop", "style.--drawer-content-padding-bottom": "this.stylePaddingBottom", "style.--drawer-content-padding-left": "this.stylePaddingLeft", "style.--drawer-content-padding-right": "this.stylePaddingRight" }, classAttribute: "ngc-drawer-content" }, ngImport: i0, template: "<ng-content></ng-content>", styles: [".ngc-drawer-content{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0;order:0;padding-top:var(--drawer-content-padding-top, 0);padding-bottom:var(--drawer-content-padding-bottom, 0);padding-left:var(--drawer-content-padding-left, 0);padding-right:var(--drawer-content-padding-right, 0)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerContentComponent.prototype, "paddingVertical", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerContentComponent.prototype, "paddingHorizontal", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerContentComponent.prototype, "paddingTop", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerContentComponent.prototype, "paddingBottom", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerContentComponent.prototype, "paddingLeft", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerContentComponent.prototype, "paddingRight", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-drawer-content, [ngcDrawerContent]', host: { class: 'ngc-drawer-content' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", styles: [".ngc-drawer-content{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0;order:0;padding-top:var(--drawer-content-padding-top, 0);padding-bottom:var(--drawer-content-padding-bottom, 0);padding-left:var(--drawer-content-padding-left, 0);padding-right:var(--drawer-content-padding-right, 0)}\n"] }]
        }], propDecorators: { stylePaddingTop: [{
                type: HostBinding,
                args: ['style.--drawer-content-padding-top']
            }], stylePaddingBottom: [{
                type: HostBinding,
                args: ['style.--drawer-content-padding-bottom']
            }], stylePaddingLeft: [{
                type: HostBinding,
                args: ['style.--drawer-content-padding-left']
            }], stylePaddingRight: [{
                type: HostBinding,
                args: ['style.--drawer-content-padding-right']
            }], paddingVertical: [{
                type: Input
            }], paddingHorizontal: [{
                type: Input
            }], paddingTop: [{
                type: Input
            }], paddingBottom: [{
                type: Input
            }], paddingLeft: [{
                type: Input
            }], paddingRight: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRyYXdlci1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWRyYXdlci9kcmF3ZXItY29udGVudC9uZ2MtZHJhd2VyLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZHJhd2VyL2RyYXdlci1jb250ZW50L25nYy1kcmF3ZXItY29udGVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFDbkMsdUJBQXVCLEVBQUUsV0FBVyxFQUNwQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sT0FBTyxDQUFDOztBQVV2QyxNQUFNLE9BQU8seUJBQXlCO0lBRXJDLElBQ0ksZUFBZSxLQUFhLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUVqRixJQUNJLGtCQUFrQixLQUFhLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUV2RixJQUNJLGdCQUFnQixLQUFhLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBRXJGLElBQ0ksaUJBQWlCLEtBQWEsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7O3NIQVozRSx5QkFBeUI7MEdBQXpCLHlCQUF5Qiw4bEJDZnRDLDJCQUF5QjtBRDZCeEI7SUFBVSxjQUFjLEVBQUU7O2tFQUFnQztBQUMxRDtJQUFVLGNBQWMsRUFBRTs7b0VBQWtDO0FBQzVEO0lBQVUsY0FBYyxFQUFFOzs2REFBMkI7QUFDckQ7SUFBVSxjQUFjLEVBQUU7O2dFQUE4QjtBQUN4RDtJQUFVLGNBQWMsRUFBRTs7OERBQTRCO0FBQ3REO0lBQVUsY0FBYyxFQUFFOzsrREFBNkI7MkZBbkIzQyx5QkFBeUI7a0JBUnJDLFNBQVM7K0JBQ0csd0NBQXdDLFFBRzNDLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLGlCQUN4QixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUs1QyxlQUFlO3NCQURsQixXQUFXO3VCQUFFLG9DQUFvQztnQkFJOUMsa0JBQWtCO3NCQURyQixXQUFXO3VCQUFFLHVDQUF1QztnQkFJakQsZ0JBQWdCO3NCQURuQixXQUFXO3VCQUFFLHFDQUFxQztnQkFJL0MsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFFLHNDQUFzQztnQkFHbEIsZUFBZTtzQkFBaEQsS0FBSztnQkFDNEIsaUJBQWlCO3NCQUFsRCxLQUFLO2dCQUM0QixVQUFVO3NCQUEzQyxLQUFLO2dCQUM0QixhQUFhO3NCQUE5QyxLQUFLO2dCQUM0QixXQUFXO3NCQUE1QyxLQUFLO2dCQUM0QixZQUFZO3NCQUE3QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29lcmNlQ3NzUGl4ZWwgfSBmcm9tICdAY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtZHJhd2VyLWNvbnRlbnQsIFtuZ2NEcmF3ZXJDb250ZW50XScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLWRyYXdlci1jb250ZW50Lmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1kcmF3ZXItY29udGVudC5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWRyYXdlci1jb250ZW50JyB9LFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0RyYXdlckNvbnRlbnRDb21wb25lbnQge1xuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tZHJhd2VyLWNvbnRlbnQtcGFkZGluZy10b3AnIClcblx0Z2V0IHN0eWxlUGFkZGluZ1RvcCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wYWRkaW5nVG9wIHx8IHRoaXMucGFkZGluZ1ZlcnRpY2FsOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1kcmF3ZXItY29udGVudC1wYWRkaW5nLWJvdHRvbScgKVxuXHRnZXQgc3R5bGVQYWRkaW5nQm90dG9tKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnBhZGRpbmdCb3R0b20gfHwgdGhpcy5wYWRkaW5nVmVydGljYWw7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWRyYXdlci1jb250ZW50LXBhZGRpbmctbGVmdCcgKVxuXHRnZXQgc3R5bGVQYWRkaW5nTGVmdCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wYWRkaW5nTGVmdCB8fCB0aGlzLnBhZGRpbmdIb3Jpem9udGFsOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1kcmF3ZXItY29udGVudC1wYWRkaW5nLXJpZ2h0JyApXG5cdGdldCBzdHlsZVBhZGRpbmdSaWdodCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wYWRkaW5nUmlnaHQgfHwgdGhpcy5wYWRkaW5nSG9yaXpvbnRhbDsgfVxuXG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nVmVydGljYWw6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHBhZGRpbmdIb3Jpem9udGFsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nVG9wOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nQm90dG9tOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nTGVmdDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgcGFkZGluZ1JpZ2h0OiBzdHJpbmc7XG5cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=