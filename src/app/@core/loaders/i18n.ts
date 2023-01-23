import { ModuleWithProviders } from '@angular/core';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { Observable, forkJoin, Observer } from 'rxjs';
import { take } from 'rxjs/operators';
import _ from 'lodash';

import { CustomMissingTranslationHandler } from 'angular-core';

const i18nModules: I18nAnotation[] = [];

interface I18nLoader {
	loader: Promise<any>;
	prefix?: string;
}

class WebpackTranslateLoader implements TranslateLoader {

	/**
	 * @param {string} lang
	 * @return {Observable}
	 */
	public getTranslation( lang: string ): Observable<IObject<string>> {
		const loaders: I18nLoader[] = [];

		_.forEach( i18nModules, ( anotation: I18nAnotation ) => {
			const prefix: string = anotation.prefix ? `${anotation.prefix}.` : '';
			const loader: Promise<IObject<string>> = anotation.loader ? anotation.loader( lang ) : undefined;

			loaders.push({ prefix, loader });
		} );

		return this._loadTranslations( loaders );
	}

	/**
	 * @param {I18nLoader[]} loaders
	 * @return {Observable}
	 */
	private _loadTranslations( loaders: I18nLoader[] ): Observable<IObject<string>> {
		return new Observable( ( observer: Observer<IObject<string>> ) => {
			forkJoin( _.map( loaders, 'loader' ) )
			.pipe( take( 1 ) )
			.subscribe( ( translations: IObject<string>[] ) => {
				let i: number = 0;

				observer.next(
					_.reduce( translations, ( current: IObject<string>, translation: IObject<string> ) => {
						const prefix: string[] = ( loaders[ i++ ].prefix || '' ).split( '.' );
						let _translation: IObject<string> = translation.default as unknown as IObject<string>;

						for ( let j: number = prefix.length - 1; j >= 0; j-- ) {
							_translation = prefix[ j ]
								? { [ prefix[ j ] ]: _.clone( _translation ) }
								: _translation;
						}

						return _.merge( _translation, current );
					}, {} )
				);
			} );
		} );
	}

}

export interface I18nAnotation {
	prefix?: string;
	loader?: Function;
}

export function I18n( data?: I18nAnotation ) {
	return function f( _target: Function ) { i18nModules.push( data ); };
}

// eslint-disable-next-line @typescript-eslint/naming-convention, id-denylist, id-match
export const I18nTranslateModule: ModuleWithProviders<TranslateModule> = TranslateModule.forRoot({
	loader						: { provide: TranslateLoader, useClass: WebpackTranslateLoader },
	missingTranslationHandler	: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
});
