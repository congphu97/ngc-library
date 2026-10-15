import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcPaginationComponent } from './ngc-pagination.component';
import { NgcButtonModule } from '../ngc-button';

@NgModule({
  declarations: [
    NgcPaginationComponent
  ],
  imports: [
    CommonModule, NgcButtonModule
  ],
  exports: [
    NgcPaginationComponent,
  ]
})
export class NgcPaginationModule { }
