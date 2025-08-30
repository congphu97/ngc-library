import { Injectable, InjectionToken, Injector, ViewContainerRef, StaticProvider } from '@angular/core';
import { OverlayRef, Overlay, PositionStrategy, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal, ComponentType } from '@angular/cdk/portal';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, pairwise } from 'rxjs/operators';
import moment from 'moment-timezone';
import _ from 'lodash';


import { NgcDialogContainerComponent, NgcIDialogPagerType } from '../dialog-container/ngc-dialog-container.component';
import { NgcToastService } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';

export const NGC_DIALOG_DATA: InjectionToken<any> = new InjectionToken<any>( 'Ngc_DIALOG_DATA' );
export const NGC_DIALOG_REF: InjectionToken<NgcIDialogRef> = new InjectionToken<NgcIDialogRef>( 'Ngc_DIALOG_REF' );

export interface NgcIDialogRef {
	uniqKey: string;
	container: NgcDialogContainerComponent;
	config: NgcIDialogConfig;
	isFreezing: boolean;
	isFullscreen: boolean;
	close: ( data?: any ) => void;
	freeze: () => void;
	unfreeze: () => void;
	fullscreen: () => void;
	exitFullscreen: () => void;
	pagerClick: ( type: NgcIDialogPagerType ) => void;
	enablePager: ( type?: NgcIDialogPagerType ) => void;
	disablePager: ( type?: NgcIDialogPagerType ) => void;
	showPager: ( type?: NgcIDialogPagerType ) => void;
	hidePager: ( type?: NgcIDialogPagerType ) => void;
	afterOpened: () => Subject<ComponentType<any>>;
	afterClosed: () => Subject<any>;
	afterFreezed: () => Subject<void>;
	afterUnfreezed: () => Subject<void>;
	afterFullscreen: () => Subject<void>;
	afterExitFullscreen: () => Subject<void>;
	afterPagerClicked: () => Subject<NgcIDialogPagerType>;
	onBeforeClose?: ( ...args ) => any;
	onBeforeAutoClose?: ( ...args ) => any;
}

export interface NgcIDialogConfig {
	height?: string;
	minHeight?: string;
	maxHeight?: string;
	width?: string;
	minWidth?: string;
	maxWidth?: string;
	uniqKey?: string;
	panelClass?: string;
	backdropClass?: string;
	hasBackdrop?: boolean;
	autoClose?: boolean;
	fullscreen?: boolean;
	pager?: boolean;
	viewContainerRef?: ViewContainerRef;
	data?: IObject;
}

let overlayRefLookup: { [ uniqKey: string ]: OverlayRef } = {};
let dialogRefLookup: { [ uniqKey: string ]: NgcIDialogRef } = {};

@Injectable()
export class NgcDialogService {

	public opened$: Subject<ComponentType<any>> = new Subject<ComponentType<any>>();
	public closed$: Subject<any> = new Subject<any>();
	public freezed$: Subject<void> = new Subject<void>();
	public unfreezed$: Subject<void> = new Subject<void>();
	public fullscreen$: Subject<void> = new Subject<void>();
	public exitFullscreen$: Subject<void> = new Subject<void>();
	public pagerClicked$: Subject<NgcIDialogPagerType> = new Subject<NgcIDialogPagerType>();

	private _defaultConfig: NgcIDialogConfig = { autoClose: true };
	private _overlayRef: OverlayRef;
	private _dialogRef: NgcIDialogRef;

	/**
	 * @constructor
	 * @param {Overlay} _overlay
	 * @param {Injector} _injector
	 * @param {Router} _router
	 * @param {NgcToastService} _ngcToastService
	 */
	constructor(
		private _overlay: Overlay,
		private _injector: Injector,
		private _router: Router,
		private _ngcToastService: NgcToastService
	) {
		// On router events changes
		this._router.events
		.pipe(
			filter( ( event: NavigationStart ) => event instanceof NavigationStart ),
			map( ( event: NavigationStart ) => event.url.split( '?' )[ 0 ] ),
			pairwise()
		)
		.subscribe( ( results: string[] ) => results[ 0 ] !== results[ 1 ] && this.closeAll() );
	}

	/**
	 * @param {ComponentType} component
	 * @param {NgcIDialogConfig} config
	 * @return {NgcIDialogRef}
	 */
	public open( component: any, config?: NgcIDialogConfig ): NgcIDialogRef {
		config = { ...this._defaultConfig, ...config };

		const uniqKey: string = component.DIALOG_UNIQ_KEY || config.uniqKey || String( +moment() );
		const overlayRef: OverlayRef = this._createOverlayRef( config, uniqKey );
		const dialogRef: NgcIDialogRef = this._createDialogRef( config, uniqKey );
		const containerPortal: ComponentPortal<NgcDialogContainerComponent>
			= new ComponentPortal( NgcDialogContainerComponent, config.viewContainerRef );
		const instance: NgcDialogContainerComponent = overlayRef.attach( containerPortal ).instance;
		const detachments: Observable<void> = overlayRef.detachments();

		detachments.subscribe( () => {
			this._markAllSubjectsAsComplete( dialogRef );

			( detachments as Subject<void> ).complete();
		} );

		this._overlayRef = overlayRefLookup[ uniqKey ] = overlayRef;
		this._dialogRef = dialogRefLookup[ uniqKey ] = dialogRef;

		if ( _.isFunction( component ) ) {
			const componentPortal: ComponentPortal<ComponentType<any>>
				= new ComponentPortal( component, instance.viewContainerRef, this._createInjector( config.data, dialogRef ) );

			instance.attachComponentPortal( componentPortal );
		} else {
			const templatePortal: TemplatePortal
				= new TemplatePortal( component, instance.viewContainerRef, { data: config.data, dialogRef } );

			instance.attachTemplatePortal( templatePortal );
		}

		instance.isPreviousPagerDisplayed = instance.isNextPagerDisplayed = config.pager;
		instance.isFreezing = dialogRef.isFreezing;
		instance.isFullscreen = dialogRef.isFullscreen;
		// instance.open = this.open.bind( this );
		instance.close = ( data?: any ) => this.close( data, uniqKey );
		instance.freeze = () => this.freeze( uniqKey );
		instance.unfreeze = () => this.unfreeze( uniqKey );
		instance.fullscreen = () => this.fullscreen( uniqKey );
		instance.exitFullscreen = () => this.exitFullscreen( uniqKey );
		instance.pagerClick = ( type: NgcIDialogPagerType ) => this.pagerClick( type, uniqKey );

		// Bind instance to dialog ref
		dialogRef.container = instance;

		// Open fullscreen
		config.fullscreen && this.fullscreen();

		// Close all toasts to avoid conflict
		this._ngcToastService.closeAll();

		// Emit opened event
		setTimeout( () => {
			const afterOpened$: Subject<ComponentType<any>> = dialogRef.afterOpened();

			afterOpened$.next( component );
			afterOpened$.complete();
			this.opened$.next( component );
		} );

		return dialogRef;
	}

	/**
	 * @param {any} data
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public close( data?: any, uniqKey?: string ) {
		const overlayRef: OverlayRef = this._getOverlayRef( uniqKey );

		if ( !overlayRef ) return;

		const dialogRef: NgcIDialogRef = this._getDialogRef( uniqKey );

		if ( !dialogRef || dialogRef.isFreezing ) return;

		if ( _.isFunction( dialogRef.onBeforeClose ) ) data = dialogRef.onBeforeClose( data, uniqKey );

		const afterClosed$: Subject<ComponentType<any>> = dialogRef.afterClosed();

		// dialogRef.isFullscreen = dialogRef.container.isFullscreen = false;

		afterClosed$.next( data );
		afterClosed$.complete();
		this.closed$.next( data );

		overlayRef.detach();
	}

	/**
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public freeze( uniqKey?: string ) {
		const dialogRef: NgcIDialogRef = this._getDialogRef( uniqKey );

		if ( !dialogRef ) return;

		dialogRef.isFreezing = dialogRef.container.isFreezing = true;

		dialogRef.afterFreezed().next();
		this.freezed$.next();
	}

	/**
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public unfreeze( uniqKey?: string ) {
		const dialogRef: NgcIDialogRef = this._getDialogRef( uniqKey );

		if ( !dialogRef ) return;

		dialogRef.isFreezing = dialogRef.container.isFreezing = false;

		dialogRef.afterUnfreezed().next();
		this.unfreezed$.next();
	}

	/**
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public fullscreen( uniqKey?: string ) {
		const overlayRef: OverlayRef = this._getOverlayRef( uniqKey );
		const dialogRef: NgcIDialogRef = this._getDialogRef( uniqKey );

		if ( !overlayRef || !dialogRef ) return;

		dialogRef.isFullscreen = dialogRef.container.isFullscreen = true;

		overlayRef.addPanelClass( 'ngc-dialog-panel--fullscreen' );
		dialogRef.afterFullscreen().next();
		this.fullscreen$.next();
	}

	/**
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public exitFullscreen( uniqKey?: string ) {
		const overlayRef: OverlayRef = this._getOverlayRef( uniqKey );
		const dialogRef: NgcIDialogRef = this._getDialogRef( uniqKey );

		if ( !overlayRef || !dialogRef ) return;

		dialogRef.isFullscreen = dialogRef.container.isFullscreen = false;

		overlayRef.removePanelClass( 'ngc-dialog-panel--fullscreen' );
		dialogRef.afterExitFullscreen().next();
		this.exitFullscreen$.next();
	}

	/**
	 * @param {NgcIDialogPagerType} type
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public pagerClick( type: NgcIDialogPagerType, uniqKey?: string ) {
		const dialogRef: NgcIDialogRef = this._getDialogRef( uniqKey );

		if ( !dialogRef ) return;

		dialogRef.afterPagerClicked().next( type );
		this.pagerClicked$.next( type );
	}

	/**
	 * @param {NgcIDialogPagerType} type
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public enablePager( type?: NgcIDialogPagerType, uniqKey?: string ) {
		this._getDialogRef( uniqKey )?.container?.enablePager( type );
	}

	/**
	 * @param {NgcIDialogPagerType} type
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public disablePager( type?: NgcIDialogPagerType, uniqKey?: string ) {
		this._getDialogRef( uniqKey )?.container?.disablePager( type );
	}

	/**
	 * @param {NgcIDialogPagerType} type
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public showPager( type?: NgcIDialogPagerType, uniqKey?: string ) {
		this._getDialogRef( uniqKey )?.container?.showPager( type );
	}

	/**
	 * @param {NgcIDialogPagerType} type
	 * @param {string} uniqKey
	 * @return {void}
	 */
	public hidePager( type?: NgcIDialogPagerType, uniqKey?: string ) {
		this._getDialogRef( uniqKey )?.container?.hidePager( type );
	}

	/**
	 * @return {void}
	 */
	public closeAll() {
		_.forEach( overlayRefLookup, ( overlayRef: OverlayRef ) => { overlayRef.detach(); } );

		overlayRefLookup = {};
		dialogRefLookup = {};
	}

	/**
	 * @param {NgcIDialogConfig} config
	 * @param {string} uniqKey
	 * @return {OverlayRef}
	 */
	private _createOverlayRef( config?: NgcIDialogConfig, uniqKey?: string ): OverlayRef {
		const hasBackdrop: boolean = config?.hasBackdrop;
		const minWidth: string = config?.minWidth;
		const minHeight: string = config?.minHeight;
		const positionStrategy: PositionStrategy = this._overlay
		.position()
		.global()
		.centerHorizontally()
		.centerVertically();
		const overlayConfig: OverlayConfig = new OverlayConfig({
			positionStrategy,
			hasBackdrop		: hasBackdrop !== undefined ? hasBackdrop : true,
			backdropClass	: [ 'ngc-dialog-backdrop', config?.backdropClass ],
			panelClass		: [ 'ngc-dialog-panel', config?.panelClass ],
			width			: config?.width,
			minWidth		: parseFloat( minWidth ) < window.innerWidth ? minWidth : undefined,
			maxWidth		: config?.maxWidth,
			height			: config?.height,
			minHeight		: parseFloat( minHeight ) < window.innerHeight ? minHeight : undefined,
			maxHeight		: config?.maxHeight,
		});
		const overlayRef: OverlayRef = this._overlay.create( overlayConfig );

		// Catch keyboard events on menu
		overlayRef
		.keydownEvents()
		.pipe( takeUntil( overlayRef.detachments() ) )
		.subscribe( ( event: KeyboardEvent ) => {
			if ( event.key !== 'Escape' ) return;

			event.stopPropagation();
			event.preventDefault();

			const dialogRef: NgcIDialogRef = this._getDialogRef( uniqKey );

			if ( dialogRef.isFullscreen ) {
				this.exitFullscreen();
				return;
			}

			config.autoClose && this._autoClose( uniqKey );
		} );

		// On backdrop click
		overlayRef
		.backdropClick()
		.pipe( takeUntil( overlayRef.detachments() ) )
		.subscribe( () => config.autoClose && this._autoClose( uniqKey ) );
		/** relate issue to close( null )
		 * https://bitbucket.org/workgotcom/frontend/pull-requests/1892
		 */

		return overlayRef;
	}

	/**
	 * @param {IObject} data
	 * @param {NgcIDialogRef} dialogRef
	 * @return {Injector}
	 */
	private _createInjector( data: IObject, dialogRef: NgcIDialogRef ): Injector {
		const providers: StaticProvider[] = [
			{ provide: NGC_DIALOG_DATA, useValue: data },
			{ provide: NGC_DIALOG_REF, useValue: dialogRef },
		];

		return Injector.create({ providers, parent: this._injector });
	}

	/**
	 * @param {NgcIDialogConfig} config
	 * @param {string} uniqKey
	 * @return {NgcIDialogRef}
	 */
	private _createDialogRef( config?: NgcIDialogConfig, uniqKey?: string ): NgcIDialogRef {
		const opened$: Subject<ComponentType<any>> = new Subject<ComponentType<any>>();
		const closed$: Subject<any> = new Subject<any>();
		const freezed$: Subject<void> = new Subject<void>();
		const unfreezed$: Subject<void> = new Subject<void>();
		const fullscreen$: Subject<void> = new Subject<void>();
		const exitFullscreen$: Subject<void> = new Subject<void>();
		const pagerClicked$: Subject<NgcIDialogPagerType> = new Subject<NgcIDialogPagerType>();

		return {
			config, uniqKey,
			container			: null,
			isFreezing			: false,
			isFullscreen		: false,
			close				: ( data?: any ) => this.close( data, uniqKey ),
			freeze				: () => this.freeze( uniqKey ),
			unfreeze			: () => this.unfreeze( uniqKey ),
			fullscreen			: () => this.fullscreen( uniqKey ),
			exitFullscreen		: () => this.exitFullscreen( uniqKey ),
			pagerClick			: ( type: NgcIDialogPagerType ) => this.pagerClick( type, uniqKey ),
			enablePager			: ( type?: NgcIDialogPagerType ) => this.enablePager( type, uniqKey ),
			disablePager		: ( type?: NgcIDialogPagerType ) => this.disablePager( type, uniqKey ),
			showPager			: ( type?: NgcIDialogPagerType ) => this.showPager( type, uniqKey ),
			hidePager			: ( type?: NgcIDialogPagerType ) => this.hidePager( type, uniqKey ),
			afterOpened			: (): Subject<ComponentType<any>> => opened$,
			afterClosed			: (): Subject<any> => closed$,
			afterFreezed		: (): Subject<void> => freezed$,
			afterUnfreezed		: (): Subject<void> => unfreezed$,
			afterFullscreen		: (): Subject<void> => fullscreen$,
			afterExitFullscreen	: (): Subject<void> => exitFullscreen$,
			afterPagerClicked	: (): Subject<NgcIDialogPagerType> => pagerClicked$,
		};
	}

	/**
	 * @param {string} uniqKey
	 * @return {OverlayRef}
	 */
	private _getOverlayRef( uniqKey?: string ): OverlayRef {
		return uniqKey ? overlayRefLookup[ uniqKey ] : this._overlayRef;
	}

	/**
	 * @param {string} uniqKey
	 * @return {NgcIDialogRef}
	 */
	private _getDialogRef( uniqKey?: string ): NgcIDialogRef {
		return uniqKey ? dialogRefLookup[ uniqKey ] : this._dialogRef;
	}

	/**
	 * @param {string} uniqKey
	 * @return {void}
	 */
	private _autoClose( uniqKey: string ) {
		const dialogRef: NgcIDialogRef = this._getDialogRef( uniqKey );
		const data: any = _.isFunction( dialogRef.onBeforeAutoClose )
			? dialogRef.onBeforeAutoClose( uniqKey )
			: null;

		this.close( data, uniqKey );
	}

	/**
	 * @param {NgcIDialogRef} dialogRef
	 * @return {void}
	 */
	private _markAllSubjectsAsComplete( dialogRef: NgcIDialogRef ) {
		if ( !dialogRef ) return;

		dialogRef.afterOpened().complete();
		dialogRef.afterClosed().complete();
		dialogRef.afterFreezed().complete();
		dialogRef.afterUnfreezed().complete();
		dialogRef.afterFullscreen().complete();
		dialogRef.afterExitFullscreen().complete();
		dialogRef.afterPagerClicked().complete();
	}

}
