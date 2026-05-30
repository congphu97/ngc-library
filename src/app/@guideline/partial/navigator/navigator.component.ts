import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'guideline-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class GuidelineNavigatorComponent {
  @Input() public prevLabel: string;
  @Input() public nextLabel: string;

  @Output() public navigatePrev: EventEmitter<void> = new EventEmitter<void>();
  @Output() public navigateNext: EventEmitter<void> = new EventEmitter<void>();

  public onPrevClick(): void {
    this.navigatePrev.emit();
  }

  public onNextClick(): void {
    this.navigateNext.emit();
  }
}
