import { IObject } from '@core';
import { PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ValidationErrors } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ControlErrorsPipe implements PipeTransform {
    private _translateService;
    static TRANSLATE_KEY_LOOKUP: IObject;
    /**
     * @constructor
     * @param {TranslateService} _translateService
     */
    constructor(_translateService: TranslateService);
    /**
     * @param {ValidationErrors} errors
     * @param {string} field
     * @param {boolean} multiple
     * @return {string[]}
     */
    transform(errors: ValidationErrors, field: string, multiple?: boolean): string[];
    /**
     * @param {ValidationErrors} errors
     * @param {string} field
     * @param {boolean} multiple
     * @return {string[]}
     */
    private _getFieldErrors;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlErrorsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ControlErrorsPipe, "controlErrors", false>;
}
