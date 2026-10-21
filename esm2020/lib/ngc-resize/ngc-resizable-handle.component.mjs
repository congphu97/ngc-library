import { Component, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class NgcResizableHandleComponent {
    constructor() {
        this.dragStart = new EventEmitter();
        this.isDragging = false;
    }
    onMouseDown(event) {
        this.dragStart.emit(event);
    }
    onTouchStart(event) {
        this.dragStart.emit(event);
    }
}
NgcResizableHandleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizableHandleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcResizableHandleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcResizableHandleComponent, selector: "ngc-resizable-handle", outputs: { dragStart: "dragStart" }, host: { listeners: { "mousedown": "onMouseDown($event)", "touchstart": "onTouchStart($event)" }, properties: { "class.ngc-resizable-handle--dragging": "this.isDragging" }, classAttribute: "ngc-resizable-handle" }, ngImport: i0, template: `<div class="ngc-resizable-handle__line"></div>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcResizableHandleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngc-resizable-handle',
                    template: `<div class="ngc-resizable-handle__line"></div>`,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'ngc-resizable-handle',
                    }
                }]
        }], propDecorators: { dragStart: [{
                type: Output
            }], isDragging: [{
                type: HostBinding,
                args: ['class.ngc-resizable-handle--dragging']
            }], onMouseDown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }], onTouchStart: [{
                type: HostListener,
                args: ['touchstart', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXJlc2l6YWJsZS1oYW5kbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtcmVzaXplL25nYy1yZXNpemFibGUtaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFVOUcsTUFBTSxPQUFPLDJCQUEyQjtJQVJ4QztRQVVrQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFHbEUsZUFBVSxHQUFHLEtBQUssQ0FBQztLQVkxQjtJQVRPLFdBQVcsQ0FBQyxLQUFpQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR00sWUFBWSxDQUFDLEtBQWlCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O3dIQWZXLDJCQUEyQjs0R0FBM0IsMkJBQTJCLHVUQU4zQixnREFBZ0Q7MkZBTWhELDJCQUEyQjtrQkFSdkMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUksc0JBQXNCO29CQUNsQyxRQUFRLEVBQUksZ0RBQWdEO29CQUM1RCxhQUFhLEVBQUcsaUJBQWlCLENBQUMsSUFBSTtvQkFDdEMsSUFBSSxFQUFLO3dCQUNSLEtBQUssRUFBRSxzQkFBc0I7cUJBQzdCO2lCQUNEOzhCQUdpQixTQUFTO3NCQUF6QixNQUFNO2dCQUdBLFVBQVU7c0JBRGhCLFdBQVc7dUJBQUMsc0NBQXNDO2dCQUk1QyxXQUFXO3NCQURqQixZQUFZO3VCQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFNOUIsWUFBWTtzQkFEbEIsWUFBWTt1QkFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdFx0OiAnbmdjLXJlc2l6YWJsZS1oYW5kbGUnLFxuXHR0ZW1wbGF0ZVx0XHQ6IGA8ZGl2IGNsYXNzPVwibmdjLXJlc2l6YWJsZS1oYW5kbGVfX2xpbmVcIj48L2Rpdj5gLFxuXHRlbmNhcHN1bGF0aW9uXHQ6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3RcdFx0XHQ6IHtcblx0XHRjbGFzczogJ25nYy1yZXNpemFibGUtaGFuZGxlJyxcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBOZ2NSZXNpemFibGVIYW5kbGVDb21wb25lbnQge1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLm5nYy1yZXNpemFibGUtaGFuZGxlLS1kcmFnZ2luZycpXG5cdHB1YmxpYyBpc0RyYWdnaW5nID0gZmFsc2U7XG5cblx0QEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0dGhpcy5kcmFnU3RhcnQuZW1pdChldmVudCk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uVG91Y2hTdGFydChldmVudDogVG91Y2hFdmVudCkge1xuXHRcdHRoaXMuZHJhZ1N0YXJ0LmVtaXQoZXZlbnQpO1xuXHR9XG5cbn1cbiJdfQ==