import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CoerceBoolean } from '@core';

@Component({
  selector: 'ngc-timeline',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./ngc-timeline.scss'],
  host: {
    'class': 'ngc-timeline'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgcTimelineComponent {
  @Input() @CoerceBoolean() public alternate: boolean = false;
  @Input() @CoerceBoolean() public horizontal: boolean = false;

  @HostBinding('class.ngc-timeline--alternate')
  get classAlternate(): boolean {
    return this.alternate;
  }

  @HostBinding('class.ngc-timeline--horizontal')
  get classHorizontal(): boolean {
    return this.horizontal;
  }
}
