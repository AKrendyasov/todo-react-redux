import * as React from 'react';

import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {}

    render() {
        const {todos} = this.props;

        return (
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <TodoListItem
                        item={todo}
                        key={'Todo-' + index}></TodoListItem>
                ))}
            </div>
        );
    }
}
