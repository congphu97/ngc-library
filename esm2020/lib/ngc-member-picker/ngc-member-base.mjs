import { __decorate, __metadata } from "tslib";
import { ViewChild, Input, Output, EventEmitter, Directive } from '@angular/core';
import { Subject, isObservable } from 'rxjs';
import _ from 'lodash';
import { CoerceBoolean, CoerceNumber, DefaultValue, untilCmpDestroyed } from '@core';
import { NgcSearchBoxComponent } from '../ngc-search-box';
import { NgcMember } from './ngc-member/ngc-member';
import { NgcToastService } from '../ngc-toast/public-api';
import * as i0 from "@angular/core";
import * as i1 from "../ngc-toast/public-api";
export class NgcMemberBase {
    /**
     * @constructor
     * @param {NgcToastService} _ngcToastService
     */
    constructor(_ngcToastService) {
        this._ngcToastService = _ngcToastService;
        this.strictDisplay = true;
        this.itemSize = 44;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.viewDetail = new EventEmitter();
        this.added = new EventEmitter();
        this.removed = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this.selectedMembersChange = new EventEmitter();
        this.MEMBER_STATUS = NgcMember.MEMBER_STATUS;
        this.selectedIndex = 0;
        this.availableStatus = [1];
    }
    get availableMembers() {
        return !this.strictDisplay
            ? _.unionBy(this._members, this.selectedMembers, 'id')
            : this._members;
    }
    /**
     * @param {NgcIMember} member
     * @return {void}
     */
    viewProfile(member) {
        this.viewDetail.emit(member);
    }
    /**
     * @return {void}
     */
    done() {
        if (!this.isChanged)
            return;
        if (this.required && !this.selected?.length) {
            this.selected = _.clone(this.bkSelected);
            this.selectedMembersClone = _.cloneDeep(this.selectedMembers);
            this._ngcToastService.warning('Ngc.MESSAGE.AT_LEAST_ONE_MEMBER', {
                translateParams: { name: this.name || this.label },
            });
            return;
        }
        this.isChanged = false;
        this.bkSelected = _.clone(this.selected);
        this.initSelectedMembers();
        this.selectedMembersChange.emit(this.selectedMembers);
        this.selectedChange.emit(this.selected);
    }
    /**
     * @param {NgcIMember[] | Observable<NgcIMember[]> | Function} members
     * @return {void}
     */
    setMembers(members) {
        if (isObservable(members))
            return;
        if (_.isFunction(members)) {
            this.loadPeople(members.call(this));
            return;
        }
        this._members = members;
        this.initSelectedMembers();
    }
    /**
     * @param {Observable<NgcIMember[]>} loader
     * @return {void}
     */
    loadPeople(loader) {
        if (!loader)
            return;
        // eslint-disable-next-line dot-notation, @typescript-eslint/dot-notation
        loader['_context'] = this.context;
        loader
            .pipe(untilCmpDestroyed(this))
            .subscribe((members) => {
            this._members = members;
            this.initSelectedMembers();
        });
    }
    /**
     * @return {void}
     */
    initSelectedMembers() {
        const selectedLookup = _.keyBy(this.selected);
        this.selectedMembersClone = _.cloneDeep(this.selectedMembers = _.filter(this.availableMembers, (member) => !!member && _.has(selectedLookup, member.id)));
        console.log(this.selectedMembers);
    }
}
NgcMemberBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMemberBase, deps: [{ token: i1.NgcToastService }], target: i0.ɵɵFactoryTarget.Directive });
NgcMemberBase.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgcMemberBase, inputs: { strictDisplay: "strictDisplay", itemSize: "itemSize", canViewProfile: "canViewProfile", disabled: "disabled", required: "required", name: "name", label: "label", scrolling$: "scrolling$", context: "context", selected: "selected", selectedMembers: "selectedMembers", includesStatus: "includesStatus", members: "members" }, outputs: { opened: "opened", closed: "closed", viewDetail: "viewDetail", added: "added", removed: "removed", selectedChange: "selectedChange", selectedMembersChange: "selectedMembersChange" }, viewQueries: [{ propertyName: "searchBox", first: true, predicate: NgcSearchBoxComponent, descendants: true }], ngImport: i0 });
__decorate([
    DefaultValue(),
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberBase.prototype, "strictDisplay", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcMemberBase.prototype, "itemSize", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberBase.prototype, "canViewProfile", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberBase.prototype, "disabled", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcMemberBase.prototype, "required", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcMemberBase, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.NgcToastService }]; }, propDecorators: { searchBox: [{
                type: ViewChild,
                args: [NgcSearchBoxComponent]
            }], strictDisplay: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], canViewProfile: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], scrolling$: [{
                type: Input
            }], context: [{
                type: Input
            }], selected: [{
                type: Input
            }], selectedMembers: [{
                type: Input
            }], includesStatus: [{
                type: Input
            }], members: [{
                type: Input
            }], opened: [{
                type: Output
            }], closed: [{
                type: Output
            }], viewDetail: [{
                type: Output
            }], added: [{
                type: Output
            }], removed: [{
                type: Output
            }], selectedChange: [{
                type: Output
            }], selectedMembersChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLW1lbWJlci1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtbWVtYmVyLXBpY2tlci9uZ2MtbWVtYmVyLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDeEIsWUFBWSxFQUFFLFNBQVMsRUFDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBWSxNQUFNLE9BQU8sQ0FBQztBQUUvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRzFELE1BQU0sT0FBTyxhQUFhO0lBMEN6Qjs7O09BR0c7SUFDSCxZQUFxQixnQkFBaUM7UUFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQTFDTCxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUMvQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBYXJELFdBQU0sR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUN4RCxXQUFNLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFDeEQsZUFBVSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RFLFVBQUssR0FBK0IsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFDckUsWUFBTyxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUN2RSxtQkFBYyxHQUEyQixJQUFJLFlBQVks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LE1BQU07c0JBQXRCLE1BQU07Z0JBQ1UsTUFBTTtzQkFBdEIsTUFBTTtnQkFDVSxVQUFVO3NCQUExQixNQUFNO2dCQUNVLEtBQUs7c0JBQXJCLE1BQU07Z0JBQ1UsT0FBTztzQkFBdkIsTUFBTTtnQkFDVSxjQUFjO3NCQUE5QixNQUFNO2dCQUNVLHFCQUFxQjtzQkFBckMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLCBEaXJlY3RpdmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBpc09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IENvZXJjZUJvb2xlYW4sIENvZXJjZU51bWJlciwgRGVmYXVsdFZhbHVlLCB1bnRpbENtcERlc3Ryb3llZCAsIElPYmplY3QgfSBmcm9tICdAY29yZSc7XG5cbmltcG9ydCB7IE5nY1NlYXJjaEJveENvbXBvbmVudCB9IGZyb20gJy4uL25nYy1zZWFyY2gtYm94JztcbmltcG9ydCB7IE5nY01lbWJlciwgTmdjSU1lbWJlciwgTmdjSU1lbWJlclN0YXR1cyB9IGZyb20gJy4vbmdjLW1lbWJlci9uZ2MtbWVtYmVyJztcbmltcG9ydCB7IE5nY1RvYXN0U2VydmljZSB9IGZyb20gJy4uL25nYy10b2FzdC9wdWJsaWMtYXBpJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgTmdjTWVtYmVyQmFzZSB7XG5cblx0QFZpZXdDaGlsZCggTmdjU2VhcmNoQm94Q29tcG9uZW50ICkgcHVibGljIHNlYXJjaEJveDogTmdjU2VhcmNoQm94Q29tcG9uZW50O1xuXG5cdEBJbnB1dCgpIEBEZWZhdWx0VmFsdWUoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBzdHJpY3REaXNwbGF5OiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgaXRlbVNpemU6IG51bWJlciA9IDQ0O1xuXHRASW5wdXQoKSBAQ29lcmNlQm9vbGVhbigpIHB1YmxpYyBjYW5WaWV3UHJvZmlsZTogYm9vbGVhbjtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIEBDb2VyY2VCb29sZWFuKCkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuO1xuXHRASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIHNjcm9sbGluZyQ6IFN1YmplY3Q8YW55Pjtcblx0QElucHV0KCkgcHVibGljIGNvbnRleHQ6IElPYmplY3Q7XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZDogbnVtYmVyW107XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZE1lbWJlcnM6IE5nY0lNZW1iZXJbXTtcblx0QElucHV0KCkgcHVibGljIGluY2x1ZGVzU3RhdHVzOiBOZ2NJTWVtYmVyU3RhdHVzW107XG5cdEBJbnB1dCgpIHB1YmxpYyBtZW1iZXJzOiBOZ2NJTWVtYmVyW10gfCBPYnNlcnZhYmxlPE5nY0lNZW1iZXJbXT4gfCBGdW5jdGlvbjtcblxuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VkOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyB2aWV3RGV0YWlsOiBFdmVudEVtaXR0ZXI8TmdjSU1lbWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY0lNZW1iZXI+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgYWRkZWQ6IEV2ZW50RW1pdHRlcjxOZ2NJTWVtYmVyW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2NJTWVtYmVyW10+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPE5nY0lNZW1iZXJbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nY0lNZW1iZXJbXT4oKTtcblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRNZW1iZXJzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TmdjSU1lbWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdjSU1lbWJlcltdPigpO1xuXG5cdHB1YmxpYyByZWFkb25seSBNRU1CRVJfU1RBVFVTOiB0eXBlb2YgTmdjTWVtYmVyLk1FTUJFUl9TVEFUVVMgPSBOZ2NNZW1iZXIuTUVNQkVSX1NUQVRVUztcblxuXHRwdWJsaWMgaXNDaGFuZ2VkOiBib29sZWFuO1xuXHRwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcblx0cHVibGljIGF2YWlsYWJsZVN0YXR1czogTmdjSU1lbWJlclN0YXR1c1tdID0gWyAxIF07XG5cdHB1YmxpYyBzZWxlY3RlZE1lbWJlcnNDbG9uZTogTmdjSU1lbWJlcltdO1xuXHRwdWJsaWMgX21lbWJlcnM6IE5nY0lNZW1iZXJbXTtcblxuXHRwcm90ZWN0ZWQgYmtTZWxlY3RlZDogbnVtYmVyW107XG5cblx0Z2V0IGF2YWlsYWJsZU1lbWJlcnMoKTogTmdjSU1lbWJlcltdIHtcblx0XHRyZXR1cm4gIXRoaXMuc3RyaWN0RGlzcGxheVxuXHRcdFx0PyBfLnVuaW9uQnkoIHRoaXMuX21lbWJlcnMsIHRoaXMuc2VsZWN0ZWRNZW1iZXJzLCAnaWQnIClcblx0XHRcdDogdGhpcy5fbWVtYmVycztcblx0fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtOZ2NUb2FzdFNlcnZpY2V9IF9uZ2NUb2FzdFNlcnZpY2Vcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9uZ2NUb2FzdFNlcnZpY2U6IE5nY1RvYXN0U2VydmljZSApIHt9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSU1lbWJlcn0gbWVtYmVyXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgdmlld1Byb2ZpbGUoIG1lbWJlcjogTmdjSU1lbWJlciApIHtcblx0XHR0aGlzLnZpZXdEZXRhaWwuZW1pdCggbWVtYmVyICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHByb3RlY3RlZCBkb25lKCkge1xuXHRcdGlmICggIXRoaXMuaXNDaGFuZ2VkICkgcmV0dXJuO1xuXG5cdFx0aWYgKCB0aGlzLnJlcXVpcmVkICYmICF0aGlzLnNlbGVjdGVkPy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gXy5jbG9uZSggdGhpcy5ia1NlbGVjdGVkICk7XG5cdFx0XHR0aGlzLnNlbGVjdGVkTWVtYmVyc0Nsb25lID0gXy5jbG9uZURlZXAoIHRoaXMuc2VsZWN0ZWRNZW1iZXJzICk7XG5cblx0XHRcdHRoaXMuX25nY1RvYXN0U2VydmljZS53YXJuaW5nKFxuXHRcdFx0XHQnTmdjLk1FU1NBR0UuQVRfTEVBU1RfT05FX01FTUJFUicsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0cmFuc2xhdGVQYXJhbXM6IHsgbmFtZTogdGhpcy5uYW1lIHx8IHRoaXMubGFiZWwgfSxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmlzQ2hhbmdlZCA9IGZhbHNlO1xuXHRcdHRoaXMuYmtTZWxlY3RlZCA9IF8uY2xvbmUoIHRoaXMuc2VsZWN0ZWQgKTtcblxuXHRcdHRoaXMuaW5pdFNlbGVjdGVkTWVtYmVycygpO1xuXHRcdHRoaXMuc2VsZWN0ZWRNZW1iZXJzQ2hhbmdlLmVtaXQoIHRoaXMuc2VsZWN0ZWRNZW1iZXJzICk7XG5cdFx0dGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KCB0aGlzLnNlbGVjdGVkICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJTWVtYmVyW10gfCBPYnNlcnZhYmxlPE5nY0lNZW1iZXJbXT4gfCBGdW5jdGlvbn0gbWVtYmVyc1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJvdGVjdGVkIHNldE1lbWJlcnMoIG1lbWJlcnM6IE5nY0lNZW1iZXJbXSB8IE9ic2VydmFibGU8TmdjSU1lbWJlcltdPiB8IEZ1bmN0aW9uICkge1xuXHRcdGlmICggaXNPYnNlcnZhYmxlKCBtZW1iZXJzICkgKSByZXR1cm47XG5cblx0XHRpZiAoIF8uaXNGdW5jdGlvbiggbWVtYmVycyApICkge1xuXHRcdFx0dGhpcy5sb2FkUGVvcGxlKCAoIG1lbWJlcnMgYXMgRnVuY3Rpb24gKS5jYWxsKCB0aGlzICkgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9tZW1iZXJzID0gbWVtYmVycyBhcyBOZ2NJTWVtYmVyW107XG5cblx0XHR0aGlzLmluaXRTZWxlY3RlZE1lbWJlcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09ic2VydmFibGU8TmdjSU1lbWJlcltdPn0gbG9hZGVyXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwcm90ZWN0ZWQgbG9hZFBlb3BsZSggbG9hZGVyOiBPYnNlcnZhYmxlPE5nY0lNZW1iZXJbXT4gKSB7XG5cdFx0aWYgKCAhbG9hZGVyICkgcmV0dXJuO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRvdC1ub3RhdGlvbiwgQHR5cGVzY3JpcHQtZXNsaW50L2RvdC1ub3RhdGlvblxuXHRcdGxvYWRlclsgJ19jb250ZXh0JyBdID0gdGhpcy5jb250ZXh0O1xuXG5cdFx0bG9hZGVyXG5cdFx0LnBpcGUoIHVudGlsQ21wRGVzdHJveWVkKCB0aGlzICkgKVxuXHRcdC5zdWJzY3JpYmUoICggbWVtYmVyczogTmdjSU1lbWJlcltdICkgPT4ge1xuXHRcdFx0dGhpcy5fbWVtYmVycyA9IG1lbWJlcnM7XG5cblx0XHRcdHRoaXMuaW5pdFNlbGVjdGVkTWVtYmVycygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0cHJvdGVjdGVkIGluaXRTZWxlY3RlZE1lbWJlcnMoKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRMb29rdXA6IElPYmplY3Q8bnVtYmVyPiA9IF8ua2V5QnkoIHRoaXMuc2VsZWN0ZWQgKTtcblxuXHRcdHRoaXMuc2VsZWN0ZWRNZW1iZXJzQ2xvbmUgPSBfLmNsb25lRGVlcChcblx0XHRcdHRoaXMuc2VsZWN0ZWRNZW1iZXJzID0gXy5maWx0ZXIoXG5cdFx0XHRcdHRoaXMuYXZhaWxhYmxlTWVtYmVycyxcblx0XHRcdFx0KCBtZW1iZXI6IE5nY0lNZW1iZXIgKSA9PiAhIW1lbWJlciAmJiBfLmhhcyggc2VsZWN0ZWRMb29rdXAsIG1lbWJlci5pZCApXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRNZW1iZXJzKTtcblx0fVxuXG59XG4iXX0=