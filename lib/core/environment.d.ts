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
export declare const NGC_ENVIRONMENT: InjectionToken<INgcEnvironment>;
export declare const DEFAULT_ENVIRONMENT: INgcEnvironment;
export declare const ENVIRONMENT: INgcEnvironment;
