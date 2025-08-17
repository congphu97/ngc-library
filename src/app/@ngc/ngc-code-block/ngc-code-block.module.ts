import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CoreModule } from '@core';

import { NgcIconModule } from '../ngc-icon';
import { NgcCodeBlockComponent } from './ngc-code-block.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
    imports: [
        CoreModule,
        HighlightModule,
        NgcIconModule,
    ],
    exports: [NgcCodeBlockComponent],
    declarations: [NgcCodeBlockComponent],
    providers: [

    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NgcCodeBlockModule { }
