import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, Optional } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'guideline-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class GuidelineHeaderComponent implements OnInit {
  @Input() isDarkMode: boolean = false;
  @Output() toggleTheme = new EventEmitter<boolean>();
  @Output() componentClick = new EventEmitter<void>();
  @Output() logoClick = new EventEmitter<void>();

  public onLogoClick() {
    this.logoClick.emit();
  }

  constructor(
    private _cdr: ChangeDetectorRef,
    @Optional() public app: AppComponent
  ) {}

  ngOnInit() {
    // Synchronize initial dark mode state from document.body
    this.isDarkMode = document.body.classList.contains('dark-theme');
  }

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    if (this.app) {
      this.app.setDarkMode(this.isDarkMode);
    }
    this.toggleTheme.emit(this.isDarkMode);
    this._cdr.detectChanges();
  }

  public onComponentClick() {
    this.componentClick.emit();
  }
}
