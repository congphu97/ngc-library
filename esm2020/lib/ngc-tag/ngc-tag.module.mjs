import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcMenuModule } from '../ngc-menu';
import { NgcTagListComponent } from './tag-list/ngc-tag-list.component';
import { NgcTagComponent } from './tag/ngc-tag.component';
import * as i0 from "@angular/core";
export class NgcTagModule {
}
NgcTagModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTagModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcTagModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcTagModule, declarations: [NgcTagListComponent, NgcTagComponent], imports: [CoreModule,
        NgcTruncateModule, NgcTooltipModule, NgcMenuModule], exports: [NgcTagListComponent, NgcTagComponent] });
NgcTagModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTagModule, imports: [CoreModule,
        NgcTruncateModule, NgcTooltipModule, NgcMenuModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTagModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcTruncateModule, NgcTooltipModule, NgcMenuModule,
                    ],
                    exports: [NgcTagListComponent, NgcTagComponent],
                    declarations: [NgcTagListComponent, NgcTagComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRhZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10YWcvbmdjLXRhZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQVkxRCxNQUFNLE9BQU8sWUFBWTs7eUdBQVosWUFBWTswR0FBWixZQUFZLGlCQUhSLG1CQUFtQixFQUFFLGVBQWUsYUFMbkQsVUFBVTtRQUVWLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsYUFFdEMsbUJBQW1CLEVBQUUsZUFBZTswR0FJckMsWUFBWSxZQVJ2QixVQUFVO1FBRVYsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTsyRkFNdkMsWUFBWTtrQkFWeEIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFFVixpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhO3FCQUNsRDtvQkFDRCxPQUFPLEVBQUksQ0FBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUU7b0JBQ25ELFlBQVksRUFBRSxDQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBRTtvQkFDdEQsU0FBUyxFQUFHLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NUcnVuY2F0ZU1vZHVsZSB9IGZyb20gJy4uL25nYy10cnVuY2F0ZSc7XG5pbXBvcnQgeyBOZ2NUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbmdjLXRvb2x0aXAnO1xuaW1wb3J0IHsgTmdjTWVudU1vZHVsZSB9IGZyb20gJy4uL25nYy1tZW51JztcblxuaW1wb3J0IHsgTmdjVGFnTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdGFnLWxpc3QvbmdjLXRhZy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NUYWdDb21wb25lbnQgfSBmcm9tICcuL3RhZy9uZ2MtdGFnLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb3JlTW9kdWxlLFxuXG5cdFx0TmdjVHJ1bmNhdGVNb2R1bGUsIE5nY1Rvb2x0aXBNb2R1bGUsIE5nY01lbnVNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHNcdFx0OiBbIE5nY1RhZ0xpc3RDb21wb25lbnQsIE5nY1RhZ0NvbXBvbmVudCBdLFxuXHRkZWNsYXJhdGlvbnM6IFsgTmdjVGFnTGlzdENvbXBvbmVudCwgTmdjVGFnQ29tcG9uZW50IF0sXG5cdHByb3ZpZGVyc1x0OiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdjVGFnTW9kdWxlIHt9XG4iXX0=