import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcSkeletonComponent } from './ngc-skeleton.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgcSkeletonComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    NgcSkeletonComponent,
  ]
})
export class NgcSkeletonModule { }
