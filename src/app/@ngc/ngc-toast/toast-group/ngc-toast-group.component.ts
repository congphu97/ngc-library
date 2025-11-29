import { Component } from '@angular/core';
import moment from 'moment-timezone';
import _ from 'lodash';
import { NgcIToastConfig } from '../toast/ngc-toast.component';

@Component({
  selector: 'ngc-toast-group',
  templateUrl: './ngc-toast-group.html',
})
export class NgcToastGroupComponent {

	public toasts: IObject[] = [];

	public createToast( title: string, description?: string, config?: NgcIToastConfig ) {
		const id: number = +moment();

		this.toasts.push({ id, title, description, config });

		setInterval(() => this.deleteToast( id ), config.duration || 3000 );

		return id;
	}

	public deleteToast( id: number ) {
		this.toasts = _.reject( this.toasts, { id } );
	}

}
