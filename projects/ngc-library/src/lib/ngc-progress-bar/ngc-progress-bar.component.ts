import { Component, Input, OnInit, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

export enum progressBarMode  {
	INLINE = 0,
	STATUS = 1,
	PERCENT_INLINE = 2,
	SAVINGS = 3,
}

export type IProgressBarMode = keyof typeof progressBarMode | progressBarMode | 'percent-inline' | 'savings';

@Component({
  selector: 'ngc-progress-bar',
  templateUrl: './ngc-progress-bar.html',
  styleUrls: ['./ngc-progress-bar.scss']
})
export class NgcProgressBarComponent implements OnInit, OnChanges {

	@HostBinding( 'style.--ngc-progress-bar__percent' )
	get classVertical(): number { return this.percent; }
	
	@Input() min: number = 0;
	@Input() max: number;
	@Input() value: number;
	@Input() mode: IProgressBarMode;
	@Input() statusText: string;
	@Input() labelText: string;
	@Input() targetText: string;
	@Input() currentValueText: string;

	public percent: number = 0;
	public progressBarMode = progressBarMode;

	constructor() { }

	ngOnInit() {
		this.calculatePercent();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.value || changes.max) {
			this.calculatePercent();
		}
	}

	private calculatePercent() {
		if (this.value !== undefined && this.max !== undefined && this.max > 0) {
			this.percent = Math.min(100, Math.max(0, (this.value / this.max) * 100));
		} else {
			this.percent = 0;
		}
	}

	changeRange(event) {
		const val = event?.target?.valueAsNumber;
		this.value = val;
		this.calculatePercent();
	}

	get isInlineMode(): boolean {
		return this.mode === 0 || this.mode === 'INLINE' || !this.mode;
	}

	get isStatusMode(): boolean {
		return this.mode === 1 || this.mode === 'STATUS';
	}

	get isPercentInlineMode(): boolean {
		return this.mode === 2 || this.mode === 'PERCENT_INLINE' || this.mode === 'percent-inline';
	}

	get isSavingsMode(): boolean {
		return this.mode === 3 || this.mode === 'SAVINGS' || this.mode === 'savings';
	}

	public getModeName(): string {
		if (this.isInlineMode) return 'inline';
		if (this.isStatusMode) return 'status';
		if (this.isPercentInlineMode) return 'percent-inline';
		if (this.isSavingsMode) return 'savings';
		return 'inline';
	}
}
