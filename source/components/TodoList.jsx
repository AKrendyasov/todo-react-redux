import * as React from 'react';

import axios from 'axios';

import {TodoListItem} from './TodoListItem';

export class TodoList extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('./todo-list.json');
    };

    componentWillUnmount() {}

    render() {
        let todos = [
            {
                id: 1,
                title: "Off with your head",
                done: true
            },
            {
                id: 2,
                title: "Dance 'til you're dead",
                done: false
            },
            {
                id: 3,
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus in mi ut suscipit.",
                done: false
            }
        ];
        return (
            <div className="todo-list">
                <div className="todo-list__undone">
                    {todos.filter((item) => !item.done)
                        .map((todo, index) => (
                            <TodoListItem item={todo} key={'Todo-Undone' + index}></TodoListItem>
                        ))}
                </div>
                <div className="todo-list__done">
                    {todos.filter((item) => item.done)
                        .map((todo, index) => (
                            <TodoListItem item={todo} key={'Todo-Done' + index}></TodoListItem>
                        ))}
                </div>
            </div>
        );
    }
}
