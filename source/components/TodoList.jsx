import * as React from 'react';

import axios from 'axios';

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
                title: "Off with your head",
                done: false
            },
            {
                title: "Dance 'til you're dead",
                done: false
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus in mi ut suscipit.",
                done: false
            }
        ];
        return (
            <div className="todo-list">
                {todos.map((item, index) => (
                    <div className="todo-list-item" key={item.title + index}>
                        <div className="todo-list-item__cell">
                            <input id={item.title + index}
                                   type="checkbox"
                                   className="ripple-checkbox" />
                            <label htmlFor={item.title + index}
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
                                        todo-list-item__cell_delete">
                            <div className="todo-list-item__delete"
                                 dangerouslySetInnerHTML={{__html: '&#10006;'}}></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
