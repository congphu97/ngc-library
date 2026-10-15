import {
	Component, Input, ViewEncapsulation,
	QueryList, ContentChildren, EventEmitter,
	Output, ViewChild, AfterViewInit,
	AfterContentInit, ChangeDetectionStrategy, HostBinding
} from '@angular/core';
import { moveItemInArray, CdkDropList, CdkDrag, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { startWith } from 'rxjs/operators';
import _ from 'lodash';

import {
	DetectScrollDirective, Unsubscriber, DefaultValue,
	CoerceBoolean, CoerceNumber, untilCmpDestroyed
, IObject } from '@core';
import { NgcScrollBarDirective, INgcScrollBarMode } from '../../ngc-scroll-bar';
import { NgcGridItemComponent } from '../grid-item/ngc-grid-item.component';

export interface NgcIGridItemMoved {
	previousIndex: number;
	currentIndex: number;
	item: NgcGridItemComponent;
}

@Unsubscriber()
@Component({
	selector		: 'ngc-grid',
	templateUrl		: './ngc-grid.html',
	styleUrls		: [ './ngc-grid.scss' ],
	host			: { class: 'ngc-grid' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcGridComponent implements AfterViewInit, AfterContentInit {

	@HostBinding( 'style.--grid-item-width' )
	get styleItemWidth(): string { return this.width; }

	@HostBinding( 'style.--grid-item-active-color' )
	get styleItemActiveColor(): string { return this.activeColor; }

	@HostBinding( 'class.ngc-grid--stretch' )
	get classStretch(): boolean { return this.stretch; }

	@ViewChild( CdkDropListGroup ) public listGroup: CdkDropListGroup<CdkDropList>;
	@ViewChild( CdkDropList ) public placeholder: CdkDropList;
	@ViewChild( DetectScrollDirective ) public scroller: DetectScrollDirective;
	@ViewChild( NgcScrollBarDirective ) public scrollBar: NgcScrollBarDirective;

	@ContentChildren( NgcGridItemComponent, { descendants: true } ) public gridItems: QueryList<NgcGridItemComponent>;

	@Input() @DefaultValue() @CoerceNumber() public itemsPerRow: number = 6;
	@Input() public activeColor: string;
	@Input() @CoerceBoolean() public stretch: boolean;
	@Input() public scrollBarMode: INgcScrollBarMode;

	@Output() public itemsSelected: EventEmitter<NgcGridItemComponent[]> = new EventEmitter<NgcGridItemComponent[]>();
	@Output() public itemMoved: EventEmitter<NgcIGridItemMoved> = new EventEmitter<NgcIGridItemMoved>();
	@Output() public loadMore: EventEmitter<boolean> = new EventEmitter<boolean>();

	public items: NgcGridItemComponent[];

	private _sourceIndex: number;
	private _targetIndex: number;
	private _source: CdkDropList;
	private _target: CdkDropList;

	get width(): string { return `${100 / this.itemsPerRow}%`; }

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		const phElement: HTMLElement = this.placeholder.element.nativeElement;

		phElement.style.display = 'none';
		phElement.parentNode.removeChild( phElement );
	}

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		this.gridItems
		.changes
		.pipe(
			startWith( this.gridItems ),
			untilCmpDestroyed( this )
		)
		.subscribe( ( items: QueryList<NgcGridItemComponent> ) => this.items = ( items as IObject )?._results );
	}

	/**
	 * @return {void}
	 */
	public onItemsSelected() {
		this.itemsSelected.emit(
			_.clone( _.filter( this.items, ( item: NgcGridItemComponent ) => item.active ) )
		);
	}

	/**
	 * @return {void}
	 */
	public deselectItems() {
		_.forEach( this.items, ( item: NgcGridItemComponent ) => { item.active = false; } );
		this.itemsSelected.emit( [] );
	}

	/**
	 * @return {void}
	 */
	public onDropped() {
		if ( !this._target ) return;

		const phElement: HTMLElement = this.placeholder.element.nativeElement;
		const parent: ParentNode = phElement.parentNode;

		phElement.style.display = 'none';

		( parent as HTMLElement ).removeChild( phElement );
		( parent as HTMLElement ).appendChild( phElement );
		( parent as HTMLElement ).insertBefore(
			this._source.element.nativeElement,
			( parent as HTMLElement ).children[ this._sourceIndex ]
		);

		this._target = undefined;
		this._source = undefined;

		if ( this._sourceIndex === this._targetIndex ) return;

		// Move item
		moveItemInArray( this.items, this._sourceIndex, this._targetIndex );

		// Set highlight item
		this.items[ this._targetIndex ].setHighlight( true );

		this.itemMoved.emit({
			previousIndex	: this._sourceIndex,
			currentIndex	: this._targetIndex,
			item			: this.items[ this._targetIndex ],
		});
	}

	public enter: ( drag: CdkDrag, drop: CdkDropList ) => boolean = ( drag: CdkDrag, drop: CdkDropList ) => {
		if ( drop === this.placeholder ) return true;

		const phElement: HTMLElement = this.placeholder.element.nativeElement;
		const sourceElement: HTMLElement = drag.dropContainer.element.nativeElement;
		const dropElement: HTMLElement = drop.element.nativeElement;
		const dragIndex: number = _.indexOf( dropElement.parentNode.children, ( this._source ? phElement : sourceElement ) );
		const dropIndex: number = _.indexOf( dropElement.parentNode.children, dropElement );

		if ( !this._source ) {
			this._sourceIndex = dragIndex;
			this._source = drag.dropContainer;

			phElement.style.width = sourceElement.clientWidth + 'px';
			phElement.style.height = sourceElement.clientHeight + 'px';

			sourceElement.parentNode.removeChild( sourceElement );
		}

		this._targetIndex = dropIndex;
		this._target = drop;

		phElement.style.display = '';

		dropElement.parentNode.insertBefore( phElement, ( dragIndex < dropIndex ) ? dropElement.nextSibling : dropElement );

		this._source._dropListRef.start();
		this.placeholder._dropListRef.enter( drag._dragRef, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop );

		return false;
	};

}
