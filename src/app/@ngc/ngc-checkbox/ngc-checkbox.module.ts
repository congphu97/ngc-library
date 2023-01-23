import { NgModule } from '@angular/core';
import { NgcCheckboxComponent } from './ngc-checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgcCheckboxComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    NgcCheckboxComponent
  ]
})
export class NgcCheckboxModule { }
