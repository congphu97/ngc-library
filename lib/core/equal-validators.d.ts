import { UntypedFormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export declare class EqualValidators {
    /**
     * @static
     * @param {string} equal
     * @param {boolean} reverse
     * @param {any} options
     * @return {() => {}}
     */
    static validator(equal: string, reverse?: boolean, options?: any): (c: UntypedFormControl) => {};
    /**
     * @static
     * @param {AbstractControl} group
     * @return {ValidationErrors | null}
     */
    static disallowSimilarPassword(group: AbstractControl): ValidationErrors | null;
    /**
     * @static
     * @param {AbstractControl} group
     * @return {ValidationErrors | null}
     */
    static matchPassword(group: AbstractControl): ValidationErrors | null;
    /**
     * @static
     * @param {any[] | Function} array
     * @param {boolean} caseSensitive
     * @param {string} property
     * @return {ValidatorFn}
     */
    static uniqueNameValidator(array: any[] | Function, caseSensitive?: boolean, property?: string): ValidatorFn;
}
