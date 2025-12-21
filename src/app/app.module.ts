import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CoreModule, I18nTranslateModule } from './@core';

import { TranslateModule } from '@ngx-translate/core';
import { routing } from './app-routing.module';
import { GuidelineModule } from './@guideline/guideline.module';
import { NgcModule } from './@ngc/ngc.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CoreModule, GuidelineModule,
    TranslateModule.forRoot(), I18nTranslateModule, NgcModule,
    BrowserAnimationsModule,

    routing
  ],
  exports: [],
  providers: [],
  bootstrap: [ AppComponent ]
})
// @I18n({
// 	prefix: 'APP',
// 	loader: ( lang: string ) => import( `./i18n/${lang}.json` ),
// })
export class AppModule {}
