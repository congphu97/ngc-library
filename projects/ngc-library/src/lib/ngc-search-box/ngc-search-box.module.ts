import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CoreModule, FormModule } from '@core';

import { NgcIconModule } from '../ngc-icon';
import { NgcFormFieldModule } from '../ngc-form-field';
import { NgcMenuModule } from '../ngc-menu';
import { NgcAvatarModule } from '../ngc-avatar';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcButtonModule } from '../ngc-button';

import { NgcSearchBoxComponent } from './ngc-search-box.component';

@NgModule({
	imports: [
		ScrollingModule,

		CoreModule, FormModule,

		NgcFormFieldModule, NgcIconModule, NgcMenuModule,
		NgcAvatarModule, NgcTruncateModule, NgcButtonModule,
	],
	exports		: [ NgcSearchBoxComponent ],
	declarations: [ NgcSearchBoxComponent ],
	providers	: [],
})
export class NgcSearchBoxModule {}
