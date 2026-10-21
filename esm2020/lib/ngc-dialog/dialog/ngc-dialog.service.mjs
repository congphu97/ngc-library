import { Injectable, InjectionToken, Injector } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil, pairwise } from 'rxjs/operators';
import moment from 'moment-timezone';
import _ from 'lodash';
import { NgcDialogContainerComponent } from '../dialog-container/ngc-dialog-container.component';
import { NgcToastService } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/router";
import * as i3 from "@app/@ngc/ngc-toast/toast/ngc-toast.service";
export const NGC_DIALOG_DATA = new InjectionToken('Ngc_DIALOG_DATA');
export const NGC_DIALOG_REF = new InjectionToken('Ngc_DIALOG_REF');
let overlayRefLookup = {};
let dialogRefLookup = {};
export class NgcDialogService {
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {Injector} _injector
     * @param {Router} _router
     * @param {NgcToastService} _ngcToastService
     */
    constructor(_overlay, _injector, _router, _ngcToastService) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._router = _router;
        this._ngcToastService = _ngcToastService;
        this.opened$ = new Subject();
        this.closed$ = new Subject();
        this.freezed$ = new Subject();
        this.unfreezed$ = new Subject();
        this.fullscreen$ = new Subject();
        this.exitFullscreen$ = new Subject();
        this.pagerClicked$ = new Subject();
        this._defaultConfig = { autoClose: true };
        // On router events changes
        this._router.events
            .pipe(filter((event) => event instanceof NavigationStart), map((event) => event.url.split('?')[0]), pairwise())
            .subscribe((results) => results[0] !== results[1] && this.closeAll());
    }
    /**
     * @param {ComponentType} component
     * @param {NgcIDialogConfig} config
     * @return {NgcIDialogRef}
     */
    open(component, config) {
        config = { ...this._defaultConfig, ...config };
        const uniqKey = component.DIALOG_UNIQ_KEY || config.uniqKey || String(+moment());
        const overlayRef = this._createOverlayRef(config, uniqKey);
        const dialogRef = this._createDialogRef(config, uniqKey);
        const containerPortal = new ComponentPortal(NgcDialogContainerComponent, config.viewContainerRef);
        const instance = overlayRef.attach(containerPortal).instance;
        const detachments = overlayRef.detachments();
        detachments.subscribe(() => {
            this._markAllSubjectsAsComplete(dialogRef);
            detachments.complete();
        });
        this._overlayRef = overlayRefLookup[uniqKey] = overlayRef;
        this._dialogRef = dialogRefLookup[uniqKey] = dialogRef;
        if (_.isFunction(component)) {
            const componentPortal = new ComponentPortal(component, instance.viewContainerRef, this._createInjector(config.data, dialogRef));
            instance.attachComponentPortal(componentPortal);
        }
        else {
            const templatePortal = new TemplatePortal(component, instance.viewContainerRef, { data: config.data, dialogRef });
            instance.attachTemplatePortal(templatePortal);
        }
        instance.isPreviousPagerDisplayed = instance.isNextPagerDisplayed = config.pager;
        instance.isFreezing = dialogRef.isFreezing;
        instance.isFullscreen = dialogRef.isFullscreen;
        // instance.open = this.open.bind( this );
        instance.close = (data) => this.close(data, uniqKey);
        instance.freeze = () => this.freeze(uniqKey);
        instance.unfreeze = () => this.unfreeze(uniqKey);
        instance.fullscreen = () => this.fullscreen(uniqKey);
        instance.exitFullscreen = () => this.exitFullscreen(uniqKey);
        instance.pagerClick = (type) => this.pagerClick(type, uniqKey);
        // Bind instance to dialog ref
        dialogRef.container = instance;
        // Open fullscreen
        config.fullscreen && this.fullscreen();
        // Close all toasts to avoid conflict
        this._ngcToastService.closeAll();
        // Emit opened event
        setTimeout(() => {
            const afterOpened$ = dialogRef.afterOpened();
            afterOpened$.next(component);
            afterOpened$.complete();
            this.opened$.next(component);
        });
        return dialogRef;
    }
    /**
     * @param {any} data
     * @param {string} uniqKey
     * @return {void}
     */
    close(data, uniqKey) {
        const overlayRef = this._getOverlayRef(uniqKey);
        if (!overlayRef)
            return;
        const dialogRef = this._getDialogRef(uniqKey);
        if (!dialogRef || dialogRef.isFreezing)
            return;
        if (_.isFunction(dialogRef.onBeforeClose))
            data = dialogRef.onBeforeClose(data, uniqKey);
        const afterClosed$ = dialogRef.afterClosed();
        // dialogRef.isFullscreen = dialogRef.container.isFullscreen = false;
        afterClosed$.next(data);
        afterClosed$.complete();
        this.closed$.next(data);
        overlayRef.detach();
    }
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    freeze(uniqKey) {
        const dialogRef = this._getDialogRef(uniqKey);
        if (!dialogRef)
            return;
        dialogRef.isFreezing = dialogRef.container.isFreezing = true;
        dialogRef.afterFreezed().next();
        this.freezed$.next();
    }
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    unfreeze(uniqKey) {
        const dialogRef = this._getDialogRef(uniqKey);
        if (!dialogRef)
            return;
        dialogRef.isFreezing = dialogRef.container.isFreezing = false;
        dialogRef.afterUnfreezed().next();
        this.unfreezed$.next();
    }
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    fullscreen(uniqKey) {
        const overlayRef = this._getOverlayRef(uniqKey);
        const dialogRef = this._getDialogRef(uniqKey);
        if (!overlayRef || !dialogRef)
            return;
        dialogRef.isFullscreen = dialogRef.container.isFullscreen = true;
        overlayRef.addPanelClass('ngc-dialog-panel--fullscreen');
        dialogRef.afterFullscreen().next();
        this.fullscreen$.next();
    }
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    exitFullscreen(uniqKey) {
        const overlayRef = this._getOverlayRef(uniqKey);
        const dialogRef = this._getDialogRef(uniqKey);
        if (!overlayRef || !dialogRef)
            return;
        dialogRef.isFullscreen = dialogRef.container.isFullscreen = false;
        overlayRef.removePanelClass('ngc-dialog-panel--fullscreen');
        dialogRef.afterExitFullscreen().next();
        this.exitFullscreen$.next();
    }
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    pagerClick(type, uniqKey) {
        const dialogRef = this._getDialogRef(uniqKey);
        if (!dialogRef)
            return;
        dialogRef.afterPagerClicked().next(type);
        this.pagerClicked$.next(type);
    }
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    enablePager(type, uniqKey) {
        this._getDialogRef(uniqKey)?.container?.enablePager(type);
    }
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    disablePager(type, uniqKey) {
        this._getDialogRef(uniqKey)?.container?.disablePager(type);
    }
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    showPager(type, uniqKey) {
        this._getDialogRef(uniqKey)?.container?.showPager(type);
    }
    /**
     * @param {NgcIDialogPagerType} type
     * @param {string} uniqKey
     * @return {void}
     */
    hidePager(type, uniqKey) {
        this._getDialogRef(uniqKey)?.container?.hidePager(type);
    }
    /**
     * @return {void}
     */
    closeAll() {
        _.forEach(overlayRefLookup, (overlayRef) => { overlayRef.detach(); });
        overlayRefLookup = {};
        dialogRefLookup = {};
    }
    /**
     * @param {NgcIDialogConfig} config
     * @param {string} uniqKey
     * @return {OverlayRef}
     */
    _createOverlayRef(config, uniqKey) {
        const hasBackdrop = config?.hasBackdrop;
        const minWidth = config?.minWidth;
        const minHeight = config?.minHeight;
        const positionStrategy = this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const overlayConfig = new OverlayConfig({
            positionStrategy,
            hasBackdrop: hasBackdrop !== undefined ? hasBackdrop : true,
            backdropClass: ['ngc-dialog-backdrop', config?.backdropClass],
            panelClass: ['ngc-dialog-panel', config?.panelClass],
            width: config?.width,
            minWidth: parseFloat(minWidth) < window.innerWidth ? minWidth : undefined,
            maxWidth: config?.maxWidth,
            height: config?.height,
            minHeight: parseFloat(minHeight) < window.innerHeight ? minHeight : undefined,
            maxHeight: config?.maxHeight,
        });
        const overlayRef = this._overlay.create(overlayConfig);
        // Catch keyboard events on menu
        overlayRef
            .keydownEvents()
            .pipe(takeUntil(overlayRef.detachments()))
            .subscribe((event) => {
            if (event.key !== 'Escape')
                return;
            event.stopPropagation();
            event.preventDefault();
            const dialogRef = this._getDialogRef(uniqKey);
            if (dialogRef.isFullscreen) {
                this.exitFullscreen();
                return;
            }
            config.autoClose && this._autoClose(uniqKey);
        });
        // On backdrop click
        overlayRef
            .backdropClick()
            .pipe(takeUntil(overlayRef.detachments()))
            .subscribe(() => config.autoClose && this._autoClose(uniqKey));
        /** relate issue to close( null )
         * https://bitbucket.org/workgotcom/frontend/pull-requests/1892
         */
        return overlayRef;
    }
    /**
     * @param {IObject} data
     * @param {NgcIDialogRef} dialogRef
     * @return {Injector}
     */
    _createInjector(data, dialogRef) {
        const providers = [
            { provide: NGC_DIALOG_DATA, useValue: data },
            { provide: NGC_DIALOG_REF, useValue: dialogRef },
        ];
        return Injector.create({ providers, parent: this._injector });
    }
    /**
     * @param {NgcIDialogConfig} config
     * @param {string} uniqKey
     * @return {NgcIDialogRef}
     */
    _createDialogRef(config, uniqKey) {
        const opened$ = new Subject();
        const closed$ = new Subject();
        const freezed$ = new Subject();
        const unfreezed$ = new Subject();
        const fullscreen$ = new Subject();
        const exitFullscreen$ = new Subject();
        const pagerClicked$ = new Subject();
        return {
            config, uniqKey,
            container: null,
            isFreezing: false,
            isFullscreen: false,
            close: (data) => this.close(data, uniqKey),
            freeze: () => this.freeze(uniqKey),
            unfreeze: () => this.unfreeze(uniqKey),
            fullscreen: () => this.fullscreen(uniqKey),
            exitFullscreen: () => this.exitFullscreen(uniqKey),
            pagerClick: (type) => this.pagerClick(type, uniqKey),
            enablePager: (type) => this.enablePager(type, uniqKey),
            disablePager: (type) => this.disablePager(type, uniqKey),
            showPager: (type) => this.showPager(type, uniqKey),
            hidePager: (type) => this.hidePager(type, uniqKey),
            afterOpened: () => opened$,
            afterClosed: () => closed$,
            afterFreezed: () => freezed$,
            afterUnfreezed: () => unfreezed$,
            afterFullscreen: () => fullscreen$,
            afterExitFullscreen: () => exitFullscreen$,
            afterPagerClicked: () => pagerClicked$,
        };
    }
    /**
     * @param {string} uniqKey
     * @return {OverlayRef}
     */
    _getOverlayRef(uniqKey) {
        return uniqKey ? overlayRefLookup[uniqKey] : this._overlayRef;
    }
    /**
     * @param {string} uniqKey
     * @return {NgcIDialogRef}
     */
    _getDialogRef(uniqKey) {
        return uniqKey ? dialogRefLookup[uniqKey] : this._dialogRef;
    }
    /**
     * @param {string} uniqKey
     * @return {void}
     */
    _autoClose(uniqKey) {
        const dialogRef = this._getDialogRef(uniqKey);
        const data = _.isFunction(dialogRef.onBeforeAutoClose)
            ? dialogRef.onBeforeAutoClose(uniqKey)
            : null;
        this.close(data, uniqKey);
    }
    /**
     * @param {NgcIDialogRef} dialogRef
     * @return {void}
     */
    _markAllSubjectsAsComplete(dialogRef) {
        if (!dialogRef)
            return;
        dialogRef.afterOpened().complete();
        dialogRef.afterClosed().complete();
        dialogRef.afterFreezed().complete();
        dialogRef.afterUnfreezed().complete();
        dialogRef.afterFullscreen().complete();
        dialogRef.afterExitFullscreen().complete();
        dialogRef.afterPagerClicked().complete();
    }
}
NgcDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDialogService, deps: [{ token: i1.Overlay }, { token: i0.Injector }, { token: i2.Router }, { token: i3.NgcToastService }], target: i0.ɵɵFactoryTarget.Injectable });
NgcDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.Injector }, { type: i2.Router }, { type: i3.NgcToastService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZGlhbG9nL2RpYWxvZy9uZ2MtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQWMsT0FBTyxFQUFvQixhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRixPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUd2QixPQUFPLEVBQUUsMkJBQTJCLEVBQXVCLE1BQU0sb0RBQW9ELENBQUM7QUFDdEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7OztBQUU5RSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQXdCLElBQUksY0FBYyxDQUFPLGlCQUFpQixDQUFFLENBQUM7QUFDakcsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQyxJQUFJLGNBQWMsQ0FBaUIsZ0JBQWdCLENBQUUsQ0FBQztBQStDbkgsSUFBSSxnQkFBZ0IsR0FBd0MsRUFBRSxDQUFDO0FBQy9ELElBQUksZUFBZSxHQUEyQyxFQUFFLENBQUM7QUFHakUsTUFBTSxPQUFPLGdCQUFnQjtJQWM1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LElBQUksRUFBRSxPQUFPLENBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssMEJBQTBCLENBQUUsU0FBd0I7UUFDM0QsSUFBSyxDQUFDLFNBQVM7WUFBRyxPQUFPO1FBRXpCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7NkdBN1pXLGdCQUFnQjtpSEFBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJT2JqZWN0IH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBWaWV3Q29udGFpbmVyUmVmLCBTdGF0aWNQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiwgT3ZlcmxheSwgUG9zaXRpb25TdHJhdGVneSwgT3ZlcmxheUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgVGVtcGxhdGVQb3J0YWwsIENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlVW50aWwsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG5pbXBvcnQgeyBOZ2NEaWFsb2dDb250YWluZXJDb21wb25lbnQsIE5nY0lEaWFsb2dQYWdlclR5cGUgfSBmcm9tICcuLi9kaWFsb2ctY29udGFpbmVyL25nYy1kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NUb2FzdFNlcnZpY2UgfSBmcm9tICdAYXBwL0BuZ2MvbmdjLXRvYXN0L3RvYXN0L25nYy10b2FzdC5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IE5HQ19ESUFMT0dfREFUQTogSW5qZWN0aW9uVG9rZW48YW55PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCAnTmdjX0RJQUxPR19EQVRBJyApO1xuZXhwb3J0IGNvbnN0IE5HQ19ESUFMT0dfUkVGOiBJbmplY3Rpb25Ub2tlbjxOZ2NJRGlhbG9nUmVmPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ2NJRGlhbG9nUmVmPiggJ05nY19ESUFMT0dfUkVGJyApO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nY0lEaWFsb2dSZWYge1xuXHR1bmlxS2V5OiBzdHJpbmc7XG5cdGNvbnRhaW5lcjogTmdjRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50O1xuXHRjb25maWc6IE5nY0lEaWFsb2dDb25maWc7XG5cdGlzRnJlZXppbmc6IGJvb2xlYW47XG5cdGlzRnVsbHNjcmVlbjogYm9vbGVhbjtcblx0Y2xvc2U6ICggZGF0YT86IGFueSApID0+IHZvaWQ7XG5cdGZyZWV6ZTogKCkgPT4gdm9pZDtcblx0dW5mcmVlemU6ICgpID0+IHZvaWQ7XG5cdGZ1bGxzY3JlZW46ICgpID0+IHZvaWQ7XG5cdGV4aXRGdWxsc2NyZWVuOiAoKSA9PiB2b2lkO1xuXHRwYWdlckNsaWNrOiAoIHR5cGU6IE5nY0lEaWFsb2dQYWdlclR5cGUgKSA9PiB2b2lkO1xuXHRlbmFibGVQYWdlcjogKCB0eXBlPzogTmdjSURpYWxvZ1BhZ2VyVHlwZSApID0+IHZvaWQ7XG5cdGRpc2FibGVQYWdlcjogKCB0eXBlPzogTmdjSURpYWxvZ1BhZ2VyVHlwZSApID0+IHZvaWQ7XG5cdHNob3dQYWdlcjogKCB0eXBlPzogTmdjSURpYWxvZ1BhZ2VyVHlwZSApID0+IHZvaWQ7XG5cdGhpZGVQYWdlcjogKCB0eXBlPzogTmdjSURpYWxvZ1BhZ2VyVHlwZSApID0+IHZvaWQ7XG5cdGFmdGVyT3BlbmVkOiAoKSA9PiBTdWJqZWN0PENvbXBvbmVudFR5cGU8YW55Pj47XG5cdGFmdGVyQ2xvc2VkOiAoKSA9PiBTdWJqZWN0PGFueT47XG5cdGFmdGVyRnJlZXplZDogKCkgPT4gU3ViamVjdDx2b2lkPjtcblx0YWZ0ZXJVbmZyZWV6ZWQ6ICgpID0+IFN1YmplY3Q8dm9pZD47XG5cdGFmdGVyRnVsbHNjcmVlbjogKCkgPT4gU3ViamVjdDx2b2lkPjtcblx0YWZ0ZXJFeGl0RnVsbHNjcmVlbjogKCkgPT4gU3ViamVjdDx2b2lkPjtcblx0YWZ0ZXJQYWdlckNsaWNrZWQ6ICgpID0+IFN1YmplY3Q8TmdjSURpYWxvZ1BhZ2VyVHlwZT47XG5cdG9uQmVmb3JlQ2xvc2U/OiAoIC4uLmFyZ3MgKSA9PiBhbnk7XG5cdG9uQmVmb3JlQXV0b0Nsb3NlPzogKCAuLi5hcmdzICkgPT4gYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nY0lEaWFsb2dDb25maWcge1xuXHRoZWlnaHQ/OiBzdHJpbmc7XG5cdG1pbkhlaWdodD86IHN0cmluZztcblx0bWF4SGVpZ2h0Pzogc3RyaW5nO1xuXHR3aWR0aD86IHN0cmluZztcblx0bWluV2lkdGg/OiBzdHJpbmc7XG5cdG1heFdpZHRoPzogc3RyaW5nO1xuXHR1bmlxS2V5Pzogc3RyaW5nO1xuXHRwYW5lbENsYXNzPzogc3RyaW5nO1xuXHRiYWNrZHJvcENsYXNzPzogc3RyaW5nO1xuXHRoYXNCYWNrZHJvcD86IGJvb2xlYW47XG5cdGF1dG9DbG9zZT86IGJvb2xlYW47XG5cdGZ1bGxzY3JlZW4/OiBib29sZWFuO1xuXHRwYWdlcj86IGJvb2xlYW47XG5cdHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuXHRkYXRhPzogSU9iamVjdDtcbn1cblxubGV0IG92ZXJsYXlSZWZMb29rdXA6IHsgWyB1bmlxS2V5OiBzdHJpbmcgXTogT3ZlcmxheVJlZiB9ID0ge307XG5sZXQgZGlhbG9nUmVmTG9va3VwOiB7IFsgdW5pcUtleTogc3RyaW5nIF06IE5nY0lEaWFsb2dSZWYgfSA9IHt9O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdjRGlhbG9nU2VydmljZSB7XG5cblx0cHVibGljIG9wZW5lZCQ6IFN1YmplY3Q8Q29tcG9uZW50VHlwZTxhbnk+PiA9IG5ldyBTdWJqZWN0PENvbXBvbmVudFR5cGU8YW55Pj4oKTtcblx0cHVibGljIGNsb3NlZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblx0cHVibGljIGZyZWV6ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblx0cHVibGljIHVuZnJlZXplZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXHRwdWJsaWMgZnVsbHNjcmVlbiQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXHRwdWJsaWMgZXhpdEZ1bGxzY3JlZW4kOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblx0cHVibGljIHBhZ2VyQ2xpY2tlZCQ6IFN1YmplY3Q8TmdjSURpYWxvZ1BhZ2VyVHlwZT4gPSBuZXcgU3ViamVjdDxOZ2NJRGlhbG9nUGFnZXJUeXBlPigpO1xuXG5cdHByaXZhdGUgX2RlZmF1bHRDb25maWc6IE5nY0lEaWFsb2dDb25maWcgPSB7IGF1dG9DbG9zZTogdHJ1ZSB9O1xuXHRwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuXHRwcml2YXRlIF9kaWFsb2dSZWY6IE5nY0lEaWFsb2dSZWY7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge092ZXJsYXl9IF9vdmVybGF5XG5cdCAqIEBwYXJhbSB7SW5qZWN0b3J9IF9pbmplY3RvclxuXHQgKiBAcGFyYW0ge1JvdXRlcn0gX3JvdXRlclxuXHQgKiBAcGFyYW0ge05nY1RvYXN0U2VydmljZX0gX25nY1RvYXN0U2VydmljZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcblx0XHRwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBfbmdjVG9hc3RTZXJ2aWNlOiBOZ2NUb2FzdFNlcnZpY2Vcblx0KSB7XG5cdFx0Ly8gT24gcm91dGVyIGV2ZW50cyBjaGFuZ2VzXG5cdFx0dGhpcy5fcm91dGVyLmV2ZW50c1xuXHRcdC5waXBlKFxuXHRcdFx0ZmlsdGVyKCAoIGV2ZW50OiBOYXZpZ2F0aW9uU3RhcnQgKSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCApLFxuXHRcdFx0bWFwKCAoIGV2ZW50OiBOYXZpZ2F0aW9uU3RhcnQgKSA9PiBldmVudC51cmwuc3BsaXQoICc/JyApWyAwIF0gKSxcblx0XHRcdHBhaXJ3aXNlKClcblx0XHQpXG5cdFx0LnN1YnNjcmliZSggKCByZXN1bHRzOiBzdHJpbmdbXSApID0+IHJlc3VsdHNbIDAgXSAhPT0gcmVzdWx0c1sgMSBdICYmIHRoaXMuY2xvc2VBbGwoKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Q29tcG9uZW50VHlwZX0gY29tcG9uZW50XG5cdCAqIEBwYXJhbSB7TmdjSURpYWxvZ0NvbmZpZ30gY29uZmlnXG5cdCAqIEByZXR1cm4ge05nY0lEaWFsb2dSZWZ9XG5cdCAqL1xuXHRwdWJsaWMgb3BlbiggY29tcG9uZW50OiBhbnksIGNvbmZpZz86IE5nY0lEaWFsb2dDb25maWcgKTogTmdjSURpYWxvZ1JlZiB7XG5cdFx0Y29uZmlnID0geyAuLi50aGlzLl9kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfTtcblxuXHRcdGNvbnN0IHVuaXFLZXk6IHN0cmluZyA9IGNvbXBvbmVudC5ESUFMT0dfVU5JUV9LRVkgfHwgY29uZmlnLnVuaXFLZXkgfHwgU3RyaW5nKCArbW9tZW50KCkgKTtcblx0XHRjb25zdCBvdmVybGF5UmVmOiBPdmVybGF5UmVmID0gdGhpcy5fY3JlYXRlT3ZlcmxheVJlZiggY29uZmlnLCB1bmlxS2V5ICk7XG5cdFx0Y29uc3QgZGlhbG9nUmVmOiBOZ2NJRGlhbG9nUmVmID0gdGhpcy5fY3JlYXRlRGlhbG9nUmVmKCBjb25maWcsIHVuaXFLZXkgKTtcblx0XHRjb25zdCBjb250YWluZXJQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxOZ2NEaWFsb2dDb250YWluZXJDb21wb25lbnQ+XG5cdFx0XHQ9IG5ldyBDb21wb25lbnRQb3J0YWwoIE5nY0RpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCwgY29uZmlnLnZpZXdDb250YWluZXJSZWYgKTtcblx0XHRjb25zdCBpbnN0YW5jZTogTmdjRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50ID0gb3ZlcmxheVJlZi5hdHRhY2goIGNvbnRhaW5lclBvcnRhbCApLmluc3RhbmNlO1xuXHRcdGNvbnN0IGRldGFjaG1lbnRzOiBPYnNlcnZhYmxlPHZvaWQ+ID0gb3ZlcmxheVJlZi5kZXRhY2htZW50cygpO1xuXG5cdFx0ZGV0YWNobWVudHMuc3Vic2NyaWJlKCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9tYXJrQWxsU3ViamVjdHNBc0NvbXBsZXRlKCBkaWFsb2dSZWYgKTtcblxuXHRcdFx0KCBkZXRhY2htZW50cyBhcyBTdWJqZWN0PHZvaWQ+ICkuY29tcGxldGUoKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLl9vdmVybGF5UmVmID0gb3ZlcmxheVJlZkxvb2t1cFsgdW5pcUtleSBdID0gb3ZlcmxheVJlZjtcblx0XHR0aGlzLl9kaWFsb2dSZWYgPSBkaWFsb2dSZWZMb29rdXBbIHVuaXFLZXkgXSA9IGRpYWxvZ1JlZjtcblxuXHRcdGlmICggXy5pc0Z1bmN0aW9uKCBjb21wb25lbnQgKSApIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPENvbXBvbmVudFR5cGU8YW55Pj5cblx0XHRcdFx0PSBuZXcgQ29tcG9uZW50UG9ydGFsKCBjb21wb25lbnQsIGluc3RhbmNlLnZpZXdDb250YWluZXJSZWYsIHRoaXMuX2NyZWF0ZUluamVjdG9yKCBjb25maWcuZGF0YSwgZGlhbG9nUmVmICkgKTtcblxuXHRcdFx0aW5zdGFuY2UuYXR0YWNoQ29tcG9uZW50UG9ydGFsKCBjb21wb25lbnRQb3J0YWwgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVQb3J0YWw6IFRlbXBsYXRlUG9ydGFsXG5cdFx0XHRcdD0gbmV3IFRlbXBsYXRlUG9ydGFsKCBjb21wb25lbnQsIGluc3RhbmNlLnZpZXdDb250YWluZXJSZWYsIHsgZGF0YTogY29uZmlnLmRhdGEsIGRpYWxvZ1JlZiB9ICk7XG5cblx0XHRcdGluc3RhbmNlLmF0dGFjaFRlbXBsYXRlUG9ydGFsKCB0ZW1wbGF0ZVBvcnRhbCApO1xuXHRcdH1cblxuXHRcdGluc3RhbmNlLmlzUHJldmlvdXNQYWdlckRpc3BsYXllZCA9IGluc3RhbmNlLmlzTmV4dFBhZ2VyRGlzcGxheWVkID0gY29uZmlnLnBhZ2VyO1xuXHRcdGluc3RhbmNlLmlzRnJlZXppbmcgPSBkaWFsb2dSZWYuaXNGcmVlemluZztcblx0XHRpbnN0YW5jZS5pc0Z1bGxzY3JlZW4gPSBkaWFsb2dSZWYuaXNGdWxsc2NyZWVuO1xuXHRcdC8vIGluc3RhbmNlLm9wZW4gPSB0aGlzLm9wZW4uYmluZCggdGhpcyApO1xuXHRcdGluc3RhbmNlLmNsb3NlID0gKCBkYXRhPzogYW55ICkgPT4gdGhpcy5jbG9zZSggZGF0YSwgdW5pcUtleSApO1xuXHRcdGluc3RhbmNlLmZyZWV6ZSA9ICgpID0+IHRoaXMuZnJlZXplKCB1bmlxS2V5ICk7XG5cdFx0aW5zdGFuY2UudW5mcmVlemUgPSAoKSA9PiB0aGlzLnVuZnJlZXplKCB1bmlxS2V5ICk7XG5cdFx0aW5zdGFuY2UuZnVsbHNjcmVlbiA9ICgpID0+IHRoaXMuZnVsbHNjcmVlbiggdW5pcUtleSApO1xuXHRcdGluc3RhbmNlLmV4aXRGdWxsc2NyZWVuID0gKCkgPT4gdGhpcy5leGl0RnVsbHNjcmVlbiggdW5pcUtleSApO1xuXHRcdGluc3RhbmNlLnBhZ2VyQ2xpY2sgPSAoIHR5cGU6IE5nY0lEaWFsb2dQYWdlclR5cGUgKSA9PiB0aGlzLnBhZ2VyQ2xpY2soIHR5cGUsIHVuaXFLZXkgKTtcblxuXHRcdC8vIEJpbmQgaW5zdGFuY2UgdG8gZGlhbG9nIHJlZlxuXHRcdGRpYWxvZ1JlZi5jb250YWluZXIgPSBpbnN0YW5jZTtcblxuXHRcdC8vIE9wZW4gZnVsbHNjcmVlblxuXHRcdGNvbmZpZy5mdWxsc2NyZWVuICYmIHRoaXMuZnVsbHNjcmVlbigpO1xuXG5cdFx0Ly8gQ2xvc2UgYWxsIHRvYXN0cyB0byBhdm9pZCBjb25mbGljdFxuXHRcdHRoaXMuX25nY1RvYXN0U2VydmljZS5jbG9zZUFsbCgpO1xuXG5cdFx0Ly8gRW1pdCBvcGVuZWQgZXZlbnRcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRjb25zdCBhZnRlck9wZW5lZCQ6IFN1YmplY3Q8Q29tcG9uZW50VHlwZTxhbnk+PiA9IGRpYWxvZ1JlZi5hZnRlck9wZW5lZCgpO1xuXG5cdFx0XHRhZnRlck9wZW5lZCQubmV4dCggY29tcG9uZW50ICk7XG5cdFx0XHRhZnRlck9wZW5lZCQuY29tcGxldGUoKTtcblx0XHRcdHRoaXMub3BlbmVkJC5uZXh0KCBjb21wb25lbnQgKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gZGlhbG9nUmVmO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSBkYXRhXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bmlxS2V5XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xvc2UoIGRhdGE/OiBhbnksIHVuaXFLZXk/OiBzdHJpbmcgKSB7XG5cdFx0Y29uc3Qgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IHRoaXMuX2dldE92ZXJsYXlSZWYoIHVuaXFLZXkgKTtcblxuXHRcdGlmICggIW92ZXJsYXlSZWYgKSByZXR1cm47XG5cblx0XHRjb25zdCBkaWFsb2dSZWY6IE5nY0lEaWFsb2dSZWYgPSB0aGlzLl9nZXREaWFsb2dSZWYoIHVuaXFLZXkgKTtcblxuXHRcdGlmICggIWRpYWxvZ1JlZiB8fCBkaWFsb2dSZWYuaXNGcmVlemluZyApIHJldHVybjtcblxuXHRcdGlmICggXy5pc0Z1bmN0aW9uKCBkaWFsb2dSZWYub25CZWZvcmVDbG9zZSApICkgZGF0YSA9IGRpYWxvZ1JlZi5vbkJlZm9yZUNsb3NlKCBkYXRhLCB1bmlxS2V5ICk7XG5cblx0XHRjb25zdCBhZnRlckNsb3NlZCQ6IFN1YmplY3Q8Q29tcG9uZW50VHlwZTxhbnk+PiA9IGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xuXG5cdFx0Ly8gZGlhbG9nUmVmLmlzRnVsbHNjcmVlbiA9IGRpYWxvZ1JlZi5jb250YWluZXIuaXNGdWxsc2NyZWVuID0gZmFsc2U7XG5cblx0XHRhZnRlckNsb3NlZCQubmV4dCggZGF0YSApO1xuXHRcdGFmdGVyQ2xvc2VkJC5jb21wbGV0ZSgpO1xuXHRcdHRoaXMuY2xvc2VkJC5uZXh0KCBkYXRhICk7XG5cblx0XHRvdmVybGF5UmVmLmRldGFjaCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bmlxS2V5XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZnJlZXplKCB1bmlxS2V5Pzogc3RyaW5nICkge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZjogTmdjSURpYWxvZ1JlZiA9IHRoaXMuX2dldERpYWxvZ1JlZiggdW5pcUtleSApO1xuXG5cdFx0aWYgKCAhZGlhbG9nUmVmICkgcmV0dXJuO1xuXG5cdFx0ZGlhbG9nUmVmLmlzRnJlZXppbmcgPSBkaWFsb2dSZWYuY29udGFpbmVyLmlzRnJlZXppbmcgPSB0cnVlO1xuXG5cdFx0ZGlhbG9nUmVmLmFmdGVyRnJlZXplZCgpLm5leHQoKTtcblx0XHR0aGlzLmZyZWV6ZWQkLm5leHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pcUtleVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHVuZnJlZXplKCB1bmlxS2V5Pzogc3RyaW5nICkge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZjogTmdjSURpYWxvZ1JlZiA9IHRoaXMuX2dldERpYWxvZ1JlZiggdW5pcUtleSApO1xuXG5cdFx0aWYgKCAhZGlhbG9nUmVmICkgcmV0dXJuO1xuXG5cdFx0ZGlhbG9nUmVmLmlzRnJlZXppbmcgPSBkaWFsb2dSZWYuY29udGFpbmVyLmlzRnJlZXppbmcgPSBmYWxzZTtcblxuXHRcdGRpYWxvZ1JlZi5hZnRlclVuZnJlZXplZCgpLm5leHQoKTtcblx0XHR0aGlzLnVuZnJlZXplZCQubmV4dCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bmlxS2V5XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZnVsbHNjcmVlbiggdW5pcUtleT86IHN0cmluZyApIHtcblx0XHRjb25zdCBvdmVybGF5UmVmOiBPdmVybGF5UmVmID0gdGhpcy5fZ2V0T3ZlcmxheVJlZiggdW5pcUtleSApO1xuXHRcdGNvbnN0IGRpYWxvZ1JlZjogTmdjSURpYWxvZ1JlZiA9IHRoaXMuX2dldERpYWxvZ1JlZiggdW5pcUtleSApO1xuXG5cdFx0aWYgKCAhb3ZlcmxheVJlZiB8fCAhZGlhbG9nUmVmICkgcmV0dXJuO1xuXG5cdFx0ZGlhbG9nUmVmLmlzRnVsbHNjcmVlbiA9IGRpYWxvZ1JlZi5jb250YWluZXIuaXNGdWxsc2NyZWVuID0gdHJ1ZTtcblxuXHRcdG92ZXJsYXlSZWYuYWRkUGFuZWxDbGFzcyggJ25nYy1kaWFsb2ctcGFuZWwtLWZ1bGxzY3JlZW4nICk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyRnVsbHNjcmVlbigpLm5leHQoKTtcblx0XHR0aGlzLmZ1bGxzY3JlZW4kLm5leHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pcUtleVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGV4aXRGdWxsc2NyZWVuKCB1bmlxS2V5Pzogc3RyaW5nICkge1xuXHRcdGNvbnN0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgPSB0aGlzLl9nZXRPdmVybGF5UmVmKCB1bmlxS2V5ICk7XG5cdFx0Y29uc3QgZGlhbG9nUmVmOiBOZ2NJRGlhbG9nUmVmID0gdGhpcy5fZ2V0RGlhbG9nUmVmKCB1bmlxS2V5ICk7XG5cblx0XHRpZiAoICFvdmVybGF5UmVmIHx8ICFkaWFsb2dSZWYgKSByZXR1cm47XG5cblx0XHRkaWFsb2dSZWYuaXNGdWxsc2NyZWVuID0gZGlhbG9nUmVmLmNvbnRhaW5lci5pc0Z1bGxzY3JlZW4gPSBmYWxzZTtcblxuXHRcdG92ZXJsYXlSZWYucmVtb3ZlUGFuZWxDbGFzcyggJ25nYy1kaWFsb2ctcGFuZWwtLWZ1bGxzY3JlZW4nICk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyRXhpdEZ1bGxzY3JlZW4oKS5uZXh0KCk7XG5cdFx0dGhpcy5leGl0RnVsbHNjcmVlbiQubmV4dCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSURpYWxvZ1BhZ2VyVHlwZX0gdHlwZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pcUtleVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHBhZ2VyQ2xpY2soIHR5cGU6IE5nY0lEaWFsb2dQYWdlclR5cGUsIHVuaXFLZXk/OiBzdHJpbmcgKSB7XG5cdFx0Y29uc3QgZGlhbG9nUmVmOiBOZ2NJRGlhbG9nUmVmID0gdGhpcy5fZ2V0RGlhbG9nUmVmKCB1bmlxS2V5ICk7XG5cblx0XHRpZiAoICFkaWFsb2dSZWYgKSByZXR1cm47XG5cblx0XHRkaWFsb2dSZWYuYWZ0ZXJQYWdlckNsaWNrZWQoKS5uZXh0KCB0eXBlICk7XG5cdFx0dGhpcy5wYWdlckNsaWNrZWQkLm5leHQoIHR5cGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY0lEaWFsb2dQYWdlclR5cGV9IHR5cGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXFLZXlcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBlbmFibGVQYWdlciggdHlwZT86IE5nY0lEaWFsb2dQYWdlclR5cGUsIHVuaXFLZXk/OiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5fZ2V0RGlhbG9nUmVmKCB1bmlxS2V5ICk/LmNvbnRhaW5lcj8uZW5hYmxlUGFnZXIoIHR5cGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY0lEaWFsb2dQYWdlclR5cGV9IHR5cGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXFLZXlcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBkaXNhYmxlUGFnZXIoIHR5cGU/OiBOZ2NJRGlhbG9nUGFnZXJUeXBlLCB1bmlxS2V5Pzogc3RyaW5nICkge1xuXHRcdHRoaXMuX2dldERpYWxvZ1JlZiggdW5pcUtleSApPy5jb250YWluZXI/LmRpc2FibGVQYWdlciggdHlwZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSURpYWxvZ1BhZ2VyVHlwZX0gdHlwZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pcUtleVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNob3dQYWdlciggdHlwZT86IE5nY0lEaWFsb2dQYWdlclR5cGUsIHVuaXFLZXk/OiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5fZ2V0RGlhbG9nUmVmKCB1bmlxS2V5ICk/LmNvbnRhaW5lcj8uc2hvd1BhZ2VyKCB0eXBlICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJRGlhbG9nUGFnZXJUeXBlfSB0eXBlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bmlxS2V5XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgaGlkZVBhZ2VyKCB0eXBlPzogTmdjSURpYWxvZ1BhZ2VyVHlwZSwgdW5pcUtleT86IHN0cmluZyApIHtcblx0XHR0aGlzLl9nZXREaWFsb2dSZWYoIHVuaXFLZXkgKT8uY29udGFpbmVyPy5oaWRlUGFnZXIoIHR5cGUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNsb3NlQWxsKCkge1xuXHRcdF8uZm9yRWFjaCggb3ZlcmxheVJlZkxvb2t1cCwgKCBvdmVybGF5UmVmOiBPdmVybGF5UmVmICkgPT4geyBvdmVybGF5UmVmLmRldGFjaCgpOyB9ICk7XG5cblx0XHRvdmVybGF5UmVmTG9va3VwID0ge307XG5cdFx0ZGlhbG9nUmVmTG9va3VwID0ge307XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJRGlhbG9nQ29uZmlnfSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXFLZXlcblx0ICogQHJldHVybiB7T3ZlcmxheVJlZn1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYoIGNvbmZpZz86IE5nY0lEaWFsb2dDb25maWcsIHVuaXFLZXk/OiBzdHJpbmcgKTogT3ZlcmxheVJlZiB7XG5cdFx0Y29uc3QgaGFzQmFja2Ryb3A6IGJvb2xlYW4gPSBjb25maWc/Lmhhc0JhY2tkcm9wO1xuXHRcdGNvbnN0IG1pbldpZHRoOiBzdHJpbmcgPSBjb25maWc/Lm1pbldpZHRoO1xuXHRcdGNvbnN0IG1pbkhlaWdodDogc3RyaW5nID0gY29uZmlnPy5taW5IZWlnaHQ7XG5cdFx0Y29uc3QgcG9zaXRpb25TdHJhdGVneTogUG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXlcblx0XHQucG9zaXRpb24oKVxuXHRcdC5nbG9iYWwoKVxuXHRcdC5jZW50ZXJIb3Jpem9udGFsbHkoKVxuXHRcdC5jZW50ZXJWZXJ0aWNhbGx5KCk7XG5cdFx0Y29uc3Qgb3ZlcmxheUNvbmZpZzogT3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcblx0XHRcdHBvc2l0aW9uU3RyYXRlZ3ksXG5cdFx0XHRoYXNCYWNrZHJvcFx0XHQ6IGhhc0JhY2tkcm9wICE9PSB1bmRlZmluZWQgPyBoYXNCYWNrZHJvcCA6IHRydWUsXG5cdFx0XHRiYWNrZHJvcENsYXNzXHQ6IFsgJ25nYy1kaWFsb2ctYmFja2Ryb3AnLCBjb25maWc/LmJhY2tkcm9wQ2xhc3MgXSxcblx0XHRcdHBhbmVsQ2xhc3NcdFx0OiBbICduZ2MtZGlhbG9nLXBhbmVsJywgY29uZmlnPy5wYW5lbENsYXNzIF0sXG5cdFx0XHR3aWR0aFx0XHRcdDogY29uZmlnPy53aWR0aCxcblx0XHRcdG1pbldpZHRoXHRcdDogcGFyc2VGbG9hdCggbWluV2lkdGggKSA8IHdpbmRvdy5pbm5lcldpZHRoID8gbWluV2lkdGggOiB1bmRlZmluZWQsXG5cdFx0XHRtYXhXaWR0aFx0XHQ6IGNvbmZpZz8ubWF4V2lkdGgsXG5cdFx0XHRoZWlnaHRcdFx0XHQ6IGNvbmZpZz8uaGVpZ2h0LFxuXHRcdFx0bWluSGVpZ2h0XHRcdDogcGFyc2VGbG9hdCggbWluSGVpZ2h0ICkgPCB3aW5kb3cuaW5uZXJIZWlnaHQgPyBtaW5IZWlnaHQgOiB1bmRlZmluZWQsXG5cdFx0XHRtYXhIZWlnaHRcdFx0OiBjb25maWc/Lm1heEhlaWdodCxcblx0XHR9KTtcblx0XHRjb25zdCBvdmVybGF5UmVmOiBPdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoIG92ZXJsYXlDb25maWcgKTtcblxuXHRcdC8vIENhdGNoIGtleWJvYXJkIGV2ZW50cyBvbiBtZW51XG5cdFx0b3ZlcmxheVJlZlxuXHRcdC5rZXlkb3duRXZlbnRzKClcblx0XHQucGlwZSggdGFrZVVudGlsKCBvdmVybGF5UmVmLmRldGFjaG1lbnRzKCkgKSApXG5cdFx0LnN1YnNjcmliZSggKCBldmVudDogS2V5Ym9hcmRFdmVudCApID0+IHtcblx0XHRcdGlmICggZXZlbnQua2V5ICE9PSAnRXNjYXBlJyApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRjb25zdCBkaWFsb2dSZWY6IE5nY0lEaWFsb2dSZWYgPSB0aGlzLl9nZXREaWFsb2dSZWYoIHVuaXFLZXkgKTtcblxuXHRcdFx0aWYgKCBkaWFsb2dSZWYuaXNGdWxsc2NyZWVuICkge1xuXHRcdFx0XHR0aGlzLmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uZmlnLmF1dG9DbG9zZSAmJiB0aGlzLl9hdXRvQ2xvc2UoIHVuaXFLZXkgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBPbiBiYWNrZHJvcCBjbGlja1xuXHRcdG92ZXJsYXlSZWZcblx0XHQuYmFja2Ryb3BDbGljaygpXG5cdFx0LnBpcGUoIHRha2VVbnRpbCggb3ZlcmxheVJlZi5kZXRhY2htZW50cygpICkgKVxuXHRcdC5zdWJzY3JpYmUoICgpID0+IGNvbmZpZy5hdXRvQ2xvc2UgJiYgdGhpcy5fYXV0b0Nsb3NlKCB1bmlxS2V5ICkgKTtcblx0XHQvKiogcmVsYXRlIGlzc3VlIHRvIGNsb3NlKCBudWxsIClcblx0XHQgKiBodHRwczovL2JpdGJ1Y2tldC5vcmcvd29ya2dvdGNvbS9mcm9udGVuZC9wdWxsLXJlcXVlc3RzLzE4OTJcblx0XHQgKi9cblxuXHRcdHJldHVybiBvdmVybGF5UmVmO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SU9iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge05nY0lEaWFsb2dSZWZ9IGRpYWxvZ1JlZlxuXHQgKiBAcmV0dXJuIHtJbmplY3Rvcn1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZUluamVjdG9yKCBkYXRhOiBJT2JqZWN0LCBkaWFsb2dSZWY6IE5nY0lEaWFsb2dSZWYgKTogSW5qZWN0b3Ige1xuXHRcdGNvbnN0IHByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtcblx0XHRcdHsgcHJvdmlkZTogTkdDX0RJQUxPR19EQVRBLCB1c2VWYWx1ZTogZGF0YSB9LFxuXHRcdFx0eyBwcm92aWRlOiBOR0NfRElBTE9HX1JFRiwgdXNlVmFsdWU6IGRpYWxvZ1JlZiB9LFxuXHRcdF07XG5cblx0XHRyZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzLCBwYXJlbnQ6IHRoaXMuX2luamVjdG9yIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSURpYWxvZ0NvbmZpZ30gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bmlxS2V5XG5cdCAqIEByZXR1cm4ge05nY0lEaWFsb2dSZWZ9XG5cdCAqL1xuXHRwcml2YXRlIF9jcmVhdGVEaWFsb2dSZWYoIGNvbmZpZz86IE5nY0lEaWFsb2dDb25maWcsIHVuaXFLZXk/OiBzdHJpbmcgKTogTmdjSURpYWxvZ1JlZiB7XG5cdFx0Y29uc3Qgb3BlbmVkJDogU3ViamVjdDxDb21wb25lbnRUeXBlPGFueT4+ID0gbmV3IFN1YmplY3Q8Q29tcG9uZW50VHlwZTxhbnk+PigpO1xuXHRcdGNvbnN0IGNsb3NlZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblx0XHRjb25zdCBmcmVlemVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cdFx0Y29uc3QgdW5mcmVlemVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cdFx0Y29uc3QgZnVsbHNjcmVlbiQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXHRcdGNvbnN0IGV4aXRGdWxsc2NyZWVuJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cdFx0Y29uc3QgcGFnZXJDbGlja2VkJDogU3ViamVjdDxOZ2NJRGlhbG9nUGFnZXJUeXBlPiA9IG5ldyBTdWJqZWN0PE5nY0lEaWFsb2dQYWdlclR5cGU+KCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnLCB1bmlxS2V5LFxuXHRcdFx0Y29udGFpbmVyXHRcdFx0OiBudWxsLFxuXHRcdFx0aXNGcmVlemluZ1x0XHRcdDogZmFsc2UsXG5cdFx0XHRpc0Z1bGxzY3JlZW5cdFx0OiBmYWxzZSxcblx0XHRcdGNsb3NlXHRcdFx0XHQ6ICggZGF0YT86IGFueSApID0+IHRoaXMuY2xvc2UoIGRhdGEsIHVuaXFLZXkgKSxcblx0XHRcdGZyZWV6ZVx0XHRcdFx0OiAoKSA9PiB0aGlzLmZyZWV6ZSggdW5pcUtleSApLFxuXHRcdFx0dW5mcmVlemVcdFx0XHQ6ICgpID0+IHRoaXMudW5mcmVlemUoIHVuaXFLZXkgKSxcblx0XHRcdGZ1bGxzY3JlZW5cdFx0XHQ6ICgpID0+IHRoaXMuZnVsbHNjcmVlbiggdW5pcUtleSApLFxuXHRcdFx0ZXhpdEZ1bGxzY3JlZW5cdFx0OiAoKSA9PiB0aGlzLmV4aXRGdWxsc2NyZWVuKCB1bmlxS2V5ICksXG5cdFx0XHRwYWdlckNsaWNrXHRcdFx0OiAoIHR5cGU6IE5nY0lEaWFsb2dQYWdlclR5cGUgKSA9PiB0aGlzLnBhZ2VyQ2xpY2soIHR5cGUsIHVuaXFLZXkgKSxcblx0XHRcdGVuYWJsZVBhZ2VyXHRcdFx0OiAoIHR5cGU/OiBOZ2NJRGlhbG9nUGFnZXJUeXBlICkgPT4gdGhpcy5lbmFibGVQYWdlciggdHlwZSwgdW5pcUtleSApLFxuXHRcdFx0ZGlzYWJsZVBhZ2VyXHRcdDogKCB0eXBlPzogTmdjSURpYWxvZ1BhZ2VyVHlwZSApID0+IHRoaXMuZGlzYWJsZVBhZ2VyKCB0eXBlLCB1bmlxS2V5ICksXG5cdFx0XHRzaG93UGFnZXJcdFx0XHQ6ICggdHlwZT86IE5nY0lEaWFsb2dQYWdlclR5cGUgKSA9PiB0aGlzLnNob3dQYWdlciggdHlwZSwgdW5pcUtleSApLFxuXHRcdFx0aGlkZVBhZ2VyXHRcdFx0OiAoIHR5cGU/OiBOZ2NJRGlhbG9nUGFnZXJUeXBlICkgPT4gdGhpcy5oaWRlUGFnZXIoIHR5cGUsIHVuaXFLZXkgKSxcblx0XHRcdGFmdGVyT3BlbmVkXHRcdFx0OiAoKTogU3ViamVjdDxDb21wb25lbnRUeXBlPGFueT4+ID0+IG9wZW5lZCQsXG5cdFx0XHRhZnRlckNsb3NlZFx0XHRcdDogKCk6IFN1YmplY3Q8YW55PiA9PiBjbG9zZWQkLFxuXHRcdFx0YWZ0ZXJGcmVlemVkXHRcdDogKCk6IFN1YmplY3Q8dm9pZD4gPT4gZnJlZXplZCQsXG5cdFx0XHRhZnRlclVuZnJlZXplZFx0XHQ6ICgpOiBTdWJqZWN0PHZvaWQ+ID0+IHVuZnJlZXplZCQsXG5cdFx0XHRhZnRlckZ1bGxzY3JlZW5cdFx0OiAoKTogU3ViamVjdDx2b2lkPiA9PiBmdWxsc2NyZWVuJCxcblx0XHRcdGFmdGVyRXhpdEZ1bGxzY3JlZW5cdDogKCk6IFN1YmplY3Q8dm9pZD4gPT4gZXhpdEZ1bGxzY3JlZW4kLFxuXHRcdFx0YWZ0ZXJQYWdlckNsaWNrZWRcdDogKCk6IFN1YmplY3Q8TmdjSURpYWxvZ1BhZ2VyVHlwZT4gPT4gcGFnZXJDbGlja2VkJCxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1bmlxS2V5XG5cdCAqIEByZXR1cm4ge092ZXJsYXlSZWZ9XG5cdCAqL1xuXHRwcml2YXRlIF9nZXRPdmVybGF5UmVmKCB1bmlxS2V5Pzogc3RyaW5nICk6IE92ZXJsYXlSZWYge1xuXHRcdHJldHVybiB1bmlxS2V5ID8gb3ZlcmxheVJlZkxvb2t1cFsgdW5pcUtleSBdIDogdGhpcy5fb3ZlcmxheVJlZjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pcUtleVxuXHQgKiBAcmV0dXJuIHtOZ2NJRGlhbG9nUmVmfVxuXHQgKi9cblx0cHJpdmF0ZSBfZ2V0RGlhbG9nUmVmKCB1bmlxS2V5Pzogc3RyaW5nICk6IE5nY0lEaWFsb2dSZWYge1xuXHRcdHJldHVybiB1bmlxS2V5ID8gZGlhbG9nUmVmTG9va3VwWyB1bmlxS2V5IF0gOiB0aGlzLl9kaWFsb2dSZWY7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXFLZXlcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2F1dG9DbG9zZSggdW5pcUtleTogc3RyaW5nICkge1xuXHRcdGNvbnN0IGRpYWxvZ1JlZjogTmdjSURpYWxvZ1JlZiA9IHRoaXMuX2dldERpYWxvZ1JlZiggdW5pcUtleSApO1xuXHRcdGNvbnN0IGRhdGE6IGFueSA9IF8uaXNGdW5jdGlvbiggZGlhbG9nUmVmLm9uQmVmb3JlQXV0b0Nsb3NlIClcblx0XHRcdD8gZGlhbG9nUmVmLm9uQmVmb3JlQXV0b0Nsb3NlKCB1bmlxS2V5IClcblx0XHRcdDogbnVsbDtcblxuXHRcdHRoaXMuY2xvc2UoIGRhdGEsIHVuaXFLZXkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY0lEaWFsb2dSZWZ9IGRpYWxvZ1JlZlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfbWFya0FsbFN1YmplY3RzQXNDb21wbGV0ZSggZGlhbG9nUmVmOiBOZ2NJRGlhbG9nUmVmICkge1xuXHRcdGlmICggIWRpYWxvZ1JlZiApIHJldHVybjtcblxuXHRcdGRpYWxvZ1JlZi5hZnRlck9wZW5lZCgpLmNvbXBsZXRlKCk7XG5cdFx0ZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuY29tcGxldGUoKTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJGcmVlemVkKCkuY29tcGxldGUoKTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJVbmZyZWV6ZWQoKS5jb21wbGV0ZSgpO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckZ1bGxzY3JlZW4oKS5jb21wbGV0ZSgpO1xuXHRcdGRpYWxvZ1JlZi5hZnRlckV4aXRGdWxsc2NyZWVuKCkuY29tcGxldGUoKTtcblx0XHRkaWFsb2dSZWYuYWZ0ZXJQYWdlckNsaWNrZWQoKS5jb21wbGV0ZSgpO1xuXHR9XG5cbn1cbiJdfQ==