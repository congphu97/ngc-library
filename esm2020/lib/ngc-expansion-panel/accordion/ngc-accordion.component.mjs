import { __decorate } from "tslib";
import { Component, ContentChildren, QueryList, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import _ from 'lodash';
import { Unsubscriber, untilCmpDestroyed } from '@core';
import { NgcExpansionPanelComponent } from '../expansion-panel/ngc-expansion-panel.component';
import * as i0 from "@angular/core";
let NgcAccordionComponent = class NgcAccordionComponent {
    /**
     * @constructor
     */
    ngAfterContentInit() {
        this.expansionPanels
            .changes
            .pipe(startWith(this.expansionPanels), untilCmpDestroyed(this))
            .subscribe((items) => {
            const itemArr = items?._results;
            _.forEach(itemArr, (item) => {
                item
                    .expandedChange
                    .pipe(takeUntil(this.expansionPanels.changes), untilCmpDestroyed(this))
                    .subscribe((expanded) => {
                    expanded && _.forEach(itemArr, (_item) => {
                        _item !== item && _item.collapse();
                    });
                });
            });
        });
    }
};
NgcAccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcAccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcAccordionComponent, selector: "ngc-accordion", host: { classAttribute: "ngc-accordion" }, queries: [{ propertyName: "expansionPanels", predicate: NgcExpansionPanelComponent }], ngImport: i0, template: "<ng-content></ng-content>", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
NgcAccordionComponent = __decorate([
    Unsubscriber()
], NgcAccordionComponent);
export { NgcAccordionComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-accordion', host: { class: 'ngc-accordion' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" }]
        }], propDecorators: { expansionPanels: [{
                type: ContentChildren,
                args: [NgcExpansionPanelComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWFjY29yZGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1leHBhbnNpb24tcGFuZWwvYWNjb3JkaW9uL25nYy1hY2NvcmRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtZXhwYW5zaW9uLXBhbmVsL2FjY29yZGlvbi9uZ2MtYWNjb3JkaW9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFDbkIsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQzVELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQVksTUFBTSxPQUFPLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBVXZGLElBQU0scUJBQXFCLEdBQTNCLE1BQU0scUJBQXFCO0lBSWpDOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxlQUFlO2FBQ25CLE9BQU87YUFDUCxJQUFJLENBQ0osU0FBUyxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUUsRUFDakMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQ3pCO2FBQ0EsU0FBUyxDQUFFLENBQUUsS0FBNEMsRUFBRyxFQUFFO1lBQzlELE1BQU0sT0FBTyxHQUFtQyxLQUFrQixFQUFFLFFBQVEsQ0FBQztZQUU3RSxDQUFDLENBQUMsT0FBTyxDQUFFLE9BQU8sRUFBRSxDQUFFLElBQWdDLEVBQUcsRUFBRTtnQkFDMUQsSUFBSTtxQkFDSCxjQUFjO3FCQUNkLElBQUksQ0FDSixTQUFTLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUUsRUFDekMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQ3pCO3FCQUNBLFNBQVMsQ0FBRSxDQUFFLFFBQWlCLEVBQUcsRUFBRTtvQkFDbkMsUUFBUSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUUsT0FBTyxFQUFFLENBQUUsS0FBaUMsRUFBRyxFQUFFO3dCQUN2RSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDcEMsQ0FBQyxDQUFFLENBQUM7Z0JBQ0wsQ0FBQyxDQUFFLENBQUM7WUFDTCxDQUFDLENBQUUsQ0FBQztRQUNMLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQzs7a0hBL0JXLHFCQUFxQjtzR0FBckIscUJBQXFCLGdJQUVmLDBCQUEwQiw2QkNwQjdDLDJCQUF5QjtBRGtCWixxQkFBcUI7SUFSakMsWUFBWSxFQUFFO0dBUUYscUJBQXFCLENBaUNqQztTQWpDWSxxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRyxlQUFlLFFBRWxCLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxpQkFDbkIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs4QkFJTSxlQUFlO3NCQUFwRSxlQUFlO3VCQUFFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsXG5cdEFmdGVyQ29udGVudEluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgVW5zdWJzY3JpYmVyLCB1bnRpbENtcERlc3Ryb3llZCAsIElPYmplY3QgfSBmcm9tICdAY29yZSc7XG5pbXBvcnQgeyBOZ2NFeHBhbnNpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2V4cGFuc2lvbi1wYW5lbC9uZ2MtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudCc7XG5cbkBVbnN1YnNjcmliZXIoKVxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1hY2NvcmRpb24nLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1hY2NvcmRpb24uaHRtbCcsXG5cdGhvc3RcdFx0XHQ6IHsgY2xhc3M6ICduZ2MtYWNjb3JkaW9uJyB9LFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0FjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG5cdEBDb250ZW50Q2hpbGRyZW4oIE5nY0V4cGFuc2lvblBhbmVsQ29tcG9uZW50ICkgcHVibGljIGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PE5nY0V4cGFuc2lvblBhbmVsQ29tcG9uZW50PjtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0dGhpcy5leHBhbnNpb25QYW5lbHNcblx0XHQuY2hhbmdlc1xuXHRcdC5waXBlKFxuXHRcdFx0c3RhcnRXaXRoKCB0aGlzLmV4cGFuc2lvblBhbmVscyApLFxuXHRcdFx0dW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKVxuXHRcdClcblx0XHQuc3Vic2NyaWJlKCAoIGl0ZW1zOiBRdWVyeUxpc3Q8TmdjRXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+ICkgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbUFycjogTmdjRXhwYW5zaW9uUGFuZWxDb21wb25lbnRbXSA9ICggaXRlbXMgYXMgSU9iamVjdCApPy5fcmVzdWx0cztcblxuXHRcdFx0Xy5mb3JFYWNoKCBpdGVtQXJyLCAoIGl0ZW06IE5nY0V4cGFuc2lvblBhbmVsQ29tcG9uZW50ICkgPT4ge1xuXHRcdFx0XHRpdGVtXG5cdFx0XHRcdC5leHBhbmRlZENoYW5nZVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHR0YWtlVW50aWwoIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmNoYW5nZXMgKSxcblx0XHRcdFx0XHR1bnRpbENtcERlc3Ryb3llZCggdGhpcyApXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSggKCBleHBhbmRlZDogYm9vbGVhbiApID0+IHtcblx0XHRcdFx0XHRleHBhbmRlZCAmJiBfLmZvckVhY2goIGl0ZW1BcnIsICggX2l0ZW06IE5nY0V4cGFuc2lvblBhbmVsQ29tcG9uZW50ICkgPT4ge1xuXHRcdFx0XHRcdFx0X2l0ZW0gIT09IGl0ZW0gJiYgX2l0ZW0uY29sbGFwc2UoKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==