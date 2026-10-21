// import { Component, ContentChild, ElementRef, AfterContentInit, Input } from '@angular/core';
// @Component({
//   selector: 'ngc-code-block',
//   templateUrl: './ngc-code-block.component.html',
//   styleUrls: ['./ngc-code-block.component.scss']
// })
// export class NgcCodeBlockComponent implements AfterContentInit {
//   @Input() code: string;
//   @ContentChild('codeContent') codeContent: ElementRef;
//   ngAfterContentInit() {
//     if (this.codeContent) {
//       const code = this.codeContent.nativeElement.textContent;
//       const highlightedCode = this.applySyntaxHighlighting(code);
//       this.codeContent.nativeElement.innerHTML = highlightedCode;
//     }
//   }
//   private applySyntaxHighlighting(code: string): string {
//     const syntaxRules = this.getSyntaxRules();
//     let highlighted = code;
//     for (const [pattern, className] of syntaxRules) {
//       const regex = new RegExp(pattern, 'g');
//       highlighted = highlighted.replace(regex, `<span class="${className}">$&</span>`);
//     }
//     return highlighted;
//   }
//   private getSyntaxRules(): [string, string][] {
//     const rules: { [key: string]: string } = {
//       keyword: '\\b(?:if|else|for|while|return)\\b',
//       string: '"(?:[^"\\\\]|\\\\.)*"',
//       number: '\\b\\d+(?:\\.\\d+)?\\b',
//       comment: '\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/'
//     };
//     const classNames = {
//       keyword: 'keyword',
//       string: 'string',
//       number: 'number',
//       comment: 'comment'
//     };
//     return Object.entries(rules).map(([type, pattern]) => [pattern, classNames[type]]);
//   }
// }
import { Component, Input, ElementRef, ViewChild, TemplateRef, ContentChild, ChangeDetectorRef } from '@angular/core';
import hljs from 'highlight.js/lib/core';
// Import các language cần dùng, ví dụ typescript, css, html
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml'; // html
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-highlightjs";
import * as i3 from "../ngc-icon/ngc-icon.component";
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', xml);
export class NgcCodeBlockComponent {
    constructor(elementRef, cdr) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.code = '';
        this.language = 'typescript';
        this.projectedCode = '';
        this.copied = false;
    }
    ngOnInit() { }
    ngAfterContentInit() {
        this.detectAndHighlightProjectedCode();
    }
    ngAfterViewInit() {
        this.detectAndHighlightProjectedCode();
        this.highlight();
    }
    ngOnChanges(changes) {
        if (changes['code'] && !changes['code'].isFirstChange()) {
            this.highlight();
        }
    }
    detectAndHighlightProjectedCode() {
        // If we have contentChild `#codeContent`
        if (this.codeContent) {
            this.projectedCode = this.codeContent.nativeElement.textContent || '';
            hljs.highlightElement(this.codeContent.nativeElement);
        }
        else {
            // Find any <code> tag in projected content
            const codeEl = this.elementRef.nativeElement.querySelector('.projected-content code');
            if (codeEl) {
                this.codeContent = new ElementRef(codeEl);
                this.projectedCode = codeEl.textContent || '';
                hljs.highlightElement(codeEl);
            }
        }
        this.cdr.detectChanges();
    }
    highlight() {
        if (this.code && this.codeElem) {
            hljs.highlightElement(this.codeElem.nativeElement);
        }
    }
    getLanguageLabel() {
        const lang = this.language || 'code';
        if (lang.toLowerCase() === 'typescript')
            return 'TypeScript';
        if (lang.toLowerCase() === 'javascript')
            return 'JavaScript';
        if (lang.toLowerCase() === 'html')
            return 'HTML';
        if (lang.toLowerCase() === 'css')
            return 'CSS';
        if (lang.toLowerCase() === 'scss')
            return 'SCSS';
        if (lang.toLowerCase() === 'json')
            return 'JSON';
        return lang;
    }
    getLanguageColor() {
        const lang = (this.language || '').toLowerCase();
        switch (lang) {
            case 'typescript':
            case 'ts':
                return '#3178c6';
            case 'javascript':
            case 'js':
                return '#f7df1e';
            case 'html':
            case 'xml':
                return '#e34c26';
            case 'css':
                return '#563d7c';
            case 'scss':
            case 'sass':
                return '#c6538c';
            case 'json':
                return '#29beb0';
            default:
                return '#8e8e93';
        }
    }
    copyCode() {
        const textToCopy = this.code || this.projectedCode;
        if (!textToCopy)
            return;
        navigator.clipboard.writeText(textToCopy).then(() => {
            this.copied = true;
            this.cdr.detectChanges();
            setTimeout(() => {
                this.copied = false;
                this.cdr.detectChanges();
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    }
}
NgcCodeBlockComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCodeBlockComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgcCodeBlockComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcCodeBlockComponent, selector: "ngc-code-block", inputs: { codeTemplate: "codeTemplate", code: "code", language: "language" }, queries: [{ propertyName: "codeContent", first: true, predicate: ["codeContent"], descendants: true, read: ElementRef }], viewQueries: [{ propertyName: "codeElem", first: true, predicate: ["codeElem"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"ngc-code-block-container\">\n  <div class=\"ngc-code-block-header\">\n    <div class=\"ngc-code-block-lang\">\n      <span class=\"lang-dot\" [style.background-color]=\"getLanguageColor()\"></span>\n      <span class=\"lang-text\">{{ getLanguageLabel() }}</span>\n    </div>\n    <button class=\"ngc-code-block-copy-btn\" (click)=\"copyCode()\" [class.copied]=\"copied\" title=\"Copy code\">\n      <ngc-icon [name]=\"copied ? 'checkmark-outline' : 'copy-outline'\" size=\"16px\"></ngc-icon>\n      <span class=\"copy-text\">{{ copied ? 'Copied' : 'Copy' }}</span>\n    </button>\n  </div>\n  <div class=\"ngc-code-block-body\">\n    <!-- Case 1: code input is provided -->\n    <pre *ngIf=\"code\"><code #codeElem [highlight]=\"code\" [languages]=\"[language]\"></code></pre>\n    \n    <!-- Case 2: projected content is used -->\n    <div class=\"projected-content\" [style.display]=\"code ? 'none' : 'block'\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<!-- <h3 class=\"mb-20\">Checkbox</h3>\n<ngc-tab-group>\n    <ngc-tab [label]=\"'Preview'\">\n        <div class=\"mb-10\">\n            <ngc-checkbox [label]=\"'Checkbox 1'\"></ngc-checkbox>\n        </div>\n        <div class=\"mb-10\">\n            <ngc-checkbox [label]=\"'Checkbox 2'\" [checked]=\"true\"></ngc-checkbox>\n        </div>\n        <div class=\"mb-10\">\n            <ngc-checkbox [label]=\"'Checkbox 3'\" [disabled]=\"true\"></ngc-checkbox>\n        </div>\n    </ngc-tab>\n    <ngc-tab [label]=\"'Code'\">\n        <ngc-code-block>\n            <pre><code #codeContent><div>123123</div></code></pre>\n        </ngc-code-block>\n    </ngc-tab>\n</ngc-tab-group> -->", styles: [".ngc-code-block-container{display:flex;flex-direction:column;border:1px solid #e4e4e7;border-radius:8px;background-color:#fff;overflow:hidden;box-shadow:0 4px 12px #00000005;font-family:var(--ngc-font-body, AvertaStdCY, Helvetica, sans-serif);margin:16px 0;box-sizing:border-box}.ngc-code-block-container .ngc-code-block-header{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background-color:#f4f4f5;border-bottom:1px solid #e4e4e7;-webkit-user-select:none;user-select:none}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-lang{display:flex;align-items:center;gap:6px}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-lang .lang-dot{width:8px;height:8px;border-radius:50%;transition:background-color .2s ease-in-out}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-lang .lang-text{font-size:11px;font-weight:var(--ngc-font-weight-semibold, 600);color:#71717a;text-transform:uppercase;letter-spacing:.5px}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn{display:flex;align-items:center;gap:6px;background:transparent;border:1px solid transparent;border-radius:4px;padding:4px 8px;font-size:12px;font-weight:var(--ngc-font-weight-semibold, 600);color:#71717a;cursor:pointer;transition:all .2s ease-in-out;outline:none}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn ngc-icon{display:flex;align-items:center;--icon-color: #71717a;transition:var(--icon-color) .2s ease-in-out}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn:hover{background-color:#e4e4e7;color:#09090b}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn:hover ngc-icon{--icon-color: #09090b}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn:active{background-color:#d4d4d8}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn.copied{color:var(--ngc-color-success-default, #34c759);border-color:rgba(var(--ngc-color-success-default, #34c759),.2);background-color:rgba(var(--ngc-color-success-default, #34c759),.05)}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn.copied ngc-icon{--icon-color: var(--ngc-color-success-default, #34c759)}.ngc-code-block-container .ngc-code-block-body{position:relative;background-color:#fff}.ngc-code-block-container .ngc-code-block-body pre,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre{margin:0;padding:16px;background-color:transparent!important;overflow-x:auto;white-space:pre;max-width:100%;border:none;border-radius:0;font-family:var(--ngc-font-code, SourceCodePro, Helvetica, sans-serif);font-size:13px;line-height:1.5;box-sizing:border-box;color:#1f2937}.ngc-code-block-container .ngc-code-block-body pre::-webkit-scrollbar,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre::-webkit-scrollbar{height:6px;width:6px}.ngc-code-block-container .ngc-code-block-body pre::-webkit-scrollbar-track,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre::-webkit-scrollbar-track{background:transparent}.ngc-code-block-container .ngc-code-block-body pre::-webkit-scrollbar-thumb,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre::-webkit-scrollbar-thumb{background:rgba(0,0,0,.1);border-radius:3px}.ngc-code-block-container .ngc-code-block-body pre::-webkit-scrollbar-thumb:hover,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);border-radius:3px}.ngc-code-block-container .ngc-code-block-body code,.ngc-code-block-container .ngc-code-block-body ::ng-deep code{display:block;white-space:inherit;background:transparent!important;padding:0;border-radius:0;font-family:inherit}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.Highlight, selector: "[highlight]", inputs: ["highlight", "languages", "lineNumbers"], outputs: ["highlighted"] }, { kind: "component", type: i3.NgcIconComponent, selector: "ngc-icon", inputs: ["name", "color", "size"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCodeBlockComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-code-block', template: "<div class=\"ngc-code-block-container\">\n  <div class=\"ngc-code-block-header\">\n    <div class=\"ngc-code-block-lang\">\n      <span class=\"lang-dot\" [style.background-color]=\"getLanguageColor()\"></span>\n      <span class=\"lang-text\">{{ getLanguageLabel() }}</span>\n    </div>\n    <button class=\"ngc-code-block-copy-btn\" (click)=\"copyCode()\" [class.copied]=\"copied\" title=\"Copy code\">\n      <ngc-icon [name]=\"copied ? 'checkmark-outline' : 'copy-outline'\" size=\"16px\"></ngc-icon>\n      <span class=\"copy-text\">{{ copied ? 'Copied' : 'Copy' }}</span>\n    </button>\n  </div>\n  <div class=\"ngc-code-block-body\">\n    <!-- Case 1: code input is provided -->\n    <pre *ngIf=\"code\"><code #codeElem [highlight]=\"code\" [languages]=\"[language]\"></code></pre>\n    \n    <!-- Case 2: projected content is used -->\n    <div class=\"projected-content\" [style.display]=\"code ? 'none' : 'block'\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<!-- <h3 class=\"mb-20\">Checkbox</h3>\n<ngc-tab-group>\n    <ngc-tab [label]=\"'Preview'\">\n        <div class=\"mb-10\">\n            <ngc-checkbox [label]=\"'Checkbox 1'\"></ngc-checkbox>\n        </div>\n        <div class=\"mb-10\">\n            <ngc-checkbox [label]=\"'Checkbox 2'\" [checked]=\"true\"></ngc-checkbox>\n        </div>\n        <div class=\"mb-10\">\n            <ngc-checkbox [label]=\"'Checkbox 3'\" [disabled]=\"true\"></ngc-checkbox>\n        </div>\n    </ngc-tab>\n    <ngc-tab [label]=\"'Code'\">\n        <ngc-code-block>\n            <pre><code #codeContent><div>123123</div></code></pre>\n        </ngc-code-block>\n    </ngc-tab>\n</ngc-tab-group> -->", styles: [".ngc-code-block-container{display:flex;flex-direction:column;border:1px solid #e4e4e7;border-radius:8px;background-color:#fff;overflow:hidden;box-shadow:0 4px 12px #00000005;font-family:var(--ngc-font-body, AvertaStdCY, Helvetica, sans-serif);margin:16px 0;box-sizing:border-box}.ngc-code-block-container .ngc-code-block-header{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background-color:#f4f4f5;border-bottom:1px solid #e4e4e7;-webkit-user-select:none;user-select:none}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-lang{display:flex;align-items:center;gap:6px}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-lang .lang-dot{width:8px;height:8px;border-radius:50%;transition:background-color .2s ease-in-out}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-lang .lang-text{font-size:11px;font-weight:var(--ngc-font-weight-semibold, 600);color:#71717a;text-transform:uppercase;letter-spacing:.5px}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn{display:flex;align-items:center;gap:6px;background:transparent;border:1px solid transparent;border-radius:4px;padding:4px 8px;font-size:12px;font-weight:var(--ngc-font-weight-semibold, 600);color:#71717a;cursor:pointer;transition:all .2s ease-in-out;outline:none}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn ngc-icon{display:flex;align-items:center;--icon-color: #71717a;transition:var(--icon-color) .2s ease-in-out}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn:hover{background-color:#e4e4e7;color:#09090b}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn:hover ngc-icon{--icon-color: #09090b}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn:active{background-color:#d4d4d8}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn.copied{color:var(--ngc-color-success-default, #34c759);border-color:rgba(var(--ngc-color-success-default, #34c759),.2);background-color:rgba(var(--ngc-color-success-default, #34c759),.05)}.ngc-code-block-container .ngc-code-block-header .ngc-code-block-copy-btn.copied ngc-icon{--icon-color: var(--ngc-color-success-default, #34c759)}.ngc-code-block-container .ngc-code-block-body{position:relative;background-color:#fff}.ngc-code-block-container .ngc-code-block-body pre,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre{margin:0;padding:16px;background-color:transparent!important;overflow-x:auto;white-space:pre;max-width:100%;border:none;border-radius:0;font-family:var(--ngc-font-code, SourceCodePro, Helvetica, sans-serif);font-size:13px;line-height:1.5;box-sizing:border-box;color:#1f2937}.ngc-code-block-container .ngc-code-block-body pre::-webkit-scrollbar,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre::-webkit-scrollbar{height:6px;width:6px}.ngc-code-block-container .ngc-code-block-body pre::-webkit-scrollbar-track,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre::-webkit-scrollbar-track{background:transparent}.ngc-code-block-container .ngc-code-block-body pre::-webkit-scrollbar-thumb,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre::-webkit-scrollbar-thumb{background:rgba(0,0,0,.1);border-radius:3px}.ngc-code-block-container .ngc-code-block-body pre::-webkit-scrollbar-thumb:hover,.ngc-code-block-container .ngc-code-block-body ::ng-deep pre::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);border-radius:3px}.ngc-code-block-container .ngc-code-block-body code,.ngc-code-block-container .ngc-code-block-body ::ng-deep code{display:block;white-space:inherit;background:transparent!important;padding:0;border-radius:0;font-family:inherit}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { codeTemplate: [{
                type: Input
            }], code: [{
                type: Input
            }], language: [{
                type: Input
            }], codeElem: [{
                type: ViewChild,
                args: ['codeElem']
            }], codeContent: [{
                type: ContentChild,
                args: ['codeContent', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvZGUtYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtY29kZS1ibG9jay9uZ2MtY29kZS1ibG9jay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1jb2RlLWJsb2NrL25nYy1jb2RlLWJsb2NrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdHQUFnRztBQUVoRyxlQUFlO0FBQ2YsZ0NBQWdDO0FBQ2hDLG9EQUFvRDtBQUNwRCxtREFBbUQ7QUFDbkQsS0FBSztBQUNMLG1FQUFtRTtBQUNuRSwyQkFBMkI7QUFDM0IsMERBQTBEO0FBRTFELDJCQUEyQjtBQUMzQiw4QkFBOEI7QUFDOUIsaUVBQWlFO0FBQ2pFLG9FQUFvRTtBQUNwRSxvRUFBb0U7QUFDcEUsUUFBUTtBQUNSLE1BQU07QUFFTiw0REFBNEQ7QUFDNUQsaURBQWlEO0FBQ2pELDhCQUE4QjtBQUU5Qix3REFBd0Q7QUFDeEQsZ0RBQWdEO0FBQ2hELDBGQUEwRjtBQUMxRixRQUFRO0FBRVIsMEJBQTBCO0FBQzFCLE1BQU07QUFFTixtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELHVEQUF1RDtBQUN2RCx5Q0FBeUM7QUFDekMsMENBQTBDO0FBQzFDLG1EQUFtRDtBQUNuRCxTQUFTO0FBRVQsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1QiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixTQUFTO0FBRVQsMEZBQTBGO0FBQzFGLE1BQU07QUFDTixJQUFJO0FBRUosT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlCLFVBQVUsRUFBRSxTQUFTLEVBQTRCLFdBQVcsRUFBRSxZQUFZLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pMLE9BQU8s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QUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztrSEExR1UscUJBQXFCO3NHQUFyQixxQkFBcUIsdU5BT0ssVUFBVSx3SkMxRWpELGdwREF3Q29COzJGRDJCUCxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UsZ0JBQWdCO2lJQU1qQixZQUFZO3NCQUFwQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVpQixRQUFRO3NCQUE5QixTQUFTO3VCQUFDLFVBQVU7Z0JBQzhCLFdBQVc7c0JBQTdELFlBQVk7dUJBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBAQ29tcG9uZW50KHtcbi8vICAgc2VsZWN0b3I6ICduZ2MtY29kZS1ibG9jaycsXG4vLyAgIHRlbXBsYXRlVXJsOiAnLi9uZ2MtY29kZS1ibG9jay5jb21wb25lbnQuaHRtbCcsXG4vLyAgIHN0eWxlVXJsczogWycuL25nYy1jb2RlLWJsb2NrLmNvbXBvbmVudC5zY3NzJ11cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgTmdjQ29kZUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4vLyAgIEBJbnB1dCgpIGNvZGU6IHN0cmluZztcbi8vICAgQENvbnRlbnRDaGlsZCgnY29kZUNvbnRlbnQnKSBjb2RlQ29udGVudDogRWxlbWVudFJlZjtcblxuLy8gICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4vLyAgICAgaWYgKHRoaXMuY29kZUNvbnRlbnQpIHtcbi8vICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLmNvZGVDb250ZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4vLyAgICAgICBjb25zdCBoaWdobGlnaHRlZENvZGUgPSB0aGlzLmFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKGNvZGUpO1xuLy8gICAgICAgdGhpcy5jb2RlQ29udGVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGhpZ2hsaWdodGVkQ29kZTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBwcml2YXRlIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4vLyAgICAgY29uc3Qgc3ludGF4UnVsZXMgPSB0aGlzLmdldFN5bnRheFJ1bGVzKCk7XG4vLyAgICAgbGV0IGhpZ2hsaWdodGVkID0gY29kZTtcblxuLy8gICAgIGZvciAoY29uc3QgW3BhdHRlcm4sIGNsYXNzTmFtZV0gb2Ygc3ludGF4UnVsZXMpIHtcbi8vICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuLy8gICAgICAgaGlnaGxpZ2h0ZWQgPSBoaWdobGlnaHRlZC5yZXBsYWNlKHJlZ2V4LCBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4kJjwvc3Bhbj5gKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gaGlnaGxpZ2h0ZWQ7XG4vLyAgIH1cblxuLy8gICBwcml2YXRlIGdldFN5bnRheFJ1bGVzKCk6IFtzdHJpbmcsIHN0cmluZ11bXSB7XG4vLyAgICAgY29uc3QgcnVsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4vLyAgICAgICBrZXl3b3JkOiAnXFxcXGIoPzppZnxlbHNlfGZvcnx3aGlsZXxyZXR1cm4pXFxcXGInLFxuLy8gICAgICAgc3RyaW5nOiAnXCIoPzpbXlwiXFxcXFxcXFxdfFxcXFxcXFxcLikqXCInLFxuLy8gICAgICAgbnVtYmVyOiAnXFxcXGJcXFxcZCsoPzpcXFxcLlxcXFxkKyk/XFxcXGInLFxuLy8gICAgICAgY29tbWVudDogJ1xcXFwvXFxcXC8uKnxcXFxcL1xcXFwqW1xcXFxzXFxcXFNdKj9cXFxcKlxcXFwvJ1xuLy8gICAgIH07XG5cbi8vICAgICBjb25zdCBjbGFzc05hbWVzID0ge1xuLy8gICAgICAga2V5d29yZDogJ2tleXdvcmQnLFxuLy8gICAgICAgc3RyaW5nOiAnc3RyaW5nJyxcbi8vICAgICAgIG51bWJlcjogJ251bWJlcicsXG4vLyAgICAgICBjb21tZW50OiAnY29tbWVudCdcbi8vICAgICB9O1xuXG4vLyAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHJ1bGVzKS5tYXAoKFt0eXBlLCBwYXR0ZXJuXSkgPT4gW3BhdHRlcm4sIGNsYXNzTmFtZXNbdHlwZV1dKTtcbi8vICAgfVxuLy8gfVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJztcblxuLy8gSW1wb3J0IGPDoWMgbGFuZ3VhZ2UgY+G6p24gZMO5bmcsIHbDrSBk4bulIHR5cGVzY3JpcHQsIGNzcywgaHRtbFxuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHlwZXNjcmlwdCc7XG5pbXBvcnQgY3NzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nzcyc7XG5pbXBvcnQgeG1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbCc7IC8vIGh0bWxcblxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCd0eXBlc2NyaXB0JywgdHlwZXNjcmlwdCk7XG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NzcycsIGNzcyk7XG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2h0bWwnLCB4bWwpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2MtY29kZS1ibG9jaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ2MtY29kZS1ibG9jay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nYy1jb2RlLWJsb2NrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdjQ29kZUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGNvZGVUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGNvZGUgPSAnJztcbiAgQElucHV0KCkgbGFuZ3VhZ2UgPSAndHlwZXNjcmlwdCc7XG5cbiAgQFZpZXdDaGlsZCgnY29kZUVsZW0nKSBjb2RlRWxlbSE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKCdjb2RlQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjb2RlQ29udGVudD86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIHByb2plY3RlZENvZGUgPSAnJztcbiAgY29waWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmRldGVjdEFuZEhpZ2hsaWdodFByb2plY3RlZENvZGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRldGVjdEFuZEhpZ2hsaWdodFByb2plY3RlZENvZGUoKTtcbiAgICB0aGlzLmhpZ2hsaWdodCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydjb2RlJ10gJiYgIWNoYW5nZXNbJ2NvZGUnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXRlY3RBbmRIaWdobGlnaHRQcm9qZWN0ZWRDb2RlKCkge1xuICAgIC8vIElmIHdlIGhhdmUgY29udGVudENoaWxkIGAjY29kZUNvbnRlbnRgXG4gICAgaWYgKHRoaXMuY29kZUNvbnRlbnQpIHtcbiAgICAgIHRoaXMucHJvamVjdGVkQ29kZSA9IHRoaXMuY29kZUNvbnRlbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCB8fCAnJztcbiAgICAgIGhsanMuaGlnaGxpZ2h0RWxlbWVudCh0aGlzLmNvZGVDb250ZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaW5kIGFueSA8Y29kZT4gdGFnIGluIHByb2plY3RlZCBjb250ZW50XG4gICAgICBjb25zdCBjb2RlRWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdGVkLWNvbnRlbnQgY29kZScpO1xuICAgICAgaWYgKGNvZGVFbCkge1xuICAgICAgICB0aGlzLmNvZGVDb250ZW50ID0gbmV3IEVsZW1lbnRSZWYoY29kZUVsKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ZWRDb2RlID0gY29kZUVsLnRleHRDb250ZW50IHx8ICcnO1xuICAgICAgICBobGpzLmhpZ2hsaWdodEVsZW1lbnQoY29kZUVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgaGlnaGxpZ2h0KCkge1xuICAgIGlmICh0aGlzLmNvZGUgJiYgdGhpcy5jb2RlRWxlbSkge1xuICAgICAgaGxqcy5oaWdobGlnaHRFbGVtZW50KHRoaXMuY29kZUVsZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGFuZ3VhZ2VMYWJlbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxhbmcgPSB0aGlzLmxhbmd1YWdlIHx8ICdjb2RlJztcbiAgICBpZiAobGFuZy50b0xvd2VyQ2FzZSgpID09PSAndHlwZXNjcmlwdCcpIHJldHVybiAnVHlwZVNjcmlwdCc7XG4gICAgaWYgKGxhbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2phdmFzY3JpcHQnKSByZXR1cm4gJ0phdmFTY3JpcHQnO1xuICAgIGlmIChsYW5nLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykgcmV0dXJuICdIVE1MJztcbiAgICBpZiAobGFuZy50b0xvd2VyQ2FzZSgpID09PSAnY3NzJykgcmV0dXJuICdDU1MnO1xuICAgIGlmIChsYW5nLnRvTG93ZXJDYXNlKCkgPT09ICdzY3NzJykgcmV0dXJuICdTQ1NTJztcbiAgICBpZiAobGFuZy50b0xvd2VyQ2FzZSgpID09PSAnanNvbicpIHJldHVybiAnSlNPTic7XG4gICAgcmV0dXJuIGxhbmc7XG4gIH1cblxuICBnZXRMYW5ndWFnZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFuZyA9ICh0aGlzLmxhbmd1YWdlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAobGFuZykge1xuICAgICAgY2FzZSAndHlwZXNjcmlwdCc6XG4gICAgICBjYXNlICd0cyc6XG4gICAgICAgIHJldHVybiAnIzMxNzhjNic7XG4gICAgICBjYXNlICdqYXZhc2NyaXB0JzpcbiAgICAgIGNhc2UgJ2pzJzpcbiAgICAgICAgcmV0dXJuICcjZjdkZjFlJztcbiAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgY2FzZSAneG1sJzpcbiAgICAgICAgcmV0dXJuICcjZTM0YzI2JztcbiAgICAgIGNhc2UgJ2Nzcyc6XG4gICAgICAgIHJldHVybiAnIzU2M2Q3Yyc7XG4gICAgICBjYXNlICdzY3NzJzpcbiAgICAgIGNhc2UgJ3Nhc3MnOlxuICAgICAgICByZXR1cm4gJyNjNjUzOGMnO1xuICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgIHJldHVybiAnIzI5YmViMCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyM4ZThlOTMnO1xuICAgIH1cbiAgfVxuXG4gIGNvcHlDb2RlKCkge1xuICAgIGNvbnN0IHRleHRUb0NvcHkgPSB0aGlzLmNvZGUgfHwgdGhpcy5wcm9qZWN0ZWRDb2RlO1xuICAgIGlmICghdGV4dFRvQ29weSkgcmV0dXJuO1xuXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dFRvQ29weSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmNvcGllZCA9IHRydWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb3BpZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb3B5IGNvZGU6ICcsIGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4iLCI8ZGl2IGNsYXNzPVwibmdjLWNvZGUtYmxvY2stY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJuZ2MtY29kZS1ibG9jay1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmdjLWNvZGUtYmxvY2stbGFuZ1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJsYW5nLWRvdFwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImdldExhbmd1YWdlQ29sb3IoKVwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGFuZy10ZXh0XCI+e3sgZ2V0TGFuZ3VhZ2VMYWJlbCgpIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJuZ2MtY29kZS1ibG9jay1jb3B5LWJ0blwiIChjbGljayk9XCJjb3B5Q29kZSgpXCIgW2NsYXNzLmNvcGllZF09XCJjb3BpZWRcIiB0aXRsZT1cIkNvcHkgY29kZVwiPlxuICAgICAgPG5nYy1pY29uIFtuYW1lXT1cImNvcGllZCA/ICdjaGVja21hcmstb3V0bGluZScgOiAnY29weS1vdXRsaW5lJ1wiIHNpemU9XCIxNnB4XCI+PC9uZ2MtaWNvbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY29weS10ZXh0XCI+e3sgY29waWVkID8gJ0NvcGllZCcgOiAnQ29weScgfX08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibmdjLWNvZGUtYmxvY2stYm9keVwiPlxuICAgIDwhLS0gQ2FzZSAxOiBjb2RlIGlucHV0IGlzIHByb3ZpZGVkIC0tPlxuICAgIDxwcmUgKm5nSWY9XCJjb2RlXCI+PGNvZGUgI2NvZGVFbGVtIFtoaWdobGlnaHRdPVwiY29kZVwiIFtsYW5ndWFnZXNdPVwiW2xhbmd1YWdlXVwiPjwvY29kZT48L3ByZT5cbiAgICBcbiAgICA8IS0tIENhc2UgMjogcHJvamVjdGVkIGNvbnRlbnQgaXMgdXNlZCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdGVkLWNvbnRlbnRcIiBbc3R5bGUuZGlzcGxheV09XCJjb2RlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48IS0tIDxoMyBjbGFzcz1cIm1iLTIwXCI+Q2hlY2tib3g8L2gzPlxuPG5nYy10YWItZ3JvdXA+XG4gICAgPG5nYy10YWIgW2xhYmVsXT1cIidQcmV2aWV3J1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItMTBcIj5cbiAgICAgICAgICAgIDxuZ2MtY2hlY2tib3ggW2xhYmVsXT1cIidDaGVja2JveCAxJ1wiPjwvbmdjLWNoZWNrYm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTEwXCI+XG4gICAgICAgICAgICA8bmdjLWNoZWNrYm94IFtsYWJlbF09XCInQ2hlY2tib3ggMidcIiBbY2hlY2tlZF09XCJ0cnVlXCI+PC9uZ2MtY2hlY2tib3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItMTBcIj5cbiAgICAgICAgICAgIDxuZ2MtY2hlY2tib3ggW2xhYmVsXT1cIidDaGVja2JveCAzJ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCI+PC9uZ2MtY2hlY2tib3g+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmdjLXRhYj5cbiAgICA8bmdjLXRhYiBbbGFiZWxdPVwiJ0NvZGUnXCI+XG4gICAgICAgIDxuZ2MtY29kZS1ibG9jaz5cbiAgICAgICAgICAgIDxwcmU+PGNvZGUgI2NvZGVDb250ZW50PjxkaXY+MTIzMTIzPC9kaXY+PC9jb2RlPjwvcHJlPlxuICAgICAgICA8L25nYy1jb2RlLWJsb2NrPlxuICAgIDwvbmdjLXRhYj5cbjwvbmdjLXRhYi1ncm91cD4gLS0+Il19