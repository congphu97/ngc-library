import {
	Component, Input, ViewEncapsulation,
	Output, EventEmitter, ChangeDetectionStrategy,
	OnChanges, SimpleChanges, HostBinding
} from '@angular/core';

import { CoerceBoolean, ContrastPipe , IObject } from '@core';

export type NgcIToastType = 'default' | 'info' | 'success' | 'warning' | 'danger';
export type NgcIToastPosition = 'bottom' | 'top' | 'top-left' | 'top-right'| 'bottom-left' | 'bottom-right';


export interface NgcIToastConfig {
	icon?: string;
	color?: string;
	textColor?: string;
	duration?: number;
	canClose?: boolean;
	translate?: boolean;
	type?: NgcIToastType;
	position?: NgcIToastPosition;
	translateParams?: IObject;
	buttons?: NgcIToastButton[];
}

export interface NgcIToastButton {
	label: string;
	onClicked: () => void;
}

@Component({
	selector		: 'ngc-toast',
	templateUrl		: './ngc-toast.html',
	styleUrls		: [ './ngc-toast.scss' ],
	host			: { class: 'ngc-toast' },
	providers		: [ ContrastPipe ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcToastComponent implements OnChanges {

	@HostBinding( 'style.--toast-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--toast-text-color' )
	get styleTextColor(): string { return this.textColor; }

	@HostBinding( 'class.ngc-toast-info' )
	get classInfo(): boolean { return this.type === 'info'; }

	@HostBinding( 'class.ngc-toast-success' )
	get classSuccess(): boolean { return this.type === 'success'; }

	@HostBinding( 'class.ngc-toast-warning' )
	get classWarning(): boolean { return this.type === 'warning'; }

	@HostBinding( 'class.ngc-toast-danger' )
	get classDanger(): boolean { return this.type === 'danger'; }

	@HostBinding( 'class.ngc-toast--has-description' )
	get classHasDescription(): boolean { return !!this.description?.length; }

	@Input() public title: string;
	@Input() public description: string;
	@Input() public icon: string;
	@Input() public color: string;
	@Input() public textColor: string;
	@Input() public buttons: NgcIToastButton[];
	@Input() @CoerceBoolean() public canClose: boolean;
	@Input() @CoerceBoolean() public translate: boolean;
	@Input() public translateParams: IObject;
	@Input() public type: NgcIToastType;

	@Output() public closed: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

	private _icons: IObject<string> = { info: 'info', success: 'checkbox', warning: 'warning', danger: 'warning' };
	private _bkTextColor: string;

	get iconName(): string { return this.icon || this._icons[ this.type ]; }

	/**
	 * @constructor
	 * @param {ContrastPipe} _contrastPipe
	 */
	constructor( private _contrastPipe: ContrastPipe ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.textColor ) this._bkTextColor = this.textColor;
		if ( changes.color ) this.textColor = this._bkTextColor || this._contrastPipe.transform( this.color );
	}

}
