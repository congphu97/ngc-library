import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcTextareaComponent implements OnInit, OnDestroy {
    label: string;
    placeholder: string;
    rows: number;
    cols: number;
    appearance: 'default' | 'filled' | 'underlined' | 'borderless';
    resize: 'vertical' | 'horizontal' | 'both' | 'none';
    debounceTime: number;
    disabled: boolean;
    invalid: boolean;
    showCounter: boolean;
    maxLength: number;
    errorMessage: string;
    valueChange: EventEmitter<string>;
    message: string;
    private debouncedEmit;
    get isInvalid(): boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    contentChanged(newContent: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTextareaComponent, "ngc-textarea", never, { "label": "label"; "placeholder": "placeholder"; "rows": "rows"; "cols": "cols"; "appearance": "appearance"; "resize": "resize"; "debounceTime": "debounceTime"; "disabled": "disabled"; "invalid": "invalid"; "showCounter": "showCounter"; "maxLength": "maxLength"; "errorMessage": "errorMessage"; }, { "valueChange": "valueChange"; }, never, never, false>;
}
