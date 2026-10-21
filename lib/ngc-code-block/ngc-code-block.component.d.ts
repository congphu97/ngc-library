import { AfterViewInit, ElementRef, OnChanges, SimpleChanges, TemplateRef, AfterContentInit, OnInit, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgcCodeBlockComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {
    private elementRef;
    private cdr;
    codeTemplate?: TemplateRef<any>;
    code: string;
    language: string;
    codeElem: ElementRef<HTMLElement>;
    codeContent?: ElementRef<HTMLElement>;
    projectedCode: string;
    copied: boolean;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private detectAndHighlightProjectedCode;
    highlight(): void;
    getLanguageLabel(): string;
    getLanguageColor(): string;
    copyCode(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcCodeBlockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcCodeBlockComponent, "ngc-code-block", never, { "codeTemplate": "codeTemplate"; "code": "code"; "language": "language"; }, {}, ["codeContent"], ["*"], false>;
}
