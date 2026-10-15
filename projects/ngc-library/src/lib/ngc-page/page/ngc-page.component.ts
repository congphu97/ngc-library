import {
	Component, ViewEncapsulation, Input,
	ContentChild, ViewChild, ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';

import { DetectScrollDirective, CoerceBoolean } from '@core';
import { NgcScrollBarDirective, INgcScrollBarMode } from '../../ngc-scroll-bar';
import { NgcPageHeaderDirective } from '../page-header/ngc-page-header.directive';
import { NgcPageContentDirective } from '../page-content/ngc-page-content.directive';

@Component({
	selector		: 'ngc-page',
	templateUrl		: './ngc-page.html',
	styleUrls		: [ './ngc-page.scss' ],
	host			: { class: 'ngc-page' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcPageComponent {

	@HostBinding( 'style.--header-padding-top' )
	get styleHeaderPaddingTop(): string { return this.headerPaddingTop; }

	@HostBinding( 'style.--header-padding-bottom' )
	get styleHeaderPaddingBottom(): string { return this.headerPaddingBottom; }

	@HostBinding( 'style.--header-padding-left' )
	get styleHeaderPaddingLeft(): string { return this.headerPaddingLeft; }

	@HostBinding( 'style.--header-padding-right' )
	get styleHeaderPaddingRight(): string { return this.headerPaddingRight; }

	@HostBinding( 'style.--content-padding-top' )
	get styleContentPaddingTop(): string { return this.contentPaddingTop; }

	@HostBinding( 'style.--content-padding-bottom' )
	get styleContentPaddingBottom(): string { return this.contentPaddingBottom; }

	@HostBinding( 'style.--content-padding-left' )
	get styleContentPaddingLeft(): string { return this.contentPaddingLeft; }

	@HostBinding( 'style.--content-padding-right' )
	get styleContentPaddingRight(): string { return this.contentPaddingRight; }

	@HostBinding( 'class.ngc-page--stretch' )
	get classStretch(): boolean { return this.stretch; }

	@HostBinding( 'class.ngc-page--scrolling' )
	get classScrolling(): boolean { return this.isScrolling; }

	@ViewChild( DetectScrollDirective ) public scroller: DetectScrollDirective;
	@ViewChild( NgcScrollBarDirective ) public scrollBar: NgcScrollBarDirective;

	@ContentChild( NgcPageHeaderDirective ) public pageHeader: NgcPageHeaderDirective;
	@ContentChild( NgcPageContentDirective ) public pageContent: NgcPageContentDirective;

	@Input() @CoerceBoolean() public stretch: boolean;
	@Input() @CoerceBoolean() public suppressScrollX: boolean;
	@Input() @CoerceBoolean() public suppressScrollY: boolean;
	@Input() public scrollBarMode: INgcScrollBarMode;

	public isScrolling: boolean;

	get headerPaddingTop(): string {
		return this.pageHeader?.paddingTop || this.pageHeader?.paddingVertical;
	}

	get headerPaddingBottom(): string {
		return this.pageHeader?.paddingBottom || this.pageHeader?.paddingVertical;
	}

	get headerPaddingLeft(): string {
		return this.pageHeader?.paddingLeft || this.pageHeader?.paddingHorizontal;
	}

	get headerPaddingRight(): string {
		return this.pageHeader?.paddingRight || this.pageHeader?.paddingHorizontal;
	}

	get contentPaddingTop(): string {
		return this.pageContent?.paddingTop || this.pageContent?.paddingVertical;
	}

	get contentPaddingBottom(): string {
		return this.pageContent?.paddingBottom || this.pageContent?.paddingVertical;
	}

	get contentPaddingLeft(): string {
		return this.pageContent?.paddingLeft || this.pageContent?.paddingHorizontal;
	}

	get contentPaddingRight(): string {
		return this.pageContent?.paddingRight || this.pageContent?.paddingHorizontal;
	}

}
