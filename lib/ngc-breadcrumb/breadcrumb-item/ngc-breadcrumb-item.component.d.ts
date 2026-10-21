import { TemplateRef, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import * as i0 from "@angular/core";
export declare class NgcBreadcrumbItemComponent {
    private _router;
    templateRef: TemplateRef<any>;
    commands: any[];
    extras: NavigationExtras;
    disabled: boolean;
    truncate: boolean;
    truncateLimitLine: number;
    navigated: EventEmitter<void>;
    get isActive(): boolean;
    /**
     * @constructor
     * @param {Router} _router
     */
    constructor(_router: Router);
    /**
     * @return {void}
     */
    navigate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcBreadcrumbItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcBreadcrumbItemComponent, "ngc-breadcrumb-item", never, { "commands": "commands"; "extras": "extras"; "disabled": "disabled"; "truncate": "truncate"; "truncateLimitLine": "truncateLimitLine"; }, { "navigated": "navigated"; }, never, ["*"], false>;
}
