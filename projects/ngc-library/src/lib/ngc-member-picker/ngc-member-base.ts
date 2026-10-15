import {
	ViewChild, Input, Output,
	EventEmitter, Directive
} from '@angular/core';
import { Subject, Observable, isObservable } from 'rxjs';
import _ from 'lodash';

import { CoerceBoolean, CoerceNumber, DefaultValue, untilCmpDestroyed , IObject } from '@core';

import { NgcSearchBoxComponent } from '../ngc-search-box';
import { NgcMember, NgcIMember, NgcIMemberStatus } from './ngc-member/ngc-member';
import { NgcToastService } from '../ngc-toast/public-api';

@Directive()
export class NgcMemberBase {

	@ViewChild( NgcSearchBoxComponent ) public searchBox: NgcSearchBoxComponent;

	@Input() @DefaultValue() @CoerceBoolean() public strictDisplay: boolean = true;
	@Input() @DefaultValue() @CoerceNumber() public itemSize: number = 44;
	@Input() @CoerceBoolean() public canViewProfile: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public required: boolean;
	@Input() public name: string;
	@Input() public label: string;
	@Input() public scrolling$: Subject<any>;
	@Input() public context: IObject;
	@Input() public selected: number[];
	@Input() public selectedMembers: NgcIMember[];
	@Input() public includesStatus: NgcIMemberStatus[];
	@Input() public members: NgcIMember[] | Observable<NgcIMember[]> | Function;

	@Output() public opened: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public closed: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public viewDetail: EventEmitter<NgcIMember> = new EventEmitter<NgcIMember>();
	@Output() public added: EventEmitter<NgcIMember[]> = new EventEmitter<NgcIMember[]>();
	@Output() public removed: EventEmitter<NgcIMember[]> = new EventEmitter<NgcIMember[]>();
	@Output() public selectedChange: EventEmitter<number[]> = new EventEmitter<number[]>();
	@Output() public selectedMembersChange: EventEmitter<NgcIMember[]> = new EventEmitter<NgcIMember[]>();

	public readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS = NgcMember.MEMBER_STATUS;

	public isChanged: boolean;
	public selectedIndex: number = 0;
	public availableStatus: NgcIMemberStatus[] = [ 1 ];
	public selectedMembersClone: NgcIMember[];
	public _members: NgcIMember[];

	protected bkSelected: number[];

	get availableMembers(): NgcIMember[] {
		return !this.strictDisplay
			? _.unionBy( this._members, this.selectedMembers, 'id' )
			: this._members;
	}

	/**
	 * @constructor
	 * @param {NgcToastService} _ngcToastService
	 */
	constructor( private _ngcToastService: NgcToastService ) {}

	/**
	 * @param {NgcIMember} member
	 * @return {void}
	 */
	public viewProfile( member: NgcIMember ) {
		this.viewDetail.emit( member );
	}

	/**
	 * @return {void}
	 */
	protected done() {
		if ( !this.isChanged ) return;

		if ( this.required && !this.selected?.length ) {
			this.selected = _.clone( this.bkSelected );
			this.selectedMembersClone = _.cloneDeep( this.selectedMembers );

			this._ngcToastService.warning(
				'Ngc.MESSAGE.AT_LEAST_ONE_MEMBER',
				{
					translateParams: { name: this.name || this.label },
				}
			);
			return;
		}

		this.isChanged = false;
		this.bkSelected = _.clone( this.selected );

		this.initSelectedMembers();
		this.selectedMembersChange.emit( this.selectedMembers );
		this.selectedChange.emit( this.selected );
	}

	/**
	 * @param {NgcIMember[] | Observable<NgcIMember[]> | Function} members
	 * @return {void}
	 */
	protected setMembers( members: NgcIMember[] | Observable<NgcIMember[]> | Function ) {
		if ( isObservable( members ) ) return;

		if ( _.isFunction( members ) ) {
			this.loadPeople( ( members as Function ).call( this ) );
			return;
		}

		this._members = members as NgcIMember[];

		this.initSelectedMembers();
	}

	/**
	 * @param {Observable<NgcIMember[]>} loader
	 * @return {void}
	 */
	protected loadPeople( loader: Observable<NgcIMember[]> ) {
		if ( !loader ) return;

		// eslint-disable-next-line dot-notation, @typescript-eslint/dot-notation
		loader[ '_context' ] = this.context;

		loader
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( members: NgcIMember[] ) => {
			this._members = members;

			this.initSelectedMembers();
		} );
	}

	/**
	 * @return {void}
	 */
	protected initSelectedMembers() {
		const selectedLookup: IObject<number> = _.keyBy( this.selected );

		this.selectedMembersClone = _.cloneDeep(
			this.selectedMembers = _.filter(
				this.availableMembers,
				( member: NgcIMember ) => !!member && _.has( selectedLookup, member.id )
			)
		);

		console.log(this.selectedMembers);
	}

}
