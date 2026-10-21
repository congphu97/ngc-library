import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Directive, Input, HostListener, Output, EventEmitter, ViewContainerRef, ElementRef } from '@angular/core';
import { NgcTooltipComponent } from '../ngc-tooltip/ngc-tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class NgcClipboardCopyDirective {
    constructor(_overlay, _vcRef, _elementRef) {
        this._overlay = _overlay;
        this._vcRef = _vcRef;
        this._elementRef = _elementRef;
        this.copiedMessage = 'Copied';
        this.displayTime = 1500;
        this.copied = new EventEmitter();
    }
    triggerClick(event) {
        if (this.disabled)
            return;
        console.log({ event });
        event.stopPropagation();
        this._copyURLToClipboard(event);
    }
    openTooltip() {
        // Create overlay ref
        this._overlayRef = this._overlayRef || this._createOverlayRef();
        if (this._overlayRef.hasAttached())
            return;
        this._portal = this._portal || new ComponentPortal(NgcTooltipComponent, this._vcRef);
        this._tooltipInstance = this._overlayRef.attach(this._portal).instance;
        this._tooltipInstance.messageOnly = true;
        this._tooltipInstance.message = this.copiedMessage;
        this._tooltipInstance.setPositionClasses('above');
        setTimeout(this.closeTooltip.bind(this), this.displayTime);
    }
    closeTooltip() {
        this.isCopied = false;
        this._overlayRef.detach();
    }
    /**
     * @return {OverlayRef}
     */
    _createOverlayRef() {
        const config = new OverlayConfig({
            scrollStrategy: this._overlay.scrollStrategies.reposition({ autoClose: true, scrollThrottle: 1000 }),
            hasBackdrop: true,
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._elementRef)
                // .withLockedPosition()
                .withPositions([{
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom',
                    offsetX: 0,
                    offsetY: -15,
                }]),
        });
        const overlayRef = this._overlay.create(config);
        // On backdrop click
        overlayRef.backdropClick()
            .subscribe(this.closeTooltip.bind(this));
        // Set overlay direction
        overlayRef.setDirection('ltr');
        return overlayRef;
    }
    _copyURLToClipboard(event) {
        this.isCopied = true;
        navigator.clipboard.writeText(this.clipboardCopy.toString());
        this.openTooltip();
        this.copied.emit(event);
    }
}
NgcClipboardCopyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcClipboardCopyDirective, deps: [{ token: i1.Overlay }, { token: i0.ViewContainerRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgcClipboardCopyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcClipboardCopyDirective, selector: "[ngcClipboardCopy]", inputs: { clipboardCopy: ["ngcClipboardCopy", "clipboardCopy"], copiedMessage: "copiedMessage", displayTime: "displayTime", disabled: "disabled" }, outputs: { copied: "copied" }, host: { listeners: { "click": "triggerClick($event)" } }, exportAs: ["ngcClipboardCopy"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcClipboardCopyDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcClipboardCopy]', exportAs: 'ngcClipboardCopy' }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ViewContainerRef }, { type: i0.ElementRef }]; }, propDecorators: { clipboardCopy: [{
                type: Input,
                args: ['ngcClipboardCopy']
            }], copiedMessage: [{
                type: Input
            }], displayTime: [{
                type: Input
            }], disabled: [{
                type: Input
            }], copied: [{
                type: Output
            }], triggerClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNsaXBib2FyZC1jb3B5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWNsaXBib2FyZC1jb3B5L25nYy1jbGlwYm9hcmQtY29weS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUNOLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUM5QixNQUFNLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUN0QyxVQUFVLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQUczRSxNQUFNLE9BQU8seUJBQXlCO0lBZWxDLFlBQ1ksUUFBaUIsRUFDdkIsTUFBd0IsRUFDeEIsV0FBdUI7UUFGakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWZoQixrQkFBYSxHQUFXLFFBQVEsQ0FBQztRQUNqQyxnQkFBVyxHQUFXLElBQUksQ0FBQztRQUcxQixXQUFNLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7SUFZNUUsQ0FBQztJQUdELFlBQVksQ0FBRSxLQUFpQjtRQUNyQyxJQUFLLElBQUksQ0FBQyxRQUFRO1lBQUcsT0FBTztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUMxQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ25DLENBQUM7SUFFUyxXQUFXO1FB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O3NCQUE1QixLQUFLO2dCQUNVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFFVyxNQUFNO3NCQUF0QixNQUFNO2dCQWVBLFlBQVk7c0JBRGYsWUFBWTt1QkFBRSxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuXHREaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIsXG5cdE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLFxuXHRFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdjVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4uL25nYy10b29sdGlwL25nYy10b29sdGlwLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ2NDbGlwYm9hcmRDb3B5XScsIGV4cG9ydEFzOiAnbmdjQ2xpcGJvYXJkQ29weScgfSlcbmV4cG9ydCBjbGFzcyBOZ2NDbGlwYm9hcmRDb3B5RGlyZWN0aXZlIHtcblxuXHRASW5wdXQoICduZ2NDbGlwYm9hcmRDb3B5JyApIHB1YmxpYyBjbGlwYm9hcmRDb3B5OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb3BpZWRNZXNzYWdlOiBzdHJpbmcgPSAnQ29waWVkJztcblx0QElucHV0KCkgcHVibGljIGRpc3BsYXlUaW1lOiBudW1iZXIgPSAxNTAwO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cblx0QE91dHB1dCgpIHB1YmxpYyBjb3BpZWQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuXHRwdWJsaWMgaXNDb3BpZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblx0cHJpdmF0ZSBfcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55Pjtcblx0cHJpdmF0ZSBfdG9vbHRpcEluc3RhbmNlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcblx0XHRwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICkgeyB9XG5cbiAgICBASG9zdExpc3RlbmVyKCAnY2xpY2snLCBbICckZXZlbnQnIF0gKVxuXHRwdWJsaWMgdHJpZ2dlckNsaWNrKCBldmVudDogTW91c2VFdmVudCApIHtcblx0XHRpZiAoIHRoaXMuZGlzYWJsZWQgKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKHtldmVudH0pXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5fY29weVVSTFRvQ2xpcGJvYXJkKCBldmVudCApO1xuXHR9XG5cbiAgICBwdWJsaWMgb3BlblRvb2x0aXAoKSB7XG5cdFx0XHRcdC8vIENyZWF0ZSBvdmVybGF5IHJlZlxuICAgICAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheVJlZiB8fCB0aGlzLl9jcmVhdGVPdmVybGF5UmVmKCk7XG5cbiAgICAgICAgaWYgKCB0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkgKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fcG9ydGFsID0gdGhpcy5fcG9ydGFsIHx8IG5ldyBDb21wb25lbnRQb3J0YWwoIE5nY1Rvb2x0aXBDb21wb25lbnQsIHRoaXMuX3ZjUmVmICk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBJbnN0YW5jZSA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKCB0aGlzLl9wb3J0YWwgKS5pbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcEluc3RhbmNlLm1lc3NhZ2VPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcEluc3RhbmNlLm1lc3NhZ2UgPSB0aGlzLmNvcGllZE1lc3NhZ2U7XG5cbiAgICAgICAgdGhpcy5fdG9vbHRpcEluc3RhbmNlLnNldFBvc2l0aW9uQ2xhc3NlcyggJ2Fib3ZlJyApO1xuICAgICAgICBzZXRUaW1lb3V0KCB0aGlzLmNsb3NlVG9vbHRpcC5iaW5kKCB0aGlzICksIHRoaXMuZGlzcGxheVRpbWUgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VUb29sdGlwKCkge1xuXHRcdHRoaXMuaXNDb3BpZWQgPSBmYWxzZTtcblx0XHR0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIH1cblxuICAgIC8qKlxuXHQgKiBAcmV0dXJuIHtPdmVybGF5UmVmfVxuXHQgKi9cblx0cHJpdmF0ZSBfY3JlYXRlT3ZlcmxheVJlZigpOiBPdmVybGF5UmVmIHtcblx0XHRjb25zdCBjb25maWc6IE92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG5cdFx0XHRzY3JvbGxTdHJhdGVneVx0OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbih7IGF1dG9DbG9zZTogdHJ1ZSwgc2Nyb2xsVGhyb3R0bGU6IDEwMDAgfSksXG5cdFx0XHRoYXNCYWNrZHJvcFx0XHQ6IHRydWUsXG5cdFx0XHRwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKClcblx0XHRcdC5mbGV4aWJsZUNvbm5lY3RlZFRvKCB0aGlzLl9lbGVtZW50UmVmIClcblx0XHRcdC8vIC53aXRoTG9ja2VkUG9zaXRpb24oKVxuXHRcdFx0LndpdGhQb3NpdGlvbnMoW3tcblx0XHRcdFx0b3JpZ2luWFx0OiAnY2VudGVyJyxcblx0XHRcdFx0b3JpZ2luWVx0OiAndG9wJyxcblx0XHRcdFx0b3ZlcmxheVg6ICdjZW50ZXInLFxuXHRcdFx0XHRvdmVybGF5WTogJ2JvdHRvbScsXG5cdFx0XHRcdG9mZnNldFhcdDogMCxcblx0XHRcdFx0b2Zmc2V0WVx0OiAtMTUsXG5cdFx0XHR9XSksXG5cdFx0fSk7XG5cdFx0Y29uc3Qgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKCBjb25maWcgKTtcblxuXHRcdC8vIE9uIGJhY2tkcm9wIGNsaWNrXG5cdFx0b3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKClcblx0XHQuc3Vic2NyaWJlKCB0aGlzLmNsb3NlVG9vbHRpcC5iaW5kKCB0aGlzICkgKTtcblxuXHRcdC8vIFNldCBvdmVybGF5IGRpcmVjdGlvblxuXHRcdG92ZXJsYXlSZWYuc2V0RGlyZWN0aW9uKCAnbHRyJyApO1xuXG5cdFx0cmV0dXJuIG92ZXJsYXlSZWY7XG5cdH1cblxuICAgIHByaXZhdGUgX2NvcHlVUkxUb0NsaXBib2FyZCggZXZlbnQ/OiBNb3VzZUV2ZW50ICkge1xuXHRcdHRoaXMuaXNDb3BpZWQgPSB0cnVlO1xuXG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoIHRoaXMuY2xpcGJvYXJkQ29weS50b1N0cmluZygpICk7XG5cdFx0dGhpcy5vcGVuVG9vbHRpcCgpO1xuXHRcdHRoaXMuY29waWVkLmVtaXQoIGV2ZW50ICk7XG5cdH1cbn0iXX0=