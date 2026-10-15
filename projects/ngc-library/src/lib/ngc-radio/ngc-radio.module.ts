import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgcRadioGroupComponent } from './ngc-radio-group/ngc-radio-group.component';
import { NgcRadioComponent } from './ngc-radio/ngc-radio.component';

@NgModule({
  declarations: [
    NgcRadioComponent, NgcRadioGroupComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgcRadioComponent, NgcRadioGroupComponent,
  ]
})
export class NgcRadioModule { }
