import { SET_APPS } from './actions';
import { SET_APP } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_APPS:
            return action.apps;
        case SET_APP:
            state[action.app].status = true;
            return { ...state };
        default:
            return state;
    }
}