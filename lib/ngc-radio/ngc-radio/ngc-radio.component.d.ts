import { EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcRadioComponent implements AfterViewInit {
    private _elementRef;
    get styleColor(): string;
    get styleBgColor(): string;
    get styleLabelColor(): string;
    get styleSize(): string;
    get classChecked(): boolean;
    get classDisabled(): boolean;
    get classReadonly(): boolean;
    get attrTabindex(): number;
    value: any;
    label: string;
    color: string;
    bgColor: string;
    labelColor: string;
    size: string;
    tabindex: number;
    checked: boolean;
    disabled: boolean;
    readonly: boolean;
    checkedChange: EventEmitter<boolean>;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    triggerClick(event: MouseEvent): void;
    triggerKeyDownSpace(event: KeyboardEvent): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @return {void}
     */
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcRadioComponent, "ngc-radio", never, { "value": "value"; "label": "label"; "color": "color"; "bgColor": "bgColor"; "labelColor": "labelColor"; "size": "size"; "tabindex": "tabindex"; "checked": "checked"; "disabled": "disabled"; "readonly": "readonly"; }, { "checkedChange": "checkedChange"; }, never, ["*"], false>;
}
