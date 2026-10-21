import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ContentChild, ViewChild, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { DetectScrollDirective, CoerceBoolean } from '@core';
import { NgcScrollBarDirective } from '../../ngc-scroll-bar';
import { NgcPageHeaderDirective } from '../page-header/ngc-page-header.directive';
import { NgcPageContentDirective } from '../page-content/ngc-page-content.directive';
import * as i0 from "@angular/core";
import * as i1 from "angular-core";
import * as i2 from "../../ngc-scroll-bar/ngc-scroll-bar/ngc-scroll-bar.directive";
export class NgcPageComponent {
    get styleHeaderPaddingTop() { return this.headerPaddingTop; }
    get styleHeaderPaddingBottom() { return this.headerPaddingBottom; }
    get styleHeaderPaddingLeft() { return this.headerPaddingLeft; }
    get styleHeaderPaddingRight() { return this.headerPaddingRight; }
    get styleContentPaddingTop() { return this.contentPaddingTop; }
    get styleContentPaddingBottom() { return this.contentPaddingBottom; }
    get styleContentPaddingLeft() { return this.contentPaddingLeft; }
    get styleContentPaddingRight() { return this.contentPaddingRight; }
    get classStretch() { return this.stretch; }
    get classScrolling() { return this.isScrolling; }
    get headerPaddingTop() {
        return this.pageHeader?.paddingTop || this.pageHeader?.paddingVertical;
    }
    get headerPaddingBottom() {
        return this.pageHeader?.paddingBottom || this.pageHeader?.paddingVertical;
    }
    get headerPaddingLeft() {
        return this.pageHeader?.paddingLeft || this.pageHeader?.paddingHorizontal;
    }
    get headerPaddingRight() {
        return this.pageHeader?.paddingRight || this.pageHeader?.paddingHorizontal;
    }
    get contentPaddingTop() {
        return this.pageContent?.paddingTop || this.pageContent?.paddingVertical;
    }
    get contentPaddingBottom() {
        return this.pageContent?.paddingBottom || this.pageContent?.paddingVertical;
    }
    get contentPaddingLeft() {
        return this.pageContent?.paddingLeft || this.pageContent?.paddingHorizontal;
    }
    get contentPaddingRight() {
        return this.pageContent?.paddingRight || this.pageContent?.paddingHorizontal;
    }
}
NgcPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcPageComponent, selector: "ngc-page", inputs: { stretch: "stretch", suppressScrollX: "suppressScrollX", suppressScrollY: "suppressScrollY", scrollBarMode: "scrollBarMode" }, host: { properties: { "style.--header-padding-top": "this.styleHeaderPaddingTop", "style.--header-padding-bottom": "this.styleHeaderPaddingBottom", "style.--header-padding-left": "this.styleHeaderPaddingLeft", "style.--header-padding-right": "this.styleHeaderPaddingRight", "style.--content-padding-top": "this.styleContentPaddingTop", "style.--content-padding-bottom": "this.styleContentPaddingBottom", "style.--content-padding-left": "this.styleContentPaddingLeft", "style.--content-padding-right": "this.styleContentPaddingRight", "class.ngc-page--stretch": "this.classStretch", "class.ngc-page--scrolling": "this.classScrolling" }, classAttribute: "ngc-page" }, queries: [{ propertyName: "pageHeader", first: true, predicate: NgcPageHeaderDirective, descendants: true }, { propertyName: "pageContent", first: true, predicate: NgcPageContentDirective, descendants: true }], viewQueries: [{ propertyName: "scroller", first: true, predicate: DetectScrollDirective, descendants: true }, { propertyName: "scrollBar", first: true, predicate: NgcScrollBarDirective, descendants: true }], ngImport: i0, template: "<div class=\"ngc-page__header\" [class.ngc-page__header--has-divider]=\"pageHeader?.divider\">\n\t<ng-content select=\"[ngcPageHeader]\"></ng-content>\n</div>\n\n<div class=\"ngc-page__content\" ngcScrollBar detectScroll [suppressScrollX]=\"suppressScrollX\"\n\t[suppressScrollY]=\"suppressScrollY\" [mode]=\"scrollBarMode\" (scrolling)=\"isScrolling = $event?.scrollTop > 0\">\n\t<ng-content select=\"[ngcPageContent]\"></ng-content>\n</div>", styles: [".ngc-page{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0}.ngc-page.ngc-page--stretch{max-width:100vw;max-height:100vh}.ngc-page.ngc-page--stretch>.ngc-page__header{position:relative;z-index:var(--ngc-z-level-1, 100)}.ngc-page.ngc-page--stretch>.ngc-page__content>[ngcPageContent]{width:100%;min-width:0;max-width:100%;height:100%;min-height:0;max-height:100%}.ngc-page.ngc-page--scrolling>.ngc-page__header{background-color:var(--ngc-color-neutral-white, #fff);box-shadow:var(--ngc-box-shadow-scroll-vertical, 0 14px 24px -4px rgba(187, 185, 185, .4))}.ngc-page>.ngc-page__header.ngc-page__header--has-divider{border-bottom:1px solid var(--ngc-color-neutral-border-default, #e4e4e6)}.ngc-page>.ngc-page__header>[ngcPageHeader]{padding-top:var(--header-padding-top, 20px);padding-bottom:var(--header-padding-bottom, 20px);padding-left:var(--header-padding-left, 30px);padding-right:var(--header-padding-right, 30px)}.ngc-page>.ngc-page__content{width:100%;min-width:0;height:100%;min-height:0}.ngc-page>.ngc-page__content>[ngcPageContent]{padding-top:var(--content-padding-top, 0);padding-bottom:var(--content-padding-bottom, 0);padding-left:var(--content-padding-left, 30px);padding-right:var(--content-padding-right, 30px)}\n"], dependencies: [{ kind: "directive", type: i1.DetectScrollDirective, selector: "[detectScroll]", inputs: ["delay", "offset"], outputs: ["scrolling", "scrollingX", "scrollingY", "scrollingUp", "scrollingDown", "scrollingLeft", "scrollingRight", "scrollReachTop", "scrollReachBottom", "scrollReachLeft", "scrollReachRight"], exportAs: ["detectScroll"] }, { kind: "directive", type: i2.NgcScrollBarDirective, selector: "[ngcScrollBar]", exportAs: ["ngcScrollBar"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPageComponent.prototype, "stretch", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPageComponent.prototype, "suppressScrollX", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcPageComponent.prototype, "suppressScrollY", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-page', host: { class: 'ngc-page' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-page__header\" [class.ngc-page__header--has-divider]=\"pageHeader?.divider\">\n\t<ng-content select=\"[ngcPageHeader]\"></ng-content>\n</div>\n\n<div class=\"ngc-page__content\" ngcScrollBar detectScroll [suppressScrollX]=\"suppressScrollX\"\n\t[suppressScrollY]=\"suppressScrollY\" [mode]=\"scrollBarMode\" (scrolling)=\"isScrolling = $event?.scrollTop > 0\">\n\t<ng-content select=\"[ngcPageContent]\"></ng-content>\n</div>", styles: [".ngc-page{display:flex;flex-direction:column;width:100%;min-width:0;height:100%;min-height:0}.ngc-page.ngc-page--stretch{max-width:100vw;max-height:100vh}.ngc-page.ngc-page--stretch>.ngc-page__header{position:relative;z-index:var(--ngc-z-level-1, 100)}.ngc-page.ngc-page--stretch>.ngc-page__content>[ngcPageContent]{width:100%;min-width:0;max-width:100%;height:100%;min-height:0;max-height:100%}.ngc-page.ngc-page--scrolling>.ngc-page__header{background-color:var(--ngc-color-neutral-white, #fff);box-shadow:var(--ngc-box-shadow-scroll-vertical, 0 14px 24px -4px rgba(187, 185, 185, .4))}.ngc-page>.ngc-page__header.ngc-page__header--has-divider{border-bottom:1px solid var(--ngc-color-neutral-border-default, #e4e4e6)}.ngc-page>.ngc-page__header>[ngcPageHeader]{padding-top:var(--header-padding-top, 20px);padding-bottom:var(--header-padding-bottom, 20px);padding-left:var(--header-padding-left, 30px);padding-right:var(--header-padding-right, 30px)}.ngc-page>.ngc-page__content{width:100%;min-width:0;height:100%;min-height:0}.ngc-page>.ngc-page__content>[ngcPageContent]{padding-top:var(--content-padding-top, 0);padding-bottom:var(--content-padding-bottom, 0);padding-left:var(--content-padding-left, 30px);padding-right:var(--content-padding-right, 30px)}\n"] }]
        }], propDecorators: { styleHeaderPaddingTop: [{
                type: HostBinding,
                args: ['style.--header-padding-top']
            }], styleHeaderPaddingBottom: [{
                type: HostBinding,
                args: ['style.--header-padding-bottom']
            }], styleHeaderPaddingLeft: [{
                type: HostBinding,
                args: ['style.--header-padding-left']
            }], styleHeaderPaddingRight: [{
                type: HostBinding,
                args: ['style.--header-padding-right']
            }], styleContentPaddingTop: [{
                type: HostBinding,
                args: ['style.--content-padding-top']
            }], styleContentPaddingBottom: [{
                type: HostBinding,
                args: ['style.--content-padding-bottom']
            }], styleContentPaddingLeft: [{
                type: HostBinding,
                args: ['style.--content-padding-left']
            }], styleContentPaddingRight: [{
                type: HostBinding,
                args: ['style.--content-padding-right']
            }], classStretch: [{
                type: HostBinding,
                args: ['class.ngc-page--stretch']
            }], classScrolling: [{
                type: HostBinding,
                args: ['class.ngc-page--scrolling']
            }], scroller: [{
                type: ViewChild,
                args: [DetectScrollDirective]
            }], scrollBar: [{
                type: ViewChild,
                args: [NgcScrollBarDirective]
            }], pageHeader: [{
                type: ContentChild,
                args: [NgcPageHeaderDirective]
            }], pageContent: [{
                type: ContentChild,
                args: [NgcPageContentDirective]
            }], stretch: [{
                type: Input
            }], suppressScrollX: [{
                type: Input
            }], suppressScrollY: [{
                type: Input
            }], scrollBarMode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtcGFnZS9wYWdlL25nYy1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXBhZ2UvcGFnZS9uZ2MtcGFnZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFDbkMsWUFBWSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFDaEQsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7O0FBVXJGLE1BQU0sT0FBTyxnQkFBZ0I7SUFFNUIsSUFDSSxxQkFBcUIsS0FBYSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFckUsSUFDSSx3QkFBd0IsS0FBYSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFFM0UsSUFDSSxzQkFBc0IsS0FBYSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFdkUsSUFDSSx1QkFBdUIsS0FBYSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFFekUsSUFDSSxzQkFBc0IsS0FBYSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFdkUsSUFDSSx5QkFBeUIsS0FB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LFNBQVM7c0JBQW5ELFNBQVM7dUJBQUUscUJBQXFCO2dCQUVjLFVBQVU7c0JBQXhELFlBQVk7dUJBQUUsc0JBQXNCO2dCQUNXLFdBQVc7c0JBQTFELFlBQVk7dUJBQUUsdUJBQXVCO2dCQUVMLE9BQU87c0JBQXZDLEtBQUs7Z0JBQzJCLGVBQWU7c0JBQS9DLEtBQUs7Z0JBQzJCLGVBQWU7c0JBQS9DLEtBQUs7Z0JBQ1UsYUFBYTtzQkFBNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LFxuXHRDb250ZW50Q2hpbGQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZXRlY3RTY3JvbGxEaXJlY3RpdmUsIENvZXJjZUJvb2xlYW4gfSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXJEaXJlY3RpdmUsIElOZ2NTY3JvbGxCYXJNb2RlIH0gZnJvbSAnLi4vLi4vbmdjLXNjcm9sbC1iYXInO1xuaW1wb3J0IHsgTmdjUGFnZUhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uL3BhZ2UtaGVhZGVyL25nYy1wYWdlLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjUGFnZUNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi9wYWdlLWNvbnRlbnQvbmdjLXBhZ2UtY29udGVudC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLXBhZ2UnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1wYWdlLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy1wYWdlLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtcGFnZScgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NQYWdlQ29tcG9uZW50IHtcblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWhlYWRlci1wYWRkaW5nLXRvcCcgKVxuXHRnZXQgc3R5bGVIZWFkZXJQYWRkaW5nVG9wKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmhlYWRlclBhZGRpbmdUb3A7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWhlYWRlci1wYWRkaW5nLWJvdHRvbScgKVxuXHRnZXQgc3R5bGVIZWFkZXJQYWRkaW5nQm90dG9tKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmhlYWRlclBhZGRpbmdCb3R0b207IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWhlYWRlci1wYWRkaW5nLWxlZnQnIClcblx0Z2V0IHN0eWxlSGVhZGVyUGFkZGluZ0xlZnQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaGVhZGVyUGFkZGluZ0xlZnQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWhlYWRlci1wYWRkaW5nLXJpZ2h0JyApXG5cdGdldCBzdHlsZUhlYWRlclBhZGRpbmdSaWdodCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5oZWFkZXJQYWRkaW5nUmlnaHQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWNvbnRlbnQtcGFkZGluZy10b3AnIClcblx0Z2V0IHN0eWxlQ29udGVudFBhZGRpbmdUb3AoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29udGVudFBhZGRpbmdUb3A7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWNvbnRlbnQtcGFkZGluZy1ib3R0b20nIClcblx0Z2V0IHN0eWxlQ29udGVudFBhZGRpbmdCb3R0b20oKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29udGVudFBhZGRpbmdCb3R0b207IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWNvbnRlbnQtcGFkZGluZy1sZWZ0JyApXG5cdGdldCBzdHlsZUNvbnRlbnRQYWRkaW5nTGVmdCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb250ZW50UGFkZGluZ0xlZnQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWNvbnRlbnQtcGFkZGluZy1yaWdodCcgKVxuXHRnZXQgc3R5bGVDb250ZW50UGFkZGluZ1JpZ2h0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbnRlbnRQYWRkaW5nUmlnaHQ7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtcGFnZS0tc3RyZXRjaCcgKVxuXHRnZXQgY2xhc3NTdHJldGNoKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5zdHJldGNoOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLXBhZ2UtLXNjcm9sbGluZycgKVxuXHRnZXQgY2xhc3NTY3JvbGxpbmcoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzU2Nyb2xsaW5nOyB9XG5cblx0QFZpZXdDaGlsZCggRGV0ZWN0U2Nyb2xsRGlyZWN0aXZlICkgcHVibGljIHNjcm9sbGVyOiBEZXRlY3RTY3JvbGxEaXJlY3RpdmU7XG5cdEBWaWV3Q2hpbGQoIE5nY1Njcm9sbEJhckRpcmVjdGl2ZSApIHB1YmxpYyBzY3JvbGxCYXI6IE5nY1Njcm9sbEJhckRpcmVjdGl2ZTtcblxuXHRAQ29udGVudENoaWxkKCBOZ2NQYWdlSGVhZGVyRGlyZWN0aXZlICkgcHVibGljIHBhZ2VIZWFkZXI6IE5nY1BhZ2VIZWFkZXJEaXJlY3RpdmU7XG5cdEBDb250ZW50Q2hpbGQoIE5nY1BhZ2VDb250ZW50RGlyZWN0aXZlICkgcHVibGljIHBhZ2VDb250ZW50OiBOZ2NQYWdlQ29udGVudERpcmVjdGl2ZTtcblxuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBzdHJldGNoOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBzdXBwcmVzc1Njcm9sbFg6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHN1cHByZXNzU2Nyb2xsWTogYm9vbGVhbjtcblx0QElucHV0KCkgcHVibGljIHNjcm9sbEJhck1vZGU6IElOZ2NTY3JvbGxCYXJNb2RlO1xuXG5cdHB1YmxpYyBpc1Njcm9sbGluZzogYm9vbGVhbjtcblxuXHRnZXQgaGVhZGVyUGFkZGluZ1RvcCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VIZWFkZXI/LnBhZGRpbmdUb3AgfHwgdGhpcy5wYWdlSGVhZGVyPy5wYWRkaW5nVmVydGljYWw7XG5cdH1cblxuXHRnZXQgaGVhZGVyUGFkZGluZ0JvdHRvbSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VIZWFkZXI/LnBhZGRpbmdCb3R0b20gfHwgdGhpcy5wYWdlSGVhZGVyPy5wYWRkaW5nVmVydGljYWw7XG5cdH1cblxuXHRnZXQgaGVhZGVyUGFkZGluZ0xlZnQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlSGVhZGVyPy5wYWRkaW5nTGVmdCB8fCB0aGlzLnBhZ2VIZWFkZXI/LnBhZGRpbmdIb3Jpem9udGFsO1xuXHR9XG5cblx0Z2V0IGhlYWRlclBhZGRpbmdSaWdodCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VIZWFkZXI/LnBhZGRpbmdSaWdodCB8fCB0aGlzLnBhZ2VIZWFkZXI/LnBhZGRpbmdIb3Jpem9udGFsO1xuXHR9XG5cblx0Z2V0IGNvbnRlbnRQYWRkaW5nVG9wKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZUNvbnRlbnQ/LnBhZGRpbmdUb3AgfHwgdGhpcy5wYWdlQ29udGVudD8ucGFkZGluZ1ZlcnRpY2FsO1xuXHR9XG5cblx0Z2V0IGNvbnRlbnRQYWRkaW5nQm90dG9tKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZUNvbnRlbnQ/LnBhZGRpbmdCb3R0b20gfHwgdGhpcy5wYWdlQ29udGVudD8ucGFkZGluZ1ZlcnRpY2FsO1xuXHR9XG5cblx0Z2V0IGNvbnRlbnRQYWRkaW5nTGVmdCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VDb250ZW50Py5wYWRkaW5nTGVmdCB8fCB0aGlzLnBhZ2VDb250ZW50Py5wYWRkaW5nSG9yaXpvbnRhbDtcblx0fVxuXG5cdGdldCBjb250ZW50UGFkZGluZ1JpZ2h0KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZUNvbnRlbnQ/LnBhZGRpbmdSaWdodCB8fCB0aGlzLnBhZ2VDb250ZW50Py5wYWRkaW5nSG9yaXpvbnRhbDtcblx0fVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibmdjLXBhZ2VfX2hlYWRlclwiIFtjbGFzcy5uZ2MtcGFnZV9faGVhZGVyLS1oYXMtZGl2aWRlcl09XCJwYWdlSGVhZGVyPy5kaXZpZGVyXCI+XG5cdDxuZy1jb250ZW50IHNlbGVjdD1cIltuZ2NQYWdlSGVhZGVyXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibmdjLXBhZ2VfX2NvbnRlbnRcIiBuZ2NTY3JvbGxCYXIgZGV0ZWN0U2Nyb2xsIFtzdXBwcmVzc1Njcm9sbFhdPVwic3VwcHJlc3NTY3JvbGxYXCJcblx0W3N1cHByZXNzU2Nyb2xsWV09XCJzdXBwcmVzc1Njcm9sbFlcIiBbbW9kZV09XCJzY3JvbGxCYXJNb2RlXCIgKHNjcm9sbGluZyk9XCJpc1Njcm9sbGluZyA9ICRldmVudD8uc2Nyb2xsVG9wID4gMFwiPlxuXHQ8bmctY29udGVudCBzZWxlY3Q9XCJbbmdjUGFnZUNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+Il19