import {
	Component, ViewEncapsulation, Input, Output, EventEmitter,
	ElementRef, AfterViewInit, SimpleChanges, OnChanges, HostBinding,
	ChangeDetectionStrategy
} from '@angular/core';

import { CoerceBoolean } from '@core';

@Component({
	selector		: 'ngc-alert, [ngcAlert]',
	templateUrl		: './ngc-alert.html',
	styleUrls		: [ './ngc-alert.scss' ],
	host			: { class: 'ngc-alert' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcAlertComponent implements AfterViewInit, OnChanges {

	@HostBinding( 'style.--alert-border-color' )
	get styleBorderColor(): string {
		return this.borderColor || (this.isCustomColor ? this.color : undefined);
	}

	@HostBinding( 'style.--alert-bg-color' )
	get styleBgColor(): string {
		return this.background || (this.isCustomColor ? this._hexToRgba(this.color, 0.1) : undefined);
	}

	@HostBinding( 'style.--alert-text-color' )
	get styleTextColor(): string {
		return this.textColor || (this.isCustomColor ? this.color : undefined);
	}

	@Input() public color: string;
	@Input() public textColor: string;
	@Input() public background: string;
	@Input() public borderColor: string;
	@Input() public icon: string;
	@Input() @CoerceBoolean() public closeable: boolean;

	@Output() public closed: EventEmitter<void> = new EventEmitter<void>();

	public isClosed: boolean = false;

	@HostBinding('class.ngc-alert-hidden')
	get classHidden(): boolean {
		return this.isClosed;
	}

	get isCustomColor(): boolean {
		const presets = ['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'default'];
		return !!this.color && !presets.includes(this.color);
	}

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this._applyColorClass();
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges(changes: SimpleChanges) {
		if (changes.color && !changes.color.firstChange) {
			this._applyColorClass();
		}
	}

	public close(event?: Event) {
		if (event) {
			event.stopPropagation();
			event.preventDefault();
		}
		this.isClosed = true;
		this.closed.emit();
	}

	private _applyColorClass() {
		const nativeEl = this._elementRef.nativeElement;
		// Remove existing preset classes
		const presets = ['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'default'];
		presets.forEach(p => nativeEl.classList.remove('ngc-' + p));

		if (this.color && presets.includes(this.color)) {
			nativeEl.classList.add('ngc-' + this.color);
		}
	}

	private _hexToRgba(hex: string, opacity: number): string {
		if (!hex) return '';
		if (hex.startsWith('#')) {
			let c = hex.substring(1);
			if (c.length === 3) {
				c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
			}
			const num = parseInt(c, 16);
			return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${opacity})`;
		}
		return hex;
	}

}
