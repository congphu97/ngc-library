import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcPaginationComponent implements OnInit {
    totalPages: number;
    disabled: boolean;
    currentPage: number;
    pageChange: EventEmitter<number>;
    visiblePages: (number | null)[];
    ngOnInit(): void;
    goToPreviousPage(): void;
    goToNextPage(): void;
    goToPage(page: number): void;
    updateVisiblePages(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcPaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcPaginationComponent, "ngc-pagination", never, { "totalPages": "totalPages"; "disabled": "disabled"; "currentPage": "currentPage"; }, { "pageChange": "pageChange"; }, never, never, false>;
}
