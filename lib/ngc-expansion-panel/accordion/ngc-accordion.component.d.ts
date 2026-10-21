import { QueryList, AfterContentInit } from '@angular/core';
import { NgcExpansionPanelComponent } from '../expansion-panel/ngc-expansion-panel.component';
import * as i0 from "@angular/core";
export declare class NgcAccordionComponent implements AfterContentInit {
    expansionPanels: QueryList<NgcExpansionPanelComponent>;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcAccordionComponent, "ngc-accordion", never, {}, {}, ["expansionPanels"], ["*"], false>;
}
