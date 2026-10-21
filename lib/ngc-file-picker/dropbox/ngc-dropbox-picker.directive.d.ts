import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface NgcIDropboxFile {
    bytes: number;
    icon: string;
    id: string;
    isDir: boolean;
    link: string;
    linkType: string;
    name: string;
    thumbnailLink: string;
}
export declare class NgcDropboxPickerDirective {
    extensions: string[];
    linkType: string;
    sizeLimit: number;
    folderSelect: boolean;
    multiSelect: boolean;
    disabled: boolean;
    picked: EventEmitter<NgcIDropboxFile[]>;
    cancelled: EventEmitter<void>;
    triggerClick(event: Event): void;
    /**
     * @return {void}
     */
    private _loadPicker;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDropboxPickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcDropboxPickerDirective, "[ngcDropboxPicker]", ["ngcDropboxPicker"], { "extensions": "extensions"; "linkType": "linkType"; "sizeLimit": "sizeLimit"; "folderSelect": "folderSelect"; "multiSelect": "multiSelect"; "disabled": "disabled"; }, { "picked": "picked"; "cancelled": "cancelled"; }, never, never, false>;
}
