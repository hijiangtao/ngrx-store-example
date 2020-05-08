/**
 * 在组件中 DI store，然后通过 select 选中相应状态，状态变更通过 dispatch 派发
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../reducers/counter.actions';
import { State } from '../reducers';

@Component({
    selector: 'app-my-counter',
    templateUrl: './my-counter.component.html',
    styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {
    count$: Observable<number>;

    /**
     * 在组件中注入使用
     * @param store Store
     */
    constructor(private store: Store<State>) {
        /**
         * 选中 count
         */
        this.count$ = store.pipe(select('count'));
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }
}
