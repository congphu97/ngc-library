import {
	Component, EventEmitter, Inject,
	InjectionToken, Input, Optional,
	Output, ViewEncapsulation, ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Observable, combineLatest } from 'rxjs';
import moment, { Moment } from 'moment-timezone';
import _ from 'lodash';

import { Unsubscriber, CoerceBoolean, DefaultValue, untilCmpDestroyed } from '@core';
import { CONSTANT as APP_CONSTANT } from '@resources';


import { NgcIGoogleDriveFile } from './google-drive/ngc-google-drive-picker.directive';
import { NgcIDropboxFile } from './dropbox/ngc-dropbox-picker.directive';
import { NgcIOneDriveFile } from './one-drive/ngc-one-drive-picker.directive';
import { NgcToastService } from '../ngc-toast/toast/ngc-toast.service';

export type NgcIFilePickerMode = 'default' | 'inline';
export type NgcIFilePickerPosition = 'above' | 'below';
export type NgcIFileAttachmentType = 'local' | 'google-drive' | 'one-drive' | 'dropbox';

export interface NgcIFilePickerEvent {
	files: NgcIFile[];
	type: NgcIFileAttachmentType;
	localFiles?: FileList | File[];
}

export interface NgcIUploadedFile {
	destination: string;
	encoding: string;
	fieldname: string;
	filename: string;
	location: string;
	mimetype: string;
	originalname: string;
	path: string;
	size: number;
}

export type NgcIFile = Partial<NgcIUploadedFile>
	& Partial<NgcIGoogleDriveFile>
	& Partial<NgcIDropboxFile>
	& Partial<NgcIOneDriveFile>
	& {
		name: string;
		size: number;
		attachmentType: string;
		createdAt: Moment;
		'@previewUrl'?: string;
	};


// eslint-disable-next-line @typescript-eslint/naming-convention
export interface NgcIFileService<TUploadedFile = NgcIUploadedFile> {
	upload: ( files: File | FileList | File[], options?: IObject ) => Observable<TUploadedFile>;
	downloadLocalFile: ( file: NgcIFile ) => void;
}

export const Ngc_FILE_SERVICE: InjectionToken<NgcIFileService>
	= new InjectionToken<NgcIFileService>( 'Ngc_FILE_SERVICE' );

export class NgcCloudStorageConfig {

	private _googleDrive: boolean;
	private _dropbox: boolean;
	private _oneDrive: boolean;

	get googleDrive(): boolean { return this._googleDrive; }
	set googleDrive( value: boolean ) { this._googleDrive = value; }

	get dropbox(): boolean { return this._dropbox; }
	set dropbox( value: boolean ) { this._dropbox = value; }

	get oneDrive(): boolean { return this._oneDrive; }
	set oneDrive( value: boolean ) { this._oneDrive = value; }

}

export const Ngc_CLOUD_STORAGE_CONFIG: InjectionToken<NgcCloudStorageConfig>
	= new InjectionToken<NgcCloudStorageConfig>( 'NGC_CLOUD_STORAGE_CONFIG' );

@Unsubscriber()
@Component({
	selector		: 'ngc-file-picker',
	templateUrl		: './ngc-file-picker.html',
	styleUrls		: [ './ngc-file-picker.scss' ],
	host			: { class: 'ngc-file-picker' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcFilePickerComponent {

	@HostBinding( 'class.ngc-file-picker--inline' )
	get classInline(): boolean { return this.mode === 'inline'; }

	@Input() public fileAccept: string;
	@Input() public googleDriveMimeTypes: string[];
	@Input() public dropboxExtensions: string[];
	@Input() public oneDriveExtensions: string[];
	@Input() @DefaultValue() @CoerceBoolean() public multiSelect: boolean = true;
	@Input() @DefaultValue() public mode: NgcIFilePickerMode = 'default';

	@Output() public picked: EventEmitter<NgcIFilePickerEvent> = new EventEmitter<NgcIFilePickerEvent>();

	public isUploading: boolean;
	public maxFileSize: number = APP_CONSTANT.ALLOW_FILE_SIZE;
	public uploadingFiles: FileList | File[];
	public uploadingFileStates: IObject[];
	public close: ( event?: Event ) => void;
	public onPicked: ( event: NgcIFilePickerEvent ) => void;

	private _imageOnly: boolean;

	@Input()
	get imageOnly(): boolean { return this._imageOnly; }
	set imageOnly( value: boolean ) {
		this._imageOnly = coerceBooleanProperty( value );

		if ( !this._imageOnly ) return;

		this.fileAccept = this.fileAccept || 'image/*';
		this.googleDriveMimeTypes = this.googleDriveMimeTypes || [ 'image/png', 'image/jpg', 'image/gif' ];
		this.dropboxExtensions = this.dropboxExtensions || [ '.png', '.jpg', '.jpeg', '.gif' ];
		this.oneDriveExtensions = this.oneDriveExtensions || [ '.png', '.jpg', '.jpeg', '.gif' ];
	}

	/**
	 * @constructor
	 * @param {NgcCloudStorageConfig} cloudStorageConfig
	 * @param {NgcIFileService} _fileService
	 * @param {NgcToastService} _ngcToastService
	 */
	constructor(
		@Optional() @Inject( Ngc_CLOUD_STORAGE_CONFIG ) public cloudStorageConfig: NgcCloudStorageConfig,
		@Optional() @Inject( Ngc_FILE_SERVICE ) private _fileService: NgcIFileService,
		private _ngcToastService: NgcToastService
	) {}

	/**
	 * @param {FileList | File[]} files
	 * @return {void}
	 */
	public onLocalPicked( files: FileList | File[] ) {
		const allowImageTypeLookup: IObject<string> = _.keyBy( APP_CONSTANT.ALLOW_IMAGE_FILES );
		const localFiles: FileList | File[] = _.filter( files, ( file: File ) => {
			let valid: boolean = file.size <= this.maxFileSize;

			if ( this.imageOnly ) valid = _.has( allowImageTypeLookup, file?.type );

			return valid;
		} );

		if ( !localFiles?.length ) {
			this._ngcToastService.danger( 'Ngc.MESSAGE.UPLOAD_FILE_FAIL' );
			return;
		}

		if ( this._fileService ) {
			const uploading: Observable<NgcIUploadedFile>[] = [];
			const successFiles: NgcIFile[] = [];

			this.isUploading = false;
			this.uploadingFileStates = [];
			this.uploadingFiles = _.map( localFiles, ( file: File ): File => {
				uploading.push( this._fileService.upload( file, { reportProgress: true, observe: 'events' } ) );
				return file;
			} );

			combineLatest( uploading )
			.pipe( untilCmpDestroyed( this ) )
			.subscribe({
				next: ( results: any ) => {
					_.forEach( results, ( result: any, index: any ) => {
						const uploadingFileState: IObject = this.uploadingFileStates[ index ] || {};

						switch ( result.type ) {
							case 1: // Uploading
								uploadingFileState.loaded = result.loaded;
								uploadingFileState.total = result.total;
								break;
							case 4: // Complete
								const body: any = result.body;
								const success: boolean = result.status === 200;

								uploadingFileState.success = success;

								if ( success ) successFiles[ index ] = body[ 0 ];
								break;
						}

						this.uploadingFileStates[ index ] = uploadingFileState;
					} );
				},
				complete: () => {
					this.isUploading = false;

					this.pick( successFiles, 'local', localFiles );
				},
			});
			return;
		}

		this.pick( undefined, 'local', localFiles );
	}

	/**
	 * @param {NgcIGoogleDriveFile[]} files
	 * @return {void}
	 */
	public onGoogleDrivePicked( files: NgcIGoogleDriveFile[] ) {
		const validFiles: NgcIFile[] = this.imageOnly
			? _.filter( files, ( file: NgcIGoogleDriveFile ) => file.type === 'photo' )
			: files;

		validFiles?.length
			? this.pick( validFiles, 'google-drive' )
			: this._ngcToastService.danger( 'Ngc.MESSAGE.UPLOAD_FILE_FAIL' );
	}

	/**
	 * @param {NgcIDropboxFile[]} files
	 * @return {void}
	 */
	public onDropboxPicked( files: NgcIDropboxFile[] ) {
		const allowImageTypeLookup: IObject<string> = _.keyBy( APP_CONSTANT.ALLOW_IMAGE_FILES );
		const validFiles: NgcIFile[] = this.imageOnly
			? _.filter( files, ( file: NgcIDropboxFile ) => _.has( allowImageTypeLookup, `image/${file.name.split( '.' ).pop()}` ) )
			: files;

		validFiles?.length
			? this.pick( validFiles, 'dropbox' )
			: this._ngcToastService.danger( 'Ngc.MESSAGE.UPLOAD_FILE_FAIL' );
	}

	/**
	 * @param {NgcIOneDriveFile[]} files
	 * @return {void}
	 */
	public onOneDrivePicked( files: NgcIOneDriveFile[] ) {
		const allowImageTypeLookup: IObject<string> = _.keyBy( APP_CONSTANT.ALLOW_IMAGE_FILES );
		const validFiles: NgcIFile[] = this.imageOnly
			? _.filter( files, ( file: NgcIOneDriveFile ) => _.has( allowImageTypeLookup, `image/${file.name.split( '.' ).pop()}` ) )
			: files;

		validFiles?.length
			? this.pick( validFiles, 'one-drive' )
			: this._ngcToastService.danger( 'Ngc.MESSAGE.UPLOAD_FILE_FAIL' );
	}

	/**
	 * @param {NgcIFile[]} files
	 * @param {NgcIFileAttachmentType} attachmentType
	 * @param {FileList | File[]} localFiles
	 * @return {void}
	 */
	public pick( files: NgcIFile[], attachmentType: NgcIFileAttachmentType, localFiles?: FileList | File[] ) {
		files = _.map( files, ( file: NgcIFile ) => ({
			...file, attachmentType,
			name			: file.name || file.originalname || file.filename,
			size			: file.size || file.sizeBytes || file.bytes,
			createdAt		: file.createdAt || moment(),
			'@previewUrl'	: file[ '@previewUrl' ] || this._createPreviewUrl( attachmentType, file ),
		}) );

		const event: NgcIFilePickerEvent = { files, localFiles, type: attachmentType };

		this.picked.emit( event );
		_.isFunction( this.onPicked ) && this.onPicked( event );
	}

	/**
	 * @param {NgcIFileAttachmentType} attachmentType
	 * @param {NgcIFile} file
	 * @return {string}
	 */
	private _createPreviewUrl( attachmentType: NgcIFileAttachmentType, file: NgcIFile ): string {
		switch ( attachmentType ) {
			case 'local':
				return file.location;
			case 'google-drive':
				return `//drive.google.com/uc?id=${file.id}&export=download`;
			case 'dropbox':
				return file.link;
			case 'one-drive':
				return file[ '@microsoft.graph.downloadUrl' ];
		}
	}

}
