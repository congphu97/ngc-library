import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, ViewChild, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import _ from 'lodash';
import Cropper from 'cropperjs';
import { CoerceBoolean, CoerceCssPixel } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "../ngc-button/icon-button/ngc-icon-button.component";
import * as i2 from "../ngc-menu/menu/ngc-menu.component";
import * as i3 from "../ngc-menu/menu-item/ngc-menu-item.component";
import * as i4 from "../ngc-menu/menu-content/ngc-menu-content.component";
import * as i5 from "../ngc-menu/menu-content/ngc-menu-content.directive";
import * as i6 from "../ngc-menu/menu-trigger-for/ngc-menu-trigger-for.directive";
import * as i7 from "../ngc-tooltip.directive";
import * as i8 from "@ngx-translate/core";
export class NgcCropperComponent {
    constructor() {
        this.ngcPrefix = "NGC";
        this.init = new EventEmitter();
        this.cropped = new EventEmitter();
        this._defaultOptions = { viewMode: 1 };
    }
    get styleWidth() { return this.width; }
    get styleHeight() { return this.height; }
    get classCircle() { return this.circle; }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        const callback = (image) => {
            this._image = image;
            this._initCropper();
        };
        _.isString(this.image)
            ? callback(this.image)
            : this._readImage(this.image, callback);
    }
    /**
     * @return {void}
     */
    crop() {
        const cropboxData = this._cropper.getCropBoxData();
        const width = cropboxData.width || 300;
        const height = cropboxData.height || 300;
        const imageData = this._cropper.getCroppedCanvas({
            width, height,
            imageSmoothingEnabled: true,
            imageSmoothingQuality: 'high',
        });
        imageData.toBlob((blob) => {
            this.cropped.emit({ image: imageData.toDataURL('image/png'), blob });
        }, 'image/png', .7);
    }
    /**
     * @param {Cropper.ViewMode} viewMode
     * @return {void}
     */
    setViewMode(viewMode) {
        this._initCropper({ viewMode });
    }
    /**
     * @param {Cropper.Options} options
     * @return {void}
     */
    _initCropper(options) {
        this._cropper?.destroy();
        this._cropper = new Cropper(this.cropperEle.nativeElement, { ...this._defaultOptions, ...this.options, ...options });
        this._cropper.replace(this._image);
        this.init.emit(this);
    }
    /**
     * @param {Blob} blob
     * @param {Function} callback
     * @return {void}
     */
    _readImage(blob, callback) {
        const reader = new FileReader();
        reader.onloadend = () => callback(reader.result);
        reader.readAsDataURL(blob);
    }
}
NgcCropperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCropperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcCropperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcCropperComponent, selector: "ngc-cropper", inputs: { image: "image", options: "options", circle: "circle", width: "width", height: "height" }, outputs: { init: "init", cropped: "cropped" }, host: { properties: { "style.--cropper-width": "this.styleWidth", "style.--cropper-height": "this.styleHeight", "class.ngc-cropper--circle": "this.classCircle" }, classAttribute: "ngc-cropper" }, viewQueries: [{ propertyName: "cropperEle", first: true, predicate: ["cropper"], descendants: true }], ngImport: i0, template: "<img id=\"cropper\" />\n\n<div class=\"ngc-cropper__settings\">\n  <button\n    ngcIconButton\n    icon=\"settings\"\n    [ngcMenuTriggerFor]=\"viewModeMenu\">\n  </button>\n</div>\n\n<ngc-menu #viewModeMenu>\n  <ngc-menu-content>\n    <ng-template ngcMenuContent>\n\n      <button\n        ngcMenuItem\n        [maxWidth]=\"'300px'\"\n        [ngcTooltip]=\"ngcPrefix + '.MESSAGE.CROPPER_VIEW_MODE_1' | translate\"\n        (click)=\"setViewMode(0)\">\n        {{ ngcPrefix + '.LABEL.CROPPER_VIEW_MODE_1' | translate }}\n      </button>\n\n      <button\n        ngcMenuItem\n        [maxWidth]=\"'300px'\"\n        [ngcTooltip]=\"ngcPrefix + '.MESSAGE.CROPPER_VIEW_MODE_2' | translate\"\n        (click)=\"setViewMode(1)\">\n        {{ ngcPrefix + '.LABEL.CROPPER_VIEW_MODE_2' | translate }}\n      </button>\n\n      <button\n        ngcMenuItem\n        [maxWidth]=\"'300px'\"\n        [ngcTooltip]=\"ngcPrefix + '.MESSAGE.CROPPER_VIEW_MODE_3' | translate\"\n        (click)=\"setViewMode(2)\">\n        {{ ngcPrefix + '.LABEL.CROPPER_VIEW_MODE_3' | translate }}\n      </button>\n\n      <button\n        ngcMenuItem\n        [maxWidth]=\"'300px'\"\n        [ngcTooltip]=\"ngcPrefix + '.MESSAGE.CROPPER_VIEW_MODE_4' | translate\"\n        (click)=\"setViewMode(3)\">\n        {{ ngcPrefix + '.LABEL.CROPPER_VIEW_MODE_4' | translate }}\n      </button>\n\n    </ng-template>\n  </ngc-menu-content>\n</ngc-menu>\n", styles: ["@import\"cropperjs/dist/cropper.min.css\";.wgc-cropper{display:flex;width:var(--cropper-width, 100%);height:var(--cropper-height, 250px);position:relative}.wgc-cropper.wgc-cropper--circle .cropper-crop-box,.wgc-cropper.wgc-cropper--circle .cropper-view-box{border-radius:50%;overflow:hidden}.wgc-cropper .wgc-cropper__settings{position:absolute;top:5px;right:5px}\n"], dependencies: [{ kind: "component", type: i1.NgcIconButtonComponent, selector: "button[ngcIconButton]", inputs: ["type", "color", "size", "icon", "iconColor", "iconSize", "borderColor", "borderStyle", "borderWidth", "disabled", "square"] }, { kind: "component", type: i2.NgcMenuComponent, selector: "ngc-menu", inputs: ["title", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "hasScrollBar", "hasBackdrop", "hasArrow", "hasButtonClose", "closeOnClickOutside", "scrollBarMode", "class"], outputs: ["opened", "closed", "backdropPress", "loadMore"] }, { kind: "component", type: i3.NgcMenuItemComponent, selector: "button[ngcMenuItem]", inputs: ["icon", "color", "iconColor", "dotColor", "autoClose", "active", "disabled", "focusing"], outputs: ["activeChange", "click", "focus", "blur"] }, { kind: "component", type: i4.NgcMenuContentComponent, selector: "ngc-menu-content", inputs: ["class"] }, { kind: "directive", type: i5.NgcMenuContentDirective, selector: "[ngcMenuContent]", exportAs: ["ngcMenuContent"] }, { kind: "directive", type: i6.NgcMenuTriggerForDirective, selector: "[ngcMenuTriggerFor]", inputs: ["panelClass", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "programmatically", "autoFit", "disabled", "hasBackdrop", "closeOnClickOutside", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "menuData", "ngcMenuTriggerFor"], outputs: ["menuInit", "menuOpened", "menuClosed", "menuBackdropPress"], exportAs: ["ngcMenuTriggerFor"] }, { kind: "directive", type: i7.NgcTooltipDirective, selector: "[ngcTooltip]", inputs: ["panelClass", "backdropClass", "tooltipColor", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "once", "programmatically", "autoClose", "hasBackdrop", "closeOnClickOutside", "openDelay", "closeDelay", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "triggerType", "ngcTooltip"], outputs: ["opened", "closed"], exportAs: ["ngcTooltip"] }, { kind: "pipe", type: i8.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCropperComponent.prototype, "circle", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCropperComponent.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCropperComponent.prototype, "height", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCropperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-cropper', host: { class: 'ngc-cropper' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<img id=\"cropper\" />\n\n<div class=\"ngc-cropper__settings\">\n  <button\n    ngcIconButton\n    icon=\"settings\"\n    [ngcMenuTriggerFor]=\"viewModeMenu\">\n  </button>\n</div>\n\n<ngc-menu #viewModeMenu>\n  <ngc-menu-content>\n    <ng-template ngcMenuContent>\n\n      <button\n        ngcMenuItem\n        [maxWidth]=\"'300px'\"\n        [ngcTooltip]=\"ngcPrefix + '.MESSAGE.CROPPER_VIEW_MODE_1' | translate\"\n        (click)=\"setViewMode(0)\">\n        {{ ngcPrefix + '.LABEL.CROPPER_VIEW_MODE_1' | translate }}\n      </button>\n\n      <button\n        ngcMenuItem\n        [maxWidth]=\"'300px'\"\n        [ngcTooltip]=\"ngcPrefix + '.MESSAGE.CROPPER_VIEW_MODE_2' | translate\"\n        (click)=\"setViewMode(1)\">\n        {{ ngcPrefix + '.LABEL.CROPPER_VIEW_MODE_2' | translate }}\n      </button>\n\n      <button\n        ngcMenuItem\n        [maxWidth]=\"'300px'\"\n        [ngcTooltip]=\"ngcPrefix + '.MESSAGE.CROPPER_VIEW_MODE_3' | translate\"\n        (click)=\"setViewMode(2)\">\n        {{ ngcPrefix + '.LABEL.CROPPER_VIEW_MODE_3' | translate }}\n      </button>\n\n      <button\n        ngcMenuItem\n        [maxWidth]=\"'300px'\"\n        [ngcTooltip]=\"ngcPrefix + '.MESSAGE.CROPPER_VIEW_MODE_4' | translate\"\n        (click)=\"setViewMode(3)\">\n        {{ ngcPrefix + '.LABEL.CROPPER_VIEW_MODE_4' | translate }}\n      </button>\n\n    </ng-template>\n  </ngc-menu-content>\n</ngc-menu>\n", styles: ["@import\"cropperjs/dist/cropper.min.css\";.wgc-cropper{display:flex;width:var(--cropper-width, 100%);height:var(--cropper-height, 250px);position:relative}.wgc-cropper.wgc-cropper--circle .cropper-crop-box,.wgc-cropper.wgc-cropper--circle .cropper-view-box{border-radius:50%;overflow:hidden}.wgc-cropper .wgc-cropper__settings{position:absolute;top:5px;right:5px}\n"] }]
        }], propDecorators: { styleWidth: [{
                type: HostBinding,
                args: ['style.--cropper-width']
            }], styleHeight: [{
                type: HostBinding,
                args: ['style.--cropper-height']
            }], classCircle: [{
                type: HostBinding,
                args: ['class.ngc-cropper--circle']
            }], cropperEle: [{
                type: ViewChild,
                args: ['cropper']
            }], image: [{
                type: Input
            }], options: [{
                type: Input
            }], circle: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], init: [{
                type: Output
            }], cropped: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNyb3BwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtY3JvcHBlci9uZ2MtY3JvcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jcm9wcGVyL25nYy1jcm9wcGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDeEIsWUFBWSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFDNUIsU0FBUyxFQUFFLHVCQUF1QixFQUNqRCxXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUVoQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQzs7Ozs7Ozs7OztBQWV0RCxNQUFNLE9BQU8sbUJBQW1CO0lBUmhDO1FBVVEsY0FBUyxHQUFHLEtBQUssQ0FBQztRQWtCUixTQUFJLEdBQXNDLElBQUksWUFBWSxFQUF1QixDQUFDO1FBQ2xGLFlBQU8sR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFJeEYsb0JBQWUsR0FBb0IsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0F3RTNEO0lBOUZBLElBQ0ksVUFBVSxLQUFhLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFL0MsSUFDSSxXQUFXLEtBQWEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVqRCxJQUNJLFdBQVcsS0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBaUJsRDs7T0FFRztJQUNILGVBQWU7UUFDZCxNQUFNLFFBQVEsR0FBOEIsQ0FBRSxLQUFhLEVBQUcsRUFBRTtZQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUVwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBRUYsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFO1lBQ3ZCLENBQUMsQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLEtBQWUsQ0FBRTtZQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsS0FBYSxFQUFFLFFBQVEsQ0FBRSxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRztJQUNJLElBQUk7UUFDVixNQUFNLFdBQVcsR0FBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4RSxNQUFNLEtBQUssR0FBVyxXQUFXLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztRQUMvQyxNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztRQUNqRCxNQUFNLFNBQVMsR0FBc0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuRSxLQUFLLEVBQUUsTUFBTTtZQUNiLHFCQUFxQixFQUFFLElBQUk7WUFDM0IscUJBQXFCLEVBQUUsTUFBTTtTQUM3QixDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsTUFBTSxDQUFFLENBQUUsSUFBVSxFQUFHLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBRSxXQUFXLENBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFdBQVcsQ0FBRSxRQUEwQjtRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssWUFBWSxDQUFFLE9BQXlCO1FBQzlDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUN4RCxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssVUFBVSxDQUFFLElBQVUsRUFBRSxRQUFtQztRQUNsRSxNQUFNLE1BQU0sR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFFLE1BQU0sQ0FBQyxNQUFnQixDQUFFLENBQUM7UUFDN0QsTUFBTSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUM5QixDQUFDOztnSEEvRlcsbUJBQW1CO29HQUFuQixtQkFBbUIsaWZDeEJoQywwNENBaURBO0FEVEM7SUFBVSxhQUFhLEVBQUU7O21EQUF3QjtBQUNqRDtJQUFVLGNBQWMsRUFBRTs7a0RBQXNCO0FBQ2hEO0lBQVUsY0FBYyxFQUFFOzttREFBdUI7MkZBbEJyQyxtQkFBbUI7a0JBUi9CLFNBQVM7K0JBQ0csYUFBYSxRQUdoQixFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsaUJBQ2pCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07OEJBTTVDLFVBQVU7c0JBRGIsV0FBVzt1QkFBRSx1QkFBdUI7Z0JBSWpDLFdBQVc7c0JBRGQsV0FBVzt1QkFBRSx3QkFBd0I7Z0JBSWxDLFdBQVc7c0JBRGQsV0FBVzt1QkFBRSwyQkFBMkI7Z0JBR1YsVUFBVTtzQkFBeEMsU0FBUzt1QkFBRSxTQUFTO2dCQUVMLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFDMkIsTUFBTTtzQkFBdEMsS0FBSztnQkFDNEIsS0FBSztzQkFBdEMsS0FBSztnQkFDNEIsTUFBTTtzQkFBdkMsS0FBSztnQkFFVyxJQUFJO3NCQUFwQixNQUFNO2dCQUNVLE9BQU87c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIElucHV0LCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sXG5cdEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBDcm9wcGVyIGZyb20gJ2Nyb3BwZXJqcyc7XG5cbmltcG9ydCB7IENvZXJjZUJvb2xlYW4sIENvZXJjZUNzc1BpeGVsIH0gZnJvbSAnQGNvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nY0lDcm9wcGVkRXZlbnQge1xuXHRpbWFnZTogc3RyaW5nO1xuXHRibG9iOiBCbG9iO1xufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLWNyb3BwZXInLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1jcm9wcGVyLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1jcm9wcGVyLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtY3JvcHBlcicgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NDcm9wcGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHVibGljIG5nY1ByZWZpeCA9IFwiTkdDXCI7XG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tY3JvcHBlci13aWR0aCcgKVxuXHRnZXQgc3R5bGVXaWR0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy53aWR0aDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tY3JvcHBlci1oZWlnaHQnIClcblx0Z2V0IHN0eWxlSGVpZ2h0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmhlaWdodDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1jcm9wcGVyLS1jaXJjbGUnIClcblx0Z2V0IGNsYXNzQ2lyY2xlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jaXJjbGU7IH1cblxuXHRAVmlld0NoaWxkKCAnY3JvcHBlcicgKSBwdWJsaWMgY3JvcHBlckVsZTogRWxlbWVudFJlZjxIVE1MSW1hZ2VFbGVtZW50PjtcblxuXHRASW5wdXQoKSBwdWJsaWMgaW1hZ2U6IHN0cmluZyB8IEJsb2I7XG5cdEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBDcm9wcGVyLk9wdGlvbnM7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGNpcmNsZTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHdpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcblxuXHRAT3V0cHV0KCkgcHVibGljIGluaXQ6IEV2ZW50RW1pdHRlcjxOZ2NDcm9wcGVyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjQ3JvcHBlckNvbXBvbmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBjcm9wcGVkOiBFdmVudEVtaXR0ZXI8TmdjSUNyb3BwZWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY0lDcm9wcGVkRXZlbnQ+KCk7XG5cblx0cHJpdmF0ZSBfaW1hZ2U6IHN0cmluZztcblx0cHJpdmF0ZSBfY3JvcHBlcjogQ3JvcHBlcjtcblx0cHJpdmF0ZSBfZGVmYXVsdE9wdGlvbnM6IENyb3BwZXIuT3B0aW9ucyA9IHsgdmlld01vZGU6IDEgfTtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2s6ICggaW1hZ2U6IHN0cmluZyApID0+IHZvaWQgPSAoIGltYWdlOiBzdHJpbmcgKSA9PiB7XG5cdFx0XHR0aGlzLl9pbWFnZSA9IGltYWdlO1xuXG5cdFx0XHR0aGlzLl9pbml0Q3JvcHBlcigpO1xuXHRcdH07XG5cblx0XHRfLmlzU3RyaW5nKCB0aGlzLmltYWdlIClcblx0XHRcdD8gY2FsbGJhY2soIHRoaXMuaW1hZ2UgYXMgc3RyaW5nIClcblx0XHRcdDogdGhpcy5fcmVhZEltYWdlKCB0aGlzLmltYWdlIGFzIEJsb2IsIGNhbGxiYWNrICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjcm9wKCkge1xuXHRcdGNvbnN0IGNyb3Bib3hEYXRhOiBDcm9wcGVyLkNyb3BCb3hEYXRhID0gdGhpcy5fY3JvcHBlci5nZXRDcm9wQm94RGF0YSgpO1xuXHRcdGNvbnN0IHdpZHRoOiBudW1iZXIgPSBjcm9wYm94RGF0YS53aWR0aCB8fCAzMDA7XG5cdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgPSBjcm9wYm94RGF0YS5oZWlnaHQgfHwgMzAwO1xuXHRcdGNvbnN0IGltYWdlRGF0YTogSFRNTENhbnZhc0VsZW1lbnQgPSB0aGlzLl9jcm9wcGVyLmdldENyb3BwZWRDYW52YXMoe1xuXHRcdFx0d2lkdGgsIGhlaWdodCxcblx0XHRcdGltYWdlU21vb3RoaW5nRW5hYmxlZDogdHJ1ZSxcblx0XHRcdGltYWdlU21vb3RoaW5nUXVhbGl0eTogJ2hpZ2gnLFxuXHRcdH0pO1xuXG5cdFx0aW1hZ2VEYXRhLnRvQmxvYiggKCBibG9iOiBCbG9iICkgPT4ge1xuXHRcdFx0dGhpcy5jcm9wcGVkLmVtaXQoeyBpbWFnZTogaW1hZ2VEYXRhLnRvRGF0YVVSTCggJ2ltYWdlL3BuZycgKSwgYmxvYiB9KTtcblx0XHR9LCAnaW1hZ2UvcG5nJywgLjcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0Nyb3BwZXIuVmlld01vZGV9IHZpZXdNb2RlXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2V0Vmlld01vZGUoIHZpZXdNb2RlOiBDcm9wcGVyLlZpZXdNb2RlICkge1xuXHRcdHRoaXMuX2luaXRDcm9wcGVyKHsgdmlld01vZGUgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtDcm9wcGVyLk9wdGlvbnN9IG9wdGlvbnNcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX2luaXRDcm9wcGVyKCBvcHRpb25zPzogQ3JvcHBlci5PcHRpb25zICkge1xuXHRcdHRoaXMuX2Nyb3BwZXI/LmRlc3Ryb3koKTtcblxuXHRcdHRoaXMuX2Nyb3BwZXIgPSBuZXcgQ3JvcHBlcihcblx0XHRcdHRoaXMuY3JvcHBlckVsZS5uYXRpdmVFbGVtZW50LFxuXHRcdFx0eyAuLi50aGlzLl9kZWZhdWx0T3B0aW9ucywgLi4udGhpcy5vcHRpb25zLCAuLi5vcHRpb25zIH1cblx0XHQpO1xuXG5cdFx0dGhpcy5fY3JvcHBlci5yZXBsYWNlKCB0aGlzLl9pbWFnZSApO1xuXG5cdFx0dGhpcy5pbml0LmVtaXQoIHRoaXMgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0Jsb2J9IGJsb2Jcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX3JlYWRJbWFnZSggYmxvYjogQmxvYiwgY2FsbGJhY2s6ICggaW1hZ2U6IHN0cmluZyApID0+IHZvaWQgKSB7XG5cdFx0Y29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuXHRcdHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiBjYWxsYmFjayggcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcgKTtcblx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTCggYmxvYiApO1xuXHR9XG5cbn1cbiIsIjxpbWcgaWQ9XCJjcm9wcGVyXCIgLz5cblxuPGRpdiBjbGFzcz1cIm5nYy1jcm9wcGVyX19zZXR0aW5nc1wiPlxuICA8YnV0dG9uXG4gICAgbmdjSWNvbkJ1dHRvblxuICAgIGljb249XCJzZXR0aW5nc1wiXG4gICAgW25nY01lbnVUcmlnZ2VyRm9yXT1cInZpZXdNb2RlTWVudVwiPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48bmdjLW1lbnUgI3ZpZXdNb2RlTWVudT5cbiAgPG5nYy1tZW51LWNvbnRlbnQ+XG4gICAgPG5nLXRlbXBsYXRlIG5nY01lbnVDb250ZW50PlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5nY01lbnVJdGVtXG4gICAgICAgIFttYXhXaWR0aF09XCInMzAwcHgnXCJcbiAgICAgICAgW25nY1Rvb2x0aXBdPVwibmdjUHJlZml4ICsgJy5NRVNTQUdFLkNST1BQRVJfVklFV19NT0RFXzEnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgKGNsaWNrKT1cInNldFZpZXdNb2RlKDApXCI+XG4gICAgICAgIHt7IG5nY1ByZWZpeCArICcuTEFCRUwuQ1JPUFBFUl9WSUVXX01PREVfMScgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5nY01lbnVJdGVtXG4gICAgICAgIFttYXhXaWR0aF09XCInMzAwcHgnXCJcbiAgICAgICAgW25nY1Rvb2x0aXBdPVwibmdjUHJlZml4ICsgJy5NRVNTQUdFLkNST1BQRVJfVklFV19NT0RFXzInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgKGNsaWNrKT1cInNldFZpZXdNb2RlKDEpXCI+XG4gICAgICAgIHt7IG5nY1ByZWZpeCArICcuTEFCRUwuQ1JPUFBFUl9WSUVXX01PREVfMicgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5nY01lbnVJdGVtXG4gICAgICAgIFttYXhXaWR0aF09XCInMzAwcHgnXCJcbiAgICAgICAgW25nY1Rvb2x0aXBdPVwibmdjUHJlZml4ICsgJy5NRVNTQUdFLkNST1BQRVJfVklFV19NT0RFXzMnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgKGNsaWNrKT1cInNldFZpZXdNb2RlKDIpXCI+XG4gICAgICAgIHt7IG5nY1ByZWZpeCArICcuTEFCRUwuQ1JPUFBFUl9WSUVXX01PREVfMycgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5nY01lbnVJdGVtXG4gICAgICAgIFttYXhXaWR0aF09XCInMzAwcHgnXCJcbiAgICAgICAgW25nY1Rvb2x0aXBdPVwibmdjUHJlZml4ICsgJy5NRVNTQUdFLkNST1BQRVJfVklFV19NT0RFXzQnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgKGNsaWNrKT1cInNldFZpZXdNb2RlKDMpXCI+XG4gICAgICAgIHt7IG5nY1ByZWZpeCArICcuTEFCRUwuQ1JPUFBFUl9WSUVXX01PREVfNCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uZ2MtbWVudS1jb250ZW50PlxuPC9uZ2MtbWVudT5cbiJdfQ==