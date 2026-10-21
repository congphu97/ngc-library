import { PipeTransform } from '@angular/core';
import { IsContrastPipe } from 'angular-core';
import * as i0 from "@angular/core";
export declare class ContrastPipe extends IsContrastPipe implements PipeTransform {
    /**
     * @param {string} hex
     * @param {string} textColor
     * @return {any}
     */
    transform(hex: string, textColor?: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContrastPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ContrastPipe, "contrast", false>;
}
