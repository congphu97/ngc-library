import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcScrollBarComponent } from './ngc-scroll-bar/ngc-scroll-bar.component';
import { NgcScrollBarDirective } from './ngc-scroll-bar/ngc-scroll-bar.directive';
import { NgcScrollBarViewPortDirective } from './ngc-scroll-bar-view-port/ngc-scroll-bar-view-port.directive';
import { NgcScrollBarViewPortItemDirective } from './ngc-scroll-bar-view-port/ngc-scroll-bar-view-port-item.directive';

@NgModule({
	imports: [ CoreModule ],
	exports: [
		NgcScrollBarComponent, NgcScrollBarDirective, NgcScrollBarViewPortDirective,
		NgcScrollBarViewPortItemDirective,
	],
	declarations: [
		NgcScrollBarComponent, NgcScrollBarDirective, NgcScrollBarViewPortDirective,
		NgcScrollBarViewPortItemDirective,
	],
	providers: [],
})
export class NgcScrollBarModule {}
