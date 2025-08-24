import {
	Component, Input, ViewEncapsulation,
	QueryList, ContentChildren, EventEmitter,
	Output, ViewChild, AfterContentInit,
	ChangeDetectionStrategy, HostBinding, ChangeDetectorRef
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { startWith, takeUntil } from 'rxjs/operators';
import _ from 'lodash';

import {
	DetectScrollDirective, Unsubscriber, calculateOrders,
	DefaultValue, CoerceBoolean, CoerceNumber,
	untilCmpDestroyed
} from '@core';
import { NgcScrollBarDirective, INgcScrollBarMode } from '../../ngc-scroll-bar';
// import { NgcSearchBoxComponent } from '../../ngc-search-box';
import { NgcListItemComponent } from '../list-item/ngc-list-item.component';

export interface NgcIListItemMoved {
	item: NgcListItemComponent;
	container: NgcListItemComponent[];
	previousIndex: number;
	currentIndex: number;
	previousOrder: number;
	currentOrder: number;
}

@Unsubscriber()
@Component({
	selector		: 'ngc-list',
	templateUrl		: './ngc-list.html',
	styleUrls		: [ './ngc-list.scss' ],
	host			: { class: 'ngc-list' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcListComponent implements AfterContentInit {

	@HostBinding( 'style.--list-item-active-color' )
	get styleItemActiveColor(): string { return this.activeColor; }

	@HostBinding( 'class.ngc-list--stretch' )
	get classStretch(): boolean { return this.stretch; }

	@ViewChild( DetectScrollDirective ) public scroller: DetectScrollDirective;
	@ViewChild( NgcScrollBarDirective ) public scrollBar: NgcScrollBarDirective;

	@ContentChildren( NgcListItemComponent, { descendants: true } ) public listItems: QueryList<NgcListItemComponent>;

	@Input() @DefaultValue() public name: string = this._translateService.instant( 'NGC.LABEL' );
	@Input() @DefaultValue() public placeholder: string = this._translateService.instant( 'NGC.PLACEHOLDER.TYPE_LABEL' );
	@Input() @CoerceNumber() public itemSize: number;
	@Input() @DefaultValue() @CoerceNumber() public loadMoreBuffer: number = 20;
	@Input() public activeColor: string;
	@Input() @CoerceBoolean() public stretch: boolean;
	@Input() @CoerceBoolean() public displayColorDot: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public hasScrollBar: boolean = true;
	@Input() public scrollBarMode: INgcScrollBarMode;
	// @Input() public searchBox: NgcSearchBoxComponent;
	@Input() @DefaultValue() public formControl: FormControl = new FormControl(
		undefined,
		[ Validators.required, Validators.maxLength( 255 ) ]
	);

	@Output() public itemsMoved: EventEmitter<NgcIListItemMoved[]> = new EventEmitter<NgcIListItemMoved[]>();
	@Output() public loadMore: EventEmitter<boolean> = new EventEmitter<boolean>();

	public items: NgcListItemComponent[];

	/**
	 * @constructor
	 * @param {ChangeDetectorRef} _cdRef
	 * @param {TranslateService} _translateService
	 */
	constructor( private _cdRef: ChangeDetectorRef, private _translateService: TranslateService ) {}

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		this.listItems
		.changes
		.pipe(
			startWith( this.listItems ),
			untilCmpDestroyed( this )
		)
		.subscribe( ( items: QueryList<NgcListItemComponent> ) => {
			const _items: NgcListItemComponent[] = ( items as IObject )?._results;

			this.items = _.map( _items, ( item: NgcListItemComponent ) => {
				item
				.changes$
				.pipe(
					takeUntil( this.listItems.changes ),
					untilCmpDestroyed( this )
				)
				.subscribe( () => this._cdRef.markForCheck() );

				item
				.editingSubject$
				.pipe(
					takeUntil( this.listItems.changes ),
					untilCmpDestroyed( this )
				)
				.subscribe( () => {
					_.forEach( _items, ( _item: NgcListItemComponent ) => _item.isEditing && _item?.cancel() );

					setTimeout( () => {
						this.formControl.markAsPristine();
						this.formControl.markAsUntouched();
						this.formControl.setValue( item.label );

						item.isEditing = true;

						item.editing.emit( item.isEditing );
					} );
				} );

				if ( !item.id || !item.order ) item.order = item.order || Infinity;

				return item;
			} );

			this._cdRef.markForCheck();
		} );
	}

	/**
	 * @param {CdkDragDrop} event
	 * @return {void}
	 */
	public onDropped( event: CdkDragDrop<NgcListItemComponent[]> ) {
		const currentIndex: number = event.currentIndex;
		const previousIndex: number = event.previousIndex;

		if ( currentIndex === previousIndex ) return;

		moveItemInArray( event.container.data, previousIndex, currentIndex );

		const orders: number = calculateOrders( _.map( this.items, 'order' ), currentIndex );
		const target: NgcListItemComponent = this.items[ currentIndex ];
		const itemsMovedEvents: NgcIListItemMoved[] = [];

		_.forEach( orders, ( order: number, index: string ) => {
			const item: NgcListItemComponent = this.items[ Number( index ) ];
			const previousOrder: number = item.order;
			const currentOrder: number = order;

			// Set new order
			item.order = currentOrder;

			// Set highlight
			item.setHighlight( true );

			itemsMovedEvents.push({
				item, previousOrder, currentOrder,
				container		: this.items,
				currentIndex	: target === item ? currentIndex : Number( index ),
				previousIndex	: target === item ? previousIndex : Number( index ),
			});
		} );

		this.itemsMoved.emit( itemsMovedEvents );
	}

}
