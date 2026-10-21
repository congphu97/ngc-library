var NgcRadioGroupComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, Input, ContentChildren, QueryList, ViewEncapsulation, forwardRef, HostListener, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { startWith, takeUntil } from 'rxjs/operators';
import _ from 'lodash';
import { Unsubscriber, CoerceBoolean, DefaultValue, untilCmpDestroyed } from '@core';
import { NgcRadioComponent } from '../ngc-radio/ngc-radio.component';
import * as i0 from "@angular/core";
let NgcRadioGroupComponent = NgcRadioGroupComponent_1 = class NgcRadioGroupComponent {
    constructor() {
        this.direction = 'vertical';
        this.ngModelChange = new EventEmitter();
        this._onTouchedCallback = () => { };
        this._onChangeCallback = (_v) => { };
    }
    get classVertical() { return this.direction === 'vertical'; }
    get classHorizontal() { return this.direction === 'horizontal'; }
    triggerClick(event) {
        if (this.disabled || this.disableControl || this.readonly || !this.formControl)
            return;
        event.stopPropagation();
        this.formControl.markAsTouched();
    }
    /**
     * @constructor
     * @param {any} value
     */
    writeValue(value) {
        if (value === this._innerValue)
            return;
        this._innerValue = value;
    }
    /**
     * @constructor
     * @param {Function} fn
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @constructor
     * @param {Function} fn
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.ngModel)
            return;
        _.forEach(this.radioList?.toArray(), (item) => {
            item.checked = item.value !== undefined && item.value === this.ngModel;
        });
    }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        this.radioList
            .changes
            .pipe(startWith(this.radioList), untilCmpDestroyed(this))
            .subscribe((items) => {
            const itemArr = items?.toArray();
            _.forEach(itemArr, (item, index) => {
                item.checked = item.value !== undefined && item.value === this.ngModel;
                item.disabled = item.disabled || this.disabled || this.disableControl;
                item.readonly = item.readonly || this.readonly;
                item
                    .checkedChange
                    .pipe(takeUntil(this.radioList.changes), untilCmpDestroyed(this))
                    .subscribe((checked) => {
                    if (!checked) {
                        item.checked = true;
                        return;
                    }
                    this._innerValue = this.ngModel = item.value;
                    _.forEach(itemArr, (_item, _index) => {
                        _item.checked = index === _index;
                    });
                    this._onTouchedCallback();
                    this._onChangeCallback(this._innerValue);
                });
            });
        });
    }
};
NgcRadioGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRadioGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcRadioGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcRadioGroupComponent, selector: "ngc-radio-group", inputs: { ngModel: "ngModel", label: "label", disableControl: "disableControl", disabled: "disabled", readonly: "readonly", required: "required", direction: "direction", formControl: "formControl" }, outputs: { ngModelChange: "ngModelChange" }, host: { listeners: { "click": "triggerClick($event)" }, properties: { "class.ngc-radio-group--vertical": "this.classVertical", "class.ngc-radio-group--horizontal": "this.classHorizontal" }, classAttribute: "ngc-radio-group" }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgcRadioGroupComponent_1),
            multi: true,
        }], queries: [{ propertyName: "radioList", predicate: NgcRadioComponent, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<label class=\"ngc-radio-group__label\" ngcTruncate [attr.required]=\"required || undefined\">\n    {{ label }}\n</label>\n<ng-content></ng-content>", styles: [".ngc-radio-group{display:flex}.ngc-radio-group.ngc-radio-group--vertical{flex-direction:column}.ngc-radio-group.ngc-radio-group--vertical .ngc-radio-group__label{margin-bottom:5px}.ngc-radio-group.ngc-radio-group--vertical .ngc-radio:not(:last-child){margin-bottom:10px}.ngc-radio-group.ngc-radio-group--horizontal{flex-wrap:wrap;align-items:center}.ngc-radio-group.ngc-radio-group--horizontal .ngc-radio-group__label{margin-right:5px}.ngc-radio-group.ngc-radio-group--horizontal .ngc-radio:not(:last-child){margin-right:10px}.ngc-radio-group .ngc-radio-group__label{margin-bottom:5px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRadioGroupComponent.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRadioGroupComponent.prototype, "readonly", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcRadioGroupComponent.prototype, "required", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcRadioGroupComponent.prototype, "direction", void 0);
NgcRadioGroupComponent = NgcRadioGroupComponent_1 = __decorate([
    Unsubscriber()
], NgcRadioGroupComponent);
export { NgcRadioGroupComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-radio-group', host: { class: 'ngc-radio-group' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NgcRadioGroupComponent),
                            multi: true,
                        }], template: "<label class=\"ngc-radio-group__label\" ngcTruncate [attr.required]=\"required || undefined\">\n    {{ label }}\n</label>\n<ng-content></ng-content>", styles: [".ngc-radio-group{display:flex}.ngc-radio-group.ngc-radio-group--vertical{flex-direction:column}.ngc-radio-group.ngc-radio-group--vertical .ngc-radio-group__label{margin-bottom:5px}.ngc-radio-group.ngc-radio-group--vertical .ngc-radio:not(:last-child){margin-bottom:10px}.ngc-radio-group.ngc-radio-group--horizontal{flex-wrap:wrap;align-items:center}.ngc-radio-group.ngc-radio-group--horizontal .ngc-radio-group__label{margin-right:5px}.ngc-radio-group.ngc-radio-group--horizontal .ngc-radio:not(:last-child){margin-right:10px}.ngc-radio-group .ngc-radio-group__label{margin-bottom:5px}\n"] }]
        }], propDecorators: { classVertical: [{
                type: HostBinding,
                args: ['class.ngc-radio-group--vertical']
            }], classHorizontal: [{
                type: HostBinding,
                args: ['class.ngc-radio-group--horizontal']
            }], radioList: [{
                type: ContentChildren,
                args: [NgcRadioComponent, { descendants: true }]
            }], ngModel: [{
                type: Input
            }], label: [{
                type: Input
            }], disableControl: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], direction: [{
                type: Input
            }], formControl: [{
                type: Input
            }], ngModelChange: [{
                type: Output
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXJhZGlvL25nYy1yYWRpby1ncm91cC9uZ2MtcmFkaW8tZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtcmFkaW8vbmdjLXJhZGlvLWdyb3VwL25nYy1yYWRpby1ncm91cC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUNqQyxTQUFTLEVBQW9CLGlCQUFpQixFQUM5QyxVQUFVLEVBQ1YsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ2xDLHVCQUF1QixFQUFFLFdBQVcsRUFDcEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBa0I5RCxJQUFNLHNCQUFzQiw4QkFBNUIsTUFBTSxzQkFBc0I7SUFBNUI7UUFnQjBCLGNBQVMsR0FBMkIsVUFBVSxDQUFDO1FBRzlELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUE0RnBFLHVCQUFrQixHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN4QyxzQkFBaUIsR0FBYSxDQUFFLEVBQU8sRUFBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBRXhEO0lBaEhBLElBQ0ksYUFBYSxLQUFjLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRXRFLElBQ0ksZUFBZSxLQUFjLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBa0JuRSxZQUFZLENBQUUsS0FBaUI7UUFDckMsSUFBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUcsT0FBTztRQUV6RixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksVUFBVSxDQUFFLEtBQVU7UUFDNUIsSUFBSyxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVc7WUFBRyxPQUFPO1FBRXpDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQkFBZ0IsQ0FBRSxFQUFZO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlCQUFpQixDQUFFLEVBQVk7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFFLE9BQXNCO1FBQ2xDLElBQUssQ0FBQyxPQUFPLENBQUMsT0FBTztZQUFHLE9BQU87UUFFL0IsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUUsSUFBdUIsRUFBRyxFQUFFO1lBQ25FLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hFLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxTQUFTO2FBQ2IsT0FBTzthQUNQLElBQUksQ0FDSixTQUFTLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxFQUMzQixpQkFBaUIsQ0FBRSxJQUFJLENBQUUsQ0FDekI7YUFDQSxTQUFTLENBQUUsQ0FBRSxLQUFtQyxFQUFHLEVBQUU7WUFDckQsTUFBTSxPQUFPLEdBQXdCLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUV0RCxDQUFDLENBQUMsT0FBTyxDQUFFLE9BQU8sRUFBRSxDQUFFLElBQXVCLEVBQUUsS0FBYSxFQUFHLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFFL0MsSUFBSTtxQkFDSCxhQUFhO3FCQUNiLElBQUksQ0FDSixTQUFTLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUUsRUFDbkMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQ3pCO3FCQUNBLFNBQVMsQ0FBRSxDQUFFLE9BQWdCLEVBQUcsRUFBRTtvQkFDbEMsSUFBSyxDQUFDLE9BQU8sRUFBRzt3QkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDcEIsT0FBTztxQkFDUDtvQkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFFN0MsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxPQUFPLEVBQUUsQ0FBRSxLQUF3QixFQUFFLE1BQWMsRUFBRyxFQUFFO3dCQUNsRSxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxNQUFNLENBQUM7b0JBQ2xDLENBQUMsQ0FBRSxDQUFDO29CQUNKLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUUsQ0FBQztZQUNMLENBQUMsQ0FBRSxDQUFDO1FBQ0wsQ0FBQyxDQUFFLENBQUM7SUFDTCxDQUFDOzttSEE3R1csc0JBQXNCO3VHQUF0QixzQkFBc0Isa2dCQU52QixDQUFDO1lBQ1gsT0FBTyxFQUFJLGlCQUFpQjtZQUM1QixXQUFXLEVBQUcsVUFBVSxDQUFFLEdBQUcsRUFBRSxDQUFDLHdCQUFzQixDQUFFO1lBQ3hELEtBQUssRUFBSSxJQUFJO1NBQ2IsQ0FBQyxvREFVZ0IsaUJBQWlCLHFFQ3RDcEMsc0pBR3lCO0FEd0N4QjtJQUFVLGFBQWEsRUFBRTs7d0RBQTBCO0FBQ25EO0lBQVUsYUFBYSxFQUFFOzt3REFBMEI7QUFDbkQ7SUFBVSxhQUFhLEVBQUU7O3dEQUEwQjtBQUNuRDtJQUFVLFlBQVksRUFBRTs7eURBQXVEO0FBaEJuRSxzQkFBc0I7SUFkbEMsWUFBWSxFQUFFO0dBY0Ysc0JBQXNCLENBa0hsQztTQWxIWSxzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFibEMsU0FBUzsrQkFDRyxpQkFBaUIsUUFHcEIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsaUJBQ3JCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sYUFDckMsQ0FBQzs0QkFDWCxPQUFPLEVBQUksaUJBQWlCOzRCQUM1QixXQUFXLEVBQUcsVUFBVSxDQUFFLEdBQUcsRUFBRSx1QkFBdUIsQ0FBRTs0QkFDeEQsS0FBSyxFQUFJLElBQUk7eUJBQ2IsQ0FBQzs4QkFLRSxhQUFhO3NCQURoQixXQUFXO3VCQUFFLGlDQUFpQztnQkFJM0MsZUFBZTtzQkFEbEIsV0FBVzt1QkFBRSxtQ0FBbUM7Z0JBR21CLFNBQVM7c0JBQTVFLGVBQWU7dUJBQUUsaUJBQWlCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQUUxQyxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsY0FBYztzQkFBN0IsS0FBSztnQkFDMkIsUUFBUTtzQkFBeEMsS0FBSztnQkFDMkIsUUFBUTtzQkFBeEMsS0FBSztnQkFDMkIsUUFBUTtzQkFBeEMsS0FBSztnQkFDMEIsU0FBUztzQkFBeEMsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUVXLGFBQWE7c0JBQTdCLE1BQU07Z0JBS0EsWUFBWTtzQkFEbEIsWUFBWTt1QkFBRSxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sXG5cdFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sXG5cdGZvcndhcmRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyxcblx0SG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgVW5zdWJzY3JpYmVyLCBDb2VyY2VCb29sZWFuLCBEZWZhdWx0VmFsdWUsIHVudGlsQ21wRGVzdHJveWVkIH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgTmdjUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi9uZ2MtcmFkaW8vbmdjLXJhZGlvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE5nY1JhZGlvR3JvdXBEaXJlY3Rpb24gPSAndmVydGljYWwnIHwgJ2hvcml6b250YWwnO1xuXG5AVW5zdWJzY3JpYmVyKClcbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtcmFkaW8tZ3JvdXAnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1yYWRpby1ncm91cC5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtcmFkaW8tZ3JvdXAuc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy1yYWRpby1ncm91cCcgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZVx0XHQ6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdHVzZUV4aXN0aW5nXHQ6IGZvcndhcmRSZWYoICgpID0+IE5nY1JhZGlvR3JvdXBDb21wb25lbnQgKSxcblx0XHRtdWx0aVx0XHQ6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLXJhZGlvLWdyb3VwLS12ZXJ0aWNhbCcgKVxuXHRnZXQgY2xhc3NWZXJ0aWNhbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLXJhZGlvLWdyb3VwLS1ob3Jpem9udGFsJyApXG5cdGdldCBjbGFzc0hvcml6b250YWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnOyB9XG5cblx0QENvbnRlbnRDaGlsZHJlbiggTmdjUmFkaW9Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSApIHB1YmxpYyByYWRpb0xpc3Q6IFF1ZXJ5TGlzdDxOZ2NSYWRpb0NvbXBvbmVudD47XG5cblx0QElucHV0KCkgcHVibGljIG5nTW9kZWw6IGFueTtcblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlQ29udHJvbDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBkaXJlY3Rpb246IE5nY1JhZGlvR3JvdXBEaXJlY3Rpb24gPSAndmVydGljYWwnO1xuXHRASW5wdXQoKSBwdWJsaWMgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRwcml2YXRlIF9pbm5lclZhbHVlOiBhbnk7XG5cblx0QEhvc3RMaXN0ZW5lciggJ2NsaWNrJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJDbGljayggZXZlbnQ6IE1vdXNlRXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZUNvbnRyb2wgfHwgdGhpcy5yZWFkb25seSB8fCAhdGhpcy5mb3JtQ29udHJvbCApIHJldHVybjtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge2FueX0gdmFsdWVcblx0ICovXG5cdHB1YmxpYyB3cml0ZVZhbHVlKCB2YWx1ZTogYW55ICkge1xuXHRcdGlmICggdmFsdWUgPT09IHRoaXMuX2lubmVyVmFsdWUgKSByZXR1cm47XG5cblx0XHR0aGlzLl9pbm5lclZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG5cdCAqL1xuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZSggZm46IEZ1bmN0aW9uICkge1xuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cblx0ICovXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCggZm46IEZ1bmN0aW9uICkge1xuXHRcdHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0aWYgKCAhY2hhbmdlcy5uZ01vZGVsICkgcmV0dXJuO1xuXG5cdFx0Xy5mb3JFYWNoKCB0aGlzLnJhZGlvTGlzdD8udG9BcnJheSgpLCAoIGl0ZW06IE5nY1JhZGlvQ29tcG9uZW50ICkgPT4ge1xuXHRcdFx0aXRlbS5jaGVja2VkID0gaXRlbS52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0udmFsdWUgPT09IHRoaXMubmdNb2RlbDtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0dGhpcy5yYWRpb0xpc3Rcblx0XHQuY2hhbmdlc1xuXHRcdC5waXBlKFxuXHRcdFx0c3RhcnRXaXRoKCB0aGlzLnJhZGlvTGlzdCApLFxuXHRcdFx0dW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKVxuXHRcdClcblx0XHQuc3Vic2NyaWJlKCAoIGl0ZW1zOiBRdWVyeUxpc3Q8TmdjUmFkaW9Db21wb25lbnQ+ICkgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbUFycjogTmdjUmFkaW9Db21wb25lbnRbXSA9IGl0ZW1zPy50b0FycmF5KCk7XG5cblx0XHRcdF8uZm9yRWFjaCggaXRlbUFyciwgKCBpdGVtOiBOZ2NSYWRpb0NvbXBvbmVudCwgaW5kZXg6IG51bWJlciApID0+IHtcblx0XHRcdFx0aXRlbS5jaGVja2VkID0gaXRlbS52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0udmFsdWUgPT09IHRoaXMubmdNb2RlbDtcblx0XHRcdFx0aXRlbS5kaXNhYmxlZCA9IGl0ZW0uZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVDb250cm9sO1xuXHRcdFx0XHRpdGVtLnJlYWRvbmx5ID0gaXRlbS5yZWFkb25seSB8fCB0aGlzLnJlYWRvbmx5O1xuXG5cdFx0XHRcdGl0ZW1cblx0XHRcdFx0LmNoZWNrZWRDaGFuZ2Vcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0dGFrZVVudGlsKCB0aGlzLnJhZGlvTGlzdC5jaGFuZ2VzICksXG5cdFx0XHRcdFx0dW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoICggY2hlY2tlZDogYm9vbGVhbiApID0+IHtcblx0XHRcdFx0XHRpZiAoICFjaGVja2VkICkge1xuXHRcdFx0XHRcdFx0aXRlbS5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl9pbm5lclZhbHVlID0gdGhpcy5uZ01vZGVsID0gaXRlbS52YWx1ZTtcblxuXHRcdFx0XHRcdF8uZm9yRWFjaCggaXRlbUFyciwgKCBfaXRlbTogTmdjUmFkaW9Db21wb25lbnQsIF9pbmRleDogbnVtYmVyICkgPT4ge1xuXHRcdFx0XHRcdFx0X2l0ZW0uY2hlY2tlZCA9IGluZGV4ID09PSBfaW5kZXg7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG5cdFx0XHRcdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjayggdGhpcy5faW5uZXJWYWx1ZSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0cHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cdHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IEZ1bmN0aW9uID0gKCBfdjogYW55ICkgPT4ge307XG5cbn1cbiIsIjxsYWJlbCBjbGFzcz1cIm5nYy1yYWRpby1ncm91cF9fbGFiZWxcIiBuZ2NUcnVuY2F0ZSBbYXR0ci5yZXF1aXJlZF09XCJyZXF1aXJlZCB8fCB1bmRlZmluZWRcIj5cbiAgICB7eyBsYWJlbCB9fVxuPC9sYWJlbD5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=