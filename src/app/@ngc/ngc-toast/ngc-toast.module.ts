import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'angular-core';

import { NgcToastGroupComponent } from './toast-group/ngc-toast-group.component';
import { NgcToastComponent } from './toast/ngc-toast.component';
import { NgcToastService } from './toast/ngc-toast.service';

@NgModule({
  declarations: [ NgcToastComponent, NgcToastGroupComponent ],
  imports: [ CommonModule, CoreModule ],
  exports: [ NgcToastComponent, NgcToastGroupComponent ],
  providers: [ NgcToastService ]
})
export class NgcToastModule { }
