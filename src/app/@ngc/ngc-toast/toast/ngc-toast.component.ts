import {
	Component, Input, OnInit,
	Output, EventEmitter, HostBinding,
	ViewEncapsulation
} from '@angular/core';
import { NgcToastButton, NgcToastType } from './ngc-toast.service';

@Component({
  selector: 'ngc-toast',
  templateUrl: './ngc-toast.html',
  styleUrls: ['./ngc-toast.scss'],
  host			: { class: 'ngc-toast' },
encapsulation	: ViewEncapsulation.None,
// changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcToastComponent implements OnInit {
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
	@Input() public type: NgcToastType;
	@Input() public color: string;
	@Input() public textColor: string;
	@Input() public buttons: NgcToastButton[];

	@Output() public closed: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();


  	constructor() { }

  	ngOnInit(): void {}

}
