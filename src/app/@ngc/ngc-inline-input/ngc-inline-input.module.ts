import { NgModule } from '@angular/core';

import { CoreModule, FormModule } from '@core';

// import { NgcFormFieldModule } from '../wgc-form-field';

import { NgcInlineInputComponent } from './ngc-inline-input.component';

@NgModule({
	imports: [
		CoreModule, FormModule,

		// NgcFormFieldModule,
	],
	exports		: [ NgcInlineInputComponent ],
	declarations: [ NgcInlineInputComponent ],
	providers	: [],
})
export class NgcInlineInputModule {}
