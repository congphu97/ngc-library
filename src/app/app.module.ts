import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgcTooltipModule } from './@ngc/ngc-tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgcColorPickerModule } from './@ngc/ngc-color-picker';
import { NgcSwitchModule } from './@ngc/ngc-switch/ngc-switch.module';
import { NgcCheckboxModule } from './@ngc/ngc-checkbox/ngc-checkbox.module';
import { NgcRadioModule } from './@ngc/ngc-radio/ngc-radio.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgcTooltipModule, NgcColorPickerModule, NgcSwitchModule, NgcCheckboxModule, NgcRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
