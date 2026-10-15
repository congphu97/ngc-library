import {
	Component, Input, OnChanges,
	SimpleChanges, ViewEncapsulation, ViewChild,
	HostBinding, ChangeDetectionStrategy
} from '@angular/core';
import { isObservable } from 'rxjs';
import _ from 'lodash';

import { DefaultValue, Unsubscriber } from '@core';


import { CONSTANT as APP_CONSTANT } from '@resources';

import { NgcSearchBoxComponent } from '../../ngc-search-box';

import { NgcIMember, NgcMember } from '../ngc-member/ngc-member';
import { NgcMemberBase } from '../ngc-member-base';
import { NgcToastService } from '@app/@ngc/ngc-toast/public-api';

export type NgcIMemberPickerMode = 'default' | 'inline';

@Unsubscriber()
@Component({
	selector		: 'ngc-member-picker',
	templateUrl		: './ngc-member-picker.html',
	styleUrls		: [ './ngc-member-picker.scss', '../styles/ngc-member-common.scss' ],
	host			: { class: 'ngc-member-picker' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcMemberPickerComponent extends NgcMemberBase implements OnChanges {

	@HostBinding( 'style.width' ) get styleWidth(): string { return this.availableStatus?.length < 2 ? '290px' : '360px'; };

	@ViewChild( NgcSearchBoxComponent ) public searchBox: NgcSearchBoxComponent;

	@Input() @DefaultValue() public mode: NgcIMemberPickerMode = 'default';

	public readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS = NgcMember.MEMBER_STATUS;

	public filteredMembers: NgcIMember[];
	public close: ( event?: Event ) => void;
	public onMembersAdded: ( members: NgcIMember[] ) => void;
	public onMembersRemoved: ( members: NgcIMember[] ) => void;
	public onViewProfile: ( member: NgcIMember ) => void;
	public onDone: ( selectedMembers: NgcIMember[], selected: number[] ) => void;

	get useVirtualScroll(): boolean {
		return this.filteredMembers?.length >= APP_CONSTANT.USE_VIRTUAL_SCROLL_WITH;
	}

	/**
	 * @constructor
	 * @param {NgcToastService} ngcToastService
	 */
	constructor( protected ngcToastService: NgcToastService ) {
		super( ngcToastService );
	}

	/**
	 * @constructor
	 */
	ngOnChanges( changes: SimpleChanges ) {
		changes.includesStatus && this.markAsIncludesStatusChanges();
		changes.members && this.markAsMembersChanges();
		changes.selectedMembers && this.markAsSelectedMembersChanges();
		changes.selected && this.markAsSelectedChanges();

		console.log({changes})
	}

	/**
	 * @param {NgcIMember} member
	 * @return {void}
	 */
	public addMember( member: NgcIMember ) {
		this.isChanged = true;
		this.selected = _.union( this.selected, [ member.id ] );

		if ( !_.find( this.selectedMembers, { id: member.id } ) ) this.selectedMembers = _.arrayInsert( this.selectedMembers, member );

		this.selectedMembersChange.emit( this.selectedMembers );
		this.selectedChange.emit( this.selected );
	}

	/**
	 * @param {NgcIMember} member
	 * @return {void}
	 */
	public removeMember( member: NgcIMember ) {
		this.isChanged = true;
		this.selected = _.without( this.selected, member.id );
		this.selectedMembers = _.without( this.selectedMembers, member );

		this.selectedMembersChange.emit( this.selectedMembers );
		this.selectedChange.emit( this.selected );
	}

	/**
	 * @param {NgcIMember[]} members
	 * @return {void}
	 */
	public addMembers( members: NgcIMember[] ) {
		this.isChanged = true;

		_.forEach( members, ( member: NgcIMember ) => this.addMember( member ) );

		this.added.emit( members );

		_.isFunction( this.onMembersAdded ) && this.onMembersAdded( members );

		this.selectedMembersChange.emit( this.selectedMembers );
		this.selectedChange.emit( this.selected );
	}

	/**
	 * @param {NgcIMember[]} members
	 * @return {void}
	 */
	public removeMembers( members: NgcIMember[] ) {
		this.isChanged = true;

		_.forEach( members, ( member: NgcIMember ) => this.removeMember( member ) );

		this.removed.emit( members );

		_.isFunction( this.onMembersRemoved ) && this.onMembersRemoved( members );

		this.selectedMembersChange.emit( this.selectedMembers );
		this.selectedChange.emit( this.selected );
	}

	/**
	 * @return {void}
	 */
	public selectAllMembers() {
		this.addMembers( this.filteredMembers );
	}

	/**
	 * @return {void}
	 */
	public deselectAllMembers() {
		this.removeMembers( this.filteredMembers );
	}

	/**
	 * @param {NgcIMember} member
	 * @return {void}
	 */
	public toggleMember( member: NgcIMember ) {
		_.includes( this.selected, member.id )
			? this.removeMember( member )
			: this.addMember( member );
	}

	/**
	 * @param {NgcIMember} member
	 * @return {void}
	 */
	public viewProfile( member: NgcIMember ) {
		super.viewProfile( member );

		_.isFunction( this.onViewProfile ) && this.onViewProfile( member );
	}

	/**
	 * @return {void}
	 */
	public markAsDone() {
		this.done();
	}

	/**
	 * @return {void}
	 */
	public markAsMembersChanges() {
		isObservable( this.members ) ? this.loadPeople( this.members ) : this.setMembers( this.members );
	}

	/**
	 * @return {void}
	 */
	public markAsSelectedChanges() {
		if ( !this.selected ) return;

		this.initSelectedMembers();

		this.bkSelected = _.clone( this.selected );
	}

	/**
	 * @return {void}
	 */
	public markAsSelectedMembersChanges() {
		this.selectedMembers && this.initSelectedMembers();
	}

	/**
	 * @return {void}
	 */
	public markAsIncludesStatusChanges() {
		this.includesStatus && _.uniq( this.availableStatus.push( ...this.includesStatus ) );
	}

	/**
	 * @return {void}
	 */
	protected done() {
		if ( !this.isChanged ) return;

		_.isFunction( this.onDone ) && this.onDone( this.selectedMembers, this.selected );

		super.done();
	}

}
