import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgcCheckboxModule } from '@app/@ngc/ngc-checkbox/ngc-checkbox.module';
import { NgcClipboardCopyModule } from '@app/@ngc/ngc-clipboard-copy/ngc-clipboard-copy.module';
import { NgcColorPickerModule } from '@app/@ngc/ngc-color-picker';
import { NgcDividerModule } from '@app/@ngc/ngc-divider/ngc-divider.module';
import { NgcLoadingModule } from '@app/@ngc/ngc-loading/ngc-loading.module';
import { NgcRadioModule } from '@app/@ngc/ngc-radio/ngc-radio.module';
import { NgcSwitchModule } from '@app/@ngc/ngc-switch/ngc-switch.module';
import { NgcTooltipModule } from '@app/@ngc/ngc-tooltip';
import { NgcToastModule } from '@app/@ngc/ngc-toast/ngc-toast.module';
import { GuidelineComponent } from './guideline.component';
import { NgcIconModule } from '@app/@ngc/ngc-icon/ngc-icon.module';
import { NgcTruncateModule } from '@app/@ngc/ngc-truncate/ngc-truncate.module';
import { NgcTabModule } from '@app/@ngc/ngc-tab/ngc-tab.module';
import { NgcBreadcrumbModule } from '@app/@ngc/ngc-breadcrumb/ngc-breadcrumb.module';
import { NgcProgressBarModule } from '@app/@ngc/ngc-progress-bar/ngc-progress-bar.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [ GuidelineComponent ],
  imports: [
    BrowserModule,

    NgcTooltipModule, NgcColorPickerModule, NgcSwitchModule, NgcCheckboxModule, NgcRadioModule, NgcClipboardCopyModule, NgcDividerModule,
    NgcLoadingModule, NgcToastModule, NgcIconModule, NgcTruncateModule, NgcTabModule, NgcBreadcrumbModule, NgcProgressBarModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [ GuidelineComponent ],
  providers: [],
  bootstrap: []
})
export class GuidelineModule {}
