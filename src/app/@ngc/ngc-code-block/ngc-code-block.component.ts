import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'ngc-code-block',
  templateUrl: './ngc-code-block.component.html',
  styleUrls: ['./ngc-code-block.component.scss']
})
export class NgcCodeBlockComponent implements AfterContentInit {
  @ContentChild('codeContent') codeContent: ElementRef;

  ngAfterContentInit() {
    if (this.codeContent) {
      const code = this.codeContent.nativeElement.textContent;
      const highlightedCode = this.applySyntaxHighlighting(code);
      this.codeContent.nativeElement.innerHTML = highlightedCode;
    }
  }

  private applySyntaxHighlighting(code: string): string {
    const syntaxRules = this.getSyntaxRules();
    let highlighted = code;

    for (const [pattern, className] of syntaxRules) {
      const regex = new RegExp(pattern, 'g');
      highlighted = highlighted.replace(regex, `<span class="${className}">$&</span>`);
    }

    return highlighted;
  }

  private getSyntaxRules(): [string, string][] {
    const rules: { [key: string]: string } = {
      keyword: '\\b(?:if|else|for|while|return)\\b',
      string: '"(?:[^"\\\\]|\\\\.)*"',
      number: '\\b\\d+(?:\\.\\d+)?\\b',
      comment: '\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/'
    };

    const classNames = {
      keyword: 'keyword',
      string: 'string',
      number: 'number',
      comment: 'comment'
    };

    return Object.entries(rules).map(([type, pattern]) => [pattern, classNames[type]]);
  }
}

