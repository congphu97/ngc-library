// import { appVersion } from './version';

// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const ENVIRONMENT = {
	PRODUCTION						: false,
	SIGN_UP_FEATURE					: true,
	SERVER_API_URL					: 'https://api.workfex.com',
	SERVER_WEBSOCKET_URL			: 'https://socket.workfex.com',
	APP_URL							: 'http://localhost:8000',
	APP_DOMAIN						: 'localhost:8000',
	APP_NAME						: 'Cubable',
	APP_TITLE						: 'Make future now',
	APP_LOGO						: 'assets/images/logos/logo.png',
	APP_LOGO_HORIZONTAL				: 'assets/images/logos/logo-horizontal.png',
	APP_LOGO_VERTICAL				: 'assets/images/logos/logo-vertical.png',
	APP_LOGO_HORIZONTAL_WITH_TAGLINE: 'assets/images/logos/logo-horizontal-with-tagline.png',
	APP_LOGO_VERTICAL_WITH_TAGLINE	: 'assets/images/logos/logo-vertical-with-tagline.png',
	// APP_VERSION						: appVersion,
	FCM_SUBSCRIPTION_ENDPOINT		: null,
	FCM_PUBLIC_KEY					: null,
	GOOGLE_DRIVE_CLIENT_ID			: '840406794564-r2qb9kit6dj39govmnajqg2ua0k4aruc',
	ONEDRIVE_CLIENT_ID				: 'e9e96575-c827-41e7-9d6e-91b98718f4c9',
	DROPBOX_APP_KEY					: 'ws01d1q96kmjxlm',
	RECAPTCHA_SITE_KEY				: '6LeS4IwUAAAAAHcIsm-hvdKX5_4RUfR3DU9e1BgH',
} as const;
