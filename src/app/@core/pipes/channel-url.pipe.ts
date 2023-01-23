import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import _ from 'lodash';

import { Memoize } from 'angular-core';

import { ENVIRONMENT } from '@environments/environment';

@Pipe({ name: 'channelURL' })
export class ChannelURLPipe implements PipeTransform {

	/**
	 * @constructor
	 * @param {DomSanitizer} _sanitizer
	 */
	constructor( private _sanitizer: DomSanitizer ) {}

	/**
	 * @param {string} channelID
	 * @param {boolean} isSafeUrl
	 * @return {string | SafeUrl}
	 */
	@Memoize()
	public transform( channelID: string, isSafeUrl?: boolean ): string | SafeUrl {
		const url: string = _.toLower( `${channelID || ''}.${ENVIRONMENT.APP_DOMAIN}` );

		return isSafeUrl ? this._sanitizer.bypassSecurityTrustUrl( `//${url}` ) : url;
	}

}
