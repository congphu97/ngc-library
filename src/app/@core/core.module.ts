import { NgModule, Optional, Inject } from '@angular/core';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import {
	CoreModule as AngularCoreModule,
	APP_CONFIG, SERVER_CONFIG, DATE_TIME_CONFIG,
	STORAGE_CONFIG, AppConfig, ServerConfig, DateTimeConfig,
	StorageConfig, LODASH_MIXIN
} from 'angular-core';
import _ from 'lodash';

// Apply lodash mixin
_.mixin( LODASH_MIXIN );

import { ENVIRONMENT } from '@environments/environment';
// import { HASH } from '@environments/hash';

// import { CONSTANT as APP_CONSTANT } from '@resources';

import { FormModule } from './form.module';
import { CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent } from './components';
import { HighlightStateDirective, NgCacheIfDirective } from './directives';
import { AppearanceService } from './services';
import { I18n } from './loaders';
import {
	ChannelURLPipe, ColorPipe, ContrastPipe,
	ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
	FileIconPipe, FlagImagePipe, MetaEmbedPipe,
	PhonePipe
} from './pipes';

@NgModule({
	imports: [
		// LoadingBarHttpClientModule, LazyLoadImageModule, RoundProgressModule,
		RoundProgressModule,
		AngularCoreModule, FormModule,
	],
	exports: [
		// LoadingBarHttpClientModule, LazyLoadImageModule, AngularCoreModule,
		AngularCoreModule,
		/* Component Inject (Do not remove) */
		CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent,
		/* End Component Inject (Do not remove) */

		/* Directive Inject (Do not remove) */
		HighlightStateDirective, NgCacheIfDirective,
		/* End Directive Inject (Do not remove) */

		/* Pipe Inject (Do not remove) */
		ChannelURLPipe, ColorPipe, ContrastPipe,
		ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
		FileIconPipe, FlagImagePipe, MetaEmbedPipe,
		PhonePipe,
		/* End Pipe Inject (Do not remove) */
	],
	declarations: [
		/* Component Inject (Do not remove) */
		CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent,
		/* End Component Inject (Do not remove) */

		/* Directive Inject (Do not remove) */
		HighlightStateDirective, NgCacheIfDirective,
		/* End Directive Inject (Do not remove) */

		/* Pipe Inject (Do not remove) */
		ChannelURLPipe, ColorPipe, ContrastPipe,
		ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
		FileIconPipe, FlagImagePipe, MetaEmbedPipe,
		PhonePipe,
		/* End Pipe Inject (Do not remove) */
	],
	providers: [
		/* Service Inject (Do not remove) */
		AppearanceService,
		/* End Service Inject (Do not remove) */

		{ provide: APP_CONFIG, useClass: AppConfig },
		{ provide: SERVER_CONFIG, useClass: ServerConfig },
		{ provide: DATE_TIME_CONFIG, useClass: DateTimeConfig },
		{ provide: STORAGE_CONFIG, useClass: StorageConfig },
	],
})
@I18n({
	prefix: 'CORE',
	loader: ( lang: string ) => import( `./i18n/${lang}.json` ),
})
export class CoreModule {

	/**
	 * @constructor
	 * @param {AppConfig} _appConfig
	 * @param {ServerConfig} _serverConfig
	 * @param {DateTimeConfig} _dateTimeConfig
	 * @param {StorageConfig} _storageConfig
	 */
	constructor(
		@Optional() @Inject( APP_CONFIG ) private _appConfig: AppConfig,
		@Optional() @Inject( SERVER_CONFIG ) private _serverConfig: ServerConfig,
		@Optional() @Inject( DATE_TIME_CONFIG ) private _dateTimeConfig: DateTimeConfig,
		@Optional() @Inject( STORAGE_CONFIG ) private _storageConfig: StorageConfig
	) {
		console.log( this._dateTimeConfig , this._storageConfig)
		this._appConfig.name = ENVIRONMENT.APP_NAME;
		this._appConfig.logo = ENVIRONMENT.APP_LOGO;
		this._appConfig.url = ENVIRONMENT.APP_URL;
		// this._appConfig.mainPath = APP_CONSTANT.MAIN_PATH;
		// this._appConfig.locale = APP_CONSTANT.LOCALE;

		this._serverConfig.apiURL = ENVIRONMENT.SERVER_API_URL;
		this._serverConfig.wsURL = ENVIRONMENT.SERVER_WEBSOCKET_URL;
		this._serverConfig.fcmPublicKey = ENVIRONMENT.FCM_PUBLIC_KEY;
		this._serverConfig.fcmSubscriptionEndpoint = ENVIRONMENT.FCM_SUBSCRIPTION_ENDPOINT;

		// this._dateTimeConfig.timezone = APP_CONSTANT.TIMEZONE;
		// this._dateTimeConfig.timeFormat = APP_CONSTANT.TIME_FORMAT;
		// this._dateTimeConfig.dateFormat = APP_CONSTANT.DATE_FORMAT;
		// this._dateTimeConfig.weekStart = APP_CONSTANT.WEEK_START;

		// this._storageConfig.authorizedKey = HASH.AUTHORIZED_KEY;
		// this._storageConfig.hashKey = HASH.STORAGE_HASH_KEY;
		// this._storageConfig.expireDays = HASH.STORAGE_EXPIRE_DAYS;
	}

}
