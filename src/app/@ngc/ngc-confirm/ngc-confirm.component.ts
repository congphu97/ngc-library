import {
	Component, ViewContainerRef, ViewEncapsulation,
	TemplateRef, ChangeDetectionStrategy, HostBinding
} from '@angular/core';

export type NgcIConfirmType = 'dialog' | 'popup';

export interface NgcIConfirm {
	message: string;
	title?: string;
	config?: NgcIConfirmConfig;
}

export interface NgcIConfirmConfig {
	data?: any;
	buttonApply?: string;
	buttonDiscard?: string;
	warning?: boolean;
	warningMessage?: string;
	translate?: boolean;
	translateParams?: IObject;
	autoClose?: boolean;
	hasBackdrop?: boolean;
	backdropClass?: string;
	panelClass?: string;
	type?: NgcIConfirmType;
	viewContainerRef?: ViewContainerRef;
	// onOk?: Function;
	// onCancel?: Function;
}

@Component({
	selector		: 'ngc-confirm',
	templateUrl		: './ngc-confirm.html',
	styleUrls		: [ './ngc-confirm.scss' ],
	host			: { class: 'ngc-confirm' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcConfirmComponent {

	@HostBinding( 'class.ngc-dialog-container' )
	get classDialogContainer() { return this.config?.type === 'dialog'; }

	public message: string | TemplateRef<any>;
	public title: string;
	public close: ( answer?: boolean ) => void;
	public config: NgcIConfirmConfig = { type: 'dialog' };

	get isMessageString(): boolean { return typeof this.message === 'string'; }

}
