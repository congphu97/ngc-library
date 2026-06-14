import {
  Component, EventEmitter, Input, Output, OnInit, OnDestroy,
  ElementRef, ChangeDetectionStrategy, ChangeDetectorRef,
  ViewEncapsulation, ViewChild, TemplateRef
} from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';

export interface NgcSelectOption {
  label: string;
  value: any;
  description?: string;
  disabled?: boolean;
}

@Component({
  selector: 'ngc-select',
  templateUrl: './ngc-select.component.html',
  styleUrls: ['./ngc-select.component.scss'],
  host: { class: 'ngc-select' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgcSelectComponent implements OnInit, OnDestroy {

  @Input() options: NgcSelectOption[] = [];
  @Input() selectedValue: any;
  @Input() placeholder: string = 'Select an option';
  @Input() disabled: boolean = false;
  @Input() label: string;

  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('triggerEl') triggerEl: ElementRef;
  @ViewChild('panelTpl') panelTpl: TemplateRef<any>;

  public isOpen: boolean = false;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;

  constructor(
    private _overlay: Overlay,
    private _elementRef: ElementRef,
    private _cdr: ChangeDetectorRef,
    private _vcRef: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this._overlayRef?.detach();
    this._overlayRef?.dispose();
  }

  get selectedOption(): NgcSelectOption | null {
    return this.options?.find(o => o.value === this.selectedValue) || null;
  }

  get displayLabel(): string {
    return this.selectedOption?.label || this.placeholder;
  }

  get hasValue(): boolean {
    return this.selectedValue !== undefined && this.selectedValue !== null;
  }

  public toggle() {
    if (this.disabled) return;
    this.isOpen ? this.close() : this.open();
  }

  public open() {
    if (this.isOpen) return;

    this._overlayRef = this._overlayRef || this._createOverlayRef();
    this._portal = this._portal || new TemplatePortal(this.panelTpl, this._vcRef);

    this._overlayRef.attach(this._portal);
    this.isOpen = true;
    this._cdr.markForCheck();
  }

  public close() {
    this._overlayRef?.detach();
    this.isOpen = false;
    this._cdr.markForCheck();
  }

  public selectOption(option: NgcSelectOption) {
    if (option.disabled) return;
    this.selectedValue = option.value;
    this.selectionChange.emit(option.value);
    this.close();
  }

  public isSelected(option: NgcSelectOption): boolean {
    return option.value === this.selectedValue;
  }

  private _createOverlayRef(): OverlayRef {
    const positionStrategy: FlexibleConnectedPositionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withFlexibleDimensions(false)
      .withPush(true)
      .withPositions([
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
        { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -4 },
      ]);

    const config = new OverlayConfig({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'ngc-select-overlay',
      scrollStrategy: this._overlay.scrollStrategies.reposition({ autoClose: true }),
    });

    const overlayRef = this._overlay.create(config);

    overlayRef.backdropClick().subscribe(() => this.close());
    overlayRef.keydownEvents().subscribe((e: KeyboardEvent) => {
      if (e.key === 'Escape') this.close();
    });

    return overlayRef;
  }

  get triggerWidth(): number {
    return this._elementRef.nativeElement.getBoundingClientRect().width;
  }
}
