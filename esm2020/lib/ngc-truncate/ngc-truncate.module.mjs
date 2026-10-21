import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcTruncateComponent } from './ngc-truncate.component';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcBlockTruncateDirective } from './block-truncate/ngc-block-truncate.directive';
import * as i0 from "@angular/core";
export class NgcTruncateModule {
}
NgcTruncateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTruncateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcTruncateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcTruncateModule, declarations: [NgcTruncateComponent, NgcBlockTruncateDirective], imports: [CommonModule, NgcTooltipModule], exports: [NgcTruncateComponent, NgcBlockTruncateDirective] });
NgcTruncateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTruncateModule, imports: [CommonModule, NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTruncateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgcTruncateComponent, NgcBlockTruncateDirective
                    ],
                    imports: [
                        CommonModule, NgcTooltipModule
                    ],
                    exports: [
                        NgcTruncateComponent, NgcBlockTruncateDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRydW5jYXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRydW5jYXRlL25nYy10cnVuY2F0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0NBQStDLENBQUM7O0FBYTFGLE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFUMUIsb0JBQW9CLEVBQUUseUJBQXlCLGFBRy9DLFlBQVksRUFBRSxnQkFBZ0IsYUFHOUIsb0JBQW9CLEVBQUUseUJBQXlCOytHQUd0QyxpQkFBaUIsWUFOMUIsWUFBWSxFQUFFLGdCQUFnQjsyRkFNckIsaUJBQWlCO2tCQVg3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0IsRUFBRSx5QkFBeUI7cUJBQ2hEO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZLEVBQUUsZ0JBQWdCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CLEVBQUUseUJBQXlCO3FCQUNoRDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdjVHJ1bmNhdGVDb21wb25lbnQgfSBmcm9tICcuL25nYy10cnVuY2F0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL25nYy10b29sdGlwJztcbmltcG9ydCB7IE5nY0Jsb2NrVHJ1bmNhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2Jsb2NrLXRydW5jYXRlL25nYy1ibG9jay10cnVuY2F0ZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ2NUcnVuY2F0ZUNvbXBvbmVudCwgTmdjQmxvY2tUcnVuY2F0ZURpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBOZ2NUb29sdGlwTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ2NUcnVuY2F0ZUNvbXBvbmVudCwgTmdjQmxvY2tUcnVuY2F0ZURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nY1RydW5jYXRlTW9kdWxlIHsgfVxuIl19