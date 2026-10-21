import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ColorPipe implements PipeTransform {
    /**
     * @param {string} name
     * @param {number} weight
     * @param {number} opacity
     * @return {string}
     */
    transform(name: string, weight?: number, opacity?: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ColorPipe, "color", false>;
}
