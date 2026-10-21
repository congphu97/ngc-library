import { ElementRef, TemplateRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcGridItemComponent {
    elementRef: ElementRef;
    templateRef: TemplateRef<any>;
    id: number;
    classes: string;
    ngClass: string;
    active: boolean;
    disabled: boolean;
    focusing: boolean;
    hovering: boolean;
    dragging: boolean;
    draggable: boolean;
    highlight: boolean;
    autoUnhighlight: boolean;
    highlightChange: EventEmitter<boolean>;
    clickEventEmitter: EventEmitter<Event>;
    focusEventEmitter: EventEmitter<Event>;
    blurEventEmitter: EventEmitter<Event>;
    isForceAutoUnhighlight: boolean;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef: ElementRef);
    /**
     * @param {boolean=} isForceAutoUnhighlight
     * @return {void}
     */
    setHighlight(isForceAutoUnhighlight?: boolean): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    click(event?: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    focus(event?: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    blur(event?: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcGridItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcGridItemComponent, "ngc-grid-item", never, { "id": "id"; "classes": "class"; "ngClass": "ngClass"; "active": "active"; "disabled": "disabled"; "focusing": "focusing"; "hovering": "hovering"; "dragging": "dragging"; "draggable": "draggable"; "highlight": "highlight"; "autoUnhighlight": "autoUnhighlight"; }, { "highlightChange": "highlightChange"; "clickEventEmitter": "click"; "focusEventEmitter": "focus"; "blurEventEmitter": "blur"; }, never, ["*"], false>;
}
