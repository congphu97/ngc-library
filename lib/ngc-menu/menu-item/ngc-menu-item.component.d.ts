import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NgcMenuItemIconDirective } from '../menu-item-icon/ngc-menu-item-icon.directive';
import * as i0 from "@angular/core";
export declare class NgcMenuItemComponent implements OnChanges {
    elementRef: ElementRef;
    get styleColor(): string;
    get classDisabled(): boolean;
    get classActive(): boolean;
    get classFocusing(): boolean;
    menuItemIcon: NgcMenuItemIconDirective;
    icon: string;
    color: string;
    iconColor: string;
    dotColor: string;
    autoClose: boolean;
    active: boolean;
    disabled: boolean;
    focusing: boolean;
    activeChange: EventEmitter<boolean>;
    clickEventEmitter: EventEmitter<Event>;
    focusEventEmitter: EventEmitter<Event>;
    blurEventEmitter: EventEmitter<Event>;
    clicked$: Subject<Event>;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     */
    constructor(elementRef: ElementRef);
    triggerClick(event: Event): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    click(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    focus(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    blur(event?: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuItemComponent, "button[ngcMenuItem]", never, { "icon": "icon"; "color": "color"; "iconColor": "iconColor"; "dotColor": "dotColor"; "autoClose": "autoClose"; "active": "active"; "disabled": "disabled"; "focusing": "focusing"; }, { "activeChange": "activeChange"; "clickEventEmitter": "click"; "focusEventEmitter": "focus"; "blurEventEmitter": "blur"; }, ["menuItemIcon"], ["[ngcMenuItemPrefix]", "[ngcMenuItemIcon]", "*", "[ngcMenuItemSuffix]"], false>;
}
