import { NgModule } from '@angular/core';

import { CoreModule, FormModule } from '@core';

import { NgcButtonModule } from '../ngc-button';
import { NgcIconModule } from '../ngc-icon';
import { NgcColorPickerModule } from '../ngc-color-picker';
import { NgcTooltipModule } from '../ngc-tooltip';
import { NgcTruncateModule } from '../ngc-truncate';

import { NgcFormFieldComponent } from './form-field/ngc-form-field.component';
import { NgcFormFieldErrorDirective } from './form-field-error/ngc-form-field-error.directive';
import { NgcFormFieldInputDirective } from './form-field-input/ngc-form-field-input.directive';
import { NgcFormFieldLabelDirective } from './form-field-label/ngc-form-field-label.directive';
import { NgcFormFieldHintDirective } from './form-field-hint/ngc-form-field-hint.directive';
import { NgcFormFieldPrefixDirective } from './form-field-prefix/ngc-form-field-prefix.directive';
import { NgcFormFieldSuffixDirective } from './form-field-suffix/ngc-form-field-suffix.directive';
import { NgcFormFieldDescriptionDirective } from './form-field-description/ngc-form-field-description.directive';

@NgModule({
	imports: [
		FormModule, CoreModule,

		NgcButtonModule, NgcIconModule, NgcColorPickerModule,
		NgcTooltipModule, NgcTruncateModule,
	],
	exports: [
		NgcFormFieldComponent, NgcFormFieldErrorDirective, NgcFormFieldInputDirective,
		NgcFormFieldLabelDirective, NgcFormFieldHintDirective, NgcFormFieldPrefixDirective,
		NgcFormFieldSuffixDirective, NgcFormFieldDescriptionDirective,
	],
	declarations: [
		NgcFormFieldComponent, NgcFormFieldErrorDirective, NgcFormFieldInputDirective,
		NgcFormFieldLabelDirective, NgcFormFieldHintDirective, NgcFormFieldPrefixDirective,
		NgcFormFieldSuffixDirective, NgcFormFieldDescriptionDirective,
	],
	providers: [],
})
export class NgcFormFieldModule {}
