import { Injectable } from '@angular/core';
import { OverlayRef, Overlay, PositionStrategy, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import _ from 'lodash';

import { NgcIToastConfig, NgcIToastPosition } from './ngc-toast.component';
import { NgcToastGroupComponent } from '../toast-group/ngc-toast-group.component';

@Injectable()
export class NgcToastService {

	private _topOverlayRef: OverlayRef;
	private _bottomOverlayRef: OverlayRef;
	private _topPortal: ComponentPortal<NgcToastGroupComponent>;
	private _bottomPortal: ComponentPortal<NgcToastGroupComponent>;
	private _topInstance: NgcToastGroupComponent;
	private _bottomInstance: NgcToastGroupComponent;
	private _defaultConfig: NgcIToastConfig = {
		position	: 'bottom',
		canClose	: true,
		translate	: true,
		duration	: 5000,
	};

	/**
	 * @constructor
	 * @param {Overlay} _overlay
	 */
	constructor( private _overlay: Overlay ) {}

	/**
	 * @param {string} title
	 * @param {any} arg
	 * @param {NgcIToastConfig} config
	 * @return {number}
	 */
	public show( title: string, arg?: any, config?: NgcIToastConfig ): number {
		const description: string = !_.isObject( arg ) ? arg as string : undefined;

		config = _.isObject( arg ) ? arg as NgcIToastConfig : config;
		config = { ...this._defaultConfig, ...config };

		// Create toast to group
		return config?.position === 'top'
			? this._showOnTop( title, description, config )
			: this._showOnBottom( title, description, config );
	}

	/**
	 * @param {number} id
	 * @return {void}
	 */
	public close( id: number ) {
		this._topInstance?.deleteToast( id );
		this._bottomInstance?.deleteToast( id );
	}

	/**
	 * @return {void}
	 */
	public closeAll() {
		this._topInstance = this._bottomInstance = undefined;

		this._topOverlayRef?.detach();
		this._bottomOverlayRef?.detach();
	}

	/**
	 * @param {string} title
	 * @param {any} arg
	 * @param {NgcIToastConfig} config
	 * @return {number}
	 */
	public info( title: string, arg?: any, config?: NgcIToastConfig ): number {
		const description: string = !_.isObject( arg ) ? arg as string : undefined;

		config = _.isObject( arg ) ? arg as NgcIToastConfig : config;

		return this.show( title, description, { ...config, type: 'info' } );
	}

	/**
	 * @param {string} title
	 * @param {any} arg
	 * @param {NgcIToastConfig} config
	 * @return {number}
	 */
	public success( title: string, arg?: any, config?: NgcIToastConfig ): number {
		const description: string = !_.isObject( arg ) ? arg as string : undefined;

		config = _.isObject( arg ) ? arg as NgcIToastConfig : config;

		return this.show( title, description, { ...config, type: 'success' } );
	}

	/**
	 * @param {string} title
	 * @param {any} arg
	 * @param {NgcIToastConfig} config
	 * @return {number}
	 */
	public warning( title: string, arg?: any, config?: NgcIToastConfig ): number {
		const description: string = !_.isObject( arg ) ? arg as string : undefined;

		config = _.isObject( arg ) ? arg as NgcIToastConfig : config;

		return this.show( title, description, { ...config, type: 'warning' } );
	}

	/**
	 * @param {string} title
	 * @param {any} arg
	 * @param {NgcIToastConfig} config
	 * @return {number}
	 */
	public danger( title: string, arg?: any, config?: NgcIToastConfig ): number {
		const description: string = !_.isObject( arg ) ? arg as string : undefined;

		config = _.isObject( arg ) ? arg as NgcIToastConfig : config;

		return this.show( title, description, { ...config, type: 'danger' } );
	}

	/**
	 * @param {string} title
	 * @param {string} description
	 * @param {NgcIToastConfig} config
	 * @return {number}
	 */
	private _showOnTop( title: string, description?: string, config?: NgcIToastConfig ): number {
		// Create overlay ref
		this._topOverlayRef = this._topOverlayRef || this._createOverlayRef( 'top' );

		if ( !this._topOverlayRef.hasAttached() ) {
			// Create toast portal
			this._topPortal = this._topPortal || this._createPortal();

			// Attach toast
			this._topInstance = this._topInstance || this._topOverlayRef.attach( this._topPortal ).instance;
		}

		// Create toast to group
		return this._topInstance.createToast( title, description, config );
	}

	/**
	 * @param {string} title
	 * @param {string} description
	 * @param {NgcIToastConfig} config
	 * @return {number}
	 */
	private _showOnBottom( title: string, description?: string, config?: NgcIToastConfig ): number {
		// Create overlay ref
		this._bottomOverlayRef = this._bottomOverlayRef || this._createOverlayRef( 'bottom' );

		if ( !this._bottomOverlayRef.hasAttached() ) {
			// Create toast portal
			this._bottomPortal = this._bottomPortal || this._createPortal();

			// Attach toast
			this._bottomInstance = this._bottomInstance || this._bottomOverlayRef.attach( this._bottomPortal ).instance;
		}

		// Create toast to group
		return this._bottomInstance.createToast( title, description, config );
	}

	/**
	 * @param {NgcIToastPosition} position
	 * @return {OverlayRef}
	 */
	private _createOverlayRef( position: NgcIToastPosition ): OverlayRef {
		const positionStrategy: PositionStrategy = this._overlay.position().global().centerHorizontally();

		positionStrategy[ position ]( 0 );

		return this._overlay.create( new OverlayConfig({ positionStrategy }) );
	}

	/**
	 * @return {ComponentPortal}
	 */
	private _createPortal(): ComponentPortal<NgcToastGroupComponent> {
		return new ComponentPortal( NgcToastGroupComponent );
	}

}
