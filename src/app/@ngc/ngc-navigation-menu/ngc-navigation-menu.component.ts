import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

export interface NgcNavigationMenuItem {
	label: string;
	trigger?: boolean;
	columns?: number; // 1 or 2 columns layout
	children?: { title: string; description: string; link?: string }[];
}

@Component({
	selector: 'ngc-navigation-menu',
	templateUrl: './ngc-navigation-menu.component.html',
	styleUrls: ['./ngc-navigation-menu.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgcNavigationMenuComponent {
	@Input() items: NgcNavigationMenuItem[] = [
		{
			label: 'Getting started',
			trigger: true,
			columns: 1,
			children: [
				{ title: 'Introduction', description: 'Re-usable components built with Tailwind CSS.' },
				{ title: 'Installation', description: 'How to install dependencies and structure your app.' },
				{ title: 'Typography', description: 'Styles for headings, paragraphs, lists...etc' }
			]
		},
		{
			label: 'Components',
			trigger: true,
			columns: 2,
			children: [
				{ title: 'Alert Dialog', description: 'A modal dialog that interrupts the user with important content.' },
				{ title: 'Hover Card', description: 'For sighted users to preview content available behind a link.' },
				{ title: 'Progress', description: 'Displays an indicator showing the completion progress of a task.' },
				{ title: 'Scroll-area', description: 'Visually or semantically separates content.' },
				{ title: 'Tabs', description: 'A set of layered sections of content known as tab panels.' },
				{ title: 'Tooltip', description: 'A popup that displays information related to an element.' }
			]
		},
		{
			label: 'Docs',
			trigger: false
		}
	];

	public activeIndex: number | null = null;
	public isTransitioning = false;
	private _closeTimeout: any;

	public onMouseEnter(index: number) {
		clearTimeout( this._closeTimeout );
		if (!this.items[index].trigger) {
			this.activeIndex = null;
			return;
		}
		this.activeIndex = index;
	}

	public onMouseLeave() {
		clearTimeout( this._closeTimeout );
		this._closeTimeout = setTimeout(() => {
			this.activeIndex = null;
		}, 120); // 120ms delay before close
	}

	// Keep open when hovering inside the viewport
	public onViewportEnter() {
		clearTimeout( this._closeTimeout );
	}
}
