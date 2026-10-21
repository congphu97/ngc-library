import { NgModule } from '@angular/core';
import { CoreModule, FormModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcFormFieldComponent } from './form-field/ngc-form-field.component';
import { NgcFormFieldErrorDirective } from './form-field-error/ngc-form-field-error.directive';
import { NgcFormFieldInputDirective } from './form-field-input/ngc-form-field-input.directive';
import { NgcFormFieldLabelDirective } from './form-field-label/ngc-form-field-label.directive';
import { NgcFormFieldHintDirective } from './form-field-hint/ngc-form-field-hint.directive';
import { NgcFormFieldPrefixDirective } from './form-field-prefix/ngc-form-field-prefix.directive';
import { NgcFormFieldSuffixDirective } from './form-field-suffix/ngc-form-field-suffix.directive';
import { NgcFormFieldDescriptionDirective } from './form-field-description/ngc-form-field-description.directive';
import * as i0 from "@angular/core";
export class NgcFormFieldModule {
}
NgcFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcFormFieldModule, declarations: [NgcFormFieldComponent, NgcFormFieldErrorDirective, NgcFormFieldInputDirective,
        NgcFormFieldLabelDirective, NgcFormFieldHintDirective, NgcFormFieldPrefixDirective,
        NgcFormFieldSuffixDirective, NgcFormFieldDescriptionDirective], imports: [FormModule, CoreModule,
        NgcButtonModule, NgcIconModule, NgcColorPickerModule,
        NgcTooltipModule, NgcTruncateModule], exports: [NgcFormFieldComponent, NgcFormFieldErrorDirective, NgcFormFieldInputDirective,
        NgcFormFieldLabelDirective, NgcFormFieldHintDirective, NgcFormFieldPrefixDirective,
        NgcFormFieldSuffixDirective, NgcFormFieldDescriptionDirective] });
NgcFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcFormFieldModule, imports: [FormModule, CoreModule,
        NgcButtonModule, NgcIconModule, NgcColorPickerModule,
        NgcTooltipModule, NgcTruncateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormModule, CoreModule,
                        NgcButtonModule, NgcIconModule, NgcColorPickerModule,
                        NgcTooltipModule, NgcTruncateModule,
                    ],
                    exports: [
                        NgcFormFieldComponent, NgcFormFieldErrorDirective, NgcFormFieldInputDirective,
                        NgcFormFieldLabelDirective, NgcFormFieldHintDirective, NgcFormFieldPrefixDirective,
                        NgcFormFieldSuffixDirective, NgcFormFieldDescriptionDirective,
                    ],
                    declarations: [
                        NgcFormFieldComponent, NgcFormFieldErrorDirective, NgcFormFieldInputDirective,
                        NgcFormFieldLabelDirective, NgcFormFieldHintDirective, NgcFormFieldPrefixDirective,
                        NgcFormFieldSuffixDirective, NgcFormFieldDescriptionDirective,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWZvcm0tZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZm9ybS1maWVsZC9uZ2MtZm9ybS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDNUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0RBQStELENBQUM7O0FBcUJqSCxNQUFNLE9BQU8sa0JBQWtCOzsrR0FBbEIsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBTjdCLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLDBCQUEwQjtRQUM3RSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSwyQkFBMkI7UUFDbEYsMkJBQTJCLEVBQUUsZ0NBQWdDLGFBYjdELFVBQVUsRUFBRSxVQUFVO1FBRXRCLGVBQWUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CO1FBQ3BELGdCQUFnQixFQUFFLGlCQUFpQixhQUduQyxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEI7UUFDN0UsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCO1FBQ2xGLDJCQUEyQixFQUFFLGdDQUFnQztnSEFTbEQsa0JBQWtCLFlBakI3QixVQUFVLEVBQUUsVUFBVTtRQUV0QixlQUFlLEVBQUUsYUFBYSxFQUFFLG9CQUFvQjtRQUNwRCxnQkFBZ0IsRUFBRSxpQkFBaUI7MkZBY3hCLGtCQUFrQjtrQkFuQjlCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFVBQVUsRUFBRSxVQUFVO3dCQUV0QixlQUFlLEVBQUUsYUFBYSxFQUFFLG9CQUFvQjt3QkFDcEQsZ0JBQWdCLEVBQUUsaUJBQWlCO3FCQUNuQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1IscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUsMEJBQTBCO3dCQUM3RSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSwyQkFBMkI7d0JBQ2xGLDJCQUEyQixFQUFFLGdDQUFnQztxQkFDN0Q7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLDBCQUEwQjt3QkFDN0UsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCO3dCQUNsRiwyQkFBMkIsRUFBRSxnQ0FBZ0M7cUJBQzdEO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29yZU1vZHVsZSwgRm9ybU1vZHVsZSB9IGZyb20gJ0Bjb3JlJztcblxuaW1wb3J0IHsgTmdjQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWJ1dHRvbic7XG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjQ29sb3JQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9uZ2MtY29sb3ItcGlja2VyJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2NUcnVuY2F0ZU1vZHVsZSB9IGZyb20gJy4uL25nYy10cnVuY2F0ZSc7XG5cbmltcG9ydCB7IE5nY0Zvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1maWVsZC9uZ2MtZm9ybS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjRm9ybUZpZWxkRXJyb3JEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tZmllbGQtZXJyb3IvbmdjLWZvcm0tZmllbGQtZXJyb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nY0Zvcm1GaWVsZElucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLWZpZWxkLWlucHV0L25nYy1mb3JtLWZpZWxkLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NGb3JtRmllbGRMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS1maWVsZC1sYWJlbC9uZ2MtZm9ybS1maWVsZC1sYWJlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjRm9ybUZpZWxkSGludERpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS1maWVsZC1oaW50L25nYy1mb3JtLWZpZWxkLWhpbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nY0Zvcm1GaWVsZFByZWZpeERpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS1maWVsZC1wcmVmaXgvbmdjLWZvcm0tZmllbGQtcHJlZml4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NGb3JtRmllbGRTdWZmaXhEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tZmllbGQtc3VmZml4L25nYy1mb3JtLWZpZWxkLXN1ZmZpeC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjRm9ybUZpZWxkRGVzY3JpcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tZmllbGQtZGVzY3JpcHRpb24vbmdjLWZvcm0tZmllbGQtZGVzY3JpcHRpb24uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEZvcm1Nb2R1bGUsIENvcmVNb2R1bGUsXG5cblx0XHROZ2NCdXR0b25Nb2R1bGUsIE5nY0ljb25Nb2R1bGUsIE5nY0NvbG9yUGlja2VyTW9kdWxlLFxuXHRcdE5nY1Rvb2x0aXBNb2R1bGUsIE5nY1RydW5jYXRlTW9kdWxlLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0TmdjRm9ybUZpZWxkQ29tcG9uZW50LCBOZ2NGb3JtRmllbGRFcnJvckRpcmVjdGl2ZSwgTmdjRm9ybUZpZWxkSW5wdXREaXJlY3RpdmUsXG5cdFx0TmdjRm9ybUZpZWxkTGFiZWxEaXJlY3RpdmUsIE5nY0Zvcm1GaWVsZEhpbnREaXJlY3RpdmUsIE5nY0Zvcm1GaWVsZFByZWZpeERpcmVjdGl2ZSxcblx0XHROZ2NGb3JtRmllbGRTdWZmaXhEaXJlY3RpdmUsIE5nY0Zvcm1GaWVsZERlc2NyaXB0aW9uRGlyZWN0aXZlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHROZ2NGb3JtRmllbGRDb21wb25lbnQsIE5nY0Zvcm1GaWVsZEVycm9yRGlyZWN0aXZlLCBOZ2NGb3JtRmllbGRJbnB1dERpcmVjdGl2ZSxcblx0XHROZ2NGb3JtRmllbGRMYWJlbERpcmVjdGl2ZSwgTmdjRm9ybUZpZWxkSGludERpcmVjdGl2ZSwgTmdjRm9ybUZpZWxkUHJlZml4RGlyZWN0aXZlLFxuXHRcdE5nY0Zvcm1GaWVsZFN1ZmZpeERpcmVjdGl2ZSwgTmdjRm9ybUZpZWxkRGVzY3JpcHRpb25EaXJlY3RpdmUsXG5cdF0sXG5cdHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0Zvcm1GaWVsZE1vZHVsZSB7fVxuIl19