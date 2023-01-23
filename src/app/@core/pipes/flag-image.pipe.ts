import { PipeTransform, Pipe } from '@angular/core';
import { CountryCode } from 'libphonenumber-js';
import _ from 'lodash';

import { Memoize } from 'angular-core';

@Pipe({ name: 'flagImage' })
export class FlagImagePipe implements PipeTransform {

	/**
	 * @param {CountryCode} countryCode
	 * @return {string}
	 */
	@Memoize()
	public transform( countryCode: CountryCode ): string {
		if ( !countryCode ) return;

		countryCode = _.chain( countryCode )
		.upperCase( countryCode )
		.replace( / /g, '-' )
		.value();

		return `./assets/images/flags/${countryCode}.svg`;
	}

}
