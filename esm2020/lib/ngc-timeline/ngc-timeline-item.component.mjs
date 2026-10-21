import { Component, Input, Directive, Optional, ContentChild, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { NgcTimelineComponent } from './ngc-timeline.component';
import * as i0 from "@angular/core";
import * as i1 from "./ngc-timeline.component";
import * as i2 from "@angular/common";
export class NgcTimelineDotDirective {
}
NgcTimelineDotDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineDotDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NgcTimelineDotDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcTimelineDotDirective, selector: "[ngcTimelineDot]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineDotDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngcTimelineDot]'
                }]
        }] });
export class NgcTimelineSideDirective {
}
NgcTimelineSideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineSideDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NgcTimelineSideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcTimelineSideDirective, selector: "[ngcTimelineSide]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineSideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngcTimelineSide]'
                }]
        }] });
export class NgcTimelineItemComponent {
    constructor(timeline) {
        this.timeline = timeline;
        this.color = 'var(--ngc-color-primary-default)';
        this.selected = false;
    }
    get classActive() { return this.selected; }
}
NgcTimelineItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineItemComponent, deps: [{ token: i1.NgcTimelineComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component });
NgcTimelineItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTimelineItemComponent, selector: "ngc-timeline-item", inputs: { color: "color", time: "time", selected: "selected" }, host: { properties: { "class.ngc-timeline-item--active": "this.classActive" }, classAttribute: "ngc-timeline-item" }, queries: [{ propertyName: "customDot", first: true, predicate: NgcTimelineDotDirective, descendants: true }], ngImport: i0, template: "<div class=\"ngc-timeline-item__side\">\n  <span class=\"ngc-timeline-item__time\" *ngIf=\"time\">{{ time }}</span>\n  <ng-content select=\"[ngcTimelineSide]\"></ng-content>\n</div>\n\n<div class=\"ngc-timeline-item__axis\">\n  <div class=\"ngc-timeline-item__line\"></div>\n  <div class=\"ngc-timeline-item__dot\" [class.ngc-timeline-item__dot--custom]=\"!!customDot\" [style.border-color]=\"!!customDot ? null : color\" [style.background-color]=\"!!customDot ? null : color\">\n    <ng-content select=\"[ngcTimelineDot]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"ngc-timeline-item__content\">\n  <ng-content></ng-content>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-timeline-item', host: {
                        'class': 'ngc-timeline-item'
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-timeline-item__side\">\n  <span class=\"ngc-timeline-item__time\" *ngIf=\"time\">{{ time }}</span>\n  <ng-content select=\"[ngcTimelineSide]\"></ng-content>\n</div>\n\n<div class=\"ngc-timeline-item__axis\">\n  <div class=\"ngc-timeline-item__line\"></div>\n  <div class=\"ngc-timeline-item__dot\" [class.ngc-timeline-item__dot--custom]=\"!!customDot\" [style.border-color]=\"!!customDot ? null : color\" [style.background-color]=\"!!customDot ? null : color\">\n    <ng-content select=\"[ngcTimelineDot]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"ngc-timeline-item__content\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgcTimelineComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { color: [{
                type: Input
            }], time: [{
                type: Input
            }], selected: [{
                type: Input
            }], classActive: [{
                type: HostBinding,
                args: ['class.ngc-timeline-item--active']
            }], customDot: [{
                type: ContentChild,
                args: [NgcTimelineDotDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdGltZWxpbmUvbmdjLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdGltZWxpbmUvbmdjLXRpbWVsaW5lLWl0ZW0uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLaEUsTUFBTSxPQUFPLHVCQUF1Qjs7b0hBQXZCLHVCQUF1Qjt3R0FBdkIsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBSG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7O0FBTUQsTUFBTSxPQUFPLHdCQUF3Qjs7cUhBQXhCLHdCQUF3Qjt5R0FBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBSHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7O0FBWUQsTUFBTSxPQUFPLHdCQUF3QjtJQVVuQyxZQUErQixRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQVQ3QyxVQUFLLEdBQVcsa0NBQWtDLENBQUM7UUFFbkQsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU9zQixDQUFDO0lBTGpFLElBQ0ksV0FBVyxLQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O3FIQU56Qyx3QkFBd0I7eUdBQXhCLHdCQUF3QixzUkFRckIsdUJBQXVCLGdEQzlCdkMsa29CQWVBOzJGRE9hLHdCQUF3QjtrQkFUcEMsU0FBUzsrQkFDRSxtQkFBbUIsUUFFdkI7d0JBQ0osT0FBTyxFQUFFLG1CQUFtQjtxQkFDN0IsaUJBQ2MsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs7MEJBWWxDLFFBQVE7NENBVEwsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLGlDQUFpQztnQkFHQSxTQUFTO3NCQUF0RCxZQUFZO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIERpcmVjdGl2ZSwgT3B0aW9uYWwsIENvbnRlbnRDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdjVGltZWxpbmVDb21wb25lbnQgfSBmcm9tICcuL25nYy10aW1lbGluZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdjVGltZWxpbmVEb3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ2NUaW1lbGluZURvdERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdjVGltZWxpbmVTaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdjVGltZWxpbmVTaWRlRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYy10aW1lbGluZS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nYy10aW1lbGluZS1pdGVtLmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ25nYy10aW1lbGluZS1pdGVtJ1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NUaW1lbGluZUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICd2YXIoLS1uZ2MtY29sb3ItcHJpbWFyeS1kZWZhdWx0KSc7XG4gIEBJbnB1dCgpIHB1YmxpYyB0aW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubmdjLXRpbWVsaW5lLWl0ZW0tLWFjdGl2ZScpXG4gIGdldCBjbGFzc0FjdGl2ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7IH1cblxuICBAQ29udGVudENoaWxkKE5nY1RpbWVsaW5lRG90RGlyZWN0aXZlKSBwdWJsaWMgY3VzdG9tRG90PzogTmdjVGltZWxpbmVEb3REaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIHRpbWVsaW5lOiBOZ2NUaW1lbGluZUNvbXBvbmVudCkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ2MtdGltZWxpbmUtaXRlbV9fc2lkZVwiPlxuICA8c3BhbiBjbGFzcz1cIm5nYy10aW1lbGluZS1pdGVtX190aW1lXCIgKm5nSWY9XCJ0aW1lXCI+e3sgdGltZSB9fTwvc3Bhbj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25nY1RpbWVsaW5lU2lkZV1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm5nYy10aW1lbGluZS1pdGVtX19heGlzXCI+XG4gIDxkaXYgY2xhc3M9XCJuZ2MtdGltZWxpbmUtaXRlbV9fbGluZVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibmdjLXRpbWVsaW5lLWl0ZW1fX2RvdFwiIFtjbGFzcy5uZ2MtdGltZWxpbmUtaXRlbV9fZG90LS1jdXN0b21dPVwiISFjdXN0b21Eb3RcIiBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cIiEhY3VzdG9tRG90ID8gbnVsbCA6IGNvbG9yXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiISFjdXN0b21Eb3QgPyBudWxsIDogY29sb3JcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbmdjVGltZWxpbmVEb3RdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibmdjLXRpbWVsaW5lLWl0ZW1fX2NvbnRlbnRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=