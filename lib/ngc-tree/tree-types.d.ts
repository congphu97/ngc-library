export interface NgcTreeNode {
    title: string;
    key: string;
    isLeaf?: boolean;
    loading?: boolean;
    children?: NgcTreeNode[];
    expanded?: boolean;
    disabled?: boolean;
    disableCheckbox?: boolean;
    selectable?: boolean;
    checked?: boolean;
    selected?: boolean;
}
import { EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare abstract class NgcTreeService {
    abstract draggable: boolean;
    abstract dragNode: NgcTreeNode | null;
    abstract data: NgcTreeNode[];
    abstract dataChange: EventEmitter<NgcTreeNode[]>;
    abstract nodeExpand: EventEmitter<NgcTreeNode>;
    abstract cdr: ChangeDetectorRef;
    abstract moveNode(dragNode: NgcTreeNode, targetNode: NgcTreeNode): void;
    abstract onNodeSelected(node: NgcTreeNode): void;
    abstract onNodeChecked(node: NgcTreeNode): void;
}
