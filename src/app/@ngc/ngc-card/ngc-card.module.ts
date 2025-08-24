import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcCardComponent } from './ngc-card.component';

@NgModule({
	imports		: [ CoreModule ],
	exports		: [ NgcCardComponent ],
	declarations: [ NgcCardComponent ],
	providers	: [],
})
export class NgcCardModule {}
