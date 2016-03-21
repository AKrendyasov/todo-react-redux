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
        return hash;
    };

    renderItem = (item, index) => {
        let itemIndex = item.title + String(index);
        itemIndex = this.hashCode(itemIndex);
        return (
            <div className="todo-list-item" key={itemIndex}>
                <div className="todo-list-item__cell">
                    <input id={itemIndex}
                           type="checkbox"
                           className="ripple-checkbox"
                           defaultChecked={item.done} />
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
                                        todo-list-item__cell_delete">
                    <div className="todo-list-item__delete"
                         dangerouslySetInnerHTML={{__html: '&#10006;'}}></div>
                </div>
            </div>
        );
    };

    render() {
        let todos = [
            {
                title: "Off with your head",
                done: true
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
                <div className="todo-list__undone">
                    {todos.filter((item) => !item.done)
                        .map((item, index) => this.renderItem(item, index))}
                </div>
                <div className="todo-list__done">
                    {todos.filter((item) => item.done)
                        .map((item, index) => this.renderItem(item, index))}
                </div>
            </div>
        );
    }
}
