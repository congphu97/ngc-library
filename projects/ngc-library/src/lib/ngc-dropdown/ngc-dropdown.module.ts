import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CoreModule, FormModule } from '@core';

import { NgcMenuModule } from '../ngc-menu';
import { NgcIconModule } from '../ngc-icon';
import { NgcButtonModule } from '../ngc-button';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcFormFieldModule } from '../ngc-form-field';
import { NgcSearchBoxModule } from '../ngc-search-box';

import { NgcDropdownComponent } from './dropdown/ngc-dropdown.component';
import { NgcDropdownGroupItemComponent } from './dropdown-group-item/ngc-dropdown-group-item.component';
import { NgcDropdownItemComponent } from './dropdown-item/ngc-dropdown-item.component';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';

@NgModule({
	imports: [
		ScrollingModule,

		CoreModule, FormModule,

		NgcFormFieldModule, NgcSearchBoxModule,
		NgcMenuModule,
		NgcIconModule, NgcTruncateModule, NgcButtonModule,
		NgcColorPickerModule, NgcTooltipModule,
	],
	exports		: [ NgcDropdownComponent, NgcDropdownGroupItemComponent, NgcDropdownItemComponent ],
	declarations: [ NgcDropdownComponent, NgcDropdownGroupItemComponent, NgcDropdownItemComponent ],
	providers	: [],
})
export class NgcDropdownModule {}
