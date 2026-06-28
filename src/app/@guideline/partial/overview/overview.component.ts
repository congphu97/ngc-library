import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface OverviewItem {
	name: string;
	label: string;
	desc?: string;
	icon: string;
}

export interface OverviewGroup {
	title: string;
	items: OverviewItem[];
}

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

const COMPONENT_DESC_MAP: Record<string, string> = {
	'Accordion': 'Collapsible accordion component panels',
	'Alert': 'System warning messages and banners',
	'Avatar': 'User profile circle image fallback display',
	'Avatar Picker': 'Interactive user avatar picker and uploader',
	'Badge': 'Small numeric or textual notification badge',
	'Breadcrumb': 'Sequential trail route page navigation links',
	'Button': 'Interactive action trigger button selector',
	'Button Toggle': 'Button choices switcher tab mode selectors',
	'Calendar': 'Dynamic grid date events calendar scheduler',
	'Card': 'Styled container panel wrapper for layout info',
	'Carousel': 'Sliding sequential image and card galleries',
	'Checkbox': 'Multiple configuration options tick selector',
	'Clipboard': 'Auto copy text field to system clipboard',
	'Code Block': 'Highlighted format styling syntax codeblock',
	'Collapse': 'Accordion toggle details collapsible section',
	'Color Picker': 'Dynamic RGB and HEX color selections tool',
	'Color & Typography': 'Visualize layout designs system theme tokens',
	'Data Table': 'Interactive and virtual scrolled table grid',
	'Date Picker': 'Standard date input calendar date picker',
	'Dialog': 'Standard focus modals popup layout panels',
	'Divide': 'Horizontal or vertical visual separating lines',
	'Dropdown': 'Interactive dropdown menu select picker items',
	'Emoji Picker': 'Graphic select tools for text input emoji',
	'Form Field': 'Labels error handler wrapper for form fields',
	'Icon': 'Premium design system semantic visual icons',
	'Input': 'Simple input component for single text values',
	'List': 'Standard lists container for component items',
	'Loading': 'Action status buffering and load screens',
	'Member Picker': 'Dynamic project user member options picker',
	'Menu': 'Popovers select actions lists menus trigger',
	'Pagination': 'Navigation index selectors for layout data pages',
	'Popover': 'Click-to-trigger hover info detailed popups',
	'Progress': 'Animated status percentage bars and progress',
	'Radio Group': 'Standard single select form options layout',
	'Search Box ': 'Fast dynamic results list search filters box',
	'Select': 'Standard dropdown choice selection lists field',
	'Sheet': 'Drawer drawer slide popup sheets component',
	'Sidebar': 'Drawer sliding containers panels sidebars tool',
	'Skeleton': 'Static mock loaders representations structures',
	'Navigation Menu': 'Premium Radix-like website link navigators',
	'Switch': 'Boolean trigger slider switch choice toggler',
	'Table': 'Standard grid layout structure for custom tables',
	'Tabs': 'Multi tabs sections layout layout panels tool',
	'Textarea': 'Multi line paragraph input text fields block',
	'Toast': 'Auto-hide toast banners overlays system details',
	'Tooltip': 'On-hover information bubbles tips detail popups',
};

@Component({
	selector: 'guideline-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class GuidelineOverviewComponent {
	@Input() components: any[] = [];
	@Output() selectComponent = new EventEmitter<any>();
	@Output() clickGetStarted = new EventEmitter<void>();

	public goGetStarted() {
		this.clickGetStarted.emit();
	}

	public searchQuery = '';

	get filteredGroups(): OverviewGroup[] {
		const data = this.components && this.components.length > 0 ? this.components : [];
		if (data.length === 0) return [];

		// Group items
		const groupMap: Record<string, OverviewItem[]> = {};
		COMPONENT_GROUP_ORDER.forEach(groupName => {
			groupMap[groupName] = [];
		});

		data.forEach(item => {
			const label = item?.label;
			if (!label) return;
			const groupName = COMPONENT_GROUP_MAP[label] || 'Feedback';
			const overviewItem: OverviewItem = {
				name: label,
				label: label,
				desc: COMPONENT_DESC_MAP[label] || 'Reusable design system component',
				icon: item?.icon || 'collection'
			};

			if (groupMap[groupName]) {
				groupMap[groupName].push(overviewItem);
			} else {
				if (!groupMap['Feedback']) groupMap['Feedback'] = [];
				groupMap['Feedback'].push(overviewItem);
			}
		});

		// Sort A-Z in each group
		COMPONENT_GROUP_ORDER.forEach(groupName => {
			if (groupMap[groupName]) {
				groupMap[groupName].sort((a, b) => a.label.localeCompare(b.label));
			}
		});

		// Format to OverviewGroup array
		let groups: OverviewGroup[] = COMPONENT_GROUP_ORDER
			.map(groupName => ({
				title: groupName,
				items: groupMap[groupName] || []
			}))
			.filter(g => g.items.length > 0);

		// Apply search filter if query exists
		if (this.searchQuery.trim()) {
			const query = this.searchQuery.toLowerCase();
			groups = groups.map(g => ({
				title: g.title,
				items: g.items.filter(item => 
					item.label.toLowerCase().includes(query) || 
					(item.desc && item.desc.toLowerCase().includes(query))
				)
			})).filter(g => g.items.length > 0);
		}

		return groups;
	}

	public clickItem(item: OverviewItem) {
		// Find matching component template ref
		const found = this.components.find(c => c && c.label === item.label);
		if (found) {
			this.selectComponent.emit(found);
		} else {
			this.selectComponent.emit(item);
		}
	}
}
