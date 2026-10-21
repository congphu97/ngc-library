import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export interface NgcCollapseMenuItem {
    label: string;
    link?: string;
    icon?: string;
}
export declare class NgcCollapseMenuComponent {
    private _cdr;
    groupTitle: string;
    title: string;
    icon: string;
    expanded: boolean;
    activeItemLabel: string;
    items: NgcCollapseMenuItem[];
    selectItem: EventEmitter<NgcCollapseMenuItem>;
    constructor(_cdr: ChangeDetectorRef);
    toggleExpanded(): void;
    selectItemAction(item: NgcCollapseMenuItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCollapseMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCollapseMenuComponent, "ngc-collapse-menu", never, { "groupTitle": "groupTitle"; "title": "title"; "icon": "icon"; "expanded": "expanded"; "activeItemLabel": "activeItemLabel"; "items": "items"; }, { "selectItem": "selectItem"; }, never, never, false>;
}
