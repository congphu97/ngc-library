import {
	Component, TemplateRef, ViewChild,
	ContentChild, Input, ChangeDetectionStrategy,
	AfterViewInit, AfterContentInit, ChangeDetectorRef,
	OnDestroy
} from '@angular/core';

import { NgcMenuContentDirective } from './ngc-menu-content.directive';

@Component({
	selector		: 'ngc-menu-content',
	templateUrl		: './ngc-menu-content.html',
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcMenuContentComponent implements AfterViewInit, AfterContentInit, OnDestroy {

	@ViewChild( TemplateRef, { static: true } ) private _templateRef: TemplateRef<any>;

	@ContentChild( NgcMenuContentDirective ) private _menuContent: NgcMenuContentDirective;

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
			this.templateRef ||= this._menuContent?.templateRef;

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
