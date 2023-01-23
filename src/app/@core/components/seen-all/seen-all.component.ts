import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector		: 'seen-all',
	templateUrl		: './seen-all.html',
	styleUrls		: [ './seen-all.scss' ],
	host			: { class: 'seen-all' },
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class SeenAllComponent {}
