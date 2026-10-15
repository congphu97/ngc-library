import { NgModule } from '@angular/core';
import { NgcProgressBarComponent } from './ngc-progress-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgcProgressBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgcProgressBarComponent,
  ]
})
export class NgcProgressBarModule { }
