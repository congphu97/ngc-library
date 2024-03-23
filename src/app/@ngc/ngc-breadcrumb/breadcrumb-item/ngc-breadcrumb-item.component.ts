import { Component, Input, ViewChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngc-breadcrumb-item',
  templateUrl: './ngc-breadcrumb-item.html',
  styleUrls: ['./ngc-breadcrumb-item.scss']
})
export class NgcBreadcrumbItemComponent {

	@ViewChild( TemplateRef, { static: true } ) public templateRef: TemplateRef<any>;

	@Input() public commands: any[];
	@Input() public extras: NavigationExtras;
	@Input() public disabled: boolean;
	@Input() public truncate: boolean = true;
	@Input() public truncateLimitLine: number = 1;

	@Output() public navigated: EventEmitter<void> = new EventEmitter<void>();

	get isActive(): boolean { return !!this.commands?.length; }

	/**
	 * @constructor
	 * @param {Router} _router
	 */
	constructor( private _router: Router ) {}

	/**
	 * @return {void}
	 */
	public navigate() {
		if ( !this.commands ) return;

		this._router.navigate( this.commands, this.extras );
		this.navigated.emit();
	}

}
