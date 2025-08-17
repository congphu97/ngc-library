import { NgModule } from '@angular/core';

import { I18n } from '@core';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

@NgModule({
	imports: [
		HighlightModule
	],
	exports: [],
	declarations: [
	],
	providers: [
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: {
				coreLibraryLoader: () => import('highlight.js/lib/core'),
				languages: {
					typescript: () => import('highlight.js/lib/languages/typescript'),
					javascript: () => import('highlight.js/lib/languages/javascript'),
					html: () => import('highlight.js/lib/languages/xml'),
					scss: () => import('highlight.js/lib/languages/scss'),
				}
			}
		}
	]
})
@I18n({
	prefix: 'WGC',
	loader: (lang: string) => import(`./i18n/${lang}.json`),
})
export class NgcModule { }
