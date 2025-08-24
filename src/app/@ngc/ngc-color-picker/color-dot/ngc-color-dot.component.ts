import {
	Component, ViewEncapsulation, Input,
	Output, EventEmitter, ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';

import { DefaultValue, CoerceBoolean, CoerceCssPixel, AliasOf } from '@core';

@Component({
	selector		: 'ngc-color-dot, [ngcColorDot]',
	templateUrl		: './ngc-color-dot.html',
	styleUrls		: [ './ngc-color-dot.scss' ],
	host			: { class: 'ngc-color-dot' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcColorDotComponent {

	@HostBinding( 'style.--color-dot-color' )
	get styleColor(): string{ return this.color; }

	@HostBinding( 'style.--color-dot-size' )
	get styleSize(): string{ return this.size; }

	@HostBinding( 'class.ngc-color-dot--hidden' )
	get classHidden(): boolean { return !this.visible; }

	@HostBinding( 'class.ngc-color-dot--circle' )
	get classCircle(): boolean { return this.circle; }

	@Input() public color: string;
	@Input() @CoerceCssPixel() public size: string;
	@Input() @CoerceBoolean() public circle: boolean;
	@Input() @CoerceBoolean() public viewOnly: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public visible: boolean = true;
	@Input() @AliasOf( 'color' ) public ngcColorDot: string;

	@Output() public colorChange: EventEmitter<string> = new EventEmitter<string>();

	/**
	 * @param {string} color
	 * @return {void}
	 */
	public onColorPicked( color: string ) {
		this.color = color;

		this.colorChange.emit( this.color );
	}

}
