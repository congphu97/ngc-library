import { NgModule } from '@angular/core';
import { NgcSwitchComponent } from './ngc-switch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgcSwitchComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    NgcSwitchComponent
  ]
})
export class NgcSwitchModule { }
