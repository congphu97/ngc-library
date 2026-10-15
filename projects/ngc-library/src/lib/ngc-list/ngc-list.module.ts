import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CoreModule, FormModule } from '@core';

import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcButtonModule } from '../ngc-button';
import { NgcTooltipModule } from '../ngc-tooltip';

import { NgcListComponent } from './list/ngc-list.component';
import { NgcListItemComponent } from './list-item/ngc-list-item.component';
import { NgcTruncateModule } from '../ngc-truncate/ngc-truncate.module';
import { NgcInlineInputModule } from '../ngc-inline-input';

@NgModule({
	imports: [
		DragDropModule,

		CoreModule, FormModule,

		NgcIconModule, NgcScrollBarModule, NgcColorPickerModule,
		NgcTruncateModule, NgcInlineInputModule, NgcButtonModule,
		NgcTooltipModule,
	],
	exports		: [ NgcListComponent, NgcListItemComponent ],
	declarations: [ NgcListComponent, NgcListItemComponent ],
	providers	: [],
})
export class NgcListModule {}
