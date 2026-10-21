import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcSwitchComponent implements OnInit {
    label: string;
    color: string;
    labelColor: string;
    ngModel: boolean;
    disabled: boolean;
    readonly: boolean;
    ngModelChange: EventEmitter<boolean>;
    constructor();
    triggerClick(event: MouseEvent): void;
    triggerKeyDownSpace(event: KeyboardEvent): void;
    ngOnInit(): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcSwitchComponent, "ngc-switch", never, { "label": "label"; "color": "color"; "labelColor": "labelColor"; "ngModel": "ngModel"; "disabled": "disabled"; "readonly": "readonly"; }, { "ngModelChange": "ngModelChange"; }, never, ["*"], false>;
}
