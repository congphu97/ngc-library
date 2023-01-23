import { Component, Input, ViewChild, TemplateRef, ContentChild } from '@angular/core';
import { NgcTabContentDirective } from '../directive/ngc-tab-content.directive';
import { NgcTabHeaderDirective } from '../directive/ngc-tab-header.directive';

@Component({
  selector: 'ngc-tab',
  templateUrl: './ngc-tab.html',
  styleUrls: ['./ngc-tab.scss']
})
export class NgcTabComponent {

	@ViewChild( TemplateRef, { static: true } ) templateRef : TemplateRef<any>;
	@ContentChild( NgcTabHeaderDirective, { static: true } ) templateHeaderDirective : NgcTabHeaderDirective;
	@ContentChild( NgcTabContentDirective, { static: true } ) templateContentDirective : NgcTabContentDirective;

	@Input() public label: string;
	@Input() public messageOnly: boolean;

	public message: string;

	get content() { return this.templateContentDirective?.templateRef || this.templateRef };
	get header() { return this.templateHeaderDirective?.templateRef };

	constructor() { }

	ngOnInit(): void {
	}

}
