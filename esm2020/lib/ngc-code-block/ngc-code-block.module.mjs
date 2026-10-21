import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon/ngc-icon.module';
import { NgcCodeBlockComponent } from './ngc-code-block.component';
import { HighlightModule } from 'ngx-highlightjs';
import * as i0 from "@angular/core";
export class NgcCodeBlockModule {
}
NgcCodeBlockModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCodeBlockModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcCodeBlockModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcCodeBlockModule, declarations: [NgcCodeBlockComponent], imports: [CoreModule,
        HighlightModule,
        NgcIconModule], exports: [NgcCodeBlockComponent] });
NgcCodeBlockModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCodeBlockModule, imports: [CoreModule,
        HighlightModule,
        NgcIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCodeBlockModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        HighlightModule,
                        NgcIconModule,
                    ],
                    exports: [NgcCodeBlockComponent],
                    declarations: [NgcCodeBlockComponent],
                    providers: [],
                    schemas: [NO_ERRORS_SCHEMA]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvZGUtYmxvY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtY29kZS1ibG9jay9uZ2MtY29kZS1ibG9jay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBZWxELE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFOWixxQkFBcUIsYUFMaEMsVUFBVTtRQUNWLGVBQWU7UUFDZixhQUFhLGFBRVAscUJBQXFCO2dIQU90QixrQkFBa0IsWUFYdkIsVUFBVTtRQUNWLGVBQWU7UUFDZixhQUFhOzJGQVNSLGtCQUFrQjtrQkFiOUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsVUFBVTt3QkFDVixlQUFlO3dCQUNmLGFBQWE7cUJBQ2hCO29CQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNoQyxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDckMsU0FBUyxFQUFFLEVBRVY7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0Bjb3JlJztcblxuaW1wb3J0IHsgTmdjSWNvbk1vZHVsZSB9IGZyb20gJy4uL25nYy1pY29uL25nYy1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ2NDb2RlQmxvY2tDb21wb25lbnQgfSBmcm9tICcuL25nYy1jb2RlLWJsb2NrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdobGlnaHRNb2R1bGUgfSBmcm9tICduZ3gtaGlnaGxpZ2h0anMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29yZU1vZHVsZSxcbiAgICAgICAgSGlnaGxpZ2h0TW9kdWxlLFxuICAgICAgICBOZ2NJY29uTW9kdWxlLFxuICAgIF0sXG4gICAgZXhwb3J0czogW05nY0NvZGVCbG9ja0NvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbTmdjQ29kZUJsb2NrQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcblxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIE5nY0NvZGVCbG9ja01vZHVsZSB7IH1cbiJdfQ==