import { ChangeDetectorRef, Component, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { AppComponent } from '../app.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgcToastService } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';
// import { untilCmpDestroyed } from 'angular-core';
import { Socket } from 'ngx-socket-io';
import { startWith } from 'rxjs/operators';
import { forEach, indexOf, filter, search } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import moment, { Moment } from 'moment';
import { COLOR } from '@app/@resources';
import { NgcICalendarEvent } from '@app/@ngc/ngc-calendar';
import { untilCmpDestroyed } from 'angular-core';
import { NgcDialogService, NgcIDialogPagerType, NgcIDialogRef } from '@app/@ngc/ngc-dialog';
import { MyDialogComponent } from './partial/dialog/my-dialog.component';
import { Observable, Observer } from 'rxjs';
import { NgcIToastType } from '@app/@ngc/ngc-toast/toast/ngc-toast.component';
import { NgcIMember } from '@app/@ngc/ngc-member-picker';
import { NgcCdkTableDataSource } from '@app/@ngc/ngc-table';

const COMPONENT_ICON_MAP: Record<string, string> = {
	'Accordion'          : 'collapse',
	'Alert'              : 'warning',
	'Avatar'             : 'user',
	'Avatar Picker'      : 'users',
	'Badge'              : 'label',
	'Breadcrumb'         : 'chevron-right',
	'Button'             : 'sliders',
	'Button Toggle'      : 'switch',
	'Calendar'           : 'calendar',
	'Card'               : 'collection',
	'Carousel'           : 'board',
	'Checkbox'           : 'checkbox',
	'Clipboard'          : 'clipboard',
	'Code Block'         : 'code-block',
	'Collapse'           : 'minimize-left',
	'Color Picker'       : 'pick-color',
	'Color & Typography' : 'palette',
	'Data Table'         : 'data-list',
	'Date Picker'        : 'calendar-check',
	'Dialog'             : 'message',
	'Divide'             : 'minus',
	'Dropdown'           : 'dropdown',
	'Emoji Picker'       : 'emoji',
	'Form Field'         : 'form',
	'Icon'               : 'image',
	'Input'              : 'text-input',
	'List'               : 'list',
	'Loading'            : 'progress-auto',
	'Member Picker'      : 'user-plus',
	'Menu'               : 'more-vertical',
	'Pagination'         : 'more-horizontal',
	'Popover'            : 'info',
	'Progress'           : 'progress',
	'Radio Group'        : 'sliders',
	'Search Box '        : 'search',
	'Select'             : 'dropdown',
	'Sheet'              : 'document',
	'Sidebar'            : 'sidebar',
	'Skeleton'           : 'template',
	'Sonner'             : 'bell-on',
	'Switch'             : 'switch',
	'Table'              : 'table',
	'Tabs'               : 'tab-plus',
	'Textarea'           : 'long-text',
	'Toast'              : 'bell-new',
	'Tooltip'            : 'help',
};

@Component({
	selector: 'guideline',
	templateUrl: './guideline.html',
	styleUrls: ['./guideline.component.scss'],
})
export class GuidelineComponent implements OnInit {

	public title = 'Components';
	public opened = true;
	public isDarkMode = false;
	public componentDocs: any = {};

	public toggleDrawer() {
		this.opened = !this.opened;
		this._cdr.detectChanges();
	}

	public onThemeToggle(isDark: boolean) {
		this.isDarkMode = isDark;
		this._cdr.detectChanges();
	}

	public scrollToContact() {
		this.opened = true;
		this._cdr.detectChanges();
		setTimeout(() => {
			const el = document.getElementById('guideline-contact-header');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
			}
		}, 100);
	}

	public currentCompTemplate: TemplateRef<any>;
	public selectedCompIndex: number = 0;
	public console = console;
	public slideValue: number = 50;
	public currentDate: Moment = moment().subtract(1, 'M');
	public currentDateRange: Moment[] = [this.currentDate.clone(), this.currentDate.clone().add(3, 'd')];
	public minDate: Moment = this.currentDate.clone().subtract(10, 'd');
	public maxDate: Moment = this.currentDate.clone().add(10, 'd');
	public suggestionFn: typeof this.suggestion = this.suggestion.bind(this);
	public suggestionServerSideFn: typeof this.suggestionServerSide = this.suggestionServerSide.bind(this);

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
		public appComponent: AppComponent,
	) { };

	ngOnInit() {
		this.isDarkMode = document.body.classList.contains('dark-theme');
		this.connectionSocket();
		this.selectedCompIndex = +this._route.snapshot.fragment || 0;
		this.dataSource.data = this.positions;
		this.loadComponentDocs();
	};

	public loadComponentDocs() {
		fetch('assets/component-doc.json')
			.then(res => res.json())
			.then(data => {
				this.componentDocs = data;
				this._cdr.detectChanges();
			})
			.catch(err => console.error('Failed to load component docs', err));
	}

	public getComponentDocs(label: string): any {
		return this.componentDocs ? this.componentDocs[label] : null;
	}

	public getComponentTsCode(label: string): string {
		const doc = this.getComponentDocs(label);
		return doc ? doc.sourceCode : '';
	}

	ngAfterViewInit() {
		this.currentCompTemplate = this.compTemplatesArr[this.selectedCompIndex];

		this.compTemplates
			.changes
			.pipe(
				startWith(this.compTemplates),
				untilCmpDestroyed(this) as any
			)
			.subscribe(() => {
				console.log('Comp templates', this.compTemplatesArr);
				forEach(this.compTemplatesArr, (item: TemplateRef<any>) => {
					const label: string = (item as IObject)._declarationTContainer.attrs[1];
					(item as IObject).label = label;
					(item as IObject).icon = COMPONENT_ICON_MAP[label] || 'collection';
				});

				this._cdr.detectChanges();
			});
	}

	get currentCompLabel(): string {
		return (this.currentCompTemplate as any)?.label || '';
	}

	public selectCompTemplate(compTemplate: TemplateRef<any>) {
		const index: number = indexOf(this.compTemplatesArr, compTemplate);

		this.currentCompTemplate = compTemplate;
		this.selectedCompIndex = index;
		window.location.hash = this.selectedCompIndex?.toString();
	}

	get prevComponent(): any {
		if (!this.compTemplatesArr || this.compTemplatesArr.length <= 1) {
			return null;
		}
		const prevIndex = (this.selectedCompIndex - 1 + this.compTemplatesArr.length) % this.compTemplatesArr.length;
		return this.compTemplatesArr[prevIndex];
	}

	get nextComponent(): any {
		if (!this.compTemplatesArr || this.compTemplatesArr.length <= 1) {
			return null;
		}
		const nextIndex = (this.selectedCompIndex + 1) % this.compTemplatesArr.length;
		return this.compTemplatesArr[nextIndex];
	}

	public navigateToPrev(): void {
		const prev = this.prevComponent;
		if (prev) {
			this.selectCompTemplate(prev);
		}
	}

	public navigateToNext(): void {
		const next = this.nextComponent;
		if (next) {
			this.selectCompTemplate(next);
		}
	}


	public openToast(type: NgcIToastType) {
		this._ngcToastService.show('Toast title', 'Toast content', { type, position: 'top-right', duration: 5000 });
	}

	public connectionSocket() {
		this._socket.emit('message', '123');
		this._socket.on('hello', (event) => console.log('hello', event))
	}

	public selectOptions = [
		{ label: 'USD — United States Dollar', value: 'USD' },
		{ label: 'EUR — Euro', value: 'EUR' },
		{ label: 'GBP — British Pound', value: 'GBP' },
		{ label: 'JPY — Japanese Yen', value: 'JPY' },
		{ label: 'VND — Vietnamese Dong', value: 'VND' },
	];
	public selectValue: string = 'USD';

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

	public members: NgcIMember[] = [
		{ id: 1, name: 'Member 1', status: 1 },
		{ id: 2, name: 'Member 2', status: 1 },
		{ id: 3, name: 'Member 3', status: 2 },
		{ id: 4, name: 'Member 4', status: 2 },
		{ id: 5, name: 'Member 5', status: 3 },
		{ id: 6, name: 'Member 6', status: 1 },
		{ id: 7, name: 'Member 7', status: 1 },
	];
	public members$: Observable<NgcIMember[]> = new Observable((observer: Observer<NgcIMember[]>) => {
		observer.next(this.members);
	});

	public arr: number[] = [ 1, 2, 3, 4, 5 ];

	public displayedColumns: string[] = [ 'positions', 'description', 'kpi', 'numberOfMembers', 'status' ];

	public dataSource: NgcCdkTableDataSource<any> = new NgcCdkTableDataSource<any>();

	public positions: IObject[] = [
		{
			id: 1,
			order: 1,
			name: 'CEO',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			kpi: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			noOfMembers: 1,
			status: 'Active',
			email: 'ceo@example.com',
			website: 'https://example.com',
			done: true,
			money: 100000,
			assignees: [1],
			priorities: ['Urgent'],
		},
		{
			id: 2,
			order: 2,
			name: 'Vice President',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			kpi: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			noOfMembers: 1,
			status: 'Active',
			email: 'vice@example.com',
			website: 'https://example.com',
			done: true,
			money: 100000,
			assignees: [1],
			priorities: ['Urgent'],
		},
		{
			id: 3,
			order: 3,
			name: 'Head of Department',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			kpi: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			noOfMembers: 5,
			status: 'Active',
			email: 'head@example.com',
			website: 'https://example.com',
			done: true,
			money: 100000,
			assignees: [1],
			priorities: ['Urgent'],
		},
		{
			id: 4,
			order: 4,
			name: 'CFO',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			kpi: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			noOfMembers: 2,
			status: 'Active',
			email: 'cfo@example.com',
			website: 'https://example.com',
			done: true,
			money: 100000,
			assignees: [1],
			priorities: ['Urgent'],
		},
		{
			id: 5,
			order: 5,
			name: 'CCO',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			kpi: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			noOfMembers: undefined,
			status: 'Active',
			email: 'cco@example.com',
			website: 'https://example.com',
			done: true,
			money: 100000,
			assignees: [1],
			priorities: ['Urgent'],
		},
		{
			id: 6,
			order: 6,
			name: 'CMO',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			kpi: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
			noOfMembers: undefined,
			status: 'Active',
			email: 'cmo@example.com',
			website: 'https://example.com',
			done: true,
			money: 100000,
			assignees: [1],
			priorities: ['Urgent'],
		},
		{
			id: 7,
			order: 7,
			name: 'WFO',
			description: undefined,
			kpi: undefined,
			noOfMembers: undefined,
			status: undefined,
			email: undefined,
			done: false,
			money: undefined,
			assignees: undefined,
			priorities: undefined,
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

	/**
	 * @param {string} searchStr
	 * @return {IObject}
	 */
	public suggestion(searchStr: string): IObject[] {
		return filter(this.positions, (position: IObject) => {
			return search(position.name, searchStr);
		});
	}

	/**
	 * @param {string} searchStr
	 * @return {Observable}
	 */
	public suggestionServerSide(searchStr: string): Observable<IObject[]> {
		return new Observable((observer: Observer<IObject[]>) => {
			observer.next(
				filter(this.positions, (position: IObject) => {
					return search(position.name, searchStr);
				})
			);
		});
	}

	// /**
	//  * @return {Observable}
	//  */
	// public mentionSource(): Observable<NgcIMention[]> | NgcIMention[] {
	// 	return new Observable( ( observer: Observer<NgcIMention[]> ) => {
	// 		const _mentionSource: NgcIMention[] = _.map( this.userMentions, ( user: IUser ) => ({
	// 			id		: user.id,
	// 			value	: user.name,
	// 			link	: '',
	// 			avatar	: user.avatar,
	// 		}) );

	// }

	public onRowDropped(event: CdkDragDrop<any[]>) {
		moveItemInArray(this.positions, event.previousIndex, event.currentIndex);
		this.dataSource.data = [...this.positions];
	}
}
