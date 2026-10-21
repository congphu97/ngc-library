import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcMenuModule } from '../ngc-menu';
import { NgcFormFieldModule } from '../ngc-form-field';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcDatePickerComponent } from './ngc-date-picker.component';
import { NgcDatePickerDirective } from './ngc-date-picker.directive';
import { NgcSwitchModule } from '../ngc-switch/ngc-switch.module';
import * as i0 from "@angular/core";
export class NgcDatePickerModule {
}
NgcDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcDatePickerModule, declarations: [NgcDatePickerComponent, NgcDatePickerDirective], imports: [OverlayModule, PortalModule,
        CoreModule,
        NgcButtonModule, NgcIconModule, NgcSwitchModule,
        NgcMenuModule, NgcFormFieldModule,
        NgcTooltipModule], exports: [NgcDatePickerComponent, NgcDatePickerDirective] });
NgcDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDatePickerModule, imports: [OverlayModule, PortalModule,
        CoreModule,
        NgcButtonModule, NgcIconModule, NgcSwitchModule,
        NgcMenuModule, NgcFormFieldModule,
        NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        OverlayModule, PortalModule,
                        CoreModule,
                        NgcButtonModule, NgcIconModule, NgcSwitchModule,
                        NgcMenuModule, NgcFormFieldModule,
                        NgcTooltipModule,
                    ],
                    exports: [NgcDatePickerComponent, NgcDatePickerDirective],
                    declarations: [NgcDatePickerComponent, NgcDatePickerDirective],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWRhdGUtcGlja2VyL25nYy1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFbkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQWdCbEUsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQUhmLHNCQUFzQixFQUFFLHNCQUFzQixhQVQ3RCxhQUFhLEVBQUUsWUFBWTtRQUUzQixVQUFVO1FBRVYsZUFBZSxFQUFFLGFBQWEsRUFBRSxlQUFlO1FBQy9DLGFBQWEsRUFBRSxrQkFBa0I7UUFDakMsZ0JBQWdCLGFBRUosc0JBQXNCLEVBQUUsc0JBQXNCO2lIQUkvQyxtQkFBbUIsWUFaOUIsYUFBYSxFQUFFLFlBQVk7UUFFM0IsVUFBVTtRQUVWLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZTtRQUMvQyxhQUFhLEVBQUUsa0JBQWtCO1FBQ2pDLGdCQUFnQjsyRkFNTCxtQkFBbUI7a0JBZC9CLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGFBQWEsRUFBRSxZQUFZO3dCQUUzQixVQUFVO3dCQUVWLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZTt3QkFDL0MsYUFBYSxFQUFFLGtCQUFrQjt3QkFDakMsZ0JBQWdCO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUksQ0FBRSxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBRTtvQkFDN0QsWUFBWSxFQUFFLENBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUU7b0JBQ2hFLFNBQVMsRUFBRyxFQUFFO2lCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0Bjb3JlJztcblxuaW1wb3J0IHsgTmdjQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWJ1dHRvbic7XG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjTWVudU1vZHVsZSB9IGZyb20gJy4uL25nYy1tZW51JztcbmltcG9ydCB7IE5nY0Zvcm1GaWVsZE1vZHVsZSB9IGZyb20gJy4uL25nYy1mb3JtLWZpZWxkJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5cbmltcG9ydCB7IE5nY0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL25nYy1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjRGF0ZVBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vbmdjLWRhdGUtcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NTd2l0Y2hNb2R1bGUgfSBmcm9tICcuLi9uZ2Mtc3dpdGNoL25nYy1zd2l0Y2gubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZSxcblxuXHRcdENvcmVNb2R1bGUsXG5cblx0XHROZ2NCdXR0b25Nb2R1bGUsIE5nY0ljb25Nb2R1bGUsIE5nY1N3aXRjaE1vZHVsZSxcblx0XHROZ2NNZW51TW9kdWxlLCBOZ2NGb3JtRmllbGRNb2R1bGUsXG5cdFx0TmdjVG9vbHRpcE1vZHVsZSxcblx0XSxcblx0ZXhwb3J0c1x0XHQ6IFsgTmdjRGF0ZVBpY2tlckNvbXBvbmVudCwgTmdjRGF0ZVBpY2tlckRpcmVjdGl2ZSBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgTmdjRGF0ZVBpY2tlckNvbXBvbmVudCwgTmdjRGF0ZVBpY2tlckRpcmVjdGl2ZSBdLFxuXHRwcm92aWRlcnNcdDogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0RhdGVQaWNrZXJNb2R1bGUge31cbiJdfQ==