import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import _ from 'lodash';
import { Memoize } from 'angular-core';
import { ENVIRONMENT } from '@core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class ChannelURLPipe {
    /**
     * @constructor
     * @param {DomSanitizer} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {string} channelID
     * @param {boolean} isSafeUrl
     * @return {string | SafeUrl}
     */
    transform(channelID, isSafeUrl) {
        const url = _.toLower(`${channelID || ''}.${ENVIRONMENT.APP_DOMAIN}`);
        return isSafeUrl ? this._sanitizer.bypassSecurityTrustUrl(`//${url}`) : url;
    }
}
ChannelURLPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChannelURLPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
ChannelURLPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ChannelURLPipe, name: "channelURL" });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Object)
], ChannelURLPipe.prototype, "transform", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ChannelURLPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'channelURL' }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; }, propDecorators: { transform: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC11cmwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvY29yZS9waXBlcy9jaGFubmVsLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFXLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLE9BQU8sQ0FBQzs7O0FBR3BDLE1BQU0sT0FBTyxjQUFjO0lBRTFCOzs7T0FHRztJQUNILFlBQXFCLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7SUFBSSxDQUFDO0lBRWxEOzs7O09BSUc7SUFFSSxTQUFTLENBQUUsU0FBaUIsRUFBRSxTQUFtQjtRQUN2RCxNQUFNLEdBQUcsR0FBVyxDQUFDLENBQUMsT0FBTyxDQUFFLEdBQUcsU0FBUyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUUsQ0FBQztRQUVoRixPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBRSxLQUFLLEdBQUcsRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMvRSxDQUFDOzsyR0FsQlcsY0FBYzt5R0FBZCxjQUFjO0FBYTFCO0lBQUMsT0FBTyxFQUFFOzs7OytDQUtUOzJGQWxCVyxjQUFjO2tCQUQxQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTttR0FlcEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJ2FuZ3VsYXItY29yZSc7XG5cbmltcG9ydCB7IEVOVklST05NRU5UIH0gZnJvbSAnQGNvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjaGFubmVsVVJMJyB9KVxuZXhwb3J0IGNsYXNzIENoYW5uZWxVUkxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0RvbVNhbml0aXplcn0gX3Nhbml0aXplclxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyICkge31cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxJRFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2FmZVVybFxuXHQgKiBAcmV0dXJuIHtzdHJpbmcgfCBTYWZlVXJsfVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgdHJhbnNmb3JtKCBjaGFubmVsSUQ6IHN0cmluZywgaXNTYWZlVXJsPzogYm9vbGVhbiApOiBzdHJpbmcgfCBTYWZlVXJsIHtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IF8udG9Mb3dlciggYCR7Y2hhbm5lbElEIHx8ICcnfS4ke0VOVklST05NRU5ULkFQUF9ET01BSU59YCApO1xuXG5cdFx0cmV0dXJuIGlzU2FmZVVybCA/IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKCBgLy8ke3VybH1gICkgOiB1cmw7XG5cdH1cblxufVxuIl19