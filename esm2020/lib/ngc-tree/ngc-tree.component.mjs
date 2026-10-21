import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, forwardRef } from '@angular/core';
import { CoerceBoolean } from '@core';
import { NgcTreeService } from './tree-types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./ngc-tree-node.component";
export * from './tree-types';
export class NgcTreeComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.data = [];
        this.checkable = false;
        this.multiple = false;
        this.draggable = false;
        this.nodeExpand = new EventEmitter();
        this.nodeSelect = new EventEmitter();
        this.nodeCheck = new EventEmitter();
        this.nodeDrop = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.dragNode = null;
    }
    onNodeSelected(node) {
        if (node.disabled || node.selectable === false)
            return;
        if (!this.multiple) {
            this.clearSelection(this.data);
        }
        node.selected = !node.selected;
        this.nodeSelect.emit(node);
        this.dataChange.emit(this.data);
        this.cdr.markForCheck();
    }
    onNodeChecked(node) {
        if (node.disabled || node.disableCheckbox)
            return;
        // Cascade check/uncheck all children
        this.checkChildren(node, node.checked);
        // Sync parent checked states bottom-up
        this.syncParentState(this.data);
        const checkedNodes = [];
        this.getCheckedNodes(this.data, checkedNodes);
        this.nodeCheck.emit(checkedNodes);
        this.dataChange.emit(this.data);
        this.cdr.markForCheck();
    }
    syncParentState(nodes) {
        if (!nodes || nodes.length === 0)
            return false;
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
    checkChildren(node, checked) {
        if (!node.children)
            return;
        node.children.forEach(child => {
            if (!child.disabled && !child.disableCheckbox) {
                child.checked = checked;
                this.checkChildren(child, checked);
            }
        });
    }
    clearSelection(nodes) {
        if (!nodes)
            return;
        nodes.forEach(node => {
            node.selected = false;
            if (node.children) {
                this.clearSelection(node.children);
            }
        });
    }
    getCheckedNodes(nodes, result) {
        if (!nodes)
            return;
        nodes.forEach(node => {
            if (node.checked) {
                result.push(node);
            }
            if (node.children) {
                this.getCheckedNodes(node.children, result);
            }
        });
    }
    moveNode(dragNode, dropNode) {
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
    removeNode(nodes, key) {
        if (!nodes)
            return false;
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
NgcTreeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTreeComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcTreeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTreeComponent, selector: "ngc-tree", inputs: { data: "data", checkable: "checkable", multiple: "multiple", draggable: "draggable", loadData: "loadData" }, outputs: { nodeExpand: "nodeExpand", nodeSelect: "nodeSelect", nodeCheck: "nodeCheck", nodeDrop: "nodeDrop", dataChange: "dataChange" }, host: { classAttribute: "ngc-tree" }, providers: [
        { provide: NgcTreeService, useExisting: forwardRef(() => NgcTreeComponent) }
    ], ngImport: i0, template: "<div class=\"ngc-tree__root\">\n\t<ng-container *ngFor=\"let node of data\">\n\t\t<ngc-tree-node \n\t\t\t[node]=\"node\" \n\t\t\t[checkable]=\"checkable\" \n\t\t\t[loadData]=\"loadData\">\n\t\t</ngc-tree-node>\n\t</ng-container>\n</div>\n", styles: [".ngc-tree{display:block;width:100%}.ngc-tree .ngc-tree-node{display:block}.ngc-tree .ngc-tree-node__row{display:flex;align-items:center;padding:6px 8px;border-radius:6px;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color .2s ease;gap:6px}.ngc-tree .ngc-tree-node__row:hover{background-color:var(--ngc-color-neutral-background-surface, #f5f5f5)}.ngc-tree .ngc-tree-node__row--selected{background-color:#44444614!important;color:var(--ngc-color-primary-default, #111)!important;font-weight:600}.ngc-tree .ngc-tree-node__row--drag-over{outline:2px dashed var(--ngc-color-primary-default, #111);background-color:#4444460d!important}.ngc-tree .ngc-tree-node--disabled{opacity:.5;pointer-events:none}.ngc-tree .ngc-tree-node__toggle-wrapper{display:flex;align-items:center;justify-content:center;width:24px;height:24px;cursor:pointer;color:var(--ngc-color-neutral-text-secondary, #888)}.ngc-tree .ngc-tree-node__caret{font-size:12px;transition:transform .2s ease;transform:rotate(0)}.ngc-tree .ngc-tree-node__caret--expanded{transform:rotate(90deg)}.ngc-tree .ngc-tree-node__loading-icon{font-size:14px;animation:2s linear infinite spin}.ngc-tree .ngc-tree-node__checkbox-wrapper{display:flex;align-items:center}.ngc-tree .ngc-tree-node__content{flex:1;display:flex;align-items:center;min-height:24px}.ngc-tree .ngc-tree-node__title{font-size:14px}.ngc-tree .ngc-tree-node__children{padding-left:20px;border-left:1px dashed var(--ngc-color-neutral-border-default, #e4e4e7);margin-left:11px;margin-top:2px;margin-bottom:2px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.NgcTreeNodeComponent, selector: "ngc-tree-node", inputs: ["node", "checkable", "loadData"] }], encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTreeComponent.prototype, "checkable", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTreeComponent.prototype, "multiple", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTreeComponent.prototype, "draggable", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-tree', host: { class: 'ngc-tree' }, encapsulation: ViewEncapsulation.None, providers: [
                        { provide: NgcTreeService, useExisting: forwardRef(() => NgcTreeComponent) }
                    ], template: "<div class=\"ngc-tree__root\">\n\t<ng-container *ngFor=\"let node of data\">\n\t\t<ngc-tree-node \n\t\t\t[node]=\"node\" \n\t\t\t[checkable]=\"checkable\" \n\t\t\t[loadData]=\"loadData\">\n\t\t</ngc-tree-node>\n\t</ng-container>\n</div>\n", styles: [".ngc-tree{display:block;width:100%}.ngc-tree .ngc-tree-node{display:block}.ngc-tree .ngc-tree-node__row{display:flex;align-items:center;padding:6px 8px;border-radius:6px;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color .2s ease;gap:6px}.ngc-tree .ngc-tree-node__row:hover{background-color:var(--ngc-color-neutral-background-surface, #f5f5f5)}.ngc-tree .ngc-tree-node__row--selected{background-color:#44444614!important;color:var(--ngc-color-primary-default, #111)!important;font-weight:600}.ngc-tree .ngc-tree-node__row--drag-over{outline:2px dashed var(--ngc-color-primary-default, #111);background-color:#4444460d!important}.ngc-tree .ngc-tree-node--disabled{opacity:.5;pointer-events:none}.ngc-tree .ngc-tree-node__toggle-wrapper{display:flex;align-items:center;justify-content:center;width:24px;height:24px;cursor:pointer;color:var(--ngc-color-neutral-text-secondary, #888)}.ngc-tree .ngc-tree-node__caret{font-size:12px;transition:transform .2s ease;transform:rotate(0)}.ngc-tree .ngc-tree-node__caret--expanded{transform:rotate(90deg)}.ngc-tree .ngc-tree-node__loading-icon{font-size:14px;animation:2s linear infinite spin}.ngc-tree .ngc-tree-node__checkbox-wrapper{display:flex;align-items:center}.ngc-tree .ngc-tree-node__content{flex:1;display:flex;align-items:center;min-height:24px}.ngc-tree .ngc-tree-node__title{font-size:14px}.ngc-tree .ngc-tree-node__children{padding-left:20px;border-left:1px dashed var(--ngc-color-neutral-border-default, #e4e4e7);margin-left:11px;margin-top:2px;margin-bottom:2px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { data: [{
                type: Input
            }], checkable: [{
                type: Input
            }], multiple: [{
                type: Input
            }], draggable: [{
                type: Input
            }], loadData: [{
                type: Input
            }], nodeExpand: [{
                type: Output
            }], nodeSelect: [{
                type: Output
            }], nodeCheck: [{
                type: Output
            }], nodeDrop: [{
                type: Output
            }], dataChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdHJlZS9uZ2MtdHJlZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10cmVlL25nYy10cmVlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdEMsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUUzRCxjQUFjLGNBQWMsQ0FBQztBQVk3QixNQUFNLE9BQU8sZ0JBQWdCO0lBZ0I1QixZQUFtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWR6QixTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUNSLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQzdDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQzdDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM5QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW9ELENBQUM7UUFDaEYsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRXpELGFBQVEsR0FBdUIsSUFBSSxDQUFDO0lBRUMsQ0FBQztJQUV0QyxjQUFjLENBQUMsSUFBaUI7UUFDdEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElB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QUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEVBQUU7cUJBQzVFO3dHQUllLElBQUk7c0JBQW5CLEtBQUs7Z0JBQzJCLFNBQVM7c0JBQXpDLEtBQUs7Z0JBQzJCLFFBQVE7c0JBQXhDLEtBQUs7Z0JBQzJCLFNBQVM7c0JBQXpDLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFFVyxVQUFVO3NCQUExQixNQUFNO2dCQUNVLFVBQVU7c0JBQTFCLE1BQU07Z0JBQ1UsU0FBUztzQkFBekIsTUFBTTtnQkFDVSxRQUFRO3NCQUF4QixNQUFNO2dCQUNVLFVBQVU7c0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvZXJjZUJvb2xlYW4gfSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBOZ2NUcmVlTm9kZSwgTmdjVHJlZVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtdHlwZXMnO1xuXG5leHBvcnQgKiBmcm9tICcuL3RyZWUtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLXRyZWUnLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy10cmVlLmh0bWwnLFxuXHRzdHlsZVVybHNcdFx0OiBbICcuL25nYy10cmVlLnNjc3MnIF0sXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtdHJlZScgfSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnMgICAgICAgOiBbXG5cdFx0eyBwcm92aWRlOiBOZ2NUcmVlU2VydmljZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdjVHJlZUNvbXBvbmVudCkgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5nY1RyZWVDb21wb25lbnQgaW1wbGVtZW50cyBOZ2NUcmVlU2VydmljZSB7XG5cblx0QElucHV0KCkgcHVibGljIGRhdGE6IE5nY1RyZWVOb2RlW10gPSBbXTtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY2hlY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIGRyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoKSBwdWJsaWMgbG9hZERhdGE6IChub2RlOiBOZ2NUcmVlTm9kZSkgPT4gUHJvbWlzZTx2b2lkPiB8IE9ic2VydmFibGU8dm9pZD47XG5cblx0QE91dHB1dCgpIHB1YmxpYyBub2RlRXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2NUcmVlTm9kZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBub2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2NUcmVlTm9kZT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBub2RlQ2hlY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE5nY1RyZWVOb2RlW10+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgbm9kZURyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZHJhZ05vZGU6IE5nY1RyZWVOb2RlLCBkcm9wTm9kZTogTmdjVHJlZU5vZGUgfT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBkYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2NUcmVlTm9kZVtdPigpO1xuXG5cdHB1YmxpYyBkcmFnTm9kZTogTmdjVHJlZU5vZGUgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuXHRwdWJsaWMgb25Ob2RlU2VsZWN0ZWQobm9kZTogTmdjVHJlZU5vZGUpIHtcblx0XHRpZiAobm9kZS5kaXNhYmxlZCB8fCBub2RlLnNlbGVjdGFibGUgPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRpZiAoIXRoaXMubXVsdGlwbGUpIHtcblx0XHRcdHRoaXMuY2xlYXJTZWxlY3Rpb24odGhpcy5kYXRhKTtcblx0XHR9XG5cdFx0bm9kZS5zZWxlY3RlZCA9ICFub2RlLnNlbGVjdGVkO1xuXHRcdHRoaXMubm9kZVNlbGVjdC5lbWl0KG5vZGUpO1xuXHRcdHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHRwdWJsaWMgb25Ob2RlQ2hlY2tlZChub2RlOiBOZ2NUcmVlTm9kZSkge1xuXHRcdGlmIChub2RlLmRpc2FibGVkIHx8IG5vZGUuZGlzYWJsZUNoZWNrYm94KSByZXR1cm47XG5cdFx0XG5cdFx0XG5cdFx0Ly8gQ2FzY2FkZSBjaGVjay91bmNoZWNrIGFsbCBjaGlsZHJlblxuXHRcdHRoaXMuY2hlY2tDaGlsZHJlbihub2RlLCBub2RlLmNoZWNrZWQpO1xuXG5cdFx0Ly8gU3luYyBwYXJlbnQgY2hlY2tlZCBzdGF0ZXMgYm90dG9tLXVwXG5cdFx0dGhpcy5zeW5jUGFyZW50U3RhdGUodGhpcy5kYXRhKTtcblx0XHRcblx0XHRjb25zdCBjaGVja2VkTm9kZXM6IE5nY1RyZWVOb2RlW10gPSBbXTtcblx0XHR0aGlzLmdldENoZWNrZWROb2Rlcyh0aGlzLmRhdGEsIGNoZWNrZWROb2Rlcyk7XG5cdFx0dGhpcy5ub2RlQ2hlY2suZW1pdChjaGVja2VkTm9kZXMpO1xuXHRcdHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHRwcml2YXRlIHN5bmNQYXJlbnRTdGF0ZShub2RlczogTmdjVHJlZU5vZGVbXSk6IGJvb2xlYW4ge1xuXHRcdGlmICghbm9kZXMgfHwgbm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cblx0XHRsZXQgYWxsTGlzdENoZWNrZWQgPSB0cnVlO1xuXHRcdG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG5cdFx0XHRpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgY2hpbGRyZW5BbGxDaGVja2VkID0gdGhpcy5zeW5jUGFyZW50U3RhdGUobm9kZS5jaGlsZHJlbik7XG5cdFx0XHRcdG5vZGUuY2hlY2tlZCA9IGNoaWxkcmVuQWxsQ2hlY2tlZDtcblx0XHRcdH1cblx0XHRcdGlmICghbm9kZS5jaGVja2VkKSB7XG5cdFx0XHRcdGFsbExpc3RDaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGFsbExpc3RDaGVja2VkO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0NoaWxkcmVuKG5vZGU6IE5nY1RyZWVOb2RlLCBjaGVja2VkOiBib29sZWFuKSB7XG5cdFx0aWYgKCFub2RlLmNoaWxkcmVuKSByZXR1cm47XG5cdFx0bm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGlmICghY2hpbGQuZGlzYWJsZWQgJiYgIWNoaWxkLmRpc2FibGVDaGVja2JveCkge1xuXHRcdFx0XHRjaGlsZC5jaGVja2VkID0gY2hlY2tlZDtcblx0XHRcdFx0dGhpcy5jaGVja0NoaWxkcmVuKGNoaWxkLCBjaGVja2VkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY2xlYXJTZWxlY3Rpb24obm9kZXM6IE5nY1RyZWVOb2RlW10pIHtcblx0XHRpZiAoIW5vZGVzKSByZXR1cm47XG5cdFx0bm9kZXMuZm9yRWFjaChub2RlID0+IHtcblx0XHRcdG5vZGUuc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdGlmIChub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdHRoaXMuY2xlYXJTZWxlY3Rpb24obm9kZS5jaGlsZHJlbik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGdldENoZWNrZWROb2Rlcyhub2RlczogTmdjVHJlZU5vZGVbXSwgcmVzdWx0OiBOZ2NUcmVlTm9kZVtdKSB7XG5cdFx0aWYgKCFub2RlcykgcmV0dXJuO1xuXHRcdG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG5cdFx0XHRpZiAobm9kZS5jaGVja2VkKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdFx0dGhpcy5nZXRDaGVja2VkTm9kZXMobm9kZS5jaGlsZHJlbiwgcmVzdWx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBtb3ZlTm9kZShkcmFnTm9kZTogTmdjVHJlZU5vZGUsIGRyb3BOb2RlOiBOZ2NUcmVlTm9kZSkge1xuXHRcdC8vIDEuIFJlbW92ZSBub2RlIGZyb20gaXRzIG9sZCBwb3NpdGlvblxuXHRcdHRoaXMucmVtb3ZlTm9kZSh0aGlzLmRhdGEsIGRyYWdOb2RlLmtleSk7XG5cblx0XHQvLyAyLiBBcHBlbmQgbm9kZSB0byBkcm9wTm9kZSdzIGNoaWxkcmVuXG5cdFx0aWYgKCFkcm9wTm9kZS5jaGlsZHJlbikge1xuXHRcdFx0ZHJvcE5vZGUuY2hpbGRyZW4gPSBbXTtcblx0XHR9XG5cdFx0ZHJvcE5vZGUuaXNMZWFmID0gZmFsc2U7XG5cdFx0ZHJvcE5vZGUuY2hpbGRyZW4ucHVzaChkcmFnTm9kZSk7XG5cdFx0ZHJvcE5vZGUuZXhwYW5kZWQgPSB0cnVlO1xuXG5cdFx0Ly8gMy4gU3luYyBwYXJlbnRzIGluIGNhc2UgY2hlY2tlZCBzdGF0ZXMgY2hhbmdlZFxuXHRcdHRoaXMuc3luY1BhcmVudFN0YXRlKHRoaXMuZGF0YSk7XG5cblx0XHQvLyBFbWl0IGRyb3AgYW5kIGNoYW5nZSBldmVudHNcblx0XHR0aGlzLm5vZGVEcm9wLmVtaXQoeyBkcmFnTm9kZSwgZHJvcE5vZGUgfSk7XG5cdFx0dGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcblx0XHR0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlTm9kZShub2RlczogTmdjVHJlZU5vZGVbXSwga2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRpZiAoIW5vZGVzKSByZXR1cm4gZmFsc2U7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKG5vZGVzW2ldLmtleSA9PT0ga2V5KSB7XG5cdFx0XHRcdG5vZGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAobm9kZXNbaV0uY2hpbGRyZW4pIHtcblx0XHRcdFx0Y29uc3QgcmVtb3ZlZCA9IHRoaXMucmVtb3ZlTm9kZShub2Rlc1tpXS5jaGlsZHJlbiwga2V5KTtcblx0XHRcdFx0aWYgKHJlbW92ZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm5nYy10cmVlX19yb290XCI+XG5cdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG5vZGUgb2YgZGF0YVwiPlxuXHRcdDxuZ2MtdHJlZS1ub2RlIFxuXHRcdFx0W25vZGVdPVwibm9kZVwiIFxuXHRcdFx0W2NoZWNrYWJsZV09XCJjaGVja2FibGVcIiBcblx0XHRcdFtsb2FkRGF0YV09XCJsb2FkRGF0YVwiPlxuXHRcdDwvbmdjLXRyZWUtbm9kZT5cblx0PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==