import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { CoerceNumber, DefaultValue } from '@core';
import { COLOR } from '@resources';

@Component({
	selector		: 'ngc-loading',
	templateUrl		: './ngc-loading.html',
	styleUrls		: [ './ngc-loading.scss' ],
	host			: { class: 'ngc-loading' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcLoadingComponent {

	@Input() @DefaultValue() public color: string = COLOR.INFO;
	@Input() @DefaultValue() public backgroundColor: string = COLOR.BORDER;
	@Input() @DefaultValue() @CoerceNumber() public size: number = 10;

}
