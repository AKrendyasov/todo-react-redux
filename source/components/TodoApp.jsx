import * as React from 'react';

import VisibleTodos from '../containers/VisibleTodos';
import NewTodo from './NewTodo';
import {FilterControls} from './FilterControls';

export class TodoApp extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {};

    render() {
        return (
            <div className="todo-app">
                <div className="todo-app-header">
                    ToDo
                </div>
                <VisibleTodos></VisibleTodos>
                <FilterControls></FilterControls>
                <NewTodo onClick={this.componentWillUnmount}></NewTodo>
            </div>
        );
    }
}
