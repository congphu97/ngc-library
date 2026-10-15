import {
	Component, Input, EventEmitter,
	Output, ViewEncapsulation, ChangeDetectionStrategy
} from '@angular/core';
import { Subject } from 'rxjs';

import { CoerceBoolean, CoerceCssPixel, DefaultValue, Unsubscriber } from '@core';

import { NgcSearchBoxComponent } from '../../ngc-search-box';

import { NgcMember, NgcIMember, NgcIMemberStatus } from './ngc-member';

@Unsubscriber()
@Component({
	selector		: 'ngc-member',
	templateUrl		: './ngc-member.html',
	styleUrls		: [ './ngc-member.scss', '../styles/ngc-member-common.scss' ],
	host			: { class: 'ngc-member' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcMemberComponent {

	@Input() @DefaultValue() @CoerceBoolean() public hasViewProfile: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public displayMemberName: boolean = true;
	@Input() @CoerceBoolean() public canViewProfile: boolean;
	@Input() @CoerceCssPixel() public size: string;
	@Input() public scrolling$: Subject<any>;
	@Input() public member: NgcIMember;
	@Input() public searchBox: NgcSearchBoxComponent;

	@Output() public viewDetail: EventEmitter<NgcIMember> = new EventEmitter<NgcIMember>();

	public readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS = NgcMember.MEMBER_STATUS;

	/**
	 * @param {NgcIMemberStatus} status
	 * @return {string}
	 */
	public static parseStatusIcon( status: NgcIMemberStatus ): string {
		let imgName: string;

		switch ( status ) {
			case NgcMember.MEMBER_STATUS.ACTIVE:
				imgName = 'status-active';
				break;
			case NgcMember.MEMBER_STATUS.PENDING:
				imgName = 'status-pending';
				break;
			case NgcMember.MEMBER_STATUS.INACTIVE:
				imgName = 'status-inactive';
				break;
		}

		return `
			<img
				style="width: 20px; min-width: 20px; max-width: 20px; height: 20px; min-height: 20px; max-height: 20px"
				src="assets/images/icons/${imgName}.png"
			/>
		`;
	}

	/**
	 * @param {NgcIMember} member
	 * @return {void}
	 */
	public viewProfile( member: NgcIMember ) {
		this.viewDetail.emit( member );
	}

}
