import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ResizableModule } from 'angular-resizable-element';
import { CoreModule, FormModule } from '@core';
import { NgcMenuModule } from '../ngc-menu';
import { NgcIconModule } from '../ngc-icon';
import { NgcButtonModule } from '../ngc-button';
import { NgcSearchBoxModule } from '../ngc-search-box';
import { NgcDatePickerModule } from '../ngc-date-picker';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTableComponent } from './table/ngc-table.component';
import { NgcCdkTableComponent } from './cdk-table/ngc-cdk-table.component';
import { NgcExcelTableComponent } from './excel-table/ngc-excel-table.component';
import { NgcExcelHeaderCellComponent } from './excel-table/ngc-excel-header-cell.component';
import { NgcExcelCellComponent } from './excel-table/ngc-excel-cell.component';
import * as i0 from "@angular/core";
export class NGCTableModule {
}
NGCTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NGCTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NGCTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NGCTableModule, declarations: [NgcTableComponent, NgcCdkTableComponent, NgcExcelTableComponent,
        NgcExcelHeaderCellComponent, NgcExcelCellComponent], imports: [CdkTableModule, ResizableModule, ScrollingModule,
        CoreModule, FormModule,
        NgcMenuModule, NgcIconModule, NgcButtonModule,
        NgcSearchBoxModule, NgcDatePickerModule, NgcTruncateModule,
        NgcTooltipModule], exports: [CdkTableModule,
        NgcTableComponent, NgcCdkTableComponent, NgcExcelTableComponent,
        NgcExcelHeaderCellComponent, NgcExcelCellComponent] });
NGCTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NGCTableModule, imports: [CdkTableModule, ResizableModule, ScrollingModule,
        CoreModule, FormModule,
        NgcMenuModule, NgcIconModule, NgcButtonModule,
        NgcSearchBoxModule, NgcDatePickerModule, NgcTruncateModule,
        NgcTooltipModule, CdkTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NGCTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CdkTableModule, ResizableModule, ScrollingModule,
                        CoreModule, FormModule,
                        NgcMenuModule, NgcIconModule, NgcButtonModule,
                        NgcSearchBoxModule, NgcDatePickerModule, NgcTruncateModule,
                        NgcTooltipModule,
                    ],
                    exports: [
                        CdkTableModule,
                        NgcTableComponent, NgcCdkTableComponent, NgcExcelTableComponent,
                        NgcExcelHeaderCellComponent, NgcExcelCellComponent,
                    ],
                    declarations: [
                        NgcTableComponent, NgcCdkTableComponent, NgcExcelTableComponent,
                        NgcExcelHeaderCellComponent, NgcExcelCellComponent,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRhYmxlL25nYy10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUEwQi9FLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBTHpCLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjtRQUMvRCwyQkFBMkIsRUFBRSxxQkFBcUIsYUFoQmxELGNBQWMsRUFBRSxlQUFlLEVBQUUsZUFBZTtRQUVoRCxVQUFVLEVBQUUsVUFBVTtRQUV0QixhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWU7UUFDN0Msa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCO1FBQzFELGdCQUFnQixhQUdoQixjQUFjO1FBRWQsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCO1FBQy9ELDJCQUEyQixFQUFFLHFCQUFxQjs0R0FRdkMsY0FBYyxZQXBCekIsY0FBYyxFQUFFLGVBQWUsRUFBRSxlQUFlO1FBRWhELFVBQVUsRUFBRSxVQUFVO1FBRXRCLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZTtRQUM3QyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUI7UUFDMUQsZ0JBQWdCLEVBR2hCLGNBQWM7MkZBV0gsY0FBYztrQkF0QjFCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGNBQWMsRUFBRSxlQUFlLEVBQUUsZUFBZTt3QkFFaEQsVUFBVSxFQUFFLFVBQVU7d0JBRXRCLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZTt3QkFDN0Msa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCO3dCQUMxRCxnQkFBZ0I7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUixjQUFjO3dCQUVkLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjt3QkFDL0QsMkJBQTJCLEVBQUUscUJBQXFCO3FCQUNsRDtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCO3dCQUMvRCwyQkFBMkIsRUFBRSxxQkFBcUI7cUJBQ2xEO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgUmVzaXphYmxlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUsIEZvcm1Nb2R1bGUgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY01lbnVNb2R1bGUgfSBmcm9tICcuLi9uZ2MtbWVudSc7XG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWJ1dHRvbic7XG5pbXBvcnQgeyBOZ2NTZWFyY2hCb3hNb2R1bGUgfSBmcm9tICcuLi9uZ2Mtc2VhcmNoLWJveCc7XG5pbXBvcnQgeyBOZ2NEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWRhdGUtcGlja2VyJztcbmltcG9ydCB7IE5nY1RydW5jYXRlTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRydW5jYXRlJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2NUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUvbmdjLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NDZGtUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY2RrLXRhYmxlL25nYy1jZGstdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0V4Y2VsVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2V4Y2VsLXRhYmxlL25nYy1leGNlbC10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjRXhjZWxIZWFkZXJDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlbC10YWJsZS9uZ2MtZXhjZWwtaGVhZGVyLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0V4Y2VsQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vZXhjZWwtdGFibGUvbmdjLWV4Y2VsLWNlbGwuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDZGtUYWJsZU1vZHVsZSwgUmVzaXphYmxlTW9kdWxlLCBTY3JvbGxpbmdNb2R1bGUsXG5cblx0XHRDb3JlTW9kdWxlLCBGb3JtTW9kdWxlLFxuXG5cdFx0TmdjTWVudU1vZHVsZSwgTmdjSWNvbk1vZHVsZSwgTmdjQnV0dG9uTW9kdWxlLFxuXHRcdE5nY1NlYXJjaEJveE1vZHVsZSwgTmdjRGF0ZVBpY2tlck1vZHVsZSwgTmdjVHJ1bmNhdGVNb2R1bGUsXG5cdFx0TmdjVG9vbHRpcE1vZHVsZSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENka1RhYmxlTW9kdWxlLFxuXG5cdFx0TmdjVGFibGVDb21wb25lbnQsIE5nY0Nka1RhYmxlQ29tcG9uZW50LCBOZ2NFeGNlbFRhYmxlQ29tcG9uZW50LFxuXHRcdE5nY0V4Y2VsSGVhZGVyQ2VsbENvbXBvbmVudCwgTmdjRXhjZWxDZWxsQ29tcG9uZW50LFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHROZ2NUYWJsZUNvbXBvbmVudCwgTmdjQ2RrVGFibGVDb21wb25lbnQsIE5nY0V4Y2VsVGFibGVDb21wb25lbnQsXG5cdFx0TmdjRXhjZWxIZWFkZXJDZWxsQ29tcG9uZW50LCBOZ2NFeGNlbENlbGxDb21wb25lbnQsXG5cdF0sXG5cdHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5HQ1RhYmxlTW9kdWxlIHt9XG4iXX0=