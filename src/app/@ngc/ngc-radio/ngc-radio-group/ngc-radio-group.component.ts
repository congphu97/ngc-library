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
	};
	public registerOnChange(fn: any) {

	};

	public registerOnTouched (fn: any) {
	};

	public setDisabledState(isDisabled: boolean) {

	};

	public ngOnChanges(changes: SimpleChanges): void {
		
	}

}
