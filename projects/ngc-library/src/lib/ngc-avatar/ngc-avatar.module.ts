import { NgModule } from '@angular/core';

import { CoreModule } from '@core';

import { NgcEmojiPickerModule } from '../ngc-emoji-picker';
import { NgcAvatarComponent } from './ngc-avatar.component';

@NgModule({
	imports: [
		CoreModule,

		NgcEmojiPickerModule,
	],
	exports		: [ NgcAvatarComponent ],
	declarations: [ NgcAvatarComponent ],
	providers	: [],
})
export class NgcAvatarModule {}
