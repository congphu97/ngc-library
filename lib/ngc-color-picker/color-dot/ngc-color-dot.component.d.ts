import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcColorDotComponent {
    get styleColor(): string;
    get styleSize(): string;
    get classHidden(): boolean;
    get classCircle(): boolean;
    color: string;
    size: string;
    circle: boolean;
    viewOnly: boolean;
    visible: boolean;
    ngcColorDot: string;
    colorChange: EventEmitter<string>;
    /**
     * @param {string} color
     * @return {void}
     */
    onColorPicked(color: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcColorDotComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcColorDotComponent, "ngc-color-dot, [ngcColorDot]", never, { "color": "color"; "size": "size"; "circle": "circle"; "viewOnly": "viewOnly"; "visible": "visible"; "ngcColorDot": "ngcColorDot"; }, { "colorChange": "colorChange"; }, never, ["*"], false>;
}
