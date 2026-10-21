import { SimpleChanges, OnChanges, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import * as i0 from "@angular/core";
export declare type INotFoundSize = 'normal' | 'large';
export declare type INotFoundMode = 'empty' | 'error' | 'search' | 'custom';
export interface INotFoundData {
    name?: string;
    size?: INotFoundSize;
    mode?: INotFoundMode;
    debounceTime?: number;
    emptyImage?: string;
    emptyImageSize?: number[];
    emptyTitle?: string;
    emptyDescription?: string;
    errorImage?: string;
    errorImageSize?: number[];
    errorTitle?: string;
    errorDescription?: string;
}
export declare class NotFoundComponent implements OnChanges, OnInit, OnDestroy {
    private _cdRef;
    private _translateService;
    private _loader;
    get classLarge(): boolean;
    name: string;
    size: INotFoundSize;
    mode: INotFoundMode;
    debounceTime: number;
    emptyImage: string;
    emptyImageSize: number[];
    emptyTitle: string;
    emptyDescription: string;
    errorImage: string;
    errorImageSize: number[];
    errorTitle: string;
    errorDescription: string;
    customImage: string;
    customImageSize: number[];
    customTitle: string;
    customDescription: string;
    loaded: boolean;
    image: string;
    imageSize: number[];
    title: string;
    description: string;
    private _name;
    private _loaderValue$$;
    private _setLoadedDebounce;
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     * @param {TranslateService} _translateService
     * @param {LoadingBarService} _loader
     */
    constructor(_cdRef: ChangeDetectorRef, _translateService: TranslateService, _loader: LoadingBarService);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngOnInit(): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    /**
     * @return {void}
     */
    private _init;
    /**
     * @return {void}
     */
    private _changeState;
    /**
     * @param {number=} progress
     * @return {void}
     */
    private _setLoaded;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotFoundComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotFoundComponent, "not-found", never, { "name": "name"; "size": "size"; "mode": "mode"; "debounceTime": "debounceTime"; "emptyImage": "emptyImage"; "emptyImageSize": "emptyImageSize"; "emptyTitle": "emptyTitle"; "emptyDescription": "emptyDescription"; "errorImage": "errorImage"; "errorImageSize": "errorImageSize"; "errorTitle": "errorTitle"; "errorDescription": "errorDescription"; "customImage": "customImage"; "customImageSize": "customImageSize"; "customTitle": "customTitle"; "customDescription": "customDescription"; }, {}, never, ["*"], false>;
}
