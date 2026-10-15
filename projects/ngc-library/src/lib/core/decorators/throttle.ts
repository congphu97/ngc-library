import _ from 'lodash';

export interface IThrottleOptions {
	leading?: boolean;
	trailing?: boolean;
}

export function Throttle( throttleTime?: number, options?: IThrottleOptions ): Function {
	return function( _target: any, _key: any, descriptor: any ) {
		const oldFunction: Function = descriptor.value;
		const newFunction: Function = _.throttle( oldFunction, throttleTime, options );

		descriptor.value = function() {
			try {
				return newFunction.apply( this, arguments );
			} catch {
				return oldFunction.apply( this, arguments );
			}
		};
	};
}
