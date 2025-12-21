import {
	Component, Input, TemplateRef,
	ViewChild, ContentChild, ChangeDetectionStrategy,
	OnChanges
} from '@angular/core';
import { Subject } from 'rxjs';

import { CoerceBoolean, AliasOf } from '@core';

import { NgcTabHeaderDirective } from '../tab-header/ngc-tab-header.directive';
import { NgcTabContentDirective } from '../tab-content/ngc-tab-content.directive';

@Component({
	selector		: 'ngc-tab',
	templateUrl		: './ngc-tab.html',
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcTabComponent implements OnChanges {

	@ViewChild( TemplateRef, { static: true } ) public templateRef: TemplateRef<any>;

	@ContentChild( NgcTabHeaderDirective ) public tabHeader: NgcTabContentDirective;
	@ContentChild( NgcTabContentDirective ) public tabContent: NgcTabContentDirective;

	@Input() public label: string;
	@Input() public icon: string;
	@Input( 'class' ) public classes: string;
	@Input() @AliasOf( 'classes' ) public ngClass: string;
	@Input() @CoerceBoolean() public disabled: boolean;

	public changes$: Subject<void> = new Subject<void>();

	get header(): TemplateRef<any> { return this.tabHeader?.templateRef; }
	get content(): TemplateRef<any> { return this.tabContent?.templateRef || this.templateRef; }

	/**
	 * @constructor
	 */
	ngOnChanges() {
		this.changes$.next();
	}

}
