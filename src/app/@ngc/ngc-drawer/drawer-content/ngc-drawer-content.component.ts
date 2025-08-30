import {
	Component, ViewEncapsulation, Input,
	ChangeDetectionStrategy, HostBinding
} from '@angular/core';

import { CoerceCssPixel } from '@core';

@Component({
	selector		: 'ngc-drawer-content, [ngcDrawerContent]',
	templateUrl		: './ngc-drawer-content.html',
	styleUrls		: [ './ngc-drawer-content.scss' ],
	host			: { class: 'ngc-drawer-content' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcDrawerContentComponent {

	@HostBinding( 'style.--drawer-content-padding-top' )
	get stylePaddingTop(): string { return this.paddingTop || this.paddingVertical; }

	@HostBinding( 'style.--drawer-content-padding-bottom' )
	get stylePaddingBottom(): string { return this.paddingBottom || this.paddingVertical; }

	@HostBinding( 'style.--drawer-content-padding-left' )
	get stylePaddingLeft(): string { return this.paddingLeft || this.paddingHorizontal; }

	@HostBinding( 'style.--drawer-content-padding-right' )
	get stylePaddingRight(): string { return this.paddingRight || this.paddingHorizontal; }

	@Input() @CoerceCssPixel() public paddingVertical: string;
	@Input() @CoerceCssPixel() public paddingHorizontal: string;
	@Input() @CoerceCssPixel() public paddingTop: string;
	@Input() @CoerceCssPixel() public paddingBottom: string;
	@Input() @CoerceCssPixel() public paddingLeft: string;
	@Input() @CoerceCssPixel() public paddingRight: string;

}
