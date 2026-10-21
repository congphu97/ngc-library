import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CoreModule } from '@core';
import { NgcAvatarModule } from '../ngc-avatar';
import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcMenuModule } from '../ngc-menu';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcSearchBoxModule } from '../ngc-search-box';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcMemberComponent } from './ngc-member/ngc-member.component';
import { NgcMemberPickerDirective } from './ngc-member-picker/ngc-member-picker.directive';
import { NgcMemberPickerComponent } from './ngc-member-picker/ngc-member-picker.component';
import { NgcMemberListComponent } from './ngc-member-list/ngc-member-list.component';
import { NgcConfirmModule } from '../ngc-confirm';
import { NgcTabsModule } from '../ngc-tabs';
import * as i0 from "@angular/core";
export class NgcMemberPickerModule {
}
NgcMemberPickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMemberPickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcMemberPickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcMemberPickerModule, declarations: [NgcMemberComponent, NgcMemberListComponent, NgcMemberPickerDirective, NgcMemberPickerComponent], imports: [ScrollingModule, OverlayModule, PortalModule,
        CoreModule,
        NgcAvatarModule, NgcButtonModule, NgcMenuModule,
        NgcIconModule, NgcTooltipModule, NgcSearchBoxModule,
        NgcTruncateModule, NgcTabsModule, NgcScrollBarModule,
        NgcConfirmModule], exports: [NgcMemberComponent, NgcMemberListComponent, NgcMemberPickerDirective, NgcMemberPickerComponent] });
NgcMemberPickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMemberPickerModule, imports: [ScrollingModule, OverlayModule, PortalModule,
        CoreModule,
        NgcAvatarModule, NgcButtonModule, NgcMenuModule,
        NgcIconModule, NgcTooltipModule, NgcSearchBoxModule,
        NgcTruncateModule, NgcTabsModule, NgcScrollBarModule,
        NgcConfirmModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMemberPickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ScrollingModule, OverlayModule, PortalModule,
                        CoreModule,
                        NgcAvatarModule, NgcButtonModule, NgcMenuModule,
                        NgcIconModule, NgcTooltipModule, NgcSearchBoxModule,
                        NgcTruncateModule, NgcTabsModule, NgcScrollBarModule,
                        NgcConfirmModule
                    ],
                    exports: [NgcMemberComponent, NgcMemberListComponent, NgcMemberPickerDirective, NgcMemberPickerComponent],
                    declarations: [NgcMemberComponent, NgcMemberListComponent, NgcMemberPickerDirective, NgcMemberPickerComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbWJlci1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtbWVtYmVyLXBpY2tlci9uZ2MtbWVtYmVyLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFpQjVDLE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7bUhBQXJCLHFCQUFxQixpQkFIakIsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLGFBVjdHLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWTtRQUU1QyxVQUFVO1FBRVYsZUFBZSxFQUFFLGVBQWUsRUFBRSxhQUFhO1FBQy9DLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0I7UUFDbkQsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQjtRQUNwRCxnQkFBZ0IsYUFFSixrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0I7bUhBSS9GLHFCQUFxQixZQWJoQyxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVk7UUFFNUMsVUFBVTtRQUVWLGVBQWUsRUFBRSxlQUFlLEVBQUUsYUFBYTtRQUMvQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCO1FBQ25ELGlCQUFpQixFQUFFLGFBQWEsRUFBRSxrQkFBa0I7UUFDcEQsZ0JBQWdCOzJGQU1MLHFCQUFxQjtrQkFmakMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZO3dCQUU1QyxVQUFVO3dCQUVWLGVBQWUsRUFBRSxlQUFlLEVBQUUsYUFBYTt3QkFDL0MsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQjt3QkFDbkQsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQjt3QkFDcEQsZ0JBQWdCO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUksQ0FBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBRTtvQkFDN0csWUFBWSxFQUFFLENBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUU7b0JBQ2hILFNBQVMsRUFBRyxFQUFFO2lCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NBdmF0YXJNb2R1bGUgfSBmcm9tICcuLi9uZ2MtYXZhdGFyJztcbmltcG9ydCB7IE5nY0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1idXR0b24nO1xuaW1wb3J0IHsgTmdjSWNvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1pY29uJztcbmltcG9ydCB7IE5nY01lbnVNb2R1bGUgfSBmcm9tICcuLi9uZ2MtbWVudSc7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXJNb2R1bGUgfSBmcm9tICcuLi9uZ2Mtc2Nyb2xsLWJhcic7XG5pbXBvcnQgeyBOZ2NTZWFyY2hCb3hNb2R1bGUgfSBmcm9tICcuLi9uZ2Mtc2VhcmNoLWJveCc7XG5pbXBvcnQgeyBOZ2NUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRvb2x0aXAnO1xuaW1wb3J0IHsgTmdjVHJ1bmNhdGVNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdHJ1bmNhdGUnO1xuXG5pbXBvcnQgeyBOZ2NNZW1iZXJDb21wb25lbnQgfSBmcm9tICcuL25nYy1tZW1iZXIvbmdjLW1lbWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjTWVtYmVyUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ2MtbWVtYmVyLXBpY2tlci9uZ2MtbWVtYmVyLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjTWVtYmVyUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtbWVtYmVyLXBpY2tlci9uZ2MtbWVtYmVyLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjTWVtYmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbmdjLW1lbWJlci1saXN0L25nYy1tZW1iZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjQ29uZmlybU1vZHVsZSB9IGZyb20gJy4uL25nYy1jb25maXJtJztcbmltcG9ydCB7IE5nY1RhYnNNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdGFicyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRTY3JvbGxpbmdNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZSxcblxuXHRcdENvcmVNb2R1bGUsXG5cblx0XHROZ2NBdmF0YXJNb2R1bGUsIE5nY0J1dHRvbk1vZHVsZSwgTmdjTWVudU1vZHVsZSxcblx0XHROZ2NJY29uTW9kdWxlLCBOZ2NUb29sdGlwTW9kdWxlLCBOZ2NTZWFyY2hCb3hNb2R1bGUsXG5cdFx0TmdjVHJ1bmNhdGVNb2R1bGUsIE5nY1RhYnNNb2R1bGUsIE5nY1Njcm9sbEJhck1vZHVsZSxcblx0XHROZ2NDb25maXJtTW9kdWxlXG5cdF0sXG5cdGV4cG9ydHNcdFx0OiBbIE5nY01lbWJlckNvbXBvbmVudCwgTmdjTWVtYmVyTGlzdENvbXBvbmVudCwgTmdjTWVtYmVyUGlja2VyRGlyZWN0aXZlLCBOZ2NNZW1iZXJQaWNrZXJDb21wb25lbnQgXSxcblx0ZGVjbGFyYXRpb25zOiBbIE5nY01lbWJlckNvbXBvbmVudCwgTmdjTWVtYmVyTGlzdENvbXBvbmVudCwgTmdjTWVtYmVyUGlja2VyRGlyZWN0aXZlLCBOZ2NNZW1iZXJQaWNrZXJDb21wb25lbnQgXSxcblx0cHJvdmlkZXJzXHQ6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NNZW1iZXJQaWNrZXJNb2R1bGUge31cbiJdfQ==