import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ContrastPipe, IObject } from '@core';
import * as i0 from "@angular/core";
export declare type NgcIToastType = 'default' | 'info' | 'success' | 'warning' | 'danger';
export declare type NgcIToastPosition = 'bottom' | 'top' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface NgcIToastConfig {
    icon?: string;
    color?: string;
    textColor?: string;
    duration?: number;
    canClose?: boolean;
    translate?: boolean;
    type?: NgcIToastType;
    position?: NgcIToastPosition;
    translateParams?: IObject;
    buttons?: NgcIToastButton[];
}
export interface NgcIToastButton {
    label: string;
    onClicked: () => void;
}
export declare class NgcToastComponent implements OnChanges {
    private _contrastPipe;
    get styleColor(): string;
    get styleTextColor(): string;
    get classInfo(): boolean;
    get classSuccess(): boolean;
    get classWarning(): boolean;
    get classDanger(): boolean;
    get classHasDescription(): boolean;
    title: string;
    description: string;
    icon: string;
    color: string;
    textColor: string;
    buttons: NgcIToastButton[];
    canClose: boolean;
    translate: boolean;
    translateParams: IObject;
    type: NgcIToastType;
    closed: EventEmitter<MouseEvent>;
    private _icons;
    private _bkTextColor;
    get iconName(): string;
    /**
     * @constructor
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_contrastPipe: ContrastPipe);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcToastComponent, "ngc-toast", never, { "title": "title"; "description": "description"; "icon": "icon"; "color": "color"; "textColor": "textColor"; "buttons": "buttons"; "canClose": "canClose"; "translate": "translate"; "translateParams": "translateParams"; "type": "type"; }, { "closed": "closed"; }, never, never, false>;
}
