import { NgModule } from '@angular/core';
import { CoreModule, FormModule } from '@core';
import { NgcFormFieldModule } from '../ngc-form-field';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcRangeInputComponent } from './ngc-range-input.component';
import * as i0 from "@angular/core";
export class NgcRangeInputModule {
}
NgcRangeInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRangeInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcRangeInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcRangeInputModule, declarations: [NgcRangeInputComponent], imports: [CoreModule, FormModule,
        NgcFormFieldModule, NgcTruncateModule], exports: [NgcRangeInputComponent] });
NgcRangeInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRangeInputModule, imports: [CoreModule, FormModule,
        NgcFormFieldModule, NgcTruncateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcRangeInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule, FormModule,
                        NgcFormFieldModule, NgcTruncateModule,
                    ],
                    exports: [NgcRangeInputComponent],
                    declarations: [NgcRangeInputComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXJhbmdlLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXJhbmdlLWlucHV0L25nYy1yYW5nZS1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFZckUsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQUhmLHNCQUFzQixhQUxyQyxVQUFVLEVBQUUsVUFBVTtRQUV0QixrQkFBa0IsRUFBRSxpQkFBaUIsYUFFekIsc0JBQXNCO2lIQUl2QixtQkFBbUIsWUFSOUIsVUFBVSxFQUFFLFVBQVU7UUFFdEIsa0JBQWtCLEVBQUUsaUJBQWlCOzJGQU0xQixtQkFBbUI7a0JBVi9CLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFVBQVUsRUFBRSxVQUFVO3dCQUV0QixrQkFBa0IsRUFBRSxpQkFBaUI7cUJBQ3JDO29CQUNELE9BQU8sRUFBSSxDQUFFLHNCQUFzQixDQUFFO29CQUNyQyxZQUFZLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtvQkFDeEMsU0FBUyxFQUFHLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlLCBGb3JtTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NGb3JtRmllbGRNb2R1bGUgfSBmcm9tICcuLi9uZ2MtZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBOZ2NUcnVuY2F0ZU1vZHVsZSB9IGZyb20gJy4uL25nYy10cnVuY2F0ZSc7XG5cbmltcG9ydCB7IE5nY1JhbmdlSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL25nYy1yYW5nZS1pbnB1dC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29yZU1vZHVsZSwgRm9ybU1vZHVsZSxcblxuXHRcdE5nY0Zvcm1GaWVsZE1vZHVsZSwgTmdjVHJ1bmNhdGVNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHNcdFx0OiBbIE5nY1JhbmdlSW5wdXRDb21wb25lbnQgXSxcblx0ZGVjbGFyYXRpb25zOiBbIE5nY1JhbmdlSW5wdXRDb21wb25lbnQgXSxcblx0cHJvdmlkZXJzXHQ6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NSYW5nZUlucHV0TW9kdWxlIHt9XG4iXX0=