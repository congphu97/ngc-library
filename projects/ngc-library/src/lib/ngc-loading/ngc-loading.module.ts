import { NgModule } from '@angular/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { CoreModule } from '@core';

import { NgcLoadingComponent } from './ngc-loading.component';

@NgModule({
	imports: [
		RoundProgressModule,

		CoreModule,
	],
	exports		: [ NgcLoadingComponent ],
	declarations: [ NgcLoadingComponent ],
	providers	: [],
})
export class NgcLoadingModule {}
