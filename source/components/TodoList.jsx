import * as React from 'react';

export class TodoList extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {}

    render() {
        let todos = [
            {
                title: `Off with your head`,
                description: '',
                done: false
            },
            {
                title: `Dance 'til you're dead`,
                description: '',
                done: false
            },
            {
                title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus in mi ut suscipit.`,
                description: '',
                done: false
            }
        ];
        return (
            <div className="todo-list">
                {todos.map((item, index) => (
                    <div className="todo-list-item" key={item.title + index}>
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
                ))}
            </div>
        );
    }
}
