import { ModuleWithProviders, NgModule, Type } from '@angular/core';

import { CoreModule } from '@core';

import { NgcIFileService, Ngc_FILE_SERVICE } from '../ngc-file-picker';
import { NgcAvatarModule } from '../ngc-avatar';
import { NgcButtonModule } from '../ngc-button';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcCropperModule } from '../ngc-cropper';
import { NgcDialogModule } from '../ngc-dialog';
import { NgcEmojiPickerModule } from '../ngc-emoji-picker';
import { NgcIconModule } from '../ngc-icon';
import { NgcMenuModule } from '../ngc-menu';
import { NgcRadioModule } from '../ngc-radio';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcAvatarPickerComponent } from './ngc-avatar-picker.component';
import { NgcToastModule } from '../ngc-toast/ngc-toast.module';

@NgModule({
	imports: [
		CoreModule,

		NgcAvatarModule, NgcButtonModule, NgcColorPickerModule,
		NgcCropperModule, NgcDialogModule, NgcEmojiPickerModule,
		NgcIconModule, NgcMenuModule, NgcRadioModule,
		NgcToastModule, NgcTooltipModule, NgcTruncateModule,
	],
	exports		: [ NgcAvatarPickerComponent ],
	declarations: [ NgcAvatarPickerComponent ],
})
export class NgcAvatarPickerModule {

	/**
	 * @constructor
	 * @param {Type<NgcIFileService>} fileService
	 */
	public static forChild( fileService: Type<NgcIFileService> ): ModuleWithProviders<NgcAvatarPickerModule> {
		return {
			ngModule	: NgcAvatarPickerModule,
			providers	: [{ provide: Ngc_FILE_SERVICE, useClass: fileService }],
		};
	}

}
