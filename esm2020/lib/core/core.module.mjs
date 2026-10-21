import { __decorate, __metadata } from "tslib";
import { NgModule, Optional, Inject } from '@angular/core';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CoreModule as AngularCoreModule, APP_CONFIG, SERVER_CONFIG, DATE_TIME_CONFIG, STORAGE_CONFIG, AppConfig, ServerConfig, DateTimeConfig, StorageConfig, LODASH_MIXIN } from 'angular-core';
import _ from 'lodash';
import { CONSTANT as APP_CONSTANT } from '../resources/constant';
import { FormModule } from './form.module';
import { CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent } from './components';
import { HighlightStateDirective, NgCacheIfDirective } from './directives';
import { AppearanceService } from './services';
import { I18n } from './loaders';
import { ChannelURLPipe, ColorPipe, ContrastPipe, ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe, FileIconPipe, FlagImagePipe, MetaEmbedPipe, PhonePipe } from './pipes';
import * as i0 from "@angular/core";
import * as i1 from "angular-core";
// Apply lodash mixin
_.mixin(LODASH_MIXIN);
let CoreModule = class CoreModule {
    /**
     * @constructor
     * @param {AppConfig} _appConfig
     * @param {ServerConfig} _serverConfig
     * @param {DateTimeConfig} _dateTimeConfig
     * @param {StorageConfig} _storageConfig
     */
    constructor(_appConfig, _dateTimeConfig) {
        this._appConfig = _appConfig;
        this._dateTimeConfig = _dateTimeConfig;
        if (this._appConfig) {
            this._appConfig.locale = APP_CONSTANT.LOCALE;
        }
        if (this._dateTimeConfig) {
            this._dateTimeConfig.timezone = APP_CONSTANT.TIMEZONE;
            this._dateTimeConfig.timeFormat = APP_CONSTANT.TIME_FORMAT;
            this._dateTimeConfig.dateFormat = APP_CONSTANT.DATE_FORMAT;
            this._dateTimeConfig.weekStart = APP_CONSTANT.WEEK_START;
        }
    }
};
CoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CoreModule, deps: [{ token: APP_CONFIG, optional: true }, { token: DATE_TIME_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.NgModule });
CoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: CoreModule, declarations: [
        /* Component Inject (Do not remove) */
        CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent,
        /* End Component Inject (Do not remove) */
        /* Directive Inject (Do not remove) */
        HighlightStateDirective, NgCacheIfDirective,
        /* End Directive Inject (Do not remove) */
        /* Pipe Inject (Do not remove) */
        ChannelURLPipe, ColorPipe, ContrastPipe,
        ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
        FileIconPipe, FlagImagePipe, MetaEmbedPipe,
        PhonePipe], imports: [
        // LoadingBarHttpClientModule, LazyLoadImageModule, RoundProgressModule,
        RoundProgressModule,
        AngularCoreModule, FormModule, LazyLoadImageModule], exports: [
        // LoadingBarHttpClientModule, LazyLoadImageModule, AngularCoreModule,
        AngularCoreModule, LazyLoadImageModule,
        /* Component Inject (Do not remove) */
        CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent,
        /* End Component Inject (Do not remove) */
        /* Directive Inject (Do not remove) */
        HighlightStateDirective, NgCacheIfDirective,
        /* End Directive Inject (Do not remove) */
        /* Pipe Inject (Do not remove) */
        ChannelURLPipe, ColorPipe, ContrastPipe,
        ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
        FileIconPipe, FlagImagePipe, MetaEmbedPipe,
        PhonePipe] });
CoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CoreModule, providers: [
        /* Service Inject (Do not remove) */
        AppearanceService,
        /* End Service Inject (Do not remove) */
        { provide: APP_CONFIG, useClass: AppConfig },
        { provide: SERVER_CONFIG, useClass: ServerConfig },
        { provide: DATE_TIME_CONFIG, useClass: DateTimeConfig },
        { provide: STORAGE_CONFIG, useClass: StorageConfig },
    ], imports: [
        // LoadingBarHttpClientModule, LazyLoadImageModule, RoundProgressModule,
        RoundProgressModule,
        AngularCoreModule, FormModule, LazyLoadImageModule, 
        // LoadingBarHttpClientModule, LazyLoadImageModule, AngularCoreModule,
        AngularCoreModule, LazyLoadImageModule] });
CoreModule = __decorate([
    I18n({
        prefix: 'CORE',
        loader: (lang) => import(`./i18n/${lang}.json`),
    }),
    __metadata("design:paramtypes", [AppConfig,
        DateTimeConfig])
], CoreModule);
export { CoreModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        // LoadingBarHttpClientModule, LazyLoadImageModule, RoundProgressModule,
                        RoundProgressModule,
                        AngularCoreModule, FormModule, LazyLoadImageModule,
                    ],
                    exports: [
                        // LoadingBarHttpClientModule, LazyLoadImageModule, AngularCoreModule,
                        AngularCoreModule, LazyLoadImageModule,
                        /* Component Inject (Do not remove) */
                        CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent,
                        /* End Component Inject (Do not remove) */
                        /* Directive Inject (Do not remove) */
                        HighlightStateDirective, NgCacheIfDirective,
                        /* End Directive Inject (Do not remove) */
                        /* Pipe Inject (Do not remove) */
                        ChannelURLPipe, ColorPipe, ContrastPipe,
                        ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
                        FileIconPipe, FlagImagePipe, MetaEmbedPipe,
                        PhonePipe,
                        /* End Pipe Inject (Do not remove) */
                    ],
                    declarations: [
                        /* Component Inject (Do not remove) */
                        CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent,
                        /* End Component Inject (Do not remove) */
                        /* Directive Inject (Do not remove) */
                        HighlightStateDirective, NgCacheIfDirective,
                        /* End Directive Inject (Do not remove) */
                        /* Pipe Inject (Do not remove) */
                        ChannelURLPipe, ColorPipe, ContrastPipe,
                        ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
                        FileIconPipe, FlagImagePipe, MetaEmbedPipe,
                        PhonePipe,
                        /* End Pipe Inject (Do not remove) */
                    ],
                    providers: [
                        /* Service Inject (Do not remove) */
                        AppearanceService,
                        /* End Service Inject (Do not remove) */
                        { provide: APP_CONFIG, useClass: AppConfig },
                        { provide: SERVER_CONFIG, useClass: ServerConfig },
                        { provide: DATE_TIME_CONFIG, useClass: DateTimeConfig },
                        { provide: STORAGE_CONFIG, useClass: StorageConfig },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.AppConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [APP_CONFIG]
                }] }, { type: i1.DateTimeConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DATE_TIME_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL2NvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCw2RUFBNkU7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUNOLFVBQVUsSUFBSSxpQkFBaUIsRUFDL0IsVUFBVSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFDM0MsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUN2RCxhQUFhLEVBQUUsWUFBWSxFQUMzQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFLdkIsT0FBTyxFQUFFLFFBQVEsSUFBSSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakMsT0FBTyxFQUNOLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUN2QyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsc0JBQXNCLEVBQzFELFlBQVksRUFB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LE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO3dCQUN2RCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtxQkFDcEQ7aUJBQ0Q7OzBCQWVFLFFBQVE7OzBCQUFJLE1BQU07MkJBQUUsVUFBVTs7MEJBQzlCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUUsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IExvYWRpbmdCYXJIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQG5neC1sb2FkaW5nLWJhci9odHRwLWNsaWVudCc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlTW9kdWxlIH0gZnJvbSAnbmctbGF6eWxvYWQtaW1hZ2UnO1xuaW1wb3J0IHsgUm91bmRQcm9ncmVzc01vZHVsZSB9IGZyb20gJ2FuZ3VsYXItc3ZnLXJvdW5kLXByb2dyZXNzYmFyJztcbmltcG9ydCB7XG5cdENvcmVNb2R1bGUgYXMgQW5ndWxhckNvcmVNb2R1bGUsXG5cdEFQUF9DT05GSUcsIFNFUlZFUl9DT05GSUcsIERBVEVfVElNRV9DT05GSUcsXG5cdFNUT1JBR0VfQ09ORklHLCBBcHBDb25maWcsIFNlcnZlckNvbmZpZywgRGF0ZVRpbWVDb25maWcsXG5cdFN0b3JhZ2VDb25maWcsIExPREFTSF9NSVhJTlxufSBmcm9tICdhbmd1bGFyLWNvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLy8gQXBwbHkgbG9kYXNoIG1peGluXG5fLm1peGluKCBMT0RBU0hfTUlYSU4gKTtcblxuaW1wb3J0IHsgQ09OU1RBTlQgYXMgQVBQX0NPTlNUQU5UIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2NvbnN0YW50JztcblxuaW1wb3J0IHsgRm9ybU1vZHVsZSB9IGZyb20gJy4vZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgQ29weXJpZ2h0Q29tcG9uZW50LCBEcmFnWm9uZUNvbXBvbmVudCwgTm90Rm91bmRDb21wb25lbnQsIFNlZW5BbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0U3RhdGVEaXJlY3RpdmUsIE5nQ2FjaGVJZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBBcHBlYXJhbmNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgSTE4biB9IGZyb20gJy4vbG9hZGVycyc7XG5pbXBvcnQge1xuXHRDaGFubmVsVVJMUGlwZSwgQ29sb3JQaXBlLCBDb250cmFzdFBpcGUsXG5cdENvbnRyb2xFcnJvcnNQaXBlLCBFbnZpcm9ubWVudFBpcGUsIEV4YW1wbGVQaG9uZU51bWJlclBpcGUsXG5cdEZpbGVJY29uUGlwZSwgRmxhZ0ltYWdlUGlwZSwgTWV0YUVtYmVkUGlwZSxcblx0UGhvbmVQaXBlXG59IGZyb20gJy4vcGlwZXMnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Ly8gTG9hZGluZ0Jhckh0dHBDbGllbnRNb2R1bGUsIExhenlMb2FkSW1hZ2VNb2R1bGUsIFJvdW5kUHJvZ3Jlc3NNb2R1bGUsXG5cdFx0Um91bmRQcm9ncmVzc01vZHVsZSxcblx0XHRBbmd1bGFyQ29yZU1vZHVsZSwgRm9ybU1vZHVsZSwgTGF6eUxvYWRJbWFnZU1vZHVsZSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC8vIExvYWRpbmdCYXJIdHRwQ2xpZW50TW9kdWxlLCBMYXp5TG9hZEltYWdlTW9kdWxlLCBBbmd1bGFyQ29yZU1vZHVsZSxcblx0XHRBbmd1bGFyQ29yZU1vZHVsZSwgTGF6eUxvYWRJbWFnZU1vZHVsZSxcblx0XHQvKiBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdENvcHlyaWdodENvbXBvbmVudCwgRHJhZ1pvbmVDb21wb25lbnQsIE5vdEZvdW5kQ29tcG9uZW50LCBTZWVuQWxsQ29tcG9uZW50LFxuXHRcdC8qIEVuZCBDb21wb25lbnQgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogRGlyZWN0aXZlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRIaWdobGlnaHRTdGF0ZURpcmVjdGl2ZSwgTmdDYWNoZUlmRGlyZWN0aXZlLFxuXHRcdC8qIEVuZCBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0LyogUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0Q2hhbm5lbFVSTFBpcGUsIENvbG9yUGlwZSwgQ29udHJhc3RQaXBlLFxuXHRcdENvbnRyb2xFcnJvcnNQaXBlLCBFbnZpcm9ubWVudFBpcGUsIEV4YW1wbGVQaG9uZU51bWJlclBpcGUsXG5cdFx0RmlsZUljb25QaXBlLCBGbGFnSW1hZ2VQaXBlLCBNZXRhRW1iZWRQaXBlLFxuXHRcdFBob25lUGlwZSxcblx0XHQvKiBFbmQgUGlwZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC8qIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0Q29weXJpZ2h0Q29tcG9uZW50LCBEcmFnWm9uZUNvbXBvbmVudCwgTm90Rm91bmRDb21wb25lbnQsIFNlZW5BbGxDb21wb25lbnQsXG5cdFx0LyogRW5kIENvbXBvbmVudCBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBEaXJlY3RpdmUgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXHRcdEhpZ2hsaWdodFN0YXRlRGlyZWN0aXZlLCBOZ0NhY2hlSWZEaXJlY3RpdmUsXG5cdFx0LyogRW5kIERpcmVjdGl2ZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cblx0XHQvKiBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XHRDaGFubmVsVVJMUGlwZSwgQ29sb3JQaXBlLCBDb250cmFzdFBpcGUsXG5cdFx0Q29udHJvbEVycm9yc1BpcGUsIEVudmlyb25tZW50UGlwZSwgRXhhbXBsZVBob25lTnVtYmVyUGlwZSxcblx0XHRGaWxlSWNvblBpcGUsIEZsYWdJbWFnZVBpcGUsIE1ldGFFbWJlZFBpcGUsXG5cdFx0UGhvbmVQaXBlLFxuXHRcdC8qIEVuZCBQaXBlIEluamVjdCAoRG8gbm90IHJlbW92ZSkgKi9cblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0LyogU2VydmljZSBJbmplY3QgKERvIG5vdCByZW1vdmUpICovXG5cdFx0QXBwZWFyYW5jZVNlcnZpY2UsXG5cdFx0LyogRW5kIFNlcnZpY2UgSW5qZWN0IChEbyBub3QgcmVtb3ZlKSAqL1xuXG5cdFx0eyBwcm92aWRlOiBBUFBfQ09ORklHLCB1c2VDbGFzczogQXBwQ29uZmlnIH0sXG5cdFx0eyBwcm92aWRlOiBTRVJWRVJfQ09ORklHLCB1c2VDbGFzczogU2VydmVyQ29uZmlnIH0sXG5cdFx0eyBwcm92aWRlOiBEQVRFX1RJTUVfQ09ORklHLCB1c2VDbGFzczogRGF0ZVRpbWVDb25maWcgfSxcblx0XHR7IHByb3ZpZGU6IFNUT1JBR0VfQ09ORklHLCB1c2VDbGFzczogU3RvcmFnZUNvbmZpZyB9LFxuXHRdLFxufSlcbkBJMThuKHtcblx0cHJlZml4OiAnQ09SRScsXG5cdGxvYWRlcjogKCBsYW5nOiBzdHJpbmcgKSA9PiBpbXBvcnQoIGAuL2kxOG4vJHtsYW5nfS5qc29uYCApLFxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcblx0Y29uc3Rcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0FwcENvbmZpZ30gX2FwcENvbmZpZ1xuXHQgKiBAcGFyYW0ge1NlcnZlckNvbmZpZ30gX3NlcnZlckNvbmZpZ1xuXHQgKiBAcGFyYW0ge0RhdGVUaW1lQ29uZmlnfSBfZGF0ZVRpbWVDb25maWdcblx0ICogQHBhcmFtIHtTdG9yYWdlQ29uZmlnfSBfc3RvcmFnZUNvbmZpZ1xuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggQVBQX0NPTkZJRyApIHByaXZhdGUgX2FwcENvbmZpZzogQXBwQ29uZmlnLFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIERBVEVfVElNRV9DT05GSUcgKSBwcml2YXRlIF9kYXRlVGltZUNvbmZpZzogRGF0ZVRpbWVDb25maWdcblx0KSB7XG5cdFx0aWYgKCB0aGlzLl9hcHBDb25maWcgKSB7XG5cdFx0XHR0aGlzLl9hcHBDb25maWcubG9jYWxlID0gQVBQX0NPTlNUQU5ULkxPQ0FMRTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX2RhdGVUaW1lQ29uZmlnICkge1xuXHRcdFx0dGhpcy5fZGF0ZVRpbWVDb25maWcudGltZXpvbmUgPSBBUFBfQ09OU1RBTlQuVElNRVpPTkU7XG5cdFx0XHR0aGlzLl9kYXRlVGltZUNvbmZpZy50aW1lRm9ybWF0ID0gQVBQX0NPTlNUQU5ULlRJTUVfRk9STUFUO1xuXHRcdFx0dGhpcy5fZGF0ZVRpbWVDb25maWcuZGF0ZUZvcm1hdCA9IEFQUF9DT05TVEFOVC5EQVRFX0ZPUk1BVDtcblx0XHRcdHRoaXMuX2RhdGVUaW1lQ29uZmlnLndlZWtTdGFydCA9IEFQUF9DT05TVEFOVC5XRUVLX1NUQVJUO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=