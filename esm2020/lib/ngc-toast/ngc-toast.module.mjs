import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcToastGroupComponent } from './toast-group/ngc-toast-group.component';
import { NgcToastComponent } from './toast/ngc-toast.component';
import { NgcToastService } from './toast/ngc-toast.service';
import { NgcIconModule } from '../ngc-icon';
import { NgcAlertModule } from '../ngc-alert/ngc-alert.module';
import { CoreModule } from '@app/@core';
import * as i0 from "@angular/core";
export class NgcToastModule {
}
NgcToastModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcToastModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcToastModule, declarations: [NgcToastComponent, NgcToastGroupComponent], imports: [CoreModule, CommonModule, NgcIconModule, NgcAlertModule], exports: [NgcToastComponent, NgcToastGroupComponent] });
NgcToastModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcToastModule, providers: [NgcToastService], imports: [CoreModule, CommonModule, NgcIconModule, NgcAlertModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcToastModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgcToastComponent, NgcToastGroupComponent],
                    imports: [CoreModule, CommonModule, NgcIconModule, NgcAlertModule],
                    exports: [NgcToastComponent, NgcToastGroupComponent],
                    providers: [NgcToastService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRvYXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRvYXN0L25nYy10b2FzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBUXhDLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBTFQsaUJBQWlCLEVBQUUsc0JBQXNCLGFBQzlDLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsYUFDdkQsaUJBQWlCLEVBQUUsc0JBQXNCOzRHQUd6QyxjQUFjLGFBRmQsQ0FBRSxlQUFlLENBQUUsWUFGbkIsVUFBVSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYzsyRkFJdkQsY0FBYztrQkFOMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBRSxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBRTtvQkFDM0QsT0FBTyxFQUFFLENBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFFO29CQUNwRSxPQUFPLEVBQUUsQ0FBRSxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBRTtvQkFDdEQsU0FBUyxFQUFFLENBQUUsZUFBZSxDQUFFO2lCQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ2NUb2FzdEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC1ncm91cC9uZ2MtdG9hc3QtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY1RvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC9uZ2MtdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY1RvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3QvbmdjLXRvYXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdjSWNvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1pY29uJztcbmltcG9ydCB7IE5nY0FsZXJ0TW9kdWxlIH0gZnJvbSAnLi4vbmdjLWFsZXJ0L25nYy1hbGVydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhcHAvQGNvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsgTmdjVG9hc3RDb21wb25lbnQsIE5nY1RvYXN0R3JvdXBDb21wb25lbnQgXSxcbiAgaW1wb3J0czogWyBDb3JlTW9kdWxlLCBDb21tb25Nb2R1bGUsIE5nY0ljb25Nb2R1bGUsIE5nY0FsZXJ0TW9kdWxlIF0sXG4gIGV4cG9ydHM6IFsgTmdjVG9hc3RDb21wb25lbnQsIE5nY1RvYXN0R3JvdXBDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzOiBbIE5nY1RvYXN0U2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5nY1RvYXN0TW9kdWxlIHsgfVxuIl19