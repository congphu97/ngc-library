import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon';
import { NgcRadioModule } from '../ngc-radio';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcGridComponent } from './grid/ngc-grid.component';
import { NgcGridItemComponent } from './grid-item/ngc-grid-item.component';
import * as i0 from "@angular/core";
export class NgcGridModule {
}
NgcGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcGridModule, declarations: [NgcGridComponent, NgcGridItemComponent], imports: [DragDropModule,
        CoreModule,
        NgcIconModule, NgcRadioModule, NgcScrollBarModule], exports: [NgcGridComponent, NgcGridItemComponent] });
NgcGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcGridModule, imports: [DragDropModule,
        CoreModule,
        NgcIconModule, NgcRadioModule, NgcScrollBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        DragDropModule,
                        CoreModule,
                        NgcIconModule, NgcRadioModule, NgcScrollBarModule,
                    ],
                    exports: [NgcGridComponent, NgcGridItemComponent],
                    declarations: [NgcGridComponent, NgcGridItemComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZ3JpZC9uZ2MtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBYzNFLE1BQU0sT0FBTyxhQUFhOzswR0FBYixhQUFhOzJHQUFiLGFBQWEsaUJBSFQsZ0JBQWdCLEVBQUUsb0JBQW9CLGFBUHJELGNBQWM7UUFFZCxVQUFVO1FBRVYsYUFBYSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsYUFFckMsZ0JBQWdCLEVBQUUsb0JBQW9COzJHQUl2QyxhQUFhLFlBVnhCLGNBQWM7UUFFZCxVQUFVO1FBRVYsYUFBYSxFQUFFLGNBQWMsRUFBRSxrQkFBa0I7MkZBTXRDLGFBQWE7a0JBWnpCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGNBQWM7d0JBRWQsVUFBVTt3QkFFVixhQUFhLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjtxQkFDakQ7b0JBQ0QsT0FBTyxFQUFJLENBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUU7b0JBQ3JELFlBQVksRUFBRSxDQUFFLGdCQUFnQixFQUFFLG9CQUFvQixDQUFFO29CQUN4RCxTQUFTLEVBQUcsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjUmFkaW9Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtcmFkaW8nO1xuaW1wb3J0IHsgTmdjU2Nyb2xsQmFyTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXNjcm9sbC1iYXInO1xuXG5pbXBvcnQgeyBOZ2NHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkL25nYy1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1pdGVtL25nYy1ncmlkLWl0ZW0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdERyYWdEcm9wTW9kdWxlLFxuXG5cdFx0Q29yZU1vZHVsZSxcblxuXHRcdE5nY0ljb25Nb2R1bGUsIE5nY1JhZGlvTW9kdWxlLCBOZ2NTY3JvbGxCYXJNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHNcdFx0OiBbIE5nY0dyaWRDb21wb25lbnQsIE5nY0dyaWRJdGVtQ29tcG9uZW50IF0sXG5cdGRlY2xhcmF0aW9uczogWyBOZ2NHcmlkQ29tcG9uZW50LCBOZ2NHcmlkSXRlbUNvbXBvbmVudCBdLFxuXHRwcm92aWRlcnNcdDogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0dyaWRNb2R1bGUge31cbiJdfQ==