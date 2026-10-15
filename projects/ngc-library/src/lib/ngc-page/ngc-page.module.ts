import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcScrollBarModule } from '../ngc-scroll-bar';

import { NgcPageComponent } from './page/ngc-page.component';
import { NgcPageHeaderDirective } from './page-header/ngc-page-header.directive';
import { NgcPageContentDirective } from './page-content/ngc-page-content.directive';

@NgModule({
	imports: [
		CoreModule,

		NgcScrollBarModule,
	],
	exports		: [ NgcPageComponent, NgcPageHeaderDirective, NgcPageContentDirective ],
	declarations: [ NgcPageComponent, NgcPageHeaderDirective, NgcPageContentDirective ],
	providers	: [],
})
export class NgcPageModule {}
