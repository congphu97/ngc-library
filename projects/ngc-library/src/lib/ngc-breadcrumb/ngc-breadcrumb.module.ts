import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcBreadcrumbItemComponent } from './breadcrumb-item/ngc-breadcrumb-item.component';
import { NgcBreadcrumbComponent } from './breadcrumb/ngc-breadcrumb.component';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';
import { NgcIconModule } from '../ngc-icon';

@NgModule({
  declarations: [
    NgcBreadcrumbItemComponent, NgcBreadcrumbComponent
  ],
  imports: [
    CommonModule, NgcTruncateModule, NgcIconModule
  ],
  exports: [
    NgcBreadcrumbItemComponent, NgcBreadcrumbComponent
  ]
})
export class NgcBreadcrumbModule { }
