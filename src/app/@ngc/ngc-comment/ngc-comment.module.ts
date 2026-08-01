import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgcAvatarModule } from '@app/@ngc/ngc-avatar';
import { NgcIconModule } from '@app/@ngc/ngc-icon';
import { NgcMenuModule } from '@app/@ngc/ngc-menu';
import { NgcTooltipModule } from '@app/@ngc/ngc-tooltip';
import { NgcEmojiPickerModule } from '@app/@ngc/ngc-emoji-picker';
import { NgcFilePickerModule } from '@app/@ngc/ngc-file-picker';

import { NgcCommentBoxComponent } from './ngc-comment-box/ngc-comment-box.component';
import { NgcCommentListComponent } from './ngc-comment-list/ngc-comment-list.component';
import { NgcReactionEmojiPipe } from './pipes/reaction-emoji.pipe';

@NgModule({
	declarations: [
		NgcCommentBoxComponent,
		NgcCommentListComponent,
		NgcReactionEmojiPipe,
	],
	imports: [
		CommonModule,
		FormsModule,
		NgcAvatarModule,
		NgcIconModule,
		NgcMenuModule,
		NgcTooltipModule,
		NgcEmojiPickerModule,
		NgcFilePickerModule,
	],
	exports: [
		NgcCommentBoxComponent,
		NgcCommentListComponent,
	]
})
export class NgcCommentModule { }
