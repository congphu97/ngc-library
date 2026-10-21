import { IObject } from '@core';
import { NgcIToastConfig } from '../toast/ngc-toast.component';
import * as i0 from "@angular/core";
export declare class NgcToastGroupComponent {
    toasts: IObject[];
    createToast(title: string, description?: string, config?: NgcIToastConfig): number;
    deleteToast(id: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcToastGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcToastGroupComponent, "ngc-toast-group", never, {}, {}, never, never, false>;
}
