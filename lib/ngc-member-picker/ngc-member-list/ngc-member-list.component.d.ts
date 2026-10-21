import { OnChanges, SimpleChanges, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NgcMemberBase } from '../ngc-member-base';
import { NgcIMember } from '../ngc-member/ngc-member';
import { NgcToastService } from '@app/@ngc/ngc-toast/public-api';
import { NgcConfirmService } from '@app/@ngc/ngc-confirm';
import * as i0 from "@angular/core";
export declare class NgcMemberListComponent extends NgcMemberBase implements OnChanges {
    elementRef: ElementRef;
    cdRef: ChangeDetectorRef;
    protected ngcToastService: NgcToastService;
    private _ngcConfirmService;
    get classActive(): boolean;
    limit: number;
    toggleAddButton: boolean;
    isAutoOpen: boolean;
    readonly: boolean;
    isOpened: boolean;
    filteredSelectedMembers: NgcIMember[];
    private _removedMembers;
    get useVirtualScroll(): boolean;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {NgcToastService} ngcToastService
     * @param {ChangeDetectorRef} cdRef
     * @param {NgcConfirmService} _ngcConfirmService
     */
    constructor(elementRef: ElementRef, cdRef: ChangeDetectorRef, ngcToastService: NgcToastService, _ngcConfirmService: NgcConfirmService);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     * @return {void}
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @return {void}
     */
    onMoreMenuOpened(): void;
    /**
     * @return {void}
     */
    onMoreMenuClosed(): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onPickerMenuOpened(event: Event): void;
    /**
     * @param {Event} event
     * @return {void}
     */
    onPickerMenuClosed(event: Event): void;
    /**
     * @return {void}
     */
    removeAllMembers(): void;
    /**
     * @param {NgcIMember} member
     * @param {boolean=} isDirect
     * @return {void}
     */
    removeMember(member: NgcIMember, isDirect?: boolean): void;
    /**
     * @param {NgcIMemberStatus} status
     * @return {number[]}
     */
    private _getSelected;
    /**
     * @param {NgcIMemberStatus} status
     * @return {void}
     */
    private _deleteMembers;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMemberListComponent, "ngc-member-list", never, { "limit": "limit"; "toggleAddButton": "toggleAddButton"; "isAutoOpen": "isAutoOpen"; "readonly": "readonly"; }, {}, never, never, false>;
}
