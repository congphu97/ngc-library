import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcTooltipComponent } from './ngc-tooltip.component';

describe('NgcTooltipComponent', () => {
  let component: NgcTooltipComponent;
  let fixture: ComponentFixture<NgcTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
