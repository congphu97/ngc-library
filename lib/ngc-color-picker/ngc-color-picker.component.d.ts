import { EventEmitter } from '@angular/core';
import { IObject } from '@core';
import * as i0 from "@angular/core";
export declare type NgcIColorPickerMode = 'default' | 'inline';
export declare type NgcIColorPickerPosition = 'above' | 'below';
export declare type NgcIColorPickerEmptyMode = 'color' | 'background';
export declare class NgcColorPickerComponent {
    get classInline(): boolean;
    pickedColor: string;
    mode: NgcIColorPickerMode;
    emptyMode: NgcIColorPickerEmptyMode;
    picked: EventEmitter<string>;
    pickedColorChange: EventEmitter<string>;
    close: (event?: Event) => void;
    onPicked: (color: string) => void;
    selectedTabIndex: number;
    isPickOther: boolean;
    pickedColorObj: IObject;
    colors: string[];
    get colorCode(): string;
    /**
     * @param {string} color
     * @return {void}
     */
    pick(color: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcColorPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcColorPickerComponent, "ngc-color-picker", never, { "pickedColor": "pickedColor"; "mode": "mode"; "emptyMode": "emptyMode"; }, { "picked": "picked"; "pickedColorChange": "pickedColorChange"; }, never, never, false>;
}
