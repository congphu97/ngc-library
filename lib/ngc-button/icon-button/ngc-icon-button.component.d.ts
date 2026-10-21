import { ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { ContrastPipe } from '@core';
import * as i0 from "@angular/core";
export declare class NgcIconButtonComponent implements AfterViewInit, OnChanges {
    private _elementRef;
    private _contrastPipe;
    get attrType(): string;
    get attrDisabled(): boolean;
    get styleColor(): string;
    get styleSize(): string;
    get styleIconColor(): string;
    get styleIconSize(): string;
    get styleBorderColor(): string;
    get styleBorderStyle(): string;
    get styleBorderWidth(): string;
    get classDisabled(): boolean;
    get classSquare(): boolean;
    type: string;
    color: string;
    size: string;
    icon: string;
    iconColor: string;
    iconSize: string;
    borderColor: string;
    borderStyle: string;
    borderWidth: string;
    disabled: boolean;
    square: boolean;
    private _bkIconColor;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcIconButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcIconButtonComponent, "button[ngcIconButton]", never, { "type": "type"; "color": "color"; "size": "size"; "icon": "icon"; "iconColor": "iconColor"; "iconSize": "iconSize"; "borderColor": "borderColor"; "borderStyle": "borderStyle"; "borderWidth": "borderWidth"; "disabled": "disabled"; "square": "square"; }, {}, never, ["*"], false>;
}
