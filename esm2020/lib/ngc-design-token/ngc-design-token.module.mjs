import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcDividerModule } from '../ngc-divider/ngc-divider.module';
import { NgcSelectModule } from '../ngc-select/ngc-select.module';
import { NgcDialogModule } from '../ngc-dialog';
import { NgcDesignTokenComponent } from './ngc-design-token.component';
import { NgcDesignTokenDialogComponent } from './dialog/ngc-design-token-dialog.component';
import * as i0 from "@angular/core";
export class NgcDesignTokenModule {
}
NgcDesignTokenModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDesignTokenModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcDesignTokenModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcDesignTokenModule, declarations: [NgcDesignTokenComponent, NgcDesignTokenDialogComponent], imports: [CoreModule,
        FormsModule,
        NgcButtonModule,
        NgcIconModule,
        NgcDividerModule,
        NgcSelectModule,
        NgcDialogModule], exports: [NgcDesignTokenComponent] });
NgcDesignTokenModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDesignTokenModule, imports: [CoreModule,
        FormsModule,
        NgcButtonModule,
        NgcIconModule,
        NgcDividerModule,
        NgcSelectModule,
        NgcDialogModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDesignTokenModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        FormsModule,
                        NgcButtonModule,
                        NgcIconModule,
                        NgcDividerModule,
                        NgcSelectModule,
                        NgcDialogModule,
                    ],
                    exports: [NgcDesignTokenComponent],
                    declarations: [NgcDesignTokenComponent, NgcDesignTokenDialogComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRlc2lnbi10b2tlbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1kZXNpZ24tdG9rZW4vbmdjLWRlc2lnbi10b2tlbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNuQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU8sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBUyxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFPLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTyxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQVksOEJBQThCLENBQUM7QUFDN0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0FBZ0IzRixNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBSGhCLHVCQUF1QixFQUFFLDZCQUE2QixhQVRyRSxVQUFVO1FBQ1YsV0FBVztRQUNYLGVBQWU7UUFDZixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixlQUFlLGFBRUEsdUJBQXVCO2tIQUkzQixvQkFBb0IsWUFaL0IsVUFBVTtRQUNWLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZUFBZTsyRkFNSixvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGVBQWU7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFPLENBQUUsdUJBQXVCLENBQUU7b0JBQ3pDLFlBQVksRUFBRSxDQUFFLHVCQUF1QixFQUFFLDZCQUE2QixDQUFFO29CQUN4RSxTQUFTLEVBQUssRUFBRTtpQkFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSAgZnJvbSAnLi4vbmdjLWJ1dHRvbic7XG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gICAgZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjRGl2aWRlck1vZHVsZSB9IGZyb20gJy4uL25nYy1kaXZpZGVyL25nYy1kaXZpZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ2NTZWxlY3RNb2R1bGUgfSAgZnJvbSAnLi4vbmdjLXNlbGVjdC9uZ2Mtc2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ2NEaWFsb2dNb2R1bGUgfSAgZnJvbSAnLi4vbmdjLWRpYWxvZyc7XG5cbmltcG9ydCB7IE5nY0Rlc2lnblRva2VuQ29tcG9uZW50IH0gICAgICAgZnJvbSAnLi9uZ2MtZGVzaWduLXRva2VuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NEZXNpZ25Ub2tlbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL25nYy1kZXNpZ24tdG9rZW4tZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb3JlTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdE5nY0J1dHRvbk1vZHVsZSxcblx0XHROZ2NJY29uTW9kdWxlLFxuXHRcdE5nY0RpdmlkZXJNb2R1bGUsXG5cdFx0TmdjU2VsZWN0TW9kdWxlLFxuXHRcdE5nY0RpYWxvZ01vZHVsZSxcblx0XSxcblx0ZXhwb3J0cyAgICAgOiBbIE5nY0Rlc2lnblRva2VuQ29tcG9uZW50IF0sXG5cdGRlY2xhcmF0aW9uczogWyBOZ2NEZXNpZ25Ub2tlbkNvbXBvbmVudCwgTmdjRGVzaWduVG9rZW5EaWFsb2dDb21wb25lbnQgXSxcblx0cHJvdmlkZXJzICAgOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjRGVzaWduVG9rZW5Nb2R1bGUge31cbiJdfQ==