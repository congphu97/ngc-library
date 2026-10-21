import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { NgcSearchBoxComponent } from '../../ngc-search-box';
import { NgcMember, NgcIMember, NgcIMemberStatus } from './ngc-member';
import * as i0 from "@angular/core";
export declare class NgcMemberComponent {
    hasViewProfile: boolean;
    displayMemberName: boolean;
    canViewProfile: boolean;
    size: string;
    scrolling$: Subject<any>;
    member: NgcIMember;
    searchBox: NgcSearchBoxComponent;
    viewDetail: EventEmitter<NgcIMember>;
    readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS;
    /**
     * @param {NgcIMemberStatus} status
     * @return {string}
     */
    static parseStatusIcon(status: NgcIMemberStatus): string;
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    viewProfile(member: NgcIMember): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMemberComponent, "ngc-member", never, { "hasViewProfile": "hasViewProfile"; "displayMemberName": "displayMemberName"; "canViewProfile": "canViewProfile"; "size": "size"; "scrolling$": "scrolling$"; "member": "member"; "searchBox": "searchBox"; }, { "viewDetail": "viewDetail"; }, never, never, false>;
}
