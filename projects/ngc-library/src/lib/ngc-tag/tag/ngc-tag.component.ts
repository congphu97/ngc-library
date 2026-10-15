import {
	Component, ViewEncapsulation, ElementRef,
	Input, AfterViewInit, SimpleChanges,
	OnChanges, HostBinding, ChangeDetectionStrategy
} from '@angular/core';

import { ContrastPipe, DefaultValue, CoerceBoolean, CoerceNumber } from '@core';

@Component({
	selector		: 'ngc-tag',
	templateUrl		: './ngc-tag.html',
	styleUrls		: [ './ngc-tag.scss' ],
	host			: { class: 'ngc-tag' },
	providers		: [ ContrastPipe ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcTagComponent implements OnChanges, AfterViewInit {

	@HostBinding( 'style.--tag-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--tag-label-color' )
	get styleLabelColor(): string { return this.labelColor; }

	@HostBinding( 'class.ngc-tag--minimize' )
	get classMinimize(): boolean { return this.minimize; }

	@Input() public label: string;
	@Input() public labelColor: string;
	@Input() public color: string;
	@Input() @CoerceBoolean() public minimize: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public truncate: boolean = true;
	@Input() @DefaultValue() @CoerceNumber() public truncateLimitLine: number = 1;

	private _bkLabelColor: string;

	get nativeElement(): HTMLElement {
		return this._elementRef.nativeElement;
	}

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 * @param {ContrastPipe} _contrastPipe
	 */
	constructor( private _elementRef: ElementRef, private _contrastPipe: ContrastPipe ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.labelColor ) this._bkLabelColor = this.labelColor;
		if ( changes.color ) this.labelColor = this._bkLabelColor || this._contrastPipe.transform( this.color );
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this.color && this.nativeElement.classList.add( 'ngc-' + this.color );
	}

}
