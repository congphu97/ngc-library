import {
	Component, ElementRef, Input,
	ViewEncapsulation, Output, EventEmitter,
	ContentChild, SimpleChanges, OnChanges,
	ChangeDetectorRef, ChangeDetectionStrategy, HostBinding
} from '@angular/core';
import {
	animate, state, style,
	transition, trigger
} from '@angular/animations';

import { DefaultValue, CoerceBoolean, CoerceNumber, CoerceCssPixel } from '@core';

import { NgcDrawerLazyDirective } from './ngc-drawer-lazy.directive';

export type NgcDrawerPosition = 'left' | 'right';

@Component({
	selector		: 'ngc-drawer, [ngcDrawer]',
	templateUrl		: './ngc-drawer.html',
	styleUrls		: [ './ngc-drawer.scss' ],
	host			: { class: 'ngc-drawer' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger(
			'slide',
			[
				state( 'closed', style({ width: 0, minWidth: 0, maxWidth: 0, visibility: 'hidden', opacity: 0, overflow: 'hidden' }) ),
				state( 'opened', style({ width: '*', minWidth: '*', maxWidth: '*', visibility: 'visible', opacity: 1, overflow: 'initial' }) ),
				transition( 'opened <=> closed', animate( '225ms cubic-bezier( .4, .0, .2, 1 )' ) ),
			]
		),
	],
})
export class NgcDrawerComponent implements OnChanges {

	@HostBinding( 'style.--drawer-bg-color' )
	get styleBgColor(): string { return this.bgColor; }

	@HostBinding( 'style.--drawer-width' )
	get styleWidth(): string { return this.width; }

	@HostBinding( 'style.--drawer-padding-top' )
	get stylePaddingTop(): string { return this.paddingTop || this.paddingVertical; }

	@HostBinding( 'style.--drawer-padding-bottom' )
	get stylePaddingBottom(): string { return this.paddingBottom || this.paddingVertical; }

	@HostBinding( 'style.--drawer-padding-left' )
	get stylePaddingLeft(): string { return this.paddingLeft || this.paddingHorizontal; }

	@HostBinding( 'style.--drawer-padding-right' )
	get stylePaddingRight(): string { return this.paddingRight || this.paddingHorizontal; }

	@HostBinding( 'class.ngc-drawer--left' )
	get classLeft(): boolean { return this.position === 'left'; }

	@HostBinding( 'class.ngc-drawer--right' )
	get classRight(): boolean { return this.position === 'right'; }

	@HostBinding( 'class.ngc-drawer--opened' )
	get classOpened(): boolean { return this.opened; }

	@HostBinding( 'class.ngc-drawer--sliding' )
	get classSliding(): boolean { return this.isSliding; }

	@ContentChild( NgcDrawerLazyDirective ) public lazyContent: NgcDrawerLazyDirective;

	@Input() public label: string;
	@Input() public bgColor: string;
	@Input() @DefaultValue() @CoerceNumber() public renderDelay: number = 225;
	@Input() @CoerceBoolean() public opened: boolean;
	@Input() @CoerceCssPixel() public width: string;
	@Input() @CoerceCssPixel() public paddingVertical: string;
	@Input() @CoerceCssPixel() public paddingHorizontal: string;
	@Input() @CoerceCssPixel() public paddingTop: string;
	@Input() @CoerceCssPixel() public paddingBottom: string;
	@Input() @CoerceCssPixel() public paddingLeft: string;
	@Input() @CoerceCssPixel() public paddingRight: string;
	@Input() @DefaultValue() public position: NgcDrawerPosition = 'left';

	@Output() public openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	public isSliding: boolean;
	public isRendered: boolean;

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 * @param {ChangeDetectorRef} _cdRef
	 */
	constructor( public elementRef: ElementRef, private _cdRef: ChangeDetectorRef ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		changes.opened && this._render();
	}

	/**
	 * @return {void}
	 */
	public toggle() {
		this.opened = !this.opened;

		this._render();
		this.openedChange.emit( this.opened );
	}

	/**
	 * @return {void}
	 */
	private _render() {
		if ( this.isRendered || !this.opened ) return;

		setTimeout( () => {
			this.isRendered = true;

			this._cdRef.markForCheck();
		}, this.renderDelay );
	}

}
