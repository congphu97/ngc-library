import { TemplateRef, AfterViewInit, AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcMenuFooterComponent implements AfterViewInit, AfterContentInit, OnDestroy {
    private _cdRef;
    private _templateRef;
    private _menuFooter;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuFooterComponent, "ngc-menu-footer", never, { "classList": "class"; }, {}, ["_menuFooter"], ["*"], false>;
}
