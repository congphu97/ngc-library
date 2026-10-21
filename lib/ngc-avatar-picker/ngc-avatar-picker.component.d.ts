import { EventEmitter, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NgcIUploadedFile, NgcIFileService } from '../ngc-file-picker';
import { NgcIAvatar, NgcIAvatarMode } from '../ngc-avatar';
import { NgcCropperComponent, NgcICroppedEvent } from '../ngc-cropper';
import { NgcDialogService, NgcIDialogRef } from '../ngc-dialog';
import { NgcToastService } from '../ngc-toast/public-api';
import * as i0 from "@angular/core";
export interface NgcIAvatarPickedEvent {
    text?: string;
    avatar?: NgcIAvatar;
    file?: Blob;
    response?: NgcIUploadedFile;
}
export declare class NgcAvatarPickerComponent {
    private _fileService;
    private _ngcDialogService;
    private _ngcToastService;
    label: string;
    text: string;
    photo: string;
    color: string;
    icon: string;
    mode: NgcIAvatarMode;
    scrolling$: Subject<any>;
    picked: EventEmitter<NgcIAvatarPickedEvent>;
    isCropping: boolean;
    croppedImage: string;
    defaultIcon: string;
    selectedFile: Blob;
    cropper: NgcCropperComponent;
    dialogRef: NgcIDialogRef;
    /**
     * @constructor
     * @param {NgcIFileService} _fileService
     * @param {NgcDialogService} _ngcDialogService
     * @param {NgcToastService} _ngcToastService
     */
    constructor(_fileService: NgcIFileService, _ngcDialogService: NgcDialogService, _ngcToastService: NgcToastService);
    /**
     * @return {void}
     */
    refresh(): void;
    /**
     * @return {void}
     */
    pick(): void;
    /**
     * @return {void}
     */
    cropImage(): void;
    /**
     * @return {void}
     */
    pickImage(): void;
    /**
     * @param {TemplateRef} dialog
     * @return {void}
     */
    openDialog(dialog: TemplateRef<any>): void;
    /**
     * @param {Blob} file
     * @return {void}
     */
    onFileSelected(file: Blob): void;
    /**
     * @param {NgcICroppedEvent} event
     * @return {void}
     */
    onCropped(event: NgcICroppedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcAvatarPickerComponent, [{ optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcAvatarPickerComponent, "ngc-avatar-picker", never, { "label": "label"; "text": "text"; "photo": "photo"; "color": "color"; "icon": "icon"; "mode": "mode"; "scrolling$": "scrolling$"; }, { "picked": "picked"; }, never, never, false>;
}
