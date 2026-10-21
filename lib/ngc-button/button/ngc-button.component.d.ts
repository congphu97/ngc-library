import { ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { ContrastPipe } from '@core';
import { NgcButtonIconDirective } from '../button-icon/ngc-button-icon.directive';
import * as i0 from "@angular/core";
export declare type ngcIButtonAlignment = 'left' | 'right' | 'center';
export declare class NgcButtonComponent implements AfterViewInit, OnChanges {
    private _elementRef;
    private _contrastPipe;
    get attrType(): string;
    get attrDisabled(): boolean;
    get styleColor(): string;
    get styleTextColor(): string;
    get styleSize(): string;
    get styleIconSize(): string;
    get styleBorderColor(): string;
    get styleBorderStyle(): string;
    get styleWidth(): string;
    get classHasIcon(): boolean;
    get classDisabled(): boolean;
    get classLoading(): boolean;
    get classLeft(): boolean;
    get classRight(): boolean;
    get classCenter(): boolean;
    buttonIcon: NgcButtonIconDirective;
    type: string;
    color: string;
    textColor: string;
    size: string;
    icon: string;
    iconSize: string;
    borderColor: string;
    borderStyle: string;
    borderWidth: string;
    disabled: boolean;
    loading: boolean;
    alignment: ngcIButtonAlignment;
    private _bkTextColor;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_elementRef: ElementRef, _contrastPipe: ContrastPipe);
    triggerKeyDownEnterAndSpace(event: KeyboardEvent): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcButtonComponent, "button[ngcButton]", never, { "type": "type"; "color": "color"; "textColor": "textColor"; "size": "size"; "icon": "icon"; "iconSize": "iconSize"; "borderColor": "borderColor"; "borderStyle": "borderStyle"; "borderWidth": "borderWidth"; "disabled": "disabled"; "loading": "loading"; "alignment": "alignment"; }, {}, ["buttonIcon"], ["[ngcButtonIcon]", "*"], false>;
}
