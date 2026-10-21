import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import _ from 'lodash';
import { Memoize } from 'angular-core';
import { COLOR } from '@app/@resources';
import * as i0 from "@angular/core";
export class ColorPipe {
    /**
     * @param {string} name
     * @param {number} weight
     * @param {number} opacity
     * @return {string}
     */
    transform(name, weight, opacity) {
        name = _.toUpper(name);
        name += weight ? `.${weight}` : '';
        let color = _.get(COLOR, name);
        if (_.isFinite(opacity)) {
            const rgb = _.toRgb(color);
            color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        }
        return color || name;
    }
}
ColorPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColorPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ColorPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ColorPipe, name: "color" });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", String)
], ColorPipe.prototype, "transform", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColorPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'color' }]
        }], propDecorators: { transform: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9waXBlcy9jb2xvci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBTyxNQUFNLGNBQWMsQ0FBQztBQUU1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR3hDLE1BQU0sT0FBTyxTQUFTO0lBRXJCOzs7OztPQUtHO0lBRUksU0FBUyxDQUFFLElBQVksRUFBRSxNQUFlLEVBQUUsT0FBZ0I7UUFDaEUsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRW5DLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBRSxDQUFDO1FBRXpDLElBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBRSxPQUFPLENBQUUsRUFBRztZQUM1QixNQUFNLEdBQUcsR0FBUSxDQUFDLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDO1lBRWxDLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLE9BQU8sR0FBRyxDQUFDO1NBQ3pEO1FBRUQsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDO0lBQ3RCLENBQUM7O3NHQXRCVyxTQUFTO29HQUFULFNBQVM7QUFRckI7SUFBQyxPQUFPLEVBQUU7Ozs7MENBY1Q7MkZBdEJXLFNBQVM7a0JBRHJCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOzhCQVVmLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBNZW1vaXplLCBSR0IgfSBmcm9tICdhbmd1bGFyLWNvcmUnO1xuXG5pbXBvcnQgeyBDT0xPUiB9IGZyb20gJ0BhcHAvQHJlc291cmNlcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2NvbG9yJyB9KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2VpZ2h0XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvcGFjaXR5XG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHRyYW5zZm9ybSggbmFtZTogc3RyaW5nLCB3ZWlnaHQ/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIgKTogc3RyaW5nIHtcblx0XHRuYW1lID0gXy50b1VwcGVyKCBuYW1lICk7XG5cdFx0bmFtZSArPSB3ZWlnaHQgPyBgLiR7d2VpZ2h0fWAgOiAnJztcblxuXHRcdGxldCBjb2xvcjogc3RyaW5nID0gXy5nZXQoIENPTE9SLCBuYW1lICk7XG5cblx0XHRpZiAoIF8uaXNGaW5pdGUoIG9wYWNpdHkgKSApIHtcblx0XHRcdGNvbnN0IHJnYjogUkdCID0gXy50b1JnYiggY29sb3IgKTtcblxuXHRcdFx0Y29sb3IgPSBgcmdiYSgke3JnYi5yfSwgJHtyZ2IuZ30sICR7cmdiLmJ9LCAke29wYWNpdHl9KWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbG9yIHx8IG5hbWU7XG5cdH1cblxufVxuIl19