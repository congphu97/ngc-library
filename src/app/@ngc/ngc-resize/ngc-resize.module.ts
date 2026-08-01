import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcResizableContainerComponent } from './ngc-resizable-container.component';
import { NgcResizablePanelComponent } from './ngc-resizable-panel.component';
import { NgcResizableHandleComponent } from './ngc-resizable-handle.component';

@NgModule({
	declarations: [
		NgcResizableContainerComponent,
		NgcResizablePanelComponent,
		NgcResizableHandleComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		NgcResizableContainerComponent,
		NgcResizablePanelComponent,
		NgcResizableHandleComponent,
	]
})
export class NgcResizeModule { }
