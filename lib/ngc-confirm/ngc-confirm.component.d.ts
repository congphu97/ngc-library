import { IObject } from '@core';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare type NgcIConfirmType = 'dialog' | 'popup';
export interface NgcIConfirm {
    message: string;
    title?: string;
    config?: NgcIConfirmConfig;
}
export interface NgcIConfirmConfig {
    data?: any;
    buttonApply?: string;
    buttonDiscard?: string;
    warning?: boolean;
    warningMessage?: string;
    translate?: boolean;
    translateParams?: IObject;
    autoClose?: boolean;
    hasBackdrop?: boolean;
    backdropClass?: string;
    panelClass?: string;
    type?: NgcIConfirmType;
    viewContainerRef?: ViewContainerRef;
}
export declare class NgcConfirmComponent {
    get classDialogContainer(): boolean;
    message: string | TemplateRef<any>;
    title: string;
    close: (answer?: boolean) => void;
    config: NgcIConfirmConfig;
    get isMessageString(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcConfirmComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcConfirmComponent, "ngc-confirm", never, {}, {}, never, never, false>;
}
