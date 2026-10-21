import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface IMetaEmbed {
    title: string;
    description: string;
    url: string;
    siteName: string;
    contentType: string;
    mediaType: string;
    images: string[];
    favicons: string[];
}
export declare class MetaEmbedPipe implements PipeTransform {
    private _domSanitizer;
    /**
     * @constructor
     * @param {DomSanitizer} _domSanitizer
     */
    constructor(_domSanitizer: DomSanitizer);
    /**
     * @param {IMetaEmbed} meta
     * @return {SafeHtml}
     */
    transform(meta: IMetaEmbed): SafeHtml;
    /**
     * @param {string} siteUrl
     * @param {string} siteName
     * @param {string} contentType
     * @param {string} mediaType
     * @param {string} mediaImage
     * @return {SafeHtml}
     */
    private _render;
    static ɵfac: i0.ɵɵFactoryDeclaration<MetaEmbedPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MetaEmbedPipe, "metaEmbed", false>;
}
