import { __decorate, __metadata } from "tslib";
import { Component, Input, ChangeDetectorRef, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import _ from 'lodash';
import { Unsubscriber, destroyCmp, DefaultValue, CoerceNumber, CoerceArray } from 'angular-core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@ngx-loading-bar/core";
import * as i3 from "angular-svg-round-progressbar";
import * as i4 from "@angular/common";
import * as i5 from "ng-lazyload-image";
import * as i6 from "angular-core";
import * as i7 from "../../pipes/color.pipe";
let NotFoundComponent = class NotFoundComponent {
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     * @param {TranslateService} _translateService
     * @param {LoadingBarService} _loader
     */
    constructor(_cdRef, _translateService, _loader) {
        this._cdRef = _cdRef;
        this._translateService = _translateService;
        this._loader = _loader;
        this.size = 'normal';
        this.mode = 'empty';
        this.debounceTime = 500;
        this._name = this._translateService.instant('CORE.LABEL.RESULTS');
        this._setLoadedDebounce = _.debounce(this._setLoaded.bind(this), this.debounceTime);
    }
    get classLarge() { return this.size === 'large'; }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (changes.name)
            this.name || (this.name = _.toLower(this._name));
        if (changes.mode) {
            this._changeState();
            !changes.mode.firstChange && this._init();
        }
    }
    /**
     * @constructor
     */
    ngOnInit() {
        this._init();
        this._setLoadedDebounce.cancel();
        this._setLoadedDebounce = _.debounce(this._setLoaded.bind(this), this.debounceTime);
        this._changeState();
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        this._setLoadedDebounce.cancel();
    }
    /**
     * @return {void}
     */
    _init() {
        const name = (this.name !== _.toUpper(this.name) ? _.toLower(this.name) : this.name)
            || _.toLower(this._name);
        switch (this.mode) {
            case 'empty':
                this.image = this.emptyImage ?? (this.emptyImage = 'assets/images/icons/empty.png');
                this.imageSize = [this.emptyImageSize?.[0], this.emptyImageSize?.[1] || this.emptyImageSize?.[0]];
                this.title = this.emptyTitle ?? (this.emptyTitle = this._translateService.instant('CORE.MESSAGE.NO_DATA', { name }));
                this.description = this.emptyDescription;
                break;
            case 'error':
                this.image = this.errorImage ?? (this.errorImage = 'assets/images/icons/error.png');
                this.imageSize = [this.errorImageSize?.[0], this.errorImageSize?.[1] || this.errorImageSize?.[0]];
                this.title = this.errorTitle ?? (this.errorTitle = this._translateService.instant('CORE.MESSAGE.COULD_NOT_LOAD_RESOURCES', { name }));
                this.description = this.errorDescription ?? (this.errorDescription = this._translateService.instant('CORE.MESSAGE.COULD_NOT_LOAD_RESOURCES_DESCRIPTION', { name }));
                break;
            case 'custom':
                this.image = this.customImage;
                this.imageSize = [this.customImageSize?.[0], this.customImageSize?.[1] || this.customImageSize?.[0]];
                this.title = this.customTitle;
                this.description = this.customDescription;
                break;
        }
    }
    /**
     * @return {void}
     */
    _changeState() {
        this.loaded = false;
        this._loaderValue$$?.unsubscribe();
        this._setLoadedDebounce.cancel();
        this._setLoadedDebounce();
        this._loaderValue$$ = this._loader.value$
            // .pipe( untilCmpDestroyed(this) as any )
            .subscribe(this._setLoadedDebounce.bind(this));
    }
    /**
     * @param {number=} progress
     * @return {void}
     */
    _setLoaded(progress = 0) {
        this.loaded = progress === 0 || progress === 100;
        this.loaded && destroyCmp(this);
        this._cdRef.markForCheck();
    }
};
NotFoundComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NotFoundComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TranslateService }, { token: i2.LoadingBarService }], target: i0.ɵɵFactoryTarget.Component });
NotFoundComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NotFoundComponent, selector: "not-found", inputs: { name: "name", size: "size", mode: "mode", debounceTime: "debounceTime", emptyImage: "emptyImage", emptyImageSize: "emptyImageSize", emptyTitle: "emptyTitle", emptyDescription: "emptyDescription", errorImage: "errorImage", errorImageSize: "errorImageSize", errorTitle: "errorTitle", errorDescription: "errorDescription", customImage: "customImage", customImageSize: "customImageSize", customTitle: "customTitle", customDescription: "customDescription" }, host: { properties: { "class.not-found--large": "this.classLarge" }, classAttribute: "not-found" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"loaded; else elseBlock\">\n\n    <ng-container *ngIf=\"mode !== 'search'; else elseBlock2\">\n        <img class=\"image\" [style.width.px]=\"imageSize?.[0]\" [style.height.px]=\"imageSize?.[1]\" [lazyLoad]=\"image\" />\n\n        <div class=\"title\" [innerHtml]=\"title | safeHtml\"></div>\n        <div class=\"description\" [innerHtml]=\"description | safeHtml\"></div>\n\n        <div class=\"content\">\n            <ng-content></ng-content>\n        </div>\n    </ng-container>\n\n    <ng-template #elseBlock2>\n        <img class=\"image\" [lazyLoad]=\"'assets/images/icons/search.png'\" />\n        <div class=\"title\">\n            {{ \"CORE.MESSAGE.NO_RESULT_FOUND\" | translate: { name: name | lowercase } }}\n        </div>\n        <div class=\"description\">\n            {{ \"CORE.MESSAGE.NO_RESULT_FOUND_DESCRIPTION\" | translate: { name: name | lowercase } }}\n        </div>\n    </ng-template>\n\n</ng-container>\n\n<ng-template #elseBlock>\n    <div class=\"loading\">\n        <round-progress class=\"loading__spinner\" [max]=\"100\" [current]=\"25\" [stroke]=\"3\" [radius]=\"15\"\n            [color]=\"'INFO' | color\" [background]=\"'BORDER' | color\">\n        </round-progress>\n\n        {{ \"CORE.LABEL.LOADING_DATA\" | translate }} \u2026\n    </div>\n</ng-template>", styles: [":host(.not-found){display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:30px;padding-bottom:30px}:host(.not-found).not-found--large{padding-top:60px;padding-bottom:60px}:host(.not-found).not-found--large .image{width:250px;height:250px;margin-bottom:20px}:host(.not-found).not-found--large .title{font-size:20px}:host(.not-found).not-found--large .description{font-size:16px}:host(.not-found).not-found--large .content{margin-top:25px}:host(.not-found) .loading{display:flex;align-items:center;padding-top:20px;padding-bottom:20px}:host(.not-found) .loading .loading__spinner{animation:2s linear infinite spin;margin-right:10px}:host(.not-found) .image{width:150px;height:150px;margin-bottom:10px}:host(.not-found) .title:empty,:host(.not-found) .description:empty,:host(.not-found) .content:empty{display:none}:host(.not-found) .title{font-size:16px;font-weight:var(--ngc-font-weight-semibold, 600)}:host(.not-found) .description{font-size:14px;color:var(--ngc-color-neutral-text-tertiary, #8e8e93)}:host(.not-found) .content{margin-top:15px}\n"], dependencies: [{ kind: "component", type: i3.RoundProgressComponent, selector: "round-progress", inputs: ["current", "max", "radius", "animation", "animationDelay", "duration", "stroke", "color", "background", "responsive", "clockwise", "semicircle", "rounded"], outputs: ["onRender"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.LazyLoadImageDirective, selector: "[lazyLoad]", inputs: ["lazyLoad", "defaultImage", "errorImage", "scrollTarget", "customObservable", "offset", "useSrcset", "decode", "debug"], outputs: ["onStateChange"] }, { kind: "pipe", type: i4.LowerCasePipe, name: "lowercase" }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: i6.SafeHtmlPipe, name: "safeHtml" }, { kind: "pipe", type: i7.ColorPipe, name: "color" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NotFoundComponent.prototype, "size", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NotFoundComponent.prototype, "mode", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NotFoundComponent.prototype, "debounceTime", void 0);
__decorate([
    CoerceArray(),
    __metadata("design:type", Array)
], NotFoundComponent.prototype, "emptyImageSize", void 0);
__decorate([
    CoerceArray(),
    __metadata("design:type", Array)
], NotFoundComponent.prototype, "errorImageSize", void 0);
__decorate([
    CoerceArray(),
    __metadata("design:type", Array)
], NotFoundComponent.prototype, "customImageSize", void 0);
NotFoundComponent = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        TranslateService,
        LoadingBarService])
], NotFoundComponent);
export { NotFoundComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NotFoundComponent, decorators: [{
            type: Component,
            args: [{ selector: 'not-found', host: { class: 'not-found' }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"loaded; else elseBlock\">\n\n    <ng-container *ngIf=\"mode !== 'search'; else elseBlock2\">\n        <img class=\"image\" [style.width.px]=\"imageSize?.[0]\" [style.height.px]=\"imageSize?.[1]\" [lazyLoad]=\"image\" />\n\n        <div class=\"title\" [innerHtml]=\"title | safeHtml\"></div>\n        <div class=\"description\" [innerHtml]=\"description | safeHtml\"></div>\n\n        <div class=\"content\">\n            <ng-content></ng-content>\n        </div>\n    </ng-container>\n\n    <ng-template #elseBlock2>\n        <img class=\"image\" [lazyLoad]=\"'assets/images/icons/search.png'\" />\n        <div class=\"title\">\n            {{ \"CORE.MESSAGE.NO_RESULT_FOUND\" | translate: { name: name | lowercase } }}\n        </div>\n        <div class=\"description\">\n            {{ \"CORE.MESSAGE.NO_RESULT_FOUND_DESCRIPTION\" | translate: { name: name | lowercase } }}\n        </div>\n    </ng-template>\n\n</ng-container>\n\n<ng-template #elseBlock>\n    <div class=\"loading\">\n        <round-progress class=\"loading__spinner\" [max]=\"100\" [current]=\"25\" [stroke]=\"3\" [radius]=\"15\"\n            [color]=\"'INFO' | color\" [background]=\"'BORDER' | color\">\n        </round-progress>\n\n        {{ \"CORE.LABEL.LOADING_DATA\" | translate }} \u2026\n    </div>\n</ng-template>", styles: [":host(.not-found){display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:30px;padding-bottom:30px}:host(.not-found).not-found--large{padding-top:60px;padding-bottom:60px}:host(.not-found).not-found--large .image{width:250px;height:250px;margin-bottom:20px}:host(.not-found).not-found--large .title{font-size:20px}:host(.not-found).not-found--large .description{font-size:16px}:host(.not-found).not-found--large .content{margin-top:25px}:host(.not-found) .loading{display:flex;align-items:center;padding-top:20px;padding-bottom:20px}:host(.not-found) .loading .loading__spinner{animation:2s linear infinite spin;margin-right:10px}:host(.not-found) .image{width:150px;height:150px;margin-bottom:10px}:host(.not-found) .title:empty,:host(.not-found) .description:empty,:host(.not-found) .content:empty{display:none}:host(.not-found) .title{font-size:16px;font-weight:var(--ngc-font-weight-semibold, 600)}:host(.not-found) .description{font-size:14px;color:var(--ngc-color-neutral-text-tertiary, #8e8e93)}:host(.not-found) .content{margin-top:15px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TranslateService }, { type: i2.LoadingBarService }]; }, propDecorators: { classLarge: [{
                type: HostBinding,
                args: ['class.not-found--large']
            }], name: [{
                type: Input
            }], size: [{
                type: Input
            }], mode: [{
                type: Input
            }], debounceTime: [{
                type: Input
            }], emptyImage: [{
                type: Input
            }], emptyImageSize: [{
                type: Input
            }], emptyTitle: [{
                type: Input
            }], emptyDescription: [{
                type: Input
            }], errorImage: [{
                type: Input
            }], errorImageSize: [{
                type: Input
            }], errorTitle: [{
                type: Input
            }], errorDescription: [{
                type: Input
            }], customImage: [{
                type: Input
            }], customImageSize: [{
                type: Input
            }], customTitle: [{
                type: Input
            }], customDescription: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9jb3JlL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFDRyxpQkFBaUIsRUFDekIsV0FBVyxFQUFFLHVCQUF1QixFQUMvQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUNOLFlBQVksRUFBRSxVQUFVLEVBQ3hCLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUN2QyxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7O0FBNEJmLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWlCO0lBaUM3Qjs7Ozs7T0FLRztJQUNILFlBQ1MsTUFBeUIsRUFDekIsaUJBQW1DLEVBQ25DLE9BQTBCO1FBRjFCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFwQ0gsU0FBSSxHQUFrQixRQUFRLENBQUM7UUFDL0IsU0FBSSxHQUFrQixPQUFPLENBQUM7UUFDZCxpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQW9CbkUsVUFBSyxHQUFXLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUUsb0JB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LEtBQUs7Z0JBQ1UsZ0JBQWdCO3NCQUEvQixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ3lCLGNBQWM7c0JBQTVDLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxnQkFBZ0I7c0JBQS9CLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDeUIsZUFBZTtzQkFBN0MsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLGlCQUFpQjtzQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsXG5cdE9uQ2hhbmdlcywgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZixcblx0T25EZXN0cm95LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nQmFyU2VydmljZSB9IGZyb20gJ0BuZ3gtbG9hZGluZy1iYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7XG5cdFVuc3Vic2NyaWJlciwgZGVzdHJveUNtcCxcblx0RGVmYXVsdFZhbHVlLCBDb2VyY2VOdW1iZXIsIENvZXJjZUFycmF5XG59IGZyb20gJ2FuZ3VsYXItY29yZSc7XG5cbmV4cG9ydCB0eXBlIElOb3RGb3VuZFNpemUgPSAnbm9ybWFsJyB8ICdsYXJnZSc7XG5leHBvcnQgdHlwZSBJTm90Rm91bmRNb2RlID0gJ2VtcHR5JyB8ICdlcnJvcicgfCAnc2VhcmNoJyB8ICdjdXN0b20nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElOb3RGb3VuZERhdGEge1xuXHRuYW1lPzogc3RyaW5nO1xuXHRzaXplPzogSU5vdEZvdW5kU2l6ZTtcblx0bW9kZT86IElOb3RGb3VuZE1vZGU7XG5cdGRlYm91bmNlVGltZT86IG51bWJlcjtcblx0ZW1wdHlJbWFnZT86IHN0cmluZztcblx0ZW1wdHlJbWFnZVNpemU/OiBudW1iZXJbXTtcblx0ZW1wdHlUaXRsZT86IHN0cmluZztcblx0ZW1wdHlEZXNjcmlwdGlvbj86IHN0cmluZztcblx0ZXJyb3JJbWFnZT86IHN0cmluZztcblx0ZXJyb3JJbWFnZVNpemU/OiBudW1iZXJbXTtcblx0ZXJyb3JUaXRsZT86IHN0cmluZztcblx0ZXJyb3JEZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuQFVuc3Vic2NyaWJlcigpXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbm90LWZvdW5kJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9ub3QtZm91bmQuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbm90LWZvdW5kLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICdub3QtZm91bmQnIH0sXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3Mubm90LWZvdW5kLS1sYXJnZScgKVxuXHRnZXQgY2xhc3NMYXJnZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJzsgfVxuXG5cdEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgc2l6ZTogSU5vdEZvdW5kU2l6ZSA9ICdub3JtYWwnO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIG1vZGU6IElOb3RGb3VuZE1vZGUgPSAnZW1wdHknO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBkZWJvdW5jZVRpbWU6IG51bWJlciA9IDUwMDtcblx0QElucHV0KCkgcHVibGljIGVtcHR5SW1hZ2U6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUFycmF5KCkgcHVibGljIGVtcHR5SW1hZ2VTaXplOiBudW1iZXJbXTtcblx0QElucHV0KCkgcHVibGljIGVtcHR5VGl0bGU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGVtcHR5RGVzY3JpcHRpb246IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGVycm9ySW1hZ2U6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUFycmF5KCkgcHVibGljIGVycm9ySW1hZ2VTaXplOiBudW1iZXJbXTtcblx0QElucHV0KCkgcHVibGljIGVycm9yVGl0bGU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGVycm9yRGVzY3JpcHRpb246IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGN1c3RvbUltYWdlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VBcnJheSgpIHB1YmxpYyBjdXN0b21JbWFnZVNpemU6IG51bWJlcltdO1xuXHRASW5wdXQoKSBwdWJsaWMgY3VzdG9tVGl0bGU6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGN1c3RvbURlc2NyaXB0aW9uOiBzdHJpbmc7XG5cblx0cHVibGljIGxvYWRlZDogYm9vbGVhbjtcblx0cHVibGljIGltYWdlOiBzdHJpbmc7XG5cdHB1YmxpYyBpbWFnZVNpemU6IG51bWJlcltdO1xuXHRwdWJsaWMgdGl0bGU6IHN0cmluZztcblx0cHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnQ09SRS5MQUJFTC5SRVNVTFRTJyApO1xuXHRwcml2YXRlIF9sb2FkZXJWYWx1ZSQkOiBTdWJzY3JpcHRpb247XG5cdHByaXZhdGUgX3NldExvYWRlZERlYm91bmNlOiBSZXR1cm5UeXBlPHR5cGVvZiBfLmRlYm91bmNlPlxuXHRcdD0gXy5kZWJvdW5jZSggdGhpcy5fc2V0TG9hZGVkLmJpbmQoIHRoaXMgKSwgdGhpcy5kZWJvdW5jZVRpbWUgKTtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IF9jZFJlZlxuXHQgKiBAcGFyYW0ge1RyYW5zbGF0ZVNlcnZpY2V9IF90cmFuc2xhdGVTZXJ2aWNlXG5cdCAqIEBwYXJhbSB7TG9hZGluZ0JhclNlcnZpY2V9IF9sb2FkZXJcblx0ICovXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIF90cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX2xvYWRlcjogTG9hZGluZ0JhclNlcnZpY2Vcblx0KSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoIGNoYW5nZXMubmFtZSApIHRoaXMubmFtZSB8fD0gXy50b0xvd2VyKCB0aGlzLl9uYW1lICk7XG5cblx0XHRpZiAoIGNoYW5nZXMubW9kZSApIHtcblx0XHRcdHRoaXMuX2NoYW5nZVN0YXRlKCk7XG5cblx0XHRcdCFjaGFuZ2VzLm1vZGUuZmlyc3RDaGFuZ2UgJiYgdGhpcy5faW5pdCgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuX2luaXQoKTtcblxuXHRcdHRoaXMuX3NldExvYWRlZERlYm91bmNlLmNhbmNlbCgpO1xuXG5cdFx0dGhpcy5fc2V0TG9hZGVkRGVib3VuY2UgPSBfLmRlYm91bmNlKCB0aGlzLl9zZXRMb2FkZWQuYmluZCggdGhpcyApLCB0aGlzLmRlYm91bmNlVGltZSApO1xuXG5cdFx0dGhpcy5fY2hhbmdlU3RhdGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuX3NldExvYWRlZERlYm91bmNlLmNhbmNlbCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwcml2YXRlIF9pbml0KCkge1xuXHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9ICggdGhpcy5uYW1lICE9PSBfLnRvVXBwZXIoIHRoaXMubmFtZSApID8gXy50b0xvd2VyKCB0aGlzLm5hbWUgKSA6IHRoaXMubmFtZSApXG5cdFx0XHR8fCBfLnRvTG93ZXIoIHRoaXMuX25hbWUgKTtcblxuXHRcdHN3aXRjaCAoIHRoaXMubW9kZSApIHtcblx0XHRcdGNhc2UgJ2VtcHR5Jzpcblx0XHRcdFx0dGhpcy5pbWFnZSA9IHRoaXMuZW1wdHlJbWFnZSA/Pz0gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZW1wdHkucG5nJztcblx0XHRcdFx0dGhpcy5pbWFnZVNpemUgPSBbIHRoaXMuZW1wdHlJbWFnZVNpemU/LlsgMCBdLCB0aGlzLmVtcHR5SW1hZ2VTaXplPy5bIDEgXSB8fCB0aGlzLmVtcHR5SW1hZ2VTaXplPy5bIDAgXSBdO1xuXHRcdFx0XHR0aGlzLnRpdGxlID0gdGhpcy5lbXB0eVRpdGxlID8/PSB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdDT1JFLk1FU1NBR0UuTk9fREFUQScsIHsgbmFtZSB9ICk7XG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLmVtcHR5RGVzY3JpcHRpb247XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZXJyb3InOlxuXHRcdFx0XHR0aGlzLmltYWdlID0gdGhpcy5lcnJvckltYWdlID8/PSAnYXNzZXRzL2ltYWdlcy9pY29ucy9lcnJvci5wbmcnO1xuXHRcdFx0XHR0aGlzLmltYWdlU2l6ZSA9IFsgdGhpcy5lcnJvckltYWdlU2l6ZT8uWyAwIF0sIHRoaXMuZXJyb3JJbWFnZVNpemU/LlsgMSBdIHx8IHRoaXMuZXJyb3JJbWFnZVNpemU/LlsgMCBdIF07XG5cdFx0XHRcdHRoaXMudGl0bGUgPSB0aGlzLmVycm9yVGl0bGUgPz89IHRoaXMuX3RyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCggJ0NPUkUuTUVTU0FHRS5DT1VMRF9OT1RfTE9BRF9SRVNPVVJDRVMnLCB7IG5hbWUgfSApO1xuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5lcnJvckRlc2NyaXB0aW9uID8/PSB0aGlzLl90cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoICdDT1JFLk1FU1NBR0UuQ09VTERfTk9UX0xPQURfUkVTT1VSQ0VTX0RFU0NSSVBUSU9OJywgeyBuYW1lIH0gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjdXN0b20nOlxuXHRcdFx0XHR0aGlzLmltYWdlID0gdGhpcy5jdXN0b21JbWFnZTtcblx0XHRcdFx0dGhpcy5pbWFnZVNpemUgPSBbIHRoaXMuY3VzdG9tSW1hZ2VTaXplPy5bIDAgXSwgdGhpcy5jdXN0b21JbWFnZVNpemU/LlsgMSBdIHx8IHRoaXMuY3VzdG9tSW1hZ2VTaXplPy5bIDAgXSBdO1xuXHRcdFx0XHR0aGlzLnRpdGxlID0gdGhpcy5jdXN0b21UaXRsZTtcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuY3VzdG9tRGVzY3JpcHRpb247XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfY2hhbmdlU3RhdGUoKSB7XG5cdFx0dGhpcy5sb2FkZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuX2xvYWRlclZhbHVlJCQ/LnVuc3Vic2NyaWJlKCk7XG5cdFx0dGhpcy5fc2V0TG9hZGVkRGVib3VuY2UuY2FuY2VsKCk7XG5cdFx0dGhpcy5fc2V0TG9hZGVkRGVib3VuY2UoKTtcblxuXHRcdHRoaXMuX2xvYWRlclZhbHVlJCQgPSB0aGlzLl9sb2FkZXIudmFsdWUkXG5cdFx0Ly8gLnBpcGUoIHVudGlsQ21wRGVzdHJveWVkKHRoaXMpIGFzIGFueSApXG5cdFx0LnN1YnNjcmliZSggdGhpcy5fc2V0TG9hZGVkRGVib3VuY2UuYmluZCggdGhpcyApICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXI9fSBwcm9ncmVzc1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfc2V0TG9hZGVkKCBwcm9ncmVzczogbnVtYmVyID0gMCApIHtcblx0XHR0aGlzLmxvYWRlZCA9IHByb2dyZXNzID09PSAwIHx8IHByb2dyZXNzID09PSAxMDA7XG5cblx0XHR0aGlzLmxvYWRlZCAmJiBkZXN0cm95Q21wKCB0aGlzICk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRlZDsgZWxzZSBlbHNlQmxvY2tcIj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2RlICE9PSAnc2VhcmNoJzsgZWxzZSBlbHNlQmxvY2syXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJpbWFnZVwiIFtzdHlsZS53aWR0aC5weF09XCJpbWFnZVNpemU/LlswXVwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaW1hZ2VTaXplPy5bMV1cIiBbbGF6eUxvYWRdPVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiIFtpbm5lckh0bWxdPVwidGl0bGUgfCBzYWZlSHRtbFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBbaW5uZXJIdG1sXT1cImRlc2NyaXB0aW9uIHwgc2FmZUh0bWxcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrMj5cbiAgICAgICAgPGltZyBjbGFzcz1cImltYWdlXCIgW2xhenlMb2FkXT1cIidhc3NldHMvaW1hZ2VzL2ljb25zL3NlYXJjaC5wbmcnXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICB7eyBcIkNPUkUuTUVTU0FHRS5OT19SRVNVTFRfRk9VTkRcIiB8IHRyYW5zbGF0ZTogeyBuYW1lOiBuYW1lIHwgbG93ZXJjYXNlIH0gfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge3sgXCJDT1JFLk1FU1NBR0UuTk9fUkVTVUxUX0ZPVU5EX0RFU0NSSVBUSU9OXCIgfCB0cmFuc2xhdGU6IHsgbmFtZTogbmFtZSB8IGxvd2VyY2FzZSB9IH19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiPlxuICAgICAgICA8cm91bmQtcHJvZ3Jlc3MgY2xhc3M9XCJsb2FkaW5nX19zcGlubmVyXCIgW21heF09XCIxMDBcIiBbY3VycmVudF09XCIyNVwiIFtzdHJva2VdPVwiM1wiIFtyYWRpdXNdPVwiMTVcIlxuICAgICAgICAgICAgW2NvbG9yXT1cIidJTkZPJyB8IGNvbG9yXCIgW2JhY2tncm91bmRdPVwiJ0JPUkRFUicgfCBjb2xvclwiPlxuICAgICAgICA8L3JvdW5kLXByb2dyZXNzPlxuXG4gICAgICAgIHt7IFwiQ09SRS5MQUJFTC5MT0FESU5HX0RBVEFcIiB8IHRyYW5zbGF0ZSB9fSDigKZcbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+Il19