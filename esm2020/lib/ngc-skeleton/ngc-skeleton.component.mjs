import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgcSkeletonComponent {
    constructor() {
        this.width = '100%';
        this.height = '20px';
        this.borderRadius = '4px';
        this.circle = false;
    }
}
NgcSkeletonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcSkeletonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcSkeletonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcSkeletonComponent, selector: "ngc-skeleton", inputs: { width: "width", height: "height", borderRadius: "borderRadius", circle: "circle" }, ngImport: i0, template: "<div class=\"ngc-skeleton\"\n     [ngStyle]=\"{\n       width: width,\n       height: height,\n       borderRadius: circle ? '50%' : borderRadius\n     }\">\n</div>\n", styles: [".ngc-skeleton{background-color:var(--ngc-color-neutral-border-default, #e4e4e6);position:relative;overflow:hidden}.ngc-skeleton:after{content:\"\";position:absolute;top:0;left:-150px;height:100%;width:150px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);animation:loading 1.2s infinite}@keyframes loading{0%{left:-150px}to{left:100%}}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcSkeletonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-skeleton', template: "<div class=\"ngc-skeleton\"\n     [ngStyle]=\"{\n       width: width,\n       height: height,\n       borderRadius: circle ? '50%' : borderRadius\n     }\">\n</div>\n", styles: [".ngc-skeleton{background-color:var(--ngc-color-neutral-border-default, #e4e4e6);position:relative;overflow:hidden}.ngc-skeleton:after{content:\"\";position:absolute;top:0;left:-150px;height:100%;width:150px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);animation:loading 1.2s infinite}@keyframes loading{0%{left:-150px}to{left:100%}}\n"] }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], circle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXNrZWxldG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLXNrZWxldG9uL25nYy1za2VsZXRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1za2VsZXRvbi9uZ2Mtc2tlbGV0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9qRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTVcsVUFBSyxHQUFvQixNQUFNLENBQUM7UUFDaEMsV0FBTSxHQUFvQixNQUFNLENBQUM7UUFDakMsaUJBQVksR0FBVyxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFZLEtBQUssQ0FBQztLQUNsQzs7aUhBTFksb0JBQW9CO3FHQUFwQixvQkFBb0Isa0pDUGpDLHdLQU9BOzJGREFhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSxjQUFjOzhCQUtmLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYy1za2VsZXRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ2Mtc2tlbGV0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ2Mtc2tlbGV0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2NTa2VsZXRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAnMTAwJSc7XG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJzIwcHgnO1xuICBASW5wdXQoKSBib3JkZXJSYWRpdXM6IHN0cmluZyA9ICc0cHgnO1xuICBASW5wdXQoKSBjaXJjbGU6IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ2Mtc2tlbGV0b25cIlxuICAgICBbbmdTdHlsZV09XCJ7XG4gICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgIGJvcmRlclJhZGl1czogY2lyY2xlID8gJzUwJScgOiBib3JkZXJSYWRpdXNcbiAgICAgfVwiPlxuPC9kaXY+XG4iXX0=