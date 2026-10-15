import { PipeTransform, Pipe } from '@angular/core';
import { parsePhoneNumberFromString, isSupportedCountry, PhoneNumber, CountryCode } from 'libphonenumber-js';

import { Memoize } from 'angular-core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {

	/**
	 * @param {string} phone
	 * @param {CountryCode} countryCode
	 * @return {string}
	 */
	@Memoize()
	public transform( phone: string, countryCode: CountryCode ): string {
		if ( !phone || !isSupportedCountry( countryCode ) ) return phone;

		const phoneNumber: PhoneNumber = parsePhoneNumberFromString( phone, countryCode );

		return phoneNumber?.formatNational() || phone;
	}

}
