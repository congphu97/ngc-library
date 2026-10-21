import { NgModule } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcEmojiPickerComponent } from './emoji-picker/ngc-emoji-picker.component';
import { NgcEmojiPickerDirective } from './emoji-picker/ngc-emoji-picker.directive';
import { NgcEmojiComponent } from './emoji/ngc-emoji.component';
import * as i0 from "@angular/core";
export class NgcEmojiPickerModule {
}
NgcEmojiPickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcEmojiPickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcEmojiPickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcEmojiPickerModule, declarations: [NgcEmojiPickerComponent, NgcEmojiPickerDirective, NgcEmojiComponent], imports: [OverlayModule, PortalModule, PickerModule,
        CoreModule,
        NgcButtonModule, NgcTooltipModule], exports: [NgcEmojiPickerComponent, NgcEmojiPickerDirective, NgcEmojiComponent] });
NgcEmojiPickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcEmojiPickerModule, imports: [OverlayModule, PortalModule, PickerModule,
        CoreModule,
        NgcButtonModule, NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcEmojiPickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        OverlayModule, PortalModule, PickerModule,
                        CoreModule,
                        NgcButtonModule, NgcTooltipModule,
                    ],
                    exports: [NgcEmojiPickerComponent, NgcEmojiPickerDirective, NgcEmojiComponent],
                    declarations: [NgcEmojiPickerComponent, NgcEmojiPickerDirective, NgcEmojiComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWVtb2ppLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1lbW9qaS1waWNrZXIvbmdjLWVtb2ppLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBY2hFLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFIaEIsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLGFBUGxGLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWTtRQUV6QyxVQUFVO1FBRVYsZUFBZSxFQUFFLGdCQUFnQixhQUVyQix1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUI7a0hBSXBFLG9CQUFvQixZQVYvQixhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVk7UUFFekMsVUFBVTtRQUVWLGVBQWUsRUFBRSxnQkFBZ0I7MkZBTXRCLG9CQUFvQjtrQkFaaEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZO3dCQUV6QyxVQUFVO3dCQUVWLGVBQWUsRUFBRSxnQkFBZ0I7cUJBQ2pDO29CQUNELE9BQU8sRUFBSSxDQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixDQUFFO29CQUNsRixZQUFZLEVBQUUsQ0FBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsQ0FBRTtvQkFDckYsU0FBUyxFQUFHLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlja2VyTW9kdWxlIH0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2NFbW9qaVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZW1vamktcGlja2VyL25nYy1lbW9qaS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0Vtb2ppUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9lbW9qaS1waWNrZXIvbmdjLWVtb2ppLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjRW1vamlDb21wb25lbnQgfSBmcm9tICcuL2Vtb2ppL25nYy1lbW9qaS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0T3ZlcmxheU1vZHVsZSwgUG9ydGFsTW9kdWxlLCBQaWNrZXJNb2R1bGUsXG5cblx0XHRDb3JlTW9kdWxlLFxuXG5cdFx0TmdjQnV0dG9uTW9kdWxlLCBOZ2NUb29sdGlwTW9kdWxlLFxuXHRdLFxuXHRleHBvcnRzXHRcdDogWyBOZ2NFbW9qaVBpY2tlckNvbXBvbmVudCwgTmdjRW1vamlQaWNrZXJEaXJlY3RpdmUsIE5nY0Vtb2ppQ29tcG9uZW50IF0sXG5cdGRlY2xhcmF0aW9uczogWyBOZ2NFbW9qaVBpY2tlckNvbXBvbmVudCwgTmdjRW1vamlQaWNrZXJEaXJlY3RpdmUsIE5nY0Vtb2ppQ29tcG9uZW50IF0sXG5cdHByb3ZpZGVyc1x0OiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjRW1vamlQaWNrZXJNb2R1bGUge31cbiJdfQ==