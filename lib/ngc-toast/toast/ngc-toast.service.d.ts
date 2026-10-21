import { Overlay } from '@angular/cdk/overlay';
import { NgcIToastConfig } from './ngc-toast.component';
import * as i0 from "@angular/core";
export declare class NgcToastService {
    private _overlay;
    private _topOverlayRef;
    private _bottomOverlayRef;
    private _topPortal;
    private _bottomPortal;
    private _topInstance;
    private _bottomInstance;
    private _defaultConfig;
    /**
     * @constructor
     * @param {Overlay} _overlay
     */
    constructor(_overlay: Overlay);
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    show(title: string, arg?: any, config?: NgcIToastConfig): number;
    /**
     * @param {number} id
     * @return {void}
     */
    close(id: number): void;
    /**
     * @return {void}
     */
    closeAll(): void;
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    info(title: string, arg?: any, config?: NgcIToastConfig): number;
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    success(title: string, arg?: any, config?: NgcIToastConfig): number;
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    warning(title: string, arg?: any, config?: NgcIToastConfig): number;
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    danger(title: string, arg?: any, config?: NgcIToastConfig): number;
    /**
     * @param {string} title
     * @param {string} description
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    private _showOnTop;
    /**
     * @param {string} title
     * @param {string} description
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    private _showOnBottom;
    /**
     * @param {NgcIToastPosition} position
     * @return {OverlayRef}
     */
    private _createOverlayRef;
    /**
     * @return {ComponentPortal}
     */
    private _createPortal;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgcToastService>;
}
