import {
	Component, ViewEncapsulation, Input,
	ElementRef, HostListener, ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';
import { Subject } from 'rxjs';

import { CoerceBoolean, CoerceCssPixel, DefaultValue } from '@core';

@Component({
	selector		: 'ngc-button-toggle-item',
	templateUrl		: './ngc-button-toggle-item.html',
	host			: { class: 'ngc-button-toggle-item' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcButtonToggleItemComponent {

	@HostBinding( 'class.ngc-button-toggle-item--active' )
	get classActive(): boolean { return this.isActive; }

	@HostBinding( 'class.ngc-button-toggle-item--disabled' )
	get classDisabled(): boolean { return this.disabled; }

	@HostBinding( 'class.ngc-button-toggle-item--only-icon' )
	get classOnlyIcon(): boolean { return this.onlyIcon; }

	@Input() public icon: string;
	@Input() @DefaultValue() @CoerceCssPixel() public iconSize: string = '20px';
	@Input() public label: string;
	@Input() @DefaultValue() @CoerceBoolean() public activeState: boolean = true;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public onlyIcon: boolean;

	public clicked$: Subject<Event> = new Subject<Event>();
	public isActive: boolean;

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 */
	constructor( public elementRef: ElementRef ) {}

	@HostListener( 'click', [ '$event' ] )
	public triggerClick( event: Event ) {
		if ( this.disabled ) return;

		this.clicked$.next( event );
	}

}
