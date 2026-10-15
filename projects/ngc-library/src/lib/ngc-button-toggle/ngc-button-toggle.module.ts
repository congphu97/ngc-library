import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcIconModule } from '../ngc-icon';

import { NgcButtonToggleComponent } from './ngc-button-toggle/ngc-button-toggle.component';
import { NgcButtonToggleItemComponent } from './ngc-button-toggle-item/ngc-button-toggle-item.component';

@NgModule({
	imports: [
		CoreModule,

		NgcIconModule,
	],
	exports		: [ NgcButtonToggleComponent, NgcButtonToggleItemComponent ],
	declarations: [ NgcButtonToggleComponent, NgcButtonToggleItemComponent ],
	providers	: [],
})
export class NgcButtonToggleModule {}
