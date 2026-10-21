import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcDialogModule } from '../ngc-dialog';
import { NgcCarouselComponent } from './ngc-carousel.component';
import * as i0 from "@angular/core";
export class NgcCarouselModule {
}
NgcCarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcCarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcCarouselModule, declarations: [NgcCarouselComponent], imports: [CoreModule,
        NgcButtonModule, NgcIconModule, NgcScrollBarModule,
        NgcTooltipModule, NgcDialogModule], exports: [NgcCarouselComponent] });
NgcCarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCarouselModule, imports: [CoreModule,
        NgcButtonModule, NgcIconModule, NgcScrollBarModule,
        NgcTooltipModule, NgcDialogModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcButtonModule, NgcIconModule, NgcScrollBarModule,
                        NgcTooltipModule, NgcDialogModule,
                    ],
                    exports: [NgcCarouselComponent],
                    declarations: [NgcCarouselComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWNhcm91c2VsL25nYy1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQWFoRSxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBSGIsb0JBQW9CLGFBTm5DLFVBQVU7UUFFVixlQUFlLEVBQUUsYUFBYSxFQUFFLGtCQUFrQjtRQUNsRCxnQkFBZ0IsRUFBRSxlQUFlLGFBRXJCLG9CQUFvQjsrR0FJckIsaUJBQWlCLFlBVDVCLFVBQVU7UUFFVixlQUFlLEVBQUUsYUFBYSxFQUFFLGtCQUFrQjtRQUNsRCxnQkFBZ0IsRUFBRSxlQUFlOzJGQU10QixpQkFBaUI7a0JBWDdCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7d0JBRVYsZUFBZSxFQUFFLGFBQWEsRUFBRSxrQkFBa0I7d0JBQ2xELGdCQUFnQixFQUFFLGVBQWU7cUJBQ2pDO29CQUNELE9BQU8sRUFBSSxDQUFFLG9CQUFvQixDQUFFO29CQUNuQyxZQUFZLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTtvQkFDdEMsU0FBUyxFQUFHLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtaWNvbic7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXJNb2R1bGUgfSBmcm9tICcuLi9uZ2Mtc2Nyb2xsLWJhcic7XG5pbXBvcnQgeyBOZ2NUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRvb2x0aXAnO1xuaW1wb3J0IHsgTmdjRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWRpYWxvZyc7XG5cbmltcG9ydCB7IE5nY0Nhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtY2Fyb3VzZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvcmVNb2R1bGUsXG5cblx0XHROZ2NCdXR0b25Nb2R1bGUsIE5nY0ljb25Nb2R1bGUsIE5nY1Njcm9sbEJhck1vZHVsZSxcblx0XHROZ2NUb29sdGlwTW9kdWxlLCBOZ2NEaWFsb2dNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHNcdFx0OiBbIE5nY0Nhcm91c2VsQ29tcG9uZW50IF0sXG5cdGRlY2xhcmF0aW9uczogWyBOZ2NDYXJvdXNlbENvbXBvbmVudCBdLFxuXHRwcm92aWRlcnNcdDogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0Nhcm91c2VsTW9kdWxlIHt9XG4iXX0=