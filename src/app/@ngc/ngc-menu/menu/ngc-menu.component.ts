import {
	Component, TemplateRef, ElementRef,
	ViewChild, Input, ContentChildren,
	QueryList, ViewEncapsulation, ChangeDetectorRef,
	ContentChild, ChangeDetectionStrategy, Output,
	EventEmitter, NgZone
} from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import _ from 'lodash';

import {
	DetectScrollDirective, Unsubscriber, DefaultValue,
	CoerceBoolean, CoerceCssPixel, Debounce,
	untilCmpDestroyed
} from '@core';
import { NgcScrollBarDirective, INgcScrollBarMode } from '../../ngc-scroll-bar';
import { NgcMenuButtonCloseDirective } from '../menu-button-close/ngc-menu-button-close.directive';
import { NgcMenuItemComponent } from '../menu-item/ngc-menu-item.component';
import { NgcMenuHeaderComponent } from '../menu-header/ngc-menu-header.component';
import { NgcMenuContentComponent } from '../menu-content/ngc-menu-content.component';
import { NgcMenuFooterComponent } from '../menu-footer/ngc-menu-footer.component';

export type NgcIMenuPosition = 'above' | 'below' | 'before' | 'after';
export type NgcIMenuDirection = 'start' | 'end' | 'center';

@Unsubscriber()
@Component({
	selector		: 'ngc-menu',
	templateUrl		: './ngc-menu.html',
	styleUrls		: [ './ngc-menu.scss' ], 
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcMenuComponent {

	@ViewChild( TemplateRef, { static: true } ) public templateRef: TemplateRef<any>;

	@ViewChild( DetectScrollDirective )
	set _scroller( scroller: DetectScrollDirective ) { this.scroller = scroller; }
	@ViewChild( NgcScrollBarDirective )
	set _scrollBar( scrollBar: NgcScrollBarDirective ) { this.scrollBar = scrollBar; }

	@ContentChildren( NgcMenuButtonCloseDirective, { descendants: true } )
	public menuButtonCloseList: QueryList<NgcMenuButtonCloseDirective>;
	@ContentChildren( NgcMenuItemComponent, { descendants: true } ) public menuItems: QueryList<NgcMenuItemComponent>;
	@ContentChild( NgcMenuHeaderComponent ) public menuHeader: NgcMenuHeaderComponent;
	@ContentChild( NgcMenuContentComponent ) public menuContent: NgcMenuContentComponent;
	@ContentChild( NgcMenuFooterComponent ) public menuFooter: NgcMenuFooterComponent;

	@Input() public title: string;
	@Input() public backdropClass: string;
	@Input() @CoerceCssPixel() public width: string;
	@Input() @CoerceCssPixel() public minWidth: string;
	@Input() @CoerceCssPixel() public maxWidth: string;
	@Input() @CoerceCssPixel() public height: string;
	@Input() @CoerceCssPixel() public minHeight: string;
	@Input() @CoerceCssPixel() public maxHeight: string;
	@Input() @DefaultValue() @CoerceBoolean() public hasScrollBar: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public hasBackdrop: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public hasArrow: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public hasButtonClose: boolean = true;
	@Input() @DefaultValue() @CoerceBoolean() public closeOnClickOutside: boolean = true;
	@Input() public scrollBarMode: INgcScrollBarMode;

	@Output() public opened: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public closed: EventEmitter<Event> = new EventEmitter<Event>();
	@Output() public backdropPress: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
	@Output() public loadMore: EventEmitter<boolean> = new EventEmitter<boolean>();

	public scroller: DetectScrollDirective;
	public scrollBar: NgcScrollBarDirective;
	public isRefreshing: boolean;
	public isOpened: boolean;
	public isAllItemsActivated: boolean;
	public data: IObject;
	public classList: IObject<boolean> = {};
	public close: ( event?: Event ) => void;
	public reopen: () => void;

	private _previousPanelClass: string;

	@Input( 'class' )
	set panelClass( classes: string ) {
		const previousPanelClass: string = this._previousPanelClass;

		previousPanelClass?.split( ' ' ).forEach( ( className: string ) => {
			this.classList[ className ] = false;
		} );

		this._previousPanelClass = classes;

		classes?.split( ' ' ).forEach( ( className: string ) => {
			this.classList[ className ] = true;
		} );

		this.elementRef.nativeElement.className = '';
	}

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 * @param {ChangeDetectorRef} _cdRef
	 * @param {NgZone} _ngZone
	 */
	constructor( public elementRef: ElementRef, private _cdRef: ChangeDetectorRef, private _ngZone: NgZone ) {}

	/**
	 * @param {IObject} data
	 * @return {void}
	 */
	public onOpened( data: any ) {
		this.menuButtonCloseList
		.changes
		.pipe(
			startWith( this.menuButtonCloseList ),
			untilCmpDestroyed( this )
		)
		.subscribe( ( items: QueryList<NgcMenuItemComponent> ) => {
			this.scrollBar?.reset();

			_.forEach( items.toArray(), ( item: NgcMenuButtonCloseDirective ) => {
				item.clicked$
				.pipe(
					takeUntil( this.menuButtonCloseList.changes ),
					untilCmpDestroyed( this )
				)
				.subscribe( ( ev: MouseEvent ) => ev.detail && this.close( ev ) );
			} );
		} );

		this.menuItems
		.changes
		.pipe(
			startWith( this.menuItems ),
			untilCmpDestroyed( this )
		)
		.subscribe( ( items: QueryList<NgcMenuItemComponent> ) => {
			this.scrollBar?.reset();

			let isScrolled: boolean;

			_.forEach( items.toArray(), ( item: NgcMenuItemComponent ) => {
				item
				.clicked$
				.pipe(
					takeUntil( this.menuItems.changes ),
					untilCmpDestroyed( this )
				)
				.subscribe( ( ev: MouseEvent ) => ev.detail && this.close( ev ) );

				item
				.activeChange
				.pipe(
					takeUntil( this.menuItems.changes ),
					untilCmpDestroyed( this )
				)
				.subscribe( this._checkAllItemsSelected.bind( this ) );

				if ( isScrolled ) return;

				isScrolled = item.active;

				isScrolled && setTimeout( () => this.scrollToElement( item ) );
			} );

			this._checkAllItemsSelected();
		} );

		this.isOpened = true;
		this.data = data;

		this.opened.emit();
		this.markForCheck();
		this.detach();
	}

	/**
	 * @return {void}
	 */
	public onClosed() {
		this.isOpened = false;

		this.closed.emit();
		this.markForCheck();
	}

	/**
	 * @param {NgcIMenuPosition} position
	 * @param {NgcIMenuDirection} direction
	 * @return {void}
	 */
	public setPositionClasses( position: NgcIMenuPosition, direction: NgcIMenuDirection ) {
		this._ngZone.runGuarded( () => {
			this.classList[ 'ngc-menu--above' ] = position === 'above';
			this.classList[ 'ngc-menu--below' ] = position === 'below';
			this.classList[ 'ngc-menu--before' ] = position === 'before';
			this.classList[ 'ngc-menu--after' ] = position === 'after';
			this.classList[ 'ngc-menu--dir-start' ] = direction === 'start';
			this.classList[ 'ngc-menu--dir-end' ] = direction === 'end';
			this.classList[ 'ngc-menu--no-arrow' ] = !this.hasArrow;
		} );
	}

	/**
	 * @return {void}
	 */
	public reattach() {
		this._cdRef.reattach();
	}

	/**
	 * @return {void}
	 */
	public detach() {
		this._cdRef.detach();
	}

	/**
	 * @return {void}
	 */
	public markForCheck() {
		this._cdRef.markForCheck();
	}

	/**
	 * @return {void}
	 */
	public detectChanges() {
		this._cdRef.detectChanges();
	}

	/**
	 * @param {NgcMenuItemComponent} item
	 * @return {void}
	 */
	public scrollToElement( item: NgcMenuItemComponent ) {
		this.hasScrollBar
			&& !this.scrollBar?.scrollTop
			&& item.elementRef.nativeElement.scrollIntoView({ block: 'center', inline: 'nearest' });
	}

	/**
	 * @param {Event=} event
	 * @return {void}
	 */
	public chooseItem( event?: Event ) {
		const focusingItem: NgcMenuItemComponent = _.find( this.menuItems?.toArray(), { focusing: true } );

		if ( !focusingItem ) return;

		focusingItem.click( event );
		focusingItem.autoClose && !focusingItem.disabled && this.close();
	}

	/**
	 * @param {Event=} event
	 * @return {void}
	 */
	public focusNextItem( event?: Event ) {
		const list: NgcMenuItemComponent[] = this.menuItems?.toArray();
		const focusingIndex: number = _.findLastIndex( list, ( item: NgcMenuItemComponent ) => item.focusing );
		const focusIndex: number = focusingIndex + 1;

		focusIndex < list.length && this._focusItem( focusingIndex, focusingIndex + 1, event );
	}

	/**
	 * @param {Event=} event
	 * @return {void}
	 */
	public focusPreviousItem( event?: Event ) {
		const list: NgcMenuItemComponent[] = this.menuItems?.toArray();
		const focusingIndex: number = _.findLastIndex( list, ( item: NgcMenuItemComponent ) => item.focusing );
		const focusIndex: number = focusingIndex - 1;

		focusIndex >= 0 && this._focusItem( focusingIndex, focusIndex, event );
	}

	/**
	 * @param {number} focusingIndex
	 * @param {number} focusIndex
	 * @param {Event=} event
	 * @return {void}
	 */
	private _focusItem( focusingIndex: number, focusIndex: number, event?: Event ) {
		const items: NgcMenuItemComponent[] = ( this.menuItems as IObject )?._results;
		const currentFocusedItem: NgcMenuItemComponent = items[ focusingIndex ];
		const focusItem: NgcMenuItemComponent = items[ focusIndex ];

		if ( currentFocusedItem ) currentFocusedItem.focusing = false;

		focusItem.focusing = true;

		focusItem.elementRef.nativeElement.scrollIntoView( false );
		focusItem.focus( event );
		this.markForCheck();
	}

	/**
	 * @return {void}
	 */
	@Debounce()
	private _checkAllItemsSelected() {
		const menuItems: NgcMenuItemComponent[] = this.menuItems?.toArray();
		let i: number = 0;
		let isAllItemsActivated: boolean = true;

		while ( i < menuItems?.length ) {
			isAllItemsActivated = menuItems[ i++ ].active;

			if ( !isAllItemsActivated ) break;
		}

		this.isAllItemsActivated = isAllItemsActivated;

		this.markForCheck();
	}

}
