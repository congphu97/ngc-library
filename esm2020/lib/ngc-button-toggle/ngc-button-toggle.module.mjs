import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon';
import { NgcButtonToggleComponent } from './ngc-button-toggle/ngc-button-toggle.component';
import { NgcButtonToggleItemComponent } from './ngc-button-toggle-item/ngc-button-toggle-item.component';
import * as i0 from "@angular/core";
export class NgcButtonToggleModule {
}
NgcButtonToggleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonToggleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcButtonToggleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonToggleModule, declarations: [NgcButtonToggleComponent, NgcButtonToggleItemComponent], imports: [CoreModule,
        NgcIconModule], exports: [NgcButtonToggleComponent, NgcButtonToggleItemComponent] });
NgcButtonToggleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonToggleModule, imports: [CoreModule,
        NgcIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonToggleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcIconModule,
                    ],
                    exports: [NgcButtonToggleComponent, NgcButtonToggleItemComponent],
                    declarations: [NgcButtonToggleComponent, NgcButtonToggleItemComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJ1dHRvbi10b2dnbGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtYnV0dG9uLXRvZ2dsZS9uZ2MtYnV0dG9uLXRvZ2dsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkRBQTJELENBQUM7O0FBWXpHLE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7bUhBQXJCLHFCQUFxQixpQkFIakIsd0JBQXdCLEVBQUUsNEJBQTRCLGFBTHJFLFVBQVU7UUFFVixhQUFhLGFBRUQsd0JBQXdCLEVBQUUsNEJBQTRCO21IQUl2RCxxQkFBcUIsWUFSaEMsVUFBVTtRQUVWLGFBQWE7MkZBTUYscUJBQXFCO2tCQVZqQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixVQUFVO3dCQUVWLGFBQWE7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFJLENBQUUsd0JBQXdCLEVBQUUsNEJBQTRCLENBQUU7b0JBQ3JFLFlBQVksRUFBRSxDQUFFLHdCQUF3QixFQUFFLDRCQUE0QixDQUFFO29CQUN4RSxTQUFTLEVBQUcsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtaWNvbic7XG5cbmltcG9ydCB7IE5nY0J1dHRvblRvZ2dsZUNvbXBvbmVudCB9IGZyb20gJy4vbmdjLWJ1dHRvbi10b2dnbGUvbmdjLWJ1dHRvbi10b2dnbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY0J1dHRvblRvZ2dsZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25nYy1idXR0b24tdG9nZ2xlLWl0ZW0vbmdjLWJ1dHRvbi10b2dnbGUtaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29yZU1vZHVsZSxcblxuXHRcdE5nY0ljb25Nb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHNcdFx0OiBbIE5nY0J1dHRvblRvZ2dsZUNvbXBvbmVudCwgTmdjQnV0dG9uVG9nZ2xlSXRlbUNvbXBvbmVudCBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgTmdjQnV0dG9uVG9nZ2xlQ29tcG9uZW50LCBOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50IF0sXG5cdHByb3ZpZGVyc1x0OiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjQnV0dG9uVG9nZ2xlTW9kdWxlIHt9XG4iXX0=