import { ModuleWithProviders, Type } from '@angular/core';
import { NgcIFileService } from '../ngc-file-picker';
import * as i0 from "@angular/core";
import * as i1 from "./ngc-avatar-picker.component";
import * as i2 from "@core";
import * as i3 from "../ngc-avatar/ngc-avatar.module";
import * as i4 from "../ngc-button/ngc-button.module";
import * as i5 from "../ngc-color-picker/ngc-color-picker.module";
import * as i6 from "../ngc-cropper/ngc-cropper.module";
import * as i7 from "../ngc-dialog/ngc-dialog.module";
import * as i8 from "../ngc-emoji-picker/ngc-emoji-picker.module";
import * as i9 from "../ngc-icon/ngc-icon.module";
import * as i10 from "../ngc-menu/ngc-menu.module";
import * as i11 from "../ngc-radio/ngc-radio.module";
import * as i12 from "../ngc-toast/ngc-toast.module";
import * as i13 from "../ngc-tooltip/ngc-tooltip.module";
import * as i14 from "../ngc-truncate/ngc-truncate.module";
export declare class NgcAvatarPickerModule {
    /**
     * @constructor
     * @param {Type<NgcIFileService>} fileService
     */
    static forChild(fileService: Type<NgcIFileService>): ModuleWithProviders<NgcAvatarPickerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcAvatarPickerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgcAvatarPickerModule, [typeof i1.NgcAvatarPickerComponent], [typeof i2.CoreModule, typeof i3.NgcAvatarModule, typeof i4.NgcButtonModule, typeof i5.NgcColorPickerModule, typeof i6.NgcCropperModule, typeof i7.NgcDialogModule, typeof i8.NgcEmojiPickerModule, typeof i9.NgcIconModule, typeof i10.NgcMenuModule, typeof i11.NgcRadioModule, typeof i12.NgcToastModule, typeof i13.NgcTooltipModule, typeof i14.NgcTruncateModule], [typeof i1.NgcAvatarPickerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgcAvatarPickerModule>;
}
