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
import { NgcDialogService, NgcIDialogPagerType, NgcIDialogRef } from '@app/@ngc/ngc-dialog';
import { MyDialogComponent } from './partial/my-dialog.component';
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
		private _cdr: ChangeDetectorRef,
		private _ngcDialogService: NgcDialogService,
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

	public photo: string[] = [
		'https://cdn.mos.cms.futurecdn.net/3maXWsbJ2mvMkeQSCMgXuT-1200-80.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32X2Mj029zKOYNWlUZVmgIfEJfhJwQPXvjw&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrLWhfsdPPfddqlZYh1HwE6h1tA9aTzMJaQ&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIBr29q7hfoCNmEZjjrIqRgGompa5FqErUQ&usqp=CAU',
		'https://i.etsystatic.com/9824055/r/il/4acfc2/1660036854/il_570xN.1660036854_aj88.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpyx7czYAkLPaGwjiO0ESTxkhw9-wlpPCyg&usqp=CAU',
		'https://www.incimages.com/uploaded_files/image/1920x1080/getty_1014168768_2000130420009280281_415027.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStGXG8xcqqZCto82IgTI3zuPca2Sj3eg6eA&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhqVtDcW8DebOiIBeJ5V5j2YHDXFI19atsg&usqp=CAU',
		'https://cdn.cnn.com/cnnnext/dam/assets/200318154845-08-people-creative-wfh-setup-large-169.jpg',
		'https://blog.modsy.com/wp-content/uploads/2020/06/image10-2-1.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vCaqdYOcF4dbFC2B9CjCIdcyFVhEtdDfOw&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95r_brGGScXpIcIhg3OvXegXcITz5IcN6XA&usqp=CAU',
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

	/**
	 * @param {any} dialog
	 * @return {void}
	 */
	public openDialog(dialog?: any) {
		const dialogRef: NgcIDialogRef = this._ngcDialogService.open(
			dialog || MyDialogComponent,
			{
				data: { content: 'This is the content pass by data' },
				width: '1346px',
				height: '795px',
				pager: true,
			}
		);

		/* eslint-disable */
		dialogRef.afterOpened()
			.pipe(untilCmpDestroyed(this))
			.subscribe(() => console.log('After dialog opened'));
		dialogRef.afterClosed()
			.pipe(untilCmpDestroyed(this))
			.subscribe(() => console.log('After dialog closed'));
		dialogRef.afterFreezed()
			.pipe(untilCmpDestroyed(this))
			.subscribe(() => console.log('After dialog freezed'));
		dialogRef.afterUnfreezed()
			.pipe(untilCmpDestroyed(this))
			.subscribe(() => console.log('After dialog unfreezed'));
		dialogRef.afterFullscreen()
			.pipe(untilCmpDestroyed(this))
			.subscribe(() => console.log('After dialog open fullscreen'));
		dialogRef.afterExitFullscreen()
			.pipe(untilCmpDestroyed(this))
			.subscribe(() => console.log('After dialog exit fullscreen'));
		dialogRef.afterPagerClicked()
			.pipe(untilCmpDestroyed(this))
			.subscribe((type: NgcIDialogPagerType) => console.log(`After dialog button ${type} clicked`));
		/* eslint-enable */
	}
}
