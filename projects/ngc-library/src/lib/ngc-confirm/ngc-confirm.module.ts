import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';

import { NgcConfirmComponent } from './ngc-confirm.component';
import { NgcConfirmService } from './ngc-confirm.service';

@NgModule({
	imports: [
		CoreModule,

		NgcButtonModule, NgcIconModule,
	],
	exports		: [ NgcConfirmComponent ],
	declarations: [ NgcConfirmComponent ],
	providers	: [ NgcConfirmService ],
})
export class NgcConfirmModule {}
