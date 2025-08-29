import {
	Component, ViewEncapsulation, Input,
	ElementRef, AfterViewInit, SimpleChanges,
	OnChanges, HostBinding, ChangeDetectionStrategy
} from '@angular/core';

import { AliasOf, DefaultValue, ContrastPipe } from '@core';

export type WGCIBadgePositionMode = 'default' | 'inline' | 'absolute';

@Component({
	selector		: 'ngc-badge, [ngcBadge]',
	templateUrl		: './ngc-badge.html',
	styleUrls		: [ './ngc-badge.scss' ],
	host			: { class: 'ngc-badge' },
	providers		: [ ContrastPipe ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcBadgeComponent implements AfterViewInit, OnChanges {

	@HostBinding( 'style.--badge-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--badge-text-color' )
	get styleTextColor(): string { return this.textColor; }

	@HostBinding( 'class.ngc-badge--pos-inline' )
	get classPosInline(): boolean { return this.positionMode === 'inline'; }

	@HostBinding( 'class.ngc-badge--pos-absolute' )
	get classPosAbsolute(): boolean { return this.positionMode === 'absolute'; }


	@HostBinding( 'style.--button-border-color' )
	get styleBorderColor(): string { return this.background; }

	@Input() public count: string;
	@Input() public color: string;
	@Input() public background: string;
	@Input() public textColor: string;
	@Input() @DefaultValue() public positionMode: WGCIBadgePositionMode = 'default';

	@Input() @AliasOf( 'count' ) public wgcBadge: string;

	private _bkTextColor: string;

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 * @param {ContrastPipe} _contrastPipe
	 */
	constructor( private _elementRef: ElementRef, private _contrastPipe: ContrastPipe ) {}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this.color && this._elementRef.nativeElement.classList.add( 'ngc-' + this.color );
		this.background && this._elementRef.nativeElement.classList.add( 'ngc-background-' + this.background );
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.textColor ) this._bkTextColor = this.textColor;
		if ( changes.color ) this.textColor = this._bkTextColor || this._contrastPipe.transform( this.color );
	}

}
