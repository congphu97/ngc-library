import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcBreadcrumbItemComponent } from './breadcrumb-item/ngc-breadcrumb-item.component';
import { NgcBreadcrumbComponent } from './breadcrumb/ngc-breadcrumb.component';

@NgModule({
  declarations: [
    NgcBreadcrumbItemComponent, NgcBreadcrumbComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgcBreadcrumbItemComponent, NgcBreadcrumbComponent
  ]
})
export class NgcBreadcrumbModule { }
