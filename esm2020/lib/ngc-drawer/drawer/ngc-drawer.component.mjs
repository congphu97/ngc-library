import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewEncapsulation, Output, EventEmitter, ContentChild, ChangeDetectorRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DefaultValue, CoerceBoolean, CoerceNumber, CoerceCssPixel } from '@core';
import { NgcDrawerLazyDirective } from './ngc-drawer-lazy.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../ngc-button/icon-button/ngc-icon-button.component";
import * as i3 from "../../ngc-tooltip.directive";
import * as i4 from "@ngx-translate/core";
export class NgcDrawerComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(elementRef, _cdRef) {
        this.elementRef = elementRef;
        this._cdRef = _cdRef;
        this.renderDelay = 225;
        this.position = 'left';
        this.openedChange = new EventEmitter();
    }
    get styleBgColor() { return this.bgColor; }
    get styleWidth() { return this.width; }
    get stylePaddingTop() { return this.paddingTop || this.paddingVertical; }
    get stylePaddingBottom() { return this.paddingBottom || this.paddingVertical; }
    get stylePaddingLeft() { return this.paddingLeft || this.paddingHorizontal; }
    get stylePaddingRight() { return this.paddingRight || this.paddingHorizontal; }
    get classLeft() { return this.position === 'left'; }
    get classRight() { return this.position === 'right'; }
    get classOpened() { return this.opened; }
    get classSliding() { return this.isSliding; }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        changes.opened && this._render();
    }
    /**
     * @return {void}
     */
    toggle() {
        this.opened = !this.opened;
        this._render();
        this.openedChange.emit(this.opened);
    }
    /**
     * @return {void}
     */
    _render() {
        if (this.isRendered || !this.opened)
            return;
        setTimeout(() => {
            this.isRendered = true;
            this._cdRef.markForCheck();
        }, this.renderDelay);
    }
}
NgcDrawerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcDrawerComponent, selector: "ngc-drawer, [ngcDrawer]", inputs: { label: "label", bgColor: "bgColor", renderDelay: "renderDelay", opened: "opened", width: "width", paddingVertical: "paddingVertical", paddingHorizontal: "paddingHorizontal", paddingTop: "paddingTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", position: "position" }, outputs: { openedChange: "openedChange" }, host: { properties: { "style.--drawer-bg-color": "this.styleBgColor", "style.--drawer-width": "this.styleWidth", "style.--drawer-padding-top": "this.stylePaddingTop", "style.--drawer-padding-bottom": "this.stylePaddingBottom", "style.--drawer-padding-left": "this.stylePaddingLeft", "style.--drawer-padding-right": "this.stylePaddingRight", "class.ngc-drawer--left": "this.classLeft", "class.ngc-drawer--right": "this.classRight", "class.ngc-drawer--opened": "this.classOpened", "class.ngc-drawer--sliding": "this.classSliding" }, classAttribute: "ngc-drawer" }, queries: [{ propertyName: "lazyContent", first: true, predicate: NgcDrawerLazyDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-template #content>\n  <ng-container *ngIf=\"lazyContent?.templateRef; else elseBlock\">\n    <ng-container *ngTemplateOutlet=\"lazyContent?.templateRef\"></ng-container>\n  </ng-container>\n  <ng-template #elseBlock>\n    <ng-content></ng-content>\n  </ng-template>\n</ng-template>\n\n<div\n  class=\"ngc-drawer__content-wrapper\"\n  [@slide]=\"opened ? 'opened' : 'closed'\"\n  (@slide.start)=\"isSliding = true\"\n  (@slide.done)=\"isSliding = false\">\n  \n  <div class=\"ngc-drawer__content\">\n    <ng-container *ngIf=\"isRendered\">\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"ngc-drawer__divider\">\n  <button\n    class=\"ngc-drawer__divider-btn-toggle\"\n    ngcIconButton\n    size=\"28px\"\n    [ngcTooltip]=\"'NGC.LABEL.' + (opened ? 'COLLAPSE' : 'EXPAND') | translate\"\n    [position]=\"position === 'left' ? 'after' : 'before'\"\n    [icon]=\"opened ? (position === 'left' ? 'chevron-back-outline' : 'chevron-forward-outline') : (position === 'left' ? 'chevron-forward-outline' : 'chevron-back-outline')\"\n    (click)=\"toggle()\">\n  </button>\n  <div class=\"ngc-drawer__divider-label\" *ngIf=\"label\">\n    {{ label }}\n  </div>\n</div>", styles: [".ngc-drawer{display:flex;position:relative;min-width:32px;height:100%;min-height:0;z-index:var(--ngc-z-level-2, 1000)}.ngc-drawer.ngc-drawer--opened{min-width:fit-content}.ngc-drawer.ngc-drawer--opened.ngc-drawer--left>.ngc-drawer__divider,.ngc-drawer.ngc-drawer--opened.ngc-drawer--right>.ngc-drawer__divider{background-color:#0000}.ngc-drawer.ngc-drawer--opened.ngc-drawer--left>.ngc-drawer__divider>.ngc-drawer__divider-label,.ngc-drawer.ngc-drawer--opened.ngc-drawer--right>.ngc-drawer__divider>.ngc-drawer__divider-label{display:none}.ngc-drawer.ngc-drawer--left{order:-1}.ngc-drawer.ngc-drawer--left.ngc-drawer--opened>.ngc-drawer__divider{left:unset;right:-16px}.ngc-drawer.ngc-drawer--left.ngc-drawer--opened~.ngc-drawer-content{margin-left:32px}.ngc-drawer.ngc-drawer--left>.ngc-drawer__divider{left:0;order:1}.ngc-drawer.ngc-drawer--left>.ngc-drawer__content-wrapper{padding-right:32px}.ngc-drawer.ngc-drawer--left~.ngc-drawer-content{margin-left:16px}.ngc-drawer.ngc-drawer--right{order:1}.ngc-drawer.ngc-drawer--right.ngc-drawer--opened>.ngc-drawer__divider{right:unset;left:-16px}.ngc-drawer.ngc-drawer--right.ngc-drawer--opened~.ngc-drawer-content{margin-right:32px}.ngc-drawer.ngc-drawer--right>.ngc-drawer__divider{right:0;order:-1}.ngc-drawer.ngc-drawer--right>.ngc-drawer__content-wrapper{padding-left:32px}.ngc-drawer.ngc-drawer--right~.ngc-drawer-content{margin-right:16px}.ngc-drawer.ngc-drawer--sliding>.ngc-drawer__divider{opacity:0;visibility:hidden}.ngc-drawer>.ngc-drawer__divider{display:flex;flex-direction:column;align-items:center;position:absolute;top:0;bottom:0;width:32px;transition:opacity .2s ease-in-out;background-color:var(--drawer-bg-color, var(--ngc-color-neutral-white, #fff))}.ngc-drawer>.ngc-drawer__divider:before,.ngc-drawer>.ngc-drawer__divider:after{content:\"\";display:block;width:1px;background-color:var(--ngc-color-neutral-border-default, #e4e4e6)}.ngc-drawer>.ngc-drawer__divider:before{height:64px}.ngc-drawer>.ngc-drawer__divider:after{height:100%;min-height:0}.ngc-drawer>.ngc-drawer__divider>.ngc-drawer__divider-btn-toggle{position:absolute;border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);top:20px}.ngc-drawer>.ngc-drawer__divider>.ngc-drawer__divider-label{font-weight:var(--ngc-font-weight-semibold, 600);white-space:nowrap;writing-mode:tb-rl;transform:rotate(-180deg);padding-top:5px;padding-bottom:5px;height:fit-content;width:fit-content}.ngc-drawer>.ngc-drawer__content-wrapper{display:flex;background-color:var(--drawer-bg-color, var(--ngc-color-neutral-white, #fff));order:0}.ngc-drawer>.ngc-drawer__content-wrapper>.ngc-drawer__content{display:flex;flex-direction:column;width:var(--drawer-width);padding-top:var(--drawer-padding-top, 0);padding-bottom:var(--drawer-padding-bottom, 0);padding-left:var(--drawer-padding-left, 0);padding-right:var(--drawer-padding-right, 0)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NgcIconButtonComponent, selector: "button[ngcIconButton]", inputs: ["type", "color", "size", "icon", "iconColor", "iconSize", "borderColor", "borderStyle", "borderWidth", "disabled", "square"] }, { kind: "directive", type: i3.NgcTooltipDirective, selector: "[ngcTooltip]", inputs: ["panelClass", "backdropClass", "tooltipColor", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "disabled", "once", "programmatically", "autoClose", "hasBackdrop", "closeOnClickOutside", "openDelay", "closeDelay", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "triggerType", "ngcTooltip"], outputs: ["opened", "closed"], exportAs: ["ngcTooltip"] }, { kind: "pipe", type: i4.TranslatePipe, name: "translate" }], animations: [
        trigger('slide', [
            state('closed', style({ width: 0, minWidth: 0, maxWidth: 0, visibility: 'hidden', opacity: 0, overflow: 'hidden' })),
            state('opened', style({ width: '*', minWidth: '*', maxWidth: '*', visibility: 'visible', opacity: 1, overflow: 'initial' })),
            transition('opened <=> closed', animate('225ms cubic-bezier( .4, .0, .2, 1 )')),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcDrawerComponent.prototype, "renderDelay", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcDrawerComponent.prototype, "opened", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerComponent.prototype, "width", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerComponent.prototype, "paddingVertical", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerComponent.prototype, "paddingHorizontal", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerComponent.prototype, "paddingTop", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerComponent.prototype, "paddingBottom", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerComponent.prototype, "paddingLeft", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcDrawerComponent.prototype, "paddingRight", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcDrawerComponent.prototype, "position", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-drawer, [ngcDrawer]', host: { class: 'ngc-drawer' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                        trigger('slide', [
                            state('closed', style({ width: 0, minWidth: 0, maxWidth: 0, visibility: 'hidden', opacity: 0, overflow: 'hidden' })),
                            state('opened', style({ width: '*', minWidth: '*', maxWidth: '*', visibility: 'visible', opacity: 1, overflow: 'initial' })),
                            transition('opened <=> closed', animate('225ms cubic-bezier( .4, .0, .2, 1 )')),
                        ]),
                    ], template: "<ng-template #content>\n  <ng-container *ngIf=\"lazyContent?.templateRef; else elseBlock\">\n    <ng-container *ngTemplateOutlet=\"lazyContent?.templateRef\"></ng-container>\n  </ng-container>\n  <ng-template #elseBlock>\n    <ng-content></ng-content>\n  </ng-template>\n</ng-template>\n\n<div\n  class=\"ngc-drawer__content-wrapper\"\n  [@slide]=\"opened ? 'opened' : 'closed'\"\n  (@slide.start)=\"isSliding = true\"\n  (@slide.done)=\"isSliding = false\">\n  \n  <div class=\"ngc-drawer__content\">\n    <ng-container *ngIf=\"isRendered\">\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"ngc-drawer__divider\">\n  <button\n    class=\"ngc-drawer__divider-btn-toggle\"\n    ngcIconButton\n    size=\"28px\"\n    [ngcTooltip]=\"'NGC.LABEL.' + (opened ? 'COLLAPSE' : 'EXPAND') | translate\"\n    [position]=\"position === 'left' ? 'after' : 'before'\"\n    [icon]=\"opened ? (position === 'left' ? 'chevron-back-outline' : 'chevron-forward-outline') : (position === 'left' ? 'chevron-forward-outline' : 'chevron-back-outline')\"\n    (click)=\"toggle()\">\n  </button>\n  <div class=\"ngc-drawer__divider-label\" *ngIf=\"label\">\n    {{ label }}\n  </div>\n</div>", styles: [".ngc-drawer{display:flex;position:relative;min-width:32px;height:100%;min-height:0;z-index:var(--ngc-z-level-2, 1000)}.ngc-drawer.ngc-drawer--opened{min-width:fit-content}.ngc-drawer.ngc-drawer--opened.ngc-drawer--left>.ngc-drawer__divider,.ngc-drawer.ngc-drawer--opened.ngc-drawer--right>.ngc-drawer__divider{background-color:#0000}.ngc-drawer.ngc-drawer--opened.ngc-drawer--left>.ngc-drawer__divider>.ngc-drawer__divider-label,.ngc-drawer.ngc-drawer--opened.ngc-drawer--right>.ngc-drawer__divider>.ngc-drawer__divider-label{display:none}.ngc-drawer.ngc-drawer--left{order:-1}.ngc-drawer.ngc-drawer--left.ngc-drawer--opened>.ngc-drawer__divider{left:unset;right:-16px}.ngc-drawer.ngc-drawer--left.ngc-drawer--opened~.ngc-drawer-content{margin-left:32px}.ngc-drawer.ngc-drawer--left>.ngc-drawer__divider{left:0;order:1}.ngc-drawer.ngc-drawer--left>.ngc-drawer__content-wrapper{padding-right:32px}.ngc-drawer.ngc-drawer--left~.ngc-drawer-content{margin-left:16px}.ngc-drawer.ngc-drawer--right{order:1}.ngc-drawer.ngc-drawer--right.ngc-drawer--opened>.ngc-drawer__divider{right:unset;left:-16px}.ngc-drawer.ngc-drawer--right.ngc-drawer--opened~.ngc-drawer-content{margin-right:32px}.ngc-drawer.ngc-drawer--right>.ngc-drawer__divider{right:0;order:-1}.ngc-drawer.ngc-drawer--right>.ngc-drawer__content-wrapper{padding-left:32px}.ngc-drawer.ngc-drawer--right~.ngc-drawer-content{margin-right:16px}.ngc-drawer.ngc-drawer--sliding>.ngc-drawer__divider{opacity:0;visibility:hidden}.ngc-drawer>.ngc-drawer__divider{display:flex;flex-direction:column;align-items:center;position:absolute;top:0;bottom:0;width:32px;transition:opacity .2s ease-in-out;background-color:var(--drawer-bg-color, var(--ngc-color-neutral-white, #fff))}.ngc-drawer>.ngc-drawer__divider:before,.ngc-drawer>.ngc-drawer__divider:after{content:\"\";display:block;width:1px;background-color:var(--ngc-color-neutral-border-default, #e4e4e6)}.ngc-drawer>.ngc-drawer__divider:before{height:64px}.ngc-drawer>.ngc-drawer__divider:after{height:100%;min-height:0}.ngc-drawer>.ngc-drawer__divider>.ngc-drawer__divider-btn-toggle{position:absolute;border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);top:20px}.ngc-drawer>.ngc-drawer__divider>.ngc-drawer__divider-label{font-weight:var(--ngc-font-weight-semibold, 600);white-space:nowrap;writing-mode:tb-rl;transform:rotate(-180deg);padding-top:5px;padding-bottom:5px;height:fit-content;width:fit-content}.ngc-drawer>.ngc-drawer__content-wrapper{display:flex;background-color:var(--drawer-bg-color, var(--ngc-color-neutral-white, #fff));order:0}.ngc-drawer>.ngc-drawer__content-wrapper>.ngc-drawer__content{display:flex;flex-direction:column;width:var(--drawer-width);padding-top:var(--drawer-padding-top, 0);padding-bottom:var(--drawer-padding-bottom, 0);padding-left:var(--drawer-padding-left, 0);padding-right:var(--drawer-padding-right, 0)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { styleBgColor: [{
                type: HostBinding,
                args: ['style.--drawer-bg-color']
            }], styleWidth: [{
                type: HostBinding,
                args: ['style.--drawer-width']
            }], stylePaddingTop: [{
                type: HostBinding,
                args: ['style.--drawer-padding-top']
            }], stylePaddingBottom: [{
                type: HostBinding,
                args: ['style.--drawer-padding-bottom']
            }], stylePaddingLeft: [{
                type: HostBinding,
                args: ['style.--drawer-padding-left']
            }], stylePaddingRight: [{
                type: HostBinding,
                args: ['style.--drawer-padding-right']
            }], classLeft: [{
                type: HostBinding,
                args: ['class.ngc-drawer--left']
            }], classRight: [{
                type: HostBinding,
                args: ['class.ngc-drawer--right']
            }], classOpened: [{
                type: HostBinding,
                args: ['class.ngc-drawer--opened']
            }], classSliding: [{
                type: HostBinding,
                args: ['class.ngc-drawer--sliding']
            }], lazyContent: [{
                type: ContentChild,
                args: [NgcDrawerLazyDirective]
            }], label: [{
                type: Input
            }], bgColor: [{
                type: Input
            }], renderDelay: [{
                type: Input
            }], opened: [{
                type: Input
            }], width: [{
                type: Input
            }], paddingVertical: [{
                type: Input
            }], paddingHorizontal: [{
                type: Input
            }], paddingTop: [{
                type: Input
            }], paddingBottom: [{
                type: Input
            }], paddingLeft: [{
                type: Input
            }], paddingRight: [{
                type: Input
            }], position: [{
                type: Input
            }], openedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRyYXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1kcmF3ZXIvZHJhd2VyL25nYy1kcmF3ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZHJhd2VyL2RyYXdlci9uZ2MtZHJhd2VyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFDNUIsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDdkMsWUFBWSxFQUNaLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFDdkQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNOLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUNyQixVQUFVLEVBQUUsT0FBTyxFQUNuQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztBQXNCckUsTUFBTSxPQUFPLGtCQUFrQjtJQW9EOUI7Ozs7T0FJRztJQUNILFlBQW9CLFVBQXNCLEVBQVUsTUFBeUI7UUFBekQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBckI3QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQVMxQyxhQUFRLEdBQXNCLE1BQU0sQ0FBQztRQUVwRCxpQkFBWSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBVUYsQ0FBQztJQXZEbEYsSUFDSSxZQUFZLEtBQWEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVu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LFdBQVc7dUJBQUUsOEJBQThCO2dCQUl4QyxTQUFTO3NCQURaLFdBQVc7dUJBQUUsd0JBQXdCO2dCQUlsQyxVQUFVO3NCQURiLFdBQVc7dUJBQUUseUJBQXlCO2dCQUluQyxXQUFXO3NCQURkLFdBQVc7dUJBQUUsMEJBQTBCO2dCQUlwQyxZQUFZO3NCQURmLFdBQVc7dUJBQUUsMkJBQTJCO2dCQUdNLFdBQVc7c0JBQXpELFlBQVk7dUJBQUUsc0JBQXNCO2dCQUVyQixLQUFLO3NCQUFwQixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQzBDLFdBQVc7c0JBQTFELEtBQUs7Z0JBQzJCLE1BQU07c0JBQXRDLEtBQUs7Z0JBQzRCLEtBQUs7c0JBQXRDLEtBQUs7Z0JBQzRCLGVBQWU7c0JBQWhELEtBQUs7Z0JBQzRCLGlCQUFpQjtzQkFBbEQsS0FBSztnQkFDNEIsVUFBVTtzQkFBM0MsS0FBSztnQkFDNEIsYUFBYTtzQkFBOUMsS0FBSztnQkFDNEIsV0FBVztzQkFBNUMsS0FBSztnQkFDNEIsWUFBWTtzQkFBN0MsS0FBSztnQkFDMEIsUUFBUTtzQkFBdkMsS0FBSztnQkFFVyxZQUFZO3NCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuXHRDb250ZW50Q2hpbGQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdGFuaW1hdGUsIHN0YXRlLCBzdHlsZSxcblx0dHJhbnNpdGlvbiwgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgRGVmYXVsdFZhbHVlLCBDb2VyY2VCb29sZWFuLCBDb2VyY2VOdW1iZXIsIENvZXJjZUNzc1BpeGVsIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NEcmF3ZXJMYXp5RGlyZWN0aXZlIH0gZnJvbSAnLi9uZ2MtZHJhd2VyLWxhenkuZGlyZWN0aXZlJztcblxuZXhwb3J0IHR5cGUgTmdjRHJhd2VyUG9zaXRpb24gPSAnbGVmdCcgfCAncmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLWRyYXdlciwgW25nY0RyYXdlcl0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1kcmF3ZXIuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLWRyYXdlci5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWRyYXdlcicgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcihcblx0XHRcdCdzbGlkZScsXG5cdFx0XHRbXG5cdFx0XHRcdHN0YXRlKCAnY2xvc2VkJywgc3R5bGUoeyB3aWR0aDogMCwgbWluV2lkdGg6IDAsIG1heFdpZHRoOiAwLCB2aXNpYmlsaXR5OiAnaGlkZGVuJywgb3BhY2l0eTogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pICksXG5cdFx0XHRcdHN0YXRlKCAnb3BlbmVkJywgc3R5bGUoeyB3aWR0aDogJyonLCBtaW5XaWR0aDogJyonLCBtYXhXaWR0aDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScsIG9wYWNpdHk6IDEsIG92ZXJmbG93OiAnaW5pdGlhbCcgfSkgKSxcblx0XHRcdFx0dHJhbnNpdGlvbiggJ29wZW5lZCA8PT4gY2xvc2VkJywgYW5pbWF0ZSggJzIyNW1zIGN1YmljLWJlemllciggLjQsIC4wLCAuMiwgMSApJyApICksXG5cdFx0XHRdXG5cdFx0KSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWRyYXdlci1iZy1jb2xvcicgKVxuXHRnZXQgc3R5bGVCZ0NvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmJnQ29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWRyYXdlci13aWR0aCcgKVxuXHRnZXQgc3R5bGVXaWR0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy53aWR0aDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tZHJhd2VyLXBhZGRpbmctdG9wJyApXG5cdGdldCBzdHlsZVBhZGRpbmdUb3AoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucGFkZGluZ1RvcCB8fCB0aGlzLnBhZGRpbmdWZXJ0aWNhbDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tZHJhd2VyLXBhZGRpbmctYm90dG9tJyApXG5cdGdldCBzdHlsZVBhZGRpbmdCb3R0b20oKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucGFkZGluZ0JvdHRvbSB8fCB0aGlzLnBhZGRpbmdWZXJ0aWNhbDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tZHJhd2VyLXBhZGRpbmctbGVmdCcgKVxuXHRnZXQgc3R5bGVQYWRkaW5nTGVmdCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wYWRkaW5nTGVmdCB8fCB0aGlzLnBhZGRpbmdIb3Jpem9udGFsOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1kcmF3ZXItcGFkZGluZy1yaWdodCcgKVxuXHRnZXQgc3R5bGVQYWRkaW5nUmlnaHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucGFkZGluZ1JpZ2h0IHx8IHRoaXMucGFkZGluZ0hvcml6b250YWw7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZHJhd2VyLS1sZWZ0JyApXG5cdGdldCBjbGFzc0xlZnQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBvc2l0aW9uID09PSAnbGVmdCc7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZHJhd2VyLS1yaWdodCcgKVxuXHRnZXQgY2xhc3NSaWdodCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucG9zaXRpb24gPT09ICdyaWdodCc7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZHJhd2VyLS1vcGVuZWQnIClcblx0Z2V0IGNsYXNzT3BlbmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5vcGVuZWQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZHJhd2VyLS1zbGlkaW5nJyApXG5cdGdldCBjbGFzc1NsaWRpbmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzU2xpZGluZzsgfVxuXG5cdEBDb250ZW50Q2hpbGQoIE5nY0RyYXdlckxhenlEaXJlY3RpdmUgKSBwdWJsaWMgbGF6eUNvbnRlbnQ6IE5nY0RyYXdlckxhenlEaXJlY3RpdmU7XG5cblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBiZ0NvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlTnVtYmVyKCkgcHVibGljIHJlbmRlckRlbGF5OiBudW1iZXIgPSAyMjU7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIG9wZW5lZDogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHdpZHRoOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nVmVydGljYWw6IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIHBhZGRpbmdIb3Jpem9udGFsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nVG9wOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nQm90dG9tOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBwYWRkaW5nTGVmdDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgcGFkZGluZ1JpZ2h0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgcG9zaXRpb246IE5nY0RyYXdlclBvc2l0aW9uID0gJ2xlZnQnO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0cHVibGljIGlzU2xpZGluZzogYm9vbGVhbjtcblx0cHVibGljIGlzUmVuZGVyZWQ6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gX2NkUmVmXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiApIHt9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGNoYW5nZXMub3BlbmVkICYmIHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgdG9nZ2xlKCkge1xuXHRcdHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuXG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdFx0dGhpcy5vcGVuZWRDaGFuZ2UuZW1pdCggdGhpcy5vcGVuZWQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJpdmF0ZSBfcmVuZGVyKCkge1xuXHRcdGlmICggdGhpcy5pc1JlbmRlcmVkIHx8ICF0aGlzLm9wZW5lZCApIHJldHVybjtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMuaXNSZW5kZXJlZCA9IHRydWU7XG5cblx0XHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0sIHRoaXMucmVuZGVyRGVsYXkgKTtcblx0fVxuXG59XG4iLCI8bmctdGVtcGxhdGUgI2NvbnRlbnQ+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXp5Q29udGVudD8udGVtcGxhdGVSZWY7IGVsc2UgZWxzZUJsb2NrXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxhenlDb250ZW50Py50ZW1wbGF0ZVJlZlwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L25nLXRlbXBsYXRlPlxuPC9uZy10ZW1wbGF0ZT5cblxuPGRpdlxuICBjbGFzcz1cIm5nYy1kcmF3ZXJfX2NvbnRlbnQtd3JhcHBlclwiXG4gIFtAc2xpZGVdPVwib3BlbmVkID8gJ29wZW5lZCcgOiAnY2xvc2VkJ1wiXG4gIChAc2xpZGUuc3RhcnQpPVwiaXNTbGlkaW5nID0gdHJ1ZVwiXG4gIChAc2xpZGUuZG9uZSk9XCJpc1NsaWRpbmcgPSBmYWxzZVwiPlxuICBcbiAgPGRpdiBjbGFzcz1cIm5nYy1kcmF3ZXJfX2NvbnRlbnRcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSZW5kZXJlZFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm5nYy1kcmF3ZXJfX2RpdmlkZXJcIj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwibmdjLWRyYXdlcl9fZGl2aWRlci1idG4tdG9nZ2xlXCJcbiAgICBuZ2NJY29uQnV0dG9uXG4gICAgc2l6ZT1cIjI4cHhcIlxuICAgIFtuZ2NUb29sdGlwXT1cIidOR0MuTEFCRUwuJyArIChvcGVuZWQgPyAnQ09MTEFQU0UnIDogJ0VYUEFORCcpIHwgdHJhbnNsYXRlXCJcbiAgICBbcG9zaXRpb25dPVwicG9zaXRpb24gPT09ICdsZWZ0JyA/ICdhZnRlcicgOiAnYmVmb3JlJ1wiXG4gICAgW2ljb25dPVwib3BlbmVkID8gKHBvc2l0aW9uID09PSAnbGVmdCcgPyAnY2hldnJvbi1iYWNrLW91dGxpbmUnIDogJ2NoZXZyb24tZm9yd2FyZC1vdXRsaW5lJykgOiAocG9zaXRpb24gPT09ICdsZWZ0JyA/ICdjaGV2cm9uLWZvcndhcmQtb3V0bGluZScgOiAnY2hldnJvbi1iYWNrLW91dGxpbmUnKVwiXG4gICAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XG4gIDwvYnV0dG9uPlxuICA8ZGl2IGNsYXNzPVwibmdjLWRyYXdlcl9fZGl2aWRlci1sYWJlbFwiICpuZ0lmPVwibGFiZWxcIj5cbiAgICB7eyBsYWJlbCB9fVxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==