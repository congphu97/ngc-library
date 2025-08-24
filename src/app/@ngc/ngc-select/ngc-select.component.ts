import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngc-select',
  templateUrl: './ngc-select.component.html',
  styleUrls: ['./ngc-select.component.scss']
})
export class NgcSelectComponent implements OnInit {

  @Input() options: { label: string; value: any }[] = [];
  @Input() selectedValue: any;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  valueChange(newValue: any) {
    this.selectionChange.emit(newValue);
  } 
}
