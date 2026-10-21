import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ContentChildren, ElementRef, ChangeDetectorRef, QueryList, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { trigger, transition, style, animate } from '@angular/animations';
import { DefaultValue, CoerceBoolean, CoerceCssPixel, CoerceNumber } from '@core';
import { NgcExpansionPanelHeaderComponent } from '../expansion-panel-header/ngc-expansion-panel-header.component';
import { NgcExpansionPanelContentComponent } from '../expansion-panel-content/ngc-expansion-panel-content.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
import * as i3 from "../../ngc-icon/ngc-icon.component";
import * as i4 from "../../ngc-scroll-bar/ngc-scroll-bar/ngc-scroll-bar.directive";
export class NgcExpansionPanelComponent {
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(elementRef, _cdRef) {
        this.elementRef = elementRef;
        this._cdRef = _cdRef;
        this.renderDelay = 0;
        this.theme = 'default';
        this.expandedChange = new EventEmitter();
    }
    get styleHeaderColor() { return this.expansionPanelHeader?.color; }
    get styleHeaderTextColor() { return this.expansionPanelHeader?.textColor; }
    get styleHeaderFontSize() { return this.expansionPanelHeader?.textFontSize; }
    get styleHeaderWidth() { return this.expansionPanelHeader?.width; }
    get styleContentPaddingTop() { return this.contentPaddingTop || this.contentPaddingVertical; }
    get styleContentPaddingBottom() { return this.contentPaddingBottom || this.contentPaddingVertical; }
    get styleContentPaddingLeft() { return this.contentPaddingLeft || this.contentPaddingHorizontal; }
    get styleContentPaddingRight() { return this.contentPaddingRight || this.contentPaddingHorizontal; }
    get classExpanded() { return this.expanded; }
    get classDraggable() { return this.draggable; }
    get classHasScrollBar() { return this.hasScrollBar; }
    get classThemeBackground() { return this.theme === 'background'; }
    get expansionPanelHeader() {
        return this.expansionPanelHeaderList.first;
    }
    get expansionPanelContent() {
        return this.expansionPanelContentList.first;
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        changes.expanded && this._render();
    }
    /**
     * @return {void}
     */
    expand() {
        this.expanded = true;
        this._render();
        this.expandedChange.emit(true);
        this._cdRef.markForCheck();
    }
    /**
     * @return {void}
     */
    collapse() {
        this.expanded = false;
        this.expandedChange.emit(false);
        this._cdRef.markForCheck();
    }
    /**
     * @return {void}
     */
    _render() {
        if (this.isRendered || !this.expanded)
            return;
        setTimeout(() => {
            this.isRendered = true;
            this._cdRef.markForCheck();
        }, this.renderDelay);
    }
}
NgcExpansionPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExpansionPanelComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcExpansionPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcExpansionPanelComponent, selector: "ngc-expansion-panel", inputs: { cdkDrag: "cdkDrag", cdkDragDisabled: "cdkDragDisabled", renderDelay: "renderDelay", expanded: "expanded", draggable: "draggable", hasScrollBar: "hasScrollBar", contentPaddingVertical: "contentPaddingVertical", contentPaddingHorizontal: "contentPaddingHorizontal", contentPaddingTop: "contentPaddingTop", contentPaddingBottom: "contentPaddingBottom", contentPaddingLeft: "contentPaddingLeft", contentPaddingRight: "contentPaddingRight", theme: "theme" }, outputs: { expandedChange: "expandedChange" }, host: { properties: { "style.--expansion-panel-header-color": "this.styleHeaderColor", "style.--expansion-panel-header-text-color": "this.styleHeaderTextColor", "style.--expansion-panel-header-text-font-size": "this.styleHeaderFontSize", "style.--expansion-panel-header-width": "this.styleHeaderWidth", "style.--expansion-panel-content-padding-top": "this.styleContentPaddingTop", "style.--expansion-panel-content-padding-bottom": "this.styleContentPaddingBottom", "style.--expansion-panel-content-padding-left": "this.styleContentPaddingLeft", "style.--expansion-panel-content-padding-right": "this.styleContentPaddingRight", "class.ngc-expansion-panel--expanded": "this.classExpanded", "class.ngc-expansion-panel--draggable": "this.classDraggable", "class.ngc-expansion-panel--has-scroll-bar": "this.classHasScrollBar", "class.ngc-expansion-panel--theme-background": "this.classThemeBackground" }, classAttribute: "ngc-expansion-panel" }, queries: [{ propertyName: "expansionPanelHeaderList", predicate: NgcExpansionPanelHeaderComponent }, { propertyName: "expansionPanelContentList", predicate: NgcExpansionPanelContentComponent }], usesOnChanges: true, ngImport: i0, template: "<div \n  class=\"ngc-expansion-panel__header\"\n  [class.ngc-expansion-panel__header--sticky]=\"expansionPanelHeader?.sticky\"\n  [class.ngc-expansion-panel__header--stretch]=\"expansionPanelHeader?.stretch\">\n\n  <div \n    class=\"ngc-expansion-panel__header__drag-handle\"\n    cdkDragHandle \n    *ngIf=\"cdkDrag !== undefined && !cdkDragDisabled\">\n    <ngc-icon name=\"drag\" size=\"20px\"></ngc-icon>\n  </div>\n\n  <div \n    class=\"ngc-expansion-panel__header-wrapper\"\n    (click)=\"expanded ? collapse() : expand()\">\n    \n    <ngc-icon \n      class=\"ngc-expansion-panel__header__icon\" \n      name=\"chevron-right\">\n    </ngc-icon>\n\n    <div class=\"ngc-expansion-panel__header__content\">\n      <ng-container *ngTemplateOutlet=\"expansionPanelHeader?.templateRef\"></ng-container>\n    </div>\n  </div>\n</div>\n\n<div \n  class=\"ngc-expansion-panel__content\"\n  ngcScrollBar \n  *ngIf=\"expanded\"\n  [@toggleHeight]\n  [suppress]=\"!hasScrollBar\">\n\n  <div class=\"ngc-expansion-panel__content-wrapper\">\n    <ng-container *ngIf=\"isRendered\">\n      <ng-container *ngTemplateOutlet=\"expansionPanelContent?.template\"></ng-container>\n      <ng-content></ng-content>\n    </ng-container>\n  </div>\n</div>\n", styles: [".ngc-expansion-panel{display:flex;flex-direction:column}.ngc-expansion-panel.ngc-expansion-panel--theme-background.ngc-expansion-panel--expanded>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper{border-bottom-right-radius:0;border-bottom-left-radius:0}.ngc-expansion-panel.ngc-expansion-panel--theme-background.ngc-expansion-panel--draggable>.ngc-expansion-panel__header,.ngc-expansion-panel.ngc-expansion-panel--theme-background.ngc-expansion-panel--draggable>.ngc-expansion-panel__content{padding-left:30px}.ngc-expansion-panel.ngc-expansion-panel--theme-background>.ngc-expansion-panel__header>.ngc-expansion-panel__header__drag-handle{position:absolute;left:5px;top:50%;transform:translateY(-50%)}.ngc-expansion-panel.ngc-expansion-panel--theme-background>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper{max-width:500px;background-color:var(--expansion-panel-header-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));padding:10px;border-radius:8px}.ngc-expansion-panel.ngc-expansion-panel--theme-background>.ngc-expansion-panel__content>.ngc-expansion-panel__content-wrapper{padding-top:var(--expansion-panel-content-padding-top, 20px);padding-bottom:var(--expansion-panel-content-padding-bottom, 20px);padding-left:var(--expansion-panel-content-padding-left, 20px);padding-right:var(--expansion-panel-content-padding-right, 20px);background-color:var(--ngc-color-neutral-white, #fff);border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-top-right-radius:15px;border-bottom-right-radius:15px;border-bottom-left-radius:15px}.ngc-expansion-panel.ngc-expansion-panel--expanded{min-height:fit-content;min-width:fit-content}.ngc-expansion-panel.ngc-expansion-panel--expanded>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper>.ngc-expansion-panel__header__icon{transform:rotate(90deg)}.ngc-expansion-panel.ngc-expansion-panel--has-scroll-bar{max-width:100%;max-height:100%}.ngc-expansion-panel>.ngc-expansion-panel__header,.ngc-expansion-panel>.ngc-expansion-panel__body{display:flex;position:relative}.ngc-expansion-panel>.ngc-expansion-panel__header{align-items:center}.ngc-expansion-panel>.ngc-expansion-panel__header.ngc-expansion-panel__header--sticky{position:sticky;top:0;z-index:1;background-color:var(--ngc-color-neutral-white, #fff)}.ngc-expansion-panel>.ngc-expansion-panel__header.ngc-expansion-panel__header--stretch{width:100%;min-width:0}.ngc-expansion-panel>.ngc-expansion-panel__header.ngc-expansion-panel__header--stretch>.ngc-expansion-panel__header-wrapper{width:100%;min-width:0;max-width:unset}.ngc-expansion-panel>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper{display:flex;align-items:center;position:sticky;left:0;width:var(--expansion-panel-header-width, fit-content);min-width:var(--expansion-panel-header-width, fit-content);max-width:var(--expansion-panel-header-width, fit-content);font-weight:var(--ngc-font-weight-semibold, 600);font-size:var(--expansion-panel-header-text-font-size, inherit);color:var(--expansion-panel-header-text-color, inherit);line-height:20px;padding-top:10px;padding-bottom:10px;cursor:pointer}.ngc-expansion-panel>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper>.ngc-expansion-panel__header__icon{transition:transform .1s ease-in-out;margin-right:5px;height:fit-content}.ngc-expansion-panel>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper>.ngc-expansion-panel__header__content{display:flex;align-items:center;min-width:0;width:100%}.ngc-expansion-panel>.ngc-expansion-panel__header>.ngc-expansion-panel__header__drag-handle{color:var(--ngc-color-neutral-text-placeholder, #c4c4c6)}.ngc-expansion-panel>.ngc-expansion-panel__content{display:flex;min-height:0;height:100%}.ngc-expansion-panel>.ngc-expansion-panel__content>.ngc-expansion-panel__content-wrapper{padding-top:var(--expansion-panel-content-padding-top, 0);padding-bottom:var(--expansion-panel-content-padding-bottom, 0);padding-right:var(--expansion-panel-content-padding-right, 0);padding-left:var(--expansion-panel-content-padding-left, calc(var(--expansion-panel-header-text-font-size, 16px) + 5px));width:fit-content;min-width:100%}\n"], dependencies: [{ kind: "directive", type: i1.CdkDragHandle, selector: "[cdkDragHandle]", inputs: ["cdkDragHandleDisabled"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }, { kind: "directive", type: i4.NgcScrollBarDirective, selector: "[ngcScrollBar]", exportAs: ["ngcScrollBar"] }], animations: [
        trigger('toggleHeight', [
            transition(':enter', [
                style({ height: '0', opacity: 0 }),
                animate('300ms ease-out', style({ height: '*', opacity: 1 })),
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ height: '0', opacity: 0 })),
            ]),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcExpansionPanelComponent.prototype, "renderDelay", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExpansionPanelComponent.prototype, "expanded", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExpansionPanelComponent.prototype, "draggable", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcExpansionPanelComponent.prototype, "hasScrollBar", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcExpansionPanelComponent.prototype, "contentPaddingVertical", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcExpansionPanelComponent.prototype, "contentPaddingHorizontal", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcExpansionPanelComponent.prototype, "contentPaddingTop", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcExpansionPanelComponent.prototype, "contentPaddingBottom", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcExpansionPanelComponent.prototype, "contentPaddingLeft", void 0);
__decorate([
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcExpansionPanelComponent.prototype, "contentPaddingRight", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcExpansionPanelComponent.prototype, "theme", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-expansion-panel', host: { class: 'ngc-expansion-panel' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                        trigger('toggleHeight', [
                            transition(':enter', [
                                style({ height: '0', opacity: 0 }),
                                animate('300ms ease-out', style({ height: '*', opacity: 1 })),
                            ]),
                            transition(':leave', [
                                animate('300ms ease-in', style({ height: '0', opacity: 0 })),
                            ]),
                        ]),
                    ], template: "<div \n  class=\"ngc-expansion-panel__header\"\n  [class.ngc-expansion-panel__header--sticky]=\"expansionPanelHeader?.sticky\"\n  [class.ngc-expansion-panel__header--stretch]=\"expansionPanelHeader?.stretch\">\n\n  <div \n    class=\"ngc-expansion-panel__header__drag-handle\"\n    cdkDragHandle \n    *ngIf=\"cdkDrag !== undefined && !cdkDragDisabled\">\n    <ngc-icon name=\"drag\" size=\"20px\"></ngc-icon>\n  </div>\n\n  <div \n    class=\"ngc-expansion-panel__header-wrapper\"\n    (click)=\"expanded ? collapse() : expand()\">\n    \n    <ngc-icon \n      class=\"ngc-expansion-panel__header__icon\" \n      name=\"chevron-right\">\n    </ngc-icon>\n\n    <div class=\"ngc-expansion-panel__header__content\">\n      <ng-container *ngTemplateOutlet=\"expansionPanelHeader?.templateRef\"></ng-container>\n    </div>\n  </div>\n</div>\n\n<div \n  class=\"ngc-expansion-panel__content\"\n  ngcScrollBar \n  *ngIf=\"expanded\"\n  [@toggleHeight]\n  [suppress]=\"!hasScrollBar\">\n\n  <div class=\"ngc-expansion-panel__content-wrapper\">\n    <ng-container *ngIf=\"isRendered\">\n      <ng-container *ngTemplateOutlet=\"expansionPanelContent?.template\"></ng-container>\n      <ng-content></ng-content>\n    </ng-container>\n  </div>\n</div>\n", styles: [".ngc-expansion-panel{display:flex;flex-direction:column}.ngc-expansion-panel.ngc-expansion-panel--theme-background.ngc-expansion-panel--expanded>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper{border-bottom-right-radius:0;border-bottom-left-radius:0}.ngc-expansion-panel.ngc-expansion-panel--theme-background.ngc-expansion-panel--draggable>.ngc-expansion-panel__header,.ngc-expansion-panel.ngc-expansion-panel--theme-background.ngc-expansion-panel--draggable>.ngc-expansion-panel__content{padding-left:30px}.ngc-expansion-panel.ngc-expansion-panel--theme-background>.ngc-expansion-panel__header>.ngc-expansion-panel__header__drag-handle{position:absolute;left:5px;top:50%;transform:translateY(-50%)}.ngc-expansion-panel.ngc-expansion-panel--theme-background>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper{max-width:500px;background-color:var(--expansion-panel-header-color, var(--ngc-color-neutral-background-disabled, #f5f5f5));padding:10px;border-radius:8px}.ngc-expansion-panel.ngc-expansion-panel--theme-background>.ngc-expansion-panel__content>.ngc-expansion-panel__content-wrapper{padding-top:var(--expansion-panel-content-padding-top, 20px);padding-bottom:var(--expansion-panel-content-padding-bottom, 20px);padding-left:var(--expansion-panel-content-padding-left, 20px);padding-right:var(--expansion-panel-content-padding-right, 20px);background-color:var(--ngc-color-neutral-white, #fff);border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-top-right-radius:15px;border-bottom-right-radius:15px;border-bottom-left-radius:15px}.ngc-expansion-panel.ngc-expansion-panel--expanded{min-height:fit-content;min-width:fit-content}.ngc-expansion-panel.ngc-expansion-panel--expanded>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper>.ngc-expansion-panel__header__icon{transform:rotate(90deg)}.ngc-expansion-panel.ngc-expansion-panel--has-scroll-bar{max-width:100%;max-height:100%}.ngc-expansion-panel>.ngc-expansion-panel__header,.ngc-expansion-panel>.ngc-expansion-panel__body{display:flex;position:relative}.ngc-expansion-panel>.ngc-expansion-panel__header{align-items:center}.ngc-expansion-panel>.ngc-expansion-panel__header.ngc-expansion-panel__header--sticky{position:sticky;top:0;z-index:1;background-color:var(--ngc-color-neutral-white, #fff)}.ngc-expansion-panel>.ngc-expansion-panel__header.ngc-expansion-panel__header--stretch{width:100%;min-width:0}.ngc-expansion-panel>.ngc-expansion-panel__header.ngc-expansion-panel__header--stretch>.ngc-expansion-panel__header-wrapper{width:100%;min-width:0;max-width:unset}.ngc-expansion-panel>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper{display:flex;align-items:center;position:sticky;left:0;width:var(--expansion-panel-header-width, fit-content);min-width:var(--expansion-panel-header-width, fit-content);max-width:var(--expansion-panel-header-width, fit-content);font-weight:var(--ngc-font-weight-semibold, 600);font-size:var(--expansion-panel-header-text-font-size, inherit);color:var(--expansion-panel-header-text-color, inherit);line-height:20px;padding-top:10px;padding-bottom:10px;cursor:pointer}.ngc-expansion-panel>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper>.ngc-expansion-panel__header__icon{transition:transform .1s ease-in-out;margin-right:5px;height:fit-content}.ngc-expansion-panel>.ngc-expansion-panel__header>.ngc-expansion-panel__header-wrapper>.ngc-expansion-panel__header__content{display:flex;align-items:center;min-width:0;width:100%}.ngc-expansion-panel>.ngc-expansion-panel__header>.ngc-expansion-panel__header__drag-handle{color:var(--ngc-color-neutral-text-placeholder, #c4c4c6)}.ngc-expansion-panel>.ngc-expansion-panel__content{display:flex;min-height:0;height:100%}.ngc-expansion-panel>.ngc-expansion-panel__content>.ngc-expansion-panel__content-wrapper{padding-top:var(--expansion-panel-content-padding-top, 0);padding-bottom:var(--expansion-panel-content-padding-bottom, 0);padding-right:var(--expansion-panel-content-padding-right, 0);padding-left:var(--expansion-panel-content-padding-left, calc(var(--expansion-panel-header-text-font-size, 16px) + 5px));width:fit-content;min-width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { styleHeaderColor: [{
                type: HostBinding,
                args: ['style.--expansion-panel-header-color']
            }], styleHeaderTextColor: [{
                type: HostBinding,
                args: ['style.--expansion-panel-header-text-color']
            }], styleHeaderFontSize: [{
                type: HostBinding,
                args: ['style.--expansion-panel-header-text-font-size']
            }], styleHeaderWidth: [{
                type: HostBinding,
                args: ['style.--expansion-panel-header-width']
            }], styleContentPaddingTop: [{
                type: HostBinding,
                args: ['style.--expansion-panel-content-padding-top']
            }], styleContentPaddingBottom: [{
                type: HostBinding,
                args: ['style.--expansion-panel-content-padding-bottom']
            }], styleContentPaddingLeft: [{
                type: HostBinding,
                args: ['style.--expansion-panel-content-padding-left']
            }], styleContentPaddingRight: [{
                type: HostBinding,
                args: ['style.--expansion-panel-content-padding-right']
            }], classExpanded: [{
                type: HostBinding,
                args: ['class.ngc-expansion-panel--expanded']
            }], classDraggable: [{
                type: HostBinding,
                args: ['class.ngc-expansion-panel--draggable']
            }], classHasScrollBar: [{
                type: HostBinding,
                args: ['class.ngc-expansion-panel--has-scroll-bar']
            }], classThemeBackground: [{
                type: HostBinding,
                args: ['class.ngc-expansion-panel--theme-background']
            }], expansionPanelHeaderList: [{
                type: ContentChildren,
                args: [NgcExpansionPanelHeaderComponent, { descendants: false }]
            }], expansionPanelContentList: [{
                type: ContentChildren,
                args: [NgcExpansionPanelContentComponent, { descendants: false }]
            }], cdkDrag: [{
                type: Input,
                args: ['cdkDrag']
            }], cdkDragDisabled: [{
                type: Input,
                args: ['cdkDragDisabled']
            }], renderDelay: [{
                type: Input
            }], expanded: [{
                type: Input
            }], draggable: [{
                type: Input
            }], hasScrollBar: [{
                type: Input
            }], contentPaddingVertical: [{
                type: Input
            }], contentPaddingHorizontal: [{
                type: Input
            }], contentPaddingTop: [{
                type: Input
            }], contentPaddingBottom: [{
                type: Input
            }], contentPaddingLeft: [{
                type: Input
            }], contentPaddingRight: [{
                type: Input
            }], theme: [{
                type: Input
            }], expandedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsL25nYy1leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC9uZ2MtZXhwYW5zaW9uLXBhbmVsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUNuQyxNQUFNLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFDckMsVUFBVSxFQUNWLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFDckQsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVsRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQzs7Ozs7O0FBdUJySCxNQUFNLE9BQU8sMEJBQTBCO0lBcUV0Qzs7OztPQUlHO0lBQ0gsWUFBb0IsVUFBc0IsRUFBVSxNQUF5QjtRQUF6RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUE3QjdCLGdCQUFXLEdB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O3VCQUFFLGlDQUFpQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtnQkFHaEQsT0FBTztzQkFBakMsS0FBSzt1QkFBRSxTQUFTO2dCQUNrQixlQUFlO3NCQUFqRCxLQUFLO3VCQUFFLGlCQUFpQjtnQkFDdUIsV0FBVztzQkFBMUQsS0FBSztnQkFDMkIsUUFBUTtzQkFBeEMsS0FBSztnQkFDMkIsU0FBUztzQkFBekMsS0FBSztnQkFDMkIsWUFBWTtzQkFBNUMsS0FBSztnQkFDNEIsc0JBQXNCO3NCQUF2RCxLQUFLO2dCQUM0Qix3QkFBd0I7c0JBQXpELEtBQUs7Z0JBQzRCLGlCQUFpQjtzQkFBbEQsS0FBSztnQkFDNEIsb0JBQW9CO3NCQUFyRCxLQUFLO2dCQUM0QixrQkFBa0I7c0JBQW5ELEtBQUs7Z0JBQzRCLG1CQUFtQjtzQkFBcEQsS0FBSztnQkFDMEIsS0FBSztzQkFBcEMsS0FBSztnQkFFVyxjQUFjO3NCQUE5QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsXG5cdE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sXG5cdEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsIFF1ZXJ5TGlzdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRHJhZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgdHJpZ2dlciwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgRGVmYXVsdFZhbHVlLCBDb2VyY2VCb29sZWFuLCBDb2VyY2VDc3NQaXhlbCwgQ29lcmNlTnVtYmVyIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NFeHBhbnNpb25QYW5lbEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIvbmdjLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0V4cGFuc2lvblBhbmVsQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2V4cGFuc2lvbi1wYW5lbC1jb250ZW50L25nYy1leHBhbnNpb24tcGFuZWwtY29udGVudC5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOZ2NJRXhwYW5zaW9uUGFuZWxUaGVtZSA9ICdkZWZhdWx0JyB8ICdiYWNrZ3JvdW5kJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1leHBhbnNpb24tcGFuZWwnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1leHBhbnNpb24tcGFuZWwuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLWV4cGFuc2lvbi1wYW5lbC5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWV4cGFuc2lvbi1wYW5lbCcgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcigndG9nZ2xlSGVpZ2h0JywgW1xuXHRcdHRyYW5zaXRpb24oJzplbnRlcicsIFtcblx0XHRcdHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG9wYWNpdHk6IDAgfSksXG5cdFx0XHRhbmltYXRlKCczMDBtcyBlYXNlLW91dCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEgfSkpLFxuXHRcdF0pLFxuXHRcdHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcblx0XHRcdGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogJzAnLCBvcGFjaXR5OiAwIH0pKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NFeHBhbnNpb25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWNvbG9yJyApXG5cdGdldCBzdHlsZUhlYWRlckNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmV4cGFuc2lvblBhbmVsSGVhZGVyPy5jb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10ZXh0LWNvbG9yJyApXG5cdGdldCBzdHlsZUhlYWRlclRleHRDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5leHBhbnNpb25QYW5lbEhlYWRlcj8udGV4dENvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRleHQtZm9udC1zaXplJyApXG5cdGdldCBzdHlsZUhlYWRlckZvbnRTaXplKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmV4cGFuc2lvblBhbmVsSGVhZGVyPy50ZXh0Rm9udFNpemU7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItd2lkdGgnIClcblx0Z2V0IHN0eWxlSGVhZGVyV2lkdGgoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZXhwYW5zaW9uUGFuZWxIZWFkZXI/LndpZHRoOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1leHBhbnNpb24tcGFuZWwtY29udGVudC1wYWRkaW5nLXRvcCcgKVxuXHRnZXQgc3R5bGVDb250ZW50UGFkZGluZ1RvcCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb250ZW50UGFkZGluZ1RvcCB8fCB0aGlzLmNvbnRlbnRQYWRkaW5nVmVydGljYWw7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWV4cGFuc2lvbi1wYW5lbC1jb250ZW50LXBhZGRpbmctYm90dG9tJyApXG5cdGdldCBzdHlsZUNvbnRlbnRQYWRkaW5nQm90dG9tKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nQm90dG9tIHx8IHRoaXMuY29udGVudFBhZGRpbmdWZXJ0aWNhbDsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQtcGFkZGluZy1sZWZ0JyApXG5cdGdldCBzdHlsZUNvbnRlbnRQYWRkaW5nTGVmdCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb250ZW50UGFkZGluZ0xlZnQgfHwgdGhpcy5jb250ZW50UGFkZGluZ0hvcml6b250YWw7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWV4cGFuc2lvbi1wYW5lbC1jb250ZW50LXBhZGRpbmctcmlnaHQnIClcblx0Z2V0IHN0eWxlQ29udGVudFBhZGRpbmdSaWdodCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb250ZW50UGFkZGluZ1JpZ2h0IHx8IHRoaXMuY29udGVudFBhZGRpbmdIb3Jpem9udGFsOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWV4cGFuc2lvbi1wYW5lbC0tZXhwYW5kZWQnIClcblx0Z2V0IGNsYXNzRXhwYW5kZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmV4cGFuZGVkOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWV4cGFuc2lvbi1wYW5lbC0tZHJhZ2dhYmxlJyApXG5cdGdldCBjbGFzc0RyYWdnYWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWV4cGFuc2lvbi1wYW5lbC0taGFzLXNjcm9sbC1iYXInIClcblx0Z2V0IGNsYXNzSGFzU2Nyb2xsQmFyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5oYXNTY3JvbGxCYXI7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtZXhwYW5zaW9uLXBhbmVsLS10aGVtZS1iYWNrZ3JvdW5kJyApXG5cdGdldCBjbGFzc1RoZW1lQmFja2dyb3VuZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMudGhlbWUgPT09ICdiYWNrZ3JvdW5kJzsgfVxuXG5cdEBDb250ZW50Q2hpbGRyZW4oIE5nY0V4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9IClcblx0cHVibGljIGV4cGFuc2lvblBhbmVsSGVhZGVyTGlzdDogUXVlcnlMaXN0PE5nY0V4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50Pjtcblx0QENvbnRlbnRDaGlsZHJlbiggTmdjRXhwYW5zaW9uUGFuZWxDb250ZW50Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9IClcblx0cHVibGljIGV4cGFuc2lvblBhbmVsQ29udGVudExpc3Q6IFF1ZXJ5TGlzdDxOZ2NFeHBhbnNpb25QYW5lbENvbnRlbnRDb21wb25lbnQ+O1xuXG5cdEBJbnB1dCggJ2Nka0RyYWcnICkgcHVibGljIGNka0RyYWc6IENka0RyYWc7XG5cdEBJbnB1dCggJ2Nka0RyYWdEaXNhYmxlZCcgKSBwdWJsaWMgY2RrRHJhZ0Rpc2FibGVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyByZW5kZXJEZWxheTogbnVtYmVyID0gMDtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRyYWdnYWJsZTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgaGFzU2Nyb2xsQmFyOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdWZXJ0aWNhbDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdIb3Jpem9udGFsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBjb250ZW50UGFkZGluZ1RvcDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdCb3R0b206IHN0cmluZztcblx0QElucHV0KCkgQENvZXJjZUNzc1BpeGVsKCkgcHVibGljIGNvbnRlbnRQYWRkaW5nTGVmdDogc3RyaW5nO1xuXHRASW5wdXQoKSBAQ29lcmNlQ3NzUGl4ZWwoKSBwdWJsaWMgY29udGVudFBhZGRpbmdSaWdodDogc3RyaW5nO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHRoZW1lOiBOZ2NJRXhwYW5zaW9uUGFuZWxUaGVtZSA9ICdkZWZhdWx0JztcblxuXHRAT3V0cHV0KCkgcHVibGljIGV4cGFuZGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0cHVibGljIGlzUmVuZGVyZWQ6IGJvb2xlYW47XG5cblx0Z2V0IGV4cGFuc2lvblBhbmVsSGVhZGVyKCk6IE5nY0V4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50IHtcblx0XHRyZXR1cm4gdGhpcy5leHBhbnNpb25QYW5lbEhlYWRlckxpc3QuZmlyc3Q7XG5cdH1cblxuXHRnZXQgZXhwYW5zaW9uUGFuZWxDb250ZW50KCk6IE5nY0V4cGFuc2lvblBhbmVsQ29udGVudENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIHRoaXMuZXhwYW5zaW9uUGFuZWxDb250ZW50TGlzdC5maXJzdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBlbGVtZW50UmVmXG5cdCAqIEBwYXJhbSB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IF9jZFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRjaGFuZ2VzLmV4cGFuZGVkICYmIHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZXhwYW5kKCkge1xuXHRcdHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdFx0dGhpcy5leHBhbmRlZENoYW5nZS5lbWl0KCB0cnVlICk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjb2xsYXBzZSgpIHtcblx0XHR0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG5cblx0XHR0aGlzLmV4cGFuZGVkQ2hhbmdlLmVtaXQoIGZhbHNlICk7XG5cdFx0dGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByaXZhdGUgX3JlbmRlcigpIHtcblx0XHRpZiAoIHRoaXMuaXNSZW5kZXJlZCB8fCAhdGhpcy5leHBhbmRlZCApIHJldHVybjtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMuaXNSZW5kZXJlZCA9IHRydWU7XG5cblx0XHRcdHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHRcdH0sIHRoaXMucmVuZGVyRGVsYXkgKTtcblx0fVxuXG59XG4iLCI8ZGl2IFxuICBjbGFzcz1cIm5nYy1leHBhbnNpb24tcGFuZWxfX2hlYWRlclwiXG4gIFtjbGFzcy5uZ2MtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXItLXN0aWNreV09XCJleHBhbnNpb25QYW5lbEhlYWRlcj8uc3RpY2t5XCJcbiAgW2NsYXNzLm5nYy1leHBhbnNpb24tcGFuZWxfX2hlYWRlci0tc3RyZXRjaF09XCJleHBhbnNpb25QYW5lbEhlYWRlcj8uc3RyZXRjaFwiPlxuXG4gIDxkaXYgXG4gICAgY2xhc3M9XCJuZ2MtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXJfX2RyYWctaGFuZGxlXCJcbiAgICBjZGtEcmFnSGFuZGxlIFxuICAgICpuZ0lmPVwiY2RrRHJhZyAhPT0gdW5kZWZpbmVkICYmICFjZGtEcmFnRGlzYWJsZWRcIj5cbiAgICA8bmdjLWljb24gbmFtZT1cImRyYWdcIiBzaXplPVwiMjBweFwiPjwvbmdjLWljb24+XG4gIDwvZGl2PlxuXG4gIDxkaXYgXG4gICAgY2xhc3M9XCJuZ2MtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXItd3JhcHBlclwiXG4gICAgKGNsaWNrKT1cImV4cGFuZGVkID8gY29sbGFwc2UoKSA6IGV4cGFuZCgpXCI+XG4gICAgXG4gICAgPG5nYy1pY29uIFxuICAgICAgY2xhc3M9XCJuZ2MtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXJfX2ljb25cIiBcbiAgICAgIG5hbWU9XCJjaGV2cm9uLXJpZ2h0XCI+XG4gICAgPC9uZ2MtaWNvbj5cblxuICAgIDxkaXYgY2xhc3M9XCJuZ2MtZXhwYW5zaW9uLXBhbmVsX19oZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJleHBhbnNpb25QYW5lbEhlYWRlcj8udGVtcGxhdGVSZWZcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBcbiAgY2xhc3M9XCJuZ2MtZXhwYW5zaW9uLXBhbmVsX19jb250ZW50XCJcbiAgbmdjU2Nyb2xsQmFyIFxuICAqbmdJZj1cImV4cGFuZGVkXCJcbiAgW0B0b2dnbGVIZWlnaHRdXG4gIFtzdXBwcmVzc109XCIhaGFzU2Nyb2xsQmFyXCI+XG5cbiAgPGRpdiBjbGFzcz1cIm5nYy1leHBhbnNpb24tcGFuZWxfX2NvbnRlbnQtd3JhcHBlclwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1JlbmRlcmVkXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZXhwYW5zaW9uUGFuZWxDb250ZW50Py50ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19