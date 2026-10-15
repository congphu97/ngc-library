import { NgModule } from '@angular/core';

import { CoreModule, FormModule } from '@core';

import { NgcFormFieldModule } from '../ngc-form-field';
import { NgcTruncateModule } from '../ngc-truncate';

import { NgcRangeInputComponent } from './ngc-range-input.component';

@NgModule({
	imports: [
		CoreModule, FormModule,

		NgcFormFieldModule, NgcTruncateModule,
	],
	exports		: [ NgcRangeInputComponent ],
	declarations: [ NgcRangeInputComponent ],
	providers	: [],
})
export class NgcRangeInputModule {}
