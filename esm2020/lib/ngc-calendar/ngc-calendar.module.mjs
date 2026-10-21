import { NgModule } from '@angular/core';
import { CoreModule, FormModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcCalendarDayViewComponent } from './day-view/ngc-calendar-day-view.component';
import { NgcCalendarWeekViewComponent } from './week-view/ngc-calendar-week-view.component';
import { NgcCalendarMonthViewComponent } from './month-view/ngc-calendar-month-view.component';
import { NgcCalendarComponent } from './ngc-calendar.component';
import { NgcIconModule } from '../ngc-icon';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcDatePickerModule } from '../ngc-date-picker';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcButtonToggleModule } from '../ngc-button-toggle';
import * as i0 from "@angular/core";
export class NgcCalendarModule {
}
NgcCalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcCalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcCalendarModule, declarations: [NgcCalendarDayViewComponent, NgcCalendarWeekViewComponent, NgcCalendarMonthViewComponent,
        NgcCalendarComponent], imports: [CoreModule, FormModule,
        NgcButtonModule, NgcIconModule, NgcTruncateModule, NgcTooltipModule,
        NgcDatePickerModule, NgcScrollBarModule, NgcButtonToggleModule], exports: [NgcCalendarDayViewComponent, NgcCalendarWeekViewComponent, NgcCalendarMonthViewComponent,
        NgcCalendarComponent] });
NgcCalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCalendarModule, imports: [CoreModule, FormModule,
        NgcButtonModule, NgcIconModule, NgcTruncateModule, NgcTooltipModule,
        NgcDatePickerModule, NgcScrollBarModule, NgcButtonToggleModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule, FormModule,
                        NgcButtonModule, NgcIconModule, NgcTruncateModule, NgcTooltipModule,
                        NgcDatePickerModule, NgcScrollBarModule, NgcButtonToggleModule,
                        // WGCButtonModule, WGCButtonToggleModule, WGCCardModule,
                        // WGCDatePickerModule, WGCFormFieldModule, WGCIconModule,
                        // WGCInlineInputModule, WGCMenuModule, WGCScrollBarModule,
                        // WGCTruncateModule, WGCTooltipModule,
                    ],
                    exports: [
                        NgcCalendarDayViewComponent, NgcCalendarWeekViewComponent, NgcCalendarMonthViewComponent,
                        NgcCalendarComponent,
                    ],
                    declarations: [
                        NgcCalendarDayViewComponent, NgcCalendarWeekViewComponent, NgcCalendarMonthViewComponent,
                        NgcCalendarComponent,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNhbGVuZGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWNhbGVuZGFyL25nYy1jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUcvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBd0I3RCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBTDVCLDJCQUEyQixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QjtRQUN4RixvQkFBb0IsYUFoQnBCLFVBQVUsRUFBRSxVQUFVO1FBRXRCLGVBQWUsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCO1FBQ25FLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixhQVE5RCwyQkFBMkIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkI7UUFDeEYsb0JBQW9COytHQVFULGlCQUFpQixZQXBCNUIsVUFBVSxFQUFFLFVBQVU7UUFFdEIsZUFBZSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0I7UUFDbkUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCOzJGQWlCbkQsaUJBQWlCO2tCQXRCN0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsVUFBVSxFQUFFLFVBQVU7d0JBRXRCLGVBQWUsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCO3dCQUNuRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUI7d0JBRTlELHlEQUF5RDt3QkFDekQsMERBQTBEO3dCQUMxRCwyREFBMkQ7d0JBQzNELHVDQUF1QztxQkFDdkM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLDJCQUEyQixFQUFFLDRCQUE0QixFQUFFLDZCQUE2Qjt3QkFDeEYsb0JBQW9CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCO3dCQUN4RixvQkFBb0I7cUJBQ3BCO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29yZU1vZHVsZSwgRm9ybU1vZHVsZSB9IGZyb20gJ0Bjb3JlJztcblxuXG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcbmltcG9ydCB7IE5nY0NhbGVuZGFyRGF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vZGF5LXZpZXcvbmdjLWNhbGVuZGFyLWRheS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi93ZWVrLXZpZXcvbmdjLWNhbGVuZGFyLXdlZWstdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjQ2FsZW5kYXJNb250aFZpZXdDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXZpZXcvbmdjLWNhbGVuZGFyLW1vbnRoLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0NhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtaWNvbic7XG5pbXBvcnQgeyBOZ2NUcnVuY2F0ZU1vZHVsZSB9IGZyb20gJy4uL25nYy10cnVuY2F0ZS9uZ2MtdHJ1bmNhdGUubW9kdWxlJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2NEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWRhdGUtcGlja2VyJztcbmltcG9ydCB7IE5nY1Njcm9sbEJhck1vZHVsZSB9IGZyb20gJy4uL25nYy1zY3JvbGwtYmFyJztcbmltcG9ydCB7IE5nY0J1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJy4uL25nYy1idXR0b24tdG9nZ2xlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvcmVNb2R1bGUsIEZvcm1Nb2R1bGUsXG5cblx0XHROZ2NCdXR0b25Nb2R1bGUsIE5nY0ljb25Nb2R1bGUsIE5nY1RydW5jYXRlTW9kdWxlLCBOZ2NUb29sdGlwTW9kdWxlLFxuXHRcdE5nY0RhdGVQaWNrZXJNb2R1bGUsIE5nY1Njcm9sbEJhck1vZHVsZSwgTmdjQnV0dG9uVG9nZ2xlTW9kdWxlLFxuXG5cdFx0Ly8gV0dDQnV0dG9uTW9kdWxlLCBXR0NCdXR0b25Ub2dnbGVNb2R1bGUsIFdHQ0NhcmRNb2R1bGUsXG5cdFx0Ly8gV0dDRGF0ZVBpY2tlck1vZHVsZSwgV0dDRm9ybUZpZWxkTW9kdWxlLCBXR0NJY29uTW9kdWxlLFxuXHRcdC8vIFdHQ0lubGluZUlucHV0TW9kdWxlLCBXR0NNZW51TW9kdWxlLCBXR0NTY3JvbGxCYXJNb2R1bGUsXG5cdFx0Ly8gV0dDVHJ1bmNhdGVNb2R1bGUsIFdHQ1Rvb2x0aXBNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHROZ2NDYWxlbmRhckRheVZpZXdDb21wb25lbnQsXHROZ2NDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50LFx0TmdjQ2FsZW5kYXJNb250aFZpZXdDb21wb25lbnQsXG5cdFx0TmdjQ2FsZW5kYXJDb21wb25lbnQsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdE5nY0NhbGVuZGFyRGF5Vmlld0NvbXBvbmVudCxcdE5nY0NhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQsXHROZ2NDYWxlbmRhck1vbnRoVmlld0NvbXBvbmVudCxcblx0XHROZ2NDYWxlbmRhckNvbXBvbmVudCxcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjQ2FsZW5kYXJNb2R1bGUge31cbiJdfQ==