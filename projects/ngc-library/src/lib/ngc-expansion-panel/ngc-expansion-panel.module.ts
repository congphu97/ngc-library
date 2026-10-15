import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CoreModule } from '@core';

import { NgcIconModule } from '../ngc-icon';
import { NgcScrollBarModule } from '../ngc-scroll-bar';

import { NgcAccordionComponent } from './accordion/ngc-accordion.component';
import { NgcExpansionPanelComponent } from './expansion-panel/ngc-expansion-panel.component';
import { NgcExpansionPanelHeaderComponent } from './expansion-panel-header/ngc-expansion-panel-header.component';
import { NgcExpansionPanelContentComponent } from './expansion-panel-content/ngc-expansion-panel-content.component';
import { NgcExpansionPanelContentDirective } from './expansion-panel-content/ngc-expansion-panel-content.directive';

@NgModule({
	imports: [
		DragDropModule,

		CoreModule,

		NgcIconModule, NgcScrollBarModule,
	],
	exports: [
		NgcAccordionComponent, NgcExpansionPanelComponent, NgcExpansionPanelHeaderComponent,
		NgcExpansionPanelContentComponent, NgcExpansionPanelContentDirective,
	],
	declarations: [
		NgcAccordionComponent, NgcExpansionPanelComponent, NgcExpansionPanelHeaderComponent,
		NgcExpansionPanelContentComponent, NgcExpansionPanelContentDirective,
	],
	providers: [],
})
export class NgcExpansionPanelModule {}
