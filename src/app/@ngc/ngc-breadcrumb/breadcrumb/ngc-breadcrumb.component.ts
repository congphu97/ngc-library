import {
	Component, ViewEncapsulation, ContentChildren,
	QueryList, ChangeDetectionStrategy
} from '@angular/core';

import { NgcBreadcrumbItemComponent } from '../breadcrumb-item/ngc-breadcrumb-item.component';

@Component({
	selector		: 'ngc-breadcrumb',
	templateUrl		: './ngc-breadcrumb.html',
	styleUrls		: [ './ngc-breadcrumb.scss' ],
	host			: { class: 'ngc-breadcrumb' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcBreadcrumbComponent {

	@ContentChildren( NgcBreadcrumbItemComponent, { descendants: true } ) public breadcrumbItems: QueryList<NgcBreadcrumbItemComponent>;

}
