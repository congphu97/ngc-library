import { ElementRef, TemplateRef, EventEmitter, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgcListItemComponent implements OnChanges {
    elementRef: ElementRef;
    templateRef: TemplateRef<any>;
    id: number;
    order: number;
    label: string;
    description: string;
    icon: string;
    dotColor: string;
    classes: string;
    ngClass: string;
    active: boolean;
    disabled: boolean;
    readonly: boolean;
    focusing: boolean;
    hovering: boolean;
    dragging: boolean;
    draggable: boolean;
    highlight: boolean;
    autoUnhighlight: boolean;
    truncate: boolean;
    truncateLimitLine: number;
    saved: EventEmitter<string>;
    cancelled: EventEmitter<string>;
    editing: EventEmitter<boolean>;
    labelChange: EventEmitter<string>;
    dotColorChange: EventEmitter<string>;
    highlightChange: EventEmitter<boolean>;
    clickEventEmitter: EventEmitter<MouseEvent>;
    focusEventEmitter: EventEmitter<MouseEvent>;
    blurEventEmitter: EventEmitter<MouseEvent>;
    isEditing: boolean;
    isForceAutoUnhighlight: boolean;
    changes$: Subject<void>;
    editingSubject$: Subject<void>;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef: ElementRef);
    /**
     * @constructor
     */
    ngOnChanges(): void;
    /**
     * @param {boolean=} isForceAutoUnhighlight
     * @return {void}
     */
    setHighlight(isForceAutoUnhighlight?: boolean): void;
    /**
     * @return {void}
     */
    edit(): void;
    /**
     * @param {string} label
     * @return {void}
     */
    save(label: string): void;
    /**
     * @param {string} label
     * @return {void}
     */
    cancel(label?: string): void;
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    click(event?: MouseEvent): void;
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    focus(event?: MouseEvent): void;
    /**
     * @param {MouseEvent} event
     * @return {void}
     */
    blur(event?: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcListItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcListItemComponent, "ngc-list-item", never, { "id": "id"; "order": "order"; "label": "label"; "description": "description"; "icon": "icon"; "dotColor": "dotColor"; "classes": "class"; "ngClass": "ngClass"; "active": "active"; "disabled": "disabled"; "readonly": "readonly"; "focusing": "focusing"; "hovering": "hovering"; "dragging": "dragging"; "draggable": "draggable"; "highlight": "highlight"; "autoUnhighlight": "autoUnhighlight"; "truncate": "truncate"; "truncateLimitLine": "truncateLimitLine"; }, { "saved": "saved"; "cancelled": "cancelled"; "editing": "editing"; "labelChange": "labelChange"; "dotColorChange": "dotColorChange"; "highlightChange": "highlightChange"; "clickEventEmitter": "click"; "focusEventEmitter": "focus"; "blurEventEmitter": "blur"; }, never, ["*"], false>;
}
