import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcTabGroupComponent } from './tab-group/ngc-tab-group.component';
import { NgcTabComponent } from './tab/ngc-tab.component';
import { NgcTabHeaderDirective } from './directive/ngc-tab-header.directive';
import { NgcTabContentDirective } from './directive/ngc-tab-content.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NgcTabGroupComponent, NgcTabComponent, NgcTabHeaderDirective, NgcTabContentDirective
  ],
  imports: [
    CommonModule, BrowserAnimationsModule
  ],
  exports: [
    NgcTabGroupComponent, NgcTabComponent, NgcTabHeaderDirective, NgcTabContentDirective
  ]
})
export class NgcTabModule { }
