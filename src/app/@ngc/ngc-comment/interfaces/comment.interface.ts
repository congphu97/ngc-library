export interface NgcICommentUser {
	id: number;
	name: string;
	avatar?: string;
}

export interface NgcICommentContent {
	text?: string;
	attachments?: NgcICommentFile[];
	images?: NgcICommentFile[];
	mentions?: number[];
}

export interface NgcICommentFile {
	name?: string;
	size?: number;
	url?: string;
	previewUrl?: string;
	type?: string;
}

export type NgcICommentReactionType = 'like' | 'heart' | 'haha' | 'wow' | 'sad' | 'angry';

export interface NgcICommentReaction {
	type: NgcICommentReactionType;
	count: number;
	reacted?: boolean;
}

export interface NgcIComment {
	id: number | string;
	user: NgcICommentUser;
	content: NgcICommentContent;
	createdAt: string | Date;
	updatedAt?: string | Date;
	isEdited?: boolean;
	editable?: boolean;
	deletable?: boolean;
	reactions?: NgcICommentReaction[];
	totalReplies?: number;
	replies?: NgcIComment[];
}

export interface NgcICommentCreateEvent {
	comment: NgcIComment;
	parentComment?: NgcIComment;
}

export interface NgcICommentUpdateEvent {
	comment: NgcIComment;
	newContent: NgcICommentContent;
}

export interface NgcICommentDeleteEvent {
	comment: NgcIComment;
}

export interface NgcICommentReactionEvent {
	comment: NgcIComment;
	type: NgcICommentReactionType;
}
