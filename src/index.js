import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import Banking from './containers/Banking';
import Configs from './containers/Configs';
import Refunds from './containers/Refunds';
import configureStore from './configureStore';
import {isAuthenticated} from './auth';
import {ROOT_PATH, BANKING_PATH, CONFIGS_PATH, LOGIN_PATH} from './constants/RouterConstants';

function verifyAuth(nextState, replace){
    if(!isAuthenticated()) replace('/login');
}

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path={LOGIN_PATH} component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path={ROOT_PATH} component={App} onEnter={verifyAuth}>
                    <IndexRoute component={Refunds}/>
                    <Route path={BANKING_PATH} component={Banking} />
                    <Route path={CONFIGS_PATH} component={Configs} />
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root'));
registerServiceWorker();