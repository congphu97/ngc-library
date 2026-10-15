import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ResizableModule } from 'angular-resizable-element';

import { CoreModule, FormModule } from '@core';

import { NgcMenuModule } from '../ngc-menu';
import { NgcIconModule } from '../ngc-icon';
import { NgcButtonModule } from '../ngc-button';
import { NgcSearchBoxModule } from '../ngc-search-box';
import { NgcDatePickerModule } from '../ngc-date-picker';
import { NgcTruncateModule } from '../ngc-truncate';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTableComponent } from './table/ngc-table.component';
import { NgcCdkTableComponent } from './cdk-table/ngc-cdk-table.component';
import { NgcExcelTableComponent } from './excel-table/ngc-excel-table.component';
import { NgcExcelHeaderCellComponent } from './excel-table/ngc-excel-header-cell.component';
import { NgcExcelCellComponent } from './excel-table/ngc-excel-cell.component';



@NgModule({
	imports: [
		CdkTableModule, ResizableModule, ScrollingModule,

		CoreModule, FormModule,

		NgcMenuModule, NgcIconModule, NgcButtonModule,
		NgcSearchBoxModule, NgcDatePickerModule, NgcTruncateModule,
		NgcTooltipModule,
	],
	exports: [
		CdkTableModule,

		NgcTableComponent, NgcCdkTableComponent, NgcExcelTableComponent,
		NgcExcelHeaderCellComponent, NgcExcelCellComponent,
	],
	declarations: [
		NgcTableComponent, NgcCdkTableComponent, NgcExcelTableComponent,
		NgcExcelHeaderCellComponent, NgcExcelCellComponent,
	],
	providers: [],
})
export class NGCTableModule {}
