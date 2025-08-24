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

import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import hljs from 'highlight.js/lib/core';

// Import các language cần dùng, ví dụ typescript, css, html
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml'; // html

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', xml);

@Component({
  selector: 'ngc-code-block',
  templateUrl: './ngc-code-block.component.html',
  styleUrls: ['./ngc-code-block.component.scss']
})
export class NgcCodeBlockComponent implements AfterViewInit, OnChanges {
  @Input() code = '';
  @Input() language = 'typescript';

  @ViewChild('codeElem') codeElem!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['code'] && !changes['code'].isFirstChange()) {
      this.highlight();
    }
  }

  highlight() {
    if (this.codeElem) {
      hljs.highlightElement(this.codeElem.nativeElement);
    }
  }
}


