import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcGoogleDrivePickerDirective } from './google-drive/ngc-google-drive-picker.directive';
import { NgcDropboxPickerDirective } from './dropbox/ngc-dropbox-picker.directive';
import { NgcOneDrivePickerDirective } from './one-drive/ngc-one-drive-picker.directive';
import { Ngc_CLOUD_STORAGE_CONFIG, NgcCloudStorageConfig, Ngc_FILE_SERVICE, NgcFilePickerComponent } from './ngc-file-picker.component';
import { NgcFilePickerDirective } from './ngc-file-picker.directive';
import * as i0 from "@angular/core";
export class NgcFilePickerModule {
    /**
     * @constructor
     * @param {Type<NgcIFileService>} fileService
     */
    static forChild(fileService) {
        return {
            ngModule: NgcFilePickerModule,
            providers: [{ provide: Ngc_FILE_SERVICE, useClass: fileService }],
        };
    }
}
NgcFilePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcFilePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcFilePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcFilePickerModule, declarations: [NgcGoogleDrivePickerDirective, NgcDropboxPickerDirective, NgcOneDrivePickerDirective,
        NgcFilePickerComponent, NgcFilePickerDirective], imports: [RoundProgressModule, OverlayModule, PortalModule,
        CoreModule,
        NgcIconModule, NgcButtonModule, NgcTruncateModule,
        NgcTooltipModule], exports: [NgcGoogleDrivePickerDirective, NgcDropboxPickerDirective, NgcOneDrivePickerDirective,
        NgcFilePickerComponent, NgcFilePickerDirective] });
NgcFilePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcFilePickerModule, providers: [{ provide: Ngc_CLOUD_STORAGE_CONFIG, useClass: NgcCloudStorageConfig }], imports: [RoundProgressModule, OverlayModule, PortalModule,
        CoreModule,
        NgcIconModule, NgcButtonModule, NgcTruncateModule,
        NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcFilePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        RoundProgressModule, OverlayModule, PortalModule,
                        CoreModule,
                        NgcIconModule, NgcButtonModule, NgcTruncateModule,
                        NgcTooltipModule,
                    ],
                    exports: [
                        NgcGoogleDrivePickerDirective, NgcDropboxPickerDirective, NgcOneDrivePickerDirective,
                        NgcFilePickerComponent, NgcFilePickerDirective,
                    ],
                    declarations: [
                        NgcGoogleDrivePickerDirective, NgcDropboxPickerDirective, NgcOneDrivePickerDirective,
                        NgcFilePickerComponent, NgcFilePickerDirective,
                    ],
                    providers: [{ provide: Ngc_CLOUD_STORAGE_CONFIG, useClass: NgcCloudStorageConfig }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWZpbGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWZpbGUtcGlja2VyL25nYy1maWxlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQ04sd0JBQXdCLEVBQUUscUJBQXFCLEVBQy9DLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFxQnJFLE1BQU0sT0FBTyxtQkFBbUI7SUFFL0I7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBRSxXQUFrQztRQUN6RCxPQUFPO1lBQ04sUUFBUSxFQUFHLG1CQUFtQjtZQUM5QixTQUFTLEVBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUM7U0FDbEUsQ0FBQztJQUNILENBQUM7O2dIQVhXLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQUw5Qiw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEI7UUFDcEYsc0JBQXNCLEVBQUUsc0JBQXNCLGFBYjlDLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxZQUFZO1FBRWhELFVBQVU7UUFFVixhQUFhLEVBQUUsZUFBZSxFQUFFLGlCQUFpQjtRQUNqRCxnQkFBZ0IsYUFHaEIsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCO1FBQ3BGLHNCQUFzQixFQUFFLHNCQUFzQjtpSEFRbkMsbUJBQW1CLGFBRnBCLENBQUMsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLENBQUMsWUFmbEYsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLFlBQVk7UUFFaEQsVUFBVTtRQUVWLGFBQWEsRUFBRSxlQUFlLEVBQUUsaUJBQWlCO1FBQ2pELGdCQUFnQjsyRkFZTCxtQkFBbUI7a0JBbkIvQixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixtQkFBbUIsRUFBRSxhQUFhLEVBQUUsWUFBWTt3QkFFaEQsVUFBVTt3QkFFVixhQUFhLEVBQUUsZUFBZSxFQUFFLGlCQUFpQjt3QkFDakQsZ0JBQWdCO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsNkJBQTZCLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCO3dCQUNwRixzQkFBc0IsRUFBRSxzQkFBc0I7cUJBQzlDO29CQUNELFlBQVksRUFBRTt3QkFDYiw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEI7d0JBQ3BGLHNCQUFzQixFQUFFLHNCQUFzQjtxQkFDOUM7b0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLENBQUM7aUJBQ25GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFJvdW5kUHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICdhbmd1bGFyLXN2Zy1yb3VuZC1wcm9ncmVzc2Jhcic7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1idXR0b24nO1xuaW1wb3J0IHsgTmdjSWNvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1pY29uJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2NUcnVuY2F0ZU1vZHVsZSB9IGZyb20gJy4uL25nYy10cnVuY2F0ZSc7XG5cbmltcG9ydCB7IE5nY0dvb2dsZURyaXZlUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9nb29nbGUtZHJpdmUvbmdjLWdvb2dsZS1kcml2ZS1waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nY0Ryb3Bib3hQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bib3gvbmdjLWRyb3Bib3gtcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NPbmVEcml2ZVBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vb25lLWRyaXZlL25nYy1vbmUtZHJpdmUtcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuXHROZ2NfQ0xPVURfU1RPUkFHRV9DT05GSUcsIE5nY0Nsb3VkU3RvcmFnZUNvbmZpZyxcblx0TmdjX0ZJTEVfU0VSVklDRSwgTmdjSUZpbGVTZXJ2aWNlLFxuXHROZ2NGaWxlUGlja2VyQ29tcG9uZW50XG59IGZyb20gJy4vbmdjLWZpbGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NGaWxlUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ2MtZmlsZS1waWNrZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFJvdW5kUHJvZ3Jlc3NNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZSxcblxuXHRcdENvcmVNb2R1bGUsXG5cblx0XHROZ2NJY29uTW9kdWxlLCBOZ2NCdXR0b25Nb2R1bGUsIE5nY1RydW5jYXRlTW9kdWxlLFxuXHRcdE5nY1Rvb2x0aXBNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHROZ2NHb29nbGVEcml2ZVBpY2tlckRpcmVjdGl2ZSwgTmdjRHJvcGJveFBpY2tlckRpcmVjdGl2ZSwgTmdjT25lRHJpdmVQaWNrZXJEaXJlY3RpdmUsXG5cdFx0TmdjRmlsZVBpY2tlckNvbXBvbmVudCwgTmdjRmlsZVBpY2tlckRpcmVjdGl2ZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TmdjR29vZ2xlRHJpdmVQaWNrZXJEaXJlY3RpdmUsIE5nY0Ryb3Bib3hQaWNrZXJEaXJlY3RpdmUsIE5nY09uZURyaXZlUGlja2VyRGlyZWN0aXZlLFxuXHRcdE5nY0ZpbGVQaWNrZXJDb21wb25lbnQsIE5nY0ZpbGVQaWNrZXJEaXJlY3RpdmUsXG5cdF0sXG5cdHByb3ZpZGVyczogW3sgcHJvdmlkZTogTmdjX0NMT1VEX1NUT1JBR0VfQ09ORklHLCB1c2VDbGFzczogTmdjQ2xvdWRTdG9yYWdlQ29uZmlnIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NGaWxlUGlja2VyTW9kdWxlIHtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7VHlwZTxOZ2NJRmlsZVNlcnZpY2U+fSBmaWxlU2VydmljZVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBmb3JDaGlsZCggZmlsZVNlcnZpY2U6IFR5cGU8TmdjSUZpbGVTZXJ2aWNlPiApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nY0ZpbGVQaWNrZXJNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGVcdDogTmdjRmlsZVBpY2tlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyc1x0OiBbeyBwcm92aWRlOiBOZ2NfRklMRV9TRVJWSUNFLCB1c2VDbGFzczogZmlsZVNlcnZpY2UgfV0sXG5cdFx0fTtcblx0fVxuXG59XG4iXX0=