import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CoerceCssPixel } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "angular-core";
export class NgcEmojiComponent {
    get styleSize() { return this.size; }
}
NgcEmojiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcEmojiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcEmojiComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcEmojiComponent, selector: "ngc-emoji, [ngcEmoji]", inputs: { emoji: "emoji", size: "size" }, host: { properties: { "style.--emoji-size": "this.styleSize" }, classAttribute: "ngc-emoji" }, ngImport: i0, template: "{{ emoji | emoji }}\n", styles: [".ngc-emoji{display:flex;font-size:var(--emoji-size, inherit);font-family:\"Segoe UI Emoji\",Segoe UI Symbol,Segoe UI,\"Apple Color Emoji\",Twemoji Mozilla,\"Noto Color Emoji\",\"Android Emoji\";font-weight:400!important}\n"], dependencies: [{ kind: "pipe", type: i1.EmojiPipe, name: "emoji" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcEmojiComponent.prototype, "size", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcEmojiComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-emoji, [ngcEmoji]', host: { class: 'ngc-emoji' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "{{ emoji | emoji }}\n", styles: [".ngc-emoji{display:flex;font-size:var(--emoji-size, inherit);font-family:\"Segoe UI Emoji\",Segoe UI Symbol,Segoe UI,\"Apple Color Emoji\",Twemoji Mozilla,\"Noto Color Emoji\",\"Android Emoji\";font-weight:400!important}\n"] }]
        }], propDecorators: { styleSize: [{
                type: HostBinding,
                args: ['style.--emoji-size']
            }], emoji: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWVtb2ppLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWVtb2ppLXBpY2tlci9lbW9qaS9uZ2MtZW1vamkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZW1vamktcGlja2VyL2Vtb2ppL25nYy1lbW9qaS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFDbkMsdUJBQXVCLEVBQUUsV0FBVyxFQUNwQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sT0FBTyxDQUFDOzs7QUFVdkMsTUFBTSxPQUFPLGlCQUFpQjtJQUU3QixJQUNJLFNBQVMsS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs4R0FIakMsaUJBQWlCO2tHQUFqQixpQkFBaUIsc01DZjlCLHVCQUNBO0FEb0JDO0lBQVUsY0FBYyxFQUFFOzsrQ0FBcUI7MkZBTm5DLGlCQUFpQjtrQkFSN0IsU0FBUzsrQkFDRyx1QkFBdUIsUUFHMUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUNmLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07OEJBSzVDLFNBQVM7c0JBRFosV0FBVzt1QkFBRSxvQkFBb0I7Z0JBR2xCLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQzRCLElBQUk7c0JBQXJDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2VyY2VDc3NQaXhlbCB9IGZyb20gJ0Bjb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1lbW9qaSwgW25nY0Vtb2ppXScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLWVtb2ppLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1lbW9qaS5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWVtb2ppJyB9LFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0Vtb2ppQ29tcG9uZW50IHtcblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWVtb2ppLXNpemUnIClcblx0Z2V0IHN0eWxlU2l6ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zaXplOyB9XG5cblx0QElucHV0KCkgcHVibGljIGVtb2ppOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBzaXplOiBzdHJpbmc7XG5cbn1cbiIsInt7IGVtb2ppIHwgZW1vamkgfX1cbiJdfQ==