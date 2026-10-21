import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil, pairwise } from 'rxjs/operators';
import _ from 'lodash';
import { NgcConfirmComponent } from './ngc-confirm.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/router";
let overlayRefs = [];
let confirmRefs = [];
export class NgcConfirmService {
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {Router} _router
     */
    constructor(_overlay, _router) {
        this._overlay = _overlay;
        this._router = _router;
        this.opened$ = new Subject();
        this.closed$ = new Subject();
        this._defaultConfig = {
            autoClose: true,
            hasBackdrop: true,
            translate: true,
            type: 'dialog',
        };
        // On router events changes
        this._router.events
            .pipe(filter((event) => event instanceof NavigationStart), map((event) => event.url.split('?')[0]), pairwise())
            .subscribe((results) => results[0] !== results[1] && this.closeAll());
    }
    /**
     * @param {string | TemplateRef<any>} message
     * @param {string} title
     * @param {NgcIDialogConfig} config
     * @return {void}
     */
    open(message, title, config) {
        config = { ...this._defaultConfig, ...config };
        const portal = new ComponentPortal(NgcConfirmComponent, config.viewContainerRef);
        this._overlayRef = this._createOverlayRef(config);
        this._confirmRef = this._createConfirmRef(config);
        const detachments = this._overlayRef.detachments();
        detachments.subscribe(() => {
            this._confirmRef.afterOpened().complete();
            this._confirmRef.afterClosed().complete();
            detachments.complete();
        });
        if (this._overlayRef.hasAttached())
            return;
        // Close all opening confirm popups
        this.closeAll();
        overlayRefs.push(this._overlayRef);
        confirmRefs.push(this._confirmRef);
        const instance = this._overlayRef.attach(portal).instance;
        instance.message = message;
        instance.title = title;
        instance.config = config;
        instance.close = this.close.bind(this);
        setTimeout(() => {
            const afterOpened$ = this._confirmRef.afterOpened();
            afterOpened$.next(instance);
            this.opened$.next(instance);
            afterOpened$.complete();
        });
        return this._confirmRef;
    }
    /**
     * @param {boolean} answer
     * @return {void}
     */
    close(answer = false) {
        this._confirmRef.afterClosed().next(answer);
        this.closed$.next(answer);
        this._overlayRef.detach();
    }
    /**
     * @return {void}
     */
    closeAll() {
        _.forEach(overlayRefs, (overlayRef) => { overlayRef.detach(); });
        _.forEach(confirmRefs, (confirmRef) => {
            confirmRef.afterOpened().complete();
            confirmRef.afterClosed().complete();
        });
        overlayRefs = [];
        confirmRefs = [];
    }
    /**
     * @param {NgcIDialogConfig} config
     * @return {OverlayRef}
     */
    _createOverlayRef(config) {
        const isDialog = config?.type === 'dialog';
        const hasBackdrop = config?.hasBackdrop;
        const backdropClass = config?.backdropClass;
        const panelClass = config?.panelClass;
        const positionStrategy = this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const overlayConfig = new OverlayConfig({
            positionStrategy, hasBackdrop,
            width: isDialog ? '440px' : undefined,
            backdropClass: [isDialog ? 'ngc-dialog-backdrop' : 'ngc-confirm-backdrop', backdropClass],
            panelClass: [isDialog ? 'ngc-dialog-panel' : 'ngc-confirm-panel', panelClass],
        });
        const overlayRef = this._overlay.create(overlayConfig);
        // Catch keyboard events on overlay
        overlayRef.keydownEvents()
            .pipe(takeUntil(overlayRef.detachments()))
            .subscribe((event) => {
            if (event.key !== 'Escape')
                return;
            event.stopPropagation();
            event.preventDefault();
            this.close();
        });
        // On backdrop click
        overlayRef.backdropClick()
            .pipe(takeUntil(overlayRef.detachments()))
            .subscribe(() => config.autoClose && this.close());
        return overlayRef;
    }
    /**
     * @param {NgcIDialogConfig} config
     * @return {NgcIConfirmRef}
     */
    _createConfirmRef(config) {
        const opened$ = new Subject();
        const closed$ = new Subject();
        return {
            config,
            close: this.close.bind(this),
            afterOpened: () => opened$,
            afterClosed: () => closed$,
        };
    }
}
NgcConfirmService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcConfirmService, deps: [{ token: i1.Overlay }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
NgcConfirmService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcConfirmService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcConfirmService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvbmZpcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWNvbmZpcm0vbmdjLWNvbmZpcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQXFCLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFTakYsSUFBSSxXQUFXLEdBQWlCLEVBQUUsQ0FBQztBQUNuQyxJQUFJLFdBQVcsR0FBcUIsRUFBRSxDQUFDO0FBR3ZDLE1BQU0sT0FBTyxpQkFBaUI7SUFjN0I7Ozs7T0FJRztJQUNILFlBQXFCLFFBQWlCLEVBQVUsT0FBZTtRQUExQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWpCeEQsWUFBTyxHQUFpQyxJQUFJLE9BQU8sRUFBdUIsQ0FBQztRQUMzRSxZQUFPLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFJbEQsbUJBQWMsR0FBc0I7WUFDM0MsU0FBUyxFQUFHLElBQUk7WUFDaEIsV0FBVyxFQUFHLElBQUk7WUFDbEIsU0FBUyxFQUFHLElBQUk7WUFD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TixLQUFLLEVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFO1lBQ2hDLFdBQVcsRUFBRyxHQUFpQyxFQUFFLENBQUMsT0FBTztZQUN6RCxXQUFXLEVBQUcsR0FBcUIsRUFBRSxDQUFDLE9BQU87U0FDN0MsQ0FBQztJQUNILENBQUM7OzhHQWpLVyxpQkFBaUI7a0hBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXlSZWYsIE92ZXJsYXksIFBvc2l0aW9uU3RyYXRlZ3ksIE92ZXJsYXlDb25maWcgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlVW50aWwsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTmdjQ29uZmlybUNvbXBvbmVudCwgTmdjSUNvbmZpcm1Db25maWcgfSBmcm9tICcuL25nYy1jb25maXJtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdjSUNvbmZpcm1SZWYge1xuXHRjb25maWc6IE5nY0lDb25maXJtQ29uZmlnO1xuXHRjbG9zZTogKCBhbnN3ZXI/OiBib29sZWFuICkgPT4gdm9pZDtcblx0YWZ0ZXJPcGVuZWQ6ICgpID0+IFN1YmplY3Q8TmdjQ29uZmlybUNvbXBvbmVudD47XG5cdGFmdGVyQ2xvc2VkOiAoKSA9PiBTdWJqZWN0PGJvb2xlYW4+O1xufVxuXG5sZXQgb3ZlcmxheVJlZnM6IE92ZXJsYXlSZWZbXSA9IFtdO1xubGV0IGNvbmZpcm1SZWZzOiBOZ2NJQ29uZmlybVJlZltdID0gW107XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ2NDb25maXJtU2VydmljZSB7XG5cblx0cHVibGljIG9wZW5lZCQ6IFN1YmplY3Q8TmdjQ29uZmlybUNvbXBvbmVudD4gPSBuZXcgU3ViamVjdDxOZ2NDb25maXJtQ29tcG9uZW50PigpO1xuXHRwdWJsaWMgY2xvc2VkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblx0cHJpdmF0ZSBfY29uZmlybVJlZjogTmdjSUNvbmZpcm1SZWY7XG5cdHByaXZhdGUgX2RlZmF1bHRDb25maWc6IE5nY0lDb25maXJtQ29uZmlnID0ge1xuXHRcdGF1dG9DbG9zZVx0OiB0cnVlLFxuXHRcdGhhc0JhY2tkcm9wXHQ6IHRydWUsXG5cdFx0dHJhbnNsYXRlXHQ6IHRydWUsXG5cdFx0dHlwZVx0XHQ6ICdkaWFsb2cnLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtPdmVybGF5fSBfb3ZlcmxheVxuXHQgKiBAcGFyYW0ge1JvdXRlcn0gX3JvdXRlclxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgX3JvdXRlcjogUm91dGVyICkge1xuXHRcdC8vIE9uIHJvdXRlciBldmVudHMgY2hhbmdlc1xuXHRcdHRoaXMuX3JvdXRlci5ldmVudHNcblx0XHQucGlwZShcblx0XHRcdGZpbHRlciggKCBldmVudDogTmF2aWdhdGlvblN0YXJ0ICkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQgKSxcblx0XHRcdG1hcCggKCBldmVudDogTmF2aWdhdGlvblN0YXJ0ICkgPT4gZXZlbnQudXJsLnNwbGl0KCAnPycgKVsgMCBdICksXG5cdFx0XHRwYWlyd2lzZSgpXG5cdFx0KVxuXHRcdC5zdWJzY3JpYmUoICggcmVzdWx0czogc3RyaW5nW10gKSA9PiByZXN1bHRzWyAwIF0gIT09IHJlc3VsdHNbIDEgXSAmJiB0aGlzLmNsb3NlQWxsKCkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IFRlbXBsYXRlUmVmPGFueT59IG1lc3NhZ2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqIEBwYXJhbSB7TmdjSURpYWxvZ0NvbmZpZ30gY29uZmlnXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgb3BlbiggbWVzc2FnZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiwgdGl0bGU/OiBzdHJpbmcsIGNvbmZpZz86IE5nY0lDb25maXJtQ29uZmlnICk6IE5nY0lDb25maXJtUmVmIHtcblx0XHRjb25maWcgPSB7IC4uLnRoaXMuX2RlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9O1xuXG5cdFx0Y29uc3QgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8TmdjQ29uZmlybUNvbXBvbmVudD5cblx0XHRcdD0gbmV3IENvbXBvbmVudFBvcnRhbCggTmdjQ29uZmlybUNvbXBvbmVudCwgY29uZmlnLnZpZXdDb250YWluZXJSZWYgKTtcblxuXHRcdHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5UmVmKCBjb25maWcgKTtcblx0XHR0aGlzLl9jb25maXJtUmVmID0gdGhpcy5fY3JlYXRlQ29uZmlybVJlZiggY29uZmlnICk7XG5cblx0XHRjb25zdCBkZXRhY2htZW50czogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMuX292ZXJsYXlSZWYuZGV0YWNobWVudHMoKTtcblxuXHRcdGRldGFjaG1lbnRzLnN1YnNjcmliZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5fY29uZmlybVJlZi5hZnRlck9wZW5lZCgpLmNvbXBsZXRlKCk7XG5cdFx0XHR0aGlzLl9jb25maXJtUmVmLmFmdGVyQ2xvc2VkKCkuY29tcGxldGUoKTtcblxuXHRcdFx0KCBkZXRhY2htZW50cyBhcyBTdWJqZWN0PHZvaWQ+ICkuY29tcGxldGUoKTtcblx0XHR9ICk7XG5cblx0XHRpZiAoIHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSApIHJldHVybjtcblxuXHRcdC8vIENsb3NlIGFsbCBvcGVuaW5nIGNvbmZpcm0gcG9wdXBzXG5cdFx0dGhpcy5jbG9zZUFsbCgpO1xuXG5cdFx0b3ZlcmxheVJlZnMucHVzaCggdGhpcy5fb3ZlcmxheVJlZiApO1xuXHRcdGNvbmZpcm1SZWZzLnB1c2goIHRoaXMuX2NvbmZpcm1SZWYgKTtcblxuXHRcdGNvbnN0IGluc3RhbmNlOiBOZ2NDb25maXJtQ29tcG9uZW50ID0gdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2goIHBvcnRhbCApLmluc3RhbmNlO1xuXG5cdFx0aW5zdGFuY2UubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdFx0aW5zdGFuY2UudGl0bGUgPSB0aXRsZTtcblx0XHRpbnN0YW5jZS5jb25maWcgPSBjb25maWc7XG5cdFx0aW5zdGFuY2UuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQoIHRoaXMgKTtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdGNvbnN0IGFmdGVyT3BlbmVkJDogU3ViamVjdDxOZ2NDb25maXJtQ29tcG9uZW50PiA9IHRoaXMuX2NvbmZpcm1SZWYuYWZ0ZXJPcGVuZWQoKTtcblxuXHRcdFx0YWZ0ZXJPcGVuZWQkLm5leHQoIGluc3RhbmNlICk7XG5cdFx0XHR0aGlzLm9wZW5lZCQubmV4dCggaW5zdGFuY2UgKTtcblxuXHRcdFx0YWZ0ZXJPcGVuZWQkLmNvbXBsZXRlKCk7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpcm1SZWY7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtib29sZWFufSBhbnN3ZXJcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjbG9zZSggYW5zd2VyOiBib29sZWFuID0gZmFsc2UgKSB7XG5cdFx0dGhpcy5fY29uZmlybVJlZi5hZnRlckNsb3NlZCgpLm5leHQoIGFuc3dlciApO1xuXHRcdHRoaXMuY2xvc2VkJC5uZXh0KCBhbnN3ZXIgKTtcblxuXHRcdHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjbG9zZUFsbCgpIHtcblx0XHRfLmZvckVhY2goIG92ZXJsYXlSZWZzLCAoIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgKSA9PiB7IG92ZXJsYXlSZWYuZGV0YWNoKCk7IH0gKTtcblx0XHRfLmZvckVhY2goIGNvbmZpcm1SZWZzLCAoIGNvbmZpcm1SZWY6IE5nY0lDb25maXJtUmVmICkgPT4ge1xuXHRcdFx0Y29uZmlybVJlZi5hZnRlck9wZW5lZCgpLmNvbXBsZXRlKCk7XG5cdFx0XHRjb25maXJtUmVmLmFmdGVyQ2xvc2VkKCkuY29tcGxldGUoKTtcblx0XHR9ICk7XG5cblx0XHRvdmVybGF5UmVmcyA9IFtdO1xuXHRcdGNvbmZpcm1SZWZzID0gW107XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJRGlhbG9nQ29uZmlnfSBjb25maWdcblx0ICogQHJldHVybiB7T3ZlcmxheVJlZn1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYoIGNvbmZpZz86IE5nY0lDb25maXJtQ29uZmlnICk6IE92ZXJsYXlSZWYge1xuXHRcdGNvbnN0IGlzRGlhbG9nOiBib29sZWFuID0gY29uZmlnPy50eXBlID09PSAnZGlhbG9nJztcblx0XHRjb25zdCBoYXNCYWNrZHJvcDogYm9vbGVhbiA9IGNvbmZpZz8uaGFzQmFja2Ryb3A7XG5cdFx0Y29uc3QgYmFja2Ryb3BDbGFzczogc3RyaW5nID0gY29uZmlnPy5iYWNrZHJvcENsYXNzO1xuXHRcdGNvbnN0IHBhbmVsQ2xhc3M6IHN0cmluZyA9IGNvbmZpZz8ucGFuZWxDbGFzcztcblx0XHRjb25zdCBwb3NpdGlvblN0cmF0ZWd5OiBQb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheVxuXHRcdC5wb3NpdGlvbigpXG5cdFx0Lmdsb2JhbCgpXG5cdFx0LmNlbnRlckhvcml6b250YWxseSgpXG5cdFx0LmNlbnRlclZlcnRpY2FsbHkoKTtcblx0XHRjb25zdCBvdmVybGF5Q29uZmlnOiBPdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuXHRcdFx0cG9zaXRpb25TdHJhdGVneSwgaGFzQmFja2Ryb3AsXG5cdFx0XHR3aWR0aFx0XHRcdDogaXNEaWFsb2cgPyAnNDQwcHgnIDogdW5kZWZpbmVkLFxuXHRcdFx0YmFja2Ryb3BDbGFzc1x0OiBbIGlzRGlhbG9nID8gJ25nYy1kaWFsb2ctYmFja2Ryb3AnIDogJ25nYy1jb25maXJtLWJhY2tkcm9wJywgYmFja2Ryb3BDbGFzcyBdLFxuXHRcdFx0cGFuZWxDbGFzc1x0XHQ6IFsgaXNEaWFsb2cgPyAnbmdjLWRpYWxvZy1wYW5lbCcgOiAnbmdjLWNvbmZpcm0tcGFuZWwnLCBwYW5lbENsYXNzIF0sXG5cdFx0fSk7XG5cdFx0Y29uc3Qgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKCBvdmVybGF5Q29uZmlnICk7XG5cblx0XHQvLyBDYXRjaCBrZXlib2FyZCBldmVudHMgb24gb3ZlcmxheVxuXHRcdG92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpXG5cdFx0LnBpcGUoIHRha2VVbnRpbCggb3ZlcmxheVJlZi5kZXRhY2htZW50cygpICkgKVxuXHRcdC5zdWJzY3JpYmUoICggZXZlbnQ6IEtleWJvYXJkRXZlbnQgKSA9PiB7XG5cdFx0XHRpZiAoIGV2ZW50LmtleSAhPT0gJ0VzY2FwZScgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBPbiBiYWNrZHJvcCBjbGlja1xuXHRcdG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpXG5cdFx0LnBpcGUoIHRha2VVbnRpbCggb3ZlcmxheVJlZi5kZXRhY2htZW50cygpICkgKVxuXHRcdC5zdWJzY3JpYmUoICgpID0+IGNvbmZpZy5hdXRvQ2xvc2UgJiYgdGhpcy5jbG9zZSgpICk7XG5cblx0XHRyZXR1cm4gb3ZlcmxheVJlZjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY0lEaWFsb2dDb25maWd9IGNvbmZpZ1xuXHQgKiBAcmV0dXJuIHtOZ2NJQ29uZmlybVJlZn1cblx0ICovXG5cdHByaXZhdGUgX2NyZWF0ZUNvbmZpcm1SZWYoIGNvbmZpZz86IE5nY0lDb25maXJtQ29uZmlnICk6IE5nY0lDb25maXJtUmVmIHtcblx0XHRjb25zdCBvcGVuZWQkOiBTdWJqZWN0PE5nY0NvbmZpcm1Db21wb25lbnQ+ID0gbmV3IFN1YmplY3Q8TmdjQ29uZmlybUNvbXBvbmVudD4oKTtcblx0XHRjb25zdCBjbG9zZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWcsXG5cdFx0XHRjbG9zZVx0XHQ6IHRoaXMuY2xvc2UuYmluZCggdGhpcyApLFxuXHRcdFx0YWZ0ZXJPcGVuZWRcdDogKCk6IFN1YmplY3Q8TmdjQ29uZmlybUNvbXBvbmVudD4gPT4gb3BlbmVkJCxcblx0XHRcdGFmdGVyQ2xvc2VkXHQ6ICgpOiBTdWJqZWN0PGJvb2xlYW4+ID0+IGNsb3NlZCQsXG5cdFx0fTtcblx0fVxuXG59XG4iXX0=