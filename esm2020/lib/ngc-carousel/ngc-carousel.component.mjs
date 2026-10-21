import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ViewChildren, QueryList, ElementRef, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { DefaultValue, CoerceBoolean, CoerceCssPixel, CoerceNumber, Unsubscriber } from '@core';
import { NgcDialogService } from '../ngc-dialog';
import * as i0 from "@angular/core";
import * as i1 from "../ngc-dialog";
import * as i2 from "@angular/common";
import * as i3 from "ng-lazyload-image";
import * as i4 from "../ngc-button/button/ngc-button.component";
import * as i5 from "../ngc-scroll-bar/ngc-scroll-bar/ngc-scroll-bar.component";
import * as i6 from "../ngc-tooltip.directive";
import * as i7 from "@ngx-translate/core";
let NgcCarouselComponent = class NgcCarouselComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {NgcDialogService} _ngcDialogService
     */
    constructor(elementRef, _cdRef, _ngcDialogService) {
        this.elementRef = elementRef;
        this._cdRef = _cdRef;
        this._ngcDialogService = _ngcDialogService;
        this.photo = [];
        this.delay = 300;
        this.selectedIndex = 0;
        this.selectedIndexChange = new EventEmitter();
        this.fullscreen = new EventEmitter();
        this.closed = new EventEmitter();
    }
    get styleSize() { return this.size; }
    get styleRealSize() { return this.realSize; }
    get stylePositionX() { return this.positionX; }
    get stylePositionY() { return this.positionY; }
    get styleMode() { return this.mode; }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        changes.interval && this._startInterval();
        changes.photo && this.selectImage(this.selectedIndex);
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        setTimeout(() => this.realSize = this.elementRef.nativeElement.clientHeight);
    }
    /**
     * @return {void}
     */
    selectPrevImage() {
        const previousIndex = this.selectedIndex - 1;
        this.selectImage(previousIndex >= 0 ? previousIndex : this.photo.length - 1);
    }
    /**
     * @return {void}
     */
    selectNextImage() {
        const nextIndex = this.selectedIndex + 1;
        this.selectImage(nextIndex < this.photo.length ? nextIndex : 0);
    }
    /**
     * @param {number} index
     * @return {void}
     */
    selectImage(index) {
        setTimeout(() => {
            const target = this.thumbnailList?.toArray()[index];
            target?.nativeElement.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
            this.selectedIndex = target ? index : 0;
            this.selectedIndexChange.emit(this.selectedIndex);
            this._cdRef.markForCheck();
        }, this.delay);
    }
    /**
     * @param {TemplateRef<any>} dialog
     * @return {void}
     */
    toggleFullscreen(dialog) {
        if (this.isFullscreen) {
            this._dialogRef.close();
            return;
        }
        this._dialogRef = this._ngcDialogService.open(dialog, { fullscreen: true });
        this._dialogRef
            .afterExitFullscreen()
            .subscribe(() => this._dialogRef.close());
        this._dialogRef
            .afterOpened()
            .subscribe(() => {
            this.fullscreen.emit(this.isFullscreen = true);
            this._cdRef.markForCheck();
        });
        this._dialogRef
            .afterClosed()
            .subscribe(() => {
            this.fullscreen.emit(this.isFullscreen = false);
            this._cdRef.markForCheck();
        });
    }
    /**
     * @return {void}
     */
    close() {
        this._dialogRef?.close();
        this.closed.emit();
    }
    /**
     * @return {void}
     */
    _startInterval() {
        clearInterval(this._interval);
        this._interval = setInterval(this.selectNextImage.bind(this), this.interval);
    }
};
NgcCarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCarouselComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.NgcDialogService }], target: i0.ɵɵFactoryTarget.Component });
NgcCarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcCarouselComponent, selector: "ngc-carousel", inputs: { size: "size", photo: "photo", delay: "delay", selectedIndex: "selectedIndex", interval: "interval", canClose: "canClose", canFullscreen: "canFullscreen", positionX: "positionX", positionY: "positionY", mode: "mode" }, outputs: { selectedIndexChange: "selectedIndexChange", fullscreen: "fullscreen", closed: "closed" }, host: { properties: { "style.--carousel-size": "this.styleSize", "style.--carousel-real-size.px": "this.styleRealSize", "style.--carousel-position-x": "this.stylePositionX", "style.--carousel-position-y": "this.stylePositionY", "style.--carousel-mode": "this.styleMode" }, classAttribute: "ngc-carousel" }, providers: [NgcDialogService], viewQueries: [{ propertyName: "thumbnailList", predicate: ["thumbnail"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-template #content>\n\t<div class=\"ngc-carousel-wrapper\">\n\t\t<!-- Left Action Button (Close) -->\n\t\t<div class=\"ngc-carousel__actions ngc-carousel__actions-left\">\n\t\t\t<button ngcButton color=\"white\" size=\"40px\" position=\"after\" icon=\"close\" *ngIf=\"canClose\"\n\t\t\t\t[ngcTooltip]=\"'NGC.LABEL.CLOSE' | translate\" (click)=\"close()\">\n\t\t\t</button>\n\t\t</div>\n\n\t\t<!-- Right Action Button (Fullscreen Toggle) -->\n\t\t<div class=\"ngc-carousel__actions ngc-carousel__actions-right\">\n\t\t\t<button ngcButton color=\"white\" size=\"40px\" position=\"before\" *ngIf=\"canFullscreen\"\n\t\t\t\t[icon]=\"isFullscreen ? 'fullscreen-off' : 'fullscreen-on'\"\n\t\t\t\t[ngcTooltip]=\"(isFullscreen ? 'NGC.LABEL.EXIT_FULLSCREEN' : 'NGC.LABEL.FULLSCREEN') | translate\"\n\t\t\t\t(click)=\"toggleFullscreen(dialog)\">\n\t\t\t</button>\n\t\t</div>\n\n\t\t<!-- Carousel Preview -->\n\t\t<div class=\"ngc-carousel__preview\">\n\t\t\t<div class=\"ngc-carousel__preview-image\" [lazyLoad]=\"photo[selectedIndex]\" decode=\"true\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Carousel Controls -->\n\t\t<div class=\"ngc-carousel__controls\" *ngIf=\"photo?.length > 1\">\n\t\t\t<!-- Previous Image Button -->\n\t\t\t<button ngcButton color=\"white\" size=\"40px\" icon=\"arrow-back-outline\"\n\t\t\t\t[ngcTooltip]=\"'NGC.LABEL.PREVIOUS_IMAGE' | translate\" (click)=\"selectPrevImage()\">\n\t\t\t</button>\n\n\t\t\t<!-- Thumbnail List with Scrollbar -->\n\t\t\t<ngc-scroll-bar class=\"ngc-carousel__thumbnail-list\" suppressScrollY #scrollBar>\n\t\t\t\t<div #thumbnail *ngFor=\"let image of photo; let index = index\" class=\"ngc-carousel__thumbnail-item\"\n\t\t\t\t\t[lazyLoad]=\"image\" [defaultImage]=\"'assets/images/loading.gif'\"\n\t\t\t\t\t[class.ngc-carousel__thumbnail-item--active]=\"index === selectedIndex\" (click)=\"selectImage(index)\">\n\t\t\t\t</div>\n\t\t\t</ngc-scroll-bar>\n\n\t\t\t<!-- Next Image Button -->\n\t\t\t<button ngcButton color=\"white\" size=\"40px\" icon=\"arrow-forward-outline\"\n\t\t\t\t[ngcTooltip]=\"'NGC.LABEL.NEXT_IMAGE' | translate\" (click)=\"selectNextImage()\">\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\n</ng-template>\n<ng-template #dialog>\n\t<div class=\"ngc-carousel ngc-carousel--fullscreen\" [style.--carousel-size]=\"size\"\n\t\t[style.--carousel-real-size.px]=\"realSize\" [style.--carousel-mode]=\"mode\">\n\t</div>\n\t<ng-template *ngTemplateOutlet=\"content\"></ng-template>\n\n</ng-template>\n\n<ng-template *ngTemplateOutlet=\"content\"></ng-template>", styles: [".ngc-carousel{display:flex;flex-direction:column;width:100%;min-width:0;height:var(--carousel-size, 100%);min-height:0}.ngc-carousel.ngc-carousel--fullscreen{height:100%}.ngc-carousel .ngc-carousel-wrapper{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0;position:relative}.ngc-carousel .ngc-carousel__actions{position:absolute;top:20px}.ngc-carousel .ngc-carousel__actions.ngc-carousel__actions-left{left:20px}.ngc-carousel .ngc-carousel__actions.ngc-carousel__actions-right{right:20px}.ngc-carousel .ngc-carousel__preview{height:100%;min-height:0}.ngc-carousel .ngc-carousel__preview .ngc-carousel__preview-image{width:100%;height:100%;background-color:var(--ngc-color-neutral-text-placeholder, #c4c4c6);background-size:var(--carousel-mode, auto);background-position-x:var(--carousel-position-x, center);background-position-y:var(--carousel-position-y, center);background-repeat:no-repeat}.ngc-carousel .ngc-carousel__controls{display:flex;flex-direction:row;align-items:center;height:calc(var(--carousel-real-size) * .2);min-height:70px;max-height:140px;padding-left:20px;padding-right:20px;background-color:#8e8e93}.ngc-carousel .ngc-carousel__thumbnail-list{display:flex;flex-direction:row;align-items:center;width:100%;min-width:0;margin-left:10px;margin-right:10px;overflow:hidden!important}.ngc-carousel .ngc-carousel__thumbnail-list .ngc-carousel__thumbnail-item{width:calc(var(--carousel-real-size) * .14);min-width:48px;max-width:64px;height:calc(var(--carousel-real-size) * .14);min-height:48px;max-height:64px;border-radius:10px;margin-left:7.5px;margin-right:7.5px;background-color:var(--ngc-color-neutral-text-placeholder, #c4c4c6);background-size:cover;background-position:center;background-repeat:no-repeat;overflow:hidden;cursor:pointer;position:relative}.ngc-carousel .ngc-carousel__thumbnail-list .ngc-carousel__thumbnail-item:after{content:\"\";position:absolute;inset:0;background-color:rgba(var(--ngc-color-neutral-black, #0a0a0a),.7);transition:opacity .1s ease-in-out;visibility:visible;opacity:1}.ngc-carousel .ngc-carousel__thumbnail-list .ngc-carousel__thumbnail-item.ngc-carousel__thumbnail-item--active:after{visibility:hidden;opacity:0}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.LazyLoadImageDirective, selector: "[lazyLoad]", inputs: ["lazyLoad", "defaultImage", "errorImage", "scrollTarget", "customObservable", "offset", "useSrcset", "decode", "debug"], outputs: ["onStateChange"] }, { kind: "component", type: i4.NgcButtonComponent, selector: "button[ngcButton]", inputs: ["type", "color", "textColor", "size", "icon", "iconSize", "borderColor", "borderStyle", "borderWidth", "disabled", "loading", "alignment"] }, { kind: "component", type: i5.NgcScrollBarComponent, selector: "ngc-scroll-bar" }, { kind: "directive", type: i6.NgcTooltipDirective, selector: "[ngcTooltip]", inputs: ["panelClass", "backdropClass", "tooltipColor", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "once", "programmatically", "autoClose", "hasBackdrop", "closeOnClickOutside", "openDelay", "closeDelay", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "triggerType", "ngcTooltip"], outputs: ["opened", "closed"], exportAs: ["ngcTooltip"] }, { kind: "pipe", type: i7.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcCarouselComponent.prototype, "size", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", Array)
], NgcCarouselComponent.prototype, "photo", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcCarouselComponent.prototype, "delay", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcCarouselComponent.prototype, "selectedIndex", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCarouselComponent.prototype, "canClose", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCarouselComponent.prototype, "canFullscreen", void 0);
NgcCarouselComponent = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef, NgcDialogService])
], NgcCarouselComponent);
export { NgcCarouselComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-carousel', host: { class: 'ngc-carousel' }, providers: [NgcDialogService], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template #content>\n\t<div class=\"ngc-carousel-wrapper\">\n\t\t<!-- Left Action Button (Close) -->\n\t\t<div class=\"ngc-carousel__actions ngc-carousel__actions-left\">\n\t\t\t<button ngcButton color=\"white\" size=\"40px\" position=\"after\" icon=\"close\" *ngIf=\"canClose\"\n\t\t\t\t[ngcTooltip]=\"'NGC.LABEL.CLOSE' | translate\" (click)=\"close()\">\n\t\t\t</button>\n\t\t</div>\n\n\t\t<!-- Right Action Button (Fullscreen Toggle) -->\n\t\t<div class=\"ngc-carousel__actions ngc-carousel__actions-right\">\n\t\t\t<button ngcButton color=\"white\" size=\"40px\" position=\"before\" *ngIf=\"canFullscreen\"\n\t\t\t\t[icon]=\"isFullscreen ? 'fullscreen-off' : 'fullscreen-on'\"\n\t\t\t\t[ngcTooltip]=\"(isFullscreen ? 'NGC.LABEL.EXIT_FULLSCREEN' : 'NGC.LABEL.FULLSCREEN') | translate\"\n\t\t\t\t(click)=\"toggleFullscreen(dialog)\">\n\t\t\t</button>\n\t\t</div>\n\n\t\t<!-- Carousel Preview -->\n\t\t<div class=\"ngc-carousel__preview\">\n\t\t\t<div class=\"ngc-carousel__preview-image\" [lazyLoad]=\"photo[selectedIndex]\" decode=\"true\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Carousel Controls -->\n\t\t<div class=\"ngc-carousel__controls\" *ngIf=\"photo?.length > 1\">\n\t\t\t<!-- Previous Image Button -->\n\t\t\t<button ngcButton color=\"white\" size=\"40px\" icon=\"arrow-back-outline\"\n\t\t\t\t[ngcTooltip]=\"'NGC.LABEL.PREVIOUS_IMAGE' | translate\" (click)=\"selectPrevImage()\">\n\t\t\t</button>\n\n\t\t\t<!-- Thumbnail List with Scrollbar -->\n\t\t\t<ngc-scroll-bar class=\"ngc-carousel__thumbnail-list\" suppressScrollY #scrollBar>\n\t\t\t\t<div #thumbnail *ngFor=\"let image of photo; let index = index\" class=\"ngc-carousel__thumbnail-item\"\n\t\t\t\t\t[lazyLoad]=\"image\" [defaultImage]=\"'assets/images/loading.gif'\"\n\t\t\t\t\t[class.ngc-carousel__thumbnail-item--active]=\"index === selectedIndex\" (click)=\"selectImage(index)\">\n\t\t\t\t</div>\n\t\t\t</ngc-scroll-bar>\n\n\t\t\t<!-- Next Image Button -->\n\t\t\t<button ngcButton color=\"white\" size=\"40px\" icon=\"arrow-forward-outline\"\n\t\t\t\t[ngcTooltip]=\"'NGC.LABEL.NEXT_IMAGE' | translate\" (click)=\"selectNextImage()\">\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\n</ng-template>\n<ng-template #dialog>\n\t<div class=\"ngc-carousel ngc-carousel--fullscreen\" [style.--carousel-size]=\"size\"\n\t\t[style.--carousel-real-size.px]=\"realSize\" [style.--carousel-mode]=\"mode\">\n\t</div>\n\t<ng-template *ngTemplateOutlet=\"content\"></ng-template>\n\n</ng-template>\n\n<ng-template *ngTemplateOutlet=\"content\"></ng-template>", styles: [".ngc-carousel{display:flex;flex-direction:column;width:100%;min-width:0;height:var(--carousel-size, 100%);min-height:0}.ngc-carousel.ngc-carousel--fullscreen{height:100%}.ngc-carousel .ngc-carousel-wrapper{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0;position:relative}.ngc-carousel .ngc-carousel__actions{position:absolute;top:20px}.ngc-carousel .ngc-carousel__actions.ngc-carousel__actions-left{left:20px}.ngc-carousel .ngc-carousel__actions.ngc-carousel__actions-right{right:20px}.ngc-carousel .ngc-carousel__preview{height:100%;min-height:0}.ngc-carousel .ngc-carousel__preview .ngc-carousel__preview-image{width:100%;height:100%;background-color:var(--ngc-color-neutral-text-placeholder, #c4c4c6);background-size:var(--carousel-mode, auto);background-position-x:var(--carousel-position-x, center);background-position-y:var(--carousel-position-y, center);background-repeat:no-repeat}.ngc-carousel .ngc-carousel__controls{display:flex;flex-direction:row;align-items:center;height:calc(var(--carousel-real-size) * .2);min-height:70px;max-height:140px;padding-left:20px;padding-right:20px;background-color:#8e8e93}.ngc-carousel .ngc-carousel__thumbnail-list{display:flex;flex-direction:row;align-items:center;width:100%;min-width:0;margin-left:10px;margin-right:10px;overflow:hidden!important}.ngc-carousel .ngc-carousel__thumbnail-list .ngc-carousel__thumbnail-item{width:calc(var(--carousel-real-size) * .14);min-width:48px;max-width:64px;height:calc(var(--carousel-real-size) * .14);min-height:48px;max-height:64px;border-radius:10px;margin-left:7.5px;margin-right:7.5px;background-color:var(--ngc-color-neutral-text-placeholder, #c4c4c6);background-size:cover;background-position:center;background-repeat:no-repeat;overflow:hidden;cursor:pointer;position:relative}.ngc-carousel .ngc-carousel__thumbnail-list .ngc-carousel__thumbnail-item:after{content:\"\";position:absolute;inset:0;background-color:rgba(var(--ngc-color-neutral-black, #0a0a0a),.7);transition:opacity .1s ease-in-out;visibility:visible;opacity:1}.ngc-carousel .ngc-carousel__thumbnail-list .ngc-carousel__thumbnail-item.ngc-carousel__thumbnail-item--active:after{visibility:hidden;opacity:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NgcDialogService }]; }, propDecorators: { styleSize: [{
                type: HostBinding,
                args: ['style.--carousel-size']
            }], styleRealSize: [{
                type: HostBinding,
                args: ['style.--carousel-real-size.px']
            }], stylePositionX: [{
                type: HostBinding,
                args: ['style.--carousel-position-x']
            }], stylePositionY: [{
                type: HostBinding,
                args: ['style.--carousel-position-y']
            }], styleMode: [{
                type: HostBinding,
                args: ['style.--carousel-mode']
            }], thumbnailList: [{
                type: ViewChildren,
                args: ['thumbnail']
            }], size: [{
                type: Input
            }], photo: [{
                type: Input
            }], delay: [{
                type: Input
            }], selectedIndex: [{
                type: Input
            }], interval: [{
                type: Input
            }], canClose: [{
                type: Input
            }], canFullscreen: [{
                type: Input
            }], positionX: [{
                type: Input
            }], positionY: [{
                type: Input
            }], mode: [{
                type: Input
            }], selectedIndexChange: [{
                type: Output
            }], fullscreen: [{
                type: Output
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWNhcm91c2VsL25nYy1jYXJvdXNlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jYXJvdXNlbC9uZ2MtY2Fyb3VzZWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ25DLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUNULE1BQU0sRUFDaEMsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUMzQyxXQUFXLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTixZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFDM0MsWUFBWSxFQUFFLFlBQVksRUFDMUIsTUFBTSxPQUFPLENBQUM7QUFDZixPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFjekQsSUFBTSxvQkFBb0IsR0FBMUIsTUFBTSxvQkFBb0I7SUF3Q2hDOzs7OztPQUtHO0lBQ0gsWUFBb0IsVUFBc0IsRUFBVSxNQUF5QixFQUFVLGlCQUFtQztRQUF0RyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBMUIxRixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ0wsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQVF6RCx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2RSxlQUFVLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEUsV0FBTSxHQUF1QixJQUFJLFlB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dCxcblx0Vmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEVsZW1lbnRSZWYsXG5cdE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcblx0VGVtcGxhdGVSZWYsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuXHREZWZhdWx0VmFsdWUsIENvZXJjZUJvb2xlYW4sIENvZXJjZUNzc1BpeGVsLFxuXHRDb2VyY2VOdW1iZXIsIFVuc3Vic2NyaWJlclxufSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBOZ2NEaWFsb2dTZXJ2aWNlLCBOZ2NJRGlhbG9nUmVmIH0gZnJvbSAnLi4vbmdjLWRpYWxvZyc7XG5cbmV4cG9ydCB0eXBlIE5nY0lDYXJvdXNlbE1vZGUgPSAnYXV0bycgfCAnY292ZXInIHwgJ2NvbnRhaW4nO1xuXG5AVW5zdWJzY3JpYmVyKClcbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtY2Fyb3VzZWwnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1jYXJvdXNlbC5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtY2Fyb3VzZWwuc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy1jYXJvdXNlbCcgfSxcblx0cHJvdmlkZXJzXHRcdDogWyBOZ2NEaWFsb2dTZXJ2aWNlIF0sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tY2Fyb3VzZWwtc2l6ZScgKVxuXHRnZXQgc3R5bGVTaXplKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnNpemU7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWNhcm91c2VsLXJlYWwtc2l6ZS5weCcgKVxuXHRnZXQgc3R5bGVSZWFsU2l6ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5yZWFsU2l6ZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tY2Fyb3VzZWwtcG9zaXRpb24teCcgKVxuXHRnZXQgc3R5bGVQb3NpdGlvblgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucG9zaXRpb25YOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1jYXJvdXNlbC1wb3NpdGlvbi15JyApXG5cdGdldCBzdHlsZVBvc2l0aW9uWSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wb3NpdGlvblk7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWNhcm91c2VsLW1vZGUnIClcblx0Z2V0IHN0eWxlTW9kZSgpOiBOZ2NJQ2Fyb3VzZWxNb2RlIHsgcmV0dXJuIHRoaXMubW9kZTsgfVxuXG5cdEBWaWV3Q2hpbGRyZW4oICd0aHVtYm5haWwnICkgcHVibGljIHRodW1ibmFpbExpc3Q6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHBob3RvOiBzdHJpbmdbXSA9IFtdO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBkZWxheTogbnVtYmVyID0gMzAwO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgaW50ZXJ2YWw6IG51bWJlcjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2FuQ2xvc2U6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGNhbkZ1bGxzY3JlZW46IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyBwb3NpdGlvblg6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHBvc2l0aW9uWTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbW9kZTogTmdjSUNhcm91c2VsTW9kZTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgZnVsbHNjcmVlbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHB1YmxpYyBpc0Z1bGxzY3JlZW46IGJvb2xlYW47XG5cdHB1YmxpYyByZWFsU2l6ZTogbnVtYmVyO1xuXG5cdHByaXZhdGUgX2ludGVydmFsOiBOb2RlSlMuVGltZW91dDtcblx0cHJpdmF0ZSBfZGlhbG9nUmVmOiBOZ2NJRGlhbG9nUmVmO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IF9jZFJlZlxuXHQgKiBAcGFyYW0ge05nY0RpYWxvZ1NlcnZpY2V9IF9uZ2NEaWFsb2dTZXJ2aWNlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfbmdjRGlhbG9nU2VydmljZTogTmdjRGlhbG9nU2VydmljZSApIHt9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGNoYW5nZXMuaW50ZXJ2YWwgJiYgdGhpcy5fc3RhcnRJbnRlcnZhbCgpO1xuXHRcdGNoYW5nZXMucGhvdG8gJiYgdGhpcy5zZWxlY3RJbWFnZSggdGhpcy5zZWxlY3RlZEluZGV4ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c2V0VGltZW91dCggKCkgPT4gdGhpcy5yZWFsU2l6ZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2VsZWN0UHJldkltYWdlKCkge1xuXHRcdGNvbnN0IHByZXZpb3VzSW5kZXg6IG51bWJlciA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG5cblx0XHR0aGlzLnNlbGVjdEltYWdlKCBwcmV2aW91c0luZGV4ID49IDAgPyBwcmV2aW91c0luZGV4IDogdGhpcy5waG90by5sZW5ndGggLSAxICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzZWxlY3ROZXh0SW1hZ2UoKSB7XG5cdFx0Y29uc3QgbmV4dEluZGV4OiBudW1iZXIgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuXG5cdFx0dGhpcy5zZWxlY3RJbWFnZSggbmV4dEluZGV4IDwgdGhpcy5waG90by5sZW5ndGggPyBuZXh0SW5kZXggOiAwICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgc2VsZWN0SW1hZ2UoIGluZGV4OiBudW1iZXIgKSB7XG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0OiBFbGVtZW50UmVmID0gdGhpcy50aHVtYm5haWxMaXN0Py50b0FycmF5KClbIGluZGV4IF07XG5cblx0XHRcdHRhcmdldD8ubmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnY2VudGVyJywgaW5saW5lOiAnbmVhcmVzdCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcblxuXHRcdFx0dGhpcy5zZWxlY3RlZEluZGV4ID0gdGFyZ2V0ID8gaW5kZXggOiAwO1xuXG5cdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCggdGhpcy5zZWxlY3RlZEluZGV4ICk7XG5cdFx0XHR0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcblx0XHR9LCB0aGlzLmRlbGF5ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtUZW1wbGF0ZVJlZjxhbnk+fSBkaWFsb2dcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyB0b2dnbGVGdWxsc2NyZWVuKCBkaWFsb2c6IFRlbXBsYXRlUmVmPGFueT4gKSB7XG5cdFx0aWYgKCB0aGlzLmlzRnVsbHNjcmVlbiApIHtcblx0XHRcdHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2RpYWxvZ1JlZiA9IHRoaXMuX25nY0RpYWxvZ1NlcnZpY2Uub3BlbiggZGlhbG9nLCB7IGZ1bGxzY3JlZW46IHRydWUgfSApO1xuXG5cdFx0dGhpcy5fZGlhbG9nUmVmXG5cdFx0LmFmdGVyRXhpdEZ1bGxzY3JlZW4oKVxuXHRcdC5zdWJzY3JpYmUoICgpID0+IHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpICk7XG5cblx0XHR0aGlzLl9kaWFsb2dSZWZcblx0XHQuYWZ0ZXJPcGVuZWQoKVxuXHRcdC5zdWJzY3JpYmUoICgpID0+IHtcblx0XHRcdHRoaXMuZnVsbHNjcmVlbi5lbWl0KCB0aGlzLmlzRnVsbHNjcmVlbiA9IHRydWUgKTtcblx0XHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuX2RpYWxvZ1JlZlxuXHRcdC5hZnRlckNsb3NlZCgpXG5cdFx0LnN1YnNjcmliZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5mdWxsc2NyZWVuLmVtaXQoIHRoaXMuaXNGdWxsc2NyZWVuID0gZmFsc2UgKTtcblx0XHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGNsb3NlKCkge1xuXHRcdHRoaXMuX2RpYWxvZ1JlZj8uY2xvc2UoKTtcblx0XHR0aGlzLmNsb3NlZC5lbWl0KCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX3N0YXJ0SW50ZXJ2YWwoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCggdGhpcy5faW50ZXJ2YWwgKTtcblxuXHRcdHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoIHRoaXMuc2VsZWN0TmV4dEltYWdlLmJpbmQoIHRoaXMgKSwgdGhpcy5pbnRlcnZhbCApO1xuXHR9XG5cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjY29udGVudD5cblx0PGRpdiBjbGFzcz1cIm5nYy1jYXJvdXNlbC13cmFwcGVyXCI+XG5cdFx0PCEtLSBMZWZ0IEFjdGlvbiBCdXR0b24gKENsb3NlKSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwibmdjLWNhcm91c2VsX19hY3Rpb25zIG5nYy1jYXJvdXNlbF9fYWN0aW9ucy1sZWZ0XCI+XG5cdFx0XHQ8YnV0dG9uIG5nY0J1dHRvbiBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cIjQwcHhcIiBwb3NpdGlvbj1cImFmdGVyXCIgaWNvbj1cImNsb3NlXCIgKm5nSWY9XCJjYW5DbG9zZVwiXG5cdFx0XHRcdFtuZ2NUb29sdGlwXT1cIidOR0MuTEFCRUwuQ0xPU0UnIHwgdHJhbnNsYXRlXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLSBSaWdodCBBY3Rpb24gQnV0dG9uIChGdWxsc2NyZWVuIFRvZ2dsZSkgLS0+XG5cdFx0PGRpdiBjbGFzcz1cIm5nYy1jYXJvdXNlbF9fYWN0aW9ucyBuZ2MtY2Fyb3VzZWxfX2FjdGlvbnMtcmlnaHRcIj5cblx0XHRcdDxidXR0b24gbmdjQnV0dG9uIGNvbG9yPVwid2hpdGVcIiBzaXplPVwiNDBweFwiIHBvc2l0aW9uPVwiYmVmb3JlXCIgKm5nSWY9XCJjYW5GdWxsc2NyZWVuXCJcblx0XHRcdFx0W2ljb25dPVwiaXNGdWxsc2NyZWVuID8gJ2Z1bGxzY3JlZW4tb2ZmJyA6ICdmdWxsc2NyZWVuLW9uJ1wiXG5cdFx0XHRcdFtuZ2NUb29sdGlwXT1cIihpc0Z1bGxzY3JlZW4gPyAnTkdDLkxBQkVMLkVYSVRfRlVMTFNDUkVFTicgOiAnTkdDLkxBQkVMLkZVTExTQ1JFRU4nKSB8IHRyYW5zbGF0ZVwiXG5cdFx0XHRcdChjbGljayk9XCJ0b2dnbGVGdWxsc2NyZWVuKGRpYWxvZylcIj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLSBDYXJvdXNlbCBQcmV2aWV3IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJuZ2MtY2Fyb3VzZWxfX3ByZXZpZXdcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJuZ2MtY2Fyb3VzZWxfX3ByZXZpZXctaW1hZ2VcIiBbbGF6eUxvYWRdPVwicGhvdG9bc2VsZWN0ZWRJbmRleF1cIiBkZWNvZGU9XCJ0cnVlXCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDwhLS0gQ2Fyb3VzZWwgQ29udHJvbHMgLS0+XG5cdFx0PGRpdiBjbGFzcz1cIm5nYy1jYXJvdXNlbF9fY29udHJvbHNcIiAqbmdJZj1cInBob3RvPy5sZW5ndGggPiAxXCI+XG5cdFx0XHQ8IS0tIFByZXZpb3VzIEltYWdlIEJ1dHRvbiAtLT5cblx0XHRcdDxidXR0b24gbmdjQnV0dG9uIGNvbG9yPVwid2hpdGVcIiBzaXplPVwiNDBweFwiIGljb249XCJhcnJvdy1iYWNrLW91dGxpbmVcIlxuXHRcdFx0XHRbbmdjVG9vbHRpcF09XCInTkdDLkxBQkVMLlBSRVZJT1VTX0lNQUdFJyB8IHRyYW5zbGF0ZVwiIChjbGljayk9XCJzZWxlY3RQcmV2SW1hZ2UoKVwiPlxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdDwhLS0gVGh1bWJuYWlsIExpc3Qgd2l0aCBTY3JvbGxiYXIgLS0+XG5cdFx0XHQ8bmdjLXNjcm9sbC1iYXIgY2xhc3M9XCJuZ2MtY2Fyb3VzZWxfX3RodW1ibmFpbC1saXN0XCIgc3VwcHJlc3NTY3JvbGxZICNzY3JvbGxCYXI+XG5cdFx0XHRcdDxkaXYgI3RodW1ibmFpbCAqbmdGb3I9XCJsZXQgaW1hZ2Ugb2YgcGhvdG87IGxldCBpbmRleCA9IGluZGV4XCIgY2xhc3M9XCJuZ2MtY2Fyb3VzZWxfX3RodW1ibmFpbC1pdGVtXCJcblx0XHRcdFx0XHRbbGF6eUxvYWRdPVwiaW1hZ2VcIiBbZGVmYXVsdEltYWdlXT1cIidhc3NldHMvaW1hZ2VzL2xvYWRpbmcuZ2lmJ1wiXG5cdFx0XHRcdFx0W2NsYXNzLm5nYy1jYXJvdXNlbF9fdGh1bWJuYWlsLWl0ZW0tLWFjdGl2ZV09XCJpbmRleCA9PT0gc2VsZWN0ZWRJbmRleFwiIChjbGljayk9XCJzZWxlY3RJbWFnZShpbmRleClcIj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L25nYy1zY3JvbGwtYmFyPlxuXG5cdFx0XHQ8IS0tIE5leHQgSW1hZ2UgQnV0dG9uIC0tPlxuXHRcdFx0PGJ1dHRvbiBuZ2NCdXR0b24gY29sb3I9XCJ3aGl0ZVwiIHNpemU9XCI0MHB4XCIgaWNvbj1cImFycm93LWZvcndhcmQtb3V0bGluZVwiXG5cdFx0XHRcdFtuZ2NUb29sdGlwXT1cIidOR0MuTEFCRUwuTkVYVF9JTUFHRScgfCB0cmFuc2xhdGVcIiAoY2xpY2spPVwic2VsZWN0TmV4dEltYWdlKClcIj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjZGlhbG9nPlxuXHQ8ZGl2IGNsYXNzPVwibmdjLWNhcm91c2VsIG5nYy1jYXJvdXNlbC0tZnVsbHNjcmVlblwiIFtzdHlsZS4tLWNhcm91c2VsLXNpemVdPVwic2l6ZVwiXG5cdFx0W3N0eWxlLi0tY2Fyb3VzZWwtcmVhbC1zaXplLnB4XT1cInJlYWxTaXplXCIgW3N0eWxlLi0tY2Fyb3VzZWwtbW9kZV09XCJtb2RlXCI+XG5cdDwvZGl2PlxuXHQ8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cblxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+Il19