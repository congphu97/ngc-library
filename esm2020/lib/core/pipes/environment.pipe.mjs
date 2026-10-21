import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from 'angular-core';
import { ENVIRONMENT } from '@core';
import * as i0 from "@angular/core";
export class EnvironmentPipe {
    /**
     * @param {string} propertyName
     * @return {string}
     */
    transform(propertyName) {
        return _.get(ENVIRONMENT, propertyName);
    }
}
EnvironmentPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: EnvironmentPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EnvironmentPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: EnvironmentPipe, name: "environment" });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], EnvironmentPipe.prototype, "transform", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: EnvironmentPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'environment' }]
        }], propDecorators: { transform: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9waXBlcy9lbnZpcm9ubWVudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sT0FBTyxDQUFDOztBQUdwQyxNQUFNLE9BQU8sZUFBZTtJQUUzQjs7O09BR0c7SUFFSSxTQUFTLENBQUUsWUFBb0I7UUFDckMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFFLFdBQVcsRUFBRSxZQUFZLENBQUUsQ0FBQztJQUMzQyxDQUFDOzs0R0FUVyxlQUFlOzBHQUFmLGVBQWU7QUFNM0I7SUFBQyxPQUFPLEVBQUU7Ozs7Z0RBR1Q7MkZBVFcsZUFBZTtrQkFEM0IsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7OEJBUXJCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnYW5ndWxhci1jb3JlJztcblxuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tICdAY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2Vudmlyb25tZW50JyB9KVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggcHJvcGVydHlOYW1lOiBzdHJpbmcgKTogYW55IHtcblx0XHRyZXR1cm4gXy5nZXQoIEVOVklST05NRU5ULCBwcm9wZXJ0eU5hbWUgKTtcblx0fVxuXG59XG4iXX0=