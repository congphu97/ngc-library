import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import _ from 'lodash';
import { Memoize } from 'angular-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class MetaEmbedPipe {
    /**
     * @constructor
     * @param {DomSanitizer} _domSanitizer
     */
    constructor(_domSanitizer) {
        this._domSanitizer = _domSanitizer;
    }
    /**
     * @param {IMetaEmbed} meta
     * @return {SafeHtml}
     */
    transform(meta) {
        if (!meta)
            return;
        const siteUrl = meta.url;
        const siteName = meta.siteName;
        const contentType = meta.contentType;
        const mediaType = meta.mediaType;
        const mediaImage = _.first(meta.images);
        return this._render(siteUrl, siteName, contentType, mediaType, mediaImage);
    }
    /**
     * @param {string} siteUrl
     * @param {string} siteName
     * @param {string} contentType
     * @param {string} mediaType
     * @param {string} mediaImage
     * @return {SafeHtml}
     */
    _render(siteUrl, siteName, contentType, mediaType, mediaImage) {
        let html = mediaImage ? `<img src="${mediaImage}" />` : undefined;
        if (mediaType.search(/^(video|audio)/) !== -1) {
            if (siteName === 'YouTube') {
                const urlParams = new URLSearchParams(siteUrl.split('?')[1]);
                const videoID = urlParams.get('v');
                if (videoID) {
                    html = `<iframe
						width="100%"
						height="320px"
						src="//www.youtube.com/embed/${videoID}"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen />`;
                }
            }
            else {
                html = mediaType === 'audio' || contentType === 'video/ogg'
                    ? `<audio width="100%" controls><source src="${siteUrl}" type="${contentType}" /></audio>`
                    : `<video width="100%" controls><source src="${siteUrl}" type="${contentType}" /></video>`;
            }
        }
        return html ? this._domSanitizer.bypassSecurityTrustHtml(html) : undefined;
    }
}
MetaEmbedPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: MetaEmbedPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
MetaEmbedPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: MetaEmbedPipe, name: "metaEmbed" });
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Object)
], MetaEmbedPipe.prototype, "_render", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: MetaEmbedPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'metaEmbed' }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; }, propDecorators: { _render: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS1lbWJlZC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9jb3JlL3BpcGVzL21ldGEtZW1iZWQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFjdkMsTUFBTSxPQUFPLGFBQWE7SUFFekI7OztPQUdHO0lBQ0gsWUFBcUIsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBSSxDQUFDO0lBRXJEOzs7T0FHRztJQUNJLFNBQVMsQ0FBRSxJQUFnQjtRQUNqQyxJQUFLLENBQUMsSUFBSTtZQUFHLE9BQU87UUFFcEIsTUFBTSxPQUFPLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNqQyxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0MsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxNQUFNLFVBQVUsR0FBVyxDQUFDLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUVsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBRSxDQUFDO0lBQzlFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBRUssT0FBTyxDQUNkLE9BQWUsRUFBRSxRQUFnQixFQUFFLFdBQW1CLEVBQ3RELFNBQWlCLEVBQUUsVUFBa0I7UUFFckMsSUFBSSxJQUFJLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLFVBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFMUUsSUFBSyxTQUFTLENBQUMsTUFBTSxDQUFFLGdCQUFnQixDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUc7WUFDbEQsSUFBSyxRQUFRLEtBQUssU0FBUyxFQUFHO2dCQUM3QixNQUFNLFNBQVMsR0FBb0IsSUFBSSxlQUFlLENBQUUsT0FBTyxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO2dCQUNwRixNQUFNLE9BQU8sR0FBVyxTQUFTLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO2dCQUU3QyxJQUFLLE9BQU8sRUFBRztvQkFDZCxJQUFJLEdBQUc7OztxQ0FHeUIsT0FBTzs7O3lCQUduQixDQUFDO2lCQUNyQjthQUNEO2lCQUFNO2dCQUNOLElBQUksR0FBRyxTQUFTLEtBQUssT0FBTyxJQUFJLFdBQVcsS0FBSyxXQUFXO29CQUMxRCxDQUFDLENBQUMsNkNBQTZDLE9BQU8sV0FBVyxXQUFXLGNBQWM7b0JBQzFGLENBQUMsQ0FBQyw2Q0FBNkMsT0FBTyxXQUFXLFdBQVcsY0FBYyxDQUFDO2FBQzVGO1NBQ0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlFLENBQUM7OzBHQTdEVyxhQUFhO3dHQUFiLGFBQWE7QUFnQ3pCO0lBQUMsT0FBTyxFQUFFOzs7OzRDQTZCVDsyRkE3RFcsYUFBYTtrQkFEekIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7bUdBa0NsQixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTWVtb2l6ZSB9IGZyb20gJ2FuZ3VsYXItY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFFbWJlZCB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdHVybDogc3RyaW5nO1xuXHRzaXRlTmFtZTogc3RyaW5nO1xuXHRjb250ZW50VHlwZTogc3RyaW5nO1xuXHRtZWRpYVR5cGU6IHN0cmluZztcblx0aW1hZ2VzOiBzdHJpbmdbXTtcblx0ZmF2aWNvbnM6IHN0cmluZ1tdO1xufVxuXG5AUGlwZSh7IG5hbWU6ICdtZXRhRW1iZWQnIH0pXG5leHBvcnQgY2xhc3MgTWV0YUVtYmVkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtEb21TYW5pdGl6ZXJ9IF9kb21TYW5pdGl6ZXJcblx0ICovXG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIF9kb21TYW5pdGl6ZXI6IERvbVNhbml0aXplciApIHt9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SU1ldGFFbWJlZH0gbWV0YVxuXHQgKiBAcmV0dXJuIHtTYWZlSHRtbH1cblx0ICovXG5cdHB1YmxpYyB0cmFuc2Zvcm0oIG1ldGE6IElNZXRhRW1iZWQgKTogU2FmZUh0bWwge1xuXHRcdGlmICggIW1ldGEgKSByZXR1cm47XG5cblx0XHRjb25zdCBzaXRlVXJsOiBzdHJpbmcgPSBtZXRhLnVybDtcblx0XHRjb25zdCBzaXRlTmFtZTogc3RyaW5nID0gbWV0YS5zaXRlTmFtZTtcblx0XHRjb25zdCBjb250ZW50VHlwZTogc3RyaW5nID0gbWV0YS5jb250ZW50VHlwZTtcblx0XHRjb25zdCBtZWRpYVR5cGU6IHN0cmluZyA9IG1ldGEubWVkaWFUeXBlO1xuXHRcdGNvbnN0IG1lZGlhSW1hZ2U6IHN0cmluZyA9IF8uZmlyc3QoIG1ldGEuaW1hZ2VzICk7XG5cblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyKCBzaXRlVXJsLCBzaXRlTmFtZSwgY29udGVudFR5cGUsIG1lZGlhVHlwZSwgbWVkaWFJbWFnZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzaXRlVXJsXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzaXRlTmFtZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFR5cGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lZGlhVHlwZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVkaWFJbWFnZVxuXHQgKiBAcmV0dXJuIHtTYWZlSHRtbH1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHJpdmF0ZSBfcmVuZGVyKFxuXHRcdHNpdGVVcmw6IHN0cmluZywgc2l0ZU5hbWU6IHN0cmluZywgY29udGVudFR5cGU6IHN0cmluZyxcblx0XHRtZWRpYVR5cGU6IHN0cmluZywgbWVkaWFJbWFnZTogc3RyaW5nXG5cdCk6IFNhZmVIdG1sIHtcblx0XHRsZXQgaHRtbDogc3RyaW5nID0gbWVkaWFJbWFnZSA/IGA8aW1nIHNyYz1cIiR7bWVkaWFJbWFnZX1cIiAvPmAgOiB1bmRlZmluZWQ7XG5cblx0XHRpZiAoIG1lZGlhVHlwZS5zZWFyY2goIC9eKHZpZGVvfGF1ZGlvKS8gKSAhPT0gLTEgKSB7XG5cdFx0XHRpZiAoIHNpdGVOYW1lID09PSAnWW91VHViZScgKSB7XG5cdFx0XHRcdGNvbnN0IHVybFBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyggc2l0ZVVybC5zcGxpdCggJz8nIClbIDEgXSApO1xuXHRcdFx0XHRjb25zdCB2aWRlb0lEOiBzdHJpbmcgPSB1cmxQYXJhbXMuZ2V0KCAndicgKTtcblxuXHRcdFx0XHRpZiAoIHZpZGVvSUQgKSB7XG5cdFx0XHRcdFx0aHRtbCA9IGA8aWZyYW1lXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjEwMCVcIlxuXHRcdFx0XHRcdFx0aGVpZ2h0PVwiMzIwcHhcIlxuXHRcdFx0XHRcdFx0c3JjPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lEfVwiXG5cdFx0XHRcdFx0XHRmcmFtZWJvcmRlcj1cIjBcIlxuXHRcdFx0XHRcdFx0YWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG5cdFx0XHRcdFx0XHRhbGxvd2Z1bGxzY3JlZW4gLz5gO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRodG1sID0gbWVkaWFUeXBlID09PSAnYXVkaW8nIHx8IGNvbnRlbnRUeXBlID09PSAndmlkZW8vb2dnJ1xuXHRcdFx0XHRcdD8gYDxhdWRpbyB3aWR0aD1cIjEwMCVcIiBjb250cm9scz48c291cmNlIHNyYz1cIiR7c2l0ZVVybH1cIiB0eXBlPVwiJHtjb250ZW50VHlwZX1cIiAvPjwvYXVkaW8+YFxuXHRcdFx0XHRcdDogYDx2aWRlbyB3aWR0aD1cIjEwMCVcIiBjb250cm9scz48c291cmNlIHNyYz1cIiR7c2l0ZVVybH1cIiB0eXBlPVwiJHtjb250ZW50VHlwZX1cIiAvPjwvdmlkZW8+YDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaHRtbCA/IHRoaXMuX2RvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCggaHRtbCApIDogdW5kZWZpbmVkO1xuXHR9XG5cbn1cbiJdfQ==