import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcTooltipComponent } from './ngc-tooltip.component';
import { NgcTooltipDirective } from '../ngc-tooltip.directive';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    NgcTooltipComponent,
    NgcTooltipDirective,
  ],
  imports: [
    CommonModule,
    OverlayModule, PortalModule,
  ],
  exports: [
    NgcTooltipDirective,
    NgcTooltipComponent,
  ]
})
export class NgcTooltipModule { }
