import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngc-tooltip',
  templateUrl: './ngc-tooltip.component.html',
  styleUrls: ['./ngc-tooltip.component.scss']
})
export class NgcTooltipComponent implements OnInit {

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
