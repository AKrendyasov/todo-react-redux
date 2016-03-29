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

export function deleteTodo(todo) {
    return {
        type: constants.DELETE_TODO,
        todo
    }
}
