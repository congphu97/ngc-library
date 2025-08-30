import { Injectable } from '@angular/core';
import { OverlayRef, Overlay, PositionStrategy, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgcToastGroupComponent } from '../toast-group/ngc-toast-group.component';

export type NgcToastPosition = 'bottom' | 'top' | 'top-left' | 'top-right'| 'bottom-left' | 'bottom-right';
export type NgcToastType = 'warning' | 'info' | 'danger' | 'success';
export interface NgcToastButton {
    title: string;
    onClicked(): Function;
}

export interface NgcIToastConfig {
    icon?: string;
	color?: string;
	textColor?: string;
    duration?: number;
    type?: NgcToastType;
    position?: NgcToastPosition;
    buttons?: NgcToastButton[];
	canClose?: boolean;
	translate?: boolean;
}

@Injectable({providedIn: 'root'})
export class NgcToastService {

	private _topOverlayRef: OverlayRef;
	private _bottomOverlayRef: OverlayRef;
	// private _topPortal: ComponentPortal<NgcToastGroupComponent>;
	private _bottomPortal: ComponentPortal<NgcToastGroupComponent>;
	// private _topInstance: NgcToastGroupComponent;
	private _bottomInstance: NgcToastGroupComponent;
	// private _defaultConfig: NgcIToastConfig = {
	// 	position	: 'bottom',
	// 	canClose	: true,
	// 	translate	: true,
	// 	duration	: 5000,
	// };


    constructor( private _overlay: Overlay ) { }

    show( title: string, description?: string, config?: NgcIToastConfig ) {
		this._bottomOverlayRef = this._bottomOverlayRef || this._createOverlayRef( config.position || 'bottom' );

		if ( !this._bottomOverlayRef.hasAttached() ) {
			// Create toast portal
			this._bottomPortal = this._bottomPortal || this._createPortal();

			// Attach toast
			this._bottomInstance = this._bottomInstance || this._bottomOverlayRef.attach( this._bottomPortal ).instance;

          console.log( this._bottomInstance)

		}

        return this._bottomInstance.createToast( title, description, config );
    }

		/**
	 * @return {void}
	 */
	public closeAll() {
		// this._topInstance = this._bottomInstance = undefined;

		this._topOverlayRef?.detach();
		this._bottomOverlayRef?.detach();
	}
	
    /**
	 * @param {NgcToastPosition} position
	 * @return {OverlayRef}
	 */
	private _createOverlayRef( position: NgcToastPosition ): OverlayRef {
		const positionStrategy: PositionStrategy = this._overlay.position().global().centerHorizontally();

		switch( position ) {
			case "top-left":
				positionStrategy[ 'top' ]( 0 );
				positionStrategy[ 'left' ]( 0 );
				break;
			case "top-right":
				positionStrategy[ 'top' ]( 0 );
				positionStrategy[ 'right' ]( 0 );
				break;
			case "bottom-left":
				positionStrategy[ 'bototm' ]( 0 );
				positionStrategy[ 'left' ]( 0 );
				break;
			case "bottom-right":
				positionStrategy[ 'bottom' ]( 0 );
				positionStrategy[ 'right' ]( 0 );
				break;
			default:
				positionStrategy[ position ]( 0 );
		}

		return this._overlay.create( new OverlayConfig({ positionStrategy }) );
	}

	/**
	 * @return {ComponentPortal}
	 */
	private _createPortal(): ComponentPortal<NgcToastGroupComponent> {
		return new ComponentPortal( NgcToastGroupComponent );
	}
}