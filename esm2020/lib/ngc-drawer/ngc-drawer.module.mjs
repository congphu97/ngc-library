import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcDrawerContainerComponent } from './drawer-container/ngc-drawer-container.component';
import { NgcDrawerComponent } from './drawer/ngc-drawer.component';
import { NgcDrawerLazyDirective } from './drawer/ngc-drawer-lazy.directive';
import { NgcDrawerContentComponent } from './drawer-content/ngc-drawer-content.component';
import * as i0 from "@angular/core";
export class NgcDrawerModule {
}
NgcDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerModule, declarations: [NgcDrawerContainerComponent, NgcDrawerComponent, NgcDrawerLazyDirective, NgcDrawerContentComponent], imports: [CoreModule,
        NgcButtonModule, NgcTooltipModule], exports: [NgcDrawerContainerComponent, NgcDrawerComponent, NgcDrawerLazyDirective, NgcDrawerContentComponent] });
NgcDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerModule, imports: [CoreModule,
        NgcButtonModule, NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcButtonModule, NgcTooltipModule,
                    ],
                    exports: [NgcDrawerContainerComponent, NgcDrawerComponent, NgcDrawerLazyDirective, NgcDrawerContentComponent],
                    declarations: [NgcDrawerContainerComponent, NgcDrawerComponent, NgcDrawerLazyDirective, NgcDrawerContentComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWRyYXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1kcmF3ZXIvbmdjLWRyYXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0NBQStDLENBQUM7O0FBWTFGLE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBSFgsMkJBQTJCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUseUJBQXlCLGFBTGpILFVBQVU7UUFFVixlQUFlLEVBQUUsZ0JBQWdCLGFBRXJCLDJCQUEyQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLHlCQUF5Qjs2R0FJbkcsZUFBZSxZQVIxQixVQUFVO1FBRVYsZUFBZSxFQUFFLGdCQUFnQjsyRkFNdEIsZUFBZTtrQkFWM0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFFVixlQUFlLEVBQUUsZ0JBQWdCO3FCQUNqQztvQkFDRCxPQUFPLEVBQUksQ0FBRSwyQkFBMkIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsQ0FBRTtvQkFDakgsWUFBWSxFQUFFLENBQUUsMkJBQTJCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUseUJBQXlCLENBQUU7b0JBQ3BILFNBQVMsRUFBRyxFQUFFO2lCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0Bjb3JlJztcblxuaW1wb3J0IHsgTmdjQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWJ1dHRvbic7XG5pbXBvcnQgeyBOZ2NUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRvb2x0aXAnO1xuaW1wb3J0IHsgTmdjRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kcmF3ZXItY29udGFpbmVyL25nYy1kcmF3ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL2RyYXdlci9uZ2MtZHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NEcmF3ZXJMYXp5RGlyZWN0aXZlIH0gZnJvbSAnLi9kcmF3ZXIvbmdjLWRyYXdlci1sYXp5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NEcmF3ZXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9kcmF3ZXItY29udGVudC9uZ2MtZHJhd2VyLWNvbnRlbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvcmVNb2R1bGUsXG5cblx0XHROZ2NCdXR0b25Nb2R1bGUsIE5nY1Rvb2x0aXBNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHNcdFx0OiBbIE5nY0RyYXdlckNvbnRhaW5lckNvbXBvbmVudCwgTmdjRHJhd2VyQ29tcG9uZW50LCBOZ2NEcmF3ZXJMYXp5RGlyZWN0aXZlLCBOZ2NEcmF3ZXJDb250ZW50Q29tcG9uZW50IF0sXG5cdGRlY2xhcmF0aW9uczogWyBOZ2NEcmF3ZXJDb250YWluZXJDb21wb25lbnQsIE5nY0RyYXdlckNvbXBvbmVudCwgTmdjRHJhd2VyTGF6eURpcmVjdGl2ZSwgTmdjRHJhd2VyQ29udGVudENvbXBvbmVudCBdLFxuXHRwcm92aWRlcnNcdDogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0RyYXdlck1vZHVsZSB7fVxuIl19