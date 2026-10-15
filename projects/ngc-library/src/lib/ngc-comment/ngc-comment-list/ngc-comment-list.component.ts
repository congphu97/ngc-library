import {
	Component, Input, Output, EventEmitter,
	ViewEncapsulation, ChangeDetectionStrategy,
	ChangeDetectorRef, OnChanges, SimpleChanges
} from '@angular/core';
import {
	NgcIComment, NgcICommentContent,
	NgcICommentCreateEvent, NgcICommentUpdateEvent,
	NgcICommentDeleteEvent, NgcICommentReactionEvent,
	NgcICommentReactionType
} from '../interfaces';

const REACTIONS: { type: NgcICommentReactionType; emoji: string; label: string }[] = [
	{ type: 'like',  emoji: '👍', label: 'Like'  },
	{ type: 'heart', emoji: '❤️', label: 'Love'  },
	{ type: 'haha',  emoji: '😂', label: 'Haha'  },
	{ type: 'wow',   emoji: '😮', label: 'Wow'   },
	{ type: 'sad',   emoji: '😢', label: 'Sad'   },
	{ type: 'angry', emoji: '😡', label: 'Angry' },
];

@Component({
	selector		: 'ngc-comment-list',
	templateUrl		: './ngc-comment-list.html',
	styleUrls		: [ './ngc-comment-list.component.scss' ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
	host			: { class: 'ngc-comment-list' }
})
export class NgcCommentListComponent implements OnChanges {

	@Input() public comments: NgcIComment[] = [];
	@Input() public canComment: boolean = true;
	@Input() public userID: number;
	@Input() public maxFilePerComment: number;
	@Input() public limitReplies: number = 2;
	@Input() public limitContentHeight: string;
	@Input() public placeholder: string = 'Write a comment...';

	@Output() public commentCreated: EventEmitter<NgcICommentCreateEvent> = new EventEmitter();
	@Output() public commentUpdated: EventEmitter<NgcICommentUpdateEvent> = new EventEmitter();
	@Output() public commentDeleted: EventEmitter<NgcICommentDeleteEvent> = new EventEmitter();
	@Output() public commentsLoadMore: EventEmitter<void> = new EventEmitter();
	@Output() public repliesLoadMore: EventEmitter<NgcIComment> = new EventEmitter();
	@Output() public reactionUpdated: EventEmitter<NgcICommentReactionEvent> = new EventEmitter();

	public readonly REACTIONS = REACTIONS;

	public editingComment: NgcIComment | null = null;
	public replyingComment: NgcIComment | null = null;
	public openReactionCommentId: number | string | null = null;

	constructor( private _cdr: ChangeDetectorRef ) {}

	public ngOnChanges( changes: SimpleChanges ) {
		if ( changes.comments ) {
			this._cdr.markForCheck();
		}
	}

	/**
	 * Get relative time label
	 */
	public getRelativeTime( date: string | Date ): string {
		if ( !date ) return '';
		const now = Date.now();
		const then = new Date( date ).getTime();
		const diff = Math.floor( ( now - then ) / 1000 );

		if ( diff < 60 ) return 'just now';
		if ( diff < 3600 ) return `${Math.floor(diff/60)}m ago`;
		if ( diff < 86400 ) return `${Math.floor(diff/3600)}h ago`;
		if ( diff < 604800 ) return `${Math.floor(diff/86400)}d ago`;
		return new Date( date ).toLocaleDateString();
	}

	/**
	 * Start editing a comment
	 */
	public setEditComment( comment: NgcIComment ) {
		this.editingComment = comment;
		this.replyingComment = null;
		this._cdr.markForCheck();
	}

	/**
	 * Reply to a comment
	 */
	public setReplyComment( comment: NgcIComment ) {
		this.replyingComment = comment;
		this.editingComment = null;
		this._cdr.markForCheck();
	}

	/**
	 * Cancel reply state
	 */
	public cancelReply() {
		this.replyingComment = null;
		this._cdr.markForCheck();
	}

	/**
	 * Create new comment
	 */
	public createComment( content: NgcICommentContent, parentComment?: NgcIComment ) {
		const comment: NgcIComment = {
			id			: Date.now(),
			user		: { id: this.userID || 0, name: 'You' },
			content,
			createdAt	: new Date().toISOString(),
			editable	: true,
			deletable	: true,
			reactions	: [],
		};

		if ( parentComment ) {
			parentComment.replies = parentComment.replies || [];
			parentComment.replies.push( comment );
			parentComment.totalReplies = ( parentComment.totalReplies || 0 ) + 1;
		} else {
			this.comments = [ ...this.comments, comment ];
		}

		this.replyingComment = null;
		this.commentCreated.emit({ comment, parentComment });
		this._cdr.markForCheck();
	}

	/**
	 * Update existing comment
	 */
	public updateComment( content: NgcICommentContent, comment: NgcIComment ) {
		comment.content = content;
		comment.isEdited = true;
		this.editingComment = null;

		this.commentUpdated.emit({ comment, newContent: content });
		this._cdr.markForCheck();
	}

	/**
	 * Delete a comment
	 */
	public deleteComment( comment: NgcIComment, parentComment?: NgcIComment ) {
		if ( parentComment ) {
			parentComment.replies = ( parentComment.replies || [] ).filter( r => r.id !== comment.id );
			parentComment.totalReplies = Math.max( 0, ( parentComment.totalReplies || 1 ) - 1 );
		} else {
			this.comments = this.comments.filter( c => c.id !== comment.id );
		}

		this.commentDeleted.emit({ comment });
		this._cdr.markForCheck();
	}

	/**
	 * Toggle reaction picker visibility
	 */
	public toggleReactions( commentId: number | string ) {
		this.openReactionCommentId = this.openReactionCommentId === commentId ? null : commentId;
		this._cdr.markForCheck();
	}

	/**
	 * Apply reaction to comment
	 */
	public applyReaction( type: NgcICommentReactionType, comment: NgcIComment ) {
		comment.reactions = comment.reactions || [];
		const existing = comment.reactions.find( r => r.type === type );

		if ( existing ) {
			existing.reacted = !existing.reacted;
			existing.count = existing.reacted ? existing.count + 1 : Math.max( 0, existing.count - 1 );
			if ( existing.count === 0 ) {
				comment.reactions = comment.reactions.filter( r => r.type !== type );
			}
		} else {
			comment.reactions.push({ type, count: 1, reacted: true });
		}

		this.openReactionCommentId = null;
		this.reactionUpdated.emit({ comment, type });
		this._cdr.markForCheck();
	}

	/**
	 * Get total reaction count
	 */
	public getTotalReactions( comment: NgcIComment ): number {
		return ( comment.reactions || [] ).reduce( ( sum, r ) => sum + r.count, 0 );
	}

	/**
	 * Track comments by id
	 */
	public trackById( _: number, item: NgcIComment ): number | string {
		return item.id;
	}

}
