import * as i0 from "@angular/core";
export interface NgcNavigationMenuItem {
    label: string;
    trigger?: boolean;
    columns?: number;
    children?: {
        title: string;
        description: string;
        link?: string;
    }[];
}
export declare class NgcNavigationMenuComponent {
    items: NgcNavigationMenuItem[];
    activeIndex: number | null;
    isTransitioning: boolean;
    private _closeTimeout;
    onMouseEnter(index: number): void;
    onMouseLeave(): void;
    onViewportEnter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcNavigationMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcNavigationMenuComponent, "ngc-navigation-menu", never, { "items": "items"; }, {}, never, never, false>;
}
