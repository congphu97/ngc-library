import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgcSliderModule {}
