import { EventEmitter, OnInit, OnDestroy, ElementRef, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export interface NgcSelectOption {
    label: string;
    value: any;
    description?: string;
    disabled?: boolean;
}
export declare class NgcSelectComponent implements OnInit, OnDestroy {
    private _overlay;
    private _elementRef;
    private _cdr;
    private _vcRef;
    options: NgcSelectOption[];
    selectedValue: any;
    placeholder: string;
    disabled: boolean;
    label: string;
    selectionChange: EventEmitter<any>;
    triggerEl: ElementRef;
    panelTpl: TemplateRef<any>;
    isOpen: boolean;
    private _overlayRef;
    private _portal;
    constructor(_overlay: Overlay, _elementRef: ElementRef, _cdr: ChangeDetectorRef, _vcRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get selectedOption(): NgcSelectOption | null;
    get displayLabel(): string;
    get hasValue(): boolean;
    toggle(): void;
    open(): void;
    close(): void;
    selectOption(option: NgcSelectOption): void;
    isSelected(option: NgcSelectOption): boolean;
    private _createOverlayRef;
    get triggerWidth(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcSelectComponent, "ngc-select", never, { "options": "options"; "selectedValue": "selectedValue"; "placeholder": "placeholder"; "disabled": "disabled"; "label": "label"; }, { "selectionChange": "selectionChange"; }, never, never, false>;
}
