import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CoreModule, FormModule } from '@core';
import { NgcMenuModule } from '../ngc-menu';
import { NgcIconModule } from '../ngc-icon';
import { NgcButtonModule } from '../ngc-button';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcFormFieldModule } from '../ngc-form-field';
import { NgcSearchBoxModule } from '../ngc-search-box';
import { NgcDropdownComponent } from './dropdown/ngc-dropdown.component';
import { NgcDropdownGroupItemComponent } from './dropdown-group-item/ngc-dropdown-group-item.component';
import { NgcDropdownItemComponent } from './dropdown-item/ngc-dropdown-item.component';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';
import * as i0 from "@angular/core";
export class NgcDropdownModule {
}
NgcDropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcDropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcDropdownModule, declarations: [NgcDropdownComponent, NgcDropdownGroupItemComponent, NgcDropdownItemComponent], imports: [ScrollingModule,
        CoreModule, FormModule,
        NgcFormFieldModule, NgcSearchBoxModule,
        NgcMenuModule,
        NgcIconModule, NgcTruncateModule, NgcButtonModule,
        NgcColorPickerModule, NgcTooltipModule], exports: [NgcDropdownComponent, NgcDropdownGroupItemComponent, NgcDropdownItemComponent] });
NgcDropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropdownModule, imports: [ScrollingModule,
        CoreModule, FormModule,
        NgcFormFieldModule, NgcSearchBoxModule,
        NgcMenuModule,
        NgcIconModule, NgcTruncateModule, NgcButtonModule,
        NgcColorPickerModule, NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ScrollingModule,
                        CoreModule, FormModule,
                        NgcFormFieldModule, NgcSearchBoxModule,
                        NgcMenuModule,
                        NgcIconModule, NgcTruncateModule, NgcButtonModule,
                        NgcColorPickerModule, NgcTooltipModule,
                    ],
                    exports: [NgcDropdownComponent, NgcDropdownGroupItemComponent, NgcDropdownItemComponent],
                    declarations: [NgcDropdownComponent, NgcDropdownGroupItemComponent, NgcDropdownItemComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRyb3Bkb3duLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWRyb3Bkb3duL25nYy1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBaUJ4RSxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBSGIsb0JBQW9CLEVBQUUsNkJBQTZCLEVBQUUsd0JBQXdCLGFBVjVGLGVBQWU7UUFFZixVQUFVLEVBQUUsVUFBVTtRQUV0QixrQkFBa0IsRUFBRSxrQkFBa0I7UUFDdEMsYUFBYTtRQUNiLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxlQUFlO1FBQ2pELG9CQUFvQixFQUFFLGdCQUFnQixhQUUxQixvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSx3QkFBd0I7K0dBSTlFLGlCQUFpQixZQWI1QixlQUFlO1FBRWYsVUFBVSxFQUFFLFVBQVU7UUFFdEIsa0JBQWtCLEVBQUUsa0JBQWtCO1FBQ3RDLGFBQWE7UUFDYixhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZUFBZTtRQUNqRCxvQkFBb0IsRUFBRSxnQkFBZ0I7MkZBTTNCLGlCQUFpQjtrQkFmN0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsZUFBZTt3QkFFZixVQUFVLEVBQUUsVUFBVTt3QkFFdEIsa0JBQWtCLEVBQUUsa0JBQWtCO3dCQUN0QyxhQUFhO3dCQUNiLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxlQUFlO3dCQUNqRCxvQkFBb0IsRUFBRSxnQkFBZ0I7cUJBQ3RDO29CQUNELE9BQU8sRUFBSSxDQUFFLG9CQUFvQixFQUFFLDZCQUE2QixFQUFFLHdCQUF3QixDQUFFO29CQUM1RixZQUFZLEVBQUUsQ0FBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSx3QkFBd0IsQ0FBRTtvQkFDL0YsU0FBUyxFQUFHLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUsIEZvcm1Nb2R1bGUgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY01lbnVNb2R1bGUgfSBmcm9tICcuLi9uZ2MtbWVudSc7XG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWJ1dHRvbic7XG5pbXBvcnQgeyBOZ2NDb2xvclBpY2tlck1vZHVsZSB9IGZyb20gJy4uL25nYy1jb2xvci1waWNrZXInO1xuaW1wb3J0IHsgTmdjVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL25nYy10b29sdGlwJztcbmltcG9ydCB7IE5nY0Zvcm1GaWVsZE1vZHVsZSB9IGZyb20gJy4uL25nYy1mb3JtLWZpZWxkJztcbmltcG9ydCB7IE5nY1NlYXJjaEJveE1vZHVsZSB9IGZyb20gJy4uL25nYy1zZWFyY2gtYm94JztcblxuaW1wb3J0IHsgTmdjRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duL25nYy1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjRHJvcGRvd25Hcm91cEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLWdyb3VwLWl0ZW0vbmdjLWRyb3Bkb3duLWdyb3VwLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0Ryb3Bkb3duSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24taXRlbS9uZ2MtZHJvcGRvd24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjVHJ1bmNhdGVNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdHJ1bmNhdGUvbmdjLXRydW5jYXRlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRTY3JvbGxpbmdNb2R1bGUsXG5cblx0XHRDb3JlTW9kdWxlLCBGb3JtTW9kdWxlLFxuXG5cdFx0TmdjRm9ybUZpZWxkTW9kdWxlLCBOZ2NTZWFyY2hCb3hNb2R1bGUsXG5cdFx0TmdjTWVudU1vZHVsZSxcblx0XHROZ2NJY29uTW9kdWxlLCBOZ2NUcnVuY2F0ZU1vZHVsZSwgTmdjQnV0dG9uTW9kdWxlLFxuXHRcdE5nY0NvbG9yUGlja2VyTW9kdWxlLCBOZ2NUb29sdGlwTW9kdWxlLFxuXHRdLFxuXHRleHBvcnRzXHRcdDogWyBOZ2NEcm9wZG93bkNvbXBvbmVudCwgTmdjRHJvcGRvd25Hcm91cEl0ZW1Db21wb25lbnQsIE5nY0Ryb3Bkb3duSXRlbUNvbXBvbmVudCBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgTmdjRHJvcGRvd25Db21wb25lbnQsIE5nY0Ryb3Bkb3duR3JvdXBJdGVtQ29tcG9uZW50LCBOZ2NEcm9wZG93bkl0ZW1Db21wb25lbnQgXSxcblx0cHJvdmlkZXJzXHQ6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NEcm9wZG93bk1vZHVsZSB7fVxuIl19