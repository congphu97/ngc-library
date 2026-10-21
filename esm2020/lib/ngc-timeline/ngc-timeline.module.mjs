import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcTimelineComponent } from './ngc-timeline.component';
import { NgcTimelineItemComponent, NgcTimelineDotDirective, NgcTimelineSideDirective } from './ngc-timeline-item.component';
import * as i0 from "@angular/core";
export class NgcTimelineModule {
}
NgcTimelineModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcTimelineModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineModule, declarations: [NgcTimelineComponent,
        NgcTimelineItemComponent,
        NgcTimelineDotDirective,
        NgcTimelineSideDirective], imports: [CommonModule], exports: [NgcTimelineComponent,
        NgcTimelineItemComponent,
        NgcTimelineDotDirective,
        NgcTimelineSideDirective] });
NgcTimelineModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTimelineModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgcTimelineComponent,
                        NgcTimelineItemComponent,
                        NgcTimelineDotDirective,
                        NgcTimelineSideDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        NgcTimelineComponent,
                        NgcTimelineItemComponent,
                        NgcTimelineDotDirective,
                        NgcTimelineSideDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRpbWVsaW5lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRpbWVsaW5lL25nYy10aW1lbGluZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBbUI1SCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBZjFCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHdCQUF3QixhQUd4QixZQUFZLGFBR1osb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsd0JBQXdCOytHQUdmLGlCQUFpQixZQVQxQixZQUFZOzJGQVNILGlCQUFpQjtrQkFqQjdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3QjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nY1RpbWVsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtdGltZWxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY1RpbWVsaW5lSXRlbUNvbXBvbmVudCwgTmdjVGltZWxpbmVEb3REaXJlY3RpdmUsIE5nY1RpbWVsaW5lU2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vbmdjLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdjVGltZWxpbmVDb21wb25lbnQsXG4gICAgTmdjVGltZWxpbmVJdGVtQ29tcG9uZW50LFxuICAgIE5nY1RpbWVsaW5lRG90RGlyZWN0aXZlLFxuICAgIE5nY1RpbWVsaW5lU2lkZURpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ2NUaW1lbGluZUNvbXBvbmVudCxcbiAgICBOZ2NUaW1lbGluZUl0ZW1Db21wb25lbnQsXG4gICAgTmdjVGltZWxpbmVEb3REaXJlY3RpdmUsXG4gICAgTmdjVGltZWxpbmVTaWRlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdjVGltZWxpbmVNb2R1bGUge31cbiJdfQ==