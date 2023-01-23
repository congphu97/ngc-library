import {
	Component, Input, OnChanges,
	SimpleChanges, ContentChildren, QueryList,
	AfterContentInit, EventEmitter, Output
} from '@angular/core';
import { NgcTabComponent } from '../tab/ngc-tab.component';
import _ from 'lodash';

@Component({
  selector: 'ngc-tab-group',
  templateUrl: './ngc-tab-group.html',
  styleUrls: ['./ngc-tab-group.scss']
})
export class NgcTabGroupComponent implements OnChanges, AfterContentInit {

	@Input() selectedIndex: number = 0;

	@Output() public selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
	@Output() public tabChanged: EventEmitter<NgcTabComponent> = new EventEmitter<NgcTabComponent>();

	@ContentChildren( NgcTabComponent, { descendants: true } ) public tabItems: QueryList<NgcTabComponent>;

	public items: NgcTabComponent[];

	constructor() {};

	ngOnChanges( changes: SimpleChanges ) {
		if ( changes.selectedIndex ) this.selected( this.selectedIndex || 0 );
	}

	ngAfterContentInit() {
		console.log( this.tabItems );
		this.items = ( this.tabItems as any )._results;
	}

	public selected( index: number ) {
		this.selectedIndex = index;
		this.selectedIndexChange.emit( index );
		this.tabChanged.emit( this.items[ index ] );
	}

}
