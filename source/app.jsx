import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history'

import {TodoApp} from './components/TodoApp';

const MAIN_CONTAINER_ID = 'app';

ReactDOM.render(
    <Router history={useRouterHistory(createHashHistory)({ queryKey: false })}>
        <Route path="/">
            <IndexRoute component={TodoApp}/>

        </Route>
    </Router>,
    document.getElementById(MAIN_CONTAINER_ID));

/*<Route path="tasks">
 <IndexRoute component={SearchPage}/>
 <Route path=":TaskId" component={SearchPage}/>
 </Route>*/