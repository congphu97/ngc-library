import { NgcIDialogRef } from '@app/@ngc/ngc-dialog';
import * as i0 from "@angular/core";
export declare class NgcDesignTokenDialogComponent {
    data: {
        json: string;
    };
    dialogRef: NgcIDialogRef;
    copied: boolean;
    activeTab: 'tokens' | 'css';
    constructor(data: {
        json: string;
    }, dialogRef: NgcIDialogRef);
    /**
     * Parse raw JSON output and return Highlighted HTML string
     */
    getHighlightedCode(): string;
    /**
     * Simple syntax highlighter regex helper
     */
    private syntaxHighlight;
    /**
     * Copy JSON to clipboard
     */
    copyJson(): void;
    /**
     * Close dialog
     */
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDesignTokenDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcDesignTokenDialogComponent, "ngc-design-token-dialog", never, {}, {}, never, never, false>;
}
