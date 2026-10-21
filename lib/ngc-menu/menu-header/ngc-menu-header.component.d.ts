import { TemplateRef, AfterViewInit, AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NgcMenuHeaderTitleComponent } from '../menu-header-title/ngc-menu-header-title.component';
import * as i0 from "@angular/core";
export declare class NgcMenuHeaderComponent implements AfterViewInit, AfterContentInit, OnDestroy {
    private _cdRef;
    private _templateRef;
    private _menuHeader;
    menuHeaderTitle: NgcMenuHeaderTitleComponent;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuHeaderComponent, "ngc-menu-header", never, { "classList": "class"; }, {}, ["_menuHeader", "menuHeaderTitle"], ["*"], false>;
}
