import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcDividerModule } from '../ngc-divider';
import { NgcTabGroupComponent } from './tab-group/ngc-tab-group.component';
import { NgcTabComponent } from './tab/ngc-tab.component';
import { NgcTabHeaderDirective } from './tab-header/ngc-tab-header.directive';
import { NgcTabContentDirective } from './tab-content/ngc-tab-content.directive';
import * as i0 from "@angular/core";
export class NgcTabsModule {
}
NgcTabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcTabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcTabsModule, declarations: [NgcTabGroupComponent, NgcTabComponent, NgcTabHeaderDirective, NgcTabContentDirective], imports: [CoreModule,
        NgcIconModule, NgcScrollBarModule, NgcDividerModule], exports: [NgcTabGroupComponent, NgcTabComponent, NgcTabHeaderDirective, NgcTabContentDirective] });
NgcTabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTabsModule, imports: [CoreModule,
        NgcIconModule, NgcScrollBarModule, NgcDividerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcIconModule, NgcScrollBarModule, NgcDividerModule,
                    ],
                    exports: [NgcTabGroupComponent, NgcTabComponent, NgcTabHeaderDirective, NgcTabContentDirective],
                    declarations: [NgcTabGroupComponent, NgcTabComponent, NgcTabHeaderDirective, NgcTabContentDirective],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRhYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdGFicy9uZ2MtdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQVlqRixNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQUhULG9CQUFvQixFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsYUFMbkcsVUFBVTtRQUVWLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsYUFFdkMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQjsyR0FJckYsYUFBYSxZQVJ4QixVQUFVO1FBRVYsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQjsyRkFNeEMsYUFBYTtrQkFWekIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFFVixhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCO3FCQUNuRDtvQkFDRCxPQUFPLEVBQUksQ0FBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLENBQUU7b0JBQ25HLFlBQVksRUFBRSxDQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBRTtvQkFDdEcsU0FBUyxFQUFHLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NJY29uTW9kdWxlIH0gZnJvbSAnLi4vbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjU2Nyb2xsQmFyTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXNjcm9sbC1iYXInO1xuaW1wb3J0IHsgTmdjRGl2aWRlck1vZHVsZSB9IGZyb20gJy4uL25nYy1kaXZpZGVyJztcblxuaW1wb3J0IHsgTmdjVGFiR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3RhYi1ncm91cC9uZ2MtdGFiLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi9uZ2MtdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NUYWJIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1oZWFkZXIvbmdjLXRhYi1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nY1RhYkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1jb250ZW50L25nYy10YWItY29udGVudC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29yZU1vZHVsZSxcblxuXHRcdE5nY0ljb25Nb2R1bGUsIE5nY1Njcm9sbEJhck1vZHVsZSwgTmdjRGl2aWRlck1vZHVsZSxcblx0XSxcblx0ZXhwb3J0c1x0XHQ6IFsgTmdjVGFiR3JvdXBDb21wb25lbnQsIE5nY1RhYkNvbXBvbmVudCwgTmdjVGFiSGVhZGVyRGlyZWN0aXZlLCBOZ2NUYWJDb250ZW50RGlyZWN0aXZlIF0sXG5cdGRlY2xhcmF0aW9uczogWyBOZ2NUYWJHcm91cENvbXBvbmVudCwgTmdjVGFiQ29tcG9uZW50LCBOZ2NUYWJIZWFkZXJEaXJlY3RpdmUsIE5nY1RhYkNvbnRlbnREaXJlY3RpdmUgXSxcblx0cHJvdmlkZXJzXHQ6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NUYWJzTW9kdWxlIHt9XG4iXX0=