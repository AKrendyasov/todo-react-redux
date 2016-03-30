import * as constants from '../constants';

export function applyFilter(filter) {
    return {
        type: constants.SET_VISIBILITY_FILTER,
        filter
    }
}
