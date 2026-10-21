import { PipeTransform } from '@angular/core';
import { CountryCode } from 'libphonenumber-js';
import * as i0 from "@angular/core";
export declare class ExamplePhoneNumberPipe implements PipeTransform {
    /**
     * @param {CountryCode} countryCode
     * @return {string}
     */
    transform(countryCode: CountryCode): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExamplePhoneNumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ExamplePhoneNumberPipe, "examplePhoneNumber", false>;
}
