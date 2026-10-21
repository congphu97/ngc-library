import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcBreadcrumbItemComponent } from './breadcrumb-item/ngc-breadcrumb-item.component';
import { NgcBreadcrumbComponent } from './breadcrumb/ngc-breadcrumb.component';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';
import { NgcIconModule } from '../ngc-icon';
import * as i0 from "@angular/core";
export class NgcBreadcrumbModule {
}
NgcBreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcBreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcBreadcrumbModule, declarations: [NgcBreadcrumbItemComponent, NgcBreadcrumbComponent], imports: [CommonModule, NgcTruncateModule, NgcIconModule], exports: [NgcBreadcrumbItemComponent, NgcBreadcrumbComponent] });
NgcBreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBreadcrumbModule, imports: [CommonModule, NgcTruncateModule, NgcIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgcBreadcrumbItemComponent, NgcBreadcrumbComponent
                    ],
                    imports: [
                        CommonModule, NgcTruncateModule, NgcIconModule
                    ],
                    exports: [
                        NgcBreadcrumbItemComponent, NgcBreadcrumbComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJyZWFkY3J1bWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtYnJlYWRjcnVtYi9uZ2MtYnJlYWRjcnVtYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFhNUMsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQVQ1QiwwQkFBMEIsRUFBRSxzQkFBc0IsYUFHbEQsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsYUFHOUMsMEJBQTBCLEVBQUUsc0JBQXNCO2lIQUd6QyxtQkFBbUIsWUFONUIsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGFBQWE7MkZBTXJDLG1CQUFtQjtrQkFYL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osMEJBQTBCLEVBQUUsc0JBQXNCO3FCQUNuRDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGFBQWE7cUJBQy9DO29CQUNELE9BQU8sRUFBRTt3QkFDUCwwQkFBMEIsRUFBRSxzQkFBc0I7cUJBQ25EO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2NCcmVhZGNydW1iSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi1pdGVtL25nYy1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0JyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvbmdjLWJyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY1RydW5jYXRlTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRydW5jYXRlL25nYy10cnVuY2F0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmdjSWNvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1pY29uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdjQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQsIE5nY0JyZWFkY3J1bWJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgTmdjVHJ1bmNhdGVNb2R1bGUsIE5nY0ljb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nY0JyZWFkY3J1bWJJdGVtQ29tcG9uZW50LCBOZ2NCcmVhZGNydW1iQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdjQnJlYWRjcnVtYk1vZHVsZSB7IH1cbiJdfQ==