import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcColorPickerComponent } from './ngc-color-picker.component';
// import { NgcColorPickerDirective } from '../ngc-color-picker.directive';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorPhotoshopModule } from 'ngx-color/photoshop';
import { NgcColorDotComponent } from './color-dot/ngc-color-dot.component';
import { CoreModule } from '@app/@core';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcButtonModule } from '../ngc-button';
import { NgcColorPickerDirective } from './ngc-color-picker.directive';
import * as i0 from "@angular/core";
export class NgcColorPickerModule {
}
NgcColorPickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorPickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcColorPickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcColorPickerModule, declarations: [NgcColorPickerComponent,
        NgcColorDotComponent,
        NgcColorPickerDirective], imports: [CommonModule,
        CoreModule,
        OverlayModule, PortalModule, ColorSketchModule, ColorPhotoshopModule,
        NgcTooltipModule, NgcButtonModule], exports: [
        // NgcColorPickerDirective,
        NgcColorPickerComponent,
        NgcColorDotComponent, NgcColorPickerDirective] });
NgcColorPickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorPickerModule, imports: [CommonModule,
        CoreModule,
        OverlayModule, PortalModule, ColorSketchModule, ColorPhotoshopModule,
        NgcTooltipModule, NgcButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcColorPickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgcColorPickerComponent,
                        NgcColorDotComponent,
                        NgcColorPickerDirective,
                    ],
                    imports: [
                        CommonModule,
                        CoreModule,
                        OverlayModule, PortalModule, ColorSketchModule, ColorPhotoshopModule,
                        NgcTooltipModule, NgcButtonModule,
                    ],
                    exports: [
                        // NgcColorPickerDirective,
                        NgcColorPickerComponent,
                        NgcColorDotComponent, NgcColorPickerDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvbG9yLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jb2xvci1waWNrZXIvbmdjLWNvbG9yLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsMkVBQTJFO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQXdCdkUsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGlCQWpCN0IsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQix1QkFBdUIsYUFHdkIsWUFBWTtRQUNkLFVBQVU7UUFDUixhQUFhLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQjtRQUVwRSxnQkFBZ0IsRUFBRSxlQUFlO1FBR2pDLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsb0JBQW9CLEVBQUUsdUJBQXVCO2tIQUdwQyxvQkFBb0IsWUFaN0IsWUFBWTtRQUNkLFVBQVU7UUFDUixhQUFhLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQjtRQUVwRSxnQkFBZ0IsRUFBRSxlQUFlOzJGQVF4QixvQkFBb0I7a0JBbkJoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDZCxVQUFVO3dCQUNSLGFBQWEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CO3dCQUVwRSxnQkFBZ0IsRUFBRSxlQUFlO3FCQUNsQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLG9CQUFvQixFQUFFLHVCQUF1QjtxQkFDOUM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nY0NvbG9yUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBOZ2NDb2xvclBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4uL25nYy1jb2xvci1waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbG9yU2tldGNoTW9kdWxlIH0gZnJvbSAnbmd4LWNvbG9yL3NrZXRjaCc7XG5pbXBvcnQgeyBDb2xvclBob3Rvc2hvcE1vZHVsZSB9IGZyb20gJ25neC1jb2xvci9waG90b3Nob3AnXG5pbXBvcnQgeyBOZ2NDb2xvckRvdENvbXBvbmVudCB9IGZyb20gJy4vY29sb3ItZG90L25nYy1jb2xvci1kb3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYXBwL0Bjb3JlJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcbmltcG9ydCB7IE5nY0NvbG9yUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ2MtY29sb3ItcGlja2VyLmRpcmVjdGl2ZSc7XG5cblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nY0NvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIE5nY0NvbG9yRG90Q29tcG9uZW50LFxuICAgIE5nY0NvbG9yUGlja2VyRGlyZWN0aXZlLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBcblx0XHRDb3JlTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZSwgQ29sb3JTa2V0Y2hNb2R1bGUsIENvbG9yUGhvdG9zaG9wTW9kdWxlLFxuXG4gICAgTmdjVG9vbHRpcE1vZHVsZSwgTmdjQnV0dG9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLy8gTmdjQ29sb3JQaWNrZXJEaXJlY3RpdmUsXG4gICAgTmdjQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgTmdjQ29sb3JEb3RDb21wb25lbnQsIE5nY0NvbG9yUGlja2VyRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdjQ29sb3JQaWNrZXJNb2R1bGUgeyB9XG4iXX0=