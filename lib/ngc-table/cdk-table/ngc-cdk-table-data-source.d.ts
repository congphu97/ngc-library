import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
export declare class NgcCdkTableDataSource<T> extends DataSource<T> {
    readonly _data$: BehaviorSubject<T[]>;
    get data(): T[];
    set data(data: T[]);
    /**
     * @return {Observable}
     */
    connect(): Observable<any[]>;
    /**
     * @return {void}
     */
    disconnect(): void;
}
