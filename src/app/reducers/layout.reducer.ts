/**
 * 包含 state reducer selector 的一个 reducer 示例
 */

import * as layout from './layout.action';

export interface State {
    showSidenav: boolean;
}

const initialState: State = {
    showSidenav: false,
};

export function reducer(state = initialState, action: layout.Actions): State {
    switch (action.type) {
        case layout.ActionTypes.CLOSE_SIDENAV:
            return {
                showSidenav: false,
            };

        case layout.ActionTypes.OPEN_SIDENAV:
            return {
                showSidenav: true,
            };

        default:
            return state;
    }
}

export const getShowSidenav = (state: State) => state.showSidenav;
