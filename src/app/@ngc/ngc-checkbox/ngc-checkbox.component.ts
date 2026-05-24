import { Component, Input, OnInit, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ngc-checkbox',
	templateUrl: './ngc-checkbox.html',
	styleUrls: ['./ngc-checkbox.component.scss'],
	encapsulation: ViewEncapsulation.None,
	host: {
		'[style.--checkbox-color]'       : 'color',
		'[style.--checkbox-label-color]' : 'labelColor',
		class: 'ngc-checkbox',
	}
})
export class NgcCheckboxComponent implements OnInit {

	@Input() public label: string;
	@Input() public color: string;
	@Input() public labelColor: string;
	@Input() public ngModel: boolean;
	@Input() public disabled: boolean;
	@Input() public readonly: boolean;

	@HostBinding( 'class.ngc-checkbox--checked' )
	get isChecked(): boolean { return !!this.ngModel; }

	@HostBinding( 'class.ngc-checkbox--disabled' )
	get isDisabled(): boolean { return !!this.disabled; }

	@HostBinding( 'class.ngc-checkbox--readonly' )
	get isReadonly(): boolean { return !!this.readonly; }

	@Output() public ngModelChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor() { }

	@HostListener( 'click', [ '$event' ] )
	public triggerClick( event: MouseEvent ) {
		if ( this.disabled || this.readonly ) return;
		event.stopPropagation();
		this.toggle();
	}

	@HostListener( 'keydown.space', [ '$event' ] )
	public triggerKeyDownSpace( event: KeyboardEvent ) {
		if ( this.disabled || this.readonly ) return;
		event.stopPropagation();
		this.toggle();
	}

	ngOnInit(): void {}

	public toggle() {
		this.ngModel = !this.ngModel;
		this.ngModelChange.emit( this.ngModel );
	}
}
