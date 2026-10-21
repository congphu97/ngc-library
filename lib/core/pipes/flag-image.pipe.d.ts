import { PipeTransform } from '@angular/core';
import { CountryCode } from 'libphonenumber-js';
import * as i0 from "@angular/core";
export declare class FlagImagePipe implements PipeTransform {
    /**
     * @param {CountryCode} countryCode
     * @return {string}
     */
    transform(countryCode: CountryCode): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlagImagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FlagImagePipe, "flagImage", false>;
}
