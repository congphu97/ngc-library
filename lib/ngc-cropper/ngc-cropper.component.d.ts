import { EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import Cropper from 'cropperjs';
import * as i0 from "@angular/core";
export interface NgcICroppedEvent {
    image: string;
    blob: Blob;
}
export declare class NgcCropperComponent implements AfterViewInit {
    ngcPrefix: string;
    get styleWidth(): string;
    get styleHeight(): string;
    get classCircle(): boolean;
    cropperEle: ElementRef<HTMLImageElement>;
    image: string | Blob;
    options: Cropper.Options;
    circle: boolean;
    width: string;
    height: string;
    init: EventEmitter<NgcCropperComponent>;
    cropped: EventEmitter<NgcICroppedEvent>;
    private _image;
    private _cropper;
    private _defaultOptions;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @return {void}
     */
    crop(): void;
    /**
     * @param {Cropper.ViewMode} viewMode
     * @return {void}
     */
    setViewMode(viewMode: Cropper.ViewMode): void;
    /**
     * @param {Cropper.Options} options
     * @return {void}
     */
    private _initCropper;
    /**
     * @param {Blob} blob
     * @param {Function} callback
     * @return {void}
     */
    private _readImage;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCropperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCropperComponent, "ngc-cropper", never, { "image": "image"; "options": "options"; "circle": "circle"; "width": "width"; "height": "height"; }, { "init": "init"; "cropped": "cropped"; }, never, never, false>;
}
