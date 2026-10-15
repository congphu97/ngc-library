import { InjectionToken } from '@angular/core';

export interface INgcEnvironment {
	PRODUCTION?: boolean;
	SIGN_UP_FEATURE?: boolean;
	SERVER_API_URL?: string;
	SERVER_WEBSOCKET_URL?: string;
	APP_URL?: string;
	APP_DOMAIN?: string;
	APP_NAME?: string;
	APP_TITLE?: string;
	APP_LOGO?: string;
	GOOGLE_DRIVE_CLIENT_ID?: string;
	ONEDRIVE_CLIENT_ID?: string;
	DROPBOX_APP_KEY?: string;
	[key: string]: any;
}

export const NGC_ENVIRONMENT = new InjectionToken<INgcEnvironment>('NGC_ENVIRONMENT');

export const DEFAULT_ENVIRONMENT: INgcEnvironment = {
	PRODUCTION: false,
	APP_DOMAIN: 'localhost',
	APP_URL: 'http://localhost:8000',
	GOOGLE_DRIVE_CLIENT_ID: '',
	ONEDRIVE_CLIENT_ID: '',
	DROPBOX_APP_KEY: '',
};

export const ENVIRONMENT: INgcEnvironment = DEFAULT_ENVIRONMENT;
