import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, HostListener, EventEmitter, Output, forwardRef, Renderer2, Optional, Inject, HostBinding } from '@angular/core';
import { FormControl, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import moment from 'moment-timezone';
import _ from 'lodash';
import { DATE_TIME_CONFIG, DateTimeConfig, DefaultValue, CoerceBoolean, CoerceCssPixel, CoerceNumber, Memoize } from '@core';
import { CONSTANT as APP_CONSTANT } from '@resources';
import * as i0 from "@angular/core";
import * as i1 from "@core";
const yearsRegex = /([0-9]+)[ ]?(y(ears?)?)/gi;
const monthsRegex = /([0-9]+)[ ]?(mon(ths?)?)/gi;
const weeksRegex = /([0-9]+)[ ]?(w(eeks?)?)/gi;
const daysRegex = /([0-9]+)[ ]?(d(ays?)?)/gi;
const hoursRegex = /([0-9]+)[ ]?(h(ours?)?)/gi;
const minsRegex = /([0-9]+)[ ]?(m(in(ute)?s?)?)/gi;
const secondsRegex = /([0-9]+)[ ]?(s(ec(ond)?s?)?)/gi;
const TRIM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgcFormFieldInputDirective),
    multi: true,
};
export class NgcFormFieldInputDirective extends DefaultValueAccessor {
    /**
     * @constructor
     * @param {Renderer2} renderer
     * @param {ElementRef} elementRef
     * @param {DateTimeConfig} _dateTimeConfig
     */
    constructor(renderer, elementRef, _dateTimeConfig) {
        super(renderer, elementRef, undefined);
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._dateTimeConfig = _dateTimeConfig;
        this.type = 'text';
        this.trim = true;
        this.alignment = 'left';
        this.ngModelChange = new EventEmitter();
        this.changed = new EventEmitter();
        this.saved = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.cleared = new EventEmitter();
        this.pasted = new EventEmitter();
        this.converted = new EventEmitter();
        this.changes$ = new Subject();
        this.focus$ = new Subject();
    }
    get attrDisabled() { return this.disabled || this.isDisabledFromFormField || undefined; }
    get attrReadonly() { return this.readonly || undefined; }
    get attrRequired() { return this.required || undefined; }
    get attr() { return this.type; }
    get timeFormat() {
        return this._timeFormat || this._dateTimeConfig.timeFormat || APP_CONSTANT.TIME_FORMAT;
    }
    set timeFormat(value) {
        this._timeFormat = value;
    }
    get value() {
        return this.elementRef.nativeElement.value;
    }
    set value(value) {
        // eslint-disable-next-line eqeqeq
        if (value == this.elementRef.nativeElement.value)
            return;
        this.elementRef.nativeElement.value = value;
    }
    get isTextarea() { return this.elementRef.nativeElement instanceof HTMLTextAreaElement; }
    get isNumberInput() { return this.type === 'number' || this.type === 'range'; }
    get hasValue() { return this._checkValidValue(this.value); }
    triggerFocus(event) {
        if (this.disabled || this.disableControl) {
            event.preventDefault();
            this.blur(event);
            return;
        }
        this.focusing = true;
        this._bkValue = this._checkValidValue(this._bkValue) ? this._bkValue : this.value;
        this.hasValue ? this.formControl?.markAsTouched() : this.formControl?.markAsUntouched();
        this.focus$.next(true);
    }
    triggerBlur(value) {
        this.focusing = false;
        this.onTouched();
        this.focus$.next(false);
        switch (this.convertType) {
            case 'time-string':
                this._convertTimeString();
                break;
            case 'hour-string':
                this._convertHourString();
                break;
            default:
                this.writeValue(value);
                this.onChanged(value);
        }
    }
    triggerInput() {
        this.formControl?.markAsTouched();
        this.onTouched();
        this.changes$.next(this.value);
    }
    triggerKeyDownEnter(event) {
        if (this.saveable) {
            event.stopPropagation();
            this.save(event);
        }
    }
    triggerKeyDownEsc(event) {
        if (this.cancelable) {
            event.stopPropagation();
            this.cancel(event);
        }
        if (this.clearable) {
            event.stopPropagation();
            this.clear(event);
        }
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.ngModel)
            return;
        this._bkValue = this.value = this.ngModel;
        // this._bkValue = this._checkValidValue( this.ngModel ) ? this.ngModel : this.value;
        this.changes$.next(this.value);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.elementRef.nativeElement.removeEventListener('paste', undefined);
        this.elementRef.nativeElement.addEventListener('paste', (event) => {
            this.pasted.emit(event);
        });
    }
    /**
     * @constructor
     * @param {any} value
     */
    onChanged(value) {
        // Serialize value
        value = this._serialize(value);
        // Trim value
        value = this._trim(value);
        // Trigger value change
        this.onChange(value);
        this.changed.emit(value);
        this.changes$.next(value);
    }
    /**
     * @constructor
     * @param {any} value
     */
    writeValue(value) {
        // Serialize value
        value = this._serialize(value);
        // Trim value
        value = this._trim(value);
        // Write new value
        value !== this.value && super.writeValue(value);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    focus(event) {
        this.elementRef.nativeElement.focus(event);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    blur(event) {
        this.elementRef.nativeElement.blur(event);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    save(event) {
        if (this.formControl?.invalid)
            return;
        this.blur(event);
        this.saved.emit(this.value);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    cancel(event) {
        const value = this._bkValue;
        this._bkValue = undefined;
        this.blur(event);
        this.writeValue(value);
        this.onChanged(value);
        this.cancelled.emit(value);
    }
    /**
     * @param {Event=} event
     * @return {void}
     */
    clear(event) {
        const value = this._serialize('');
        !this.hasValue && this.blur(event);
        this.writeValue(value);
        this.onChanged(value);
        this.cleared.emit(value);
    }
    /**
     * @param {any} value
     * @return {boolean}
     */
    _checkValidValue(value) {
        if (_.isNumber(value))
            return _.isFinite(value);
        if (_.isString(value))
            return !!_.trim(value).length;
        return false;
    }
    /**
     * @param {any} value
     * @return {any}
     */
    _trim(value) {
        return this.trim && this.type !== 'password' && _.isString(value) ? _.trim(value) : value;
    }
    /**
     * @param {any} value
     * @return {any}
     */
    _serialize(value) {
        if (!this.isNumberInput || !this.hasValue)
            return value;
        value = parseFloat(value);
        if (_.isFinite(this.min) && value < this.min)
            value = this.min;
        if (_.isFinite(this.max) && value > this.max)
            value = this.max;
        return _.isFinite(value) ? value : null;
    }
    /**
     * @return {void}
     */
    _convertTimeString() {
        let value = this.value;
        let hour = 0;
        let min = 0;
        let sec = 0;
        let totalMins = 0;
        let totalSeconds = 0;
        let totalMiliseconds = 0;
        // Years matching
        _.forEach(_.matchAll(yearsRegex, value), (yearsMatch) => {
            hour += Number(yearsMatch[1]) * 8765;
        });
        value = _.replace(value, yearsRegex, '');
        // Months matching
        _.forEach(_.matchAll(monthsRegex, value), (monthsMatch) => {
            hour += Number(monthsMatch[1]) * 720;
        });
        value = _.replace(value, monthsRegex, '');
        // Weeks matching
        _.forEach(_.matchAll(weeksRegex, value), (weekMatch) => {
            hour += Number(weekMatch[1]) * 168;
        });
        value = _.replace(value, weeksRegex, '');
        // Days matching
        _.forEach(_.matchAll(daysRegex, value), (dayMatch) => {
            hour += Number(dayMatch[1]) * 24;
        });
        value = _.replace(value, daysRegex, '');
        // Hours matching
        _.forEach(_.matchAll(hoursRegex, value), (hoursMatch) => {
            hour += Number(hoursMatch[1]);
        });
        value = _.replace(value, hoursRegex, '');
        // Minutes matching
        _.forEach(_.matchAll(minsRegex, value), (minsMatch) => {
            min += Number(minsMatch[1]);
        });
        value = _.replace(value, minsRegex, '');
        // Seconds matching
        _.forEach(_.matchAll(secondsRegex, value), (secsMatch) => {
            sec += Number(secsMatch[1]);
        });
        value = _.replace(value, secondsRegex, '');
        const arr = [];
        hour && arr.push(`${hour}h`);
        min && arr.push(`${min}m`);
        sec && arr.push(`${sec}s`);
        totalMins = hour * 60 + min;
        totalSeconds = totalMins * 60 + sec;
        totalMiliseconds = totalSeconds * 1000;
        value = arr.length ? `${_.join(arr, ' ')} ${_.trim(value)}` : value;
        this.writeValue(value);
        this.onChanged(value);
        this.converted.emit({
            hour, min, sec,
            totalMins, totalSeconds, totalMiliseconds,
            type: this.convertType,
        });
    }
    /**
     * @return {void}
     */
    _convertHourString() {
        const date = moment(this.value, this.timeFormat);
        let hour;
        let min;
        if (!date.isValid()) {
            hour = date._a?.[3] || 0;
            min = date._a?.[4] || 0;
        }
        else {
            hour = date.hour();
            min = date.minute();
        }
        if (_.isNaN(hour) || _.isNaN(min))
            return;
        const value = moment().hour(hour).minute(min).format(this.timeFormat);
        const sec = 0;
        const totalMins = hour * 60 + min;
        const totalSeconds = totalMins * 60;
        const totalMiliseconds = totalSeconds * 1000;
        this.writeValue(value);
        this.onChanged(value);
        this.converted.emit({
            hour, min, sec,
            totalMins, totalSeconds, totalMiliseconds,
            type: this.convertType,
        });
    }
}
NgcFormFieldInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcFormFieldInputDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: DATE_TIME_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
NgcFormFieldInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcFormFieldInputDirective, selector: "[ngcFormFieldInput]", inputs: { ngModel: "ngModel", name: "name", type: "type", textSize: "textSize", min: "min", max: "max", trim: "trim", disableControl: "disableControl", disabled: "disabled", required: "required", focusing: "focusing", readonly: "readonly", clearable: "clearable", saveable: "saveable", cancelable: "cancelable", formControl: "formControl", alignment: "alignment", convertType: "convertType", timeFormat: "timeFormat" }, outputs: { ngModelChange: "ngModelChange", changed: "changed", saved: "saved", cancelled: "cancelled", cleared: "cleared", pasted: "pasted", converted: "converted" }, host: { listeners: { "focus": "triggerFocus($event)", "blur": "triggerBlur($event.target.value)", "input": "triggerInput()", "keydown.enter": "triggerKeyDownEnter($event)", "keydown.esc": "triggerKeyDownEsc($event)" }, properties: { "attr.disabled": "this.attrDisabled", "attr.readonly": "this.attrReadonly", "attr.required": "this.attrRequired", "attr.type": "this.attr" } }, providers: [TRIM_VALUE_ACCESSOR], exportAs: ["ngcFormFieldInput"], usesInheritance: true, usesOnChanges: true, ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcFormFieldInputDirective.prototype, "type", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcFormFieldInputDirective.prototype, "textSize", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcFormFieldInputDirective.prototype, "min", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcFormFieldInputDirective.prototype, "max", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcFormFieldInputDirective.prototype, "trim", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcFormFieldInputDirective.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcFormFieldInputDirective.prototype, "required", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcFormFieldInputDirective.prototype, "focusing", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcFormFieldInputDirective.prototype, "readonly", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcFormFieldInputDirective.prototype, "clearable", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcFormFieldInputDirective.prototype, "saveable", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcFormFieldInputDirective.prototype, "cancelable", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcFormFieldInputDirective.prototype, "alignment", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], NgcFormFieldInputDirective.prototype, "_checkValidValue", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcFormFieldInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngcFormFieldInput]',
                    exportAs: 'ngcFormFieldInput',
                    providers: [TRIM_VALUE_ACCESSOR],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.DateTimeConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DATE_TIME_CONFIG]
                }] }]; }, propDecorators: { attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], attrReadonly: [{
                type: HostBinding,
                args: ['attr.readonly']
            }], attrRequired: [{
                type: HostBinding,
                args: ['attr.required']
            }], attr: [{
                type: HostBinding,
                args: ['attr.type']
            }], ngModel: [{
                type: Input
            }], name: [{
                type: Input
            }], type: [{
                type: Input
            }], textSize: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], trim: [{
                type: Input
            }], disableControl: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], focusing: [{
                type: Input
            }], readonly: [{
                type: Input
            }], clearable: [{
                type: Input
            }], saveable: [{
                type: Input
            }], cancelable: [{
                type: Input
            }], formControl: [{
                type: Input
            }], alignment: [{
                type: Input
            }], convertType: [{
                type: Input
            }], ngModelChange: [{
                type: Output
            }], changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], cancelled: [{
                type: Output
            }], cleared: [{
                type: Output
            }], pasted: [{
                type: Output
            }], converted: [{
                type: Output
            }], timeFormat: [{
                type: Input
            }], triggerFocus: [{
                type: HostListener,
                args: ['focus', ['$event']]
            }], triggerBlur: [{
                type: HostListener,
                args: ['blur', ['$event.target.value']]
            }], triggerInput: [{
                type: HostListener,
                args: ['input']
            }], triggerKeyDownEnter: [{
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }], triggerKeyDownEsc: [{
                type: HostListener,
                args: ['keydown.esc', ['$event']]
            }], _checkValidValue: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWZvcm0tZmllbGQtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZm9ybS1maWVsZC9mb3JtLWZpZWxkLWlucHV0L25nYy1mb3JtLWZpZWxkLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUM1QixZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDUixVQUFVLEVBQ3BDLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUNaLFdBQVcsRUFDMUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxNQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQ04sZ0JBQWdCLEVBQUUsY0FBYyxFQUNoQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFDM0MsWUFBWSxFQUFFLE9BQU8sRUFDckIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsUUFBUSxJQUFJLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBRXRELE1BQU0sVUFBVSxHQUFXLDJCQUEyQixDQUFDO0FBQ3ZELE1BQU0sV0FBVyxHQUFXLDRCQUE0QixDQUFDO0FBQ3pELE1BQU0sVUFBVSxHQUFXLDJCQUEyQixDQUFDO0FBQ3ZELE1BQU0sU0FBUyxHQUFXLDBCQUEwQixDQUFDO0FBQ3JELE1BQU0sVUFBVSxHQUFXLDJCQUEyQixDQUFDO0FBQ3ZELE1BQU0sU0FBUyxHQUFXLGdDQUFnQyxDQUFDO0FBQzNELE1BQU0sWUFBWSxHQUFXLGdDQUFnQyxDQUFDO0FBRTlELE1BQU0sbUJBQW1CLEdBQVE7SUFDaEMsT0FBTyxFQUFJLGlCQUFpQjtJQUM1QixXQUFXLEVBQUcsVUFBVSxDQUFFLEdBQUcsRUFBRSxDQUFDLDBCQUEwQixDQUFFO0lBQzVELEtBQUssRUFBSSxJQUFJO0NBQ2IsQ0FBQztBQW1CRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsb0JBQW9CO0lBd0VuRTs7Ozs7T0FLRztJQUNILFlBQ1csUUFBbUIsRUFDbkIsVUFBc0IsRUFDZ0IsZUFBK0I7UUFFL0UsS0FBSyxDQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFFLENBQUM7UUFKL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ2dCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQWpFaEQsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUlMLFNBQUksR0FBWSxJQUFJLENBQUM7UUFVdEMsY0FBUyxHQUEyQixNQUFNLENBQUM7UUFHMUQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25ELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2RCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckQsV0FBTSxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUMxRSxjQUFTLEdBQThDLElBQUksWUFBWSxFQUErQixDQUFDO1FBR2pILGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUM1QyxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7SUF5Q3pELENBQUM7SUFsRkQsSUFDSSxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWxHLElBQ0ksWUFBWSxLQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWxFLElBQ0ksWUFBWSxLQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWxFLElBQ0ksSUFBSSxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFvQ3hDLElBQ0ksVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBRSxLQUFpQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksS0FBSyxDQUFFLEtBQVU7UUFDcEIsa0NBQWtDO1FBQ2xDLElBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUs7WUFBRyxPQUFPO1FBRTNELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksVUFBVSxLQUFjLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLFlBQVksbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBRWxHLElBQUksYUFBYSxLQUFjLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXhGLElBQUksUUFBUSxLQUFjLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFpQmhFLFlBQVksQ0FBRSxLQUFZO1FBQ2hDLElBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFHO1lBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1lBQ25CLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVwRixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQzFCLENBQUM7SUFHTSxXQUFXLENBQUUsS0FBYTtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFMUIsUUFBUyxJQUFJLENBQUMsV0FBVyxFQUFHO1lBQzNCLEtBQUssYUFBYTtnQkFDakIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLE1BQU07WUFDUCxLQUFLLGFBQWE7Z0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixNQUFNO1lBQ1A7Z0JBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUUsQ0FBQztTQUN6QjtJQUNGLENBQUM7SUFHTSxZQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUNsQyxDQUFDO0lBR00sbUJBQW1CLENBQUUsS0FBb0I7UUFDL0MsSUFBSyxJQUFJLENBQUMsUUFBUSxFQUFHO1lBQ3BCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUdNLGlCQUFpQixDQUFFLEtBQW9CO1FBQzdDLElBQUssSUFBSSxDQUFDLFVBQVUsRUFBRztZQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQztTQUNyQjtRQUVELElBQUssSUFBSSxDQUFDLFNBQVMsRUFBRztZQUNyQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztTQUNwQjtJQUNGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUUsT0FBc0I7UUFDbEMsSUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQUcsT0FBTztRQUUvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxxRkFBcUY7UUFFckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBRSxPQUFPLEVBQUUsU0FBUyxDQUFFLENBQUM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxFQUFFLENBQUUsS0FBcUIsRUFBRyxFQUFFO1lBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzNCLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFNBQVMsQ0FBRSxLQUFVO1FBQzNCLGtCQUFrQjtRQUNsQixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUVqQyxhQUFhO1FBQ2IsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFNUIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFVBQVUsQ0FBRSxLQUFVO1FBQzVCLGtCQUFrQjtRQUNsQixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUVqQyxhQUFhO1FBQ2IsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFNUIsa0JBQWtCO1FBQ2xCLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBRSxLQUFhO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSSxDQUFFLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxJQUFJLENBQUUsS0FBYTtRQUN6QixJQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTztZQUFHLE9BQU87UUFFeEMsSUFBSSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBRSxLQUFhO1FBQzNCLE1BQU0sS0FBSyxHQUFRLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBRSxLQUFhO1FBQzFCLE1BQU0sS0FBSyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFN0MsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFFSyxnQkFBZ0IsQ0FBRSxLQUFVO1FBQ25DLElBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUU7WUFBRyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFdEQsSUFBSyxDQUFDLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBRTtZQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUMsTUFBTSxDQUFDO1FBRTNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNLLEtBQUssQ0FBRSxLQUFVO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0YsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFVBQVUsQ0FBRSxLQUFVO1FBQzdCLElBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRyxPQUFPLEtBQUssQ0FBQztRQUUxRCxLQUFLLEdBQUcsVUFBVSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBRTVCLElBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHO1lBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbkUsSUFBSyxDQUFDLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUc7WUFBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVuRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNLLGtCQUFrQjtRQUN6QixJQUFJLEtBQUssR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUNyQixJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksU0FBUyxHQUFXLENBQUMsQ0FBQztRQUMxQixJQUFJLFlBQVksR0FBVyxDQUFDLENBQUM7UUFDN0IsSUFBSSxnQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFFakMsaUJBQWlCO1FBQ2pCLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxVQUFVLEVBQUUsS0FBSyxDQUFFLEVBQUUsQ0FBRSxVQUEyQixFQUFHLEVBQUU7WUFDN0UsSUFBSSxJQUFJLE1BQU0sQ0FBRSxVQUFVLENBQUUsQ0FBQyxDQUFFLENBQUUsR0FBRyxJQUFJLENBQUM7UUFDMUMsQ0FBQyxDQUFFLENBQUM7UUFFSixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRTNDLGtCQUFrQjtRQUNsQixDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsV0FBVyxFQUFFLEtBQUssQ0FBRSxFQUFFLENBQUUsV0FBNEIsRUFBRyxFQUFFO1lBQy9FLElBQUksSUFBSSxNQUFNLENBQUUsV0FBVyxDQUFFLENBQUMsQ0FBRSxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzFDLENBQUMsQ0FBRSxDQUFDO1FBRUosS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUUsQ0FBQztRQUU1QyxpQkFBaUI7UUFDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMsUUFBUSxDQUFFLFVBQVUsRUFBRSxLQUFLLENBQUUsRUFBRSxDQUFFLFNBQTBCLEVBQUcsRUFBRTtZQUM1RSxJQUFJLElBQUksTUFBTSxDQUFFLFNBQVMsQ0FBRSxDQUFDLENBQUUsQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxDQUFDLENBQUUsQ0FBQztRQUVKLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFFM0MsZ0JBQWdCO1FBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxTQUFTLEVBQUUsS0FBSyxDQUFFLEVBQUUsQ0FBRSxRQUF5QixFQUFHLEVBQUU7WUFDMUUsSUFBSSxJQUFJLE1BQU0sQ0FBRSxRQUFRLENBQUUsQ0FBQyxDQUFFLENBQUUsR0FBRyxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFFLENBQUM7UUFFSixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRTFDLGlCQUFpQjtRQUNqQixDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsVUFBVSxFQUFFLEtBQUssQ0FBRSxFQUFFLENBQUUsVUFBMkIsRUFBRyxFQUFFO1lBQzdFLElBQUksSUFBSSxNQUFNLENBQUUsVUFBVSxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFFLENBQUM7UUFFSixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRTNDLG1CQUFtQjtRQUNuQixDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsU0FBUyxFQUFFLEtBQUssQ0FBRSxFQUFFLENBQUUsU0FBMEIsRUFBRyxFQUFFO1lBQzNFLEdBQUcsSUFBSSxNQUFNLENBQUUsU0FBUyxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFFLENBQUM7UUFFSixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRTFDLG1CQUFtQjtRQUNuQixDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsWUFBWSxFQUFFLEtBQUssQ0FBRSxFQUFFLENBQUUsU0FBMEIsRUFBRyxFQUFFO1lBQzlFLEdBQUcsSUFBSSxNQUFNLENBQUUsU0FBUyxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFFLENBQUM7UUFFSixLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRTdDLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztRQUV6QixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBRSxHQUFHLElBQUksR0FBRyxDQUFFLENBQUM7UUFDL0IsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBRSxDQUFDO1FBQzdCLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFFLEdBQUcsR0FBRyxHQUFHLENBQUUsQ0FBQztRQUU3QixTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDNUIsWUFBWSxHQUFHLFNBQVMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLGdCQUFnQixHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFdkMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFeEUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ25CLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNkLFNBQVMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCO1lBQ3pDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztTQUN0QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxrQkFBa0I7UUFDekIsTUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBQzNELElBQUksSUFBWSxDQUFDO1FBQ2pCLElBQUksR0FBVyxDQUFDO1FBRWhCLElBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUc7WUFDdEIsSUFBSSxHQUFLLElBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEMsR0FBRyxHQUFLLElBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNOLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQjtRQUVELElBQUssQ0FBQyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBRTtZQUFHLE9BQU87UUFFaEQsTUFBTSxLQUFLLEdBQVcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBQ3BGLE1BQU0sR0FBRyxHQUFXLENBQUMsQ0FBQztRQUN0QixNQUFNLFNBQVMsR0FBVyxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUMxQyxNQUFNLFlBQVksR0FBVyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzVDLE1BQU0sZ0JBQWdCLEdBQVcsWUFBWSxHQUFHLElBQUksQ0FBQztRQUVyRCxJQUFJLENBQUMsVUFBVSxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ2QsU0FBUyxFQUFFLFlBQVksRUFBRSxnQkFBZ0I7WUFDekMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3RCLENBQUMsQ0FBQztJQUNKLENBQUM7O3VIQXhaVywwQkFBMEIscUVBaUZoQixnQkFBZ0I7MkdBakYxQiwwQkFBMEIsay9CQUYxQixDQUFFLG1CQUFtQixDQUFFO0FBa0JuQztJQUFVLFlBQVksRUFBRTs7d0RBQThCO0FBQ3REO0lBQVUsY0FBYyxFQUFFOzs0REFBeUI7QUFDbkQ7SUFBVSxZQUFZLEVBQUU7O3VEQUFvQjtBQUM1QztJQUFVLFlBQVksRUFBRTs7dURBQW9CO0FBQzVDO0lBQVUsWUFBWSxFQUFFO0lBQUUsYUFBYSxFQUFFOzt3REFBNkI7QUFFdEU7SUFBVSxhQUFhLEVBQUU7OzREQUEwQjtBQUNuRDtJQUFVLGFBQWEsRUFBRTs7NERBQTBCO0FBQ25EO0lBQVUsYUFBYSxFQUFFOzs0REFBMEI7QUFDbkQ7SUFBVSxhQUFhLEVBQUU7OzREQUEwQjtBQUNuRDtJQUFVLGFBQWEsRUFBRTs7NkRBQTJCO0FBQ3BEO0lBQVUsYUFBYSxFQUFFOzs0REFBMEI7QUFDbkQ7SUFBVSxhQUFhLEVBQUU7OzhEQUE0QjtBQUVyRDtJQUFVLFlBQVksRUFBRTs7NkRBQW1EO0FBeU8zRTtJQUFDLE9BQU8sRUFBRTs7OztrRUFPVDsyRkE5UVcsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRyxxQkFBcUI7b0JBQ2hDLFFBQVEsRUFBRyxtQkFBbUI7b0JBQzlCLFNBQVMsRUFBRyxDQUFFLG1CQUFtQixDQUFFO2lCQUNuQzs7MEJBa0ZFLFFBQVE7OzBCQUFJLE1BQU07MkJBQUUsZ0JBQWdCOzRDQTlFbEMsWUFBWTtzQkFEZixXQUFXO3VCQUFFLGVBQWU7Z0JBSXpCLFlBQVk7c0JBRGYsV0FBVzt1QkFBRSxlQUFlO2dCQUl6QixZQUFZO3NCQURmLFdBQVc7dUJBQUUsZUFBZTtnQkFJekIsSUFBSTtzQkFEUCxXQUFXO3VCQUFFLFdBQVc7Z0JBR1QsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLO2dCQUMwQixJQUFJO3NCQUFuQyxLQUFLO2dCQUM0QixRQUFRO3NCQUF6QyxLQUFLO2dCQUMwQixHQUFHO3NCQUFsQyxLQUFLO2dCQUMwQixHQUFHO3NCQUFsQyxLQUFLO2dCQUMyQyxJQUFJO3NCQUFwRCxLQUFLO2dCQUNVLGNBQWM7c0JBQTdCLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFNBQVM7c0JBQXpDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFVBQVU7c0JBQTFDLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDMEIsU0FBUztzQkFBeEMsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUVXLGFBQWE7c0JBQTdCLE1BQU07Z0JBQ1UsT0FBTztzQkFBdkIsTUFBTTtnQkFDVSxLQUFLO3NCQUFyQixNQUFNO2dCQUNVLFNBQVM7c0JBQXpCLE1BQU07Z0JBQ1UsT0FBTztzQkFBdkIsTUFBTTtnQkFDVSxNQUFNO3NCQUF0QixNQUFNO2dCQUNVLFNBQVM7c0JBQXpCLE1BQU07Z0JBVUgsVUFBVTtzQkFEYixLQUFLO2dCQXVDQyxZQUFZO3NCQURsQixZQUFZO3VCQUFFLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTtnQkFnQjdCLFdBQVc7c0JBRGpCLFlBQVk7dUJBQUUsTUFBTSxFQUFFLENBQUUscUJBQXFCLENBQUU7Z0JBcUJ6QyxZQUFZO3NCQURsQixZQUFZO3VCQUFFLE9BQU87Z0JBUWYsbUJBQW1CO3NCQUR6QixZQUFZO3VCQUFFLGVBQWUsRUFBRSxDQUFFLFFBQVEsQ0FBRTtnQkFTckMsaUJBQWlCO3NCQUR2QixZQUFZO3VCQUFFLGFBQWEsRUFBRSxDQUFFLFFBQVEsQ0FBRTtnQkFnSWxDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsXG5cdEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsXG5cdE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZixcblx0UmVuZGVyZXIyLCBPcHRpb25hbCwgSW5qZWN0LFxuXHRBZnRlclZpZXdJbml0LCBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBEZWZhdWx0VmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgbW9tZW50LCB7IE1vbWVudCB9IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuXHREQVRFX1RJTUVfQ09ORklHLCBEYXRlVGltZUNvbmZpZywgVGltZUZvcm1hdCxcblx0RGVmYXVsdFZhbHVlLCBDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCxcblx0Q29lcmNlTnVtYmVyLCBNZW1vaXplXG59IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IENPTlNUQU5UIGFzIEFQUF9DT05TVEFOVCB9IGZyb20gJ0ByZXNvdXJjZXMnO1xuXG5jb25zdCB5ZWFyc1JlZ2V4OiBSZWdFeHAgPSAvKFswLTldKylbIF0/KHkoZWFycz8pPykvZ2k7XG5jb25zdCBtb250aHNSZWdleDogUmVnRXhwID0gLyhbMC05XSspWyBdPyhtb24odGhzPyk/KS9naTtcbmNvbnN0IHdlZWtzUmVnZXg6IFJlZ0V4cCA9IC8oWzAtOV0rKVsgXT8odyhlZWtzPyk/KS9naTtcbmNvbnN0IGRheXNSZWdleDogUmVnRXhwID0gLyhbMC05XSspWyBdPyhkKGF5cz8pPykvZ2k7XG5jb25zdCBob3Vyc1JlZ2V4OiBSZWdFeHAgPSAvKFswLTldKylbIF0/KGgob3Vycz8pPykvZ2k7XG5jb25zdCBtaW5zUmVnZXg6IFJlZ0V4cCA9IC8oWzAtOV0rKVsgXT8obShpbih1dGUpP3M/KT8pL2dpO1xuY29uc3Qgc2Vjb25kc1JlZ2V4OiBSZWdFeHAgPSAvKFswLTldKylbIF0/KHMoZWMob25kKT9zPyk/KS9naTtcblxuY29uc3QgVFJJTV9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuXHRwcm92aWRlXHRcdDogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdHVzZUV4aXN0aW5nXHQ6IGZvcndhcmRSZWYoICgpID0+IE5nY0Zvcm1GaWVsZElucHV0RGlyZWN0aXZlICksXG5cdG11bHRpXHRcdDogdHJ1ZSxcbn07XG5cbmV4cG9ydCB0eXBlIE5nY0lGb3JtRmllbGRBbGlnbm1lbnQgPSAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcic7XG5leHBvcnQgdHlwZSBOZ2NJRm9ybUZpZWxkQ29udmVydFR5cGUgPSAndGltZS1zdHJpbmcnIHwgJ2hvdXItc3RyaW5nJztcbmV4cG9ydCBpbnRlcmZhY2UgTmdjSUZvcm1GaWVsZENvbnZlcnRlZEV2ZW50IHtcblx0aG91cj86IG51bWJlcjtcblx0bWluPzogbnVtYmVyO1xuXHRzZWM/OiBudW1iZXI7XG5cdHRvdGFsTWluczogbnVtYmVyO1xuXHR0b3RhbFNlY29uZHM6IG51bWJlcjtcblx0dG90YWxNaWxpc2Vjb25kczogbnVtYmVyO1xuXHR0eXBlOiBOZ2NJRm9ybUZpZWxkQ29udmVydFR5cGU7XG59XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3Rvclx0OiAnW25nY0Zvcm1GaWVsZElucHV0XScsXG5cdGV4cG9ydEFzXHQ6ICduZ2NGb3JtRmllbGRJbnB1dCcsXG5cdHByb3ZpZGVyc1x0OiBbIFRSSU1fVkFMVUVfQUNDRVNTT1IgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjRm9ybUZpZWxkSW5wdXREaXJlY3RpdmUgZXh0ZW5kcyBEZWZhdWx0VmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QEhvc3RCaW5kaW5nKCAnYXR0ci5kaXNhYmxlZCcgKVxuXHRnZXQgYXR0ckRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzRGlzYWJsZWRGcm9tRm9ybUZpZWxkIHx8IHVuZGVmaW5lZDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2F0dHIucmVhZG9ubHknIClcblx0Z2V0IGF0dHJSZWFkb25seSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucmVhZG9ubHkgfHwgdW5kZWZpbmVkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnYXR0ci5yZXF1aXJlZCcgKVxuXHRnZXQgYXR0clJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5yZXF1aXJlZCB8fCB1bmRlZmluZWQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdhdHRyLnR5cGUnIClcblx0Z2V0IGF0dHIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudHlwZTsgfVxuXG5cdEBJbnB1dCgpIHB1YmxpYyBuZ01vZGVsOiBhbnk7XG5cdEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgdHlwZTogc3RyaW5nID0gJ3RleHQnO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgdGV4dFNpemU6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBtaW46IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBtYXg6IG51bWJlcjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHRyaW06IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZUNvbnRyb2w6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZm9jdXNpbmc6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBjbGVhcmFibGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHNhdmVhYmxlOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBjYW5jZWxhYmxlOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIGFsaWdubWVudDogTmdjSUZvcm1GaWVsZEFsaWdubWVudCA9ICdsZWZ0Jztcblx0QElucHV0KCkgcHVibGljIGNvbnZlcnRUeXBlOiBOZ2NJRm9ybUZpZWxkQ29udmVydFR5cGU7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2F2ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsbGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsZWFyZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgcGFzdGVkOiBFdmVudEVtaXR0ZXI8Q2xpcGJvYXJkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDbGlwYm9hcmRFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjb252ZXJ0ZWQ6IEV2ZW50RW1pdHRlcjxOZ2NJRm9ybUZpZWxkQ29udmVydGVkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2NJRm9ybUZpZWxkQ29udmVydGVkRXZlbnQ+KCk7XG5cblx0cHVibGljIGlzRGlzYWJsZWRGcm9tRm9ybUZpZWxkOiBib29sZWFuO1xuXHRwdWJsaWMgY2hhbmdlcyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblx0cHVibGljIGZvY3VzJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSBfYmtWYWx1ZTogYW55O1xuXHRwcml2YXRlIF90aW1lRm9ybWF0OiBUaW1lRm9ybWF0O1xuXG5cdEBJbnB1dCgpXG5cdGdldCB0aW1lRm9ybWF0KCk6IFRpbWVGb3JtYXQge1xuXHRcdHJldHVybiB0aGlzLl90aW1lRm9ybWF0IHx8IHRoaXMuX2RhdGVUaW1lQ29uZmlnLnRpbWVGb3JtYXQgfHwgQVBQX0NPTlNUQU5ULlRJTUVfRk9STUFUO1xuXHR9XG5cdHNldCB0aW1lRm9ybWF0KCB2YWx1ZTogVGltZUZvcm1hdCApIHtcblx0XHR0aGlzLl90aW1lRm9ybWF0ID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgdmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG5cdH1cblx0c2V0IHZhbHVlKCB2YWx1ZTogYW55ICkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRpZiAoIHZhbHVlID09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBpc1RleHRhcmVhKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50OyB9XG5cblx0Z2V0IGlzTnVtYmVySW5wdXQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnR5cGUgPT09ICdudW1iZXInIHx8IHRoaXMudHlwZSA9PT0gJ3JhbmdlJzsgfVxuXG5cdGdldCBoYXNWYWx1ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NoZWNrVmFsaWRWYWx1ZSggdGhpcy52YWx1ZSApOyB9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1JlbmRlcmVyMn0gcmVuZGVyZXJcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7RGF0ZVRpbWVDb25maWd9IF9kYXRlVGltZUNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0cHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggREFURV9USU1FX0NPTkZJRyApIHByaXZhdGUgX2RhdGVUaW1lQ29uZmlnOiBEYXRlVGltZUNvbmZpZ1xuXHQpIHtcblx0XHRzdXBlciggcmVuZGVyZXIsIGVsZW1lbnRSZWYsIHVuZGVmaW5lZCApO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lciggJ2ZvY3VzJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJGb2N1cyggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVDb250cm9sICkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuYmx1ciggZXZlbnQgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZvY3VzaW5nID0gdHJ1ZTtcblx0XHR0aGlzLl9ia1ZhbHVlID0gdGhpcy5fY2hlY2tWYWxpZFZhbHVlKCB0aGlzLl9ia1ZhbHVlICkgPyB0aGlzLl9ia1ZhbHVlIDogdGhpcy52YWx1ZTtcblxuXHRcdHRoaXMuaGFzVmFsdWUgPyB0aGlzLmZvcm1Db250cm9sPy5tYXJrQXNUb3VjaGVkKCkgOiB0aGlzLmZvcm1Db250cm9sPy5tYXJrQXNVbnRvdWNoZWQoKTtcblx0XHR0aGlzLmZvY3VzJC5uZXh0KCB0cnVlICk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCAnYmx1cicsIFsgJyRldmVudC50YXJnZXQudmFsdWUnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlckJsdXIoIHZhbHVlOiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5mb2N1c2luZyA9IGZhbHNlO1xuXG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHR0aGlzLmZvY3VzJC5uZXh0KCBmYWxzZSApO1xuXG5cdFx0c3dpdGNoICggdGhpcy5jb252ZXJ0VHlwZSApIHtcblx0XHRcdGNhc2UgJ3RpbWUtc3RyaW5nJzpcblx0XHRcdFx0dGhpcy5fY29udmVydFRpbWVTdHJpbmcoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdob3VyLXN0cmluZyc6XG5cdFx0XHRcdHRoaXMuX2NvbnZlcnRIb3VyU3RyaW5nKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy53cml0ZVZhbHVlKCB2YWx1ZSApO1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlZCggdmFsdWUgKTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCAnaW5wdXQnIClcblx0cHVibGljIHRyaWdnZXJJbnB1dCgpIHtcblx0XHR0aGlzLmZvcm1Db250cm9sPy5tYXJrQXNUb3VjaGVkKCk7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHR0aGlzLmNoYW5nZXMkLm5leHQoIHRoaXMudmFsdWUgKTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLmVudGVyJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJLZXlEb3duRW50ZXIoIGV2ZW50OiBLZXlib2FyZEV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5zYXZlYWJsZSApIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5zYXZlKCBldmVudCApO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLmVzYycsIFsgJyRldmVudCcgXSApXG5cdHB1YmxpYyB0cmlnZ2VyS2V5RG93bkVzYyggZXZlbnQ6IEtleWJvYXJkRXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmNhbmNlbGFibGUgKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMuY2FuY2VsKCBldmVudCApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5jbGVhcmFibGUgKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMuY2xlYXIoIGV2ZW50ICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggIWNoYW5nZXMubmdNb2RlbCApIHJldHVybjtcblxuXHRcdHRoaXMuX2JrVmFsdWUgPSB0aGlzLnZhbHVlID0gdGhpcy5uZ01vZGVsO1xuXHRcdC8vIHRoaXMuX2JrVmFsdWUgPSB0aGlzLl9jaGVja1ZhbGlkVmFsdWUoIHRoaXMubmdNb2RlbCApID8gdGhpcy5uZ01vZGVsIDogdGhpcy52YWx1ZTtcblxuXHRcdHRoaXMuY2hhbmdlcyQubmV4dCggdGhpcy52YWx1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwYXN0ZScsIHVuZGVmaW5lZCApO1xuXHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwYXN0ZScsICggZXZlbnQ6IENsaXBib2FyZEV2ZW50ICkgPT4ge1xuXHRcdFx0dGhpcy5wYXN0ZWQuZW1pdCggZXZlbnQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuXHQgKi9cblx0cHVibGljIG9uQ2hhbmdlZCggdmFsdWU6IGFueSApIHtcblx0XHQvLyBTZXJpYWxpemUgdmFsdWVcblx0XHR2YWx1ZSA9IHRoaXMuX3NlcmlhbGl6ZSggdmFsdWUgKTtcblxuXHRcdC8vIFRyaW0gdmFsdWVcblx0XHR2YWx1ZSA9IHRoaXMuX3RyaW0oIHZhbHVlICk7XG5cblx0XHQvLyBUcmlnZ2VyIHZhbHVlIGNoYW5nZVxuXHRcdHRoaXMub25DaGFuZ2UoIHZhbHVlICk7XG5cdFx0dGhpcy5jaGFuZ2VkLmVtaXQoIHZhbHVlICk7XG5cdFx0dGhpcy5jaGFuZ2VzJC5uZXh0KCB2YWx1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge2FueX0gdmFsdWVcblx0ICovXG5cdHB1YmxpYyB3cml0ZVZhbHVlKCB2YWx1ZTogYW55ICkge1xuXHRcdC8vIFNlcmlhbGl6ZSB2YWx1ZVxuXHRcdHZhbHVlID0gdGhpcy5fc2VyaWFsaXplKCB2YWx1ZSApO1xuXG5cdFx0Ly8gVHJpbSB2YWx1ZVxuXHRcdHZhbHVlID0gdGhpcy5fdHJpbSggdmFsdWUgKTtcblxuXHRcdC8vIFdyaXRlIG5ldyB2YWx1ZVxuXHRcdHZhbHVlICE9PSB0aGlzLnZhbHVlICYmIHN1cGVyLndyaXRlVmFsdWUoIHZhbHVlICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudD19IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZm9jdXMoIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoIGV2ZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudD19IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgYmx1ciggZXZlbnQ/OiBFdmVudCApIHtcblx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCBldmVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnQ9fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNhdmUoIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmZvcm1Db250cm9sPy5pbnZhbGlkICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5ibHVyKCBldmVudCApO1xuXHRcdHRoaXMuc2F2ZWQuZW1pdCggdGhpcy52YWx1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnQ9fSBldmVudFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNhbmNlbCggZXZlbnQ/OiBFdmVudCApIHtcblx0XHRjb25zdCB2YWx1ZTogYW55ID0gdGhpcy5fYmtWYWx1ZTtcblxuXHRcdHRoaXMuX2JrVmFsdWUgPSB1bmRlZmluZWQ7XG5cblx0XHR0aGlzLmJsdXIoIGV2ZW50ICk7XG5cdFx0dGhpcy53cml0ZVZhbHVlKCB2YWx1ZSApO1xuXHRcdHRoaXMub25DaGFuZ2VkKCB2YWx1ZSApO1xuXHRcdHRoaXMuY2FuY2VsbGVkLmVtaXQoIHZhbHVlICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudD19IGV2ZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xlYXIoIGV2ZW50PzogRXZlbnQgKSB7XG5cdFx0Y29uc3QgdmFsdWU6IGJvb2xlYW4gPSB0aGlzLl9zZXJpYWxpemUoICcnICk7XG5cblx0XHQhdGhpcy5oYXNWYWx1ZSAmJiB0aGlzLmJsdXIoIGV2ZW50ICk7XG5cdFx0dGhpcy53cml0ZVZhbHVlKCB2YWx1ZSApO1xuXHRcdHRoaXMub25DaGFuZ2VkKCB2YWx1ZSApO1xuXHRcdHRoaXMuY2xlYXJlZC5lbWl0KCB2YWx1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwcml2YXRlIF9jaGVja1ZhbGlkVmFsdWUoIHZhbHVlOiBhbnkgKTogYm9vbGVhbiB7XG5cdFx0aWYgKCBfLmlzTnVtYmVyKCB2YWx1ZSApICkgcmV0dXJuIF8uaXNGaW5pdGUoIHZhbHVlICk7XG5cblx0XHRpZiAoIF8uaXNTdHJpbmcoIHZhbHVlICkgKSByZXR1cm4gISFfLnRyaW0oIHZhbHVlICkubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuXHQgKiBAcmV0dXJuIHthbnl9XG5cdCAqL1xuXHRwcml2YXRlIF90cmltKCB2YWx1ZTogYW55ICk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMudHJpbSAmJiB0aGlzLnR5cGUgIT09ICdwYXNzd29yZCcgJiYgXy5pc1N0cmluZyggdmFsdWUgKSA/IF8udHJpbSggdmFsdWUgKSA6IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuXHQgKiBAcmV0dXJuIHthbnl9XG5cdCAqL1xuXHRwcml2YXRlIF9zZXJpYWxpemUoIHZhbHVlOiBhbnkgKTogYW55IHtcblx0XHRpZiAoICF0aGlzLmlzTnVtYmVySW5wdXQgfHwgIXRoaXMuaGFzVmFsdWUgKSByZXR1cm4gdmFsdWU7XG5cblx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG5cblx0XHRpZiAoIF8uaXNGaW5pdGUoIHRoaXMubWluICkgJiYgdmFsdWUgPCB0aGlzLm1pbiApIHZhbHVlID0gdGhpcy5taW47XG5cdFx0aWYgKCBfLmlzRmluaXRlKCB0aGlzLm1heCApICYmIHZhbHVlID4gdGhpcy5tYXggKSB2YWx1ZSA9IHRoaXMubWF4O1xuXG5cdFx0cmV0dXJuIF8uaXNGaW5pdGUoIHZhbHVlICkgPyB2YWx1ZSA6IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2NvbnZlcnRUaW1lU3RyaW5nKCkge1xuXHRcdGxldCB2YWx1ZTogYW55ID0gdGhpcy52YWx1ZTtcblx0XHRsZXQgaG91cjogbnVtYmVyID0gMDtcblx0XHRsZXQgbWluOiBudW1iZXIgPSAwO1xuXHRcdGxldCBzZWM6IG51bWJlciA9IDA7XG5cdFx0bGV0IHRvdGFsTWluczogbnVtYmVyID0gMDtcblx0XHRsZXQgdG90YWxTZWNvbmRzOiBudW1iZXIgPSAwO1xuXHRcdGxldCB0b3RhbE1pbGlzZWNvbmRzOiBudW1iZXIgPSAwO1xuXG5cdFx0Ly8gWWVhcnMgbWF0Y2hpbmdcblx0XHRfLmZvckVhY2goIF8ubWF0Y2hBbGwoIHllYXJzUmVnZXgsIHZhbHVlICksICggeWVhcnNNYXRjaDogUmVnRXhwRXhlY0FycmF5ICkgPT4ge1xuXHRcdFx0aG91ciArPSBOdW1iZXIoIHllYXJzTWF0Y2hbIDEgXSApICogODc2NTtcblx0XHR9ICk7XG5cblx0XHR2YWx1ZSA9IF8ucmVwbGFjZSggdmFsdWUsIHllYXJzUmVnZXgsICcnICk7XG5cblx0XHQvLyBNb250aHMgbWF0Y2hpbmdcblx0XHRfLmZvckVhY2goIF8ubWF0Y2hBbGwoIG1vbnRoc1JlZ2V4LCB2YWx1ZSApLCAoIG1vbnRoc01hdGNoOiBSZWdFeHBFeGVjQXJyYXkgKSA9PiB7XG5cdFx0XHRob3VyICs9IE51bWJlciggbW9udGhzTWF0Y2hbIDEgXSApICogNzIwO1xuXHRcdH0gKTtcblxuXHRcdHZhbHVlID0gXy5yZXBsYWNlKCB2YWx1ZSwgbW9udGhzUmVnZXgsICcnICk7XG5cblx0XHQvLyBXZWVrcyBtYXRjaGluZ1xuXHRcdF8uZm9yRWFjaCggXy5tYXRjaEFsbCggd2Vla3NSZWdleCwgdmFsdWUgKSwgKCB3ZWVrTWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSApID0+IHtcblx0XHRcdGhvdXIgKz0gTnVtYmVyKCB3ZWVrTWF0Y2hbIDEgXSApICogMTY4O1xuXHRcdH0gKTtcblxuXHRcdHZhbHVlID0gXy5yZXBsYWNlKCB2YWx1ZSwgd2Vla3NSZWdleCwgJycgKTtcblxuXHRcdC8vIERheXMgbWF0Y2hpbmdcblx0XHRfLmZvckVhY2goIF8ubWF0Y2hBbGwoIGRheXNSZWdleCwgdmFsdWUgKSwgKCBkYXlNYXRjaDogUmVnRXhwRXhlY0FycmF5ICkgPT4ge1xuXHRcdFx0aG91ciArPSBOdW1iZXIoIGRheU1hdGNoWyAxIF0gKSAqIDI0O1xuXHRcdH0gKTtcblxuXHRcdHZhbHVlID0gXy5yZXBsYWNlKCB2YWx1ZSwgZGF5c1JlZ2V4LCAnJyApO1xuXG5cdFx0Ly8gSG91cnMgbWF0Y2hpbmdcblx0XHRfLmZvckVhY2goIF8ubWF0Y2hBbGwoIGhvdXJzUmVnZXgsIHZhbHVlICksICggaG91cnNNYXRjaDogUmVnRXhwRXhlY0FycmF5ICkgPT4ge1xuXHRcdFx0aG91ciArPSBOdW1iZXIoIGhvdXJzTWF0Y2hbIDEgXSApO1xuXHRcdH0gKTtcblxuXHRcdHZhbHVlID0gXy5yZXBsYWNlKCB2YWx1ZSwgaG91cnNSZWdleCwgJycgKTtcblxuXHRcdC8vIE1pbnV0ZXMgbWF0Y2hpbmdcblx0XHRfLmZvckVhY2goIF8ubWF0Y2hBbGwoIG1pbnNSZWdleCwgdmFsdWUgKSwgKCBtaW5zTWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSApID0+IHtcblx0XHRcdG1pbiArPSBOdW1iZXIoIG1pbnNNYXRjaFsgMSBdICk7XG5cdFx0fSApO1xuXG5cdFx0dmFsdWUgPSBfLnJlcGxhY2UoIHZhbHVlLCBtaW5zUmVnZXgsICcnICk7XG5cblx0XHQvLyBTZWNvbmRzIG1hdGNoaW5nXG5cdFx0Xy5mb3JFYWNoKCBfLm1hdGNoQWxsKCBzZWNvbmRzUmVnZXgsIHZhbHVlICksICggc2Vjc01hdGNoOiBSZWdFeHBFeGVjQXJyYXkgKSA9PiB7XG5cdFx0XHRzZWMgKz0gTnVtYmVyKCBzZWNzTWF0Y2hbIDEgXSApO1xuXHRcdH0gKTtcblxuXHRcdHZhbHVlID0gXy5yZXBsYWNlKCB2YWx1ZSwgc2Vjb25kc1JlZ2V4LCAnJyApO1xuXG5cdFx0Y29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0aG91ciAmJiBhcnIucHVzaCggYCR7aG91cn1oYCApO1xuXHRcdG1pbiAmJiBhcnIucHVzaCggYCR7bWlufW1gICk7XG5cdFx0c2VjICYmIGFyci5wdXNoKCBgJHtzZWN9c2AgKTtcblxuXHRcdHRvdGFsTWlucyA9IGhvdXIgKiA2MCArIG1pbjtcblx0XHR0b3RhbFNlY29uZHMgPSB0b3RhbE1pbnMgKiA2MCArIHNlYztcblx0XHR0b3RhbE1pbGlzZWNvbmRzID0gdG90YWxTZWNvbmRzICogMTAwMDtcblxuXHRcdHZhbHVlID0gYXJyLmxlbmd0aCA/IGAke18uam9pbiggYXJyLCAnICcgKX0gJHtfLnRyaW0oIHZhbHVlICl9YCA6IHZhbHVlO1xuXG5cdFx0dGhpcy53cml0ZVZhbHVlKCB2YWx1ZSApO1xuXHRcdHRoaXMub25DaGFuZ2VkKCB2YWx1ZSApO1xuXHRcdHRoaXMuY29udmVydGVkLmVtaXQoe1xuXHRcdFx0aG91ciwgbWluLCBzZWMsXG5cdFx0XHR0b3RhbE1pbnMsIHRvdGFsU2Vjb25kcywgdG90YWxNaWxpc2Vjb25kcyxcblx0XHRcdHR5cGU6IHRoaXMuY29udmVydFR5cGUsXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2NvbnZlcnRIb3VyU3RyaW5nKCkge1xuXHRcdGNvbnN0IGRhdGU6IE1vbWVudCA9IG1vbWVudCggdGhpcy52YWx1ZSwgdGhpcy50aW1lRm9ybWF0ICk7XG5cdFx0bGV0IGhvdXI6IG51bWJlcjtcblx0XHRsZXQgbWluOiBudW1iZXI7XG5cblx0XHRpZiAoICFkYXRlLmlzVmFsaWQoKSApIHtcblx0XHRcdGhvdXIgPSAoIGRhdGUgYXMgYW55ICkuX2E/LlsgMyBdIHx8IDA7XG5cdFx0XHRtaW4gPSAoIGRhdGUgYXMgYW55ICkuX2E/LlsgNCBdIHx8IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhvdXIgPSBkYXRlLmhvdXIoKTtcblx0XHRcdG1pbiA9IGRhdGUubWludXRlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBfLmlzTmFOKCBob3VyICkgfHwgXy5pc05hTiggbWluICkgKSByZXR1cm47XG5cblx0XHRjb25zdCB2YWx1ZTogc3RyaW5nID0gbW9tZW50KCkuaG91ciggaG91ciApLm1pbnV0ZSggbWluICkuZm9ybWF0KCB0aGlzLnRpbWVGb3JtYXQgKTtcblx0XHRjb25zdCBzZWM6IG51bWJlciA9IDA7XG5cdFx0Y29uc3QgdG90YWxNaW5zOiBudW1iZXIgPSBob3VyICogNjAgKyBtaW47XG5cdFx0Y29uc3QgdG90YWxTZWNvbmRzOiBudW1iZXIgPSB0b3RhbE1pbnMgKiA2MDtcblx0XHRjb25zdCB0b3RhbE1pbGlzZWNvbmRzOiBudW1iZXIgPSB0b3RhbFNlY29uZHMgKiAxMDAwO1xuXG5cdFx0dGhpcy53cml0ZVZhbHVlKCB2YWx1ZSApO1xuXHRcdHRoaXMub25DaGFuZ2VkKCB2YWx1ZSApO1xuXHRcdHRoaXMuY29udmVydGVkLmVtaXQoe1xuXHRcdFx0aG91ciwgbWluLCBzZWMsXG5cdFx0XHR0b3RhbE1pbnMsIHRvdGFsU2Vjb25kcywgdG90YWxNaWxpc2Vjb25kcyxcblx0XHRcdHR5cGU6IHRoaXMuY29udmVydFR5cGUsXG5cdFx0fSk7XG5cdH1cblxufVxuIl19