import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcConfirmComponent } from './ngc-confirm.component';
import { NgcConfirmService } from './ngc-confirm.service';
import * as i0 from "@angular/core";
export class NgcConfirmModule {
}
NgcConfirmModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcConfirmModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcConfirmModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcConfirmModule, declarations: [NgcConfirmComponent], imports: [CoreModule,
        NgcButtonModule, NgcIconModule], exports: [NgcConfirmComponent] });
NgcConfirmModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcConfirmModule, providers: [NgcConfirmService], imports: [CoreModule,
        NgcButtonModule, NgcIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcConfirmModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CoreModule,
                        NgcButtonModule, NgcIconModule,
                    ],
                    exports: [NgcConfirmComponent],
                    declarations: [NgcConfirmComponent],
                    providers: [NgcConfirmService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvbmZpcm0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtY29uZmlybS9uZ2MtY29uZmlybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFZMUQsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQUhaLG1CQUFtQixhQUxsQyxVQUFVO1FBRVYsZUFBZSxFQUFFLGFBQWEsYUFFbEIsbUJBQW1COzhHQUlwQixnQkFBZ0IsYUFGaEIsQ0FBRSxpQkFBaUIsQ0FBRSxZQU5oQyxVQUFVO1FBRVYsZUFBZSxFQUFFLGFBQWE7MkZBTW5CLGdCQUFnQjtrQkFWNUIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFFVixlQUFlLEVBQUUsYUFBYTtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFJLENBQUUsbUJBQW1CLENBQUU7b0JBQ2xDLFlBQVksRUFBRSxDQUFFLG1CQUFtQixDQUFFO29CQUNyQyxTQUFTLEVBQUcsQ0FBRSxpQkFBaUIsQ0FBRTtpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGNvcmUnO1xuXG5pbXBvcnQgeyBOZ2NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtYnV0dG9uJztcbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtaWNvbic7XG5cbmltcG9ydCB7IE5nY0NvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL25nYy1jb25maXJtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NDb25maXJtU2VydmljZSB9IGZyb20gJy4vbmdjLWNvbmZpcm0uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb3JlTW9kdWxlLFxuXG5cdFx0TmdjQnV0dG9uTW9kdWxlLCBOZ2NJY29uTW9kdWxlLFxuXHRdLFxuXHRleHBvcnRzXHRcdDogWyBOZ2NDb25maXJtQ29tcG9uZW50IF0sXG5cdGRlY2xhcmF0aW9uczogWyBOZ2NDb25maXJtQ29tcG9uZW50IF0sXG5cdHByb3ZpZGVyc1x0OiBbIE5nY0NvbmZpcm1TZXJ2aWNlIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nY0NvbmZpcm1Nb2R1bGUge31cbiJdfQ==