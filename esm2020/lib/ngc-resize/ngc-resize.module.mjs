import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcResizableContainerComponent } from './ngc-resizable-container.component';
import { NgcResizablePanelComponent } from './ngc-resizable-panel.component';
import { NgcResizableHandleComponent } from './ngc-resizable-handle.component';
import * as i0 from "@angular/core";
export class NgcResizeModule {
}
NgcResizeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcResizeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcResizeModule, declarations: [NgcResizableContainerComponent,
        NgcResizablePanelComponent,
        NgcResizableHandleComponent], imports: [CommonModule], exports: [NgcResizableContainerComponent,
        NgcResizablePanelComponent,
        NgcResizableHandleComponent] });
NgcResizeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizeModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgcResizableContainerComponent,
                        NgcResizablePanelComponent,
                        NgcResizableHandleComponent,
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        NgcResizableContainerComponent,
                        NgcResizablePanelComponent,
                        NgcResizableHandleComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXJlc2l6ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1yZXNpemUvbmdjLXJlc2l6ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBaUIvRSxNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQWIxQiw4QkFBOEI7UUFDOUIsMEJBQTBCO1FBQzFCLDJCQUEyQixhQUczQixZQUFZLGFBR1osOEJBQThCO1FBQzlCLDBCQUEwQjtRQUMxQiwyQkFBMkI7NkdBR2hCLGVBQWUsWUFSMUIsWUFBWTsyRkFRRCxlQUFlO2tCQWYzQixRQUFRO21CQUFDO29CQUNULFlBQVksRUFBRTt3QkFDYiw4QkFBOEI7d0JBQzlCLDBCQUEwQjt3QkFDMUIsMkJBQTJCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsOEJBQThCO3dCQUM5QiwwQkFBMEI7d0JBQzFCLDJCQUEyQjtxQkFDM0I7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdjUmVzaXphYmxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtcmVzaXphYmxlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjUmVzaXphYmxlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL25nYy1yZXNpemFibGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY1Jlc2l6YWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vbmdjLXJlc2l6YWJsZS1oYW5kbGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TmdjUmVzaXphYmxlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRcdE5nY1Jlc2l6YWJsZVBhbmVsQ29tcG9uZW50LFxuXHRcdE5nY1Jlc2l6YWJsZUhhbmRsZUNvbXBvbmVudCxcblx0XSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdE5nY1Jlc2l6YWJsZUNvbnRhaW5lckNvbXBvbmVudCxcblx0XHROZ2NSZXNpemFibGVQYW5lbENvbXBvbmVudCxcblx0XHROZ2NSZXNpemFibGVIYW5kbGVDb21wb25lbnQsXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgTmdjUmVzaXplTW9kdWxlIHsgfVxuIl19