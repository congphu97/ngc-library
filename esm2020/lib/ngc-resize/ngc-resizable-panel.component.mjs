import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class NgcResizablePanelComponent {
    constructor() {
        this.minSize = 0;
        this.maxSize = 100;
    }
    updateSize(_direction) {
        // Flex basis handles size dynamically in both horizontal (row) and vertical (column) layouts.
    }
}
NgcResizablePanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizablePanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcResizablePanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcResizablePanelComponent, selector: "ngc-resizable-panel", inputs: { defaultSize: "defaultSize", minSize: "minSize", maxSize: "maxSize" }, host: { properties: { "style.flex-basis.%": "this.size" }, classAttribute: "ngc-resizable-panel" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizablePanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngc-resizable-panel',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'ngc-resizable-panel',
                    }
                }]
        }], propDecorators: { defaultSize: [{
                type: Input
            }], minSize: [{
                type: Input
            }], maxSize: [{
                type: Input
            }], size: [{
                type: HostBinding,
                args: ['style.flex-basis.%']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXJlc2l6YWJsZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1yZXNpemUvbmdjLXJlc2l6YWJsZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVVqRixNQUFNLE9BQU8sMEJBQTBCO0lBUnZDO1FBV2lCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFXLEdBQUcsQ0FBQztLQVN0QztJQUpPLFVBQVUsQ0FBQyxVQUFxQztRQUN0RCw4RkFBOEY7SUFDL0YsQ0FBQzs7dUhBWFcsMEJBQTBCOzJHQUExQiwwQkFBMEIsK09BTjFCLDJCQUEyQjsyRkFNM0IsMEJBQTBCO2tCQVJ0QyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBSSxxQkFBcUI7b0JBQ2pDLFFBQVEsRUFBSSwyQkFBMkI7b0JBQ3ZDLGFBQWEsRUFBRyxpQkFBaUIsQ0FBQyxJQUFJO29CQUN0QyxJQUFJLEVBQUs7d0JBQ1IsS0FBSyxFQUFFLHFCQUFxQjtxQkFDNUI7aUJBQ0Q7OEJBR2dCLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUdDLElBQUk7c0JBRFYsV0FBVzt1QkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1yZXNpemFibGUtcGFuZWwnLFxuXHR0ZW1wbGF0ZVx0XHQ6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0XHRcdFx0OiB7XG5cdFx0Y2xhc3M6ICduZ2MtcmVzaXphYmxlLXBhbmVsJyxcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBOZ2NSZXNpemFibGVQYW5lbENvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHVibGljIGRlZmF1bHRTaXplOiBudW1iZXI7XG5cdEBJbnB1dCgpIHB1YmxpYyBtaW5TaXplOiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBwdWJsaWMgbWF4U2l6ZTogbnVtYmVyID0gMTAwO1xuXG5cdEBIb3N0QmluZGluZygnc3R5bGUuZmxleC1iYXNpcy4lJylcblx0cHVibGljIHNpemU6IG51bWJlcjtcblxuXHRwdWJsaWMgdXBkYXRlU2l6ZShfZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnKSB7XG5cdFx0Ly8gRmxleCBiYXNpcyBoYW5kbGVzIHNpemUgZHluYW1pY2FsbHkgaW4gYm90aCBob3Jpem9udGFsIChyb3cpIGFuZCB2ZXJ0aWNhbCAoY29sdW1uKSBsYXlvdXRzLlxuXHR9XG5cbn1cbiJdfQ==