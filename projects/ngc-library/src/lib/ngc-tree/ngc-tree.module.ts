import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgcCheckboxModule } from '../ngc-checkbox/ngc-checkbox.module';
import { NgcIconModule } from '../ngc-icon/ngc-icon.module';

import { NgcTreeComponent } from './ngc-tree.component';
import { NgcTreeNodeComponent } from './ngc-tree-node.component';

@NgModule({
	declarations: [
		NgcTreeComponent,
		NgcTreeNodeComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		NgcCheckboxModule,
		NgcIconModule,
	],
	exports: [
		NgcTreeComponent,
		NgcTreeNodeComponent,
	]
})
export class NgcTreeModule { }
