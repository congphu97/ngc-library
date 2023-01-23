import _ from 'lodash';

export interface IDebounceOptions {
	leading?: boolean;
	trailing?: boolean;
}

export function Debounce( debounceTime?: number, options?: IDebounceOptions ): Function {
	return function( _target: any, _key: any, descriptor: any ) {
		const oldFunction: Function = descriptor.value;
		const newFunction: Function = _.debounce( oldFunction, debounceTime, options );

		descriptor.value = function() {
			try {
				return newFunction.apply( this, arguments );
			} catch {
				return oldFunction.apply( this, arguments );
			}
		};
	};
}
