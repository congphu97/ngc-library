import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { Ngc_FILE_SERVICE } from '../ngc-file-picker';
import { NgcAvatarModule } from '../ngc-avatar';
import { NgcButtonModule } from '../ngc-button';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcCropperModule } from '../ngc-cropper';
import { NgcDialogModule } from '../ngc-dialog';
import { NgcEmojiPickerModule } from '../ngc-emoji-picker';
import { NgcIconModule } from '../ngc-icon';
import { NgcMenuModule } from '../ngc-menu';
import { NgcRadioModule } from '../ngc-radio';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcAvatarPickerComponent } from './ngc-avatar-picker.component';
import { NgcToastModule } from '../ngc-toast/ngc-toast.module';
import * as i0 from "@angular/core";
export class NgcAvatarPickerModule {
    /**
     * @constructor
     * @param {Type<NgcIFileService>} fileService
     */
    static forChild(fileService) {
        return {
            ngModule: NgcAvatarPickerModule,
            providers: [{ provide: Ngc_FILE_SERVICE, useClass: fileService }],
        };
    }
}
NgcAvatarPickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAvatarPickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcAvatarPickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcAvatarPickerModule, declarations: [NgcAvatarPickerComponent], imports: [CoreModule,
        NgcAvatarModule, NgcButtonModule, NgcColorPickerModule,
        NgcCropperModule, NgcDialogModule, NgcEmojiPickerModule,
        NgcIconModule, NgcMenuModule, NgcRadioModule,
        NgcToastModule, NgcTooltipModule, NgcTruncateModule], exports: [NgcAvatarPickerComponent] });
NgcAvatarPickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAvatarPickerModule, imports: [CoreModule,
        NgcAvatarModule, NgcButtonModule, NgcColorPickerModule,
        NgcCropperModule, NgcDialogModule, NgcEmojiPickerModule,
        NgcIconModule, NgcMenuModule, NgcRadioModule,
        NgcToastModule, NgcTooltipModule, NgcTruncateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAvatarPickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcAvatarModule, NgcButtonModule, NgcColorPickerModule,
                        NgcCropperModule, NgcDialogModule, NgcEmojiPickerModule,
                        NgcIconModule, NgcMenuModule, NgcRadioModule,
                        NgcToastModule, NgcTooltipModule, NgcTruncateModule,
                    ],
                    exports: [NgcAvatarPickerComponent],
                    declarations: [NgcAvatarPickerComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWF2YXRhci1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtYXZhdGFyLXBpY2tlci9uZ2MtYXZhdGFyLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVuQyxPQUFPLEVBQW1CLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQWMvRCxNQUFNLE9BQU8scUJBQXFCO0lBRWpDOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUUsV0FBa0M7UUFDekQsT0FBTztZQUNOLFFBQVEsRUFBRyxxQkFBcUI7WUFDaEMsU0FBUyxFQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO1NBQ2xFLENBQUM7SUFDSCxDQUFDOztrSEFYVyxxQkFBcUI7bUhBQXJCLHFCQUFxQixpQkFGakIsd0JBQXdCLGFBUnZDLFVBQVU7UUFFVixlQUFlLEVBQUUsZUFBZSxFQUFFLG9CQUFvQjtRQUN0RCxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsb0JBQW9CO1FBQ3ZELGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYztRQUM1QyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLGFBRXZDLHdCQUF3QjttSEFHekIscUJBQXFCLFlBVmhDLFVBQVU7UUFFVixlQUFlLEVBQUUsZUFBZSxFQUFFLG9CQUFvQjtRQUN0RCxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsb0JBQW9CO1FBQ3ZELGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYztRQUM1QyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCOzJGQUt4QyxxQkFBcUI7a0JBWmpDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7d0JBRVYsZUFBZSxFQUFFLGVBQWUsRUFBRSxvQkFBb0I7d0JBQ3RELGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0I7d0JBQ3ZELGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYzt3QkFDNUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQjtxQkFDbkQ7b0JBQ0QsT0FBTyxFQUFJLENBQUUsd0JBQXdCLENBQUU7b0JBQ3ZDLFlBQVksRUFBRSxDQUFFLHdCQUF3QixDQUFFO2lCQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY0lGaWxlU2VydmljZSwgTmdjX0ZJTEVfU0VSVklDRSB9IGZyb20gJy4uL25nYy1maWxlLXBpY2tlcic7XG5pbXBvcnQgeyBOZ2NBdmF0YXJNb2R1bGUgfSBmcm9tICcuLi9uZ2MtYXZhdGFyJztcbmltcG9ydCB7IE5nY0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1idXR0b24nO1xuaW1wb3J0IHsgTmdjQ29sb3JQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9uZ2MtY29sb3ItcGlja2VyJztcbmltcG9ydCB7IE5nY0Nyb3BwZXJNb2R1bGUgfSBmcm9tICcuLi9uZ2MtY3JvcHBlcic7XG5pbXBvcnQgeyBOZ2NEaWFsb2dNb2R1bGUgfSBmcm9tICcuLi9uZ2MtZGlhbG9nJztcbmltcG9ydCB7IE5nY0Vtb2ppUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWVtb2ppLXBpY2tlcic7XG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjTWVudU1vZHVsZSB9IGZyb20gJy4uL25nYy1tZW51JztcbmltcG9ydCB7IE5nY1JhZGlvTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXJhZGlvJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2NUcnVuY2F0ZU1vZHVsZSB9IGZyb20gJy4uL25nYy10cnVuY2F0ZSc7XG5pbXBvcnQgeyBOZ2NBdmF0YXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL25nYy1hdmF0YXItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NUb2FzdE1vZHVsZSB9IGZyb20gJy4uL25nYy10b2FzdC9uZ2MtdG9hc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvcmVNb2R1bGUsXG5cblx0XHROZ2NBdmF0YXJNb2R1bGUsIE5nY0J1dHRvbk1vZHVsZSwgTmdjQ29sb3JQaWNrZXJNb2R1bGUsXG5cdFx0TmdjQ3JvcHBlck1vZHVsZSwgTmdjRGlhbG9nTW9kdWxlLCBOZ2NFbW9qaVBpY2tlck1vZHVsZSxcblx0XHROZ2NJY29uTW9kdWxlLCBOZ2NNZW51TW9kdWxlLCBOZ2NSYWRpb01vZHVsZSxcblx0XHROZ2NUb2FzdE1vZHVsZSwgTmdjVG9vbHRpcE1vZHVsZSwgTmdjVHJ1bmNhdGVNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHNcdFx0OiBbIE5nY0F2YXRhclBpY2tlckNvbXBvbmVudCBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgTmdjQXZhdGFyUGlja2VyQ29tcG9uZW50IF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0F2YXRhclBpY2tlck1vZHVsZSB7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1R5cGU8TmdjSUZpbGVTZXJ2aWNlPn0gZmlsZVNlcnZpY2Vcblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoIGZpbGVTZXJ2aWNlOiBUeXBlPE5nY0lGaWxlU2VydmljZT4gKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ2NBdmF0YXJQaWNrZXJNb2R1bGU+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGVcdDogTmdjQXZhdGFyUGlja2VyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzXHQ6IFt7IHByb3ZpZGU6IE5nY19GSUxFX1NFUlZJQ0UsIHVzZUNsYXNzOiBmaWxlU2VydmljZSB9XSxcblx0XHR9O1xuXHR9XG5cbn1cbiJdfQ==