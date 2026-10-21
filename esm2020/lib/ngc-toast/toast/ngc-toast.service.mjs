import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import _ from 'lodash';
import { NgcToastGroupComponent } from '../toast-group/ngc-toast-group.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class NgcToastService {
    /**
     * @constructor
     * @param {Overlay} _overlay
     */
    constructor(_overlay) {
        this._overlay = _overlay;
        this._defaultConfig = {
            position: 'bottom',
            canClose: true,
            translate: true,
            duration: 5000,
        };
    }
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    show(title, arg, config) {
        const description = !_.isObject(arg) ? arg : undefined;
        config = _.isObject(arg) ? arg : config;
        config = { ...this._defaultConfig, ...config };
        // Create toast to group
        return config?.position === 'top'
            ? this._showOnTop(title, description, config)
            : this._showOnBottom(title, description, config);
    }
    /**
     * @param {number} id
     * @return {void}
     */
    close(id) {
        this._topInstance?.deleteToast(id);
        this._bottomInstance?.deleteToast(id);
    }
    /**
     * @return {void}
     */
    closeAll() {
        this._topInstance = this._bottomInstance = undefined;
        this._topOverlayRef?.detach();
        this._bottomOverlayRef?.detach();
    }
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    info(title, arg, config) {
        const description = !_.isObject(arg) ? arg : undefined;
        config = _.isObject(arg) ? arg : config;
        return this.show(title, description, { ...config, type: 'info' });
    }
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    success(title, arg, config) {
        const description = !_.isObject(arg) ? arg : undefined;
        config = _.isObject(arg) ? arg : config;
        return this.show(title, description, { ...config, type: 'success' });
    }
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    warning(title, arg, config) {
        const description = !_.isObject(arg) ? arg : undefined;
        config = _.isObject(arg) ? arg : config;
        return this.show(title, description, { ...config, type: 'warning' });
    }
    /**
     * @param {string} title
     * @param {any} arg
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    danger(title, arg, config) {
        const description = !_.isObject(arg) ? arg : undefined;
        config = _.isObject(arg) ? arg : config;
        return this.show(title, description, { ...config, type: 'danger' });
    }
    /**
     * @param {string} title
     * @param {string} description
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    _showOnTop(title, description, config) {
        // Create overlay ref
        this._topOverlayRef = this._topOverlayRef || this._createOverlayRef('top');
        if (!this._topOverlayRef.hasAttached()) {
            // Create toast portal
            this._topPortal = this._topPortal || this._createPortal();
            // Attach toast
            this._topInstance = this._topInstance || this._topOverlayRef.attach(this._topPortal).instance;
        }
        // Create toast to group
        return this._topInstance.createToast(title, description, config);
    }
    /**
     * @param {string} title
     * @param {string} description
     * @param {NgcIToastConfig} config
     * @return {number}
     */
    _showOnBottom(title, description, config) {
        // Create overlay ref
        this._bottomOverlayRef = this._bottomOverlayRef || this._createOverlayRef('bottom');
        if (!this._bottomOverlayRef.hasAttached()) {
            // Create toast portal
            this._bottomPortal = this._bottomPortal || this._createPortal();
            // Attach toast
            this._bottomInstance = this._bottomInstance || this._bottomOverlayRef.attach(this._bottomPortal).instance;
        }
        // Create toast to group
        return this._bottomInstance.createToast(title, description, config);
    }
    /**
     * @param {NgcIToastPosition} position
     * @return {OverlayRef}
     */
    _createOverlayRef(position) {
        const positionStrategy = this._overlay.position().global().centerHorizontally();
        positionStrategy[position](0);
        return this._overlay.create(new OverlayConfig({ positionStrategy }));
    }
    /**
     * @return {ComponentPortal}
     */
    _createPortal() {
        return new ComponentPortal(NgcToastGroupComponent);
    }
}
NgcToastService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcToastService, deps: [{ token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Injectable });
NgcToastService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcToastService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcToastService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRvYXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy10b2FzdC90b2FzdC9uZ2MtdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFHdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQUdsRixNQUFNLE9BQU8sZUFBZTtJQWUzQjs7O09BR0c7SUFDSCxZQUFxQixRQUFpQjtRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBWDlCLG1CQUFjLEdBQW9CO1lBQ3pDLFFBQVEsRUFBRyxRQUFRO1lBQ25CLFFBQVEsRUFBRyxJQUFJO1lBQ2YsU0FBUyxFQUFHLElBQUk7WUFDaEIsUUFBUSxFQUFHLElBQUk7U0FDZixDQUFDO0lBTXdDLENBQUM7SUFFM0M7Ozs7O09BS0c7SUFDSSxJQUFJLENBQUUsS0FBYSxFQUFFLEdBQVMsRUFBRSxNQUF3QjtRQUM5RCxNQUFNLFdBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRTNFLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxHQUFzQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDN0QsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFFL0Msd0JBQXdCO1FBQ3hCLE9BQU8sTUFBTSxFQUFFLFFBQVEsS0FBSyxLQUFLO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFFO1lBQy9DLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBRSxFQUFVO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBRXJELElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLElBQUksQ0FBRSxLQUFhLEVBQUUsR0FBUyxFQUFFLE1BQXdCO1FBQzlELE1BQU0sV0FBVyxHQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFM0UsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQXNCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUU3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBRSxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FBRSxLQUFhLEVBQUUsR0FBUyxFQUFFLE1BQXdCO1FBQ2pFLE1BQU0sV0FBVyxHQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFM0UsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQXNCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUU3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBRSxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FBRSxLQUFhLEVBQUUsR0FBUyxFQUFFLE1BQXdCO1FBQ2pFLE1BQU0sV0FBVyxHQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFM0UsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQXNCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUU3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBRSxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBRSxLQUFhLEVBQUUsR0FBUyxFQUFFLE1BQXdCO1FBQ2hFLE1BQU0sV0FBVyxHQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFM0UsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQXNCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUU3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLFVBQVUsQ0FBRSxLQUFhLEVBQUUsV0FBb0IsRUFBRSxNQUF3QjtRQUNoRixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUU3RSxJQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsRUFBRztZQUN6QyxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUUxRCxlQUFlO1lBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQyxRQUFRLENBQUM7U0FDaEc7UUFFRCx3QkFBd0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGFBQWEsQ0FBRSxLQUFhLEVBQUUsV0FBb0IsRUFBRSxNQUF3QjtRQUNuRixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUUsUUFBUSxDQUFFLENBQUM7UUFFdEYsSUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRztZQUM1QyxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUVoRSxlQUFlO1lBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLFFBQVEsQ0FBQztTQUM1RztRQUVELHdCQUF3QjtRQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGlCQUFpQixDQUFFLFFBQTJCO1FBQ3JELE1BQU0sZ0JBQWdCLEdBQXFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVsRyxnQkFBZ0IsQ0FBRSxRQUFRLENBQUUsQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUVsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLElBQUksYUFBYSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFFLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ssYUFBYTtRQUNwQixPQUFPLElBQUksZUFBZSxDQUFFLHNCQUFzQixDQUFFLENBQUM7SUFDdEQsQ0FBQzs7NEdBL0tXLGVBQWU7Z0hBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiwgT3ZlcmxheSwgUG9zaXRpb25TdHJhdGVneSwgT3ZlcmxheUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTmdjSVRvYXN0Q29uZmlnLCBOZ2NJVG9hc3RQb3NpdGlvbiB9IGZyb20gJy4vbmdjLXRvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NUb2FzdEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vdG9hc3QtZ3JvdXAvbmdjLXRvYXN0LWdyb3VwLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ2NUb2FzdFNlcnZpY2Uge1xuXG5cdHByaXZhdGUgX3RvcE92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cdHByaXZhdGUgX2JvdHRvbU92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cdHByaXZhdGUgX3RvcFBvcnRhbDogQ29tcG9uZW50UG9ydGFsPE5nY1RvYXN0R3JvdXBDb21wb25lbnQ+O1xuXHRwcml2YXRlIF9ib3R0b21Qb3J0YWw6IENvbXBvbmVudFBvcnRhbDxOZ2NUb2FzdEdyb3VwQ29tcG9uZW50Pjtcblx0cHJpdmF0ZSBfdG9wSW5zdGFuY2U6IE5nY1RvYXN0R3JvdXBDb21wb25lbnQ7XG5cdHByaXZhdGUgX2JvdHRvbUluc3RhbmNlOiBOZ2NUb2FzdEdyb3VwQ29tcG9uZW50O1xuXHRwcml2YXRlIF9kZWZhdWx0Q29uZmlnOiBOZ2NJVG9hc3RDb25maWcgPSB7XG5cdFx0cG9zaXRpb25cdDogJ2JvdHRvbScsXG5cdFx0Y2FuQ2xvc2VcdDogdHJ1ZSxcblx0XHR0cmFuc2xhdGVcdDogdHJ1ZSxcblx0XHRkdXJhdGlvblx0OiA1MDAwLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtPdmVybGF5fSBfb3ZlcmxheVxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXkgKSB7fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0ICogQHBhcmFtIHthbnl9IGFyZ1xuXHQgKiBAcGFyYW0ge05nY0lUb2FzdENvbmZpZ30gY29uZmlnXG5cdCAqIEByZXR1cm4ge251bWJlcn1cblx0ICovXG5cdHB1YmxpYyBzaG93KCB0aXRsZTogc3RyaW5nLCBhcmc/OiBhbnksIGNvbmZpZz86IE5nY0lUb2FzdENvbmZpZyApOiBudW1iZXIge1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAhXy5pc09iamVjdCggYXJnICkgPyBhcmcgYXMgc3RyaW5nIDogdW5kZWZpbmVkO1xuXG5cdFx0Y29uZmlnID0gXy5pc09iamVjdCggYXJnICkgPyBhcmcgYXMgTmdjSVRvYXN0Q29uZmlnIDogY29uZmlnO1xuXHRcdGNvbmZpZyA9IHsgLi4udGhpcy5fZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH07XG5cblx0XHQvLyBDcmVhdGUgdG9hc3QgdG8gZ3JvdXBcblx0XHRyZXR1cm4gY29uZmlnPy5wb3NpdGlvbiA9PT0gJ3RvcCdcblx0XHRcdD8gdGhpcy5fc2hvd09uVG9wKCB0aXRsZSwgZGVzY3JpcHRpb24sIGNvbmZpZyApXG5cdFx0XHQ6IHRoaXMuX3Nob3dPbkJvdHRvbSggdGl0bGUsIGRlc2NyaXB0aW9uLCBjb25maWcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaWRcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBjbG9zZSggaWQ6IG51bWJlciApIHtcblx0XHR0aGlzLl90b3BJbnN0YW5jZT8uZGVsZXRlVG9hc3QoIGlkICk7XG5cdFx0dGhpcy5fYm90dG9tSW5zdGFuY2U/LmRlbGV0ZVRvYXN0KCBpZCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRwdWJsaWMgY2xvc2VBbGwoKSB7XG5cdFx0dGhpcy5fdG9wSW5zdGFuY2UgPSB0aGlzLl9ib3R0b21JbnN0YW5jZSA9IHVuZGVmaW5lZDtcblxuXHRcdHRoaXMuX3RvcE92ZXJsYXlSZWY/LmRldGFjaCgpO1xuXHRcdHRoaXMuX2JvdHRvbU92ZXJsYXlSZWY/LmRldGFjaCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKiBAcGFyYW0ge2FueX0gYXJnXG5cdCAqIEBwYXJhbSB7TmdjSVRvYXN0Q29uZmlnfSBjb25maWdcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0cHVibGljIGluZm8oIHRpdGxlOiBzdHJpbmcsIGFyZz86IGFueSwgY29uZmlnPzogTmdjSVRvYXN0Q29uZmlnICk6IG51bWJlciB7XG5cdFx0Y29uc3QgZGVzY3JpcHRpb246IHN0cmluZyA9ICFfLmlzT2JqZWN0KCBhcmcgKSA/IGFyZyBhcyBzdHJpbmcgOiB1bmRlZmluZWQ7XG5cblx0XHRjb25maWcgPSBfLmlzT2JqZWN0KCBhcmcgKSA/IGFyZyBhcyBOZ2NJVG9hc3RDb25maWcgOiBjb25maWc7XG5cblx0XHRyZXR1cm4gdGhpcy5zaG93KCB0aXRsZSwgZGVzY3JpcHRpb24sIHsgLi4uY29uZmlnLCB0eXBlOiAnaW5mbycgfSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKiBAcGFyYW0ge2FueX0gYXJnXG5cdCAqIEBwYXJhbSB7TmdjSVRvYXN0Q29uZmlnfSBjb25maWdcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0cHVibGljIHN1Y2Nlc3MoIHRpdGxlOiBzdHJpbmcsIGFyZz86IGFueSwgY29uZmlnPzogTmdjSVRvYXN0Q29uZmlnICk6IG51bWJlciB7XG5cdFx0Y29uc3QgZGVzY3JpcHRpb246IHN0cmluZyA9ICFfLmlzT2JqZWN0KCBhcmcgKSA/IGFyZyBhcyBzdHJpbmcgOiB1bmRlZmluZWQ7XG5cblx0XHRjb25maWcgPSBfLmlzT2JqZWN0KCBhcmcgKSA/IGFyZyBhcyBOZ2NJVG9hc3RDb25maWcgOiBjb25maWc7XG5cblx0XHRyZXR1cm4gdGhpcy5zaG93KCB0aXRsZSwgZGVzY3JpcHRpb24sIHsgLi4uY29uZmlnLCB0eXBlOiAnc3VjY2VzcycgfSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKiBAcGFyYW0ge2FueX0gYXJnXG5cdCAqIEBwYXJhbSB7TmdjSVRvYXN0Q29uZmlnfSBjb25maWdcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0cHVibGljIHdhcm5pbmcoIHRpdGxlOiBzdHJpbmcsIGFyZz86IGFueSwgY29uZmlnPzogTmdjSVRvYXN0Q29uZmlnICk6IG51bWJlciB7XG5cdFx0Y29uc3QgZGVzY3JpcHRpb246IHN0cmluZyA9ICFfLmlzT2JqZWN0KCBhcmcgKSA/IGFyZyBhcyBzdHJpbmcgOiB1bmRlZmluZWQ7XG5cblx0XHRjb25maWcgPSBfLmlzT2JqZWN0KCBhcmcgKSA/IGFyZyBhcyBOZ2NJVG9hc3RDb25maWcgOiBjb25maWc7XG5cblx0XHRyZXR1cm4gdGhpcy5zaG93KCB0aXRsZSwgZGVzY3JpcHRpb24sIHsgLi4uY29uZmlnLCB0eXBlOiAnd2FybmluZycgfSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKiBAcGFyYW0ge2FueX0gYXJnXG5cdCAqIEBwYXJhbSB7TmdjSVRvYXN0Q29uZmlnfSBjb25maWdcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0cHVibGljIGRhbmdlciggdGl0bGU6IHN0cmluZywgYXJnPzogYW55LCBjb25maWc/OiBOZ2NJVG9hc3RDb25maWcgKTogbnVtYmVyIHtcblx0XHRjb25zdCBkZXNjcmlwdGlvbjogc3RyaW5nID0gIV8uaXNPYmplY3QoIGFyZyApID8gYXJnIGFzIHN0cmluZyA6IHVuZGVmaW5lZDtcblxuXHRcdGNvbmZpZyA9IF8uaXNPYmplY3QoIGFyZyApID8gYXJnIGFzIE5nY0lUb2FzdENvbmZpZyA6IGNvbmZpZztcblxuXHRcdHJldHVybiB0aGlzLnNob3coIHRpdGxlLCBkZXNjcmlwdGlvbiwgeyAuLi5jb25maWcsIHR5cGU6ICdkYW5nZXInIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXG5cdCAqIEBwYXJhbSB7TmdjSVRvYXN0Q29uZmlnfSBjb25maWdcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0cHJpdmF0ZSBfc2hvd09uVG9wKCB0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZywgY29uZmlnPzogTmdjSVRvYXN0Q29uZmlnICk6IG51bWJlciB7XG5cdFx0Ly8gQ3JlYXRlIG92ZXJsYXkgcmVmXG5cdFx0dGhpcy5fdG9wT3ZlcmxheVJlZiA9IHRoaXMuX3RvcE92ZXJsYXlSZWYgfHwgdGhpcy5fY3JlYXRlT3ZlcmxheVJlZiggJ3RvcCcgKTtcblxuXHRcdGlmICggIXRoaXMuX3RvcE92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSApIHtcblx0XHRcdC8vIENyZWF0ZSB0b2FzdCBwb3J0YWxcblx0XHRcdHRoaXMuX3RvcFBvcnRhbCA9IHRoaXMuX3RvcFBvcnRhbCB8fCB0aGlzLl9jcmVhdGVQb3J0YWwoKTtcblxuXHRcdFx0Ly8gQXR0YWNoIHRvYXN0XG5cdFx0XHR0aGlzLl90b3BJbnN0YW5jZSA9IHRoaXMuX3RvcEluc3RhbmNlIHx8IHRoaXMuX3RvcE92ZXJsYXlSZWYuYXR0YWNoKCB0aGlzLl90b3BQb3J0YWwgKS5pbnN0YW5jZTtcblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgdG9hc3QgdG8gZ3JvdXBcblx0XHRyZXR1cm4gdGhpcy5fdG9wSW5zdGFuY2UuY3JlYXRlVG9hc3QoIHRpdGxlLCBkZXNjcmlwdGlvbiwgY29uZmlnICk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuXHQgKiBAcGFyYW0ge05nY0lUb2FzdENvbmZpZ30gY29uZmlnXG5cdCAqIEByZXR1cm4ge251bWJlcn1cblx0ICovXG5cdHByaXZhdGUgX3Nob3dPbkJvdHRvbSggdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcsIGNvbmZpZz86IE5nY0lUb2FzdENvbmZpZyApOiBudW1iZXIge1xuXHRcdC8vIENyZWF0ZSBvdmVybGF5IHJlZlxuXHRcdHRoaXMuX2JvdHRvbU92ZXJsYXlSZWYgPSB0aGlzLl9ib3R0b21PdmVybGF5UmVmIHx8IHRoaXMuX2NyZWF0ZU92ZXJsYXlSZWYoICdib3R0b20nICk7XG5cblx0XHRpZiAoICF0aGlzLl9ib3R0b21PdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkgKSB7XG5cdFx0XHQvLyBDcmVhdGUgdG9hc3QgcG9ydGFsXG5cdFx0XHR0aGlzLl9ib3R0b21Qb3J0YWwgPSB0aGlzLl9ib3R0b21Qb3J0YWwgfHwgdGhpcy5fY3JlYXRlUG9ydGFsKCk7XG5cblx0XHRcdC8vIEF0dGFjaCB0b2FzdFxuXHRcdFx0dGhpcy5fYm90dG9tSW5zdGFuY2UgPSB0aGlzLl9ib3R0b21JbnN0YW5jZSB8fCB0aGlzLl9ib3R0b21PdmVybGF5UmVmLmF0dGFjaCggdGhpcy5fYm90dG9tUG9ydGFsICkuaW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIHRvYXN0IHRvIGdyb3VwXG5cdFx0cmV0dXJuIHRoaXMuX2JvdHRvbUluc3RhbmNlLmNyZWF0ZVRvYXN0KCB0aXRsZSwgZGVzY3JpcHRpb24sIGNvbmZpZyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSVRvYXN0UG9zaXRpb259IHBvc2l0aW9uXG5cdCAqIEByZXR1cm4ge092ZXJsYXlSZWZ9XG5cdCAqL1xuXHRwcml2YXRlIF9jcmVhdGVPdmVybGF5UmVmKCBwb3NpdGlvbjogTmdjSVRvYXN0UG9zaXRpb24gKTogT3ZlcmxheVJlZiB7XG5cdFx0Y29uc3QgcG9zaXRpb25TdHJhdGVneTogUG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKTtcblxuXHRcdHBvc2l0aW9uU3RyYXRlZ3lbIHBvc2l0aW9uIF0oIDAgKTtcblxuXHRcdHJldHVybiB0aGlzLl9vdmVybGF5LmNyZWF0ZSggbmV3IE92ZXJsYXlDb25maWcoeyBwb3NpdGlvblN0cmF0ZWd5IH0pICk7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7Q29tcG9uZW50UG9ydGFsfVxuXHQgKi9cblx0cHJpdmF0ZSBfY3JlYXRlUG9ydGFsKCk6IENvbXBvbmVudFBvcnRhbDxOZ2NUb2FzdEdyb3VwQ29tcG9uZW50PiB7XG5cdFx0cmV0dXJuIG5ldyBDb21wb25lbnRQb3J0YWwoIE5nY1RvYXN0R3JvdXBDb21wb25lbnQgKTtcblx0fVxuXG59XG4iXX0=