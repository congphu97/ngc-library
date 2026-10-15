import { NgModule } from '@angular/core';

import {  NgcTooltipModule } from '../ngc-tooltip';

import { NgcClipboardCopyDirective } from './ngc-clipboard-copy.directive';

@NgModule({
	imports: [
		NgcTooltipModule,
	],
	exports		: [ NgcClipboardCopyDirective ],
	declarations: [ NgcClipboardCopyDirective ],
	providers	: [],
})
export class NgcClipboardCopyModule {}
