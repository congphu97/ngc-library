import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { CoreModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcMenuModule } from '../ngc-menu';
import { NgcFormFieldModule } from '../ngc-form-field';
import { NgcTooltipModule } from '../ngc-tooltip';

import { NgcDatePickerComponent } from './ngc-date-picker.component';
import { NgcDatePickerDirective } from './ngc-date-picker.directive';
import { NgcSwitchModule } from '../ngc-switch/ngc-switch.module';

@NgModule({
	imports: [
		OverlayModule, PortalModule,

		CoreModule,

		NgcButtonModule, NgcIconModule, NgcSwitchModule,
		NgcMenuModule, NgcFormFieldModule,
		NgcTooltipModule,
	],
	exports		: [ NgcDatePickerComponent, NgcDatePickerDirective ],
	declarations: [ NgcDatePickerComponent, NgcDatePickerDirective ],
	providers	: [],
})
export class NgcDatePickerModule {}
