import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewEncapsulation, Input, ContentChild, Output, EventEmitter, HostListener, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';
import { DefaultValue, CoerceBoolean } from '@core';
import { NgcMenuItemIconDirective } from '../menu-item-icon/ngc-menu-item-icon.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../ngc-icon/ngc-icon.component";
import * as i3 from "../../ngc-color-picker/color-dot/ngc-color-dot.component";
import * as i4 from "../menu-item-prefix/ngc-menu-item-prefix.directive";
export class NgcMenuItemComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.autoClose = true;
        this.activeChange = new EventEmitter();
        this.clickEventEmitter = new EventEmitter();
        this.focusEventEmitter = new EventEmitter();
        this.blurEventEmitter = new EventEmitter();
        this.clicked$ = new Subject();
    }
    get styleColor() { return this.color; }
    get classDisabled() { return this.disabled; }
    get classActive() { return this.active; }
    get classFocusing() { return this.focusing; }
    triggerClick(event) {
        if (this.disabled || !this.autoClose)
            return;
        this.focusing = false;
        event.stopPropagation();
        this.clicked$.next(event);
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        changes.active && this.activeChange.emit(this.active);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    click(event) {
        this.clickEventEmitter.emit(event);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    focus(event) {
        this.focusing = true;
        this.focusEventEmitter.emit(event);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    blur(event) {
        this.focusing = false;
        this.blurEventEmitter.emit(event);
    }
}
NgcMenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcMenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcMenuItemComponent, selector: "button[ngcMenuItem]", inputs: { icon: "icon", color: "color", iconColor: "iconColor", dotColor: "dotColor", autoClose: "autoClose", active: "active", disabled: "disabled", focusing: "focusing" }, outputs: { activeChange: "activeChange", clickEventEmitter: "click", focusEventEmitter: "focus", blurEventEmitter: "blur" }, host: { listeners: { "click": "triggerClick($event)" }, properties: { "style.--menu-item-color": "this.styleColor", "class.ngc-menu-item--disabled": "this.classDisabled", "class.ngc-menu-item--active": "this.classActive", "class.ngc-menu-item--focusing": "this.classFocusing" }, classAttribute: "ngc-menu-item" }, queries: [{ propertyName: "menuItemIcon", first: true, predicate: NgcMenuItemIconDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"ngc-menu-item__prefix\">\n\t<ng-content select=\"[ngcMenuItemPrefix]\"></ng-content>\n\n\t<ngc-color-dot ngcMenuItemPrefix viewOnly *ngIf=\"dotColor\" [color]=\"dotColor\">\n\t</ngc-color-dot>\n\n\t<ngc-icon ngcMenuItemPrefix *ngIf=\"icon\" size=\"20px\" [name]=\"icon\" [color]=\"iconColor\">\n\t</ngc-icon>\n\n\t<div ngcMenuItemPrefix *ngIf=\"menuItemIcon\">\n\t\t<ng-content select=\"[ngcMenuItemIcon]\"></ng-content>\n\t</div>\n</div>\n\n<div class=\"ngc-menu-item__content\">\n\t<ng-content></ng-content>\n</div>\n\n<div class=\"ngc-menu-item__suffix\">\n\t<ngc-icon ngcMenuItemSuffix *ngIf=\"active\" name=\"check\" size=\"20px\" color=\"primary\">\n\t</ngc-icon>\n\n\t<ng-content select=\"[ngcMenuItemSuffix]\"></ng-content>\n</div>", styles: [".ngc-menu-item{display:flex;align-items:center;padding:8px 10px;min-height:40px;border-radius:8px;border:none;font-weight:var(--ngc-font-weight-semibold, 600);width:100%;cursor:pointer;background:none;text-align:left;color:var(--menu-item-color, inherit)}.ngc-menu-item:not(:last-child){margin-bottom:5px}.ngc-menu-item:not(.ngc-menu-item--disabled):focus-visible,.ngc-menu-item:not(.ngc-menu-item--disabled):hover,.ngc-menu-item:not(.ngc-menu-item--disabled).ngc-menu-item--focusing{background-color:var(--ngc-color-neutral-background-disabled, #f5f5f5)}.ngc-menu-item.ngc-menu-item--disabled{cursor:not-allowed;opacity:.4}.ngc-menu-item.ngc-menu-item--disabled:active{pointer-events:none}.ngc-menu-item .ngc-menu-item__content{display:flex;align-items:center;min-width:0;width:100%}.ngc-menu-item .ngc-menu-item__prefix,.ngc-menu-item .ngc-menu-item__suffix,.ngc-menu-item .ngc-menu-item__prefix [ngcMenuItemPrefix],.ngc-menu-item .ngc-menu-item__suffix [ngcMenuItemSuffix]{display:flex;align-items:center}.ngc-menu-item .ngc-menu-item__prefix:empty,.ngc-menu-item .ngc-menu-item__suffix:empty,.ngc-menu-item .ngc-menu-item__prefix [ngcMenuItemPrefix]:empty,.ngc-menu-item .ngc-menu-item__suffix [ngcMenuItemSuffix]:empty{display:none}.ngc-menu-item .ngc-menu-item__suffix{margin-left:auto}.ngc-menu-item .ngc-menu-item__suffix>*:not(:first-child){margin-left:8px}.ngc-menu-item .ngc-menu-item__prefix [ngcMenuItemPrefix]{margin-right:5px}.ngc-menu-item .ngc-menu-item__suffix [ngcMenuItemSuffix]{margin-left:5px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }, { kind: "component", type: i3.NgcColorDotComponent, selector: "ngc-color-dot, [ngcColorDot]", inputs: ["color", "size", "circle", "viewOnly", "visible", "ngcColorDot"], outputs: ["colorChange"] }, { kind: "directive", type: i4.NgcMenuItemPrefixDirective, selector: "[ngcMenuItemPrefix]", exportAs: ["ngcMenuItemPrefix"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuItemComponent.prototype, "autoClose", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuItemComponent.prototype, "active", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuItemComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMenuItemComponent.prototype, "focusing", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[ngcMenuItem]', host: { class: 'ngc-menu-item' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-menu-item__prefix\">\n\t<ng-content select=\"[ngcMenuItemPrefix]\"></ng-content>\n\n\t<ngc-color-dot ngcMenuItemPrefix viewOnly *ngIf=\"dotColor\" [color]=\"dotColor\">\n\t</ngc-color-dot>\n\n\t<ngc-icon ngcMenuItemPrefix *ngIf=\"icon\" size=\"20px\" [name]=\"icon\" [color]=\"iconColor\">\n\t</ngc-icon>\n\n\t<div ngcMenuItemPrefix *ngIf=\"menuItemIcon\">\n\t\t<ng-content select=\"[ngcMenuItemIcon]\"></ng-content>\n\t</div>\n</div>\n\n<div class=\"ngc-menu-item__content\">\n\t<ng-content></ng-content>\n</div>\n\n<div class=\"ngc-menu-item__suffix\">\n\t<ngc-icon ngcMenuItemSuffix *ngIf=\"active\" name=\"check\" size=\"20px\" color=\"primary\">\n\t</ngc-icon>\n\n\t<ng-content select=\"[ngcMenuItemSuffix]\"></ng-content>\n</div>", styles: [".ngc-menu-item{display:flex;align-items:center;padding:8px 10px;min-height:40px;border-radius:8px;border:none;font-weight:var(--ngc-font-weight-semibold, 600);width:100%;cursor:pointer;background:none;text-align:left;color:var(--menu-item-color, inherit)}.ngc-menu-item:not(:last-child){margin-bottom:5px}.ngc-menu-item:not(.ngc-menu-item--disabled):focus-visible,.ngc-menu-item:not(.ngc-menu-item--disabled):hover,.ngc-menu-item:not(.ngc-menu-item--disabled).ngc-menu-item--focusing{background-color:var(--ngc-color-neutral-background-disabled, #f5f5f5)}.ngc-menu-item.ngc-menu-item--disabled{cursor:not-allowed;opacity:.4}.ngc-menu-item.ngc-menu-item--disabled:active{pointer-events:none}.ngc-menu-item .ngc-menu-item__content{display:flex;align-items:center;min-width:0;width:100%}.ngc-menu-item .ngc-menu-item__prefix,.ngc-menu-item .ngc-menu-item__suffix,.ngc-menu-item .ngc-menu-item__prefix [ngcMenuItemPrefix],.ngc-menu-item .ngc-menu-item__suffix [ngcMenuItemSuffix]{display:flex;align-items:center}.ngc-menu-item .ngc-menu-item__prefix:empty,.ngc-menu-item .ngc-menu-item__suffix:empty,.ngc-menu-item .ngc-menu-item__prefix [ngcMenuItemPrefix]:empty,.ngc-menu-item .ngc-menu-item__suffix [ngcMenuItemSuffix]:empty{display:none}.ngc-menu-item .ngc-menu-item__suffix{margin-left:auto}.ngc-menu-item .ngc-menu-item__suffix>*:not(:first-child){margin-left:8px}.ngc-menu-item .ngc-menu-item__prefix [ngcMenuItemPrefix]{margin-right:5px}.ngc-menu-item .ngc-menu-item__suffix [ngcMenuItemSuffix]{margin-left:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--menu-item-color']
            }], classDisabled: [{
                type: HostBinding,
                args: ['class.ngc-menu-item--disabled']
            }], classActive: [{
                type: HostBinding,
                args: ['class.ngc-menu-item--active']
            }], classFocusing: [{
                type: HostBinding,
                args: ['class.ngc-menu-item--focusing']
            }], menuItemIcon: [{
                type: ContentChild,
                args: [NgcMenuItemIconDirective]
            }], icon: [{
                type: Input
            }], color: [{
                type: Input
            }], iconColor: [{
                type: Input
            }], dotColor: [{
                type: Input
            }], autoClose: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], focusing: [{
                type: Input
            }], activeChange: [{
                type: Output
            }], clickEventEmitter: [{
                type: Output,
                args: ['click']
            }], focusEventEmitter: [{
                type: Output,
                args: ['focus']
            }], blurEventEmitter: [{
                type: Output,
                args: ['blur']
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1tZW51L21lbnUtaXRlbS9uZ2MtbWVudS1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLW1lbnUvbWVudS1pdGVtL25nYy1tZW51LWl0ZW0uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQ3hDLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUMzQixZQUFZLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUN6QixXQUFXLEVBQ3JDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7OztBQVUxRixNQUFNLE9BQU8sb0JBQW9CO0lBZ0NoQzs7O09BR0c7SUFDSCxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBaEJPLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFLMUQsaUJBQVksR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6RCxzQkFBaUIsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNuRSxzQkFBaUIsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNwRSxxQkFBZ0IsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUVwRixhQUFRLEdBQW1CLElBQUksT0FBTyxFQUFTLENBQUM7SUFNVCxDQUFDO0lBbEMvQyxJQUNJLFVBQVUsS0FBYSxPQUFPLElB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dCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sXG5cdElucHV0LCBDb250ZW50Q2hpbGQsIE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0VmFsdWUsIENvZXJjZUJvb2xlYW4gfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY01lbnVJdGVtSWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUtaXRlbS1pY29uL25nYy1tZW51LWl0ZW0taWNvbi5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnYnV0dG9uW25nY01lbnVJdGVtXScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLW1lbnUtaXRlbS5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtbWVudS1pdGVtLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtbWVudS1pdGVtJyB9LFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY01lbnVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLW1lbnUtaXRlbS1jb2xvcicgKVxuXHRnZXQgc3R5bGVDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1tZW51LWl0ZW0tLWRpc2FibGVkJyApXG5cdGdldCBjbGFzc0Rpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5kaXNhYmxlZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1tZW51LWl0ZW0tLWFjdGl2ZScgKVxuXHRnZXQgY2xhc3NBY3RpdmUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmFjdGl2ZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1tZW51LWl0ZW0tLWZvY3VzaW5nJyApXG5cdGdldCBjbGFzc0ZvY3VzaW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5mb2N1c2luZzsgfVxuXG5cdEBDb250ZW50Q2hpbGQoIE5nY01lbnVJdGVtSWNvbkRpcmVjdGl2ZSApIHB1YmxpYyBtZW51SXRlbUljb246IE5nY01lbnVJdGVtSWNvbkRpcmVjdGl2ZTtcblxuXHRASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGljb25Db2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgZG90Q29sb3I6IHN0cmluZztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGF1dG9DbG9zZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGZvY3VzaW5nOiBib29sZWFuO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgYWN0aXZlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cdEBPdXRwdXQoICdjbGljaycgKSBwdWJsaWMgY2xpY2tFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXHRAT3V0cHV0KCAnZm9jdXMnICkgcHVibGljIGZvY3VzRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCggJ2JsdXInICkgcHVibGljIGJsdXJFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG5cdHB1YmxpYyBjbGlja2VkJDogU3ViamVjdDxFdmVudD4gPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudFJlZn0gZWxlbWVudFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmICkge31cblxuXHRASG9zdExpc3RlbmVyKCAnY2xpY2snLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlckNsaWNrKCBldmVudDogRXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmF1dG9DbG9zZSApIHJldHVybjtcblxuXHRcdHRoaXMuZm9jdXNpbmcgPSBmYWxzZTtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuY2xpY2tlZCQubmV4dCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRjaGFuZ2VzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KCB0aGlzLmFjdGl2ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnQ9fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNsaWNrKCBldmVudD86IEV2ZW50ICkge1xuXHRcdHRoaXMuY2xpY2tFdmVudEVtaXR0ZXIuZW1pdCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBmb2N1cyggZXZlbnQ/OiBFdmVudCApIHtcblx0XHR0aGlzLmZvY3VzaW5nID0gdHJ1ZTtcblxuXHRcdHRoaXMuZm9jdXNFdmVudEVtaXR0ZXIuZW1pdCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBibHVyKCBldmVudD86IEV2ZW50ICkge1xuXHRcdHRoaXMuZm9jdXNpbmcgPSBmYWxzZTtcblxuXHRcdHRoaXMuYmx1ckV2ZW50RW1pdHRlci5lbWl0KCBldmVudCApO1xuXHR9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ2MtbWVudS1pdGVtX19wcmVmaXhcIj5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW25nY01lbnVJdGVtUHJlZml4XVwiPjwvbmctY29udGVudD5cblxuXHQ8bmdjLWNvbG9yLWRvdCBuZ2NNZW51SXRlbVByZWZpeCB2aWV3T25seSAqbmdJZj1cImRvdENvbG9yXCIgW2NvbG9yXT1cImRvdENvbG9yXCI+XG5cdDwvbmdjLWNvbG9yLWRvdD5cblxuXHQ8bmdjLWljb24gbmdjTWVudUl0ZW1QcmVmaXggKm5nSWY9XCJpY29uXCIgc2l6ZT1cIjIwcHhcIiBbbmFtZV09XCJpY29uXCIgW2NvbG9yXT1cImljb25Db2xvclwiPlxuXHQ8L25nYy1pY29uPlxuXG5cdDxkaXYgbmdjTWVudUl0ZW1QcmVmaXggKm5nSWY9XCJtZW51SXRlbUljb25cIj5cblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbbmdjTWVudUl0ZW1JY29uXVwiPjwvbmctY29udGVudD5cblx0PC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm5nYy1tZW51LWl0ZW1fX2NvbnRlbnRcIj5cblx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJuZ2MtbWVudS1pdGVtX19zdWZmaXhcIj5cblx0PG5nYy1pY29uIG5nY01lbnVJdGVtU3VmZml4ICpuZ0lmPVwiYWN0aXZlXCIgbmFtZT1cImNoZWNrXCIgc2l6ZT1cIjIwcHhcIiBjb2xvcj1cInByaW1hcnlcIj5cblx0PC9uZ2MtaWNvbj5cblxuXHQ8bmctY29udGVudCBzZWxlY3Q9XCJbbmdjTWVudUl0ZW1TdWZmaXhdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+Il19