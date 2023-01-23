import { PipeTransform, Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ValidationErrors } from '@angular/forms';
import _ from 'lodash';

@Pipe({ name: 'controlErrors' })
export class ControlErrorsPipe implements PipeTransform {

	public static TRANSLATE_KEY_LOOKUP: IObject = {
		disallowSimilarPassword	: 'DISALLOW_SIMILAR_PASSWORD',
		equal					: 'EQUAL',
		length					: 'LENGTH',
		matchPassword			: 'MATCH_PASSWORD',
		max						: 'MAX',
		maxLessThan				: 'MAX_LESS_THAN',
		maxlength				: 'MAXLENGTH',
		min						: 'MIN',
		minGreaterThan			: 'MIN_GREATER_THAN',
		minlength				: 'MINLENGTH',
		required				: 'REQUIRED',
	};

	/**
	 * @constructor
	 * @param {TranslateService} _translateService
	 */
	constructor( private _translateService: TranslateService ) {}

	/**
	 * @param {ValidationErrors} errors
	 * @param {string} field
	 * @param {boolean} multiple
	 * @return {string[]}
	 */
	public transform( errors: ValidationErrors, field: string, multiple?: boolean ): string[] {
		return this._getFieldErrors( errors, field, multiple );
	}

	/**
	 * @param {ValidationErrors} errors
	 * @param {string} field
	 * @param {boolean} multiple
	 * @return {string[]}
	 */
	private _getFieldErrors( errors: ValidationErrors, field: string, multiple?: boolean ): string[] {
		if ( !errors ) return [];

		const errorKeys: string[] = _.keys( errors );

		if ( !errorKeys?.length ) return [];

		const validKeyLookup: IObject = ControlErrorsPipe.TRANSLATE_KEY_LOOKUP;

		return _.map( multiple ? errorKeys : [ errorKeys[ 0 ] ], ( errorType: string ) => {
			const error: IObject = errors[ errorType ];
			const errorKey: string = _.toUpper( validKeyLookup[ errorType ] ) || 'INVALID';
			const translateKey: string = `CORE.VALIDATION_MESSAGE.${errorKey}`;
			let value: string;

			switch ( errorKey ) {
				case validKeyLookup.min:
				case validKeyLookup.minGreaterThan:
					value = _.toCommas( error.min );
					break;
				case validKeyLookup.max:
				case validKeyLookup.maxLessThan:
					value = _.toCommas( error.max );
					break;
				case validKeyLookup.length:
				case validKeyLookup.maxlength:
				case validKeyLookup.minlength:
					value = _.toCommas( error.requiredLength );
					break;
				case validKeyLookup.equal:
					value = _.toCommas( error.requiredValue );
					break;
			}

			return this._translateService.instant( translateKey, { ...error, value, field } );
		} );
	}

}
