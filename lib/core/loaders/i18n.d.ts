import { ModuleWithProviders } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
export interface I18nAnotation {
    prefix?: string;
    loader?: Function;
}
export declare function I18n(data?: I18nAnotation): (_target: Function) => void;
export declare const I18nTranslateModule: ModuleWithProviders<TranslateModule>;
