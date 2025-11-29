import { NgcIFile } from './ngc-file-picker.component';

export * from './google-drive/ngc-google-drive-picker.directive';
export * from './dropbox/ngc-dropbox-picker.directive';
export * from './one-drive/ngc-one-drive-picker.directive';
export * from './ngc-file-picker.component';
export * from './ngc-file-picker.directive';
export * from './ngc-file-picker.module';

export function openFile( file: NgcIFile ): boolean {
	let cannotOpen: boolean;

	switch ( file.attachmentType ) {
		case 'google-drive':
			openNewWindow( file.url );
			break;
		case 'dropbox':
			openNewWindow( file.link );
			break;
		case 'one-drive':
			openNewWindow( file[ '@microsoft.graph.downloadUrl' ] );
			break;
		default:
			cannotOpen = true;
	}

	return !cannotOpen;
}

export function openNewWindow( url: string ) {
	const win: Window = window.open( url, '_blank' );

	win?.focus();
}
