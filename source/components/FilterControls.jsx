import * as React from 'react';
import * as constants from '../constants';

import FilterControlsItem from './FilterControlsItem';

export class FilterControls extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {};

    render() {
        const items = [
            {
                id: 1,
                text: 'All',
                filter: constants.SHOW_ALL,
                checked: true
            },
            {
                id: 2,
                text: 'Done',
                filter: constants.SHOW_DONE,
                checked: false
            },
            {
                id: 3,
                text: 'Not done',
                filter: constants.SHOW_UNDONE,
                checked: false
            }
        ];
        return (
            <div className="flat-radio-container">
                <div className="flat-radio blue">
                    {items.map(item => (
                        <FilterControlsItem item={item}
                                            key={'filter-' + item.id}></FilterControlsItem>
                    ))}
                </div>
            </div>
        );
    }
}
