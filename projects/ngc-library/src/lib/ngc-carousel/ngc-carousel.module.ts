import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcDialogModule } from '../ngc-dialog';

import { NgcCarouselComponent } from './ngc-carousel.component';

@NgModule({
	imports: [
		CoreModule,

		NgcButtonModule, NgcIconModule, NgcScrollBarModule,
		NgcTooltipModule, NgcDialogModule,
	],
	exports		: [ NgcCarouselComponent ],
	declarations: [ NgcCarouselComponent ],
	providers	: [],
})
export class NgcCarouselModule {}
