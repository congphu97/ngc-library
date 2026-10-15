import {
	Component, ViewEncapsulation, Input,
	ChangeDetectionStrategy, HostBinding
} from '@angular/core';

import { CoerceBoolean } from '@core';

@Component({
	selector		: 'ngc-drawer-container, [ngcDrawerContainer]',
	templateUrl		: './ngc-drawer-container.html',
	styleUrls		: [ './ngc-drawer-container.scss' ],
	host			: { class: 'ngc-drawer-container' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcDrawerContainerComponent {

	@HostBinding( 'class.ngc-drawer-container--stretch' )
	get classStretch(): boolean { return this.stretch; }

	@Input() @CoerceBoolean() public stretch: boolean;

}
