import {
	Component, TemplateRef, ViewChild,
	Input, ChangeDetectionStrategy, AfterViewInit,
	ChangeDetectorRef, OnDestroy
} from '@angular/core';

@Component({
	selector		: 'ngc-menu-header-title',
	templateUrl		: './ngc-menu-header-title.html',
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcMenuHeaderTitleComponent implements AfterViewInit, OnDestroy {

	@ViewChild( TemplateRef, { static: true } ) private _templateRef: TemplateRef<any>;

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
	ngOnDestroy() {
		this.templateRef = null;
	}

}
