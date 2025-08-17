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
import { WGCPageComponent } from '../wgc-page';
import { WGCMenuComponent } from '../wgc-menu';
import { WGCTabGroupComponent } from '../wgc-tabs';
import { WGCGridComponent } from '../wgc-grid';

export type WGCIAvatarMode = 'auto' | 'text' | 'photo' | 'icon';
export type WGCIAvatarSize = 'xlarge' | 'large' | 'medium' | 'small';

export interface WGCIAvatarOptions {
	characters?: number;
	labelColor?: string;
	size?: string;
}

export interface WGCIAvatar {
	photo?: string;
	color?: string;
	icon?: string;
	mode?: WGCIAvatarMode;
}

@Unsubscriber()
@Component({
	selector		: 'wgc-avatar',
	templateUrl		: './wgc-avatar.pug',
	styleUrls		: [ './wgc-avatar.scss' ],
	host			: { class: 'wgc-avatar' },
	providers		: [ WGCPageComponent, WGCMenuComponent, WGCTabGroupComponent, WGCGridComponent ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class WGCAvatarComponent implements OnChanges, AfterViewInit {

	@HostBinding( 'style.--avatar-color' )
	get styleColor(): string { return this.avatar?.color; }

	@HostBinding( 'style.--avatar-size' )
	get styleSize(): string { return this.size; }

	@HostBinding( 'style.--avatar-label-color' )
	get styleLabelColor(): string { return this.parsedLabelColor; }

	@HostBinding( 'class.wgc-avatar--auto' )
	get classAuto(): boolean { return this.avatar?.color === 'auto'; }

	@Input() public label: string;
	@Input() public labelColor: string;
	@Input() @DefaultValue() @CoerceCssPixel() public size: string | WGCIAvatarSize = 'small';
	@Input() public defaultPhoto: string;
	@Input() public errorPhoto: string;
	@Input() @DefaultValue() @CoerceNumber() public characters: number = 2;
	@Input() @DefaultValue() public lazy: boolean = true;
	@Input() @DefaultValue() public avatar: WGCIAvatar = { mode: 'auto', color: 'auto' };
	@Input() public scrolling$: Subject<any>;

	public scroll$: Observable<any>;
	public parsedLabel: string;
	public parsedLabelColor: string;
	public isPhotoLoaded$: Observable<boolean>;

	/**
	 * @constructor
	 * @param {WGCPageComponent} pageComp
	 * @param {WGCGridComponent} gridComp
	 * @param {WGCMenuComponent} menuComp
	 * @param {WGCTabGroupComponent} tabGroupComp
	 * @param {ElementRef} _elementRef
	 */
	constructor(
		@Optional() @Inject( WGCPageComponent ) public pageComp: WGCPageComponent,
		@Optional() @Inject( WGCGridComponent ) public gridComp: WGCGridComponent,
		@Optional() @Inject( WGCMenuComponent ) public menuComp: WGCMenuComponent,
		@Optional() @Inject( WGCTabGroupComponent ) public tabGroupComp: WGCTabGroupComponent,
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
	 * @param {WGCIAvatar} avatar
	 * @param {WGCIAvatarOptions} options
	 * @return {string}
	 */
	public static parseAvatar( label: string, avatar: WGCIAvatar, options?: WGCIAvatarOptions ): string {
		const avatarMode: string = avatar?.mode || 'auto';
		const avatarColor: string = avatar?.color || 'auto';
		const avatarIcon: string = avatar?.icon;
		const avatarPhoto: string = avatar?.photo;

		label = WGCAvatarComponent.parseLabel( label, options?.characters );
		label = ( avatarMode === 'icon' ? new EmojiPipe().transform( avatarIcon ) : undefined ) || label;

		const labelColor: string = options?.labelColor || WGCAvatarComponent.parseLabelColor( avatarColor );
		const size: string = options?.size || 'unset';
		const labelEl: string = `<div class="wgc-avatar__label">${label}</div>`;
		const imgEl: string = avatarPhoto && avatarMode === 'photo' ? `<img class="wgc-avatar__image" src="${avatarPhoto}" />` : '';
		const avatarClass: string = avatarColor !== 'auto' ? 'wgc-avatar' : 'wgc-avatar wgc-avatar--auto';

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
		this.size && this._elementRef.nativeElement.classList.add( 'wgc-avatar-' + this.size );

		this.scroll$ = merge(
			this.scrolling$,
			fromEvent( window, 'scroll' ),
			fromEvent( this.menuComp?.scrollBar?.elementRef?.nativeElement, 'scroll' ),
			fromEvent( this.tabGroupComp?.scrollBar?.elementRef?.nativeElement, 'scroll' ),
			fromEvent( this.gridComp?.scrollBar?.elementRef?.nativeElement, 'scroll' ),
			fromEvent( this.pageComp?.scrollBar?.elementRef?.nativeElement, 'scroll' )
		);
	}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.label ) this.parsedLabel = WGCAvatarComponent.parseLabel( this.label, this.characters );

		if ( changes.avatar ) {
			this.avatar = { ...this.avatar, mode: this.avatar?.mode || 'auto', color: this.avatar?.color || 'auto' };
			this.parsedLabelColor = this.labelColor || WGCAvatarComponent.parseLabelColor( this.avatar.color );
			this.isPhotoLoaded$ = this._checkPhotoLoaded( this.avatar.photo );
		}
	}

	/**
	 * @param {WGCIAvatarMode} mode
	 * @return {boolean}
	 */
	@Memoize()
	public isAutoMode( mode: WGCIAvatarMode ): boolean {
		return mode === 'auto';
	}

	/**
	 * @param {WGCIAvatarMode} mode
	 * @return {boolean}
	 */
	@Memoize()
	public isPhotoMode( mode: WGCIAvatarMode ): boolean {
		return mode === 'photo';
	}

	/**
	 * @param {WGCIAvatarMode} mode
	 * @return {boolean}
	 */
	@Memoize()
	public isIconMode( mode: WGCIAvatarMode ): boolean {
		return mode === 'icon';
	}

	/**
	 * @param {WGCIAvatarMode} mode
	 * @return {boolean}
	 */
	@Memoize()
	public isTextMode( mode: WGCIAvatarMode ): boolean {
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
