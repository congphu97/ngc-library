import { FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import _ from 'lodash';

export class EqualValidators {

	/**
	 * @static
	 * @param {string} equal
	 * @param {boolean} reverse
	 * @param {any} options
	 * @return {() => {}}
	 */
	public static validator( equal: string, reverse: boolean = false, options: any = {} ): ( c: FormControl ) => {} {
		return ( c: FormControl ): IObject => {
			// Self value
			const v: any = c.value;

			// Control value
			const e: AbstractControl = c.root.get( equal );

			// Value not equal
			if ( e && v !== e.value && !reverse ) {
				return { equal: options };
			}

			// Value equal and reverse
			if ( e && v === e.value && reverse && e.errors !== null ) {
				delete e.errors.equal;

				if ( !_.keys( e.errors ).length ) e.setErrors( null );
			}

			// Value not equal and reverse
			if ( e && v !== e.value && reverse ) c.setErrors({ equal: options });

			return null;
		};
	}

	/**
	 * @static
	 * @param {AbstractControl} group
	 * @return {ValidationErrors | null}
	 */
	public static disallowSimilarPassword( group: AbstractControl ): ValidationErrors | null {
		const currentPassword: any = group.get( 'currentPassword' ).value;
		const newPassword: any = group.get( 'newPassword' ).value;
		const similarPassword: boolean = currentPassword === newPassword;

		if ( !similarPassword ) return null;

		const errors: ValidationErrors = { disallowSimilarPassword: similarPassword };

		group.get( 'newPassword' ).setErrors( errors );

		return errors;
	}

	/**
	 * @static
	 * @param {AbstractControl} group
	 * @return {ValidationErrors | null}
	 */
	public static matchPassword( group: AbstractControl ): ValidationErrors | null {
		const newPassword: any = group.get( 'newPassword' ).value;
		const confirmNewPassword: any = group.get( 'confirmNewPassword' ).value;
		const matchPassword: boolean = newPassword === confirmNewPassword;

		if ( matchPassword ) return null;

		const errors: ValidationErrors = { matchPassword: !matchPassword };

		group.get( 'confirmNewPassword' ).setErrors( errors );

		return errors;
	}

	/**
	 * @static
	 * @param {any[] | Function} array
	 * @param {boolean} caseSensitive
	 * @param {string} property
	 * @return {ValidatorFn}
	 */
	public static uniqueNameValidator( array: any[] | Function, caseSensitive?: boolean, property?: string ): ValidatorFn {
		return ( control: AbstractControl ): ValidationErrors | null => {
			const _array: any[] = _.isFunction( array ) ? ( array as Function )() : array;
			const unique: boolean = !_.find( _array, ( item: any ) => {
				const compareValue: string = property ? _.get( item, property ) : item;

				return caseSensitive
					? compareValue === control.value
					: compareValue?.toLowerCase() === control.value?.toLowerCase();
			} );

			return unique ? null : { duplicateName: { value: control.value } };
		};
	}

}
