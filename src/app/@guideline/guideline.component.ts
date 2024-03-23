import { Component, OnInit } from '@angular/core';
import { NgcToastService, NgcToastType } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';
import { Socket } from 'ngx-socket-io';

@Component({
    selector: 'guideline',
    templateUrl: './guideline.html',
})
export class GuidelineComponent implements OnInit {
	title = 'project';

	constructor( private _ngcToastService: NgcToastService, private _socket: Socket ) {};

    ngOnInit( ) {
		this.connectionSocket();
	};

	public openToast( type: NgcToastType ) {
		this._ngcToastService.show('abc','adcasdasdsadasd', { type, position: 'top-right' });
	}
	
	public connectionSocket() {
		this._socket.emit('message','123');
		this._socket.on('hello', (event) => console.log('hello', event ))
	}
}
