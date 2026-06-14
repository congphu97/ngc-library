import { Component, OnInit } from '@angular/core';
import tokens from '../scss/dssign-token/tokens.json';
import tokyoNight from '../scss/dssign-token/tokyo-night.json';
import tokyoNightLight from '../scss/dssign-token/tokyo-night-light.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
  activeTheme: 'default' | 'tokyo-night' = 'default';
  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark-theme');
    this.setTheme('default');
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode = isDark;
    this.setTheme(this.activeTheme);
  }

  setTheme(themeName: 'default' | 'tokyo-night') {
    this.activeTheme = themeName;
    document.documentElement.setAttribute('theme', themeName);
    if (themeName === 'tokyo-night') {
      if (this.isDarkMode) {
        this.applyDesignTokens(tokyoNight);
      } else {
        this.applyDesignTokens(tokyoNightLight);
      }
    } else {
      this.applyDesignTokens(tokens);
    }
  }

  applyDesignTokens(tokens: any, targetEl: HTMLElement = document.documentElement, prefix: string = '--ngc-') {
    const cssVariables: Record<string, string> = {};

    const convertReferenceToCssVar = (value: any): string => {
      if (typeof value !== 'string') return String(value);
      return value.replace(/\{([^}]+)\}/g, (_, pathStr) => {
        const parts = pathStr.split('.');
        const cleanParts = parts.slice(1);
        return `var(${prefix}${cleanParts.join('-')})`;
      });
    };

    const traverse = (obj: any, path: string[] = []) => {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const currentPath = [...path, key];
          const value = obj[key];

          if (typeof value === 'object' && value !== null) {
            traverse(value, currentPath);
          } else {
            const cleanPath = currentPath.slice(1);
            const varName = `${prefix}${cleanPath.join('-')}`;
            cssVariables[varName] = convertReferenceToCssVar(value);
          }
        }
      }
    };

    traverse(tokens);

    Object.entries(cssVariables).forEach(([varName, value]) => {
      targetEl.style.setProperty(varName, value);
    });
  }
}
