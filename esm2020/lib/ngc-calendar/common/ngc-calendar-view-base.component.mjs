import { __decorate, __metadata } from "tslib";
import { Input, TemplateRef, Output, EventEmitter, Directive, ChangeDetectorRef } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment-timezone';
import _ from 'lodash';
import { CoerceArray, CoerceBoolean, DefaultValue } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class NgcCalendarViewBaseComponent {
    /**
     * @constructor
     * @param {ChangeDetectorRef} cdRef
     * @param {TranslateService} translateService
     * @param {string} indexBy
     */
    constructor(cdRef, translateService, indexBy) {
        this.cdRef = cdRef;
        this.translateService = translateService;
        this.indexBy = indexBy;
        this.name = this.translateService.instant('NGC.NAME');
        this.placeholder = this.translateService.instant('NGC.PLACEHOLDER.TYPE_NAME');
        // @Input() public searchBox: NgcSearchBoxComponent;
        this.nameFormControl = new UntypedFormControl({ value: null, disabled: false }, [Validators.required, Validators.maxLength(255)]);
        this.selectedEventIDChange = new EventEmitter();
        this.periodChange = new EventEmitter();
        this.eventChange = new EventEmitter();
        this.eventCreate = new EventEmitter();
        this.currentTime = moment();
        this.newEvent = {};
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (changes.viewDate) {
            setTimeout(() => this.generatePeriod());
            this._refreshNewEventInput();
        }
        if (changes.events) {
            const eventsMap = _.groupBy(this.events, (event) => event?.moment?.format(this.indexBy));
            _.forEach(this.eventBlocks, (eventBlock) => {
                eventBlock.seeMore = false;
                eventBlock.events = [];
                eventBlock.events.unshift(...(eventsMap[eventBlock.index] || []));
            });
        }
    }
    /**
     * @param {NgcICalendarEvent} event
     * @return {void}
     */
    selectEvent(event) {
        if (event.inactive)
            return;
        if (!this.activeState) {
            this.selectedEventIDChange.emit(event?.id);
            return;
        }
        if (this.selectedEventID === event?.id)
            return;
        this.selectedEventID = event?.id;
        this.selectedEventIDChange.emit(this.selectedEventID);
    }
    /**
     * @param {NgcICalendarEvent} event
     * @param {string} name
     * @return {void}
     */
    updateEvent(event, name) {
        if (event?.name === name)
            return;
        event.name = name;
        this.eventChange.emit({ id: event.id, name: event.name });
    }
    /**
     * @param {NgcICalendarEventBlock} eventBlock
     * @return {void}
     */
    createEvent(eventBlock) {
        const newEvent = {
            ...this.newEvent,
            id: null,
            actionable: true,
            deletable: true,
            moment: eventBlock.moment.clone(),
        };
        eventBlock.isAdding = false;
        eventBlock.events.push(newEvent);
        this.events.push(newEvent);
        this.eventCreate.emit(newEvent);
        this._refreshNewEventInput();
    }
    /**
     * @param {NgcICalendarEventBlock} eventBlock
     * @return {void}
     */
    addingNewEvent(eventBlock) {
        _.forEach(this.eventBlocks, (_eventBlock) => { _eventBlock.isAdding = false; });
        eventBlock.isAdding = true;
    }
    /**
     * @param {NgcICalendarEventBlock} eventBlock
     * @return {void}
     */
    cancelAddNewEvent(eventBlock) {
        eventBlock.isAdding = false;
        this._refreshNewEventInput();
    }
    /**
     * @param {NgcICalendarEvent} event
     * @param {Moment} newMoment
     * @return {void}
     */
    updateEventMoment(event, newMoment) {
        const oldEventBlock = event.moment === newMoment
            ? undefined
            : _.find(this.eventBlocks, { index: event?.moment?.format(this.indexBy) });
        const newEventBlock = _.find(this.eventBlocks, { index: newMoment?.format(this.indexBy) });
        event.moment = newMoment;
        if (oldEventBlock === newEventBlock)
            return;
        oldEventBlock && _.remove(oldEventBlock.events, event);
        newEventBlock && newEventBlock.events.push(event);
    }
    /**
     * @return {void}
     */
    markForCheck() {
        this.cdRef.markForCheck();
    }
    /**
     * @return {void}
     */
    _refreshNewEventInput() {
        this.newEvent = {};
        this.nameFormControl.markAsPristine();
        this.nameFormControl.markAsUntouched();
    }
}
NgcCalendarViewBaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCalendarViewBaseComponent, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive });
NgcCalendarViewBaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcCalendarViewBaseComponent, inputs: { activeState: "activeState", creatable: "creatable", displayHighlight: "displayHighlight", name: "name", placeholder: "placeholder", events: "events", selectedEventID: "selectedEventID", viewDate: "viewDate", eventTemplate: "eventTemplate", actionMenu: "actionMenu", nameFormControl: "nameFormControl" }, outputs: { selectedEventIDChange: "selectedEventIDChange", periodChange: "periodChange", eventChange: "eventChange", eventCreate: "eventCreate" }, usesOnChanges: true, ngImport: i0 });
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCalendarViewBaseComponent.prototype, "activeState", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCalendarViewBaseComponent.prototype, "creatable", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcCalendarViewBaseComponent.prototype, "displayHighlight", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcCalendarViewBaseComponent.prototype, "name", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcCalendarViewBaseComponent.prototype, "placeholder", void 0);
__decorate([
    CoerceArray(),
    __metadata("design:type", Array)
], NgcCalendarViewBaseComponent.prototype, "events", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCalendarViewBaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TranslateService }, { type: undefined }]; }, propDecorators: { activeState: [{
                type: Input
            }], creatable: [{
                type: Input
            }], displayHighlight: [{
                type: Input
            }], name: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], events: [{
                type: Input
            }], selectedEventID: [{
                type: Input
            }], viewDate: [{
                type: Input
            }], eventTemplate: [{
                type: Input
            }], actionMenu: [{
                type: Input
            }], nameFormControl: [{
                type: Input
            }], selectedEventIDChange: [{
                type: Output
            }], periodChange: [{
                type: Output
            }], eventChange: [{
                type: Output
            }], eventCreate: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNhbGVuZGFyLXZpZXctYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jYWxlbmRhci9jb21tb24vbmdjLWNhbGVuZGFyLXZpZXctYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSyxLQUFLLEVBQUUsV0FBVyxFQUM3QixNQUFNLEVBQUUsWUFBWSxFQUNwQixTQUFTLEVBQUUsaUJBQWlCLEVBQzVCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLE1BQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBWSxNQUFNLE9BQU8sQ0FBQzs7O0FBbUIzRSxNQUFNLE9BQWdCLDRCQUE0QjtJQThCakQ7Ozs7O09BS0c7SUFDSCxZQUF1QixLQUF3QixFQUFZLGdCQUFrQyxFQUFZLE9BQTZCO1FBQS9HLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVkscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFZLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBL0J0RyxTQUFJLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUUsQ0FBQztRQUMzRCxnQkFBVyxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztRQU1uSCxvREFBb0Q7UUFDcEMsb0JBQWUsR0FBdUIsSUFBSSxrQkFBa0IsQ0FDM0UsRUFBRSxLQUFLLEVBQUUsSUFB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Z0JBRVUsZUFBZTtzQkFBOUIsS0FBSztnQkFLVyxxQkFBcUI7c0JBQXJDLE1BQU07Z0JBQ1UsWUFBWTtzQkFBNUIsTUFBTTtnQkFDVSxXQUFXO3NCQUEzQixNQUFNO2dCQUNVLFdBQVc7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRPbkNoYW5nZXMsIElucHV0LCBUZW1wbGF0ZVJlZixcblx0T3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsXG5cdERpcmVjdGl2ZSwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgbW9tZW50LCB7IE1vbWVudCB9IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBDb2VyY2VBcnJheSwgQ29lcmNlQm9vbGVhbiwgRGVmYXVsdFZhbHVlICwgSU9iamVjdCB9IGZyb20gJ0Bjb3JlJztcblxuLy8gaW1wb3J0IHsgTmdjU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbmdjLXNlYXJjaC1ib3gnO1xuXG5pbXBvcnQge1xuXHROZ2NJQ2FsZW5kYXJFdmVudCwgTmdjSUNhbGVuZGFyUGVyaW9kLFxuXHROZ2NJQ2FsZW5kYXJFdmVudENoYW5nZSwgTmdjSUNhbGVuZGFyRXZlbnRDcmVhdGVcbn0gZnJvbSAnLi4vY2FsZW5kYXItdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nY0lDYWxlbmRhckV2ZW50QmxvY2sge1xuXHRzaG93Q3VycmVudFRpbWU6IGJvb2xlYW47XG5cdHNlZU1vcmU6IGJvb2xlYW47XG5cdGlzQWRkaW5nOiBib29sZWFuO1xuXHRpbmRleDogc3RyaW5nO1xuXHRtb21lbnQ6IE1vbWVudDtcblx0ZXZlbnRzOiBOZ2NJQ2FsZW5kYXJFdmVudFtdO1xufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ2NDYWxlbmRhclZpZXdCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBhY3RpdmVTdGF0ZTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgY3JlYXRhYmxlOiBib29sZWFuO1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBkaXNwbGF5SGlnaGxpZ2h0OiBib29sZWFuO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIG5hbWU6IHN0cmluZyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnTkdDLk5BTUUnICk7XG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCAnTkdDLlBMQUNFSE9MREVSLlRZUEVfTkFNRScgKTtcblx0QElucHV0KCkgQENvZXJjZUFycmF5KCkgcHVibGljIGV2ZW50czogTmdjSUNhbGVuZGFyRXZlbnRbXTtcblx0QElucHV0KCkgcHVibGljIHNlbGVjdGVkRXZlbnRJRDogbnVtYmVyO1xuXHRASW5wdXQoKSBwdWJsaWMgdmlld0RhdGU6IE1vbWVudDtcblx0QElucHV0KCkgcHVibGljIGV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cdEBJbnB1dCgpIHB1YmxpYyBhY3Rpb25NZW51OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHQvLyBASW5wdXQoKSBwdWJsaWMgc2VhcmNoQm94OiBOZ2NTZWFyY2hCb3hDb21wb25lbnQ7XG5cdEBJbnB1dCgpIHB1YmxpYyBuYW1lRm9ybUNvbnRyb2w6IFVudHlwZWRGb3JtQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woXG5cdFx0eyB2YWx1ZTogbnVsbCwgZGlzYWJsZWQ6IGZhbHNlIH0sXG5cdFx0WyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCggMjU1ICkgXVxuXHQpO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRFdmVudElEQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIHBlcmlvZENoYW5nZTogRXZlbnRFbWl0dGVyPE5nY0lDYWxlbmRhclBlcmlvZD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY0lDYWxlbmRhclBlcmlvZD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBldmVudENoYW5nZTogRXZlbnRFbWl0dGVyPE5nY0lDYWxlbmRhckV2ZW50Q2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjSUNhbGVuZGFyRXZlbnRDaGFuZ2U+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgZXZlbnRDcmVhdGU6IEV2ZW50RW1pdHRlcjxOZ2NJQ2FsZW5kYXJFdmVudENyZWF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY0lDYWxlbmRhckV2ZW50Q3JlYXRlPigpO1xuXG5cdHB1YmxpYyBjdXJyZW50VGltZTogTW9tZW50ID0gbW9tZW50KCk7XG5cdHB1YmxpYyBldmVudEJsb2NrczogTmdjSUNhbGVuZGFyRXZlbnRCbG9ja1tdO1xuXHRwdWJsaWMgbmV3RXZlbnQ6IE5nY0lDYWxlbmRhckV2ZW50Q3JlYXRlID0ge30gYXMgTmdjSUNhbGVuZGFyRXZlbnRDcmVhdGU7XG5cblx0cHJvdGVjdGVkIHN0YXJ0RGF0ZTogTW9tZW50O1xuXHRwcm90ZWN0ZWQgZW5kRGF0ZTogTW9tZW50O1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtDaGFuZ2VEZXRlY3RvclJlZn0gY2RSZWZcblx0ICogQHBhcmFtIHtUcmFuc2xhdGVTZXJ2aWNlfSB0cmFuc2xhdGVTZXJ2aWNlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbmRleEJ5XG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggcHJvdGVjdGVkIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJvdGVjdGVkIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByb3RlY3RlZCBpbmRleEJ5OiAnSCcgfCAnRERISCcgfCAnREREJyApIHt9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcblx0ICovXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGlmICggY2hhbmdlcy52aWV3RGF0ZSApIHtcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHRoaXMuZ2VuZXJhdGVQZXJpb2QoKSApO1xuXHRcdFx0dGhpcy5fcmVmcmVzaE5ld0V2ZW50SW5wdXQoKTtcblx0XHR9XG5cblx0XHRpZiAoIGNoYW5nZXMuZXZlbnRzICkge1xuXHRcdFx0Y29uc3QgZXZlbnRzTWFwOiBJT2JqZWN0PE5nY0lDYWxlbmRhckV2ZW50W10+ID0gXy5ncm91cEJ5KCB0aGlzLmV2ZW50cywgKCBldmVudDogTmdjSUNhbGVuZGFyRXZlbnQgKTogc3RyaW5nID0+XG5cdFx0XHRcdGV2ZW50Py5tb21lbnQ/LmZvcm1hdCggdGhpcy5pbmRleEJ5IClcblx0XHRcdCk7XG5cblx0XHRcdF8uZm9yRWFjaCggdGhpcy5ldmVudEJsb2NrcywgKCBldmVudEJsb2NrOiBOZ2NJQ2FsZW5kYXJFdmVudEJsb2NrICkgPT4ge1xuXHRcdFx0XHRldmVudEJsb2NrLnNlZU1vcmUgPSBmYWxzZTtcblx0XHRcdFx0ZXZlbnRCbG9jay5ldmVudHMgPSBbXTtcblxuXHRcdFx0XHRldmVudEJsb2NrLmV2ZW50cy51bnNoaWZ0KCAuLi4oIGV2ZW50c01hcFsgZXZlbnRCbG9jay5pbmRleCBdIHx8IFtdICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJQ2FsZW5kYXJFdmVudH0gZXZlbnRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzZWxlY3RFdmVudCggZXZlbnQ6IE5nY0lDYWxlbmRhckV2ZW50ICkge1xuXHRcdGlmICggZXZlbnQuaW5hY3RpdmUgKSByZXR1cm47XG5cblx0XHRpZiAoICF0aGlzLmFjdGl2ZVN0YXRlICkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZEV2ZW50SURDaGFuZ2UuZW1pdCggZXZlbnQ/LmlkICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLnNlbGVjdGVkRXZlbnRJRCA9PT0gZXZlbnQ/LmlkICkgcmV0dXJuO1xuXG5cdFx0dGhpcy5zZWxlY3RlZEV2ZW50SUQgPSBldmVudD8uaWQ7XG5cblx0XHR0aGlzLnNlbGVjdGVkRXZlbnRJRENoYW5nZS5lbWl0KCB0aGlzLnNlbGVjdGVkRXZlbnRJRCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSUNhbGVuZGFyRXZlbnR9IGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgdXBkYXRlRXZlbnQoIGV2ZW50OiBOZ2NJQ2FsZW5kYXJFdmVudCwgbmFtZTogc3RyaW5nICkge1xuXHRcdGlmICggZXZlbnQ/Lm5hbWUgPT09IG5hbWUgKSByZXR1cm47XG5cblx0XHRldmVudC5uYW1lID0gbmFtZTtcblxuXHRcdHRoaXMuZXZlbnRDaGFuZ2UuZW1pdCh7IGlkOiBldmVudC5pZCwgbmFtZTogZXZlbnQubmFtZSB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY0lDYWxlbmRhckV2ZW50QmxvY2t9IGV2ZW50QmxvY2tcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVFdmVudCggZXZlbnRCbG9jazogTmdjSUNhbGVuZGFyRXZlbnRCbG9jayApIHtcblx0XHRjb25zdCBuZXdFdmVudDogTmdjSUNhbGVuZGFyRXZlbnQgPSB7XG5cdFx0XHQuLi50aGlzLm5ld0V2ZW50LFxuXHRcdFx0aWRcdFx0XHQ6IG51bGwsXG5cdFx0XHRhY3Rpb25hYmxlXHQ6IHRydWUsXG5cdFx0XHRkZWxldGFibGVcdDogdHJ1ZSxcblx0XHRcdG1vbWVudFx0XHQ6IGV2ZW50QmxvY2subW9tZW50LmNsb25lKCksXG5cdFx0fTtcblxuXHRcdGV2ZW50QmxvY2suaXNBZGRpbmcgPSBmYWxzZTtcblxuXHRcdGV2ZW50QmxvY2suZXZlbnRzLnB1c2goIG5ld0V2ZW50ICk7XG5cdFx0dGhpcy5ldmVudHMucHVzaCggbmV3RXZlbnQgKTtcblxuXHRcdHRoaXMuZXZlbnRDcmVhdGUuZW1pdCggbmV3RXZlbnQgKTtcblx0XHR0aGlzLl9yZWZyZXNoTmV3RXZlbnRJbnB1dCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSUNhbGVuZGFyRXZlbnRCbG9ja30gZXZlbnRCbG9ja1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIGFkZGluZ05ld0V2ZW50KCBldmVudEJsb2NrOiBOZ2NJQ2FsZW5kYXJFdmVudEJsb2NrICkge1xuXHRcdF8uZm9yRWFjaCggdGhpcy5ldmVudEJsb2NrcywgKCBfZXZlbnRCbG9jazogTmdjSUNhbGVuZGFyRXZlbnRCbG9jayApID0+IHsgX2V2ZW50QmxvY2suaXNBZGRpbmcgPSBmYWxzZTsgfSApO1xuXG5cdFx0ZXZlbnRCbG9jay5pc0FkZGluZyA9IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJQ2FsZW5kYXJFdmVudEJsb2NrfSBldmVudEJsb2NrXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2FuY2VsQWRkTmV3RXZlbnQoIGV2ZW50QmxvY2s6IE5nY0lDYWxlbmRhckV2ZW50QmxvY2sgKSB7XG5cdFx0ZXZlbnRCbG9jay5pc0FkZGluZyA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fcmVmcmVzaE5ld0V2ZW50SW5wdXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05nY0lDYWxlbmRhckV2ZW50fSBldmVudFxuXHQgKiBAcGFyYW0ge01vbWVudH0gbmV3TW9tZW50XG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgdXBkYXRlRXZlbnRNb21lbnQoIGV2ZW50OiBOZ2NJQ2FsZW5kYXJFdmVudCwgbmV3TW9tZW50OiBNb21lbnQgKSB7XG5cdFx0Y29uc3Qgb2xkRXZlbnRCbG9jazogTmdjSUNhbGVuZGFyRXZlbnRCbG9jayA9IGV2ZW50Lm1vbWVudCA9PT0gbmV3TW9tZW50XG5cdFx0XHQ/IHVuZGVmaW5lZFxuXHRcdFx0OiBfLmZpbmQoIHRoaXMuZXZlbnRCbG9ja3MsIHsgaW5kZXg6IGV2ZW50Py5tb21lbnQ/LmZvcm1hdCggdGhpcy5pbmRleEJ5ICkgfSApO1xuXG5cdFx0Y29uc3QgbmV3RXZlbnRCbG9jazogTmdjSUNhbGVuZGFyRXZlbnRCbG9jayA9IF8uZmluZCggdGhpcy5ldmVudEJsb2NrcywgeyBpbmRleDogbmV3TW9tZW50Py5mb3JtYXQoIHRoaXMuaW5kZXhCeSApIH0gKTtcblxuXHRcdGV2ZW50Lm1vbWVudCA9IG5ld01vbWVudDtcblxuXHRcdGlmICggb2xkRXZlbnRCbG9jayA9PT0gbmV3RXZlbnRCbG9jayApIHJldHVybjtcblxuXHRcdG9sZEV2ZW50QmxvY2sgJiYgXy5yZW1vdmUoIG9sZEV2ZW50QmxvY2suZXZlbnRzLCBldmVudCApO1xuXHRcdG5ld0V2ZW50QmxvY2sgJiYgbmV3RXZlbnRCbG9jay5ldmVudHMucHVzaCggZXZlbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHVibGljIG1hcmtGb3JDaGVjaygpIHtcblx0XHR0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwcml2YXRlIF9yZWZyZXNoTmV3RXZlbnRJbnB1dCgpIHtcblx0XHR0aGlzLm5ld0V2ZW50ID0ge30gYXMgTmdjSUNhbGVuZGFyRXZlbnRDcmVhdGU7XG5cblx0XHR0aGlzLm5hbWVGb3JtQ29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuXHRcdHRoaXMubmFtZUZvcm1Db250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2VuZXJhdGVQZXJpb2QoKTtcblxufVxuIl19