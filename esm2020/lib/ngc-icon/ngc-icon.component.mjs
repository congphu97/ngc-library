import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgcIconComponent {
    constructor() { }
    get styleColor() { return this.color; }
    get styleFontSize() { return this.size; }
    get styleLineHeight() { return this.size; }
    get isIonic() {
        return this.name && (this.name.endsWith('-outline') ||
            this.name.endsWith('-sharp') ||
            this.name.endsWith('-fill') ||
            this.name.startsWith('logo-'));
    }
    ngOnInit() { }
}
NgcIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcIconComponent, selector: "ngc-icon", inputs: { name: "name", color: "color", size: "size" }, host: { properties: { "style.--icon-color": "this.styleColor", "style.--icon-font-size": "this.styleFontSize", "style.--icon-line-height": "this.styleLineHeight" } }, ngImport: i0, template: "<ng-container *ngIf=\"isIonic; else icomoonBlock\">\n  <ion-icon [name]=\"name\"></ion-icon>\n</ng-container>\n<ng-template #icomoonBlock>\n  <!-- Icomoon icon font (local) -->\n  <i [ngClass]='\"icon-\" + name'></i>\n</ng-template>", styles: ["ngc-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--icon-color, inherit);font-size:var(--icon-font-size, inherit);line-height:var(--icon-line-height, inherit)}ngc-icon i,ngc-icon ion-icon{font-size:inherit;line-height:inherit;color:inherit}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-icon', template: "<ng-container *ngIf=\"isIonic; else icomoonBlock\">\n  <ion-icon [name]=\"name\"></ion-icon>\n</ng-container>\n<ng-template #icomoonBlock>\n  <!-- Icomoon icon font (local) -->\n  <i [ngClass]='\"icon-\" + name'></i>\n</ng-template>", styles: ["ngc-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--icon-color, inherit);font-size:var(--icon-font-size, inherit);line-height:var(--icon-line-height, inherit)}ngc-icon i,ngc-icon ion-icon{font-size:inherit;line-height:inherit;color:inherit}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { styleColor: [{
                type: HostBinding,
                args: ['style.--icon-color']
            }], styleFontSize: [{
                type: HostBinding,
                args: ['style.--icon-font-size']
            }], styleLineHeight: [{
                type: HostBinding,
                args: ['style.--icon-line-height']
            }], name: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtaWNvbi9uZ2MtaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1pY29uL25nYy1pY29uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRdEUsTUFBTSxPQUFPLGdCQUFnQjtJQXVCekIsZ0JBQWdCLENBQUM7SUF0QmpCLElBQ0MsVUFBVSxLQUFhLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFL0MsSUFDSSxhQUFhLEtBQWEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRCxJQUNJLGVBQWUsS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBTW5ELElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxDQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FDN0IsQ0FBQztJQUNILENBQUM7SUFJRSxRQUFRLEtBQUssQ0FBQzs7NkdBekJMLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLCtRQ1I3QiwwT0FNYzsyRkRFRCxnQkFBZ0I7a0JBTjVCLFNBQVM7K0JBQ0ksVUFBVTswRUFPbkIsVUFBVTtzQkFEVixXQUFXO3VCQUFFLG9CQUFvQjtnQkFJakMsYUFBYTtzQkFEaEIsV0FBVzt1QkFBRSx3QkFBd0I7Z0JBSWxDLGVBQWU7c0JBRGxCLFdBQVc7dUJBQUUsMEJBQTBCO2dCQUdyQixJQUFJO3NCQUFuQixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ08sSUFBSTtzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ2MtaWNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25nYy1pY29uLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25nYy1pY29uLnNjc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ2NJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASG9zdEJpbmRpbmcoICdzdHlsZS4tLWljb24tY29sb3InIClcblx0Z2V0IHN0eWxlQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29sb3I7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWljb24tZm9udC1zaXplJyApXG5cdGdldCBzdHlsZUZvbnRTaXplKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnNpemU7IH1cblxuXHRASG9zdEJpbmRpbmcoICdzdHlsZS4tLWljb24tbGluZS1oZWlnaHQnIClcblx0Z2V0IHN0eWxlTGluZUhlaWdodCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zaXplOyB9XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuXG5cdGdldCBpc0lvbmljKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5hbWUgJiYgKFxuXHRcdFx0dGhpcy5uYW1lLmVuZHNXaXRoKCctb3V0bGluZScpIHx8XG5cdFx0XHR0aGlzLm5hbWUuZW5kc1dpdGgoJy1zaGFycCcpIHx8XG5cdFx0XHR0aGlzLm5hbWUuZW5kc1dpdGgoJy1maWxsJykgfHxcblx0XHRcdHRoaXMubmFtZS5zdGFydHNXaXRoKCdsb2dvLScpXG5cdFx0KTtcblx0fVxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG59IiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzSW9uaWM7IGVsc2UgaWNvbW9vbkJsb2NrXCI+XG4gIDxpb24taWNvbiBbbmFtZV09XCJuYW1lXCI+PC9pb24taWNvbj5cbjwvbmctY29udGFpbmVyPlxuPG5nLXRlbXBsYXRlICNpY29tb29uQmxvY2s+XG4gIDwhLS0gSWNvbW9vbiBpY29uIGZvbnQgKGxvY2FsKSAtLT5cbiAgPGkgW25nQ2xhc3NdPSdcImljb24tXCIgKyBuYW1lJz48L2k+XG48L25nLXRlbXBsYXRlPiJdfQ==