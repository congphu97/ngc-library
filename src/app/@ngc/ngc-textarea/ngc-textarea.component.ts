import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounce } from 'lodash';
import type { DebouncedFunc } from 'lodash';

@Component({
  selector: 'ngc-textarea',
  templateUrl: './ngc-textarea.component.html',
  styleUrls: ['./ngc-textarea.component.scss']
})
export class NgcTextareaComponent implements OnInit, OnDestroy {

  @Input() label: string = 'Textarea';
  @Input() rows: number = 5;
  @Input() cols: number = 40;
  @Input() debounceTime = 300;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  public message: string = '';

  private debouncedEmit!: DebouncedFunc<(value: string) => void>;

  ngOnInit(): void {
    this.debouncedEmit = debounce((val: string) => {
      this.valueChange.emit(val);
      this.message = val;
      console.log('Emitted value:', val);
    }, this.debounceTime);
  }

  ngOnDestroy(): void {
    this.debouncedEmit?.cancel();
  }

  contentChanged(newContent: string) {
    this.debouncedEmit(newContent);
  }

}
