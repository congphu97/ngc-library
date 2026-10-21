export interface IDebounceOptions {
    leading?: boolean;
    trailing?: boolean;
}
export declare function Debounce(debounceTime?: number, options?: IDebounceOptions): Function;
