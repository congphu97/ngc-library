import { ComponentRef, EmbeddedViewRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ComponentPortal, TemplatePortal, CdkPortalOutlet, BasePortalOutlet } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export declare type NgcIDialogPagerType = 'previous' | 'next';
export declare class NgcDialogContainerComponent extends BasePortalOutlet {
    viewContainerRef: ViewContainerRef;
    private _cdRef;
    portalOutlet: CdkPortalOutlet;
    isPreviousPagerDisplayed: boolean;
    isPreviousPagerDisabled: boolean;
    isNextPagerDisplayed: boolean;
    isNextPagerDisabled: boolean;
    isFreezing: boolean;
    isFullscreen: boolean;
    close: (data?: any) => void;
    freeze: () => void;
    unfreeze: () => void;
    fullscreen: () => void;
    exitFullscreen: () => void;
    pagerClick: (type: NgcIDialogPagerType) => void;
    /**
     * @constructor
     * @param {ViewContainerRef} viewContainerRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(viewContainerRef: ViewContainerRef, _cdRef: ChangeDetectorRef);
    /**
     * @param {ComponentPortal} portal
     * @return {ComponentRef}
     */
    attachComponentPortal(portal: ComponentPortal<any>): ComponentRef<any>;
    /**
     * @param {TemplatePortal} portal
     * @return {EmbeddedViewRef}
     */
    attachTemplatePortal(portal: TemplatePortal<any>): EmbeddedViewRef<any>;
    /**
     * @param {NgcIDialogPagerType} type
     * @return {void}
     */
    enablePager(type?: NgcIDialogPagerType): void;
    /**
     * @param {NgcIDialogPagerType} type
     * @return {void}
     */
    disablePager(type?: NgcIDialogPagerType): void;
    /**
     * @param {NgcIDialogPagerType} type
     * @return {void}
     */
    showPager(type?: NgcIDialogPagerType): void;
    /**
     * @param {NgcIDialogPagerType} type
     * @return {void}
     */
    hidePager(type?: NgcIDialogPagerType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDialogContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcDialogContainerComponent, "ngc-dialog-container", never, {}, {}, never, never, false>;
}
