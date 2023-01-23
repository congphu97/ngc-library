import _ from 'lodash';

export const calculateOrders: ReturnType<typeof _.memoize> = _.memoize(
	( orders: number[], index: number = 0, count: number = 1 ): IObject<number> => {
		const nextIndex: number = index + count;
		const nextOrder: number = orders[ nextIndex ];
		let prevIndex: number = index - 1;
		let prevOrder: number = orders[ prevIndex ];

		if ( prevOrder === nextOrder ) {
			while ( prevIndex > 0 && prevOrder === nextOrder ) {
				prevOrder = orders[ --prevIndex ];
			}

			if ( !prevOrder || prevOrder === nextOrder ) {
				prevIndex = -1;
				prevOrder = undefined;
				count = nextIndex;
			}

			count = nextIndex - prevIndex - 1;
		}

		const newOrders: IObject<number> = {};

		for ( let i: number = 0; i < count; i++ ) {
			newOrders[ prevIndex + i + 1 ] = calculateOrder( prevOrder, nextOrder, i, count );
		}

		return newOrders;
	},
	function() { return JSON.stringify( arguments ); }
);

export const calculateOrder: ReturnType<typeof _.memoize> = _.memoize(
	( preOrder: number, nextOrder: number, index: number = 0, count: number = 1 ): number => {
		if ( !preOrder ) preOrder = 0;
		if ( !nextOrder ) nextOrder = Math.floor( preOrder ) + 1;
		if ( preOrder === nextOrder ) return preOrder;

		return preOrder + ( ( ( nextOrder - preOrder ) / ( count + 1 ) ) * ( index + 1 ) );
	},
	function() { return JSON.stringify( arguments ); }
);
