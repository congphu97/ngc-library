import { TemplateRef, ElementRef, QueryList, ChangeDetectorRef, EventEmitter, NgZone } from '@angular/core';
import { DetectScrollDirective, IObject } from '@core';
import { NgcScrollBarDirective, INgcScrollBarMode } from '../../ngc-scroll-bar';
import { NgcMenuButtonCloseDirective } from '../menu-button-close/ngc-menu-button-close.directive';
import { NgcMenuItemComponent } from '../menu-item/ngc-menu-item.component';
import { NgcMenuHeaderComponent } from '../menu-header/ngc-menu-header.component';
import { NgcMenuContentComponent } from '../menu-content/ngc-menu-content.component';
import { NgcMenuFooterComponent } from '../menu-footer/ngc-menu-footer.component';
import * as i0 from "@angular/core";
export declare type NgcIMenuPosition = 'above' | 'below' | 'before' | 'after';
export declare type NgcIMenuDirection = 'start' | 'end' | 'center';
export declare class NgcMenuComponent {
    elementRef: ElementRef;
    private _cdRef;
    private _ngZone;
    templateRef: TemplateRef<any>;
    set _scroller(scroller: DetectScrollDirective);
    set _scrollBar(scrollBar: NgcScrollBarDirective);
    menuButtonCloseList: QueryList<NgcMenuButtonCloseDirective>;
    menuItems: QueryList<NgcMenuItemComponent>;
    menuHeader: NgcMenuHeaderComponent;
    menuContent: NgcMenuContentComponent;
    menuFooter: NgcMenuFooterComponent;
    title: string;
    backdropClass: string;
    width: string;
    minWidth: string;
    maxWidth: string;
    height: string;
    minHeight: string;
    maxHeight: string;
    hasScrollBar: boolean;
    hasBackdrop: boolean;
    hasArrow: boolean;
    hasButtonClose: boolean;
    closeOnClickOutside: boolean;
    scrollBarMode: INgcScrollBarMode;
    opened: EventEmitter<Event>;
    closed: EventEmitter<Event>;
    backdropPress: EventEmitter<MouseEvent>;
    loadMore: EventEmitter<boolean>;
    scroller: DetectScrollDirective;
    scrollBar: NgcScrollBarDirective;
    isRefreshing: boolean;
    isOpened: boolean;
    isAllItemsActivated: boolean;
    data: IObject;
    classList: IObject<boolean>;
    close: (event?: Event) => void;
    reopen: () => void;
    private _previousPanelClass;
    set panelClass(classes: string);
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {NgZone} _ngZone
     */
    constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef, _ngZone: NgZone);
    /**
     * @param {IObject} data
     * @return {void}
     */
    onOpened(data: any): void;
    /**
     * @return {void}
     */
    onClosed(): void;
    /**
     * @param {NgcIMenuPosition} position
     * @param {NgcIMenuDirection} direction
     * @return {void}
     */
    setPositionClasses(position: NgcIMenuPosition, direction: NgcIMenuDirection): void;
    /**
     * @return {void}
     */
    reattach(): void;
    /**
     * @return {void}
     */
    detach(): void;
    /**
     * @return {void}
     */
    markForCheck(): void;
    /**
     * @return {void}
     */
    detectChanges(): void;
    /**
     * @param {NgcMenuItemComponent} item
     * @return {void}
     */
    scrollToElement(item: NgcMenuItemComponent): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    chooseItem(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    focusNextItem(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    focusPreviousItem(event?: Event): void;
    /**
     * @param {number} focusingIndex
     * @param {number} focusIndex
     * @param {Event=} event
     * @return {void}
     */
    private _focusItem;
    /**
     * @return {void}
     */
    private _checkAllItemsSelected;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuComponent, "ngc-menu", never, { "title": "title"; "backdropClass": "backdropClass"; "width": "width"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "height": "height"; "minHeight": "minHeight"; "maxHeight": "maxHeight"; "hasScrollBar": "hasScrollBar"; "hasBackdrop": "hasBackdrop"; "hasArrow": "hasArrow"; "hasButtonClose": "hasButtonClose"; "closeOnClickOutside": "closeOnClickOutside"; "scrollBarMode": "scrollBarMode"; "panelClass": "class"; }, { "opened": "opened"; "closed": "closed"; "backdropPress": "backdropPress"; "loadMore": "loadMore"; }, ["menuHeader", "menuContent", "menuFooter", "menuButtonCloseList", "menuItems"], never, false>;
}
