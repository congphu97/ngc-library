import { Component, Input, OnInit, HostBinding } from '@angular/core';

export enum progressBarMode  {
	INLINE = 0,
	STATUS = 1,
}

export type IProgressBarMode = keyof typeof progressBarMode;

@Component({
  selector: 'ngc-progress-bar',
  templateUrl: './ngc-progress-bar.html',
  styleUrls: ['./ngc-progress-bar.scss']
})
export class NgcProgressBarComponent implements OnInit {

	@HostBinding( 'style.--ngc-progress-bar__percent' )
	get classVertical(): number { return this.percent; }
	
	@Input() min: number = 0;
	@Input() max: number;
	@Input() value: number;
	@Input() mode: IProgressBarMode;
	@Input() statusText: string;
	@Input() labelText: string;

	public percent: number = 0;
	public progressBarMode = progressBarMode;

	constructor() { }

	ngOnInit() {
		if (this.value && this.max) {
			this.percent = ( this.value / this.max * 100 );
		}
	}

	changeRange(event) {
		this.percent = ( event?.target?.valueAsNumber / this.max * 100 );
	}
}

