export interface IThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
}
export declare function Throttle(throttleTime?: number, options?: IThrottleOptions): Function;
