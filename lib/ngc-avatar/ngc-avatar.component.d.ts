import { ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NgcPageComponent } from '../ngc-page';
import { NgcMenuComponent } from '../ngc-menu';
import { NgcGridComponent } from '../ngc-grid';
import { NgcTabGroupComponent } from '../ngc-tabs';
import * as i0 from "@angular/core";
export declare type NgcIAvatarMode = 'auto' | 'text' | 'photo' | 'icon';
export declare type NgcIAvatarSize = 'xlarge' | 'large' | 'medium' | 'small';
export interface NgcIAvatarOptions {
    characters?: number;
    labelColor?: string;
    size?: string;
}
export interface NgcIAvatar {
    photo?: string;
    color?: string;
    icon?: string;
    mode?: NgcIAvatarMode;
}
export declare class NgcAvatarComponent implements OnChanges, AfterViewInit {
    pageComp: NgcPageComponent;
    gridComp: NgcGridComponent;
    menuComp: NgcMenuComponent;
    tabGroupComp: NgcTabGroupComponent;
    private _elementRef;
    get styleColor(): string;
    get styleSize(): string;
    get styleLabelColor(): string;
    get classAuto(): boolean;
    label: string;
    labelColor: string;
    size: string | NgcIAvatarSize;
    defaultPhoto: string;
    errorPhoto: string;
    characters: number;
    lazy: boolean;
    avatar: NgcIAvatar;
    scrolling$: Subject<any>;
    scroll$: Observable<any>;
    parsedLabel: string;
    parsedLabelColor: string;
    isPhotoLoaded$: Observable<boolean>;
    /**
     * @constructor
     * @param {NgcPageComponent} pageComp
     * @param {NgcGridComponent} gridComp
     * @param {NgcMenuComponent} menuComp
     * @param {NgcTabGroupComponent} tabGroupComp
     * @param {ElementRef} _elementRef
     */
    constructor(pageComp: NgcPageComponent, gridComp: NgcGridComponent, menuComp: NgcMenuComponent, tabGroupComp: NgcTabGroupComponent, _elementRef: ElementRef);
    /**
     * @param {string} label
     * @param {number} characters
     * @return {string}
     */
    static parseLabel(label?: string, characters?: number): string;
    /**
     * @param {string} avatarColor
     * @return {string}
     */
    static parseLabelColor(avatarColor: string): string;
    /**
     * @param {string} label
     * @param {NgcIAvatar} avatar
     * @param {NgcIAvatarOptions} options
     * @return {string}
     */
    static parseAvatar(label: string, avatar: NgcIAvatar, options?: NgcIAvatarOptions): string;
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @param {NgcIAvatarMode} mode
     * @return {boolean}
     */
    isAutoMode(mode: NgcIAvatarMode): boolean;
    /**
     * @param {NgcIAvatarMode} mode
     * @return {boolean}
     */
    isPhotoMode(mode: NgcIAvatarMode): boolean;
    /**
     * @param {NgcIAvatarMode} mode
     * @return {boolean}
     */
    isIconMode(mode: NgcIAvatarMode): boolean;
    /**
     * @param {NgcIAvatarMode} mode
     * @return {boolean}
     */
    isTextMode(mode: NgcIAvatarMode): boolean;
    /**
     * @param {string} photo
     * @return {Observable}
     */
    private _checkPhotoLoaded;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcAvatarComponent, [{ optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcAvatarComponent, "ngc-avatar", never, { "label": "label"; "labelColor": "labelColor"; "size": "size"; "defaultPhoto": "defaultPhoto"; "errorPhoto": "errorPhoto"; "characters": "characters"; "lazy": "lazy"; "avatar": "avatar"; "scrolling$": "scrolling$"; }, {}, never, ["*"], false>;
}
