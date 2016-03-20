import * as React from 'react';

import {TodoList} from './TodoList';

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
            </div>
        );
    }
}
