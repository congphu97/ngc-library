import {
	Component, TemplateRef, ViewChild,
	ContentChild, Input, ChangeDetectionStrategy,
	AfterViewInit, AfterContentInit, ChangeDetectorRef,
	OnDestroy
} from '@angular/core';

import { NgcMenuHeaderTitleComponent } from '../menu-header-title/ngc-menu-header-title.component';

import { NgcMenuHeaderDirective } from './ngc-menu-header.directive';

@Component({
	selector		: 'ngc-menu-header',
	templateUrl		: './ngc-menu-header.html',
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcMenuHeaderComponent implements AfterViewInit, AfterContentInit, OnDestroy {

	@ViewChild( TemplateRef, { static: true } ) private _templateRef: TemplateRef<any>;

	@ContentChild( NgcMenuHeaderDirective ) private _menuHeader: NgcMenuHeaderDirective;
	@ContentChild( NgcMenuHeaderTitleComponent ) public menuHeaderTitle: NgcMenuHeaderTitleComponent;

	public templateRef: TemplateRef<any> = null;

	private _classList: string = null;

	@Input( 'class' )
	get classList(): string { return this._classList; }
	set classList( classes: string ) { this._classList = classes; }

	/**
	 * @constructor
	 * @param {ChangeDetectorRef} _cdRef
	 */
	constructor( private _cdRef: ChangeDetectorRef ) {}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		setTimeout( () => {
			this.templateRef ||= this._templateRef;

			this._cdRef.markForCheck();
		} );
	}

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		setTimeout( () => {
			this.templateRef ||= this._menuHeader?.templateRef;

			this._cdRef.markForCheck();
		} );
	}

	/**
	 * @constructor
	 */
	ngOnDestroy() {
		this.templateRef = null;
	}

}
