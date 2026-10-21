import { __decorate, __metadata } from "tslib";
import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { DefaultValue, CoerceBoolean, CoerceNumber } from '@core';
import * as i0 from "@angular/core";
export class NgcDropboxPickerDirective {
    constructor() {
        this.linkType = 'direct';
        this.multiSelect = true;
        this.picked = new EventEmitter();
        this.cancelled = new EventEmitter();
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
        Dropbox.choose({
            success: (files) => this.picked.emit(files),
            cancel: () => this.cancelled.emit(),
            linkType: this.linkType,
            multiselect: this.multiSelect,
            folderselect: this.folderSelect,
            sizeLimit: this.sizeLimit,
            extensions: this.extensions,
        });
    }
}
NgcDropboxPickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropboxPickerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NgcDropboxPickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcDropboxPickerDirective, selector: "[ngcDropboxPicker]", inputs: { extensions: "extensions", linkType: "linkType", sizeLimit: "sizeLimit", folderSelect: "folderSelect", multiSelect: "multiSelect", disabled: "disabled" }, outputs: { picked: "picked", cancelled: "cancelled" }, host: { listeners: { "click": "triggerClick($event)", "contextmenu": "triggerClick($event)", "keydown.space": "triggerClick($event)" } }, exportAs: ["ngcDropboxPicker"], ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcDropboxPickerDirective.prototype, "linkType", void 0);
__decorate([
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcDropboxPickerDirective.prototype, "sizeLimit", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDropboxPickerDirective.prototype, "folderSelect", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDropboxPickerDirective.prototype, "multiSelect", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDropboxPickerDirective.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropboxPickerDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcDropboxPicker]', exportAs: 'ngcDropboxPicker' }]
        }], propDecorators: { extensions: [{
                type: Input
            }], linkType: [{
                type: Input
            }], sizeLimit: [{
                type: Input
            }], folderSelect: [{
                type: Input
            }], multiSelect: [{
                type: Input
            }], disabled: [{
                type: Input
            }], picked: [{
                type: Output
            }], cancelled: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRyb3Bib3gtcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWZpbGUtcGlja2VyL2Ryb3Bib3gvbmdjLWRyb3Bib3gtcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUMvQixZQUFZLEVBQUUsS0FBSyxFQUNuQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBaUJsRSxNQUFNLE9BQU8seUJBQXlCO0lBRHRDO1FBSWlDLGFBQVEsR0FBVyxRQUFRLENBQUM7UUFHWCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1RCxXQUFNLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ2hGLGNBQVMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztLQTRCMUU7SUF2Qk8sWUFBWSxDQUFFLEtBQVk7UUFDaEMsSUFBSyxJQUFJLENBQUMsUUFBUTtZQUFHLE9BQU87UUFFNUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssV0FBVztRQUNsQixPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2QsT0FBTyxFQUFJLENBQUUsS0FBd0IsRUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFO1lBQ3BFLE1BQU0sRUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUNyQyxRQUFRLEVBQUcsSUFBSSxDQUFDLFFBQVE7WUFDeEIsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixTQUFTLEVBQUcsSUFBSSxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFHLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUMsQ0FBQztJQUNKLENBQUM7O3NIQXBDVyx5QkFBeUI7MEdBQXpCLHlCQUF5QjtBQUdyQztJQUFVLFlBQVksRUFBRTs7MkRBQW9DO0FBQzVEO0lBQVUsWUFBWSxFQUFFOzs0REFBMEI7QUFDbEQ7SUFBVSxhQUFhLEVBQUU7OytEQUE4QjtBQUN2RDtJQUFVLFlBQVksRUFBRTtJQUFFLGFBQWEsRUFBRTs7OERBQW9DO0FBQzdFO0lBQVUsYUFBYSxFQUFFOzsyREFBMEI7MkZBUHZDLHlCQUF5QjtrQkFEckMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7OEJBRzFELFVBQVU7c0JBQXpCLEtBQUs7Z0JBQzBCLFFBQVE7c0JBQXZDLEtBQUs7Z0JBQzBCLFNBQVM7c0JBQXhDLEtBQUs7Z0JBQzJCLFlBQVk7c0JBQTVDLEtBQUs7Z0JBQzJDLFdBQVc7c0JBQTNELEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBRVcsTUFBTTtzQkFBdEIsTUFBTTtnQkFDVSxTQUFTO3NCQUF6QixNQUFNO2dCQUtBLFlBQVk7c0JBSGxCLFlBQVk7dUJBQUUsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFOztzQkFDbkMsWUFBWTt1QkFBRSxhQUFhLEVBQUUsQ0FBRSxRQUFRLENBQUU7O3NCQUN6QyxZQUFZO3VCQUFFLGVBQWUsRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbiwgQ29lcmNlTnVtYmVyIH0gZnJvbSAnQGNvcmUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5kZWNsYXJlIGNvbnN0IERyb3Bib3g6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBOZ2NJRHJvcGJveEZpbGUge1xuXHRieXRlczogbnVtYmVyO1xuXHRpY29uOiBzdHJpbmc7XG5cdGlkOiBzdHJpbmc7XG5cdGlzRGlyOiBib29sZWFuO1xuXHRsaW5rOiBzdHJpbmc7XG5cdGxpbmtUeXBlOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0dGh1bWJuYWlsTGluazogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmdjRHJvcGJveFBpY2tlcl0nLCBleHBvcnRBczogJ25nY0Ryb3Bib3hQaWNrZXInIH0pXG5leHBvcnQgY2xhc3MgTmdjRHJvcGJveFBpY2tlckRpcmVjdGl2ZSB7XG5cblx0QElucHV0KCkgcHVibGljIGV4dGVuc2lvbnM6IHN0cmluZ1tdO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIGxpbmtUeXBlOiBzdHJpbmcgPSAnZGlyZWN0Jztcblx0QElucHV0KCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBzaXplTGltaXQ6IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZm9sZGVyU2VsZWN0OiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuXHRAT3V0cHV0KCkgcHVibGljIHBpY2tlZDogRXZlbnRFbWl0dGVyPE5nY0lEcm9wYm94RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjSURyb3Bib3hGaWxlW10+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0QEhvc3RMaXN0ZW5lciggJ2NsaWNrJywgWyAnJGV2ZW50JyBdIClcblx0QEhvc3RMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgWyAnJGV2ZW50JyBdIClcblx0QEhvc3RMaXN0ZW5lciggJ2tleWRvd24uc3BhY2UnLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlckNsaWNrKCBldmVudDogRXZlbnQgKSB7XG5cdFx0aWYgKCB0aGlzLmRpc2FibGVkICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLl9sb2FkUGlja2VyKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2xvYWRQaWNrZXIoKSB7XG5cdFx0RHJvcGJveC5jaG9vc2Uoe1xuXHRcdFx0c3VjY2Vzc1x0XHQ6ICggZmlsZXM6IE5nY0lEcm9wYm94RmlsZVtdICkgPT4gdGhpcy5waWNrZWQuZW1pdCggZmlsZXMgKSxcblx0XHRcdGNhbmNlbFx0XHQ6ICgpID0+IHRoaXMuY2FuY2VsbGVkLmVtaXQoKSxcblx0XHRcdGxpbmtUeXBlXHQ6IHRoaXMubGlua1R5cGUsXG5cdFx0XHRtdWx0aXNlbGVjdFx0OiB0aGlzLm11bHRpU2VsZWN0LFxuXHRcdFx0Zm9sZGVyc2VsZWN0OiB0aGlzLmZvbGRlclNlbGVjdCxcblx0XHRcdHNpemVMaW1pdFx0OiB0aGlzLnNpemVMaW1pdCxcblx0XHRcdGV4dGVuc2lvbnNcdDogdGhpcy5leHRlbnNpb25zLFxuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==