import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcAccordionComponent } from './accordion/ngc-accordion.component';
import { NgcExpansionPanelComponent } from './expansion-panel/ngc-expansion-panel.component';
import { NgcExpansionPanelHeaderComponent } from './expansion-panel-header/ngc-expansion-panel-header.component';
import { NgcExpansionPanelContentComponent } from './expansion-panel-content/ngc-expansion-panel-content.component';
import { NgcExpansionPanelContentDirective } from './expansion-panel-content/ngc-expansion-panel-content.directive';
import * as i0 from "@angular/core";
export class NgcExpansionPanelModule {
}
NgcExpansionPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExpansionPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcExpansionPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcExpansionPanelModule, declarations: [NgcAccordionComponent, NgcExpansionPanelComponent, NgcExpansionPanelHeaderComponent,
        NgcExpansionPanelContentComponent, NgcExpansionPanelContentDirective], imports: [DragDropModule,
        CoreModule,
        NgcIconModule, NgcScrollBarModule], exports: [NgcAccordionComponent, NgcExpansionPanelComponent, NgcExpansionPanelHeaderComponent,
        NgcExpansionPanelContentComponent, NgcExpansionPanelContentDirective] });
NgcExpansionPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExpansionPanelModule, imports: [DragDropModule,
        CoreModule,
        NgcIconModule, NgcScrollBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExpansionPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        DragDropModule,
                        CoreModule,
                        NgcIconModule, NgcScrollBarModule,
                    ],
                    exports: [
                        NgcAccordionComponent, NgcExpansionPanelComponent, NgcExpansionPanelHeaderComponent,
                        NgcExpansionPanelContentComponent, NgcExpansionPanelContentDirective,
                    ],
                    declarations: [
                        NgcAccordionComponent, NgcExpansionPanelComponent, NgcExpansionPanelHeaderComponent,
                        NgcExpansionPanelContentComponent, NgcExpansionPanelContentDirective,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWV4cGFuc2lvbi1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1leHBhbnNpb24tcGFuZWwvbmdjLWV4cGFuc2lvbi1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOztBQW9CcEgsTUFBTSxPQUFPLHVCQUF1Qjs7b0hBQXZCLHVCQUF1QjtxSEFBdkIsdUJBQXVCLGlCQUxsQyxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0M7UUFDbkYsaUNBQWlDLEVBQUUsaUNBQWlDLGFBWnBFLGNBQWM7UUFFZCxVQUFVO1FBRVYsYUFBYSxFQUFFLGtCQUFrQixhQUdqQyxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0M7UUFDbkYsaUNBQWlDLEVBQUUsaUNBQWlDO3FIQVF6RCx1QkFBdUIsWUFoQmxDLGNBQWM7UUFFZCxVQUFVO1FBRVYsYUFBYSxFQUFFLGtCQUFrQjsyRkFZdEIsdUJBQXVCO2tCQWxCbkMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsY0FBYzt3QkFFZCxVQUFVO3dCQUVWLGFBQWEsRUFBRSxrQkFBa0I7cUJBQ2pDO29CQUNELE9BQU8sRUFBRTt3QkFDUixxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0M7d0JBQ25GLGlDQUFpQyxFQUFFLGlDQUFpQztxQkFDcEU7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLGdDQUFnQzt3QkFDbkYsaUNBQWlDLEVBQUUsaUNBQWlDO3FCQUNwRTtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjU2Nyb2xsQmFyTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXNjcm9sbC1iYXInO1xuXG5pbXBvcnQgeyBOZ2NBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi9uZ2MtYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NFeHBhbnNpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsL25nYy1leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0V4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtaGVhZGVyL25nYy1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NFeHBhbnNpb25QYW5lbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1jb250ZW50L25nYy1leHBhbnNpb24tcGFuZWwtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjRXhwYW5zaW9uUGFuZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtY29udGVudC9uZ2MtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdERyYWdEcm9wTW9kdWxlLFxuXG5cdFx0Q29yZU1vZHVsZSxcblxuXHRcdE5nY0ljb25Nb2R1bGUsIE5nY1Njcm9sbEJhck1vZHVsZSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdE5nY0FjY29yZGlvbkNvbXBvbmVudCwgTmdjRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsIE5nY0V4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50LFxuXHRcdE5nY0V4cGFuc2lvblBhbmVsQ29udGVudENvbXBvbmVudCwgTmdjRXhwYW5zaW9uUGFuZWxDb250ZW50RGlyZWN0aXZlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHROZ2NBY2NvcmRpb25Db21wb25lbnQsIE5nY0V4cGFuc2lvblBhbmVsQ29tcG9uZW50LCBOZ2NFeHBhbnNpb25QYW5lbEhlYWRlckNvbXBvbmVudCxcblx0XHROZ2NFeHBhbnNpb25QYW5lbENvbnRlbnRDb21wb25lbnQsIE5nY0V4cGFuc2lvblBhbmVsQ29udGVudERpcmVjdGl2ZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjRXhwYW5zaW9uUGFuZWxNb2R1bGUge31cbiJdfQ==