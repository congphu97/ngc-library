import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { CoreModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTruncateModule } from '../ngc-truncate';

import { NgcGoogleDrivePickerDirective } from './google-drive/ngc-google-drive-picker.directive';
import { NgcDropboxPickerDirective } from './dropbox/ngc-dropbox-picker.directive';
import { NgcOneDrivePickerDirective } from './one-drive/ngc-one-drive-picker.directive';
import {
	Ngc_CLOUD_STORAGE_CONFIG, NgcCloudStorageConfig,
	Ngc_FILE_SERVICE, NgcIFileService,
	NgcFilePickerComponent
} from './ngc-file-picker.component';
import { NgcFilePickerDirective } from './ngc-file-picker.directive';

@NgModule({
	imports: [
		RoundProgressModule, OverlayModule, PortalModule,

		CoreModule,

		NgcIconModule, NgcButtonModule, NgcTruncateModule,
		NgcTooltipModule,
	],
	exports: [
		NgcGoogleDrivePickerDirective, NgcDropboxPickerDirective, NgcOneDrivePickerDirective,
		NgcFilePickerComponent, NgcFilePickerDirective,
	],
	declarations: [
		NgcGoogleDrivePickerDirective, NgcDropboxPickerDirective, NgcOneDrivePickerDirective,
		NgcFilePickerComponent, NgcFilePickerDirective,
	],
	providers: [{ provide: Ngc_CLOUD_STORAGE_CONFIG, useClass: NgcCloudStorageConfig }],
})
export class NgcFilePickerModule {

	/**
	 * @constructor
	 * @param {Type<NgcIFileService>} fileService
	 */
	public static forChild( fileService: Type<NgcIFileService> ): ModuleWithProviders<NgcFilePickerModule> {
		return {
			ngModule	: NgcFilePickerModule,
			providers	: [{ provide: Ngc_FILE_SERVICE, useClass: fileService }],
		};
	}

}
