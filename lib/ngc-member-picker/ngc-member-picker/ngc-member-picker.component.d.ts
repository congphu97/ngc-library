import { OnChanges, SimpleChanges } from '@angular/core';
import { NgcSearchBoxComponent } from '../../ngc-search-box';
import { NgcIMember, NgcMember } from '../ngc-member/ngc-member';
import { NgcMemberBase } from '../ngc-member-base';
import { NgcToastService } from '@app/@ngc/ngc-toast/public-api';
import * as i0 from "@angular/core";
export declare type NgcIMemberPickerMode = 'default' | 'inline';
export declare class NgcMemberPickerComponent extends NgcMemberBase implements OnChanges {
    protected ngcToastService: NgcToastService;
    get styleWidth(): string;
    searchBox: NgcSearchBoxComponent;
    mode: NgcIMemberPickerMode;
    readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS;
    filteredMembers: NgcIMember[];
    close: (event?: Event) => void;
    onMembersAdded: (members: NgcIMember[]) => void;
    onMembersRemoved: (members: NgcIMember[]) => void;
    onViewProfile: (member: NgcIMember) => void;
    onDone: (selectedMembers: NgcIMember[], selected: number[]) => void;
    get useVirtualScroll(): boolean;
    /**
     * @constructor
     * @param {NgcToastService} ngcToastService
     */
    constructor(ngcToastService: NgcToastService);
    /**
     * @constructor
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    addMember(member: NgcIMember): void;
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    removeMember(member: NgcIMember): void;
    /**
     * @param {NgcIMember[]} members
     * @return {void}
     */
    addMembers(members: NgcIMember[]): void;
    /**
     * @param {NgcIMember[]} members
     * @return {void}
     */
    removeMembers(members: NgcIMember[]): void;
    /**
     * @return {void}
     */
    selectAllMembers(): void;
    /**
     * @return {void}
     */
    deselectAllMembers(): void;
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    toggleMember(member: NgcIMember): void;
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    viewProfile(member: NgcIMember): void;
    /**
     * @return {void}
     */
    markAsDone(): void;
    /**
     * @return {void}
     */
    markAsMembersChanges(): void;
    /**
     * @return {void}
     */
    markAsSelectedChanges(): void;
    /**
     * @return {void}
     */
    markAsSelectedMembersChanges(): void;
    /**
     * @return {void}
     */
    markAsIncludesStatusChanges(): void;
    /**
     * @return {void}
     */
    protected done(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMemberPickerComponent, "ngc-member-picker", never, { "mode": "mode"; }, {}, never, never, false>;
}
