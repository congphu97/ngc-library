import {
	Component, ViewEncapsulation, ContentChildren,
	QueryList, AfterContentInit, Output,
	EventEmitter, Input, OnChanges,
	SimpleChanges, ChangeDetectionStrategy, HostBinding
} from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import _ from 'lodash';

import {
	Unsubscriber, DefaultValue, CoerceNumber,
	CoerceBoolean, untilCmpDestroyed
} from '@core';
import { NgcButtonToggleItemComponent } from '../ngc-button-toggle-item/ngc-button-toggle-item.component';

export type NgcIButtonToggleTheme = 'default' | 'background';

@Unsubscriber()
@Component({
	selector		: 'ngc-button-toggle',
	templateUrl		: './ngc-button-toggle.html',
	styleUrls		: [ './ngc-button-toggle.scss' ],
	host			: { class: 'ngc-button-toggle' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcButtonToggleComponent implements AfterContentInit, OnChanges {

	@HostBinding( 'class.ngc-button-toggle--stretch' )
	get classStretch(): boolean { return this.stretch; }

	@HostBinding( 'class.ngc-button-toggle--reverse' )
	get classReverse(): boolean { return this.reverse; }

	@HostBinding( 'class.ngc-button-toggle--has-border' )
	get classHasBorder(): boolean { return this.hasBorder; }

	@HostBinding( 'class.ngc-button-toggle--has-shadow' )
	get classHasShadow(): boolean { return this.hasShadow; }

	@HostBinding( 'class.ngc-button-toggle--theme-background' )
	get classThemeBackground(): boolean { return this.theme === 'background'; }

	@ContentChildren( NgcButtonToggleItemComponent, { descendants: true } )
	public buttonToggleItems: QueryList<NgcButtonToggleItemComponent>;

	@Input() @DefaultValue() @CoerceNumber() public selectedIndex: number = 0;
	@Input() @CoerceBoolean() public stretch: boolean;
	@Input() @CoerceBoolean() public reverse: boolean;
	@Input() @CoerceBoolean() public hasBorder: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public hasShadow: boolean = true;
	@Input() @DefaultValue() public theme: NgcIButtonToggleTheme = 'default';

	@Output() public selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
	@Output() public changed: EventEmitter<NgcButtonToggleItemComponent>
		= new EventEmitter<NgcButtonToggleItemComponent>();

	public items: NgcButtonToggleItemComponent[];

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		this.buttonToggleItems
		.changes
		.pipe(
			startWith( this.buttonToggleItems ),
			untilCmpDestroyed( this )
		)
		.subscribe( ( items: QueryList<NgcButtonToggleItemComponent> ) => {
			this.items = ( items as IObject )?._results;

			_.forEach( items?.toArray(), ( item: NgcButtonToggleItemComponent, index: number ) => {
				if ( item.disabled ) return;

				item.isActive = item.activeState && index === this.selectedIndex;

				item
				.clicked$
				.pipe(
					takeUntil( this.buttonToggleItems.changes ),
					untilCmpDestroyed( this )
				)
				.subscribe( ( ev: MouseEvent ) => ev.detail && this.select( index ) );
			} );
		} );
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.selectedIndex ) return;

		this.select( this.selectedIndex, false );
	}

	/**
	 * @param {number} index
	 * @param {boolean} markAsDirty
	 * @return {void}
	 */
	public select( index: number, markAsDirty: boolean = true ) {
		if ( !this.items || ( markAsDirty && index === this.selectedIndex ) ) return;

		const item: NgcButtonToggleItemComponent = this.items[ index ];

		if ( !item || item.disabled ) return;

		if ( item.activeState ) {
			_.forEach( this.items, ( _item: NgcButtonToggleItemComponent ) => { _item.isActive = false; } );

			item.isActive = true;
		}

		this.selectedIndex = index;

		this.selectedIndexChange.emit( index );
		markAsDirty && this.changed.emit( item );
	}

}
