import { QueryList, AfterContentInit, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';
import { NgcRadioComponent } from '../ngc-radio/ngc-radio.component';
import * as i0 from "@angular/core";
export declare type NgcRadioGroupDirection = 'vertical' | 'horizontal';
export declare class NgcRadioGroupComponent implements OnChanges, AfterContentInit, ControlValueAccessor {
    get classVertical(): boolean;
    get classHorizontal(): boolean;
    radioList: QueryList<NgcRadioComponent>;
    ngModel: any;
    label: any;
    disableControl: boolean;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    direction: NgcRadioGroupDirection;
    formControl: FormControl;
    ngModelChange: EventEmitter<any>;
    private _innerValue;
    triggerClick(event: MouseEvent): void;
    /**
     * @constructor
     * @param {any} value
     */
    writeValue(value: any): void;
    /**
     * @constructor
     * @param {Function} fn
     */
    registerOnChange(fn: Function): void;
    /**
     * @constructor
     * @param {Function} fn
     */
    registerOnTouched(fn: Function): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    private _onTouchedCallback;
    private _onChangeCallback;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcRadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcRadioGroupComponent, "ngc-radio-group", never, { "ngModel": "ngModel"; "label": "label"; "disableControl": "disableControl"; "disabled": "disabled"; "readonly": "readonly"; "required": "required"; "direction": "direction"; "formControl": "formControl"; }, { "ngModelChange": "ngModelChange"; }, ["radioList"], ["*"], false>;
}
