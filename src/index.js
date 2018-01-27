import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import Banking from './components/containers/Banking';
import Configs from './components/containers/Configs';
import Refunds from './components/containers/Refunds';
import configureStore from './configureStore';
import {isAuthenticated} from './auth';

function verifyAuth(nextState, replace){
    if(!isAuthenticated()) replace('/login');
}

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/" component={App} onEnter={verifyAuth}>
                    <IndexRoute component={Refunds}/>
                    <Route path="/banking" component={Banking} />
                    <Route path="/configs" component={Configs} />
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root'));
registerServiceWorker();