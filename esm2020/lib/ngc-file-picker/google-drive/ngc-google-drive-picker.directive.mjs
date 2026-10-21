import { __decorate, __metadata } from "tslib";
import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { DefaultValue, CoerceBoolean, ENVIRONMENT } from '@core';
import * as i0 from "@angular/core";
export class NgcGoogleDrivePickerDirective {
    constructor() {
        this.multiSelect = true;
        this.picked = new EventEmitter();
    }
    triggerClick(event) {
        if (this.disabled)
            return;
        event.stopPropagation();
        event.preventDefault();
        this._loadPicker();
    }
    /**
     * @return {void}
     */
    _loadPicker() {
        gapi.load('auth', { callback: this._onAuthApiLoaded.bind(this) });
        gapi.load('picker', { callback: this._onPickerApiLoaded.bind(this) });
    }
    /**
     * @return {void}
     */
    _onAuthApiLoaded() {
        gapi.auth.authorize({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            client_id: ENVIRONMENT.GOOGLE_DRIVE_CLIENT_ID,
            scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive'],
            immediate: false,
        }, this._handleAuthResult.bind(this));
    }
    /**
     * @return {void}
     */
    _onPickerApiLoaded() {
        this.pickerApiLoaded = true;
    }
    /**
     * @param {IObject} authResult
     * @return {void}
     */
    _handleAuthResult(authResult) {
        if (authResult?.error === 'popup_closed_by_user')
            return;
        if (authResult?.error || !authResult?.access_token) {
            this.picked.emit(undefined);
            return;
        }
        const pickerBuilder = new google.picker.PickerBuilder();
        const view = new google.picker.View(google.picker.ViewId.DOCS);
        view.setMimeTypes(this.mimeTypes);
        const picker = pickerBuilder
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            .enableFeature(this.multiSelect ? google.picker.Feature.MULTISELECT_ENABLED : undefined)
            .setOAuthToken(authResult.access_token)
            .addView(view)
            .addView(new google.picker.DocsUploadView())
            .setCallback(this._onPicked.bind(this))
            .build();
        picker.setVisible(true);
    }
    /**
     * @param {IObject} event
     * @return {void}
     */
    _onPicked(event) {
        event[google.picker.Response.ACTION] === google.picker.Action.PICKED
            && this.picked.emit(event[google.picker.Response.DOCUMENTS]);
    }
}
NgcGoogleDrivePickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcGoogleDrivePickerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NgcGoogleDrivePickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcGoogleDrivePickerDirective, selector: "[ngcGoogleDrivePicker]", inputs: { mimeTypes: "mimeTypes", multiSelect: "multiSelect", disabled: "disabled" }, outputs: { picked: "picked" }, host: { listeners: { "click": "triggerClick($event)", "contextmenu": "triggerClick($event)", "keydown.space": "triggerClick($event)" } }, exportAs: ["ngcGoogleDrivePicker"], ngImport: i0 });
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGoogleDrivePickerDirective.prototype, "multiSelect", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcGoogleDrivePickerDirective.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcGoogleDrivePickerDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcGoogleDrivePicker]', exportAs: 'ngcGoogleDrivePicker' }]
        }], propDecorators: { mimeTypes: [{
                type: Input
            }], multiSelect: [{
                type: Input
            }], disabled: [{
                type: Input
            }], picked: [{
                type: Output
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }, {
                type: HostListener,
                args: ['contextmenu', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWdvb2dsZS1kcml2ZS1waWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZmlsZS1waWNrZXIvZ29vZ2xlLWRyaXZlL25nYy1nb29nbGUtZHJpdmUtcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUMvQixZQUFZLEVBQUUsS0FBSyxFQUNuQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBVyxXQUFXLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBd0IxRSxNQUFNLE9BQU8sNkJBQTZCO0lBRDFDO1FBSWtELGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVELFdBQU0sR0FBd0MsSUFBSSxZQUFZLEVBQXlCLENBQUM7S0FtRnpHO0lBNUVPLFlBQVksQ0FBRSxLQUFZO1FBQ2hDLElBQUssSUFBSSxDQUFDLFFBQVE7WUFBRyxPQUFPO1FBRTVCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNLLFdBQVc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsRUFBRSxDQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsRUFBRSxDQUFFLENBQUM7SUFDM0UsQ0FBQztJQUVEOztPQUVHO0lBQ0ssZ0JB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RUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbiwgSU9iamVjdCwgRU5WSVJPTk1FTlQgfSBmcm9tICdAY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgZ2FwaTogYW55O1xuZGVjbGFyZSBjb25zdCBnb29nbGU6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBOZ2NJR29vZ2xlRHJpdmVGaWxlIHtcblx0ZGVzY3JpcHRpb246IHN0cmluZztcblx0ZW1iZWRVcmw6IHN0cmluZztcblx0aWNvblVybDogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xuXHRpc1NoYXJlZDogYm9vbGVhbjtcblx0bGFzdEVkaXRlZFV0YzogbnVtYmVyO1xuXHRtaW1lVHlwZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdG9yZ2FuaXphdGlvbkRpc3BsYXlOYW1lOiBzdHJpbmc7XG5cdHJvdGF0aW9uOiBudW1iZXI7XG5cdHJvdGF0aW9uRGVncmVlOiBudW1iZXI7XG5cdHNlcnZpY2VJZDogc3RyaW5nO1xuXHRzaXplQnl0ZXM6IG51bWJlcjtcblx0dHlwZTogc3RyaW5nO1xuXHR1cmw6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nY0dvb2dsZURyaXZlUGlja2VyXScsIGV4cG9ydEFzOiAnbmdjR29vZ2xlRHJpdmVQaWNrZXInIH0pXG5leHBvcnQgY2xhc3MgTmdjR29vZ2xlRHJpdmVQaWNrZXJEaXJlY3RpdmUge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBtaW1lVHlwZXM6IHN0cmluZ1tdO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuXHRAT3V0cHV0KCkgcHVibGljIHBpY2tlZDogRXZlbnRFbWl0dGVyPE5nY0lHb29nbGVEcml2ZUZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY0lHb29nbGVEcml2ZUZpbGVbXT4oKTtcblxuXHRwdWJsaWMgcGlja2VyQXBpTG9hZGVkOiBib29sZWFuO1xuXG5cdEBIb3N0TGlzdGVuZXIoICdjbGljaycsIFsgJyRldmVudCcgXSApXG5cdEBIb3N0TGlzdGVuZXIoICdjb250ZXh0bWVudScsIFsgJyRldmVudCcgXSApXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLnNwYWNlJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJDbGljayggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCApIHJldHVybjtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5fbG9hZFBpY2tlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwcml2YXRlIF9sb2FkUGlja2VyKCkge1xuXHRcdGdhcGkubG9hZCggJ2F1dGgnLCB7IGNhbGxiYWNrOiB0aGlzLl9vbkF1dGhBcGlMb2FkZWQuYmluZCggdGhpcyApIH0gKTtcblx0XHRnYXBpLmxvYWQoICdwaWNrZXInLCB7IGNhbGxiYWNrOiB0aGlzLl9vblBpY2tlckFwaUxvYWRlZC5iaW5kKCB0aGlzICkgfSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwcml2YXRlIF9vbkF1dGhBcGlMb2FkZWQoKSB7XG5cdFx0Z2FwaS5hdXRoLmF1dGhvcml6ZShcblx0XHRcdHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuXHRcdFx0XHRjbGllbnRfaWRcdDogRU5WSVJPTk1FTlQuR09PR0xFX0RSSVZFX0NMSUVOVF9JRCxcblx0XHRcdFx0c2NvcGVcdFx0OiBbICdwcm9maWxlJywgJ2VtYWlsJywgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUnIF0sXG5cdFx0XHRcdGltbWVkaWF0ZVx0OiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHR0aGlzLl9oYW5kbGVBdXRoUmVzdWx0LmJpbmQoIHRoaXMgKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX29uUGlja2VyQXBpTG9hZGVkKCkge1xuXHRcdHRoaXMucGlja2VyQXBpTG9hZGVkID0gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0lPYmplY3R9IGF1dGhSZXN1bHRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2hhbmRsZUF1dGhSZXN1bHQoIGF1dGhSZXN1bHQ6IElPYmplY3QgKSB7XG5cdFx0aWYgKCBhdXRoUmVzdWx0Py5lcnJvciA9PT0gJ3BvcHVwX2Nsb3NlZF9ieV91c2VyJyApIHJldHVybjtcblxuXHRcdGlmICggYXV0aFJlc3VsdD8uZXJyb3IgfHwgIWF1dGhSZXN1bHQ/LmFjY2Vzc190b2tlbiApIHtcblx0XHRcdHRoaXMucGlja2VkLmVtaXQoIHVuZGVmaW5lZCApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBpY2tlckJ1aWxkZXI6IHR5cGVvZiBnb29nbGUucGlja2VyLlBpY2tlckJ1aWxkZXIgPSBuZXcgZ29vZ2xlLnBpY2tlci5QaWNrZXJCdWlsZGVyKCk7XG5cdFx0Y29uc3QgdmlldzogdHlwZW9mIGdvb2dsZS5waWNrZXIuVmlldyA9IG5ldyBnb29nbGUucGlja2VyLlZpZXcoIGdvb2dsZS5waWNrZXIuVmlld0lkLkRPQ1MgKTtcblxuXHRcdHZpZXcuc2V0TWltZVR5cGVzKCB0aGlzLm1pbWVUeXBlcyApO1xuXG5cdFx0Y29uc3QgcGlja2VyOiB0eXBlb2YgcGlja2VyQnVpbGRlci5idWlsZCA9IHBpY2tlckJ1aWxkZXJcblx0XHQuZW5hYmxlRmVhdHVyZSggZ29vZ2xlLnBpY2tlci5GZWF0dXJlLk5BVl9ISURERU4gKVxuXHRcdC5lbmFibGVGZWF0dXJlKCB0aGlzLm11bHRpU2VsZWN0ID8gZ29vZ2xlLnBpY2tlci5GZWF0dXJlLk1VTFRJU0VMRUNUX0VOQUJMRUQgOiB1bmRlZmluZWQgKVxuXHRcdC5zZXRPQXV0aFRva2VuKCBhdXRoUmVzdWx0LmFjY2Vzc190b2tlbiApXG5cdFx0LmFkZFZpZXcoIHZpZXcgKVxuXHRcdC5hZGRWaWV3KCBuZXcgZ29vZ2xlLnBpY2tlci5Eb2NzVXBsb2FkVmlldygpIClcblx0XHQuc2V0Q2FsbGJhY2soIHRoaXMuX29uUGlja2VkLmJpbmQoIHRoaXMgKSApXG5cdFx0LmJ1aWxkKCk7XG5cblx0XHRwaWNrZXIuc2V0VmlzaWJsZSggdHJ1ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SU9iamVjdH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX29uUGlja2VkKCBldmVudDogSU9iamVjdCApIHtcblx0XHRldmVudFsgZ29vZ2xlLnBpY2tlci5SZXNwb25zZS5BQ1RJT04gXSA9PT0gZ29vZ2xlLnBpY2tlci5BY3Rpb24uUElDS0VEXG5cdFx0XHQmJiB0aGlzLnBpY2tlZC5lbWl0KCBldmVudFsgZ29vZ2xlLnBpY2tlci5SZXNwb25zZS5ET0NVTUVOVFMgXSApO1xuXHR9XG5cbn1cbiJdfQ==