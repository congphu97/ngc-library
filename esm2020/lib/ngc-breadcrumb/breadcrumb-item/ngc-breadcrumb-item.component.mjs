import { Component, Input, ViewChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NgcBreadcrumbItemComponent {
    /**
     * @constructor
     * @param {Router} _router
     */
    constructor(_router) {
        this._router = _router;
        this.truncate = true;
        this.truncateLimitLine = 1;
        this.navigated = new EventEmitter();
    }
    get isActive() { return !!this.commands?.length; }
    /**
     * @return {void}
     */
    navigate() {
        if (!this.commands)
            return;
        this._router.navigate(this.commands, this.extras);
        this.navigated.emit();
    }
}
NgcBreadcrumbItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBreadcrumbItemComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
NgcBreadcrumbItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcBreadcrumbItemComponent, selector: "ngc-breadcrumb-item", inputs: { commands: "commands", extras: "extras", disabled: "disabled", truncate: "truncate", truncateLimitLine: "truncateLimitLine" }, outputs: { navigated: "navigated" }, viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\n    <ng-content></ng-content>\n</ng-template>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcBreadcrumbItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-breadcrumb-item', template: "<ng-template>\n    <ng-content></ng-content>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], commands: [{
                type: Input
            }], extras: [{
                type: Input
            }], disabled: [{
                type: Input
            }], truncate: [{
                type: Input
            }], truncateLimitLine: [{
                type: Input
            }], navigated: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1icmVhZGNydW1iL2JyZWFkY3J1bWItaXRlbS9uZ2MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWJyZWFkY3J1bWIvYnJlYWRjcnVtYi1pdGVtL25nYy1icmVhZGNydW1iLWl0ZW0uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLE1BQU0sRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTzNELE1BQU0sT0FBTywwQkFBMEI7SUFjdEM7OztPQUdHO0lBQ0gsWUFBcUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFYcEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFFN0IsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBUWxDLENBQUM7SUFOekMsSUFBSSxRQUFRLEtBQWMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBUTNEOztPQUVHO0lBQ0ksUUFBUTtRQUNkLElBQUssQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFHLE9BQU87UUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzt1SEE1QlcsMEJBQTBCOzJHQUExQiwwQkFBMEIscVJBRTFCLFdBQVcsOERDVnhCLDhEQUVjOzJGRE1ELDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSxxQkFBcUI7NkZBTW1CLFdBQVc7c0JBQTdELFNBQVM7dUJBQUUsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFFekIsUUFBUTtzQkFBdkIsS0FBSztnQkFDVSxNQUFNO3NCQUFyQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFDVSxpQkFBaUI7c0JBQWhDLEtBQUs7Z0JBRVcsU0FBUztzQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2MtYnJlYWRjcnVtYi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nYy1icmVhZGNydW1iLWl0ZW0uaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nYy1icmVhZGNydW1iLWl0ZW0uc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nY0JyZWFkY3J1bWJJdGVtQ29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCBUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSApIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRASW5wdXQoKSBwdWJsaWMgY29tbWFuZHM6IGFueVtdO1xuXHRASW5wdXQoKSBwdWJsaWMgZXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzO1xuXHRASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHB1YmxpYyB0cnVuY2F0ZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIHB1YmxpYyB0cnVuY2F0ZUxpbWl0TGluZTogbnVtYmVyID0gMTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG5hdmlnYXRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5jb21tYW5kcz8ubGVuZ3RoOyB9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1JvdXRlcn0gX3JvdXRlclxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX3JvdXRlcjogUm91dGVyICkge31cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBuYXZpZ2F0ZSgpIHtcblx0XHRpZiAoICF0aGlzLmNvbW1hbmRzICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKCB0aGlzLmNvbW1hbmRzLCB0aGlzLmV4dHJhcyApO1xuXHRcdHRoaXMubmF2aWdhdGVkLmVtaXQoKTtcblx0fVxuXG59XG4iLCI8bmctdGVtcGxhdGU+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT4iXX0=