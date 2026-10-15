import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
	Directive, Input, HostListener,
	Output, EventEmitter, ViewContainerRef,
	ElementRef
} from '@angular/core';
import { NgcTooltipComponent } from '../ngc-tooltip/ngc-tooltip.component';

@Directive({ selector: '[ngcClipboardCopy]', exportAs: 'ngcClipboardCopy' })
export class NgcClipboardCopyDirective {

	@Input( 'ngcClipboardCopy' ) public clipboardCopy: string;
	@Input() public copiedMessage: string = 'Copied';
	@Input() public displayTime: number = 1500;
	@Input() public disabled: boolean;

	@Output() public copied: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

	public isCopied: boolean;

	private _overlayRef: OverlayRef;
	private _portal: ComponentPortal<any>;
	private _tooltipInstance: any;

    constructor(
        private _overlay: Overlay,
		private _vcRef: ViewContainerRef,
		private _elementRef: ElementRef,
    ) { }

    @HostListener( 'click', [ '$event' ] )
	public triggerClick( event: MouseEvent ) {
		if ( this.disabled ) return;
        console.log({event})
		event.stopPropagation();
		this._copyURLToClipboard( event );
	}

    public openTooltip() {
				// Create overlay ref
        this._overlayRef = this._overlayRef || this._createOverlayRef();

        if ( this._overlayRef.hasAttached() ) return;

        this._portal = this._portal || new ComponentPortal( NgcTooltipComponent, this._vcRef );
        this._tooltipInstance = this._overlayRef.attach( this._portal ).instance;
        this._tooltipInstance.messageOnly = true;
        this._tooltipInstance.message = this.copiedMessage;

        this._tooltipInstance.setPositionClasses( 'above' );
        setTimeout( this.closeTooltip.bind( this ), this.displayTime );
    }

    public closeTooltip() {
		this.isCopied = false;
		this._overlayRef.detach();
    }

    /**
	 * @return {OverlayRef}
	 */
	private _createOverlayRef(): OverlayRef {
		const config: OverlayConfig = new OverlayConfig({
			scrollStrategy	: this._overlay.scrollStrategies.reposition({ autoClose: true, scrollThrottle: 1000 }),
			hasBackdrop		: true,
			positionStrategy: this._overlay.position()
			.flexibleConnectedTo( this._elementRef )
			// .withLockedPosition()
			.withPositions([{
				originX	: 'center',
				originY	: 'top',
				overlayX: 'center',
				overlayY: 'bottom',
				offsetX	: 0,
				offsetY	: -15,
			}]),
		});
		const overlayRef: OverlayRef = this._overlay.create( config );

		// On backdrop click
		overlayRef.backdropClick()
		.subscribe( this.closeTooltip.bind( this ) );

		// Set overlay direction
		overlayRef.setDirection( 'ltr' );

		return overlayRef;
	}

    private _copyURLToClipboard( event?: MouseEvent ) {
		this.isCopied = true;

		navigator.clipboard.writeText( this.clipboardCopy.toString() );
		this.openTooltip();
		this.copied.emit( event );
	}
}