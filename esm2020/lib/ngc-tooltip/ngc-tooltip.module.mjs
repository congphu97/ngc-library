import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core';
import { NgcTooltipComponent } from './ngc-tooltip.component';
import { NgcTooltipDirective } from '../ngc-tooltip.directive';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export class NgcTooltipModule {
}
NgcTooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcTooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcTooltipModule, declarations: [NgcTooltipComponent,
        NgcTooltipDirective], imports: [CommonModule,
        CoreModule,
        OverlayModule, PortalModule], exports: [NgcTooltipDirective,
        NgcTooltipComponent] });
NgcTooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTooltipModule, imports: [CommonModule,
        CoreModule,
        OverlayModule, PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgcTooltipComponent,
                        NgcTooltipDirective,
                    ],
                    imports: [
                        CommonModule,
                        CoreModule,
                        OverlayModule, PortalModule,
                    ],
                    exports: [
                        NgcTooltipDirective,
                        NgcTooltipComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRvb2x0aXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdG9vbHRpcC9uZ2MtdG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNuQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQW1CckQsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQWJ6QixtQkFBbUI7UUFDbkIsbUJBQW1CLGFBR25CLFlBQVk7UUFDWixVQUFVO1FBQ1YsYUFBYSxFQUFFLFlBQVksYUFHM0IsbUJBQW1CO1FBQ25CLG1CQUFtQjs4R0FHVixnQkFBZ0IsWUFUekIsWUFBWTtRQUNaLFVBQVU7UUFDVixhQUFhLEVBQUUsWUFBWTsyRkFPbEIsZ0JBQWdCO2tCQWY1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixhQUFhLEVBQUUsWUFBWTtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL25nYy10b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vbmdjLXRvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nY1Rvb2x0aXBDb21wb25lbnQsXG4gICAgTmdjVG9vbHRpcERpcmVjdGl2ZSxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nY1Rvb2x0aXBEaXJlY3RpdmUsXG4gICAgTmdjVG9vbHRpcENvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2NUb29sdGlwTW9kdWxlIHsgfVxuIl19