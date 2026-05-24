import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgcToastGroupComponent } from './toast-group/ngc-toast-group.component';
import { NgcToastComponent } from './toast/ngc-toast.component';
import { NgcToastService } from './toast/ngc-toast.service';
import { NgcIconModule } from '../ngc-icon';
import { NgcAlertModule } from '../ngc-alert/ngc-alert.module';
import { CoreModule } from '@app/@core';

@NgModule({
  declarations: [ NgcToastComponent, NgcToastGroupComponent ],
  imports: [ CoreModule, CommonModule, NgcIconModule, NgcAlertModule ],
  exports: [ NgcToastComponent, NgcToastGroupComponent ],
  providers: [ NgcToastService ]
})
export class NgcToastModule { }
