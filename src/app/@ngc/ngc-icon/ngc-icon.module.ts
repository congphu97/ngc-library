import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcIconComponent } from './ngc-icon.component';

@NgModule({
    imports: [ CommonModule ],
    exports: [ NgcIconComponent ],
    declarations: [ NgcIconComponent ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class NgcIconModule { }
