import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DefaultValue } from 'angular-core';

@Component({
	selector		: 'drag-zone',
	templateUrl		: './drag-zone.html',
	styleUrls		: [ './drag-zone.scss' ],
	host			: { class: 'drag-zone' },
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class DragZoneComponent {

	@Input() @DefaultValue() public name: string = this._translateService.instant( 'CORE.LABEL.ITEMS' );

	/**
	 * @constructor
	 * @param {TranslateService} _translateService
	 */
	constructor( private _translateService: TranslateService ) {}

}
