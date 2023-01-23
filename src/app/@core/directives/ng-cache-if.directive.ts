import {
	Directive, Input, EmbeddedViewRef,
	TemplateRef, ViewContainerRef, SimpleChanges,
	OnChanges, OnDestroy
} from '@angular/core';

@Directive({ selector: '[ngCacheIf]', exportAs: 'ngCacheIf' })
export class NgCacheIfDirective implements OnChanges, OnDestroy {

	@Input() public ngCacheIf: any;
	@Input() public ngCacheIfElse: TemplateRef<any>;

	private _loaded: { [ key: string ]: EmbeddedViewRef<any> } = {};

	/**
	 * @constructor
	 * @param {TemplateRef<any>} _templateRef
	 * @param {ViewContainerRef} _vcRef
	 */
	constructor( private _templateRef: TemplateRef<any>, private _vcRef: ViewContainerRef ) {}

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.ngCacheIf ) return;

		this._vcRef.detach();

		const isIfTrue: boolean = !!changes.ngCacheIf.currentValue;
		const templateRef: TemplateRef<any> = isIfTrue ? this._templateRef : this.ngCacheIfElse;

		if ( !templateRef ) return;

		const key: string = String( isIfTrue );

		if ( !this._loaded[ key ] ) {
			this._vcRef.clear();

			this._loaded[ key ] = this._vcRef.createEmbeddedView( templateRef );
			return;
		}

		this._vcRef.insert( this._loaded[ key ] );
	}

	/**
	 * @constructor
	 */
	ngOnDestroy() {
		delete this._loaded;

		this._vcRef.detach();
		this._vcRef.clear();
	}

}
