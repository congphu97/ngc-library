import { PipeTransform, Pipe } from '@angular/core';
import { getExampleNumber, isSupportedCountry, CountryCode } from 'libphonenumber-js';
import examples from 'libphonenumber-js/examples.mobile.json';

import { Memoize } from 'angular-core';

@Pipe({ name: 'examplePhoneNumber' })
export class ExamplePhoneNumberPipe implements PipeTransform {

	/**
	 * @param {CountryCode} countryCode
	 * @return {string}
	 */
	@Memoize()
	public transform( countryCode: CountryCode ): string {
		if ( !countryCode ) return;

		return isSupportedCountry( countryCode )
			? getExampleNumber( countryCode, examples )?.formatNational()
			: undefined;
	}

}
