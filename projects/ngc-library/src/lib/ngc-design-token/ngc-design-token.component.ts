import {
	Component, ViewEncapsulation, Input, Output, EventEmitter,
	ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef,
} from '@angular/core';
import { NgcDialogService } from '../ngc-dialog';
import { NgcDesignTokenDialogComponent } from './dialog/ngc-design-token-dialog.component';

// ─── Token model mirrors tokens.json structure ───────────────────────────────

export interface NgcIDesignTokenPrimitive {
	color: {
		blue      : { '400': string; '500': string; '700': string };
		green     : { '400': string; '500': string; '700': string };
		yellow    : { '400': string; '500': string; '700': string };
		red       : { '400': string; '500': string; '700': string };
		orange    : { '400': string; '500': string; '700': string };
		purple    : { '400': string; '500': string; '700': string };
		darkGray  : { '200': string; '300': string; '400': string; '500': string; '700': string };
		lightGray : { '200': string; '300': string; '400': string; '500': string; '700': string };
		neutral   : { white: string; black: string };
	};
	radius: { none: string; '100': string; '200': string; '300': string; '400': string; '500': string; '600': string; '700': string; full: string };
	font  : { body: string; code: string };
}

export interface NgcIDesignTokenSemantic {
	color: {
		primary : { default: string; hover: string; active: string };
		success : { default: string; hover: string; active: string; subtle: string };
		warning : { default: string; hover: string; active: string; subtle: string };
		danger  : { default: string; hover: string; active: string; subtle: string };
		info    : { default: string; hover: string; active: string; subtle: string };
		neutral : {
			background: { canvas: string; surface: string; disabled: string };
			text      : { primary: string; secondary: string; tertiary: string; disabled: string; placeholder: string };
			border    : { default: string; strong: string; subtle: string };
		};
	};
	radius: { interactive: string; container: string; overlay: string };
}

export interface NgcIDesignToken {
	primitive : NgcIDesignTokenPrimitive;
	semantic  : NgcIDesignTokenSemantic;
}

// ─── Default values from tokens.json ─────────────────────────────────────────

const DEFAULTS = {
	// primitive.color.*
	'primitive.color.blue.500'         : '#0a84ff',
	'primitive.color.blue.400'         : '#409cff',
	'primitive.color.blue.700'         : '#0040dd',
	'primitive.color.green.500'        : '#34c759',
	'primitive.color.green.400'        : '#30db5b',
	'primitive.color.green.700'        : '#248a3d',
	'primitive.color.yellow.500'       : '#dfbf00',
	'primitive.color.yellow.400'       : '#ffd426',
	'primitive.color.yellow.700'       : '#b79900',
	'primitive.color.red.500'          : '#ff3130',
	'primitive.color.red.400'          : '#ff6961',
	'primitive.color.red.700'          : '#d70015',
	'primitive.color.orange.500'       : '#ff9500',
	'primitive.color.purple.500'       : '#af52de',
	'primitive.color.neutral.white'    : '#ffffff',
	'primitive.color.neutral.black'    : '#0a0a0a',
	'primitive.color.darkGray.700'     : '#242426',
	'primitive.color.darkGray.400'     : '#545456',
	'primitive.color.lightGray.700'    : '#8e8e93',
	'primitive.color.lightGray.500'    : '#babcc0',
	'primitive.color.lightGray.400'    : '#c4c4c6',
	'primitive.color.lightGray.300'    : '#e4e4e6',
	'primitive.color.lightGray.200'    : '#eeeeee',
	// primitive.radius.*
	'primitive.radius.none'            : '0px',
	'primitive.radius.100'             : '2px',
	'primitive.radius.200'             : '4px',
	'primitive.radius.300'             : '6px',
	'primitive.radius.400'             : '8px',
	'primitive.radius.500'             : '12px',
	'primitive.radius.600'             : '16px',
	'primitive.radius.700'             : '24px',
	'primitive.radius.full'            : '9999px',
	// primitive.font.*
	'primitive.font.body'              : 'AvertaStdCY, Helvetica, sans-serif',
	'primitive.font.code'              : 'SourceCodePro, Helvetica, sans-serif',
	// semantic.radius.*   (maps to primitive.radius)
	'semantic.radius.interactive'      : '6px',   // primitive.radius.300
	'semantic.radius.container'        : '8px',   // primitive.radius.400
	'semantic.radius.overlay'          : '12px',  // primitive.radius.500
	// semantic.color.primary  (maps to blue palette)
	'semantic.color.primary.default'   : '#0a84ff',
	'semantic.color.primary.hover'     : '#409cff',
	'semantic.color.primary.active'    : '#0040dd',
	// semantic.color.success  (maps to green palette)
	'semantic.color.success.default'   : '#34c759',
	'semantic.color.success.hover'     : '#30db5b',
	'semantic.color.success.active'    : '#248a3d',
	'semantic.color.success.subtle'    : '#ecfdf3',
	// semantic.color.warning  (maps to yellow palette)
	'semantic.color.warning.default'   : '#dfbf00',
	'semantic.color.warning.hover'     : '#ffd426',
	'semantic.color.warning.active'    : '#b79900',
	'semantic.color.warning.subtle'    : '#fefdf0',
	// semantic.color.danger   (maps to red palette)
	'semantic.color.danger.default'    : '#ff3130',
	'semantic.color.danger.hover'      : '#ff6961',
	'semantic.color.danger.active'     : '#d70015',
	'semantic.color.danger.subtle'     : '#fff5f5',
	// semantic.color.info     (maps to blue palette)
	'semantic.color.info.default'      : '#0a84ff',
	'semantic.color.info.hover'        : '#409cff',
	'semantic.color.info.active'       : '#0040dd',
	'semantic.color.info.subtle'       : '#f4f8ff',
	// semantic.color.neutral.background
	'semantic.color.neutral.background.canvas'   : '#e4e4e6',
	'semantic.color.neutral.background.surface'  : '#ffffff',
	'semantic.color.neutral.background.disabled' : '#eeeeee',
	// semantic.color.neutral.text
	'semantic.color.neutral.text.primary'      : '#242426',
	'semantic.color.neutral.text.secondary'    : '#545456',
	'semantic.color.neutral.text.tertiary'     : '#8e8e93',
	'semantic.color.neutral.text.disabled'     : '#c4c4c6',
	'semantic.color.neutral.text.placeholder'  : '#c4c4c6',
	// semantic.color.neutral.border
	'semantic.color.neutral.border.default'    : '#e4e4e6',
	'semantic.color.neutral.border.strong'     : '#babcc0',
	'semantic.color.neutral.border.subtle'     : '#eeeeee',
};

/**
 * Maps token paths → CSS custom properties from variable.scss
 */
const CSS_VAR_MAP: Record<string, string> = {
	// semantic.color.primary → $color-primary
	'semantic.color.primary.default'            : '--ngc-color-primary-default',
	// semantic.color.* → $color-*
	'semantic.color.success.default'            : '--ngc-color-success-default',
	'semantic.color.warning.default'            : '--ngc-color-warning-default',
	'semantic.color.danger.default'             : '--ngc-color-danger-default',
	'semantic.color.info.default'               : '--ngc-color-info-default',
	// semantic.color.neutral → $color-text, $color-label…
	'semantic.color.neutral.text.primary'       : '--ngc-color-neutral-text-primary',
	'semantic.color.neutral.text.secondary'     : '--ngc-color-neutral-text-secondary',
	'semantic.color.neutral.text.tertiary'      : '--ngc-color-neutral-text-tertiary',
	'semantic.color.neutral.text.disabled'      : '--ngc-color-neutral-text-disabled',
	'semantic.color.neutral.text.placeholder'   : '--ngc-color-neutral-text-placeholder',
	'semantic.color.neutral.background.canvas'  : '--ngc-color-neutral-background-canvas',
	'semantic.color.neutral.background.surface' : '--ngc-color-neutral-background-surface',
	'semantic.color.neutral.background.disabled': '--ngc-color-neutral-background-disabled',
	'semantic.color.neutral.border.default'     : '--ngc-color-neutral-border-default',
	'semantic.color.neutral.border.strong'      : '--ngc-color-neutral-border-strong',
	// primitive.color.neutral → $color-black / $color-white
	'primitive.color.neutral.white'             : '--ngc-color-neutral-white',
	'primitive.color.neutral.black'             : '--ngc-color-neutral-black',
	// Additional colors from variable.scss
	'color.secondary'                           : '--ngc-color-neutral-background-canvas',
	'color.default'                             : '--ngc-color-neutral-background-disabled',
	'color.active'                              : '--ngc-color-info-subtle',
	'color.highlight'                           : '--ngc-color-warning-subtle',
	// semantic.radius → $radius-300/400/500
	'semantic.radius.interactive'               : '--ngc-radius-300',
	'semantic.radius.container'                 : '--ngc-radius-400',
	'semantic.radius.overlay'                   : '--ngc-radius-500',
	// Additional raw border radius
	'radius.none'                               : '--ngc-radius-none',
	'radius.100'                                : '--ngc-radius-100',
	'radius.200'                                : '--ngc-radius-200',
	'radius.600'                                : '--ngc-radius-600',
	'radius.700'                                : '--ngc-radius-700',
	'radius.full'                               : '--ngc-radius-full',
	// primitive.font → $font-family-body/code
	'primitive.font.body'                       : '--ngc-font-body',
	'primitive.font.code'                       : '--ngc-font-code',
	// font sizes → $font-size-* (variable.scss)
	'font.size.mini'                            : '--ngc-font-size-mini',
	'font.size.small'                           : '--ngc-font-size-small',
	'font.size.base'                            : '--ngc-font-size-base',
	'font.size.large'                           : '--ngc-font-size-large',
	'font.size.xlarge'                          : '--ngc-font-size-xlarge',
	'font.size.xxlarge'                         : '--ngc-font-size-xxlarge',
	// font weights → $font-weight-* (variable.scss)
	'font.weight.normal'                        : '--ngc-font-weight-normal',
	'font.weight.semibold'                      : '--ngc-font-weight-semibold',
	'font.weight.bold'                          : '--ngc-font-weight-bold',
	// box shadows → $box-shadow-* (variable.scss)
	'box.shadow.default'                        : '--ngc-box-shadow',
	'box.shadow.thick'                          : '--ngc-box-shadow-thick',
	'box.shadow.focus'                          : '--ngc-box-shadow-focus',
};

@Component({
	selector    : 'ngc-design-token',
	templateUrl : './ngc-design-token.html',
	styleUrls   : [ './ngc-design-token.scss' ],
	host        : { class: 'ngc-design-token' },
	encapsulation  : ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgcDesignTokenComponent implements OnInit, OnDestroy {

	@Input()  public tokens: NgcIDesignToken;
	@Output() public tokenChange: EventEmitter<NgcIDesignToken> = new EventEmitter<NgcIDesignToken>();

	// ── Select options ─────────────────────────────────────────────────────────

	public radiusOptions = [
		{ label: 'none — 0px',     value: '0px'    },
		{ label: '100 — 2px',      value: '2px'    },
		{ label: '200 — 4px',      value: '4px'    },
		{ label: '300 — 6px',      value: '6px'    },
		{ label: '400 — 8px',      value: '8px'    },
		{ label: '500 — 12px',     value: '12px'   },
		{ label: '600 — 16px',     value: '16px'   },
		{ label: '700 — 24px',     value: '24px'   },
		{ label: 'full — 9999px',  value: '9999px' },
	];

	public fontOptions = [
		{ label: 'AvertaStdCY',  value: 'AvertaStdCY, Helvetica, sans-serif'           },
		{ label: 'Inter',        value: 'Inter, Helvetica, sans-serif'                  },
		{ label: 'Roboto',       value: 'Roboto, Helvetica, sans-serif'                 },
		{ label: 'SF Pro',       value: '-apple-system, BlinkMacSystemFont, sans-serif' },
		{ label: 'System UI',    value: 'system-ui, sans-serif'                         },
	];

	public spacingOptions = [
		{ label: 'compact — 4px',  value: '4px'  },
		{ label: 'default — 8px',  value: '8px'  },
		{ label: 'relaxed — 12px', value: '12px' },
	];

	public spacingBase: string = '8px';

	// ── Token fields — mirrors tokens.json keys ───────────────────────────────

	// semantic.color.primary
	public semanticColorPrimaryDefault : string = DEFAULTS['semantic.color.primary.default'];
	// semantic.color.success
	public semanticColorSuccessDefault : string = DEFAULTS['semantic.color.success.default'];
	public semanticColorSuccessSubtle  : string = DEFAULTS['semantic.color.success.subtle'];
	// semantic.color.warning
	public semanticColorWarningDefault : string = DEFAULTS['semantic.color.warning.default'];
	public semanticColorWarningSubtle  : string = DEFAULTS['semantic.color.warning.subtle'];
	// semantic.color.danger
	public semanticColorDangerDefault  : string = DEFAULTS['semantic.color.danger.default'];
	public semanticColorDangerSubtle   : string = DEFAULTS['semantic.color.danger.subtle'];
	// semantic.color.info
	public semanticColorInfoDefault    : string = DEFAULTS['semantic.color.info.default'];
	public semanticColorInfoSubtle     : string = DEFAULTS['semantic.color.info.subtle'];
	// semantic.color.neutral.background
	public semanticColorBgCanvas       : string = DEFAULTS['semantic.color.neutral.background.canvas'];
	public semanticColorBgSurface      : string = DEFAULTS['semantic.color.neutral.background.surface'];
	public semanticColorBgDisabled     : string = DEFAULTS['semantic.color.neutral.background.disabled'];
	// semantic.color.neutral.text
	public semanticColorTextPrimary    : string = DEFAULTS['semantic.color.neutral.text.primary'];
	public semanticColorTextSecondary  : string = DEFAULTS['semantic.color.neutral.text.secondary'];
	public semanticColorTextTertiary   : string = DEFAULTS['semantic.color.neutral.text.tertiary'];
	public semanticColorTextDisabled   : string = DEFAULTS['semantic.color.neutral.text.disabled'];
	public semanticColorTextPlaceholder: string = DEFAULTS['semantic.color.neutral.text.placeholder'];
	// semantic.color.neutral.border
	public semanticColorBorderDefault  : string = DEFAULTS['semantic.color.neutral.border.default'];
	public semanticColorBorderStrong   : string = DEFAULTS['semantic.color.neutral.border.strong'];
	public semanticColorBorderSubtle   : string = DEFAULTS['semantic.color.neutral.border.subtle'];
	// primitive.color.neutral
	public primitiveColorWhite         : string = DEFAULTS['primitive.color.neutral.white'];
	public primitiveColorBlack         : string = DEFAULTS['primitive.color.neutral.black'];
	
	// Additional colors from variable.scss
	public colorSecondary : string = '#fafafa';
	public colorDefault   : string = '#f5f5f5';
	public colorActive    : string = '#ecf5ff';
	public colorHighlight : string = '#f4f0d9';

	// semantic.radius
	public semanticRadiusInteractive   : string = DEFAULTS['semantic.radius.interactive'];
	public semanticRadiusContainer     : string = DEFAULTS['semantic.radius.container'];
	public semanticRadiusOverlay       : string = DEFAULTS['semantic.radius.overlay'];

	// Additional raw border radius
	public radiusNone : string = '0px';
	public radius100  : string = '2px';
	public radius200  : string = '4px';
	public radius600  : string = '16px';
	public radius700  : string = '24px';
	public radiusFull : string = '9999px';
	// primitive.font
	public primitiveFontBody           : string = DEFAULTS['primitive.font.body'];
	public primitiveFontCode           : string = DEFAULTS['primitive.font.code'];
	// font sizes — maps to $font-size-* via --ngc-font-size-*
	public fontSizeMini    : string = '10px';
	public fontSizeSmall   : string = '12px';
	public fontSizeBase    : string = '14px';
	public fontSizeLarge   : string = '16px';
	public fontSizeXlarge  : string = '18px';
	public fontSizeXxlarge : string = '20px';
	// number helpers bound to <input type="number">
	public fontSizeMiniVal    : number = 10;
	public fontSizeSmallVal   : number = 12;
	public fontSizeBaseVal    : number = 14;
	public fontSizeLargeVal   : number = 16;
	public fontSizeXlargeVal  : number = 18;
	public fontSizeXxlargeVal : number = 20;
	// font weights → $font-weight-* via --ngc-font-weight-*
	public fontWeightNormal   : number = 400;
	public fontWeightSemibold : number = 600;
	public fontWeightBold     : number = 700;
	// box shadows → $box-shadow-* via --ngc-box-shadow-*
	public boxShadowDefault : string = '0 8px 10px -2px rgba(0, 0, 0, .15)';
	public boxShadowThick   : string = '0 10px 23px 2px rgba(36, 36, 38, .4)';
	public boxShadowFocus   : string = '0 14px 24px -4px rgba(228, 228, 228, .4)';

	private _originalVars: Record<string, string> = {};

	constructor(
		private _ngcDialogService: NgcDialogService,
		private _cdr: ChangeDetectorRef,
	) {}

	ngOnInit() {
		this._snapshotOriginalVars();
	}

	ngOnDestroy() {
		// Restore original vars when component leaves
		const root = document.documentElement;
		Object.entries( this._originalVars ).forEach( ([ prop, val ]) => {
			val ? root.style.setProperty( prop, val ) : root.style.removeProperty( prop );
		});
	}

	/**
	 * Called by template on any token change → apply to :root CSS vars
	 */
	public onValueChange() {
		this._applyCssVars();
		this.tokenChange.emit( this._buildToken() );
		this._cdr.markForCheck();
	}

	/**
	 * Reset all tokens to defaults from tokens.json
	 */
	public resetTokens() {
		Object.assign( this, {
			semanticColorPrimaryDefault  : DEFAULTS['semantic.color.primary.default'],
			semanticColorSuccessDefault  : DEFAULTS['semantic.color.success.default'],
			semanticColorSuccessSubtle   : DEFAULTS['semantic.color.success.subtle'],
			semanticColorWarningDefault  : DEFAULTS['semantic.color.warning.default'],
			semanticColorWarningSubtle   : DEFAULTS['semantic.color.warning.subtle'],
			semanticColorDangerDefault   : DEFAULTS['semantic.color.danger.default'],
			semanticColorDangerSubtle    : DEFAULTS['semantic.color.danger.subtle'],
			semanticColorInfoDefault     : DEFAULTS['semantic.color.info.default'],
			semanticColorInfoSubtle      : DEFAULTS['semantic.color.info.subtle'],
			semanticColorBgCanvas        : DEFAULTS['semantic.color.neutral.background.canvas'],
			semanticColorBgSurface       : DEFAULTS['semantic.color.neutral.background.surface'],
			semanticColorBgDisabled      : DEFAULTS['semantic.color.neutral.background.disabled'],
			semanticColorTextPrimary     : DEFAULTS['semantic.color.neutral.text.primary'],
			semanticColorTextSecondary   : DEFAULTS['semantic.color.neutral.text.secondary'],
			semanticColorTextTertiary    : DEFAULTS['semantic.color.neutral.text.tertiary'],
			semanticColorTextDisabled    : DEFAULTS['semantic.color.neutral.text.disabled'],
			semanticColorTextPlaceholder : DEFAULTS['semantic.color.neutral.text.placeholder'],
			semanticColorBorderDefault   : DEFAULTS['semantic.color.neutral.border.default'],
			semanticColorBorderStrong    : DEFAULTS['semantic.color.neutral.border.strong'],
			semanticColorBorderSubtle    : DEFAULTS['semantic.color.neutral.border.subtle'],
			primitiveColorWhite          : DEFAULTS['primitive.color.neutral.white'],
			primitiveColorBlack          : DEFAULTS['primitive.color.neutral.black'],
			semanticRadiusInteractive    : DEFAULTS['semantic.radius.interactive'],
			semanticRadiusContainer      : DEFAULTS['semantic.radius.container'],
			semanticRadiusOverlay        : DEFAULTS['semantic.radius.overlay'],
			primitiveFontBody            : DEFAULTS['primitive.font.body'],
			primitiveFontCode            : DEFAULTS['primitive.font.code'],
			colorSecondary               : '#fafafa',
			colorDefault                 : '#f5f5f5',
			colorActive                  : '#ecf5ff',
			colorHighlight               : '#f4f0d9',
			radiusNone                   : '0px',
			radius100                    : '2px',
			radius200                    : '4px',
			radius600                    : '16px',
			radius700                    : '24px',
			radiusFull                   : '9999px',
			fontSizeMini                 : '10px',
			fontSizeSmall                : '12px',
			fontSizeBase                 : '14px',
			fontSizeLarge                : '16px',
			fontSizeXlarge               : '18px',
			fontSizeXxlarge              : '20px',
			fontSizeMiniVal    : 10,
			fontSizeSmallVal   : 12,
			fontSizeBaseVal    : 14,
			fontSizeLargeVal   : 16,
			fontSizeXlargeVal  : 18,
			fontSizeXxlargeVal : 20,
			fontWeightNormal   : 400,
			fontWeightSemibold : 600,
			fontWeightBold     : 700,
			boxShadowDefault   : '0 8px 10px -2px rgba(0, 0, 0, .15)',
			boxShadowThick     : '0 10px 23px 2px rgba(36, 36, 38, .4)',
			boxShadowFocus     : '0 14px 24px -4px rgba(228, 228, 228, .4)',
		});

		// Remove all inline overrides
		const root = document.documentElement;
		Object.values( CSS_VAR_MAP ).forEach( prop => root.style.removeProperty( prop ) );

		this.tokenChange.emit( this._buildToken() );
		this._cdr.markForCheck();
	}

	/**
	 * Open dialog with JSON and CSS var output
	 */
	public openTokenDialog() {
		this._ngcDialogService.open( NgcDesignTokenDialogComponent, {
			data     : { json: JSON.stringify( this._buildCssVarOutput(), null, 2 ) },
			width    : '680px',
			maxHeight: '90vh',
		});
	}

	// ── Private ────────────────────────────────────────────────────────────────

	private _snapshotOriginalVars() {
		const computed = getComputedStyle( document.documentElement );
		Object.values( CSS_VAR_MAP ).forEach( prop => {
			this._originalVars[ prop ] = computed.getPropertyValue( prop ).trim();
		});
	}

	/**
	 * Apply each token field's value to the corresponding --ngc-* CSS variable on :root
	 * Following the mapping: token path → CSS_VAR_MAP → variable.scss SCSS variable
	 */
	private _applyCssVars() {
		const root = document.documentElement;
		const map: Record<string, string> = {
			'semantic.color.primary.default'            : this.semanticColorPrimaryDefault,
			'semantic.color.success.default'            : this.semanticColorSuccessDefault,
			'semantic.color.warning.default'            : this.semanticColorWarningDefault,
			'semantic.color.danger.default'             : this.semanticColorDangerDefault,
			'semantic.color.info.default'               : this.semanticColorInfoDefault,
			'semantic.color.neutral.text.primary'       : this.semanticColorTextPrimary,
			'semantic.color.neutral.text.secondary'     : this.semanticColorTextSecondary,
			'semantic.color.neutral.text.tertiary'      : this.semanticColorTextTertiary,
			'semantic.color.neutral.text.disabled'      : this.semanticColorTextDisabled,
			'semantic.color.neutral.text.placeholder'   : this.semanticColorTextPlaceholder,
			'semantic.color.neutral.background.canvas'  : this.semanticColorBgCanvas,
			'semantic.color.neutral.background.surface' : this.semanticColorBgSurface,
			'semantic.color.neutral.background.disabled': this.semanticColorBgDisabled,
			'semantic.color.neutral.border.default'     : this.semanticColorBorderDefault,
			'semantic.color.neutral.border.strong'      : this.semanticColorBorderStrong,
			'primitive.color.neutral.white'             : this.primitiveColorWhite,
			'primitive.color.neutral.black'             : this.primitiveColorBlack,
			'semantic.radius.interactive'               : this.semanticRadiusInteractive,
			'semantic.radius.container'                 : this.semanticRadiusContainer,
			'semantic.radius.overlay'                   : this.semanticRadiusOverlay,
			'primitive.font.body'                       : this.primitiveFontBody,
			'primitive.font.code'                       : this.primitiveFontCode,
			// Additional colors
			'color.secondary'                           : this.colorSecondary,
			'color.default'                             : this.colorDefault,
			'color.active'                              : this.colorActive,
			'color.highlight'                           : this.colorHighlight,
			// Additional radius
			'radius.none'                               : this.radiusNone,
			'radius.100'                                : this.radius100,
			'radius.200'                                : this.radius200,
			'radius.600'                                : this.radius600,
			'radius.700'                                : this.radius700,
			'radius.full'                               : this.radiusFull,
			// font sizes → --ngc-font-size-* → $font-size-* in variable.scss
			'font.size.mini'                            : this.fontSizeMini,
			'font.size.small'                           : this.fontSizeSmall,
			'font.size.base'                            : this.fontSizeBase,
			'font.size.large'                           : this.fontSizeLarge,
			'font.size.xlarge'                          : this.fontSizeXlarge,
			'font.size.xxlarge'                         : this.fontSizeXxlarge,
			// font weights → --ngc-font-weight-* → $font-weight-* in variable.scss
			'font.weight.normal'                        : String( this.fontWeightNormal ),
			'font.weight.semibold'                      : String( this.fontWeightSemibold ),
			'font.weight.bold'                          : String( this.fontWeightBold ),
			// box shadows → --ngc-box-shadow-* → $box-shadow-* in variable.scss
			'box.shadow.default'                        : this.boxShadowDefault,
			'box.shadow.thick'                          : this.boxShadowThick,
			'box.shadow.focus'                          : this.boxShadowFocus,
		};

		Object.entries( map ).forEach( ([ tokenPath, val ]) => {
			const cssVar = CSS_VAR_MAP[ tokenPath ];
			if ( cssVar && val ) root.style.setProperty( cssVar, val );
		});
	}

	/**
	 * Build output that matches tokens.json structure exactly
	 */
	private _buildToken(): any {
		return {
			primitive: {
				color: {
					blue      : { '400': '#409cff', '500': '#0a84ff', '700': '#0040dd' },
					green     : { '400': '#30db5b', '500': '#34c759', '700': '#248a3d' },
					yellow    : { '400': '#ffd426', '500': '#dfbf00', '700': '#b79900' },
					red       : { '400': '#ff6961', '500': '#ff3130', '700': '#d70015' },
					orange    : { '400': '#ffb35b', '500': '#ff9500', '700': '#cb6f10' },
					purple    : { '400': '#da8fff', '500': '#af52de', '700': '#8944ab' },
					darkGray  : { '200': '#7c7c80', '300': '#6c6c70', '400': '#545456', '500': '#444446', '700': this.semanticColorTextPrimary },
					lightGray : { '200': this.semanticColorBorderSubtle, '300': this.semanticColorBorderDefault, '400': this.semanticColorTextDisabled, '500': this.semanticColorBorderStrong, '700': this.semanticColorTextTertiary },
					neutral   : { 
						white: this.primitiveColorWhite, 
						black: this.primitiveColorBlack,
						secondary: this.colorSecondary,
						default: this.colorDefault,
						active: this.colorActive,
						highlight: this.colorHighlight
					},
				},
				radius: { 
					none: this.radiusNone, 
					'100': this.radius100, 
					'200': this.radius200, 
					'300': this.semanticRadiusInteractive, 
					'400': this.semanticRadiusContainer, 
					'500': this.semanticRadiusOverlay, 
					'600': this.radius600, 
					'700': this.radius700, 
					full: this.radiusFull 
				},
				font  : { 
					body: this.primitiveFontBody, 
					code: this.primitiveFontCode,
					size: {
						mini: this.fontSizeMini,
						small: this.fontSizeSmall,
						base: this.fontSizeBase,
						large: this.fontSizeLarge,
						xlarge: this.fontSizeXlarge,
						xxlarge: this.fontSizeXxlarge
					},
					weight: {
						normal: this.fontWeightNormal,
						semibold: this.fontWeightSemibold,
						bold: this.fontWeightBold
					}
				},
				shadow: {
					default: this.boxShadowDefault,
					thick: this.boxShadowThick,
					focus: this.boxShadowFocus
				}
			},
			semantic: {
				color: {
					primary : { default: this.semanticColorPrimaryDefault, hover: this.semanticColorPrimaryDefault, active: this.semanticColorPrimaryDefault },
					success : { default: this.semanticColorSuccessDefault, hover: this.semanticColorSuccessDefault, active: this.semanticColorSuccessDefault, subtle: this.semanticColorSuccessSubtle },
					warning : { default: this.semanticColorWarningDefault, hover: this.semanticColorWarningDefault, active: this.semanticColorWarningDefault, subtle: this.semanticColorWarningSubtle },
					danger  : { default: this.semanticColorDangerDefault,  hover: this.semanticColorDangerDefault,  active: this.semanticColorDangerDefault,  subtle: this.semanticColorDangerSubtle  },
					info    : { default: this.semanticColorInfoDefault,    hover: this.semanticColorInfoDefault,    active: this.semanticColorInfoDefault,    subtle: this.semanticColorInfoSubtle    },
					neutral : {
						background: { canvas: this.semanticColorBgCanvas,   surface: this.semanticColorBgSurface, disabled: this.semanticColorBgDisabled },
						text      : { primary: this.semanticColorTextPrimary, secondary: this.semanticColorTextSecondary, tertiary: this.semanticColorTextTertiary, disabled: this.semanticColorTextDisabled, placeholder: this.semanticColorTextPlaceholder },
						border    : { default: this.semanticColorBorderDefault, strong: this.semanticColorBorderStrong, subtle: this.semanticColorBorderSubtle },
					},
				},
				radius: { interactive: this.semanticRadiusInteractive, container: this.semanticRadiusContainer, overlay: this.semanticRadiusOverlay },
			},
		};
	}

	/**
	 * Build JSON for dialog — CSS vars + token JSON side by side
	 */
	private _buildCssVarOutput(): object {
		const cssVariables: Record<string, string> = Object.entries( CSS_VAR_MAP )
			.reduce( ( acc, [ tokenPath, cssVar ] ) => {
				const field = this._tokenPathToField( tokenPath );
				acc[ cssVar ] = field ? ( this as any )[ field ] || DEFAULTS[ tokenPath ] : DEFAULTS[ tokenPath ];
				return acc;
			}, {} as Record<string, string> );

		return {
			cssVariables,
			tokens: this._buildToken(),
		};
	}

	private _tokenPathToField( tokenPath: string ): string {
		const map: Record<string, string> = {
			'semantic.color.primary.default'            : 'semanticColorPrimaryDefault',
			'semantic.color.success.default'            : 'semanticColorSuccessDefault',
			'semantic.color.warning.default'            : 'semanticColorWarningDefault',
			'semantic.color.danger.default'             : 'semanticColorDangerDefault',
			'semantic.color.info.default'               : 'semanticColorInfoDefault',
			'semantic.color.neutral.text.primary'       : 'semanticColorTextPrimary',
			'semantic.color.neutral.text.secondary'     : 'semanticColorTextSecondary',
			'semantic.color.neutral.text.tertiary'      : 'semanticColorTextTertiary',
			'semantic.color.neutral.text.disabled'      : 'semanticColorTextDisabled',
			'semantic.color.neutral.text.placeholder'   : 'semanticColorTextPlaceholder',
			'semantic.color.neutral.background.canvas'  : 'semanticColorBgCanvas',
			'semantic.color.neutral.background.surface' : 'semanticColorBgSurface',
			'semantic.color.neutral.background.disabled': 'semanticColorBgDisabled',
			'semantic.color.neutral.border.default'     : 'semanticColorBorderDefault',
			'semantic.color.neutral.border.strong'      : 'semanticColorBorderStrong',
			'primitive.color.neutral.white'             : 'primitiveColorWhite',
			'primitive.color.neutral.black'             : 'primitiveColorBlack',
			'color.secondary'                           : 'colorSecondary',
			'color.default'                             : 'colorDefault',
			'color.active'                              : 'colorActive',
			'color.highlight'                           : 'colorHighlight',
			'semantic.radius.interactive'               : 'semanticRadiusInteractive',
			'semantic.radius.container'                 : 'semanticRadiusContainer',
			'semantic.radius.overlay'                   : 'semanticRadiusOverlay',
			'radius.none'                               : 'radiusNone',
			'radius.100'                                : 'radius100',
			'radius.200'                                : 'radius200',
			'radius.600'                                : 'radius600',
			'radius.700'                                : 'radius700',
			'radius.full'                               : 'radiusFull',
			'primitive.font.body'                       : 'primitiveFontBody',
			'primitive.font.code'                       : 'primitiveFontCode',
			'font.weight.normal'                        : 'fontWeightNormal',
			'font.weight.semibold'                      : 'fontWeightSemibold',
			'font.weight.bold'                          : 'fontWeightBold',
			'box.shadow.default'                        : 'boxShadowDefault',
			'box.shadow.thick'                          : 'boxShadowThick',
			'box.shadow.focus'                          : 'boxShadowFocus',
		};
		return map[ tokenPath ] || '';
	}

}
