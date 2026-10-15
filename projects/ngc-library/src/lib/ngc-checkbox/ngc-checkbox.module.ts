import { NgModule } from '@angular/core';
import { NgcCheckboxComponent } from './ngc-checkbox.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@app/@core';

@NgModule({
  declarations: [
    NgcCheckboxComponent
  ],
  imports: [
    FormsModule, CoreModule,
  ],
  exports: [
    NgcCheckboxComponent
  ]
})
export class NgcCheckboxModule { }
