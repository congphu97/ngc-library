import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcCollapseMenuComponent } from './ngc-collapse-menu.component';
import { NgcIconModule } from '../ngc-icon/ngc-icon.module';

@NgModule({
	declarations: [ NgcCollapseMenuComponent ],
	imports: [
		CommonModule,
		NgcIconModule
	],
	exports: [ NgcCollapseMenuComponent ]
})
export class NgcCollapseMenuModule {}
