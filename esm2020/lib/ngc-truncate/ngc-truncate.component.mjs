import { __decorate, __metadata } from "tslib";
import { Component, Input, HostBinding, HostListener, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import _ from 'lodash';
import { NgcTooltipDirective } from '../ngc-tooltip.directive';
import * as i0 from "@angular/core";
import * as i1 from "../ngc-tooltip.directive";
const checkTextNoWrap = _.memoize((text) => {
    return _.chain(text).trim().value().search(' ') !== -1;
});
export class NgcTruncateComponent {
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.limitLine = 2;
        this._checkTextOverDebounce = _.debounce(this._checkTextOver.bind(this), 500);
        this._resizeObserver = new ResizeObserver(this._checkTextOverDebounce.bind(this));
        this._mutationObserver = new MutationObserver(this._checkTextOverDebounce.bind(this));
    }
    get styleLine() { return this.internalLimitLine; }
    get classSingleLine() { return this.internalLimitLine === 1; }
    get classDisabled() { return this.disabled || this.limitLine < 0; }
    get classEmpty() { return this.isEmpty; }
    get textEle() {
        const ele = this.wrapperEle?.nativeElement;
        const firstChild = ele.firstChild;
        return !firstChild
            || firstChild.nodeType === Node.COMMENT_NODE
            || firstChild.nodeType === Node.TEXT_NODE
            || !firstChild.innerText.length
            ? ele : firstChild;
    }
    get content() { return this.textEle.innerText || ''; }
    triggerMouseMove() {
        this.internalTooltip = this._checkTextOver() ? (this.tooltip || this.content) : undefined;
        console.log(this.internalTooltip);
        this._cdRef.markForCheck();
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        // Listen size changes
        this._resizeObserver.observe(this.wrapperEle.nativeElement);
        // Listen text changes
        this._mutationObserver.observe(this.wrapperEle.nativeElement, { childList: true, subtree: true });
    }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        this._checkTextOver();
        this._checkTextOverDebounce(); // Fix on safari
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        this._checkTextOverDebounce.cancel();
        this._resizeObserver.disconnect();
        this._mutationObserver.disconnect();
    }
    /**
     * @return {boolean}
     */
    _checkTextOver() {
        let isTextOver = false;
        this.isEmpty = !this.content.length;
        this.internalLimitLine = this.limitLine;
        if (!this.isEmpty) {
            this.internalLimitLine = checkTextNoWrap(this.content) ? Number(this.limitLine) : 1;
            const clientHeight = this.textEle.clientHeight;
            const scrollHeight = this.textEle.scrollHeight;
            isTextOver = clientHeight < scrollHeight;
        }
        this._cdRef.markForCheck();
        return isTextOver;
    }
}
NgcTruncateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTruncateComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcTruncateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTruncateComponent, selector: "ngc-truncate", inputs: { limitLine: "limitLine", disabled: "disabled", tooltip: "tooltip", ngcTooltip: "ngcTooltip" }, host: { listeners: { "mousemove": "triggerMouseMove()" }, properties: { "style.--truncate-line": "this.styleLine", "class.wgc-truncate--single-line": "this.classSingleLine", "class.wgc-truncate--disabled": "this.classDisabled", "class.wgc-truncate--empty": "this.classEmpty" } }, viewQueries: [{ propertyName: "wrapperEle", first: true, predicate: ["wrapperEle"], descendants: true, static: true }], ngImport: i0, template: "<!-- <ngc-tooltip #tooltip messageOnly maxWidth=\"300px\">\n    {{ internalTooltip }}\n</ngc-tooltip>\n\n<div class=\"ngc-truncate\" #wrapperEle [ngcTooltip]='tooltip'>\n    <ng-content></ng-content> -->\n<!-- </div> -->\n<div class=\"ngc-truncate\" #wrapperEle [ngcTooltip]=\"internalTooltip\">\n    <ng-content></ng-content>\n</div>", styles: [".ngc-truncate{overflow:hidden;white-space:pre-line;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--truncate-line, 2)}\n"], dependencies: [{ kind: "directive", type: i1.NgcTooltipDirective, selector: "[ngcTooltip]", inputs: ["panelClass", "backdropClass", "tooltipColor", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "once", "programmatically", "autoClose", "hasBackdrop", "closeOnClickOutside", "openDelay", "closeDelay", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "triggerType", "ngcTooltip"], outputs: ["opened", "closed"], exportAs: ["ngcTooltip"] }] });
__decorate([
    Input()('tooltip'),
    __metadata("design:type", Object)
], NgcTruncateComponent.prototype, "wgcTruncate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTruncateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-truncate', template: "<!-- <ngc-tooltip #tooltip messageOnly maxWidth=\"300px\">\n    {{ internalTooltip }}\n</ngc-tooltip>\n\n<div class=\"ngc-truncate\" #wrapperEle [ngcTooltip]='tooltip'>\n    <ng-content></ng-content> -->\n<!-- </div> -->\n<div class=\"ngc-truncate\" #wrapperEle [ngcTooltip]=\"internalTooltip\">\n    <ng-content></ng-content>\n</div>", styles: [".ngc-truncate{overflow:hidden;white-space:pre-line;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--truncate-line, 2)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { styleLine: [{
                type: HostBinding,
                args: ['style.--truncate-line']
            }], classSingleLine: [{
                type: HostBinding,
                args: ['class.wgc-truncate--single-line']
            }], classDisabled: [{
                type: HostBinding,
                args: ['class.wgc-truncate--disabled']
            }], classEmpty: [{
                type: HostBinding,
                args: ['class.wgc-truncate--empty']
            }], wrapperEle: [{
                type: ViewChild,
                args: ['wrapperEle', { static: true }]
            }], limitLine: [{
                type: Input
            }], disabled: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], ngcTooltip: [{
                type: Input
            }], triggerMouseMove: [{
                type: HostListener,
                args: ['mousemove']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRydW5jYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRydW5jYXRlL25nYy10cnVuY2F0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10cnVuY2F0ZS9uZ2MtdHJ1bmNhdGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUE4QyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUE7OztBQUU5RCxNQUFNLGVBQWUsR0FBZ0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFFLElBQVksRUFBWSxFQUFFO0lBQzFGLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDLENBQUM7QUFPSCxNQUFNLE9BQU8sb0JBQW9CO0lBNkNoQzs7O09BR0c7SUFDSCxZQUFxQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQWpDOUIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQVc5QiwyQkFBc0IsR0FDM0IsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsRUFBRSxHQUFHLENBQUUsQ0FBQztRQUMvQyxvQkFBZSxHQUFtQixJQUFJLGNBQWMsQ0FBRSxJQUFJLENBQUMsc0JBQXNCLENB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QUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4RixNQUFNLFlBQVksR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN2RCxNQUFNLFlBQVksR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUV2RCxVQUFVLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFM0IsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7aUhBM0dXLG9CQUFvQjtxR0FBcEIsb0JBQW9CLDRpQkNiakMsZ1ZBU007QUR5Qkw7SUFBQyxLQUFLLEVBQUUsQ0FBRSxTQUFTLENBQUU7O3lEQUF5QjsyRkFyQmxDLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSxjQUFjO3dHQU9yQixTQUFTO3NCQURaLFdBQVc7dUJBQUUsdUJBQXVCO2dCQUlqQyxlQUFlO3NCQURsQixXQUFXO3VCQUFFLGlDQUFpQztnQkFJM0MsYUFBYTtzQkFEaEIsV0FBVzt1QkFBRSw4QkFBOEI7Z0JBSXhDLFVBQVU7c0JBRGIsV0FBVzt1QkFBRSwyQkFBMkI7Z0JBR1csVUFBVTtzQkFBN0QsU0FBUzt1QkFBRSxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUUxQixTQUFTO3NCQUF4QixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQWlDQyxnQkFBZ0I7c0JBRHRCLFlBQVk7dUJBQUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcC5kaXJlY3RpdmUnXG5cbmNvbnN0IGNoZWNrVGV4dE5vV3JhcDogKCB0ZXh0OiBzdHJpbmcgKSA9PiBib29sZWFuID0gXy5tZW1vaXplKCggdGV4dDogc3RyaW5nICk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gXy5jaGFpbiggdGV4dCApLnRyaW0oKS52YWx1ZSgpLnNlYXJjaCggJyAnICkgIT09IC0xO1xufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYy10cnVuY2F0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ2MtdHJ1bmNhdGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nYy10cnVuY2F0ZS5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdjVHJ1bmNhdGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tdHJ1bmNhdGUtbGluZScgKVxuXHRnZXQgc3R5bGVMaW5lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLmludGVybmFsTGltaXRMaW5lOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3Mud2djLXRydW5jYXRlLS1zaW5nbGUtbGluZScgKVxuXHRnZXQgY2xhc3NTaW5nbGVMaW5lKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pbnRlcm5hbExpbWl0TGluZSA9PT0gMTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLndnYy10cnVuY2F0ZS0tZGlzYWJsZWQnIClcblx0Z2V0IGNsYXNzRGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRpc2FibGVkIHx8IHRoaXMubGltaXRMaW5lIDwgMDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLndnYy10cnVuY2F0ZS0tZW1wdHknIClcblx0Z2V0IGNsYXNzRW1wdHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzRW1wdHk7IH1cblxuXHRAVmlld0NoaWxkKCAnd3JhcHBlckVsZScsIHsgc3RhdGljOiB0cnVlIH0gKSBwdWJsaWMgd3JhcHBlckVsZTogRWxlbWVudFJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBsaW1pdExpbmU6IG51bWJlciA9IDI7XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIHRvb2x0aXA6IGFueTtcblx0QElucHV0KCkgcHVibGljIG5nY1Rvb2x0aXA6IE5nY1Rvb2x0aXBEaXJlY3RpdmU7XG5cblx0QElucHV0KCkgKCd0b29sdGlwJyApIHB1YmxpYyB3Z2NUcnVuY2F0ZTogYW55O1xuXG5cdHB1YmxpYyBpbnRlcm5hbFRvb2x0aXA6IGFueTtcblx0cHVibGljIGludGVybmFsTGltaXRMaW5lOiBudW1iZXI7XG5cdHB1YmxpYyBpc0VtcHR5OiBib29sZWFuO1xuXG5cdHByaXZhdGUgX2NoZWNrVGV4dE92ZXJEZWJvdW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgXy5kZWJvdW5jZT5cblx0XHQ9IF8uZGVib3VuY2UoIHRoaXMuX2NoZWNrVGV4dE92ZXIuYmluZCggdGhpcyApLCA1MDAgKTtcblx0cHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCB0aGlzLl9jaGVja1RleHRPdmVyRGVib3VuY2UuYmluZCggdGhpcyApICk7XG5cdHByaXZhdGUgX211dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggdGhpcy5fY2hlY2tUZXh0T3ZlckRlYm91bmNlLmJpbmQoIHRoaXMgKSApO1xuXG5cdGdldCB0ZXh0RWxlKCk6IEhUTUxFbGVtZW50IHtcblx0XHRjb25zdCBlbGU6IEhUTUxFbGVtZW50ID0gdGhpcy53cmFwcGVyRWxlPy5uYXRpdmVFbGVtZW50O1xuXHRcdGNvbnN0IGZpcnN0Q2hpbGQ6IEhUTUxFbGVtZW50ID0gKCBlbGUuZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudCApO1xuXG5cdFx0cmV0dXJuICFmaXJzdENoaWxkXG5cdFx0XHR8fCBmaXJzdENoaWxkLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERVxuXHRcdFx0fHwgZmlyc3RDaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREVcblx0XHRcdHx8ICFmaXJzdENoaWxkLmlubmVyVGV4dC5sZW5ndGhcblx0XHRcdD8gZWxlIDogZmlyc3RDaGlsZDtcblx0fVxuXG5cdGdldCBjb250ZW50KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRleHRFbGUuaW5uZXJUZXh0IHx8ICcnOyB9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0NoYW5nZURldGVjdG9yUmVmfSBfY2RSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYgKSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoICdtb3VzZW1vdmUnIClcblx0cHVibGljIHRyaWdnZXJNb3VzZU1vdmUoKSB7XG5cdFx0dGhpcy5pbnRlcm5hbFRvb2x0aXAgPSB0aGlzLl9jaGVja1RleHRPdmVyKCkgPyAoIHRoaXMudG9vbHRpcCB8fCB0aGlzLmNvbnRlbnQgKSA6IHVuZGVmaW5lZDtcblx0XHRjb25zb2xlLmxvZyggdGhpcy5pbnRlcm5hbFRvb2x0aXApXG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Ly8gTGlzdGVuIHNpemUgY2hhbmdlc1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUoIHRoaXMud3JhcHBlckVsZS5uYXRpdmVFbGVtZW50ICk7XG5cblx0XHQvLyBMaXN0ZW4gdGV4dCBjaGFuZ2VzXG5cdFx0dGhpcy5fbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKCB0aGlzLndyYXBwZXJFbGUubmF0aXZlRWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdHRoaXMuX2NoZWNrVGV4dE92ZXIoKTtcblx0XHR0aGlzLl9jaGVja1RleHRPdmVyRGVib3VuY2UoKTsgLy8gRml4IG9uIHNhZmFyaVxuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5fY2hlY2tUZXh0T3ZlckRlYm91bmNlLmNhbmNlbCgpO1xuXHRcdHRoaXMuX3Jlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLl9tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0cHJpdmF0ZSBfY2hlY2tUZXh0T3ZlcigpOiBib29sZWFuIHtcblx0XHRsZXQgaXNUZXh0T3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdFx0dGhpcy5pc0VtcHR5ID0gIXRoaXMuY29udGVudC5sZW5ndGg7XG5cdFx0dGhpcy5pbnRlcm5hbExpbWl0TGluZSA9IHRoaXMubGltaXRMaW5lO1xuXG5cdFx0aWYgKCAhdGhpcy5pc0VtcHR5ICkge1xuXHRcdFx0dGhpcy5pbnRlcm5hbExpbWl0TGluZSA9IGNoZWNrVGV4dE5vV3JhcCggdGhpcy5jb250ZW50ICkgPyBOdW1iZXIoIHRoaXMubGltaXRMaW5lICkgOiAxO1xuXG5cdFx0XHRjb25zdCBjbGllbnRIZWlnaHQ6IG51bWJlciA9IHRoaXMudGV4dEVsZS5jbGllbnRIZWlnaHQ7XG5cdFx0XHRjb25zdCBzY3JvbGxIZWlnaHQ6IG51bWJlciA9IHRoaXMudGV4dEVsZS5zY3JvbGxIZWlnaHQ7XG5cblx0XHRcdGlzVGV4dE92ZXIgPSBjbGllbnRIZWlnaHQgPCBzY3JvbGxIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cblx0XHRyZXR1cm4gaXNUZXh0T3Zlcjtcblx0fVxuXG59XG4iLCI8IS0tIDxuZ2MtdG9vbHRpcCAjdG9vbHRpcCBtZXNzYWdlT25seSBtYXhXaWR0aD1cIjMwMHB4XCI+XG4gICAge3sgaW50ZXJuYWxUb29sdGlwIH19XG48L25nYy10b29sdGlwPlxuXG48ZGl2IGNsYXNzPVwibmdjLXRydW5jYXRlXCIgI3dyYXBwZXJFbGUgW25nY1Rvb2x0aXBdPSd0b29sdGlwJz5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IC0tPlxuPCEtLSA8L2Rpdj4gLS0+XG48ZGl2IGNsYXNzPVwibmdjLXRydW5jYXRlXCIgI3dyYXBwZXJFbGUgW25nY1Rvb2x0aXBdPVwiaW50ZXJuYWxUb29sdGlwXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+Il19