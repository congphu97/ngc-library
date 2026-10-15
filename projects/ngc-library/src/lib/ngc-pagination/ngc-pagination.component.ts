import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngc-pagination',
  templateUrl: './ngc-pagination.component.html',
  styleUrls: ['./ngc-pagination.component.scss']
})
export class NgcPaginationComponent implements OnInit {
  @Input() totalPages: number = 100;
  @Input() disabled: boolean = false;
  @Input() currentPage: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  visiblePages: (number | null)[] = [];

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

  goToPage(page: number) {
    if (page !== this.currentPage && page !== null) {
      this.currentPage = page;
      this.updateVisiblePages();
      this.pageChange.emit(this.currentPage);
    }
  }

  updateVisiblePages() {
    let pages: (number | null)[] = [];

    // Always show first page
    pages = [...pages, 1];

    const left = Math.max(2, this.currentPage - 1);
    const right = Math.min(this.totalPages - 1, this.currentPage + 1);

    // Show left ellipsis if needed
    if (left > 2) {
      pages = [...pages, null ]; // "..]"
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
