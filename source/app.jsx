import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createHashHistory} from 'history'
import {createStore, combineReducers} from 'redux'
import todos from './reducers/todos';
import * as todoActions from './actions/todos';
import visibilityFilter from './reducers/visibilityFilter';

import {TodoApp} from './components/TodoApp';

const MAIN_CONTAINER_ID = 'app';

// Creating main reducer from many others.
// Each one of them responsible for it's own part of the state tree.
const todoApp = combineReducers({
    todos,
    visibilityFilter
});
const store = createStore(todoApp);


// Adding dummy data
store.dispatch(todoActions.addTodo({
    id: 1,
    title: 'Off with your head',
    done: true
}));

store.dispatch(todoActions.addTodo({
    id: 2,
    title: 'Dance \'til you\'re dead',
    done: false
}));

store.dispatch(todoActions.addTodo({
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus in mi ut suscipit',
    done: false
}));

ReactDOM.render(
    <Provider store={store}>
        <Router history={useRouterHistory(createHashHistory)({ queryKey: false })}>
            <Route path="/">
                <IndexRoute component={TodoApp}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById(MAIN_CONTAINER_ID));

/*<Route path="tasks">
 <IndexRoute component={SearchPage}/>
 <Route path=":TaskId" component={SearchPage}/>
 </Route>*/
