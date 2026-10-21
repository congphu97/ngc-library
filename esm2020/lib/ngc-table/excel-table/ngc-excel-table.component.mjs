import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ContentChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { startWith } from 'rxjs/operators';
import _ from 'lodash';
import * as XLSX from 'xlsx';
import { Unsubscriber, untilCmpDestroyed } from '@core';
import { NgcExcelCellComponent } from './ngc-excel-cell.component';
import * as i0 from "@angular/core";
let NgcExcelTableComponent = class NgcExcelTableComponent {
    /**
     * @constructor
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        this.excelCellList
            .changes
            .pipe(startWith(this.excelCellList), untilCmpDestroyed(this))
            .subscribe((items) => {
            const itemArr = items.toArray();
            const itemArrLength = itemArr.length;
            _.forEach(itemArr, (item, index) => {
                if (item.readonly)
                    return;
                const el = item.excellCellContent.nativeElement;
                el.removeEventListener('paste', undefined);
                el.addEventListener('paste', (event) => {
                    event.preventDefault();
                    const text = event.clipboardData.getData('text/plain');
                    const textArr = text.split('\n');
                    const numOfColumns = itemArrLength / 10;
                    for (let i = 0; i < textArr.length; i++) {
                        const _item = itemArr[index + numOfColumns * i];
                        _item && _item.setTextContent(textArr[i]);
                    }
                });
            });
        });
    }
    /**
     * @param {XLSX.Table2SheetOpts} options
     * @return {XLSX.WorkSheet}
     */
    export(options) {
        const element = this._elementRef.nativeElement.cloneNode(true);
        _.forEach(element.querySelectorAll('[index]'), (child) => {
            child.parentNode.removeChild(child);
        });
        return XLSX.utils.table_to_sheet(element, options);
    }
    /**
     * @param {string} filename
     * @param {boolean} isOnlyHeader
     * @return {void}
     */
    download(filename, isOnlyHeader = false) {
        const element = this._elementRef.nativeElement.cloneNode(true);
        isOnlyHeader && element.querySelector('tbody').remove();
        _.forEach(element.querySelectorAll('[index]'), (child) => {
            child.parentNode.removeChild(child);
        });
        XLSX.writeFile(XLSX.utils.table_to_book(element), filename);
    }
};
NgcExcelTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExcelTableComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcExcelTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcExcelTableComponent, selector: "table[ngcExcelTable]", host: { classAttribute: "ngc-excel-table" }, queries: [{ propertyName: "excelCellList", predicate: NgcExcelCellComponent, descendants: true }], ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host(.ngc-excel-table){min-width:100%;border-spacing:0}:host(.ngc-excel-table) ::ng-deep th,:host(.ngc-excel-table) ::ng-deep td{font-weight:var(--ngc-font-weight-semibold, 600);padding:10px;border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);min-width:200px;height:40px;min-height:40px}:host(.ngc-excel-table) ::ng-deep th[index],:host(.ngc-excel-table) ::ng-deep td[index]{left:0}:host(.ngc-excel-table) ::ng-deep thead th,:host(.ngc-excel-table) ::ng-deep thead td,:host(.ngc-excel-table) ::ng-deep tbody td[index]{background-color:var(--ngc-color-neutral-background-canvas, #fafafa);position:sticky;z-index:1}:host(.ngc-excel-table) ::ng-deep thead th,:host(.ngc-excel-table) ::ng-deep thead td{top:0}:host(.ngc-excel-table) ::ng-deep thead th[index],:host(.ngc-excel-table) ::ng-deep thead td[index]{z-index:2}:host(.ngc-excel-table) ::ng-deep tr[invalid] td{border-top-color:var(--ngc-color-danger-default, #ff3130);border-bottom-color:var(--ngc-color-danger-default, #ff3130)}:host(.ngc-excel-table) ::ng-deep tr[invalid] td:first-child{border-left-color:var(--ngc-color-danger-default, #ff3130)}:host(.ngc-excel-table) ::ng-deep tr[invalid] td:last-child{border-right-color:var(--ngc-color-danger-default, #ff3130)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
NgcExcelTableComponent = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [ElementRef])
], NgcExcelTableComponent);
export { NgcExcelTableComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcExcelTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'table[ngcExcelTable]', host: { class: 'ngc-excel-table' }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: [":host(.ngc-excel-table){min-width:100%;border-spacing:0}:host(.ngc-excel-table) ::ng-deep th,:host(.ngc-excel-table) ::ng-deep td{font-weight:var(--ngc-font-weight-semibold, 600);padding:10px;border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);min-width:200px;height:40px;min-height:40px}:host(.ngc-excel-table) ::ng-deep th[index],:host(.ngc-excel-table) ::ng-deep td[index]{left:0}:host(.ngc-excel-table) ::ng-deep thead th,:host(.ngc-excel-table) ::ng-deep thead td,:host(.ngc-excel-table) ::ng-deep tbody td[index]{background-color:var(--ngc-color-neutral-background-canvas, #fafafa);position:sticky;z-index:1}:host(.ngc-excel-table) ::ng-deep thead th,:host(.ngc-excel-table) ::ng-deep thead td{top:0}:host(.ngc-excel-table) ::ng-deep thead th[index],:host(.ngc-excel-table) ::ng-deep thead td[index]{z-index:2}:host(.ngc-excel-table) ::ng-deep tr[invalid] td{border-top-color:var(--ngc-color-danger-default, #ff3130);border-bottom-color:var(--ngc-color-danger-default, #ff3130)}:host(.ngc-excel-table) ::ng-deep tr[invalid] td:first-child{border-left-color:var(--ngc-color-danger-default, #ff3130)}:host(.ngc-excel-table) ::ng-deep tr[invalid] td:last-child{border-right-color:var(--ngc-color-danger-default, #ff3130)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { excelCellList: [{
                type: ContentChildren,
                args: [NgcExcelCellComponent, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWV4Y2VsLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXRhYmxlL2V4Y2VsLXRhYmxlL25nYy1leGNlbC10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10YWJsZS9leGNlbC10YWJsZS9uZ2MtZXhjZWwtdGFibGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUN0QyxTQUFTLEVBQW9CLHVCQUF1QixFQUNwRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBVTVELElBQU0sc0JBQXNCLEdBQTVCLE1BQU0sc0JBQXNCO0lBSWxDOzs7T0FHRztJQUNILFlBQXFCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUksQ0FBQztJQUVqRDs7T0FFRztJQUNILGtCQUFrQjtRQUNqQixJQUFJLENBQUMsYUFBYTthQUNqQixPQUFPO2FBQ1AsSUFBSSxDQUNKLFNBQVMsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFFLEVBQy9CLGlCQUFpQixDQUFFLElBQUksQ0FBRSxDQUN6QjthQUNBLFNBQVMsQ0FBRSxDQUFFLEtBQXVDLEVBQUcsRUFBRTtZQUN6RCxNQUFNLE9BQU8sR0FBNEIsS0FBSyxDQUFDLE9BQU8s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QWlCLEVBQUUsbUJBQ25CLHVCQUF1QixDQUFDLE1BQU07aUdBSXdCLGFBQWE7c0JBQXBGLGVBQWU7dUJBQUUscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sXG5cdFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcblxuaW1wb3J0IHsgVW5zdWJzY3JpYmVyLCB1bnRpbENtcERlc3Ryb3llZCB9IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IE5nY0V4Y2VsQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vbmdjLWV4Y2VsLWNlbGwuY29tcG9uZW50JztcblxuQFVuc3Vic2NyaWJlcigpXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAndGFibGVbbmdjRXhjZWxUYWJsZV0nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1leGNlbC10YWJsZS5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtZXhjZWwtdGFibGUuc2NzcycgXSxcblx0aG9zdFx0XHRcdDogeyBjbGFzczogJ25nYy1leGNlbC10YWJsZScgfSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjRXhjZWxUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG5cdEBDb250ZW50Q2hpbGRyZW4oIE5nY0V4Y2VsQ2VsbENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9ICkgcHVibGljIGV4Y2VsQ2VsbExpc3Q6IFF1ZXJ5TGlzdDxOZ2NFeGNlbENlbGxDb21wb25lbnQ+O1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLmV4Y2VsQ2VsbExpc3Rcblx0XHQuY2hhbmdlc1xuXHRcdC5waXBlKFxuXHRcdFx0c3RhcnRXaXRoKCB0aGlzLmV4Y2VsQ2VsbExpc3QgKSxcblx0XHRcdHVudGlsQ21wRGVzdHJveWVkKCB0aGlzIClcblx0XHQpXG5cdFx0LnN1YnNjcmliZSggKCBpdGVtczogUXVlcnlMaXN0PE5nY0V4Y2VsQ2VsbENvbXBvbmVudD4gKSA9PiB7XG5cdFx0XHRjb25zdCBpdGVtQXJyOiBOZ2NFeGNlbENlbGxDb21wb25lbnRbXSA9IGl0ZW1zLnRvQXJyYXkoKTtcblx0XHRcdGNvbnN0IGl0ZW1BcnJMZW5ndGg6IG51bWJlciA9IGl0ZW1BcnIubGVuZ3RoO1xuXG5cdFx0XHRfLmZvckVhY2goIGl0ZW1BcnIsICggaXRlbTogTmdjRXhjZWxDZWxsQ29tcG9uZW50LCBpbmRleDogbnVtYmVyICkgPT4ge1xuXHRcdFx0XHRpZiAoIGl0ZW0ucmVhZG9ubHkgKSByZXR1cm47XG5cblx0XHRcdFx0Y29uc3QgZWw6IEhUTUxFbGVtZW50ID0gaXRlbS5leGNlbGxDZWxsQ29udGVudC5uYXRpdmVFbGVtZW50O1xuXG5cdFx0XHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwYXN0ZScsIHVuZGVmaW5lZCApO1xuXHRcdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCAncGFzdGUnLCAoIGV2ZW50OiBDbGlwYm9hcmRFdmVudCApID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdFx0Y29uc3QgdGV4dDogc3RyaW5nID0gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCAndGV4dC9wbGFpbicgKTtcblx0XHRcdFx0XHRjb25zdCB0ZXh0QXJyOiBzdHJpbmdbXSA9IHRleHQuc3BsaXQoICdcXG4nICk7XG5cdFx0XHRcdFx0Y29uc3QgbnVtT2ZDb2x1bW5zOiBudW1iZXIgPSBpdGVtQXJyTGVuZ3RoIC8gMTA7XG5cblx0XHRcdFx0XHRmb3IgKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRleHRBcnIubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBfaXRlbTogTmdjRXhjZWxDZWxsQ29tcG9uZW50ID0gaXRlbUFyclsgaW5kZXggKyBudW1PZkNvbHVtbnMgKiBpIF07XG5cblx0XHRcdFx0XHRcdF9pdGVtICYmIF9pdGVtLnNldFRleHRDb250ZW50KCB0ZXh0QXJyWyBpIF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtYTFNYLlRhYmxlMlNoZWV0T3B0c30gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtYTFNYLldvcmtTaGVldH1cblx0ICovXG5cdHB1YmxpYyBleHBvcnQoIG9wdGlvbnM/OiBYTFNYLlRhYmxlMlNoZWV0T3B0cyApOiBYTFNYLldvcmtTaGVldCB7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTFRhYmxlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUoIHRydWUgKTtcblxuXHRcdF8uZm9yRWFjaCggZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnW2luZGV4XScgKSwgKCBjaGlsZDogSFRNTEVsZW1lbnQgKSA9PiB7XG5cdFx0XHRjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBjaGlsZCApO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBYTFNYLnV0aWxzLnRhYmxlX3RvX3NoZWV0KCBlbGVtZW50LCBvcHRpb25zICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmx5SGVhZGVyXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgZG93bmxvYWQoIGZpbGVuYW1lOiBzdHJpbmcsIGlzT25seUhlYWRlcjogYm9vbGVhbiA9IGZhbHNlICkge1xuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxUYWJsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKCB0cnVlICk7XG5cblx0XHRpc09ubHlIZWFkZXIgJiYgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCAndGJvZHknICkucmVtb3ZlKCk7XG5cblx0XHRfLmZvckVhY2goIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ1tpbmRleF0nICksICggY2hpbGQ6IEhUTUxFbGVtZW50ICkgPT4ge1xuXHRcdFx0Y2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggY2hpbGQgKTtcblx0XHR9ICk7XG5cblx0XHRYTFNYLndyaXRlRmlsZSggWExTWC51dGlscy50YWJsZV90b19ib29rKCBlbGVtZW50ICksIGZpbGVuYW1lICk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19