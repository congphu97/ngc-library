import { NgcTimelineComponent } from './ngc-timeline.component';
import * as i0 from "@angular/core";
export declare class NgcTimelineDotDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTimelineDotDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcTimelineDotDirective, "[ngcTimelineDot]", never, {}, {}, never, never, false>;
}
export declare class NgcTimelineSideDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTimelineSideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgcTimelineSideDirective, "[ngcTimelineSide]", never, {}, {}, never, never, false>;
}
export declare class NgcTimelineItemComponent {
    timeline: NgcTimelineComponent;
    color: string;
    time: string;
    selected: boolean;
    get classActive(): boolean;
    customDot?: NgcTimelineDotDirective;
    constructor(timeline: NgcTimelineComponent);
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTimelineItemComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTimelineItemComponent, "ngc-timeline-item", never, { "color": "color"; "time": "time"; "selected": "selected"; }, {}, ["customDot"], ["[ngcTimelineSide]", "[ngcTimelineDot]", "*"], false>;
}
