import { NgcTreeNode, NgcTreeService } from './tree-types';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgcTreeNodeComponent {
    treeComponent: NgcTreeService;
    node: NgcTreeNode;
    checkable: boolean;
    loadData: (node: NgcTreeNode) => Promise<void> | Observable<void>;
    constructor(treeComponent: NgcTreeService);
    toggleExpand(event: MouseEvent): void;
    onSelect(event: MouseEvent): void;
    onCheck(): void;
    isIndeterminate(): boolean;
    private hasCheckedOrIndeterminateChild;
    isDragOver: boolean;
    onDragStart(event: DragEvent): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(): void;
    onDrop(event: DragEvent): void;
    onDragEnd(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTreeNodeComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTreeNodeComponent, "ngc-tree-node", never, { "node": "node"; "checkable": "checkable"; "loadData": "loadData"; }, {}, never, never, false>;
}
