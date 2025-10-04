import {
	Component, Input, ViewChild,
	TemplateRef, ContentChild, ChangeDetectionStrategy
} from '@angular/core';

import { DefaultValue, CoerceBoolean, CoerceNumber } from '@core';

@Component({
	selector		: 'ngc-dropdown-item',
	templateUrl		: './ngc-dropdown-item.pug',
	host			: { class: 'ngc-dropdown-item' },
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcDropdownItemComponent {

	@ViewChild( TemplateRef, { static: true } ) public templateRef: TemplateRef<any>;

	@ContentChild( 'ngcDropdownItemPrefix' ) public prefixTemp: TemplateRef<any>;
	@ContentChild( 'ngcDropdownItemSuffix' ) public suffixTemp: TemplateRef<any>;

	@Input() public value: any;
	@Input() public context: any;
	@Input() public label: string;
	@Input() public display: string;
	@Input() public color: string;
	@Input() public icon: string;
	@Input() public dotColor: string;
	@Input( 'class' ) public classes: string;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @DefaultValue() @CoerceBoolean() public truncate: boolean = true;
	@Input() @DefaultValue() @CoerceNumber() public truncateLimitLine: number = 2;

	public parent: unknown;

}
