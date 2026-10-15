import { Pipe, PipeTransform } from '@angular/core';
import { NgcICommentReactionType } from '../interfaces';

const REACTION_EMOJI_MAP: Record<NgcICommentReactionType, string> = {
	like  : '👍',
	heart : '❤️',
	haha  : '😂',
	wow   : '😮',
	sad   : '😢',
	angry : '😡',
};

@Pipe({ name: 'reactionEmoji' })
export class NgcReactionEmojiPipe implements PipeTransform {

	transform( reactions: { type: NgcICommentReactionType; emoji: string }[], type: NgcICommentReactionType ): string {
		const found = reactions?.find( r => r.type === type );
		return found?.emoji || REACTION_EMOJI_MAP[ type ] || '👍';
	}

}
