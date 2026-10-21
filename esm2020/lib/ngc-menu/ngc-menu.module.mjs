import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcMenuComponent } from './menu/ngc-menu.component';
import { NgcMenuItemComponent } from './menu-item/ngc-menu-item.component';
import { NgcMenuHeaderTitleComponent } from './menu-header-title/ngc-menu-header-title.component';
import { NgcMenuContentComponent } from './menu-content/ngc-menu-content.component';
import { NgcMenuContentDirective } from './menu-content/ngc-menu-content.directive';
import { NgcMenuHeaderComponent } from './menu-header/ngc-menu-header.component';
import { NgcMenuHeaderDirective } from './menu-header/ngc-menu-header.directive';
import { NgcMenuFooterComponent } from './menu-footer/ngc-menu-footer.component';
import { NgcMenuFooterDirective } from './menu-footer/ngc-menu-footer.directive';
import { NgcMenuTriggerForDirective } from './menu-trigger-for/ngc-menu-trigger-for.directive';
import { NgcMenuButtonCloseDirective } from './menu-button-close/ngc-menu-button-close.directive';
import { NgcMenuItemPrefixDirective } from './menu-item-prefix/ngc-menu-item-prefix.directive';
import { NgcMenuItemIconDirective } from './menu-item-icon/ngc-menu-item-icon.directive';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';
import * as i0 from "@angular/core";
export class NgcMenuModule {
}
NgcMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuModule, declarations: [NgcMenuComponent, NgcMenuItemComponent, NgcMenuHeaderComponent,
        NgcMenuHeaderDirective, NgcMenuHeaderTitleComponent, NgcMenuFooterComponent,
        NgcMenuFooterDirective, NgcMenuContentComponent, NgcMenuContentDirective,
        NgcMenuTriggerForDirective, NgcMenuButtonCloseDirective, NgcMenuItemIconDirective,
        NgcMenuItemPrefixDirective, NgcMenuItemPrefixDirective], imports: [OverlayModule, PortalModule,
        CoreModule,
        NgcIconModule, NgcScrollBarModule, NgcTruncateModule,
        NgcButtonModule, NgcTooltipModule, NgcColorPickerModule], exports: [NgcMenuComponent, NgcMenuItemComponent, NgcMenuHeaderComponent,
        NgcMenuHeaderDirective, NgcMenuHeaderTitleComponent, NgcMenuFooterComponent,
        NgcMenuFooterDirective, NgcMenuContentComponent, NgcMenuContentDirective,
        NgcMenuTriggerForDirective, NgcMenuButtonCloseDirective, NgcMenuItemIconDirective,
        NgcMenuItemPrefixDirective, NgcMenuItemPrefixDirective] });
NgcMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuModule, imports: [OverlayModule, PortalModule,
        CoreModule,
        NgcIconModule, NgcScrollBarModule, NgcTruncateModule,
        NgcButtonModule, NgcTooltipModule, NgcColorPickerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        OverlayModule, PortalModule,
                        CoreModule,
                        NgcIconModule, NgcScrollBarModule, NgcTruncateModule,
                        NgcButtonModule, NgcTooltipModule, NgcColorPickerModule,
                    ],
                    exports: [
                        NgcMenuComponent, NgcMenuItemComponent, NgcMenuHeaderComponent,
                        NgcMenuHeaderDirective, NgcMenuHeaderTitleComponent, NgcMenuFooterComponent,
                        NgcMenuFooterDirective, NgcMenuContentComponent, NgcMenuContentDirective,
                        NgcMenuTriggerForDirective, NgcMenuButtonCloseDirective, NgcMenuItemIconDirective,
                        NgcMenuItemPrefixDirective, NgcMenuItemPrefixDirective,
                    ],
                    declarations: [
                        NgcMenuComponent, NgcMenuItemComponent, NgcMenuHeaderComponent,
                        NgcMenuHeaderDirective, NgcMenuHeaderTitleComponent, NgcMenuFooterComponent,
                        NgcMenuFooterDirective, NgcMenuContentComponent, NgcMenuContentDirective,
                        NgcMenuTriggerForDirective, NgcMenuButtonCloseDirective, NgcMenuItemIconDirective,
                        NgcMenuItemPrefixDirective, NgcMenuItemPrefixDirective,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtbWVudS9uZ2MtbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQTJCeEUsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkFSeEIsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCO1FBQzlELHNCQUFzQixFQUFFLDJCQUEyQixFQUFFLHNCQUFzQjtRQUMzRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUI7UUFDeEUsMEJBQTBCLEVBQUUsMkJBQTJCLEVBQUUsd0JBQXdCO1FBQ2pGLDBCQUEwQixFQUFFLDBCQUEwQixhQW5CdEQsYUFBYSxFQUFFLFlBQVk7UUFFM0IsVUFBVTtRQUVWLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUI7UUFDcEQsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixhQUd2RCxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0I7UUFDOUQsc0JBQXNCLEVBQUUsMkJBQTJCLEVBQUUsc0JBQXNCO1FBQzNFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QjtRQUN4RSwwQkFBMEIsRUFBRSwyQkFBMkIsRUFBRSx3QkFBd0I7UUFDakYsMEJBQTBCLEVBQUUsMEJBQTBCOzJHQVczQyxhQUFhLFlBdkJ4QixhQUFhLEVBQUUsWUFBWTtRQUUzQixVQUFVO1FBRVYsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQjtRQUNwRCxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9COzJGQWtCNUMsYUFBYTtrQkF6QnpCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGFBQWEsRUFBRSxZQUFZO3dCQUUzQixVQUFVO3dCQUVWLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUI7d0JBQ3BELGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0I7cUJBQ3ZEO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0I7d0JBQzlELHNCQUFzQixFQUFFLDJCQUEyQixFQUFFLHNCQUFzQjt3QkFDM0Usc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCO3dCQUN4RSwwQkFBMEIsRUFBRSwyQkFBMkIsRUFBRSx3QkFBd0I7d0JBQ2pGLDBCQUEwQixFQUFFLDBCQUEwQjtxQkFDdEQ7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjt3QkFDOUQsc0JBQXNCLEVBQUUsMkJBQTJCLEVBQUUsc0JBQXNCO3dCQUMzRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUI7d0JBQ3hFLDBCQUEwQixFQUFFLDJCQUEyQixFQUFFLHdCQUF3Qjt3QkFDakYsMEJBQTBCLEVBQUUsMEJBQTBCO3FCQUN0RDtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtaWNvbic7XG5pbXBvcnQgeyBOZ2NTY3JvbGxCYXJNb2R1bGUgfSBmcm9tICcuLi9uZ2Mtc2Nyb2xsLWJhcic7XG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcbmltcG9ydCB7IE5nY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2NDb2xvclBpY2tlck1vZHVsZSB9IGZyb20gJy4uL25nYy1jb2xvci1waWNrZXInO1xuXG5pbXBvcnQgeyBOZ2NNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L25nYy1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NNZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS1pdGVtL25nYy1tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE5nY01lbnVIZWFkZXJUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS1oZWFkZXItdGl0bGUvbmdjLW1lbnUtaGVhZGVyLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NNZW51Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbWVudS1jb250ZW50L25nYy1tZW51LWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IE5nY01lbnVDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWNvbnRlbnQvbmdjLW1lbnUtY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjTWVudUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbWVudS1oZWFkZXIvbmdjLW1lbnUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NNZW51SGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWhlYWRlci9uZ2MtbWVudS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nY01lbnVGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL21lbnUtZm9vdGVyL25nYy1tZW51LWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjTWVudUZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1mb290ZXIvbmdjLW1lbnUtZm9vdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NNZW51VHJpZ2dlckZvckRpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS10cmlnZ2VyLWZvci9uZ2MtbWVudS10cmlnZ2VyLWZvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjTWVudUJ1dHRvbkNsb3NlRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWJ1dHRvbi1jbG9zZS9uZ2MtbWVudS1idXR0b24tY2xvc2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nY01lbnVJdGVtUHJlZml4RGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWl0ZW0tcHJlZml4L25nYy1tZW51LWl0ZW0tcHJlZml4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ2NNZW51SXRlbUljb25EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtaXRlbS1pY29uL25nYy1tZW51LWl0ZW0taWNvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdjVHJ1bmNhdGVNb2R1bGUgfSBmcm9tICcuLi9uZ2MtdHJ1bmNhdGUvbmdjLXRydW5jYXRlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGUsXG5cblx0XHRDb3JlTW9kdWxlLFxuXG5cdFx0TmdjSWNvbk1vZHVsZSwgTmdjU2Nyb2xsQmFyTW9kdWxlLCBOZ2NUcnVuY2F0ZU1vZHVsZSxcblx0XHROZ2NCdXR0b25Nb2R1bGUsIE5nY1Rvb2x0aXBNb2R1bGUsIE5nY0NvbG9yUGlja2VyTW9kdWxlLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0TmdjTWVudUNvbXBvbmVudCwgTmdjTWVudUl0ZW1Db21wb25lbnQsIE5nY01lbnVIZWFkZXJDb21wb25lbnQsXG5cdFx0TmdjTWVudUhlYWRlckRpcmVjdGl2ZSwgTmdjTWVudUhlYWRlclRpdGxlQ29tcG9uZW50LCBOZ2NNZW51Rm9vdGVyQ29tcG9uZW50LFxuXHRcdE5nY01lbnVGb290ZXJEaXJlY3RpdmUsIE5nY01lbnVDb250ZW50Q29tcG9uZW50LCBOZ2NNZW51Q29udGVudERpcmVjdGl2ZSxcblx0XHROZ2NNZW51VHJpZ2dlckZvckRpcmVjdGl2ZSwgTmdjTWVudUJ1dHRvbkNsb3NlRGlyZWN0aXZlLCBOZ2NNZW51SXRlbUljb25EaXJlY3RpdmUsXG5cdFx0TmdjTWVudUl0ZW1QcmVmaXhEaXJlY3RpdmUsIE5nY01lbnVJdGVtUHJlZml4RGlyZWN0aXZlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHROZ2NNZW51Q29tcG9uZW50LCBOZ2NNZW51SXRlbUNvbXBvbmVudCwgTmdjTWVudUhlYWRlckNvbXBvbmVudCxcblx0XHROZ2NNZW51SGVhZGVyRGlyZWN0aXZlLCBOZ2NNZW51SGVhZGVyVGl0bGVDb21wb25lbnQsIE5nY01lbnVGb290ZXJDb21wb25lbnQsXG5cdFx0TmdjTWVudUZvb3RlckRpcmVjdGl2ZSwgTmdjTWVudUNvbnRlbnRDb21wb25lbnQsIE5nY01lbnVDb250ZW50RGlyZWN0aXZlLFxuXHRcdE5nY01lbnVUcmlnZ2VyRm9yRGlyZWN0aXZlLCBOZ2NNZW51QnV0dG9uQ2xvc2VEaXJlY3RpdmUsIE5nY01lbnVJdGVtSWNvbkRpcmVjdGl2ZSxcblx0XHROZ2NNZW51SXRlbVByZWZpeERpcmVjdGl2ZSwgTmdjTWVudUl0ZW1QcmVmaXhEaXJlY3RpdmUsXG5cdF0sXG5cdHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5nY01lbnVNb2R1bGUge31cbiJdfQ==