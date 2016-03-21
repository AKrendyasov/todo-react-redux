import * as React from 'react';

export class NewTodo extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {}

    render() {
        return (
            <div className="new-todo">
                <div className="new-todo__row">
                    <input type="text"
                           placeholder="New ToDo"
                           className="new-todo__input"/>
                </div>
                <div className="new-todo__row new-todo__row_button">
                    <button className="flat-button flat-button_blue">Add new todo</button>
                </div>
            </div>
        );
    }
}
