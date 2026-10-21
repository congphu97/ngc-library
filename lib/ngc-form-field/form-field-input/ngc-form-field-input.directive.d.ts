import { ElementRef, EventEmitter, OnChanges, SimpleChanges, Renderer2, AfterViewInit } from '@angular/core';
import { FormControl, DefaultValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { DateTimeConfig, TimeFormat } from '@core';
import * as i0 from "@angular/core";
export declare type NgcIFormFieldAlignment = 'left' | 'right' | 'center';
export declare type NgcIFormFieldConvertType = 'time-string' | 'hour-string';
export interface NgcIFormFieldConvertedEvent {
    hour?: number;
    min?: number;
    sec?: number;
    totalMins: number;
    totalSeconds: number;
    totalMiliseconds: number;
    type: NgcIFormFieldConvertType;
}
export declare class NgcFormFieldInputDirective extends DefaultValueAccessor implements OnChanges, AfterViewInit {
    protected renderer: Renderer2;
    protected elementRef: ElementRef;
    private _dateTimeConfig;
    get attrDisabled(): boolean;
    get attrReadonly(): boolean;
    get attrRequired(): boolean;
    get attr(): string;
    ngModel: any;
    name: string;
    type: string;
    textSize: string;
    min: number;
    max: number;
    trim: boolean;
    disableControl: boolean;
    disabled: boolean;
    required: boolean;
    focusing: boolean;
    readonly: boolean;
    clearable: boolean;
    saveable: boolean;
    cancelable: boolean;
    formControl: FormControl;
    alignment: NgcIFormFieldAlignment;
    convertType: NgcIFormFieldConvertType;
    ngModelChange: EventEmitter<any>;
    changed: EventEmitter<any>;
    saved: EventEmitter<any>;
    cancelled: EventEmitter<any>;
    cleared: EventEmitter<any>;
    pasted: EventEmitter<ClipboardEvent>;
    converted: EventEmitter<NgcIFormFieldConvertedEvent>;
    isDisabledFromFormField: boolean;
    changes$: Subject<any>;
    focus$: Subject<boolean>;
    private _bkValue;
    private _timeFormat;
    get timeFormat(): TimeFormat;
    set timeFormat(value: TimeFormat);
    get value(): any;
    set value(value: any);
    get isTextarea(): boolean;
    get isNumberInput(): boolean;
    get hasValue(): boolean;
    /**
     * @constructor
     * @param {Renderer2} renderer
     * @param {ElementRef} elementRef
     * @param {DateTimeConfig} _dateTimeConfig
     */
    constructor(renderer: Renderer2, elementRef: ElementRef, _dateTimeConfig: DateTimeConfig);
    triggerFocus(event: Event): void;
    triggerBlur(value: string): void;
    triggerInput(): void;
    triggerKeyDownEnter(event: KeyboardEvent): void;
    triggerKeyDownEsc(event: KeyboardEvent): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     * @param {any} value
     */
    onChanged(value: any): void;
    /**
     * @constructor
     * @param {any} value
     */
    writeValue(value: any): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    focus(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    blur(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    save(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    cancel(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    clear(event?: Event): void;
    /**
     * @param {any} value
     * @return {boolean}
     */
    private _checkValidValue;
    /**
     * @param {any} value
     * @return {any}
     */
    private _trim;
    /**
     * @param {any} value
     * @return {any}
     */
    private _serialize;
    /**
     * @return {void}
     */
    private _convertTimeString;
    /**
     * @return {void}
     */
    private _convertHourString;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldInputDirective, [null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFormFieldInputDirective, "[ngcFormFieldInput]", ["ngcFormFieldInput"], { "ngModel": "ngModel"; "name": "name"; "type": "type"; "textSize": "textSize"; "min": "min"; "max": "max"; "trim": "trim"; "disableControl": "disableControl"; "disabled": "disabled"; "required": "required"; "focusing": "focusing"; "readonly": "readonly"; "clearable": "clearable"; "saveable": "saveable"; "cancelable": "cancelable"; "formControl": "formControl"; "alignment": "alignment"; "convertType": "convertType"; "timeFormat": "timeFormat"; }, { "ngModelChange": "ngModelChange"; "changed": "changed"; "saved": "saved"; "cancelled": "cancelled"; "cleared": "cleared"; "pasted": "pasted"; "converted": "converted"; }, never, never, false>;
}
