import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CoreModule } from '@core';

import { NgcAvatarModule } from '../ngc-avatar';
import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcMenuModule } from '../ngc-menu';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcSearchBoxModule } from '../ngc-search-box';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTruncateModule } from '../ngc-truncate';

import { NgcMemberComponent } from './ngc-member/ngc-member.component';
import { NgcMemberPickerDirective } from './ngc-member-picker/ngc-member-picker.directive';
import { NgcMemberPickerComponent } from './ngc-member-picker/ngc-member-picker.component';
import { NgcMemberListComponent } from './ngc-member-list/ngc-member-list.component';
import { NgcConfirmModule } from '../ngc-confirm';
import { NgcTabsModule } from '../ngc-tabs';

@NgModule({
	imports: [
		ScrollingModule, OverlayModule, PortalModule,

		CoreModule,

		NgcAvatarModule, NgcButtonModule, NgcMenuModule,
		NgcIconModule, NgcTooltipModule, NgcSearchBoxModule,
		NgcTruncateModule, NgcTabsModule, NgcScrollBarModule,
		NgcConfirmModule
	],
	exports		: [ NgcMemberComponent, NgcMemberListComponent, NgcMemberPickerDirective, NgcMemberPickerComponent ],
	declarations: [ NgcMemberComponent, NgcMemberListComponent, NgcMemberPickerDirective, NgcMemberPickerComponent ],
	providers	: [],
})
export class NgcMemberPickerModule {}
