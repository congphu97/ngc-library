import { NgModule } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { CoreModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcEmojiPickerComponent } from './emoji-picker/ngc-emoji-picker.component';
import { NgcEmojiPickerDirective } from './emoji-picker/ngc-emoji-picker.directive';
import { NgcEmojiComponent } from './emoji/ngc-emoji.component';

@NgModule({
	imports: [
		OverlayModule, PortalModule, PickerModule,

		CoreModule,

		NgcButtonModule, NgcTooltipModule,
	],
	exports		: [ NgcEmojiPickerComponent, NgcEmojiPickerDirective, NgcEmojiComponent ],
	declarations: [ NgcEmojiPickerComponent, NgcEmojiPickerDirective, NgcEmojiComponent ],
	providers	: [],
})
export class NgcEmojiPickerModule {}
