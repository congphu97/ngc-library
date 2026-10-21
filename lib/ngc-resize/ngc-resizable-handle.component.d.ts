import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcResizableHandleComponent {
    dragStart: EventEmitter<MouseEvent | TouchEvent>;
    isDragging: boolean;
    onMouseDown(event: MouseEvent): void;
    onTouchStart(event: TouchEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcResizableHandleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcResizableHandleComponent, "ngc-resizable-handle", never, {}, { "dragStart": "dragStart"; }, never, never, false>;
}
