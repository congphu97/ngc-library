import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, Optional } from '@angular/core';
import { NgcTreeService } from './tree-types';
import { CoerceBoolean } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "./tree-types";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../ngc-checkbox/ngc-checkbox.component";
import * as i5 from "../ngc-icon/ngc-icon.component";
export class NgcTreeNodeComponent {
    constructor(treeComponent) {
        this.treeComponent = treeComponent;
        this.checkable = false;
        this.isDragOver = false;
    }
    toggleExpand(event) {
        event.stopPropagation();
        if (this.node.isLeaf)
            return;
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
            }
            else if (load && typeof load.subscribe === 'function') {
                load.subscribe({
                    next: handleComplete,
                    error: handleComplete
                });
            }
            else {
                this.node.loading = false;
                this.treeComponent.dataChange.emit(this.treeComponent.data);
            }
        }
        else {
            this.treeComponent.dataChange.emit(this.treeComponent.data);
        }
        this.treeComponent.nodeExpand.emit(this.node);
        this.treeComponent.cdr.markForCheck();
    }
    onSelect(event) {
        event.stopPropagation();
        this.treeComponent.onNodeSelected(this.node);
        if (!this.node.isLeaf) {
            this.toggleExpand(event);
        }
    }
    onCheck() {
        this.treeComponent.onNodeChecked(this.node);
    }
    isIndeterminate() {
        if (this.node.checked)
            return false;
        if (!this.node.children || this.node.children.length === 0)
            return false;
        return this.hasCheckedOrIndeterminateChild(this.node);
    }
    hasCheckedOrIndeterminateChild(node) {
        if (!node.children)
            return false;
        return node.children.some(child => {
            if (child.checked)
                return true;
            if (child.children && child.children.length > 0) {
                return this.hasCheckedOrIndeterminateChild(child);
            }
            return false;
        });
    }
    onDragStart(event) {
        if (!this.treeComponent.draggable || this.node.disabled)
            return;
        event.stopPropagation();
        this.treeComponent.dragNode = this.node;
        event.dataTransfer.setData('text/plain', this.node.key);
        event.dataTransfer.effectAllowed = 'move';
    }
    onDragOver(event) {
        if (!this.treeComponent.draggable || !this.treeComponent.dragNode)
            return;
        if (this.treeComponent.dragNode.key === this.node.key)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = true;
    }
    onDragLeave() {
        this.isDragOver = false;
    }
    onDrop(event) {
        if (!this.treeComponent.draggable || !this.treeComponent.dragNode)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = false;
        const dragNode = this.treeComponent.dragNode;
        if (dragNode.key === this.node.key)
            return;
        this.treeComponent.moveNode(dragNode, this.node);
        this.treeComponent.dragNode = null;
    }
    onDragEnd() {
        this.treeComponent.dragNode = null;
        this.isDragOver = false;
    }
}
NgcTreeNodeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTreeNodeComponent, deps: [{ token: i1.NgcTreeService, optional: true }], target: i0.ɵɵFactoryTarget.Component });
NgcTreeNodeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcTreeNodeComponent, selector: "ngc-tree-node", inputs: { node: "node", checkable: "checkable", loadData: "loadData" }, ngImport: i0, template: "<div class=\"ngc-tree-node\" [class.ngc-tree-node--disabled]=\"node.disabled\">\n\t<!-- Node row element -->\n\t<div class=\"ngc-tree-node__row\" \n\t\t[class.ngc-tree-node__row--selected]=\"node.selected\"\n\t\t[class.ngc-tree-node__row--drag-over]=\"isDragOver\"\n\t\t[draggable]=\"treeComponent.draggable\"\n\t\t(dragstart)=\"onDragStart($event)\"\n\t\t(dragover)=\"onDragOver($event)\"\n\t\t(dragleave)=\"onDragLeave()\"\n\t\t(drop)=\"onDrop($event)\"\n\t\t(dragend)=\"onDragEnd()\">\n\t\t\n\t\t<!-- Caret Expand Icon / Spinner -->\n\t\t<div class=\"ngc-tree-node__toggle-wrapper\" (click)=\"toggleExpand($event)\">\n\t\t\t<ng-container *ngIf=\"node.loading; else caretBlock\">\n\t\t\t\t<ngc-icon name=\"progress-auto\" class=\"ngc-tree-node__loading-icon\"></ngc-icon>\n\t\t\t</ng-container>\n\t\t\t<ng-template #caretBlock>\n\t\t\t\t<ngc-icon \n\t\t\t\t\t*ngIf=\"!node.isLeaf\"\n\t\t\t\t\tname=\"chevron-right\" \n\t\t\t\t\tclass=\"ngc-tree-node__caret\" \n\t\t\t\t\t[class.ngc-tree-node__caret--expanded]=\"node.expanded\">\n\t\t\t\t</ngc-icon>\n\t\t\t</ng-template>\n\t\t</div>\n\n\t\t<!-- Checkbox -->\n\t\t<div class=\"ngc-tree-node__checkbox-wrapper\" *ngIf=\"checkable && !node.disableCheckbox\">\n\t\t\t<ngc-checkbox \n\t\t\t\t[(ngModel)]=\"node.checked\" \n\t\t\t\t[indeterminate]=\"isIndeterminate()\"\n\t\t\t\t(ngModelChange)=\"onCheck()\" \n\t\t\t\t[disabled]=\"node.disabled\">\n\t\t\t</ngc-checkbox>\n\t\t</div>\n\n\t\t<!-- Text content -->\n\t\t<div class=\"ngc-tree-node__content\" (click)=\"onSelect($event)\">\n\t\t\t<span class=\"ngc-tree-node__title\">{{ node.title }}</span>\n\t\t</div>\n\t</div>\n\n\t<!-- Child nodes recursion container -->\n\t<div class=\"ngc-tree-node__children\" *ngIf=\"node.expanded && node.children?.length\">\n\t\t<ng-container *ngFor=\"let childNode of node.children\">\n\t\t\t<ngc-tree-node \n\t\t\t\t[node]=\"childNode\" \n\t\t\t\t[checkable]=\"checkable\" \n\t\t\t\t[loadData]=\"loadData\">\n\t\t\t</ngc-tree-node>\n\t\t</ng-container>\n\t</div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i4.NgcCheckboxComponent, selector: "ngc-checkbox", inputs: ["label", "color", "labelColor", "ngModel", "disabled", "readonly", "indeterminate"], outputs: ["ngModelChange"] }, { kind: "component", type: i5.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }, { kind: "component", type: NgcTreeNodeComponent, selector: "ngc-tree-node", inputs: ["node", "checkable", "loadData"] }], encapsulation: i0.ViewEncapsulation.None });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcTreeNodeComponent.prototype, "checkable", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTreeNodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-tree-node', encapsulation: ViewEncapsulation.None, template: "<div class=\"ngc-tree-node\" [class.ngc-tree-node--disabled]=\"node.disabled\">\n\t<!-- Node row element -->\n\t<div class=\"ngc-tree-node__row\" \n\t\t[class.ngc-tree-node__row--selected]=\"node.selected\"\n\t\t[class.ngc-tree-node__row--drag-over]=\"isDragOver\"\n\t\t[draggable]=\"treeComponent.draggable\"\n\t\t(dragstart)=\"onDragStart($event)\"\n\t\t(dragover)=\"onDragOver($event)\"\n\t\t(dragleave)=\"onDragLeave()\"\n\t\t(drop)=\"onDrop($event)\"\n\t\t(dragend)=\"onDragEnd()\">\n\t\t\n\t\t<!-- Caret Expand Icon / Spinner -->\n\t\t<div class=\"ngc-tree-node__toggle-wrapper\" (click)=\"toggleExpand($event)\">\n\t\t\t<ng-container *ngIf=\"node.loading; else caretBlock\">\n\t\t\t\t<ngc-icon name=\"progress-auto\" class=\"ngc-tree-node__loading-icon\"></ngc-icon>\n\t\t\t</ng-container>\n\t\t\t<ng-template #caretBlock>\n\t\t\t\t<ngc-icon \n\t\t\t\t\t*ngIf=\"!node.isLeaf\"\n\t\t\t\t\tname=\"chevron-right\" \n\t\t\t\t\tclass=\"ngc-tree-node__caret\" \n\t\t\t\t\t[class.ngc-tree-node__caret--expanded]=\"node.expanded\">\n\t\t\t\t</ngc-icon>\n\t\t\t</ng-template>\n\t\t</div>\n\n\t\t<!-- Checkbox -->\n\t\t<div class=\"ngc-tree-node__checkbox-wrapper\" *ngIf=\"checkable && !node.disableCheckbox\">\n\t\t\t<ngc-checkbox \n\t\t\t\t[(ngModel)]=\"node.checked\" \n\t\t\t\t[indeterminate]=\"isIndeterminate()\"\n\t\t\t\t(ngModelChange)=\"onCheck()\" \n\t\t\t\t[disabled]=\"node.disabled\">\n\t\t\t</ngc-checkbox>\n\t\t</div>\n\n\t\t<!-- Text content -->\n\t\t<div class=\"ngc-tree-node__content\" (click)=\"onSelect($event)\">\n\t\t\t<span class=\"ngc-tree-node__title\">{{ node.title }}</span>\n\t\t</div>\n\t</div>\n\n\t<!-- Child nodes recursion container -->\n\t<div class=\"ngc-tree-node__children\" *ngIf=\"node.expanded && node.children?.length\">\n\t\t<ng-container *ngFor=\"let childNode of node.children\">\n\t\t\t<ngc-tree-node \n\t\t\t\t[node]=\"childNode\" \n\t\t\t\t[checkable]=\"checkable\" \n\t\t\t\t[loadData]=\"loadData\">\n\t\t\t</ngc-tree-node>\n\t\t</ng-container>\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgcTreeService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { node: [{
                type: Input
            }], checkable: [{
                type: Input
            }], loadData: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRyZWUtbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10cmVlL25nYy10cmVlLW5vZGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdHJlZS9uZ2MtdHJlZS1ub2RlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7Ozs7Ozs7QUFPdEMsTUFBTSxPQUFPLG9CQUFvQjtJQU1oQyxZQUErQixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFIM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQW1FckQsZUFBVSxHQUFHLEtBQUssQ0FBQztJQWhFcUMsQ0FBQztJQUV6RCxZQUFZLENBQUMsS0FBaUI7UUFDcEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3BHLElBQUksQ0FBQyxJQUFJLENB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QUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUM3QyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUUzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRU0sU0FBUztRQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOztpSEE3R1csb0JBQW9CO3FHQUFwQixvQkFBb0IsNkhDWGpDLDY5REFzREEsazRCRDNDYSxvQkFBb0I7QUFHaEM7SUFBVSxhQUFhLEVBQUU7O3VEQUFtQzsyRkFIaEQsb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNHLGVBQWUsaUJBRVgsaUJBQWlCLENBQUMsSUFBSTs7MEJBUXpCLFFBQVE7NENBSkwsSUFBSTtzQkFBbkIsS0FBSztnQkFDMkIsU0FBUztzQkFBekMsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2NUcmVlTm9kZSwgTmdjVHJlZVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb2VyY2VCb29sZWFuIH0gZnJvbSAnQGNvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLXRyZWUtbm9kZScsXG5cdHRlbXBsYXRlVXJsXHRcdDogJy4vbmdjLXRyZWUtbm9kZS5odG1sJyxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NUcmVlTm9kZUNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHVibGljIG5vZGU6IE5nY1RyZWVOb2RlO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBjaGVja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgcHVibGljIGxvYWREYXRhOiAobm9kZTogTmdjVHJlZU5vZGUpID0+IFByb21pc2U8dm9pZD4gfCBPYnNlcnZhYmxlPHZvaWQ+O1xuXG5cdGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyB0cmVlQ29tcG9uZW50OiBOZ2NUcmVlU2VydmljZSkge31cblxuXHRwdWJsaWMgdG9nZ2xlRXhwYW5kKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKHRoaXMubm9kZS5pc0xlYWYpIHJldHVybjtcblxuXHRcdHRoaXMubm9kZS5leHBhbmRlZCA9ICF0aGlzLm5vZGUuZXhwYW5kZWQ7XG5cdFx0XG5cdFx0aWYgKHRoaXMubm9kZS5leHBhbmRlZCAmJiB0aGlzLmxvYWREYXRhICYmICghdGhpcy5ub2RlLmNoaWxkcmVuIHx8IHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDApKSB7XG5cdFx0XHR0aGlzLm5vZGUubG9hZGluZyA9IHRydWU7XG5cdFx0XHRjb25zdCBsb2FkID0gdGhpcy5sb2FkRGF0YSh0aGlzLm5vZGUpO1xuXHRcdFx0Y29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XG5cdFx0XHRcdHRoaXMubm9kZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMudHJlZUNvbXBvbmVudC5kYXRhQ2hhbmdlLmVtaXQodGhpcy50cmVlQ29tcG9uZW50LmRhdGEpO1xuXHRcdFx0XHR0aGlzLnRyZWVDb21wb25lbnQuY2RyLm1hcmtGb3JDaGVjaygpO1xuXHRcdFx0fTtcblx0XHRcdGlmIChsb2FkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdFx0XHRsb2FkLnRoZW4oaGFuZGxlQ29tcGxldGUpLmNhdGNoKGhhbmRsZUNvbXBsZXRlKTtcblx0XHRcdH0gZWxzZSBpZiAobG9hZCAmJiB0eXBlb2YgbG9hZC5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0bG9hZC5zdWJzY3JpYmUoe1xuXHRcdFx0XHRcdG5leHQ6IGhhbmRsZUNvbXBsZXRlLFxuXHRcdFx0XHRcdGVycm9yOiBoYW5kbGVDb21wbGV0ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubm9kZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMudHJlZUNvbXBvbmVudC5kYXRhQ2hhbmdlLmVtaXQodGhpcy50cmVlQ29tcG9uZW50LmRhdGEpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRyZWVDb21wb25lbnQuZGF0YUNoYW5nZS5lbWl0KHRoaXMudHJlZUNvbXBvbmVudC5kYXRhKTtcblx0XHR9XG5cdFx0dGhpcy50cmVlQ29tcG9uZW50Lm5vZGVFeHBhbmQuZW1pdCh0aGlzLm5vZGUpO1xuXHRcdHRoaXMudHJlZUNvbXBvbmVudC5jZHIubWFya0ZvckNoZWNrKCk7XG5cdH1cblxuXHRwdWJsaWMgb25TZWxlY3QoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnRyZWVDb21wb25lbnQub25Ob2RlU2VsZWN0ZWQodGhpcy5ub2RlKTtcblx0XHRpZiAoIXRoaXMubm9kZS5pc0xlYWYpIHtcblx0XHRcdHRoaXMudG9nZ2xlRXhwYW5kKGV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb25DaGVjaygpIHtcblx0XHR0aGlzLnRyZWVDb21wb25lbnQub25Ob2RlQ2hlY2tlZCh0aGlzLm5vZGUpO1xuXHR9XG5cblx0cHVibGljIGlzSW5kZXRlcm1pbmF0ZSgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5ub2RlLmNoZWNrZWQpIHJldHVybiBmYWxzZTtcblx0XHRpZiAoIXRoaXMubm9kZS5jaGlsZHJlbiB8fCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gdGhpcy5oYXNDaGVja2VkT3JJbmRldGVybWluYXRlQ2hpbGQodGhpcy5ub2RlKTtcblx0fVxuXG5cdHByaXZhdGUgaGFzQ2hlY2tlZE9ySW5kZXRlcm1pbmF0ZUNoaWxkKG5vZGU6IE5nY1RyZWVOb2RlKTogYm9vbGVhbiB7XG5cdFx0aWYgKCFub2RlLmNoaWxkcmVuKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIG5vZGUuY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHRpZiAoY2hpbGQuY2hlY2tlZCkgcmV0dXJuIHRydWU7XG5cdFx0XHRpZiAoY2hpbGQuY2hpbGRyZW4gJiYgY2hpbGQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYXNDaGVja2VkT3JJbmRldGVybWluYXRlQ2hpbGQoY2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGlzRHJhZ092ZXIgPSBmYWxzZTtcblxuXHRwdWJsaWMgb25EcmFnU3RhcnQoZXZlbnQ6IERyYWdFdmVudCkge1xuXHRcdGlmICghdGhpcy50cmVlQ29tcG9uZW50LmRyYWdnYWJsZSB8fCB0aGlzLm5vZGUuZGlzYWJsZWQpIHJldHVybjtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnRyZWVDb21wb25lbnQuZHJhZ05vZGUgPSB0aGlzLm5vZGU7XG5cdFx0ZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLm5vZGUua2V5KTtcblx0XHRldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcblx0fVxuXG5cdHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcblx0XHRpZiAoIXRoaXMudHJlZUNvbXBvbmVudC5kcmFnZ2FibGUgfHwgIXRoaXMudHJlZUNvbXBvbmVudC5kcmFnTm9kZSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLnRyZWVDb21wb25lbnQuZHJhZ05vZGUua2V5ID09PSB0aGlzLm5vZGUua2V5KSByZXR1cm47XG5cdFx0XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmlzRHJhZ092ZXIgPSB0cnVlO1xuXHR9XG5cblx0cHVibGljIG9uRHJhZ0xlYXZlKCkge1xuXHRcdHRoaXMuaXNEcmFnT3ZlciA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIG9uRHJvcChldmVudDogRHJhZ0V2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLnRyZWVDb21wb25lbnQuZHJhZ2dhYmxlIHx8ICF0aGlzLnRyZWVDb21wb25lbnQuZHJhZ05vZGUpIHJldHVybjtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuaXNEcmFnT3ZlciA9IGZhbHNlO1xuXG5cdFx0Y29uc3QgZHJhZ05vZGUgPSB0aGlzLnRyZWVDb21wb25lbnQuZHJhZ05vZGU7XG5cdFx0aWYgKGRyYWdOb2RlLmtleSA9PT0gdGhpcy5ub2RlLmtleSkgcmV0dXJuO1xuXG5cdFx0dGhpcy50cmVlQ29tcG9uZW50Lm1vdmVOb2RlKGRyYWdOb2RlLCB0aGlzLm5vZGUpO1xuXHRcdHRoaXMudHJlZUNvbXBvbmVudC5kcmFnTm9kZSA9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgb25EcmFnRW5kKCkge1xuXHRcdHRoaXMudHJlZUNvbXBvbmVudC5kcmFnTm9kZSA9IG51bGw7XG5cdFx0dGhpcy5pc0RyYWdPdmVyID0gZmFsc2U7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm5nYy10cmVlLW5vZGVcIiBbY2xhc3MubmdjLXRyZWUtbm9kZS0tZGlzYWJsZWRdPVwibm9kZS5kaXNhYmxlZFwiPlxuXHQ8IS0tIE5vZGUgcm93IGVsZW1lbnQgLS0+XG5cdDxkaXYgY2xhc3M9XCJuZ2MtdHJlZS1ub2RlX19yb3dcIiBcblx0XHRbY2xhc3MubmdjLXRyZWUtbm9kZV9fcm93LS1zZWxlY3RlZF09XCJub2RlLnNlbGVjdGVkXCJcblx0XHRbY2xhc3MubmdjLXRyZWUtbm9kZV9fcm93LS1kcmFnLW92ZXJdPVwiaXNEcmFnT3ZlclwiXG5cdFx0W2RyYWdnYWJsZV09XCJ0cmVlQ29tcG9uZW50LmRyYWdnYWJsZVwiXG5cdFx0KGRyYWdzdGFydCk9XCJvbkRyYWdTdGFydCgkZXZlbnQpXCJcblx0XHQoZHJhZ292ZXIpPVwib25EcmFnT3ZlcigkZXZlbnQpXCJcblx0XHQoZHJhZ2xlYXZlKT1cIm9uRHJhZ0xlYXZlKClcIlxuXHRcdChkcm9wKT1cIm9uRHJvcCgkZXZlbnQpXCJcblx0XHQoZHJhZ2VuZCk9XCJvbkRyYWdFbmQoKVwiPlxuXHRcdFxuXHRcdDwhLS0gQ2FyZXQgRXhwYW5kIEljb24gLyBTcGlubmVyIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJuZ2MtdHJlZS1ub2RlX190b2dnbGUtd3JhcHBlclwiIChjbGljayk9XCJ0b2dnbGVFeHBhbmQoJGV2ZW50KVwiPlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vZGUubG9hZGluZzsgZWxzZSBjYXJldEJsb2NrXCI+XG5cdFx0XHRcdDxuZ2MtaWNvbiBuYW1lPVwicHJvZ3Jlc3MtYXV0b1wiIGNsYXNzPVwibmdjLXRyZWUtbm9kZV9fbG9hZGluZy1pY29uXCI+PC9uZ2MtaWNvbj5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0PG5nLXRlbXBsYXRlICNjYXJldEJsb2NrPlxuXHRcdFx0XHQ8bmdjLWljb24gXG5cdFx0XHRcdFx0Km5nSWY9XCIhbm9kZS5pc0xlYWZcIlxuXHRcdFx0XHRcdG5hbWU9XCJjaGV2cm9uLXJpZ2h0XCIgXG5cdFx0XHRcdFx0Y2xhc3M9XCJuZ2MtdHJlZS1ub2RlX19jYXJldFwiIFxuXHRcdFx0XHRcdFtjbGFzcy5uZ2MtdHJlZS1ub2RlX19jYXJldC0tZXhwYW5kZWRdPVwibm9kZS5leHBhbmRlZFwiPlxuXHRcdFx0XHQ8L25nYy1pY29uPlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2Rpdj5cblxuXHRcdDwhLS0gQ2hlY2tib3ggLS0+XG5cdFx0PGRpdiBjbGFzcz1cIm5nYy10cmVlLW5vZGVfX2NoZWNrYm94LXdyYXBwZXJcIiAqbmdJZj1cImNoZWNrYWJsZSAmJiAhbm9kZS5kaXNhYmxlQ2hlY2tib3hcIj5cblx0XHRcdDxuZ2MtY2hlY2tib3ggXG5cdFx0XHRcdFsobmdNb2RlbCldPVwibm9kZS5jaGVja2VkXCIgXG5cdFx0XHRcdFtpbmRldGVybWluYXRlXT1cImlzSW5kZXRlcm1pbmF0ZSgpXCJcblx0XHRcdFx0KG5nTW9kZWxDaGFuZ2UpPVwib25DaGVjaygpXCIgXG5cdFx0XHRcdFtkaXNhYmxlZF09XCJub2RlLmRpc2FibGVkXCI+XG5cdFx0XHQ8L25nYy1jaGVja2JveD5cblx0XHQ8L2Rpdj5cblxuXHRcdDwhLS0gVGV4dCBjb250ZW50IC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJuZ2MtdHJlZS1ub2RlX19jb250ZW50XCIgKGNsaWNrKT1cIm9uU2VsZWN0KCRldmVudClcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwibmdjLXRyZWUtbm9kZV9fdGl0bGVcIj57eyBub2RlLnRpdGxlIH19PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8IS0tIENoaWxkIG5vZGVzIHJlY3Vyc2lvbiBjb250YWluZXIgLS0+XG5cdDxkaXYgY2xhc3M9XCJuZ2MtdHJlZS1ub2RlX19jaGlsZHJlblwiICpuZ0lmPVwibm9kZS5leHBhbmRlZCAmJiBub2RlLmNoaWxkcmVuPy5sZW5ndGhcIj5cblx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjaGlsZE5vZGUgb2Ygbm9kZS5jaGlsZHJlblwiPlxuXHRcdFx0PG5nYy10cmVlLW5vZGUgXG5cdFx0XHRcdFtub2RlXT1cImNoaWxkTm9kZVwiIFxuXHRcdFx0XHRbY2hlY2thYmxlXT1cImNoZWNrYWJsZVwiIFxuXHRcdFx0XHRbbG9hZERhdGFdPVwibG9hZERhdGFcIj5cblx0XHRcdDwvbmdjLXRyZWUtbm9kZT5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==