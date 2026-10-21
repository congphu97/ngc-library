import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NgCacheIfDirective {
    /**
     * @constructor
     * @param {TemplateRef<any>} _templateRef
     * @param {ViewContainerRef} _vcRef
     */
    constructor(_templateRef, _vcRef) {
        this._templateRef = _templateRef;
        this._vcRef = _vcRef;
        this._loaded = {};
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (!changes.ngCacheIf)
            return;
        this._vcRef.detach();
        const isIfTrue = !!changes.ngCacheIf.currentValue;
        const templateRef = isIfTrue ? this._templateRef : this.ngCacheIfElse;
        if (!templateRef)
            return;
        const key = String(isIfTrue);
        if (!this._loaded[key]) {
            this._vcRef.clear();
            this._loaded[key] = this._vcRef.createEmbeddedView(templateRef);
            return;
        }
        this._vcRef.insert(this._loaded[key]);
    }
    /**
     * @constructor
     */
    ngOnDestroy() {
        delete this._loaded;
        this._vcRef.detach();
        this._vcRef.clear();
    }
}
NgCacheIfDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgCacheIfDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
NgCacheIfDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NgCacheIfDirective, selector: "[ngCacheIf]", inputs: { ngCacheIf: "ngCacheIf", ngCacheIfElse: "ngCacheIfElse" }, exportAs: ["ngCacheIf"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgCacheIfDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngCacheIf]', exportAs: 'ngCacheIf' }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }]; }, propDecorators: { ngCacheIf: [{
                type: Input
            }], ngCacheIfElse: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2FjaGUtaWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9jb3JlL2RpcmVjdGl2ZXMvbmctY2FjaGUtaWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixTQUFTLEVBQUUsS0FBSyxFQUNoQixXQUFXLEVBQUUsZ0JBQWdCLEVBRTdCLE1BQU0sZUFBZSxDQUFDOztBQUd2QixNQUFNLE9BQU8sa0JBQWtCO0lBTzlCOzs7O09BSUc7SUFDSCxZQUFxQixZQUE4QixFQUFVLE1BQXdCO1FBQWhFLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUDdFLFlBQU8sR0FBOEMsRUFBRSxDQUFDO0lBT3lCLENBQUM7SUFFMUY7OztPQUdHO0lBQ0gsV0FBVyxDQUFFLE9BQXNCO1FBQ2xDLElBQUssQ0FBQyxPQUFPLENBQUMsU0FBUztZQUFHLE9BQU87UUFFakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVyQixNQUFNLFFBQVEsR0FBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDM0QsTUFBTSxXQUFXLEdBQXFCLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV4RixJQUFLLENBQUMsV0FBVztZQUFHLE9BQU87UUFFM0IsTUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFFLFFBQVEsQ0FBRSxDQUFDO1FBRXZDLElBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBRSxFQUFHO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFcEIsSUFBSSxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFFLFdBQVcsQ0FBRSxDQUFDO1lBQ3BFLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFFLENBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOzsrR0FoRFcsa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtpSUFHNUMsU0FBUztzQkFBeEIsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBJbnB1dCwgRW1iZWRkZWRWaWV3UmVmLFxuXHRUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgU2ltcGxlQ2hhbmdlcyxcblx0T25DaGFuZ2VzLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ0NhY2hlSWZdJywgZXhwb3J0QXM6ICduZ0NhY2hlSWYnIH0pXG5leHBvcnQgY2xhc3MgTmdDYWNoZUlmRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIHB1YmxpYyBuZ0NhY2hlSWY6IGFueTtcblx0QElucHV0KCkgcHVibGljIG5nQ2FjaGVJZkVsc2U6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0cHJpdmF0ZSBfbG9hZGVkOiB7IFsga2V5OiBzdHJpbmcgXTogRW1iZWRkZWRWaWV3UmVmPGFueT4gfSA9IHt9O1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtUZW1wbGF0ZVJlZjxhbnk+fSBfdGVtcGxhdGVSZWZcblx0ICogQHBhcmFtIHtWaWV3Q29udGFpbmVyUmVmfSBfdmNSZWZcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYgKSB7fVxuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG5cdCAqL1xuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRpZiAoICFjaGFuZ2VzLm5nQ2FjaGVJZiApIHJldHVybjtcblxuXHRcdHRoaXMuX3ZjUmVmLmRldGFjaCgpO1xuXG5cdFx0Y29uc3QgaXNJZlRydWU6IGJvb2xlYW4gPSAhIWNoYW5nZXMubmdDYWNoZUlmLmN1cnJlbnRWYWx1ZTtcblx0XHRjb25zdCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiA9IGlzSWZUcnVlID8gdGhpcy5fdGVtcGxhdGVSZWYgOiB0aGlzLm5nQ2FjaGVJZkVsc2U7XG5cblx0XHRpZiAoICF0ZW1wbGF0ZVJlZiApIHJldHVybjtcblxuXHRcdGNvbnN0IGtleTogc3RyaW5nID0gU3RyaW5nKCBpc0lmVHJ1ZSApO1xuXG5cdFx0aWYgKCAhdGhpcy5fbG9hZGVkWyBrZXkgXSApIHtcblx0XHRcdHRoaXMuX3ZjUmVmLmNsZWFyKCk7XG5cblx0XHRcdHRoaXMuX2xvYWRlZFsga2V5IF0gPSB0aGlzLl92Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcoIHRlbXBsYXRlUmVmICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmNSZWYuaW5zZXJ0KCB0aGlzLl9sb2FkZWRbIGtleSBdICk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5fbG9hZGVkO1xuXG5cdFx0dGhpcy5fdmNSZWYuZGV0YWNoKCk7XG5cdFx0dGhpcy5fdmNSZWYuY2xlYXIoKTtcblx0fVxuXG59XG4iXX0=