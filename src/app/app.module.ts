import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CoreModule } from './@core';

import { TranslateModule } from '@ngx-translate/core';
import { routing } from './app-routing.module';
import { GuidelineModule } from './@guideline/guideline.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CoreModule, GuidelineModule,
    TranslateModule.forRoot(),

    routing
  ],
  exports: [],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
