import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { parsePhoneNumberFromString, isSupportedCountry } from 'libphonenumber-js';
import { Memoize } from 'angular-core';
import * as i0 from "@angular/core";
export class PhonePipe {
    /**
     * @param {string} phone
     * @param {CountryCode} countryCode
     * @return {string}
     */
    transform(phone, countryCode) {
        if (!phone || !isSupportedCountry(countryCode))
            return phone;
        const phoneNumber = parsePhoneNumberFromString(phone, countryCode);
        return phoneNumber?.formatNational() || phone;
    }
}
PhonePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PhonePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PhonePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: PhonePipe, name: "phone" });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], PhonePipe.prototype, "transform", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PhonePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'phone' }]
        }], propDecorators: { transform: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9waXBlcy9waG9uZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsa0JBQWtCLEVBQTRCLE1BQU0sbUJBQW1CLENBQUM7QUFFN0csT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHdkMsTUFBTSxPQUFPLFNBQVM7SUFFckI7Ozs7T0FJRztJQUVJLFNBQVMsQ0FBRSxLQUFhLEVBQUUsV0FBd0I7UUFDeEQsSUFBSyxDQUFDLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFFLFdBQVcsQ0FBRTtZQUFHLE9BQU8sS0FBSyxDQUFDO1FBRWpFLE1BQU0sV0FBVyxHQUFnQiwwQkFBMEIsQ0FBRSxLQUFLLEVBQUUsV0FBVyxDQUFFLENBQUM7UUFFbEYsT0FBTyxXQUFXLEVBQUUsY0FBYyxFQUFFLElBQUksS0FBSyxDQUFDO0lBQy9DLENBQUM7O3NHQWRXLFNBQVM7b0dBQVQsU0FBUztBQU9yQjtJQUFDLE9BQU8sRUFBRTs7OzswQ0FPVDsyRkFkVyxTQUFTO2tCQURyQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs4QkFTZixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGFyc2VQaG9uZU51bWJlckZyb21TdHJpbmcsIGlzU3VwcG9ydGVkQ291bnRyeSwgUGhvbmVOdW1iZXIsIENvdW50cnlDb2RlIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xuXG5pbXBvcnQgeyBNZW1vaXplIH0gZnJvbSAnYW5ndWxhci1jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAncGhvbmUnIH0pXG5leHBvcnQgY2xhc3MgUGhvbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwaG9uZVxuXHQgKiBAcGFyYW0ge0NvdW50cnlDb2RlfSBjb3VudHJ5Q29kZVxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIHBob25lOiBzdHJpbmcsIGNvdW50cnlDb2RlOiBDb3VudHJ5Q29kZSApOiBzdHJpbmcge1xuXHRcdGlmICggIXBob25lIHx8ICFpc1N1cHBvcnRlZENvdW50cnkoIGNvdW50cnlDb2RlICkgKSByZXR1cm4gcGhvbmU7XG5cblx0XHRjb25zdCBwaG9uZU51bWJlcjogUGhvbmVOdW1iZXIgPSBwYXJzZVBob25lTnVtYmVyRnJvbVN0cmluZyggcGhvbmUsIGNvdW50cnlDb2RlICk7XG5cblx0XHRyZXR1cm4gcGhvbmVOdW1iZXI/LmZvcm1hdE5hdGlvbmFsKCkgfHwgcGhvbmU7XG5cdH1cblxufVxuIl19