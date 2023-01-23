import { Component } from '@angular/core';
import moment from 'moment-timezone';
import _ from 'lodash';

import { INgcToastConfig } from '../toast/ngc-toast.service';

@Component({
  selector: 'ngc-toast-group',
  templateUrl: './ngc-toast-group.html',
})
export class NgcToastGroupComponent {

	public toasts: IObject[] = [];

	public createToast( title: string, description?: string, config?: INgcToastConfig ) {
		const id: number = +moment();

		this.toasts.push({ id, title, description, config });

		setInterval(() => this.deleteToast( id ), config.duration || 3000 );

		return id;
	}

	public deleteToast( id: number ) {
		this.toasts = _.reject( this.toasts, { id } );
	}

}
