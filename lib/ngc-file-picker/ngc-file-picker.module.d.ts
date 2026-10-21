import { ModuleWithProviders, Type } from '@angular/core';
import { NgcIFileService } from './ngc-file-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "./google-drive/ngc-google-drive-picker.directive";
import * as i2 from "./dropbox/ngc-dropbox-picker.directive";
import * as i3 from "./one-drive/ngc-one-drive-picker.directive";
import * as i4 from "./ngc-file-picker.component";
import * as i5 from "./ngc-file-picker.directive";
import * as i6 from "angular-svg-round-progressbar";
import * as i7 from "@angular/cdk/overlay";
import * as i8 from "@angular/cdk/portal";
import * as i9 from "@core";
import * as i10 from "../ngc-icon/ngc-icon.module";
import * as i11 from "../ngc-button/ngc-button.module";
import * as i12 from "../ngc-truncate/ngc-truncate.module";
import * as i13 from "../ngc-tooltip/ngc-tooltip.module";
export declare class NgcFilePickerModule {
    /**
     * @constructor
     * @param {Type<NgcIFileService>} fileService
     */
    static forChild(fileService: Type<NgcIFileService>): ModuleWithProviders<NgcFilePickerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcFilePickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgcFilePickerModule, [typeof i1.NgcGoogleDrivePickerDirective, typeof i2.NgcDropboxPickerDirective, typeof i3.NgcOneDrivePickerDirective, typeof i4.NgcFilePickerComponent, typeof i5.NgcFilePickerDirective], [typeof i6.RoundProgressModule, typeof i7.OverlayModule, typeof i8.PortalModule, typeof i9.CoreModule, typeof i10.NgcIconModule, typeof i11.NgcButtonModule, typeof i12.NgcTruncateModule, typeof i13.NgcTooltipModule], [typeof i1.NgcGoogleDrivePickerDirective, typeof i2.NgcDropboxPickerDirective, typeof i3.NgcOneDrivePickerDirective, typeof i4.NgcFilePickerComponent, typeof i5.NgcFilePickerDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgcFilePickerModule>;
}
