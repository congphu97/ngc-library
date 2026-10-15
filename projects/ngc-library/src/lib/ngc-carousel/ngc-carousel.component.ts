import {
	Component, ViewEncapsulation, Input,
	ViewChildren, QueryList, ElementRef,
	OnChanges, SimpleChanges, Output,
	EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef,
	TemplateRef, HostBinding, AfterViewInit
} from '@angular/core';

import {
	DefaultValue, CoerceBoolean, CoerceCssPixel,
	CoerceNumber, Unsubscriber
} from '@core';
import { NgcDialogService, NgcIDialogRef } from '../ngc-dialog';

export type NgcICarouselMode = 'auto' | 'cover' | 'contain';

@Unsubscriber()
@Component({
	selector		: 'ngc-carousel',
	templateUrl		: './ngc-carousel.html',
	styleUrls		: [ './ngc-carousel.scss' ],
	host			: { class: 'ngc-carousel' },
	providers		: [ NgcDialogService ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcCarouselComponent implements OnChanges, AfterViewInit {

	@HostBinding( 'style.--carousel-size' )
	get styleSize(): string { return this.size; }

	@HostBinding( 'style.--carousel-real-size.px' )
	get styleRealSize(): number { return this.realSize; }

	@HostBinding( 'style.--carousel-position-x' )
	get stylePositionX(): string { return this.positionX; }

	@HostBinding( 'style.--carousel-position-y' )
	get stylePositionY(): string { return this.positionY; }

	@HostBinding( 'style.--carousel-mode' )
	get styleMode(): NgcICarouselMode { return this.mode; }

	@ViewChildren( 'thumbnail' ) public thumbnailList: QueryList<ElementRef>;

	@Input() @CoerceCssPixel() public size: string;
	@Input() @DefaultValue() public photo: string[] = [];
	@Input() @DefaultValue() @CoerceNumber() public delay: number = 300;
	@Input() @DefaultValue() @CoerceNumber() public selectedIndex: number = 0;
	@Input() public interval: number;
	@Input() @CoerceBoolean() public canClose: boolean;
	@Input() @CoerceBoolean() public canFullscreen: boolean;
	@Input() public positionX: string;
	@Input() public positionY: string;
	@Input() public mode: NgcICarouselMode;

	@Output() public selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
	@Output() public fullscreen: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() public closed: EventEmitter<void> = new EventEmitter<void>();

	public isFullscreen: boolean;
	public realSize: number;

	private _interval: NodeJS.Timeout;
	private _dialogRef: NgcIDialogRef;

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 * @param {ChangeDetectorRef} _cdRef
	 * @param {NgcDialogService} _ngcDialogService
	 */
	constructor( public elementRef: ElementRef, private _cdRef: ChangeDetectorRef, private _ngcDialogService: NgcDialogService ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		changes.interval && this._startInterval();
		changes.photo && this.selectImage( this.selectedIndex );
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		setTimeout( () => this.realSize = this.elementRef.nativeElement.clientHeight );
	}

	/**
	 * @return {void}
	 */
	public selectPrevImage() {
		const previousIndex: number = this.selectedIndex - 1;

		this.selectImage( previousIndex >= 0 ? previousIndex : this.photo.length - 1 );
	}

	/**
	 * @return {void}
	 */
	public selectNextImage() {
		const nextIndex: number = this.selectedIndex + 1;

		this.selectImage( nextIndex < this.photo.length ? nextIndex : 0 );
	}

	/**
	 * @param {number} index
	 * @return {void}
	 */
	public selectImage( index: number ) {
		setTimeout( () => {
			const target: ElementRef = this.thumbnailList?.toArray()[ index ];

			target?.nativeElement.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });

			this.selectedIndex = target ? index : 0;

			this.selectedIndexChange.emit( this.selectedIndex );
			this._cdRef.markForCheck();
		}, this.delay );
	}

	/**
	 * @param {TemplateRef<any>} dialog
	 * @return {void}
	 */
	public toggleFullscreen( dialog: TemplateRef<any> ) {
		if ( this.isFullscreen ) {
			this._dialogRef.close();
			return;
		}

		this._dialogRef = this._ngcDialogService.open( dialog, { fullscreen: true } );

		this._dialogRef
		.afterExitFullscreen()
		.subscribe( () => this._dialogRef.close() );

		this._dialogRef
		.afterOpened()
		.subscribe( () => {
			this.fullscreen.emit( this.isFullscreen = true );
			this._cdRef.markForCheck();
		} );

		this._dialogRef
		.afterClosed()
		.subscribe( () => {
			this.fullscreen.emit( this.isFullscreen = false );
			this._cdRef.markForCheck();
		} );
	}

	/**
	 * @return {void}
	 */
	public close() {
		this._dialogRef?.close();
		this.closed.emit();
	}

	/**
	 * @return {void}
	 */
	private _startInterval() {
		clearInterval( this._interval );

		this._interval = setInterval( this.selectNextImage.bind( this ), this.interval );
	}

}
