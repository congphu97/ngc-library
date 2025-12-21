import { NgModule } from '@angular/core';

import { CoreModule, FormModule } from '@core';

import { NgcMenuModule } from '../ngc-menu';
import { NgcFormFieldModule } from '../ngc-form-field';
import { NgcIconModule } from '../ngc-icon';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcSearchBoxModule } from '../ngc-search-box';
import { NgcDropdownModule } from '../ngc-dropdown';
import { NgcButtonModule } from '../ngc-button';
import { NgcDividerModule } from '../ngc-divider';
import { NgcPhoneFieldComponent } from './ngc-phone-field.component';

@NgModule({
	imports: [
		CoreModule, FormModule,

		NgcMenuModule, NgcFormFieldModule, NgcIconModule,
		NgcTruncateModule, NgcSearchBoxModule, NgcDropdownModule,
		NgcButtonModule, NgcDividerModule,
	],
	exports		: [ NgcPhoneFieldComponent ],
	declarations: [ NgcPhoneFieldComponent ],
	providers	: [],
})
export class NgcPhoneFieldModule {}
