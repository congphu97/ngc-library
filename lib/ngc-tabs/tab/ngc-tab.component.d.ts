import { TemplateRef, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NgcTabContentDirective } from '../tab-content/ngc-tab-content.directive';
import * as i0 from "@angular/core";
export declare class NgcTabComponent implements OnChanges {
    templateRef: TemplateRef<any>;
    tabHeader: NgcTabContentDirective;
    tabContent: NgcTabContentDirective;
    label: string;
    icon: string;
    classes: string;
    ngClass: string;
    disabled: boolean;
    changes$: Subject<void>;
    get header(): TemplateRef<any>;
    get content(): TemplateRef<any>;
    /**
     * @constructor
     */
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTabComponent, "ngc-tab", never, { "label": "label"; "icon": "icon"; "classes": "class"; "ngClass": "ngClass"; "disabled": "disabled"; }, {}, ["tabHeader", "tabContent"], ["*"], false>;
}
