import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcMenuModule } from '../ngc-menu';
import { NgcTooltipModule } from '../ngc-tooltip';

import { NgcCropperComponent } from './ngc-cropper.component';

@NgModule({
	imports: [
		CoreModule,

		NgcButtonModule, NgcMenuModule, NgcTooltipModule,
	],
	exports		: [ NgcCropperComponent ],
	declarations: [ NgcCropperComponent ],
	providers	: [],
})
export class NgcCropperModule {}
