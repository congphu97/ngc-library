import {
	Component, Input, ViewEncapsulation,
	Output, EventEmitter, ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import _ from 'lodash';

import { DefaultValue, CoerceNumber } from '@core';

export type NgcIEmojiPickerMode = 'default' | 'inline';
export type NgcIEmojiPickerPosition = 'above' | 'below';
export type NgcIEmojiData = EmojiData;

@Component({
	selector		: 'ngc-emoji-picker',
	templateUrl		: './ngc-emoji-picker.html',
	styleUrls		: [ './ngc-emoji-picker.scss' ],
	host			: { class: 'ngc-emoji-picker' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcEmojiPickerComponent {

	@HostBinding( 'class.ngc-emoji-picker--inline' )
	get classInline(): boolean { return this.mode === 'inline'; }

	@Input() @DefaultValue() @CoerceNumber() public perLine: number = 12;
	@Input() @DefaultValue() public mode: NgcIEmojiPickerMode = 'default';

	@Output() public picked: EventEmitter<NgcIEmojiData> = new EventEmitter<NgcIEmojiData>();

	public close: ( event?: Event ) => void;
	public onPicked: ( event: NgcIEmojiData ) => void;

	/**
	 * @param {NgcIEmojiData} emoji
	 * @return {void}
	 */
	public pick( emoji: NgcIEmojiData ) {
		this.picked.emit( emoji );
		_.isFunction( this.onPicked ) && this.onPicked( emoji );
	}

}
