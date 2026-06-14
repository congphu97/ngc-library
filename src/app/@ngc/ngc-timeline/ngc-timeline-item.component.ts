import { Component, Input, Directive, Optional, ContentChild, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { NgcTimelineComponent } from './ngc-timeline.component';

@Directive({
  selector: '[ngcTimelineDot]'
})
export class NgcTimelineDotDirective {}

@Directive({
  selector: '[ngcTimelineSide]'
})
export class NgcTimelineSideDirective {}

@Component({
  selector: 'ngc-timeline-item',
  templateUrl: './ngc-timeline-item.html',
  host: {
    'class': 'ngc-timeline-item'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgcTimelineItemComponent {
  @Input() public color: string = 'var(--ngc-color-primary-default)';
  @Input() public time: string;
  @Input() public selected: boolean = false;

  @HostBinding('class.ngc-timeline-item--active')
  get classActive(): boolean { return this.selected; }

  @ContentChild(NgcTimelineDotDirective) public customDot?: NgcTimelineDotDirective;

  constructor(@Optional() public timeline: NgcTimelineComponent) {}
}
