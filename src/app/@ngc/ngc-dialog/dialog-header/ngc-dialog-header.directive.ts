import { Directive, Input } from '@angular/core';

import { CoerceBoolean } from '@core';

@Directive({ selector: '[ngcDialogHeader]', exportAs: 'ngcDialogHeader' })
export class NgcDialogHeaderDirective {

	@Input() @CoerceBoolean() public divider: boolean;
	@Input() @CoerceBoolean() public boxShadow: boolean;

}
