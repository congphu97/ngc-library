import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgcSelectComponent } from './ngc-select.component';

@NgModule({
  declarations: [
    NgcSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgcSelectComponent,
  ]
})
export class NgcSelectModule { }
