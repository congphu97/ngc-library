import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcDividerModule } from '../ngc-divider';

import { NgcTabGroupComponent } from './tab-group/ngc-tab-group.component';
import { NgcTabComponent } from './tab/ngc-tab.component';
import { NgcTabHeaderDirective } from './tab-header/ngc-tab-header.directive';
import { NgcTabContentDirective } from './tab-content/ngc-tab-content.directive';

@NgModule({
	imports: [
		CoreModule,

		NgcIconModule, NgcScrollBarModule, NgcDividerModule,
	],
	exports		: [ NgcTabGroupComponent, NgcTabComponent, NgcTabHeaderDirective, NgcTabContentDirective ],
	declarations: [ NgcTabGroupComponent, NgcTabComponent, NgcTabHeaderDirective, NgcTabContentDirective ],
	providers	: [],
})
export class NgcTabsModule {}
