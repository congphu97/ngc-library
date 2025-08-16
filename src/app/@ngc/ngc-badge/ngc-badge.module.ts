import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcBadgeComponent } from './ngc-badge.component';

@NgModule({
	imports		: [ CoreModule ],
	exports		: [ NgcBadgeComponent ],
	declarations: [ NgcBadgeComponent ],
	providers	: [],
})
export class NgcBadgeModule {}
