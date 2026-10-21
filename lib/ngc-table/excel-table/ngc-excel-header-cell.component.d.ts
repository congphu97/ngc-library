import { ResizeEvent } from 'angular-resizable-element';
import * as i0 from "@angular/core";
export declare class NgcExcelHeaderCellComponent {
    get styleWidth(): string;
    get styleMinWidth(): string;
    get styleHeight(): string;
    get styleMinHeight(): string;
    get classRequired(): boolean;
    required: boolean;
    width: string;
    height: string;
    /**
     * @param {ResizeEvent} event
     * @return {void}
     */
    onResizing(event: ResizeEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcExcelHeaderCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcExcelHeaderCellComponent, "th[ngcExcelHeaderCell], td[ngcExcelHeaderCell]", never, { "required": "required"; }, {}, never, ["*"], false>;
}
