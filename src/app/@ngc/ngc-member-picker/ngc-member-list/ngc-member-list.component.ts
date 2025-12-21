import {
	Component, ViewEncapsulation, Input,
	OnChanges, SimpleChanges, ChangeDetectorRef,
	ElementRef, HostBinding, ChangeDetectionStrategy
} from '@angular/core';
import { isObservable } from 'rxjs';
import _ from 'lodash';

import { CoerceBoolean, CoerceNumber, DefaultValue, Unsubscriber } from '@core';

import { CONSTANT as APP_CONSTANT } from '@resources';


import { NgcMemberBase } from '../ngc-member-base';
import { NgcIMember, NgcIMemberStatus } from '../ngc-member/ngc-member';
import { NgcToastService } from '@app/@ngc/ngc-toast/public-api';
import { NgcConfirmService } from '@app/@ngc/ngc-confirm';

@Unsubscriber()
@Component({
	selector		: 'ngc-member-list',
	templateUrl		: './ngc-member-list.html',
	styleUrls		: [ './ngc-member-list.scss', '../styles/ngc-member-common.scss' ],
	host			: { class: 'ngc-member-list' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcMemberListComponent extends NgcMemberBase implements OnChanges {

	@HostBinding( 'class.ngc-member-list--active' ) get classActive(): boolean { return this.isOpened || !this.selectedMembers?.length || !this.toggleAddButton; };

	@Input() @DefaultValue() @CoerceNumber() public limit: number = 4;
	@Input() @CoerceBoolean() public toggleAddButton: boolean;
	@Input() @CoerceBoolean() public isAutoOpen: boolean;
	@Input() @CoerceBoolean() public readonly: boolean;

	public isOpened: boolean;
	public filteredSelectedMembers: NgcIMember[];

	private _removedMembers: NgcIMember[];

	get useVirtualScroll(): boolean {
		return this.filteredSelectedMembers?.length >= APP_CONSTANT.USE_VIRTUAL_SCROLL_WITH;
	}

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 * @param {NgcToastService} ngcToastService
	 * @param {ChangeDetectorRef} cdRef
	 * @param {NgcConfirmService} _ngcConfirmService
	 */
	constructor(
		public elementRef: ElementRef,
		public cdRef: ChangeDetectorRef,
		protected ngcToastService: NgcToastService,
		private _ngcConfirmService: NgcConfirmService
	) {
		super( ngcToastService );
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 * @return {void}
	 */
	ngOnChanges( changes: SimpleChanges ) {
		console.log({changes})
		changes.includesStatus && _.uniq( this.availableStatus.push( ...changes.includesStatus.currentValue ) );
		changes.members && this.setMembers( this.members );
		( changes.selected || changes.selectedMembers ) && this.initSelectedMembers();

		if ( changes.selected ) this.bkSelected = _.clone( this.selected );
	}

	/**
	 * @return {void}
	 */
	public onMoreMenuOpened() {
		this._removedMembers = undefined;
	}

	/**
	 * @return {void}
	 */
	public onMoreMenuClosed() {
		this.selectedIndex = 0;

		if ( !this._removedMembers?.length ) return;

		this.removed.emit( this._removedMembers );
		this.done();
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public onPickerMenuOpened( event: Event ) {
		isObservable( this.members ) && this.loadPeople( this.members );

		this.isOpened = true;

		this.opened.emit( event );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public onPickerMenuClosed( event: Event ) {
		this.isOpened = false;

		this.closed.emit( event );
	}

	/**
	 * @return {void}
	 */
	public removeAllMembers() {
		this._ngcConfirmService
		.open( 'Ngc.MESSAGE.REMOVE_ALL_MEMBERS_CONFIRM' )
		.afterClosed()
		.subscribe( ( answer: boolean ) => {
			if ( !answer ) return;

			this.isChanged = true;

			switch ( this.selectedIndex ) {
				case 0:
					this._deleteMembers( this.MEMBER_STATUS.ACTIVE );
					break;
				case 1:
					this._deleteMembers( this.MEMBER_STATUS.INACTIVE );
					break;
				case 2:
					this._deleteMembers( this.MEMBER_STATUS.PENDING );
					break;
			}

			this.cdRef.detectChanges();
		} );
	}

	/**
	 * @param {NgcIMember} member
	 * @param {boolean=} isDirect
	 * @return {void}
	 */
	public removeMember( member: NgcIMember, isDirect?: boolean ) {
		this.isChanged = true;
		this.selected = _.without( this.selected, member.id );
		this.filteredSelectedMembers = _.without( this.filteredSelectedMembers, member );
		this._removedMembers = _.arrayInsert( this._removedMembers, member );

		_.remove( this.selectedMembersClone, member );

		if ( !isDirect ) return;

		this.removed.emit([ member ]);
		this.done();
	}

	/**
	 * @param {NgcIMemberStatus} status
	 * @return {number[]}
	 */
	private _getSelected( status: NgcIMemberStatus ): number[] {
		const valueLookup: IObject<NgcIMember> = _.chain( this.selectedMembers )
		.filter({ status })
		.keyBy( 'id' )
		.value();

		return _.filter( this.selected, ( id: number ) => !_.has( valueLookup, id ) );
	}

	/**
	 * @param {NgcIMemberStatus} status
	 * @return {void}
	 */
	private _deleteMembers( status: NgcIMemberStatus ) {
		this.selectedMembersClone = _.filter( this.selectedMembersClone, ( member: NgcIMember ) => member.status !== status );
		this.selected = this._getSelected( status );
		this._removedMembers = _.unionBy( this._removedMembers, _.filter( this.selectedMembers, { status } ) );
	}

}
