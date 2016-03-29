import * as React from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import {TodoListItem} from './TodoListItem';
import {toggleTodo} from '../actions/todos';

class TodoList extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('./todo-list.json');
    };

    componentWillUnmount() {}

    render() {
        
        const {todos, toggleTodo} = this.props;
        const onClick = () => {
            console.log('TodoList.jsx', 'font-weigth: 700', 'onClick');
        };

        return (
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <TodoListItem
                        item={todo}
                        key={'Todo-' + index}
                        onClick={onClick}></TodoListItem>
                ))}
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            todos: state.todos
        }
    },
    {
        toggleTodo
    }
)(TodoList)
