import { Component, OnInit } from '@angular/core';
import { NgcToastService, NgcToastType } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';

@Component({
    selector: 'guideline',
    templateUrl: './guideline.html',
})
export class GuidelineComponent implements OnInit {
	title = 'project';

	constructor( private _ngcToastService: NgcToastService ) {};

    ngOnInit() {};

	public openToast( type: NgcToastType ) {
		this._ngcToastService.show('abc','adcasdasdsadasd', { type, position: 'top-right' });
	}

}
