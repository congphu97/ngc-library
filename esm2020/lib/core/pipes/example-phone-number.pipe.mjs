import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { getExampleNumber, isSupportedCountry } from 'libphonenumber-js';
import examples from 'libphonenumber-js/examples.mobile.json';
import { Memoize } from 'angular-core';
import * as i0 from "@angular/core";
export class ExamplePhoneNumberPipe {
    /**
     * @param {CountryCode} countryCode
     * @return {string}
     */
    transform(countryCode) {
        if (!countryCode)
            return;
        return isSupportedCountry(countryCode)
            ? getExampleNumber(countryCode, examples)?.formatNational()
            : undefined;
    }
}
ExamplePhoneNumberPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ExamplePhoneNumberPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ExamplePhoneNumberPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ExamplePhoneNumberPipe, name: "examplePhoneNumber" });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ExamplePhoneNumberPipe.prototype, "transform", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ExamplePhoneNumberPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'examplePhoneNumber' }]
        }], propDecorators: { transform: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1waG9uZS1udW1iZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9waXBlcy9leGFtcGxlLXBob25lLW51bWJlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RixPQUFPLFFBQVEsTUFBTSx3Q0FBd0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUd2QyxNQUFNLE9BQU8sc0JBQXNCO0lBRWxDOzs7T0FHRztJQUVJLFNBQVMsQ0FBRSxXQUF3QjtRQUN6QyxJQUFLLENBQUMsV0FBVztZQUFHLE9BQU87UUFFM0IsT0FBTyxrQkFBa0IsQ0FBRSxXQUFXLENBQUU7WUFDdkMsQ0FBQyxDQUFDLGdCQUFnQixDQUFFLFdBQVcsRUFBRSxRQUFRLENBQUUsRUFBRSxjQUFjLEVBQUU7WUFDN0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNkLENBQUM7O21IQWJXLHNCQUFzQjtpSEFBdEIsc0JBQXNCO0FBTWxDO0lBQUMsT0FBTyxFQUFFOzs7O3VEQU9UOzJGQWJXLHNCQUFzQjtrQkFEbEMsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTs4QkFRNUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldEV4YW1wbGVOdW1iZXIsIGlzU3VwcG9ydGVkQ291bnRyeSwgQ291bnRyeUNvZGUgfSBmcm9tICdsaWJwaG9uZW51bWJlci1qcyc7XG5pbXBvcnQgZXhhbXBsZXMgZnJvbSAnbGlicGhvbmVudW1iZXItanMvZXhhbXBsZXMubW9iaWxlLmpzb24nO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnYW5ndWxhci1jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnZXhhbXBsZVBob25lTnVtYmVyJyB9KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVQaG9uZU51bWJlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHtDb3VudHJ5Q29kZX0gY291bnRyeUNvZGVcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBjb3VudHJ5Q29kZTogQ291bnRyeUNvZGUgKTogc3RyaW5nIHtcblx0XHRpZiAoICFjb3VudHJ5Q29kZSApIHJldHVybjtcblxuXHRcdHJldHVybiBpc1N1cHBvcnRlZENvdW50cnkoIGNvdW50cnlDb2RlIClcblx0XHRcdD8gZ2V0RXhhbXBsZU51bWJlciggY291bnRyeUNvZGUsIGV4YW1wbGVzICk/LmZvcm1hdE5hdGlvbmFsKClcblx0XHRcdDogdW5kZWZpbmVkO1xuXHR9XG5cbn1cbiJdfQ==