import { TemplateRef, ViewContainerRef, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgCacheIfDirective implements OnChanges, OnDestroy {
    private _templateRef;
    private _vcRef;
    ngCacheIf: any;
    ngCacheIfElse: TemplateRef<any>;
    private _loaded;
    /**
     * @constructor
     * @param {TemplateRef<any>} _templateRef
     * @param {ViewContainerRef} _vcRef
     */
    constructor(_templateRef: TemplateRef<any>, _vcRef: ViewContainerRef);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgCacheIfDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgCacheIfDirective, "[ngCacheIf]", ["ngCacheIf"], { "ngCacheIf": "ngCacheIf"; "ngCacheIfElse": "ngCacheIfElse"; }, {}, never, never, false>;
}
