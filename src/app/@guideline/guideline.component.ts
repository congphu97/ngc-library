import { ChangeDetectorRef, Component, OnInit, DoCheck, QueryList, TemplateRef, ViewChildren, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgcToastService } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';
// import { untilCmpDestroyed } from 'angular-core';
import { Socket } from 'ngx-socket-io';
import { startWith } from 'rxjs/operators';
import _ from 'lodash';
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
	'Navigation Menu'    : 'menu',
	'Collapse Menu'      : 'menu',
	'Switch'             : 'switch',
	'Table'              : 'table',
	'Tabs'               : 'tab-plus',
	'Textarea'           : 'long-text',
	'Toast'              : 'bell-new',
	'Tooltip'            : 'help',
	'Tree'               : 'open-folder',
	'Resize'             : 'sliders',
	'Comment'            : 'message-circle',
};

const COMPONENT_GROUP_MAP: Record<string, string> = {
	'Accordion': 'Layout',
	'Alert': 'Feedback',
	'Avatar': 'Data Display',
	'Avatar Picker': 'Data Entry',
	'Badge': 'Data Display',
	'Breadcrumb': 'Navigation',
	'Button': 'General',
	'Button Toggle': 'Data Entry',
	'Calendar': 'Data Display',
	'Card': 'Data Display',
	'Carousel': 'Data Display',
	'Checkbox': 'Data Entry',
	'Clipboard': 'General',
	'Code Block': 'Data Display',
	'Collapse': 'Layout',
	'Collapse Menu': 'Layout',
	'Color Picker': 'Data Entry',
	'Color & Typography': 'General',
	'Data Table': 'Data Display',
	'Date Picker': 'Data Entry',
	'Dialog': 'Feedback',
	'Divide': 'Layout',
	'Dropdown': 'Data Entry',
	'Emoji Picker': 'Data Entry',
	'Form Field': 'Data Entry',
	'Icon': 'General',
	'Input': 'Data Entry',
	'List': 'Data Display',
	'Loading': 'Feedback',
	'Member Picker': 'Data Entry',
	'Menu': 'Navigation',
	'Pagination': 'Navigation',
	'Popover': 'Feedback',
	'Progress': 'Feedback',
	'Radio Group': 'Data Entry',
	'Search Box ': 'Data Entry',
	'Select': 'Data Entry',
	'Sheet': 'Layout',
	'Sidebar': 'Layout',
	'Tree': 'Data Display',
	'Resize': 'Layout',
	'Comment': 'Data Display',
	'Skeleton': 'Feedback',
	'Navigation Menu': 'Navigation',
	'Switch': 'Data Entry',
	'Table': 'Data Display',
	'Tabs': 'Navigation',
	'Textarea': 'Data Entry',
	'Toast': 'Feedback',
	'Tooltip': 'Data Display',
};

const COMPONENT_GROUP_ORDER = ['General', 'Layout', 'Navigation', 'Data Entry', 'Data Display', 'Feedback'];

@Component({
	selector: 'guideline',
	templateUrl: './guideline.html',
	styleUrls: ['./guideline.component.scss'],
})
export class GuidelineComponent implements OnInit, DoCheck {

	@ViewChild('searchBox') public searchBox: any;
	private _prevDataLength = 0;
	private _prevSearchLength = 0;

	ngDoCheck() {
		const currentLength = this.compTemplatesArr?.length || 0;
		const searchLength = this.searchBox?.filteredData?.length ?? -1;
		
		if (currentLength !== this._prevDataLength || searchLength !== this._prevSearchLength) {
			this._prevDataLength = currentLength;
			this._prevSearchLength = searchLength;
			
			this.groupedSidebarComponents = this.getGroupedComponents(
				this.searchBox?.filteredData || this.compTemplatesArr
			);
			this._cdr.detectChanges();
		}
	}

	public title = 'Components';
	public opened = true;
	public isDarkMode = false;
	public componentDocs: any = {};
	public demoDrawerOpened = false;

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

	public showOverview = true;
	public componentList: any[] = [];
	public groupedSidebarComponents: any[] = [];

	public onSearchFiltered(filteredData: any[]) {
		this.groupedSidebarComponents = this.getGroupedComponents(filteredData || this.componentList);
		this._cdr.detectChanges();
	}

	public getGroupedComponents(filteredData: any[]): { title: string; items: any[] }[] {
		const data = (filteredData && filteredData.length > 0) ? filteredData : this.componentList;
		if (!data || data.length === 0) return [];
		
		const groupMap: Record<string, any[]> = {};
		COMPONENT_GROUP_ORDER.forEach(groupName => {
			groupMap[groupName] = [];
		});

		data.forEach(item => {
			const label = (item as any)?.label;
			if (!label) return;
			const groupName = COMPONENT_GROUP_MAP[label] || 'Feedback';
			if (groupMap[groupName]) {
				groupMap[groupName].push(item);
			} else {
				if (!groupMap['Feedback']) {
					groupMap['Feedback'] = [];
				}
				groupMap['Feedback'].push(item);
			}
		});

		COMPONENT_GROUP_ORDER.forEach(groupName => {
			if (groupMap[groupName]) {
				groupMap[groupName].sort((a, b) => {
					const labelA = (a as any)?.label || '';
					const labelB = (b as any)?.label || '';
					return labelA.localeCompare(labelB);
				});
			}
		});

		return COMPONENT_GROUP_ORDER
			.map(groupName => ({
				title: groupName,
				items: groupMap[groupName] || []
			}))
			.filter(group => group.items.length > 0);
	}

	ngAfterViewInit() {
		this.currentCompTemplate = this.compTemplatesArr[this.selectedCompIndex];
		
		// If URL contains hash fragment, show the selected component template instead of overview
		if (this.selectedCompIndex > 0) {
			this.showOverview = false;
		}

		this.compTemplates
			.changes
			.pipe(
				startWith(this.compTemplates),
				untilCmpDestroyed(this) as any
			)
			.subscribe(() => {
				console.log('Comp templates', this.compTemplatesArr);
				_.forEach(this.compTemplatesArr, (item: TemplateRef<any>) => {
					const label: string = (item as IObject)._declarationTContainer.attrs[1];
					(item as IObject).label = label;
					(item as IObject).icon = COMPONENT_ICON_MAP[label] || 'collection';
				});

				this.componentList = [...this.compTemplatesArr];
				this.groupedSidebarComponents = this.getGroupedComponents(this.componentList);
				this._cdr.detectChanges();
			});
	}

	public showGetStarted = false;

	get currentCompLabel(): string {
		if (this.showOverview) return 'Overview';
		if (this.showGetStarted) return 'Get Started';
		return (this.currentCompTemplate as any)?.label || '';
	}

	public activeCollapseMenuItem = 'History';

	public onCollapseMenuSelect(item: any) {
		this.activeCollapseMenuItem = item.label;
	}

	public goOverview() {
		this.showOverview = true;
		this.showGetStarted = false;
		this.opened = false; // close drawer on mobile if needed
		this._cdr.detectChanges();
	}

	public goGetStarted() {
		this.showGetStarted = true;
		this.showOverview = false;
		this.opened = false;
		this._cdr.detectChanges();
	}

	public onOverviewSelect(item: any) {
		const found = this.compTemplatesArr.find(
			c => c && (c as any).label?.toLowerCase().trim() === item.label?.toLowerCase().trim()
		);
		if (found) {
			this.selectCompTemplate(found);
		}
	}

	public selectCompTemplate(compTemplate: TemplateRef<any>) {
		const index: number = _.indexOf(this.compTemplatesArr, compTemplate);

		this.showOverview = false;
		this.showGetStarted = false;
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

	public suggestionResults: any[] = [];
	public suggestionServerSideResults: any[] = [];
	public showDemoLoading = false;

	/**
	 * @param {string} searchStr
	 * @return {IObject}
	 */
	public suggestion(searchStr: string): IObject[] {
		const res = _.filter(this.positions, (position: IObject) => {
			return _.search(position.name, searchStr);
		});
		this.suggestionResults = searchStr ? res : [];
		this._cdr.detectChanges();
		return res;
	}

	/**
	 * @param {string} searchStr
	 * @return {Observable}
	 */
	public suggestionServerSide(searchStr: string): Observable<IObject[]> {
		return new Observable((observer: Observer<IObject[]>) => {
			const res = _.filter(this.positions, (position: IObject) => {
				return _.search(position.name, searchStr);
			});
			observer.next(res);
			this.suggestionServerSideResults = searchStr ? res : [];
			this._cdr.detectChanges();
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

	public commentData: any[] = [
		{
			id: 1,
			user: { id: 1, name: 'Alice Nguyen', avatar: null },
			content: { text: 'This looks fantastic! The design is really clean and modern. 🎉' },
			createdAt: new Date( Date.now() - 1000 * 60 * 35 ).toISOString(),
			isEdited: false,
			editable: true,
			deletable: true,
			reactions: [
				{ type: 'like', count: 5, reacted: false },
				{ type: 'heart', count: 2, reacted: true },
			],
			totalReplies: 2,
			replies: [
				{
					id: 11,
					user: { id: 2, name: 'Bob Tran', avatar: null },
					content: { text: 'Totally agree! Can\'t wait to see the final release.' },
					createdAt: new Date( Date.now() - 1000 * 60 * 20 ).toISOString(),
					editable: false,
					deletable: false,
					reactions: [],
				},
				{
					id: 12,
					user: { id: 3, name: 'Charlie Do', avatar: null },
					content: { text: 'Love the component library direction 🚀' },
					createdAt: new Date( Date.now() - 1000 * 60 * 10 ).toISOString(),
					editable: false,
					deletable: false,
					reactions: [],
				},
			],
		},
		{
			id: 2,
			user: { id: 2, name: 'Bob Tran', avatar: null },
			content: { text: 'Has anyone tried integrating this with their existing projects? Would love some tips.' },
			createdAt: new Date( Date.now() - 1000 * 60 * 5 ).toISOString(),
			isEdited: true,
			editable: true,
			deletable: true,
			reactions: [],
			totalReplies: 0,
			replies: [],
		},
	];

	public treeData = [
		{
			title: 'Parent Node 1',
			key: '0-0',
			children: [
				{ title: 'Leaf Node 1-1', key: '0-0-0', isLeaf: true },
				{ title: 'Leaf Node 1-2', key: '0-0-1', isLeaf: true }
			]
		},
		{
			title: 'Parent Node 2',
			key: '0-1',
			children: [
				{ title: 'Leaf Node 2-1', key: '0-1-0', isLeaf: true },
				{ title: 'Leaf Node 2-2', key: '0-1-1', isLeaf: true }
			]
		}
	];

	public dynamicTreeData = [
		{ title: 'Expand to load children 1', key: '0', isLeaf: false },
		{ title: 'Expand to load children 2', key: '1', isLeaf: false },
		{ title: 'Leaf Node (Non-dynamic)', key: '2', isLeaf: true }
	];

	public loadTreeDataFn = (node: any): Promise<void> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				node.children = [
					{ title: `Dynamic Child 1 of ${node.title}`, key: `${node.key}-0`, isLeaf: true },
					{ title: `Dynamic Child 2 of ${node.title}`, key: `${node.key}-1`, isLeaf: true }
				];
				resolve();
			}, 1000);
		});
	}
}
