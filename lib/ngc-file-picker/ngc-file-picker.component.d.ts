import { EventEmitter, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Moment } from 'moment-timezone';
import { IObject } from '@core';
import { NgcIGoogleDriveFile } from './google-drive/ngc-google-drive-picker.directive';
import { NgcIDropboxFile } from './dropbox/ngc-dropbox-picker.directive';
import { NgcIOneDriveFile } from './one-drive/ngc-one-drive-picker.directive';
import { NgcToastService } from '../ngc-toast/toast/ngc-toast.service';
import * as i0 from "@angular/core";
export declare type NgcIFilePickerMode = 'default' | 'inline';
export declare type NgcIFilePickerPosition = 'above' | 'below';
export declare type NgcIFileAttachmentType = 'local' | 'google-drive' | 'one-drive' | 'dropbox';
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
export declare type NgcIFile = Partial<NgcIUploadedFile> & Partial<NgcIGoogleDriveFile> & Partial<NgcIDropboxFile> & Partial<NgcIOneDriveFile> & {
    name: string;
    size: number;
    attachmentType: string;
    createdAt: Moment;
    '@previewUrl'?: string;
};
export interface NgcIFileService<TUploadedFile = NgcIUploadedFile> {
    upload: (files: File | FileList | File[], options?: IObject) => Observable<TUploadedFile>;
    downloadLocalFile: (file: NgcIFile) => void;
}
export declare const Ngc_FILE_SERVICE: InjectionToken<NgcIFileService>;
export declare class NgcCloudStorageConfig {
    private _googleDrive;
    private _dropbox;
    private _oneDrive;
    get googleDrive(): boolean;
    set googleDrive(value: boolean);
    get dropbox(): boolean;
    set dropbox(value: boolean);
    get oneDrive(): boolean;
    set oneDrive(value: boolean);
}
export declare const Ngc_CLOUD_STORAGE_CONFIG: InjectionToken<NgcCloudStorageConfig>;
export declare class NgcFilePickerComponent {
    cloudStorageConfig: NgcCloudStorageConfig;
    private _fileService;
    private _ngcToastService;
    get classInline(): boolean;
    fileAccept: string;
    googleDriveMimeTypes: string[];
    dropboxExtensions: string[];
    oneDriveExtensions: string[];
    multiSelect: boolean;
    mode: NgcIFilePickerMode;
    picked: EventEmitter<NgcIFilePickerEvent>;
    isUploading: boolean;
    maxFileSize: number;
    uploadingFiles: FileList | File[];
    uploadingFileStates: IObject[];
    file: any;
    close: (event?: Event) => void;
    onPicked: (event: NgcIFilePickerEvent) => void;
    private _imageOnly;
    get imageOnly(): boolean;
    set imageOnly(value: boolean);
    /**
     * @constructor
     * @param {NgcCloudStorageConfig} cloudStorageConfig
     * @param {NgcIFileService} _fileService
     * @param {NgcToastService} _ngcToastService
     */
    constructor(cloudStorageConfig: NgcCloudStorageConfig, _fileService: NgcIFileService, _ngcToastService: NgcToastService);
    /**
     * @param {FileList | File[]} files
     * @return {void}
     */
    onLocalPicked(files: FileList | File[]): void;
    /**
     * @param {NgcIGoogleDriveFile[]} files
     * @return {void}
     */
    onGoogleDrivePicked(files: NgcIGoogleDriveFile[]): void;
    /**
     * @param {NgcIDropboxFile[]} files
     * @return {void}
     */
    onDropboxPicked(files: NgcIDropboxFile[]): void;
    /**
     * @param {NgcIOneDriveFile[]} files
     * @return {void}
     */
    onOneDrivePicked(files: NgcIOneDriveFile[]): void;
    /**
     * @param {NgcIFile[]} files
     * @param {NgcIFileAttachmentType} attachmentType
     * @param {FileList | File[]} localFiles
     * @return {void}
     */
    pick(files: NgcIFile[], attachmentType: NgcIFileAttachmentType, localFiles?: FileList | File[]): void;
    /**
     * @param {NgcIFileAttachmentType} attachmentType
     * @param {NgcIFile} file
     * @return {string}
     */
    private _createPreviewUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcFilePickerComponent, [{ optional: true; }, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcFilePickerComponent, "ngc-file-picker", never, { "fileAccept": "fileAccept"; "googleDriveMimeTypes": "googleDriveMimeTypes"; "dropboxExtensions": "dropboxExtensions"; "oneDriveExtensions": "oneDriveExtensions"; "multiSelect": "multiSelect"; "mode": "mode"; "imageOnly": "imageOnly"; }, { "picked": "picked"; }, never, never, false>;
}
