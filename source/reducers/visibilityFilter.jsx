import * as constants from '../constants'

export default function visibilityFilter (state = constants.SHOW_ALL, action) {
    switch (action.type) {
        case constants.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
