import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcTruncateComponent } from './ngc-truncate.component';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcBlockTruncateDirective } from './block-truncate/ngc-block-truncate.directive';

@NgModule({
  declarations: [
    NgcTruncateComponent, NgcBlockTruncateDirective
  ],
  imports: [
    CommonModule, NgcTooltipModule
  ],
  exports: [
    NgcTruncateComponent, NgcBlockTruncateDirective
  ]
})
export class NgcTruncateModule { }
