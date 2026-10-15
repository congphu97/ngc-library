import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { CoreModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';

import { NgcDialogContainerComponent } from './dialog-container/ngc-dialog-container.component';
import { NgcDialogHeaderDirective } from './dialog-header/ngc-dialog-header.directive';
import { NgcDialogContentDirective } from './dialog-content/ngc-dialog-content.directive';
import { NgcDialogFooterDirective } from './dialog-footer/ngc-dialog-footer.directive';
import { NgcDialogService } from './dialog/ngc-dialog.service';

@NgModule({
	imports: [
		OverlayModule, PortalModule,

		CoreModule,

		NgcButtonModule, NgcTooltipModule,
	],
	exports		: [ NgcDialogContainerComponent, NgcDialogHeaderDirective, NgcDialogContentDirective, NgcDialogFooterDirective ],
	declarations: [ NgcDialogContainerComponent, NgcDialogHeaderDirective, NgcDialogContentDirective, NgcDialogFooterDirective ],
	providers	: [ NgcDialogService ],
})
export class NgcDialogModule {}
