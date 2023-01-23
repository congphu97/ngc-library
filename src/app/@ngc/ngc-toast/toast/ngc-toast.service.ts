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

export interface INgcToastConfig {
    icon?: string;
	color?: string;
	textColor?: string;
    duration?: number;
    type?: NgcToastType;
    position?: NgcToastPosition;
    buttons?: NgcToastButton[];
}

@Injectable({providedIn: 'root'})
export class NgcToastService {

    private _bottomPortal: ComponentPortal<NgcToastGroupComponent>;
	private _bottomInstance: NgcToastGroupComponent;
	private _bottomOverlayRef: OverlayRef;

    constructor( private _overlay: Overlay ) { }

    show( title: string, description?: string, config?: INgcToastConfig ) {
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