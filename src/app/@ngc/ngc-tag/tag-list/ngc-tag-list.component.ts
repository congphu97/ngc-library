import {
	Component, ContentChildren, QueryList,
	Input, ViewEncapsulation, ChangeDetectionStrategy,
	AfterContentInit, HostBinding, Output,
	EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import _ from 'lodash';

import { Unsubscriber, CoerceBoolean } from '@core';

import { NgcBlockTruncateDirective } from '../../ngc-truncate/block-truncate/ngc-block-truncate.directive';
import { NgcMenuComponent } from '../../ngc-menu';

import { NgcTagComponent } from '../tag/ngc-tag.component';

@Unsubscriber()
@Component({
	selector		: 'ngc-tag-list',
	templateUrl		: './ngc-tag-list.html',
	styleUrls		: [ './ngc-tag-list.scss' ],
	host			: { class: 'ngc-tag-list' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcTagListComponent extends NgcBlockTruncateDirective implements OnChanges, AfterContentInit {

	@HostBinding( 'class.ngc-tag-list--wrapping' )
	get classWrapping(): boolean { return this.wrapping; }

	@ContentChildren( NgcTagComponent ) public tags: QueryList<NgcTagComponent>;

	@Input() public tagColor: string;
	@Input() @CoerceBoolean() public wrapping: boolean;
	@Input() public moreMenu: NgcMenuComponent;

	@Output() public showMore: EventEmitter<void> = new EventEmitter<void>();

	get isFixedLimit(): boolean {
		return this.wrapping || this.limit >= 1;
	}

	/**
	 * @constructor
	 * @overloading
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.length && !changes.wrapping ) return;

		this.wrapping
			? this.setMaxDisplay( 0 )
			: super.ngOnChanges( changes );
	}

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		if ( this.isFixedLimit ) return;

		this.blocks = this.tags;
	}

}
