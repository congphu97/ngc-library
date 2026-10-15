import { Component, Input, ViewEncapsulation, Optional } from '@angular/core';
import { NgcTreeNode, NgcTreeService } from './tree-types';
import { Observable } from 'rxjs';

import { CoerceBoolean } from '@core';

@Component({
	selector		: 'ngc-tree-node',
	templateUrl		: './ngc-tree-node.html',
	encapsulation	: ViewEncapsulation.None,
})
export class NgcTreeNodeComponent {

	@Input() public node: NgcTreeNode;
	@Input() @CoerceBoolean() public checkable: boolean = false;
	@Input() public loadData: (node: NgcTreeNode) => Promise<void> | Observable<void>;

	constructor(@Optional() public treeComponent: NgcTreeService) {}

	public toggleExpand(event: MouseEvent) {
		event.stopPropagation();
		if (this.node.isLeaf) return;

		this.node.expanded = !this.node.expanded;
		
		if (this.node.expanded && this.loadData && (!this.node.children || this.node.children.length === 0)) {
			this.node.loading = true;
			const load = this.loadData(this.node);
			const handleComplete = () => {
				this.node.loading = false;
				this.treeComponent.dataChange.emit(this.treeComponent.data);
				this.treeComponent.cdr.markForCheck();
			};
			if (load instanceof Promise) {
				load.then(handleComplete).catch(handleComplete);
			} else if (load && typeof load.subscribe === 'function') {
				load.subscribe({
					next: handleComplete,
					error: handleComplete
				});
			} else {
				this.node.loading = false;
				this.treeComponent.dataChange.emit(this.treeComponent.data);
			}
		} else {
			this.treeComponent.dataChange.emit(this.treeComponent.data);
		}
		this.treeComponent.nodeExpand.emit(this.node);
		this.treeComponent.cdr.markForCheck();
	}

	public onSelect(event: MouseEvent) {
		event.stopPropagation();
		this.treeComponent.onNodeSelected(this.node);
		if (!this.node.isLeaf) {
			this.toggleExpand(event);
		}
	}

	public onCheck() {
		this.treeComponent.onNodeChecked(this.node);
	}

	public isIndeterminate(): boolean {
		if (this.node.checked) return false;
		if (!this.node.children || this.node.children.length === 0) return false;

		return this.hasCheckedOrIndeterminateChild(this.node);
	}

	private hasCheckedOrIndeterminateChild(node: NgcTreeNode): boolean {
		if (!node.children) return false;
		return node.children.some(child => {
			if (child.checked) return true;
			if (child.children && child.children.length > 0) {
				return this.hasCheckedOrIndeterminateChild(child);
			}
			return false;
		});
	}

	public isDragOver = false;

	public onDragStart(event: DragEvent) {
		if (!this.treeComponent.draggable || this.node.disabled) return;
		event.stopPropagation();
		this.treeComponent.dragNode = this.node;
		event.dataTransfer.setData('text/plain', this.node.key);
		event.dataTransfer.effectAllowed = 'move';
	}

	public onDragOver(event: DragEvent) {
		if (!this.treeComponent.draggable || !this.treeComponent.dragNode) return;
		if (this.treeComponent.dragNode.key === this.node.key) return;
		
		event.preventDefault();
		event.stopPropagation();
		this.isDragOver = true;
	}

	public onDragLeave() {
		this.isDragOver = false;
	}

	public onDrop(event: DragEvent) {
		if (!this.treeComponent.draggable || !this.treeComponent.dragNode) return;
		event.preventDefault();
		event.stopPropagation();
		this.isDragOver = false;

		const dragNode = this.treeComponent.dragNode;
		if (dragNode.key === this.node.key) return;

		this.treeComponent.moveNode(dragNode, this.node);
		this.treeComponent.dragNode = null;
	}

	public onDragEnd() {
		this.treeComponent.dragNode = null;
		this.isDragOver = false;
	}

}
