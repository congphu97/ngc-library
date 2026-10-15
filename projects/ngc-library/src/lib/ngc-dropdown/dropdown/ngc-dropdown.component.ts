import {
	Component, ViewEncapsulation, Input,
	ContentChildren, QueryList, Output,
	EventEmitter, AfterContentInit, ChangeDetectionStrategy,
	OnChanges, SimpleChanges, ViewChild,
	ContentChild, TemplateRef, ChangeDetectorRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';
import _ from 'lodash';

import {
	Unsubscriber, DefaultValue, CoerceNumber,
	CoerceBoolean, untilCmpDestroyed
, IObject } from '@core';
import { CONSTANT as APP_CONSTANT } from '@resources';

import { NgcIFormFieldAppearance, NgcIFormFieldErrorDisplayMode, NgcFormFieldErrorDirective } from '../../ngc-form-field';
import { NgcMenuTriggerForDirective } from '../../ngc-menu';
// import { NgcSearchBoxComponent } from '../../ngc-search-box';
import { NgcDropdownGroupItemComponent } from '../dropdown-group-item/ngc-dropdown-group-item.component';
import { NgcDropdownItemComponent } from '../dropdown-item/ngc-dropdown-item.component';
import { NgcSearchBoxComponent } from '@app/@ngc/ngc-search-box';

type NgcDropdownInternalItem = NgcDropdownGroupItemComponent | NgcDropdownItemComponent;

@Unsubscriber()
@Component({
	selector		: 'ngc-dropdown',
	templateUrl		: './ngc-dropdown.html',
	styleUrls		: [ './ngc-dropdown.scss' ],
	host			: { class: 'ngc-dropdown' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcDropdownComponent implements AfterContentInit, OnChanges {

	@ViewChild( NgcMenuTriggerForDirective ) public dropdownMenuTrigger: NgcMenuTriggerForDirective;

	private _searchBox: NgcSearchBoxComponent;
	@ViewChild( NgcSearchBoxComponent ) set searchBox( value: NgcSearchBoxComponent ) {
		this._searchBox = value;
		if ( value ) {
			this._cdRef.markForCheck();
		}
	}
	get searchBox(): NgcSearchBoxComponent {
		return this._searchBox;
	}

	@ViewChild( CdkVirtualScrollViewport ) public viewPort: CdkVirtualScrollViewport;

	@ContentChild( 'ngcDropdownDisplay' ) public displayTemp: TemplateRef<any>;
	@ContentChild( NgcFormFieldErrorDirective ) public formFieldError: NgcFormFieldErrorDirective;
	@ContentChildren( NgcDropdownGroupItemComponent ) public dropdownGroupItems: QueryList<NgcDropdownGroupItemComponent>;
	@ContentChildren( NgcDropdownItemComponent ) public dropdownItems: QueryList<NgcDropdownItemComponent>;

	@Input() public ngModel: any;
	@Input() public label: string;
	@Input() public searchPlaceholder: string;
	@Input() @DefaultValue() public placeholder: string = this._translateService.instant( 'Ngc.PLACEHOLDER.SELECT' );
	@Input() @DefaultValue() @CoerceNumber() public itemSize: number = 40;
	@Input() @DefaultValue() @CoerceNumber() public tabindex: number = 0;
	@Input() public disableControl: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public readonly: boolean;
	@Input() @CoerceBoolean() public required: boolean;
	@Input() @CoerceBoolean() public multiple: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public canSetNone: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public autoFit: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public strictDisplay: boolean = true;
	@Input() public formControl: FormControl;
	@Input() public appearance: NgcIFormFieldAppearance = 'default';
	@Input() @DefaultValue() public errorDisplayMode: NgcIFormFieldErrorDisplayMode = 'default';

	@Output() public ngModelChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() public changed: EventEmitter<any> = new EventEmitter<any>();
	@Output() public opened: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public closed: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public loadMore: EventEmitter<boolean> = new EventEmitter<boolean>();

	public displayValue: string;
	public selected: any;
	public isOpened: boolean;
	public isDirty: boolean;
	public items: NgcDropdownInternalItem[];
	public selectedGroup: NgcDropdownGroupItemComponent;

	private _bkItems: NgcDropdownInternalItem[];

	get isSelected(): boolean {
		return this.multiple ? this.selected?.length : this.selected;
	}

	get visibleNoneOption(): boolean {
		return this.canSetNone && !this.required && !this.multiple && this.ngModel && !this.searchBox?.searchQuery?.length;
	}

	get useVirtualScroll(): boolean {
		return this.filteredItems?.length >= APP_CONSTANT.USE_VIRTUAL_SCROLL_WITH;
	}

	get filteredItems(): NgcDropdownInternalItem[] {
		console.log('dropdown filteredItems:', this.searchBox?.filteredData, 'searchBox:', this.searchBox);
		return this.searchBox?.filteredData;
	}

	get availableItems(): NgcDropdownItemComponent[] {
		return !this.strictDisplay
			? _.unionBy( this.items, this.selected ? [ this.selected ] : [], 'value' )
			: this.items as any;
	}

	/**
	 * @constructor
	 * @param {ChangeDetectorRef} _cdRef
	 * @param {TranslateService} _translateService
	 */
	constructor( private _cdRef: ChangeDetectorRef, private _translateService: TranslateService ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		changes.ngModel && this._initSelected();
	}

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		combineLatest([
			this.dropdownItems.changes.pipe( startWith( this.dropdownItems ) ),
			this.dropdownGroupItems.changes.pipe( startWith( this.dropdownGroupItems ) ),
		])
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( results: IObject ) => {
			this.items = _.concat(
				( results[ 0 ] as IObject )?._results,
				( results[ 1 ] as IObject )?._results
			);

			this._initSelected();
		} );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public onOpened( event: Event ) {
		this.isOpened = true;
		console.log('dropdown onOpened items:', this.items);
		if (this.items) {
			this.items.forEach((item, index) => {
				console.log(`item ${index} label:`, (item as any).label, 'value:', (item as any).value);
			});
		}
		console.log('dropdown onOpened query list:', this.dropdownItems?.toArray());

		this.selected?.parent && this.selectGroup( this.selected?.parent );
		this.scrollToItem( this.ngModel );
		this.opened.emit( event );
		this._cdRef.markForCheck();
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public onClosed( event: Event ) {
		this.isDirty = true;
		this.isOpened = false;

		this.unselectGroup();
		this.closed.emit( event );
		this.formControl?.markAsTouched();
		this._cdRef.markForCheck();
	}

	/**
	 * @param {NgcDropdownInternalItem[]} items
	 * @param {any} value
	 * @return {NgcDropdownItemComponent}
	 */
	public findItem( items: NgcDropdownInternalItem[], value: any ): NgcDropdownItemComponent {
		let matchItem: NgcDropdownItemComponent;

		_.forEach( items, ( item: NgcDropdownInternalItem ) => {
			const children: NgcDropdownItemComponent[] = ( item as NgcDropdownGroupItemComponent ).children;

			if ( !children ) {
				item = item as NgcDropdownItemComponent;

				if ( item.value === value
					|| ( _.isObject( item.value ) && _.isObject( value ) && _.isMatch( item.value, value ) ) ) {
					matchItem = item;
				}

				return !matchItem;
			}

			return !( matchItem = this.findItem( children, value ) );
		} );

		return matchItem;
	}

	/**
	 * @param {NgcDropdownInternalItem} item
	 * @param {boolean} markAsDirty
	 * @return {void}
	 */
	public selectItem( item: NgcDropdownInternalItem, markAsDirty: boolean = true ) {
		item = item as NgcDropdownGroupItemComponent;

		if ( item?.children ) {
			this.selectGroup( item );
			this.scrollToItem( this.ngModel );
			return;
		}

		item = item as unknown as NgcDropdownItemComponent;

		this.displayValue = undefined;

		if ( item ) {
			let ngModel: any = _.clone( this.ngModel );
			let selected: any = _.clone( this.selected );
			let displayValue: string;

			if ( this.multiple ) {
				ngModel = _.arrayResert( ngModel, item.value );
				selected = _.arrayResert( selected, item );
				displayValue = _.arrayJoin( _.map( selected, ( _item: NgcDropdownItemComponent ) => _item.display || _item.label ) );
			} else {
				selected = item;
				ngModel = item.value;
				displayValue = !_.isNil( ngModel ) ? ( item.display || item.label ) : undefined;
			}

			this.ngModel = ngModel;
			this.selected = selected;
			this.displayValue = displayValue;
		} else {
			this.ngModel = this.selected = undefined;
		}

		this._done( markAsDirty );
	}

	/**
	 * @param {NgcDropdownGroupItemComponent} group
	 * @return {void}
	 */
	public selectGroup( group: NgcDropdownGroupItemComponent ) {
		this._bkItems = _.clone( this.items );
		this.items = _.clone( group.children );
		this.selectedGroup = group;

		this.searchBox?.clear();
	}

	/**
	 * @return {void}
	 */
	public unselectGroup() {
		this.items = _.clone( this._bkItems || this.items );
		this.selectedGroup = undefined;

		this.searchBox?.clear();
	}

	/**
	 * @return {void}
	 */
	public addAllItems() {
		let ngModel: any = _.clone( this.ngModel );
		let selected: any = _.clone( this.selected );

		_.forEach( this.filteredItems, ( item: NgcDropdownInternalItem ) => {
			if ( item.disabled || ( item as NgcDropdownGroupItemComponent ).children ) return;

			ngModel = _.union( ngModel, [ ( item as NgcDropdownItemComponent )?.value ] );
			selected = _.union( selected, [ item ] );
		} );

		this.ngModel = ngModel;
		this.selected = selected;
		this.displayValue = _.arrayJoin( _.map( selected, 'label' ) );

		this._done();
	}

	/**
	 * @return {void}
	 */
	public removeAllItems() {
		let ngModel: any = _.clone( this.ngModel );
		let selected: any = _.clone( this.selected );

		_.forEach( this.filteredItems, ( item: NgcDropdownInternalItem ) => {
			if ( item.disabled || ( item as NgcDropdownGroupItemComponent ).children ) return;

			ngModel = _.without( ngModel, ( item as NgcDropdownItemComponent )?.value );
			selected = _.without( selected, item );
		} );

		this.ngModel = ngModel;
		this.selected = selected;
		this.displayValue = _.arrayJoin( _.map( selected, 'label' ) );

		this._done();
	}

	/**
	 * @return {void}
	 */
	public clear() {
		this.displayValue = undefined;
		this.ngModel = this.selected = null;

		this._done();
	}

	/**
	 * @param {any} value
	 * @return {void}
	 */
	public scrollToItem( value: any ) {
		setTimeout( () => {
			const index: number = _.findIndex( this.filteredItems, { value } );

			index !== -1 && this.viewPort?.scrollToIndex( index );
		} );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public open( event?: Event ) {
		this.dropdownMenuTrigger.open( event );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public close( event?: Event ) {
		this.dropdownMenuTrigger.close( event );
	}

	/**
	 * @return {void}
	 */
	public reopen() {
		this.dropdownMenuTrigger.reopen();
	}

	/**
	 * @return {void}
	 */
	public markForCheck() {
		this._cdRef.markForCheck();
	}

	/**
	 * @param {boolean} markAsDirty
	 * @return {void}
	 */
	private _done( markAsDirty: boolean = true ) {
		this.ngModelChange.emit( this.ngModel );

		if ( !markAsDirty ) return;

		this.changed.emit( this.selected );
		this.formControl?.markAsDirty();
	}

	/**
	 * @return {void}
	 */
	private _initSelected() {
		if ( this.strictDisplay || _.isNil( this.ngModel ) ) this.selected = this.displayValue = undefined;

		if ( this.multiple ) {
			const valueLookup: IObject<number> = _.keyBy( this.ngModel );

			this.selected = _.filter( this.availableItems, ( item: NgcDropdownItemComponent ) => !!item && _.has( valueLookup, item.value ) );
			this.displayValue = _.arrayJoin( _.map( this.selected, ( item: NgcDropdownItemComponent ) => item.display || item.label ) );
			return;
		}

		const selected: NgcDropdownItemComponent = this.findItem( this.availableItems, this.ngModel );

		selected && this.selectItem( selected, false );
		this._cdRef.markForCheck();
	}

}
