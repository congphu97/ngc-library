import { TemplateRef, AfterViewInit, AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcMenuContentComponent implements AfterViewInit, AfterContentInit, OnDestroy {
    private _cdRef;
    private _templateRef;
    private _menuContent;
    templateRef: TemplateRef<any>;
    private _classList;
    get classList(): string;
    set classList(classes: string);
    /**
     * @constructor
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(_cdRef: ChangeDetectorRef);
    /**
     * @constructor
     */
    ngAfterViewInit(): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuContentComponent, "ngc-menu-content", never, { "classList": "class"; }, {}, ["_menuContent"], ["*"], false>;
}
