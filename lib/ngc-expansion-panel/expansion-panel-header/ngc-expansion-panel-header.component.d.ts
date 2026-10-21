import { TemplateRef, SimpleChanges, OnChanges } from '@angular/core';
import { ContrastPipe } from '@core';
import * as i0 from "@angular/core";
export declare class NgcExpansionPanelHeaderComponent implements OnChanges {
    private _contrastPipe;
    templateRef: TemplateRef<any>;
    color: string;
    textColor: string;
    textFontSize: string;
    width: string;
    sticky: boolean;
    stretch: boolean;
    private _bkTextColor;
    /**
     * @constructor
     * @param {ContrastPipe} _contrastPipe
     */
    constructor(_contrastPipe: ContrastPipe);
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcExpansionPanelHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcExpansionPanelHeaderComponent, "ngc-expansion-panel-header", never, { "color": "color"; "textColor": "textColor"; "textFontSize": "textFontSize"; "width": "width"; "sticky": "sticky"; "stretch": "stretch"; }, {}, never, ["*"], false>;
}
