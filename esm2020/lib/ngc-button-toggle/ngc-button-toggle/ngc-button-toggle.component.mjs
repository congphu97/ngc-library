import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, ContentChildren, QueryList, Output, EventEmitter, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import _ from 'lodash';
import { Unsubscriber, DefaultValue, CoerceNumber, CoerceBoolean, untilCmpDestroyed } from '@core';
import { NgcButtonToggleItemComponent } from '../ngc-button-toggle-item/ngc-button-toggle-item.component';
import * as i0 from "@angular/core";
let NgcButtonToggleComponent = class NgcButtonToggleComponent {
    constructor() {
        this.selectedIndex = 0;
        this.hasShadow = true;
        this.theme = 'default';
        this.selectedIndexChange = new EventEmitter();
        this.changed = new EventEmitter();
    }
    get classStretch() { return this.stretch; }
    get classReverse() { return this.reverse; }
    get classHasBorder() { return this.hasBorder; }
    get classHasShadow() { return this.hasShadow; }
    get classThemeBackground() { return this.theme === 'background'; }
    /**
     * @constructor
     */
    ngAfterContentInit() {
        this.buttonToggleItems
            .changes
            .pipe(startWith(this.buttonToggleItems), untilCmpDestroyed(this))
            .subscribe((items) => {
            this.items = items?._results;
            _.forEach(items?.toArray(), (item, index) => {
                if (item.disabled)
                    return;
                item.isActive = item.activeState && index === this.selectedIndex;
                item
                    .clicked$
                    .pipe(takeUntil(this.buttonToggleItems.changes), untilCmpDestroyed(this))
                    .subscribe((ev) => ev.detail && this.select(index));
            });
        });
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.selectedIndex)
            return;
        this.select(this.selectedIndex, false);
    }
    /**
     * @param {number} index
     * @param {boolean} markAsDirty
     * @return {void}
     */
    select(index, markAsDirty = true) {
        if (!this.items || (markAsDirty && index === this.selectedIndex))
            return;
        const item = this.items[index];
        if (!item || item.disabled)
            return;
        if (item.activeState) {
            _.forEach(this.items, (_item) => { _item.isActive = false; });
            item.isActive = true;
        }
        this.selectedIndex = index;
        this.selectedIndexChange.emit(index);
        markAsDirty && this.changed.emit(item);
    }
};
NgcButtonToggleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonToggleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcButtonToggleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcButtonToggleComponent, selector: "ngc-button-toggle", inputs: { selectedIndex: "selectedIndex", stretch: "stretch", reverse: "reverse", hasBorder: "hasBorder", hasShadow: "hasShadow", theme: "theme" }, outputs: { selectedIndexChange: "selectedIndexChange", changed: "changed" }, host: { properties: { "class.ngc-button-toggle--stretch": "this.classStretch", "class.ngc-button-toggle--reverse": "this.classReverse", "class.ngc-button-toggle--has-border": "this.classHasBorder", "class.ngc-button-toggle--has-shadow": "this.classHasShadow", "class.ngc-button-toggle--theme-background": "this.classThemeBackground" }, classAttribute: "ngc-button-toggle" }, queries: [{ propertyName: "buttonToggleItems", predicate: NgcButtonToggleItemComponent, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>", styles: [".ngc-button-toggle{display:inline-flex;align-items:center;background-color:#78788014;border-radius:20px;border:none;width:fit-content;padding:4px;box-sizing:border-box}.ngc-button-toggle.ngc-button-toggle--stretch{width:100%;min-width:0}.ngc-button-toggle.ngc-button-toggle--stretch .ngc-button-toggle-item{flex:1;width:100%;min-width:0}.ngc-button-toggle.ngc-button-toggle--theme-background{background-color:#78788014;border-radius:16px;padding:4px;border:none}.ngc-button-toggle.ngc-button-toggle--theme-background:not(.ngc-button-toggle--has-border){border:none}.ngc-button-toggle.ngc-button-toggle--theme-background:not(.ngc-button-toggle--has-shadow) .ngc-button-toggle-item.ngc-button-toggle-item--active{box-shadow:none}.ngc-button-toggle.ngc-button-toggle--theme-background.ngc-button-toggle--reverse{background-color:#fff9;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.ngc-button-toggle.ngc-button-toggle--theme-background.ngc-button-toggle--reverse .ngc-button-toggle-item.ngc-button-toggle-item--active{background-color:#7878801f;box-shadow:none}.ngc-button-toggle.ngc-button-toggle--theme-background .ngc-button-toggle-item{font-size:var(--ngc-font-size-small, 12px);border-radius:12px;min-height:28px;padding:0 12px}.ngc-button-toggle.ngc-button-toggle--theme-background .ngc-button-toggle-item:not(.ngc-button-toggle-item--only-icon){min-width:80px;min-height:28px}.ngc-button-toggle.ngc-button-toggle--theme-background .ngc-button-toggle-item.ngc-button-toggle-item--active{background-color:#fff;box-shadow:0 2px 6px #00000014,0 1px 2px #0000000a;color:#000000e6;font-weight:600}.ngc-button-toggle.ngc-button-toggle--has-border{border:1px solid rgba(0,0,0,.08)}.ngc-button-toggle .ngc-button-toggle-item{display:flex;align-items:center;justify-content:center;text-align:center;padding:0 16px;height:32px;border-radius:16px;font-size:13px;font-weight:500;cursor:pointer;transition:background-color .25s cubic-bezier(.4,0,.2,1),color .25s cubic-bezier(.4,0,.2,1),box-shadow .25s cubic-bezier(.4,0,.2,1);color:#0000008c;white-space:nowrap;box-sizing:border-box}.ngc-button-toggle .ngc-button-toggle-item:not(.ngc-button-toggle-item--disabled):hover:not(.ngc-button-toggle-item--active){color:#000000d9}.ngc-button-toggle .ngc-button-toggle-item:not(.ngc-button-toggle-item--disabled).ngc-button-toggle-item--active{background-color:#fff;color:#000000e6;font-weight:600;box-shadow:0 2px 6px #00000014,0 1px 2px #0000000a}.ngc-button-toggle .ngc-button-toggle-item:not(.ngc-button-toggle-item--only-icon){min-width:80px;min-height:32px}.ngc-button-toggle .ngc-button-toggle-item:not(.ngc-button-toggle-item--only-icon) .ngc-button-toggle-item__icon{margin-right:6px}.ngc-button-toggle .ngc-button-toggle-item.ngc-button-toggle-item--disabled{cursor:not-allowed;color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-button-toggle .ngc-button-toggle-item.ngc-button-toggle-item--disabled:active{pointer-events:none}.ngc-button-toggle .ngc-button-toggle-item.ngc-button-toggle-item--only-icon{width:32px;height:32px;min-width:32px;padding:0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcButtonToggleComponent.prototype, "selectedIndex", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonToggleComponent.prototype, "stretch", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonToggleComponent.prototype, "reverse", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonToggleComponent.prototype, "hasBorder", void 0);
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcButtonToggleComponent.prototype, "hasShadow", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcButtonToggleComponent.prototype, "theme", void 0);
NgcButtonToggleComponent = __decorate([
    Unsubscriber()
], NgcButtonToggleComponent);
export { NgcButtonToggleComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcButtonToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-button-toggle', host: { class: 'ngc-button-toggle' }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", styles: [".ngc-button-toggle{display:inline-flex;align-items:center;background-color:#78788014;border-radius:20px;border:none;width:fit-content;padding:4px;box-sizing:border-box}.ngc-button-toggle.ngc-button-toggle--stretch{width:100%;min-width:0}.ngc-button-toggle.ngc-button-toggle--stretch .ngc-button-toggle-item{flex:1;width:100%;min-width:0}.ngc-button-toggle.ngc-button-toggle--theme-background{background-color:#78788014;border-radius:16px;padding:4px;border:none}.ngc-button-toggle.ngc-button-toggle--theme-background:not(.ngc-button-toggle--has-border){border:none}.ngc-button-toggle.ngc-button-toggle--theme-background:not(.ngc-button-toggle--has-shadow) .ngc-button-toggle-item.ngc-button-toggle-item--active{box-shadow:none}.ngc-button-toggle.ngc-button-toggle--theme-background.ngc-button-toggle--reverse{background-color:#fff9;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.ngc-button-toggle.ngc-button-toggle--theme-background.ngc-button-toggle--reverse .ngc-button-toggle-item.ngc-button-toggle-item--active{background-color:#7878801f;box-shadow:none}.ngc-button-toggle.ngc-button-toggle--theme-background .ngc-button-toggle-item{font-size:var(--ngc-font-size-small, 12px);border-radius:12px;min-height:28px;padding:0 12px}.ngc-button-toggle.ngc-button-toggle--theme-background .ngc-button-toggle-item:not(.ngc-button-toggle-item--only-icon){min-width:80px;min-height:28px}.ngc-button-toggle.ngc-button-toggle--theme-background .ngc-button-toggle-item.ngc-button-toggle-item--active{background-color:#fff;box-shadow:0 2px 6px #00000014,0 1px 2px #0000000a;color:#000000e6;font-weight:600}.ngc-button-toggle.ngc-button-toggle--has-border{border:1px solid rgba(0,0,0,.08)}.ngc-button-toggle .ngc-button-toggle-item{display:flex;align-items:center;justify-content:center;text-align:center;padding:0 16px;height:32px;border-radius:16px;font-size:13px;font-weight:500;cursor:pointer;transition:background-color .25s cubic-bezier(.4,0,.2,1),color .25s cubic-bezier(.4,0,.2,1),box-shadow .25s cubic-bezier(.4,0,.2,1);color:#0000008c;white-space:nowrap;box-sizing:border-box}.ngc-button-toggle .ngc-button-toggle-item:not(.ngc-button-toggle-item--disabled):hover:not(.ngc-button-toggle-item--active){color:#000000d9}.ngc-button-toggle .ngc-button-toggle-item:not(.ngc-button-toggle-item--disabled).ngc-button-toggle-item--active{background-color:#fff;color:#000000e6;font-weight:600;box-shadow:0 2px 6px #00000014,0 1px 2px #0000000a}.ngc-button-toggle .ngc-button-toggle-item:not(.ngc-button-toggle-item--only-icon){min-width:80px;min-height:32px}.ngc-button-toggle .ngc-button-toggle-item:not(.ngc-button-toggle-item--only-icon) .ngc-button-toggle-item__icon{margin-right:6px}.ngc-button-toggle .ngc-button-toggle-item.ngc-button-toggle-item--disabled{cursor:not-allowed;color:var(--ngc-color-neutral-text-disabled, #c4c4c6)}.ngc-button-toggle .ngc-button-toggle-item.ngc-button-toggle-item--disabled:active{pointer-events:none}.ngc-button-toggle .ngc-button-toggle-item.ngc-button-toggle-item--only-icon{width:32px;height:32px;min-width:32px;padding:0}\n"] }]
        }], propDecorators: { classStretch: [{
                type: HostBinding,
                args: ['class.ngc-button-toggle--stretch']
            }], classReverse: [{
                type: HostBinding,
                args: ['class.ngc-button-toggle--reverse']
            }], classHasBorder: [{
                type: HostBinding,
                args: ['class.ngc-button-toggle--has-border']
            }], classHasShadow: [{
                type: HostBinding,
                args: ['class.ngc-button-toggle--has-shadow']
            }], classThemeBackground: [{
                type: HostBinding,
                args: ['class.ngc-button-toggle--theme-background']
            }], buttonToggleItems: [{
                type: ContentChildren,
                args: [NgcButtonToggleItemComponent, { descendants: true }]
            }], selectedIndex: [{
                type: Input
            }], stretch: [{
                type: Input
            }], reverse: [{
                type: Input
            }], hasBorder: [{
                type: Input
            }], hasShadow: [{
                type: Input
            }], theme: [{
                type: Input
            }], selectedIndexChange: [{
                type: Output
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWJ1dHRvbi10b2dnbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtYnV0dG9uLXRvZ2dsZS9uZ2MtYnV0dG9uLXRvZ2dsZS9uZ2MtYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1idXR0b24tdG9nZ2xlL25nYy1idXR0b24tdG9nZ2xlL25nYy1idXR0b24tdG9nZ2xlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUM3QyxTQUFTLEVBQW9CLE1BQU0sRUFDbkMsWUFBWSxFQUFFLEtBQUssRUFDSix1QkFBdUIsRUFBRSxXQUFXLEVBQ25ELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFDTixZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFDeEMsYUFBYSxFQUFFLGlCQUFpQixFQUN0QixNQUFNLE9BQU8sQ0FBQztBQUN6QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQzs7QUFhbkcsSUFBTSx3QkFBd0IsR0FBOUIsTUFBTSx3QkFBd0I7SUFBOUI7UUFvQjBDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBSXpCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDM0MsVUFBSyxHQUEwQixTQUFTLENBQUM7UUFFeEQsd0JBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdkUsWUFBTyxHQUNyQixJQUFJLFlBQVksRUFBZ0MsQ0FBQztLQW1FcEQ7SUE5RkEsSUFDSSxZQUFZLEtBQWMs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QUFFOzsrREFBa0M7QUFDMUU7SUFBVSxhQUFhLEVBQUU7O3lEQUF5QjtBQUNsRDtJQUFVLGFBQWEsRUFBRTs7eURBQXlCO0FBQ2xEO0lBQVUsYUFBYSxFQUFFOzsyREFBMkI7QUFDcEQ7SUFBVSxZQUFZLEVBQUU7SUFBRSxhQUFhLEVBQUU7OzJEQUFrQztBQUMzRTtJQUFVLFlBQVksRUFBRTs7dURBQWlEO0FBekI3RCx3QkFBd0I7SUFUcEMsWUFBWSxFQUFFO0dBU0Ysd0JBQXdCLENBZ0dwQztTQWhHWSx3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFScEMsU0FBUzsrQkFDRyxtQkFBbUIsUUFHdEIsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsaUJBQ3ZCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07OEJBSzVDLFlBQVk7c0JBRGYsV0FBVzt1QkFBRSxrQ0FBa0M7Z0JBSTVDLFlBQVk7c0JBRGYsV0FBVzt1QkFBRSxrQ0FBa0M7Z0JBSTVDLGNBQWM7c0JBRGpCLFdBQVc7dUJBQUUscUNBQXFDO2dCQUkvQyxjQUFjO3NCQURqQixXQUFXO3VCQUFFLHFDQUFxQztnQkFJL0Msb0JBQW9CO3NCQUR2QixXQUFXO3VCQUFFLDJDQUEyQztnQkFJbEQsaUJBQWlCO3NCQUR2QixlQUFlO3VCQUFFLDRCQUE0QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkFHckIsYUFBYTtzQkFBNUQsS0FBSztnQkFDMkIsT0FBTztzQkFBdkMsS0FBSztnQkFDMkIsT0FBTztzQkFBdkMsS0FBSztnQkFDMkIsU0FBUztzQkFBekMsS0FBSztnQkFDMkMsU0FBUztzQkFBekQsS0FBSztnQkFDMEIsS0FBSztzQkFBcEMsS0FBSztnQkFFVyxtQkFBbUI7c0JBQW5DLE1BQU07Z0JBQ1UsT0FBTztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIENvbnRlbnRDaGlsZHJlbixcblx0UXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBPdXRwdXQsXG5cdEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcyxcblx0U2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuXHRVbnN1YnNjcmliZXIsIERlZmF1bHRWYWx1ZSwgQ29lcmNlTnVtYmVyLFxuXHRDb2VyY2VCb29sZWFuLCB1bnRpbENtcERlc3Ryb3llZFxuLCBJT2JqZWN0IH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgTmdjQnV0dG9uVG9nZ2xlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL25nYy1idXR0b24tdG9nZ2xlLWl0ZW0vbmdjLWJ1dHRvbi10b2dnbGUtaXRlbS5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOZ2NJQnV0dG9uVG9nZ2xlVGhlbWUgPSAnZGVmYXVsdCcgfCAnYmFja2dyb3VuZCc7XG5cbkBVbnN1YnNjcmliZXIoKVxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1idXR0b24tdG9nZ2xlJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtYnV0dG9uLXRvZ2dsZS5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtYnV0dG9uLXRvZ2dsZS5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWJ1dHRvbi10b2dnbGUnIH0sXG5cdGVuY2Fwc3VsYXRpb25cdDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uXHQ6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdjQnV0dG9uVG9nZ2xlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtYnV0dG9uLXRvZ2dsZS0tc3RyZXRjaCcgKVxuXHRnZXQgY2xhc3NTdHJldGNoKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5zdHJldGNoOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWJ1dHRvbi10b2dnbGUtLXJldmVyc2UnIClcblx0Z2V0IGNsYXNzUmV2ZXJzZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucmV2ZXJzZTsgfVxuXG5cdEBIb3N0QmluZGluZyggJ2NsYXNzLm5nYy1idXR0b24tdG9nZ2xlLS1oYXMtYm9yZGVyJyApXG5cdGdldCBjbGFzc0hhc0JvcmRlcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaGFzQm9yZGVyOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWJ1dHRvbi10b2dnbGUtLWhhcy1zaGFkb3cnIClcblx0Z2V0IGNsYXNzSGFzU2hhZG93KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5oYXNTaGFkb3c7IH1cblxuXHRASG9zdEJpbmRpbmcoICdjbGFzcy5uZ2MtYnV0dG9uLXRvZ2dsZS0tdGhlbWUtYmFja2dyb3VuZCcgKVxuXHRnZXQgY2xhc3NUaGVtZUJhY2tncm91bmQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnRoZW1lID09PSAnYmFja2dyb3VuZCc7IH1cblxuXHRAQ29udGVudENoaWxkcmVuKCBOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0gKVxuXHRwdWJsaWMgYnV0dG9uVG9nZ2xlSXRlbXM6IFF1ZXJ5TGlzdDxOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50PjtcblxuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBzdHJldGNoOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyByZXZlcnNlOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBoYXNCb3JkZXI6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBoYXNTaGFkb3c6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIHRoZW1lOiBOZ2NJQnV0dG9uVG9nZ2xlVGhlbWUgPSAnZGVmYXVsdCc7XG5cblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50PlxuXHRcdD0gbmV3IEV2ZW50RW1pdHRlcjxOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50PigpO1xuXG5cdHB1YmxpYyBpdGVtczogTmdjQnV0dG9uVG9nZ2xlSXRlbUNvbXBvbmVudFtdO1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLmJ1dHRvblRvZ2dsZUl0ZW1zXG5cdFx0LmNoYW5nZXNcblx0XHQucGlwZShcblx0XHRcdHN0YXJ0V2l0aCggdGhpcy5idXR0b25Ub2dnbGVJdGVtcyApLFxuXHRcdFx0dW50aWxDbXBEZXN0cm95ZWQodGhpcykgYXMgYW55XG5cdFx0KVxuXHRcdC5zdWJzY3JpYmUoICggaXRlbXM6IFF1ZXJ5TGlzdDxOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50PiApID0+IHtcblx0XHRcdHRoaXMuaXRlbXMgPSAoIGl0ZW1zIGFzIElPYmplY3QgKT8uX3Jlc3VsdHM7XG5cblx0XHRcdF8uZm9yRWFjaCggaXRlbXM/LnRvQXJyYXkoKSwgKCBpdGVtOiBOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50LCBpbmRleDogbnVtYmVyICkgPT4ge1xuXHRcdFx0XHRpZiAoIGl0ZW0uZGlzYWJsZWQgKSByZXR1cm47XG5cblx0XHRcdFx0aXRlbS5pc0FjdGl2ZSA9IGl0ZW0uYWN0aXZlU3RhdGUgJiYgaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleDtcblxuXHRcdFx0XHRpdGVtXG5cdFx0XHRcdC5jbGlja2VkJFxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHR0YWtlVW50aWwoIHRoaXMuYnV0dG9uVG9nZ2xlSXRlbXMuY2hhbmdlcyApLFxuXHRcdFx0XHRcdHVudGlsQ21wRGVzdHJveWVkKHRoaXMpIGFzIGFueVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoICggZXY6IE1vdXNlRXZlbnQgKSA9PiBldi5kZXRhaWwgJiYgdGhpcy5zZWxlY3QoIGluZGV4ICkgKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0aWYgKCAhY2hhbmdlcy5zZWxlY3RlZEluZGV4ICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5zZWxlY3QoIHRoaXMuc2VsZWN0ZWRJbmRleCwgZmFsc2UgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICogQHBhcmFtIHtib29sZWFufSBtYXJrQXNEaXJ0eVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIHNlbGVjdCggaW5kZXg6IG51bWJlciwgbWFya0FzRGlydHk6IGJvb2xlYW4gPSB0cnVlICkge1xuXHRcdGlmICggIXRoaXMuaXRlbXMgfHwgKCBtYXJrQXNEaXJ0eSAmJiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4ICkgKSByZXR1cm47XG5cblx0XHRjb25zdCBpdGVtOiBOZ2NCdXR0b25Ub2dnbGVJdGVtQ29tcG9uZW50ID0gdGhpcy5pdGVtc1sgaW5kZXggXTtcblxuXHRcdGlmICggIWl0ZW0gfHwgaXRlbS5kaXNhYmxlZCApIHJldHVybjtcblxuXHRcdGlmICggaXRlbS5hY3RpdmVTdGF0ZSApIHtcblx0XHRcdF8uZm9yRWFjaCggdGhpcy5pdGVtcywgKCBfaXRlbTogTmdjQnV0dG9uVG9nZ2xlSXRlbUNvbXBvbmVudCApID0+IHsgX2l0ZW0uaXNBY3RpdmUgPSBmYWxzZTsgfSApO1xuXG5cdFx0XHRpdGVtLmlzQWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcblxuXHRcdHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KCBpbmRleCApO1xuXHRcdG1hcmtBc0RpcnR5ICYmIHRoaXMuY2hhbmdlZC5lbWl0KCBpdGVtICk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==