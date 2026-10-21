import { __decorate, __metadata } from "tslib";
import { Component, ContentChildren, QueryList, Input, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
import { Unsubscriber, CoerceBoolean } from '@core';
import { NgcBlockTruncateDirective } from '../../ngc-truncate/block-truncate/ngc-block-truncate.directive';
import { NgcMenuComponent } from '../../ngc-menu';
import { NgcTagComponent } from '../tag/ngc-tag.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../ngc-menu/menu-trigger-for/ngc-menu-trigger-for.directive";
import * as i3 from "../tag/ngc-tag.component";
import * as i4 from "angular-core";
let NgcTagListComponent = class NgcTagListComponent extends NgcBlockTruncateDirective {
    constructor() {
        super(...arguments);
        this.showMore = new EventEmitter();
    }
    get classWrapping() { return this.wrapping; }
    get isFixedLimit() {
        return this.wrapping || this.limit >= 1;
    }
    /**
     * @constructor
     * @overloading
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.length && !changes.wrapping)
            return;
        this.wrapping
            ? this.setMaxDisplay(0)
            : super.ngOnChanges(changes);
    }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        if (this.isFixedLimit)
            return;
        this.blocks = this.tags;
    }
};
NgcTagListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTagListComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NgcTagListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTagListComponent, selector: "ngc-tag-list", inputs: { tagColor: "tagColor", wrapping: "wrapping", moreMenu: "moreMenu" }, outputs: { showMore: "showMore" }, host: { properties: { "class.ngc-tag-list--wrapping": "this.classWrapping" }, classAttribute: "ngc-tag-list" }, queries: [{ propertyName: "tags", predicate: NgcTagComponent }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n\n<div class=\"ngc-tag-list-wrapper\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  <ngc-tag\n    class=\"ngc-tag--more\"\n    *ngIf=\"isTruncated\"\n    [truncate]=\"false\"\n    [color]=\"tagColor\"\n    [ngcMenuTriggerFor]=\"moreMenu\"\n    (click)=\"showMore?.emit()\">\n    +{{ moreDisplay | kUnit }}\n  </ngc-tag>\n</div>\n", styles: [".ngc-tag-list{display:flex}.ngc-tag-list.ngc-tag-list--wrapping .ngc-tag-list-wrapper{flex-wrap:wrap}.ngc-tag-list .ngc-tag-list-wrapper{display:flex;align-items:center;margin-left:-2.5px;margin-right:-2.5px}.ngc-tag-list .ngc-tag{margin:2.5px;height:32px;min-height:32px;max-height:32px;min-width:min-content;max-width:max-content;white-space:nowrap}.ngc-tag-list .ngc-tag--more{cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgcMenuTriggerForDirective, selector: "[ngcMenuTriggerFor]", inputs: ["panelClass", "backdropClass", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "programmatically", "autoFit", "disabled", "hasBackdrop", "closeOnClickOutside", "offsetX", "offsetY", "originX", "originY", "overlayX", "overlayY", "layoutDir", "position", "menuData", "ngcMenuTriggerFor"], outputs: ["menuInit", "menuOpened", "menuClosed", "menuBackdropPress"], exportAs: ["ngcMenuTriggerFor"] }, { kind: "component", type: i3.NgcTagComponent, selector: "ngc-tag", inputs: ["label", "labelColor", "color", "minimize", "truncate", "truncateLimitLine"] }, { kind: "pipe", type: i4.KUnitPipe, name: "kUnit" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTagListComponent.prototype, "wrapping", void 0);
NgcTagListComponent = __decorate([
    Unsubscriber()
], NgcTagListComponent);
export { NgcTagListComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTagListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-tag-list', host: { class: 'ngc-tag-list' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n\n<div class=\"ngc-tag-list-wrapper\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  <ngc-tag\n    class=\"ngc-tag--more\"\n    *ngIf=\"isTruncated\"\n    [truncate]=\"false\"\n    [color]=\"tagColor\"\n    [ngcMenuTriggerFor]=\"moreMenu\"\n    (click)=\"showMore?.emit()\">\n    +{{ moreDisplay | kUnit }}\n  </ngc-tag>\n</div>\n", styles: [".ngc-tag-list{display:flex}.ngc-tag-list.ngc-tag-list--wrapping .ngc-tag-list-wrapper{flex-wrap:wrap}.ngc-tag-list .ngc-tag-list-wrapper{display:flex;align-items:center;margin-left:-2.5px;margin-right:-2.5px}.ngc-tag-list .ngc-tag{margin:2.5px;height:32px;min-height:32px;max-height:32px;min-width:min-content;max-width:max-content;white-space:nowrap}.ngc-tag-list .ngc-tag--more{cursor:pointer}\n"] }]
        }], propDecorators: { classWrapping: [{
                type: HostBinding,
                args: ['class.ngc-tag-list--wrapping']
            }], tags: [{
                type: ContentChildren,
                args: [NgcTagComponent]
            }], tagColor: [{
                type: Input
            }], wrapping: [{
                type: Input
            }], moreMenu: [{
                type: Input
            }], showMore: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRhZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRhZy90YWctbGlzdC9uZ2MtdGFnLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdGFnL3RhZy1saXN0L25nYy10YWctbGlzdC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQ3JDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFDL0IsV0FBVyxFQUFFLE1BQU0sRUFDckMsWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRXBELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBV3BELElBQU0sbUJBQW1CLEdBQXpCLE1BQU0sbUJBQW9CLFNBQVEseUJBQXlCO0lBQTNEOztRQVdXLGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztLQTRCekU7SUFyQ0EsSUFDSSxhQUFhLEtBQWMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQVV0RCxJQUFJLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxXQUFXLENBQUUsT0FBc0I7UUFDbEMsSUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUFHLE9BQU87UUFFbkQsSUFBSSxDQUFDLFFBQVE7WUFDWixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUU7WUFDekIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUUsT0FBTyxDQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2pCLElBQUssSUFBSSxDQUFDLFlBQVk7WUFBRyxPQUFPO1FBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDOztnSEFyQ1csbUJBQW1CO29HQUFuQixtQkFBbUIsMFNBS2IsZUFBZSx5RUM3QmxDLHFhQWdCQTtBRGdCQztJQUFVLGFBQWEsRUFBRTs7cURBQTBCO0FBUnZDLG1CQUFtQjtJQVQvQixZQUFZLEVBQUU7R0FTRixtQkFBbUIsQ0F1Qy9CO1NBdkNZLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQVIvQixTQUFTOytCQUNHLGNBQWMsUUFHakIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGlCQUNsQixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUs1QyxhQUFhO3NCQURoQixXQUFXO3VCQUFFLDhCQUE4QjtnQkFHRCxJQUFJO3NCQUE5QyxlQUFlO3VCQUFFLGVBQWU7Z0JBRWpCLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFFVyxRQUFRO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcblx0SW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0QWZ0ZXJDb250ZW50SW5pdCwgSG9zdEJpbmRpbmcsIE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBVbnN1YnNjcmliZXIsIENvZXJjZUJvb2xlYW4gfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY0Jsb2NrVHJ1bmNhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9uZ2MtdHJ1bmNhdGUvYmxvY2stdHJ1bmNhdGUvbmdjLWJsb2NrLXRydW5jYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbmdjLW1lbnUnO1xuXG5pbXBvcnQgeyBOZ2NUYWdDb21wb25lbnQgfSBmcm9tICcuLi90YWcvbmdjLXRhZy5jb21wb25lbnQnO1xuXG5AVW5zdWJzY3JpYmVyKClcbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0XHQ6ICduZ2MtdGFnLWxpc3QnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy10YWctbGlzdC5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtdGFnLWxpc3Quc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy10YWctbGlzdCcgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NUYWdMaXN0Q29tcG9uZW50IGV4dGVuZHMgTmdjQmxvY2tUcnVuY2F0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLXRhZy1saXN0LS13cmFwcGluZycgKVxuXHRnZXQgY2xhc3NXcmFwcGluZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMud3JhcHBpbmc7IH1cblxuXHRAQ29udGVudENoaWxkcmVuKCBOZ2NUYWdDb21wb25lbnQgKSBwdWJsaWMgdGFnczogUXVlcnlMaXN0PE5nY1RhZ0NvbXBvbmVudD47XG5cblx0QElucHV0KCkgcHVibGljIHRhZ0NvbG9yOiBzdHJpbmc7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHdyYXBwaW5nOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgbW9yZU1lbnU6IE5nY01lbnVDb21wb25lbnQ7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBzaG93TW9yZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdGdldCBpc0ZpeGVkTGltaXQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMud3JhcHBpbmcgfHwgdGhpcy5saW1pdCA+PSAxO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAb3ZlcmxvYWRpbmdcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoICFjaGFuZ2VzLmxlbmd0aCAmJiAhY2hhbmdlcy53cmFwcGluZyApIHJldHVybjtcblxuXHRcdHRoaXMud3JhcHBpbmdcblx0XHRcdD8gdGhpcy5zZXRNYXhEaXNwbGF5KCAwIClcblx0XHRcdDogc3VwZXIubmdPbkNoYW5nZXMoIGNoYW5nZXMgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRpZiAoIHRoaXMuaXNGaXhlZExpbWl0ICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5ibG9ja3MgPSB0aGlzLnRhZ3M7XG5cdH1cblxufVxuIiwiPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwibmdjLXRhZy1saXN0LXdyYXBwZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgPG5nYy10YWdcbiAgICBjbGFzcz1cIm5nYy10YWctLW1vcmVcIlxuICAgICpuZ0lmPVwiaXNUcnVuY2F0ZWRcIlxuICAgIFt0cnVuY2F0ZV09XCJmYWxzZVwiXG4gICAgW2NvbG9yXT1cInRhZ0NvbG9yXCJcbiAgICBbbmdjTWVudVRyaWdnZXJGb3JdPVwibW9yZU1lbnVcIlxuICAgIChjbGljayk9XCJzaG93TW9yZT8uZW1pdCgpXCI+XG4gICAgK3t7IG1vcmVEaXNwbGF5IHwga1VuaXQgfX1cbiAgPC9uZ2MtdGFnPlxuPC9kaXY+XG4iXX0=