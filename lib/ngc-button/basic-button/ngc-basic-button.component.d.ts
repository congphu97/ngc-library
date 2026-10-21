import { ElementRef, AfterViewInit } from '@angular/core';
import { NgcButtonIconDirective } from '../button-icon/ngc-button-icon.directive';
import * as i0 from "@angular/core";
export declare type NgcIBasicButtonAlignment = 'left' | 'right' | 'center';
export declare class NgcBasicButtonComponent implements AfterViewInit {
    private _elementRef;
    get attrType(): string;
    get attrDisabled(): boolean;
    get styleColor(): string;
    get styleIconSize(): string;
    get classHasIcon(): boolean;
    get classDisabled(): boolean;
    get classLeft(): boolean;
    get classRight(): boolean;
    get classCenter(): boolean;
    buttonIcon: NgcButtonIconDirective;
    type: string;
    color: string;
    icon: string;
    iconSize: string;
    disabled: boolean;
    alignment: NgcIBasicButtonAlignment;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    triggerKeyDownEnterAndSpace(event: KeyboardEvent): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcBasicButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcBasicButtonComponent, "button[ngcBasicButton]", never, { "type": "type"; "color": "color"; "icon": "icon"; "iconSize": "iconSize"; "disabled": "disabled"; "alignment": "alignment"; }, {}, ["buttonIcon"], ["[ngcButtonIcon]", "*"], false>;
}
