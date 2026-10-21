import { Overlay } from '@angular/cdk/overlay';
import { EventEmitter, ViewContainerRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcClipboardCopyDirective {
    private _overlay;
    private _vcRef;
    private _elementRef;
    clipboardCopy: string;
    copiedMessage: string;
    displayTime: number;
    disabled: boolean;
    copied: EventEmitter<MouseEvent>;
    isCopied: boolean;
    private _overlayRef;
    private _portal;
    private _tooltipInstance;
    constructor(_overlay: Overlay, _vcRef: ViewContainerRef, _elementRef: ElementRef);
    triggerClick(event: MouseEvent): void;
    openTooltip(): void;
    closeTooltip(): void;
    /**
     * @return {OverlayRef}
     */
    private _createOverlayRef;
    private _copyURLToClipboard;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcClipboardCopyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcClipboardCopyDirective, "[ngcClipboardCopy]", ["ngcClipboardCopy"], { "clipboardCopy": "ngcClipboardCopy"; "copiedMessage": "copiedMessage"; "displayTime": "displayTime"; "disabled": "disabled"; }, { "copied": "copied"; }, never, never, false>;
}
