var NgcAvatarComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, ElementRef, Input, Inject, ChangeDetectionStrategy, Optional, HostBinding } from '@angular/core';
import { Subject, merge, fromEvent, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import _ from 'lodash';
import { ContrastPipe, EmojiPipe, Memoize, DefaultValue, CoerceNumber, CoerceCssPixel, Unsubscriber, untilCmpDestroyed } from '@core';
import { NgcPageComponent } from '../ngc-page';
import { NgcMenuComponent } from '../ngc-menu';
import { NgcGridComponent } from '../ngc-grid';
import { NgcTabGroupComponent } from '../ngc-tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-lazyload-image";
import * as i3 from "../ngc-emoji-picker/emoji/ngc-emoji.component";
import * as i4 from "../ngc-page";
import * as i5 from "../ngc-grid";
import * as i6 from "../ngc-menu";
import * as i7 from "../ngc-tabs";
let NgcAvatarComponent = NgcAvatarComponent_1 = class NgcAvatarComponent {
    /**
     * @constructor
     * @param {NgcPageComponent} pageComp
     * @param {NgcGridComponent} gridComp
     * @param {NgcMenuComponent} menuComp
     * @param {NgcTabGroupComponent} tabGroupComp
     * @param {ElementRef} _elementRef
     */
    constructor(pageComp, gridComp, menuComp, tabGroupComp, _elementRef) {
        this.pageComp = pageComp;
        this.gridComp = gridComp;
        this.menuComp = menuComp;
        this.tabGroupComp = tabGroupComp;
        this._elementRef = _elementRef;
        this.size = 'small';
        this.characters = 2;
        this.lazy = true;
        this.avatar = { mode: 'auto', color: 'auto' };
    }
    get styleColor() { return this.avatar?.color; }
    get styleSize() { return this.size; }
    get styleLabelColor() { return this.parsedLabelColor; }
    get classAuto() { return this.avatar?.color === 'auto'; }
    /**
     * @param {string} label
     * @param {number} characters
     * @return {string}
     */
    static parseLabel(label = '', characters = 2) {
        if (!label?.length)
            return '?';
        label = _.trim(label);
        return label.search(' ') === -1
            ? label.substring(0, characters)
            : _.chain(label)
                .split(' ')
                .slice(0, characters)
                .map((item) => item.charAt(0))
                .join('')
                .value();
    }
    /**
     * @param {string} avatarColor
     * @return {string}
     */
    static parseLabelColor(avatarColor) {
        return avatarColor ? new ContrastPipe().transform(avatarColor) : 'unset';
    }
    /**
     * @param {string} label
     * @param {NgcIAvatar} avatar
     * @param {NgcIAvatarOptions} options
     * @return {string}
     */
    static parseAvatar(label, avatar, options) {
        const avatarMode = avatar?.mode || 'auto';
        const avatarColor = avatar?.color || 'auto';
        const avatarIcon = avatar?.icon;
        const avatarPhoto = avatar?.photo;
        label = NgcAvatarComponent_1.parseLabel(label, options?.characters);
        label = (avatarMode === 'icon' ? new EmojiPipe().transform(avatarIcon) : undefined) || label;
        const labelColor = options?.labelColor || NgcAvatarComponent_1.parseLabelColor(avatarColor);
        const size = options?.size || 'unset';
        const labelEl = `<div class="ngc-avatar__label">${label}</div>`;
        const imgEl = avatarPhoto && avatarMode === 'photo' ? `<img class="ngc-avatar__image" src="${avatarPhoto}" />` : '';
        const avatarClass = avatarColor !== 'auto' ? 'ngc-avatar' : 'ngc-avatar ngc-avatar--auto';
        return `
			<div
				class="${avatarClass}"
				style="--avatar-color: ${avatarColor}; --avatar-label-color: ${labelColor}; --avatar-size: ${size};">
				${labelEl}
				${imgEl}
			</div>
		`;
    }
    /**
     * @constructor
     */
    ngAfterViewInit() {
        this.size && this._elementRef.nativeElement.classList.add('ngc-avatar-' + this.size);
        this.scroll$ = merge(this.scrolling$, fromEvent(window, 'scroll'));
    }
    /**
     * @constructor
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (changes.label)
            this.parsedLabel = NgcAvatarComponent_1.parseLabel(this.label, this.characters);
        if (changes.avatar) {
            this.avatar = { ...this.avatar, mode: this.avatar?.mode || 'auto', color: this.avatar?.color || 'auto' };
            this.parsedLabelColor = this.labelColor || NgcAvatarComponent_1.parseLabelColor(this.avatar.color);
            this.isPhotoLoaded$ = this._checkPhotoLoaded(this.avatar.photo);
        }
    }
    /**
     * @param {NgcIAvatarMode} mode
     * @return {boolean}
     */
    isAutoMode(mode) {
        return mode === 'auto';
    }
    /**
     * @param {NgcIAvatarMode} mode
     * @return {boolean}
     */
    isPhotoMode(mode) {
        return mode === 'photo';
    }
    /**
     * @param {NgcIAvatarMode} mode
     * @return {boolean}
     */
    isIconMode(mode) {
        return mode === 'icon';
    }
    /**
     * @param {NgcIAvatarMode} mode
     * @return {boolean}
     */
    isTextMode(mode) {
        return mode === 'text';
    }
    /**
     * @param {string} photo
     * @return {Observable}
     */
    _checkPhotoLoaded(photo) {
        return new Observable((observer) => {
            if (!photo) {
                observer.next(false);
                return;
            }
            if (/^(data:image)/.test(photo)) {
                observer.next(true);
                return;
            }
            const img = document.createElement('img');
            img.src = photo;
            img.onload = () => observer.next(img.complete || img.naturalWidth > 0);
        }).pipe(takeWhile((loaded) => loaded), untilCmpDestroyed(this));
    }
};
NgcAvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAvatarComponent, deps: [{ token: NgcPageComponent, optional: true }, { token: NgcGridComponent, optional: true }, { token: NgcMenuComponent, optional: true }, { token: NgcTabGroupComponent, optional: true }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NgcAvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcAvatarComponent, selector: "ngc-avatar", inputs: { label: "label", labelColor: "labelColor", size: "size", defaultPhoto: "defaultPhoto", errorPhoto: "errorPhoto", characters: "characters", lazy: "lazy", avatar: "avatar", scrolling$: "scrolling$" }, host: { properties: { "style.--avatar-color": "this.styleColor", "style.--avatar-size": "this.styleSize", "style.--avatar-label-color": "this.styleLabelColor", "class.ngc-avatar--auto": "this.classAuto" }, classAttribute: "ngc-avatar" }, providers: [NgcPageComponent, NgcMenuComponent, NgcTabGroupComponent, NgcGridComponent], usesOnChanges: true, ngImport: i0, template: "<div class=\"ngc-avatar__label\" #ref><ng-content></ng-content></div>\n\n<ng-container *ngIf=\"!ref?.childNodes?.length\">\n\n\t<ng-template #labelTemp>\n\t\t<div class=\"ngc-avatar__label\">\n\t\t\t<ng-container *ngIf=\"isIconMode(avatar?.mode) && avatar?.icon; else elseBlock\">\n\t\t\t\t<ngc-emoji [emoji]=\"avatar?.icon\"></ngc-emoji>\n\t\t\t</ng-container>\n\n\t\t\t<ng-template #elseBlock>\n\t\t\t\t{{ parsedLabel }}\n\t\t\t</ng-template>\n\t\t</div>\n\t</ng-template>\n\n\t<ng-container\n\t\t*ngIf=\"(isAutoMode(avatar?.mode) || isPhotoMode(avatar?.mode)) && (isPhotoLoaded$ | async); else labelTemp\">\n\t\t<ng-container *ngIf=\"lazy; else elseBlock\">\n\t\t\t<img class=\"ngc-avatar__image\" [lazyLoad]=\"avatar?.photo\"\n\t\t\t\t[defaultImage]=\"defaultPhoto || 'assets/images/loading.gif'\" [errorImage]=\"errorPhoto || avatar?.photo\"\n\t\t\t\t[customObservable]=\"scroll$\" />\n\t\t</ng-container>\n\n\t\t<ng-template #elseBlock>\n\t\t\t<img class=\"ngc-avatar__image\" [src]=\"avatar?.photo\" />\n\t\t</ng-template>\n\t</ng-container>\n\n</ng-container>", styles: [".ngc-avatar{display:flex;text-align:center;align-items:center;justify-content:center;color:var(--avatar-label-color, var(--ngc-color-neutral-white, #fff));height:var(--avatar-size);min-height:var(--avatar-size);max-height:var(--avatar-size);width:var(--size);min-width:var(--avatar-size);max-width:var(--avatar-size);font-size:calc(var(--avatar-size) / 2.5);border-radius:50%;font-weight:var(--ngc-font-weight-semibold, 600);overflow:hidden;position:relative}.ngc-avatar:before{content:\"\";position:absolute;inset:.5px;background-color:var(--avatar-color, var(--ngc-color-neutral-black, #0a0a0a));border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-radius:50%;z-index:0}.ngc-avatar.ngc-avatar--auto{color:#fff}.ngc-avatar.ngc-avatar--auto:before{background-image:url(/assets/images/bg-gradient.png);background-position:center;background-size:cover;background-repeat:no-repeat}.ngc-avatar.ngc-avatar-xlarge{height:72px;min-height:72px;max-height:72px;width:72px;min-width:72px;max-width:72px;font-size:28px}.ngc-avatar.ngc-avatar-large{height:56px;min-height:56px;max-height:56px;width:56px;min-width:56px;max-width:56px;font-size:22.4px}.ngc-avatar.ngc-avatar-medium{height:40px;min-height:40px;max-height:40px;width:40px;min-width:40px;max-width:40px;font-size:16px}.ngc-avatar.ngc-avatar-small{height:32px;min-height:32px;max-height:32px;width:32px;min-width:32px;max-width:32px;font-size:12.8px}.ngc-avatar .ngc-avatar__label{position:relative;z-index:1}.ngc-avatar .ngc-avatar__image{position:absolute;inset:.5px;background-color:var(--ngc-color-neutral-white, #fff);height:calc(100% - .5px);width:calc(100% - .5px);border-radius:50%;z-index:2}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.LazyLoadImageDirective, selector: "[lazyLoad]", inputs: ["lazyLoad", "defaultImage", "errorImage", "scrollTarget", "customObservable", "offset", "useSrcset", "decode", "debug"], outputs: ["onStateChange"] }, { kind: "component", type: i3.NgcEmojiComponent, selector: "ngc-emoji, [ngcEmoji]", inputs: ["emoji", "size"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    CoerceCssPixel(),
    __metadata("design:type", String)
], NgcAvatarComponent.prototype, "size", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcAvatarComponent.prototype, "characters", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", Boolean)
], NgcAvatarComponent.prototype, "lazy", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", Object)
], NgcAvatarComponent.prototype, "avatar", void 0);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], NgcAvatarComponent.prototype, "isAutoMode", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], NgcAvatarComponent.prototype, "isPhotoMode", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], NgcAvatarComponent.prototype, "isIconMode", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], NgcAvatarComponent.prototype, "isTextMode", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], NgcAvatarComponent.prototype, "_checkPhotoLoaded", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", String)
], NgcAvatarComponent, "parseLabel", null);
__decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], NgcAvatarComponent, "parseLabelColor", null);
NgcAvatarComponent = NgcAvatarComponent_1 = __decorate([
    Unsubscriber(),
    __metadata("design:paramtypes", [NgcPageComponent,
        NgcGridComponent,
        NgcMenuComponent,
        NgcTabGroupComponent,
        ElementRef])
], NgcAvatarComponent);
export { NgcAvatarComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-avatar', host: { class: 'ngc-avatar' }, providers: [NgcPageComponent, NgcMenuComponent, NgcTabGroupComponent, NgcGridComponent], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-avatar__label\" #ref><ng-content></ng-content></div>\n\n<ng-container *ngIf=\"!ref?.childNodes?.length\">\n\n\t<ng-template #labelTemp>\n\t\t<div class=\"ngc-avatar__label\">\n\t\t\t<ng-container *ngIf=\"isIconMode(avatar?.mode) && avatar?.icon; else elseBlock\">\n\t\t\t\t<ngc-emoji [emoji]=\"avatar?.icon\"></ngc-emoji>\n\t\t\t</ng-container>\n\n\t\t\t<ng-template #elseBlock>\n\t\t\t\t{{ parsedLabel }}\n\t\t\t</ng-template>\n\t\t</div>\n\t</ng-template>\n\n\t<ng-container\n\t\t*ngIf=\"(isAutoMode(avatar?.mode) || isPhotoMode(avatar?.mode)) && (isPhotoLoaded$ | async); else labelTemp\">\n\t\t<ng-container *ngIf=\"lazy; else elseBlock\">\n\t\t\t<img class=\"ngc-avatar__image\" [lazyLoad]=\"avatar?.photo\"\n\t\t\t\t[defaultImage]=\"defaultPhoto || 'assets/images/loading.gif'\" [errorImage]=\"errorPhoto || avatar?.photo\"\n\t\t\t\t[customObservable]=\"scroll$\" />\n\t\t</ng-container>\n\n\t\t<ng-template #elseBlock>\n\t\t\t<img class=\"ngc-avatar__image\" [src]=\"avatar?.photo\" />\n\t\t</ng-template>\n\t</ng-container>\n\n</ng-container>", styles: [".ngc-avatar{display:flex;text-align:center;align-items:center;justify-content:center;color:var(--avatar-label-color, var(--ngc-color-neutral-white, #fff));height:var(--avatar-size);min-height:var(--avatar-size);max-height:var(--avatar-size);width:var(--size);min-width:var(--avatar-size);max-width:var(--avatar-size);font-size:calc(var(--avatar-size) / 2.5);border-radius:50%;font-weight:var(--ngc-font-weight-semibold, 600);overflow:hidden;position:relative}.ngc-avatar:before{content:\"\";position:absolute;inset:.5px;background-color:var(--avatar-color, var(--ngc-color-neutral-black, #0a0a0a));border:1px solid var(--ngc-color-neutral-border-default, #e4e4e6);border-radius:50%;z-index:0}.ngc-avatar.ngc-avatar--auto{color:#fff}.ngc-avatar.ngc-avatar--auto:before{background-image:url(/assets/images/bg-gradient.png);background-position:center;background-size:cover;background-repeat:no-repeat}.ngc-avatar.ngc-avatar-xlarge{height:72px;min-height:72px;max-height:72px;width:72px;min-width:72px;max-width:72px;font-size:28px}.ngc-avatar.ngc-avatar-large{height:56px;min-height:56px;max-height:56px;width:56px;min-width:56px;max-width:56px;font-size:22.4px}.ngc-avatar.ngc-avatar-medium{height:40px;min-height:40px;max-height:40px;width:40px;min-width:40px;max-width:40px;font-size:16px}.ngc-avatar.ngc-avatar-small{height:32px;min-height:32px;max-height:32px;width:32px;min-width:32px;max-width:32px;font-size:12.8px}.ngc-avatar .ngc-avatar__label{position:relative;z-index:1}.ngc-avatar .ngc-avatar__image{position:absolute;inset:.5px;background-color:var(--ngc-color-neutral-white, #fff);height:calc(100% - .5px);width:calc(100% - .5px);border-radius:50%;z-index:2}\n"] }]
        }], ctorParameters: function () { return [{ type: i4.NgcPageComponent, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NgcPageComponent]
                }] }, { type: i5.NgcGridComponent, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NgcGridComponent]
                }] }, { type: i6.NgcMenuComponent, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NgcMenuComponent]
                }] }, { type: i7.NgcTabGroupComponent, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NgcTabGroupComponent]
                }] }, { type: i0.ElementRef }]; }, propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--avatar-color']
            }], styleSize: [{
                type: HostBinding,
                args: ['style.--avatar-size']
            }], styleLabelColor: [{
                type: HostBinding,
                args: ['style.--avatar-label-color']
            }], classAuto: [{
                type: HostBinding,
                args: ['class.ngc-avatar--auto']
            }], label: [{
                type: Input
            }], labelColor: [{
                type: Input
            }], size: [{
                type: Input
            }], defaultPhoto: [{
                type: Input
            }], errorPhoto: [{
                type: Input
            }], characters: [{
                type: Input
            }], lazy: [{
                type: Input
            }], avatar: [{
                type: Input
            }], scrolling$: [{
                type: Input
            }], isAutoMode: [], isPhotoMode: [], isIconMode: [], isTextMode: [], _checkPhotoLoaded: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWF2YXRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1hdmF0YXIvbmdjLWF2YXRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1hdmF0YXIvbmdjLWF2YXRhci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQ3hDLEtBQUssRUFDTCxNQUFNLEVBQWlCLHVCQUF1QixFQUM5QyxRQUFRLEVBQUUsV0FBVyxFQUNyQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ04sT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQ3pCLFVBQVUsRUFDVixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUNOLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUNoQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFDMUMsWUFBWSxFQUFFLGlCQUFpQixFQUMvQixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7O0FBNEI1QyxJQUFNLGtCQUFrQiwwQkFBeEIsTUFBTSxrQkFBa0I7SUE2QjlCOzs7Ozs7O09BT0c7SUFDSCxZQUNnRCxRQUEwQixFQUMxQixRQUEwQixFQUMx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Q0F3TTlCO1NBeE1ZLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQVQ5QixTQUFTOytCQUNHLFlBQVksUUFHZixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsYUFDbkIsQ0FBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBRSxpQkFDM0UsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs7MEJBd0M5QyxRQUFROzswQkFBSSxNQUFNOzJCQUFFLGdCQUFnQjs7MEJBQ3BDLFFBQVE7OzBCQUFJLE1BQU07MkJBQUUsZ0JBQWdCOzswQkFDcEMsUUFBUTs7MEJBQUksTUFBTTsyQkFBRSxnQkFBZ0I7OzBCQUNwQyxRQUFROzswQkFBSSxNQUFNOzJCQUFFLG9CQUFvQjtxRUF0Q3RDLFVBQVU7c0JBRGIsV0FBVzt1QkFBRSxzQkFBc0I7Z0JBSWhDLFNBQVM7c0JBRFosV0FBVzt1QkFBRSxxQkFBcUI7Z0JBSS9CLGVBQWU7c0JBRGxCLFdBQVc7dUJBQUUsNEJBQTRCO2dCQUl0QyxTQUFTO3NCQURaLFdBQVc7dUJBQUUsd0JBQXdCO2dCQUd0QixLQUFLO3NCQUFwQixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQzRDLElBQUk7c0JBQXJELEtBQUs7Z0JBQ1UsWUFBWTtzQkFBM0IsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUMwQyxVQUFVO3NCQUF6RCxLQUFLO2dCQUMwQixJQUFJO3NCQUFuQyxLQUFLO2dCQUMwQixNQUFNO3NCQUFyQyxLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBdUhDLFVBQVUsTUFTVixXQUFXLE1BU1gsVUFBVSxNQVNWLFVBQVUsTUFTVCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLFxuXHRJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLFxuXHRJbmplY3QsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRPcHRpb25hbCwgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRTdWJqZWN0LCBtZXJnZSwgZnJvbUV2ZW50LFxuXHRPYnNlcnZhYmxlLCBPYnNlcnZlclxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7XG5cdENvbnRyYXN0UGlwZSwgRW1vamlQaXBlLCBNZW1vaXplLFxuXHREZWZhdWx0VmFsdWUsIENvZXJjZU51bWJlciwgQ29lcmNlQ3NzUGl4ZWwsXG5cdFVuc3Vic2NyaWJlciwgdW50aWxDbXBEZXN0cm95ZWRcbn0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgTmdjUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL25nYy1wYWdlJztcbmltcG9ydCB7IE5nY01lbnVDb21wb25lbnQgfSBmcm9tICcuLi9uZ2MtbWVudSc7XG5pbXBvcnQgeyBOZ2NHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vbmdjLWdyaWQnO1xuaW1wb3J0IHsgTmdjVGFiR3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9uZ2MtdGFicyc7XG5cbmV4cG9ydCB0eXBlIE5nY0lBdmF0YXJNb2RlID0gJ2F1dG8nIHwgJ3RleHQnIHwgJ3Bob3RvJyB8ICdpY29uJztcbmV4cG9ydCB0eXBlIE5nY0lBdmF0YXJTaXplID0gJ3hsYXJnZScgfCAnbGFyZ2UnIHwgJ21lZGl1bScgfCAnc21hbGwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nY0lBdmF0YXJPcHRpb25zIHtcblx0Y2hhcmFjdGVycz86IG51bWJlcjtcblx0bGFiZWxDb2xvcj86IHN0cmluZztcblx0c2l6ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ2NJQXZhdGFyIHtcblx0cGhvdG8/OiBzdHJpbmc7XG5cdGNvbG9yPzogc3RyaW5nO1xuXHRpY29uPzogc3RyaW5nO1xuXHRtb2RlPzogTmdjSUF2YXRhck1vZGU7XG59XG5cbkBVbnN1YnNjcmliZXIoKVxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1hdmF0YXInLFxuXHR0ZW1wbGF0ZVVybFx0XHQ6ICcuL25nYy1hdmF0YXIuaHRtbCcsXG5cdHN0eWxlVXJsc1x0XHQ6IFsgJy4vbmdjLWF2YXRhci5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7IGNsYXNzOiAnbmdjLWF2YXRhcicgfSxcblx0cHJvdmlkZXJzXHRcdDogWyBOZ2NQYWdlQ29tcG9uZW50LCBOZ2NNZW51Q29tcG9uZW50LCBOZ2NUYWJHcm91cENvbXBvbmVudCwgTmdjR3JpZENvbXBvbmVudCBdLFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvblx0OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nY0F2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1hdmF0YXItY29sb3InIClcblx0Z2V0IHN0eWxlQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYXZhdGFyPy5jb2xvcjsgfVxuXG5cdEBIb3N0QmluZGluZyggJ3N0eWxlLi0tYXZhdGFyLXNpemUnIClcblx0Z2V0IHN0eWxlU2l6ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zaXplOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnc3R5bGUuLS1hdmF0YXItbGFiZWwtY29sb3InIClcblx0Z2V0IHN0eWxlTGFiZWxDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5wYXJzZWRMYWJlbENvbG9yOyB9XG5cblx0QEhvc3RCaW5kaW5nKCAnY2xhc3MubmdjLWF2YXRhci0tYXV0bycgKVxuXHRnZXQgY2xhc3NBdXRvKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5hdmF0YXI/LmNvbG9yID09PSAnYXV0byc7IH1cblxuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGxhYmVsQ29sb3I6IHN0cmluZztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VDc3NQaXhlbCgpIHB1YmxpYyBzaXplOiBzdHJpbmcgfCBOZ2NJQXZhdGFyU2l6ZSA9ICdzbWFsbCc7XG5cdEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0UGhvdG86IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGVycm9yUGhvdG86IHN0cmluZztcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIEBDb2VyY2VOdW1iZXIoKSBwdWJsaWMgY2hhcmFjdGVyczogbnVtYmVyID0gMjtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBsYXp5OiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgQERlZmF1bHRWYWx1ZSgpIHB1YmxpYyBhdmF0YXI6IE5nY0lBdmF0YXIgPSB7IG1vZGU6ICdhdXRvJywgY29sb3I6ICdhdXRvJyB9O1xuXHRASW5wdXQoKSBwdWJsaWMgc2Nyb2xsaW5nJDogU3ViamVjdDxhbnk+O1xuXG5cdHB1YmxpYyBzY3JvbGwkOiBPYnNlcnZhYmxlPGFueT47XG5cdHB1YmxpYyBwYXJzZWRMYWJlbDogc3RyaW5nO1xuXHRwdWJsaWMgcGFyc2VkTGFiZWxDb2xvcjogc3RyaW5nO1xuXHRwdWJsaWMgaXNQaG90b0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge05nY1BhZ2VDb21wb25lbnR9IHBhZ2VDb21wXG5cdCAqIEBwYXJhbSB7TmdjR3JpZENvbXBvbmVudH0gZ3JpZENvbXBcblx0ICogQHBhcmFtIHtOZ2NNZW51Q29tcG9uZW50fSBtZW51Q29tcFxuXHQgKiBAcGFyYW0ge05nY1RhYkdyb3VwQ29tcG9uZW50fSB0YWJHcm91cENvbXBcblx0ICogQHBhcmFtIHtFbGVtZW50UmVmfSBfZWxlbWVudFJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IoXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggTmdjUGFnZUNvbXBvbmVudCApIHB1YmxpYyBwYWdlQ29tcDogTmdjUGFnZUNvbXBvbmVudCxcblx0XHRAT3B0aW9uYWwoKSBASW5qZWN0KCBOZ2NHcmlkQ29tcG9uZW50ICkgcHVibGljIGdyaWRDb21wOiBOZ2NHcmlkQ29tcG9uZW50LFxuXHRcdEBPcHRpb25hbCgpIEBJbmplY3QoIE5nY01lbnVDb21wb25lbnQgKSBwdWJsaWMgbWVudUNvbXA6IE5nY01lbnVDb21wb25lbnQsXG5cdFx0QE9wdGlvbmFsKCkgQEluamVjdCggTmdjVGFiR3JvdXBDb21wb25lbnQgKSBwdWJsaWMgdGFiR3JvdXBDb21wOiBOZ2NUYWJHcm91cENvbXBvbmVudCxcblx0XHRwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXG5cdCkge31cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjaGFyYWN0ZXJzXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIHN0YXRpYyBwYXJzZUxhYmVsKCBsYWJlbDogc3RyaW5nID0gJycsIGNoYXJhY3RlcnM6IG51bWJlciA9IDIgKTogc3RyaW5nIHtcblx0XHRpZiAoICFsYWJlbD8ubGVuZ3RoICkgcmV0dXJuICc/JztcblxuXHRcdGxhYmVsID0gXy50cmltKCBsYWJlbCApO1xuXG5cdFx0cmV0dXJuIGxhYmVsLnNlYXJjaCggJyAnICkgPT09IC0xXG5cdFx0XHQ/IGxhYmVsLnN1YnN0cmluZyggMCwgY2hhcmFjdGVycyApXG5cdFx0XHQ6IF8uY2hhaW4oIGxhYmVsIClcblx0XHRcdC5zcGxpdCggJyAnIClcblx0XHRcdC5zbGljZSggMCwgY2hhcmFjdGVycyApXG5cdFx0XHQubWFwKCAoIGl0ZW06IHN0cmluZyApID0+IGl0ZW0uY2hhckF0KCAwICkgKVxuXHRcdFx0LmpvaW4oICcnIClcblx0XHRcdC52YWx1ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhdmF0YXJDb2xvclxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRATWVtb2l6ZSgpXG5cdHB1YmxpYyBzdGF0aWMgcGFyc2VMYWJlbENvbG9yKCBhdmF0YXJDb2xvcjogc3RyaW5nICk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGF2YXRhckNvbG9yID8gbmV3IENvbnRyYXN0UGlwZSgpLnRyYW5zZm9ybSggYXZhdGFyQ29sb3IgKSA6ICd1bnNldCc7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG5cdCAqIEBwYXJhbSB7TmdjSUF2YXRhcn0gYXZhdGFyXG5cdCAqIEBwYXJhbSB7TmdjSUF2YXRhck9wdGlvbnN9IG9wdGlvbnNcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBwYXJzZUF2YXRhciggbGFiZWw6IHN0cmluZywgYXZhdGFyOiBOZ2NJQXZhdGFyLCBvcHRpb25zPzogTmdjSUF2YXRhck9wdGlvbnMgKTogc3RyaW5nIHtcblx0XHRjb25zdCBhdmF0YXJNb2RlOiBzdHJpbmcgPSBhdmF0YXI/Lm1vZGUgfHwgJ2F1dG8nO1xuXHRcdGNvbnN0IGF2YXRhckNvbG9yOiBzdHJpbmcgPSBhdmF0YXI/LmNvbG9yIHx8ICdhdXRvJztcblx0XHRjb25zdCBhdmF0YXJJY29uOiBzdHJpbmcgPSBhdmF0YXI/Lmljb247XG5cdFx0Y29uc3QgYXZhdGFyUGhvdG86IHN0cmluZyA9IGF2YXRhcj8ucGhvdG87XG5cblx0XHRsYWJlbCA9IE5nY0F2YXRhckNvbXBvbmVudC5wYXJzZUxhYmVsKCBsYWJlbCwgb3B0aW9ucz8uY2hhcmFjdGVycyApO1xuXHRcdGxhYmVsID0gKCBhdmF0YXJNb2RlID09PSAnaWNvbicgPyBuZXcgRW1vamlQaXBlKCkudHJhbnNmb3JtKCBhdmF0YXJJY29uICkgOiB1bmRlZmluZWQgKSB8fCBsYWJlbDtcblxuXHRcdGNvbnN0IGxhYmVsQ29sb3I6IHN0cmluZyA9IG9wdGlvbnM/LmxhYmVsQ29sb3IgfHwgTmdjQXZhdGFyQ29tcG9uZW50LnBhcnNlTGFiZWxDb2xvciggYXZhdGFyQ29sb3IgKTtcblx0XHRjb25zdCBzaXplOiBzdHJpbmcgPSBvcHRpb25zPy5zaXplIHx8ICd1bnNldCc7XG5cdFx0Y29uc3QgbGFiZWxFbDogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJuZ2MtYXZhdGFyX19sYWJlbFwiPiR7bGFiZWx9PC9kaXY+YDtcblx0XHRjb25zdCBpbWdFbDogc3RyaW5nID0gYXZhdGFyUGhvdG8gJiYgYXZhdGFyTW9kZSA9PT0gJ3Bob3RvJyA/IGA8aW1nIGNsYXNzPVwibmdjLWF2YXRhcl9faW1hZ2VcIiBzcmM9XCIke2F2YXRhclBob3RvfVwiIC8+YCA6ICcnO1xuXHRcdGNvbnN0IGF2YXRhckNsYXNzOiBzdHJpbmcgPSBhdmF0YXJDb2xvciAhPT0gJ2F1dG8nID8gJ25nYy1hdmF0YXInIDogJ25nYy1hdmF0YXIgbmdjLWF2YXRhci0tYXV0byc7XG5cblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzcz1cIiR7YXZhdGFyQ2xhc3N9XCJcblx0XHRcdFx0c3R5bGU9XCItLWF2YXRhci1jb2xvcjogJHthdmF0YXJDb2xvcn07IC0tYXZhdGFyLWxhYmVsLWNvbG9yOiAke2xhYmVsQ29sb3J9OyAtLWF2YXRhci1zaXplOiAke3NpemV9O1wiPlxuXHRcdFx0XHQke2xhYmVsRWx9XG5cdFx0XHRcdCR7aW1nRWx9XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuc2l6ZSAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ25nYy1hdmF0YXItJyArIHRoaXMuc2l6ZSApO1xuXG5cdFx0dGhpcy5zY3JvbGwkID0gbWVyZ2UoXG5cdFx0XHR0aGlzLnNjcm9sbGluZyQsXG5cdFx0XHRmcm9tRXZlbnQoIHdpbmRvdywgJ3Njcm9sbCcgKSxcblx0XHRcdC8vIGZyb21FdmVudCggdGhpcy5tZW51Q29tcD8uc2Nyb2xsQmFyPy5lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJyApLFxuXHRcdFx0Ly8gZnJvbUV2ZW50KCB0aGlzLnRhYkdyb3VwQ29tcD8uc2Nyb2xsQmFyPy5lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJyApLFxuXHRcdFx0Ly8gZnJvbUV2ZW50KCB0aGlzLmdyaWRDb21wPy5zY3JvbGxCYXI/LmVsZW1lbnRSZWY/Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnICksXG5cdFx0XHQvLyBmcm9tRXZlbnQoIHRoaXMucGFnZUNvbXA/LnNjcm9sbEJhcj8uZWxlbWVudFJlZj8ubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcgKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuXHQgKi9cblx0bmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0aWYgKCBjaGFuZ2VzLmxhYmVsICkgdGhpcy5wYXJzZWRMYWJlbCA9IE5nY0F2YXRhckNvbXBvbmVudC5wYXJzZUxhYmVsKCB0aGlzLmxhYmVsLCB0aGlzLmNoYXJhY3RlcnMgKTtcblxuXHRcdGlmICggY2hhbmdlcy5hdmF0YXIgKSB7XG5cdFx0XHR0aGlzLmF2YXRhciA9IHsgLi4udGhpcy5hdmF0YXIsIG1vZGU6IHRoaXMuYXZhdGFyPy5tb2RlIHx8ICdhdXRvJywgY29sb3I6IHRoaXMuYXZhdGFyPy5jb2xvciB8fCAnYXV0bycgfTtcblx0XHRcdHRoaXMucGFyc2VkTGFiZWxDb2xvciA9IHRoaXMubGFiZWxDb2xvciB8fCBOZ2NBdmF0YXJDb21wb25lbnQucGFyc2VMYWJlbENvbG9yKCB0aGlzLmF2YXRhci5jb2xvciApO1xuXHRcdFx0dGhpcy5pc1Bob3RvTG9hZGVkJCA9IHRoaXMuX2NoZWNrUGhvdG9Mb2FkZWQoIHRoaXMuYXZhdGFyLnBob3RvICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSUF2YXRhck1vZGV9IG1vZGVcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIGlzQXV0b01vZGUoIG1vZGU6IE5nY0lBdmF0YXJNb2RlICk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBtb2RlID09PSAnYXV0byc7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJQXZhdGFyTW9kZX0gbW9kZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgaXNQaG90b01vZGUoIG1vZGU6IE5nY0lBdmF0YXJNb2RlICk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBtb2RlID09PSAncGhvdG8nO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TmdjSUF2YXRhck1vZGV9IG1vZGVcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHVibGljIGlzSWNvbk1vZGUoIG1vZGU6IE5nY0lBdmF0YXJNb2RlICk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBtb2RlID09PSAnaWNvbic7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtOZ2NJQXZhdGFyTW9kZX0gbW9kZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0QE1lbW9pemUoKVxuXHRwdWJsaWMgaXNUZXh0TW9kZSggbW9kZTogTmdjSUF2YXRhck1vZGUgKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG1vZGUgPT09ICd0ZXh0Jztcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGhvdG9cblx0ICogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdEBNZW1vaXplKClcblx0cHJpdmF0ZSBfY2hlY2tQaG90b0xvYWRlZCggcGhvdG86IHN0cmluZyApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoICggb2JzZXJ2ZXI6IE9ic2VydmVyPGJvb2xlYW4+ICkgPT4ge1xuXHRcdFx0aWYgKCAhcGhvdG8gKSB7XG5cdFx0XHRcdG9ic2VydmVyLm5leHQoIGZhbHNlICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAvXihkYXRhOmltYWdlKS8udGVzdCggcGhvdG8gKSApIHtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dCggdHJ1ZSApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGltZzogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbWcnICk7XG5cblx0XHRcdGltZy5zcmMgPSBwaG90bztcblxuXHRcdFx0aW1nLm9ubG9hZCA9ICgpID0+IG9ic2VydmVyLm5leHQoIGltZy5jb21wbGV0ZSB8fCBpbWcubmF0dXJhbFdpZHRoID4gMCApO1xuXHRcdH0gKS5waXBlKFxuXHRcdFx0dGFrZVdoaWxlKCAoIGxvYWRlZDogYm9vbGVhbiApID0+IGxvYWRlZCApLFxuXHRcdFx0dW50aWxDbXBEZXN0cm95ZWQoIHRoaXMgKVxuXHRcdCk7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm5nYy1hdmF0YXJfX2xhYmVsXCIgI3JlZj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVmPy5jaGlsZE5vZGVzPy5sZW5ndGhcIj5cblxuXHQ8bmctdGVtcGxhdGUgI2xhYmVsVGVtcD5cblx0XHQ8ZGl2IGNsYXNzPVwibmdjLWF2YXRhcl9fbGFiZWxcIj5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0ljb25Nb2RlKGF2YXRhcj8ubW9kZSkgJiYgYXZhdGFyPy5pY29uOyBlbHNlIGVsc2VCbG9ja1wiPlxuXHRcdFx0XHQ8bmdjLWVtb2ppIFtlbW9qaV09XCJhdmF0YXI/Lmljb25cIj48L25nYy1lbW9qaT5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cblx0XHRcdFx0e3sgcGFyc2VkTGFiZWwgfX1cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0PC9kaXY+XG5cdDwvbmctdGVtcGxhdGU+XG5cblx0PG5nLWNvbnRhaW5lclxuXHRcdCpuZ0lmPVwiKGlzQXV0b01vZGUoYXZhdGFyPy5tb2RlKSB8fCBpc1Bob3RvTW9kZShhdmF0YXI/Lm1vZGUpKSAmJiAoaXNQaG90b0xvYWRlZCQgfCBhc3luYyk7IGVsc2UgbGFiZWxUZW1wXCI+XG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImxhenk7IGVsc2UgZWxzZUJsb2NrXCI+XG5cdFx0XHQ8aW1nIGNsYXNzPVwibmdjLWF2YXRhcl9faW1hZ2VcIiBbbGF6eUxvYWRdPVwiYXZhdGFyPy5waG90b1wiXG5cdFx0XHRcdFtkZWZhdWx0SW1hZ2VdPVwiZGVmYXVsdFBob3RvIHx8ICdhc3NldHMvaW1hZ2VzL2xvYWRpbmcuZ2lmJ1wiIFtlcnJvckltYWdlXT1cImVycm9yUGhvdG8gfHwgYXZhdGFyPy5waG90b1wiXG5cdFx0XHRcdFtjdXN0b21PYnNlcnZhYmxlXT1cInNjcm9sbCRcIiAvPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG5cdFx0XHQ8aW1nIGNsYXNzPVwibmdjLWF2YXRhcl9faW1hZ2VcIiBbc3JjXT1cImF2YXRhcj8ucGhvdG9cIiAvPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdDwvbmctY29udGFpbmVyPlxuXG48L25nLWNvbnRhaW5lcj4iXX0=