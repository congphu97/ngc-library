import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngc-example',
  templateUrl: './ngc-example.html',
  styleUrls: ['./ngc-example.scss']
})
export class NgcTruncate implements OnInit {

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
