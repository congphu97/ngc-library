import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon';
import { NgcButtonIconDirective } from './button-icon/ngc-button-icon.directive';
import { NgcButtonComponent } from './button/ngc-button.component';
import { NgcLoadingModule } from '../ngc-loading';
import { NgcIconButtonComponent } from './icon-button/ngc-icon-button.component';
import { NgcBasicButtonComponent } from './basic-button/ngc-basic-button.component';
import * as i0 from "@angular/core";
export class NgcButtonModule {
}
NgcButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonModule, declarations: [NgcIconButtonComponent, NgcBasicButtonComponent, NgcButtonComponent, NgcButtonIconDirective], imports: [CoreModule,
        NgcLoadingModule,
        NgcIconModule], exports: [NgcIconButtonComponent, NgcBasicButtonComponent,
        NgcButtonComponent, NgcButtonIconDirective] });
NgcButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonModule, imports: [CoreModule,
        NgcLoadingModule,
        NgcIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcLoadingModule,
                        NgcIconModule,
                    ],
                    exports: [
                        NgcIconButtonComponent, NgcBasicButtonComponent,
                        NgcButtonComponent, NgcButtonIconDirective,
                    ],
                    declarations: [
                        NgcIconButtonComponent, NgcBasicButtonComponent, NgcButtonComponent, NgcButtonIconDirective,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJ1dHRvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1idXR0b24vbmdjLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBaUJwRixNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQUoxQixzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsYUFUM0YsVUFBVTtRQUNKLGdCQUFnQjtRQUNoQixhQUFhLGFBR25CLHNCQUFzQixFQUFFLHVCQUF1QjtRQUN6QyxrQkFBa0IsRUFBRSxzQkFBc0I7NkdBT3JDLGVBQWUsWUFiMUIsVUFBVTtRQUNKLGdCQUFnQjtRQUNoQixhQUFhOzJGQVdSLGVBQWU7a0JBZjNCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7d0JBQ0osZ0JBQWdCO3dCQUNoQixhQUFhO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Isc0JBQXNCLEVBQUUsdUJBQXVCO3dCQUN6QyxrQkFBa0IsRUFBRSxzQkFBc0I7cUJBQ2hEO29CQUNELFlBQVksRUFBRTt3QkFDYixzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0I7cUJBQzNGO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtaWNvbic7XG5pbXBvcnQgeyBOZ2NCdXR0b25JY29uRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24taWNvbi9uZ2MtYnV0dG9uLWljb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nY0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL25nYy1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9uZ2MtbG9hZGluZyc7XG5pbXBvcnQgeyBOZ2NJY29uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLWJ1dHRvbi9uZ2MtaWNvbi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0Jhc2ljQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy1idXR0b24vbmdjLWJhc2ljLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29yZU1vZHVsZSxcbiAgICAgICAgTmdjTG9hZGluZ01vZHVsZSxcbiAgICAgICAgTmdjSWNvbk1vZHVsZSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdE5nY0ljb25CdXR0b25Db21wb25lbnQsIE5nY0Jhc2ljQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBOZ2NCdXR0b25Db21wb25lbnQsIE5nY0J1dHRvbkljb25EaXJlY3RpdmUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdE5nY0ljb25CdXR0b25Db21wb25lbnQsIE5nY0Jhc2ljQnV0dG9uQ29tcG9uZW50LCBOZ2NCdXR0b25Db21wb25lbnQsIE5nY0J1dHRvbkljb25EaXJlY3RpdmUsXG5cdF0sXG5cdHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0J1dHRvbk1vZHVsZSB7fSJdfQ==