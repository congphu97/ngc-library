import { ChangeDetectorRef, Component, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NgcToastService, NgcToastType } from '@app/@ngc/ngc-toast/toast/ngc-toast.service';
import { untilCmpDestroyed } from 'angular-core';
import { Socket } from 'ngx-socket-io';
import { startWith } from 'rxjs/operators';
import { forEach, indexOf } from 'lodash';
import { ActivatedRoute } from '@angular/router';
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
				untilCmpDestroyed(this)
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
}
