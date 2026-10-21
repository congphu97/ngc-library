import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import _ from 'lodash';
import { DefaultValue, CoerceBoolean } from 'angular-core';
import { COLOR } from '@resources';
import * as i0 from "@angular/core";
export class HighlightStateDirective {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.highlightType = 'background';
        this.highlightColor = COLOR.HIGHLIGHT;
        this.autoUnhighlightDelay = 3000;
        this.highlightStateChange = new EventEmitter();
        this._unsetHighlightDebounce = _.debounce(this.unsetHighlight.bind(this), this.autoUnhighlightDelay);
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.highlightState)
            return;
        this.highlightState ? this.setHighlight() : this.unsetHighlight();
    }
    /**
     * @param {boolean=} isForceAutoUnhighlight
     * @return {void}
     */
    setHighlight(isForceAutoUnhighlight = false) {
        if (!this.highlightState) {
            this.highlightState = true;
            this.highlightStateChange.emit(this.highlightState);
        }
        if (!this.highlightDisabled) {
            // Add style
            this._addStyle();
            // Schedule to auto unhighlight
            (isForceAutoUnhighlight || this.autoUnhighlight) && this._unsetHighlightDebounce();
        }
    }
    /**
     * @return {void}
     */
    unsetHighlight() {
        if (this.highlightState) {
            this.highlightState = false;
            this.highlightStateChange.emit(this.highlightState);
        }
        if (!this.highlightDisabled) {
            // Remove style
            this._removeStyle();
        }
    }
    /**
     * @return {void}
     */
    _addStyle() {
        switch (this.highlightType) {
            case 'background':
                this._elementRef.nativeElement.style.backgroundColor = this.highlightColor;
                break;
            case 'border':
                this._elementRef.nativeElement.style.border = `1px solid ${this.highlightColor}`;
                break;
        }
    }
    /**
     * @return {void}
     */
    _removeStyle() {
        switch (this.highlightType) {
            case 'background':
                this._elementRef.nativeElement.style.backgroundColor = null;
                break;
            case 'border':
                this._elementRef.nativeElement.style.border = null;
                break;
        }
    }
}
HighlightStateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HighlightStateDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
HighlightStateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: HighlightStateDirective, selector: "[highlightState]", inputs: { highlightType: "highlightType", highlightColor: "highlightColor", highlightState: "highlightState", highlightDisabled: "highlightDisabled", autoUnhighlight: "autoUnhighlight", autoUnhighlightDelay: "autoUnhighlightDelay" }, outputs: { highlightStateChange: "highlightStateChange" }, usesOnChanges: true, ngImport: i0 });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], HighlightStateDirective.prototype, "highlightType", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], HighlightStateDirective.prototype, "highlightColor", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], HighlightStateDirective.prototype, "highlightState", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], HighlightStateDirective.prototype, "highlightDisabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], HighlightStateDirective.prototype, "autoUnhighlight", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", Number)
], HighlightStateDirective.prototype, "autoUnhighlightDelay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HighlightStateDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[highlightState]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { highlightType: [{
                type: Input
            }], highlightColor: [{
                type: Input
            }], highlightState: [{
                type: Input
            }], highlightDisabled: [{
                type: Input
            }], autoUnhighlight: [{
                type: Input
            }], autoUnhighlightDelay: [{
                type: Input
            }], highlightStateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LXN0YXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9kaXJlY3RpdmVzL2hpZ2hsaWdodC1zdGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFDNUIsTUFBTSxFQUFFLFlBQVksRUFFcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTNELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBR25DLE1BQU0sT0FBTyx1QkFBdUI7SUFjbkM7OztPQUdHO0lBQ0gsWUFBcUIsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFoQlosa0JBQWEsR0FBNEIsWUFBWSxDQUFDO1FBQ3RELG1CQUFjLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUl6Qyx5QkFBb0IsR0FBVyxJQUFJLENBQUM7UUFFbkQseUJBQW9CLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFbkYsNEJBQXVCLEdBQzVCLENBQUMsQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFFLENBQUM7SUFNN0IsQ0FBQztJQUVqRDs7O09BR0c7SUFDSCxXQUFXLENBQUUsT0FBc0I7UUFDbEMsSUFBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjO1lBQUcsT0FBTztRQUV0QyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWSxDQUFFLHlCQUFrQyxLQUFLO1FBQzNELElBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFHO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBRTNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDO1NBQ3REO1FBRUQsSUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRztZQUM5QixZQUFZO1lBQ1osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWpCLCtCQUErQjtZQUMvQixDQUFFLHNCQUFzQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUUsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNyRjtJQUNGLENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWM7UUFDcEIsSUFBSyxJQUFJLENBQUMsY0FBYyxFQUFHO1lBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBRTVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDO1NBQ3REO1FBRUQsSUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRztZQUM5QixlQUFlO1lBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BCO0lBQ0YsQ0FBQztJQUVEOztPQUVHO0lBQ0ssU0FBUztRQUNoQixRQUFTLElBQUksQ0FBQyxhQUFhLEVBQUc7WUFDN0IsS0FBSyxZQUFZO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzNFLE1BQU07WUFDUCxLQUFLLFFBQVE7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFjLElBQUksQ0FBQyxjQUFlLEVBQUUsQ0FBQztnQkFDbkYsTUFBTTtTQUNQO0lBQ0YsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNuQixRQUFTLElBQUksQ0FBQyxhQUFhLEVBQUc7WUFDN0IsS0FBSyxZQUFZO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUQsTUFBTTtZQUNQLEtBQUssUUFBUTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkQsTUFBTTtTQUNQO0lBQ0YsQ0FBQzs7b0hBNUZXLHVCQUF1Qjt3R0FBdkIsdUJBQXVCO0FBRW5DO0lBQVUsWUFBWSxFQUFFOzs4REFBOEQ7QUFDdEY7SUFBVSxZQUFZLEVBQUU7OytEQUFpRDtBQUN6RTtJQUFVLGFBQWEsRUFBRTs7K0RBQWdDO0FBQ3pEO0lBQVUsYUFBYSxFQUFFOztrRUFBbUM7QUFDNUQ7SUFBVSxhQUFhLEVBQUU7O2dFQUFpQztBQUMxRDtJQUFVLFlBQVksRUFBRTs7cUVBQTRDOzJGQVB4RCx1QkFBdUI7a0JBRG5DLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7aUdBR1YsYUFBYTtzQkFBNUMsS0FBSztnQkFDMEIsY0FBYztzQkFBN0MsS0FBSztnQkFDMkIsY0FBYztzQkFBOUMsS0FBSztnQkFDMkIsaUJBQWlCO3NCQUFqRCxLQUFLO2dCQUMyQixlQUFlO3NCQUEvQyxLQUFLO2dCQUMwQixvQkFBb0I7c0JBQW5ELEtBQUs7Z0JBRVcsb0JBQW9CO3NCQUFwQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCxcblx0T3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IERlZmF1bHRWYWx1ZSwgQ29lcmNlQm9vbGVhbiB9IGZyb20gJ2FuZ3VsYXItY29yZSc7XG5cbmltcG9ydCB7IENPTE9SIH0gZnJvbSAnQHJlc291cmNlcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1toaWdobGlnaHRTdGF0ZV0nIH0pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0U3RhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgaGlnaGxpZ2h0VHlwZTogJ2JhY2tncm91bmQnIHwgJ2JvcmRlcicgPSAnYmFja2dyb3VuZCc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZyA9IENPTE9SLkhJR0hMSUdIVDtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGlnaGxpZ2h0U3RhdGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGhpZ2hsaWdodERpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhdXRvVW5oaWdobGlnaHQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgYXV0b1VuaGlnaGxpZ2h0RGVsYXk6IG51bWJlciA9IDMwMDA7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBoaWdobGlnaHRTdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdHByaXZhdGUgX3Vuc2V0SGlnaGxpZ2h0RGVib3VuY2U6IFJldHVyblR5cGU8dHlwZW9mIF8uZGVib3VuY2U+XG5cdFx0PSBfLmRlYm91bmNlKCB0aGlzLnVuc2V0SGlnaGxpZ2h0LmJpbmQoIHRoaXMgKSwgdGhpcy5hdXRvVW5oaWdobGlnaHREZWxheSApO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoICFjaGFuZ2VzLmhpZ2hsaWdodFN0YXRlICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5oaWdobGlnaHRTdGF0ZSA/IHRoaXMuc2V0SGlnaGxpZ2h0KCkgOiB0aGlzLnVuc2V0SGlnaGxpZ2h0KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtib29sZWFuPX0gaXNGb3JjZUF1dG9VbmhpZ2hsaWdodFxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNldEhpZ2hsaWdodCggaXNGb3JjZUF1dG9VbmhpZ2hsaWdodDogYm9vbGVhbiA9IGZhbHNlICkge1xuXHRcdGlmICggIXRoaXMuaGlnaGxpZ2h0U3RhdGUgKSB7XG5cdFx0XHR0aGlzLmhpZ2hsaWdodFN0YXRlID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5oaWdobGlnaHRTdGF0ZUNoYW5nZS5lbWl0KCB0aGlzLmhpZ2hsaWdodFN0YXRlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5oaWdobGlnaHREaXNhYmxlZCApIHtcblx0XHRcdC8vIEFkZCBzdHlsZVxuXHRcdFx0dGhpcy5fYWRkU3R5bGUoKTtcblxuXHRcdFx0Ly8gU2NoZWR1bGUgdG8gYXV0byB1bmhpZ2hsaWdodFxuXHRcdFx0KCBpc0ZvcmNlQXV0b1VuaGlnaGxpZ2h0IHx8IHRoaXMuYXV0b1VuaGlnaGxpZ2h0ICkgJiYgdGhpcy5fdW5zZXRIaWdobGlnaHREZWJvdW5jZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHVuc2V0SGlnaGxpZ2h0KCkge1xuXHRcdGlmICggdGhpcy5oaWdobGlnaHRTdGF0ZSApIHtcblx0XHRcdHRoaXMuaGlnaGxpZ2h0U3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5oaWdobGlnaHRTdGF0ZUNoYW5nZS5lbWl0KCB0aGlzLmhpZ2hsaWdodFN0YXRlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5oaWdobGlnaHREaXNhYmxlZCApIHtcblx0XHRcdC8vIFJlbW92ZSBzdHlsZVxuXHRcdFx0dGhpcy5fcmVtb3ZlU3R5bGUoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2FkZFN0eWxlKCkge1xuXHRcdHN3aXRjaCAoIHRoaXMuaGlnaGxpZ2h0VHlwZSApIHtcblx0XHRcdGNhc2UgJ2JhY2tncm91bmQnOlxuXHRcdFx0XHR0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5oaWdobGlnaHRDb2xvcjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdib3JkZXInOlxuXHRcdFx0XHR0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYDFweCBzb2xpZCAkeyB0aGlzLmhpZ2hsaWdodENvbG9yIH1gO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX3JlbW92ZVN0eWxlKCkge1xuXHRcdHN3aXRjaCAoIHRoaXMuaGlnaGxpZ2h0VHlwZSApIHtcblx0XHRcdGNhc2UgJ2JhY2tncm91bmQnOlxuXHRcdFx0XHR0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdib3JkZXInOlxuXHRcdFx0XHR0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyID0gbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==