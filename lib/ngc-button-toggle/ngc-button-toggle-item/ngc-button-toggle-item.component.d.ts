import { ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgcButtonToggleItemComponent {
    elementRef: ElementRef;
    get classActive(): boolean;
    get classDisabled(): boolean;
    get classOnlyIcon(): boolean;
    icon: string;
    iconSize: string;
    label: string;
    activeState: boolean;
    disabled: boolean;
    onlyIcon: boolean;
    clicked$: Subject<Event>;
    isActive: boolean;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef: ElementRef);
    triggerClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonToggleItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcButtonToggleItemComponent, "ngc-button-toggle-item", never, { "icon": "icon"; "iconSize": "iconSize"; "label": "label"; "activeState": "activeState"; "disabled": "disabled"; "onlyIcon": "onlyIcon"; }, {}, never, ["*"], false>;
}
