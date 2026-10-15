import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngc-skeleton',
  templateUrl: './ngc-skeleton.component.html',
  styleUrls: ['./ngc-skeleton.component.scss']
})
export class NgcSkeletonComponent {
  @Input() width: string | number = '100%';
  @Input() height: string | number = '20px';
  @Input() borderRadius: string = '4px';
  @Input() circle: boolean = false;
}
