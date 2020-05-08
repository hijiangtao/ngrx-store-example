/**
 * Reducers规定了行为对应的具体状态变化。它是纯函数，通过接收前一个状态和派发行为返回新对象作为下一个状态的方式来改变状态，新对象通常用Object.assign和扩展语法来实现。
 */

import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

// tslint:disable-next-line: variable-name
const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
