import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CoreModule } from '@core';

import { NgcIconModule } from '../ngc-icon';
import { NgcRadioModule } from '../ngc-radio';
import { NgcScrollBarModule } from '../ngc-scroll-bar';

import { NgcGridComponent } from './grid/ngc-grid.component';
import { NgcGridItemComponent } from './grid-item/ngc-grid-item.component';

@NgModule({
	imports: [
		DragDropModule,

		CoreModule,

		NgcIconModule, NgcRadioModule, NgcScrollBarModule,
	],
	exports		: [ NgcGridComponent, NgcGridItemComponent ],
	declarations: [ NgcGridComponent, NgcGridItemComponent ],
	providers	: [],
})
export class NgcGridModule {}
