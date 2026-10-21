import { EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NgcInlineInputComponent implements OnChanges {
    private _cdRef;
    name: string;
    placeholder: string;
    ngModel: string;
    editing: boolean;
    validate: boolean;
    trim: boolean;
    autoSave: boolean;
    disabled: boolean;
    formControl: FormControl;
    ngModelChange: EventEmitter<string>;
    editingChange: EventEmitter<boolean>;
    saved: EventEmitter<string>;
    cancelled: EventEmitter<string>;
    value: string;
    private _bkValue;
    set ngcInlineInput(value: boolean);
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_cdRef: ChangeDetectorRef);
    triggerClick(event: MouseEvent): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @return {void}
     */
    onAutoSave(): void;
    /**
     * @return {void}
     */
    onSave(): void;
    /**
     * @return {void}
     */
    onCancel(): void;
    /**
     * @return {void}
     */
    edit(): void;
    /**
     * @return {void}
     */
    private _save;
    /**
     * @return {void}
     */
    private _cancel;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcInlineInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcInlineInputComponent, "ngc-inline-input, [ngcInlineInput]", never, { "name": "name"; "placeholder": "placeholder"; "ngModel": "ngModel"; "editing": "editing"; "validate": "validate"; "trim": "trim"; "autoSave": "autoSave"; "disabled": "disabled"; "formControl": "formControl"; "ngcInlineInput": "ngcInlineInput"; }, { "ngModelChange": "ngModelChange"; "editingChange": "editingChange"; "saved": "saved"; "cancelled": "cancelled"; }, never, ["*"], false>;
}
