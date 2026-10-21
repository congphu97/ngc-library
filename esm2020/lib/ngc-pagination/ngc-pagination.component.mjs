import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../ngc-button/icon-button/ngc-icon-button.component";
export class NgcPaginationComponent {
    constructor() {
        this.totalPages = 100;
        this.disabled = false;
        this.currentPage = 1;
        this.pageChange = new EventEmitter();
        this.visiblePages = [];
    }
    ngOnInit() {
        this.updateVisiblePages();
    }
    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateVisiblePages();
            this.pageChange.emit(this.currentPage);
        }
    }
    goToNextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updateVisiblePages();
            this.pageChange.emit(this.currentPage);
        }
    }
    goToPage(page) {
        if (page !== this.currentPage && page !== null) {
            this.currentPage = page;
            this.updateVisiblePages();
            this.pageChange.emit(this.currentPage);
        }
    }
    updateVisiblePages() {
        let pages = [];
        // Always show first page
        pages = [...pages, 1];
        const left = Math.max(2, this.currentPage - 1);
        const right = Math.min(this.totalPages - 1, this.currentPage + 1);
        // Show left ellipsis if needed
        if (left > 2) {
            pages = [...pages, null]; // "..]"
        }
        // Add middle pages
        for (let i = left; i <= right; i++) {
            pages = [...pages, i];
        }
        // Show right ellipsis if needed
        if (right < this.totalPages - 1) {
            pages = [...pages, null]; // "..]"
        }
        // Always show last page if more than 1
        if (this.totalPages > 1) {
            pages = [...pages, this.totalPages];
        }
        this.visiblePages = pages;
    }
}
NgcPaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcPaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcPaginationComponent, selector: "ngc-pagination", inputs: { totalPages: "totalPages", disabled: "disabled", currentPage: "currentPage" }, outputs: { pageChange: "pageChange" }, ngImport: i0, template: "<div class=\"ngc-pagination layout-row layout-align-center-center\" [class.ngc-pagination--disabled]=\"disabled\">\n\n  <!-- Previous button -->\n  <button ngcIconButton icon=\"chevron-back-outline\" class=\"m-5\" square size=\"28px\" (click)=\"goToPreviousPage()\"\n    [disabled]=\"currentPage === 1 || disabled\">\n  </button>\n\n  <!-- Page numbers -->\n  <ng-container *ngFor=\"let page of visiblePages\">\n    <ng-container *ngIf=\"page !== null; else ellipsis\">\n      <button [class.active]=\"page === currentPage\" (click)=\"goToPage(page)\">\n        {{ page }}\n      </button>\n    </ng-container>\n    <ng-template #ellipsis>\n      <span class=\"ellipsis\">...</span>\n    </ng-template>\n  </ng-container>\n\n  <!-- Next button -->\n  <button ngcIconButton icon=\"chevron-forward-outline\" class=\"m-5\" square size=\"28px\" (click)=\"goToNextPage()\"\n    [disabled]=\"currentPage === totalPages || disabled\">\n  </button>\n\n</div>", styles: ["button{margin:0 4px;padding:6px 12px;border:none;background:var(--ngc-color-neutral-background-disabled, #f5f5f5);border-radius:4px;cursor:pointer;transition:all .2s}button:hover{background:var(--ngc-color-neutral-border-default, #e4e4e6)}button.active{background-color:var(--ngc-color-primary-default, #444446);color:#fff;font-weight:700}button:disabled{opacity:.5;cursor:not-allowed}.ellipsis{margin:0 6px;font-weight:700;color:var(--ngc-color-neutral-text-tertiary, #8e8e93);-webkit-user-select:none;user-select:none}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NgcIconButtonComponent, selector: "button[ngcIconButton]", inputs: ["type", "color", "size", "icon", "iconColor", "iconSize", "borderColor", "borderStyle", "borderWidth", "disabled", "square"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcPaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-pagination', template: "<div class=\"ngc-pagination layout-row layout-align-center-center\" [class.ngc-pagination--disabled]=\"disabled\">\n\n  <!-- Previous button -->\n  <button ngcIconButton icon=\"chevron-back-outline\" class=\"m-5\" square size=\"28px\" (click)=\"goToPreviousPage()\"\n    [disabled]=\"currentPage === 1 || disabled\">\n  </button>\n\n  <!-- Page numbers -->\n  <ng-container *ngFor=\"let page of visiblePages\">\n    <ng-container *ngIf=\"page !== null; else ellipsis\">\n      <button [class.active]=\"page === currentPage\" (click)=\"goToPage(page)\">\n        {{ page }}\n      </button>\n    </ng-container>\n    <ng-template #ellipsis>\n      <span class=\"ellipsis\">...</span>\n    </ng-template>\n  </ng-container>\n\n  <!-- Next button -->\n  <button ngcIconButton icon=\"chevron-forward-outline\" class=\"m-5\" square size=\"28px\" (click)=\"goToNextPage()\"\n    [disabled]=\"currentPage === totalPages || disabled\">\n  </button>\n\n</div>", styles: ["button{margin:0 4px;padding:6px 12px;border:none;background:var(--ngc-color-neutral-background-disabled, #f5f5f5);border-radius:4px;cursor:pointer;transition:all .2s}button:hover{background:var(--ngc-color-neutral-border-default, #e4e4e6)}button.active{background-color:var(--ngc-color-primary-default, #444446);color:#fff;font-weight:700}button:disabled{opacity:.5;cursor:not-allowed}.ellipsis{margin:0 6px;font-weight:700;color:var(--ngc-color-neutral-text-tertiary, #8e8e93);-webkit-user-select:none;user-select:none}\n"] }]
        }], propDecorators: { totalPages: [{
                type: Input
            }], disabled: [{
                type: Input
            }], currentPage: [{
                type: Input
            }], pageChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtcGFnaW5hdGlvbi9uZ2MtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1wYWdpbmF0aW9uL25nYy1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPL0UsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1XLGVBQVUsR0FBVyxHQUFHLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV2QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVsRCxpQkFBWSxHQUFzQixFQUFFLENBQUM7S0E4RHRDO0lBNURDLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ25CLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksS0FBSyxHQUFzQixFQUFFLENBQUM7UUFFbEMseUJBQXlCO1FBQ3pCLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxFLCtCQUErQjtRQUMvQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUUsQ0FBQyxDQUFDLFFBQVE7U0FDcEM7UUFFRCxtQkFBbUI7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QjtRQUVELGdDQUFnQztRQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUMvQixLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVE7U0FDbkM7UUFFRCx1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN2QixLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzttSEFuRVUsc0JBQXNCO3VHQUF0QixzQkFBc0IscUxDUG5DLHc3QkF3Qk07MkZEakJPLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxnQkFBZ0I7OEJBS2pCLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYy1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nYy1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmdjLXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2NQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdG90YWxQYWdlczogbnVtYmVyID0gMTAwO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXJyZW50UGFnZTogbnVtYmVyID0gMTtcblxuICBAT3V0cHV0KCkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHZpc2libGVQYWdlczogKG51bWJlciB8IG51bGwpW10gPSBbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVZpc2libGVQYWdlcygpO1xuICB9XG5cbiAgZ29Ub1ByZXZpb3VzUGFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IDEpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UtLTtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVBhZ2VzKCk7XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICBnb1RvTmV4dFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPCB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UrKztcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVBhZ2VzKCk7XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICBnb1RvUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAocGFnZSAhPT0gdGhpcy5jdXJyZW50UGFnZSAmJiBwYWdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVBhZ2VzKCk7XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWaXNpYmxlUGFnZXMoKSB7XG4gICAgbGV0IHBhZ2VzOiAobnVtYmVyIHwgbnVsbClbXSA9IFtdO1xuXG4gICAgLy8gQWx3YXlzIHNob3cgZmlyc3QgcGFnZVxuICAgIHBhZ2VzID0gWy4uLnBhZ2VzLCAxXTtcblxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heCgyLCB0aGlzLmN1cnJlbnRQYWdlIC0gMSk7XG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnRvdGFsUGFnZXMgLSAxLCB0aGlzLmN1cnJlbnRQYWdlICsgMSk7XG5cbiAgICAvLyBTaG93IGxlZnQgZWxsaXBzaXMgaWYgbmVlZGVkXG4gICAgaWYgKGxlZnQgPiAyKSB7XG4gICAgICBwYWdlcyA9IFsuLi5wYWdlcywgbnVsbCBdOyAvLyBcIi4uXVwiXG4gICAgfVxuXG4gICAgLy8gQWRkIG1pZGRsZSBwYWdlc1xuICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgIHBhZ2VzID0gWy4uLnBhZ2VzLCBpXTtcbiAgICB9XG5cbiAgICAvLyBTaG93IHJpZ2h0IGVsbGlwc2lzIGlmIG5lZWRlZFxuICAgIGlmIChyaWdodCA8IHRoaXMudG90YWxQYWdlcyAtIDEpIHtcbiAgICAgIHBhZ2VzID0gWy4uLnBhZ2VzLCBudWxsXTsgLy8gXCIuLl1cIlxuICAgIH1cblxuICAgIC8vIEFsd2F5cyBzaG93IGxhc3QgcGFnZSBpZiBtb3JlIHRoYW4gMVxuICAgIGlmICh0aGlzLnRvdGFsUGFnZXMgPiAxKSB7XG4gICAgICBwYWdlcyA9IFsuLi5wYWdlcywgdGhpcy50b3RhbFBhZ2VzXTtcbiAgICB9XG5cbiAgICB0aGlzLnZpc2libGVQYWdlcyA9IHBhZ2VzO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ2MtcGFnaW5hdGlvbiBsYXlvdXQtcm93IGxheW91dC1hbGlnbi1jZW50ZXItY2VudGVyXCIgW2NsYXNzLm5nYy1wYWdpbmF0aW9uLS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuXG4gIDwhLS0gUHJldmlvdXMgYnV0dG9uIC0tPlxuICA8YnV0dG9uIG5nY0ljb25CdXR0b24gaWNvbj1cImNoZXZyb24tYmFjay1vdXRsaW5lXCIgY2xhc3M9XCJtLTVcIiBzcXVhcmUgc2l6ZT1cIjI4cHhcIiAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzUGFnZSgpXCJcbiAgICBbZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT09IDEgfHwgZGlzYWJsZWRcIj5cbiAgPC9idXR0b24+XG5cbiAgPCEtLSBQYWdlIG51bWJlcnMgLS0+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgdmlzaWJsZVBhZ2VzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhZ2UgIT09IG51bGw7IGVsc2UgZWxsaXBzaXNcIj5cbiAgICAgIDxidXR0b24gW2NsYXNzLmFjdGl2ZV09XCJwYWdlID09PSBjdXJyZW50UGFnZVwiIChjbGljayk9XCJnb1RvUGFnZShwYWdlKVwiPlxuICAgICAgICB7eyBwYWdlIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2VsbGlwc2lzPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlbGxpcHNpc1wiPi4uLjwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5leHQgYnV0dG9uIC0tPlxuICA8YnV0dG9uIG5nY0ljb25CdXR0b24gaWNvbj1cImNoZXZyb24tZm9yd2FyZC1vdXRsaW5lXCIgY2xhc3M9XCJtLTVcIiBzcXVhcmUgc2l6ZT1cIjI4cHhcIiAoY2xpY2spPVwiZ29Ub05leHRQYWdlKClcIlxuICAgIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlcyB8fCBkaXNhYmxlZFwiPlxuICA8L2J1dHRvbj5cblxuPC9kaXY+Il19