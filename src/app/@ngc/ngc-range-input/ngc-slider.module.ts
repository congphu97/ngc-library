import { NgModule } from '@angular/core';
import { CoreModule, FormModule } from '@core';

import { NgcSliderComponent } from './ngc-slider.component';
import { NgcTooltipModule } from '../ngc-tooltip';

@NgModule({
	imports: [
		CoreModule, FormModule,
		NgcTooltipModule,
	],
	exports		: [ NgcSliderComponent ],
	declarations: [ NgcSliderComponent ],
	providers	: [],
})
export class NgcRangeInputModule {}
