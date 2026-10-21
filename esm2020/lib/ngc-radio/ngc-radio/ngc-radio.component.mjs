import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ElementRef, HostListener, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { DefaultValue, CoerceBoolean, CoerceCssPixel, CoerceNumber } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgcRadioComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.tabindex = 0;
        this.checkedChange = new EventEmitter();
    }
    get styleColor() { return this.color; }
    get styleBgColor() { return this.bgColor; }
    get styleLabelColor() { return this.labelColor; }
    get styleSize() { return this.size; }
    get classChecked() { return this.checked; }
    get classDisabled() { return this.disabled; }
    get classReadonly() { return this.readonly; }
    get attrTabindex() { return this.tabindex; }
    triggerClick(event) {
        if (this.disabled || this.readonly)
            return;
        event.stopPropagation();
        this.toggle();
    }
    triggerKeyDownSpace(event) {
        if (this.disabled || this.readonly)
            return;
        event.stopPropagation();
        this.toggle();
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.color && this._elementRef.nativeElement.classList.add('ngc-' + this.color);
    }
    /**
     * @return {void}
     */
    toggle() {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    }
}
NgcRadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRadioComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcRadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcRadioComponent, selector: "ngc-radio", inputs: { value: "value", label: "label", color: "color", bgColor: "bgColor", labelColor: "labelColor", size: "size", tabindex: "tabindex", checked: "checked", disabled: "disabled", readonly: "readonly" }, outputs: { checkedChange: "checkedChange" }, host: { listeners: { "click": "triggerClick($event)", "keydown.space": "triggerKeyDownSpace($event)" }, properties: { "style.--radio-color": "this.styleColor", "style.--radio-bg-color": "this.styleBgColor", "style.--radio-label-color": "this.styleLabelColor", "style.--radio-size": "this.styleSize", "class.ngc-radio--checked": "this.classChecked", "class.ngc-radio--disabled": "this.classDisabled", "class.ngc-radio--readonly": "this.classReadonly", "attr.tabindex": "this.attrTabindex" }, classAttribute: "ngc-radio" }, ngImport: i0, template: "<div class=\"ngc-radio__circle\"></div>\n<div class=\"ngc-radio__label\">\n    {{ label }}\n    <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n    </ng-container>\n</div>", styles: [".ngc-radio{display:flex;cursor:pointer;width:fit-content}.ngc-radio.ngc-primary.ngc-radio--checked:not(.ngc-radio--disabled) .ngc-radio__circle:after{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-radio.ngc-radio--checked .ngc-radio__circle:after{opacity:1;visibility:visible}.ngc-radio.ngc-radio--readonly{cursor:default}.ngc-radio:not(.ngc-radio--disabled):hover .ngc-radio__circle{border-color:var(--ngc-color-neutral-border-strong, #babcc0)}.ngc-radio:not(.ngc-radio--disabled):focus-visible .ngc-radio__circle{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4));border-color:var(--ngc-color-neutral-border-strong, #8e8e93)}.ngc-radio.ngc-radio--disabled{cursor:not-allowed}.ngc-radio.ngc-radio--disabled:active{pointer-events:none}.ngc-radio.ngc-radio--disabled .ngc-radio__circle{background-color:var(--ngc-color-neutral-background-canvas, #fafafa)}.ngc-radio.ngc-radio--disabled .ngc-radio__circle:after{background-color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-radio.ngc-radio--disabled .ngc-radio__label{color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-radio .ngc-radio__circle{display:flex;align-items:center;justify-content:center;height:var(--radio-size, 18px);min-height:var(--radio-size, 18px);max-height:var(--radio-size, 18px);width:var(--radio-size, 18px);min-width:var(--radio-size, 18px);max-width:var(--radio-size, 18px);border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-radius:50%;position:relative;background-color:var(--radio-bg-color, var(--ngc-color-neutral-white, #fff));padding:4px}.ngc-radio .ngc-radio__circle:after{content:\"\";background-color:var(--radio-color, var(--ngc-color-neutral-black, #0a0a0a));width:100%;min-width:100%;max-width:100%;height:100%;min-height:100%;max-height:100%;border-radius:50%;animation:30ms ease-in forwards popupAnimation;opacity:0;visibility:hidden;transition:opacity .1s ease-in-out}.ngc-radio .ngc-radio__label{display:flex;align-items:center;font-weight:var(--ngc-font-weight-semibold, 600);margin-left:10px;color:var(--radio-label-color, inherit)}.ngc-radio .ngc-radio__label:empty{display:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcRadioComponent.prototype, "size", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcRadioComponent.prototype, "tabindex", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRadioComponent.prototype, "checked", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRadioComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRadioComponent.prototype, "readonly", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-radio', host: { class: 'ngc-radio' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-radio__circle\"></div>\n<div class=\"ngc-radio__label\">\n    {{ label }}\n    <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n    </ng-container>\n</div>", styles: [".ngc-radio{display:flex;cursor:pointer;width:fit-content}.ngc-radio.ngc-primary.ngc-radio--checked:not(.ngc-radio--disabled) .ngc-radio__circle:after{background-color:var(--primary-color, var(--ngc-color-primary-default, #444446))}.ngc-radio.ngc-radio--checked .ngc-radio__circle:after{opacity:1;visibility:visible}.ngc-radio.ngc-radio--readonly{cursor:default}.ngc-radio:not(.ngc-radio--disabled):hover .ngc-radio__circle{border-color:var(--ngc-color-neutral-border-strong, #babcc0)}.ngc-radio:not(.ngc-radio--disabled):focus-visible .ngc-radio__circle{box-shadow:var(--ngc-box-shadow-focus, 0 14px 24px -4px rgba(228, 228, 228, .4));border-color:var(--ngc-color-neutral-border-strong, #8e8e93)}.ngc-radio.ngc-radio--disabled{cursor:not-allowed}.ngc-radio.ngc-radio--disabled:active{pointer-events:none}.ngc-radio.ngc-radio--disabled .ngc-radio__circle{background-color:var(--ngc-color-neutral-background-canvas, #fafafa)}.ngc-radio.ngc-radio--disabled .ngc-radio__circle:after{background-color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-radio.ngc-radio--disabled .ngc-radio__label{color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-radio .ngc-radio__circle{display:flex;align-items:center;justify-content:center;height:var(--radio-size, 18px);min-height:var(--radio-size, 18px);max-height:var(--radio-size, 18px);width:var(--radio-size, 18px);min-width:var(--radio-size, 18px);max-width:var(--radio-size, 18px);border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-radius:50%;position:relative;background-color:var(--radio-bg-color, var(--ngc-color-neutral-white, #fff));padding:4px}.ngc-radio .ngc-radio__circle:after{content:\"\";background-color:var(--radio-color, var(--ngc-color-neutral-black, #0a0a0a));width:100%;min-width:100%;max-width:100%;height:100%;min-height:100%;max-height:100%;border-radius:50%;animation:30ms ease-in forwards popupAnimation;opacity:0;visibility:hidden;transition:opacity .1s ease-in-out}.ngc-radio .ngc-radio__label{display:flex;align-items:center;font-weight:var(--ngc-font-weight-semibold, 600);margin-left:10px;color:var(--radio-label-color, inherit)}.ngc-radio .ngc-radio__label:empty{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--radio-color']
            }], styleBgColor: [{
                type: HostBinding,
                args: ['style.--radio-bg-color']
            }], styleLabelColor: [{
                type: HostBinding,
                args: ['style.--radio-label-color']
            }], styleSize: [{
                type: HostBinding,
                args: ['style.--radio-size']
            }], classChecked: [{
                type: HostBinding,
                args: ['class.ngc-radio--checked']
            }], classDisabled: [{
                type: HostBinding,
                args: ['class.ngc-radio--disabled']
            }], classReadonly: [{
                type: HostBinding,
                args: ['class.ngc-radio--readonly']
            }], attrTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], value: [{
                type: Input
            }], label: [{
                type: Input
            }], color: [{
                type: Input
            }], bgColor: [{
                type: Input
            }], labelColor: [{
                type: Input
            }], size: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], triggerKeyDownSpace: [{
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXJhZGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXJhZGlvL25nYy1yYWRpby9uZ2MtcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtcmFkaW8vbmdjLXJhZGlvL25nYy1yYWRpby5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3hCLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQzVCLFlBQVksRUFBRSx1QkFBdUIsRUFDcEQsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7OztBQVVsRixNQUFNLE9BQU8saUJBQWlCO0lBdUM3Qjs7O09BR0c7SUFDSCxZQUFxQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVhJLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFLcEQsa0JBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQU1wQyxDQUFDO0lBekNqRCxJQUNJLFVBQVUsS0FBYSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRS9DLElBQ0ksWUFBWSxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFbkQsSUFDSSxlQUFlLEtBQWEsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUV6RCxJQUNJLFNBQVMsS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTdDLElBQ0ksWUFBWSxLQUFjLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxD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XHRFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLFxuXHRBZnRlclZpZXdJbml0LCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVmYXVsdFZhbHVlLCBDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCwgQ29lcmNlTnVtYmVyIH0gZnJvbSAnQGNvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLXJhZGlvJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtcmFkaW8uaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLXJhZGlvLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtcmFkaW8nIH0sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLXJhZGlvLWNvbG9yJyApXG5cdGdldCBzdHlsZUNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1yYWRpby1iZy1jb2xvcicgKVxuXHRnZXQgc3R5bGVCZ0NvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmJnQ29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLXJhZGlvLWxhYmVsLWNvbG9yJyApXG5cdGdldCBzdHlsZUxhYmVsQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubGFiZWxDb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tcmFkaW8tc2l6ZScgKVxuXHRnZXQgc3R5bGVTaXplKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnNpemU7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtcmFkaW8tLWNoZWNrZWQnIClcblx0Z2V0IGNsYXNzQ2hlY2tlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY2hlY2tlZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1yYWRpby0tZGlzYWJsZWQnIClcblx0Z2V0IGNsYXNzRGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRpc2FibGVkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLXJhZGlvLS1yZWFkb25seScgKVxuXHRnZXQgY2xhc3NSZWFkb25seSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucmVhZG9ubHk7IH1cblxuXHRASG9zdEJpbmRpbmcoICdhdHRyLnRhYmluZGV4JyApXG5cdGdldCBhdHRyVGFiaW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudGFiaW5kZXg7IH1cblxuXHRASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgYmdDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWxDb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyB0YWJpbmRleDogbnVtYmVyID0gMDtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgY2hlY2tlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdjbGljaycsIFsgJyRldmVudCcgXSApXG5cdHB1YmxpYyB0cmlnZ2VyQ2xpY2soIGV2ZW50OiBNb3VzZUV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5ICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy50b2dnbGUoKTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLnNwYWNlJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJLZXlEb3duU3BhY2UoIGV2ZW50OiBLZXlib2FyZEV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5ICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy50b2dnbGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmNvbG9yICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnbmdjLScgKyB0aGlzLmNvbG9yICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyB0b2dnbGUoKSB7XG5cdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblxuXHRcdHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KCB0aGlzLmNoZWNrZWQgKTtcblx0fVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibmdjLXJhZGlvX19jaXJjbGVcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJuZ2MtcmFkaW9fX2xhYmVsXCI+XG4gICAge3sgbGFiZWwgfX1cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PiJdfQ==