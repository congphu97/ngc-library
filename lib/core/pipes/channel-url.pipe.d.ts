import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class ChannelURLPipe implements PipeTransform {
    private _sanitizer;
    /**
     * @constructor
     * @param {DomSanitizer} _sanitizer
     */
    constructor(_sanitizer: DomSanitizer);
    /**
     * @param {string} channelID
     * @param {boolean} isSafeUrl
     * @return {string | SafeUrl}
     */
    transform(channelID: string, isSafeUrl?: boolean): string | SafeUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChannelURLPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ChannelURLPipe, "channelURL", false>;
}
