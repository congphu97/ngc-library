import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngc-radio',
  templateUrl: './ngc-radio.component.html',
  styleUrls: ['./ngc-radio.component.scss']
})
export class NgcRadioComponent implements OnInit {

  @Input() public color: string;
	@Input() public width: string;
	@Input() public minWidth: string;
	@Input() public maxWidth: string;
	@Input() public height: string;
	@Input() public minHeight: string;
	@Input() public maxHeight: string;
	@Input() public messageOnly: boolean;

	public message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
