import { OnDestroy, OnChanges, EventEmitter, ElementRef, ViewContainerRef, SimpleChanges } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { Overlay, HorizontalConnectionPos, VerticalConnectionPos, PositionStrategy } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';
import { IObject } from '@core';
import { NgcIMember, NgcIMemberStatus } from '../ngc-member/ngc-member';
import * as i0 from "@angular/core";
export declare type NgcIMemberPickerPosition = 'above' | 'below';
export declare class NgcMemberPickerDirective implements OnDestroy, OnChanges {
    private _overlay;
    private _elementRef;
    private _vcRef;
    panelClass: string | string[];
    backdropClass: string | string[];
    hasBackdrop: boolean;
    closeOnClickOutside: boolean;
    strictDisplay: boolean;
    offsetX: number;
    offsetY: number;
    itemSize: number;
    width: string;
    minWidth: string;
    maxWidth: string;
    height: string;
    minHeight: string;
    maxHeight: string;
    position: NgcIMemberPickerPosition;
    direction: Direction;
    isAutoOpen: boolean;
    canViewProfile: boolean;
    required: boolean;
    disabled: boolean;
    name: string;
    label: string;
    scrolling$: Subject<any>;
    context: IObject;
    selected: number[];
    selectedMembers: NgcIMember[];
    includesStatus: NgcIMemberStatus[];
    members: NgcIMember[] | Observable<NgcIMember[]> | Function;
    originX: HorizontalConnectionPos;
    originY: VerticalConnectionPos;
    overlayX: HorizontalConnectionPos;
    overlayY: VerticalConnectionPos;
    opened: EventEmitter<Event>;
    closed: EventEmitter<Event>;
    added: EventEmitter<NgcIMember[]>;
    removed: EventEmitter<NgcIMember[]>;
    viewDetail: EventEmitter<NgcIMember>;
    selectedChange: EventEmitter<number[]>;
    selectedMembersChange: EventEmitter<NgcIMember[]>;
    backdropPress: EventEmitter<MouseEvent>;
    isOpened: boolean;
    private _isPositionStrategyUpdated;
    private _portal;
    private _overlayRef;
    private _resizeObserver;
    private _instance;
    /**
     * @constructor
     * @param {Overlay} _overlay
     * @param {ElementRef} _elementRef
     * @param {ViewContainerRef} _vcRef
     */
    constructor(_overlay: Overlay, _elementRef: ElementRef, _vcRef: ViewContainerRef);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes: SimpleChanges): void;
    triggerClick(event: Event): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @param {NgcIMember[]} members
     * @return {void}
     */
    onMembersAdded(members: NgcIMember[]): void;
    /**
     * @param {NgcIMember[]} members
     * @return {void}
     */
    onMembersRemoved(members: NgcIMember[]): void;
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    onViewProfile(member: NgcIMember): void;
    /**
     * @param {NgcIMember[]} selectedMembers
     * @param {number[]} selected
     * @return {void}
     */
    onDone(selectedMembers: NgcIMember[], selected: number[]): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    open(event?: Event): void;
    /**
     * @param {Event=} event
     * @return {void}
     */
    close(event?: Event): void;
    /**
     * @param {PositionStrategy=} positionStrategy
     * @return {void}
     */
    updatePosition(positionStrategy?: PositionStrategy): void;
    /**
     * @return {OverlayRef}
     */
    private _createOverlayRef;
    /**
     * @return {FlexibleConnectedPositionStrategy}
     */
    private _createPositionStrategy;
    /**
     * @param {HorizontalConnectionPos} origin
     * @return {HorizontalConnectionPos}
     */
    private _fallbackX;
    /**
     * @param {VerticalConnectionPos} origin
     * @return {VerticalConnectionPos}
     */
    private _fallbackY;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberPickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMemberPickerDirective, "[ngcMemberPicker]", ["ngcMemberPicker"], { "panelClass": "panelClass"; "backdropClass": "backdropClass"; "hasBackdrop": "hasBackdrop"; "closeOnClickOutside": "closeOnClickOutside"; "strictDisplay": "strictDisplay"; "offsetX": "offsetX"; "offsetY": "offsetY"; "itemSize": "itemSize"; "width": "width"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; "height": "height"; "minHeight": "minHeight"; "maxHeight": "maxHeight"; "position": "position"; "direction": "direction"; "isAutoOpen": "isAutoOpen"; "canViewProfile": "canViewProfile"; "required": "required"; "disabled": "disabled"; "name": "name"; "label": "label"; "scrolling$": "scrolling$"; "context": "context"; "selected": "selected"; "selectedMembers": "selectedMembers"; "includesStatus": "includesStatus"; "members": "members"; "originX": "originX"; "originY": "originY"; "overlayX": "overlayX"; "overlayY": "overlayY"; }, { "opened": "opened"; "closed": "closed"; "added": "added"; "removed": "removed"; "viewDetail": "viewDetail"; "selectedChange": "selectedChange"; "selectedMembersChange": "selectedMembersChange"; "backdropPress": "backdropPress"; }, never, never, false>;
}
