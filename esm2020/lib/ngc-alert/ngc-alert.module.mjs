import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon/ngc-icon.module';
import { NgcButtonModule } from '../ngc-button';
import { NgcAlertComponent } from './ngc-alert.component';
import * as i0 from "@angular/core";
export class NgcAlertModule {
}
NgcAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcAlertModule, declarations: [NgcAlertComponent], imports: [CommonModule, CoreModule, NgcIconModule, NgcButtonModule], exports: [NgcAlertComponent] });
NgcAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAlertModule, imports: [CommonModule, CoreModule, NgcIconModule, NgcButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CoreModule, NgcIconModule, NgcButtonModule],
                    exports: [NgcAlertComponent],
                    declarations: [NgcAlertComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWFsZXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWFsZXJ0L25nYy1hbGVydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFRMUQsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFIVixpQkFBaUIsYUFGcEIsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsZUFBZSxhQUN4RCxpQkFBaUI7NEdBSWxCLGNBQWMsWUFMYixZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxlQUFlOzJGQUt6RCxjQUFjO2tCQU4xQixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBSSxDQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBRTtvQkFDdkUsT0FBTyxFQUFJLENBQUUsaUJBQWlCLENBQUU7b0JBQ2hDLFlBQVksRUFBRSxDQUFFLGlCQUFpQixDQUFFO29CQUNuQyxTQUFTLEVBQUcsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgTmdjSWNvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1pY29uL25nYy1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcblxuaW1wb3J0IHsgTmdjQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL25nYy1hbGVydC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzXHRcdDogWyBDb21tb25Nb2R1bGUsIENvcmVNb2R1bGUsIE5nY0ljb25Nb2R1bGUsIE5nY0J1dHRvbk1vZHVsZSBdLFxuXHRleHBvcnRzXHRcdDogWyBOZ2NBbGVydENvbXBvbmVudCBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgTmdjQWxlcnRDb21wb25lbnQgXSxcblx0cHJvdmlkZXJzXHQ6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NBbGVydE1vZHVsZSB7fVxuIl19