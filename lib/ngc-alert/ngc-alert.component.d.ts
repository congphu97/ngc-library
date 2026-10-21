import { EventEmitter, ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcAlertComponent implements AfterViewInit, OnChanges {
    private _elementRef;
    get styleBorderColor(): string;
    get styleBgColor(): string;
    get styleTextColor(): string;
    color: string;
    textColor: string;
    background: string;
    borderColor: string;
    icon: string;
    closeable: boolean;
    closed: EventEmitter<void>;
    isClosed: boolean;
    get classHidden(): boolean;
    get isCustomColor(): boolean;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    close(event?: Event): void;
    private _applyColorClass;
    private _hexToRgba;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcAlertComponent, "ngc-alert, [ngcAlert]", never, { "color": "color"; "textColor": "textColor"; "background": "background"; "borderColor": "borderColor"; "icon": "icon"; "closeable": "closeable"; }, { "closed": "closed"; }, never, ["*"], false>;
}
