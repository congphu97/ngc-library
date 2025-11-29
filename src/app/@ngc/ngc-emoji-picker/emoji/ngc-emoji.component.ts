import {
	Component, Input, ViewEncapsulation,
	ChangeDetectionStrategy, HostBinding
} from '@angular/core';

import { CoerceCssPixel } from '@core';

@Component({
	selector		: 'ngc-emoji, [ngcEmoji]',
	templateUrl		: './ngc-emoji.html',
	styleUrls		: [ './ngc-emoji.scss' ],
	host			: { class: 'ngc-emoji' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcEmojiComponent {

	@HostBinding( 'style.--emoji-size' )
	get styleSize(): string { return this.size; }

	@Input() public emoji: string;
	@Input() @CoerceCssPixel() public size: string;

}
