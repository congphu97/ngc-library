import { ChangeDetectorRef, Component, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NgcToastService, NgcToastType } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';
// import { untilCmpDestroyed } from 'angular-core';
import { Socket } from 'ngx-socket-io';
import { startWith } from 'rxjs/operators';
import { forEach, indexOf } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import moment, { Moment } from 'moment';
import { COLOR } from '@app/@resources';
import { NgcICalendarEvent } from '@app/@ngc/ngc-calendar';
import { untilCmpDestroyed } from 'angular-core';
@Component({
	selector: 'guideline',
	templateUrl: './guideline.html',
	styleUrls: ['./guideline.component.scss'],
})
export class GuidelineComponent implements OnInit {

	public title = 'Components';
	public currentCompTemplate: TemplateRef<any>;
	public selectedCompIndex: number = 0;
	public console = console;
	public slideValue: number = 50;
	public currentDate: Moment = moment().subtract(1, 'M');
	public currentDateRange: Moment[] = [this.currentDate.clone(), this.currentDate.clone().add(3, 'd')];
	public minDate: Moment = this.currentDate.clone().subtract(10, 'd');
	public maxDate: Moment = this.currentDate.clone().add(10, 'd');

	exampleCode: string = `
			@Component({
			selector: 'app-example',
			templateUrl: './example.component.html'
			})
			export class ExampleComponent {}
		`;

	@ViewChildren('compTemplate', { read: TemplateRef }) public compTemplates: QueryList<TemplateRef<any>>;

	get compTemplatesArr(): TemplateRef<any>[] { return (this.compTemplates as IObject)?._results; }

	constructor(
		private _route: ActivatedRoute,
		private _ngcToastService: NgcToastService,
		private _socket: Socket,
		private _cdr: ChangeDetectorRef
	) { };

	ngOnInit() {
		this.connectionSocket();
		this.selectedCompIndex = +this._route.snapshot.fragment || 0;
	};

	ngAfterViewInit() {
		this.currentCompTemplate = this.compTemplatesArr[this.selectedCompIndex];

		this.compTemplates
			.changes
			.pipe(
				startWith(this.compTemplates),
  				untilCmpDestroyed(this) as any
			)
			.subscribe(() => {
				forEach(this.compTemplatesArr, (item: TemplateRef<any>) => {
					(item as IObject).label = (item as IObject)._declarationTContainer.attrs[1];
				});

				this._cdr.detectChanges();
			});
	}

	public selectCompTemplate(compTemplate: TemplateRef<any>) {
		const index: number = indexOf(this.compTemplatesArr, compTemplate);

		this.currentCompTemplate = compTemplate;
		this.selectedCompIndex = index;
		window.location.hash = this.selectedCompIndex?.toString();
	}


	public openToast(type: NgcToastType) {
		this._ngcToastService.show('Toast title', 'Toast content', { type, position: 'top-right', duration: 5000 });
	}

	public connectionSocket() {
		this._socket.emit('message', '123');
		this._socket.on('hello', (event) => console.log('hello', event))
	}

	public selectOptions = [
		{ label: 'Option 1', value: 'option1' },
		{ label: 'Option 2', value: 'option2' },
		{ label: 'Option 3', value: 'option3' }
	];

	public calendarEvents: NgcICalendarEvent[] = [
		{
			id: 1,
			name: 'First event of the day',
			moment: moment(),
			color: COLOR.WHITE,
		},
		{
			id: 2,
			name: 'And another one',
			moment: moment(),
			color: COLOR.BLACK,
		},
		{
			id: 11,
			name: 'Inactive event',
			inactive: true,
			moment: moment(),
			color: COLOR.BLUE['400'],
		},
		{
			id: 3,
			name: 'Event this',
			moment: moment().add(1, 'h'),
			color: COLOR.PRIMARY,
			actionable: true,
		},
		{
			id: 4,
			name: 'Event that',
			moment: moment().add(1, 'h'),
			color: COLOR.SUCCESS,
		},
		{
			id: 5,
			name: 'Eve',
			moment: moment().add(1, 'h'),
			color: COLOR.GREEN['400'],
		},
		{
			id: 6,
			name: 'Farewell',
			moment: moment().add(1, 'h'),
		},
		{
			id: 7,
			name: 'YEP',
			moment: moment().add(1, 'd'),
			color: COLOR.SECONDARY,
			actionable: true,
		},
		{
			id: 7,
			name: 'YEP 2',
			moment: moment().add(1, 'd'),
			color: COLOR.DEFAULT,
		},
		{
			id: 8,
			name: 'YSP',
			moment: moment().add(1, 'd'),
		},
		{
			id: 9,
			name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
			moment: moment().add(1, 'd'),
			color: COLOR.INFO,
		},
		{
			id: 10,
			name: 'Supa long long text',
			moment: moment().add(1, 'd'),
		},
	];
}
