import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcColorPickerComponent } from './ngc-color-picker.component';
// import { NgcColorPickerDirective } from '../ngc-color-picker.directive';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorPhotoshopModule } from 'ngx-color/photoshop'
import { NgcColorDotComponent } from './color-dot/ngc-color-dot.component';
import { CoreModule } from '@app/@core';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcButtonModule } from '../ngc-button';
import { NgcColorPickerDirective } from './ngc-color-picker.directive';




@NgModule({
  declarations: [
    NgcColorPickerComponent,
    NgcColorDotComponent,
    NgcColorPickerDirective,
  ],
  imports: [
    CommonModule, 
		CoreModule,
    OverlayModule, PortalModule, ColorSketchModule, ColorPhotoshopModule,

    NgcTooltipModule, NgcButtonModule,
  ],
  exports: [
    // NgcColorPickerDirective,
    NgcColorPickerComponent,
    NgcColorDotComponent, NgcColorPickerDirective
  ]
})
export class NgcColorPickerModule { }
