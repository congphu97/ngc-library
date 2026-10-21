import { EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IObject } from '@core';
import { NgcSearchBoxComponent } from '../ngc-search-box';
import { NgcMember, NgcIMember, NgcIMemberStatus } from './ngc-member/ngc-member';
import { NgcToastService } from '../ngc-toast/public-api';
import * as i0 from "@angular/core";
export declare class NgcMemberBase {
    private _ngcToastService;
    searchBox: NgcSearchBoxComponent;
    strictDisplay: boolean;
    itemSize: number;
    canViewProfile: boolean;
    disabled: boolean;
    required: boolean;
    name: string;
    label: string;
    scrolling$: Subject<any>;
    context: IObject;
    selected: number[];
    selectedMembers: NgcIMember[];
    includesStatus: NgcIMemberStatus[];
    members: NgcIMember[] | Observable<NgcIMember[]> | Function;
    opened: EventEmitter<Event>;
    closed: EventEmitter<Event>;
    viewDetail: EventEmitter<NgcIMember>;
    added: EventEmitter<NgcIMember[]>;
    removed: EventEmitter<NgcIMember[]>;
    selectedChange: EventEmitter<number[]>;
    selectedMembersChange: EventEmitter<NgcIMember[]>;
    readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS;
    isChanged: boolean;
    selectedIndex: number;
    availableStatus: NgcIMemberStatus[];
    selectedMembersClone: NgcIMember[];
    _members: NgcIMember[];
    protected bkSelected: number[];
    get availableMembers(): NgcIMember[];
    /**
     * @constructor
     * @param {NgcToastService} _ngcToastService
     */
    constructor(_ngcToastService: NgcToastService);
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    viewProfile(member: NgcIMember): void;
    /**
     * @return {void}
     */
    protected done(): void;
    /**
     * @param {NgcIMember[] | Observable<NgcIMember[]> | Function} members
     * @return {void}
     */
    protected setMembers(members: NgcIMember[] | Observable<NgcIMember[]> | Function): void;
    /**
     * @param {Observable<NgcIMember[]>} loader
     * @return {void}
     */
    protected loadPeople(loader: Observable<NgcIMember[]>): void;
    /**
     * @return {void}
     */
    protected initSelectedMembers(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMemberBase, never, never, { "strictDisplay": "strictDisplay"; "itemSize": "itemSize"; "canViewProfile": "canViewProfile"; "disabled": "disabled"; "required": "required"; "name": "name"; "label": "label"; "scrolling$": "scrolling$"; "context": "context"; "selected": "selected"; "selectedMembers": "selectedMembers"; "includesStatus": "includesStatus"; "members": "members"; }, { "opened": "opened"; "closed": "closed"; "viewDetail": "viewDetail"; "added": "added"; "removed": "removed"; "selectedChange": "selectedChange"; "selectedMembersChange": "selectedMembersChange"; }, never, never, false>;
}
