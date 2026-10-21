import { EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { NgcIComment, NgcICommentContent, NgcICommentCreateEvent, NgcICommentUpdateEvent, NgcICommentDeleteEvent, NgcICommentReactionEvent, NgcICommentReactionType } from '../interfaces';
import * as i0 from "@angular/core";
export declare class NgcCommentListComponent implements OnChanges {
    private _cdr;
    comments: NgcIComment[];
    canComment: boolean;
    userID: number;
    maxFilePerComment: number;
    limitReplies: number;
    limitContentHeight: string;
    placeholder: string;
    commentCreated: EventEmitter<NgcICommentCreateEvent>;
    commentUpdated: EventEmitter<NgcICommentUpdateEvent>;
    commentDeleted: EventEmitter<NgcICommentDeleteEvent>;
    commentsLoadMore: EventEmitter<void>;
    repliesLoadMore: EventEmitter<NgcIComment>;
    reactionUpdated: EventEmitter<NgcICommentReactionEvent>;
    readonly REACTIONS: {
        type: NgcICommentReactionType;
        emoji: string;
        label: string;
    }[];
    editingComment: NgcIComment | null;
    replyingComment: NgcIComment | null;
    openReactionCommentId: number | string | null;
    constructor(_cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Get relative time label
     */
    getRelativeTime(date: string | Date): string;
    /**
     * Start editing a comment
     */
    setEditComment(comment: NgcIComment): void;
    /**
     * Reply to a comment
     */
    setReplyComment(comment: NgcIComment): void;
    /**
     * Cancel reply state
     */
    cancelReply(): void;
    /**
     * Create new comment
     */
    createComment(content: NgcICommentContent, parentComment?: NgcIComment): void;
    /**
     * Update existing comment
     */
    updateComment(content: NgcICommentContent, comment: NgcIComment): void;
    /**
     * Delete a comment
     */
    deleteComment(comment: NgcIComment, parentComment?: NgcIComment): void;
    /**
     * Toggle reaction picker visibility
     */
    toggleReactions(commentId: number | string): void;
    /**
     * Apply reaction to comment
     */
    applyReaction(type: NgcICommentReactionType, comment: NgcIComment): void;
    /**
     * Get total reaction count
     */
    getTotalReactions(comment: NgcIComment): number;
    /**
     * Track comments by id
     */
    trackById(_: number, item: NgcIComment): number | string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCommentListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCommentListComponent, "ngc-comment-list", never, { "comments": "comments"; "canComment": "canComment"; "userID": "userID"; "maxFilePerComment": "maxFilePerComment"; "limitReplies": "limitReplies"; "limitContentHeight": "limitContentHeight"; "placeholder": "placeholder"; }, { "commentCreated": "commentCreated"; "commentUpdated": "commentUpdated"; "commentDeleted": "commentDeleted"; "commentsLoadMore": "commentsLoadMore"; "repliesLoadMore": "repliesLoadMore"; "reactionUpdated": "reactionUpdated"; }, never, never, false>;
}
