import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { Memoize, IsContrastPipe } from 'angular-core';
import { COLOR } from '@app/@resources';
import * as i0 from "@angular/core";
export class ContrastPipe extends IsContrastPipe {
    /**
     * @param {string} hex
     * @param {string} textColor
     * @return {any}
     */
    transform(hex, textColor) {
        if (!hex)
            return textColor;
        return super.transform(hex)
            ? COLOR.WHITE
            : (textColor || COLOR.TEXT);
    }
}
ContrastPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ContrastPipe, deps: null, target: i0.ɵɵFactoryTarget.Pipe });
ContrastPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ContrastPipe, name: "contrast" });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], ContrastPipe.prototype, "transform", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ContrastPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'contrast' }]
        }], propDecorators: { transform: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhc3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9waXBlcy9jb250cmFzdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR3hDLE1BQU0sT0FBTyxZQUFhLFNBQVEsY0FBYztJQUUvQzs7OztPQUlHO0lBRUksU0FBUyxDQUFFLEdBQVcsRUFBRSxTQUFrQjtRQUNoRCxJQUFLLENBQUMsR0FBRztZQUFHLE9BQU8sU0FBUyxDQUFDO1FBRTdCLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBRSxHQUFHLENBQUU7WUFDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ2IsQ0FBQyxDQUFDLENBQUUsU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUNoQyxDQUFDOzt5R0FkVyxZQUFZO3VHQUFaLFlBQVk7QUFPeEI7SUFBQyxPQUFPLEVBQUU7Ozs7NkNBT1Q7MkZBZFcsWUFBWTtrQkFEeEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7OEJBU2xCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lbW9pemUsIElzQ29udHJhc3RQaXBlIH0gZnJvbSAnYW5ndWxhci1jb3JlJztcblxuaW1wb3J0IHsgQ09MT1IgfSBmcm9tICdAYXBwL0ByZXNvdXJjZXMnO1xuXG5AUGlwZSh7IG5hbWU6ICdjb250cmFzdCcgfSlcbmV4cG9ydCBjbGFzcyBDb250cmFzdFBpcGUgZXh0ZW5kcyBJc0NvbnRyYXN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaGV4XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0Q29sb3Jcblx0ICogQHJldHVybiB7YW55fVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBoZXg6IHN0cmluZywgdGV4dENvbG9yPzogc3RyaW5nICk6IGFueSB7XG5cdFx0aWYgKCAhaGV4ICkgcmV0dXJuIHRleHRDb2xvcjtcblxuXHRcdHJldHVybiBzdXBlci50cmFuc2Zvcm0oIGhleCApXG5cdFx0XHQ/IENPTE9SLldISVRFXG5cdFx0XHQ6ICggdGV4dENvbG9yIHx8IENPTE9SLlRFWFQgKTtcblx0fVxuXG59XG4iXX0=