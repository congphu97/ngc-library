import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ngc-radio-group',
  templateUrl: './ngc-radio-group.component.html',
  styleUrls: ['./ngc-radio-group.component.scss']
})
export class NgcRadioGroupComponent implements OnInit, OnChanges, ControlValueAccessor {

	@Input() public label: string;
	@Input() ngModel: any;
	@Input() disabeld: boolean;

  	constructor() { }

  	ngOnInit(): void { }

	public writeValue(obj: any) {
		console.log( obj );
	};
	public registerOnChange(fn: any) {
		console.log( fn );

	};

	public registerOnTouched (fn: any) {
		console.log( fn );
	};

	public setDisabledState(isDisabled: boolean) {
		console.log( isDisabled );

	};

	public ngOnChanges(changes: SimpleChanges): void {
		console.log( changes );

	}

}
