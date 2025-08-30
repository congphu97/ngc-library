import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { NGC_DIALOG_DATA, NGC_DIALOG_REF, NgcIDialogRef } from '@app/@ngc/ngc-dialog';


@Component({
	selector		: 'my-dialog',
	templateUrl		: './my-dialog.html',
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class MyDialogComponent {

	/**
	 * @constructor
	 * @param {IObject} data
	 * @param {Dialog} dialogRef
	 */
	constructor(
		@Inject( NGC_DIALOG_DATA ) public data: IObject,
		@Inject( NGC_DIALOG_REF ) public dialogRef: NgcIDialogRef,
	) {}

}
