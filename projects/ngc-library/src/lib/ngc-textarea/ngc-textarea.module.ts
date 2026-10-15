import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcTextareaComponent } from './ngc-textarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgcTextareaComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    NgcTextareaComponent,
  ]
})
export class NgcTextareaModule { }
