import _ from 'lodash';
export class EqualValidators {
    /**
     * @static
     * @param {string} equal
     * @param {boolean} reverse
     * @param {any} options
     * @return {() => {}}
     */
    static validator(equal, reverse = false, options = {}) {
        return (c) => {
            // Self value
            const v = c.value;
            // Control value
            const e = c.root.get(equal);
            // Value not equal
            if (e && v !== e.value && !reverse) {
                return { equal: options };
            }
            // Value equal and reverse
            if (e && v === e.value && reverse && e.errors !== null) {
                delete e.errors.equal;
                if (!_.keys(e.errors).length)
                    e.setErrors(null);
            }
            // Value not equal and reverse
            if (e && v !== e.value && reverse)
                c.setErrors({ equal: options });
            return null;
        };
    }
    /**
     * @static
     * @param {AbstractControl} group
     * @return {ValidationErrors | null}
     */
    static disallowSimilarPassword(group) {
        const currentPassword = group.get('currentPassword').value;
        const newPassword = group.get('newPassword').value;
        const similarPassword = currentPassword === newPassword;
        if (!similarPassword)
            return null;
        const errors = { disallowSimilarPassword: similarPassword };
        group.get('newPassword').setErrors(errors);
        return errors;
    }
    /**
     * @static
     * @param {AbstractControl} group
     * @return {ValidationErrors | null}
     */
    static matchPassword(group) {
        const newPassword = group.get('newPassword').value;
        const confirmNewPassword = group.get('confirmNewPassword').value;
        const matchPassword = newPassword === confirmNewPassword;
        if (matchPassword)
            return null;
        const errors = { matchPassword: !matchPassword };
        group.get('confirmNewPassword').setErrors(errors);
        return errors;
    }
    /**
     * @static
     * @param {any[] | Function} array
     * @param {boolean} caseSensitive
     * @param {string} property
     * @return {ValidatorFn}
     */
    static uniqueNameValidator(array, caseSensitive, property) {
        return (control) => {
            const _array = _.isFunction(array) ? array() : array;
            const unique = !_.find(_array, (item) => {
                const compareValue = property ? _.get(item, property) : item;
                return caseSensitive
                    ? compareValue === control.value
                    : compareValue?.toLowerCase() === control.value?.toLowerCase();
            });
            return unique ? null : { duplicateName: { value: control.value } };
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9lcXVhbC12YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixNQUFNLE9BQU8sZUFBZTtJQUUzQjs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFFLEtBQWEsRUFBRSxVQUFtQixLQUFLLEVBQUUsVUFBZSxFQUFFO1FBQ2xGLE9BQU8sQ0FBRSxDQUFxQixFQUFZLEVBQUU7WUFDM0MsYUFBYTtZQUNiLE1BQU0sQ0FBQyxHQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFdkIsZ0JBQWdCO1lBQ2hCLE1BQU0sQ0FBQyxHQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUUsQ0FBQztZQUUvQyxrQkFBa0I7WUFDbEIsSUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUc7Z0JBQ3JDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDMUI7WUFFRCwwQkFBMEI7WUFDMUIsSUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFHO2dCQUN6RCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUV0QixJQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsTUFBTSxDQUFFLENBQUMsTUFBTTtvQkFBRyxDQUFDLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDO2FBQ3REO1lBRUQsOEJBQThCO1lBQzlCLElBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU87Z0JBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRXJFLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsdUJBQXVCLENBQUUsS0FBc0I7UUFDNUQsTUFBTSxlQUFlLEdBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUNsRSxNQUFNLFdBQVcsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFFLGFBQWEsQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUMxRCxNQUFNLGVBQWUsR0FBWSxlQUFlLEtBQUssV0FBVyxDQUFDO1FBRWpFLElBQUssQ0FBQyxlQUFlO1lBQUcsT0FBTyxJQUFJLENBQUM7UUFFcEMsTUFBTSxNQUFNLEdBQXFCLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLENBQUM7UUFFOUUsS0FBSyxDQUFDLEdBQUcsQ0FBRSxhQUFhLENBQUUsQ0FBQyxTQUFTLENBQUUsTUFBTSxDQUFFLENBQUM7UUFFL0MsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUUsS0FBc0I7UUFDbEQsTUFBTSxXQUFXLEdBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBRSxhQUFhLENBQUUsQ0FBQyxLQUFLLENBQUM7UUFDMUQsTUFBTSxrQkFBa0IsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFFLG9CQUFvQixDQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3hFLE1BQU0sYUFBYSxHQUFZLFdBQVcsS0FBSyxrQkFBa0IsQ0FBQztRQUVsRSxJQUFLLGFBQWE7WUFBRyxPQUFPLElBQUksQ0FBQztRQUVqQyxNQUFNLE1BQU0sR0FBcUIsRUFBRSxhQUFhLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVuRSxLQUFLLENBQUMsR0FBRyxDQUFFLG9CQUFvQixDQUFFLENBQUMsU0FBUyxDQUFFLE1BQU0sQ0FBRSxDQUFDO1FBRXRELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBRSxLQUF1QixFQUFFLGFBQXVCLEVBQUUsUUFBaUI7UUFDckcsT0FBTyxDQUFFLE9BQXdCLEVBQTRCLEVBQUU7WUFDOUQsTUFBTSxNQUFNLEdBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBRSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUcsS0FBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUUsTUFBTSxNQUFNLEdBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFLE1BQU0sRUFBRSxDQUFFLElBQVMsRUFBRyxFQUFFO2dCQUN4RCxNQUFNLFlBQVksR0FBVyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBRXZFLE9BQU8sYUFBYTtvQkFDbkIsQ0FBQyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsS0FBSztvQkFDaEMsQ0FBQyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO1lBQ2pFLENBQUMsQ0FBRSxDQUFDO1lBRUosT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDcEUsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU9iamVjdCB9IGZyb20gJ0Bjb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBFcXVhbFZhbGlkYXRvcnMge1xuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlcXVhbFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJldmVyc2Vcblx0ICogQHBhcmFtIHthbnl9IG9wdGlvbnNcblx0ICogQHJldHVybiB7KCkgPT4ge319XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHZhbGlkYXRvciggZXF1YWw6IHN0cmluZywgcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlLCBvcHRpb25zOiBhbnkgPSB7fSApOiAoIGM6IFVudHlwZWRGb3JtQ29udHJvbCApID0+IHt9IHtcblx0XHRyZXR1cm4gKCBjOiBVbnR5cGVkRm9ybUNvbnRyb2wgKTogSU9iamVjdCA9PiB7XG5cdFx0XHQvLyBTZWxmIHZhbHVlXG5cdFx0XHRjb25zdCB2OiBhbnkgPSBjLnZhbHVlO1xuXG5cdFx0XHQvLyBDb250cm9sIHZhbHVlXG5cdFx0XHRjb25zdCBlOiBBYnN0cmFjdENvbnRyb2wgPSBjLnJvb3QuZ2V0KCBlcXVhbCApO1xuXG5cdFx0XHQvLyBWYWx1ZSBub3QgZXF1YWxcblx0XHRcdGlmICggZSAmJiB2ICE9PSBlLnZhbHVlICYmICFyZXZlcnNlICkge1xuXHRcdFx0XHRyZXR1cm4geyBlcXVhbDogb3B0aW9ucyB9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBWYWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuXHRcdFx0aWYgKCBlICYmIHYgPT09IGUudmFsdWUgJiYgcmV2ZXJzZSAmJiBlLmVycm9ycyAhPT0gbnVsbCApIHtcblx0XHRcdFx0ZGVsZXRlIGUuZXJyb3JzLmVxdWFsO1xuXG5cdFx0XHRcdGlmICggIV8ua2V5cyggZS5lcnJvcnMgKS5sZW5ndGggKSBlLnNldEVycm9ycyggbnVsbCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBWYWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2Vcblx0XHRcdGlmICggZSAmJiB2ICE9PSBlLnZhbHVlICYmIHJldmVyc2UgKSBjLnNldEVycm9ycyh7IGVxdWFsOiBvcHRpb25zIH0pO1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9IGdyb3VwXG5cdCAqIEByZXR1cm4ge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBkaXNhbGxvd1NpbWlsYXJQYXNzd29yZCggZ3JvdXA6IEFic3RyYWN0Q29udHJvbCApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG5cdFx0Y29uc3QgY3VycmVudFBhc3N3b3JkOiBhbnkgPSBncm91cC5nZXQoICdjdXJyZW50UGFzc3dvcmQnICkudmFsdWU7XG5cdFx0Y29uc3QgbmV3UGFzc3dvcmQ6IGFueSA9IGdyb3VwLmdldCggJ25ld1Bhc3N3b3JkJyApLnZhbHVlO1xuXHRcdGNvbnN0IHNpbWlsYXJQYXNzd29yZDogYm9vbGVhbiA9IGN1cnJlbnRQYXNzd29yZCA9PT0gbmV3UGFzc3dvcmQ7XG5cblx0XHRpZiAoICFzaW1pbGFyUGFzc3dvcmQgKSByZXR1cm4gbnVsbDtcblxuXHRcdGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgZGlzYWxsb3dTaW1pbGFyUGFzc3dvcmQ6IHNpbWlsYXJQYXNzd29yZCB9O1xuXG5cdFx0Z3JvdXAuZ2V0KCAnbmV3UGFzc3dvcmQnICkuc2V0RXJyb3JzKCBlcnJvcnMgKTtcblxuXHRcdHJldHVybiBlcnJvcnM7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gZ3JvdXBcblx0ICogQHJldHVybiB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9XG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIG1hdGNoUGFzc3dvcmQoIGdyb3VwOiBBYnN0cmFjdENvbnRyb2wgKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuXHRcdGNvbnN0IG5ld1Bhc3N3b3JkOiBhbnkgPSBncm91cC5nZXQoICduZXdQYXNzd29yZCcgKS52YWx1ZTtcblx0XHRjb25zdCBjb25maXJtTmV3UGFzc3dvcmQ6IGFueSA9IGdyb3VwLmdldCggJ2NvbmZpcm1OZXdQYXNzd29yZCcgKS52YWx1ZTtcblx0XHRjb25zdCBtYXRjaFBhc3N3b3JkOiBib29sZWFuID0gbmV3UGFzc3dvcmQgPT09IGNvbmZpcm1OZXdQYXNzd29yZDtcblxuXHRcdGlmICggbWF0Y2hQYXNzd29yZCApIHJldHVybiBudWxsO1xuXG5cdFx0Y29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBtYXRjaFBhc3N3b3JkOiAhbWF0Y2hQYXNzd29yZCB9O1xuXG5cdFx0Z3JvdXAuZ2V0KCAnY29uZmlybU5ld1Bhc3N3b3JkJyApLnNldEVycm9ycyggZXJyb3JzICk7XG5cblx0XHRyZXR1cm4gZXJyb3JzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHthbnlbXSB8IEZ1bmN0aW9ufSBhcnJheVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGNhc2VTZW5zaXRpdmVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG5cdCAqIEByZXR1cm4ge1ZhbGlkYXRvckZufVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyB1bmlxdWVOYW1lVmFsaWRhdG9yKCBhcnJheTogYW55W10gfCBGdW5jdGlvbiwgY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4sIHByb3BlcnR5Pzogc3RyaW5nICk6IFZhbGlkYXRvckZuIHtcblx0XHRyZXR1cm4gKCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuXHRcdFx0Y29uc3QgX2FycmF5OiBhbnlbXSA9IF8uaXNGdW5jdGlvbiggYXJyYXkgKSA/ICggYXJyYXkgYXMgRnVuY3Rpb24gKSgpIDogYXJyYXk7XG5cdFx0XHRjb25zdCB1bmlxdWU6IGJvb2xlYW4gPSAhXy5maW5kKCBfYXJyYXksICggaXRlbTogYW55ICkgPT4ge1xuXHRcdFx0XHRjb25zdCBjb21wYXJlVmFsdWU6IHN0cmluZyA9IHByb3BlcnR5ID8gXy5nZXQoIGl0ZW0sIHByb3BlcnR5ICkgOiBpdGVtO1xuXG5cdFx0XHRcdHJldHVybiBjYXNlU2Vuc2l0aXZlXG5cdFx0XHRcdFx0PyBjb21wYXJlVmFsdWUgPT09IGNvbnRyb2wudmFsdWVcblx0XHRcdFx0XHQ6IGNvbXBhcmVWYWx1ZT8udG9Mb3dlckNhc2UoKSA9PT0gY29udHJvbC52YWx1ZT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHVuaXF1ZSA/IG51bGwgOiB7IGR1cGxpY2F0ZU5hbWU6IHsgdmFsdWU6IGNvbnRyb2wudmFsdWUgfSB9O1xuXHRcdH07XG5cdH1cblxufVxuIl19