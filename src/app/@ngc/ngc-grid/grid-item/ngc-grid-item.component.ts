import {
	Component, ElementRef, TemplateRef,
	ViewChild, Input, Output,
	EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

import { CoerceBoolean, AliasOf } from '@core';

@Component({
	selector		: 'ngc-grid-item',
	templateUrl		: './ngc-grid-item.html',
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcGridItemComponent {

	@ViewChild( TemplateRef, { static: true } ) public templateRef: TemplateRef<any>;

	@Input() public id: number;
	@Input( 'class' ) public classes: string;
	@Input() @AliasOf( 'classes' ) public ngClass: string;
	@Input() @CoerceBoolean() public active: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public focusing: boolean;
	@Input() @CoerceBoolean() public hovering: boolean;
	@Input() @CoerceBoolean() public dragging: boolean;
	@Input() @CoerceBoolean() public draggable: boolean;
	@Input() @CoerceBoolean() public highlight: boolean;
	@Input() @CoerceBoolean() public autoUnhighlight: boolean;

	@Output() public highlightChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output( 'click' ) public clickEventEmitter: EventEmitter<Event> = new EventEmitter<Event>();
	@Output( 'focus' ) public focusEventEmitter: EventEmitter<Event> = new EventEmitter<Event>();
	@Output( 'blur' ) public blurEventEmitter: EventEmitter<Event> = new EventEmitter<Event>();

	public isForceAutoUnhighlight: boolean;

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 */
	constructor( public elementRef: ElementRef ) {}

	/**
	 * @param {boolean=} isForceAutoUnhighlight
	 * @return {void}
	 */
	public setHighlight( isForceAutoUnhighlight: boolean = false ) {
		this.isForceAutoUnhighlight = isForceAutoUnhighlight;
		this.highlight = true;

		this.highlightChange.emit( this.highlight );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public click( event?: Event ) {
		this.clickEventEmitter.emit( event );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public focus( event?: Event ) {
		this.focusing = true;

		this.focusEventEmitter.emit( event );
	}

	/**
	 * @param {Event} event
	 * @return {void}
	 */
	public blur( event?: Event ) {
		this.focusing = false;

		this.blurEventEmitter.emit( event );
	}

}
