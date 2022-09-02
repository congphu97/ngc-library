import { Component, Input, OnInit, Output, EventEmitter, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ngc-checkbox',
	templateUrl: './ngc-checkbox.html',
	styleUrls: ['./ngc-checkbox.component.scss'],
	encapsulation	: ViewEncapsulation.None,
	host: {
		'[style.--checkbox-color]'		: 'color',
		'[style.--checkbox-label-color]'	: 'labelColor',
		// '[class.ngc-checkbox--disabled]'	: 'disabled || disableControl',
		// '[class.ngc-checkbox--active]'	: 'ngModel === true',
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

	@Output() public ngModelChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor() { }

	@HostListener( 'click', [ '$event' ] )
	public triggerClick( event: MouseEvent ) {
		// if ( this.disabled || this.disableControl || this.readonly ) return; // mot improve

		if ( this.disabled || this.readonly ) return;

		event.stopPropagation();
		this.toggle();
	}

	@HostListener( 'keydown.space', [ '$event' ] )
	public triggerKeyDownSpace( event: KeyboardEvent ) {
		// if ( this.disabled || this.disableControl || this.readonly ) return; // need improve

		if ( this.disabled || this.readonly ) return;

		event.stopPropagation();
		this.toggle();
	}

	ngOnInit(): void {
	}

	public toggle() {
		this.ngModel = !this.ngModel;

		this.ngModelChange.emit( this.ngModel );
	}
}
