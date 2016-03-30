import * as React from 'react';
import {connect} from 'react-redux'

import {deleteTodo, toggleTodo} from '../actions/todos';

class TodoListItem extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {};

    /**
     * Hash function
     *
     * @source http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
     * @returns {number}
     */
    hashCode = (str) => {
        let hash = 0;
        if (str.length == 0) return hash;
        for (let i = 0; i < str.length; i++) {
            let char = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };

    render() {
        const {item, deleteTodo, toggleTodo} = this.props;

        const itemIndex = 'TodoListItem-' + this.hashCode(item.title) + item.id;

        const deleteThisTodo = () => {
            deleteTodo(item)
        };

        const toggleThisTodo = () => {
            toggleTodo(item);
        };

        return (
            <div className="todo-list-item">
                <div className="todo-list-item__cell">
                    <input id={itemIndex}
                           type="checkbox"
                           className="ripple-checkbox"
                           onChange={toggleThisTodo}
                           checked={item.done} />
                    <label htmlFor={itemIndex}
                           className="ripple-checkbox-label">
                                <span className="ripple-checkbox-label__cell">
                                    <span className="ripple-checkbox-symbol"></span>
                                </span>
                                <span className="ripple-checkbox-label__cell">
                                    {item.title}
                                    <ins><i>{item.title}</i></ins>
                                </span>
                    </label>
                </div>
                <div className="todo-list-item__cell
                                todo-list-item__cell_delete"
                     onClick={deleteThisTodo}>
                    <div className="todo-list-item__delete"
                         dangerouslySetInnerHTML={{__html: '&#10006;'}}></div>
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
        deleteTodo,
        toggleTodo
    }
)(TodoListItem);
