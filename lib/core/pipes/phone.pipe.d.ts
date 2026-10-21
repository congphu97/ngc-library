import { PipeTransform } from '@angular/core';
import { CountryCode } from 'libphonenumber-js';
import * as i0 from "@angular/core";
export declare class PhonePipe implements PipeTransform {
    /**
     * @param {string} phone
     * @param {CountryCode} countryCode
     * @return {string}
     */
    transform(phone: string, countryCode: CountryCode): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhonePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PhonePipe, "phone", false>;
}
