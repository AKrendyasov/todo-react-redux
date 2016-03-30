import * as React from 'react';
import {connect} from 'react-redux';

import {applyFilter} from '../actions/filters';

class FilterControlsItem extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {};

    componentWillUnmount() {};

    render() {
        const {item, applyFilter} = this.props;

        const setFilter = () => {
            applyFilter(item.filter);
        };

        return (
            <div className="flat-radio-item">
                <input id={'filter-' + item.id}
                       name="filter-radio"
                       type="radio"
                       onChange={setFilter}
                       defaultChecked={item.checked}/>
                <label htmlFor={'filter-' + item.id}>
                    {item.text}
                </label>
            </div>
        );
    }
}

export default connect(
    state => {
        return {}
    },
    {
        applyFilter
    }
)(FilterControlsItem)
