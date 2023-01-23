import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'ngc-icon',
    templateUrl: './ngc-icon.html',
    styleUrls: ['./ngc-icon.scss'],
})

export class NgcIconComponent implements OnInit {
    @HostBinding( 'style.--icon-color' )
	get styleColor(): string { return this.color; }

	@HostBinding( 'style.--icon-font-size' )
	get styleFontSize(): string { return this.size; }

	@HostBinding( 'style.--icon-line-height' )
	get styleLineHeight(): string { return this.size; }

    @Input() public name: string;
    @Input() public color: string;
	@Input() public size: string;

    constructor() { }

    ngOnInit() { }
}