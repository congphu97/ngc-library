import { PipeTransform } from '@angular/core';
import { NgcICommentReactionType } from '../interfaces';
import * as i0 from "@angular/core";
export declare class NgcReactionEmojiPipe implements PipeTransform {
    transform(reactions: {
        type: NgcICommentReactionType;
        emoji: string;
    }[], type: NgcICommentReactionType): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcReactionEmojiPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NgcReactionEmojiPipe, "reactionEmoji", false>;
}
