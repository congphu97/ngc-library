import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { COLOR } from '../@resource/color';

@Component({
  selector: 'ngc-color-picker',
  templateUrl: './ngc-color-picker.html',
  styleUrls: ['./ngc-color-picker.scss']
})
export class NgcColorPickerComponent implements OnInit {

	@Input() pickedColor: string;

	@Output() public pickedColorChange: EventEmitter<string> = new EventEmitter<string>();

	public colors: string[] = [ ...COLOR.OTHERS ];

	constructor() { }

	ngOnInit(): void {}

  handleChange($event: ColorEvent) {
    console.log($event.color);
  }

  public pickColor( color: string ) {
    
    this.pickedColorChange.emit( color );
  }

}
