import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HighlightStateDirective implements OnChanges {
    private _elementRef;
    highlightType: 'background' | 'border';
    highlightColor: string;
    highlightState: boolean;
    highlightDisabled: boolean;
    autoUnhighlight: boolean;
    autoUnhighlightDelay: number;
    highlightStateChange: EventEmitter<boolean>;
    private _unsetHighlightDebounce;
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef: ElementRef);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {boolean=} isForceAutoUnhighlight
     * @return {void}
     */
    setHighlight(isForceAutoUnhighlight?: boolean): void;
    /**
     * @return {void}
     */
    unsetHighlight(): void;
    /**
     * @return {void}
     */
    private _addStyle;
    /**
     * @return {void}
     */
    private _removeStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<HighlightStateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HighlightStateDirective, "[highlightState]", never, { "highlightType": "highlightType"; "highlightColor": "highlightColor"; "highlightState": "highlightState"; "highlightDisabled": "highlightDisabled"; "autoUnhighlight": "autoUnhighlight"; "autoUnhighlightDelay": "autoUnhighlightDelay"; }, { "highlightStateChange": "highlightStateChange"; }, never, never, false>;
}
