import { Component, Input, HostBinding, HostListener, ViewChild, ElementRef, AfterViewInit, AfterContentInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import _ from 'lodash';
import { NgcTooltipDirective } from '../ngc-tooltip.directive'

const checkTextNoWrap: ( text: string ) => boolean = _.memoize(( text: string ): boolean => {
	return _.chain( text ).trim().value().search( ' ' ) !== -1;
});

@Component({
  selector: 'ngc-truncate',
  templateUrl: './ngc-truncate.html',
  styleUrls: ['./ngc-truncate.scss']
})
export class NgcTruncateComponent implements AfterViewInit, AfterContentInit, OnDestroy {

	@HostBinding( 'style.--truncate-line' )
	get styleLine(): number { return this.internalLimitLine; }

	@HostBinding( 'class.wgc-truncate--single-line' )
	get classSingleLine(): boolean { return this.internalLimitLine === 1; }

	@HostBinding( 'class.wgc-truncate--disabled' )
	get classDisabled(): boolean { return this.disabled || this.limitLine < 0; }

	@HostBinding( 'class.wgc-truncate--empty' )
	get classEmpty(): boolean { return this.isEmpty; }

	@ViewChild( 'wrapperEle', { static: true } ) public wrapperEle: ElementRef<HTMLSpanElement>;

	@Input() public limitLine: number = 2;
	@Input() public disabled: boolean;
	@Input() public tooltip: any;
	@Input() public ngcTooltip: NgcTooltipDirective;

	@Input() ('tooltip' ) public wgcTruncate: any;

	public internalTooltip: any;
	public internalLimitLine: number;
	public isEmpty: boolean;

	private _checkTextOverDebounce: ReturnType<typeof _.debounce>
		= _.debounce( this._checkTextOver.bind( this ), 500 );
	private _resizeObserver: ResizeObserver = new ResizeObserver( this._checkTextOverDebounce.bind( this ) );
	private _mutationObserver: MutationObserver = new MutationObserver( this._checkTextOverDebounce.bind( this ) );

	get textEle(): HTMLElement {
		const ele: HTMLElement = this.wrapperEle?.nativeElement;
		const firstChild: HTMLElement = ( ele.firstChild as HTMLElement );

		return !firstChild
			|| firstChild.nodeType === Node.COMMENT_NODE
			|| firstChild.nodeType === Node.TEXT_NODE
			|| !firstChild.innerText.length
			? ele : firstChild;
	}

	get content(): string { return this.textEle.innerText || ''; }

	/**
	 * @constructor
	 * @param {ChangeDetectorRef} _cdRef
	 */
	constructor( private _cdRef: ChangeDetectorRef ) {}

	@HostListener( 'mousemove' )
	public triggerMouseMove() {
		this.internalTooltip = this._checkTextOver() ? ( this.tooltip || this.content ) : undefined;
		console.log( this.internalTooltip)
		this._cdRef.markForCheck();
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		// Listen size changes
		this._resizeObserver.observe( this.wrapperEle.nativeElement );

		// Listen text changes
		this._mutationObserver.observe( this.wrapperEle.nativeElement, { childList: true, subtree: true } );
	}

	/**
	 * @constructor
	 */
	ngAfterContentInit() {
		this._checkTextOver();
		this._checkTextOverDebounce(); // Fix on safari
	}

	/**
	 * @constructor
	 */
	ngOnDestroy() {
		this._checkTextOverDebounce.cancel();
		this._resizeObserver.disconnect();
		this._mutationObserver.disconnect();
	}

	/**
	 * @return {boolean}
	 */
	private _checkTextOver(): boolean {
		let isTextOver: boolean = false;

		this.isEmpty = !this.content.length;
		this.internalLimitLine = this.limitLine;

		if ( !this.isEmpty ) {
			this.internalLimitLine = checkTextNoWrap( this.content ) ? Number( this.limitLine ) : 1;

			const clientHeight: number = this.textEle.clientHeight;
			const scrollHeight: number = this.textEle.scrollHeight;

			isTextOver = clientHeight < scrollHeight;
		}

		this._cdRef.markForCheck();

		return isTextOver;
	}

}
