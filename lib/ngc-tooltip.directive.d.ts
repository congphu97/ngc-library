import { ElementRef, EventEmitter, ViewContainerRef, AfterViewInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Overlay, HorizontalConnectionPos, VerticalConnectionPos, PositionStrategy } from '@angular/cdk/overlay';
import { Direction } from '@angular/cdk/bidi';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NGCITooltipPosition } from './ngc-tooltip/ngc-tooltip.component';
import * as i0 from "@angular/core";
export declare type NGCITooltipTriggerType = 'hover' | 'press';
export declare class NgcTooltipDirective implements OnChanges, AfterViewInit, OnDestroy {
    private _overlay;
    private _elementRef;
    private _cdRef;
    private _vcRef;
    private _focusMonitor;
    panelClass: string | string[];
    backdropClass: string | string[];
    tooltipColor: string;
    width: string;
    minWidth: string;
    maxWidth: string;
    height: string;
    minHeight: string;
    maxHeight: string;
    disabled: boolean;
    once: boolean;
    programmatically: boolean;
    autoClose: boolean;
    hasBackdrop: boolean;
    closeOnClickOutside: boolean;
    openDelay: number;
    closeDelay: number;
    offsetX: number;
    offsetY: number;
    originX: HorizontalConnectionPos;
    originY: VerticalConnectionPos;
    overlayX: HorizontalConnectionPos;
    overlayY: VerticalConnectionPos;
    layoutDir: Direction;
    position: NGCITooltipPosition;
    triggerType: NGCITooltipTriggerType;
    opened: EventEmitter<MouseEvent>;
    closed: EventEmitter<MouseEvent>;
    isOpened: boolean;
    private _openTimeout;
    private _closeTimeout;
    private _closeAllTimeout;
    private _portal;
    private _tooltip;
    private _isPositionStrategyUpdated;
    private _visibleOnce;
    private _overlayElementHover;
    private _overlayRef;
    private _instance;
    private _resizeObserver;
    private _resizeObserver2;
    private _closeDebounce;
    get tooltip(): any;
    set tooltip(tooltip: any);
    get canAttach(): boolean;
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {ElementRef} _elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {ViewContainerRef} _vcRef
     * @param {FocusMonitor} _focusMonitor
     */
    constructor(_overlay: Overlay, _elementRef: ElementRef, _cdRef: ChangeDetectorRef, _vcRef: ViewContainerRef, _focusMonitor: FocusMonitor);
    triggerMouseClick(event: MouseEvent): void;
    triggerMouseEnter(event: MouseEvent): void;
    triggerMouseLeave(event: MouseEvent): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    open(event?: MouseEvent): void;
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    close(event?: MouseEvent): void;
    /**
     * @return {void}
     */
    closeAll(): void;
    /**
     * @param {PositionStrategy=} positionStrategy
     * @return {void}
     */
    updatePosition(positionStrategy?: PositionStrategy): void;
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    private _open;
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    private _close;
    /**
     * @return {void}
     */
    private _closeAll;
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
    private _setTooltipMessage;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcTooltipDirective, "[ngcTooltip]", ["ngcTooltip"], { "panelClass": "panelClass"; "backdropClass": "backdropClass"; "tooltipColor": "tooltipColor"; "width": "width"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "height": "height"; "minHeight": "minHeight"; "maxHeight": "maxHeight"; "disabled": "disabled"; "once": "once"; "programmatically": "programmatically"; "autoClose": "autoClose"; "hasBackdrop": "hasBackdrop"; "closeOnClickOutside": "closeOnClickOutside"; "openDelay": "openDelay"; "closeDelay": "closeDelay"; "offsetX": "offsetX"; "offsetY": "offsetY"; "originX": "originX"; "originY": "originY"; "overlayX": "overlayX"; "overlayY": "overlayY"; "layoutDir": "layoutDir"; "position": "position"; "triggerType": "triggerType"; "tooltip": "ngcTooltip"; }, { "opened": "opened"; "closed": "closed"; }, never, never, false>;
}
