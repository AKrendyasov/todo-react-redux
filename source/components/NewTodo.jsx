import * as React from 'react';
import {connect} from 'react-redux'

import {addTodo} from '../actions/todos';

class NewTodo extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {}

    render() {
        const {addTodo} = this.props;

        const addNewTodo = () => {
            const title = this.refs.newTodoTitle.value;
            if (title && title.length > 0) {
                addTodo({
                    id: +(new Date()),
                    title
                });
                this.refs.newTodoTitle.value = '';
            }
        };
        return (
            <div className="new-todo">
                <div className="new-todo__row">
                    <input ref="newTodoTitle"
                           type="text"
                           placeholder="New ToDo"
                           className="new-todo__input"/>
                </div>
                <div className="new-todo__row new-todo__row_button">
                    <button onClick={addNewTodo} className="flat-button flat-button_blue">Add new todo</button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {}
    },
    {
        addTodo
    }
)(NewTodo);
