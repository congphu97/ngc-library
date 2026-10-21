import { EventEmitter } from '@angular/core';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import * as i0 from "@angular/core";
export declare type NgcIEmojiPickerMode = 'default' | 'inline';
export declare type NgcIEmojiPickerPosition = 'above' | 'below';
export declare type NgcIEmojiData = EmojiData;
export declare class NgcEmojiPickerComponent {
    get classInline(): boolean;
    perLine: number;
    mode: NgcIEmojiPickerMode;
    picked: EventEmitter<NgcIEmojiData>;
    close: (event?: Event) => void;
    onPicked: (event: NgcIEmojiData) => void;
    /**
     * @param {NgcIEmojiData} emoji
     * @return {void}
     */
    pick(emoji: NgcIEmojiData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcEmojiPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcEmojiPickerComponent, "ngc-emoji-picker", never, { "perLine": "perLine"; "mode": "mode"; }, { "picked": "picked"; }, never, never, false>;
}
