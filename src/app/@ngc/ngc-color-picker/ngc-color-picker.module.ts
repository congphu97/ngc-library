import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcColorPickerComponent } from './ngc-color-picker.component';
// import { NgcColorPickerDirective } from '../ngc-color-picker.directive';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorPhotoshopModule } from 'ngx-color/photoshop'




@NgModule({
  declarations: [
    NgcColorPickerComponent,
    // NgcColorPickerDirective,
  ],
  imports: [
    CommonModule,
    OverlayModule, PortalModule, ColorSketchModule, ColorPhotoshopModule
  ],
  exports: [
    // NgcColorPickerDirective,
    NgcColorPickerComponent,
  ]
})
export class NgcColorPickerModule { }
