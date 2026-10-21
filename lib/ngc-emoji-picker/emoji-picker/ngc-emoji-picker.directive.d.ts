import { ElementRef, EventEmitter, ViewContainerRef, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Overlay, HorizontalConnectionPos, VerticalConnectionPos, PositionStrategy } from '@angular/cdk/overlay';
import { Direction } from '@angular/cdk/bidi';
import { NgcIEmojiPickerPosition, NgcIEmojiData } from './ngc-emoji-picker.component';
import * as i0 from "@angular/core";
export declare class NgcEmojiPickerDirective implements OnDestroy, OnChanges {
    private _overlay;
    private _elementRef;
    private _cdRef;
    private _vcRef;
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
    perLine: number;
    offsetX: number;
    offsetY: number;
    originX: HorizontalConnectionPos;
    originY: VerticalConnectionPos;
    overlayX: HorizontalConnectionPos;
    overlayY: VerticalConnectionPos;
    direction: Direction;
    position: NgcIEmojiPickerPosition;
    opened: EventEmitter<Event>;
    closed: EventEmitter<Event>;
    picked: EventEmitter<NgcIEmojiData>;
    backdropPress: EventEmitter<MouseEvent>;
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
     * @param {NgcIEmojiData} event
     * @return {void}
     */
    onEmojiPicked(event: NgcIEmojiData): void;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcEmojiPickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcEmojiPickerDirective, "[ngcEmojiPicker]", ["ngcEmojiPicker"], { "panelClass": "panelClass"; "backdropClass": "backdropClass"; "width": "width"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "height": "height"; "minHeight": "minHeight"; "maxHeight": "maxHeight"; "disabled": "disabled"; "hasBackdrop": "hasBackdrop"; "closeOnClickOutside": "closeOnClickOutside"; "perLine": "perLine"; "offsetX": "offsetX"; "offsetY": "offsetY"; "originX": "originX"; "originY": "originY"; "overlayX": "overlayX"; "overlayY": "overlayY"; "direction": "direction"; "position": "position"; }, { "opened": "opened"; "closed": "closed"; "picked": "picked"; "backdropPress": "backdropPress"; }, never, never, false>;
}
