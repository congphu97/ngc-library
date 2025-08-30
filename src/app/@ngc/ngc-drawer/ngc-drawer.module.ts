import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcDrawerContainerComponent } from './drawer-container/ngc-drawer-container.component';
import { NgcDrawerComponent } from './drawer/ngc-drawer.component';
import { NgcDrawerLazyDirective } from './drawer/ngc-drawer-lazy.directive';
import { NgcDrawerContentComponent } from './drawer-content/ngc-drawer-content.component';

@NgModule({
	imports: [
		CoreModule,

		NgcButtonModule, NgcTooltipModule,
	],
	exports		: [ NgcDrawerContainerComponent, NgcDrawerComponent, NgcDrawerLazyDirective, NgcDrawerContentComponent ],
	declarations: [ NgcDrawerContainerComponent, NgcDrawerComponent, NgcDrawerLazyDirective, NgcDrawerContentComponent ],
	providers	: [],
})
export class NgcDrawerModule {}
