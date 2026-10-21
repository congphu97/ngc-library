import { ElementRef, EventEmitter, ViewContainerRef, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Overlay, HorizontalConnectionPos, VerticalConnectionPos, PositionStrategy } from '@angular/cdk/overlay';
import { Direction } from '@angular/cdk/bidi';
import { NgcIColorPickerPosition, NgcIColorPickerEmptyMode } from './ngc-color-picker.component';
import * as i0 from "@angular/core";
export declare class NgcColorPickerDirective implements OnDestroy, OnChanges {
    private _overlay;
    private _elementRef;
    private _cdRef;
    private _vcRef;
    pickedColor: string;
    panelClass: string | string[];
    backdropClass: string | string[];
    width: string;
    minWidth: string;
    maxWidth: string;
    height: string;
    minHeight: string;
    maxHeight: string;
    disabled: boolean;
    hasBackdrop: boolean;
    closeOnClickOutside: boolean;
    offsetX: number;
    offsetY: number;
    originX: HorizontalConnectionPos;
    originY: VerticalConnectionPos;
    overlayX: HorizontalConnectionPos;
    overlayY: VerticalConnectionPos;
    direction: Direction;
    position: NgcIColorPickerPosition;
    emptyMode: NgcIColorPickerEmptyMode;
    opened: EventEmitter<Event>;
    closed: EventEmitter<Event>;
    picked: EventEmitter<string>;
    backdropPress: EventEmitter<MouseEvent>;
    pickedColorChange: EventEmitter<string>;
    isOpened: boolean;
    private _isPositionStrategyUpdated;
    private _instance;
    private _portal;
    private _overlayRef;
    private _resizeObserver;
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {ViewContainerRef} _vcRef
     */
    constructor(_overlay: Overlay, _elementRef: ElementRef, _cdRef: ChangeDetectorRef, _vcRef: ViewContainerRef);
    triggerClick(event: Event): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @param {string} color
     * @return {void}
     */
    onColorPicked(color: string): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    open(event?: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    close(event?: Event): void;
    /**
     * @param {PositionStrategy=} positionStrategy
     * @return {void}
     */
    updatePosition(positionStrategy?: PositionStrategy): void;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcColorPickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcColorPickerDirective, "[ngcColorPicker]", ["ngcColorPicker"], { "pickedColor": "pickedColor"; "panelClass": "panelClass"; "backdropClass": "backdropClass"; "width": "width"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "height": "height"; "minHeight": "minHeight"; "maxHeight": "maxHeight"; "disabled": "disabled"; "hasBackdrop": "hasBackdrop"; "closeOnClickOutside": "closeOnClickOutside"; "offsetX": "offsetX"; "offsetY": "offsetY"; "originX": "originX"; "originY": "originY"; "overlayX": "overlayX"; "overlayY": "overlayY"; "direction": "direction"; "position": "position"; "emptyMode": "emptyMode"; }, { "opened": "opened"; "closed": "closed"; "picked": "picked"; "backdropPress": "backdropPress"; "pickedColorChange": "pickedColorChange"; }, never, never, false>;
}
