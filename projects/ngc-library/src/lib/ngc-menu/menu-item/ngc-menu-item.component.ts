import {
	Component, ElementRef, ViewEncapsulation,
	Input, ContentChild, Output,
	EventEmitter, HostListener, ChangeDetectionStrategy,
	OnChanges, SimpleChanges, HostBinding
} from '@angular/core';
import { Subject } from 'rxjs';

import { DefaultValue, CoerceBoolean } from '@core';

import { NgcMenuItemIconDirective } from '../menu-item-icon/ngc-menu-item-icon.directive';

@Component({
	selector		: 'button[ngcMenuItem]',
	templateUrl		: './ngc-menu-item.html',
	styleUrls		: [ './ngc-menu-item.scss' ],
	host			: { class: 'ngc-menu-item' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcMenuItemComponent implements OnChanges {

	@HostBinding( 'style.--menu-item-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'class.ngc-menu-item--disabled' )
	get classDisabled(): boolean { return this.disabled; }

	@HostBinding( 'class.ngc-menu-item--active' )
	get classActive(): boolean { return this.active; }

	@HostBinding( 'class.ngc-menu-item--focusing' )
	get classFocusing(): boolean { return this.focusing; }

	@ContentChild( NgcMenuItemIconDirective ) public menuItemIcon: NgcMenuItemIconDirective;

	@Input() public icon: string;
	@Input() public color: string;
	@Input() public iconColor: string;
	@Input() public dotColor: string;
	@Input() @DefaultValue() @CoerceBoolean() public autoClose: boolean = true;
	@Input() @CoerceBoolean() public active: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public focusing: boolean;

	@Output() public activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output( 'click' ) public clickEventEmitter: EventEmitter<Event> = new EventEmitter<Event>();
	@Output( 'focus' ) public focusEventEmitter: EventEmitter<Event> = new EventEmitter<Event>();
	@Output( 'blur' ) public blurEventEmitter: EventEmitter<Event> = new EventEmitter<Event>();

	public clicked$: Subject<Event> = new Subject<Event>();

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 */
	constructor( public elementRef: ElementRef ) {}

	@HostListener( 'click', [ '$event' ] )
	public triggerClick( event: Event ) {
		if ( this.disabled || !this.autoClose ) return;

		this.focusing = false;

		event.stopPropagation();
		this.clicked$.next( event );
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		changes.active && this.activeChange.emit( this.active );
	}

	/**
	 * @param {Event=} event
	 * @return {void}
	 */
	public click( event?: Event ) {
		this.clickEventEmitter.emit( event );
	}

	/**
	 * @param {Event=} event
	 * @return {void}
	 */
	public focus( event?: Event ) {
		this.focusing = true;

		this.focusEventEmitter.emit( event );
	}

	/**
	 * @param {Event=} event
	 * @return {void}
	 */
	public blur( event?: Event ) {
		this.focusing = false;

		this.blurEventEmitter.emit( event );
	}

}
