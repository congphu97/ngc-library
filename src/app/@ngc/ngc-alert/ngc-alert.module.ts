import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core';
import { NgcIconModule } from '../ngc-icon/ngc-icon.module';
import { NgcButtonModule } from '../ngc-button';

import { NgcAlertComponent } from './ngc-alert.component';

@NgModule({
	imports		: [ CommonModule, CoreModule, NgcIconModule, NgcButtonModule ],
	exports		: [ NgcAlertComponent ],
	declarations: [ NgcAlertComponent ],
	providers	: [],
})
export class NgcAlertModule {}
