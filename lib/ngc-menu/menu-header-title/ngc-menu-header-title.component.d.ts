import { TemplateRef, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcMenuHeaderTitleComponent implements AfterViewInit, OnDestroy {
    private _cdRef;
    private _templateRef;
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
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuHeaderTitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuHeaderTitleComponent, "ngc-menu-header-title", never, { "classList": "class"; }, {}, never, ["*"], false>;
}
