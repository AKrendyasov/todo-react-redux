import * as constants from '../constants';

export default function todo(state, action) {
    switch (action.type) {
        case constants.ADD_TODO:
            return {
                id: action.todo.id,
                title: action.todo.title,
                done: action.todo.done !== undefined ? action.todo.done : false
            };
        case constants.TOGGLE_TODO:
            if (state.id !== action.todo.id) {
                return state;
            }

            return {
                ...state,
                done: !state.done
            };
        default:
            return state;
    }
}
