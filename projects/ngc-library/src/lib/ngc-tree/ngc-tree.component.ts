import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';

import { CoerceBoolean } from '@core';
import { NgcTreeNode, NgcTreeService } from './tree-types';

export * from './tree-types';

@Component({
	selector		: 'ngc-tree',
	templateUrl		: './ngc-tree.html',
	styleUrls		: [ './ngc-tree.scss' ],
	host			: { class: 'ngc-tree' },
	encapsulation	: ViewEncapsulation.None,
	providers       : [
		{ provide: NgcTreeService, useExisting: forwardRef(() => NgcTreeComponent) }
	]
})
export class NgcTreeComponent implements NgcTreeService {

	@Input() public data: NgcTreeNode[] = [];
	@Input() @CoerceBoolean() public checkable: boolean = false;
	@Input() @CoerceBoolean() public multiple: boolean = false;
	@Input() @CoerceBoolean() public draggable: boolean = false;
	@Input() public loadData: (node: NgcTreeNode) => Promise<void> | Observable<void>;

	@Output() public nodeExpand = new EventEmitter<NgcTreeNode>();
	@Output() public nodeSelect = new EventEmitter<NgcTreeNode>();
	@Output() public nodeCheck = new EventEmitter<NgcTreeNode[]>();
	@Output() public nodeDrop = new EventEmitter<{ dragNode: NgcTreeNode, dropNode: NgcTreeNode }>();
	@Output() public dataChange = new EventEmitter<NgcTreeNode[]>();

	public dragNode: NgcTreeNode | null = null;

	constructor(public cdr: ChangeDetectorRef) {}

	public onNodeSelected(node: NgcTreeNode) {
		if (node.disabled || node.selectable === false) return;

		if (!this.multiple) {
			this.clearSelection(this.data);
		}
		node.selected = !node.selected;
		this.nodeSelect.emit(node);
		this.dataChange.emit(this.data);
		this.cdr.markForCheck();
	}

	public onNodeChecked(node: NgcTreeNode) {
		if (node.disabled || node.disableCheckbox) return;
		
		
		// Cascade check/uncheck all children
		this.checkChildren(node, node.checked);

		// Sync parent checked states bottom-up
		this.syncParentState(this.data);
		
		const checkedNodes: NgcTreeNode[] = [];
		this.getCheckedNodes(this.data, checkedNodes);
		this.nodeCheck.emit(checkedNodes);
		this.dataChange.emit(this.data);
		this.cdr.markForCheck();
	}

	private syncParentState(nodes: NgcTreeNode[]): boolean {
		if (!nodes || nodes.length === 0) return false;

		let allListChecked = true;
		nodes.forEach(node => {
			if (node.children && node.children.length > 0) {
				const childrenAllChecked = this.syncParentState(node.children);
				node.checked = childrenAllChecked;
			}
			if (!node.checked) {
				allListChecked = false;
			}
		});
		return allListChecked;
	}

	private checkChildren(node: NgcTreeNode, checked: boolean) {
		if (!node.children) return;
		node.children.forEach(child => {
			if (!child.disabled && !child.disableCheckbox) {
				child.checked = checked;
				this.checkChildren(child, checked);
			}
		});
	}

	private clearSelection(nodes: NgcTreeNode[]) {
		if (!nodes) return;
		nodes.forEach(node => {
			node.selected = false;
			if (node.children) {
				this.clearSelection(node.children);
			}
		});
	}

	private getCheckedNodes(nodes: NgcTreeNode[], result: NgcTreeNode[]) {
		if (!nodes) return;
		nodes.forEach(node => {
			if (node.checked) {
				result.push(node);
			}
			if (node.children) {
				this.getCheckedNodes(node.children, result);
			}
		});
	}

	public moveNode(dragNode: NgcTreeNode, dropNode: NgcTreeNode) {
		// 1. Remove node from its old position
		this.removeNode(this.data, dragNode.key);

		// 2. Append node to dropNode's children
		if (!dropNode.children) {
			dropNode.children = [];
		}
		dropNode.isLeaf = false;
		dropNode.children.push(dragNode);
		dropNode.expanded = true;

		// 3. Sync parents in case checked states changed
		this.syncParentState(this.data);

		// Emit drop and change events
		this.nodeDrop.emit({ dragNode, dropNode });
		this.dataChange.emit(this.data);
		this.cdr.markForCheck();
	}

	private removeNode(nodes: NgcTreeNode[], key: string): boolean {
		if (!nodes) return false;
		for (let i = 0; i < nodes.length; i++) {
			if (nodes[i].key === key) {
				nodes.splice(i, 1);
				return true;
			}
			if (nodes[i].children) {
				const removed = this.removeNode(nodes[i].children, key);
				if (removed) {
					return true;
				}
			}
		}
		return false;
	}

}
