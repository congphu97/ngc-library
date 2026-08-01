import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { CoerceNumber, CoerceBoolean, DefaultValue } from '@core';
import { COLOR } from '@resources';

@Component({
	selector		: 'ngc-loading',
	templateUrl		: './ngc-loading.html',
	styleUrls		: [ './ngc-loading.scss' ],
	host			: {
		class: 'ngc-loading',
		'[class.ngc-loading--full-page]': 'fullPage'
	},
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcLoadingComponent {

	@Input() @DefaultValue() public color: string = COLOR.INFO;
	@Input() @DefaultValue() public backgroundColor: string = COLOR.BORDER;
	@Input() @DefaultValue() @CoerceNumber() public size: number = 10;
	@Input() @CoerceBoolean() public fullPage: boolean;

}
