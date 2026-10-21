import { ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgcMenuButtonCloseDirective {
    elementRef: ElementRef;
    disabled: boolean;
    clicked$: Subject<Event>;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef: ElementRef);
    triggerClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuButtonCloseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuButtonCloseDirective, "[ngcMenuButtonClose]", ["ngcMenuButtonClose"], { "disabled": "disabled"; }, {}, never, never, false>;
}
