import { Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ControlErrorsPipe {
    /**
     * @constructor
     * @param {TranslateService} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
    }
    /**
     * @param {ValidationErrors} errors
     * @param {string} field
     * @param {boolean} multiple
     * @return {string[]}
     */
    transform(errors, field, multiple) {
        return this._getFieldErrors(errors, field, multiple);
    }
    /**
     * @param {ValidationErrors} errors
     * @param {string} field
     * @param {boolean} multiple
     * @return {string[]}
     */
    _getFieldErrors(errors, field, multiple) {
        if (!errors)
            return [];
        const errorKeys = _.keys(errors);
        if (!errorKeys?.length)
            return [];
        const validKeyLookup = ControlErrorsPipe.TRANSLATE_KEY_LOOKUP;
        return _.map(multiple ? errorKeys : [errorKeys[0]], (errorType) => {
            const error = errors[errorType];
            const errorKey = _.toUpper(validKeyLookup[errorType]) || 'INVALID';
            const translateKey = `CORE.VALIDATION_MESSAGE.${errorKey}`;
            let value;
            switch (errorKey) {
                case validKeyLookup.min:
                case validKeyLookup.minGreaterThan:
                    value = _.toCommas(error.min);
                    break;
                case validKeyLookup.max:
                case validKeyLookup.maxLessThan:
                    value = _.toCommas(error.max);
                    break;
                case validKeyLookup.length:
                case validKeyLookup.maxlength:
                case validKeyLookup.minlength:
                    value = _.toCommas(error.requiredLength);
                    break;
                case validKeyLookup.equal:
                    value = _.toCommas(error.requiredValue);
                    break;
            }
            return this._translateService.instant(translateKey, { ...error, value, field });
        });
    }
}
ControlErrorsPipe.TRANSLATE_KEY_LOOKUP = {
    disallowSimilarPassword: 'DISALLOW_SIMILAR_PASSWORD',
    equal: 'EQUAL',
    length: 'LENGTH',
    matchPassword: 'MATCH_PASSWORD',
    max: 'MAX',
    maxLessThan: 'MAX_LESS_THAN',
    maxlength: 'MAXLENGTH',
    min: 'MIN',
    minGreaterThan: 'MIN_GREATER_THAN',
    minlength: 'MINLENGTH',
    required: 'REQUIRED',
};
ControlErrorsPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ControlErrorsPipe, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Pipe });
ControlErrorsPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ControlErrorsPipe, name: "controlErrors" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ControlErrorsPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'controlErrors' }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lcnJvcnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9waXBlcy9jb250cm9sLWVycm9ycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7O0FBR3ZCLE1BQU0sT0FBTyxpQkFBaUI7SUFnQjdCOzs7T0FHRztJQUNILFlBQXFCLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUksQ0FBQztJQUU3RDs7Ozs7T0FLRztJQUNJLFNBQVMsQ0FBRSxNQUF3QixFQUFFLEtBQWEsRUFBRSxRQUFrQjtRQUM1RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxlQUFlLENBQUUsTUFBd0IsRUFBRSxLQUFhLEVBQUUsUUFBa0I7UUFDbkYsSUFBSyxDQUFDLE1BQU07WUFBRyxPQUFPLEVBQUUsQ0FBQztRQUV6QixNQUFNLFNBQVMsR0FBYSxDQUFDLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBRSxDQUFDO1FBRTdDLElBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTTtZQUFHLE9BQU8sRUFBRSxDQUFDO1FBRXBDLE1BQU0sY0FBYyxHQUFZLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDO1FBRXZFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxTQUFTLENBQUUsQ0FBQyxDQUFFLENBQUUsRUFBRSxDQUFFLFNBQWlCLEVBQUcsRUFBRTtZQUNoRixNQUFNLEtBQUssR0FBWSxNQUFNLENBQUUsU0FBUyxDQUFFLENBQUM7WUFDM0MsTUFBTSxRQUFRLEdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxjQUFjLENBQUUsU0FBUyxDQUFFLENBQUUsSUFBSSxTQUFTLENBQUM7WUFDL0UsTUFBTSxZQUFZLEdBQVcsMkJBQTJCLFFBQVEsRUFBRSxDQUFDO1lBQ25FLElBQUksS0FBYSxDQUFDO1lBRWxCLFFBQVMsUUFBUSxFQUFHO2dCQUNuQixLQUFLLGNBQWMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLEtBQUssY0FBYyxDQUFDLGNBQWM7b0JBQ2pDLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBQyxHQUFHLENBQUUsQ0FBQztvQkFDaEMsTUFBTTtnQkFDUCxLQUFLLGNBQWMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLEtBQUssY0FBYyxDQUFDLFdBQVc7b0JBQzlCLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBQyxHQUFHLENBQUUsQ0FBQztvQkFDaEMsTUFBTTtnQkFDUCxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLEtBQUssY0FBYyxDQUFDLFNBQVMsQ0FBQztnQkFDOUIsS0FBSyxjQUFjLENBQUMsU0FBUztvQkFDNUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNQLEtBQUssY0FBYyxDQUFDLEtBQUs7b0JBQ3hCLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBQyxhQUFhLENBQUUsQ0FBQztvQkFDMUMsTUFBTTthQUNQO1lBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBRSxDQUFDO1FBQ25GLENBQUMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQzs7QUF4RWEsc0NBQW9CLEdBQVk7SUFDN0MsdUJBQXVCLEVBQUcsMkJBQTJCO0lBQ3JELEtBQUssRUFBTyxPQUFPO0lBQ25CLE1BQU0sRUFBTyxRQUFRO0lBQ3JCLGFBQWEsRUFBSyxnQkFBZ0I7SUFDbEMsR0FBRyxFQUFRLEtBQUs7SUFDaEIsV0FBVyxFQUFNLGVBQWU7SUFDaEMsU0FBUyxFQUFNLFdBQVc7SUFDMUIsR0FBRyxFQUFRLEtBQUs7SUFDaEIsY0FBYyxFQUFLLGtCQUFrQjtJQUNyQyxTQUFTLEVBQU0sV0FBVztJQUMxQixRQUFRLEVBQU0sVUFBVTtDQUN4QixDQUFDOzhHQWRVLGlCQUFpQjs0R0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU9iamVjdCB9IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5AUGlwZSh7IG5hbWU6ICdjb250cm9sRXJyb3JzJyB9KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xFcnJvcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0cHVibGljIHN0YXRpYyBUUkFOU0xBVEVfS0VZX0xPT0tVUDogSU9iamVjdCA9IHtcblx0XHRkaXNhbGxvd1NpbWlsYXJQYXNzd29yZFx0OiAnRElTQUxMT1dfU0lNSUxBUl9QQVNTV09SRCcsXG5cdFx0ZXF1YWxcdFx0XHRcdFx0OiAnRVFVQUwnLFxuXHRcdGxlbmd0aFx0XHRcdFx0XHQ6ICdMRU5HVEgnLFxuXHRcdG1hdGNoUGFzc3dvcmRcdFx0XHQ6ICdNQVRDSF9QQVNTV09SRCcsXG5cdFx0bWF4XHRcdFx0XHRcdFx0OiAnTUFYJyxcblx0XHRtYXhMZXNzVGhhblx0XHRcdFx0OiAnTUFYX0xFU1NfVEhBTicsXG5cdFx0bWF4bGVuZ3RoXHRcdFx0XHQ6ICdNQVhMRU5HVEgnLFxuXHRcdG1pblx0XHRcdFx0XHRcdDogJ01JTicsXG5cdFx0bWluR3JlYXRlclRoYW5cdFx0XHQ6ICdNSU5fR1JFQVRFUl9USEFOJyxcblx0XHRtaW5sZW5ndGhcdFx0XHRcdDogJ01JTkxFTkdUSCcsXG5cdFx0cmVxdWlyZWRcdFx0XHRcdDogJ1JFUVVJUkVEJyxcblx0fTtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7VHJhbnNsYXRlU2VydmljZX0gX3RyYW5zbGF0ZVNlcnZpY2Vcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF90cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlICkge31cblxuXHQvKipcblx0ICogQHBhcmFtIHtWYWxpZGF0aW9uRXJyb3JzfSBlcnJvcnNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbXVsdGlwbGVcblx0ICogQHJldHVybiB7c3RyaW5nW119XG5cdCAqL1xuXHRwdWJsaWMgdHJhbnNmb3JtKCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMsIGZpZWxkOiBzdHJpbmcsIG11bHRpcGxlPzogYm9vbGVhbiApOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dldEZpZWxkRXJyb3JzKCBlcnJvcnMsIGZpZWxkLCBtdWx0aXBsZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7VmFsaWRhdGlvbkVycm9yc30gZXJyb3JzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IG11bHRpcGxlXG5cdCAqIEByZXR1cm4ge3N0cmluZ1tdfVxuXHQgKi9cblx0cHJpdmF0ZSBfZ2V0RmllbGRFcnJvcnMoIGVycm9yczogVmFsaWRhdGlvbkVycm9ycywgZmllbGQ6IHN0cmluZywgbXVsdGlwbGU/OiBib29sZWFuICk6IHN0cmluZ1tdIHtcblx0XHRpZiAoICFlcnJvcnMgKSByZXR1cm4gW107XG5cblx0XHRjb25zdCBlcnJvcktleXM6IHN0cmluZ1tdID0gXy5rZXlzKCBlcnJvcnMgKTtcblxuXHRcdGlmICggIWVycm9yS2V5cz8ubGVuZ3RoICkgcmV0dXJuIFtdO1xuXG5cdFx0Y29uc3QgdmFsaWRLZXlMb29rdXA6IElPYmplY3QgPSBDb250cm9sRXJyb3JzUGlwZS5UUkFOU0xBVEVfS0VZX0xPT0tVUDtcblxuXHRcdHJldHVybiBfLm1hcCggbXVsdGlwbGUgPyBlcnJvcktleXMgOiBbIGVycm9yS2V5c1sgMCBdIF0sICggZXJyb3JUeXBlOiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvcjogSU9iamVjdCA9IGVycm9yc1sgZXJyb3JUeXBlIF07XG5cdFx0XHRjb25zdCBlcnJvcktleTogc3RyaW5nID0gXy50b1VwcGVyKCB2YWxpZEtleUxvb2t1cFsgZXJyb3JUeXBlIF0gKSB8fCAnSU5WQUxJRCc7XG5cdFx0XHRjb25zdCB0cmFuc2xhdGVLZXk6IHN0cmluZyA9IGBDT1JFLlZBTElEQVRJT05fTUVTU0FHRS4ke2Vycm9yS2V5fWA7XG5cdFx0XHRsZXQgdmFsdWU6IHN0cmluZztcblxuXHRcdFx0c3dpdGNoICggZXJyb3JLZXkgKSB7XG5cdFx0XHRcdGNhc2UgdmFsaWRLZXlMb29rdXAubWluOlxuXHRcdFx0XHRjYXNlIHZhbGlkS2V5TG9va3VwLm1pbkdyZWF0ZXJUaGFuOlxuXHRcdFx0XHRcdHZhbHVlID0gXy50b0NvbW1hcyggZXJyb3IubWluICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgdmFsaWRLZXlMb29rdXAubWF4OlxuXHRcdFx0XHRjYXNlIHZhbGlkS2V5TG9va3VwLm1heExlc3NUaGFuOlxuXHRcdFx0XHRcdHZhbHVlID0gXy50b0NvbW1hcyggZXJyb3IubWF4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgdmFsaWRLZXlMb29rdXAubGVuZ3RoOlxuXHRcdFx0XHRjYXNlIHZhbGlkS2V5TG9va3VwLm1heGxlbmd0aDpcblx0XHRcdFx0Y2FzZSB2YWxpZEtleUxvb2t1cC5taW5sZW5ndGg6XG5cdFx0XHRcdFx0dmFsdWUgPSBfLnRvQ29tbWFzKCBlcnJvci5yZXF1aXJlZExlbmd0aCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIHZhbGlkS2V5TG9va3VwLmVxdWFsOlxuXHRcdFx0XHRcdHZhbHVlID0gXy50b0NvbW1hcyggZXJyb3IucmVxdWlyZWRWYWx1ZSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5fdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCB0cmFuc2xhdGVLZXksIHsgLi4uZXJyb3IsIHZhbHVlLCBmaWVsZCB9ICk7XG5cdFx0fSApO1xuXHR9XG5cbn1cbiJdfQ==