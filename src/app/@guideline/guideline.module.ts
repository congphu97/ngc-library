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
import { NgcButtonModule } from '@app/@ngc/ngc-button';
import { NgcRangeInputModule } from '@app/@ngc/ngc-range-input';
import { NgcBadgeModule } from '@app/@ngc/ngc-badge';
import { NgcCalendarModule } from '@app/@ngc/ngc-calendar';
import { NgcDatePickerModule } from '@app/@ngc/ngc-date-picker';
import { NgcButtonToggleModule } from '@app/@ngc/ngc-button-toggle';
import { NgcCodeBlockModule } from '@app/@ngc/ngc-code-block/ngc-code-block.module';
import { NgcPaginationModule } from '@app/@ngc/ngc-pagination/ngc-pagination.module';
import { NgcTextareaModule } from '@app/@ngc/ngc-textarea/ngc-textarea.module';
import { NgcSelectModule } from '@app/@ngc/ngc-select/ngc-select.module';
import { NgcCardModule } from '@app/@ngc/ngc-card';
import { NgcMenuModule } from '@app/@ngc/ngc-menu';
import { NgcExpansionPanelModule } from '@app/@ngc/ngc-expansion-panel/ngc-expansion-panel.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoreModule } from '@app/@core';
import { NgcListModule } from '@app/@ngc/ngc-list';
import { NgcDialogModule } from '@app/@ngc/ngc-dialog';
import { MyDialogComponent } from './partial/my-dialog.component';
import { NgcCarouselModule } from '@app/@ngc/ngc-carousel';
import { NgcDrawerModule } from '@app/@ngc/ngc-drawer';
import { NgcScrollBarModule } from '@app/@ngc/ngc-scroll-bar';
// import { NgcSliderModule } from '@app/@ngc/ngc-slider';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [ GuidelineComponent, MyDialogComponent ],
  imports: [
		DragDropModule,
    BrowserModule, CoreModule,

    NgcTooltipModule, NgcColorPickerModule, NgcSwitchModule, NgcCheckboxModule, NgcRadioModule, NgcClipboardCopyModule, NgcDividerModule,
    NgcLoadingModule, NgcToastModule, NgcIconModule, NgcTruncateModule, NgcTabModule, NgcBreadcrumbModule, NgcProgressBarModule,
    NgcButtonModule, NgcRangeInputModule, NgcBadgeModule, NgcCalendarModule, NgcDatePickerModule, NgcButtonToggleModule,
    NgcCodeBlockModule, NgcPaginationModule, NgcTextareaModule, NgcSelectModule,
    NgcCardModule, NgcMenuModule, NgcExpansionPanelModule, NgcListModule, NgcDialogModule, NgcCarouselModule,
    NgcDrawerModule, NgcScrollBarModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [ GuidelineComponent ],
  providers: [],
  bootstrap: []
})
export class GuidelineModule {}
