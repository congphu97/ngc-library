import { EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NgcICommentContent, NgcICommentFile, NgcIComment } from '../interfaces';
import { NgcIFilePickerEvent } from '@app/@ngc/ngc-file-picker';
import { NgcIEmojiData } from '@app/@ngc/ngc-emoji-picker';
import * as i0 from "@angular/core";
export declare class NgcCommentBoxComponent implements AfterViewInit, OnDestroy {
    private _cdr;
    get classSub(): boolean;
    textareaRef: ElementRef<HTMLTextAreaElement>;
    subEditor: boolean;
    autoFocusOn: boolean;
    editingComment: NgcIComment;
    maxFilePerComment: number;
    maxImagePerComment: number;
    placeholder: string;
    commentSent: EventEmitter<NgcICommentContent>;
    cancelled: EventEmitter<void>;
    text: string;
    attachments: NgcICommentFile[];
    images: NgcICommentFile[];
    isFormattingVisible: boolean;
    isBold: boolean;
    isItalic: boolean;
    constructor(_cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    get isDisabled(): boolean;
    /**
     * Send comment
     */
    sendComment(): void;
    /**
     * Cancel editing
     */
    cancel(): void;
    /**
     * Handle Enter key (send on plain Enter, allow Shift+Enter for newline)
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * Handle file picked from ngc-file-picker
     */
    onFilePicked(event: NgcIFilePickerEvent): void;
    /**
     * Handle image picked from ngc-file-picker
     */
    onImagePicked(event: NgcIFilePickerEvent): void;
    /**
     * Insert emoji into text
     */
    onEmojiPicked(emoji: NgcIEmojiData): void;
    /**
     * Remove attachment
     */
    removeAttachment(index: number): void;
    /**
     * Remove image
     */
    removeImage(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCommentBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCommentBoxComponent, "ngc-comment-box", never, { "subEditor": "subEditor"; "autoFocusOn": "autoFocusOn"; "editingComment": "editingComment"; "maxFilePerComment": "maxFilePerComment"; "maxImagePerComment": "maxImagePerComment"; "placeholder": "placeholder"; }, { "commentSent": "commentSent"; "cancelled": "cancelled"; }, never, never, false>;
}
