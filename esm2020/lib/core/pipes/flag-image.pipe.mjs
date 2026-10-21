import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from 'angular-core';
import * as i0 from "@angular/core";
export class FlagImagePipe {
    /**
     * @param {CountryCode} countryCode
     * @return {string}
     */
    transform(countryCode) {
        if (!countryCode)
            return;
        countryCode = _.chain(countryCode)
            .upperCase(countryCode)
            .replace(/ /g, '-')
            .value();
        return `./assets/images/flags/${countryCode}.svg`;
    }
}
FlagImagePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FlagImagePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FlagImagePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: FlagImagePipe, name: "flagImage" });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], FlagImagePipe.prototype, "transform", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FlagImagePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'flagImage' }]
        }], propDecorators: { transform: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1pbWFnZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9jb3JlL3BpcGVzL2ZsYWctaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBR3ZDLE1BQU0sT0FBTyxhQUFhO0lBRXpCOzs7T0FHRztJQUVJLFNBQVMsQ0FBRSxXQUF3QjtRQUN6QyxJQUFLLENBQUMsV0FBVztZQUFHLE9BQU87UUFFM0IsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUUsV0FBVyxDQUFFO2FBQ25DLFNBQVMsQ0FBRSxXQUFXLENBQUU7YUFDeEIsT0FBTyxDQUFFLElBQUksRUFBRSxHQUFHLENBQUU7YUFDcEIsS0FBSyxFQUFFLENBQUM7UUFFVCxPQUFPLHlCQUF5QixXQUFXLE1BQU0sQ0FBQztJQUNuRCxDQUFDOzswR0FoQlcsYUFBYTt3R0FBYixhQUFhO0FBTXpCO0lBQUMsT0FBTyxFQUFFOzs7OzhDQVVUOzJGQWhCVyxhQUFhO2tCQUR6QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs4QkFRbkIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvdW50cnlDb2RlIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJ2FuZ3VsYXItY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2ZsYWdJbWFnZScgfSlcbmV4cG9ydCBjbGFzcyBGbGFnSW1hZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Q291bnRyeUNvZGV9IGNvdW50cnlDb2RlXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggY291bnRyeUNvZGU6IENvdW50cnlDb2RlICk6IHN0cmluZyB7XG5cdFx0aWYgKCAhY291bnRyeUNvZGUgKSByZXR1cm47XG5cblx0XHRjb3VudHJ5Q29kZSA9IF8uY2hhaW4oIGNvdW50cnlDb2RlIClcblx0XHQudXBwZXJDYXNlKCBjb3VudHJ5Q29kZSApXG5cdFx0LnJlcGxhY2UoIC8gL2csICctJyApXG5cdFx0LnZhbHVlKCk7XG5cblx0XHRyZXR1cm4gYC4vYXNzZXRzL2ltYWdlcy9mbGFncy8ke2NvdW50cnlDb2RlfS5zdmdgO1xuXHR9XG5cbn1cbiJdfQ==