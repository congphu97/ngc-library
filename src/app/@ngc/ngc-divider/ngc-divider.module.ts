import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcDividerComponent } from './ngc-divider.component';

@NgModule({
	imports		: [ CoreModule ],
	exports		: [ NgcDividerComponent ],
	declarations: [ NgcDividerComponent ],
	providers	: [],
})
export class NgcDividerModule {}
