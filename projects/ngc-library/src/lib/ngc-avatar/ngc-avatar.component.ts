import {
	Component, ViewEncapsulation, ElementRef,
	Input, AfterViewInit, OnChanges,
	Inject, SimpleChanges, ChangeDetectionStrategy,
	Optional, HostBinding
} from '@angular/core';
import {
	Subject, merge, fromEvent,
	Observable, Observer
} from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import _ from 'lodash';

import {
	ContrastPipe, EmojiPipe, Memoize,
	DefaultValue, CoerceNumber, CoerceCssPixel,
	Unsubscriber, untilCmpDestroyed
} from '@core';
import { NgcPageComponent } from '../ngc-page';
import { NgcMenuComponent } from '../ngc-menu';
import { NgcGridComponent } from '../ngc-grid';
import { NgcTabGroupComponent } from '../ngc-tabs';

export type NgcIAvatarMode = 'auto' | 'text' | 'photo' | 'icon';
export type NgcIAvatarSize = 'xlarge' | 'large' | 'medium' | 'small';

export interface NgcIAvatarOptions {
	characters?: number;
	labelColor?: string;
	size?: string;
}

export interface NgcIAvatar {
	photo?: string;
	color?: string;
	icon?: string;
	mode?: NgcIAvatarMode;
}

@Unsubscriber()
@Component({
	selector		: 'ngc-avatar',
	templateUrl		: './ngc-avatar.html',
	styleUrls		: [ './ngc-avatar.scss' ],
	host			: { class: 'ngc-avatar' },
	providers		: [ NgcPageComponent, NgcMenuComponent, NgcTabGroupComponent, NgcGridComponent ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcAvatarComponent implements OnChanges, AfterViewInit {

	@HostBinding( 'style.--avatar-color' )
	get styleColor(): string { return this.avatar?.color; }

	@HostBinding( 'style.--avatar-size' )
	get styleSize(): string { return this.size; }

	@HostBinding( 'style.--avatar-label-color' )
	get styleLabelColor(): string { return this.parsedLabelColor; }

	@HostBinding( 'class.ngc-avatar--auto' )
	get classAuto(): boolean { return this.avatar?.color === 'auto'; }

	@Input() public label: string;
	@Input() public labelColor: string;
	@Input() @DefaultValue() @CoerceCssPixel() public size: string | NgcIAvatarSize = 'small';
	@Input() public defaultPhoto: string;
	@Input() public errorPhoto: string;
	@Input() @DefaultValue() @CoerceNumber() public characters: number = 2;
	@Input() @DefaultValue() public lazy: boolean = true;
	@Input() @DefaultValue() public avatar: NgcIAvatar = { mode: 'auto', color: 'auto' };
	@Input() public scrolling$: Subject<any>;

	public scroll$: Observable<any>;
	public parsedLabel: string;
	public parsedLabelColor: string;
	public isPhotoLoaded$: Observable<boolean>;

	/**
	 * @constructor
	 * @param {NgcPageComponent} pageComp
	 * @param {NgcGridComponent} gridComp
	 * @param {NgcMenuComponent} menuComp
	 * @param {NgcTabGroupComponent} tabGroupComp
	 * @param {ElementRef} _elementRef
	 */
	constructor(
		@Optional() @Inject( NgcPageComponent ) public pageComp: NgcPageComponent,
		@Optional() @Inject( NgcGridComponent ) public gridComp: NgcGridComponent,
		@Optional() @Inject( NgcMenuComponent ) public menuComp: NgcMenuComponent,
		@Optional() @Inject( NgcTabGroupComponent ) public tabGroupComp: NgcTabGroupComponent,
		private _elementRef: ElementRef
	) {}

	/**
	 * @param {string} label
	 * @param {number} characters
	 * @return {string}
	 */
	@Memoize()
	public static parseLabel( label: string = '', characters: number = 2 ): string {
		if ( !label?.length ) return '?';

		label = _.trim( label );

		return label.search( ' ' ) === -1
			? label.substring( 0, characters )
			: _.chain( label )
			.split( ' ' )
			.slice( 0, characters )
			.map( ( item: string ) => item.charAt( 0 ) )
			.join( '' )
			.value();
	}

	/**
	 * @param {string} avatarColor
	 * @return {string}
	 */
	@Memoize()
	public static parseLabelColor( avatarColor: string ): string {
		return avatarColor ? new ContrastPipe().transform( avatarColor ) : 'unset';
	}

	/**
	 * @param {string} label
	 * @param {NgcIAvatar} avatar
	 * @param {NgcIAvatarOptions} options
	 * @return {string}
	 */
	public static parseAvatar( label: string, avatar: NgcIAvatar, options?: NgcIAvatarOptions ): string {
		const avatarMode: string = avatar?.mode || 'auto';
		const avatarColor: string = avatar?.color || 'auto';
		const avatarIcon: string = avatar?.icon;
		const avatarPhoto: string = avatar?.photo;

		label = NgcAvatarComponent.parseLabel( label, options?.characters );
		label = ( avatarMode === 'icon' ? new EmojiPipe().transform( avatarIcon ) : undefined ) || label;

		const labelColor: string = options?.labelColor || NgcAvatarComponent.parseLabelColor( avatarColor );
		const size: string = options?.size || 'unset';
		const labelEl: string = `<div class="ngc-avatar__label">${label}</div>`;
		const imgEl: string = avatarPhoto && avatarMode === 'photo' ? `<img class="ngc-avatar__image" src="${avatarPhoto}" />` : '';
		const avatarClass: string = avatarColor !== 'auto' ? 'ngc-avatar' : 'ngc-avatar ngc-avatar--auto';

		return `
			<div
				class="${avatarClass}"
				style="--avatar-color: ${avatarColor}; --avatar-label-color: ${labelColor}; --avatar-size: ${size};">
				${labelEl}
				${imgEl}
			</div>
		`;
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		this.size && this._elementRef.nativeElement.classList.add( 'ngc-avatar-' + this.size );

		this.scroll$ = merge(
			this.scrolling$,
			fromEvent( window, 'scroll' ),
			// fromEvent( this.menuComp?.scrollBar?.elementRef?.nativeElement, 'scroll' ),
			// fromEvent( this.tabGroupComp?.scrollBar?.elementRef?.nativeElement, 'scroll' ),
			// fromEvent( this.gridComp?.scrollBar?.elementRef?.nativeElement, 'scroll' ),
			// fromEvent( this.pageComp?.scrollBar?.elementRef?.nativeElement, 'scroll' )
		);
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.label ) this.parsedLabel = NgcAvatarComponent.parseLabel( this.label, this.characters );

		if ( changes.avatar ) {
			this.avatar = { ...this.avatar, mode: this.avatar?.mode || 'auto', color: this.avatar?.color || 'auto' };
			this.parsedLabelColor = this.labelColor || NgcAvatarComponent.parseLabelColor( this.avatar.color );
			this.isPhotoLoaded$ = this._checkPhotoLoaded( this.avatar.photo );
		}
	}

	/**
	 * @param {NgcIAvatarMode} mode
	 * @return {boolean}
	 */
	@Memoize()
	public isAutoMode( mode: NgcIAvatarMode ): boolean {
		return mode === 'auto';
	}

	/**
	 * @param {NgcIAvatarMode} mode
	 * @return {boolean}
	 */
	@Memoize()
	public isPhotoMode( mode: NgcIAvatarMode ): boolean {
		return mode === 'photo';
	}

	/**
	 * @param {NgcIAvatarMode} mode
	 * @return {boolean}
	 */
	@Memoize()
	public isIconMode( mode: NgcIAvatarMode ): boolean {
		return mode === 'icon';
	}

	/**
	 * @param {NgcIAvatarMode} mode
	 * @return {boolean}
	 */
	@Memoize()
	public isTextMode( mode: NgcIAvatarMode ): boolean {
		return mode === 'text';
	}

	/**
	 * @param {string} photo
	 * @return {Observable}
	 */
	@Memoize()
	private _checkPhotoLoaded( photo: string ): Observable<boolean> {
		return new Observable( ( observer: Observer<boolean> ) => {
			if ( !photo ) {
				observer.next( false );
				return;
			}

			if ( /^(data:image)/.test( photo ) ) {
				observer.next( true );
				return;
			}

			const img: HTMLImageElement = document.createElement( 'img' );

			img.src = photo;

			img.onload = () => observer.next( img.complete || img.naturalWidth > 0 );
		} ).pipe(
			takeWhile( ( loaded: boolean ) => loaded ),
			untilCmpDestroyed( this )
		);
	}

}
