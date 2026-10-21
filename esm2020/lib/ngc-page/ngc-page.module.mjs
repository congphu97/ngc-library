import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcPageComponent } from './page/ngc-page.component';
import { NgcPageHeaderDirective } from './page-header/ngc-page-header.directive';
import { NgcPageContentDirective } from './page-content/ngc-page-content.directive';
import * as i0 from "@angular/core";
export class NgcPageModule {
}
NgcPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcPageModule, declarations: [NgcPageComponent, NgcPageHeaderDirective, NgcPageContentDirective], imports: [CoreModule,
        NgcScrollBarModule], exports: [NgcPageComponent, NgcPageHeaderDirective, NgcPageContentDirective] });
NgcPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageModule, imports: [CoreModule,
        NgcScrollBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcScrollBarModule,
                    ],
                    exports: [NgcPageComponent, NgcPageHeaderDirective, NgcPageContentDirective],
                    declarations: [NgcPageComponent, NgcPageHeaderDirective, NgcPageContentDirective],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtcGFnZS9uZ2MtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQVlwRixNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQUhULGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixhQUxoRixVQUFVO1FBRVYsa0JBQWtCLGFBRU4sZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCOzJHQUlsRSxhQUFhLFlBUnhCLFVBQVU7UUFFVixrQkFBa0I7MkZBTVAsYUFBYTtrQkFWekIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFFVixrQkFBa0I7cUJBQ2xCO29CQUNELE9BQU8sRUFBSSxDQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixDQUFFO29CQUNoRixZQUFZLEVBQUUsQ0FBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsQ0FBRTtvQkFDbkYsU0FBUyxFQUFHLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXJNb2R1bGUgfSBmcm9tICcuLi9uZ2Mtc2Nyb2xsLWJhcic7XG5cbmltcG9ydCB7IE5nY1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvbmdjLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY1BhZ2VIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BhZ2UtaGVhZGVyL25nYy1wYWdlLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjUGFnZUNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3BhZ2UtY29udGVudC9uZ2MtcGFnZS1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb3JlTW9kdWxlLFxuXG5cdFx0TmdjU2Nyb2xsQmFyTW9kdWxlLFxuXHRdLFxuXHRleHBvcnRzXHRcdDogWyBOZ2NQYWdlQ29tcG9uZW50LCBOZ2NQYWdlSGVhZGVyRGlyZWN0aXZlLCBOZ2NQYWdlQ29udGVudERpcmVjdGl2ZSBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgTmdjUGFnZUNvbXBvbmVudCwgTmdjUGFnZUhlYWRlckRpcmVjdGl2ZSwgTmdjUGFnZUNvbnRlbnREaXJlY3RpdmUgXSxcblx0cHJvdmlkZXJzXHQ6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NQYWdlTW9kdWxlIHt9XG4iXX0=