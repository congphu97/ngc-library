import { AppConfig, DateTimeConfig } from 'angular-core';
import * as i0 from "@angular/core";
import * as i1 from "./components/copyright/copyright.component";
import * as i2 from "./components/drag-zone/drag-zone.component";
import * as i3 from "./components/not-found/not-found.component";
import * as i4 from "./components/seen-all/seen-all.component";
import * as i5 from "./directives/highlight-state.directive";
import * as i6 from "./directives/ng-cache-if.directive";
import * as i7 from "./pipes/channel-url.pipe";
import * as i8 from "./pipes/color.pipe";
import * as i9 from "./pipes/contrast.pipe";
import * as i10 from "./pipes/control-errors.pipe";
import * as i11 from "./pipes/environment.pipe";
import * as i12 from "./pipes/example-phone-number.pipe";
import * as i13 from "./pipes/file-icon.pipe";
import * as i14 from "./pipes/flag-image.pipe";
import * as i15 from "./pipes/meta-embed.pipe";
import * as i16 from "./pipes/phone.pipe";
import * as i17 from "angular-svg-round-progressbar";
import * as i18 from "angular-core";
import * as i19 from "./form.module";
import * as i20 from "ng-lazyload-image";
export declare class CoreModule {
    private _appConfig;
    private _dateTimeConfig;
    const: any;
    /**
     * @constructor
     * @param {AppConfig} _appConfig
     * @param {ServerConfig} _serverConfig
     * @param {DateTimeConfig} _dateTimeConfig
     * @param {StorageConfig} _storageConfig
     */
    constructor(_appConfig: AppConfig, _dateTimeConfig: DateTimeConfig);
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreModule, [{ optional: true; }, { optional: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoreModule, [typeof i1.CopyrightComponent, typeof i2.DragZoneComponent, typeof i3.NotFoundComponent, typeof i4.SeenAllComponent, typeof i5.HighlightStateDirective, typeof i6.NgCacheIfDirective, typeof i7.ChannelURLPipe, typeof i8.ColorPipe, typeof i9.ContrastPipe, typeof i10.ControlErrorsPipe, typeof i11.EnvironmentPipe, typeof i12.ExamplePhoneNumberPipe, typeof i13.FileIconPipe, typeof i14.FlagImagePipe, typeof i15.MetaEmbedPipe, typeof i16.PhonePipe], [typeof i17.RoundProgressModule, typeof i18.CoreModule, typeof i19.FormModule, typeof i20.LazyLoadImageModule], [typeof i18.CoreModule, typeof i20.LazyLoadImageModule, typeof i1.CopyrightComponent, typeof i2.DragZoneComponent, typeof i3.NotFoundComponent, typeof i4.SeenAllComponent, typeof i5.HighlightStateDirective, typeof i6.NgCacheIfDirective, typeof i7.ChannelURLPipe, typeof i8.ColorPipe, typeof i9.ContrastPipe, typeof i10.ControlErrorsPipe, typeof i11.EnvironmentPipe, typeof i12.ExamplePhoneNumberPipe, typeof i13.FileIconPipe, typeof i14.FlagImagePipe, typeof i15.MetaEmbedPipe, typeof i16.PhonePipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoreModule>;
}
