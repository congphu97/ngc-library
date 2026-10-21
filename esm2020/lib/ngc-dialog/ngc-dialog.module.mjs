import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcDialogContainerComponent } from './dialog-container/ngc-dialog-container.component';
import { NgcDialogHeaderDirective } from './dialog-header/ngc-dialog-header.directive';
import { NgcDialogContentDirective } from './dialog-content/ngc-dialog-content.directive';
import { NgcDialogFooterDirective } from './dialog-footer/ngc-dialog-footer.directive';
import { NgcDialogService } from './dialog/ngc-dialog.service';
import * as i0 from "@angular/core";
export class NgcDialogModule {
}
NgcDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcDialogModule, declarations: [NgcDialogContainerComponent, NgcDialogHeaderDirective, NgcDialogContentDirective, NgcDialogFooterDirective], imports: [OverlayModule, PortalModule,
        CoreModule,
        NgcButtonModule, NgcTooltipModule], exports: [NgcDialogContainerComponent, NgcDialogHeaderDirective, NgcDialogContentDirective, NgcDialogFooterDirective] });
NgcDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDialogModule, providers: [NgcDialogService], imports: [OverlayModule, PortalModule,
        CoreModule,
        NgcButtonModule, NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        OverlayModule, PortalModule,
                        CoreModule,
                        NgcButtonModule, NgcTooltipModule,
                    ],
                    exports: [NgcDialogContainerComponent, NgcDialogHeaderDirective, NgcDialogContentDirective, NgcDialogFooterDirective],
                    declarations: [NgcDialogContainerComponent, NgcDialogHeaderDirective, NgcDialogContentDirective, NgcDialogFooterDirective],
                    providers: [NgcDialogService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1kaWFsb2cvbmdjLWRpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFbkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFjL0QsTUFBTSxPQUFPLGVBQWU7OzRHQUFmLGVBQWU7NkdBQWYsZUFBZSxpQkFIWCwyQkFBMkIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsYUFQekgsYUFBYSxFQUFFLFlBQVk7UUFFM0IsVUFBVTtRQUVWLGVBQWUsRUFBRSxnQkFBZ0IsYUFFckIsMkJBQTJCLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCOzZHQUkzRyxlQUFlLGFBRmYsQ0FBRSxnQkFBZ0IsQ0FBRSxZQVIvQixhQUFhLEVBQUUsWUFBWTtRQUUzQixVQUFVO1FBRVYsZUFBZSxFQUFFLGdCQUFnQjsyRkFNdEIsZUFBZTtrQkFaM0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLFlBQVk7d0JBRTNCLFVBQVU7d0JBRVYsZUFBZSxFQUFFLGdCQUFnQjtxQkFDakM7b0JBQ0QsT0FBTyxFQUFJLENBQUUsMkJBQTJCLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLENBQUU7b0JBQ3pILFlBQVksRUFBRSxDQUFFLDJCQUEyQixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixDQUFFO29CQUM1SCxTQUFTLEVBQUcsQ0FBRSxnQkFBZ0IsQ0FBRTtpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5cbmltcG9ydCB7IE5nY0RpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci9uZ2MtZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjRGlhbG9nSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaWFsb2ctaGVhZGVyL25nYy1kaWFsb2ctaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NEaWFsb2dDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kaWFsb2ctY29udGVudC9uZ2MtZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nY0RpYWxvZ0Zvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlhbG9nLWZvb3Rlci9uZ2MtZGlhbG9nLWZvb3Rlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZGlhbG9nL25nYy1kaWFsb2cuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGUsXG5cblx0XHRDb3JlTW9kdWxlLFxuXG5cdFx0TmdjQnV0dG9uTW9kdWxlLCBOZ2NUb29sdGlwTW9kdWxlLFxuXHRdLFxuXHRleHBvcnRzXHRcdDogWyBOZ2NEaWFsb2dDb250YWluZXJDb21wb25lbnQsIE5nY0RpYWxvZ0hlYWRlckRpcmVjdGl2ZSwgTmdjRGlhbG9nQ29udGVudERpcmVjdGl2ZSwgTmdjRGlhbG9nRm9vdGVyRGlyZWN0aXZlIF0sXG5cdGRlY2xhcmF0aW9uczogWyBOZ2NEaWFsb2dDb250YWluZXJDb21wb25lbnQsIE5nY0RpYWxvZ0hlYWRlckRpcmVjdGl2ZSwgTmdjRGlhbG9nQ29udGVudERpcmVjdGl2ZSwgTmdjRGlhbG9nRm9vdGVyRGlyZWN0aXZlIF0sXG5cdHByb3ZpZGVyc1x0OiBbIE5nY0RpYWxvZ1NlcnZpY2UgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjRGlhbG9nTW9kdWxlIHt9XG4iXX0=