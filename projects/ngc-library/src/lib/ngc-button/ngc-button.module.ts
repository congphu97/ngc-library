import { NgModule } from '@angular/core';
import { CoreModule } from '@core';

import { NgcIconModule } from '../ngc-icon';
import { NgcButtonIconDirective } from './button-icon/ngc-button-icon.directive';
import { NgcButtonComponent } from './button/ngc-button.component';
import { NgcLoadingModule } from '../ngc-loading';
import { NgcIconButtonComponent } from './icon-button/ngc-icon-button.component';
import { NgcBasicButtonComponent } from './basic-button/ngc-basic-button.component';

@NgModule({
	imports: [
		CoreModule,
        NgcLoadingModule,
        NgcIconModule,
	],
	exports: [
		NgcIconButtonComponent, NgcBasicButtonComponent,
        NgcButtonComponent, NgcButtonIconDirective,
	],
	declarations: [
		NgcIconButtonComponent, NgcBasicButtonComponent, NgcButtonComponent, NgcButtonIconDirective,
	],
	providers: [],
})
export class NgcButtonModule {}