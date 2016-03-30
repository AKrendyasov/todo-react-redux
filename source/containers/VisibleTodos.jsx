import * as React from 'react';
import { connect } from 'react-redux';
import * as constants from '../constants';

import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case constants.SHOW_ALL:
            return todos;
        case constants.SHOW_DONE:
            return todos.filter(t => t.done);
        case constants.SHOW_UNDONE:
            return todos.filter(t => !t.done);
    }
};

const VisibleTodos = connect(
    state => {
        return {
            todos: getVisibleTodos(state.todos, state.visibilityFilter)
        }
    },
    {}
)(TodoList);

export default VisibleTodos;
