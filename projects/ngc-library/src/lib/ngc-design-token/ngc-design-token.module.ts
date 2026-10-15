import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@core';
import { NgcButtonModule }  from '../ngc-button';
import { NgcIconModule }    from '../ngc-icon';
import { NgcDividerModule } from '../ngc-divider/ngc-divider.module';
import { NgcSelectModule }  from '../ngc-select/ngc-select.module';
import { NgcDialogModule }  from '../ngc-dialog';

import { NgcDesignTokenComponent }       from './ngc-design-token.component';
import { NgcDesignTokenDialogComponent } from './dialog/ngc-design-token-dialog.component';

@NgModule({
	imports: [
		CoreModule,
		FormsModule,
		NgcButtonModule,
		NgcIconModule,
		NgcDividerModule,
		NgcSelectModule,
		NgcDialogModule,
	],
	exports     : [ NgcDesignTokenComponent ],
	declarations: [ NgcDesignTokenComponent, NgcDesignTokenDialogComponent ],
	providers   : [],
})
export class NgcDesignTokenModule {}
