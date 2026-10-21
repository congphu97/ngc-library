import { TemplateRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgcConfirmComponent, NgcIConfirmConfig } from './ngc-confirm.component';
import * as i0 from "@angular/core";
export interface NgcIConfirmRef {
    config: NgcIConfirmConfig;
    close: (answer?: boolean) => void;
    afterOpened: () => Subject<NgcConfirmComponent>;
    afterClosed: () => Subject<boolean>;
}
export declare class NgcConfirmService {
    private _overlay;
    private _router;
    opened$: Subject<NgcConfirmComponent>;
    closed$: Subject<boolean>;
    private _overlayRef;
    private _confirmRef;
    private _defaultConfig;
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {Router} _router
     */
    constructor(_overlay: Overlay, _router: Router);
    /**
     * @param {string | TemplateRef<any>} message
     * @param {string} title
     * @param {NgcIDialogConfig} config
     * @return {void}
     */
    open(message: string | TemplateRef<any>, title?: string, config?: NgcIConfirmConfig): NgcIConfirmRef;
    /**
     * @param {boolean} answer
     * @return {void}
     */
    close(answer?: boolean): void;
    /**
     * @return {void}
     */
    closeAll(): void;
    /**
     * @param {NgcIDialogConfig} config
     * @return {OverlayRef}
     */
    private _createOverlayRef;
    /**
     * @param {NgcIDialogConfig} config
     * @return {NgcIConfirmRef}
     */
    private _createConfirmRef;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcConfirmService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgcConfirmService>;
}
