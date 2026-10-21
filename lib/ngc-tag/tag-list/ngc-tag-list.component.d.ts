import { QueryList, AfterContentInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgcBlockTruncateDirective } from '../../ngc-truncate/block-truncate/ngc-block-truncate.directive';
import { NgcMenuComponent } from '../../ngc-menu';
import { NgcTagComponent } from '../tag/ngc-tag.component';
import * as i0 from "@angular/core";
export declare class NgcTagListComponent extends NgcBlockTruncateDirective implements OnChanges, AfterContentInit {
    get classWrapping(): boolean;
    tags: QueryList<NgcTagComponent>;
    tagColor: string;
    wrapping: boolean;
    moreMenu: NgcMenuComponent;
    showMore: EventEmitter<void>;
    get isFixedLimit(): boolean;
    /**
     * @constructor
     * @overloading
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @constructor
     */
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcTagListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcTagListComponent, "ngc-tag-list", never, { "tagColor": "tagColor"; "wrapping": "wrapping"; "moreMenu": "moreMenu"; }, { "showMore": "showMore"; }, ["tags"], ["*"], false>;
}
