import { TemplateRef, QueryList, AfterContentInit } from '@angular/core';
import { NgcDropdownItemComponent } from '../dropdown-item/ngc-dropdown-item.component';
import * as i0 from "@angular/core";
export declare class NgcDropdownGroupItemComponent implements AfterContentInit {
    templateRef: TemplateRef<any>;
    dropdownItems: QueryList<NgcDropdownItemComponent>;
    title: string;
    label: string;
    color: string;
    icon: string;
    dotColor: string;
    classes: string;
    disabled: boolean;
    truncate: boolean;
    truncateLimitLine: number;
    get children(): NgcDropdownItemComponent[];
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDropdownGroupItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcDropdownGroupItemComponent, "ngc-dropdown-group-item", never, { "title": "title"; "label": "label"; "color": "color"; "icon": "icon"; "dotColor": "dotColor"; "classes": "class"; "disabled": "disabled"; "truncate": "truncate"; "truncateLimitLine": "truncateLimitLine"; }, {}, ["dropdownItems"], never, false>;
}
