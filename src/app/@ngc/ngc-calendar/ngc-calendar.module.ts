import { NgModule } from '@angular/core';

import { CoreModule, FormModule } from '@core';

// import { WGCButtonToggleModule } from '../wgc-button-toggle';
// import { WGCCardModule } from '../wgc-card';
// import { WGCDatePickerModule } from '../wgc-date-picker';
// import { WGCFormFieldModule } from '../wgc-form-field';
// import { WGCIconModule } from '../wgc-icon';
// import { WGCInlineInputModule } from '../wgc-inline-input';
// import { WGCMenuModule } from '../wgc-menu';
// import { WGCScrollBarModule } from '../wgc-scroll-bar';
// import { WGCTruncateModule } from '../wgc-truncate';
// import { WGCTooltipModule } from '../wgc-tooltip';

import { NgcButtonModule } from '../ngc-button';
import { NgcCalendarDayViewComponent } from './day-view/ngc-calendar-day-view.component';
import { NgcCalendarWeekViewComponent } from './week-view/ngc-calendar-week-view.component';
import { NgcCalendarMonthViewComponent } from './month-view/ngc-calendar-month-view.component';
import { NgcCalendarComponent } from './ngc-calendar.component';
import { NgcIconModule } from '../ngc-icon';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcDatePickerModule } from '../ngc-date-picker';
import { NgcScrollBarModule } from '../ngc-scroll-bar';

@NgModule({
	imports: [
		CoreModule, FormModule,

		NgcButtonModule, NgcIconModule, NgcTruncateModule, NgcTooltipModule,
		NgcDatePickerModule, NgcScrollBarModule, 

		// WGCButtonModule, WGCButtonToggleModule, WGCCardModule,
		// WGCDatePickerModule, WGCFormFieldModule, WGCIconModule,
		// WGCInlineInputModule, WGCMenuModule, WGCScrollBarModule,
		// WGCTruncateModule, WGCTooltipModule,
	],
	exports: [
		NgcCalendarDayViewComponent,	NgcCalendarWeekViewComponent,	NgcCalendarMonthViewComponent,
		NgcCalendarComponent,
	],
	declarations: [
		NgcCalendarDayViewComponent,	NgcCalendarWeekViewComponent,	NgcCalendarMonthViewComponent,
		NgcCalendarComponent,
	],
	providers: [],
})
export class NgcCalendarModule {}
