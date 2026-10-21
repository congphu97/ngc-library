import { Directive, ElementRef, NgZone, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class NgcScrollBarViewPortItemDirective {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {NgZone} _ngZone
     */
    constructor(elementRef, _cdRef, _ngZone) {
        this.elementRef = elementRef;
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        this.inViewPort = new EventEmitter();
    }
    /**
     * @param {ElementRef} parent
     * @return {void}
     */
    checkInViewPort(parent = document.documentElement) {
        this._ngZone.runOutsideAngular(() => {
            const bounding = this.elementRef.nativeElement.getBoundingClientRect();
            const height = this.elementRef.nativeElement.clientHeight;
            const width = this.elementRef.nativeElement.clientWidth;
            const offsetWidth = _.get(this.viewPortOffset, 0) || 0;
            const offsetHeight = _.get(this.viewPortOffset, 1) || 0;
            this.isInViewPort = bounding.top >= -height - offsetHeight
                && bounding.left >= -width - offsetWidth
                && bounding.bottom <= parent.clientHeight + height + offsetHeight
                && bounding.right <= parent.clientWidth + width + offsetWidth;
            this.inViewPort.emit(this.isInViewPort);
            this._cdRef.markForCheck();
        });
    }
}
NgcScrollBarViewPortItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcScrollBarViewPortItemDirective, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
NgcScrollBarViewPortItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcScrollBarViewPortItemDirective, selector: "[ngcScrollBarViewPortItem]", inputs: { viewPortOffset: "viewPortOffset" }, outputs: { inViewPort: "inViewPort" }, exportAs: ["ngcScrollBarViewPortItem"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcScrollBarViewPortItemDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngcScrollBarViewPortItem]', exportAs: 'ngcScrollBarViewPortItem' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, propDecorators: { viewPortOffset: [{
                type: Input
            }], inViewPort: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXNjcm9sbC1iYXItdmlldy1wb3J0LWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2Mtc2Nyb2xsLWJhci9uZ2Mtc2Nyb2xsLWJhci12aWV3LXBvcnQvbmdjLXNjcm9sbC1iYXItdmlldy1wb3J0LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFDN0IsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDaEMsWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7QUFHdkIsTUFBTSxPQUFPLGlDQUFpQztJQVE3Qzs7Ozs7T0FLRztJQUNILFlBQW9CLFVBQXNCLEVBQVUsTUFBeUIsRUFBVSxPQUFlO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFWckYsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBVXlCLENBQUM7SUFFM0c7OztPQUdHO0lBQ0ksZUFBZSxDQUFFLFNBQXNCLFFBQVEsQ0FBQyxlQUFlO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUUsR0FBRyxFQUFFO1lBQ3BDLE1BQU0sUUFBUSxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDaEYsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1lBQ2xFLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUNoRSxNQUFNLFdBQVcsR0FBVyxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sWUFBWSxHQUFXLENBQUMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUM7WUFFbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVk7bUJBQ3RELFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVzttQkFDckMsUUFBUSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxZQUFZO21CQUM5RCxRQUFRLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUUvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUUsQ0FBQztJQUNMLENBQUM7OzhIQXBDVyxpQ0FBaUM7a0hBQWpDLGlDQUFpQzsyRkFBakMsaUNBQWlDO2tCQUQ3QyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRTtzSkFHMUUsY0FBYztzQkFBN0IsS0FBSztnQkFFVyxVQUFVO3NCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBOZ1pvbmUsXG5cdENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCwgT3V0cHV0LFxuXHRFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmdjU2Nyb2xsQmFyVmlld1BvcnRJdGVtXScsIGV4cG9ydEFzOiAnbmdjU2Nyb2xsQmFyVmlld1BvcnRJdGVtJyB9KVxuZXhwb3J0IGNsYXNzIE5nY1Njcm9sbEJhclZpZXdQb3J0SXRlbURpcmVjdGl2ZSB7XG5cblx0QElucHV0KCkgcHVibGljIHZpZXdQb3J0T2Zmc2V0OiBudW1iZXJbXTtcblxuXHRAT3V0cHV0KCkgcHVibGljIGluVmlld1BvcnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHRwdWJsaWMgaXNJblZpZXdQb3J0OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IF9jZFJlZlxuXHQgKiBAcGFyYW0ge05nWm9uZX0gX25nWm9uZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX25nWm9uZTogTmdab25lICkge31cblxuXHQvKipcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBwYXJlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjaGVja0luVmlld1BvcnQoIHBhcmVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgKSB7XG5cdFx0dGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3VuZGluZzogRE9NUmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0XHRjb25zdCB3aWR0aDogbnVtYmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0XHRjb25zdCBvZmZzZXRXaWR0aDogbnVtYmVyID0gXy5nZXQoIHRoaXMudmlld1BvcnRPZmZzZXQsIDAgKSB8fCAwO1xuXHRcdFx0Y29uc3Qgb2Zmc2V0SGVpZ2h0OiBudW1iZXIgPSBfLmdldCggdGhpcy52aWV3UG9ydE9mZnNldCwgMSApIHx8IDA7XG5cblx0XHRcdHRoaXMuaXNJblZpZXdQb3J0ID0gYm91bmRpbmcudG9wID49IC1oZWlnaHQgLSBvZmZzZXRIZWlnaHRcblx0XHRcdFx0JiYgYm91bmRpbmcubGVmdCA+PSAtd2lkdGggLSBvZmZzZXRXaWR0aFxuXHRcdFx0XHQmJiBib3VuZGluZy5ib3R0b20gPD0gcGFyZW50LmNsaWVudEhlaWdodCArIGhlaWdodCArIG9mZnNldEhlaWdodFxuXHRcdFx0XHQmJiBib3VuZGluZy5yaWdodCA8PSBwYXJlbnQuY2xpZW50V2lkdGggKyB3aWR0aCArIG9mZnNldFdpZHRoO1xuXG5cdFx0XHR0aGlzLmluVmlld1BvcnQuZW1pdCggdGhpcy5pc0luVmlld1BvcnQgKTtcblx0XHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0gKTtcblx0fVxuXG59XG4iXX0=