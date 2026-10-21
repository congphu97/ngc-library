import { ElementRef, TemplateRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { IObject } from '@core';
import * as i0 from "@angular/core";
export declare type NGCITooltipTheme = 'default' | 'light';
export declare type NGCITooltipPosition = 'above' | 'below' | 'before' | 'after';
export declare type NGCITooltipDirection = 'start' | 'end' | 'center';
export declare class NgcTooltipComponent {
    private _elementRef;
    private _cdRef;
    private _ngZone;
    templateRef: TemplateRef<any>;
    color: string;
    backdropClass: string;
    width: string;
    minWidth: string;
    maxWidth: string;
    height: string;
    minHeight: string;
    maxHeight: string;
    messageOnly: boolean;
    theme: NGCITooltipTheme;
    message: string;
    close: (event?: MouseEvent) => void;
    classList: IObject<boolean>;
    private _previousPanelClass;
    set panelClass(classes: string);
    get nativeElement(): HTMLElement;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {NgZone} _ngZone
     */
    constructor(_elementRef: ElementRef, _cdRef: ChangeDetectorRef, _ngZone: NgZone);
    /**
     * @param {NGCITooltipPosition} position
     * @param {NGCITooltipDirection} direction
     * @return {void}
     */
    setPositionClasses(position: NGCITooltipPosition, direction?: NGCITooltipDirection): void;
    /**
     * @return {void}
     */
    reattach(): void;
    /**
     * @return {void}
     */
    detach(): void;
    /**
     * @return {void}
     */
    markForCheck(): void;
    /**
     * @return {void}
     */
    detectChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTooltipComponent, "ngc-tooltip", never, { "color": "color"; "backdropClass": "backdropClass"; "width": "width"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "height": "height"; "minHeight": "minHeight"; "maxHeight": "maxHeight"; "messageOnly": "messageOnly"; "theme": "theme"; "panelClass": "class"; }, {}, never, ["*"], false>;
}
