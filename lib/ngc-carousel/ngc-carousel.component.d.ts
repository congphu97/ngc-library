import { QueryList, ElementRef, OnChanges, SimpleChanges, EventEmitter, ChangeDetectorRef, TemplateRef, AfterViewInit } from '@angular/core';
import { NgcDialogService } from '../ngc-dialog';
import * as i0 from "@angular/core";
export declare type NgcICarouselMode = 'auto' | 'cover' | 'contain';
export declare class NgcCarouselComponent implements OnChanges, AfterViewInit {
    elementRef: ElementRef;
    private _cdRef;
    private _ngcDialogService;
    get styleSize(): string;
    get styleRealSize(): number;
    get stylePositionX(): string;
    get stylePositionY(): string;
    get styleMode(): NgcICarouselMode;
    thumbnailList: QueryList<ElementRef>;
    size: string;
    photo: string[];
    delay: number;
    selectedIndex: number;
    interval: number;
    canClose: boolean;
    canFullscreen: boolean;
    positionX: string;
    positionY: string;
    mode: NgcICarouselMode;
    selectedIndexChange: EventEmitter<number>;
    fullscreen: EventEmitter<boolean>;
    closed: EventEmitter<void>;
    isFullscreen: boolean;
    realSize: number;
    private _interval;
    private _dialogRef;
    /**
     * @constructor
     * @param {ElementRef} elementRef
     * @param {ChangeDetectorRef} _cdRef
     * @param {NgcDialogService} _ngcDialogService
     */
    constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef, _ngcDialogService: NgcDialogService);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @return {void}
     */
    selectPrevImage(): void;
    /**
     * @return {void}
     */
    selectNextImage(): void;
    /**
     * @param {number} index
     * @return {void}
     */
    selectImage(index: number): void;
    /**
     * @param {TemplateRef<any>} dialog
     * @return {void}
     */
    toggleFullscreen(dialog: TemplateRef<any>): void;
    /**
     * @return {void}
     */
    close(): void;
    /**
     * @return {void}
     */
    private _startInterval;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCarouselComponent, "ngc-carousel", never, { "size": "size"; "photo": "photo"; "delay": "delay"; "selectedIndex": "selectedIndex"; "interval": "interval"; "canClose": "canClose"; "canFullscreen": "canFullscreen"; "positionX": "positionX"; "positionY": "positionY"; "mode": "mode"; }, { "selectedIndexChange": "selectedIndexChange"; "fullscreen": "fullscreen"; "closed": "closed"; }, never, never, false>;
}
