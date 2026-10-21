import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcMenuModule } from '../ngc-menu';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcCropperComponent } from './ngc-cropper.component';
import * as i0 from "@angular/core";
export class NgcCropperModule {
}
NgcCropperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCropperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcCropperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcCropperModule, declarations: [NgcCropperComponent], imports: [CoreModule,
        NgcButtonModule, NgcMenuModule, NgcTooltipModule], exports: [NgcCropperComponent] });
NgcCropperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCropperModule, imports: [CoreModule,
        NgcButtonModule, NgcMenuModule, NgcTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCropperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcButtonModule, NgcMenuModule, NgcTooltipModule,
                    ],
                    exports: [NgcCropperComponent],
                    declarations: [NgcCropperComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNyb3BwZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtY3JvcHBlci9uZ2MtY3JvcHBlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFZOUQsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQUhaLG1CQUFtQixhQUxsQyxVQUFVO1FBRVYsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsYUFFcEMsbUJBQW1COzhHQUlwQixnQkFBZ0IsWUFSM0IsVUFBVTtRQUVWLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCOzJGQU1yQyxnQkFBZ0I7a0JBVjVCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7d0JBRVYsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0I7cUJBQ2hEO29CQUNELE9BQU8sRUFBSSxDQUFFLG1CQUFtQixDQUFFO29CQUNsQyxZQUFZLEVBQUUsQ0FBRSxtQkFBbUIsQ0FBRTtvQkFDckMsU0FBUyxFQUFHLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcbmltcG9ydCB7IE5nY01lbnVNb2R1bGUgfSBmcm9tICcuLi9uZ2MtbWVudSc7XG5pbXBvcnQgeyBOZ2NUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRvb2x0aXAnO1xuXG5pbXBvcnQgeyBOZ2NDcm9wcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtY3JvcHBlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29yZU1vZHVsZSxcblxuXHRcdE5nY0J1dHRvbk1vZHVsZSwgTmdjTWVudU1vZHVsZSwgTmdjVG9vbHRpcE1vZHVsZSxcblx0XSxcblx0ZXhwb3J0c1x0XHQ6IFsgTmdjQ3JvcHBlckNvbXBvbmVudCBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgTmdjQ3JvcHBlckNvbXBvbmVudCBdLFxuXHRwcm92aWRlcnNcdDogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0Nyb3BwZXJNb2R1bGUge31cbiJdfQ==