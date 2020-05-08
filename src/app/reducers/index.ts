import { combineReducers, compose, ActionReducer } from '@ngrx/store';

/**
 * Todo 是否使用 ngrx-store-freeze 还需要进一步调研
 */
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromCount from './counter.reducer';
import * as fromLayout from './layout.reducer';

const environment = { production: false };

export interface State {
    count: number;
    layout: fromLayout.State;
}

const reducers = {
    count: fromCount.reducer,
    layout: fromLayout.reducer,
};

/**
 * 合并 reducer
 */
const developmentReducer: ActionReducer<State> = compose(
    storeFreeze,
    combineReducers
)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

/**
 * combineReducers 示例
 * @param state
 * @param action
 */
export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

/**
 * ActionReducerMap
 */
export const actionReducerMap = {
    count: fromCount.reducer,
    reducer,
};
