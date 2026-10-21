import { __decorate, __metadata } from "tslib";
import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
import _ from 'lodash';
import { DefaultValue, CoerceBoolean, ENVIRONMENT } from '@core';
import * as i0 from "@angular/core";
export class NgcOneDrivePickerDirective {
    constructor() {
        this.action = 'download';
        this.multiSelect = true;
        this.picked = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.error = new EventEmitter();
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
        OneDrive.open({
            clientId: ENVIRONMENT.ONEDRIVE_CLIENT_ID,
            action: this.action,
            multiSelect: this.multiSelect,
            advanced: { redirectUri: ENVIRONMENT.APP_URL, filter: _.join(this.extensions, ',') },
            cancel: () => this.cancelled.emit(),
            success: ({ value }) => this.picked.emit(value),
            error: (error) => this.error.emit(error),
        });
    }
}
NgcOneDrivePickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcOneDrivePickerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NgcOneDrivePickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcOneDrivePickerDirective, selector: "[ngcOneDrivePicker]", inputs: { extensions: "extensions", action: "action", multiSelect: "multiSelect", disabled: "disabled" }, outputs: { picked: "picked", cancelled: "cancelled", error: "error" }, host: { listeners: { "click": "triggerClick($event)", "contextmenu": "triggerClick($event)", "keydown.space": "triggerClick($event)" } }, exportAs: ["ngcOneDrivePicker"], ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcOneDrivePickerDirective.prototype, "action", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcOneDrivePickerDirective.prototype, "multiSelect", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcOneDrivePickerDirective.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcOneDrivePickerDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcOneDrivePicker]', exportAs: 'ngcOneDrivePicker' }]
        }], propDecorators: { extensions: [{
                type: Input
            }], action: [{
                type: Input
            }], multiSelect: [{
                type: Input
            }], disabled: [{
                type: Input
            }], picked: [{
                type: Output
            }], cancelled: [{
                type: Output
            }], error: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW9uZS1kcml2ZS1waWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZmlsZS1waWNrZXIvb25lLWRyaXZlL25nYy1vbmUtZHJpdmUtcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUMvQixZQUFZLEVBQUUsS0FBSyxFQUNuQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sT0FBTyxDQUFDOztBQWNqRSxNQUFNLE9BQU8sMEJBQTBCO0lBRHZDO1FBSWlDLFdBQU0sR0FBVyxVQUFVLENBQUM7UUFDWCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1RCxXQUFNLEdBQXFDLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQ2xGLGNBQVMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN6RCxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7S0E0QjVFO0lBdkJPLFlBQVksQ0FBRSxLQUFZO1FBQ2hDLElBQUssSUFBSSxDQUFDLFFBQVE7WUFBRyxPQUFPO1FBRTVCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNLLFdBQVc7UUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNiLFFBQVEsRUFBRyxXQUFXLENBQUMsa0JBQWtCO1lBQ3pDLE1BQU0sRUFBSSxJQUFJLENBQUMsTUFBTTtZQUNyQixXQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFHLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUUsRUFBRTtZQUN2RixNQUFNLEVBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDckMsT0FBTyxFQUFJLENBQUUsRUFBRSxLQUFLLEVBQWlDLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRTtZQUNwRixLQUFLLEVBQUksQ0FBRSxLQUFjLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRTtTQUN2RCxDQUFDLENBQUM7SUFDSixDQUFDOzt1SEFuQ1csMEJBQTBCOzJHQUExQiwwQkFBMEI7QUFHdEM7SUFBVSxZQUFZLEVBQUU7OzBEQUFvQztBQUM1RDtJQUFVLFlBQVksRUFBRTtJQUFFLGFBQWEsRUFBRTs7K0RBQW9DO0FBQzdFO0lBQVUsYUFBYSxFQUFFOzs0REFBMEI7MkZBTHZDLDBCQUEwQjtrQkFEdEMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7OEJBRzVELFVBQVU7c0JBQXpCLEtBQUs7Z0JBQzBCLE1BQU07c0JBQXJDLEtBQUs7Z0JBQzJDLFdBQVc7c0JBQTNELEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBRVcsTUFBTTtzQkFBdEIsTUFBTTtnQkFDVSxTQUFTO3NCQUF6QixNQUFNO2dCQUNVLEtBQUs7c0JBQXJCLE1BQU07Z0JBS0EsWUFBWTtzQkFIbEIsWUFBWTt1QkFBRSxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUU7O3NCQUNuQyxZQUFZO3VCQUFFLGFBQWEsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7c0JBQ3pDLFlBQVk7dUJBQUUsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLCBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbiwgRU5WSVJPTk1FTlQgfSBmcm9tICdAY29yZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbmRlY2xhcmUgY29uc3QgT25lRHJpdmU6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBOZ2NJT25lRHJpdmVGaWxlIHtcblx0J0BtaWNyb3NvZnQuZ3JhcGguZG93bmxvYWRVcmwnOiBzdHJpbmc7XG5cdCdAb2RhdGEuY29udGV4dCc6IHN0cmluZztcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRzaXplOiBudW1iZXI7XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ2NPbmVEcml2ZVBpY2tlcl0nLCBleHBvcnRBczogJ25nY09uZURyaXZlUGlja2VyJyB9KVxuZXhwb3J0IGNsYXNzIE5nY09uZURyaXZlUGlja2VyRGlyZWN0aXZlIHtcblxuXHRASW5wdXQoKSBwdWJsaWMgZXh0ZW5zaW9uczogc3RyaW5nW107XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYWN0aW9uOiBzdHJpbmcgPSAnZG93bmxvYWQnO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuXHRAT3V0cHV0KCkgcHVibGljIHBpY2tlZDogRXZlbnRFbWl0dGVyPE5nY0lPbmVEcml2ZUZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY0lPbmVEcml2ZUZpbGVbXT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjYW5jZWxsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBlcnJvcjogRXZlbnRFbWl0dGVyPHVua25vd24+ID0gbmV3IEV2ZW50RW1pdHRlcjx1bmtub3duPigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoICdjbGljaycsIFsgJyRldmVudCcgXSApXG5cdEBIb3N0TGlzdGVuZXIoICdjb250ZXh0bWVudScsIFsgJyRldmVudCcgXSApXG5cdEBIb3N0TGlzdGVuZXIoICdrZXlkb3duLnNwYWNlJywgWyAnJGV2ZW50JyBdIClcblx0cHVibGljIHRyaWdnZXJDbGljayggZXZlbnQ6IEV2ZW50ICkge1xuXHRcdGlmICggdGhpcy5kaXNhYmxlZCApIHJldHVybjtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5fbG9hZFBpY2tlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwcml2YXRlIF9sb2FkUGlja2VyKCkge1xuXHRcdE9uZURyaXZlLm9wZW4oe1xuXHRcdFx0Y2xpZW50SWRcdDogRU5WSVJPTk1FTlQuT05FRFJJVkVfQ0xJRU5UX0lELFxuXHRcdFx0YWN0aW9uXHRcdDogdGhpcy5hY3Rpb24sXG5cdFx0XHRtdWx0aVNlbGVjdFx0OiB0aGlzLm11bHRpU2VsZWN0LFxuXHRcdFx0YWR2YW5jZWRcdDogeyByZWRpcmVjdFVyaTogRU5WSVJPTk1FTlQuQVBQX1VSTCwgZmlsdGVyOiBfLmpvaW4oIHRoaXMuZXh0ZW5zaW9ucywgJywnICkgfSxcblx0XHRcdGNhbmNlbFx0XHQ6ICgpID0+IHRoaXMuY2FuY2VsbGVkLmVtaXQoKSxcblx0XHRcdHN1Y2Nlc3NcdFx0OiAoIHsgdmFsdWUgfTogeyB2YWx1ZTogTmdjSU9uZURyaXZlRmlsZVtdIH0gKSA9PiB0aGlzLnBpY2tlZC5lbWl0KCB2YWx1ZSApLFxuXHRcdFx0ZXJyb3JcdFx0OiAoIGVycm9yOiB1bmtub3duICkgPT4gdGhpcy5lcnJvci5lbWl0KCBlcnJvciApLFxuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==