import * as React from 'react';

import {TodoList} from './TodoList';
import {NewTodo} from './NewTodo';

export class TodoApp extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {}

    render() {
        return (
            <div className="todo-app">
                <div className="todo-app-header">
                    ToDo
                </div>
                <TodoList></TodoList>
                <NewTodo></NewTodo>
            </div>
        );
    }
}
