import { EventEmitter, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgcDialogService } from '../ngc-dialog';
import * as i0 from "@angular/core";
export interface NgcIDesignTokenPrimitive {
    color: {
        blue: {
            '400': string;
            '500': string;
            '700': string;
        };
        green: {
            '400': string;
            '500': string;
            '700': string;
        };
        yellow: {
            '400': string;
            '500': string;
            '700': string;
        };
        red: {
            '400': string;
            '500': string;
            '700': string;
        };
        orange: {
            '400': string;
            '500': string;
            '700': string;
        };
        purple: {
            '400': string;
            '500': string;
            '700': string;
        };
        darkGray: {
            '200': string;
            '300': string;
            '400': string;
            '500': string;
            '700': string;
        };
        lightGray: {
            '200': string;
            '300': string;
            '400': string;
            '500': string;
            '700': string;
        };
        neutral: {
            white: string;
            black: string;
        };
    };
    radius: {
        none: string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        full: string;
    };
    font: {
        body: string;
        code: string;
    };
}
export interface NgcIDesignTokenSemantic {
    color: {
        primary: {
            default: string;
            hover: string;
            active: string;
        };
        success: {
            default: string;
            hover: string;
            active: string;
            subtle: string;
        };
        warning: {
            default: string;
            hover: string;
            active: string;
            subtle: string;
        };
        danger: {
            default: string;
            hover: string;
            active: string;
            subtle: string;
        };
        info: {
            default: string;
            hover: string;
            active: string;
            subtle: string;
        };
        neutral: {
            background: {
                canvas: string;
                surface: string;
                disabled: string;
            };
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                disabled: string;
                placeholder: string;
            };
            border: {
                default: string;
                strong: string;
                subtle: string;
            };
        };
    };
    radius: {
        interactive: string;
        container: string;
        overlay: string;
    };
}
export interface NgcIDesignToken {
    primitive: NgcIDesignTokenPrimitive;
    semantic: NgcIDesignTokenSemantic;
}
export declare class NgcDesignTokenComponent implements OnInit, OnDestroy {
    private _ngcDialogService;
    private _cdr;
    tokens: NgcIDesignToken;
    tokenChange: EventEmitter<NgcIDesignToken>;
    radiusOptions: {
        label: string;
        value: string;
    }[];
    fontOptions: {
        label: string;
        value: string;
    }[];
    spacingOptions: {
        label: string;
        value: string;
    }[];
    spacingBase: string;
    semanticColorPrimaryDefault: string;
    semanticColorSuccessDefault: string;
    semanticColorSuccessSubtle: string;
    semanticColorWarningDefault: string;
    semanticColorWarningSubtle: string;
    semanticColorDangerDefault: string;
    semanticColorDangerSubtle: string;
    semanticColorInfoDefault: string;
    semanticColorInfoSubtle: string;
    semanticColorBgCanvas: string;
    semanticColorBgSurface: string;
    semanticColorBgDisabled: string;
    semanticColorTextPrimary: string;
    semanticColorTextSecondary: string;
    semanticColorTextTertiary: string;
    semanticColorTextDisabled: string;
    semanticColorTextPlaceholder: string;
    semanticColorBorderDefault: string;
    semanticColorBorderStrong: string;
    semanticColorBorderSubtle: string;
    primitiveColorWhite: string;
    primitiveColorBlack: string;
    colorSecondary: string;
    colorDefault: string;
    colorActive: string;
    colorHighlight: string;
    semanticRadiusInteractive: string;
    semanticRadiusContainer: string;
    semanticRadiusOverlay: string;
    radiusNone: string;
    radius100: string;
    radius200: string;
    radius600: string;
    radius700: string;
    radiusFull: string;
    primitiveFontBody: string;
    primitiveFontCode: string;
    fontSizeMini: string;
    fontSizeSmall: string;
    fontSizeBase: string;
    fontSizeLarge: string;
    fontSizeXlarge: string;
    fontSizeXxlarge: string;
    fontSizeMiniVal: number;
    fontSizeSmallVal: number;
    fontSizeBaseVal: number;
    fontSizeLargeVal: number;
    fontSizeXlargeVal: number;
    fontSizeXxlargeVal: number;
    fontWeightNormal: number;
    fontWeightSemibold: number;
    fontWeightBold: number;
    boxShadowDefault: string;
    boxShadowThick: string;
    boxShadowFocus: string;
    private _originalVars;
    constructor(_ngcDialogService: NgcDialogService, _cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Called by template on any token change → apply to :root CSS vars
     */
    onValueChange(): void;
    /**
     * Reset all tokens to defaults from tokens.json
     */
    resetTokens(): void;
    /**
     * Open dialog with JSON and CSS var output
     */
    openTokenDialog(): void;
    private _snapshotOriginalVars;
    /**
     * Apply each token field's value to the corresponding --ngc-* CSS variable on :root
     * Following the mapping: token path → CSS_VAR_MAP → variable.scss SCSS variable
     */
    private _applyCssVars;
    /**
     * Build output that matches tokens.json structure exactly
     */
    private _buildToken;
    /**
     * Build JSON for dialog — CSS vars + token JSON side by side
     */
    private _buildCssVarOutput;
    private _tokenPathToField;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgcDesignTokenComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgcDesignTokenComponent, "ngc-design-token", never, { "tokens": "tokens"; }, { "tokenChange": "tokenChange"; }, never, never, false>;
}
