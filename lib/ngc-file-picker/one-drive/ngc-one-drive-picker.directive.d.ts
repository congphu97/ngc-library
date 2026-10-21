import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface NgcIOneDriveFile {
    '@microsoft.graph.downloadUrl': string;
    '@odata.context': string;
    id: string;
    name: string;
    size: number;
}
export declare class NgcOneDrivePickerDirective {
    extensions: string[];
    action: string;
    multiSelect: boolean;
    disabled: boolean;
    picked: EventEmitter<NgcIOneDriveFile[]>;
    cancelled: EventEmitter<void>;
    error: EventEmitter<unknown>;
    triggerClick(event: Event): void;
    /**
     * @return {void}
     */
    private _loadPicker;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcOneDrivePickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcOneDrivePickerDirective, "[ngcOneDrivePicker]", ["ngcOneDrivePicker"], { "extensions": "extensions"; "action": "action"; "multiSelect": "multiSelect"; "disabled": "disabled"; }, { "picked": "picked"; "cancelled": "cancelled"; "error": "error"; }, never, never, false>;
}
