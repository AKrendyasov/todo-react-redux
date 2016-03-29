import * as constants from '../constants';

export function toggleTodo(todo) {
    return {
        type: constants.TOGGLE_TODO,
        todo
    }
}

export function addTodo(todo) {
    return {
        type: constants.ADD_TODO,
        todo
    }
}
