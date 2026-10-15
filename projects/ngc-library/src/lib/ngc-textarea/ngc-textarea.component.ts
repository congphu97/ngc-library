import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounce } from 'lodash';
import type { DebouncedFunc } from 'lodash';
import { CoerceBoolean } from '@core';

@Component({
  selector: 'ngc-textarea',
  templateUrl: './ngc-textarea.component.html',
  styleUrls: ['./ngc-textarea.component.scss']
})
export class NgcTextareaComponent implements OnInit, OnDestroy {

  @Input() public label: string = 'Textarea';
  @Input() public placeholder: string = 'Enter content...';
  @Input() public rows: number = 5;
  @Input() public cols: number = 40;
  @Input() public appearance: 'default' | 'filled' | 'underlined' | 'borderless' = 'default';
  @Input() public resize: 'vertical' | 'horizontal' | 'both' | 'none' = 'vertical';
  @Input() public debounceTime = 300;
  
  @Input() @CoerceBoolean() public disabled: boolean = false;
  @Input() @CoerceBoolean() public invalid: boolean = false;
  @Input() @CoerceBoolean() public showCounter: boolean = false;
  
  @Input() public maxLength: number;
  @Input() public errorMessage: string = 'Error';

  @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();

  public message: string = '';

  private debouncedEmit!: DebouncedFunc<(value: string) => void>;

  public get isInvalid(): boolean {
    return this.invalid;
  }

  ngOnInit(): void {
    this.debouncedEmit = debounce((val: string) => {
      this.valueChange.emit(val);
      console.log('Emitted value:', val);
    }, this.debounceTime);
  }

  ngOnDestroy(): void {
    this.debouncedEmit?.cancel();
  }

  contentChanged(newContent: string) {
    this.message = newContent;
    this.debouncedEmit(newContent);
  }

}
