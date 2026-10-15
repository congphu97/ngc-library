import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { NGC_DIALOG_DATA, NGC_DIALOG_REF, NgcIDialogRef } from '@app/@ngc/ngc-dialog';

@Component({
	selector       : 'ngc-design-token-dialog',
	templateUrl    : './ngc-design-token-dialog.html',
	encapsulation  : ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
		.ngc-design-token-dialog {
			background: #18181b !important;
			color: #e4e4e7 !important;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
		}
		.ngc-design-token-dialog__tabs {
			display: flex;
			gap: 4px;
			margin-bottom: 12px;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
			padding-bottom: 8px;
		}
		.ngc-design-token-dialog__tab-btn {
			background: transparent;
			border: none;
			color: rgba(255, 255, 255, 0.4);
			font-size: 12px;
			font-weight: 600;
			padding: 6px 12px;
			cursor: pointer;
			border-radius: 6px;
			transition: all 0.15s ease;
			display: flex;
			align-items: center;
			gap: 6px;
		}
		.ngc-design-token-dialog__tab-btn:hover {
			color: rgba(255, 255, 255, 0.85);
			background: rgba(255, 255, 255, 0.04);
		}
		.ngc-design-token-dialog__tab-btn--active {
			color: #0ea5e9 !important; /* light blue */
			background: rgba(14, 165, 233, 0.12) !important;
		}
		.ngc-design-token-dialog__json-wrapper {
			background   : #09090b;
			border-radius: 8px;
			padding      : 16px;
			max-height   : 380px;
			overflow-y   : auto;
			border: 1px solid rgba(255, 255, 255, 0.06);
			box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
		}
		/* Custom Dark Scrollbar */
		.ngc-design-token-dialog__json-wrapper::-webkit-scrollbar {
			width: 6px;
			height: 6px;
		}
		.ngc-design-token-dialog__json-wrapper::-webkit-scrollbar-track {
			background: #09090b;
		}
		.ngc-design-token-dialog__json-wrapper::-webkit-scrollbar-thumb {
			background: rgba(255, 255, 255, 0.15);
			border-radius: 3px;
		}
		.ngc-design-token-dialog__json-wrapper::-webkit-scrollbar-thumb:hover {
			background: rgba(255, 255, 255, 0.25);
		}
		.ngc-design-token-dialog__json {
			margin     : 0;
			font-family: 'SF Mono', 'Fira Code', 'Courier New', monospace;
			font-size  : 12px;
			line-height: 1.6;
			white-space: pre-wrap;
			word-break : break-all;
		}
		/* Syntax Highlighting Colors */
		.hl-key    { color: #7dd3fc; } /* sky-300 */
		.hl-string { color: #34d399; } /* emerald-400 */
		.hl-number { color: #fbbf24; } /* amber-400 */
		.hl-bool   { color: #f472b6; } /* pink-400 */
		.hl-null   { color: #a1a1aa; } /* zinc-400 */
	`],
})
export class NgcDesignTokenDialogComponent {

	public copied: boolean = false;
	public activeTab: 'tokens' | 'css' = 'tokens';

	constructor(
		@Inject( NGC_DIALOG_DATA ) public data: { json: string },
		@Inject( NGC_DIALOG_REF  ) public dialogRef: NgcIDialogRef,
	) {}

	/**
	 * Parse raw JSON output and return Highlighted HTML string
	 */
	public getHighlightedCode(): string {
		try {
			const parsed = JSON.parse(this.data.json);
			const targetObj = this.activeTab === 'tokens' ? parsed.tokens : parsed.cssVariables;
			const jsonString = JSON.stringify(targetObj, null, 2);
			return this.syntaxHighlight(jsonString);
		} catch (e) {
			return this.syntaxHighlight(this.data.json);
		}
	}

	/**
	 * Simple syntax highlighter regex helper
	 */
	private syntaxHighlight(json: string): string {
		json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
			let cls = 'hl-number';
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					cls = 'hl-key';
					return `<span class="${cls}">${match.replace(':', '')}</span>:`;
				} else {
					cls = 'hl-string';
				}
			} else if (/true|false/.test(match)) {
				cls = 'hl-bool';
			} else if (/null/.test(match)) {
				cls = 'hl-null';
			}
			return `<span class="${cls}">${match}</span>`;
		});
	}

	/**
	 * Copy JSON to clipboard
	 */
	public copyJson() {
		try {
			const parsed = JSON.parse(this.data.json);
			const targetObj = this.activeTab === 'tokens' ? parsed.tokens : parsed.cssVariables;
			navigator.clipboard.writeText( JSON.stringify(targetObj, null, 2) ).then( () => {
				this.copied = true;
				setTimeout( () => { this.copied = false; }, 2000 );
			});
		} catch (e) {
			navigator.clipboard.writeText( this.data.json ).then( () => {
				this.copied = true;
				setTimeout( () => { this.copied = false; }, 2000 );
			});
		}
	}

	/**
	 * Close dialog
	 */
	public close() {
		this.dialogRef.close();
	}

}
