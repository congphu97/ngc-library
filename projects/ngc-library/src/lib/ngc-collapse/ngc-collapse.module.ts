import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcCollapseComponent } from './ngc-collapse.component';
import { NgcIconModule } from '../ngc-icon';

@NgModule({
	imports		: [ CoreModule, NgcIconModule ],
	exports		: [ NgcCollapseComponent ],
	declarations: [ NgcCollapseComponent ],
	providers	: [],
})
export class NgcCollapseModule {}
