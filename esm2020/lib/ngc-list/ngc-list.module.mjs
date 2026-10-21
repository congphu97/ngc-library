import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoreModule, FormModule } from '@core';
import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcListComponent } from './list/ngc-list.component';
import { NgcListItemComponent } from './list-item/ngc-list-item.component';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';
import { NgcInlineInputModule } from '../ngc-inline-input';
import * as i0 from "@angular/core";
export class NgcListModule {
}
NgcListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcListModule, declarations: [NgcListComponent, NgcListItemComponent], imports: [DragDropModule,
        CoreModule, FormModule,
        NgcIconModule, NgcScrollBarModule, NgcColorPickerModule,
        NgcTruncateModule, NgcInlineInputModule, NgcButtonModule,
        NgcTooltipModule], exports: [NgcListComponent, NgcListItemComponent] });
NgcListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcListModule, imports: [DragDropModule,
        CoreModule, FormModule,
        NgcIconModule, NgcScrollBarModule, NgcColorPickerModule,
        NgcTruncateModule, NgcInlineInputModule, NgcButtonModule,
        NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        DragDropModule,
                        CoreModule, FormModule,
                        NgcIconModule, NgcScrollBarModule, NgcColorPickerModule,
                        NgcTruncateModule, NgcInlineInputModule, NgcButtonModule,
                        NgcTooltipModule,
                    ],
                    exports: [NgcListComponent, NgcListItemComponent],
                    declarations: [NgcListComponent, NgcListItemComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtbGlzdC9uZ2MtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQWdCM0QsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkFIVCxnQkFBZ0IsRUFBRSxvQkFBb0IsYUFUckQsY0FBYztRQUVkLFVBQVUsRUFBRSxVQUFVO1FBRXRCLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0I7UUFDdkQsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZTtRQUN4RCxnQkFBZ0IsYUFFSixnQkFBZ0IsRUFBRSxvQkFBb0I7MkdBSXZDLGFBQWEsWUFaeEIsY0FBYztRQUVkLFVBQVUsRUFBRSxVQUFVO1FBRXRCLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0I7UUFDdkQsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZTtRQUN4RCxnQkFBZ0I7MkZBTUwsYUFBYTtrQkFkekIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsY0FBYzt3QkFFZCxVQUFVLEVBQUUsVUFBVTt3QkFFdEIsYUFBYSxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQjt3QkFDdkQsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZTt3QkFDeEQsZ0JBQWdCO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUksQ0FBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBRTtvQkFDckQsWUFBWSxFQUFFLENBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUU7b0JBQ3hELFNBQVMsRUFBRyxFQUFFO2lCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUsIEZvcm1Nb2R1bGUgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtaWNvbic7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXJNb2R1bGUgfSBmcm9tICcuLi9uZ2Mtc2Nyb2xsLWJhcic7XG5pbXBvcnQgeyBOZ2NDb2xvclBpY2tlck1vZHVsZSB9IGZyb20gJy4uL25nYy1jb2xvci1waWNrZXInO1xuaW1wb3J0IHsgTmdjQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWJ1dHRvbic7XG5pbXBvcnQgeyBOZ2NUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRvb2x0aXAnO1xuXG5pbXBvcnQgeyBOZ2NMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L25nYy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtL25nYy1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE5nY1RydW5jYXRlTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRydW5jYXRlL25nYy10cnVuY2F0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmdjSW5saW5lSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9uZ2MtaW5saW5lLWlucHV0JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdERyYWdEcm9wTW9kdWxlLFxuXG5cdFx0Q29yZU1vZHVsZSwgRm9ybU1vZHVsZSxcblxuXHRcdE5nY0ljb25Nb2R1bGUsIE5nY1Njcm9sbEJhck1vZHVsZSwgTmdjQ29sb3JQaWNrZXJNb2R1bGUsXG5cdFx0TmdjVHJ1bmNhdGVNb2R1bGUsIE5nY0lubGluZUlucHV0TW9kdWxlLCBOZ2NCdXR0b25Nb2R1bGUsXG5cdFx0TmdjVG9vbHRpcE1vZHVsZSxcblx0XSxcblx0ZXhwb3J0c1x0XHQ6IFsgTmdjTGlzdENvbXBvbmVudCwgTmdjTGlzdEl0ZW1Db21wb25lbnQgXSxcblx0ZGVjbGFyYXRpb25zOiBbIE5nY0xpc3RDb21wb25lbnQsIE5nY0xpc3RJdGVtQ29tcG9uZW50IF0sXG5cdHByb3ZpZGVyc1x0OiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjTGlzdE1vZHVsZSB7fVxuIl19