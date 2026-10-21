import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FileIconPipe implements PipeTransform {
    /**
     * @param {string} filename
     * @param {string} size
     * @return {string}
     */
    transform(filename: string, size?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileIconPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FileIconPipe, "fileIcon", false>;
}
