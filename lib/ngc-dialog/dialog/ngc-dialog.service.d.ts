import { IObject } from '@core';
import { InjectionToken, Injector, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgcDialogContainerComponent, NgcIDialogPagerType } from '../dialog-container/ngc-dialog-container.component';
import { NgcToastService } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';
import * as i0 from "@angular/core";
export declare const NGC_DIALOG_DATA: InjectionToken<any>;
export declare const NGC_DIALOG_REF: InjectionToken<NgcIDialogRef>;
export interface NgcIDialogRef {
    uniqKey: string;
    container: NgcDialogContainerComponent;
    config: NgcIDialogConfig;
    isFreezing: boolean;
    isFullscreen: boolean;
    close: (data?: any) => void;
    freeze: () => void;
    unfreeze: () => void;
    fullscreen: () => void;
    exitFullscreen: () => void;
    pagerClick: (type: NgcIDialogPagerType) => void;
    enablePager: (type?: NgcIDialogPagerType) => void;
    disablePager: (type?: NgcIDialogPagerType) => void;
    showPager: (type?: NgcIDialogPagerType) => void;
    hidePager: (type?: NgcIDialogPagerType) => void;
    afterOpened: () => Subject<ComponentType<any>>;
    afterClosed: () => Subject<any>;
    afterFreezed: () => Subject<void>;
    afterUnfreezed: () => Subject<void>;
    afterFullscreen: () => Subject<void>;
    afterExitFullscreen: () => Subject<void>;
    afterPagerClicked: () => Subject<NgcIDialogPagerType>;
    onBeforeClose?: (...args: any[]) => any;
    onBeforeAutoClose?: (...args: any[]) => any;
}
export interface NgcIDialogConfig {
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    uniqKey?: string;
    panelClass?: string;
    backdropClass?: string;
    hasBackdrop?: boolean;
    autoClose?: boolean;
    fullscreen?: boolean;
    pager?: boolean;
    viewContainerRef?: ViewContainerRef;
    data?: IObject;
}
export declare class NgcDialogService {
    private _overlay;
    private _injector;
    private _router;
    private _ngcToastService;
    opened$: Subject<ComponentType<any>>;
    closed$: Subject<any>;
    freezed$: Subject<void>;
    unfreezed$: Subject<void>;
    fullscreen$: Subject<void>;
    exitFullscreen$: Subject<void>;
    pagerClicked$: Subject<NgcIDialogPagerType>;
    private _defaultConfig;
    private _overlayRef;
    private _dialogRef;
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {Injector} _injector
     * @param {Router} _router
     * @param {NgcToastService} _ngcToastService
     */
    constructor(_overlay: Overlay, _injector: Injector, _router: Router, _ngcToastService: NgcToastService);
    /**
     * @param {ComponentType} component
     * @param {NgcIDialogConfig} config
     * @return {NgcIDialogRef}
     */
    open(component: any, config?: NgcIDialogConfig): NgcIDialogRef;
    /**
     * @param {any} data
     * @param {string} uniqKey
     * @return {void}
     */
    close(data?: any, uniqKey?: string): void;
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    freeze(uniqKey?: string): void;
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    unfreeze(uniqKey?: string): void;
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    fullscreen(uniqKey?: string): void;
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    exitFullscreen(uniqKey?: string): void;
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    pagerClick(type: NgcIDialogPagerType, uniqKey?: string): void;
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    enablePager(type?: NgcIDialogPagerType, uniqKey?: string): void;
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    disablePager(type?: NgcIDialogPagerType, uniqKey?: string): void;
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    showPager(type?: NgcIDialogPagerType, uniqKey?: string): void;
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    hidePager(type?: NgcIDialogPagerType, uniqKey?: string): void;
    /**
     * @return {void}
     */
    closeAll(): void;
    /**
     * @param {NgcIDialogConfig} config
     * @param {string} uniqKey
     * @return {OverlayRef}
     */
    private _createOverlayRef;
    /**
     * @param {IObject} data
     * @param {NgcIDialogRef} dialogRef
     * @return {Injector}
     */
    private _createInjector;
    /**
     * @param {NgcIDialogConfig} config
     * @param {string} uniqKey
     * @return {NgcIDialogRef}
     */
    private _createDialogRef;
    /**
     * @param {string} uniqKey
     * @return {OverlayRef}
     */
    private _getOverlayRef;
    /**
     * @param {string} uniqKey
     * @return {NgcIDialogRef}
     */
    private _getDialogRef;
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    private _autoClose;
    /**
     * @param {NgcIDialogRef} dialogRef
     * @return {void}
     */
    private _markAllSubjectsAsComplete;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgcDialogService>;
}
