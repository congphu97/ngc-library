import { Injectable, TemplateRef } from '@angular/core';
import { OverlayRef, Overlay, PositionStrategy, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, pairwise } from 'rxjs/operators';
import _ from 'lodash';

import { NgcConfirmComponent, NgcIConfirmConfig } from './ngc-confirm.component';

export interface NgcIConfirmRef {
	config: NgcIConfirmConfig;
	close: ( answer?: boolean ) => void;
	afterOpened: () => Subject<NgcConfirmComponent>;
	afterClosed: () => Subject<boolean>;
}

let overlayRefs: OverlayRef[] = [];
let confirmRefs: NgcIConfirmRef[] = [];

@Injectable()
export class NgcConfirmService {

	public opened$: Subject<NgcConfirmComponent> = new Subject<NgcConfirmComponent>();
	public closed$: Subject<boolean> = new Subject<boolean>();

	private _overlayRef: OverlayRef;
	private _confirmRef: NgcIConfirmRef;
	private _defaultConfig: NgcIConfirmConfig = {
		autoClose	: true,
		hasBackdrop	: true,
		translate	: true,
		type		: 'dialog',
	};

	/**
	 * @constructor
	 * @param {Overlay} _overlay
	 * @param {Router} _router
	 */
	constructor( private _overlay: Overlay, private _router: Router ) {
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
	 * @param {string | TemplateRef<any>} message
	 * @param {string} title
	 * @param {NgcIDialogConfig} config
	 * @return {void}
	 */
	public open( message: string | TemplateRef<any>, title?: string, config?: NgcIConfirmConfig ): NgcIConfirmRef {
		config = { ...this._defaultConfig, ...config };

		const portal: ComponentPortal<NgcConfirmComponent>
			= new ComponentPortal( NgcConfirmComponent, config.viewContainerRef );

		this._overlayRef = this._createOverlayRef( config );
		this._confirmRef = this._createConfirmRef( config );

		const detachments: Observable<void> = this._overlayRef.detachments();

		detachments.subscribe( () => {
			this._confirmRef.afterOpened().complete();
			this._confirmRef.afterClosed().complete();

			( detachments as Subject<void> ).complete();
		} );

		if ( this._overlayRef.hasAttached() ) return;

		// Close all opening confirm popups
		this.closeAll();

		overlayRefs.push( this._overlayRef );
		confirmRefs.push( this._confirmRef );

		const instance: NgcConfirmComponent = this._overlayRef.attach( portal ).instance;

		instance.message = message;
		instance.title = title;
		instance.config = config;
		instance.close = this.close.bind( this );

		setTimeout( () => {
			const afterOpened$: Subject<NgcConfirmComponent> = this._confirmRef.afterOpened();

			afterOpened$.next( instance );
			this.opened$.next( instance );

			afterOpened$.complete();
		} );

		return this._confirmRef;
	}

	/**
	 * @param {boolean} answer
	 * @return {void}
	 */
	public close( answer: boolean = false ) {
		this._confirmRef.afterClosed().next( answer );
		this.closed$.next( answer );

		this._overlayRef.detach();
	}

	/**
	 * @return {void}
	 */
	public closeAll() {
		_.forEach( overlayRefs, ( overlayRef: OverlayRef ) => { overlayRef.detach(); } );
		_.forEach( confirmRefs, ( confirmRef: NgcIConfirmRef ) => {
			confirmRef.afterOpened().complete();
			confirmRef.afterClosed().complete();
		} );

		overlayRefs = [];
		confirmRefs = [];
	}

	/**
	 * @param {NgcIDialogConfig} config
	 * @return {OverlayRef}
	 */
	private _createOverlayRef( config?: NgcIConfirmConfig ): OverlayRef {
		const isDialog: boolean = config?.type === 'dialog';
		const hasBackdrop: boolean = config?.hasBackdrop;
		const backdropClass: string = config?.backdropClass;
		const panelClass: string = config?.panelClass;
		const positionStrategy: PositionStrategy = this._overlay
		.position()
		.global()
		.centerHorizontally()
		.centerVertically();
		const overlayConfig: OverlayConfig = new OverlayConfig({
			positionStrategy, hasBackdrop,
			width			: isDialog ? '440px' : undefined,
			backdropClass	: [ isDialog ? 'ngc-dialog-backdrop' : 'ngc-confirm-backdrop', backdropClass ],
			panelClass		: [ isDialog ? 'ngc-dialog-panel' : 'ngc-confirm-panel', panelClass ],
		});
		const overlayRef: OverlayRef = this._overlay.create( overlayConfig );

		// Catch keyboard events on overlay
		overlayRef.keydownEvents()
		.pipe( takeUntil( overlayRef.detachments() ) )
		.subscribe( ( event: KeyboardEvent ) => {
			if ( event.key !== 'Escape' ) return;

			event.stopPropagation();
			event.preventDefault();
			this.close();
		} );

		// On backdrop click
		overlayRef.backdropClick()
		.pipe( takeUntil( overlayRef.detachments() ) )
		.subscribe( () => config.autoClose && this.close() );

		return overlayRef;
	}

	/**
	 * @param {NgcIDialogConfig} config
	 * @return {NgcIConfirmRef}
	 */
	private _createConfirmRef( config?: NgcIConfirmConfig ): NgcIConfirmRef {
		const opened$: Subject<NgcConfirmComponent> = new Subject<NgcConfirmComponent>();
		const closed$: Subject<boolean> = new Subject<boolean>();

		return {
			config,
			close		: this.close.bind( this ),
			afterOpened	: (): Subject<NgcConfirmComponent> => opened$,
			afterClosed	: (): Subject<boolean> => closed$,
		};
	}

}
