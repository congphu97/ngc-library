import {
	Component, EventEmitter, Inject,
	Input, Optional, Output,
	TemplateRef, ViewEncapsulation, ChangeDetectionStrategy
} from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';

import { Unsubscriber, DefaultValue, untilCmpDestroyed } from '@core';

import { CONSTANT as APP_CONSTANT } from '@resources';

import { NgcIUploadedFile, NgcIFileService, Ngc_FILE_SERVICE } from '../ngc-file-picker';
import { NgcIAvatar, NgcIAvatarMode } from '../ngc-avatar';
import { NgcCropperComponent, NgcICroppedEvent } from '../ngc-cropper';
import { NgcDialogService, NgcIDialogRef } from '../ngc-dialog';
import { NgcToastService } from '../ngc-toast/public-api';

export interface NgcIAvatarPickedEvent {
	text?: string;
	avatar?: NgcIAvatar;
	file?: Blob;
	response?: NgcIUploadedFile;
}

@Unsubscriber()
@Component({
	selector		: 'ngc-avatar-picker',
	templateUrl		: './ngc-avatar-picker.html',
	styleUrls		: [ './ngc-avatar-picker.scss' ],
	host			: { class: 'ngc-avatar-picker' },
	providers		: [ NgcDialogService ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcAvatarPickerComponent {

	@Input() public label: string;
	@Input() public text: string;
	@Input() public photo: string;
	@Input() public color: string;
	@Input() public icon: string;
	@Input() @DefaultValue() public mode: NgcIAvatarMode = 'text';
	@Input() public scrolling$: Subject<any>;

	@Output() public picked: EventEmitter<NgcIAvatarPickedEvent> = new EventEmitter<NgcIAvatarPickedEvent>();

	public isCropping: boolean;
	public croppedImage: string;
	public defaultIcon: string = '1F48E';
	public selectedFile: Blob;
	public cropper: NgcCropperComponent;
	public dialogRef: NgcIDialogRef;

	/**
	 * @constructor
	 * @param {NgcIFileService} _fileService
	 * @param {NgcDialogService} _ngcDialogService
	 * @param {NgcToastService} _ngcToastService
	 */
	constructor(
		@Optional() @Inject( Ngc_FILE_SERVICE ) private _fileService: NgcIFileService,
		private _ngcDialogService: NgcDialogService,
		private _ngcToastService: NgcToastService
	) {}

	/**
	 * @return {void}
	 */
	public refresh() {
		this.croppedImage = undefined;
		this.selectedFile = undefined;
		this.isCropping = false;
	}

	/**
	 * @return {void}
	 */
	public pick() {
		const event: NgcIAvatarPickedEvent = {
			avatar	: { photo: this.photo, color: this.color, icon: this.icon || this.defaultIcon, mode: this.mode },
			text	: this.text,
			file	: this.selectedFile,
		};

		if ( this.mode !== 'photo' || !this.selectedFile ) {
			this.picked.emit( event );
			return;
		}

		if ( !this._fileService ) return;

		this._fileService
		.upload( [ this.selectedFile as File ] )
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( result: NgcIUploadedFile ) => {
			const file: IObject = result[ 0 ];

			event.avatar.photo = file.location;
			event.response = result;

			this.picked.emit( event );
		} );
	}

	/**
	 * @return {void}
	 */
	public cropImage() {
		this.cropper.crop();
	}

	/**
	 * @return {void}
	 */
	public pickImage() {
		this.photo = this.croppedImage;

		this.pick();
		this.dialogRef.close();
	}

	/**
	 * @param {TemplateRef} dialog
	 * @return {void}
	 */
	public openDialog( dialog: TemplateRef<any> ) {
		this.dialogRef = this._ngcDialogService.open( dialog, { width: '500px', panelClass: 'ngc-avatar-picker' } );

		this.dialogRef
		.afterClosed()
		.subscribe( () => {
			this.selectedFile = undefined;
			this.isCropping = false;
		} );
	}

	/**
	 * @param {Blob} file
	 * @return {void}
	 */
	public onFileSelected( file: Blob ) {
		if ( !_.includes( APP_CONSTANT.ALLOW_IMAGE_FILES, file?.type ) ) {
			this._ngcToastService.warning(
				'Ngc.LABEL.INVALID_FILE',
				'Ngc.MESSAGE.INVALID_FILE_TYPE',
				{ translateParams: file }
			);
			return;
		}

		if ( file.size > APP_CONSTANT.ALLOW_FILE_SIZE ) {
			this._ngcToastService.warning(
				'Ngc.LABEL.INVALID_FILE',
				'Ngc.MESSAGE.INVALID_FILE_SIZE',
				{ translateParams: file }
			);
			return;
		}

		this.selectedFile = file;
		this.isCropping = true;
	}

	/**
	 * @param {NgcICroppedEvent} event
	 * @return {void}
	 */
	public onCropped( event: NgcICroppedEvent ) {
		this.selectedFile = event.blob;
		this.croppedImage = event.image;
		this.isCropping = false;
	}

}
