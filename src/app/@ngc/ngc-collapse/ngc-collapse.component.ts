import {
	Component, ViewEncapsulation, Input,
	Output, EventEmitter, ChangeDetectionStrategy,
	HostBinding,
} from '@angular/core';

import { CoerceBoolean, CoerceCssPixel } from '@core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'ngc-collapse',
	templateUrl: './ngc-collapse.html',
	styleUrls: ['./ngc-collapse.scss'],
	host: { class: 'ngc-collapse' },
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('toggleHeight', [
			transition(':enter', [
				style({ height: '0', opacity: 0 }),
				animate('300ms ease-out', style({ height: '*', opacity: 1 })),
			]),
			transition(':leave', [
				animate('300ms ease-in', style({ height: '0', opacity: 0 })),
			]),
		]),
	],
})
export class NgcCollapseComponent {

	@HostBinding('style.--collapse-color')
	get styleColor(): string { return this.color; }

	@HostBinding('style.--collapse-border-width')
	get styleBorderWidth(): string { return this.borderWidth; }

	@HostBinding('style.--collapse-border-color')
	get styleBorderColor(): string { return this.borderColor; }

	@HostBinding('style.--collapse-border-style')
	get styleBorderStyle(): string { return this.borderStyle; }

	@HostBinding('style.--collapse-border-radius')
	get styleBorderRadius(): string { return this.borderRadius; }

	@HostBinding('style.--collapse-active-color')
	get styleActiveColor(): string { return this.activeColor || this.color; }

	@HostBinding('style.--collapse-active-border-width')
	get styleActiveBorderWidth(): string { return this.activeBorderWidth || this.borderWidth; }

	@HostBinding('style.--collapse-active-border-color')
	get styleActiveBorderColor(): string { return this.activeBorderColor || this.borderColor; }

	@HostBinding('style.--collapse-active-border-style')
	get styleActiveBorderStyle(): string { return this.activeBorderStyle || this.borderStyle; }

	@HostBinding('style.--collapse-active-border-radius')
	get styleActiveBorderRadius(): string { return this.activeBorderRadius || this.borderRadius; }

	@HostBinding('style.--collapse-padding-top')
	get stylePaddingTop(): string { return this.contentPaddingTop || this.contentPaddingVertical; }

	@HostBinding('style.--collapse-padding-bottom')
	get stylePaddingBottom(): string { return this.contentPaddingBottom || this.contentPaddingVertical; }

	@HostBinding('style.--collapse-padding-left')
	get stylePaddingLeft(): string { return this.contentPaddingLeft || this.contentPaddingHorizontal; }

	@HostBinding('style.--collapse-padding-right')
	get stylePaddingRight(): string { return this.contentPaddingRight || this.contentPaddingHorizontal; }

	@HostBinding('class.ngc-collapse--active')
	get classActive(): boolean { return this.active; }

	@Input() public color: string;
	@Input() public iconCollapse: string;
	@Input() @CoerceCssPixel() public borderWidth: string;
	@Input() public borderColor: string;
	@Input() public borderStyle: string;
	@Input() public activeColor: string;
	@Input() @CoerceCssPixel() public activeBorderWidth: string;
	@Input() public activeBorderColor: string;
	@Input() public activeBorderStyle: string;
	@Input() public activeBorderRadius: string;
	@Input() @CoerceCssPixel() public borderRadius: string;
	@Input() @CoerceCssPixel() public contentPaddingVertical: string;
	@Input() @CoerceCssPixel() public contentPaddingHorizontal: string;
	@Input() @CoerceCssPixel() public contentPaddingTop: string;
	@Input() @CoerceCssPixel() public contentPaddingBottom: string;
	@Input() @CoerceCssPixel() public contentPaddingLeft: string;
	@Input() @CoerceCssPixel() public contentPaddingRight: string;
	@Input() @CoerceBoolean() public active: boolean;
	@Input() @CoerceBoolean() public highlight: boolean;
	@Input() @CoerceBoolean() public autoUnhighlight: boolean;

	@Output() public highlightChange: EventEmitter<boolean> = new EventEmitter<boolean>();

}
