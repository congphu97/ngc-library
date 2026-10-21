import { ElementRef, EventEmitter, ViewContainerRef, OnDestroy } from '@angular/core';
import { Overlay, HorizontalConnectionPos, VerticalConnectionPos, PositionStrategy } from '@angular/cdk/overlay';
import { Direction } from '@angular/cdk/bidi';
import { IObject } from '@core';
import { NgcMenuComponent, NgcIMenuPosition } from '../menu/ngc-menu.component';
import * as i0 from "@angular/core";
export declare class NgcMenuTriggerForDirective implements OnDestroy {
    private _overlay;
    private _elementRef;
    private _vcRef;
    panelClass: string | string[];
    backdropClass: string | string[];
    width: string;
    minWidth: string;
    maxWidth: string;
    height: string;
    minHeight: string;
    maxHeight: string;
    programmatically: boolean;
    autoFit: boolean;
    disabled: boolean;
    hasBackdrop: boolean;
    closeOnClickOutside: boolean;
    offsetX: number;
    offsetY: number;
    originX: HorizontalConnectionPos;
    originY: VerticalConnectionPos;
    overlayX: HorizontalConnectionPos;
    overlayY: VerticalConnectionPos;
    layoutDir: Direction;
    position: NgcIMenuPosition;
    menuData: IObject;
    menuInit: EventEmitter<NgcMenuTriggerForDirective>;
    menuOpened: EventEmitter<Event>;
    menuClosed: EventEmitter<Event>;
    menuBackdropPress: EventEmitter<Event>;
    private _portal;
    private _isPositionStrategyUpdated;
    private _isMenuOpened;
    private _overlayRef;
    private _menu;
    private _resizeObserver;
    get menu(): NgcMenuComponent;
    set menu(menu: NgcMenuComponent);
    get isMenuOpened(): boolean;
    set isMenuOpened(value: boolean);
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {ElementRef} _elementRef
     * @param {ViewContainerRef} _vcRef
     */
    constructor(_overlay: Overlay, _elementRef: ElementRef, _vcRef: ViewContainerRef);
    triggerClick(event: Event): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @param {Event} event
     * @param {IObject} data
     * @return {void}
     */
    open(event?: Event, data?: IObject): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    close(event?: Event): void;
    /**
     * @return {void}
     */
    reopen(): void;
    /**
     * @param {PositionStrategy=} positionStrategy
     * @return {void}
     */
    updatePosition(positionStrategy?: PositionStrategy): void;
    /**
     * @return {TemplatePortal}
     */
    private _createTemplatePortal;
    /**
     * @return {OverlayRef}
     */
    private _createOverlayRef;
    /**
     * @return {FlexibleConnectedPositionStrategy}
     */
    private _createPositionStrategy;
    /**
     * @param {HorizontalConnectionPos} origin
     * @return {HorizontalConnectionPos}
     */
    private _fallbackX;
    /**
     * @param {VerticalConnectionPos} origin
     * @return {VerticalConnectionPos}
     */
    private _fallbackY;
    /**
     * @return {void}
     */
    private _autoFitMenuPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuTriggerForDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuTriggerForDirective, "[ngcMenuTriggerFor]", ["ngcMenuTriggerFor"], { "panelClass": "panelClass"; "backdropClass": "backdropClass"; "width": "width"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "height": "height"; "minHeight": "minHeight"; "maxHeight": "maxHeight"; "programmatically": "programmatically"; "autoFit": "autoFit"; "disabled": "disabled"; "hasBackdrop": "hasBackdrop"; "closeOnClickOutside": "closeOnClickOutside"; "offsetX": "offsetX"; "offsetY": "offsetY"; "originX": "originX"; "originY": "originY"; "overlayX": "overlayX"; "overlayY": "overlayY"; "layoutDir": "layoutDir"; "position": "position"; "menuData": "menuData"; "menu": "ngcMenuTriggerFor"; }, { "menuInit": "menuInit"; "menuOpened": "menuOpened"; "menuClosed": "menuClosed"; "menuBackdropPress": "menuBackdropPress"; }, never, never, false>;
}
