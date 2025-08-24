import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { CoreModule } from '@core';

import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcColorPickerModule } from '../ngc-color-picker';

import { NgcMenuComponent } from './menu/ngc-menu.component';
import { NgcMenuItemComponent } from './menu-item/ngc-menu-item.component';
import { NgcMenuHeaderTitleComponent } from './menu-header-title/ngc-menu-header-title.component';
import { NgcMenuContentComponent } from './menu-content/ngc-menu-content.component';
import { NgcMenuContentDirective } from './menu-content/ngc-menu-content.directive';
import { NgcMenuHeaderComponent } from './menu-header/ngc-menu-header.component';
import { NgcMenuHeaderDirective } from './menu-header/ngc-menu-header.directive';
import { NgcMenuFooterComponent } from './menu-footer/ngc-menu-footer.component';
import { NgcMenuFooterDirective } from './menu-footer/ngc-menu-footer.directive';
import { NgcMenuTriggerForDirective } from './menu-trigger-for/ngc-menu-trigger-for.directive';
import { NgcMenuButtonCloseDirective } from './menu-button-close/ngc-menu-button-close.directive';
import { NgcMenuItemPrefixDirective } from './menu-item-prefix/ngc-menu-item-prefix.directive';
import { NgcMenuItemIconDirective } from './menu-item-icon/ngc-menu-item-icon.directive';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';

@NgModule({
	imports: [
		OverlayModule, PortalModule,

		CoreModule,

		NgcIconModule, NgcScrollBarModule, NgcTruncateModule,
		NgcButtonModule, NgcTooltipModule, NgcColorPickerModule,
	],
	exports: [
		NgcMenuComponent, NgcMenuItemComponent, NgcMenuHeaderComponent,
		NgcMenuHeaderDirective, NgcMenuHeaderTitleComponent, NgcMenuFooterComponent,
		NgcMenuFooterDirective, NgcMenuContentComponent, NgcMenuContentDirective,
		NgcMenuTriggerForDirective, NgcMenuButtonCloseDirective, NgcMenuItemIconDirective,
		NgcMenuItemPrefixDirective, NgcMenuItemPrefixDirective,
	],
	declarations: [
		NgcMenuComponent, NgcMenuItemComponent, NgcMenuHeaderComponent,
		NgcMenuHeaderDirective, NgcMenuHeaderTitleComponent, NgcMenuFooterComponent,
		NgcMenuFooterDirective, NgcMenuContentComponent, NgcMenuContentDirective,
		NgcMenuTriggerForDirective, NgcMenuButtonCloseDirective, NgcMenuItemIconDirective,
		NgcMenuItemPrefixDirective, NgcMenuItemPrefixDirective,
	],
	providers: [],
})
export class NgcMenuModule {}
