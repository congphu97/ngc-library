import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NgcTreeNode, NgcTreeService } from './tree-types';
import * as i0 from "@angular/core";
export * from './tree-types';
export declare class NgcTreeComponent implements NgcTreeService {
    cdr: ChangeDetectorRef;
    data: NgcTreeNode[];
    checkable: boolean;
    multiple: boolean;
    draggable: boolean;
    loadData: (node: NgcTreeNode) => Promise<void> | Observable<void>;
    nodeExpand: EventEmitter<NgcTreeNode>;
    nodeSelect: EventEmitter<NgcTreeNode>;
    nodeCheck: EventEmitter<NgcTreeNode[]>;
    nodeDrop: EventEmitter<{
        dragNode: NgcTreeNode;
        dropNode: NgcTreeNode;
    }>;
    dataChange: EventEmitter<NgcTreeNode[]>;
    dragNode: NgcTreeNode | null;
    constructor(cdr: ChangeDetectorRef);
    onNodeSelected(node: NgcTreeNode): void;
    onNodeChecked(node: NgcTreeNode): void;
    private syncParentState;
    private checkChildren;
    private clearSelection;
    private getCheckedNodes;
    moveNode(dragNode: NgcTreeNode, dropNode: NgcTreeNode): void;
    private removeNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTreeComponent, "ngc-tree", never, { "data": "data"; "checkable": "checkable"; "multiple": "multiple"; "draggable": "draggable"; "loadData": "loadData"; }, { "nodeExpand": "nodeExpand"; "nodeSelect": "nodeSelect"; "nodeCheck": "nodeCheck"; "nodeDrop": "nodeDrop"; "dataChange": "dataChange"; }, never, never, false>;
}
