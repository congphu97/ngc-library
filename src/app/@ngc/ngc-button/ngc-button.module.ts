import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

// import { WGCIconModule } from '../wgc-icon';
// import { WGCLoadingModule } from '../wgc-loading';
// import { WGCButtonComponent } from './button/wgc-button.component';
// import { WGCBasicButtonComponent } from './basic-button/wgc-basic-button.component';
// import { WGCFabButtonComponent } from './fab-button/wgc-fab-button.component';
// import { WGCIconButtonComponent } from './icon-button/wgc-icon-button.component';
import { NgcIconModule } from '../ngc-icon';
import { NgcButtonIconDirective } from './button-icon/ngc-button-icon.directive';
import { NgcButtonComponent } from './button/ngc-button.component';
import { NgcLoadingModule } from '../ngc-loading';

@NgModule({
	imports: [
		CoreModule,
        NgcLoadingModule,
        NgcIconModule,
	],
	exports: [
		// WGCButtonComponent, WGCBasicButtonComponent, WGCFabButtonComponent,
		// WGCIconButtonComponent,
        NgcButtonComponent,
        NgcButtonIconDirective,
	],
	declarations: [
		// WGCButtonComponent, WGCBasicButtonComponent, WGCFabButtonComponent,
		// WGCIconButtonComponent,
        NgcButtonComponent,
        NgcButtonIconDirective,
	],
	providers: [],
})
export class NgcButtonModule {}