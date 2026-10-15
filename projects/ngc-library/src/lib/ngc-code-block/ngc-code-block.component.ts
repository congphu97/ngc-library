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

import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnChanges, SimpleChanges, TemplateRef, ContentChild, AfterContentInit, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class NgcCodeBlockComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {

  @Input() codeTemplate?: TemplateRef<any>;
  @Input() code = '';
  @Input() language = 'typescript';

  @ViewChild('codeElem') codeElem!: ElementRef<HTMLElement>;
  @ContentChild('codeContent', { read: ElementRef }) codeContent?: ElementRef<HTMLElement>;

  projectedCode = '';
  copied = false;

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.detectAndHighlightProjectedCode();
  }

  ngAfterViewInit() {
    this.detectAndHighlightProjectedCode();
    this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['code'] && !changes['code'].isFirstChange()) {
      this.highlight();
    }
  }

  private detectAndHighlightProjectedCode() {
    // If we have contentChild `#codeContent`
    if (this.codeContent) {
      this.projectedCode = this.codeContent.nativeElement.textContent || '';
      hljs.highlightElement(this.codeContent.nativeElement);
    } else {
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

  getLanguageLabel(): string {
    const lang = this.language || 'code';
    if (lang.toLowerCase() === 'typescript') return 'TypeScript';
    if (lang.toLowerCase() === 'javascript') return 'JavaScript';
    if (lang.toLowerCase() === 'html') return 'HTML';
    if (lang.toLowerCase() === 'css') return 'CSS';
    if (lang.toLowerCase() === 'scss') return 'SCSS';
    if (lang.toLowerCase() === 'json') return 'JSON';
    return lang;
  }

  getLanguageColor(): string {
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
    if (!textToCopy) return;

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


