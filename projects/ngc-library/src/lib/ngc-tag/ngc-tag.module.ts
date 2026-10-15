import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcTruncateModule } from '../ngc-truncate';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcMenuModule } from '../ngc-menu';

import { NgcTagListComponent } from './tag-list/ngc-tag-list.component';
import { NgcTagComponent } from './tag/ngc-tag.component';

@NgModule({
	imports: [
		CoreModule,

		NgcTruncateModule, NgcTooltipModule, NgcMenuModule,
	],
	exports		: [ NgcTagListComponent, NgcTagComponent ],
	declarations: [ NgcTagListComponent, NgcTagComponent ],
	providers	: [],
})
export class NgcTagModule {}
