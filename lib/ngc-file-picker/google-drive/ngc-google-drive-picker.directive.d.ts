import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface NgcIGoogleDriveFile {
    description: string;
    embedUrl: string;
    iconUrl: string;
    id: string;
    isShared: boolean;
    lastEditedUtc: number;
    mimeType: string;
    name: string;
    organizationDisplayName: string;
    rotation: number;
    rotationDegree: number;
    serviceId: string;
    sizeBytes: number;
    type: string;
    url: string;
}
export declare class NgcGoogleDrivePickerDirective {
    mimeTypes: string[];
    multiSelect: boolean;
    disabled: boolean;
    picked: EventEmitter<NgcIGoogleDriveFile[]>;
    pickerApiLoaded: boolean;
    triggerClick(event: Event): void;
    /**
     * @return {void}
     */
    private _loadPicker;
    /**
     * @return {void}
     */
    private _onAuthApiLoaded;
    /**
     * @return {void}
     */
    private _onPickerApiLoaded;
    /**
     * @param {IObject} authResult
     * @return {void}
     */
    private _handleAuthResult;
    /**
     * @param {IObject} event
     * @return {void}
     */
    private _onPicked;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcGoogleDrivePickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcGoogleDrivePickerDirective, "[ngcGoogleDrivePicker]", ["ngcGoogleDrivePicker"], { "mimeTypes": "mimeTypes"; "multiSelect": "multiSelect"; "disabled": "disabled"; }, { "picked": "picked"; }, never, never, false>;
}
