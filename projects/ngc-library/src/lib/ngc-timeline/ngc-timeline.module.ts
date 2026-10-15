import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcTimelineComponent } from './ngc-timeline.component';
import { NgcTimelineItemComponent, NgcTimelineDotDirective, NgcTimelineSideDirective } from './ngc-timeline-item.component';

@NgModule({
  declarations: [
    NgcTimelineComponent,
    NgcTimelineItemComponent,
    NgcTimelineDotDirective,
    NgcTimelineSideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgcTimelineComponent,
    NgcTimelineItemComponent,
    NgcTimelineDotDirective,
    NgcTimelineSideDirective
  ]
})
export class NgcTimelineModule {}
