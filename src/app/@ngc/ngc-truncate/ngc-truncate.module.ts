import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcTruncateComponent } from './ngc-truncate.component';
import { NgcTooltipModule } from '../ngc-tooltip';

@NgModule({
  declarations: [
    NgcTruncateComponent
  ],
  imports: [
    CommonModule, NgcTooltipModule
  ],
  exports: [
    NgcTruncateComponent
  ]
})
export class NgcTruncateModule { }
